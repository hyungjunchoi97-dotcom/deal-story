import { NextRequest, NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get("slug");
  if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

  try {
    const supabase = createPublicClient();
    const { data } = await supabase
      .from("page_likes")
      .select("count")
      .eq("slug", slug)
      .single();

    return NextResponse.json({ slug, count: data?.count ?? 0, liked: false });
  } catch {
    return NextResponse.json({ slug, count: 0, liked: false });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

    const supabase = createPublicClient();
    const { data: existing } = await supabase
      .from("page_likes")
      .select("count")
      .eq("slug", slug)
      .single();

    const newCount = (existing?.count ?? 0) + 1;

    const { data } = await supabase
      .from("page_likes")
      .upsert({ slug, count: newCount }, { onConflict: "slug" })
      .select("count")
      .single();

    return NextResponse.json({ slug, count: data?.count ?? newCount });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
