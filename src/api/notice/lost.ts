import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";
import type { LostItemType } from "@/pages/notice/types/lostItems";
import type { LostDetailType } from "@/pages/lost-detail/types/lostDetails";

interface LostListResponse {
  scope: string;
  item_lists: LostItemType[];
}

export const LostListAPI = async () => {
  return sendRequest<LostListResponse>(lambdaInstance, "GET", "/losts");
};

export const LostDetailAPI = async (lostId: number) => {
  return sendRequest<LostDetailType>(lambdaInstance, "GET", `/losts/${lostId}`);
};
