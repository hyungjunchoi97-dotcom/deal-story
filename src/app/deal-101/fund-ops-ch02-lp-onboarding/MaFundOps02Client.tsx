"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch02-lp-onboarding";

const ONBOARDING_STEPS = [
  { step: 1, koLabel: "Lead qualification", enLabel: "Lead qualification", koDetail: "GP가 IR 통해 잠재 LP 접촉. Indication of Interest (IOI) 수령.", enDetail: "GP contacts the prospective LP via IR. Indication of Interest (IOI) received.", days: "Week 1-2" },
  { step: 2, koLabel: "DDQ (Due Diligence Questionnaire)", enLabel: "DDQ (Due Diligence Questionnaire)", koDetail: "LP가 GP에게 100+ 질문 DDQ 발송. Track record · team · process · ops 검증. ILPA standard DDQ가 표준.", enDetail: "LP sends GP a 100+ question DDQ. Track record, team, process, ops. ILPA standard DDQ is the baseline.", days: "Week 3-6" },
  { step: 3, koLabel: "KYC/AML 7-step screening", enLabel: "KYC/CDD 7-step screening", koDetail: "Beneficial owner (25%+) · PEP · OFAC · 제재명단 · source of funds · tax residency · entity structure 검증.", enDetail: "Beneficial owner (25%+), PEP, OFAC, sanctions, source of funds, tax residency, entity structure all verified.", days: "Week 6-8" },
  { step: 4, koLabel: "Subscription docs 작성", enLabel: "Subscription documents", koDetail: "Investor Questionnaire (Reg D · accredited investor 확인) · ERISA status · FATCA W-8/W-9 · CRS · Privacy notice.", enDetail: "Investor Questionnaire (Reg D / accredited investor), ERISA status, FATCA W-8/W-9, CRS, privacy notice.", days: "Week 8-10" },
  { step: 5, koLabel: "Side letter negotiation", enLabel: "Side letter negotiation", koDetail: "MFN trigger 검토. Anchor LP (NPS·CalPERS 등)는 30+ 조항. Mid-LP는 5-10 조항.", enDetail: "MFN trigger review. Anchor LPs (CalPERS, NPS) get 30+ provisions; mid-tier LPs get 5-10.", days: "Week 10-12" },
  { step: 6, koLabel: "Closing & first capital call", enLabel: "Closing & first capital call", koDetail: "LPA 서명 → commitment 등록 → 첫 capital call notice (10영업일 후 wire). Equalization은 후속 closing에서.", enDetail: "LPA signed → commitment booked → first capital call notice (wire 10 business days out). Equalization comes at the next closing.", days: "Week 12+" },
];

const KYC_LAYERS = [
  { layer: "1. 실소유자 (UBO) 확인", layerEn: "1. Ultimate Beneficial Owner (UBO)", koDetail: "25% 이상 지분 보유자 식별. 한국 특정금융정보법 · US FinCEN CDD Rule · EU 5AMLD 공통 표준.", enDetail: "Identify holders of 25%+ stake. Common standard across Korea's TFIPA, US FinCEN CDD Rule, EU 5AMLD." },
  { layer: "2. PEP (Politically Exposed Person)", layerEn: "2. PEP (Politically Exposed Person)", koDetail: "정치적 노출 인물 — 외국 정부 관료, 국제기구 임원, 본인·배우자·자녀 모두 체크. Enhanced DD 필수.", enDetail: "Foreign government officials, international organization execs — self, spouse, children all checked. Enhanced DD mandatory." },
  { layer: "3. OFAC / 제재명단", layerEn: "3. OFAC / sanctions screening", koDetail: "OFAC SDN List · EU Consolidated · UN Security Council · 한국 외환거래법 제재 대상. World-Check · LexisNexis로 자동 스크리닝.", enDetail: "OFAC SDN, EU Consolidated, UN Security Council, Korean FETA sanctions lists. Screened via World-Check or LexisNexis." },
  { layer: "4. Adverse media", layerEn: "4. Adverse media", koDetail: "최근 5년간 부정적 뉴스 검색 — 사기·뇌물·자금세탁·테러자금 의심.", enDetail: "Five-year search for adverse news — fraud, bribery, money laundering, terrorist financing concerns." },
  { layer: "5. Source of funds 검증", layerEn: "5. Source of funds verification", koDetail: "$50M commitment의 자금 출처. Family office 상속? 사업매각? 펀드 분배? Bank statement / tax return 요구.", enDetail: "Where the $50M commitment came from. Inheritance? Business sale? Fund distribution? Bank statements and tax returns required." },
  { layer: "6. Tax residency / FATCA / CRS", layerEn: "6. Tax residency, FATCA, CRS", koDetail: "W-8BEN-E (foreign entity) · W-9 (US person) · CRS self-cert · 한국 거주자 원천징수 여부.", enDetail: "W-8BEN-E (foreign entity), W-9 (US person), CRS self-cert, Korean withholding status." },
  { layer: "7. Entity structure mapping", layerEn: "7. Entity structure mapping", koDetail: "Fund-of-funds면 underlying LP까지. SPV·trust면 settlor·trustee·beneficiary 전부 식별.", enDetail: "If a fund-of-funds, drill to underlying LPs. For SPVs and trusts, identify settlor, trustee, beneficiary." },
];

