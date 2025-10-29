"use server";
import { createClient } from "@/shared/lib/supabase/server";

export async function getUserProfileApi(slug: string) {
  try {
    const supabase = await createClient();
    const { data } = await supabase.auth.getUser();
    const userId = data.user?.id;

    if (!slug) {
      return {
        error: "Данные не переданы",
        profileData: null,
      };
    }

    const { data: userProfile, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .ilike("username", slug)
      .single();

    if (profileError || !userProfile) {
      return {
        error: "Не удалось получить профиль пользователя",
        profileData: null,
      };
    }

    if (userProfile.id === userId) {
      return {
        error: "Нельзя искать самого себя",
        profileData: null,
      };
    }

    return {
      profileData: userProfile,
      success: true,
    };
  } catch (error) {
    console.error("Ошибка получения профиля:", error);
    return { error: "Внутренняя ошибка сервера" };
  }
}
