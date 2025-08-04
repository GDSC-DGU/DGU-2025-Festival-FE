import { sendRequest } from "@/api/request";
import { defaultInstance } from "@/api/instance";
import type { PubStatus, ReservationInfo } from "../shared/sharedBoothTypes";

// 1. 번호 인증 요청 (/sms/certify)
export const requestPhoneCert = (phoneNumber: string) => {
  return sendRequest<boolean>(defaultInstance, "POST", "/sms/certify", {
    phoneNumber,
  });
};

// 2. 인증 코드 검증 (/sms/verify)
export const verifyPhoneCode = (params: {
  phoneNumber: string;
  certificationNumber: string;
  browserToken: string;
}) => {
  return sendRequest<boolean>(defaultInstance, "POST", "/sms/verify", params);
};

// 3. 야간부스 예약 (/reserve/{boothId})
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

// 4. 전체 부스 상태 조회 (/pubs)
export const fetchPubsStatus = () => {
  return sendRequest<PubStatus[]>(defaultInstance, "GET", "/pubs");
};

// 5. 내 예약 정보 조회 (/reserve?number={phoneNumber})
export const fetchMyReservation = (phoneNumber: string) => {
  const url = `/reserve?number=${phoneNumber}`;
  return sendRequest<ReservationInfo>(defaultInstance, "GET", url);
};

// 6. 예약 취소 (/reserve?number={phoneNumber})
export const cancelReservation = (phoneNumber: string) => {
  const url = `/reserve?number=${phoneNumber}`;
  return sendRequest<boolean>(defaultInstance, "PATCH", url);
};
