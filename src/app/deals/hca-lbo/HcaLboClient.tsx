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
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  ReferenceArea,
  Legend,
  LineChart,
  Line,
} from "recharts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShareButtons from "@/components/deal/ShareButtons";
import FaqAccordion from "@/components/FaqAccordion";

// ── Types ─────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";
interface Props {
  lang: Lang;
}

// ── Accent ────────────────────────────────────────────────────────────────────
const ACCENT = "#6366f1"; // indigo
const ACCENT_LIGHT = "#eef2ff";

// ── Animation ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const VP = { once: true, margin: "-60px" };
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE, delay } },
});
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

// ── Executive Summary ────────────────────────────────────────────────────────
const EXEC_BULLETS = (ko: boolean) =>
  ko
    ? [
        "KKR + Bain + Merrill 3자 컨소시엄이 HCA를 $33B에 인수 — 당시 사상 최대 LBO.",
        "$22B 부채 = 7개 트랜치 (Revolver, TLA, TLB $12B, 1st Lien Notes, Senior Unsecured, PIK Toggle).",
        "TLB $12B는 약 500개 CLO에 분산 — CLO 시장 capacity 자체를 테스트한 딜.",
        "2008 금융위기 한복판에서 디폴트 회피 → 헬스케어 디펜시브 + 강한 스폰서의 힘.",
        "2010 dividend recap $4.25B + 2011 IPO $3.79B → 스폰서 IRR ~25%, 3.5x money.",
        "CLO 투자자는 par 회수 + 7년치 이자 → 2006–07 메가LBO 중 가장 깔끔한 회수 케이스.",
      ]
    : [
        "KKR + Bain + Merrill consortium acquired HCA for $33B — the largest LBO ever at the time.",
        "$22B of debt across 7 tranches (Revolver, TLA, TLB $12B, 1st Lien Notes, Sr Unsecured, PIK Toggle).",
        "The $12B TLB was distributed across ~500 CLOs — a deal that tested the very capacity of the CLO market.",
        "Avoided default through the 2008 crisis — healthcare defensiveness + the muscle of top-tier sponsors.",
        "2010 dividend recap $4.25B + 2011 IPO $3.79B → sponsor IRR ~25%, ~3.5x money.",
        "CLO investors collected par + 7 years of interest — the cleanest exit among the 2006–07 mega-LBOs.",
      ];

// ── Sources & Uses ───────────────────────────────────────────────────────────
const SOURCES_DATA = [
  { key: "tlb", label_ko: "Term Loan B", label_en: "Term Loan B", value: 12.0, pct: 34, color: "#6366f1" },
  { key: "sru", label_ko: "Sr Unsecured Notes", label_en: "Sr Unsecured Notes", value: 5.7, pct: 16, color: "#8b5cf6" },
  { key: "equity", label_ko: "Sponsor Equity", label_en: "Sponsor Equity", value: 5.5, pct: 16, color: "#10b981" },
  { key: "1l", label_ko: "1st Lien Sec Notes", label_en: "1st Lien Sec Notes", value: 4.2, pct: 12, color: "#a855f7" },
  { key: "roll", label_ko: "Rolled existing debt", label_en: "Rolled existing debt", value: 4.0, pct: 11, color: "#64748b" },
  { key: "tla", label_ko: "Term Loan A", label_en: "Term Loan A", value: 2.0, pct: 6, color: "#0ea5e9" },
  { key: "pik", label_ko: "PIK Toggle Notes", label_en: "PIK Toggle Notes", value: 1.5, pct: 4, color: "#ec4899" },
  { key: "rev", label_ko: "Revolver (drawn)", label_en: "Revolver (drawn)", value: 0.5, pct: 1, color: "#94a3b8" },
];

const USES_DATA = [
  { key: "equity", label_ko: "주식 매수 ($51/주)", label_en: "Equity purchase ($51/share)", value: 33.0, pct: 93 },
  { key: "refi", label_ko: "기존 부채 차환", label_en: "Refinance existing debt", value: 1.0, pct: 3 },
  { key: "fin", label_ko: "조달 수수료", label_en: "Financing fees", value: 0.8, pct: 2 },
  { key: "fees", label_ko: "거래 수수료", label_en: "Transaction fees", value: 0.6, pct: 2 },
];

// ── Capital Stack Tranches ───────────────────────────────────────────────────
const HCA_TRANCHES = [
  {
    id: "rev",
    label_ko: "Revolver",
    label_en: "Revolver",
    size: "$2.0B",
    pct: 5.7,
    pricing: "L+225bps",
    maturity_ko: "6년",
    maturity_en: "6yr",
    cov_ko: "Maintenance",
    cov_en: "Maintenance",
    buyer_ko: "은행",
    buyer_en: "Banks",
    waterfall_ko: "1순위 담보",
    waterfall_en: "1st Lien Secured",
    recovery_ko: "70–80%",
    recovery_en: "70–80%",
    color: "#94a3b8",
  },
  {
    id: "tla",
    label_ko: "Term Loan A",
    label_en: "Term Loan A",
    size: "$2.0B",
    pct: 5.7,
    pricing: "L+225bps",
    maturity_ko: "6년, 분할상환",
    maturity_en: "6yr, amortizing",
    cov_ko: "Maintenance",
    cov_en: "Maintenance",
    buyer_ko: "은행 (신디케이트)",
    buyer_en: "Banks (syndicate)",
    waterfall_ko: "1순위 담보",
    waterfall_en: "1st Lien Secured",
    recovery_ko: "70–80%",
    recovery_en: "70–80%",
    color: "#0ea5e9",
  },
  {
    id: "tlb",
    label_ko: "Term Loan B ⭐",
    label_en: "Term Loan B ⭐",
    size: "$12.0B",
    pct: 34.1,
    pricing: "L+275bps",
    maturity_ko: "7년, 만기일시상환",
    maturity_en: "7yr, bullet",
    cov_ko: "Maintenance",
    cov_en: "Maintenance",
    buyer_ko: "CLO / 크레딧 펀드",
    buyer_en: "CLOs / credit funds",
    waterfall_ko: "1순위 담보",
    waterfall_en: "1st Lien Secured",
    recovery_ko: "65–75%",
    recovery_en: "65–75%",
    color: "#6366f1",
    highlight: true,
  },
  {
    id: "1l",
    label_ko: "1st Lien Secured Notes",
    label_en: "1st Lien Secured Notes",
    size: "$4.2B",
    pct: 11.9,
    pricing: "9.125%",
    maturity_ko: "10년",
    maturity_en: "10yr",
    cov_ko: "Incurrence",
    cov_en: "Incurrence",
    buyer_ko: "HY 펀드",
    buyer_en: "HY funds",
    waterfall_ko: "1순위 담보 (노트)",
    waterfall_en: "1st Lien (Notes)",
    recovery_ko: "60–75%",
    recovery_en: "60–75%",
    color: "#a855f7",
  },
  {
    id: "sru",
    label_ko: "Senior Unsecured Notes",
    label_en: "Senior Unsecured Notes",
    size: "$5.7B",
    pct: 16.2,
    pricing: "9.25%",
    maturity_ko: "10년",
    maturity_en: "10yr",
    cov_ko: "Incurrence",
    cov_en: "Incurrence",
    buyer_ko: "HY 펀드",
    buyer_en: "HY funds",
    waterfall_ko: "무담보 선순위",
    waterfall_en: "Senior Unsecured",
    recovery_ko: "25–40%",
    recovery_en: "25–40%",
    color: "#8b5cf6",
  },
  {
    id: "pik",
    label_ko: "PIK Toggle Notes",
    label_en: "PIK Toggle Notes",
    size: "$1.5B",
    pct: 4.3,
    pricing: "9.625% cash / 10.375% PIK",
    maturity_ko: "10년",
    maturity_en: "10yr",
    cov_ko: "Incurrence",
    cov_en: "Incurrence",
    buyer_ko: "HY 펀드 (특수상황)",
    buyer_en: "HY funds (special sit.)",
    waterfall_ko: "무담보 후순위",
    waterfall_en: "Unsecured Subordinated",
    recovery_ko: "0–15%",
    recovery_en: "0–15%",
    color: "#ec4899",
  },
  {
    id: "equity",
    label_ko: "Sponsor Equity",
    label_en: "Sponsor Equity",
    size: "$5.5B",
    pct: 15.6,
    pricing_ko: "목표 IRR 25%+",
    pricing_en: "Target IRR 25%+",
    maturity_ko: "Exit (~5년)",
    maturity_en: "Exit (~5yr)",
    cov_ko: "—",
    cov_en: "—",
    buyer_ko: "KKR + Bain + Merrill + Frist",
    buyer_en: "KKR + Bain + Merrill + Frist",
    waterfall_ko: "잔여 청구권",
    waterfall_en: "Residual",
    recovery_ko: "0 ~ ∞",
    recovery_en: "0 to ∞",
    color: "#10b981",
  },
];

