"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch02-sourcing-first-contact";

const SOURCING_CHANNELS = [
  { channel: "Inbound (cold email · DM)",   share: "30-50%", koReply: "1-3%",   enReply: "1-3%",   koDetail: "탑티어 VC는 한 해 1만 건이 넘는 인바운드를 받음. 심사역이 매일 30~50건을 선별. 제목 줄에 트랙션 숫자 + 한 문장 논지가 핵심.", enDetail: "Top-tier VCs see 10,000+ inbounds yearly. Associates triage 30-50 daily. Subject line: traction number + one-line thesis." },
  { channel: "Network / Referral",          share: "40-60%", koReply: "60%+",   enReply: "60%+",   koDetail: "다른 VC 추천 · 포트폴리오사 대표 소개 · 어드바이저 소개. 세쿼이아·벤치마크 딜의 70% 이상이 추천에서 옴. 한국은 80% 이상.", enDetail: "Other-VC referrals, portco CEO intros, advisor connections. 70%+ of Sequoia/Benchmark deals come via referral; 80%+ in Korea." },
  { channel: "Outbound (proactive)",         share: "10-20%", koReply: "30-50%", enReply: "30-50%", koDetail: "심사역이 섹터를 매핑한 뒤 직접 선제 컨택. \"뜨는 영역\"에 올라타려는 선제적 방식. 2026년은 AI 인프라·버티컬 SaaS가 화두.", enDetail: "Associates sector-map then cold-outreach proactively to break into 'hot spaces.' AI infra and vertical SaaS dominate in 2026." },
  { channel: "Accelerator pipeline",         share: "5-15%",  koReply: "100%",  enReply: "100%",  koDetail: "YC 데모데이 · 테크스타스 · 한국 디캠프·매쉬업엔젤스·프라이머. 데모데이는 기수마다 250~300개 딜이 한꺼번에 쏟아짐.", enDetail: "YC Demo Day, Techstars, Korea's D.CAMP, primer. Demo Days surface 250-300 deals per batch all at once." },
];

const COLD_EMAIL_TEMPLATE = [
  { koPart: "제목 줄",      enPart: "Subject line",        koExample: "\"ARR $2M · 30% MoM · 헬스케어 청구 분야의 스트라이프\"", enExample: "\"$2M ARR · 30% MoM · Stripe for healthcare billing\"" },
  { koPart: "1문단 — 후킹",       enPart: "Paragraph 1 — hook",  koExample: "문제 1문장 + 트랙션 1문장 + 왜 본인이 적임자인지 1문장.",  enExample: "One sentence on the problem, one on traction, one on why you're the answer." },
  { koPart: "2문단 — 무엇을",       enPart: "Paragraph 2 — what",  koExample: "제품 1~2문장 + 핵심 지표 3개.",                          enExample: "1-2 sentences on the product plus three key metrics." },
  { koPart: "3문단 — 요청",        enPart: "Paragraph 3 — ask",   koExample: "투자 유치 규모 + 함께 보는 다른 VC + 짧은 미팅 요청.",            enExample: "Round size, other VCs in motion, request a short meeting." },
  { koPart: "첨부",                enPart: "Attachment",          koExample: "피치덱(PDF 또는 DocSend 링크) · 룸(Loom) 영상(선택).",   enExample: "Pitch deck (PDF or DocSend link); optional Loom video." },
];

const ASSOC_PIPELINE = [
  { stage: "Inbound triage",  koDetail: "어피니티·딜클라우드(미국) 또는 노션·에어테이블(한국)에 자동 기록. 5분 안에 탈락 또는 미팅 확정.", enDetail: "Auto-import into Affinity/DealCloud (US) or Notion/Airtable (Korea). Kill or schedule within 5 minutes." },
  { stage: "1st call (30분)",   koDetail: "심사역이 주도. 왜·무엇을·얼마·언제를 확인. 콜 노트 바로 작성.",                       enDetail: "Associate-led. Why, what, how much, when. Call notes immediately." },
  { stage: "Internal screening", koDetail: "1~2페이지 메모 작성(7개 항목). 슬랙 #pipeline 채널에 공유, 파트너가 24시간 안에 확인·회신.", enDetail: "1-2 page memo (7 fields) shared in #pipeline. Partner reads within 24 hours." },
  { stage: "Partner meeting",   koDetail: "파트너 + 심사역 + 창업자. 60분. 파트너가 투자 확률을 가늠(보통 30% 안팎).",                            enDetail: "Partner + associate + founder. 60 minutes. Partner gauges 30% probability." },
  { stage: "DD kickoff",         koDetail: "파트너 승인 → 실사 체크리스트 작성 → 워크스트림 담당 배정(Ch.4 참조).",                       enDetail: "Partner approves → DD checklist → workstream owners assigned (see Ch.4)." },
  { stage: "Kill or proceed",    koDetail: "단계마다 파트너가 판단. 90%는 탈락 — 퍼널 전체 통과율은 5~10%.",                          enDetail: "Partner decides at each stage. 90% killed — 5-10% survive the full funnel." },
];

