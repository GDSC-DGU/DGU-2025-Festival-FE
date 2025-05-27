import { create } from "zustand";
import { fetchBoothList } from "@/api/booth/fetchBoothList";
import { callBooth } from "@/api/booth/callBooth";
import { completeVisit } from "@/api/booth/completeVisit";
import { updateBoothStatus } from "@/api/booth/updateBoothStatus";
import { sendRequest } from "@/api/request";
import { adminInstance } from "@/api/instance";

export type TabType = "available" | "full";
export type ModalType = "call" | "visit" | "delete" | "closeBooth" | null;
export type PubStatus = "AVAILABLE" | "FULL" | "END" | "PREPARING";

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
  pubStatus: PubStatus;

  lateTotalCount: number;
  waitingTotalCount: number;

  setSelectedBooth: (booth: WaitingBooth | null) => void;
  openModal: (type: ModalType, booth: WaitingBooth) => void;
  closeModal: () => void;
  openPhoneModal: (booth: WaitingBooth) => void;
  closePhoneModal: () => void;
  setPubStatus: (status: PubStatus) => void;

  confirmCall: (id: string) => Promise<void>;
  confirmVisit: (id: string) => Promise<void>;
  confirmDelete: (id: string) => Promise<void>;
  confirmCloseBooth: (reason: string) => Promise<void>;
  setBoothStatus: (status: "AVAILABLE" | "FULL" | "END") => Promise<void>;

  fetchWaitingState: () => Promise<void>;
  fetchBooths: () => Promise<void>;

  getBoothOrder: (id: string) => number | undefined;
}

const normalizeStatus = (status: string): WaitingBooth["status"] => {
  if (status === "CANCELLED") return "CANCELED";
  return status as WaitingBooth["status"];
};

export const useBoothAdminStore = create<BoothAdminState>((set, get) => ({
  tab: "available",
  setTab: (tab) => set({ tab }),

  waitingBooths: [],
  selectedBooth: null,
  modalType: null,
  phoneModalBooth: null,
  pubStatus: "AVAILABLE",

  lateTotalCount: 0,
  waitingTotalCount: 0,

  setSelectedBooth: (booth) => set({ selectedBooth: booth }),
  openModal: (type, booth) => set({ modalType: type, selectedBooth: booth }),
  closeModal: () => set({ modalType: null, selectedBooth: null }),
  openPhoneModal: (booth) => set({ phoneModalBooth: booth }),
  closePhoneModal: () => set({ phoneModalBooth: null }),
  setPubStatus: (status) => set({ pubStatus: status }),

  confirmCall: async (id) => {
    await callBooth(id);
    const updated = get().waitingBooths.map((b) =>
      b.id === id
        ? { ...b, isCalling: true, calledAt: new Date().toISOString(), status: "CALLED" as WaitingBooth["status"] }
        : b
    );
    set({ waitingBooths: updated });
  },

  confirmVisit: async (id) => {
    await completeVisit(id);
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

  setBoothStatus: async (status: "AVAILABLE" | "FULL" | "END") => {
    try {
      await updateBoothStatus(status);
      set({ pubStatus: status });
      await get().fetchBooths();
    } catch (err) {
      console.error("❌ 부스 상태 변경 실패:", err);
    }
  },

  fetchBooths: async () => {
    const res = await fetchBoothList();
    if (res.success) {
      const booths = res.data.reserveList.map((item, index) => {
        const isCalled = item.status === "CALLED" || item.status === "LATE";
        let calledAt: string | undefined;

        if (
          isCalled &&
          typeof item.elapsedTime === "string" &&
          item.elapsedTime.includes(":")
        ) {
          const [minutesStr, secondsStr] = item.elapsedTime.split(":");
          const minutes = parseInt(minutesStr, 10);
          const seconds = parseInt(secondsStr, 10);
          const elapsedMs = (minutes * 60 + seconds) * 1000;
          const time = new Date(Date.now() - elapsedMs);
          calledAt = !isNaN(time.getTime()) ? time.toISOString() : undefined;
        }

        return {
          id: String(item.reserveId),
          name: item.reserveName,
          waitingCount: item.reserveMembers,
          isCalling: isCalled,
          calledAt,
          phone: item.phoneNumber,
          visited: false,
          cancelled: item.status === "CANCELLED",
          order: index + 1,
          status: normalizeStatus(item.status),
        };
      });

      set({
        waitingBooths: booths,
        pubStatus: res.data.pubStatus as PubStatus,
        lateTotalCount: res.data.lateTotalCount || 0,
        waitingTotalCount: res.data.waitingTotalCount || 0,
      });
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
