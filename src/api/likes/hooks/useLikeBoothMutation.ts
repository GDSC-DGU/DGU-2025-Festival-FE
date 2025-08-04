/**
 * React Query 기반 좋아요 Mutation 훅
 * - 서버에 좋아요 요청 후 zustand 상태 동기화
 */

import { useMutation } from "@tanstack/react-query";
import { likeBooth } from "../likeBooth";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";

export const useLikeBoothMutation = () => {
  const setLikeCount = useBoothStore((s) => s.setLikeCount);
  const setIsLiked = useBoothStore((s) => s.setIsLiked);

  return useMutation({
    mutationFn: likeBooth,
    onSuccess: (res) => {
      if (res.success && res.data) {
        const boothId = res.data.booth_id.toString();
        setLikeCount(boothId, res.data.new_likes);
        setIsLiked(boothId);
      }
    },
  });
};
