import { NextRequest, NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("slug", slug)
      .order("likes", { ascending: false })
      .order("created_at", { ascending: true });

    if (error) throw error;

    // Build nested structure
    const roots = (data ?? []).filter((c) => !c.parent_id);
    const children = (data ?? []).filter((c) => c.parent_id);

    const nested = roots.map((root) => ({
      ...root,
      replies: children
        .filter((c) => c.parent_id === root.id)
        .sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()),
    }));

    return NextResponse.json({ comments: nested });
  } catch {
    return NextResponse.json({ comments: [] });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { slug, parent_id, nickname, body } = await req.json();

    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });
    if (!nickname || nickname.length < 1 || nickname.length > 20) {
      return NextResponse.json({ error: "닉네임은 1~20자여야 합니다." }, { status: 400 });
    }
    if (!body || body.length < 2 || body.length > 500) {
      return NextResponse.json({ error: "본문은 2~500자여야 합니다." }, { status: 400 });
    }

    const supabase = createPublicClient();
    const insert: Record<string, unknown> = { slug, nickname, body };
    if (parent_id) insert.parent_id = parent_id;

    const { data, error } = await supabase
      .from("comments")
      .insert(insert)
      .select()
      .single();

    if (error) throw error;
    return NextResponse.json({ comment: data }, { status: 201 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
