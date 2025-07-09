/**
 * 전체 부스의 상태(PubStatus[])를 주기적으로 조회하는 React Query 훅
 * - 사용처: 부스 목록 페이지에서 모든 부스 상태를 한 번에 가져올 때
 * - API: GET /pubs
 * - 반환값: PubStatus[] (AVAILABLE | FULL | PREPARING | END)
 */

import { useQuery } from "@tanstack/react-query";
import { fetchPubsStatus } from "../userBooth";
import type { PubStatus } from "../../shared/sharedBoothTypes";

export const usePubStatuses = () => {
  return useQuery<PubStatus[]>({
    queryKey: ["pub-statuses"],
    queryFn: async () => {
      const res = await fetchPubsStatus();
      return res.data ?? [];
    },
    staleTime: 10000,
    refetchOnWindowFocus: true,
  });
};
