import { adminInstance } from "@/api/instance";
import { sendRequest } from "@/api/request";

export const updateBoothStatus = (
  status: "AVAILABLE" | "FULL" | "END",
  payload?: Record<string, any>
) => {
  const url = `/pub?pubStatus=${status}`;
  return sendRequest<boolean>(
    adminInstance,
    "PATCH",
    url,
    payload ?? {} // 빈 객체라도?
  );
};
