"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema } from "../../model/auth-schema";
import { createClient } from "@/shared/lib/supabase/server";

export async function signIn(formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = loginSchema.safeParse(data);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(`/login?message=${message}`);
  }

  const { email, password } = result.data;

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/login?message=Неверные данные для входа");
  }

  // Обновляем кэш и перенаправляем на главную страницу
  revalidatePath("/", "layout");
  redirect("/home");
}