const SCREENING_MEMO_FIELDS = [
  { koField: "1. 회사 한 줄 소개",        enField: "1. Company one-liner",        koDetail: "한 문장 요약. \"OO 분야의 스트라이프\" 식.",         enDetail: "One sentence. \"Stripe for [vertical]\" pattern." },
  { koField: "2. 끌리는 점 3가지", enField: "2. Why interesting (3 bullets)", koDetail: "창업자·시장·트랙션 중 가장 강한 3가지.", enDetail: "The strongest three among founder, market, traction." },
  { koField: "3. 걸리는 점 3가지",  enField: "3. Why concerning (3 bullets)",  koDetail: "리스크 — 경쟁·번레이트·주주 구성·창업자 갈등.", enDetail: "Red flags — competition, burn, cap table, founder conflict." },
  { koField: "4. 단계 / 라운드 / 밸류에이션", enField: "4. Stage / round / valuation", koDetail: "예: \"시리즈A · $8M · 포스트 $35M · 단독 또는 리드\".",   enDetail: "e.g., \"Series A · $8M · $35M post · alone or lead.\"" },
  { koField: "5. 주주 구성(캡테이블)",                  enField: "5. Cap table",                  koDetail: "이전 라운드 투자자 · 옵션풀 비중 · 창업자 지분.",   enDetail: "Prior investors, option pool %, founder ownership." },
  { koField: "6. 핵심 지표",                enField: "6. Key metrics",                koDetail: "ARR · 성장률 · 번레이트 · 런웨이 · NDR · CAC · LTV.",     enDetail: "ARR, growth, burn, runway, NDR, CAC, LTV." },
  { koField: "7. 의견",             enField: "7. Recommendation",             koDetail: "탈락 / 파트너 미팅 잡기 / 심층 검토.",       enDetail: "Pass, schedule partner meeting, or deep dive." },
];

const FAMOUS_INTROS = [
  { name: "Airbnb seed (2008)",         koDetail: "브라이언 체스키가 폴 그레이엄의 YC에 지원 → 그레이엄이 세쿼이아에 소개. 앞서 VC 7곳에 거절당한 뒤였음.",      enDetail: "Brian Chesky applied to YC under Paul Graham → PG referred to Sequoia after seven prior VC rejections." },
  { name: "Stripe seed (2010)",         koDetail: "존 콜리슨의 형 패트릭이 Y Combinator 출신 → YC 동문 네트워크로 페이팔 마피아(틸·머스크)에게 동시에 피칭.", enDetail: "John Collison's brother Patrick was at YC → tapped the PayPal Mafia (Thiel, Musk) via YC alumni network." },
  { name: "WhatsApp seed (2009)",       koDetail: "얀 코움이 전 직장(야후) 동료를 통해 세쿼이아의 짐 고츠에게 소개. 5곳에 거절당한 뒤 세쿼이아가 단독 리드.", enDetail: "Jan Koum used ex-Yahoo colleague to reach Sequoia's Jim Goetz. Sequoia leaned in after five rejections." },
  { name: "Toss Series A (2014)",        koDetail: "이승건이 알토스벤처스 한 킴과 카페에서 만남. 첫 미팅 2시간. 한 달 안에 $5M 시리즈A 리드.",     enDetail: "Lee Seung-gun met Altos Ventures' Han Kim in a café. Two-hour first meeting; $5M Series A lead within a month." },
  { name: "Coupang Series A (2011)",     koDetail: "김범석이 하버드 MBA 네트워크로 라이트스피드에 소개. \"한국의 아마존\" 논지로 $20M 리드.",     enDetail: "Kim Bom-suk leveraged the Harvard MBA network to reach Lightspeed. \"Korea Amazon\" thesis attracted a $20M lead." },
];

const TOC_ITEMS = [
  { id: "channels",     ko: "§1. 소싱 채널 4가지와 회신율",            en: "§1 Four sourcing channels and reply rates" },
  { id: "founder",      ko: "§2. 창업자 시점 — 콜드메일 잘 쓰는 법",        en: "§2 Founder lens — how to write a cold email that lands" },
  { id: "associate",    ko: "§3. 심사역 시점 — 파이프라인 + 스크리닝 메모", en: "§3 Associate lens — pipeline + screening memo" },
  { id: "famous-intros", ko: "§4. 유명한 첫 소개 5개 사례",                       en: "§4 Five famous first-intro stories" },
];

