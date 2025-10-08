"use server";
import { createClient } from "@/shared/lib/supabase/server";

export async function getUserProfile(userId: string) {
  try {
    const supabase = await createClient();

    if (!userId) {
      return {
        error: "Не удалось получить профиль пользователя ID непередан.",
      };
    }

    const { data: userProfile, error: userProfileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId)
      .single();

    if (!userProfile || userProfileError) {
      return {
        error: "Не удалось получить профиль пользователя.",
      };
    }

    return { success: true, data: userProfile };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка, попробуйте позже." };
  }
}
