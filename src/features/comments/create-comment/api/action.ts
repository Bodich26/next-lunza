"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { createCommentSchema } from "../model/create-comment-schema";

export const createComment = async (formData: FormData, postId: number) => {
  try {
    const supabase = await createClient();
    const userData = Object.fromEntries(formData);
    const validationFailed = createCommentSchema.safeParse(userData);

    if (!validationFailed.success) {
      return { error: "Данные недействительны." };
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (!user) {
      return { error: "Не удалось определить пользователя." };
    }

    if (userError || !user) {
      return { error: "Текущий пользователь не найден." };
    }

    const { commentText } = validationFailed.data;
    const userId = user.id;

    const { error: insertError } = await supabase.from("post_comments").insert({
      post_id: postId,
      user_id: userId,
      content: commentText,
    });

    if (insertError) {
      return { error: "Не удалось добавить комментарий." };
    }

    return { success: "Комментарий добавлен." };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
};
