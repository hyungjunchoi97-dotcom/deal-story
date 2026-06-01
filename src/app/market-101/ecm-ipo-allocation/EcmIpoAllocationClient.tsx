"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";
import type { MarketConcept } from "@/data/market-101-concepts";
import SeriesNav from "@/components/SeriesNav";
import { getMarket101Nav } from "@/data/market-101-concepts";
import LikeButton from "@/components/LikeButton";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const ACCENT = "#3182f6";

// ── ECM Practical Series Nav ───────────────────────────────────────────────────
const ECM_PRACTICAL_SERIES = [
  { slug: "ecm-rights-issue",   title: (ko: boolean) => ko ? "유상증자 실무"    : "Rights Issue"    },
  { slug: "ecm-ipo-allocation", title: (ko: boolean) => ko ? "IPO 배분 전략"   : "IPO Allocation"  },
  { slug: "ecm-pitchbook",      title: (ko: boolean) => ko ? "피치북 해부학"    : "Pitchbook"       },
  { slug: "ecm-abb-execution",  title: (ko: boolean) => ko ? "ABB 실행 매뉴얼" : "ABB Manual"      },
];

// ── 30초 요약 통계 ─────────────────────────────────────────────────────────────
const QUICK_STATS = [
  {
    value: "60–70%",
    label: (ko: boolean) => ko ? "한국 평균 기관 배분 비율" : "Avg institutional allocation (Korea)",
    sub:   (ko: boolean) => ko ? "수요예측 참여 기관 전체 기준" : "Across bookbuild participants",
    color: "text-blue-600 dark:text-blue-400",
    bg:    "bg-blue-50 dark:bg-blue-900/20",
    border:"border-blue-200 dark:border-blue-700",
  },
  {
    value: "20–40%",
    label: (ko: boolean) => ko ? "아시아 IPO 코너스톤 사전 배정" : "Cornerstone pre-allocation (Asia IPO)",
    sub:   (ko: boolean) => ko ? "홍콩·싱가포르·한국 포함" : "Incl. HK, Singapore, Korea",
    color: "text-violet-600 dark:text-violet-400",
    bg:    "bg-violet-50 dark:bg-violet-900/20",
    border:"border-violet-200 dark:border-violet-700",
  },
  {
    value: "최대 15%",
    label: (ko: boolean) => ko ? "Greenshoe 규모 (IPO 기준)" : "Greenshoe size (% of IPO)",
    sub:   (ko: boolean) => ko ? "SEC Rule 10b-4 규제 상한" : "SEC Rule 10b-4 cap",
    color: "text-teal-600 dark:text-teal-400",
    bg:    "bg-teal-50 dark:bg-teal-900/20",
    border:"border-teal-200 dark:border-teal-700",
  },
  {
    value: "10배 이상",
    label: (ko: boolean) => ko ? "한국 Clawback 발동 기준" : "Korea Clawback trigger",
    sub:   (ko: boolean) => ko ? "일반 청약 경쟁률 초과 시" : "Retail oversubscription ratio",
    color: "text-orange-600 dark:text-orange-400",
    bg:    "bg-orange-50 dark:bg-orange-900/20",
    border:"border-orange-200 dark:border-orange-700",
  },
];

// ── 투자자 카테고리 ────────────────────────────────────────────────────────────
const INVESTOR_CATEGORIES = [
  {
    id: "cornerstone",
    icon: "🏛️",
    label: (ko: boolean) => ko ? "코너스톤 투자자" : "Cornerstone Investors",
    sub:   (ko: boolean) => ko ? "Cornerstone Investors" : "Asia-Pacific exclusive mechanism",
    priority: (ko: boolean) => ko ? "최우선" : "Top priority",
    lockup: (ko: boolean) => ko ? "6개월 락업" : "6-month lock-up",
    alloc: "20–40%",
    details: (ko: boolean) => ko
      ? [
          "아시아 IPO 특유의 제도 (홍콩·싱가포르·한국)",
          "상장 전 일정 금액을 6개월 락업 조건으로 사전 확약",
          "발행사: 오버서브 보장 + 투자자 신뢰 시그널",
          "투자자: IPO 가격 배분 보장 + 선택적 참여 가능",
          "ARM IPO: Apple, NVIDIA, Samsung 등 전략적 투자자",
        ]
      : [
          "Asia-Pacific IPO mechanism (HK, Singapore, Korea)",
          "Pre-commit fixed amount pre-IPO with 6-month lock-up",
          "Issuer: guaranteed oversubscription + credibility signal",
          "Investor: guaranteed IPO price allocation + selective participation",
          "ARM IPO: Apple, NVIDIA, Samsung as strategic investors",
        ],
    bg:    "bg-blue-50 dark:bg-blue-900/20",
    border:"border-blue-200 dark:border-blue-700",
    text:  "text-blue-800 dark:text-blue-200",
    dot:   "bg-blue-500",
    bar:   5,
  },
  {
    id: "longonly",
    icon: "🏦",
    label: (ko: boolean) => ko ? "장기 보유 기관" : "Long-only Funds",
    sub:   (ko: boolean) => ko ? "뮤추얼펀드 · 연기금 · 보험사" : "Mutual funds · Pension · Insurance",
    priority: (ko: boolean) => ko ? "우선 배분" : "Preferred",
    lockup: (ko: boolean) => ko ? "자유 (비공식 장기 보유)" : "Free (informal long hold)",
    alloc: "30–40%",
    details: (ko: boolean) => ko
      ? [
          "주관사가 가장 선호하는 투자자 유형",
          "상장 후 주가 안정화 효과 최대",
          "배분 우선순위: 최상위 — 동일 가격 제시 시 우선",
          "IOI에 '장기 보유 의향' 명시 시 추가 배분 가능",
          "연기금·국부펀드는 발행사 IR 관계도 중요 요소",
        ]
      : [
          "Most preferred investor type by book-runners",
          "Maximum post-listing price stabilization effect",
          "Allocation priority: top — preferred if same price offered",
          "Additional allocation possible if IOI states 'long-term hold'",
          "Pension/sovereign funds: issuer IR relationship matters",
        ],
    bg:    "bg-teal-50 dark:bg-teal-900/20",
    border:"border-teal-200 dark:border-teal-700",
    text:  "text-teal-800 dark:text-teal-200",
    dot:   "bg-teal-500",
    bar:   4,
  },
  {
    id: "hedge",
    icon: "⚡",
    label: (ko: boolean) => ko ? "헤지펀드" : "Hedge Funds",
    sub:   (ko: boolean) => ko ? "단기 매매 경향 · 유동성 공급" : "Short-term tendency · Liquidity provider",
    priority: (ko: boolean) => ko ? "제한적 배분" : "Limited",
    lockup: (ko: boolean) => ko ? "락업 없음 — 첫날 매도 가능" : "No lock-up — may sell Day 1",
    alloc: "20–30%",
    details: (ko: boolean) => ko
      ? [
          "단기 매매 경향 → 첫날 대량 매도 리스크",
          "주관사가 제한적으로 배분 (전체 20~30% 이하)",
          "완전 제외 불가: 유동성 공급 역할 수행",
          "델타 헤지 목적 CB 투자자와 유사 취급",
          "Flipping 이력이 있는 계좌는 배분 페널티",
        ]
      : [
          "Short-term trading tendency → Day 1 mass selling risk",
          "Book-runners limit allocation (below 20-30% of total)",
          "Cannot exclude entirely: serve as liquidity providers",
          "Treated similarly to delta-hedge CB investors",
          "Accounts with flipping history face allocation penalty",
        ],
    bg:    "bg-orange-50 dark:bg-orange-900/20",
    border:"border-orange-200 dark:border-orange-700",
    text:  "text-orange-800 dark:text-orange-200",
    dot:   "bg-orange-500",
    bar:   2,
  },
  {
    id: "retail",
    icon: "👥",
    label: (ko: boolean) => ko ? "개인 투자자" : "Retail Investors",
    sub:   (ko: boolean) => ko ? "일반 청약 · 소액 접근성" : "Public subscription · Small investor access",
    priority: (ko: boolean) => ko ? "의무 배분" : "Mandated",
    lockup: (ko: boolean) => ko ? "락업 없음" : "No lock-up",
    alloc: "20–30%",
    details: (ko: boolean) => ko
      ? [
          "한국: 의무 20% 리테일 배분 (금감원 규정)",
          "미국: 5–15% 수준 (선택적, 규정 없음)",
          "LG에너지솔루션 2022: 청약 경쟁률 69.34:1 (역대 최고)",
          "Clawback 발동 시 기관 배분에서 일반으로 이전",
          "청약 단위 및 최소 증거금 제도로 접근성 제한",
        ]
      : [
          "Korea: mandatory 20% retail allocation (FSC regulation)",
          "US: 5–15% level (discretionary, no regulation)",
          "LG Energy Solution 2022: 69.34:1 competition ratio (all-time high)",
          "Clawback triggers transfer from institutional to retail",
          "Subscription unit and minimum deposit limit access",
        ],
    bg:    "bg-violet-50 dark:bg-violet-900/20",
    border:"border-violet-200 dark:border-violet-700",
    text:  "text-violet-800 dark:text-violet-200",
    dot:   "bg-violet-500",
    bar:   3,
  },
];

