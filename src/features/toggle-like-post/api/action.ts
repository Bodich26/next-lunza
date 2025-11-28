"use server";
import { createClient } from "@/shared/lib/supabase/server";

export async function toggleLike(postId: number) {
  try {
    const supabase = await createClient();
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

    const userId = user.id;

    const { data: existingLike, error: existingLikeError } = await supabase
      .from("post_likes")
      .select("*")
      .eq("post_id", postId)
      .eq("user_id", userId)
      .maybeSingle();

    if (existingLikeError) {
      return { error: "Ошибка при проверке существующего лайка." };
    }

    if (existingLike) {
      await supabase.from("post_likes").delete().eq("id", existingLike.id);
      return { liked: false };
    }

    const { error: insertError } = await supabase
      .from("post_likes")
      .insert({ post_id: postId, user_id: userId });

    if (insertError) {
      return { error: "Не удалось поставить лайк." };
    }

    return { success: true, liked: true };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
}
