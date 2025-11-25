export type TypePostLikes = {
  id: number;
  post_id: number;
  user_id: string;
  created_at: string;
};

export type TypePostLikesRes = {
  postLikes: TypePostLikes[] | null;
  isLike?: boolean;
  success?: boolean;
  error?: string;
};
