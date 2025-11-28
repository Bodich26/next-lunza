import { commentsQueryKeys } from "@/entities/comments";
import { queryClient, toaster } from "@/shared";
import { deleteComment } from "../api/action";

export const useDeleteComment = (commentId: number, postId: number) => {
  const handleDeleteComment = async () => {
    const res = await deleteComment(commentId, postId);

    if (res.error) {
      toaster.create({
        title: "Ошибка",
        description: res.error,
        type: "error",
        closable: true,
      });
    } else if (res.success) {
      toaster.create({
        title: "Успешно",
        description: "Ваш комментарий успешно удален.",
        type: "success",
        closable: true,
      });

      queryClient.invalidateQueries({
        queryKey: commentsQueryKeys.comments(postId),
      });
    }
  };
  return { handleDeleteComment };
};
