"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { loginSchema, registerSchema } from "../model/auth-schema";
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
    // В случае ошибки, перенаправляем с сообщением
    redirect("/login?message=Неверные данные для входа");
  }

  // Обновляем кэш и перенаправляем на главную страницу
  revalidatePath("/", "layout");
  redirect("/home");
}

//----------------------------

export async function signUp(formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(`/register?message=${message}`);
  }

  const { email, name, password, politics } = result.data;

  const supabase = await createClient();

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
    // В случае ошибки, перенаправляем с сообщением
    redirect("/register?message=Ошибка регистрации");
  }

  revalidatePath("/", "layout");
  redirect("/home");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect("/login");
}