const SUB_DOCS = [
  { doc: "Subscription Agreement", koPurpose: "출자약정의 법적 골격 — 약정금액 · drawdown 권한 · default penalty",                 enPurpose: "Legal backbone of the commitment — amount, drawdown rights, default penalties" },
  { doc: "Investor Questionnaire",  koPurpose: "Reg D accredited investor · Qualified Purchaser ($5M+) · Qualified Client ($2.2M+) 확인", enPurpose: "Reg D accredited investor, Qualified Purchaser ($5M+), Qualified Client ($2.2M+) verification" },
  { doc: "ERISA Disclosure",        koPurpose: "Pension fund LP면 ERISA 25% 제한 · Plan Asset Regulation 영향 평가",                  enPurpose: "For pension LPs — ERISA 25% limit and Plan Asset Regulation impact assessment" },
  { doc: "FATCA W-8 / W-9",          koPurpose: "US-source income withholding — non-US LP는 W-8BEN-E, US LP는 W-9",                  enPurpose: "US-source income withholding — non-US LPs file W-8BEN-E, US LPs file W-9" },
  { doc: "CRS Self-Certification",   koPurpose: "OECD Common Reporting Standard — 비-US LP의 tax residency 보고",                       enPurpose: "OECD Common Reporting Standard — tax residency reporting for non-US LPs" },
  { doc: "Privacy Notice",           koPurpose: "GLBA (US) · GDPR (EU) · 개인정보보호법 (KR) 준수 고지",                                enPurpose: "GLBA (US), GDPR (EU), PIPA (Korea) compliance notice" },
  { doc: "Power of Attorney",        koPurpose: "GP에게 LPA 후속 amendment 권한 부여 (LPAC 승인 사항 제외)",                            enPurpose: "Grants GP authority for later LPA amendments (excluding LPAC-approval matters)" },
  { doc: "Tax-related Side Letter",  koPurpose: "Pension·SWF LP의 UBTI · ECI 보호 조항",                                                enPurpose: "UBTI and ECI protections for pension and SWF LPs" },
  { doc: "Wire Instructions",        koPurpose: "LP의 funding wire 송금 정보 — dual approval, callback verification 필수",            enPurpose: "LP's funding wire instructions — dual approval and callback verification required" },
];

const SIDE_LETTER_PROVISIONS = [
  { provision: "MFN (Most-Favored Nation)",      koDesc: "이 LP보다 좋은 조건이 다른 LP에게 부여되면 자동 적용", enDesc: "Automatic adoption of any more favorable term granted to another LP", tier: "All" },
  { provision: "Fee discount",                    koDesc: "Anchor LP는 mgmt fee 10-25% 할인 (1.5% → 1.25%)",     enDesc: "Anchor LPs get 10-25% off mgmt fee (1.5% → 1.25%)",                tier: "Anchor" },
  { provision: "Carried interest cap",            koDesc: "특정 deal type에서 carry exemption 또는 cap",          enDesc: "Carry exemption or cap on specific deal types",                    tier: "Anchor" },
  { provision: "Excuse rights",                   koDesc: "특정 산업 (담배·총기·도박)에서 빠질 권리",            enDesc: "Right to opt out of specific industries (tobacco, firearms, gambling)", tier: "Most LPs" },
  { provision: "Co-investment priority",          koDesc: "Co-invest 기회 first look 또는 pro-rata 우선권",        enDesc: "First-look or pro-rata priority on co-investments",                tier: "Anchor" },
  { provision: "Transparency / reporting upgrade", koDesc: "ILPA template 외 추가 raw data access",                enDesc: "Extra raw data access beyond the ILPA template",                   tier: "Pension/SWF" },
  { provision: "Key person additions",            koDesc: "표준 key person clause에 LP 지정 인물 추가",            enDesc: "Adds LP-designated individuals to the standard key-person clause", tier: "Anchor" },
  { provision: "ESG / SFDR alignment",            koDesc: "EU LP면 SFDR Article 8 또는 9 분류 보장",              enDesc: "For EU LPs — guaranteed SFDR Article 8 or 9 classification",       tier: "EU LP" },
];

