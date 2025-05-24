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
    return response.data;
  } else {
    return response.error;
  }
};