// ── CLO Credit Framework ─────────────────────────────────────────────────────
const CLO_FRAMEWORK = (ko: boolean) =>
  ko
    ? [
        { n: 1, t: "Industry view", d: "디펜시브 vs 시클리컬 — CLO는 비순환 산업을 선호한다." },
        { n: 2, t: "Sponsor diligence", d: "스폰서 트랙 레코드, 빈티지 성과, 위기 대응력." },
        { n: 3, t: "Credit metrics", d: "Net Leverage, EBITDA/Interest, FCF/Debt 등 핵심 지표." },
        { n: 4, t: "Covenant package", d: "Maintenance 유무, 트리거 수준, 라이브러리." },
        { n: 5, t: "Pricing target", d: "시장 클리어링 스프레드 대비 매력도." },
        { n: 6, t: "Portfolio fit", d: "single name 한도, 산업 집중, WARF 영향, Diversity score." },
      ]
    : [
        { n: 1, t: "Industry view", d: "Defensive vs cyclical — CLOs prefer non-cyclical sectors." },
        { n: 2, t: "Sponsor diligence", d: "Track record, vintage performance, crisis playbook." },
        { n: 3, t: "Credit metrics", d: "Net leverage, EBITDA/interest, FCF/debt and the rest." },
        { n: 4, t: "Covenant package", d: "Maintenance presence, trigger levels, doc library." },
        { n: 5, t: "Pricing target", d: "Spread vs market-clearing level." },
        { n: 6, t: "Portfolio fit", d: "Single-name cap, sector concentration, WARF, diversity score." },
      ];

// ── HCA Credit Scoring Table ─────────────────────────────────────────────────
const HCA_SCORE = (ko: boolean) =>
  ko
    ? [
        { metric: "Net Leverage", hca: "6.5x", clo: "5–7x OK", verdict: "△ 다소 높음" },
        { metric: "EBITDA/Interest", hca: "2.0x", clo: "1.5x+", verdict: "○" },
        { metric: "FCF/Debt", hca: "~6%", clo: "5%+", verdict: "○" },
        { metric: "Industry", hca: "Healthcare (defensive)", clo: "비순환 선호", verdict: "⭐" },
        { metric: "Sponsor", hca: "KKR + Bain", clo: "1등급", verdict: "⭐" },
        { metric: "Rating", hca: "B+/B1", clo: "BB-/B+ 평균", verdict: "△" },
      ]
    : [
        { metric: "Net Leverage", hca: "6.5x", clo: "5–7x OK", verdict: "△ a bit hot" },
        { metric: "EBITDA/Interest", hca: "2.0x", clo: "1.5x+", verdict: "○" },
        { metric: "FCF/Debt", hca: "~6%", clo: "5%+", verdict: "○" },
        { metric: "Industry", hca: "Healthcare (defensive)", clo: "non-cyclical pref.", verdict: "⭐" },
        { metric: "Sponsor", hca: "KKR + Bain", clo: "top tier", verdict: "⭐" },
        { metric: "Rating", hca: "B+/B1", clo: "BB-/B+ avg", verdict: "△" },
      ];

// ── TLB Price Journey ────────────────────────────────────────────────────────
const TLB_PRICE = [
  { date: "2006-12", label: "Issue", price: 100.0 },
  { date: "2007-06", label: "Mid-2007", price: 99.5 },
  { date: "2007-12", label: "Subprime starts", price: 95 },
  { date: "2008-06", label: "Pre-Lehman", price: 88 },
  { date: "2008-12", label: "Lehman shock", price: 78 },
  { date: "2009-06", label: "Mid-2009", price: 85 },
  { date: "2009-12", label: "Recovery", price: 92 },
  { date: "2010-06", label: "Mid-2010", price: 96 },
  { date: "2011-03", label: "IPO file", price: 99 },
  { date: "2011-06", label: "IPO / Refi", price: 100 },
];

// ── Megadeal Comparison ──────────────────────────────────────────────────────
const MEGA_COMPARE = (ko: boolean) =>
  ko
    ? [
        { deal: "HCA (2006)", size: "$33B", ind: "헬스케어", outcome: "✓ 생존, 2011 IPO", ok: true },
        { deal: "First Data (2007)", size: "$29B", ind: "결제", outcome: "✓ 생존, 2015 IPO", ok: true },
        { deal: "Freescale (2006)", size: "$18B", ind: "반도체", outcome: "△ 고전, 2011 IPO", ok: null },
        { deal: "Caesars (2008)", size: "$30B", ind: "카지노", outcome: "✗ 2015 Default", ok: false },
        { deal: "iHeart (2008)", size: "$24B", ind: "미디어", outcome: "✗ 2018 Default", ok: false },
        { deal: "TXU/EFH (2007)", size: "$45B", ind: "유틸리티", outcome: "✗ 2014 Default", ok: false },
      ]
    : [
        { deal: "HCA (2006)", size: "$33B", ind: "Healthcare", outcome: "✓ Survived, 2011 IPO", ok: true },
        { deal: "First Data (2007)", size: "$29B", ind: "Payments", outcome: "✓ Survived, 2015 IPO", ok: true },
        { deal: "Freescale (2006)", size: "$18B", ind: "Semis", outcome: "△ Struggled, 2011 IPO", ok: null },
        { deal: "Caesars (2008)", size: "$30B", ind: "Casino", outcome: "✗ 2015 Default", ok: false },
        { deal: "iHeart (2008)", size: "$24B", ind: "Media", outcome: "✗ 2018 Default", ok: false },
        { deal: "TXU/EFH (2007)", size: "$45B", ind: "Utilities", outcome: "✗ 2014 Default", ok: false },
      ];

// ── IRR by Tranche ───────────────────────────────────────────────────────────
const IRR_DATA = [
  { tranche: "TLA", irr: 5.0, color: "#0ea5e9" },
  { tranche: "TLB", irr: 5.5, color: "#6366f1" },
  { tranche: "1st Lien Notes", irr: 9.0, color: "#a855f7" },
  { tranche: "Sr Unsecured", irr: 9.5, color: "#8b5cf6" },
  { tranche: "PIK Toggle", irr: 11.0, color: "#ec4899" },
  { tranche: "Sponsor Equity", irr: 25.0, color: "#10b981" },
];

// ── Lessons ──────────────────────────────────────────────────────────────────
const LESSONS = (ko: boolean) =>
  ko
    ? [
        { icon: "✅", t: "디펜시브 산업 + 톱티어 스폰서 = CLO 친화적", d: "헬스케어 비순환성과 KKR/Bain 신뢰성이 결합되니 $12B TLB 신디케이션이 가능했다." },
        { icon: "✅", t: "TLB price ≠ 신용", d: "마크-투-마켓이 78까지 떨어졌지만 디폴트만 안 나면 par 회수. 가격 변동을 무시할 수 있다는 것을 증명." },
        { icon: "⚠️", t: "PIK toggle의 양면성", d: "스폰서 cash buffer는 되지만 채권자 입장에선 원금이 계속 불어나는 시한폭탄." },
        { icon: "🧰", t: "CLO 매니저의 도구", d: "sector view + sponsor diligence + portfolio fit — 단순 spread 비교가 아닌 멀티-레이어 분석." },
        { icon: "📊", t: "2006–07 메가LBO 생존률 ~60%", d: "절반 가까이 부도났는데 HCA는 상위 사례. 산업 선택과 레버리지 수준의 차이." },
        { icon: "🎯", t: "Default-resistant alpha", d: "LBO debt가 CLO 포트폴리오에서 알파를 만들려면 디펜시브 산업 + 합리적 leverage + 강한 스폰서가 필수." },
      ]
    : [
        { icon: "✅", t: "Defensive sector + top-tier sponsor = CLO-friendly", d: "Healthcare's non-cyclicality plus KKR/Bain credibility made the $12B TLB syndication feasible." },
        { icon: "✅", t: "TLB price ≠ credit", d: "Mark-to-market hit 78 but par was recovered. Price volatility can be tuned out if you nailed the credit work." },
        { icon: "⚠️", t: "PIK toggle is double-edged", d: "Sponsor cash buffer, yes. But for creditors it's a principal-snowball ticking quietly." },
        { icon: "🧰", t: "The CLO manager's toolkit", d: "Sector view + sponsor diligence + portfolio fit — not just spread vs benchmark. Multi-layer analysis." },
        { icon: "📊", t: "~60% survival rate for 2006–07 mega-LBOs", d: "Nearly half defaulted. HCA sits in the top quartile — driven by sector and leverage discipline." },
        { icon: "🎯", t: "Default-resistant alpha", d: "For LBO debt to deliver alpha in a CLO portfolio: defensive sector + reasonable leverage + strong sponsor are required." },
      ];

