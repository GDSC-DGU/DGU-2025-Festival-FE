import { useNavigate } from "react-router-dom";
import TopBar from "@/components/topbar/TopBar";
import {
  Container,
  LoginContainer,
  InputContainer,
  Input,
  ErrorMessage,
} from "./AdminPage.styles";
import SubmitButton from "@/components/button/SubmitButton";
import { loginAPI } from "@/api/admin/admin";
import { useState } from "react";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    const payload = {
      loginId: username,
      password: password,
      role: "ADFESTA",
    };

    console.log("payload: ", payload);

    try {
      const response = await loginAPI(payload);
      console.log("response: ", response);
      if (response.success) {
        if (payload.role == "ADFESTA") {
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
        <InputContainer
        // onSubmit={(e) => {
        //   e.preventDefault();
        //   handleLogin();
        // }}
        >
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
