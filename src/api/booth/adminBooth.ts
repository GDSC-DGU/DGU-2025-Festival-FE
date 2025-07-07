import { adminInstance } from "@/api/instance";
import { sendRequest } from "@/api/request";

export interface Reserve {
  reserveId: string;
  reserveName: string;
  phoneNumber: string;
  reserveMembers: number;
  status: "WAITING" | "CALLED" | "LATE" | "VISITED" | "CANCELLED";
  elapsedTime: number | string | null;
}

export interface PubStatus {
  pubsId: number;
  name: string;
  status: "AVAILABLE" | "FULL" | "END" | "PREPARING";
}

export const fetchReserveListAPI = () =>
  sendRequest<{
    reserveList: Reserve[];
    waitingTotalCount: number;
    lateTotalCount: number;
    pubStatus?: PubStatus;
  }>(adminInstance, "GET", "/pub");

export const callBoothAPI = (reserveId: string) =>
  sendRequest(adminInstance, "POST", "/pub/call", { reserveId });

export const completeVisitAPI = (reserveId: string) =>
  sendRequest(adminInstance, "PATCH", "/pub/reserve", { reserveId });

export const updateBoothStatusAPI = (
  status: "AVAILABLE" | "FULL" | "END"
) => {
  const url = `/pub?pubsStatus=${status}`;
  return sendRequest<boolean>(adminInstance, "PATCH", url);
};
