"use server";

import { redirect } from "next/navigation";
import { forgotPasswordSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";

export async function forgotPassword(formData: FormData) {
  const supabase = await createClient();
  const userData = Object.fromEntries(formData);
  const result = forgotPasswordSchema.safeParse(userData);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(
      `${process.env.NEXT_PUBLIC_URL_FORGOT_PASSWORD}?message=${message}`
    );
  }

  const { email } = result.data;
  const { error } = await supabase.auth.resetPasswordForEmail(email);

  if (error) {
    if (error.code === "email_address_invalid") {
      return { error: "Некорректный формат email" };
    }

    return { error: "Неверные данные или email не найден" };
  }

  return { success: "Письмо на почту успешно отправлено" };
}
