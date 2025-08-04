import { sendRequest } from "@/api/request";
import { lambdaInstance } from "@/api/instance";
import type { LikeBoothResponse, LikeTotalResponse } from "./likeBoothTypes";

// 좋아요 요청
export const likeBooth = (boothId: number) =>
  sendRequest<LikeBoothResponse, { booth_id: number }>(
    lambdaInstance,
    "POST",
    "/booths/likes",
    { booth_id: boothId }
  );

// 좋아요 수 조회
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
      new_likes: res.data ? res.data.score : 0,
    },
    error: res.error,
  };
};
