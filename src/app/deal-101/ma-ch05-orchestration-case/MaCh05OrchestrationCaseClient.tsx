/**
 * M&A 시리즈 Ch.5 — IB Lead 오케스트레이션
 *
 * 메인 케이스: Felix Rohatyn × NYC bailout (1975)
 * 카운터 케이스: Bayer × Monsanto (2016)
 *
 * Sections:
 *  § 1 IB의 진짜 일 = 일을 만드는 게 아니라 일하는 사람을 만드는 것
 *  § 2 Orchestration의 4가지 task — scope · timeline · escalation · synthesis
 *  § 3 Synthesis의 art — 4개 advisor를 한 narrative로
 *  § 4 케이스 1: Felix Rohatyn × NYC bailout (1975) — orchestration archetype
 *  § 5 케이스 2: Bayer × Monsanto (2016) — operational 성공, 전략적 synthesis 실패
 *  § 6 IB Lead가 orchestration에서 실제로 하는 일
 */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import SeriesNav from "@/components/SeriesNav";
import { MA_CHAPTERS, getMaChapterBySlug, getMaSeriesNav } from "@/data/ma-series";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay: d } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

const SLUG = "ma-ch05-orchestration-case";
const ACCENT = "#3b82f6";

// ── Orchestration tasks ─────────────────────────────────────────────
const TASKS = [
  { koTask: "Scope 정의",         enTask: "Scope definition",       koWhat: "각 advisor가 무엇을 deliver하고 무엇을 안 하는지 명확히. Scope gap이 가장 흔한 deal 실패 원인", enWhat: "Define exactly what each advisor delivers and doesn't. Scope gaps are the most common deal-failure source" },
  { koTask: "Timeline 조율",      enTask: "Timeline coordination",  koWhat: "4개 advisor의 deliverable이 같은 시점에 IB 손에 들어와야 valuation/협상 input이 됨",      enWhat: "All four advisors' deliverables must land at the IB simultaneously to feed valuation and negotiation" },
  { koTask: "Escalation 관리",    enTask: "Escalation management",   koWhat: "Advisor 사이 conflict가 생기면 IB가 결정. 'CEO에게 안 가는 fight' 가 IB의 일",           enWhat: "When advisors clash, IB decides. 'Fights that don't reach the CEO' are the IB's job" },
  { koTask: "Synthesis",          enTask: "Synthesis",               koWhat: "★ 가장 어려운 part. 4개 advisor의 outputs를 한 narrative로. 가격·구조·리스크 통합",       enWhat: "★ The hardest part. Turn four advisors' outputs into a single narrative covering price, structure, and risk" },
];

// ── NYC bailout stakeholders ────────────────────────────────────────
const NYC_STAKEHOLDERS = [
  { koLabel: "NYC 시 정부",             enLabel: "NYC city government",       koRole: "Beame 시장. 디폴트 직전 위기, 신뢰 잃음",            enRole: "Mayor Beame. Hours from default, credibility lost" },
  { koLabel: "NY 주 정부",              enLabel: "NY state government",       koRole: "Carey 주지사. MAC 설립 법안 통과시킴",                enRole: "Governor Carey. Passed MAC creation legislation" },
  { koLabel: "연방 정부 (Ford 행정부)",  enLabel: "Federal government (Ford)", koRole: "초기 거부 → 1978년 \\$2.3B 연방 보증 대출",            enRole: "Initial refusal → eventually $2.3B federal loan guarantee in 1978" },
  { koLabel: "Big Six NYC 은행",         enLabel: "Big Six NYC banks",         koRole: "기존 시 채권 보유자. Roll-over 협상 대상",              enRole: "Existing city bondholders. Negotiated roll-over" },
  { koLabel: "노조 (UFT · Teamsters)",   enLabel: "Unions (UFT · Teamsters)",  koRole: "★ 핵심 — 연금기금 \\$3B+ 를 MAC 채권에 투자 동의",  enRole: "★ Key — agreed to invest $3B+ from pension funds in MAC bonds" },
  { koLabel: "Bond 투자자",              enLabel: "Bond investors",            koRole: "MAC 채권 신규 발행 대상. 신용 회복 협상",                enRole: "Target buyers for newly issued MAC bonds. Credit restoration" },
];