// ── FAQ ──────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: (ko: boolean) => (ko ? "TLB와 TLA는 뭐가 다른가요?" : "What's the difference between TLB and TLA?"),
    a: (ko: boolean) =>
      ko
        ? "TLA는 은행이 보유하고, 매년 일정 비율로 분할상환(amortizing)됩니다. TLB는 CLO와 크레딧 펀드가 보유하고, 만기에 일시상환(bullet)됩니다. HCA의 경우 TLA $2B vs TLB $12B로 TLB 비중이 압도적입니다. 이는 2006년 시점에 이미 LBO 자금조달의 핵심이 은행이 아닌 CLO 시장으로 이동했다는 것을 보여줍니다."
        : "TLA is held by banks and amortizes on a fixed schedule each year. TLB is held by CLOs and credit funds, with a bullet repayment at maturity. For HCA it was $2B TLA vs $12B TLB — TLB dominates. That ratio shows that by 2006 the center of gravity in LBO financing had already moved from banks to the CLO market.",
  },
  {
    q: (ko: boolean) => (ko ? "CLO는 어떻게 작동하나요?" : "How does a CLO actually work?"),
    a: (ko: boolean) =>
      ko
        ? "CLO(Collateralized Loan Obligation)는 100~200개의 TLB로 구성된 포트폴리오를 트랜치로 발행하는 구조화 상품입니다. 매니저가 레버리지드 론을 매입하고, 그 현금흐름을 AAA부터 Equity까지 트랜치로 분배합니다. AAA 투자자는 낮은 수익률에 높은 안전성을, Equity 투자자는 잔여 현금흐름을 받습니다. 2006년 시점에 CLO는 미국 레버리지드 론 시장의 약 60%를 매입하고 있었습니다."
        : "A CLO (Collateralized Loan Obligation) is a structured product that pools 100–200 TLBs and issues tranches against that pool. The manager buys leveraged loans, and the cash flow is distributed across tranches from AAA down to equity. AAA holders get low yield and high safety; equity holders get residual cash. By 2006, CLOs were buying roughly 60% of all US leveraged loans.",
  },
  {
    q: (ko: boolean) => (ko ? "PIK toggle이 왜 위험한가요?" : "Why is PIK toggle dangerous?"),
    a: (ko: boolean) =>
      ko
        ? "PIK toggle은 발행자가 매 이자 지급일마다 현금으로 낼지 추가 채권을 발행할지 선택할 수 있는 옵션입니다. 회사가 현금 부족에 빠지면 PIK으로 토글해 단기 부담을 줄일 수 있지만, 이는 원금이 복리로 불어나는 결과를 낳습니다. 채권자 입장에서는 회사가 PIK으로 토글했다는 것 자체가 cash crunch 시그널일 수 있어 위험합니다. HCA는 실제로 2008년 PIK 옵션을 활용해 약 $150M을 보존했습니다."
        : "PIK toggle lets the issuer choose, at each interest date, to pay cash or issue more notes instead. When cash is tight, the company can flip to PIK and ease near-term burden — but principal then compounds. From a creditor's view, the very act of toggling to PIK is often a cash-crunch signal. HCA actually used PIK in 2008 and preserved roughly $150M of cash that way.",
  },
  {
    q: (ko: boolean) =>
      ko
        ? "2008 위기에 HCA TLB 가격이 78까지 떨어졌는데 CLO는 안전했나요?"
        : "HCA's TLB traded down to 78 in 2008 — were CLOs actually safe?",
    a: (ko: boolean) =>
      ko
        ? "디폴트만 안 나면 CLO는 par + 이자를 회수할 수 있습니다. 마크-투-마켓 변동은 회계적 손실이지 실현 손실이 아닙니다. CLO 구조는 만기까지 hold 할 수 있도록 설계되어 있어 일시적 가격 하락에 강제 매각될 위험이 적습니다. 다만 OC test(Overcollateralization)가 트리거되면 equity 분배가 중단될 수 있습니다 — 이는 회수가 아닌 분배의 문제입니다."
        : "If the loan doesn't default, CLOs collect par plus interest. Mark-to-market moves are accounting losses, not realized ones. The CLO structure is designed to hold loans to maturity, so temporary price drops rarely force selling. However, breaching the OC (overcollateralization) test can pause equity distributions — that's a distribution issue, not a recovery one.",
  },
  {
    q: (ko: boolean) => (ko ? "HCA가 다른 2006–07 LBO와 다른 점은?" : "How was HCA different from the other 2006–07 mega-LBOs?"),
    a: (ko: boolean) =>
      ko
        ? "다섯 가지가 결합됐습니다. ① 헬스케어라는 디펜시브 산업, ② Frist 가문의 운영 노하우와 롤오버, ③ 3자 컨소시엄의 자본력과 정치적 신뢰, ④ 6.5x라는 megaLBO 기준으로는 합리적인 leverage, ⑤ PIK toggle을 통한 현금 보존 옵션. 같은 시기 Caesars(카지노), iHeart(미디어), TXU(유틸리티)는 모두 시클리컬 산업에 더 높은 leverage를 얹어 디폴트했습니다."
        : "Five factors combined. ① Healthcare — a defensive sector. ② The Frist family's operating know-how and equity rollover. ③ A three-sponsor consortium with capital muscle and political credibility. ④ 6.5x leverage — reasonable by mega-LBO standards. ⑤ A PIK-toggle option for cash preservation. Caesars (casino), iHeart (media), and TXU (utilities) layered higher leverage on cyclical industries — all defaulted.",
  },
  {
    q: (ko: boolean) => (ko ? "지금 시점에서 HCA LBO의 의미는?" : "Why does HCA LBO still matter today?"),
    a: (ko: boolean) =>
      ko
        ? "세 가지 의미가 있습니다. ① LBO 자본구조 설계의 정수 — 7층 스택과 투자자별 매칭의 교과서. ② CLO 시장의 capacity 테스트 — $12B를 500개 CLO에 분산했다는 사실은 시장 깊이의 이정표. ③ 메가딜에서 산업 선택의 중요성 — 같은 빈티지의 시클리컬 megaLBO들이 줄줄이 무너지는 동안 HCA만 살아남았다. 현재 HCA Healthcare는 NYSE 상장 $80B+ 시총의 우량주입니다."
        : "Three reasons. ① It's the textbook example of LBO capital-structure engineering — seven layers matched to seven investor types. ② It was a stress test of the CLO market's capacity — distributing $12B across ~500 CLOs is a landmark in market depth. ③ It illustrates the importance of sector choice in mega-deals — while peers in cyclical industries collapsed, HCA survived. Today HCA Healthcare is a NYSE-listed $80B+ market-cap blue chip.",
  },
];

