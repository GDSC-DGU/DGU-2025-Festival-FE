import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";

interface NoticeListResponse {
  booth_id: string;
  score: string;
}

export const NoticeListAPI = async () => {
  const response = await sendRequest<NoticeListResponse[]>(
    lambdaInstance,
    "GET",
    "/notices"
  );

  if (response.success) {
    console.log(`전체 공지사항 불러오기 성공: `, response.data);
    return response.data;
  } else {
    return response.error;
  }
};
