import { useAuthStore } from "@/stores/useAuthStore";
import { sendRequest } from "../request";
import { adminInstance } from "../instance";
import { Role } from "@/pages/admin/types/role";

interface LoginResponse {
  accessToken: string;
}

interface LoginPayload {
  loginId: string;
  password: string;
  role: string;
}

export const loginAPI = async (payload: LoginPayload) => {
  const response = await sendRequest<LoginResponse>(
    adminInstance,
    "POST",
    "/login",
    payload
  );

  if (response.success) {
    useAuthStore
      .getState()
      .login(response.data.accessToken, payload.role as Role);
    return response;
  } else {
    return response;
  }
};
