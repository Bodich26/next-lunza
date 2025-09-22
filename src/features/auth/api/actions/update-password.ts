"use server";

import { updatePasswordSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";
import { validationData } from "@/shared";

export async function updatePassword(formData: FormData, code: string) {
  const supabase = await createClient();
  const userData = Object.fromEntries(formData);

  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(
    code
  );

  if (exchangeError) {
    console.error(exchangeError);
    return { error: "Не удалось подтвердить сессию. Попробуйте снова." };
  }

  const { password } = validationData(
    updatePasswordSchema,
    userData,
    process.env.NEXT_PUBLIC_URL_UPDATE_PASSWORD!
  );

  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { error: "Произошла ошибка при обновлении пароля" };
  }

  return { success: "Пароль успешно обновлен" };
}
