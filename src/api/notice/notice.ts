import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";
import { useNoticeStore } from "@/stores/useNoticeStore";
import type { NoticeItem } from "@/types/notice";

export const NoticeListAPI = async () => {
  const response = await sendRequest<NoticeItem[]>(
    lambdaInstance,
    "GET",
    "/notices"
  );

  if (response.success) {
    console.log(`전체 공지사항 불러오기 성공: `, response.data);
    useNoticeStore.getState().setNoticeList(response.data);
    const data = response.data.slice(0, 3);
    useNoticeStore.getState().setNoticeList(data);
    return response.data;
  } else {
    return response.error;
  }
};
