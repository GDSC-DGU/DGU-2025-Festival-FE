import { adminInstance } from "../instance";
import { sendRequest } from "../request";

export interface Reserve {
  reserveId: string;
  reserveName: string;
  phoneNumber: string;
  reserveMembers: number;
  status: "WAITING" | "CALLED" | "LATE" | "VISITED" | "CANCELLED";
  elapsedTime: number | null;
}

export const fetchBoothList = () =>
  sendRequest<{
    reserveList: Reserve[];
    waitingTotalCount: number;
    lateTotalCount: number;
  }>(adminInstance, "GET", "/pub");
