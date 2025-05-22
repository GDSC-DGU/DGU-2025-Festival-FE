import { useAuthStore } from "@/stores/useAuthStore";
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
import { useState } from "react";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      setError("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    // 임시 로그인 확인 로직
    if (username === "admin" && password === "1234") {
      login(); // 전역 로그인 처리
      navigate("/admin/booth");
    } else {
      setError("아이디 또는 비밀번호를 확인해주세요.");
    }
  };

  return (
    <Container>
      <TopBar title="관리자 로그인" />
      <LoginContainer>
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
        </InputContainer>

        <SubmitButton onClick={handleLogin} title="로그인" />
      </LoginContainer>
    </Container>
  );
};

export default AdminLoginPage;
