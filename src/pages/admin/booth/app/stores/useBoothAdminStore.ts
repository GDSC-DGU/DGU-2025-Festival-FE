import { create } from 'zustand';
import { adminInstance } from '@/api/instance';
import { sendRequest } from '@/api/request';

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
  fetchWaitingState: () => Promise<void>;
  fetchBooths: () => Promise<void>;

  getBoothOrder: (id: string) => number | undefined;
}

export const useBoothAdminStore = create<BoothAdminState>((set, get) => ({
  tab: 'available',
  setTab: (tab) => set({ tab }),

  waitingBooths: [],
  selectedBooth: null,
  modalType: null,
  phoneModalBooth: null,

  setSelectedBooth: (booth) => set({ selectedBooth: booth }),
  openModal: (type, booth) => set({ modalType: type, selectedBooth: booth }),
  closeModal: () => set({ modalType: null, selectedBooth: null }),
  openPhoneModal: (booth) => set({ phoneModalBooth: booth }),
  closePhoneModal: () => set({ phoneModalBooth: null }),

  confirmCall: async (id: string) => {
    await sendRequest(adminInstance, 'POST', '/pub/call', { reserveId: id });
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, isCalling: true, calledAt: new Date().toISOString() } : b
    );
    set({ waitingBooths: updated });
  },
  
  confirmVisit: async (id: string) => {
    await sendRequest(adminInstance, 'PATCH', '/pub/reserve', { reserveId: id });
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, visited: true } : b
    );
    set({ waitingBooths: updated });
  },
  
  confirmDelete: async (id: string) => {
    await sendRequest(adminInstance, 'DELETE', '/pub', { reserveId: id });
    const updated = get().waitingBooths.filter((b) => b.id !== id);
    set({ waitingBooths: updated });
  },

  getBoothOrder: (id) => {
    const booth = get().waitingBooths.find((b) => b.id === id);
    return booth?.order;
  },

  confirmCloseBooth: async (reason: string) => {
    const booth = get().selectedBooth;
    if (!booth) return;
    await sendRequest(adminInstance, 'POST', '/pub/close', { reserveId: booth.id, reason });
    const updated = get().waitingBooths.filter((b) => b.id !== booth.id);
    set({ waitingBooths: updated, modalType: null, selectedBooth: null });
  },

  fetchBooths: async () => {
    const res = await sendRequest<{
      waitingTotalCount: number;
      lateTotalCount: number;
      reserveList: {
        reserveId: number;
        reserveName: string;
        phoneNumber: string;
        reserveMembers: number;
        status: "WAITING" | "CALLED" | "LATE";
        elapsedTime: number | null;
      }[];
    }>(adminInstance, "GET", "/pub");
  
    if (res.success) {
      const booths = res.data.reserveList.map((item, index) => ({
        id: String(item.reserveId),
        name: item.reserveName,
        waitingCount: item.reserveMembers,
        isCalling: item.status === "CALLED" || item.status === "LATE",
        calledAt: item.status === "CALLED" || item.status === "LATE"
          ? new Date(Date.now() - (item.elapsedTime ?? 0) * 60000).toISOString()
          : undefined,
        phone: item.phoneNumber,
        visited: false, // 실제 방문 상태를 구분하려면 서버 응답에 필드가 있어야 합니다
        cancelled: false,
        order: index + 1,
      }));
  
      set({ waitingBooths: booths });
    } else {
      console.error("❌ 예약 목록 조회 실패:", res.error);
    }
  },
  

  fetchWaitingState: async () => {
    // 예시: fetchBooths와 동일하게 동작하도록 구현
    await get().fetchBooths();
  },
  
}));
