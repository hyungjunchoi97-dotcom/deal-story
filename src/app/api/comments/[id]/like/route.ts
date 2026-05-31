import { NextRequest, NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase/server";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  try {
    const { fingerprint } = await req.json();
    if (!fingerprint) return NextResponse.json({ error: "fingerprint required" }, { status: 400 });

    const supabase = createPublicClient();

    // Check if already liked
    const { data: existing } = await supabase
      .from("comment_likes")
      .select("comment_id")
      .eq("comment_id", id)
      .eq("fingerprint", fingerprint)
      .single();

    const { data: cur } = await supabase.from("comments").select("likes").eq("id", id).single();
    const currentLikes = cur?.likes ?? 0;

    if (existing) {
      // Unlike
      await supabase
        .from("comment_likes")
        .delete()
        .eq("comment_id", id)
        .eq("fingerprint", fingerprint);

      const newLikes = Math.max(0, currentLikes - 1);
      await supabase.from("comments").update({ likes: newLikes }).eq("id", id);
      return NextResponse.json({ liked: false, count: newLikes });
    } else {
      // Like
      await supabase.from("comment_likes").insert({ comment_id: id, fingerprint });
      const newLikes = currentLikes + 1;
      await supabase.from("comments").update({ likes: newLikes }).eq("id", id);
      return NextResponse.json({ liked: true, count: newLikes });
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
