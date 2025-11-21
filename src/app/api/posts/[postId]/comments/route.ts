"use server";
import { createClient } from "@/shared/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  context: { params: Promise<{ postId: string }> }
) {
  try {
    const supabase = await createClient();
    const { postId } = await context.params;

    const { data: postCommentsData, error: postCommentsDataError } =
      await supabase
        .from("post_comments")
        .select("*")
        .eq("post_id", postId)
        .order("created_at", { ascending: false });

    if (postCommentsDataError) {
      return NextResponse.json({
        error: "Не удалось получить комментарии",
        postComments: null,
      });
    }

    return NextResponse.json({
      postsComments: postCommentsData,
      success: true,
    });
  } catch (error) {
    console.error("Ошибка получения публикаций:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" });
  }
}
