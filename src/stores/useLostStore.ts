import { create } from "zustand";
import type { LostItemType } from "@/pages/notice/types/lostItems";

interface LostState {
  lostList: LostItemType[];
  setLostList: (items: LostItemType[]) => void;
}

export const useLostStore = create<LostState>((set) => ({
  lostList: [],
  setLostList: (items) => set({ lostList: items }),
}));
