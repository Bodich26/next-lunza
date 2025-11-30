"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { updateCommentSchema } from "../model/update-comment-schema";

export const updateComment = async (
  formData: FormData,
  commentId: number,
  postId: number
) => {
  try {
    const supabase = await createClient();
    const userData = Object.fromEntries(formData);
    const validationFailed = updateCommentSchema.safeParse(userData);

    if (!validationFailed.success) {
      return { error: "Данные недействительны." };
    }

    const { commentText } = validationFailed.data;

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

    const { error: updateError } = await supabase
      .from("post_comments")
      .update({ content: commentText })
      .eq("id", commentId);

    if (updateError) {
      return { error: "Не удалось обновить комментарий." };
    }

    return { success: "Комментарий обновлён." };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
};
