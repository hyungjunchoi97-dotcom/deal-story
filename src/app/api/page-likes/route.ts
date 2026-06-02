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

    return NextResponse.json(
      { slug, count: data?.count ?? 0, liked: false },
      { headers: { "Cache-Control": "public, s-maxage=10, stale-while-revalidate=60" } }
    );
  } catch {
    return NextResponse.json({ slug, count: 0, liked: false });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) return NextResponse.json({ error: "slug required" }, { status: 400 });

    const supabase = createPublicClient();

    // atomic upsert — avoids read-then-write race condition
    const { data, error } = await supabase.rpc("increment_page_like", { p_slug: slug });
    if (error) throw error;

    return NextResponse.json({ slug, count: data });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
