import { useAuthStore } from '@/stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

const AdminLoginPage = () => {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/admin/booth');
  };

  return (
    <div>
      <h2>관리자 로그인</h2>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default AdminLoginPage;
