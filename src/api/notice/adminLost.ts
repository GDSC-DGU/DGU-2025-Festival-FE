import { sendRequest } from "@/api/request";
import { adminInstance } from "@/api/instance";

export const LostPostAPI = async (formData: FormData) => {
  return sendRequest<string>(adminInstance, "POST", `/festa/losts`, formData);
};

export const LostPatchAPI = async (formData: FormData) => {
  return sendRequest<string>(adminInstance, "PATCH", `/festa/losts`, formData, {
    "Content-Type": "multipart/form-data",
  });
};

export const LostDeleteAPI = async (lostId: number) => {
  return sendRequest<string>(adminInstance, "DELETE", `/festa/losts/${lostId}`);
};
