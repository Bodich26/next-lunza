"use server";

import { forgotPasswordSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";
import { validationData } from "@/shared";

export async function forgotPassword(formData: FormData) {
  const supabase = await createClient();
  const userData = Object.fromEntries(formData);

  const { email } = validationData(
    forgotPasswordSchema,
    userData,
    process.env.NEXT_PUBLIC_URL_FORGOT_PASSWORD!
  );

  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    if (error.code === "email_address_invalid") {
      return { error: "Некорректный формат email" };
    }

    return { error: "Неверные данные или email не найден" };
  }

  return { success: "Письмо на почту успешно отправлено" };
}
