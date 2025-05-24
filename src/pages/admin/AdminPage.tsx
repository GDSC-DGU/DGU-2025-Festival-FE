import { useNavigate } from "react-router-dom";
import TopBar from "@/components/topbar/TopBar";
import {
  Container,
  LoginContainer,
  InputContainer,
  Input,
  ErrorMessage,
  RoleContainer,
  RoleBox,
  RoleText,
} from "./AdminPage.styles";
import SubmitButton from "@/components/button/SubmitButton";
import { loginAPI } from "@/api/admin/admin";
import { useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";
import { Role } from "./types/role";
import PubRoleIcon from "@/assets/icons/pub-role.svg";
import FestaRoleIcon from "@/assets/icons/festa-role.svg";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { role } = useAuthStore();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (!selectedRole) {
      setError("역할을 선택해주세요.");
      return;
    }

    const payload = {
      loginId: username,
      password: password,
      role: selectedRole,
    };

    try {
      const response = await loginAPI(payload);
      if (response.success) {
        if (role === ("ADFESTA" as Role)) {
          navigate("/admin/notice");
        } else {
          navigate("/admin/booth");
        }
      } else {
        setError("로그인에 실패했습니다.");
        return;
      }
    } catch (error: unknown) {
      console.error("로그인 실패:", error);
      setError("서버 오류가 발생했습니다.");
    }
  };

  return (
    <Container>
      <TopBar title="관리자 로그인" />

      <LoginContainer>
        <RoleContainer>
          <RoleBox
            $selected={selectedRole === Role.ADFESTA}
            onClick={() => setSelectedRole(Role.ADFESTA)}
          >
            <img src={FestaRoleIcon} width={24} height={24} />
            <RoleText>축제 기획단</RoleText>
          </RoleBox>
          <RoleBox
            $selected={selectedRole === Role.ADPUB}
            onClick={() => setSelectedRole(Role.ADPUB)}
          >
            <img src={PubRoleIcon} width={24} height={24} />
            <RoleText>부스 운영진</RoleText>
          </RoleBox>
        </RoleContainer>
        <InputContainer>
          <Input
            placeholder="아이디를 입력해주세요"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="비밀번호를 입력해주세요"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <SubmitButton onClick={handleLogin} title="로그인" />
        </InputContainer>
      </LoginContainer>
    </Container>
  );
};

export default AdminLoginPage;
