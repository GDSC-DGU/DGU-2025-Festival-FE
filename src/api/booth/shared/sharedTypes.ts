// ✅ 예약 상태 (공통)
export type ReserveStatus = "WAITING" | "CALLED" | "LATE" | "VISITED" | "CANCELLED";

// ✅ 사용자 예약 정보
export interface ReservationInfo {
  waitTeam: number;
  reserveStatus: "WAITING" | "DONE" | "CANCELLED";
}

// ✅ 사용자 부스 상태
export interface PubStatus {
  pubsId: number;
  waitTeam: number;
  status: "AVAILABLE" | "FULL" | "PREPARING" | "END";
}

// ✅ 관리자 부스 상태 (name 포함됨)
export interface AdminPubStatus {
  pubsId: number;
  name: string;
  status: "AVAILABLE" | "FULL" | "PREPARING" | "END";
}

// ✅ 관리자 예약 리스트 항목
export interface Reserve {
  reserveId: string;
  reserveName: string;
  phoneNumber: string;
  reserveMembers: number;
  status: ReserveStatus;
  elapsedTime: number | string | null;
}

// ✅ 예약 리스트 전체 응답 타입
export interface ReserveListResponse {
  reserveList: Reserve[];
  waitingTotalCount: number;
  lateTotalCount: number;
  pubStatus?: AdminPubStatus;
}
