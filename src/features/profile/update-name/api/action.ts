"use server";

import { createClient } from "@/shared/lib/supabase/server";

export async function updateName(userId: string, newName: string) {
  try {
    const supabase = await createClient();

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
      return { error: "Текущий пользователь ненайден" };
    }

    if (userError || user.id !== userId) {
      return { error: "Id текущего пользователя несовпадает с переданым Id." };
    }

    const { data: existingUser } = await supabase
      .from("profiles")
      .select("id")
      .eq("username", newName)
      .limit(1)
      .single();

    if (existingUser) {
      return { error: "Этот псевдоним уже занят, введите другой" };
    }

    const { data, error: updateError } = await supabase
      .from("profiles")
      .update({ username: newName })
      .eq("id", userId);

    if (updateError) {
      console.error("Ошибка при обновлении имени:", updateError);
      return { error: "Не удалось обновить имя пользователя." };
    }

    return { success: true, newName: data };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка, попробуйте позже." };
  }
}
