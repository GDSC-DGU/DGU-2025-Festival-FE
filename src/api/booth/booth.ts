import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";

interface BoothRankingResponse {
  booth_id: string;
  score: string;
}

export const boothRankingAPI = async () => {
  const response = await sendRequest<BoothRankingResponse[]>(
    lambdaInstance,
    "GET",
    "/booths/ranking"
  );

  if (response.success) {
    console.log(`부스 랭킹 불러오기 성공: `, response.data);
    return response.data;
  } else {
    return response.error;
  }
};