// ── Bayer × Monsanto timeline ────────────────────────────────────────
const BAYER_TIMELINE = [
  { koDate: "2016-05",     enDate: "May 2016",     event: "Bayer × Monsanto 첫 제안 \\$122/sh",          eventEn: "Bayer's first offer at $122/sh",                koStock: "Bayer €100",       enStock: "Bayer €100",     ok: true },
  { koDate: "2016-09",     enDate: "Sep 2016",     event: "최종 가격 \\$128/sh, 총 \\$66B 합의",       eventEn: "Final price $128/sh, $66B total",              koStock: "Bayer €95",        enStock: "Bayer €95",      ok: true },
  { koDate: "2018-06",     enDate: "Jun 2018",     event: "Closing 완료, Bayer가 Monsanto 인수",       eventEn: "Closing completed, Bayer absorbs Monsanto",     koStock: "Bayer €100",       enStock: "Bayer €100",     ok: true },
  { koDate: "2018-08",     enDate: "Aug 2018",     event: "★ Johnson v. Monsanto Roundup 첫 \\$289M 판결",    eventEn: "★ Johnson v. Monsanto — first Roundup verdict at $289M", koStock: "Bayer €78",        enStock: "Bayer €78",      ok: false },
  { koDate: "2019",        enDate: "2019",         event: "Roundup 추가 다수 판결, \\$2B+ 단일 평결",  eventEn: "More Roundup verdicts, single award of $2B+",   koStock: "Bayer €60",        enStock: "Bayer €60",      ok: false },
  { koDate: "2020",        enDate: "2020",         event: "Roundup 합의 \\$10.9B 발표",                enEvent: "$10.9B Roundup settlement announced",            koStock: "Bayer €45",        enStock: "Bayer €45",      ok: false },
  { koDate: "2024",        enDate: "2024",         event: "누적 충당금 \\$16B+, 시총 €100 → €25 (-75%)", enEvent: "Cumulative reserves $16B+, market cap from €100 → €25 (-75%)", koStock: "Bayer €25",        enStock: "Bayer €25",      ok: false },
];

