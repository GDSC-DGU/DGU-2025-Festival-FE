import { useQuery } from "@tanstack/react-query";
import { fetchPubsStatus, type PubStatus } from "../reservation";

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
