export interface LikeBoothResponse {
  booth_id: number;
  new_likes: number;
}

export interface LikeTotalResponse {
  success: boolean;
  data: {
    booth_id: number;
    new_likes: number;
  };
  error: unknown;
}
