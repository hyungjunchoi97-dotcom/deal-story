"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, LineChart, Line, Legend,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

type Lang = "ko" | "en";
interface Props { concept: MarketConcept; lang: Lang; }

// ── 색상 & 상수 ─────────────────────────────────────────────────────────────
const ACCENT      = "#14b8a6"; // teal-500
const ACCENT_LIGHT = "#f0fdfa"; // teal-50
const EASE: [number,number,number,number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});

// ── 시리즈 네비게이션 ────────────────────────────────────────────────────────
const THIS_CH = "syndicated-loan-overview";
const SYNDLOAN_SERIES = [
  { slug: "syndicated-loan-overview",  ch: "Ch.0", title: "왜 은행들은 뭉치는가",       titleEn: "Why Banks Pool Together" },
  { slug: "syndicated-loan-players",   ch: "Ch.1", title: "플레이어와 수익구조",         titleEn: "Players & Economics" },
  { slug: "syndicated-loan-process",   ch: "Ch.2", title: "딜 프로세스 실무",            titleEn: "Deal Process in Practice" },
  { slug: "syndicated-loan-docs",      ch: "Ch.3", title: "문서와 코버넌트",             titleEn: "Documentation & Covenants" },
  { slug: "syndicated-loan-cases",     ch: "Ch.4", title: "케이스스터디: 성공 vs 실패",  titleEn: "Case Studies: Win vs Fail" },
];

