"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ALL_DEALS } from "@/data/deals";
import { ALL_DEALS_EN } from "@/data/deals/en";

// ── 타입 ────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

type ConceptItem = {
  slug: string;
  term: string;
  tagline: string;
  category: string;
  published: boolean;
};

// ── KO 개념 카탈로그 ──────────────────────────────────────────────────────────
const KO_CONCEPT_CATALOG: ConceptItem[] = [
  // 밸류에이션
  { slug: "ev-ebitda",            term: "EV/EBITDA 멀티플",                    tagline: "M&A 가격 협상의 출발점 — 기업가치를 영업 현금창출력으로 나눈 핵심 지표",                                                      category: "밸류에이션",  published: true  },
  { slug: "adjusted-ebitda",      term: "Adjusted EBITDA — 조정의 전쟁",       tagline: "EV = Multiple × EBITDA — EBITDA 조정이 곱셈으로 매각가에 증폭된다. 1회성 판정 기준과 이해관계자 충돌 지도",                     category: "밸류에이션",  published: true  },
  { slug: "synergy",              term: "시너지 (Synergy)",                     tagline: "M&A 프리미엄의 근거 — Cost Synergy vs Revenue Synergy, 그리고 왜 70%의 M&A가 시너지를 달성 못하는가",                         category: "밸류에이션",  published: true  },
  { slug: "acquisition-premium",  term: "인수 프리미엄",                        tagline: "왜 시장가보다 30~40% 더 내는가 — 시너지·경영권·희소성이 만드는 프리미엄의 원천",                                               category: "밸류에이션",  published: true  },
  { slug: "ev-sales",             term: "EV/Sales 멀티플",                     tagline: "EBITDA 적자 성장기 기업을 평가할 때 쓰는 매출 기반 밸류에이션 — Slack 26x, Figma 50x의 근거",                                  category: "밸류에이션",  published: true  },
  { slug: "arr-multiple",         term: "ARR 멀티플",                          tagline: "SaaS 기업 전용 — 연간반복매출 대비 기업가치 배수와 버블·조정 사이클",                                                           category: "밸류에이션",  published: true  },
  { slug: "saas-valuation",       term: "SaaS 밸류에이션",                      tagline: "ARR·NRR·Rule of 40 — 구독 소프트웨어 기업을 완전히 다른 방식으로 평가하는 이유",                                               category: "밸류에이션",  published: true  },
  // 딜 구조
  { slug: "ma-process",           term: "M&A 프로세스 완전 정리",               tagline: "전략 수립부터 클로징까지 6단계 — 이해관계자·핵심 문서·딜이 성공하고 실패하는 이유",                                             category: "딜 구조",    published: true  },
  { slug: "lbo",                  term: "LBO (레버리지 바이아웃)",               tagline: "타깃의 현금흐름을 담보로 차입해 에쿼티 투입을 최소화하는 PE 핵심 전략 — KKR의 RJR 나비스코부터 현대 PE까지",                     category: "딜 구조",    published: true  },
  { slug: "tender-offer",         term: "공개매수 (Tender Offer)",              tagline: "이사회를 건너뛰고 주주에게 직접 매수 제안 — 머스크·트위터부터 방어 전략까지",                                                    category: "딜 구조",    published: true  },
  { slug: "spinoff",              term: "스핀오프 (Spin-off)",                  tagline: "사업부를 독립 법인으로 분리해 숨겨진 가치를 꺼내는 전략 — PayPal, GE 3분할",                                                    category: "딜 구조",    published: true  },
  { slug: "reverse-morris-trust", term: "Reverse Morris Trust",                tagline: "스핀오프 후 합병으로 수십억 달러 세금을 절감하는 구조 — AT&T·WarnerMedia 사례",                                                  category: "딜 구조",    published: true  },
  { slug: "stock-vs-asset-deal",  term: "주식 인수 vs 자산 인수",               tagline: "같은 회사를 인수해도 구조 하나로 세금·부채·리스크가 달라진다 — Stock Deal vs Asset Deal 결정 기준",                             category: "딜 구조",    published: true  },
  { slug: "pmi",                  term: "PMI (인수 후 통합)",                   tagline: "딜이 끝난 뒤 진짜 전쟁 — 조직·IT·문화 통합 실패가 M&A 가치를 갉아먹는 이유",                                                    category: "딜 구조",    published: true  },
  { slug: "ipo-vs-ma-exit",       term: "IPO vs M&A 엑싯",                     tagline: "PE·VC 포트폴리오 매각의 두 갈래 — 상장과 전략적 매각 중 어떤 선택이 더 유리한가",                                               category: "딜 구조",    published: true  },
  { slug: "break-fee",            term: "Break-up Fee",                        tagline: "딜 파기 시 일방이 지급하는 위약금 — 딜 완결 의지를 나타내는 신호",                                                               category: "딜 구조",    published: true  },
  { slug: "mac-clause",           term: "MAC 조항",                            tagline: "서명 후 대상 기업에 중대한 부정적 변화 발생 시 인수자가 계약을 파기할 수 있는 조항",                                               category: "딜 구조",    published: true  },
  // LBO 시리즈
  { slug: "lbo-overview",          term: "LBO 101 Ch.0 — LBO의 본질",           tagline: "레버리지로 기업을 사는 수학: 수익 증폭 메커니즘, 7가지 타겟 기준, GP/LP Carry Waterfall, Blackstone/Hilton·TXU 케이스",        category: "LBO 시리즈", published: true  },
  { slug: "lbo-capital-structure", term: "LBO 101 Ch.1 — 자본구조 완전 해부",   tagline: "TLA·TLB·Senior Notes·Mezz·PIK Toggle·Equity — 부채 피라미드, Covenant-Lite, DSCR, Hilton 2007 실제 구조",                  category: "LBO 시리즈", published: true  },
  { slug: "lbo-returns",           term: "LBO 101 Ch.2 — 리턴 분석",           tagline: "MOIC·IRR 충돌 시나리오, J-커브, 가치창출 3대 드라이버(EBITDA·멀티플·부채상환), Vintage Year 효과",                            category: "LBO 시리즈", published: true  },
  { slug: "lbo-deal-process",      term: "LBO 101 Ch.3 — 딜 프로세스 & 리스크", tagline: "6단계 딜 타임라인, Sources & Uses, Maturity Wall, TXU·Toys'R'Us·Caesars 실패 / Alliance Boots 성공 해부",                   category: "LBO 시리즈", published: true  },
  // 규제·법률
  { slug: "antitrust",            term: "반독점 규제 (Antitrust)",              tagline: "M&A가 시장 경쟁을 해치는지 각국 경쟁 당국이 심사하는 절차 — Adobe×Figma 파국의 진짜 이유",                                      category: "규제·법률",  published: true  },
  { slug: "regulatory-risk",      term: "M&A 규제 리스크",                     tagline: "반독점·안보심사·섹터 규제까지 — 딜을 막는 5가지 보이지 않는 벽과 대응 전략",                                                      category: "규제·법률",  published: true  },
  // 실사
  { slug: "fdd",                  term: "재무 실사 (FDD)",                     tagline: "재무제표 이면을 파헤치는 실사 — 정상화 EBITDA·운전자본·잠재부채를 검증하는 방법론",                                               category: "실사",       published: true  },
  { slug: "cdd",                  term: "상업 실사 (CDD)",                     tagline: "시장·고객·경쟁 구도를 검증해 성장 가정의 현실성을 따지는 실사",                                                                   category: "실사",       published: true  },
  { slug: "ldd",                  term: "법무 실사 (LDD)",                     tagline: "계약·소송·지식재산·규제 리스크를 발굴해 딜 파기 또는 가격 조정의 근거를 만드는 실사",                                             category: "실사",       published: true  },
  // 전략
  { slug: "strategic-ma",         term: "전략적 M&A",                         tagline: "재무 수익이 아닌 시장 지위·기술·인재 확보 — Meta×Instagram $1B가 왜 역대 최고의 딜인가",                                          category: "전략",       published: true  },
  { slug: "vertical-integration", term: "수직 통합",                           tagline: "공급망을 직접 소유해 원가·품질·경쟁을 통제하는 전략 — Amazon·Apple이 왜 모든 것을 만드는가",                                      category: "전략",       published: true  },
  { slug: "subscription-economy", term: "구독 경제",                           tagline: "일회성 판매에서 ARR로 — Adobe가 $10B에서 $330B이 된 구독 전환의 경제학",                                                         category: "전략",       published: true  },
  { slug: "platform-strategy",    term: "플랫폼 전략",                         tagline: "네트워크 효과가 만드는 M&A 프리미엄 — Google×YouTube, Microsoft×LinkedIn의 공통점",                                             category: "전략",       published: true  },
  { slug: "competitive-moat",     term: "경쟁 해자",                           tagline: "버핏의 해자 개념으로 보는 M&A 멀티플 — 네트워크 효과·전환 비용·브랜드·규모의 경제",                                              category: "전략",       published: true  },
];

