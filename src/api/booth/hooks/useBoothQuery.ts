import { useQuery } from "@tanstack/react-query";
import { fetchReserveListAPI } from "@/api/booth/adminBooth";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useReserveList = () =>
  useQuery({
    queryKey: ["admin", "reserveList"],
    queryFn: () => withDelayedGlobalLoading(fetchReserveListAPI()),
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
