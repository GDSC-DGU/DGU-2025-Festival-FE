import { useMutation } from "@tanstack/react-query";
import { likeBooth } from "./likeBooth.api";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";

export const useLikeBoothMutation = () => {
  const setLikeCount = useBoothStore((state) => state.setLikeCount);

  return useMutation({
    mutationFn: likeBooth,
    onSuccess: (res) => {
      if (res.success) {
        const boothId = String(res.data.booth_id);
        const newLikes = res.data.new_likes;
        setLikeCount(boothId, newLikes);
      } else {
        // 에러 메시지 어떻게 할까
        // 필요하다면 사용자 알림 등으로 대체
      }
    },
  });
};
