
import { create } from "zustand";
import { adminInstance } from "@/api/instance";
import { sendRequest } from "@/api/request";
import { updateBoothStatus } from "@/api/booth/adminBooth";

export type TabType = "available" | "full";
export type ModalType = "call" | "visit" | "delete" | "closeBooth" | null;

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
  status?: "WAITING" | "CALLED" | "LATE" | "CANCELED";
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

  confirmCall: (id: string) => Promise<void>;
  confirmVisit: (id: string) => Promise<void>;
  confirmDelete: (id: string) => Promise<void>;
  confirmCloseBooth: (reason: string) => Promise<void>;
  setBoothStatus: (status: "AVAILABLE" | "FULL" | "END") => Promise<void>;

  fetchWaitingState: () => Promise<void>;
  fetchBooths: () => Promise<void>;

  getBoothOrder: (id: string) => number | undefined;
}

export const useBoothAdminStore = create<BoothAdminState>((set, get) => ({
  tab: "available",
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

  confirmCall: async (id) => {
    await sendRequest(adminInstance, "POST", "/pub/call", { reserveId: id });
    const updated = get().waitingBooths.map((b) =>
      b.id === id
        ? { ...b, isCalling: true, calledAt: new Date().toISOString(), status: "CALLED" as WaitingBooth["status"] }
        : b
    );
    set({ waitingBooths: updated });
  },

  confirmVisit: async (id) => {
    await sendRequest(adminInstance, "PATCH", "/pub/reserve", { reserveId: id });
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, visited: true, status: "CALLED" as WaitingBooth["status"] } : b
    );
    set({ waitingBooths: updated });
  },

  confirmDelete: async (id) => {
    await sendRequest(adminInstance, "DELETE", "/pub", { reserveId: id });
    const updated = get().waitingBooths.map((b) =>
      b.id === id ? { ...b, cancelled: true, status: "CANCELED" as WaitingBooth["status"] } : b
    );
    set({ waitingBooths: updated });
  },

  confirmCloseBooth: async (reason) => {
    const booth = get().selectedBooth;
    if (!booth) return;
    await sendRequest(adminInstance, "POST", "/pub/close", {
      reserveId: booth.id,
      reason,
    });
    const updated = get().waitingBooths.filter((b) => b.id !== booth.id);
    set({ waitingBooths: updated, modalType: null, selectedBooth: null });
  },

  setBoothStatus: async (status) => {
    const booth = get().selectedBooth;
    if (!booth) {
      console.warn("선택된 부스가 없습니다.");
      return;
    }
    try {
      await updateBoothStatus(status);
      console.log(`✅ 부스 상태 변경 완료: ${status}`);
      await get().fetchBooths();
    } catch (err) {
      console.error("❌ 부스 상태 변경 실패:", err);
    }
  },

  fetchBooths: async () => {
    const res = await sendRequest<{
      waitingTotalCount: number;
      lateTotalCount: number;
      reserveList: {
        reserveId: string;
        reserveName: string;
        phoneNumber: string;
        reserveMembers: number;
        status: "WAITING" | "CALLED" | "LATE" | "CANCELED";
        elapsedTime: number | null;
      }[];
    }>(adminInstance, "GET", "/pub");

    if (res.success) {
      const booths = res.data.reserveList.map((item, index) => {
        const isCalled = item.status === "CALLED" || item.status === "LATE";

        let calledAt: string | undefined;
        if (isCalled) {
          if (
            typeof item.elapsedTime === "number" &&
            !isNaN(item.elapsedTime)
          ) {
            const calculatedDate = new Date(Date.now() - item.elapsedTime * 60000);
            if (!isNaN(calculatedDate.getTime())) {
              calledAt = calculatedDate.toISOString();
            }
          } else {
            calledAt = new Date().toISOString(); // fallback
          }
        }

        return {
          id: String(item.reserveId),
          name: item.reserveName,
          waitingCount: item.reserveMembers,
          isCalling: isCalled,
          calledAt,
          phone: item.phoneNumber,
          visited: false,
          cancelled: item.status === "CANCELED",
          order: index + 1,
          status: item.status,
        };
      });

      set({ waitingBooths: booths });
    } else {
      console.error("❌ 예약 목록 조회 실패:", res.error);
    }
  },

  fetchWaitingState: async () => {
    await get().fetchBooths();
  },

  getBoothOrder: (id) => {
    const booth = get().waitingBooths.find((b) => b.id === id);
    return booth?.order;
  },
}));
