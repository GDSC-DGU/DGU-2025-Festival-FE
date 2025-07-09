/**
 * 내 예약 상태(ReservationInfo)를 조회하는 React Query 훅
 * - 사용처: 사용자가 예약 완료 후 자신의 대기 상태를 확인할 때
 * - API: GET /reserve?number=...
 * - 반환값: ReservationInfo { waitTeam, reserveStatus }
 */

import { useQuery } from "@tanstack/react-query";
import { fetchMyReservation } from "../userBooth";
import type { ReservationInfo } from "../../shared/sharedTypes";

export const useMyReservation = (phoneNumber: string) => {
  return useQuery<ReservationInfo>({
    queryKey: ["my-reservation", phoneNumber],
    queryFn: async () => {
      const response = await fetchMyReservation(phoneNumber);
      if ('data' in response && response.data) {
        return response.data;
      }
      throw new Error((response.error as { message?: string })?.message ?? "예약 정보를 불러오지 못했습니다.");
    },
    enabled: !!phoneNumber,
    refetchInterval: 10000,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