// ── EN 개념 카탈로그 ──────────────────────────────────────────────────────────
const EN_CONCEPT_CATALOG: ConceptItem[] = [
  // Valuation
  { slug: "ev-ebitda",            term: "EV/EBITDA Multiple",                 tagline: "The starting point of any M&A price conversation — enterprise value divided by operating cash generation",                              category: "Valuation",          published: true },
  { slug: "adjusted-ebitda",      term: "Adjusted EBITDA",                    tagline: "EV = Multiple × EBITDA — why every add-back is a battle, who benefits, and how FDD teams push back",                                    category: "Valuation",          published: true },
  { slug: "synergy",              term: "Synergy",                            tagline: "The justification for the M&A premium — Cost Synergy vs Revenue Synergy, and why 70% of deals miss their targets",                      category: "Valuation",          published: true },
  { slug: "acquisition-premium",  term: "Acquisition Premium",                tagline: "Why buyers pay 30–40% above market — the sources of control, synergy, and scarcity premiums",                                           category: "Valuation",          published: true },
  { slug: "ev-sales",             term: "EV/Sales Multiple",                  tagline: "Revenue-based valuation when EBITDA is negative — the math behind Slack at 26x and Figma at 50x",                                       category: "Valuation",          published: true },
  { slug: "arr-multiple",         term: "ARR Multiple",                       tagline: "SaaS-specific valuation — enterprise value vs annual recurring revenue through bubble and correction",                                    category: "Valuation",          published: true },
  { slug: "saas-valuation",       term: "SaaS Valuation",                     tagline: "ARR, NRR, Rule of 40 — why subscription software businesses are valued on completely different terms",                                    category: "Valuation",          published: true },
  // Deal Structure
  { slug: "ma-process",           term: "The M&A Process, End to End",        tagline: "Six phases from strategy to closing — stakeholders, key documents, and why deals succeed or fail",                                       category: "Deal Structure",      published: true },
  { slug: "lbo",                  term: "LBO (Leveraged Buyout)",              tagline: "Using the target's own cash flows as collateral to minimize equity — from KKR's RJR Nabisco to modern PE",                              category: "Deal Structure",      published: true },
  { slug: "tender-offer",         term: "Tender Offer",                       tagline: "Going directly to shareholders, bypassing the board — from Musk's Twitter gambit to hostile defense strategies",                         category: "Deal Structure",      published: true },
  { slug: "spinoff",              term: "Spin-off",                           tagline: "Separating a unit to unlock hidden value — PayPal from eBay, GE's three-way breakup",                                                    category: "Deal Structure",      published: true },
  { slug: "reverse-morris-trust", term: "Reverse Morris Trust",               tagline: "Spin off, then merge — saving billions in taxes on a large divestiture (AT&T / WarnerMedia)",                                           category: "Deal Structure",      published: true },
  { slug: "stock-vs-asset-deal",  term: "Stock Deal vs Asset Deal",           tagline: "Same company, different structure — one choice shifts taxes, liabilities, and risk between buyer and seller",                            category: "Deal Structure",      published: true },
  { slug: "pmi",                  term: "PMI (Post-Merger Integration)",       tagline: "The real war starts after signing — why org, IT, and culture failures destroy the value M&A promised",                                  category: "Deal Structure",      published: true },
  { slug: "ipo-vs-ma-exit",       term: "IPO vs M&A Exit",                    tagline: "Two paths for PE/VC portfolio exits — when a public listing beats a strategic sale, and when it doesn't",                               category: "Deal Structure",      published: true },
  { slug: "break-fee",            term: "Break-up Fee",                       tagline: "Termination fee paid if a party walks away — signals deal conviction and negotiating leverage",                                          category: "Deal Structure",      published: true },
  { slug: "mac-clause",           term: "MAC Clause",                         tagline: "Allows the buyer to exit if a materially adverse change occurs between signing and closing",                                             category: "Deal Structure",      published: true },
  // Regulatory & Legal
  { slug: "antitrust",            term: "Antitrust Review",                   tagline: "How competition authorities assess whether a deal harms market competition — the real reason Adobe×Figma collapsed",                    category: "Regulatory & Legal",  published: true },
  { slug: "regulatory-risk",      term: "Regulatory Risk in M&A",             tagline: "Antitrust, national security, sector regulators — five invisible walls that can kill any deal",                                          category: "Regulatory & Legal",  published: true },
  // Due Diligence
  { slug: "fdd",                  term: "Financial Due Diligence (FDD)",       tagline: "Behind the financial statements — normalizing EBITDA, working capital, and uncovering hidden liabilities",                              category: "Due Diligence",       published: true },
  { slug: "cdd",                  term: "Commercial Due Diligence (CDD)",      tagline: "Market, customer, and competitive reality-testing — validating the growth story before you sign",                                       category: "Due Diligence",       published: true },
  { slug: "ldd",                  term: "Legal Due Diligence (LDD)",           tagline: "Surfacing contract, litigation, IP, and regulatory risk — the evidence that kills deals or adjusts price",                              category: "Due Diligence",       published: true },
  // Strategy
  { slug: "strategic-ma",         term: "Strategic M&A",                      tagline: "Market position, technology, and talent over pure financial returns — why Meta paid $1B for Instagram with zero revenue",               category: "Strategy",            published: true },
  { slug: "vertical-integration", term: "Vertical Integration",               tagline: "Owning the supply chain to control cost, quality, and competition — why Amazon and Apple make everything themselves",                    category: "Strategy",            published: true },
  { slug: "subscription-economy", term: "Subscription Economy",               tagline: "From one-time sales to ARR — the economics of Adobe's journey from $10B to $330B",                                                      category: "Strategy",            published: true },
  { slug: "platform-strategy",    term: "Platform Strategy",                  tagline: "Network effects and the M&A premium — what Google × YouTube and Microsoft × LinkedIn have in common",                                   category: "Strategy",            published: true },
  { slug: "competitive-moat",     term: "Competitive Moat",                   tagline: "Buffett's moat framework applied to M&A multiples — network effects, switching costs, brands, scale",                                   category: "Strategy",            published: true },
];