// ── Component ────────────────────────────────────────────────────────────────
export default function HcaLboClient({ lang }: Props) {
  const ko = lang === "ko";
  const title = ko
    ? "HCA — 2006년 메가LBO와 CLO 투자자가 본 풍경"
    : "HCA — The 2006 Mega-LBO Through a CLO Investor's Eyes";
  const subtitle = ko
    ? "$33B · KKR · Bain · Merrill · 7-트랜치 자본구조 · 2008 위기 생존 · 2011 IPO"
    : "$33B · KKR · Bain · Merrill · 7-tranche stack · survived 2008 · 2011 IPO";

  return (
    <>
      <Header />
      <main className="flex-1 bg-white dark:bg-gray-950">
        {/* ── Masthead ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500 mb-4"
            >
              <Link href={ko ? "/" : "/en"} className="hover:text-indigo-600 transition-colors">
                {ko ? "홈" : "Home"}
              </Link>
              <span>›</span>
              <Link href={ko ? "/deals" : "/en/deals"} className="hover:text-indigo-600 transition-colors">
                {ko ? "딜" : "Deals"}
              </Link>
              <span>›</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">HCA LBO 2006</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-2 mb-4 flex-wrap"
            >
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold text-white"
                style={{ background: ACCENT }}
              >
                B. LBO
              </span>
              <span
                className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
                style={{ background: ACCENT_LIGHT, color: ACCENT }}
              >
                LevFin Case
              </span>
              <span className="text-[11px] text-gray-400 dark:text-gray-500">
                {ko ? "18분 읽기" : "18 min read"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-3"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-[15px] text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="mt-4 flex items-center gap-2"
            >
              <Link
                href="/deals/hca-lbo"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  ko ? "text-white" : "text-gray-400 hover:text-gray-600"
                }`}
                style={ko ? { background: ACCENT } : {}}
              >
                한국어
              </Link>
              <Link
                href="/en/deals/hca-lbo"
                className={`text-[11px] px-2.5 py-1 rounded-full font-medium transition-colors ${
                  !ko ? "text-white" : "text-gray-400 hover:text-gray-600"
                }`}
                style={!ko ? { background: ACCENT } : {}}
              >
                English
              </Link>
            </motion.div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 pt-6 flex justify-end">
          <ShareButtons title={title} variant="top" lang={lang} />
        </div>

        {/* ── Body ── */}
        <div className="max-w-3xl mx-auto px-5 py-6 space-y-20">
          {/* ══ Section 1: Executive Summary ════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "1. 핵심 요약" : "1. Executive Summary"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "한눈에 보는 HCA 메가LBO" : "The HCA Mega-LBO at a Glance"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div
              variants={stagger}
              className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6 space-y-3"
            >
              {EXEC_BULLETS(ko).map((b, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="flex gap-3 items-start"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full text-white text-[11px] font-bold flex items-center justify-center"
                    style={{ background: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed pt-0.5">
                    {b}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 2: Background ═══════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "2. 딜 배경" : "2. Deal Background"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "왜 HCA였나 — 디펜시브 산업의 LBO 적합성" : "Why HCA — A Defensive Industry Built for LBO"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "HCA(Hospital Corporation of America)는 1968년 Dr. Thomas Frist Sr.와 그의 아들 Thomas Frist Jr.가 내쉬빌에서 창립한 미국 최대 영리병원 체인이다. Frist 가문은 미국 헬스케어 산업의 명문 — Bill Frist 상원의원도 같은 가족이다. 2006년 시점에 200개 이상의 병원, 100여 개의 외래수술센터, 매출 $25B+, EBITDA 약 $4B를 기록하고 있었다.",
                    "헬스케어, 특히 입원 병원 사업은 LBO 타겟의 '꿈의 조합'을 갖추고 있다. ① 디펜시브 산업 — 경기 침체에도 사람은 아프다. ② 인구통계 메가트렌드 — 베이비부머 세대가 본격적으로 만성질환 단계에 진입. ③ 안정적이고 예측 가능한 매출. ④ 강한 FCF — 병원당 capex는 신축 이후엔 비교적 낮다. ⑤ 부동산 자산 — sale-leaseback 옵션. 이 모든 요소가 차입 capacity를 키운다.",
                    "왜 3자 컨소시엄이었나? $33B라는 사이즈는 2006년 시점 어떤 단일 PE 펀드의 single-deal 한도도 넘어섰다. KKR의 2006년 펀드가 약 $17B, Bain Capital의 2006년 펀드가 약 $10B 규모였는데, 두 펀드 모두 single name에 펀드의 20% 이상을 집중하지 않는다는 내부 규율이 있었다. Merrill Lynch PE까지 끌어들이고 Frist 가문의 $1B 롤오버를 결합해야만 $5.5B의 equity check가 만들어졌다.",
                    "Frist 가문의 롤오버는 단순한 자금 조달 그 이상이었다. 창립자 가문이 LBO에 자기 돈을 다시 넣는다는 것은 시장에 강력한 신호였다 — '우리는 회사의 미래를 믿는다'. 이는 채권 시장에서 spread를 끌어내리는 효과를 가져왔고, 일부 트랜치는 예상보다 낮은 금리로 클리어됐다.",
                  ]
                : [
                    "HCA (Hospital Corporation of America) was the largest US for-profit hospital chain, founded in Nashville in 1968 by Dr. Thomas Frist Sr. and his son Thomas Frist Jr. The Frist family is part of American healthcare royalty — Senator Bill Frist hails from the same family. By 2006, HCA operated 200+ hospitals and roughly 100 ambulatory surgery centers, with $25B+ in revenue and EBITDA of approximately $4B.",
                    "Healthcare — and inpatient hospitals in particular — checks every box on the LBO wishlist. ① Defensive industry — people get sick regardless of the cycle. ② Demographic tailwind — baby boomers entering chronic-illness years. ③ Steady, predictable revenue. ④ Strong FCF — once built, hospital capex per bed runs lower than you'd expect. ⑤ Real-estate optionality — sale-leaseback is on the table. Every one of those factors expands debt capacity.",
                    "Why a three-sponsor consortium? At $33B, the deal exceeded the single-deal limits of any individual PE fund in 2006. KKR's 2006 vintage was roughly $17B, Bain Capital's about $10B — and both funds had internal discipline against concentrating more than ~20% of fund capital in any single name. Bringing in Merrill Lynch PE and stacking the Frist family's ~$1B rollover on top was the only way to assemble a $5.5B equity check.",
                    "The Frist rollover wasn't just capital. The founding family putting its own money back into the LBO was a powerful market signal — 'we believe in the future of this business.' It compressed spreads in the credit market, and several tranches cleared at tighter pricing than the dealers had originally guided.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Deal facts mini-card */}
            <motion.div
              variants={fadeUp(0.1)}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3"
            >
              {[
                { l_ko: "발표일", l_en: "Announced", v: "2006-07-24" },
                { l_ko: "종결일", l_en: "Closed", v: "2006-11-17" },
                { l_ko: "EV", l_en: "EV", v: "$33B" },
                { l_ko: "Equity check", l_en: "Equity check", v: "$5.5B" },
              ].map((it, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <p className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-bold">
                    {ko ? it.l_ko : it.l_en}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-1">{it.v}</p>
                </div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 3: Sources & Uses ═══════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "3. 자금 조달과 사용" : "3. Sources & Uses"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "$35B의 흐름 — Sources & Uses" : "Where the $35B Came From and Went"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {/* Sources */}
              <motion.div
                variants={fadeUp(0.05)}
                className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 overflow-hidden"
              >
                <div
                  className="px-5 py-3 border-b border-gray-100 dark:border-gray-800"
                  style={{ background: ACCENT_LIGHT }}
                >
                  <h3 className="text-[13px] font-black uppercase tracking-widest" style={{ color: ACCENT }}>
                    Sources
                  </h3>
                </div>
                <motion.div variants={stagger} className="divide-y divide-gray-100 dark:divide-gray-800">
                  {SOURCES_DATA.map((s, i) => (
                    <motion.div
                      key={s.key}
                      variants={fadeUp(i * 0.03)}
                      className="flex items-center gap-3 px-5 py-3"
                    >
                      <div className="w-2 h-8 rounded-sm flex-shrink-0" style={{ background: s.color }} />
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 truncate">
                          {ko ? s.label_ko : s.label_en}
                        </p>
                        <div className="h-1 mt-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: s.color }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.pct * 2.5}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">
                          ${s.value.toFixed(1)}B
                        </p>
                        <p className="text-[10px] text-gray-400">{s.pct}%</p>
                      </div>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={fadeUp(0.3)}
                    className="flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-gray-900"
                  >
                    <p className="text-[12px] font-black uppercase text-gray-700 dark:text-gray-300">
                      {ko ? "총 조달" : "Total Sources"}
                    </p>
                    <p className="text-[14px] font-black text-gray-900 dark:text-gray-100">~$35.4B</p>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Uses */}
              <motion.div
                variants={fadeUp(0.1)}
                className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 overflow-hidden"
              >
                <div
                  className="px-5 py-3 border-b border-gray-100 dark:border-gray-800"
                  style={{ background: "#fef3c7" }}
                >
                  <h3 className="text-[13px] font-black uppercase tracking-widest text-amber-700">
                    Uses
                  </h3>
                </div>
                <motion.div variants={stagger} className="divide-y divide-gray-100 dark:divide-gray-800">
                  {USES_DATA.map((u, i) => (
                    <motion.div
                      key={u.key}
                      variants={fadeUp(i * 0.03)}
                      className="flex items-center gap-3 px-5 py-3"
                    >
                      <div className="w-2 h-8 rounded-sm flex-shrink-0 bg-amber-400" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-semibold text-gray-700 dark:text-gray-300 truncate">
                          {ko ? u.label_ko : u.label_en}
                        </p>
                        <div className="h-1 mt-1 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-amber-400"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${u.pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">
                          ${u.value.toFixed(1)}B
                        </p>
                        <p className="text-[10px] text-gray-400">{u.pct}%</p>
                      </div>
                    </motion.div>
                  ))}
                  <motion.div
                    variants={fadeUp(0.2)}
                    className="flex items-center justify-between px-5 py-3 bg-gray-50 dark:bg-gray-900"
                  >
                    <p className="text-[12px] font-black uppercase text-gray-700 dark:text-gray-300">
                      {ko ? "총 사용" : "Total Uses"}
                    </p>
                    <p className="text-[14px] font-black text-gray-900 dark:text-gray-100">~$35.4B</p>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            <motion.p
              variants={fadeUp(0.3)}
              className="text-[12px] text-gray-500 dark:text-gray-400 mt-4 leading-relaxed"
            >
              {ko
                ? "* 주식 매수가는 $51/주 — 인수 발표 직전 가격 $43 대비 약 18% 프리미엄. 거래 수수료와 조달 수수료가 약 $1.4B로 deal 비용 중 두 번째 큰 항목."
                : "* Equity purchase price of $51/share — roughly an 18% premium to the pre-announcement price of ~$43. Transaction and financing fees together at ~$1.4B are the second-largest line item in deal cost."}
            </motion.p>
          </motion.section>

          {/* ══ Section 4: Capital Stack ════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "4. Capital Stack 해부" : "4. Capital Stack Dissected"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "7층 트랜치 — 누가 어디에 앉았나" : "Seven Layers — Who Sat Where in the Waterfall"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "HCA의 자본구조는 LBO 자본구조 설계의 정수다. 7개의 트랜치 각각이 서로 다른 투자자 그룹의 수요를 정확히 매칭한다. 위에 있을수록 안전하고 금리가 낮으며, 아래로 내려갈수록 위험과 수익이 동시에 커진다.",
                    "주목할 점: TLB $12B는 전체 자본구조의 34%로 단연 가장 큰 트랜치다. 이는 2006년 시점에 LBO 자금조달의 무게중심이 은행이 아니라 CLO·크레딧 펀드 시장으로 완전히 이동했다는 것을 보여준다.",
                  ]
                : [
                    "HCA's capital structure is the platonic ideal of LBO design. Each of the seven tranches is a precise match to a different investor pool. Higher in the stack = safer with lower yield. Lower in the stack = risk and reward expand together.",
                    "Note the dominance of TLB at $12B — a full 34% of the structure and by far the largest tranche. By 2006 the center of gravity in LBO financing had moved decisively from banks to the CLO and credit-fund market.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* Stacked capital structure visual */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6 mb-6"
            >
              <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "$35.2B 자본구조 (% of total)" : "$35.2B Capital Stack (% of total)"}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "선순위 → 후순위 순으로 위에서 아래로" : "Top to bottom: senior to junior"}
              </p>
              <ResponsiveContainer width="100%" height={360}>
                <BarChart
                  data={HCA_TRANCHES.map((t) => ({
                    label: ko ? t.label_ko : t.label_en,
                    pct: t.pct,
                    color: t.color,
                    size: t.size,
                  }))}
                  layout="vertical"
                  margin={{ top: 5, right: 60, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 36]}
                  />
                  <YAxis
                    type="category"
                    dataKey="label"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    width={170}
                  />
                  <Tooltip
                    formatter={((v: number | string, _name: unknown, props: { payload: { size: string } }) => [
                      `${Number(v).toFixed(1)}% | ${props.payload.size}`,
                      "",
                    ]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
                    {HCA_TRANCHES.map((t, i) => (
                      <Cell key={i} fill={t.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Tranche cards */}
            <motion.div variants={stagger} className="space-y-3">
              {HCA_TRANCHES.map((t, i) => (
                <motion.div
                  key={t.id}
                  variants={fadeUp(i * 0.04)}
                  className={`rounded-xl border overflow-hidden ${
                    t.highlight
                      ? "border-indigo-300 dark:border-indigo-700 shadow-sm"
                      : "border-gray-200 dark:border-gray-700"
                  }`}
                >
                  <div className="flex items-stretch">
                    <div
                      className="flex-shrink-0 self-stretch"
                      style={{ background: t.color, width: "6px" }}
                    />
                    <div className="flex-1 p-4">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span className="text-[13px] font-bold text-gray-900 dark:text-gray-100">
                          {ko ? t.label_ko : t.label_en}
                        </span>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full text-white"
                          style={{ background: t.color }}
                        >
                          {t.size}
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {t.pct.toFixed(1)}% {ko ? "of total" : "of total"}
                        </span>
                        <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 ml-auto">
                          {ko ? "회수율" : "Recovery"}: {ko ? t.recovery_ko : t.recovery_en}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-3 gap-y-1.5 text-[11px]">
                        <div>
                          <p className="text-gray-400 dark:text-gray-500">{ko ? "금리" : "Pricing"}</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {(t as any).pricing
                              ? (t as any).pricing
                              : ko
                              ? (t as any).pricing_ko
                              : (t as any).pricing_en}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 dark:text-gray-500">{ko ? "만기" : "Maturity"}</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {ko ? t.maturity_ko : t.maturity_en}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 dark:text-gray-500">{ko ? "코버넌트" : "Covenant"}</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {ko ? t.cov_ko : t.cov_en}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-400 dark:text-gray-500">{ko ? "투자자" : "Buyer"}</p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {ko ? t.buyer_ko : t.buyer_en}
                          </p>
                        </div>
                        <div className="col-span-2 sm:col-span-2">
                          <p className="text-gray-400 dark:text-gray-500">
                            {ko ? "Waterfall 위치" : "Waterfall position"}
                          </p>
                          <p className="font-semibold text-gray-700 dark:text-gray-300">
                            {ko ? t.waterfall_ko : t.waterfall_en}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* TLB callout */}
            <motion.div
              variants={fadeUp(0.2)}
              className="mt-5 rounded-2xl p-5 border"
              style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}
            >
              <p className="text-[13px] font-bold mb-2" style={{ color: ACCENT }}>
                {ko ? "왜 TLB가 $12B인가" : "Why is the TLB $12B?"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-700 leading-relaxed">
                {ko
                  ? "CLO 시장이 가장 큰 매수처이기 때문이다. 2006년 미국 CLO 시장의 연간 발행량은 약 $100B. 각 CLO 펀드는 single name 한도가 2.0–2.5%인 게 보통이라 한 펀드당 HCA TLB를 최대 ~$10M까지만 보유할 수 있다. 즉 $12B를 소화하려면 약 500–700개 CLO 펀드의 참여가 필요했다. 이는 단순한 신디케이션이 아니라 '시장 capacity 그 자체에 대한 테스트'였다."
                  : "Because the CLO market is the deepest pool. In 2006, US CLO annual issuance was about $100B. Each CLO fund typically caps single-name exposure at 2.0–2.5%, meaning a single CLO could hold at most ~$10M of HCA TLB. To absorb $12B required ~500–700 CLOs to participate. This wasn't just a syndication — it was a stress test of CLO market capacity itself."}
              </p>
            </motion.div>

            {/* PIK Toggle callout */}
            <motion.div
              variants={fadeUp(0.25)}
              className="mt-3 rounded-2xl p-5 border border-pink-200/60 dark:border-pink-800/40 bg-pink-50/50 dark:bg-pink-900/10"
            >
              <p className="text-[13px] font-bold text-pink-700 dark:text-pink-300 mb-2">
                {ko ? "PIK Toggle이란" : "What is PIK Toggle?"}
              </p>
              <p className="text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                {ko
                  ? "매 이자 지급일에 발행자가 ① 현금으로 9.625% 이자를 내거나 ② 10.375%의 추가 채권을 발행하는 둘 중 하나를 선택할 수 있는 옵션. 스폰서에겐 cash crunch 시기에 현금을 보존하는 도구. 채권자에겐 risk premium (75bp 차이)을 받지만 원금이 복리로 불어나는 부담."
                  : "At each interest date, the issuer can choose between ① paying 9.625% in cash or ② issuing additional notes at 10.375%. For sponsors, it's a cash-preservation tool during a crunch. For creditors, it carries a 75bp risk premium — but the principal compounds if PIK is used."}
              </p>
            </motion.div>
          </motion.section>

          {/* ══ Section 5: CLO Perspective ══════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "5. CLO 투자자 관점" : "5. The CLO Investor's View"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "TLB를 어떻게 평가하는가 — CLO 매니저의 의사결정 프레임" : "How a CLO Manager Underwrites a TLB"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "CLO 매니저가 HCA TLB 같은 신규 발행 레버리지드 론을 검토할 때, 단순히 '스프레드가 매력적인가'만 보지 않는다. 6단계 프레임워크를 거친다 — 산업 뷰, 스폰서 디딜리전스, 신용 지표, 코버넌트, 가격, 그리고 포트폴리오 핏.",
                    "이 섹션은 그 프레임을 따라 HCA TLB를 실제로 어떻게 평가했을지를 재구성한다. 2006년 시점의 데이터로, 후행적 시각이 아닌 당시 정보 기준이다.",
                  ]
                : [
                    "When a CLO manager reviews a new leveraged-loan issuance like HCA TLB, the question isn't simply 'is the spread attractive'. The process runs through six stages — industry view, sponsor diligence, credit metrics, covenants, pricing, and portfolio fit.",
                    "This section walks the HCA TLB through that framework as it would have been done in real time — based on 2006 data, not the benefit of hindsight.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* 5.1 Framework */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3"
            >
              {ko ? "5.1 CLO 매니저의 6단계 의사결정 프레임" : "5.1 The CLO Manager's 6-Step Framework"}
            </motion.h3>
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8"
            >
              {CLO_FRAMEWORK(ko).map((s, i) => (
                <motion.div
                  key={s.n}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="w-6 h-6 rounded-full text-white text-[11px] font-bold flex items-center justify-center"
                      style={{ background: ACCENT }}
                    >
                      {s.n}
                    </span>
                    <p className="text-[12px] font-bold text-gray-900 dark:text-gray-100">{s.t}</p>
                  </div>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{s.d}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* 5.2 HCA Scoring */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3"
            >
              {ko ? "5.2 HCA 신용 분석 적용" : "5.2 Applying the Framework to HCA"}
            </motion.h3>
            <motion.div
              variants={fadeUp(0.08)}
              className="overflow-x-auto rounded-2xl border border-gray-200/70 dark:border-gray-700/60 mb-3"
            >
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "지표" : "Metric"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      HCA Pro Forma
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "CLO 기준선" : "CLO Benchmark"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold" style={{ color: ACCENT }}>
                      {ko ? "평가" : "Verdict"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900/30">
                  {HCA_SCORE(ko).map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-900/50">
                      <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                        {r.metric}
                      </td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{r.hca}</td>
                      <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{r.clo}</td>
                      <td className="py-3 px-4 font-semibold text-gray-900 dark:text-gray-100">
                        {r.verdict}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-indigo-50/50 dark:bg-indigo-900/10">
                    <td className="py-3 px-4 font-black text-gray-900 dark:text-gray-100">
                      {ko ? "종합" : "Net"}
                    </td>
                    <td colSpan={2} className="py-3 px-4 text-gray-500 dark:text-gray-400 italic">
                      {ko ? "디펜시브 + 톱티어 스폰서가 leverage·rating의 약점 상쇄" : "Defensive sector + top-tier sponsor offset leverage/rating weakness"}
                    </td>
                    <td className="py-3 px-4 font-black" style={{ color: ACCENT }}>
                      {ko ? "Buy at par" : "Buy at par"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            {/* 5.3 Portfolio Impact */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3 mt-8"
            >
              {ko ? "5.3 CLO 포트폴리오 임팩트" : "5.3 Portfolio-Level Impact"}
            </motion.h3>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                {
                  k: ko ? "Single-name 한도" : "Single-name limit",
                  v: ko ? "2.0% → 펀드당 ~$10M 최대" : "2.0% → ~$10M max per fund",
                  d: ko
                    ? "$12B 소화에는 약 1,200개 슬롯 필요 (실제로는 펀드당 underweight해서 ~500개 펀드 참여)"
                    : "$12B requires ~1,200 slots (in practice ~500 funds underweighting)",
                },
                {
                  k: ko ? "Healthcare 섹터 집중" : "Healthcare concentration",
                  v: ko ? "보통 10–15% 캡" : "Typical 10–15% cap",
                  d: ko
                    ? "이미 healthcare 노출이 있는 CLO는 추가 매입에 제한"
                    : "CLOs already exposed to healthcare may be capacity-constrained",
                },
                {
                  k: "WARF impact",
                  v: ko ? "B+/B1 = ~2300" : "B+/B1 = ~2300",
                  d: ko
                    ? "포트폴리오 평균(B+/B 약 2500–2700)보다 약간 좋음, 끌어내림 효과 미미"
                    : "Slightly better than typical portfolio avg (B+/B ~2500–2700), minor drag",
                },
                {
                  k: ko ? "Diversity score" : "Diversity score",
                  v: ko ? "Healthcare 신규 노출 유도" : "Adds healthcare exposure",
                  d: ko
                    ? "Moody's diversity 계산에서 새 산업 노출은 +"
                    : "Adds a new sector under Moody's diversity calc",
                },
              ].map((m, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                    {m.k}
                  </p>
                  <p className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-1">{m.v}</p>
                  <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">{m.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 6: TLB Price Journey ════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "6. TLB Price Journey" : "6. The TLB Price Journey"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "2006 → 2011 — 78까지 떨어졌다 par로 회수된 5년" : "2006 → 2011 — Down to 78, Back to Par in Five Years"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "HCA TLB의 2차시장 가격은 2006년 12월 발행 후 par(100)에서 시작해 2007년 서브프라임 위기와 2008년 Lehman 충격을 거치며 78까지 폭락했다. 그러나 2009년부터 회복세를 보이며 2011년 IPO와 동시에 refinance되어 100으로 회수됐다.",
                    "이 가격 여정이 CLO 투자자에게 주는 핵심 인사이트: 디폴트만 안 나면 마크-투-마켓 변동은 회계적 손실이지 실현 손실이 아니다. CLO 구조는 만기까지 hold 할 수 있게 설계되어 일시적 가격 하락에 강제 매각되지 않는다.",
                  ]
                : [
                    "HCA TLB started at par (100) at December 2006 issuance, then ground down through the 2007 subprime onset and the 2008 Lehman shock — bottoming at 78. From 2009 it recovered, and at the 2011 IPO the loan was refinanced at par.",
                    "The takeaway for CLO investors: if there's no default, mark-to-market moves are accounting losses, not realized ones. The CLO structure is designed for hold-to-maturity, so temporary price drops rarely force selling.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6"
            >
              <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "HCA TLB 2차시장 가격 (cents on $)" : "HCA TLB Secondary Price (cents on $)"}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4">
                {ko ? "음영 = GFC 위기 구간 (2008 Q2 – 2009 Q3)" : "Shaded region = GFC crisis window (2008 Q2 – 2009 Q3)"}
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={TLB_PRICE} margin={{ top: 5, right: 15, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="date" tick={{ fontSize: 9, fill: "#6b7280" }} />
                  <YAxis
                    domain={[70, 105]}
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickFormatter={(v) => `${v}`}
                    width={35}
                  />
                  <Tooltip
                    formatter={((v: number | string, _name: unknown, props: { payload: { label: string } }) => [
                      `${v}`,
                      props.payload.label,
                    ]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <ReferenceArea
                    x1="2008-06"
                    x2="2009-06"
                    y1={70}
                    y2={105}
                    fill="#ef4444"
                    fillOpacity={0.07}
                    stroke="none"
                  />
                  <ReferenceLine y={100} stroke="#10b981" strokeDasharray="4 4" strokeWidth={1.5} />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke={ACCENT}
                    strokeWidth={2.5}
                    dot={{ r: 4, fill: ACCENT }}
                    name={ko ? "TLB 가격" : "TLB Price"}
                  />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-[10px] text-gray-400 mt-2">
                {ko
                  ? "* 가격은 시장 컬러 기반 추정치. 녹색 점선 = par(100). 빨간 음영 = GFC 위기."
                  : "* Prices are estimates based on market color. Green dashed = par (100). Red shading = GFC crisis."}
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              className="mt-5 rounded-2xl p-5 border"
              style={{ background: ACCENT_LIGHT, borderColor: ACCENT + "30" }}
            >
              <p className="text-[13px] font-bold mb-2" style={{ color: ACCENT }}>
                {ko ? "CLO 투자자에게 핵심 인사이트" : "Key Insight for CLO Investors"}
              </p>
              <p className="text-[14px] text-gray-700 dark:text-gray-700 leading-relaxed">
                {ko
                  ? "마크-투-마켓이 78까지 내려갔지만 결국 par 회수. 신용분석이 옳았다면 price volatility는 무시 가능하다. 단, OC test가 트리거되면 equity 분배가 일시 중단될 수 있다 — 이는 회수가 아닌 분배의 문제."
                  : "Mark-to-market dropped to 78, but par was ultimately recovered. If the underwriting was right, the price volatility could be ignored. The caveat: OC-test breaches can pause equity distributions — that's a distribution issue, not a recovery one."}
              </p>
            </motion.div>
          </motion.section>

          {/* ── Share — mid ── */}
          <div className="flex justify-end -mt-8">
            <ShareButtons title={title} variant="mid" lang={lang} />
          </div>

          {/* ══ Section 7: 2008 Stress + 2011 Exit ══════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "7. 2008 스트레스 + 2011 IPO" : "7. 2008 Stress + 2011 IPO Exit"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "왜 디폴트 안 났고, 어떻게 회수했나" : "Why It Didn't Default — and How Everyone Got Paid"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            {/* 7.1 */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3"
            >
              {ko ? "7.1 왜 디폴트 안 났나" : "7.1 Why It Survived"}
            </motion.h3>
            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "헬스케어 매출 안정성이 결정적이었다. 2008년 미국 GDP가 -2.8% 역성장하는 동안 HCA의 매출은 전년 대비 약 -2%에 그쳤다 — 산업 평균 -10%와 비교하면 거의 면역 수준. 입원 환자 수는 약간 감소했지만, 응급실과 외래 수술 부문이 이를 메웠다.",
                    "Refinancing risk가 의도적으로 회피됐다. 2006년 발행분의 maturity가 2013–2016에 분산돼 있어 위기 한복판인 2008–09년에 만기가 도래하는 부채가 거의 없었다. 이는 단순한 운이 아니라 KKR·Bain의 의도적인 maturity laddering 결과다.",
                    "PIK toggle이 결정적인 cash buffer 역할을 했다. 2008–09년 HCA는 PIK 옵션을 활용해 약 $150M의 현금을 보존했다. 이 돈은 운영 capex와 부채상환에 재투입돼 단기 유동성 위기를 막았다.",
                    "Frist family + KKR/Bain의 관계 자본도 무시할 수 없다. 위기 시 채권자와의 재협상, 정부와의 메디케어 정책 협상에서 Frist 가문의 영향력이 작용했다 — 특히 Bill Frist 전 상원의원의 정치적 연결망."
                  ]
                : [
                    "Healthcare revenue stability was decisive. While US GDP shrank by -2.8% in 2008, HCA revenue declined only ~2% YoY — versus an industry average of -10%. Near-immunity. Inpatient admissions softened slightly, but ER and ambulatory surgery filled the gap.",
                    "Refinancing risk was deliberately avoided. The 2006 issuance had its maturities spread across 2013–2016, so almost nothing was due during the 2008–09 peak crisis. That's not luck — it's deliberate maturity laddering by KKR and Bain.",
                    "PIK toggle worked as a decisive cash buffer. In 2008–09, HCA used the PIK option to preserve roughly $150M in cash. That cash was redirected to operating capex and debt service, averting a near-term liquidity squeeze.",
                    "Frist-family-plus-KKR/Bain relationship capital should not be discounted. In crisis-era renegotiations with creditors and Medicare-policy engagement with the government, the Frist family's influence — especially Senator Bill Frist's political network — moved the needle.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* 7.2 Mega comparison */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3 mt-8"
            >
              {ko ? "7.2 같은 시기 메가LBO 비교" : "7.2 Comparison to Other Mega-LBOs"}
            </motion.h3>
            <motion.div
              variants={fadeUp(0.08)}
              className="overflow-x-auto rounded-2xl border border-gray-200/70 dark:border-gray-700/60 mb-3"
            >
              <table className="w-full text-[12px]">
                <thead>
                  <tr style={{ background: ACCENT + "15" }}>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "딜" : "Deal"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "사이즈" : "Size"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "산업" : "Industry"}
                    </th>
                    <th className="text-left py-3 px-4 font-bold text-gray-700 dark:text-gray-300">
                      {ko ? "결과" : "Outcome"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800 bg-white dark:bg-gray-900/30">
                  {MEGA_COMPARE(ko).map((r, i) => (
                    <tr
                      key={i}
                      className={
                        r.deal.startsWith("HCA")
                          ? "bg-indigo-50/50 dark:bg-indigo-900/10"
                          : "hover:bg-gray-50 dark:hover:bg-gray-900/50"
                      }
                    >
                      <td className="py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">
                        {r.deal}
                      </td>
                      <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{r.size}</td>
                      <td className="py-3 px-4 text-gray-500 dark:text-gray-400">{r.ind}</td>
                      <td
                        className={`py-3 px-4 font-semibold ${
                          r.ok === true
                            ? "text-emerald-600 dark:text-emerald-400"
                            : r.ok === false
                            ? "text-red-600 dark:text-red-400"
                            : "text-amber-600 dark:text-amber-400"
                        }`}
                      >
                        {r.outcome}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <motion.p
              variants={fadeUp(0.1)}
              className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed mb-8"
            >
              {ko
                ? "* 패턴이 명확하다 — 디펜시브 산업 (헬스케어, 결제)은 살아남았고, 시클리컬 산업 (카지노, 미디어, 유틸리티)은 무너졌다. 같은 빈티지, 같은 스폰서 그룹, 비슷한 leverage 수준에서도 산업 선택이 운명을 갈랐다."
                : "* The pattern is clear — defensive sectors (healthcare, payments) survived; cyclicals (casino, media, utilities) collapsed. Same vintage, same sponsor universe, similar leverage levels — sector choice determined fate."}
            </motion.p>

            {/* 7.3 IPO + Recovery */}
            <motion.h3
              variants={fadeUp(0.05)}
              className="text-[14px] font-bold text-gray-900 dark:text-gray-100 mb-3"
            >
              {ko ? "7.3 2010 Dividend Recap + 2011 IPO" : "7.3 2010 Dividend Recap + 2011 IPO"}
            </motion.h3>
            <div className="pl-4 border-l-2 mb-6 space-y-3" style={{ borderColor: ACCENT + "4d" }}>
              {(ko
                ? [
                    "2010년 11월, HCA는 위기 통과 직후 $4.25B 규모의 dividend recapitalization을 단행했다. 새 부채를 발행하고 그 돈을 스폰서에게 배당으로 지급 — 스폰서들은 IPO 전에 이미 상당 부분의 equity를 회수했다.",
                    "2011년 3월 10일, HCA는 NYSE에 재상장됐다 (티커: HCA). IPO 가격 $30/주, 발행 규모 $3.79B — 당시 미국 PE 백업 IPO 사상 최대 규모. IPO 직후 시가총액은 약 $14B였고, 스폰서들은 일부 지분을 lock-up 후에도 보유했다.",
                    "IPO proceeds의 사용 순서가 핵심이다: ① PIK toggle 우선 상환 (가장 비싸므로) → ② TLB 일부 refinance → ③ Senior unsecured notes 일부 call. 자본구조가 위에서 아래로 점진적으로 경량화됐다.",
                  ]
                : [
                    "In November 2010, just after clearing the crisis, HCA executed a $4.25B dividend recapitalization. New debt was issued and the proceeds paid to sponsors as a dividend — meaning the sponsors had already harvested a meaningful chunk of equity before the IPO.",
                    "On March 10, 2011, HCA re-listed on the NYSE (ticker: HCA). IPO priced at $30/share, raising $3.79B — the largest PE-backed IPO in US history at the time. Immediately post-IPO market cap was approximately $14B, and the sponsors retained meaningful stakes through and beyond lockup.",
                    "The order of IPO proceeds use is instructive: ① PIK toggle paid down first (the most expensive instrument) → ② Partial TLB refinance → ③ Selective calls on senior unsecured notes. The capital structure was lightened progressively from the top.",
                  ]
              ).map((p, j) => (
                <motion.p
                  key={j}
                  variants={fadeUp(j * 0.04)}
                  className="text-[14px] text-gray-700 dark:text-gray-300 leading-relaxed"
                >
                  {p}
                </motion.p>
              ))}
            </div>

            {/* IRR by tranche chart */}
            <motion.div
              variants={fadeUp(0.1)}
              className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-6 mb-3"
            >
              <h3 className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                {ko ? "트랜치별 IRR — 누가 얼마를 가져갔나" : "Realized IRR by Tranche — Who Got What"}
              </h3>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4">
                {ko
                  ? "* 2006–2011 약 5년 보유 기준. 실제 회수 시점은 트랜치별로 상이"
                  : "* Based on a ~5-year hold (2006–2011). Actual realization timing differs by tranche."}
              </p>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  data={IRR_DATA}
                  layout="vertical"
                  margin={{ top: 5, right: 50, left: 10, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    tickFormatter={(v) => `${v}%`}
                    domain={[0, 30]}
                  />
                  <YAxis
                    type="category"
                    dataKey="tranche"
                    tick={{ fontSize: 10, fill: "#6b7280" }}
                    width={120}
                  />
                  <Tooltip
                    formatter={((v: number | string) => [`${Number(v).toFixed(1)}%`, "IRR"]) as never}
                    contentStyle={{ fontSize: 11, borderRadius: 8 }}
                  />
                  <Bar dataKey="irr" radius={[0, 4, 4, 0]}>
                    {IRR_DATA.map((d, i) => (
                      <Cell key={i} fill={d.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              variants={fadeUp(0.15)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
            >
              {[
                {
                  k: ko ? "Sponsor IRR" : "Sponsor IRR",
                  v: "~25%",
                  d: ko ? "MOIC ~3.5x · Frist family ~3–5x" : "MOIC ~3.5x · Frist family ~3–5x",
                },
                {
                  k: ko ? "TLB holder" : "TLB holder",
                  v: ko ? "Par + 7년 이자" : "Par + 7yr interest",
                  d: ko ? "메가LBO 중 가장 깔끔한 회수" : "Cleanest mega-LBO recovery",
                },
                {
                  k: "PIK toggle",
                  v: "~11% IRR",
                  d: ko ? "PIK 누적량까지 포함 회수" : "Including accreted PIK balance",
                },
                {
                  k: ko ? "HY note holder" : "HY note holder",
                  v: "~9.0–9.5%",
                  d: ko ? "쿠폰 collect + call premium" : "Coupon collected + call premium",
                },
              ].map((it, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-4"
                >
                  <p className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                    {it.k}
                  </p>
                  <p className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-1">{it.v}</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">{it.d}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ Section 8: Lessons ══════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-6">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                {ko ? "8. 교훈" : "8. Lessons"}
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-0.5">
                {ko ? "LevFin & CLO 프레임워크 — 6가지 교훈" : "LevFin & CLO Framework — Six Lessons"}
              </h2>
              <div className="w-8 h-0.5 mt-3" style={{ background: ACCENT }} />
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LESSONS(ko).map((l, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp(i * 0.05)}
                  className="rounded-2xl border border-gray-200/70 dark:border-gray-700/60 bg-white dark:bg-gray-900/50 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{l.icon}</span>
                    <div>
                      <p className="text-[13px] font-bold text-gray-900 dark:text-gray-100 mb-1">
                        {l.t}
                      </p>
                      <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                        {l.d}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* ══ FAQ ══════════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-5">
              <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: ACCENT }}>
                FAQ
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                {ko ? "자주 묻는 질문" : "Frequently Asked Questions"}
              </h2>
            </motion.div>
            <motion.div variants={fadeUp(0.05)}>
              <FaqAccordion items={FAQS.map((f) => ({ q: f.q(ko), a: f.a(ko) }))} accent={ACCENT} />
            </motion.div>
          </motion.section>

          {/* ══ Tombstone ════════════════════════════════════════════════════ */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <p
                className="text-[11px] font-black uppercase tracking-widest mb-1"
                style={{ color: ACCENT }}
              >
                Tombstone
              </p>
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">
                {ko ? "딜 카드" : "Deal Card"}
              </h3>
            </motion.div>
            <motion.div
              variants={fadeUp(0.05)}
              className="rounded-2xl border-2 border-gray-900 dark:border-gray-100 bg-white dark:bg-gray-900 p-6"
            >
              <div className="text-center mb-5">
                <p
                  className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2"
                  style={{ color: ACCENT }}
                >
                  {ko ? "거래 종결" : "Transaction Closed"}
                </p>
                <p className="text-2xl font-black text-gray-900 dark:text-gray-100">
                  HCA Inc.
                </p>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 mt-1">
                  {ko ? "Hospital Corporation of America" : "Hospital Corporation of America"}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-[12px]">
                {[
                  { l_ko: "인수자", l_en: "Acquirer", v: "KKR + Bain + Merrill PE" },
                  { l_ko: "타겟", l_en: "Target", v: "HCA Inc. (NYSE)" },
                  { l_ko: "Deal Value", l_en: "Deal Value", v: "$33B EV" },
                  {
                    l_ko: "Equity Check",
                    l_en: "Equity Check",
                    v: ko ? "$5.5B (Frist $1B 롤오버 포함)" : "$5.5B (incl. $1B Frist rollover)",
                  },
                  {
                    l_ko: "Debt",
                    l_en: "Debt",
                    v: ko ? "$22B (7 트랜치)" : "$22B (7 tranches)",
                  },
                  { l_ko: "발표", l_en: "Announced", v: "2006-07-24" },
                  { l_ko: "종결", l_en: "Closed", v: "2006-11-17" },
                  { l_ko: "Exit", l_en: "Exit", v: ko ? "2011 IPO ($3.79B, NYSE: HCA)" : "2011 IPO ($3.79B, NYSE: HCA)" },
                  {
                    l_ko: "Sponsor IRR",
                    l_en: "Sponsor IRR",
                    v: ko ? "~25% · 3.5x money" : "~25% · 3.5x money",
                  },
                ].map((it, i) => (
                  <div key={i} className="flex flex-col">
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
                      {ko ? it.l_ko : it.l_en}
                    </p>
                    <p className="font-semibold text-gray-800 dark:text-gray-200 mt-0.5">{it.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.section>

          {/* ── Series Nav ── */}
          <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={VP}>
            <motion.div variants={fadeUp()} className="mb-4">
              <h3 className="text-[13px] font-bold text-gray-600 dark:text-gray-400">
                {ko ? "LevFin LBO 시리즈" : "LevFin LBO Series"}
              </h3>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">
                {ko
                  ? "CLO 투자자 관점에서 본 메가LBO 케이스 스터디"
                  : "Mega-LBO case studies from a CLO investor's lens"}
              </p>
            </motion.div>
            <motion.div variants={fadeUp(0.05)} className="flex flex-wrap gap-3">
              <Link
                href={ko ? "/deal-101/lbo-capital-structure" : "/en/deal-101/lbo-capital-structure"}
                className="text-[12px] px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                ← {ko ? "LBO 자본구조 101" : "LBO Capital Stack 101"}
              </Link>
              <Link
                href={ko ? "/deals" : "/en/deals"}
                className="text-[12px] px-4 py-2 rounded-full border text-white transition-opacity hover:opacity-80"
                style={{ background: ACCENT, borderColor: ACCENT }}
              >
                {ko ? "모든 딜 보기 →" : "All Deals →"}
              </Link>
            </motion.div>
          </motion.section>

          {/* ── Sources ── */}
          <motion.section
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={VP}
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
          >
            <motion.h3
              variants={fadeUp()}
              className="text-[13px] font-bold text-gray-500 dark:text-gray-400 mb-4"
            >
              {ko ? "참고 자료" : "References"}
            </motion.h3>
            <motion.ol variants={stagger} className="space-y-2">
              {[
                "HCA Inc. (2006). Form 8-K — Merger Agreement disclosure (SEC filing, 2006-07-24).",
                "HCA Holdings, Inc. (2011). S-1/A IPO Prospectus (SEC filing, 2011).",
                "S&P LCD. (2011). Leveraged Loan Review — HCA Refinancing & 2011 IPO Take-out.",
                "Moody's Investors Service. (2006–2011). HCA Inc. — Credit Opinion History.",
                "Kaplan, S. & Stromberg, P. (2009). Leveraged Buyouts and Private Equity. Journal of Economic Perspectives.",
                "Bain & Company. (2012). Global Private Equity Report — Mega-Deal Vintages.",
              ].map((s, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp()}
                  className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed flex gap-2"
                >
                  <span className="font-bold flex-shrink-0">[{i + 1}]</span>
                  <span>{s}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

          {/* ── Share — bottom ── */}
          <div className="flex justify-end pb-4">
            <ShareButtons title={title} variant="bottom" lang={lang} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
