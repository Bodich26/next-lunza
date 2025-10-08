"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();
    const { data, error: userError } = await supabase.auth.getUser();

    if (userError || !data) {
      return NextResponse.json({
        error: "Пользователь не авторизован",
        profileData: null,
      });
    }

    const userId = data.user.id;

    const { data: currentUserProfile, error: currentUserProfileError } =
      await supabase.from("profiles").select("*").eq("id", userId).single();

    if (currentUserProfileError || !currentUserProfile) {
      return NextResponse.json({
        error: "Не удалось получить профиль пользователя",
        profileData: null,
      });
    }

    return NextResponse.json({
      profileData: currentUserProfile,
      success: true,
    });
  } catch (error) {
    console.error("Ошибка получения профиля:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" });
  }
}
