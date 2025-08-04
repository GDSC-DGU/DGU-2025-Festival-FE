import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import type { NoticeDetailType } from "@/pages/notice-detail/types/noticeDetail";

export const NoticeListAPI = async () => {
  return sendRequest<NoticeItemType[]>(lambdaInstance, "GET", "/notices");
};

export const NoticeDetailAPI = async (noticeId: number) => {
  const res = await sendRequest<NoticeDetailType>(
    lambdaInstance,
    "GET",
    `/notices/${noticeId}`
  );
  if (res.success) return res.data;
  throw new Error("공지사항 정보를 불러오는데 실패했습니다.");
};
