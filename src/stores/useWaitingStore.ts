import { create } from 'zustand';

export interface WaitingData {
  boothId: string;
  people: number;
  phone: string;
  name?: string;        
  department?: string;  
}

interface WaitingState {
  waitingList: WaitingData[];
  activeWaiting: WaitingData | null;

  addWaiting: (data: WaitingData) => void;
  cancelWaiting: (boothId: string) => void;
  confirmVisit: (boothId: string) => void;
}

export const useWaitingStore = create<WaitingState>((set) => ({
  waitingList: [],
  activeWaiting: null,

  addWaiting: (data) =>
    set((state) => ({
      waitingList: [...state.waitingList, data],
      activeWaiting: data,
    })),

  cancelWaiting: (boothId) =>
    set((state) => ({
      waitingList: state.waitingList.filter((w) => w.boothId !== boothId),
      activeWaiting:
        state.activeWaiting?.boothId === boothId ? null : state.activeWaiting,
    })),

  confirmVisit: (boothId) => {
    console.log(`Booth ${boothId} 방문 확정`);
    // TODO: 방문 확정 처리 API 연결 예정
  },
}));
