"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/server";
import { registerSchema } from "../../model/auth-schema";

export async function signUp(formData: FormData) {
  const supabase = await createClient();
  const data = Object.fromEntries(formData);
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(`/register?message=${message}`);
  }

  const { email, name, password } = result.data;

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
    return { error: "Произошла ошибка при регистрации" };
  }
  return { success: "Регистрация успешна, подтвердите почту" };
}
