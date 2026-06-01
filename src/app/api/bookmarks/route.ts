import { NextRequest, NextResponse } from "next/server";
import { createSSRClient } from "@/lib/supabase/server";

// GET /api/bookmarks?slug=xxx  → { bookmarked: bool }
// GET /api/bookmarks           → { bookmarks: [...] }
export async function GET(req: NextRequest) {
  const supabase = await createSSRClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ bookmarked: false, bookmarks: [] });

  const slug = req.nextUrl.searchParams.get("slug");
  if (slug) {
    const { data } = await supabase
      .from("bookmarks")
      .select("id")
      .eq("user_id", user.id)
      .eq("slug", slug)
      .maybeSingle();
    return NextResponse.json({ bookmarked: !!data });
  }

  // return all bookmarks for this user
  const { data } = await supabase
    .from("bookmarks")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  return NextResponse.json({ bookmarks: data ?? [] });
}

// POST /api/bookmarks  body: { slug, title, titleEn, url, category }
export async function POST(req: NextRequest) {
  const supabase = await createSSRClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { slug, title, titleEn, url, category } = body;
  if (!slug || !url) return NextResponse.json({ error: "slug and url required" }, { status: 400 });

  // toggle: if exists delete, if not exists insert
  const { data: existing } = await supabase
    .from("bookmarks")
    .select("id")
    .eq("user_id", user.id)
    .eq("slug", slug)
    .maybeSingle();

  if (existing) {
    await supabase.from("bookmarks").delete().eq("id", existing.id);
    return NextResponse.json({ bookmarked: false });
  }

  await supabase.from("bookmarks").insert({
    user_id: user.id,
    slug,
    title: title ?? slug,
    title_en: titleEn ?? null,
    url,
    category: category ?? null,
  });

  return NextResponse.json({ bookmarked: true });
}
