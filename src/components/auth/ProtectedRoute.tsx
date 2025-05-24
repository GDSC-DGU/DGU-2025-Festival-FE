import { Navigate } from "react-router-dom";
import { useAuthStore } from "@/stores/useAuthStore";
import { Role } from "@/pages/admin/types/role";

interface Props {
  children: React.ReactNode;
  allowedRoles?: Role[];
}

const ProtectedRoute = ({ children, allowedRoles }: Props) => {
  const { isAdminLoggedIn, role } = useAuthStore();

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin" replace />;
  }

  // ✅ role이 허용된 목록에 없으면 접근 차단
  if (allowedRoles && !allowedRoles.includes(role!)) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
