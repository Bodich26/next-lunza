"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/shared/lib/supabase/server";
import { AUTH_META } from "routes";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/", "layout");
  redirect(`${AUTH_META.PUBLIC_ACCESS}`);
}
