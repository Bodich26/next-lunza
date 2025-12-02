"use server";

import { createClient } from "@/shared/lib/supabase/server";
import { nameSchema } from "../model/name-schema";

export async function updateName(formData: FormData, userId: string) {
  try {
    const supabase = await createClient();
    const userData = Object.fromEntries(formData);
    const validationFailed = nameSchema.safeParse(userData);

    if (!validationFailed.success) {
      return { error: "Данные недействительны." };
    }

    const { name: newName } = validationFailed.data;

    if (!userId) {
      return { error: "Не удалось определить пользователя." };
    }

    if (!newName || !newName.trim()) {
      return { error: "Имя не может быть пустым." };
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

    const { data: existingUser } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", newName)
      .limit(1)
      .single();

    if (existingUser) {
      return { error: "Этот псевдоним уже занят. Введите другой." };
    }

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ username: newName })
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
