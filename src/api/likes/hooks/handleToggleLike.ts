import type { ApiResponse } from "@/api/request";
import type { LikeBoothResponse } from "../likeBoothTypes";
import { likeBooth } from "../likeBooth";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";

/**
 * 좋아요 토글 처리 공통 함수
 * - 상태 토글 후 서버에 반영
 * - 실패 시 토글 복구
 */
export const handleToggleLike = async (
  boothId: number,
  fallback?: () => void
) => {
  const boothIdStr = boothId.toString();
  const { setLikeCount, toggleLike } = useBoothStore.getState();

  toggleLike(boothIdStr);
  try {
    const res: ApiResponse<LikeBoothResponse> = await likeBooth(boothId);
    if (res.success && res.data) {
      setLikeCount(boothIdStr, res.data.new_likes);
    } else {
      fallback?.();
    }
  } catch {
    fallback?.();
  }
};