export default function MaVc02Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getVcSeriesNav(SLUG);
  const meta = getVcChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <>
      <Header />
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
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 소싱 채널 4가지와 회신율" : "§ 1 Four sourcing channels and reply rates"}</h2>
          <div className="space-y-3 mb-8">
            {SOURCING_CHANNELS.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-bold text-sm">{c.channel}</div>
                  <div className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{c.share}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">{ko ? "회신율" : "Reply rate"}: <span className="font-mono font-bold" style={{ color: ACCENT }}>{ko ? c.koReply : c.enReply}</span></div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.koDetail : c.enDetail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="founder" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 창업자 시점 — 콜드메일 잘 쓰는 법" : "§ 2 Founder lens — writing a cold email that lands"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "콜드메일 회신율이 1~3%인 이유는, 80%가 첫 줄에서 버려지기 때문. 제목과 첫 5초가 전부를 가름. 탑티어 VC는 매일 100건 넘는 인바운드를 처리해서 \"흥미로운가\"를 1초 안에 판단." : "Cold email reply rates of 1-3% reflect that 80% die in the first line. Subject + first 5 seconds decide it. Top-tier VCs process 100+ inbounds daily — \"interesting?\" decided in one second."}
          </p>
          <h3 className="text-lg font-bold mb-3">{ko ? "콜드메일 5단 구성" : "The 5-part cold email"}</h3>
          <div className="space-y-2 mb-6">
            {COLD_EMAIL_TEMPLATE.map((t, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? t.koPart : t.enPart}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic">{ko ? t.koExample : t.enExample}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "한국 창업자를 위한 선제 컨택 팁" : "Korean-founder outreach tips"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "한국 VC는 콜드메일을 거의 안 봄 — 소개(웜 인트로)가 80% 이상으로 사실상 필수" : "Korean VCs barely open cold email — warm intro is essentially mandatory (80%+)"}</li>
              <li>• {ko ? "초기 엔젤 한 명을 먼저 잡고, 그 사람의 소개 네트워크를 활용" : "Land one early angel and ride their referral network"}</li>
              <li>• {ko ? "디캠프·매쉬업엔젤스·프라이머 같은 액셀러레이터·엔젤 그룹을 통해 진입" : "Enter via accelerators like D.CAMP, Mashup Angels, or primer"}</li>
              <li>• {ko ? "모태펀드 출자를 받은 운용사의 포트폴리오사 대표와 연결 — VC가 가장 신뢰하는 경로" : "Connect to portco CEOs of KVIC-backed GPs — the most-trusted referral source"}</li>
            </ul>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="associate" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 심사역 시점 — 파이프라인 관리 + 스크리닝 메모" : "§ 3 Associate lens — pipeline + screening memo"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "심사역은 곧 퍼널 관리자. 매일 인바운드 30~50건을 선별 → 주 5~10건 미팅 → 분기 1~3건 투자심의(IC) 통과. 전환은 인바운드 100건 → 미팅 5건 → 실사 1건 → IC 0.3건 → 투자 0.1건. 즉 인바운드 1,000건당 1건이 성사." : "Associates are funnel managers. 30-50 daily inbound triages → 5-10 weekly meetings → 1-3 IC approvals per quarter. Funnel: 100 inbound → 5 meeting → 1 DD → 0.3 IC → 0.1 closed. About one close per 1,000 inbound."}
          </p>

          <h3 className="text-lg font-bold mb-3">{ko ? "심사역 파이프라인 6단계" : "Associate pipeline — six stages"}</h3>
          <div className="space-y-2 mb-8">
            {ASSOC_PIPELINE.map((p, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{p.stage}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDetail : p.enDetail}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "내부 스크리닝 메모 — 7개 항목(1~2페이지)" : "Internal screening memo — 7 fields (1-2 pages)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "항목" : "Field"}</th>
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
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 유명한 첫 소개 5개 사례" : "§ 4 Five famous first-intro stories"}</h2>
          <div className="space-y-2 mb-6">
            {FAMOUS_INTROS.map((c, i) => (
              <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{c.name}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? c.koDetail : c.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-10 rounded-lg p-5" style={{ background: `${ACCENT}0F`, border: `1px solid ${ACCENT}40` }}>
          <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
          <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
            ? "VC 딜은 결국 소개에서 시작한다. 콜드메일 회신율은 1~3%지만 소개는 60% 이상 — 그래서 첫 한 명을 어떻게 연결하느냐가 펀딩의 절반이다."
            : "VC deals start with a warm intro. Cold email converts at 1-3%, intros at 60%+ — so landing that first connection is half the raise."}</p>
        </div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          {nav.next ? (<Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div><div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div></Link>) : <div />}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
