import { create } from 'zustand';
import { dummyWaitingBooths } from '../../data/waitings';

export type TabType = 'available' | 'full';
export type ModalType = 'call' | 'visit' | 'delete' | 'closeBooth' | null;

export interface WaitingBooth {
  id: string;
  name: string;
  waitingCount: number;
  isCalling: boolean;
  calledAt?: string;
  phone: string;
  order?: number;
  visited?: boolean;
  cancelled?: boolean;
}

interface BoothAdminState {
  tab: TabType;
  setTab: (tab: TabType) => void;

  waitingBooths: WaitingBooth[];
  selectedBooth: WaitingBooth | null;
  modalType: ModalType;

  phoneModalBooth: WaitingBooth | null;
  setSelectedBooth: (booth: WaitingBooth | null) => void;
  openModal: (type: ModalType, booth: WaitingBooth) => void;
  closeModal: () => void;
  openPhoneModal: (booth: WaitingBooth) => void;
  closePhoneModal: () => void;

  confirmCall: (id: string) => void;
  confirmVisit: (id: string) => void;
  confirmDelete: (id: string) => void;
  confirmCloseBooth: (reason: string) => void;

  getBoothOrder: (id: string) => number | undefined;
}

export const useBoothAdminStore = create<BoothAdminState>((set, get) => ({
  tab: 'available',
  setTab: (tab) => set({ tab }),

  waitingBooths: dummyWaitingBooths,
  selectedBooth: null,
  modalType: null,
  phoneModalBooth: null,

  setSelectedBooth: (booth) => set({ selectedBooth: booth }),
  openModal: (type, booth) => set({ modalType: type, selectedBooth: booth }),
  closeModal: () => set({ modalType: null, selectedBooth: null }),
  openPhoneModal: (booth) => set({ phoneModalBooth: booth }),
  closePhoneModal: () => set({ phoneModalBooth: null }),

  confirmCall: (id) => {
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, isCalling: true, calledAt: new Date().toISOString() } : b
    );
    set({ waitingBooths: updated });
  },

  confirmVisit: (id) => {
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, visited: true } : b
    );
    set({ waitingBooths: updated });
  },

  confirmDelete: (id) => {
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, cancelled: true } : b
    );
    set({ waitingBooths: updated });
  },

  confirmCloseBooth: (reason) => {
    console.log(`부스를 종료합니다. 사유: ${reason}`);
  },

  getBoothOrder: (id) => {
    const booth = get().waitingBooths.find((b) => b.id === id);
    return booth?.order;
  },
}));
