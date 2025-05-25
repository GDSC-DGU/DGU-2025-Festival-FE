import { sendRequest } from "../request";
import { lambdaInstance, adminInstance } from "../instance";
import { useNoticeStore } from "@/stores/useNoticeStore";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import type { NoticeDetailType } from "@/pages/notice-detail/types/noticeDetail";
export const NoticeListAPI = async () => {
  const response = await sendRequest<NoticeItemType[]>(
    lambdaInstance,
    "GET",
    "/notices"
  );

  if (response.success) {
    useNoticeStore.getState().setNoticeList(response.data);
    const data = response.data.slice(0, 3);
    useNoticeStore.getState().setPreviewNotices(data);
    return response.data;
  } else {
    return response.error;
  }
};

export const NoticePostAPI = async (formData: FormData) => {
  const response = await sendRequest<string>(
    adminInstance,
    "POST",
    `/festa/notices`,
    formData
  );

  if (response.success) {
    await NoticeListAPI();
    return { success: true };
  } else {
    return { success: false };
  }
};

// interface NoticePatchRequest {
//   noticeId: number;
//   title: string;
//   description: string;
//   images: File[];
// }

export const NoticePatchAPI = async (formData: FormData) => {
  const response = await sendRequest<string>(
    adminInstance,
    "PATCH",
    `/festa/notices/${formData.get("noticeId")}`,
    formData,
    { "Content-Type": "multipart/form-data" }
  );

  if (response.success) {
    await NoticeListAPI();
    return { success: true };
  } else {
    return { success: false };
  }
};

export const NoticeDeleteAPI = async (noticeId: number) => {
  const response = await sendRequest<string>(
    adminInstance,
    "DELETE",
    `/festa/notices/${noticeId}`
  );

  if (response.data) {
    const newList = await NoticeListAPI();
    return { success: true, newList };
  } else {
    return { success: false };
  }
};

export const NoticeDetailAPI = async (noticeId: number) => {
  const response = await sendRequest<NoticeDetailType>(
    lambdaInstance,
    "GET",
    `/notices/${noticeId}`
  );

  if (response.data) {
    useNoticeStore.getState().setNoticeDetail(response.data);
    return response.data;
  } else {
    return response.error;
  }
};
