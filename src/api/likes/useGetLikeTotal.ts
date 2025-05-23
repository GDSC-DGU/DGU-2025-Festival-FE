import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";



interface LikeTotalResponse {
  success: boolean;
  data: {
    booth_id: number;
    new_likes: number;
  };
  error: unknown;
}

export const getLikeTotal = async (boothId: number): Promise<LikeTotalResponse> => {
    const res = await sendRequest<{ member: string; score: number }, never>(
      lambdaInstance,
      "GET",
      `/booths/likes/${boothId}`
    );
    return {
      success: res.success,
      data: {
        booth_id: boothId,
        new_likes: res.data ? res.data.score : 0
      },
      error: res.error,
    };
  };
  