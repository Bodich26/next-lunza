"use server";
import { createClient } from "@/shared/lib/supabase/server";

export async function getCurrentUserProfile(userId?: string) {
  const supabase = await createClient();

  try {
    let idToFetch = userId;

    if (!idToFetch) {
      const { data: currentUserData, error: currentUserError } =
        await supabase.auth.getUser();

      if (currentUserError || !currentUserData?.user) {
        return { error: "Не удалось определить текущего пользователя." };
      }

      idToFetch = currentUserData.user.id;
    }

    const { data: userProfile, error: userProfileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", idToFetch)
      .single();

    if (userProfileError || !userProfile) {
      return {
        error: "Не удалось получить профиль пользователя.",
      };
    }

    return { success: true, data: userProfile };
  } catch (err) {
    console.log(err);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
}
