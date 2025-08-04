import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LostPostAPI, LostDeleteAPI, LostPatchAPI } from "../adminLost";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const usePostLost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) =>
      withDelayedGlobalLoading(LostPostAPI(formData)),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["lostList"],
      });
    },
  });
};

export const usePatchLost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: FormData) =>
      withDelayedGlobalLoading(LostPatchAPI(formData)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lostList"] });
    },
  });
};

export const useDeleteLost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (noticeId: number) =>
      withDelayedGlobalLoading(LostDeleteAPI(noticeId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lostList"] });
    },
  });
};
