"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { aboutSchema } from "../model/about-schema";

export async function updateAbout(formData: FormData, userId: string) {
  try {
    const supabase = await createClient();
    const userData = Object.fromEntries(formData);
    const validationFailed = aboutSchema.safeParse(userData);

    if (!validationFailed.success) {
      return { error: "Данные недействительны." };
    }

    const { about: text } = validationFailed.data;

    if (!userId) {
      return { error: "Не удалось определить пользователя." };
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return { error: "Текущий пользователь не найден." };
    }

    if (userError || user.id !== userId) {
      return {
        error: "ID текущего пользователя не совпадает с переданным ID.",
      };
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
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
}
