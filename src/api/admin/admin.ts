import { useAuthStore } from "@/stores/useAuthStore";
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

export const loginAPI = async (payload: LoginPayload) => {
  console.log("loginAPI 호출");
  const response = await sendRequest<LoginResponse>(
    adminInstance,
    "POST",
    "",
    payload
  );

  console.log(response);

  if (response.success) {
    useAuthStore.getState().login(response.data.accessToken);
    return response;
  } else {
    alert(`로그인 실패: ${response.error}`);
    return response;
  }
};
