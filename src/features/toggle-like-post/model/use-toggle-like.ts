import { likesQueryKeys } from "@/entities/likes";
import { queryClient, toaster } from "@/shared";
import { toggleLike } from "../api/action";

export const useToggleLike = () => {
  const handleToggle = async (postId: number) => {
    const res = await toggleLike(postId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    }

    queryClient.invalidateQueries({
      queryKey: likesQueryKeys.likes(postId),
    });

    return res.liked;
  };

  return { handleToggle };
};
