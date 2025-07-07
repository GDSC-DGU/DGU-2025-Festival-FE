import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  callBoothAPI,
  completeVisitAPI,
  updateBoothStatusAPI,
} from "@/api/booth/adminBooth";
import { withDelayedGlobalLoading } from "@/utils/delayedGlobalLoading";

export const useCallBooth = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reserveId: string) =>
      withDelayedGlobalLoading(callBoothAPI(reserveId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "reserveList"] });
    },
  });
};

export const useCompleteVisit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (reserveId: string) =>
      withDelayedGlobalLoading(completeVisitAPI(reserveId)),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin", "reserveList"] });
    },
  });
};

export const useUpdateBoothStatus = () => {
  return useMutation({
    mutationFn: (status: "AVAILABLE" | "FULL" | "END") =>
      withDelayedGlobalLoading(updateBoothStatusAPI(status)),
  });
};
