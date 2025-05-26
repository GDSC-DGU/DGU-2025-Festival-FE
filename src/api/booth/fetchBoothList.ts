import { adminInstance } from "../instance";
import { sendRequest } from "../request";

export interface Reserve {
  reserveId: string;
  reserveName: string;
  phoneNumber: string;
  reserveMembers: number;
  status: "WAITING" | "CALLED" | "LATE" | "VISITED" | "CANCELLED";
  elapsedTime: number | string | null;
}

export const fetchBoothList = () =>
  sendRequest<{
    reserveList: Reserve[];
    waitingTotalCount: number;
    lateTotalCount: number;
    pubStatus: "AVAILABLE" | "FULL" | "END" | "PREPARING";
  }>(adminInstance, "GET", "/pub");
