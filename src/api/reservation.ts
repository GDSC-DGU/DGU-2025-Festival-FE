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
