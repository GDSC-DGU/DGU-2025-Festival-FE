import { useEffect, useCallback, useState } from "react";
import { getLikeTotal } from "../useGetLikeTotal";
import { likeBooth } from "../likeBooth.api";
import { useBoothStore } from "@/pages/booth/stores/useBoothStore";
import type { ApiResponse } from "@/api/request";

interface LikeBoothResponse {
  booth_id: number;
  new_likes: number;
}

export const useLike = (boothId: number) => {
  const totalLikes = useBoothStore((s) => s.getLikeCount(boothId.toString()));
  const isLiked     = useBoothStore((s) => s.isLiked(boothId.toString()));
  const setLikeCount    = useBoothStore((s) => s.setLikeCount);
  const storeToggleLike = useBoothStore((s) => s.toggleLike);

  const [isLoading, setIsLoading] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getLikeTotal(boothId)
      .then((res) => {
        if (res.data) {
          const likes = res.data.new_likes;
          setLikeCount(boothId.toString(), likes);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [boothId, setLikeCount]);

  const toggleLike = useCallback(() => {
    setIsToggling(true);
    storeToggleLike(boothId.toString());

    likeBooth(boothId)
      .then((res: ApiResponse<LikeBoothResponse>) => {
        if (res.success && res.data) {
          const likes = res.data.new_likes;
          setLikeCount(boothId.toString(), likes);
        } else {
          storeToggleLike(boothId.toString());
        }
      })
      .catch((err) => {
        console.error(err);
        storeToggleLike(boothId.toString());
      })
      .finally(() => {
        setIsToggling(false);
      });
  }, [boothId, setLikeCount, storeToggleLike]);

  return {
    isLoading,
    totalLikes,
    toggleLike,
    isToggling,
    isLiked,
  };
};