const CAPITAL_CALL_TIMELINE = [
  { day: "Day -10", koAction: "Capital call notice 발송 (LP 포털 + 이메일). Wire instructions 포함.",                  enAction: "Capital call notice sent (LP portal + email) with wire instructions" },
  { day: "Day -7",  koAction: "LP confirmation 요청. Fund admin이 funding source 재검증.",                            enAction: "LP confirmation requested. Fund admin re-verifies funding source." },
  { day: "Day -3",  koAction: "LP 측 internal approval 완료. Bank wire 사전 setup.",                                   enAction: "LP internal approvals complete. Pre-set the bank wire." },
  { day: "Day 0",   koAction: "Wire 입금. Fund admin이 expected amount · sender · timing reconcile.",                  enAction: "Wire received. Fund admin reconciles expected amount, sender, and timing." },
  { day: "Day +1",  koAction: "Capital account 업데이트. Sub-line drawdown이 있었으면 상환. Deal funding 진행.",         enAction: "Capital accounts updated. If sub-line was drawn, repay it. Deal funding proceeds." },
];

const BEC_FRAUD_CASES = [
  {
    year: "2020", koName: "Norton Rose Fulbright 사건", enName: "Norton Rose Fulbright incident", koLoss: "약 $30M",
    enLoss: "approx. $30M",
    koWhat: "Big Law firm의 PE deal closing 직전 송금 — 사기범이 partner 이메일 도메인 위조해 wire instruction 바꿈. 펀드가 사기범 계좌로 송금.",
    enWhat: "On the eve of a PE deal closing, fraudsters spoofed a partner's email domain and altered the wire instructions. The fund wired to the fraudster's account.",
    koLesson: "이메일 도메인은 위조 가능. 반드시 사전 등록된 phone number로 callback verification.",
    enLesson: "Email domains can be spoofed. Always do callback verification using a pre-registered phone number.",
  },
  {
    year: "2022", koName: "Tiger Global 산하 펀드 BEC 사고", enName: "Tiger Global affiliated fund BEC fraud", koLoss: "약 $35M",
    enLoss: "approx. $35M",
    koWhat: "Crypto investment closing 시 deal counterparty 가장한 사기범이 wire 가로챔. Ops team이 email만으로 confirm.",
    enWhat: "At a crypto investment closing, a fraudster impersonating the deal counterparty intercepted the wire — ops confirmed via email only.",
    koLesson: "Dual approval + 다른 채널 (Slack · Bloomberg Chat · 전화) verification 의무화.",
    enLesson: "Dual approval plus verification on a separate channel (Slack, Bloomberg Chat, phone) became mandatory.",
  },
  {
    year: "2024", koName: "익명 EU PE BEC ransomware 결합", enName: "EU PE BEC + ransomware combo (undisclosed)", koLoss: "약 €50M",
    enLoss: "approx. €50M",
    koWhat: "Ransomware로 fund admin 시스템 잠금 + BEC으로 LP 측 wire 가로채기. 동시 공격으로 detection 지연.",
    enWhat: "Ransomware locked the fund admin's systems while a parallel BEC attack intercepted LP wires. The coordinated attack delayed detection.",
    koLesson: "Cybersecurity와 fund admin 분리. Air-gapped backup · MFA · zero-trust 아키텍처.",
    enLesson: "Separate cybersecurity from fund admin operations. Air-gapped backups, MFA, zero-trust architecture.",
  },
];

