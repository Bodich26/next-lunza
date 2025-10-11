"use server";

import { createClient } from "@/shared/lib/supabase/server";

export async function updateAbout(userId: string, text: string) {
  try {
    const supabase = await createClient();

    if (!userId) {
      return { error: "Не удалось определить пользователя." };
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: "Текущий пользователь ненайден" };
    }

    if (userError || user.id !== userId) {
      return { error: "Id текущего пользователя несовпадает с переданым Id." };
    }

    const { data, error: updateError } = await supabase
      .from("profiles")
      .update({ about: text })
      .eq("id", userId);

    if (updateError) {
      return { error: "Не удалось обновить имя пользователя." };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка, попробуйте позже." };
  }
}
