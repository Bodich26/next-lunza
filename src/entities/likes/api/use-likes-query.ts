import { useQuery } from "@tanstack/react-query";
import { TypePostLikesRes } from "../model/type-likes";
import { fetchLikesPostsId } from "./fetch-likes-posts-id";

export const likesQueryKeys = {
  likes: (postId: number) => ["likes", postId] as const,
};

export const useLikesQuery = (postId: number, enabled: boolean) => {
  return useQuery<TypePostLikesRes, Error>({
    queryKey: likesQueryKeys.likes(postId),
    queryFn: ({ signal }) => fetchLikesPostsId({ signal, postId }),
    enabled: enabled && !!postId,
    retry: 1,
  });
};
