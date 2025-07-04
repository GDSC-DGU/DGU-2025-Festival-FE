import { useQuery } from "@tanstack/react-query";
import { NoticeDetailAPI, NoticeListAPI } from "../notice";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useNoticeList = () => {
  const query = useQuery({
    queryKey: ["noticeList"],
    queryFn: () => withDelayedGlobalLoading(NoticeListAPI()),
  });

  return query;
};

export const useNoticeDetail = (id: number) => {
  const query = useQuery({
    queryKey: ["noticeDetail", id],
    queryFn: () => withDelayedGlobalLoading(NoticeDetailAPI(id)),
    enabled: !!id,
  });

  return query;
};
