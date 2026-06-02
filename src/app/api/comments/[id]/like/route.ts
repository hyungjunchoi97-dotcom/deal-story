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

    const { data: existing } = await supabase
      .from("comment_likes")
      .select("comment_id")
      .eq("comment_id", id)
      .eq("fingerprint", fingerprint)
      .single();

    if (existing) {
      // Unlike — delete like record, atomic decrement via RPC
      await supabase
        .from("comment_likes")
        .delete()
        .eq("comment_id", id)
        .eq("fingerprint", fingerprint);

      const { data } = await supabase.rpc("decrement_comment_like", { p_comment_id: id });
      return NextResponse.json({ liked: false, count: data ?? 0 });
    } else {
      // Like — insert like record, atomic increment via RPC
      await supabase.from("comment_likes").insert({ comment_id: id, fingerprint });
      const { data } = await supabase.rpc("increment_comment_like", { p_comment_id: id });
      return NextResponse.json({ liked: true, count: data ?? 0 });
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
