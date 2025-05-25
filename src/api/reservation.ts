import { sendRequest } from "@/api/request";
import { defaultInstance } from "@/api/instance";

// 1) 번호 인증 요청 (/sms/certify)
export const requestPhoneCert = (phoneNumber: string) => {
  return sendRequest<boolean>(defaultInstance, "POST", "/sms/certify", {
    phoneNumber,
  });
};

// 2) 번호 인증 검증 (/sms/verify)
export const verifyPhoneCode = (params: {
  phoneNumber: string;
  certificationNumber: string;
  browserToken: string;
}) => {
  return sendRequest<boolean>(defaultInstance, "POST", "/sms/verify", params);
};

// 3) 야간부스 예약 (/reserve/{boothId})
export const reserveBooth = (
  boothId: string,
  data: {
    browserToken: string;
    phoneNumber: string;
    name: string;
    attendance: number;
  }
) => {
  return sendRequest<boolean>(
    defaultInstance,
    "POST",
    `/reserve/${boothId}`,
    data
  );
};


// 4) 야간부스 예약 리스트 조회 (/reserve)
export interface PubStatus {
  pubsId: number;
  waitTeam: number;
}

export const fetchPubsStatus = () => {
  return sendRequest<PubStatus[]>(defaultInstance, "GET", "/pubs");
};

// 5) 내 예약 정보 조회 (/reserve?number={phoneNumber})
export interface ReservationInfo {
  waitTeam: number;
  reserveStatus: "WAITING" | "DONE" | "CANCELLED";
}

export const fetchMyReservation = (phoneNumber: string) => {
  const url = `/reserve?number=${phoneNumber}`;
  return sendRequest<ReservationInfo>(defaultInstance, "GET", url);
};