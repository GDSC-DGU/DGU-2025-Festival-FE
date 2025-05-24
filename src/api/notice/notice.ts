import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";
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
    console.log(`전체 공지사항 불러오기 성공: `, response.data);
    useNoticeStore.getState().setNoticeList(response.data);
    const data = response.data.slice(0, 3);
    useNoticeStore.getState().setPreviewNotices(data);
    return response.data;
  } else {
    return response.error;
  }
};

export const NoticeDetailAPI = async (noticeId: number) => {
  const response = await sendRequest<NoticeDetailType>(
    lambdaInstance,
    "GET",
    `/notices/${noticeId}`
  );

  if (response.data) {
    console.log(`공지사항 디테일 불러오기 성공: `, response.data);
    useNoticeStore.getState().setNoticeDetail(response.data);
    return response.data;
  } else {
    return response.error;
  }
};
