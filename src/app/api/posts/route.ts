"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = await createClient();

    const { data: allPostsData, error: allPostsDataError } = await supabase
      .from("user_posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (allPostsDataError) {
      return NextResponse.json({
        error: "Не удалось получить публикации",
        userPostsData: null,
      });
    }

    return NextResponse.json({
      allPosts: allPostsData,
      success: true,
    });
  } catch (error) {
    console.error("Ошибка получения публикаций:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" });
  }
}
