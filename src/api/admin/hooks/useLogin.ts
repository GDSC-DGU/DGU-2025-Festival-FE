import { useMutation } from "@tanstack/react-query";
import { adminLoginAPI } from "../admin";
import { useAuthStore } from "@/stores/useAuthStore";
import type { Role } from "@/pages/admin/types/role";

interface LoginPayload {
  loginId: string;
  password: string;
  role: string;
}

export const useAdminLogin = () => {
  const login = useAuthStore((state) => state.login);

  return useMutation({
    mutationFn: (payload: LoginPayload) => adminLoginAPI(payload),
    onSuccess: (response, variables) => {
      if (response.success) {
        login(response.data.accessToken, variables.role as Role);
      }
    },
  });
};