function ChapterNav({ ko }: { ko: boolean }) {
  const base = ko ? "/market-101" : "/en/market-101";
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {SYNDLOAN_SERIES.map((ch) => {
        const active = ch.slug === THIS_CH;
        return (
          <Link key={ch.slug} href={`${base}/${ch.slug}`}>
            <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-colors ${
              active
                ? "text-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-900/30 hover:text-teal-700 dark:hover:text-teal-300"
            }`} style={active ? { background: ACCENT } : {}}>
              {ch.ch}
              <span className="hidden sm:inline">— {ko ? ch.title : ch.titleEn}</span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}

// ── 차트 데이터 ──────────────────────────────────────────────────────────────
// 글로벌 신디케이티드론 발행 규모 ($ trillion, LSEG LPC 기준)
const MARKET_DATA = [
  { year: "2019", total: 4.6, ig: 2.7, lev: 1.6, other: 0.3 },
  { year: "2020", total: 4.2, ig: 2.5, lev: 1.4, other: 0.3 },
  { year: "2021", total: 5.5, ig: 3.1, lev: 2.1, other: 0.3 },
  { year: "2022", total: 4.7, ig: 2.8, lev: 1.6, other: 0.3 },
  { year: "2023", total: 3.9, ig: 2.3, lev: 1.3, other: 0.3 },
];

// BIS RWA 집중 리스크 시뮬레이션: 한 은행이 혼자 빌려줄 경우 vs 20개 분산
const CONCENTRATION_DATA_RAW = [
  { nameKo: "단독 대출", nameEn: "Single Lender", rwa: 100, color: "#f87171" },
  { nameKo: "10개 분산", nameEn: "10-Bank Syndicate", rwa: 12, color: "#fb923c" },
  { nameKo: "20개 분산", nameEn: "20-Bank Syndicate", rwa: 6, color: ACCENT },
];

// 스프레드 비교 (bps over SOFR)
const SPREAD_DATA = [
  { type: "IG RCF", spread: 90, color: ACCENT },
  { type: "IG TLA", spread: 130, color: "#2dd4bf" },
  { type: "Lev TLB BB", spread: 375, color: "#f59e0b" },
  { type: "Lev TLB B", spread: 475, color: "#f97316" },
  { type: "Lev TLB CCC", spread: 650, color: "#ef4444" },
];

// ── 비유 박스 컴포넌트 ───────────────────────────────────────────────────────
function AnalogyBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border-l-4 bg-amber-50 dark:bg-amber-900/15 p-5" style={{ borderColor: "#f59e0b" }}>
      <div className="flex items-start gap-3">
        <span className="text-2xl flex-shrink-0">💡</span>
        <div className="text-[13px] text-amber-900 dark:text-amber-200 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

// ── 실무 박스 컴포넌트 ───────────────────────────────────────────────────────
function PracticeBox({ title, children, ko = true }: { title: string; children: React.ReactNode; ko?: boolean }) {
  return (
    <div className="my-5 rounded-xl border border-teal-200 dark:border-teal-700/50 bg-teal-50/60 dark:bg-teal-900/15 p-5">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>
          {ko ? "실무" : "In Practice"}
        </span>
        <span className="text-[13px] font-bold text-teal-800 dark:text-teal-200">{title}</span>
      </div>
      <div className="text-[13px] text-teal-900 dark:text-teal-200 leading-relaxed">{children}</div>
    </div>
  );
}

// ── 커스텀 툴팁 ──────────────────────────────────────────────────────────────
function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: {name:string;value:number;color:string}[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 shadow-lg text-[12px]">
      <p className="font-bold text-gray-700 dark:text-gray-200 mb-1">{label}</p>
      {payload.map((p) => (
        <p key={p.name} style={{ color: p.color }}>{p.name}: <strong>${p.value}T</strong></p>
      ))}
    </div>
  );
}

// ── FAQ 데이터 ───────────────────────────────────────────────────────────────
const FAQ_KO = [
  {
    q: "신디케이티드론과 회사채(HY/IG 채권)는 어떻게 다른가요?",
    a: "채권은 자본시장(공개시장)에서 불특정 다수 투자자에게 발행됩니다. 반면 신디케이티드론은 은행·CLO 등 기관 투자자 그룹에 사모(私募) 형태로 제공되는 대출입니다. 채권은 고정금리·공시 의무가 있고, 신디론은 SOFR+스프레드의 변동금리·비공개 정보를 다룹니다. 또한 채권은 후순위(unsecured) 경향, TLB는 담보(secured) 설정이 일반적입니다.",
  },
  {
    q: "언더라이트(Underwrite)와 베스트에포트(Best Efforts)의 실질적 차이는?",
    a: "Underwrite는 MLA가 '시장이 받아주지 않아도 내가 책임진다'는 약속입니다. 참여은행을 못 모으면 MLA가 전액 보유(hung deal)합니다. 이 경우 MLA의 자본과 신용이 묶이므로 언더라이팅 수수료가 훨씬 높습니다. 반면 Best Efforts는 '최선을 다하지만 보장은 없다'입니다. 시장이 안 받아주면 딜이 취소됩니다. 대형 우량 차주(IG)는 Best Efforts로도 충분하지만, 레버리지드 딜에서 PE 스폰서는 확실성을 위해 언더라이트를 요구합니다.",
  },
  {
    q: "IG 신디론과 레버리지드론을 운용하는 은행이 같은 팀인가요?",
    a: "아닙니다. 대부분의 대형 IB에서는 완전히 분리됩니다. IG 신디론은 Investment Grade DCM/Corporate Banking 팀이 담당하고, 레버리지드론은 Leveraged Finance(LevFin) 팀이 담당합니다. 투자자 베이스도 다릅니다: IG는 주로 관계 은행들, 레버리지드는 CLO 매니저·헤지펀드·크레딧 펀드가 주요 투자자입니다.",
  },
  {
    q: "Analyst가 신디론 딜에서 실제로 가장 많이 하는 작업은?",
    a: "Information Memorandum(IM) 작성이 가장 큰 작업입니다. IM은 잠재적 참여은행에게 '왜 이 회사에 돈을 빌려줘야 하는가'를 설득하는 50~150페이지 문서입니다. 이 안에 회사 소개·산업 분석·재무 모델·부채 구조·리스크 팩터가 들어갑니다. 그 외에 코버넌트 헤드룸 분석 시트, 컴프 딜 리서치, 레버리지·커버리지 메트릭 계산, 참여은행 배분 시트 관리 등이 일상 업무입니다.",
  },
  {
    q: "왜 레버리지드론 시장에서 Cov-lite가 이렇게 많아졌나요?",
    a: "공급·수요 모두의 결과입니다. 수요 측면: CLO가 레버리지드론 수요의 60~70%를 차지하는데, CLO 매니저들은 빠른 실행력과 투자 제한 완화를 원합니다. 공급 측면: PE 스폰서들이 포트폴리오 경영 유연성을 원하며 강력한 협상력을 가집니다. 2008년 이전 약 30%였던 Cov-lite 비율이 2023년에는 85%+에 달합니다. 문제는 위기 시 조기 경보 역할을 하는 Maintenance Covenant가 없어지면서 디폴트 직전까지 은행이 모른다는 점입니다.",
  },
];

const FAQ_EN = [
  {
    q: "How is a syndicated loan different from a bond (HY or IG)?",
    a: "Bonds are issued in the public capital markets to a broad base of investors. Syndicated loans are private credit facilities provided by a club of banks and institutional investors. Bonds carry fixed rates and disclosure obligations; syndicated loans price at SOFR+spread (floating) and deal in non-public information. Additionally, bonds tend to be unsecured while TLBs are typically secured against the borrower's assets.",
  },
  {
    q: "What's the practical difference between Underwrite and Best Efforts?",
    a: "Underwrite means the MLA commits to fund the full facility even if it can't syndicate it to other lenders — the bank is 'on the hook.' If syndication fails, the MLA holds it as a hung deal, tying up its capital and credit. As a result, arrangement fees on underwritten deals are significantly higher. Best Efforts means the MLA will try its best but guarantees nothing — if the market doesn't respond, the deal falls through. Large IG corporates can afford Best Efforts, but PE sponsors in leveraged buyouts typically demand underwrite certainty.",
  },
  {
    q: "Do IG syndicated loans and leveraged loans sit in the same bank team?",
    a: "No — in most major banks they are entirely separate. IG syndicated loans are handled by the Investment Grade DCM or Corporate Banking team, while leveraged loans sit in the Leveraged Finance (LevFin) team. The investor bases are different too: IG loans primarily attract relationship banks, while leveraged loans are dominated by CLO managers, hedge funds, and credit funds.",
  },
  {
    q: "What does an Analyst actually spend most time on in a syndicated loan deal?",
    a: "Writing the Information Memorandum (IM) is by far the biggest task. The IM is a 50–150 page document that persuades potential lender-participants why they should lend to this borrower. It contains company overview, industry analysis, financial model, debt structure, and risk factors. Beyond that: covenant headroom analysis, comp deal research, leverage/coverage metric calculations, and managing lender allocation sheets.",
  },
  {
    q: "Why has the leveraged loan market become so dominated by cov-lite?",
    a: "It's a supply-and-demand outcome. Demand side: CLOs account for 60–70% of leveraged loan demand, and CLO managers prefer speed of execution and fewer investment restrictions. Supply side: PE sponsors want operational flexibility in their portfolio companies and wield significant negotiating power. Cov-lite was ~30% pre-2008 and now exceeds 85%. The key risk: with maintenance covenants gone, banks lose the early warning system — they often don't know a borrower is in trouble until a default event actually triggers.",
  },
];

// ── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function SyndicatedLoanOverviewClient({ concept, lang }: Props) {
  const ko = lang === "ko";
  const concentrationData = CONCENTRATION_DATA_RAW.map((d) => ({
    ...d,
    name: ko ? d.nameKo : d.nameEn,
  }));

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        <div className="max-w-3xl mx-auto px-5 py-10">

          {/* ── 브레드크럼 ── */}
          <motion.div variants={fadeUp(0)} initial="hidden" animate="show"
            className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
            <Link href={ko ? "/" : "/en"} className="hover:text-teal-600 transition-colors">{ko ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-teal-600 transition-colors">{ko ? "마켓 101" : "Market 101"}</Link>
            <span>›</span>
            <span className="text-gray-600 dark:text-gray-300 font-medium">{ko ? "신디케이티드론" : "Syndicated Loans"}</span>
          </motion.div>

          {/* ── 헤더 ── */}
          <motion.div variants={fadeUp(0.05)} initial="hidden" animate="show">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white" style={{ background: ACCENT }}>DCM</span>
              <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">Ch.0 / 5</span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">{concept.readingMinutes}{ko ? "분 읽기" : " min read"}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 leading-tight mb-3">
              {ko ? concept.title : concept.titleEn}
            </h1>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
              {ko ? concept.excerpt : concept.excerptEn}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-300 border border-teal-200/60 dark:border-teal-700/40">{t}</span>
              ))}
            </div>
            <ShareButtons
              title={ko ? concept.title : (concept.titleEn || concept.title)}
              lang={lang}
            />
          </motion.div>

          {/* ── 챕터 네비게이션 ── */}
          <motion.div variants={fadeUp(0.1)} initial="hidden" animate="show" className="mt-8">
            <ChapterNav ko={ko} />
          </motion.div>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 1 — 30초 요약: 신디케이티드론이란
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "30초 요약" : "30-Second Summary"}
            </h2>
            <p className="text-[13px] text-gray-500 dark:text-gray-400 mb-6">
              {ko ? "신디케이티드론의 핵심을 숫자로 먼저 잡아봅니다." : "The key numbers that define the syndicated loan market."}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: ko ? "연간 발행 규모" : "Annual issuance", value: "$4T+", sub: ko ? "글로벌" : "Global" },
                { label: ko ? "단일 딜 평균 규모" : "Avg deal size", value: "$500M", sub: ko ? "~수십조원" : "~₩65T" },
                { label: ko ? "참여 은행 수" : "Lender count", value: "3~100+", sub: ko ? "딜당" : "per deal" },
                { label: ko ? "CLO 수요 비중" : "CLO demand", value: "60~70%", sub: ko ? "레버리지드론" : "of lev loans" },
              ].map((s) => (
                <div key={s.label} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4 text-center">
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-1">{s.label}</p>
                  <p className="text-2xl font-extrabold" style={{ color: ACCENT }}>{s.value}</p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* 글로벌 시장 규모 차트 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "글로벌 신디케이티드론 발행 규모 ($ Trillion)" : "Global Syndicated Loan Volume ($ Trillion)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">Source: LSEG LPC</p>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={MARKET_DATA} barSize={28}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} tickFormatter={(v) => `$${v}T`} domain={[0, 6]} />
                  <Tooltip formatter={(v) => [`$${Number(v).toFixed(1)}T`, ""]} />
                  <Legend wrapperStyle={{ fontSize: 11 }} />
                  <Bar dataKey="ig" name={ko ? "IG 기업" : "IG Corporate"} stackId="a" fill={ACCENT} />
                  <Bar dataKey="lev" name={ko ? "레버리지드" : "Leveraged"} stackId="a" fill="#f59e0b" />
                  <Bar dataKey="other" name={ko ? "기타(PF 등)" : "Other (PF etc.)"} stackId="a" fill="#d1d5db" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 2 — 왜 은행들은 혼자 못 빌려주는가
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "왜 은행 하나가 다 빌려줄 수 없는가" : "Why a Single Bank Cannot Fund It All"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "신디케이션의 존재 이유는 세 가지 제약에서 출발합니다: 규제·집중 리스크·관계."
                : "Syndication exists because of three binding constraints: regulation, concentration risk, and relationships."}
            </p>

            <AnalogyBox>
              <strong>{ko ? "삼성전자 100조 대출 시나리오" : "Samsung ₩100T Loan Scenario"}</strong>
              <br /><br />
              {ko
                ? <>삼성전자가 반도체 라인 증설을 위해 ₩100조(약 $750B)를 빌리려 한다고 가정해봅니다. 국내 최대 은행 KB국민은행의 총자산은 약 600조원. BIS 규정상 단일 차주 익스포져 한도는 자기자본의 25%이므로, 국민은행 단독으로는 최대 약 5~6조원밖에 빌려줄 수 없습니다.
                <br /><br />
                여기에 더해, 만약 은행이 전액을 빌려준다면: (1) 대출자산의 상당 부분이 삼성 하나에 묶임 — 삼성이 흔들리면 은행도 흔들림. (2) 수십 년 동안 유동성이 잠김. (3) 관계 딜을 못 하게 된 다른 은행들과의 관계가 훼손됨.
                <br /><br />
                해결책: 20개 은행이 각자 5조원씩 나눠서 빌려준다. 이게 신디케이티드론의 탄생 배경입니다.</>
                : <>Suppose Samsung Electronics needs ₩100T (approx. $750B) to build new semiconductor fabs. KB Kookmin Bank — Korea's largest — has total assets of roughly ₩600T. BIS single-name concentration limits cap exposure at 25% of Tier 1 capital, meaning KB could lend at most ₩5-6T on its own.
                <br /><br />
                If a single bank funded everything: (1) a huge share of its book is tied to one name — if Samsung stumbles, so does the bank; (2) liquidity is locked up for decades; (3) rival banks lose relationship access, damaging the broader banking relationship ecosystem.
                <br /><br />
                The solution: 20 banks each contribute ₩5T. That is the origin story of syndicated lending.</>
              }
            </AnalogyBox>

            <div className="grid gap-4 sm:grid-cols-3 mt-6">
              {[
                {
                  icon: "🏛️",
                  title: ko ? "① BIS 자기자본 규제" : "① BIS Capital Rules",
                  body: ko
                    ? "Basel III RWA 규정: 단일 차주 익스포져가 커질수록 자기자본 요구량이 급증합니다. 100%짜리 기업 대출 1,000억은 RWA 100% 적용 → Tier 1 자본 8% = 80억 필요. 신디케이션으로 50억씩 나누면 각 은행은 4억만 묶으면 됩니다."
                    : "Basel III RWA rules: as single-name exposure grows, capital requirements spike. A ₩100B corporate loan at 100% RWA requires ₩8B in Tier 1 capital. Syndicate it 20-ways and each bank only needs ₩400M tied up.",
                },
                {
                  icon: "⚖️",
                  title: ko ? "② 집중 리스크" : "② Concentration Risk",
                  body: ko
                    ? "단일 차주가 전체 대출 포트폴리오의 5%를 넘으면 은행 내부 리스크 위원회가 제동을 겁니다. 2022년 Credit Suisse의 몰락에서 보듯, 특정 익스포져 집중은 은행 전체 건전성을 위협합니다. 분산이 리스크 관리의 핵심입니다."
                    : "Internal risk committees brake when a single borrower exceeds ~5% of the loan book. As Credit Suisse's 2022 collapse showed, concentrated exposures threaten whole-bank health. Diversification is not just regulatory — it is existential risk management.",
                },
                {
                  icon: "🤝",
                  title: ko ? "③ 관계 관리" : "③ Relationship Management",
                  body: ko
                    ? "삼성전자는 JP모간·씨티·HSBC 등 글로벌 20개 은행과 관계를 유지합니다. 만약 JP모간 하나가 전액 독점한다면 나머지 19개 은행은 FX, 파생상품, M&A 자문 기회를 잃습니다. 신디케이션은 '관계 나눔'의 공식 채널입니다."
                    : "Samsung maintains relationships with 20+ global banks. If JPMorgan locked up the entire facility, the other 19 banks lose FX, derivatives, and M&A advisory revenue. Syndication is the formal mechanism for sharing relationship economics across the banking consortium.",
                },
              ].map((c) => (
                <div key={c.title} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-4">
                  <span className="text-2xl mb-2 block">{c.icon}</span>
                  <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-2">{c.title}</h3>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 3 — 신디케이션 메커니즘: 어떻게 작동하는가
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "신디케이션 메커니즘: 어떻게 작동하는가" : "The Syndication Mechanism: How It Works"}
            </h2>

            <AnalogyBox>
              <strong>{ko ? "아파트 PF 비유 — 총괄 시공사와 하도급업체" : "Construction Finance Analogy — General Contractor & Subcontractors"}</strong>
              <br /><br />
              {ko
                ? <>3,000억짜리 대형 아파트를 짓는다고 생각해봅시다. 현대건설(MLA)이 시행사(차주)로부터 시공을 수주합니다. 현대건설이 전체를 혼자 짓기엔 자금과 전문 인력이 부족하므로, 전기는 A업체, 배관은 B업체, 인테리어는 C업체에 하도급을 줍니다.
                <br /><br />
                핵심: 시행사 입장에선 현대건설 하나와만 계약합니다(창구 단일화). 하지만 실제로는 20개 하도급업체가 뒤에서 움직입니다. MLA가 정확히 이 역할입니다 — 차주는 MLA 하나와 협상하고, MLA는 참여은행들에게 딜을 배분합니다.</>
                : <>Imagine building a large apartment complex worth ₩300B. Hyundai E&C (the MLA) wins the mandate from the developer (the borrower). Since Hyundai can't do everything itself, it subcontracts: electrical to company A, plumbing to B, interiors to C.
                <br /><br />
                The key: the developer signs one contract with Hyundai E&C (single counterparty). But 20 subcontractors are moving behind the scenes. The MLA plays exactly this role — the borrower negotiates with one MLA, and the MLA allocates the deal to participant banks.</>
              }
            </AnalogyBox>

            {/* 프로세스 플로우 */}
            <div className="mt-6 space-y-2">
              {[
                { step: "01", label: ko ? "Mandate 수임" : "Mandate Award", desc: ko ? "차주가 MLA를 선정. 경쟁 pitch 또는 관계로 결정" : "Borrower selects the MLA via competitive pitch or relationship" },
                { step: "02", label: ko ? "언더라이트 또는 베스트에포트 결정" : "Underwrite or Best Efforts", desc: ko ? "MLA가 전액 보증할지(Underwrite) 또는 최선만 다할지(Best Efforts) 결정 → 수수료와 위험 배분이 달라짐" : "MLA decides whether to commit to full amount (underwrite) or use best efforts only → affects fees and risk allocation" },
                { step: "03", label: ko ? "Term Sheet & Credit Approval" : "Term Sheet & Credit Approval", desc: ko ? "금리·만기·코버넌트 등 핵심 조건 확정. 내부 신용 위원회 승인" : "Key terms confirmed: rate, tenor, covenants. Internal credit committee approval" },
                { step: "04", label: ko ? "Information Memorandum(IM) 작성" : "Information Memorandum (IM)", desc: ko ? "Analyst가 밤새 만드는 50~150페이지 투자 제안서. 차주 비즈니스·재무 분석·리스크 팩터 포함" : "Analyst-built 50–150 page investment document: business overview, financial analysis, risk factors" },
                { step: "05", label: ko ? "Lender Meeting & 북빌딩" : "Lender Meeting & Bookbuilding", desc: ko ? "잠재 참여은행 대상 로드쇼. 관심 금액(order) 취합 → 오버서브면 Flex down(스프레드 인하)" : "Roadshow to potential lenders. Orders collected → if oversubscribed, flex down (tighten spread)" },
                { step: "06", label: ko ? "Allocation & Signing" : "Allocation & Signing", desc: ko ? "최종 배분 확정. 법적 Facility Agreement 서명. 에이전트 은행이 행정 관리 시작" : "Final allocations set. Legal Facility Agreement executed. Agent bank begins administrative management" },
              ].map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VP}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: EASE }}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-extrabold text-white" style={{ background: ACCENT }}>
                    {s.step}
                  </span>
                  <div>
                    <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{s.label}</p>
                    <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <PracticeBox ko={ko} title={ko ? "Analyst 관점: IM에서 뭘 써야 하는가" : "Analyst View: What Goes Into an IM"}>
              {ko
                ? <>IM(Information Memorandum)은 신디론 딜의 심장입니다. 전형적인 IM 목차는 이렇습니다:
                  <br /><br />
                  <strong>1. Executive Summary</strong> — 딜 하이라이트·자본구조 요약·투자 포인트 3가지 (1~2쪽)<br />
                  <strong>2. Transaction Overview</strong> — Facility 종류·금액·만기·용도·담보 구조<br />
                  <strong>3. Business Description</strong> — 회사 소개·사업 모델·경쟁 포지션·주요 고객<br />
                  <strong>4. Industry Analysis</strong> — 시장 규모·성장률·경쟁 구도·규제 환경<br />
                  <strong>5. Financial Analysis</strong> — 3개년 실적·EBITDA bridge·FCF·부채 상환 스케줄·Sensitivity<br />
                  <strong>6. Debt Structure</strong> — Tranche별 조건·코버넌트·담보 설명<br />
                  <strong>7. Risk Factors</strong> — 산업 리스크·재무 리스크·실행 리스크<br /><br />
                  Analyst는 섹션 2·3·4·5 초안 작성이 주 업무. 재무 모델에서 나온 숫자를 IM에 정확하게 반영하는 것이 핵심 스킬입니다.</>
                : <>The IM (Information Memorandum) is the heart of a syndicated loan deal. A typical IM structure:
                  <br /><br />
                  <strong>1. Executive Summary</strong> — Deal highlights, capital structure overview, 3 investment points (1–2 pages)<br />
                  <strong>2. Transaction Overview</strong> — Facility type, size, tenor, use of proceeds, collateral package<br />
                  <strong>3. Business Description</strong> — Company intro, business model, competitive position, key customers<br />
                  <strong>4. Industry Analysis</strong> — Market size, growth, competitive dynamics, regulatory environment<br />
                  <strong>5. Financial Analysis</strong> — 3-year historical, EBITDA bridge, FCF, debt repayment schedule, sensitivity<br />
                  <strong>6. Debt Structure</strong> — Tranche terms, covenants, collateral description<br />
                  <strong>7. Risk Factors</strong> — Industry, financial, and execution risks<br /><br />
                  Analysts primarily own sections 2, 3, 4, and 5. Accurately translating financial model outputs into IM narrative is the core skill.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 4 — IG vs 레버리지드: 완전히 다른 두 세계
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "IG vs 레버리지드: 완전히 다른 두 세계" : "IG vs Leveraged: Two Completely Different Worlds"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko
                ? "신디케이티드론이라는 이름은 같지만 IG와 레버리지드는 투자자·구조·코버넌트·문화까지 완전히 다릅니다."
                : "The name 'syndicated loan' is shared, but IG and leveraged are different in investors, structure, covenants, and culture."}
            </p>

            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left px-4 py-3 font-bold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900">{ko ? "구분" : "Category"}</th>
                    <th className="text-left px-4 py-3 font-bold bg-teal-50 dark:bg-teal-900/20" style={{ color: ACCENT }}>IG {ko ? "신디론" : "Syndicated Loan"}</th>
                    <th className="text-left px-4 py-3 font-bold bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400">{ko ? "레버리지드론 (TLB)" : "Leveraged Loan (TLB)"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    [ko?"차주 신용등급":"Borrower Rating", "BBB- 이상 / BBB- or above", "BB 이하, 비등급 / BB or below, unrated"],
                    [ko?"주요 목적":"Primary Purpose", ko?"운전자금·M&A·CapEx":"Working capital, M&A, CapEx", ko?"LBO·PE 바이아웃·리파이낸싱":"LBO, PE buyout, refinancing"],
                    [ko?"주요 상품":"Main Product", ko?"RCF (리볼빙)":"RCF (Revolving Credit Facility)", ko?"Term Loan B (TLB) — 불릿":"Term Loan B (TLB) — bullet"],
                    [ko?"투자자":"Investors", ko?"관계 은행 (상업은행)":"Relationship banks (commercial)", ko?"CLO 60~70%, 크레딧 펀드":"CLO 60–70%, credit funds"],
                    [ko?"금리":"Pricing", "SOFR + 50~150bp", "SOFR + 300~600bp"],
                    [ko?"코버넌트":"Covenants", ko?"Maintenance (매 분기 테스트)":"Maintenance (quarterly testing)", ko?"Incurrence (Cov-Lite) 85%+":"Incurrence (Cov-Lite) 85%+"],
                    [ko?"담보":"Security", ko?"무담보(Unsecured) 일반":"Typically unsecured", ko?"유담보(Secured) — 1st Lien":"Typically secured — 1st Lien"],
                    [ko?"만기":"Tenor", "3~5년 (Revolver)", "5~7년 (Term Loan)"],
                    [ko?"팀":"Bank Team", ko?"DCM / Corporate Banking":"DCM / Corporate Banking", ko?"LevFin (Leveraged Finance)":"Leveraged Finance (LevFin)"],
                  ].map(([cat, ig, lev]) => (
                    <tr key={String(cat)} className="hover:bg-gray-50 dark:hover:bg-gray-800/40 transition-colors">
                      <td className="px-4 py-3 font-semibold text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-900/50">{cat}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-teal-50/20 dark:bg-teal-900/10">{ig}</td>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-300 bg-amber-50/20 dark:bg-amber-900/10">{lev}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 스프레드 비교 차트 */}
            <div className="mt-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-5">
              <p className="text-[13px] font-bold text-gray-700 dark:text-gray-200 mb-1">
                {ko ? "등급별 스프레드 (bps over SOFR, 2023년 기준)" : "Spread by Rating (bps over SOFR, 2023)"}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">Source: LSEG LPC, S&P Global</p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={SPREAD_DATA} layout="vertical" barSize={18}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis type="number" tick={{ fontSize: 11 }} tickFormatter={(v) => `${v}bp`} />
                  <YAxis type="category" dataKey="type" tick={{ fontSize: 11 }} width={90} />
                  <Tooltip formatter={(v) => [`${v}bp`, "Spread"]} />
                  <Bar dataKey="spread">
                    {SPREAD_DATA.map((d, i) => <Cell key={i} fill={d.color} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <PracticeBox ko={ko} title={ko ? "Associate 관점: 두 팀의 문화 차이" : "Associate View: Cultural Differences Between Teams"}>
              {ko
                ? <>IG DCM 팀과 LevFin 팀은 같은 은행 안에서도 문화가 완전히 다릅니다.
                <br /><br />
                <strong>IG DCM/Corporate Banking:</strong> 관계 중심. 삼성·SK·LG 같은 대기업과의 장기 관계가 자산입니다. 딜 타임라인이 비교적 느리고, 가격보다 신뢰와 서비스 품질이 우선됩니다. 차주가 필요할 때 언제든 빌릴 수 있게 RCF를 유지하는 것이 핵심 가치입니다.
                <br /><br />
                <strong>LevFin:</strong> 거래 중심. PE 스폰서와의 관계가 핵심 자산입니다. 딜 타임라인이 빠르고(주말에 서명), 가격 경쟁이 치열합니다. 스폰서는 다음 딜을 어느 은행에 줄지 항상 비교하고 있습니다. 가격(OID·스프레드)이 결정적이며, IM 품질이 딜을 따오는 데 직결됩니다.</>
                : <>IG DCM and LevFin teams have completely different cultures even within the same bank.
                <br /><br />
                <strong>IG DCM/Corporate Banking:</strong> Relationship-driven. Long-term relationships with Samsung, SK, LG and similar corporates are the bank's franchise. Deal timelines are slower; trust and service quality matter more than price. The core value proposition is being available as a committed facility whenever the corporate needs capital.
                <br /><br />
                <strong>LevFin:</strong> Transaction-driven. PE sponsor relationships are the key asset. Deal timelines are fast (weekend signings are normal), price competition is fierce. Sponsors constantly compare banks for the next mandate. OID and spread are decisive. IM quality directly wins or loses mandates.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 5 — 핵심 플레이어 지도
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "핵심 플레이어 지도: 누가 무엇을 하는가" : "Player Map: Who Does What"}
            </h2>

            <div className="grid gap-4">
              {[
                {
                  role: ko ? "차주 (Borrower)" : "Borrower",
                  icon: "🏢",
                  color: "bg-gray-100 dark:bg-gray-800",
                  borderColor: "border-gray-300 dark:border-gray-600",
                  desc: ko
                    ? "돈이 필요한 주체. IG 기업(애플·삼성전자) 또는 PE 스폰서가 보유한 포트폴리오 기업(Toys'R'Us·Hilton). 차주는 MLA와만 협상하고, 내부 은행 구성은 신경 쓰지 않습니다."
                    : "The entity that needs funds. Either an IG corporate (Apple, Samsung) or a PE-sponsored portfolio company (Toys'R'Us, Hilton). The borrower negotiates only with the MLA and doesn't concern itself with the internal lender syndicate.",
                  earn: ko ? "없음 (지불하는 쪽)" : "None (pays fees)",
                },
                {
                  role: ko ? "MLA / 주선은행 (Mandated Lead Arranger)" : "MLA (Mandated Lead Arranger)",
                  icon: "🎯",
                  color: "bg-teal-50 dark:bg-teal-900/20",
                  borderColor: "border-teal-300 dark:border-teal-700",
                  desc: ko
                    ? "딜의 설계자이자 총괄책임자. 차주로부터 mandate를 따내고, term sheet를 구성하고, 언더라이트 여부를 결정하고, IM을 만들고, 참여은행 모집을 주도합니다. 딜 크레딧(League Table)과 관계 자산을 동시에 챙깁니다."
                    : "The architect and lead conductor of the deal. Wins the mandate, structures the term sheet, decides on underwrite commitment, builds the IM, and leads lender recruitment. Captures both deal credit (league table) and relationship value.",
                  earn: ko ? "Arrangement Fee 100~200bp (전체의 80~90%)" : "Arrangement fee 100–200bp (keeps 80–90%)",
                },
                {
                  role: ko ? "에이전트 은행 (Facility Agent)" : "Facility / Security Agent",
                  icon: "📋",
                  color: "bg-blue-50 dark:bg-blue-900/20",
                  borderColor: "border-blue-300 dark:border-blue-700",
                  desc: ko
                    ? "딜이 서명된 후 전체 라이프사이클을 관리하는 행정 허브. 이자 계산·송금 지시·인출 통보·코버넌트 준수 모니터링·Amendment 취합 등을 담당합니다. MLA가 겸임하거나 별도 행정 전문 은행이 맡습니다. Security Agent는 담보를 실제로 보유합니다."
                    : "The administrative hub managing the facility's entire lifecycle post-signing. Calculates and distributes interest, processes drawdown notices, monitors covenant compliance, and coordinates amendments. May be the MLA or a specialist bank. The Security Agent physically holds collateral on behalf of all lenders.",
                  earn: ko ? "Agency Fee $50K~200K/년 (고정)" : "Agency fee $50K–200K/year (fixed)",
                },
                {
                  role: ko ? "참여은행 (Participants / Lenders)" : "Participants / Lenders",
                  icon: "🏦",
                  color: "bg-violet-50 dark:bg-violet-900/20",
                  borderColor: "border-violet-300 dark:border-violet-700",
                  desc: ko
                    ? "IM을 보고 딜에 합류하는 은행·CLO·크레딧 펀드·헤지펀드. IG 딜은 관계 은행이 주를 이루고, 레버리지드 딜은 CLO 매니저가 60~70%를 차지합니다. 참여자는 직접 차주와 대화하지 않고 에이전트를 통해서만 소통합니다."
                    : "Banks, CLOs, credit funds, and hedge funds that join the deal after reviewing the IM. IG deals are dominated by relationship banks; leveraged deals are 60–70% CLO managers. Participants communicate with the borrower only through the agent — never directly.",
                  earn: ko ? "Participation Fee 25~75bp (MLA에서 배분)" : "Participation fee 25–75bp (allocated from MLA)",
                },
              ].map((p) => (
                <div key={p.role} className={`rounded-xl border ${p.borderColor} ${p.color} p-5`}>
                  <div className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{p.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-2">
                        <h3 className="text-[14px] font-extrabold text-gray-900 dark:text-gray-100">{p.role}</h3>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/70 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 font-semibold">
                          {ko ? "수익" : "Revenue"}: {p.earn}
                        </span>
                      </div>
                      <p className="text-[12px] text-gray-600 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 6 — 언더라이트 vs 베스트에포트: 위험의 소재
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "언더라이트 vs 베스트에포트: 위험은 누구 것인가" : "Underwrite vs Best Efforts: Who Owns the Risk"}
            </h2>

            <AnalogyBox>
              <strong>{ko ? "집 매매 중개 vs 매매 보장 비유" : "Real Estate Brokerage vs Guaranteed Purchase"}</strong>
              <br /><br />
              {ko
                ? <>베스트에포트는 "최선을 다해 집을 팔아드리겠습니다"는 부동산 중개인입니다. 안 팔리면 중개인에게는 책임이 없습니다. 반면 언더라이트는 "1달 안에 안 팔리면 내가 시장가에 삽니다"라고 확약하는 중개인입니다. 이 확약 덕분에 집 주인(차주)은 확실하게 자금을 조달할 수 있지만, 시장이 나쁘면 중개인(MLA)이 떠안아야 합니다.</>
                : <>Best Efforts is a real estate agent who says: "I'll do my best to sell your house." If it doesn't sell, the agent bears no liability. Underwrite is an agent who says: "If it's not sold in a month, I'll buy it at market price myself." This guarantee gives the seller (borrower) funding certainty, but if the market turns bad, the agent (MLA) has to absorb it.</>
              }
            </AnalogyBox>

            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              <div className="rounded-xl border border-teal-200 dark:border-teal-700 bg-teal-50 dark:bg-teal-900/20 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🔒</span>
                  <h3 className="text-[14px] font-extrabold text-teal-800 dark:text-teal-200">{ko ? "언더라이트 (Underwrite)" : "Underwrite"}</h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "MLA가 전액 인수 보증 — 참여은행 모집 실패해도 MLA가 보유",
                    "차주 입장: 100% 확실하게 자금 조달 가능",
                    "MLA 입장: Hung deal 위험 → 자기자본·유동성 소모",
                    "수수료 높음: Arrangement fee 100~200bp",
                    "사용처: LBO(PE 스폰서가 확실성 요구), 대형 M&A bridge",
                  ] : [
                    "MLA commits to fund 100% — holds any portion unsyndicated",
                    "Borrower gets certainty: funds guaranteed regardless of market",
                    "MLA risk: hung deal — capital and liquidity tied up",
                    "Higher fees: arrangement fee 100–200bp",
                    "Used for: LBO financing (PE demands certainty), large M&A bridges",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-teal-500 flex-shrink-0 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">🤲</span>
                  <h3 className="text-[14px] font-extrabold text-gray-800 dark:text-gray-200">{ko ? "베스트에포트 (Best Efforts)" : "Best Efforts"}</h3>
                </div>
                <ul className="space-y-2 text-[12px] text-gray-600 dark:text-gray-400">
                  {(ko ? [
                    "MLA는 최선을 다하지만 잔액 보증 없음",
                    "시장이 나쁘면 딜 취소 or 조건 재협상 필요",
                    "MLA 입장: 자본 위험 없음 → 수수료 낮아도 경쟁 가능",
                    "수수료 낮음: Arrangement fee 25~75bp",
                    "사용처: IG 기업 RCF(시장 신뢰도 높음), 친숙한 차주",
                  ] : [
                    "MLA uses best efforts but makes no commitment on residual",
                    "If market is cold, deal may be pulled or terms renegotiated",
                    "MLA: no balance sheet risk → competitive on lower fees",
                    "Lower fees: arrangement fee 25–75bp",
                    "Used for: IG corporate RCFs (high market confidence), familiar borrowers",
                  ]).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-gray-400 flex-shrink-0 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <PracticeBox ko={ko} title={ko ? "MD 관점: 언더라이트 결정의 실제 논리" : "MD View: The Real Logic Behind the Underwrite Decision"}>
              {ko
                ? <>언더라이트 여부는 결국 "이 시장이 이 딜을 받아줄 것인가"에 대한 MD의 판단입니다. 고려 요소:
                  <br /><br />
                  <strong>① 차주 신용도:</strong> IG 기업이라면 베스트에포트로도 충분. BB 이하면 언더라이트가 필요.
                  <br />
                  <strong>② 시장 컨디션:</strong> 크레딧 스프레드가 급등 중이면 언더라이트 수수료가 높아야 함. 2022년 LevFin 시장이 얼어붙었을 때 Twitter(Musk) 인수금융($13B)을 언더라이트했던 7개 은행은 수십억 달러 손실을 봤습니다.
                  <br />
                  <strong>③ 은행 자체 익스포져:</strong> 해당 섹터에 이미 많은 포지션이 있다면 언더라이트를 꺼림.
                  <br />
                  <strong>④ 경쟁:</strong> 경쟁 은행이 언더라이트를 제안했다면 거절 시 관계 훼손.</>
                : <>The underwrite decision is ultimately the MD's judgment on "will the market take this deal?" Key considerations:
                  <br /><br />
                  <strong>① Borrower quality:</strong> IG is fine on best efforts. BB or below usually requires underwrite commitment.
                  <br />
                  <strong>② Market conditions:</strong> If credit spreads are spiking, underwrite fees must compensate. When LevFin froze in 2022, the 7 banks that underwrote Twitter's ($13B) acquisition financing took multi-billion dollar losses.
                  <br />
                  <strong>③ Bank's own book:</strong> If a bank already has heavy sector exposure, it won't want to underwrite more.
                  <br />
                  <strong>④ Competition:</strong> If a rival offers underwrite and you don't, you risk losing the relationship.</>
              }
            </PracticeBox>
          </motion.section>

          {/* ═══════════════════════════════════════════════════════════════════
              섹션 7 — 케이스스터디 예고: 같은 구조, 다른 결말
          ═══════════════════════════════════════════════════════════════════ */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-2">
              {ko ? "케이스 예고: 같은 신디론, 다른 결말" : "Case Preview: Same Structure, Different Outcomes"}
            </h2>
            <p className="text-[14px] text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {ko ? "Ch.4에서 깊이 다룰 두 딜을 미리 소개합니다." : "A preview of the two deals we'll dissect in Ch.4."}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-teal-200 dark:border-teal-700 p-5 bg-teal-50/40 dark:bg-teal-900/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">✅</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: ACCENT }}>성공</span>
                  <span className="text-[13px] font-extrabold text-gray-900 dark:text-gray-100">ARM Holdings</span>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 mb-3">
                  {ko
                    ? "$10B 신디케이티드 패키지 (2023). SoftBank 보유 지분 담보 + 나스닥 IPO 전 브릿지. 11개 MLA, 3일 만에 오버서브스크라이브."
                    : "$10B syndicated package (2023). SoftBank equity pledge as collateral + Nasdaq IPO bridge. 11 MLAs, oversubscribed in 3 days."}
                </p>
                <div className="space-y-1.5">
                  {(ko
                    ? ["명확한 리파이낸싱 경로 (IPO)", "반도체 IP 라이선싱 — 경기 방어적 수익", "IG급 스폰서 신용도", "시장 적기: 금리 하락 기대"]
                    : ["Clear refinancing path via IPO", "Semiconductor IP licensing — counter-cyclical revenue", "IG-equivalent sponsor credit", "Market timing: rate cut expectations"]
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[12px] text-teal-800 dark:text-teal-200">
                      <span className="text-teal-500">✓</span>{item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-rose-200 dark:border-rose-700 p-5 bg-rose-50/40 dark:bg-rose-900/15">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xl">❌</span>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white bg-rose-500">실패</span>
                  <span className="text-[13px] font-extrabold text-gray-900 dark:text-gray-100">Toys&#39;R&#39;Us</span>
                </div>
                <p className="text-[12px] text-gray-600 dark:text-gray-400 mb-3">
                  {ko
                    ? "$5B 레버리지드론 (2005 LBO). KKR·Bain·Vornado 인수금융. 12년 후 2017년 파산."
                    : "$5B leveraged loan (2005 LBO). KKR·Bain·Vornado acquisition financing. Bankrupt 12 years later in 2017."}
                </p>
                <div className="space-y-1.5">
                  {(ko
                    ? ["Cov-Lite — 조기 경보 없음", "Amazon이 오프라인 리테일을 붕괴시킴", "고정 임차료 $400M/년 — 탈출구 없음", "리파이낸싱 시장 접근 불가"]
                    : ["Cov-Lite — no early warning system", "Amazon dismantled offline retail", "Fixed lease burden $400M/year — no escape", "Refinancing market access cut off"]
                  ).map((item) => (
                    <div key={item} className="flex items-center gap-2 text-[12px] text-rose-800 dark:text-rose-200">
                      <span className="text-rose-400">✗</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
              💬 {ko
                ? "두 딜 모두 당시 기준으로 '좋은 딜'이었습니다. ARM은 기술·수익·구조 세 박자가 맞았고, Toys'R'Us는 2005년 시점에서 DCF·레버리지 메트릭 모두 통과했습니다. 차이는 코버넌트 구조와 산업 변화 속도였습니다. Ch.4에서 조건 하나하나를 해부합니다."
                : "Both deals looked 'good' by contemporary standards. ARM hit on technology, revenue, and structure. Toys'R'Us cleared all DCF and leverage metrics in 2005. The difference was covenant structure and the pace of industry disruption. We'll dissect every term in Ch.4."}
            </div>
          </motion.section>

          {/* ── FAQ ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-14">
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-100 mb-6">FAQ</h2>
            <FaqAccordion items={ko ? FAQ_KO : FAQ_EN} accent={ACCENT} />
          </motion.section>

          {/* ── 시리즈 네비게이션 (하단) ── */}
          <motion.div variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[12px] font-bold text-gray-500 dark:text-gray-400">{ko ? "신디케이티드론 101 시리즈" : "Syndicated Loans 101 Series"}</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {SYNDLOAN_SERIES.slice(1).map((ch) => (
                <Link key={ch.slug} href={`${ko ? "/market-101" : "/en/market-101"}/${ch.slug}`}>
                  <div className="group flex items-center gap-3 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-700 hover:shadow-sm transition-all bg-white dark:bg-gray-900">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0" style={{ background: ACCENT }}>{ch.ch}</span>
                    <span className="text-[13px] font-semibold text-gray-700 dark:text-gray-300 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors">
                      {ko ? ch.title : ch.titleEn}
                    </span>
                    <span className="ml-auto text-teal-500 dark:text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* ── 소스 ── */}
          <motion.section variants={fadeUp()} initial="hidden" whileInView="show" viewport={VP} className="mb-8">
            <h2 className="text-base font-bold text-gray-700 dark:text-gray-200 mb-3">{ko ? "참고 자료" : "References"}</h2>
            <ol className="space-y-1.5 text-[11px] text-gray-400 dark:text-gray-500">
              {[
                "LSEG LPC (2024). Global Syndicated Loans Review.",
                "LMA (2023). Recommended Form of Facility Agreement.",
                "S&P Global Market Intelligence (2023). Leveraged Loan Primer.",
                "Bank for International Settlements (2023). Basel III: Capital Requirements for Credit Risk.",
                "Moody's (2022). Annual Default Study: Corporate Default and Recovery Rates.",
                "Reuters (2023). Twitter Acquisition Financing: Banks' Hung Deal Analysis.",
                "Fitch Ratings (2023). CLO Demand and Leveraged Loan Market Dynamics.",
              ].map((ref, i) => (
                <li key={i}>[{i + 1}] {ref}</li>
              ))}
            </ol>
          </motion.section>

          <ShareButtons
            title={ko ? concept.title : (concept.titleEn || concept.title)}
            lang={lang}
          />

        </div>
      </main>
      <Footer />
    </>
  );
}
