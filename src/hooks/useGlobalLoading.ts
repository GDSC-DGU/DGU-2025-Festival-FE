import { create } from "zustand";

interface GlobalLoadingState {
  loadingCount: number;
  isGlobalLoading: boolean;
  startGlobalLoading: () => void;
  stopGlobalLoading: () => void;
}

export const useGlobalLoading = create<GlobalLoadingState>((set) => ({
  loadingCount: 0,
  isGlobalLoading: false,
  startGlobalLoading: () =>
    set((state) => ({
      loadingCount: state.loadingCount + 1,
      isGlobalLoading: true,
    })),
  stopGlobalLoading: () =>
    set((state) => {
      const newCount = state.loadingCount - 1;
      return {
        loadingCount: newCount,
        isGlobalLoading: newCount > 0,
      };
    }),
}));
