import { useQuery } from "@tanstack/react-query";
import { NoticeDetailAPI, NoticeListAPI } from "../notice";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useNoticeList = () => {
  const query = useQuery({
    queryKey: ["noticeList"],
    queryFn: () => withDelayedGlobalLoading(NoticeListAPI()),
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return query;
};

export const useNoticeDetail = (id: number) => {
  const query = useQuery({
    queryKey: ["noticeDetail", id],
    queryFn: () => withDelayedGlobalLoading(NoticeDetailAPI(id)),
    enabled: !!id,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });

  return query;
};
