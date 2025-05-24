import { create } from "zustand";
import type { LostItemType } from "@/pages/notice/types/lostItems";
import type { LostDetailType } from "@/pages/lost-detail/types/lostDetails";

interface LostState {
  lostList: LostItemType[];
  setLostList: (items: LostItemType[]) => void;
  lostDetail: LostDetailType | null;
  setLostDetail: (detail: LostDetailType) => void;
}

export const useLostStore = create<LostState>((set) => ({
  lostList: [],
  setLostList: (items) => set({ lostList: items }),
  lostDetail: null,
  setLostDetail: (detail) => set({ lostDetail: detail }),
}));