// ── Pricing Night Steps ────────────────────────────────────────────────────────
const PRICING_STEPS = [
  {
    num: "01",
    timing: (ko: boolean) => ko ? "D-2" : "D-2",
    label:  (ko: boolean) => ko ? "수요예측 마감" : "Bookbuild Close",
    desc:   (ko: boolean) => ko ? "IOI(Interest of Indication) 집계 완료. 투자자별 가격·수량 확인." : "IOI (Indication of Interest) collection complete. Price and size confirmed per investor.",
    icon: "📋",
  },
  {
    num: "02",
    timing: (ko: boolean) => ko ? "D-2 저녁" : "D-2 evening",
    label:  (ko: boolean) => ko ? "수요 분석" : "Demand Analysis",
    desc:   (ko: boolean) => ko ? "가격대별 수요 분포 분석. 오더북 형태(수직형/사선형) 파악." : "Demand distribution by price band. Identify order book shape (vertical / diagonal).",
    icon: "📊",
  },
  {
    num: "03",
    timing: (ko: boolean) => ko ? "D-1 저녁" : "D-1 evening",
    label:  (ko: boolean) => ko ? "가격 결정 회의" : "Pricing Meeting",
    desc:   (ko: boolean) => ko ? "주관사 신디케이트 데스크 + 발행사 CFO. 최종 공모가 범위 내 결정." : "Lead bank syndicate desk + issuer CFO. Final offering price determined within range.",
    icon: "💬",
  },
  {
    num: "04",
    timing: (ko: boolean) => ko ? "D-1 밤" : "D-1 night",
    label:  (ko: boolean) => ko ? "배분 계산" : "Allocation Computation",
    desc:   (ko: boolean) => ko ? "투자자별 최종 배분 계산. 품질·가격민감도·관계·규모·지역 5기준 적용." : "Final allocation per investor. Apply 5 criteria: quality, price sensitivity, relationship, size, geography.",
    icon: "🧮",
  },
  {
    num: "05",
    timing: (ko: boolean) => ko ? "D-1 자정–D 새벽" : "D-1 midnight–D dawn",
    label:  (ko: boolean) => ko ? "배분 통보" : "Allocation Notice",
    desc:   (ko: boolean) => ko ? "기관에 개별 통보. '배분 메일'은 새벽 1–4시에 도착하는 경우가 많다." : "Individual notice to institutions. 'Allocation emails' often arrive between 1–4 AM.",
    icon: "📧",
  },
  {
    num: "06",
    timing: (ko: boolean) => ko ? "D 오전" : "D morning",
    label:  (ko: boolean) => ko ? "계약 체결" : "Contract Execution",
    desc:   (ko: boolean) => ko ? "인수계약서(Underwriting Agreement) 서명. 그린슈 옵션 포함 여부 확인." : "Underwriting Agreement signed. Greenshoe option inclusion confirmed.",
    icon: "✍️",
  },
];

// ── 배분 기준 5가지 ───────────────────────────────────────────────────────────
const ALLOCATION_CRITERIA = [
  {
    num: "01",
    label: (ko: boolean) => ko ? "수요 품질" : "Demand Quality",
    desc:  (ko: boolean) => ko ? "장기 보유 의향 여부 → IOI에 명시됨. '6개월 이상 보유 의향' 기재 시 우선 배분." : "Long-term hold intent → stated in IOI. '6+ month hold intent' listed gets priority allocation.",
    icon: "⭐",
  },
  {
    num: "02",
    label: (ko: boolean) => ko ? "가격 민감도" : "Price Sensitivity",
    desc:  (ko: boolean) => ko ? "공모가 범위 상단 제시 여부. 가격 미언급 IOI는 하위 배분. 상단 이상 제시 계좌 최우선." : "Whether price range top was offered. IOI without price stated gets lower allocation. Accounts offering above range top get top priority.",
    icon: "💰",
  },
  {
    num: "03",
    label: (ko: boolean) => ko ? "기존 관계" : "Existing Relationship",
    desc:  (ko: boolean) => ko ? "발행사·주관사와의 관계. 기존 주주, 전략적 파트너, 장기 거래 기관 우대." : "Relationship with issuer and lead bank. Existing shareholders, strategic partners, long-term client accounts preferred.",
    icon: "🤝",
  },
  {
    num: "04",
    label: (ko: boolean) => ko ? "규모 (Account Size)" : "Account Size",
    desc:  (ko: boolean) => ko ? "큰 계좌에 더 많이 → 유동성 효과. $1bn 이상 AUM 기관이 $100mn 기관보다 비례 이상 배분 받는 경향." : "Larger accounts get more → liquidity effect. $1B+ AUM institutions tend to receive more than proportional vs $100M accounts.",
    icon: "📏",
  },
  {
    num: "05",
    label: (ko: boolean) => ko ? "지역 다양성" : "Geographic Diversity",
    desc:  (ko: boolean) => ko ? "국내:해외 비율 목표. 한국 IPO는 통상 국내 60–70% / 해외 30–40%. 글로벌 투자자 베이스 확보 목적." : "Domestic:international ratio target. Korea IPO typically 60–70% domestic / 30–40% international. Aim: build global investor base.",
    icon: "🌏",
  },
];

