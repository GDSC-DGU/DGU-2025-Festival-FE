/**
 * 어드민 대시보드에서 예약 목록(ReserveList)을 주기적으로 조회하는 React Query 훅
 * - 사용처: 어드민 화면의 부스 대기 팀 리스트
 * - API: GET /pub
 * - 반환값: { reserveList[], waitingTotalCount, lateTotalCount, pubStatus }
 */

import { useQuery } from "@tanstack/react-query";
import { fetchReserveListAPI } from "@/api/booth/admin/adminBooth";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useReserveList = () =>
  useQuery({
    queryKey: ["admin", "reserveList"],
    queryFn: () => withDelayedGlobalLoading(fetchReserveListAPI()),
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
