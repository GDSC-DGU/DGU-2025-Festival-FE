/**
 * 부스 좋아요 기능 커스텀 훅
 * - 마운트 시 좋아요 수 불러옴
 * - zustand로 상태 업데이트
 */

import { useEffect, useCallback, useState } from "react";
import { getLikeTotal } from "../likeBooth";
import { handleToggleLike } from "./handleToggleLike";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";

export const useLike = (boothId: number) => {
  const boothIdStr = boothId.toString();
  const totalLikes = useBoothStore((s) => s.getLikeCount(boothIdStr));
  const isLiked = useBoothStore((s) => s.isLiked(boothIdStr));
  const setLikeCount = useBoothStore((s) => s.setLikeCount);
  const toggleStoreLike = useBoothStore((s) => s.toggleLike);

  const [isLoading, setIsLoading] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  // 마운트 시 좋아요 수 가져오기
  useEffect(() => {
    setIsLoading(true);
    getLikeTotal(boothId)
      .then((res) => {
        if (res.success && res.data) {
          setLikeCount(boothIdStr, res.data.new_likes);
        }
      })
      .finally(() => setIsLoading(false));
  }, [boothId, boothIdStr, setLikeCount]);

  const toggleLike = useCallback(() => {
    setIsToggling(true);
    handleToggleLike(boothId, () => toggleStoreLike(boothIdStr))
      .finally(() => setIsToggling(false));
  }, [boothId, boothIdStr, toggleStoreLike]);

  return {
    isLoading,
    isToggling,
    totalLikes,
    isLiked,
    toggleLike,
  };
};
