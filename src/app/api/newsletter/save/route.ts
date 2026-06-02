import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function checkAdminKey(req: NextRequest) {
  const key = req.headers.get("x-admin-key");
  return key && key === process.env.ADMIN_SECRET;
}

export async function POST(req: NextRequest) {
  if (!checkAdminKey(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const {
    id,             // 수정 시 기존 id
    lang,
    weekLabel,
    insightLine,
    reportTitle,
    reportLink,
    regionalDeals_ko,
    regionalDeals_en,
    newContents,
    scheduledAt,    // ISO string or null (즉시발송이면 null)
  } = body;

  const supabase = getSupabase();

  const payload = {
    lang: lang ?? "all",
    week_label: weekLabel,
    insight_line: insightLine,
    report_title: reportTitle,
    report_link: reportLink,
    regional_ko: regionalDeals_ko,
    regional_en: regionalDeals_en,
    new_contents: newContents,
    scheduled_at: scheduledAt ?? null,
  };

  let result;
  if (id) {
    result = await supabase
      .from("newsletter_issues")
      .update(payload)
      .eq("id", id)
      .select("id")
      .single();
  } else {
    result = await supabase
      .from("newsletter_issues")
      .insert(payload)
      .select("id")
      .single();
  }

  if (result.error) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: result.data.id });
}
