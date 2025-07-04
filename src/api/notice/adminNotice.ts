import { sendRequest } from "@/api/request";
import { adminInstance } from "@/api/instance";

export const NoticePostAPI = async (formData: FormData) => {
  return sendRequest<string>(adminInstance, "POST", `/festa/notices`, formData);
};

export const NoticePatchAPI = async (formData: FormData) => {
  return sendRequest<string>(
    adminInstance,
    "PATCH",
    `/festa/notices`,
    formData,
    {
      "Content-Type": "multipart/form-data",
    }
  );
};

export const NoticeDeleteAPI = async (noticeId: number) => {
  return sendRequest<string>(
    adminInstance,
    "DELETE",
    `/festa/notices/${noticeId}`
  );
};
