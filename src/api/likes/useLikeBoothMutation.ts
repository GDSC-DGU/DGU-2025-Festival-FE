import { useMutation } from "@tanstack/react-query";
import { likeBooth } from "./likeBooth.api";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";

export const useLikeBoothMutation = () => {
  const setLikeCount = useBoothStore((state) => state.setLikeCount);
  const setIsLiked = useBoothStore((state) => state.setIsLiked); // ✅ 추가

  return useMutation({
    mutationFn: likeBooth,
    onSuccess: (res) => {
      if (res.success) {
        const boothId = String(res.data.booth_id);
        const newLikes = res.data.new_likes;
        setLikeCount(boothId, newLikes);
        setIsLiked(boothId); 
      }
    },
  });
};
