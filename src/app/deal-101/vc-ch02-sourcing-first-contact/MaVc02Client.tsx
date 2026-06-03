"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch02-sourcing-first-contact";

const SOURCING_CHANNELS = [
  { channel: "Inbound (cold email · DM)",   share: "30-50%", koReply: "1-3%",   enReply: "1-3%",   koDetail: "Top-tier VC는 연 10,000+ inbound. Associate가 매일 30-50건 triage. Subject line에 traction 숫자 + 한 문장 thesis가 핵심.", enDetail: "Top-tier VCs see 10,000+ inbounds yearly. Associates triage 30-50 daily. Subject line: traction number + one-line thesis." },
  { channel: "Network / Referral",          share: "40-60%", koReply: "60%+",   enReply: "60%+",   koDetail: "다른 VC referral · portco CEO 추천 · advisor intro. Sequoia·Benchmark deal의 70%+가 referral. 한국은 80%+.", enDetail: "Other-VC referrals, portco CEO intros, advisor connections. 70%+ of Sequoia/Benchmark deals come via referral; 80%+ in Korea." },
  { channel: "Outbound (proactive)",         share: "10-20%", koReply: "30-50%", enReply: "30-50%", koDetail: "Associate가 sector mapping 후 직접 cold outreach. \"Hot space\" 들어가기 위한 proactive. AI infra · vertical SaaS가 2026 핫.", enDetail: "Associates sector-map then cold-outreach proactively to break into 'hot spaces.' AI infra and vertical SaaS dominate in 2026." },
  { channel: "Accelerator pipeline",         share: "5-15%",  koReply: "100%",  enReply: "100%",  koDetail: "YC Demo Day · Techstars · 한국 D.CAMP · 매쉬업엔젤스 · primer. Demo Day는 batch당 250-300 deal 한꺼번에 노출.", enDetail: "YC Demo Day, Techstars, Korea's D.CAMP, primer. Demo Days surface 250-300 deals per batch all at once." },
];

const COLD_EMAIL_TEMPLATE = [
  { koPart: "Subject line",      enPart: "Subject line",        koExample: "\"$2M ARR · 30% MoM · Stripe for healthcare billing\"", enExample: "\"$2M ARR · 30% MoM · Stripe for healthcare billing\"" },
  { koPart: "1문단 — Hook",       enPart: "Paragraph 1 — hook",  koExample: "Problem 1문장 + traction 1문장 + 왜 본인이 답인지 1문장.",  enExample: "One sentence on the problem, one on traction, one on why you're the answer." },
  { koPart: "2문단 — What",       enPart: "Paragraph 2 — what",  koExample: "Product 1-2문장 + 핵심 metric 3개.",                          enExample: "1-2 sentences on the product plus three key metrics." },
  { koPart: "3문단 — Ask",        enPart: "Paragraph 3 — ask",   koExample: "Raise size + 진행 중인 다른 VC + 짧은 미팅 요청.",            enExample: "Round size, other VCs in motion, request a short meeting." },
  { koPart: "첨부",                enPart: "Attachment",          koExample: "Pitch deck (PDF or DocSend link) · Loom 영상 (optional).",   enExample: "Pitch deck (PDF or DocSend link); optional Loom video." },
];

const ASSOC_PIPELINE = [
  { stage: "Inbound triage",  koDetail: "Affinity / DealCloud (US) · Notion / Airtable (한국)에 자동 import. 5분 안에 kill or schedule.", enDetail: "Auto-import into Affinity/DealCloud (US) or Notion/Airtable (Korea). Kill or schedule within 5 minutes." },
  { stage: "1st call (30분)",   koDetail: "Associate가 lead. Why · what · how much · when 확인. Call note 즉시 작성.",                       enDetail: "Associate-led. Why, what, how much, when. Call notes immediately." },
  { stage: "Internal screening", koDetail: "1-2 page memo 작성 (7 fields). Slack #pipeline 채널에 share, Partner 24시간 안에 read/respond.", enDetail: "1-2 page memo (7 fields) shared in #pipeline. Partner reads within 24 hours." },
  { stage: "Partner meeting",   koDetail: "Partner + Associate + founder. 60분. Partner의 30% probability 평가.",                            enDetail: "Partner + associate + founder. 60 minutes. Partner gauges 30% probability." },
  { stage: "DD kickoff",         koDetail: "Partner approve → DD checklist 작성 → workstream owner 분배 (Ch.4 참조).",                       enDetail: "Partner approves → DD checklist → workstream owners assigned (see Ch.4)." },
  { stage: "Kill or proceed",    koDetail: "각 단계마다 Partner 결정. 90%는 kill — 한 funnel 통과해도 5-10% 통과율.",                          enDetail: "Partner decides at each stage. 90% killed — 5-10% survive the full funnel." },
];

