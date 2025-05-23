import { create } from "zustand";
import type { NoticeItem } from "@/types/notice";
import { persist } from "zustand/middleware";

interface NoticeState {
  noticeList: NoticeItem[];
  setNoticeList: (list: NoticeItem[]) => void;
}

export const useNoticeStore = create<NoticeState>()(
  persist(
    (set) => ({
      noticeList: [],
      setNoticeList: (list) => set({ noticeList: list }),
    }),
    {
      name: "notice-list",
    }
  )
);
