import { sendRequest } from "../request";
import { adminInstance } from "../instance";

interface LoginResponse {
  accessToken: string;
}

interface LoginPayload {
  loginId: string;
  password: string;
  role: string;
}

export const adminLoginAPI = (payload: LoginPayload) => {
  return sendRequest<LoginResponse>(adminInstance, "POST", "/login", payload);
};
