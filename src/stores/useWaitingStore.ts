import { create } from 'zustand';

export interface WaitingData {
  boothId: string;
  phone: string;
}

interface WaitingState {
  activeWaiting: WaitingData | null;

  addWaiting: (data: WaitingData) => void;
  cancelWaiting: (boothId: string) => void;
}

export const useWaitingStore = create<WaitingState>((set) => ({
  activeWaiting: null,

  addWaiting: (data) => set({ activeWaiting: data }),

  cancelWaiting: (boothId) =>
    set((state) => ({
      activeWaiting:
        state.activeWaiting?.boothId === boothId ? null : state.activeWaiting,
    })),
}));
