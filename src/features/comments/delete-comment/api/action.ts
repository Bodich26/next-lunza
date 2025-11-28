"use server";
import { createClient } from "@/shared/lib/supabase/server";

export const deleteComment = async (commentId: number, postId: number) => {
  try {
    const supabase = await createClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: "Текущий пользователь не найден." };
    }
    const currentUserId = user.id;

    const { data: existingComment, error: fetchError } = await supabase
      .from("post_comments")
      .select("id, user_id, post_id")
      .eq("id", commentId)
      .single();

    if (fetchError || !existingComment) {
      return { error: "Комментарий не найден." };
    }

    if (existingComment.post_id !== postId) {
      return { error: "Комментарий не относится к этому посту." };
    }

    if (existingComment.user_id !== currentUserId) {
      return { error: "Это не ваш комментарий." };
    }

    const { error: deleteError } = await supabase
      .from("post_comments")
      .delete()
      .eq("id", commentId);

    if (deleteError) {
      return { error: "У вас нет прав удалить этот комментарий." };
    }

    return { success: "Комментарий удалён." };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
};