const SCREENING_MEMO_FIELDS = [
  { koField: "1. Company one-liner",        enField: "1. Company one-liner",        koDetail: "1문장 요약. \"Stripe for [vertical]\" 패턴.",         enDetail: "One sentence. \"Stripe for [vertical]\" pattern." },
  { koField: "2. Why interesting (3 bullet)", enField: "2. Why interesting (3 bullets)", koDetail: "Founder · market · traction 중 가장 강한 3가지.", enDetail: "The strongest three among founder, market, traction." },
  { koField: "3. Why concerning (3 bullet)",  enField: "3. Why concerning (3 bullets)",  koDetail: "Red flag — competition · burn · cap table · founder 갈등.", enDetail: "Red flags — competition, burn, cap table, founder conflict." },
  { koField: "4. Stage / round / valuation", enField: "4. Stage / round / valuation", koDetail: "예: \"Series A · $8M · $35M post · alone or lead\".",   enDetail: "e.g., \"Series A · $8M · $35M post · alone or lead.\"" },
  { koField: "5. Cap table",                  enField: "5. Cap table",                  koDetail: "전 round investor · option pool % · founder 지분.",   enDetail: "Prior investors, option pool %, founder ownership." },
  { koField: "6. Key metrics",                enField: "6. Key metrics",                koDetail: "ARR · growth · burn · runway · NDR · CAC · LTV.",     enDetail: "ARR, growth, burn, runway, NDR, CAC, LTV." },
  { koField: "7. Recommendation",             enField: "7. Recommendation",             koDetail: "Pass / Schedule partner meeting / Deep dive.",       enDetail: "Pass, schedule partner meeting, or deep dive." },
];

const FAMOUS_INTROS = [
  { name: "Airbnb seed (2008)",         koDetail: "Brian Chesky가 Paul Graham의 YC 지원 → Sequoia에 PG referral. 그 전 7명 VC가 거절한 후.",      enDetail: "Brian Chesky applied to YC under Paul Graham → PG referred to Sequoia after seven prior VC rejections." },
  { name: "Stripe seed (2010)",         koDetail: "John Collison이 Y Combinator 다닌 형 Patrick → YC alumni network로 PayPal Mafia (Thiel·Musk) 동시 pitch.", enDetail: "John Collison's brother Patrick was at YC → tapped the PayPal Mafia (Thiel, Musk) via YC alumni network." },
  { name: "WhatsApp seed (2009)",       koDetail: "Jan Koum이 전 직장 (Yahoo) 동료를 통해 Sequoia Jim Goetz에 intro. 5명 거절 후 Sequoia가 단독 lead.", enDetail: "Jan Koum used ex-Yahoo colleague to reach Sequoia's Jim Goetz. Sequoia leaned in after five rejections." },
  { name: "Toss Series A (2014)",        koDetail: "이승건이 알토스벤처스 한킴과 카페에서 만남. 첫 미팅 2시간. 한 달 안에 $5M Series A lead.",     enDetail: "Lee Seung-gun met Altos Ventures' Han Kim in a café. Two-hour first meeting; $5M Series A lead within a month." },
  { name: "Coupang Series A (2011)",     koDetail: "김범석이 Harvard MBA network로 LightSpeed에 intro. \"Korea Amazon\" thesis로 $20M lead.",     enDetail: "Kim Bom-suk leveraged the Harvard MBA network to reach Lightspeed. \"Korea Amazon\" thesis attracted a $20M lead." },
];

const TOC_ITEMS = [
  { id: "channels",     ko: "§1. 4가지 Sourcing 채널과 reply rate",            en: "§1 Four sourcing channels and reply rates" },
  { id: "founder",      ko: "§2. 창업자 시점 — Cold email 잘 쓰는 법",        en: "§2 Founder lens — how to write a cold email that lands" },
  { id: "associate",    ko: "§3. 심사역 시점 — Pipeline 관리 + Screening memo", en: "§3 Associate lens — pipeline + screening memo" },
  { id: "famous-intros", ko: "§4. 유명 첫 intro 5개 사례",                       en: "§4 Five famous first-intro stories" },
];

