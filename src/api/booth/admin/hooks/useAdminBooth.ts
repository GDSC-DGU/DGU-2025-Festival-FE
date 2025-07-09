import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  callBoothAPI,
  completeVisitAPI,
  updateBoothStatusAPI,
} from "@/api/booth/admin/adminBooth";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

/**
 * 특정 예약 팀에게 호출(Call) 처리하는 mutation 훅
 * - 사용처: 어드민 화면에서 사용자가 대기 중일 때 "호출" 버튼 클릭 시
 * - API: POST /pub/call
 * - 성공 시: ["admin", "reserveList"] 캐시 무효화
 */

export const useCallBooth = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reserveId: string) =>
      withDelayedGlobalLoading(callBoothAPI(reserveId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "reserveList"] });
    },
  });
};

/**
 *  특정 예약 팀의 방문 완료 처리 mutation 훅
 * - 사용처: 어드민 화면에서 사용자가 입장 완료 시 "입장 확인" 클릭
 * - API: PATCH /pub/reserve
 * - 성공 시: ["admin", "reserveList"] 캐시 무효화
 */

export const useCompleteVisit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reserveId: string) =>
      withDelayedGlobalLoading(completeVisitAPI(reserveId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "reserveList"] });
    },
  });
};

/**
 * 부스 전체 상태(AVAILABLE | FULL | END) 변경 mutation 훅
 * - 사용처: 어드민이 부스 운영 상태를 변경할 때 사용
 * - API: PATCH /pub?pubsStatus=...
 * - 성공 후 캐시 무효화 없음 (필요시 수동 refetch 필요)
 */

export const useUpdateBoothStatus = () => {
  return useMutation({
    mutationFn: (status: "AVAILABLE" | "FULL" | "END") =>
      withDelayedGlobalLoading(updateBoothStatusAPI(status)),
  });
};
