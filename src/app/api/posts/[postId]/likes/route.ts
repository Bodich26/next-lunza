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

    const { data: postLikesData, error: postLikesDataError } = await supabase
      .from("post_likes")
      .select("*")
      .eq("post_id", postId);

    if (postLikesDataError) {
      return NextResponse.json({
        error: "Не удалось получить кол-во лайков",
        postLikes: null,
      });
    }

    return NextResponse.json({
      postsLikes: postLikesData,
      success: true,
    });
  } catch (error) {
    console.error("Ошибка получения кол-во лайков:", error);
    return NextResponse.json({ error: "Внутренняя ошибка сервера" });
  }
}
