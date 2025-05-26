import { create } from "zustand";

interface ActiveWaiting {
  boothId: string;
  phone: string;
}

interface WaitingState {
  activeWaiting: ActiveWaiting | null;
  cancelledBoothId: string | null;

  addWaiting: (data: ActiveWaiting) => void;
  cancelWaiting: (boothId: string) => void;
  setCancelledBooth: (id: string | null) => void;
}

export const useWaitingStore = create<WaitingState>((set) => ({
  activeWaiting: null,
  cancelledBoothId: null,

  addWaiting: (data) =>
    set({ activeWaiting: data, cancelledBoothId: null }),

  cancelWaiting: (boothId) =>
    set({ activeWaiting: null, cancelledBoothId: boothId }),

  setCancelledBooth: (id) => set({ cancelledBoothId: id }),
}));
