"use server";

import { createClient } from "@/shared/lib/supabase/server";
import { registerSchema } from "../../model/auth-schema";
import { validationData } from "@/shared";

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  const userData = Object.fromEntries(formData);

  const { email, password, name } = validationData(
    registerSchema,
    userData,
    process.env.NEXT_PUBLIC_URL_REGISTER!
  );

  const { data: existingUser } = await supabase
    .from("profiles")
    .select("id")
    .eq("username", name)
    .limit(1)
    .single();

  if (existingUser) {
    return { error: "Этот псевдоним уже занят, введите другой" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    if (error.code === "email_address_invalid") {
      return { error: "Некорректный формат email" };
    }

    return { error: "Произошла ошибка при регистрации" };
  }

  return { success: "Регистрация успешна, подтвердите почту" };
}
