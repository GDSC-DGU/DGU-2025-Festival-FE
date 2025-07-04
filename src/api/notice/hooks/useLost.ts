import { useQuery } from "@tanstack/react-query";
import { LostListAPI, LostDetailAPI } from "../lost";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useLostList = () => {
  const query = useQuery({
    queryKey: ["lostList"],
    queryFn: () => withDelayedGlobalLoading(LostListAPI()),
  });

  return query;
};

export const useLostDetail = (id: number) => {
  const query = useQuery({
    queryKey: ["lostDetail", id],
    queryFn: () => withDelayedGlobalLoading(LostDetailAPI(id)),
    enabled: !!id,
  });

  return query;
};
