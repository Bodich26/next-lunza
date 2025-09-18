"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/server";
import { registerSchema } from "../../model/auth-schema";

export async function signUp(formData: FormData) {
  const data = Object.fromEntries(formData);
  const result = registerSchema.safeParse(data);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => issue.message)
      .join(", ");
    return redirect(`/register?message=${message}`);
  }

  const { email, name, password } = result.data;
  const supabase = await createClient();

  const { error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (signUpError) {
    // В случае ошибки от Supabase, перенаправляем с сообщением
    return redirect(`/register?message=${signUpError.message}`);
  }

  // 3. Успешный редирект и обновление кэша
  revalidatePath("/", "layout");
  redirect("/home");
}
