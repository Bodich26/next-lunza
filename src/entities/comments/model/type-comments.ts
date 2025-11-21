export type TypePostsComments = {
  id: number;
  post_id: number;
  user_id: string;
  content: string;
  created_at: string;
  updated_at: string;
  parent_id: number;
};

export type TypePostsCommentsRes = {
  postsComments: TypePostsComments[] | null;
  success?: boolean;
  error?: string;
};
