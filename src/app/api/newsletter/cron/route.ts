import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { render } from "@react-email/render";
import WeeklyReportKo from "@/emails/WeeklyReportKo";
import WeeklyReportEn from "@/emails/WeeklyReportEn";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

function getResend() {
  return new Resend(process.env.RESEND_API_KEY!);
}

export async function GET(req: NextRequest) {
  // Vercel Cron 인증 헤더 확인
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = getSupabase();
  const resend = getResend();
  const now = new Date().toISOString();

  // 예약 시간이 지났고 아직 발송 안 된 이슈 조회
  const { data: issues, error } = await supabase
    .from("newsletter_issues")
    .select("*")
    .not("scheduled_at", "is", null)
    .is("sent_at", null)
    .lte("scheduled_at", now);

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!issues?.length) return NextResponse.json({ sent: 0, message: "no issues due" });

  const DOMAIN = "dealstory.kr";
  let totalSent = 0;

  for (const issue of issues) {
    const lang = issue.lang ?? "all";

    // 구독자 조회
    let query = supabase
      .from("subscribers")
      .select("email, lang")
      .is("unsubscribed_at", null);
    if (lang !== "all") query = query.eq("lang", lang);

    const { data: subscribers } = await query;
    if (!subscribers?.length) continue;

    const BATCH_SIZE = 50;
    for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
      const batch = subscribers.slice(i, i + BATCH_SIZE);

      const emails = await Promise.all(batch.map(async (sub) => {
        const isKo = sub.lang === "ko";
        const unsubLink = `https://${DOMAIN}/api/subscribe?email=${encodeURIComponent(sub.email)}&token=placeholder`;

        const html = isKo
          ? await render(WeeklyReportKo({
              weekLabel: issue.week_label ?? "",
              insightLine: issue.insight_line ?? "",
              reportTitle: issue.report_title ?? "",
              reportLink: issue.report_link ?? "",
              regionalItems: issue.regional_ko ?? [],
              newContents: issue.new_contents ?? [],
              unsubscribeLink: unsubLink,
            }))
          : await render(WeeklyReportEn({
              weekLabel: issue.week_label ?? "",
              insightLine: issue.insight_line ?? "",
              reportTitle: issue.report_title ?? "",
              reportLink: issue.report_link ?? "",
              regionalItems: issue.regional_en ?? [],
              newContents: issue.new_contents ?? [],
              unsubscribeLink: unsubLink,
            }));

        return {
          from: `Deal Story <newsletter@${DOMAIN}>`,
          to: sub.email,
          subject: `[Deal Story] ${issue.week_label ?? ""} Weekly Report`,
          html,
        };
      }));

      try {
        await resend.batch.send(emails);
        totalSent += batch.length;
      } catch { /* silent */ }
    }

    // 발송 완료 표시
    await supabase
      .from("newsletter_issues")
      .update({ sent_at: new Date().toISOString() })
      .eq("id", issue.id);
  }

  return NextResponse.json({ sent: totalSent, issues: issues.length });
}
