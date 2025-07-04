import { useQuery } from "@tanstack/react-query";
import { LostListAPI, LostDetailAPI } from "../lost";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useLostList = () => {
  const query = useQuery({
    queryKey: ["lostList"],
    queryFn: () => withDelayedGlobalLoading(LostListAPI()),
    refetchInterval: 10000,
    refetchOnWindowFocus: true,
    staleTime: 0,
  });

  return query;
};

export const useLostDetail = (id: number) => {
  const query = useQuery({
    queryKey: ["lostDetail", id],
    queryFn: () => withDelayedGlobalLoading(LostDetailAPI(id)),
    enabled: !!id,
    refetchOnWindowFocus: true,
    staleTime: 10000,
  });

  return query;
};
