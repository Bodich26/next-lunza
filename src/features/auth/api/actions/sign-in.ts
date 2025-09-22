"use server";

import { loginSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";
import { validationData } from "@/shared";

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const userData = Object.fromEntries(formData);

  const { email, password } = validationData(
    loginSchema,
    userData,
    process.env.NEXT_PUBLIC_URL_LOGIN!
  );

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    if (error.code === "invalid_credentials")
      return { error: "Неверный email или пароль" };

    if (error.code === "email_address_invalid") {
      return { error: "Некорректный формат email" };
    }

    return { error: "Ошибка при входе. Попробуйте снова." };
  }

  return { success: "Успешный вход" };
}