// ── Greenshoe 주가 시뮬레이션 데이터 ─────────────────────────────────────────
const GREENSHOE_DATA = [
  { day: "D+0",  with: 100, without: 100 },
  { day: "D+3",  with: 98,  without: 93  },
  { day: "D+7",  with: 99,  without: 89  },
  { day: "D+10", with: 101, without: 86  },
  { day: "D+14", with: 103, without: 88  },
  { day: "D+20", with: 105, without: 91  },
  { day: "D+30", with: 108, without: 96  },
];

// ── LG에너지솔루션 IPO 배분 데이터 ─────────────────────────────────────────────
const LGES_ALLOCATION_RAW = [
  { nameKo: "기관 (Institution)", nameEn: "Institution", target: 60, actual: 74 },
  { nameKo: "일반 (Retail)",      nameEn: "Retail",      target: 20, actual: 26 },
  { nameKo: "우리사주 (Employee)", nameEn: "Employee",   target: 20, actual: 0  },
];

// ── FAQ ────────────────────────────────────────────────────────────────────────
const FAQS: { q: string; a: string }[] = [];

// ── FAQ (bilingual helper — rendered via lang) ─────────────────────────────────
const FAQS_DATA = [
  {
    q: (ko: boolean) => ko
      ? "기관 배정에서 왜 특정 펀드가 매번 대량 배정을 받는가?"
      : "Why do certain funds always receive large institutional allocations?",
    a: (ko: boolean) => ko
      ? "배분은 공개 경쟁이 아니라 관계 기반 협상입니다. 주관사가 선호하는 계좌(Preferred Accounts)는 수요예측 참여 이력, 과거 플리핑(단기 매도) 여부, AUM 규모, 로드쇼 미팅 참여도에 따라 구분됩니다. '장기 보유' 이력이 확인된 대형 뮤추얼펀드와 연기금은 동일한 가격을 제시해도 헤지펀드보다 훨씬 많은 배분을 받습니다. 이 관계 네트워크는 수년간의 IPO 참여로 구축됩니다."
      : "Allocation is relationship-based negotiation, not open competition. Lead banks categorize preferred accounts by bookbuild participation history, past flipping record, AUM size, and roadshow meeting attendance. Large mutual funds and pension funds with verified long-hold histories receive far more allocation than hedge funds even at the same price. This relationship network is built through years of IPO participation.",
  },
  {
    q: (ko: boolean) => ko
      ? "한국 수요예측 참여 자격은 어떻게 되는가?"
      : "What are the requirements to participate in Korea's bookbuild?",
    a: (ko: boolean) => ko
      ? "한국 IPO 수요예측 참여는 금융투자업 인가를 받은 기관투자자만 가능합니다. 자산운용사(펀드), 증권사, 보험사, 연기금, 은행 신탁, 외국 기관투자자(등록 요건 충족 시) 등이 포함됩니다. 개인 투자자는 수요예측에 참여할 수 없고, 별도의 일반 청약(공모) 절차를 통해서만 IPO에 접근할 수 있습니다. 수요예측 참여 기관은 의무보유 확약(락업 약정) 여부를 제출 시 명시해야 합니다."
      : "Korea's IPO bookbuild is limited to institutional investors licensed under the Financial Investment Services and Capital Markets Act. This includes asset managers (funds), securities firms, insurers, pension funds, bank trusts, and foreign institutional investors (if registration requirements are met). Retail investors cannot participate in bookbuilds and can only access IPOs through the separate public subscription process. Participating institutions must indicate at submission whether they are committing to a mandatory holding period (lock-up).",
  },
  {
    q: (ko: boolean) => ko
      ? "Greenshoe가 없는 IPO도 있는가?"
      : "Are there IPOs without a Greenshoe option?",
    a: (ko: boolean) => ko
      ? "있습니다. Greenshoe(초과배정옵션)는 의무 사항이 아니라 발행사와 주관사가 협의해 포함 여부를 결정합니다. 일반적으로 ① 발행 규모가 작아 안정화 효과가 미미하거나, ② 발행사가 추가 주식 발행에 동의하지 않거나, ③ 주주 구조상 희석을 피하고 싶은 경우에 Greenshoe 없이 진행합니다. Greenshoe가 없는 IPO는 상장 초기 주가 변동성이 더 크게 나타나는 경향이 있습니다."
      : "Yes. The Greenshoe (over-allotment option) is not mandatory — it's negotiated between the issuer and lead bank. It's typically omitted when ① the deal size is too small for meaningful stabilization impact, ② the issuer doesn't consent to additional share issuance, or ③ the shareholder structure requires avoiding dilution. IPOs without Greenshoe tend to show greater early post-listing price volatility.",
  },
  {
    q: (ko: boolean) => ko
      ? "개인이 기관 배정 물량을 더 받는 방법은 없는가?"
      : "Is there any way for retail investors to get more institutional allocation?",
    a: (ko: boolean) => ko
      ? "직접적인 방법은 없습니다. 기관 배정은 기관투자자 전용이며 개인이 접근할 수 없습니다. 다만 간접적인 방법으로 ① IPO 주식을 편입하는 공모주 펀드(뮤추얼펀드)에 투자해 기관 배분 혜택을 간접 수혜할 수 있고, ② 일반 청약에서 고경쟁률 종목의 경우 균등 배분(1인 1주) 방식과 비례 배분 방식 중 전략적 선택이 가능하며, ③ Clawback이 발동되는 고수요 IPO에서 일반 배분 비율이 최대 30%까지 확대될 수 있습니다."
      : "There is no direct path. Institutional allocation is exclusively for institutional investors and retail cannot access it. Indirectly, ① investing in IPO-focused public offering mutual funds provides indirect exposure to institutional allocation benefits, ② in public subscriptions, strategic choice between equal distribution (1 share per person) and proportional allocation is possible for high-competition issues, and ③ in high-demand IPOs where Clawback is triggered, retail allocation can expand to up to 30%.",
  },
  {
    q: (ko: boolean) => ko
      ? "ARM IPO에서 전략적 투자자(Apple, NVIDIA)는 왜 코너스톤으로 참여했는가?"
      : "Why did ARM IPO strategic investors (Apple, NVIDIA) participate as cornerstones?",
    a: (ko: boolean) => ko
      ? "순수한 재무적 수익보다는 전략적 이해관계가 주된 동기입니다. Apple과 NVIDIA는 ARM의 반도체 설계 아키텍처(ISA)에 핵심 의존도를 가진 고객입니다. 코너스톤으로 참여하면 ① ARM의 IPO 성공을 지원해 주요 공급사의 안정성을 확보하고, ② 향후 ARM과의 라이선스 협상에서 주요 주주 지위로 영향력을 유지하며, ③ IPO 공모가 배분 보장으로 선호 가격에 지분을 취득할 수 있습니다. 전략적 코너스톤 참여는 단순 투자를 넘어 공급망 파트너십의 시그널링 기능을 합니다."
      : "Strategic interests rather than pure financial returns are the primary motivation. Apple and NVIDIA are key customers critically dependent on ARM's semiconductor design architecture (ISA). Cornerstone participation allows them to ① support ARM's IPO success to secure their key supplier's stability, ② maintain shareholder-level influence in future ARM license negotiations, and ③ acquire equity at the preferred IPO offering price with guaranteed allocation. Strategic cornerstone participation goes beyond investment — it signals supply chain partnership commitment.",
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────────

function PracticalSeriesNav({ lang }: { lang: Lang }) {
  const ko = lang === "ko";
  return (
    <div className="sticky top-0 z-20 bg-white/90 dark:bg-gray-950/90 backdrop-blur border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-5 overflow-x-auto">
        <div className="flex gap-1 py-2.5 min-w-max">
          {ECM_PRACTICAL_SERIES.map((item) => (
            <Link
              key={item.slug}
              href={`${ko ? "" : "/en"}/market-101/${item.slug}`}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-colors ${
                item.slug === "ecm-ipo-allocation"
                  ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
                  : "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20"
              }`}
            >
              {item.title(ko)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function QuickStats({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
      {QUICK_STATS.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
          className={`rounded-xl border p-4 ${stat.bg} ${stat.border}`}
        >
          <p className={`text-2xl font-black leading-none mb-1.5 ${stat.color}`}>{stat.value}</p>
          <p className={`text-[11px] font-bold leading-tight mb-1 ${stat.color}`}>{stat.label(ko)}</p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-tight">{stat.sub(ko)}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function AnalogyBox({ ko }: { ko: boolean; text?: never }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-6 rounded-2xl overflow-hidden border border-amber-200 dark:border-amber-700/60"
    >
      <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-3 border-b border-amber-200 dark:border-amber-700/60 flex items-center gap-2">
        <span className="text-base">💡</span>
        <p className="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">
          {ko ? "비유로 이해하기" : "Analogy"}
        </p>
      </div>
      <div className="px-5 py-4 bg-white dark:bg-gray-900/40">
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "배분은 인기 콘서트 티켓 배분과 같다. 주관사는 VIP(코너스톤/장기 기관)에게 먼저 좋은 자리를 주고, 나머지를 공개 추첨(일반 청약)으로 준다. 그런데 VIP에게 너무 많이 주면 일반 팬들의 불만이 생기고, 너무 적게 주면 VIP가 다음 콘서트에 안 온다."
            : "IPO allocation works like distributing tickets for a popular concert. The lead bank gives VIPs (cornerstones / long-only institutions) the best seats first, then distributes the rest through public lottery (retail subscription). Give VIPs too much, and general fans complain. Give them too little, and VIPs won't show up at the next concert."}
        </p>
      </div>
    </motion.div>
  );
}

function GreenshoeAnalogyBox({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.1)}
      className="mt-6 rounded-2xl overflow-hidden border border-amber-200 dark:border-amber-700/60"
    >
      <div className="bg-amber-50 dark:bg-amber-900/20 px-5 py-3 border-b border-amber-200 dark:border-amber-700/60 flex items-center gap-2">
        <span className="text-base">💡</span>
        <p className="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest">
          {ko ? "비유로 이해하기" : "Analogy"}
        </p>
      </div>
      <div className="px-5 py-4 bg-white dark:bg-gray-900/40">
        <p className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed">
          {ko
            ? "Greenshoe는 주가 하락 방어 에어백이다. IPO 발행 규모의 15%를 추가로 팔 권리를 갖는다. 주가가 내려가면 시장에서 매입해 안정화, 올라가면 추가 발행으로 수익. 발행사·주관사·투자자 모두에게 유리한 구조."
            : "Greenshoe is an airbag that protects against price drops. The lead bank holds the right to sell up to 15% more shares than the original IPO size. If the price falls, it buys from the market to stabilize. If it rises, it issues additional shares for profit. A structure that benefits the issuer, bank, and investors alike."}
        </p>
      </div>
    </motion.div>
  );
}

function PracticeBox({ ko }: { ko: boolean }) {
  return (
    <motion.div
      variants={fadeUp(0.15)}
      className="mt-6 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-700/60"
    >
      <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3 border-b border-blue-100 dark:border-blue-800 flex items-center gap-2">
        <span className="text-base">🎯</span>
        <p className="text-[10px] font-black text-blue-700 dark:text-blue-400 uppercase tracking-widest">
          {ko ? "배분 계산 시 실제로 사용하는 기준 5가지" : "5 Criteria Actually Used in Allocation Calculation"}
        </p>
      </div>
      <div className="divide-y divide-blue-100 dark:divide-blue-800/40">
        {ALLOCATION_CRITERIA.map((c, i) => (
          <div key={i} className="px-5 py-3.5 flex gap-3 bg-white dark:bg-gray-900/30">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-[10px] font-black text-blue-700 dark:text-blue-300 mt-0.5">
              {i + 1}
            </span>
            <div>
              <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                <span className="mr-1.5">{c.icon}</span>{c.label(ko)}
              </p>
              <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{c.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function InvestorCategoryCards({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="overflow-x-auto -mx-5 px-5 pb-2">
        <div className="flex gap-3 sm:grid sm:grid-cols-2 min-w-max sm:min-w-0">
          {INVESTOR_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VP}
              transition={{ duration: 0.4, delay: i * 0.09, ease: EASE }}
              className={`flex-shrink-0 w-64 sm:w-auto rounded-xl border p-4 ${cat.bg} ${cat.border}`}
            >
              {/* Quality bar */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`h-1 rounded-full flex-1 ${n <= cat.bar ? cat.dot : "bg-gray-200 dark:bg-gray-700"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">{cat.icon}</span>
                <span className={`text-[13px] font-black ${cat.text}`}>{cat.label(ko)}</span>
              </div>
              <p className={`text-[10px] mb-3 leading-tight ${cat.text} opacity-75`}>{cat.sub(ko)}</p>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cat.bg} ${cat.border} border ${cat.text}`}>
                  {ko ? "배분 규모: " : "Alloc: "}{cat.alloc}
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${cat.bg} ${cat.border} border ${cat.text}`}>
                  {cat.priority(ko)}
                </span>
              </div>
              <p className={`text-[10px] mb-2 ${cat.text} opacity-60`}>{cat.lockup(ko)}</p>

              <ul className="space-y-1">
                {cat.details(ko).map((d, j) => (
                  <li key={j} className="flex gap-1.5 text-[11px] text-gray-600 dark:text-gray-400 leading-snug">
                    <span className={`flex-shrink-0 w-1 h-1 rounded-full mt-1.5 ${cat.dot}`} />
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function LgesAllocationChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko
            ? "LG에너지솔루션 IPO (2022) — 투자자별 배분 비율 (%)"
            : "LG Energy Solution IPO (2022) — Allocation by Investor Type (%)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={LGES_ALLOCATION_RAW.map((d) => ({ ...d, name: ko ? d.nameKo : d.nameEn }))} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" tick={{ fontSize: 11, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} unit="%" domain={[0, 80]} />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}%`]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Bar
              dataKey="target"
              name={ko ? "목표 배분" : "Target"}
              fill="#93c5fd"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="actual"
              name={ko ? "실제 배분 (Clawback 후)" : "Actual (post-Clawback)"}
              fill={ACCENT}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-2 leading-relaxed">
          {ko
            ? "경쟁률 69.34:1 → Clawback 발동 → 기관 74% / 일반 26% (우리사주 미배정)"
            : "69.34:1 competition ratio → Clawback triggered → Institutional 74% / Retail 26% (Employee share plan unallocated)"}
        </p>
      </div>
    </motion.div>
  );
}

function PricingNightTimeline({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.1)} className="mt-8">
      <div className="hidden sm:block">
        <div className="flex items-start gap-0">
          {PRICING_STEPS.map((step, i) => (
            <div key={i} className="flex-1 flex flex-col items-center relative">
              {i < PRICING_STEPS.length - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-px bg-gray-200 dark:bg-gray-700" />
              )}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
                className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg bg-white dark:bg-gray-950 border-2 border-blue-300 dark:border-blue-700 shadow-sm mb-3"
              >
                {step.icon}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VP}
                transition={{ duration: 0.4, delay: i * 0.08 + 0.15, ease: EASE }}
                className="text-center px-1"
              >
                <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 mb-0.5">{step.num}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 mb-0.5">{step.timing(ko)}</p>
                <p className="text-[11px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label(ko)}</p>
                <p className="text-[9px] text-gray-400 dark:text-gray-500 leading-tight">{step.desc(ko)}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div className="sm:hidden space-y-0">
        {PRICING_STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start relative">
            {i < PRICING_STEPS.length - 1 && (
              <div className="absolute left-4 top-10 w-px h-full bg-gray-200 dark:bg-gray-700" />
            )}
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-base bg-white dark:bg-gray-950 border-2 border-blue-300 dark:border-blue-700 shadow-sm flex-shrink-0 z-10">
              {step.icon}
            </div>
            <div className="pb-5">
              <p className="text-[10px] font-black text-blue-600 dark:text-blue-400">{step.num}</p>
              <p className="text-[9px] text-gray-400 dark:text-gray-500">{step.timing(ko)}</p>
              <p className="text-[13px] font-bold text-gray-800 dark:text-gray-200">{step.label(ko)}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">{step.desc(ko)}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function GreenshoeChart({ ko }: { ko: boolean }) {
  return (
    <motion.div variants={fadeUp(0.15)} className="mt-8 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko
            ? "Greenshoe 발동/미발동 시 주가 시뮬레이션 (IPO가 = 100 기준)"
            : "Share Price Simulation: Greenshoe Exercised vs Not (IPO price = 100)"}
        </p>
      </div>
      <div className="p-5">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={GREENSHOE_DATA} margin={{ top: 10, right: 10, left: -10, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#6b7280" }} />
            <YAxis tick={{ fontSize: 10, fill: "#6b7280" }} domain={[80, 115]} />
            <Tooltip
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              formatter={(value: any) => [`${value}`]}
              contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e7eb" }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <ReferenceLine y={100} stroke="#d1d5db" strokeDasharray="4 2" label={{ value: ko ? "IPO가" : "IPO price", fontSize: 9, fill: "#9ca3af" }} />
            <Line
              type="monotone"
              dataKey="with"
              name={ko ? "Greenshoe 발동" : "With Greenshoe"}
              stroke={ACCENT}
              strokeWidth={2.5}
              dot={{ r: 4, fill: ACCENT }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="without"
              name={ko ? "Greenshoe 없음" : "Without Greenshoe"}
              stroke="#f87171"
              strokeWidth={2}
              strokeDasharray="5 3"
              dot={{ r: 4, fill: "#f87171" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center mt-2 leading-relaxed">
          {ko
            ? "시뮬레이션: Greenshoe 없는 IPO는 상장 초기 공모가 하회 시 안정화 메커니즘 부재 → 하락 가속 가능"
            : "Simulation: IPOs without Greenshoe lack a stabilization mechanism when price drops below offering price → accelerated decline possible"}
        </p>
      </div>
    </motion.div>
  );
}

function GreenshoeMechanism({ ko }: { ko: boolean }) {
  const steps = ko
    ? [
        { icon: "➕", label: "오버-알로트먼트", desc: "IPO 물량의 15% 초과 배분 (공매도 상태 진입)" },
        { icon: "📉", label: "주가 < IPO가", desc: "시장에서 매입 → 주가 방어 (안정화 조작)" },
        { icon: "📈", label: "주가 > IPO가", desc: "추가 주식 발행 → 오버-알로트먼트 해소" },
        { icon: "⏱️", label: "안정화 기간", desc: "30일 (미국 SEC 기준)" },
      ]
    : [
        { icon: "➕", label: "Over-Allotment",     desc: "Distribute 15% above IPO size (entering short position)" },
        { icon: "📉", label: "Price < IPO Price",  desc: "Buy from market → stabilize price (stabilization trading)" },
        { icon: "📈", label: "Price > IPO Price",  desc: "Issue additional shares → close over-allotment" },
        { icon: "⏱️", label: "Stabilization Period", desc: "30 days (US SEC standard)" },
      ];

  return (
    <motion.div variants={fadeUp(0.1)} className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      {steps.map((step, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.4, delay: i * 0.08, ease: EASE }}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 p-4 text-center"
        >
          <span className="text-2xl block mb-2">{step.icon}</span>
          <p className="text-[12px] font-bold text-gray-800 dark:text-gray-200 mb-1">{step.label}</p>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 leading-snug">{step.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function ClawbackGlobalTable({ ko }: { ko: boolean }) {
  const rows = ko
    ? [
        { market: "한국",   rule: "경쟁률 10배 이상 시 최대 30% 이전", note: "의무 (금감원 규정)" },
        { market: "영국",   rule: "25% 리테일 배분 의무",               note: "의무 (FCA 규정)" },
        { market: "홍콩",   rule: "경쟁률 따라 10–50% 리테일",          note: "의무 (HKEX 규정)" },
        { market: "싱가포르",rule: "최소 5% 공개 청약",                  note: "의무 (SGX 규정)" },
        { market: "미국",   rule: "의무 없음 (5–15% 자발적)",            note: "선택적" },
      ]
    : [
        { market: "Korea",     rule: "Up to 30% transfer when 10x+ competition", note: "Mandatory (FSC)" },
        { market: "UK",        rule: "25% retail allocation mandatory",           note: "Mandatory (FCA)" },
        { market: "Hong Kong", rule: "10–50% retail by competition level",        note: "Mandatory (HKEX)" },
        { market: "Singapore", rule: "Minimum 5% public subscription",            note: "Mandatory (SGX)" },
        { market: "US",        rule: "No mandate (5–15% voluntary)",              note: "Discretionary" },
      ];

  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "글로벌 리테일 배분 의무 비교" : "Global Retail Allocation Mandate Comparison"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "시장" : "Market"}
              </th>
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "규정" : "Rule"}
              </th>
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "성격" : "Type"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800/60">
            {rows.map((row, i) => (
              <tr key={i} className={i === 0 ? "bg-blue-50/40 dark:bg-blue-900/10" : ""}>
                <td className="px-5 py-3 font-semibold text-gray-800 dark:text-gray-200 whitespace-nowrap">{row.market}</td>
                <td className="px-5 py-3 text-gray-600 dark:text-gray-400 leading-relaxed">{row.rule}</td>
                <td className="px-5 py-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${row.note.includes(ko ? "의무" : "Mandatory") ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"}`}>
                    {row.note}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

function LockupStructureTable({ ko }: { ko: boolean }) {
  const rows = ko
    ? [
        { group: "임원 / 대주주",      us: "180일",   kr: "6개월",  lockup: true },
        { group: "코너스톤 투자자",    us: "6개월",   kr: "6개월",  lockup: true },
        { group: "기존 VC / PE",       us: "90–180일",kr: "3–6개월",lockup: true },
        { group: "공모주 배정 기관",   us: "없음",    kr: "없음",   lockup: false },
        { group: "일반 청약 개인",     us: "없음",    kr: "없음",   lockup: false },
      ]
    : [
        { group: "Officers / Major shareholders", us: "180 days",   kr: "6 months",  lockup: true },
        { group: "Cornerstone investors",         us: "6 months",   kr: "6 months",  lockup: true },
        { group: "Existing VC / PE",              us: "90–180 days",kr: "3–6 months",lockup: true },
        { group: "IPO-allocated institutions",    us: "None",       kr: "None",      lockup: false },
        { group: "Retail subscribers",            us: "None",       kr: "None",      lockup: false },
      ];

  return (
    <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
      <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
          {ko ? "Lock-up 구조 — 투자자 유형별" : "Lock-up Structure by Investor Type"}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[12px]">
          <thead>
            <tr className="border-b border-gray-100 dark:border-gray-800">
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "투자자 유형" : "Investor Type"}
              </th>
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "미국" : "US"}
              </th>
              <th className="text-left px-5 py-2.5 font-bold text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-wide">
                {ko ? "한국" : "Korea"}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 dark:divide-gray-800/60">
            {rows.map((row, i) => (
              <tr key={i}>
                <td className="px-5 py-3 font-medium text-gray-800 dark:text-gray-200">{row.group}</td>
                <td className="px-5 py-3">
                  <span className={`text-[11px] font-semibold ${row.lockup ? "text-orange-600 dark:text-orange-400" : "text-gray-400 dark:text-gray-500"}`}>
                    {row.us}
                  </span>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-[11px] font-semibold ${row.lockup ? "text-orange-600 dark:text-orange-400" : "text-gray-400 dark:text-gray-500"}`}>
                    {row.kr}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ── Main Export ────────────────────────────────────────────────────────────────
export default function EcmIpoAllocationClient({ concept, lang }: { concept: MarketConcept; lang: Lang }) {
  const ko = lang === "ko";

  const faqItems = FAQS_DATA.map((f) => ({ q: f.q(ko), a: f.a(ko) }));

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* JSON-LD: Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: ko ? concept.title : concept.titleEn,
              description: ko ? concept.excerpt : concept.excerptEn,
              author: { "@type": "Organization", name: "Deal Story" },
              publisher: { "@type": "Organization", name: "Deal Story" },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": ko
                  ? "https://dealstory.io/market-101/ecm-ipo-allocation"
                  : "https://dealstory.io/en/market-101/ecm-ipo-allocation",
              },
            }),
          }}
        />
        {/* JSON-LD: FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS_DATA.map((f) => ({
                "@type": "Question",
                name: f.q(ko),
                acceptedAnswer: { "@type": "Answer", text: f.a(ko) },
              })),
            }),
          }}
        />

        {/* Hero */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4">
              <Link href={ko ? "/" : "/en"} className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/market-101" : "/en/market-101"} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Market 101
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300">
                {ko ? "IPO 배분 전략" : "IPO Allocation"}
              </span>
            </div>

            <div className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold mb-4 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              {ko ? "ECM 실무 시리즈" : "ECM Practical Series"}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-snug mb-2"
            >
              {ko ? concept.title : concept.titleEn}
            </motion.h1>

            {ko && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[12px] text-gray-400 dark:text-gray-500 italic mb-4"
              >
                {concept.titleEn}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              {ko ? concept.excerpt : concept.excerptEn}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-5 flex-wrap"
            >
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {concept.readingMinutes}{ko ? "분 읽기" : " min read"}
              </span>
              <span className="text-gray-300 dark:text-gray-600">·</span>
              <div className="flex gap-1.5 flex-wrap">
                {(ko ? concept.tags : (concept.tagsEn ?? concept.tags)).slice(0, 6).map((tag) => (
                  <span key={tag} className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded text-[10px]">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/market-101/ecm-ipo-allocation"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                한국어
              </Link>
              <Link
                href="/en/market-101/ecm-ipo-allocation"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${!ko ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="flex justify-end max-w-3xl mx-auto px-5 mb-2 mt-4">
          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="top" lang={lang} />
        
          <LikeButton slug={concept.slug} lang={lang} /></div>

        <PracticalSeriesNav lang={lang} />

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-20">

          {/* Section 1 — 30초 요약 */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "30초 요약" : "30-Second Summary"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "핵심 수치 — 배분의 구조를 숫자로" : "Key Numbers — The Allocation Structure in Figures"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.p variants={fadeUp(0.05)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed pl-4 border-l-2" style={{ borderColor: ACCENT + "4d" }}>
              {ko
                ? "IPO 배분은 단순한 주식 나눠주기가 아니다. 어떤 투자자에게 얼마나 배분하느냐는 상장 이후 주가 안정성, 유동성, 그리고 발행사의 장기 주주 기반 구성을 결정한다. 주관사의 배분 결정은 수익성, 관계, 시장 기능이 모두 교차하는 가장 복잡한 판단 중 하나다."
                : "IPO allocation is not simply distributing shares. Who gets how much determines post-listing price stability, liquidity, and the issuer's long-term shareholder base composition. The lead bank's allocation decision is one of the most complex judgments where profitability, relationships, and market function all intersect."}
            </motion.p>

            <QuickStats ko={ko} />
          </motion.section>

          {/* Section 2 — 배분의 게임 */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 1" : "Section 1"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "배분의 게임: 왜 배분이 중요한가" : "The Allocation Game: Why Allocation Matters"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "IPO 배분은 단 하나의 공식이 없다. 같은 날, 같은 가격을 제시한 두 투자자도 다른 배분을 받을 수 있다. 그 차이를 만드는 것이 주관사의 '배분 재량(Allocation Discretion)'이다.",
                      "배분이 중요한 이유는 명확하다. 첫째, 상장 이후 주가 안정성이 투자자 구성에 달려 있다. 장기 보유 기관이 많을수록 주가 변동성이 낮다. 둘째, 배분은 주관사와 투자자 간 장기 관계의 화폐다 — 이번에 잘 배분받은 펀드는 다음 딜에도 적극 참여한다.",
                      "세 번째이자 가장 민감한 이유: 배분의 불균형은 규제 이슈가 될 수 있다. 한국의 Clawback 제도는 바로 이 불균형을 교정하기 위해 설계됐다.",
                    ]
                  : [
                      "There is no single formula for IPO allocation. Two investors who submit the same price on the same day may receive different allocations. What creates that difference is the lead bank's 'allocation discretion.'",
                      "Why allocation matters is clear. First, post-listing price stability depends on investor composition. More long-only institutions means lower price volatility. Second, allocation is the currency of the long-term relationship between lead banks and investors — a fund that received good allocation this time will actively participate in the next deal.",
                      "The third and most sensitive reason: allocation imbalance can become a regulatory issue. Korea's Clawback mechanism was designed precisely to correct this imbalance.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <AnalogyBox ko={ko} />
          </motion.section>

          {/* Section 3 — 투자자 유형별 배분 전략 */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 2" : "Section 2"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "투자자 유형별 배분 전략" : "Allocation Strategy by Investor Type"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "4가지 투자자 유형은 각각 다른 배분 논리를 갖는다. 코너스톤은 상장 전 확약으로 사전 배정을 보장받고, 장기 기관은 주가 안정화 기여도에 따라 우선 배분을 받는다. 헤지펀드는 단기 매매 이력에 따라 제한적으로 배분되며, 개인 투자자는 규정에 따른 의무 배분을 받는다.",
                      "배분 비율은 시장, 딜 성격, 오버서브 수준에 따라 달라지지만, 주관사의 배분 철학은 공통적으로 '장기 주주 기반 구축'을 최우선으로 둔다.",
                    ]
                  : [
                      "The four investor types each have distinct allocation logic. Cornerstones receive pre-guaranteed allocation through pre-IPO commitments. Long-only institutions receive priority allocation based on their contribution to price stability. Hedge funds receive limited allocation based on short-term trading history. Retail investors receive mandated allocation per regulation.",
                      "Allocation ratios vary by market, deal type, and oversubscription level, but lead banks' allocation philosophy universally prioritizes 'building a long-term shareholder base.'",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <InvestorCategoryCards ko={ko} />
            <LgesAllocationChart ko={ko} />
          </motion.section>

          {/* Section 4 — Pricing Night */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 3" : "Section 3"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "배분 결정 프로세스: Pricing Night" : "Allocation Decision Process: Pricing Night"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-8" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "수요예측이 마감된 직후, 주관사 신디케이트 데스크에서 가장 긴 밤이 시작된다. D-2에서 D 오전까지, 6단계의 집중 프로세스를 통해 IPO의 모든 숫자가 확정된다.",
                      "이 과정에서 가격과 배분은 동시에 결정된다. 가격이 높아질수록 일부 투자자는 이탈하고, 낮아질수록 오버서브 비율이 높아진다. 주관사는 이 두 변수를 동시에 최적화하는 균형점을 찾는다.",
                    ]
                  : [
                      "Right after the bookbuild closes, the longest night begins at the lead bank's syndicate desk. From D-2 through D morning, a 6-step intensive process finalizes every number in the IPO.",
                      "In this process, price and allocation are determined simultaneously. As price rises, some investors drop out; as it falls, the oversubscription ratio increases. The lead bank searches for the equilibrium point that optimizes both variables simultaneously.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <PricingNightTimeline ko={ko} />
            <PracticeBox ko={ko} />
          </motion.section>

          {/* Section 5 — Greenshoe */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 4" : "Section 4"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Greenshoe(초과배정옵션): 안정화의 메커니즘" : "Greenshoe (Over-Allotment Option): Stabilization Mechanism"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "Greenshoe는 1919년 미국의 그린슈 풋웨어(Greenshoe Manufacturing Company) IPO에서 처음 사용된 데서 이름이 붙었다. 공식 명칭은 '초과배정옵션(Over-Allotment Option)'이며, SEC Rule 10b-4에 의해 규제된다.",
                      "메커니즘의 핵심: 주관사는 IPO 공모 물량의 최대 15%를 추가로 배분하는 권리를 확보한다. 이 추가 물량은 처음에 공매도 형태로 배분되며, 이후 주가 흐름에 따라 두 가지 방식으로 청산된다.",
                      "ARM IPO(2023)에서는 상장 이후 주가가 IPO가를 빠르게 상회하면서 Greenshoe 옵션이 행사됐고, 추가 발행을 통해 오버-알로트먼트가 해소됐다. 이는 Greenshoe가 주가 상승 시 발행사의 추가 자금 조달 수단이 되는 전형적인 사례다.",
                    ]
                  : [
                      "The Greenshoe takes its name from the 1919 IPO of Green Shoe Manufacturing Company, where it was first used. Its official name is the 'Over-Allotment Option,' regulated under SEC Rule 10b-4.",
                      "Core of the mechanism: the lead bank secures the right to distribute up to 15% more shares than the IPO offering size. This additional volume is initially distributed as a short position, then settled in two ways depending on subsequent price movement.",
                      "In the ARM IPO (2023), the stock price quickly exceeded the IPO price post-listing, triggering exercise of the Greenshoe option. The over-allotment was resolved through additional issuance — a textbook case of Greenshoe serving as an additional capital-raising tool for the issuer when prices rise.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <GreenshoeAnalogyBox ko={ko} />
            <GreenshoeMechanism ko={ko} />
            <GreenshoeChart ko={ko} />
          </motion.section>

          {/* Section 6 — Clawback */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 5" : "Section 5"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Clawback: 일반 투자자 보호" : "Clawback: Retail Investor Protection"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "Clawback(클로백)은 기관 배분 물량 일부를 일반 청약자에게 이전하는 강제 조정 메커니즘이다. 한국에서는 일반 청약 경쟁률이 10배를 초과할 경우 의무적으로 발동된다.",
                      "한국 규정: 경쟁률 10배 이상 → 기관 배분에서 일반으로 최대 30%까지 이전 가능. 목적은 소액 투자자의 IPO 접근성을 보장하는 것이다.",
                      "LG에너지솔루션 케이스: 69배 경쟁률 → Clawback 발동 → 일반 배분 26%로 확대 (초기 목표 20% → 26%). 기관 배분은 80%에서 74%로 축소됐다.",
                    ]
                  : [
                      "Clawback is a forced adjustment mechanism that transfers part of the institutional allocation to retail subscribers. In Korea, it is mandatorily triggered when retail subscription competition exceeds 10x.",
                      "Korea rule: 10x+ competition ratio → up to 30% can be transferred from institutional to retail allocation. The purpose is to guarantee small investors' access to IPOs.",
                      "LG Energy Solution case: 69x competition ratio → Clawback triggered → retail allocation expanded to 26% (initial target 20% → 26%). Institutional allocation was reduced from 80% to 74%.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <ClawbackGlobalTable ko={ko} />

            {/* Robinhood note */}
            <motion.blockquote variants={fadeUp(0.15)} className="mt-8 border-l-4 border-blue-400 pl-4">
              <p className="text-[13px] italic text-gray-600 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "\"미국은 리테일 배분 의무가 없지만, Robinhood IPO(2021)는 개인 투자자 접근성을 강조하며 리테일에 20–35%를 배분한 이례적 케이스였다. 결과적으로 상장 첫날 주가가 하락하면서 논란이 됐다.\""
                  : "\"While the US has no retail allocation mandate, Robinhood's IPO (2021) was an exceptional case that emphasized retail investor access and allocated 20–35% to retail. It became controversial when the stock fell on its first day of trading.\""}
              </p>
              <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-2">
                {ko ? "— ECM 시장 노트, 2021" : "— ECM Market Note, 2021"}
              </p>
            </motion.blockquote>
          </motion.section>

          {/* Section 7 — Lock-up & Overhang */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                {ko ? "Section 6" : "Section 6"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "Lock-up과 오버행 관리" : "Lock-up and Overhang Management"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-2" style={{ borderColor: ACCENT + "4d" }}>
              <div className="space-y-3">
                {(ko
                  ? [
                      "Lock-up은 특정 주주가 IPO 이후 일정 기간 주식을 매도할 수 없도록 제한하는 계약 조항이다. Lock-up 해제 시점(통상 90–180일)은 '오버행(Overhang) 리스크'의 핵심 이벤트로, 이 시점 전후로 주가 변동성이 급증하는 경향이 있다.",
                      "공모주를 배정받은 기관투자자와 일반 청약자는 Lock-up 의무가 없다. 즉, 상장 첫날부터 자유롭게 매도할 수 있다. 이것이 배분 과정에서 주관사가 장기 보유 의향이 있는 투자자를 선호하는 구조적 이유다.",
                      "오버행 리스크 관리는 상장 후 IR 전략의 핵심이다. 블록 트레이드, ABB 조합, Secondary Offering 사전 공시 등을 통해 락업 해제 충격을 최소화한다.",
                    ]
                  : [
                      "Lock-up is a contractual clause preventing specific shareholders from selling shares for a defined period after IPO. The lock-up expiry (typically 90–180 days) is a key 'Overhang Risk' event — price volatility tends to spike around this date.",
                      "Institutional investors and retail subscribers who received IPO allocations have no lock-up obligation. They can sell freely from Day 1. This is the structural reason lead banks prefer investors with stated long-term holding intent during allocation.",
                      "Overhang risk management is central to post-listing IR strategy. Block trades, ABB combinations, and advance disclosure of Secondary Offering timelines minimize the lock-up expiry shock.",
                    ]
                ).map((para, j) => (
                  <motion.p key={j} variants={fadeUp(j * 0.04)} className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    {para}
                  </motion.p>
                ))}
              </div>
            </div>

            <LockupStructureTable ko={ko} />

            {/* Overhang management tips */}
            <motion.div variants={fadeUp(0.15)} className="mt-6 rounded-2xl overflow-hidden border border-gray-200/60 dark:border-gray-700/60">
              <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-3 border-b border-gray-200/60 dark:border-gray-700/60">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
                  {ko ? "오버행 리스크 관리 3가지 접근" : "3 Approaches to Overhang Risk Management"}
                </p>
              </div>
              <div className="divide-y divide-gray-50 dark:divide-gray-800/40">
                {(ko
                  ? [
                      { icon: "🔒", title: "블록 트레이드 + ABB 조합", desc: "락업 해제 전 대규모 주주가 ABB(Accelerated Book Build)를 통해 질서있게 지분을 매각. 시장 충격 최소화." },
                      { icon: "📢", title: "Secondary Offering 사전 공시", desc: "락업 해제 일정 및 예상 매각 규모를 사전에 공시해 시장이 오버행을 가격에 선반영하도록 유도." },
                      { icon: "🗓️", title: "락업 해제 전 IR 강화", desc: "락업 해제 30–60일 전부터 집중적인 투자자 IR(로드쇼, NDR)을 통해 신규 수요를 확보해 잠재 매물을 흡수." },
                    ]
                  : [
                      { icon: "🔒", title: "Block Trade + ABB Combination", desc: "Large shareholders conduct orderly stake sales via ABB (Accelerated Book Build) before lock-up expiry. Minimizes market shock." },
                      { icon: "📢", title: "Secondary Offering Advance Disclosure", desc: "Pre-disclose lock-up expiry schedules and expected sale volumes so the market can price in the overhang in advance." },
                      { icon: "🗓️", title: "Pre-expiry IR Intensification", desc: "Intensive investor IR (roadshow, NDR) 30–60 days before lock-up expiry to build new demand that can absorb potential supply." },
                    ]
                ).map((item, i) => (
                  <div key={i} className="px-5 py-3.5 flex gap-3 bg-white dark:bg-gray-900/30">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-0.5">{item.title}</p>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="mid" lang={lang} />

          {/* FAQ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={faqItems} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* Related Concepts */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
              {ko ? "관련 개념" : "Related Concepts"}
            </motion.h2>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-2">
              {[
                { slug: "ecm-ipo-bookbuilding", ko: "Ch.5 북빌딩",        en: "Ch.5 Book-Building"  },
                { slug: "ecm-ipo-post",          ko: "Ch.6 포스트-IPO",    en: "Ch.6 Post-IPO"       },
                { slug: "ecm-ipo-process",       ko: "Ch.4 IPO 프로세스",  en: "Ch.4 IPO Process"    },
                { slug: "ecm-ipo-investors",     ko: "Ch.2 IPO 투자자",    en: "Ch.2 IPO Investors"  },
                { slug: "ecm-abb-execution",     ko: "ABB 실행 매뉴얼",    en: "ABB Manual"           },
                { slug: "ecm-rights-issue",      ko: "유상증자 실무",       en: "Rights Issue"         },
              ].map((term) => (
                <Link
                  key={term.slug}
                  href={`${ko ? "" : "/en"}/market-101/${term.slug}`}
                  className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-[12px] font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {ko ? term.ko : term.en} ↗
                </Link>
              ))}
            </motion.div>
          </motion.section>

          <ShareButtons title={ko ? concept.title : (concept.titleEn ?? concept.title)} variant="bottom" lang={lang} />

          

          <LikeButton slug={concept.slug} lang={lang} />{/* References */}
          {concept.references && concept.references.length > 0 && (
            <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP} className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <motion.h2 variants={fadeUp()} className="text-[13px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                {ko ? "참고 자료" : "References"}
              </motion.h2>
              <ol className="space-y-2.5">
                {concept.references.map((ref) => (
                  <motion.li key={ref.id} variants={fadeUp()} className="flex gap-3 text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[10px] font-bold mt-0.5">
                      {ref.id}
                    </span>
                    <span>
                      <span className="font-medium text-gray-600 dark:text-gray-300">{ref.author}.</span>{" "}
                      {ref.url ? (
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="italic hover:text-blue-600 dark:hover:text-blue-400 hover:underline transition-colors">
                          {ref.title}
                        </a>
                      ) : (
                        <span className="italic">{ref.title}</span>
                      )}
                      {". "}<span className="text-gray-400 dark:text-gray-500">{ref.source}.</span>
                    </span>
                  </motion.li>
                ))}
              </ol>
            </motion.section>
          )}

          {/* Back links */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
            <Link
              href={ko ? "/market-101" : "/en/market-101"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-blue-600 dark:text-blue-400 hover:underline"
            >
              ← {ko ? "Market 101 전체 보기" : "All Market 101"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-ipo-bookbuilding" : "/en/market-101/ecm-ipo-bookbuilding"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "Ch.5 북빌딩 →" : "Ch.5 Book-Building →"}
            </Link>
            <Link
              href={ko ? "/market-101/ecm-ipo-post" : "/en/market-101/ecm-ipo-post"}
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-gray-500 dark:text-gray-400 hover:underline"
            >
              {ko ? "Ch.6 포스트-IPO →" : "Ch.6 Post-IPO →"}
            </Link>
          </div>
        </div>
          {/* Series Nav — same-category prev/next */}
          {(() => {
            const { prev, next } = getMarket101Nav("ecm-ipo-allocation");
            if (!prev && !next) return null;
            const basePath = lang === "en" ? "/en/market-101" : "/market-101";
            return (
              <SeriesNav
                lang={lang}
                prev={prev ? { href: `${basePath}/${prev.slug}`, title: lang === "en" ? (prev.titleEn ?? prev.title) : prev.title } : null}
                next={next ? { href: `${basePath}/${next.slug}`, title: lang === "en" ? (next.titleEn ?? next.title) : next.title } : null}
              />
            );
          })()}
      </main>
      <Footer />
    </>
  );
}
