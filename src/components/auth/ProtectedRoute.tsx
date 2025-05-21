import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/useAuthStore';

interface Props {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
  const isLoggedIn = useAuthStore((state) => state.isAdminLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
