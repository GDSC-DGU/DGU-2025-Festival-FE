import { useQuery } from "@tanstack/react-query";
import { fetchPubsStatus } from "@/api/reservation";
import type { PubStatus } from "@/api/reservation";

export const usePubStatuses = () => {
  return useQuery<PubStatus[]>({
    queryKey: ["pub-statuses"],
    queryFn: async () => {
      const res = await fetchPubsStatus();
      return res.data ?? [];
    },
    staleTime: 1000 * 10,
    refetchOnWindowFocus: true,
  });
};
