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
        userPostsData: null,
      });
    }

    const userId = data.user.id;

    const { data: userPostsData, error: userPostsError } = await supabase
      .from("user_posts")
      .select("*")
      .eq("author_id", userId)
      .order("created_at", { ascending: false });

    if (userPostsError) {
      return NextResponse.json({
        error: "Не удалось получить публикации пользователя",
        userPostsData: null,
      });
    }

    return NextResponse.json({
      userPostsData: userPostsData,
      success: true,
    });
  } catch (error) {
    console.error("Ошибка получения публикаций:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" });
  }
}
