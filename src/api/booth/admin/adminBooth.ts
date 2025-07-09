import { adminInstance } from "@/api/instance";
import { sendRequest } from "@/api/request";
import type {
  AdminPubStatus,
  ReserveListResponse,
} from "../shared/sharedBoothTypes";

// 1. 예약 목록 조회 (/pub)
export const fetchReserveListAPI = () =>
  sendRequest<ReserveListResponse>(adminInstance, "GET", "/pub");

// 2. 부스 호출 (/pub/call)
export const callBoothAPI = (reserveId: string) =>
  sendRequest(adminInstance, "POST", "/pub/call", { reserveId });

// 3. 방문 처리 (/pub/reserve)
export const completeVisitAPI = (reserveId: string) =>
  sendRequest(adminInstance, "PATCH", "/pub/reserve", { reserveId });

// 4. 부스 상태 변경 (/pub?pubsStatus=)
export const updateBoothStatusAPI = (
  status: AdminPubStatus["status"] // "AVAILABLE" | "FULL" | "END"
) => {
  const url = `/pub?pubsStatus=${status}`;
  return sendRequest<boolean>(adminInstance, "PATCH", url);
};
