/**
 * 특정 부스의 상태(PubStatus)를 조회하는 React Query 훅
 * - 사용처: 특정 부스 상세 페이지에서 해당 부스 상태만 보여줄 때
 * - API: GET /pubs → 이후 filter로 boothId 일치 항목 추출
 * - 반환값: PubStatus | null
 */

import { useQuery } from "@tanstack/react-query";
import { fetchPubsStatus } from "../userBooth";
import type { PubStatus } from "../../shared/sharedBoothTypes";

export const usePubStatus = (boothId: string) => {
  return useQuery<PubStatus | null>({
    queryKey: ["pubStatus", boothId],
    queryFn: async () => {
      const res = await fetchPubsStatus();
      if (!res.success) throw new Error("Failed to fetch booth status");
      return res.data.find((s) => String(s.pubsId) === boothId) ?? null;
    },
    refetchInterval: 10000,
  });
};
