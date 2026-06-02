import { NextRequest, NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase/server";

function checkAdminKey(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  return key && key === process.env.ADMIN_SECRET;
}

export async function POST(req: NextRequest) {
  if (!checkAdminKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("weekly_reports")
      .insert(body)
      .select("id, slug, title, published_at, is_published")
      .single();

    if (error) throw error;
    return NextResponse.json({ report: data }, { status: 201 });
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Internal error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  if (!checkAdminKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("weekly_reports")
    .select("id, slug, title, published_at, is_published")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ reports: data ?? [] });
}
