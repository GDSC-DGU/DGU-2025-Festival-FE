import { create } from "zustand";
import type { NoticeItem } from "@/types/notice";
import { persist } from "zustand/middleware";

interface NoticeStore {
  noticeList: NoticeItem[]; // 전체 리스트
  previewNotices: NoticeItem[]; // 상위 3개
  setNoticeList: (list: NoticeItem[]) => void;
  setPreviewNotices: (list: NoticeItem[]) => void;
}

export const useNoticeStore = create<NoticeStore>()(
  persist(
    (set) => ({
      noticeList: [],
      previewNotices: [],
      setNoticeList: (list) => set({ noticeList: list }),
      setPreviewNotices: (list) => set({ previewNotices: list }),
    }),
    {
      name: "notice-list-storage", // localStorage key
    }
  )
);
