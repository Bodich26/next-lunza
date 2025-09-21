"use server";

import { redirect } from "next/navigation";
import { loginSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";

export async function signIn(formData: FormData) {
  const supabase = await createClient();
  const data = Object.fromEntries(formData);
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(`${process.env.NEXT_PUBLIC_URL_LOGIN}?message=${message}`);
  }

  const { email, password } = result.data;

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
