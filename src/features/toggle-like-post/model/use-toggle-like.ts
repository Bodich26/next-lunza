import { likesQueryKeys } from "@/entities/likes";
import { queryClient } from "@/shared";
import { toggleLike } from "../api/action";

export const useToggleLike = () => {
  const handleToggle = async (postId: number) => {
    const res = await toggleLike(postId);

    if (res.error) {
      console.error(res.error);
      return;
    }

    queryClient.invalidateQueries({
      queryKey: likesQueryKeys.likes(postId),
    });

    return res.liked;
  };

  return { handleToggle };
};