export default function MaVc02Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getVcSeriesNav(SLUG);
  const meta = getVcChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "VC 시리즈" : "VC Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.2</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.2" : "VC Series · Ch.2"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q2 2026 기준` : `~${meta.readingMinutes} min · data as of Q2 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">{TOC_ITEMS.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>))}</ul>
        </div>

        <section id="channels" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 4가지 Sourcing 채널과 reply rate" : "§ 1 Four sourcing channels and reply rates"}</h2>
          <div className="space-y-3 mb-8">
            {SOURCING_CHANNELS.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-bold text-sm">{c.channel}</div>
                  <div className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{c.share}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">Reply rate: <span className="font-mono font-bold" style={{ color: ACCENT }}>{ko ? c.koReply : c.enReply}</span></div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.koDetail : c.enDetail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="founder" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 창업자 시점 — Cold Email 잘 쓰는 법" : "§ 2 Founder lens — writing a cold email that lands"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Cold email reply rate가 1-3%인 이유는 80%가 한 줄에 dies. Subject line + 첫 5초가 결정. Top-tier VC는 매일 100+ inbound 처리하기 때문에 \"interesting\" 1초 안에 결정." : "Cold email reply rates of 1-3% reflect that 80% die in the first line. Subject + first 5 seconds decide it. Top-tier VCs process 100+ inbounds daily — \"interesting?\" decided in one second."}
          </p>
          <h3 className="text-lg font-bold mb-3">{ko ? "Cold Email 5-part 구조" : "The 5-part cold email"}</h3>
          <div className="space-y-2 mb-6">
            {COLD_EMAIL_TEMPLATE.map((t, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? t.koPart : t.enPart}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic">{ko ? t.koExample : t.enExample}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "한국 창업자 cold outreach tip" : "Korean-founder outreach tips"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "한국 VC는 cold email 거의 안 봄 — warm intro 80%+ 필수" : "Korean VCs barely open cold email — warm intro is essentially mandatory (80%+)"}</li>
              <li>• {ko ? "초기 angel 1명 잡고 그 사람의 referral network 활용" : "Land one early angel and ride their referral network"}</li>
              <li>• {ko ? "D.CAMP · 매쉬업엔젤스 · primer 같은 accelerator/엔젤 그룹 통해 들어가기" : "Enter via accelerators like D.CAMP, Mashup Angels, or primer"}</li>
              <li>• {ko ? "모태펀드 출자받은 GP의 portco CEO와 connect — VC가 가장 신뢰하는 channel" : "Connect to portco CEOs of KVIC-backed GPs — the most-trusted referral source"}</li>
            </ul>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="associate" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 심사역 시점 — Pipeline 관리 + Screening Memo" : "§ 3 Associate lens — pipeline + screening memo"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "Associate는 funnel manager. 매일 inbound 30-50건 triage → 주 5-10 미팅 → 분기 1-3 IC 통과. Funnel conversion rate는 inbound 100건 → meeting 5건 → DD 1건 → IC 0.3건 → 투자 0.1건. 즉 inbound 1,000건당 1건 close." : "Associates are funnel managers. 30-50 daily inbound triages → 5-10 weekly meetings → 1-3 IC approvals per quarter. Funnel: 100 inbound → 5 meeting → 1 DD → 0.3 IC → 0.1 closed. About one close per 1,000 inbound."}
          </p>

          <h3 className="text-lg font-bold mb-3">{ko ? "Associate Pipeline 흐름 6단계" : "Associate pipeline — six stages"}</h3>
          <div className="space-y-2 mb-8">
            {ASSOC_PIPELINE.map((p, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{p.stage}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Internal Screening Memo — 7 fields (1-2 page)" : "Internal screening memo — 7 fields (1-2 pages)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "필드" : "Field"}</th>
                  <th className="text-left p-3">{ko ? "내용" : "Detail"}</th>
                </tr>
              </thead>
              <tbody>
                {SCREENING_MEMO_FIELDS.map((f, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{ko ? f.koField : f.enField}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? f.koDetail : f.enDetail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="famous-intros" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 유명 첫 Intro 5개 사례" : "§ 4 Five famous first-intro stories"}</h2>
          <div className="space-y-2 mb-6">
            {FAMOUS_INTROS.map((c, i) => (
              <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{c.name}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.koDetail : c.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          {nav.next ? (<Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div><div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div></Link>) : <div />}
        </div>
      </div>
    </div>
  );
}
