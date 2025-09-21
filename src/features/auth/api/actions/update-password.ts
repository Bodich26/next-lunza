"use server";

import { redirect } from "next/navigation";
import { updatePasswordSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";

export async function updatePassword(formData: FormData, code: string) {
  const supabase = await createClient();
  const { error: exchangeError } = await supabase.auth.exchangeCodeForSession(
    code
  );

  if (exchangeError) {
    console.error(exchangeError);
    return { error: "Не удалось подтвердить сессию. Попробуйте снова." };
  }

  const updataPasswordData = Object.fromEntries(formData);
  const result = updatePasswordSchema.safeParse(updataPasswordData);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(
      `${process.env.NEXT_PUBLIC_URL_UPDATE_PASSWORD}?message=${message}`
    );
  }

  const { password } = result.data;
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return { error: "Произошла ошибка при обновлении пароля" };
  }

  return { success: "Пароль успешно обновлен" };
}