const TOC_ITEMS = [
  { id: "onboarding-flow", ko: "§1. LP Onboarding 6단계", en: "§1 Six-step onboarding" },
  { id: "kyc-deep-dive",   ko: "§2. KYC/AML 7-layer screening", en: "§2 KYC/CDD seven-layer screening" },
  { id: "sub-docs",        ko: "§3. Subscription Documents + Side Letter", en: "§3 Subscription documents + side letters" },
  { id: "capital-call",    ko: "§4. Capital Call 실무 + BEC fraud 사례", en: "§4 Capital call mechanics + BEC fraud cases" },
];

export default function MaFundOps02Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span>
          <span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700 dark:text-gray-300">Ch.2</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>
              {ko ? "Fund Ops 시리즈 · Ch.2" : "Fund Ops Series · Ch.2"}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q1 2026 기준` : `~${meta.readingMinutes} min · data as of Q1 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>
            ))}
          </ul>
        </div>

        {/* § 1. Onboarding flow */}
        <section id="onboarding-flow" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. LP Onboarding 6단계 — IOI에서 첫 capital call까지" : "§ 1 The six-step LP onboarding — IOI to first capital call"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "LP가 \"투자하고 싶다\"고 말한 순간부터 실제 wire가 들어오기까지 보통 12-16주. 이 사이에 IR · Compliance · Legal · Fund Admin 4개 팀이 동시에 움직인다. 대형 펀드 (final close $5B+) 기준 한 LP onboarding에 internal 인력 200+ 시간 투입."
              : "From the moment an LP says \"we want to invest\" to the first wire takes 12-16 weeks. IR, compliance, legal, and fund admin work in parallel. For a $5B+ final close, onboarding a single LP consumes 200+ internal hours."}
          </p>
          <div className="space-y-3 mb-8">
            {ONBOARDING_STEPS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: ACCENT }}>{s.step}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <div className="font-bold text-sm">{ko ? s.koLabel : s.enLabel}</div>
                      <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">{s.days}</div>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? s.koDetail : s.enDetail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* § 2. KYC */}
        <section id="kyc-deep-dive" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. KYC/AML 7-Layer Screening — 어디까지 파야 하는가" : "§ 2 KYC/CDD seven-layer screening — how deep is deep enough"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "FATF · FinCEN · 한국 특정금융정보법이 요구하는 최소 표준은 7개 layer. Anchor LP 한 명 KYC에 $5,000-15,000 비용 (World-Check, LexisNexis, Refinitiv 등 외부 데이터베이스 + 내부 review). 실수하면 SEC enforcement action · 한국은 금감원 과태료 + advisor 자격 정지."
              : "FATF, FinCEN, and Korea's TFIPA all require seven minimum layers. Anchor-LP KYC runs $5,000-15,000 per LP (World-Check, LexisNexis, Refinitiv plus internal review). Get it wrong: SEC enforcement, or in Korea, FSS fines plus advisor license suspension."}
          </p>
          <div className="space-y-2 mb-8">
            {KYC_LAYERS.map((l, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? l.layer : l.layerEn}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? l.koDetail : l.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        {/* § 3. Subscription docs + side letter */}
        <section id="sub-docs" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. Subscription Documents 9종 + Side Letter MFN Matrix" : "§ 3 The nine subscription documents + the side letter MFN matrix"}</h2>
          <h3 className="text-lg font-bold mb-3">{ko ? "Subscription Package — 9종 문서" : "The subscription package — nine documents"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "문서" : "Document"}</th>
                  <th className="text-left p-3">{ko ? "목적" : "Purpose"}</th>
                </tr>
              </thead>
              <tbody>
                {SUB_DOCS.map((d, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-sm">{d.doc}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? d.koPurpose : d.enPurpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "Side Letter — 자주 협상되는 8개 조항" : "Side letter — the eight most-negotiated provisions"}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {ko
              ? "$1B fund 기준 평균 30-50개 side letter. CalPERS · NPS · GIC 같은 anchor는 30+ 조항짜리, mid-tier LP는 5-10 조항. MFN trigger 한 번 발동하면 모든 LP에게 도미노로 적용 — fund admin이 매분기 MFN matrix 업데이트."
              : "A $1B fund averages 30-50 side letters. Anchors like CalPERS, NPS, and GIC get 30+ provisions; mid-tier LPs get 5-10. One MFN trigger cascades to every LP — fund admin updates the MFN matrix every quarter."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "조항" : "Provision"}</th>
                  <th className="text-left p-3">{ko ? "내용" : "Description"}</th>
                  <th className="text-left p-3 w-32">{ko ? "주요 대상" : "Typical recipient"}</th>
                </tr>
              </thead>
              <tbody>
                {SIDE_LETTER_PROVISIONS.map((p, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{p.provision}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koDesc : p.enDesc}</td>
                    <td className="p-3 text-xs"><span className="px-2 py-0.5 rounded" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{p.tier}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* § 4. Capital call + BEC */}
        <section id="capital-call" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Capital Call 실무 + BEC Fraud 사례" : "§ 4 Capital call mechanics + BEC fraud cases"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "LP가 commit한 $100M은 한 번에 들어오지 않는다. Deal closing 시점마다 $5M, $20M씩 call. 표준 notice period 10영업일 — 이 사이에 LP는 internal approval, treasury arrangement, wire setup을 완료해야 한다. Default 시 commitment의 25-50% penalty + interest."
              : "An LP's $100M commitment doesn't arrive in one shot. The GP calls it down deal by deal — $5M here, $20M there. Standard notice is 10 business days, during which the LP completes internal approval, treasury arrangement, and wire setup. Default triggers a 25-50% commitment penalty plus interest."}
          </p>

          <h3 className="text-lg font-bold mb-3">{ko ? "Capital Call Timeline — 10영업일" : "Capital call timeline — ten business days"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            {CAPITAL_CALL_TIMELINE.map((t, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-20 font-mono text-sm font-semibold" style={{ color: ACCENT }}>{t.day}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koAction : t.enAction}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "BEC (Business Email Compromise) Fraud — 실제 사례 3건" : "BEC (Business Email Compromise) — three real cases"}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
            {ko
              ? "Capital call 또는 deal closing 시점의 wire 가로채기. 사기범이 partner / counterparty / lawyer 이메일을 위조해 wire instruction을 자기 계좌로 바꿈. FBI IC3에 따르면 2024년 전 세계 BEC 손실 $3.0B+. PE 업계에 가장 흔한 fraud type."
              : "Wire interception at capital-call or deal-closing time. Fraudsters spoof partner, counterparty, or lawyer emails to redirect wires to their own accounts. The FBI IC3 reports $3.0B+ in global BEC losses in 2024 — the most common fraud type in PE."}
          </p>
          <div className="space-y-3 mb-8">
            {BEC_FRAUD_CASES.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="px-2 py-0.5 rounded text-xs font-bold text-white" style={{ backgroundColor: ACCENT }}>{c.year}</div>
                  <div className="font-bold text-sm">{ko ? c.koName : c.enName}</div>
                  <div className="text-xs text-red-600 dark:text-red-400">{ko ? c.koLoss : c.enLoss}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mb-2 leading-relaxed">
                  <span className="font-semibold">{ko ? "사건: " : "What: "}</span>{ko ? c.koWhat : c.enWhat}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  <span className="font-semibold">{ko ? "교훈: " : "Lesson: "}</span>{ko ? c.koLesson : c.enLesson}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="rounded-xl border-2 p-6 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-lg font-bold mb-3">{ko ? "BEC 방지 표준 4원칙" : "Four standard rules to defeat BEC"}</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>1. {ko ? "이메일로만 받은 wire instruction은 절대 신뢰하지 않는다. 사전 등록된 전화번호로 callback verification 필수." : "Never trust wire instructions received only by email. Callback to a pre-registered phone number, always."}</li>
              <li>2. {ko ? "Dual approval — 한 사람이 wire 시작·승인·발송 다 못 함. 최소 2명 분리." : "Dual approval — no single person initiates, approves, and releases. Minimum two separate parties."}</li>
              <li>3. {ko ? "다른 채널 confirmation — Slack · Bloomberg Chat · 직접 만남 등 이메일과 다른 매체로 재확인." : "Confirm on a different channel — Slack, Bloomberg Chat, or in person. Anything other than email."}</li>
              <li>4. {ko ? "Wire 변경 24시간 cooling-off — instruction 변경 후 24시간 대기 후 송금. 사기범의 시간 압박 전술 무력화." : "24-hour cooling-off on changes — wait 24 hours after any instruction change before wiring. Defeats the fraudster's time-pressure tactic."}</li>
            </ul>
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (
            <Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition">
              <div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div>
              <div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div>
            </Link>
          ) : <div />}
          {nav.next ? (
            <Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right">
              <div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div>
              <div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div>
            </Link>
          ) : <div />}
        </div>
      </div>
    </div>
  );
}
