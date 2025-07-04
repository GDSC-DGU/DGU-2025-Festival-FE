import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NoticePostAPI, NoticePatchAPI, NoticeDeleteAPI } from "../adminNotice";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const usePostNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) =>
      withDelayedGlobalLoading(NoticePostAPI(formData)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["noticeList"],
      });
    },
  });
};

export const usePatchNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) =>
      withDelayedGlobalLoading(NoticePatchAPI(formData)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["noticeList"] });
    },
  });
};

export const useDeleteNotice = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) =>
      withDelayedGlobalLoading(NoticeDeleteAPI(noticeId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["noticeList"] });
    },
  });
};