export default function MaCh05OrchestrationCaseClient({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  const chapter = getMaChapterBySlug(SLUG)!;
  const { prev, next } = getMaSeriesNav(SLUG);
  const base = ko ? "/deal-101" : "/en/deal-101";

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-2">
          <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500">
            <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} className="hover:text-gray-600 dark:hover:text-gray-300">Deal 101</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "M&A 시리즈 · Ch.5" : "M&A Series · Ch.5"}</span>
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-5 pt-6 pb-10">
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: `${ACCENT}15`, color: ACCENT }}>
              {ko ? "M&A 시리즈" : "M&A Series"} · Ch.5
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
              {chapter.readingMinutes}{ko ? "분" : " min"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            {ko ? chapter.titleKo : chapter.titleEn}
          </h1>
          <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
            {ko ? chapter.taglineKo : chapter.taglineEn}
          </p>
          <p className="mt-3 text-[12px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            {ko ? "케이스: " : "Cases: "}{ko ? chapter.caseKo : chapter.caseEn}
          </p>
        </section>

        {/* Series chapter pills */}
        <div className="max-w-3xl mx-auto px-5 mb-10">
          <div className="flex gap-1.5 flex-wrap">
            {MA_CHAPTERS.map((ch) => {
              const isCurrent = ch.slug === SLUG;
              const isDraft = ch.status !== "published";
              return (
                <Link
                  key={ch.slug}
                  href={`${base}/${ch.slug}`}
                  className={`text-[11px] px-3 py-1.5 rounded-full font-medium transition-colors ${
                    isCurrent
                      ? "text-white"
                      : isDraft
                      ? "text-gray-400 dark:text-gray-600 bg-gray-50 dark:bg-gray-800/40 cursor-not-allowed pointer-events-none"
                      : "text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  style={isCurrent ? { background: ACCENT } : {}}
                >
                  Ch.{ch.ch}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-5 pb-16 space-y-14">

          {/* § 1 — One line summary */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 1</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB의 진짜 일 — 일이 아니라 일하는 사람을 만든다" : "IB's real job — not the work, but who does the work"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Ch.3·4가 'IB는 FDD 숫자도 안 만들고 DCF model도 안 짠다, 그러면 뭘 하나' 의 답을 두 가지로 보여줬습니다 — story와 narrative. 그런데 그 story와 narrative가 가능하려면 4개 advisor (회계·컨설팅·법무·lender) 와 클라이언트가 같은 timeline, 같은 가정, 같은 정보 위에서 굴러가야 합니다. 그걸 시키는 게 orchestration입니다."
                : "Chapters 3 and 4 answered 'IB doesn't build FDD numbers or DCF models — so what does it do?' in two ways: story and narrative. But both presume four advisors (accounting, consultants, law firm, lenders) plus the client operate on the same timeline, same assumptions, and same information. Making that happen is orchestration."}</p>
              <p>{ko
                ? "Orchestration이 잘되면 보이지 않습니다. 그래서 famous orchestration case는 거의 다 위기 상황의 archetype 사례 — 1975년 NYC bailout이 대표적. 반대로 orchestration이 실패할 때는 사후적으로 명확히 드러납니다 — 가장 비싸게 드러난 게 Bayer × Monsanto의 $60B 가치 파괴. 두 케이스를 통해 orchestration이 무엇인지, 어디서 깨지는지 봅니다."
                : "Good orchestration is invisible. That's why famous orchestration cases tend to be crisis archetypes — the 1975 NYC bailout is canonical. Failed orchestration becomes visible only in hindsight — the most expensive recent example is the $60B value destruction at Bayer × Monsanto. Two cases to see what orchestration is and where it breaks."}</p>
            </motion.div>
          </motion.section>

          {/* § 2 — 4 tasks */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 2</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Orchestration의 4가지 task" : "The 4 orchestration tasks"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-5">
              <p>{ko
                ? "IB Lead의 orchestration은 4가지 task로 분해됩니다. 처음 3가지 (scope·timeline·escalation) 은 mechanical — process management 능력이면 됩니다. 4번째 (synthesis) 가 IB의 진짜 art이고, 여기서 실력 차이가 가장 크게 드러납니다."
                : "IB Lead orchestration breaks into four tasks. The first three (scope, timeline, escalation) are mechanical — process management is enough. The fourth (synthesis) is the real IB art, and the biggest skill gaps show up there."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="space-y-2">
              {TASKS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                  className="p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white" style={{ background: ACCENT }}>{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">{ko ? t.koTask : t.enTask}</p>
                    <p className="text-[12px] text-gray-600 dark:text-gray-400 mt-0.5 leading-snug">{ko ? t.koWhat : t.enWhat}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* § 3 — Synthesis */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 3</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Synthesis의 art — 4개 advisor를 한 narrative로" : "The art of synthesis — 4 advisors into one narrative"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "FAS가 EBITDA report 300p를 내고, 컨설팅이 CDD report 200p, 법무가 LDD report 400p, lender가 commitment letter 50p를 IB에게 보냅니다. 합치면 1,000p 가까운 양. CEO·이사회는 그걸 다 못 읽습니다. IB의 일은 이 1,000p를 한 page의 board memo로 압축하면서 ① 가격에 어떻게 반영되나, ② 리스크는 어디 있나, ③ negotiation에서 어디서 leverage가 있나 — 세 질문에 답하는 것."
                : "FAS sends a 300-page EBITDA report. Consulting sends a 200-page CDD. Law firm sends a 400-page LDD. Lenders send a 50-page commitment letter. Nearly 1,000 pages combined. The CEO and board can't read it all. The IB's job is compressing those 1,000 pages into a single-page board memo that answers three questions: (1) how does this reflect in price, (2) where are the risks, (3) where's our leverage in negotiation."}</p>
              <p>{ko
                ? "Synthesis가 잘 안 되면 advisor outputs는 각자 독립된 silo에 갇히고, IB는 단순히 \"reports를 전달하는 사람\" 이 됩니다. 그 순간 IB의 fee 정당성도 사라집니다. Synthesis가 잘 되면 4개 advisor의 outputs가 한 story로 합쳐져 buyer side와의 협상에서 weapon이 됩니다."
                : "When synthesis fails, advisor outputs sit in independent silos and IB becomes \"the person who forwards reports.\" At that point the IB fee loses its justification. When synthesis works, four advisors' outputs fuse into one story that becomes a weapon in negotiation with the buyer side."}</p>
            </motion.div>
          </motion.section>

          {/* § 4 — NYC bailout */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 4 · {ko ? "케이스 1" : "Case 1"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Felix Rohatyn × NYC bailout (1975) — orchestration의 archetype" : "Felix Rohatyn × NYC bailout (1975) — the orchestration archetype"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "1975년 가을, 뉴욕시는 디폴트 직전이었습니다. 시 채무 \\$14B, 매년 \\$3B 신규 채권 발행에 의존하던 구조가 깨지고, 1975년 10월 17일 — 시 정부 직원 급여 지급이 사실상 며칠 남지 않은 상태. Ford 행정부는 처음에 \"Drop dead\" 거절 (NY Daily News의 유명한 헤드라인). 이 위기를 풀어낸 사람이 Lazard의 Felix Rohatyn. 정식 자문 mandate는 작은 금액이었지만, 그가 한 일은 미국 IB 역사상 가장 famous한 orchestration."
                : "Fall 1975. New York City was hours from default. City debt of $14B, annual reliance on $3B in new bond issuance, structure broken. By October 17, 1975, the city was days from missing payroll. The Ford administration initially refused (the famous Daily News headline: \"Ford to City: Drop Dead\"). The person who untangled the crisis was Lazard's Felix Rohatyn. The formal advisory mandate was small, but what he did is the most famous orchestration in US IB history."}</p>
              <p>{ko
                ? "Rohatyn은 MAC (Municipal Assistance Corporation) 이라는 새 channel을 설계했습니다 — 주 정부가 만든 entity가 시 대신 채권을 발행해서 자금을 조달, 시는 MAC를 통해서만 차입 가능. 이게 가능하려면 6개 stakeholder 모두의 동의가 필요했습니다 — 시 정부, 주 정부, 연방 정부, Big Six 은행, 노조, bond 투자자. Rohatyn이 한 일은 이 6개 stakeholder를 한 줄로 세우는 것."
                : "Rohatyn designed MAC (Municipal Assistance Corporation) — a state-created entity that would issue bonds in the city's place, with the city borrowing only through MAC. Making it work required consent from six stakeholders: the city, the state, the federal government, the Big Six banks, the unions, and bond investors. Rohatyn's job was lining up all six."}</p>
            </motion.div>

            {/* NYC stakeholder map */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Rohatyn이 동시에 굴린 6개 stakeholder" : "The 6 stakeholders Rohatyn ran simultaneously"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {NYC_STAKEHOLDERS.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.05, ease: EASE }}
                    className="p-4 bg-white dark:bg-gray-900 flex items-start gap-3"
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold text-white" style={{ background: ACCENT }}>{i + 1}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 leading-snug">{ko ? s.koLabel : s.enLabel}</p>
                      <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-snug">{ko ? s.koRole : s.enRole}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "★ 가장 어려운 협상: 교사 노조 UFT 가 연금기금 \\$150M 을 하룻밤 사이에 MAC 채권으로 투자하기로 결정. 이게 default를 막은 결정적 순간." : "★ Hardest negotiation: the UFT teachers' union deciding overnight to invest $150M of pension funds in MAC bonds. The decisive moment that prevented default."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-blue-50/40 dark:bg-blue-950/20 border-blue-400 dark:border-blue-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 mb-1.5">
                {ko ? "Rohatyn이 가르쳐준 lesson" : "What Rohatyn taught"}
              </p>
              <p className="text-[13px] text-blue-900 dark:text-blue-100 leading-relaxed">
                {ko
                  ? "Orchestration은 단순히 stakeholder를 \"관리\" 하는 게 아니라, 각 stakeholder가 자기 이익에 맞게 움직이도록 information과 incentive를 디자인하는 것. Rohatyn이 6개 stakeholder마다 다른 narrative를 만들었다 — 시 정부에는 \"이거 안 하면 디폴트\", 노조에는 \"연금기금도 같이 죽는다\", 연방에는 \"NYC가 default하면 미국 municipal market 전체가 무너진다\". 같은 사실, 다른 framing."
                  : "Orchestration isn't simply 'managing' stakeholders — it's designing information and incentives so each stakeholder moves in their own interest. Rohatyn built a different narrative for each of the six: city government got 'no deal = default,' unions got 'your pension dies too,' the federal government got 'a NYC default destroys the entire US municipal market.' Same facts, different framings."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 5 — Bayer Monsanto */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 5 · {ko ? "케이스 2" : "Case 2"}</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "Bayer × Monsanto (2016) — operational 성공, 전략적 synthesis 실패" : "Bayer × Monsanto (2016) — operationally clean, strategically broken"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "Bayer × Monsanto는 orchestration의 어두운 측면을 보여줍니다 — operational orchestration은 완벽했지만 strategic synthesis가 실패했을 때 무슨 일이 일어나는지. 2016년 5월 Bayer가 Monsanto를 \\$66B에 인수 발표. Bayer advisor는 BofA Merrill Lynch (lead) + Credit Suisse + Rothschild. Monsanto는 Morgan Stanley + Ducera. 2년에 걸친 regulatory 통과 (EU, US, China, 등 30개국 이상) 그리고 2018년 6월 closing. 모든 advisor가 자기 task를 mechanical 하게 완수."
                : "Bayer × Monsanto shows orchestration's dark side — what happens when operational orchestration is flawless but strategic synthesis fails. In May 2016, Bayer announced a $66B acquisition of Monsanto. Bayer's advisors: BofA Merrill Lynch (lead), Credit Suisse, Rothschild. Monsanto's: Morgan Stanley, Ducera. Two years of regulatory clearance across 30+ jurisdictions including the EU, US, and China — then closing in June 2018. Every advisor executed their tasks mechanically."}</p>
              <p>{ko
                ? "Monsanto의 핵심 product 중 하나는 Roundup (glyphosate) 제초제. 인수 시점에 이미 Roundup-cancer 소송이 1,100건 진행 중이었고, 법무 DD report에 documented. 그런데 IB Lead의 synthesis 가 이 risk를 \"manageable\" 로 정리했고, Bayer 이사회도 그 framing을 받아들였습니다. Closing 2개월 후인 2018년 8월, Johnson v. Monsanto 첫 평결에서 배심원이 \\$289M 판결. 이후 매 분기마다 추가 판결 — 2020년 \\$10.9B 합의, 2024년 누적 충당금 \\$16B+."
                : "One of Monsanto's core products was Roundup (glyphosate) herbicide. At signing, 1,100 Roundup-cancer lawsuits were already pending, documented in the legal DD report. But the IB Lead's synthesis classified the risk as 'manageable,' and Bayer's board accepted that framing. Two months after closing, in August 2018, the Johnson v. Monsanto jury verdict came in at $289M. Verdicts compounded every quarter — a $10.9B settlement in 2020, cumulative reserves exceeding $16B by 2024."}</p>
            </motion.div>

            {/* Bayer timeline */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200 dark:border-gray-700">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                  {ko ? "Bayer × Monsanto — 가치 붕괴 timeline" : "Bayer × Monsanto — the value-destruction timeline"}
                </p>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {BAYER_TIMELINE.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={VP}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: EASE }}
                    className={`p-4 bg-white dark:bg-gray-900 flex items-start gap-3 ${!t.ok ? "border-l-4 border-rose-400" : ""}`}
                  >
                    <span className="flex-shrink-0 w-16 text-[11px] font-mono text-gray-500 dark:text-gray-400 pt-0.5">{ko ? t.koDate : t.enDate}</span>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[12px] font-bold leading-snug ${t.ok ? "text-gray-900 dark:text-gray-100" : "text-rose-700 dark:text-rose-300"}`}>{ko ? t.event : (t.enEvent || t.event)}</p>
                    </div>
                    <span className={`flex-shrink-0 text-[11px] font-mono font-bold ${t.ok ? "text-gray-500 dark:text-gray-400" : "text-rose-600 dark:text-rose-400"}`}>{ko ? t.koStock : t.enStock}</span>
                  </motion.div>
                ))}
              </div>
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-t border-gray-200 dark:border-gray-700 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                {ko ? "Bayer 시가총액 €100B → €25B = €75B (~\\$80B) 가치 파괴. 인수가 \\$66B 보다 큰 손실. 'Worst pharma deal' 평가가 굳어짐." : "Bayer's market cap fell from €100B to €25B — €75B (~$80B) destroyed, larger than the $66B purchase price itself. The 'worst pharma deal' label stuck."}
              </div>
            </motion.div>

            {/* Lesson */}
            <motion.div variants={fadeUp(0.2)} className="mt-6 rounded-2xl p-5 border-l-4 bg-rose-50/40 dark:bg-rose-950/20 border-rose-400 dark:border-rose-700">
              <p className="text-[10px] font-bold uppercase tracking-widest text-rose-700 dark:text-rose-300 mb-1.5">
                {ko ? "Bayer × Monsanto가 가르쳐준 lesson" : "What Bayer × Monsanto taught"}
              </p>
              <p className="text-[13px] text-rose-900 dark:text-rose-100 leading-relaxed">
                {ko
                  ? "Orchestration이 \"deal closing\" 만 의미하면 그건 mechanical execution이지 IB의 가치 추가가 아니다. Roundup 소송 정보는 모든 advisor 손에 있었고 deal data room에 있었지만, IB Lead의 synthesis가 그것을 \"manageable risk\" 로 reframed 했고 client는 그것을 받아들였다. 이건 orchestration의 가장 큰 functional risk — 정보의 양은 충분한데 synthesis가 잘못된 방향으로 결론 내릴 때."
                  : "If orchestration only means 'closing the deal,' it's mechanical execution — not IB value-add. The Roundup litigation data was in every advisor's hands and in the data room, but the IB Lead's synthesis reframed it as 'manageable risk' and the client accepted that framing. This is orchestration's biggest functional risk — when information volume is sufficient but synthesis points the wrong way."}
              </p>
            </motion.div>
          </motion.section>

          {/* § 6 — IB's job */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-1">§ 6</p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "IB Lead가 orchestration에서 실제로 하는 일" : "What IB Lead actually does in orchestration"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.1)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed space-y-4">
              <p>{ko
                ? "두 케이스 모두 advisor 4개 (또는 6개 stakeholder) 를 동시에 굴렸지만 결과는 정반대. Rohatyn은 각 stakeholder마다 다른 narrative를 만들어서 모두를 같은 방향으로 움직이게 했고, Bayer × Monsanto의 IB Lead 는 advisor outputs를 mechanical 하게 통합했지만 strategic risk를 client에게 명확히 전달하지 않았습니다. Orchestration의 본질은 \"누가 무엇을 알고 있어야 하는가\" 를 디자인하는 것."
                : "Both cases ran four advisors (or six stakeholders) in parallel — with opposite outcomes. Rohatyn built different narratives for each stakeholder, moving them all in the same direction. Bayer × Monsanto's IB Lead integrated advisor outputs mechanically but failed to deliver the strategic risk clearly to the client. The essence of orchestration is designing 'who needs to know what.'"}</p>
              <p>{ko
                ? "구체적으로 IB Lead가 결정해야 하는 4가지 — ① 각 advisor의 deliverable이 언제 누구에게 가는가, ② Advisor 간 conflict를 client까지 가기 전에 IB가 어떻게 해결하나, ③ 1,000p의 advisor reports를 client board가 actionable한 1p 로 어떻게 압축하나, ④ ★ Synthesis 가 어느 방향을 가리키는지 — defensible한 risk인지, manageable한 risk인지, deal-killing risk인지 — IB가 client에게 솔직하게 전달하는가."
                : "Specifically, the IB Lead has four decisions — (1) when each advisor's deliverable lands and with whom, (2) how to resolve inter-advisor conflicts at the IB level before they reach the client, (3) how to compress 1,000 pages of advisor reports into a single actionable page for the board, (4) ★ where the synthesis actually points — defensible risk, manageable risk, or deal-killing risk — and whether the IB delivers that honestly to the client."}</p>
            </motion.div>

            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl p-5 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "한 줄 정리" : "One line"}</p>
              <p className="text-[14px] text-gray-900 dark:text-gray-100 leading-relaxed font-medium">
                {ko
                  ? "Orchestration이 \"deal을 closing 시키는\" 것이면 commodity execution. \"client가 진짜 risk를 보고 결정하게 하는\" 것이면 IB의 가치."
                  : "If orchestration means 'closing the deal,' it's commodity execution. If it means 'making the client see the real risk before deciding,' it's IB value."}
              </p>
            </motion.div>
          </motion.section>

          {/* 한 줄 정리 */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="rounded-2xl p-5 sm:p-6" style={{ border: `1px solid ${ACCENT}40`, background: `${ACCENT}0F` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: ACCENT }}>{ko ? "한 줄로 정리하면" : "In one line"}</p>
              <p className="text-[15px] font-semibold text-gray-900 dark:text-gray-100 leading-relaxed">{ko
                ? "딜은 가격만으로 되지 않는다. 누구에게 언제 무엇을 보여주고 경쟁 긴장을 어떻게 설계하느냐가 최종 가격을 만든다. 그게 IB의 오케스트레이션이다."
                : "A deal isn't just price. Who you show what and when, and how you engineer competitive tension — that's what makes the final number. That's IB orchestration."}</p>
            </div>
          </motion.section>

          {/* Next chapter preview */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP}>
            <div className="rounded-2xl p-5 sm:p-6 border-2 border-dashed" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}08` }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-1.5" style={{ color: ACCENT }}>{ko ? "다음 챕터" : "Next chapter"}</p>
              <p className="text-[15px] font-bold text-gray-900 dark:text-gray-100 mb-1.5">
                Ch.6 — {ko ? "가격 협상 + 클로징 막판" : "Final Negotiation + Closing"}
              </p>
              <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">
                {ko
                  ? "FDD·valuation·orchestration이 다 끝나도 마지막 단계가 남는다 — SPA 조항이 가격을 어떻게 흔드는지, 막판 regulatory가 deal을 어떻게 깨는지. 실제 케이스로."
                  : "Even with FDD, valuation, and orchestration done, the last stage remains — how SPA terms shift price, and how last-mile regulatory kills deals. Through real cases."}
              </p>
            </div>
          </motion.section>

          {/* Share */}
          <div className="pt-4 border-t border-gray-200/60 dark:border-gray-700/60">
            <ShareButtons lang={lang} title={ko ? chapter.titleKo : chapter.titleEn} />
          </div>

          {/* Series prev/next */}
          {(prev || next) && (
            <SeriesNav
              lang={lang}
              prev={prev ? { href: `${base}/${prev.slug}`, title: ko ? prev.titleKo : prev.titleEn } : null}
              next={next ? { href: `${base}/${next.slug}`, title: ko ? next.titleKo : next.titleEn } : null}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
