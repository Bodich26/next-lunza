"use server";
import { maxFileSize } from "@/shared";
import { createClient } from "@/shared/lib/supabase/server";

export async function updateBanner(imageFile: File, userId: string) {
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
      return { error: "Текущий пользователь ненайден" };
    }

    if (userError || user.id !== userId) {
      return { error: "Id текущего пользователя несовпадает с переданым Id." };
    }

    const fileName = `${user.id}/banner.${imageFile.name.split(".").pop()}`;

    const { error } = await supabase.storage
      .from("banners")
      .upload(fileName, imageFile, { upsert: true });

    if (error) {
      return { error: "Неудалось загрузить изображение" };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("banners").getPublicUrl(fileName);

    const { error: updateError } = await supabase
      .from("profiles")
      .update({ banner_url: publicUrl })
      .eq("id", userId);

    if (updateError) {
      return { error: "Не удалось обновить баннер пользователя." };
    }

    return { success: true };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка, попробуйте позже." };
  }
}
