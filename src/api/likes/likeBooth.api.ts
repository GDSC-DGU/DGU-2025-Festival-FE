import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";

// interface LikeBoothRequest {
//   booth_id: number;
// }

// interface LikeBoothResponse {
//   booth_id: number;
//   new_likes: number;
// }

export const likeBooth = (boothId: number) =>
    sendRequest<{ booth_id: number; new_likes: number }, { booth_id: number }>(
      lambdaInstance,
      "POST",
      "/booths/likes",
      { booth_id: boothId }
    );