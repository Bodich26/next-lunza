import { useQuery } from "@tanstack/react-query";
import { TypePostsComments } from "../model/type-comments";
import { fetchCommentsPostsId } from "./fetch-comments-posts-id";

export const postsQueryKeys = {
  comments: (postId: number) => ["comments", postId] as const,
};

export const useCommentsQuery = (postId: number, enabled: boolean) => {
  return useQuery<TypePostsComments[], Error>({
    queryKey: postsQueryKeys.comments(postId),
    queryFn: ({ signal }) => fetchCommentsPostsId({ signal, postId }),
    enabled: enabled && !!postId,
    retry: 1,
  });
};
