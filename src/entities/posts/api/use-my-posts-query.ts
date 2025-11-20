import { useQuery } from "@tanstack/react-query";
import { TypeUserPosts } from "../model/type-user-posts";
import { fetchMyPosts } from "./fetch-my-posts";

export const postsQueryKeys = {
  myPosts: ["myPosts"] as const,
};

export const useMyPostApi = () => {
  return useQuery<TypeUserPosts[], Error>({
    queryKey: postsQueryKeys.myPosts,
    queryFn: fetchMyPosts,
    retry: 1,
  });
};
