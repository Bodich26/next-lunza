"use server";
import { maxFileSize } from "@/shared";
import { createClient } from "@/shared/lib/supabase/server";

export async function updateAvatar(imageFile: File, userId: string) {
  try {
    const supabase = await createClient();

    if (!userId) {
      return { error: "Не удалось определить пользователя." };
    }

    if (!imageFile) {
      return { error: "Изображение не выбрано." };
    }

    if (imageFile.size > maxFileSize) {
      return { error: "Файл слишком большой. Максимум 1 МБ." };
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

    const fileName = `${user.id}/avatar.${imageFile.name.split(".").pop()}`;

    const { error: uploadError } = await supabase.storage
      .from("avatars")
      .upload(fileName, imageFile, { upsert: true });

    if (uploadError) {
      return { error: "Не удалось загрузить изображение." };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("avatars").getPublicUrl(fileName);

    const urlWithCacheBuster = `${publicUrl}?v=${Date.now()}`;

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ avatar_url: urlWithCacheBuster })
      .eq("id", userId);

    if (updateError) {
      return { error: "Не удалось обновить аватар пользователя." };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка. Попробуйте позже." };
  }
}
