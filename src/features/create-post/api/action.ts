"use server";
import { maxFileSize } from "@/shared";
import { createClient } from "@/shared/lib/supabase/server";

export async function createPost(
  postFile: File,
  description: string,
  userId: string
) {
  try {
    const supabase = await createClient();

    if (!userId) {
      return { error: "Не удалось определить пользователя." };
    }

    if (!postFile) {
      return { error: "Изображение не выбрано." };
    }

    if (postFile.size > maxFileSize) {
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

    const fileName = `${user.id}/posts.${postFile.name.split(".").pop()}`;

    const { error: uploadError } = await supabase.storage
      .from("posts")
      .upload(fileName, postFile);

    if (uploadError) {
      return { error: "Не удалось загрузить изображение" };
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("posts").getPublicUrl(fileName);

    const { error: insertError } = await supabase.from("user_posts").insert({
      author_id: userId,
      description,
      image_url: publicUrl,
    });

    if (insertError) {
      console.error(insertError);
      return { error: "Ошибка при создании поста" };
    }

    return { success: "Пост успешно создан!" };
  } catch (error) {
    console.error(error);
    return { error: "Произошла непредвиденная ошибка, попробуйте позже." };
  }
}
