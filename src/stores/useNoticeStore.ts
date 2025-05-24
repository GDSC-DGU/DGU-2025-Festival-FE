import { create } from "zustand";
import type { NoticeItemType } from "@/pages/notice/types/noticeItems";
import { persist } from "zustand/middleware";
import type { NoticeDetailType } from "@/pages/notice-detail/types/noticeDetail";

interface NoticeStore {
  noticeList: NoticeItemType[]; // 전체 리스트
  previewNotices: NoticeItemType[]; // 상위 3개
  noticeDetail: NoticeDetailType | null;

  setNoticeList: (list: NoticeItemType[]) => void;
  setPreviewNotices: (list: NoticeItemType[]) => void;
  setNoticeDetail: (detail: NoticeDetailType) => void;
}

export const useNoticeStore = create<NoticeStore>()(
  persist(
    (set) => ({
      noticeList: [],
      previewNotices: [],
      noticeDetail: null,
      setNoticeList: (list) => set({ noticeList: list }),
      setPreviewNotices: (list) => set({ previewNotices: list }),
      setNoticeDetail: (detail) => set({ noticeDetail: detail }),
    }),
    {
      name: "notice-storage", // localStorage key
    }
  )
);
