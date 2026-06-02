import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { render } from "@react-email/render";
import WeeklyReportKo from "@/emails/WeeklyReportKo";
import WeeklyReportEn from "@/emails/WeeklyReportEn";

const resend = new Resend(process.env.RESEND_API_KEY!);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

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
    lang,               // 'ko' | 'en' | 'all'
    weekLabel,
    insightLine,
    reportTitle,
    reportLink,
    regionalDeals_ko,   // [{ region: "북미"|"아시아"|"유럽", summary }]
    regionalDeals_en,   // [{ region: "North America"|"Asia"|"Europe", summary }]
    newContents,        // [{ title, url, category }]
  } = body;

  // 구독자 조회
  let query = supabase
    .from("subscribers")
    .select("email, lang")
    .is("unsubscribed_at", null);

  if (lang !== "all") query = query.eq("lang", lang);

  const { data: subscribers, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  if (!subscribers?.length) return NextResponse.json({ sent: 0, total: 0 });

  const DOMAIN = "dealstory.kr";
  let sent = 0;
  const errors: string[] = [];

  const BATCH_SIZE = 50;

  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const emails = batch.map((sub) => {
      const isKo = sub.lang === "ko";
      const unsubLink = `https://${DOMAIN}/api/subscribe?email=${encodeURIComponent(sub.email)}&token=placeholder`;

      const html = isKo
        ? await render(WeeklyReportKo({
            weekLabel,
            insightLine,
            reportTitle,
            reportLink,
            regionalItems: regionalDeals_ko,
            newContents: newContents ?? [],
            unsubscribeLink: unsubLink,
          }))
        : await render(WeeklyReportEn({
            weekLabel,
            insightLine,
            reportTitle,
            reportLink,
            regionalItems: regionalDeals_en,
            newContents: newContents ?? [],
            unsubscribeLink: unsubLink,
          }));

      return {
        from: `Deal Story <newsletter@${DOMAIN}>`,
        to: sub.email,
        subject: `[Deal Story] ${weekLabel} Weekly Report`,
        html,
      };
    });

    try {
      await resend.batch.send(emails);
      sent += batch.length;
    } catch (e: unknown) {
      errors.push(e instanceof Error ? e.message : String(e));
    }
  }

  return NextResponse.json({ sent, total: subscribers.length, errors });
}
