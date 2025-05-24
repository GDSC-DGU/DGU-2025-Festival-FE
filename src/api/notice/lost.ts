import { sendRequest } from "../request";
import { lambdaInstance } from "../instance";
import type { LostItemType } from "@/pages/notice/types/lostItems";
import { useLostStore } from "@/stores/useLostStore";
import type { LostDetailType } from "@/pages/lost-detail/types/lostDetails";

interface LostListResponse {
  scope: string;
  item_lists: LostItemType[];
}

export const LostListAPI = async () => {
  const response = await sendRequest<LostListResponse>(
    lambdaInstance,
    "GET",
    "/losts"
  );

  if (response.success) {
    console.log(`전체 분실물 불러오기 성공: `, response.data);
    useLostStore.getState().setLostList(response.data.item_lists);
    return response.data;
  } else {
    return response.error;
  }
};

export const LostDetailAPI = async (lostId: number) => {
  const response = await sendRequest<LostDetailType>(
    lambdaInstance,
    "GET",
    `/losts/${lostId}`
  );

  if (response.success) {
    console.log(`분실물 디테일 불러오기 성공: `, response.data);
    useLostStore.getState().setLostDetail(response.data);
    return response.data;
  } else {
    return response.error;
  }
};
