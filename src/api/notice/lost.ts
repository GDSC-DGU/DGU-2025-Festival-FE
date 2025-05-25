import { sendRequest } from "../request";
import { lambdaInstance, adminInstance } from "../instance";
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
    useLostStore.getState().setLostDetail(response.data);
    return response.data;
  } else {
    return response.error;
  }
};

export const LostPostAPI = async (formData: FormData) => {
  const response = await sendRequest<string>(
    adminInstance,
    "POST",
    `/festa/losts`,
    formData
  );

  if (response.success) {
    await LostListAPI();
    return { success: true };
  } else {
    return { success: false };
  }
};

export const LostPatchAPI = async (formData: FormData) => {
  const response = await sendRequest<string>(
    adminInstance,
    "PATCH",
    `/festa/losts/${formData.get("lostId")}`,
    formData,
    { "Content-Type": "multipart/form-data" }
  );

  if (response.success) {
    await LostListAPI();
    return { success: true };
  } else {
    return { success: false };
  }
};

export const LostDeleteAPI = async (lostId: number) => {
  const response = await sendRequest<string>(
    adminInstance,
    "DELETE",
    `/festa/losts/${lostId}`
  );

  if (response.data) {
    const newList = await LostListAPI();
    return { success: true, newList };
  } else {
    return { success: false };
  }
};
