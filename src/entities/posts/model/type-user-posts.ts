export type TypeUserPosts = {
  id: number;
  author_id: string;
  image_url: string;
  description: string;
  image_width: number;
  image_height: number;
  created_at: string;
  updated_at: string;
};

export type TypeUserPostsRes = {
  userPostsData: TypeUserPosts[] | null;
  success?: boolean;
  error?: string;
};