// ── 카테고리 순서 ─────────────────────────────────────────────────────────────
const KO_CATEGORIES = ["밸류에이션", "딜 구조", "LBO 시리즈", "실사", "규제·법률", "전략"] as const;
const EN_CATEGORIES = ["Valuation", "Deal Structure", "Due Diligence", "Regulatory & Legal", "Strategy"] as const;

// ── KO 카테고리 메타데이터 ─────────────────────────────────────────────────────
const KO_CAT_META: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string }> = {
  "밸류에이션":  { letter: "A", icon: "📊", desc: "기업가치·멀티플·프리미엄·SaaS 지표",      dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",    badgeFg: "text-blue-700 dark:text-blue-300"    },
  "딜 구조":    { letter: "B", icon: "🏗️", desc: "M&A 프로세스·공개매수·스핀오프·통합",       dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300"  },
  "LBO 시리즈": { letter: "C", icon: "💰", desc: "LBO 101 — 자본구조·리턴 분석·딜 프로세스", dot: "bg-indigo-400",  badgeBg: "bg-indigo-50 dark:bg-indigo-900/30", badgeFg: "text-indigo-700 dark:text-indigo-300" },
  "실사":       { letter: "D", icon: "🔍", desc: "재무·상업·법무 실사 방법론",                dot: "bg-violet-400",  badgeBg: "bg-violet-50 dark:bg-violet-900/30", badgeFg: "text-violet-700 dark:text-violet-300" },
  "규제·법률":  { letter: "E", icon: "⚖️", desc: "반독점·안보심사·섹터 규제 리스크",           dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",    badgeFg: "text-rose-700 dark:text-rose-300"    },
  "전략":       { letter: "F", icon: "🎯", desc: "전략적 M&A·플랫폼·해자·수직통합",           dot: "bg-emerald-400", badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",badgeFg: "text-emerald-700 dark:text-emerald-300"},
};

// ── EN 카테고리 메타데이터 ─────────────────────────────────────────────────────
const EN_CAT_META: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string }> = {
  "Valuation":          { letter: "A", icon: "📊", desc: "EV/EBITDA, multiples, premiums & SaaS metrics",          dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",    badgeFg: "text-blue-700 dark:text-blue-300"    },
  "Deal Structure":     { letter: "B", icon: "🏗️", desc: "M&A process, LBO, spin-offs & integration",              dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300"  },
  "Due Diligence":      { letter: "C", icon: "🔍", desc: "Financial, commercial & legal diligence methods",         dot: "bg-violet-400",  badgeBg: "bg-violet-50 dark:bg-violet-900/30", badgeFg: "text-violet-700 dark:text-violet-300" },
  "Regulatory & Legal": { letter: "D", icon: "⚖️", desc: "Antitrust, national security & sector regulation",       dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",    badgeFg: "text-rose-700 dark:text-rose-300"    },
  "Strategy":           { letter: "E", icon: "🎯", desc: "Strategic M&A, platforms, moats & vertical integration", dot: "bg-emerald-400", badgeBg: "bg-emerald-50 dark:bg-emerald-900/30",badgeFg: "text-emerald-700 dark:text-emerald-300"},
};

// ── 딜 연결 수 (모듈 로드 시 1회 계산) ────────────────────────────────────────
const dealCountBySlugKo: Record<string, number> = {};
for (const concept of KO_CONCEPT_CATALOG) {
  const href = `/deal-101/${concept.slug}`;
  dealCountBySlugKo[concept.slug] = ALL_DEALS.filter((d) =>
    d.concepts?.some((c) => c.href === href)
  ).length;
}

const dealCountBySlugEn: Record<string, number> = {};
for (const concept of EN_CONCEPT_CATALOG) {
  const href = `/learn/${concept.slug}`;
  dealCountBySlugEn[concept.slug] = ALL_DEALS_EN.filter((d) =>
    d.concepts?.some((c) => c.href === href)
  ).length;
}

// ── 애니메이션 ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.3, ease: EASE, delay: i * 0.04 },
  }),
};

// ── 개념 행 (공개) ─────────────────────────────────────────────────────────────
function ConceptRow({
  concept, index, dealCount, lang,
}: {
  concept: ConceptItem;
  index: number;
  dealCount: number;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const base = ko ? "/deal-101" : "/en/deal-101";
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`${base}/${concept.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {concept.term}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-2 leading-relaxed">
              {concept.tagline}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0 pt-0.5">
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {ko ? "학습하기 →" : "Read →"}
            </span>
            {dealCount > 0 && (
              <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {ko ? `딜 ${dealCount}개에서 등장` : `in ${dealCount} ${dealCount === 1 ? "deal" : "deals"}`}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 개념 행 (준비 중) ──────────────────────────────────────────────────────────
function UnpublishedRow({
  concept, index, lang,
}: {
  concept: ConceptItem;
  index: number;
  lang: Lang;
}) {
  const ko = lang === "ko";
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <div className="flex items-start gap-3 p-3.5 rounded-lg opacity-50">
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-gray-400 dark:text-gray-600 leading-snug line-clamp-1">
            {concept.term}
          </p>
          <p className="mt-0.5 text-[11px] text-gray-300 dark:text-gray-700 line-clamp-1">
            {concept.tagline}
          </p>
        </div>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
          {ko ? "준비 중" : "Coming soon"}
        </span>
      </div>
    </motion.div>
  );
}

// ── 카테고리 폴더 ─────────────────────────────────────────────────────────────
function CategoryFolder({
  category, concepts, defaultOpen, lang, catMeta, dealCounts,
}: {
  category: string;
  concepts: ConceptItem[];
  defaultOpen: boolean;
  lang: Lang;
  catMeta: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string }>;
  dealCounts: Record<string, number>;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ko = lang === "ko";
  const meta = catMeta[category];
  const published = concepts.filter((c) => c.published);
  const unpublished = concepts.filter((c) => !c.published);
  const total = concepts.length;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open
          ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
          : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
      }`}
    >
      {/* ── 폴더 헤더 ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${meta.dot}`} />

        {/* 레터 배지 */}
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white flex-shrink-0 transition-all duration-200 ${meta.dot} ${open ? "" : "opacity-80"}`}
        >
          {meta.letter}
        </div>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {category}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${meta.badgeBg} ${meta.badgeFg}`}>
              {ko ? `개념 ${published.length}` : `concepts ${published.length}`}
            </span>
            {unpublished.length > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                {ko ? `준비 중 ${unpublished.length}` : `soon ${unpublished.length}`}
              </span>
            )}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {meta.desc}
          </p>
        </div>

        {/* 항목 수 + 시보 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {ko ? `${total}편` : `${total}`}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              className="text-gray-400 dark:text-gray-500"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── 폴더 콘텐츠 (accordion) ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4">
              {/* 구분선 */}
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-3" />

              {/* 공개 개념 */}
              {published.map((c, i) => (
                <ConceptRow
                  key={c.slug}
                  concept={c}
                  index={i}
                  dealCount={dealCounts[c.slug] ?? 0}
                  lang={lang}
                />
              ))}

              {/* 준비 중 개념 */}
              {unpublished.length > 0 && (
                <>
                  {published.length > 0 && (
                    <div className="flex items-center gap-2 my-2 px-3.5">
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                        {ko ? "준비 중" : "Coming soon"}
                      </span>
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                    </div>
                  )}
                  {unpublished.map((c, i) => (
                    <UnpublishedRow
                      key={c.slug}
                      concept={c}
                      index={published.length + i}
                      lang={lang}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function Deal101IndexClient({ lang = "ko" }: { lang?: Lang }) {
  const ko = lang === "ko";
  const catalog = ko ? KO_CONCEPT_CATALOG : EN_CONCEPT_CATALOG;
  const categories = ko ? KO_CATEGORIES : EN_CATEGORIES;
  const catMeta = ko ? KO_CAT_META : EN_CAT_META;
  const dealCounts = ko ? dealCountBySlugKo : dealCountBySlugEn;

  const publishedCount = catalog.filter((c) => c.published).length;
  const totalCount = catalog.length;

  return (
    <>
      {/* ── 통계 바 ── */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `${categories.length}개 카테고리` : `${categories.length} categories`}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `총 ${publishedCount}편` : `${publishedCount} published`}
        </span>
        {totalCount - publishedCount > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <span className="text-[12px] text-gray-400 dark:text-gray-500">
              {ko ? `${totalCount - publishedCount}편 준비 중` : `${totalCount - publishedCount} coming soon`}
            </span>
          </>
        )}

        {/* 카테고리 도트 */}
        <div className="ml-auto hidden sm:flex items-center gap-1.5 flex-wrap">
          {(categories as readonly string[]).map((cat) => {
            const count = catalog.filter((c) => c.category === cat && c.published).length;
            const m = catMeta[cat];
            return (
              <span
                key={cat}
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badgeBg} ${m.badgeFg}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.dot}`} />
                {m.letter}. {cat} {count}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── 카테고리 폴더 목록 ── */}
      <div className="space-y-3">
        {(categories as readonly string[]).map((cat, i) => {
          const concepts = catalog.filter((c) => c.category === cat);
          return (
            <CategoryFolder
              key={cat}
              category={cat}
              concepts={concepts}
              defaultOpen={false}
              lang={lang}
              catMeta={catMeta}
              dealCounts={dealCounts}
            />
          );
        })}
      </div>
    </>
  );
}
