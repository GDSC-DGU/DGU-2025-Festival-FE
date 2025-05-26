import { useQuery } from "@tanstack/react-query";
import { fetchMyReservation } from "@/api/reservation";
import type { ReservationInfo } from "@/api/reservation";

interface APIError {
  code?: string;
  message?: string;
}

export const useMyReservation = (phoneNumber: string) => {
  return useQuery<ReservationInfo>({
    queryKey: ["my-reservation", phoneNumber],
    queryFn: async () => {
      const response = await fetchMyReservation(phoneNumber);
      if ('data' in response && response.data) {
        return response.data;
      }
      const error = response.error as APIError;
      throw new Error(error?.message ?? "예약 정보를 불러오지 못했습니다.");
    },
    enabled: !!phoneNumber,
    refetchInterval: 10 * 1000,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
