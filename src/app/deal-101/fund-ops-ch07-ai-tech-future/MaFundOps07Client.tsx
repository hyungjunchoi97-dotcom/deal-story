"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed";
const SLUG = "fund-ops-ch07-ai-tech-future";

const TECH_STACK = [
  { platform: "eFront (BlackRock)",  category: "Fund Admin / Reporting",  koUseCase: "$5B+ mega-cap PE 표준. NAV · LP statement · LPAC reporting 통합. BlackRock이 2019년 인수.", enUseCase: "Standard for $5B+ mega-cap PE. Integrates NAV, LP statements, LPAC reporting. Acquired by BlackRock in 2019.", price: "$200K-2M/year" },
  { platform: "Investran (FIS)",      category: "Fund Accounting",         koUseCase: "Mid-cap PE 표준. Partnership accounting · capital call · distribution mechanics. FIS가 Sungard 통해 인수.", enUseCase: "Mid-cap PE standard. Partnership accounting, capital calls, distribution mechanics. Owned by FIS via Sungard.", price: "$100K-500K/year" },
  { platform: "Allvue Systems",       category: "Fund Admin + Front-to-Back", koUseCase: "Private credit · mid-cap PE에 강함. Bain Capital 산하. Integrated front/middle/back office.", enUseCase: "Strong in private credit and mid-cap PE. Owned by Bain Capital. Integrated front-to-back office.", price: "$150K-800K/year" },
  { platform: "Carta",                category: "Cap Table + VC Fund Admin", koUseCase: "VC 펀드 표준. Portfolio company cap table + fund admin 통합. 50,000+ private company 사용.", enUseCase: "VC fund standard. Integrates portco cap tables with fund admin. Used by 50,000+ private companies.", price: "$10K-200K/year" },
  { platform: "DealCloud (Intapp)",   category: "Deal CRM + IR",           koUseCase: "Front office deal pipeline + IR + LP relationship management 통합. 2026 IPO 후 mega-cap 도입 가속.", enUseCase: "Integrates front-office deal pipeline, IR, and LP relationship management. Mega-cap adoption accelerated after the 2026 IPO.", price: "$50K-1M/year" },
  { platform: "Backstop Solutions",   category: "Multi-asset Fund Admin",  koUseCase: "Pension·endowment·family office의 LP-side. Underlying GP performance tracking에 강함.", enUseCase: "LP-side platform for pensions, endowments, family offices. Strong in underlying GP performance tracking.", price: "$50K-300K/year" },
];

const AI_USE_CASES = [
  { koUse: "LP query chatbot",                enUse: "LP query chatbot",                koDetail: "LP가 \"우리 capital account 마지막 분배 언제였지?\" 라고 자연어 질문 → AI가 PII-safe하게 응답. 2026년 mega-cap 60%+ 도입.", enDetail: "LPs ask \"when was our last distribution?\" in natural language; AI responds in a PII-safe way. Adopted at 60%+ of mega-caps in 2026." },
  { koUse: "ESG/SFDR 보고서 자동 생성",        enUse: "Automated ESG/SFDR reporting",   koDetail: "Portfolio company ESG data → SFDR Article 8/9 template 자동 작성. 분기당 200+ 시간 절감.", enDetail: "Auto-generates SFDR Article 8/9 templates from portco ESG data. Saves 200+ hours per quarter." },
  { koUse: "NAV reconciliation 자동화",        enUse: "Automated NAV reconciliation",   koDetail: "Bank statement + custody position + admin ledger 3-way auto-match. Exception만 human review.", enDetail: "Three-way auto-match between bank statements, custody positions, and admin ledger. Humans review only exceptions." },
  { koUse: "Sourcing — deal screening",        enUse: "Sourcing — deal screening",      koDetail: "1,000개 inbound CIM/teaser → AI가 thesis fit · financial profile 자동 평가 → 50개 우선순위 list.", enDetail: "Of 1,000 inbound CIMs and teasers, AI auto-grades thesis fit and financial profile down to a 50-deal short list." },
  { koUse: "DD — document analysis",           enUse: "DD — document analysis",         koDetail: "VDR의 contract · regulatory filing → 핵심 조항 (change-of-control · MAC · indemnity) 자동 추출.", enDetail: "Auto-extracts key clauses (change-of-control, MAC, indemnity) from VDR contracts and filings." },
  { koUse: "Portco performance monitoring",     enUse: "Portco performance monitoring",  koDetail: "Portco monthly reporting → KPI trend · alert (revenue 5%+ decline 등) 자동 생성.", enDetail: "Monthly portco reports auto-generate KPI trends and alerts (e.g., 5%+ revenue declines)." },
  { koUse: "Valuation memo drafting",           enUse: "Valuation memo drafting",        koDetail: "Public comps · transaction comps · DCF input → quarterly valuation memo 초안 자동.", enDetail: "Drafts quarterly valuation memos from public comps, transaction comps, and DCF inputs." },
  { koUse: "Compliance alert",                  enUse: "Compliance alerts",              koDetail: "LP onboarding 시 LP가 sanctions list에 oadded? PEP escalation? Regulation 변경 alert.", enDetail: "Flags if an LP is added to sanctions lists, escalates PEPs, alerts on regulatory changes." },
];

const CYBERSECURITY_LAYERS = [
  { koLayer: "1. Zero-trust architecture",        enLayer: "1. Zero-trust architecture",       koDetail: "Internal network 신뢰 X. 모든 access는 identity + device + context 기반 인증. Microsoft Entra · Okta가 표준.", enDetail: "Don't trust the internal network. Every access requires identity + device + context. Microsoft Entra and Okta are standard." },
  { koLayer: "2. MFA (Multi-Factor Auth) 의무",   enLayer: "2. Mandatory MFA",                  koDetail: "Email · VPN · fund admin · LP portal 모두 MFA. SMS는 SIM swap risk로 제외 — hardware key (YubiKey) 또는 authenticator app.", enDetail: "Email, VPN, fund admin, LP portal — all behind MFA. SMS is excluded due to SIM swap risk. Hardware keys (YubiKey) or authenticator apps only." },
  { koLayer: "3. Air-gapped backup",              enLayer: "3. Air-gapped backups",             koDetail: "Ransomware 발생 시 복구 가능한 offline backup. 매주 verification.", enDetail: "Offline backups recoverable after ransomware. Verified weekly." },
  { koLayer: "4. DLP (Data Loss Prevention)",     enLayer: "4. Data loss prevention (DLP)",     koDetail: "LP PII · portco confidential 외부 전송 시 자동 차단. Email · USB · cloud upload 모두 monitor.", enDetail: "Auto-blocks external transmission of LP PII and portco confidential data. Email, USB, cloud uploads all monitored." },
  { koLayer: "5. Vendor risk management",         enLayer: "5. Vendor risk management",         koDetail: "Fund admin · law firm · IT vendor의 SOC 2 Type II audit 요구. 매년 cyber insurance 점검.", enDetail: "Require SOC 2 Type II audits from fund admins, law firms, and IT vendors. Annual cyber insurance review." },
  { koLayer: "6. Tabletop exercise",              enLayer: "6. Tabletop exercises",             koDetail: "분기마다 ransomware · BEC · insider threat 시나리오 drill. Incident response playbook 점검.", enDetail: "Quarterly drills for ransomware, BEC, and insider threat scenarios. Review the incident response playbook." },
];

const TOKENIZATION_2026 = [
  { project: "KKR Healthcare Strategic Growth Fund II (Tokenized)", year: "2022-진행 중", koDetail: "Avalanche 블록체인에 fund interest 토큰화. 최소 투자 $100K → $25K로 인하. Securitize platform.", enDetail: "Fund interests tokenized on Avalanche. Minimum investment dropped from $100K to $25K. Securitize platform." },
  { project: "Hamilton Lane Senior Credit Opportunities Fund",      year: "2023-진행 중", koDetail: "ADDX (Singapore) · Polymath · Securitize 멀티플랫폼. 분기 secondary trading enabled.", enDetail: "Multi-platform: ADDX (Singapore), Polymath, Securitize. Quarterly secondary trading enabled." },
  { project: "Apollo S3 Equity & Hybrid Solutions (Pilot)",         year: "2024-Pilot",   koDetail: "Provenance Blockchain. 기관 LP만 대상이지만 onboarding 시간 30일 → 7일로 단축.", enDetail: "On Provenance Blockchain. Institutional LPs only, but onboarding cut from 30 days to 7." },
  { project: "BlackRock USD Institutional Digital Liquidity Fund (BUIDL)", year: "2024-진행 중", koDetail: "BlackRock의 토큰화 MMF — fund treasury가 USDC alternative로 활용. Q1 2026 AUM $1B+.", enDetail: "BlackRock's tokenized MMF — used by funds as a USDC alternative for treasury. Q1 2026 AUM exceeds $1B." },
];

const FORECAST_2030 = [
  { koArea: "Real-time NAV",              enArea: "Real-time NAV",                koDetail: "분기 NAV → daily NAV → real-time NAV로 진화. Blockchain settlement + AI valuation 결합.", enDetail: "Quarterly NAV → daily NAV → real-time NAV. Powered by blockchain settlement plus AI valuation." },
  { koArea: "AI-powered valuation",        enArea: "AI-powered valuation",         koDetail: "ASC 820 Level 3 portco의 mark이 AI 모델 + human review hybrid. Big 4 valuation firm이 AI tooling 표준화.", enDetail: "ASC 820 Level 3 portco marks become AI-model-plus-human-review hybrids. Big 4 valuation firms standardize the AI tooling." },
  { koArea: "Tokenized LP interest secondary",  enArea: "Tokenized LP-interest secondary", koDetail: "Continuation fund 없이도 LP가 분기마다 fund interest를 secondary 시장에서 매매. Liquidity premium 회복.", enDetail: "LPs trade fund interests on secondary markets quarterly without needing a continuation fund. Liquidity premium restored." },
  { koArea: "GP/LP DAO (decentralized governance)", enArea: "GP/LP DAO governance",      koDetail: "LPAC가 on-chain voting으로 진화. Major decision (extension · recap · continuation)에 LP 직접 voting.", enDetail: "LPACs evolve to on-chain voting. LPs vote directly on major decisions (extension, recap, continuation)." },
  { koArea: "Fund Admin disruption",        enArea: "Fund admin disruption",        koDetail: "기존 Apex · SS&C · Citco 모델에 AI-native challenger 등장. Per-LP cost $5K → $500로 감소.", enDetail: "AI-native challengers disrupt the Apex / SS&C / Citco model. Per-LP cost drops from $5K to $500." },
  { koArea: "Regulatory tech (RegTech)",    enArea: "Regulatory tech (RegTech)",    koDetail: "Form PF · Form ADV · ILPA Template이 모두 API-driven · auto-generated. Compliance 인력 30%+ 감소.", enDetail: "Form PF, Form ADV, and ILPA Template all become API-driven and auto-generated. Compliance headcount drops 30%+." },
];

const TOC_ITEMS = [
  { id: "tech-stack",       ko: "§1. Fund Ops Tech Stack 6종", en: "§1 Six fund ops platforms" },
  { id: "ai-use-cases",     ko: "§2. AI in Fund Ops — 8가지 use case", en: "§2 Eight AI use cases" },
  { id: "cybersecurity",    ko: "§3. Cybersecurity — 6 layer 방어", en: "§3 Cybersecurity — six-layer defense" },
  { id: "tokenization",     ko: "§4. Tokenization + 2030 Forecast", en: "§4 Tokenization + 2030 forecast" },
];

export default function MaFundOps07Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.7</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "Fund Ops 시리즈 · Ch.7" : "Fund Ops Series · Ch.7"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q1 2026 기준` : `~${meta.readingMinutes} min · data as of Q1 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">
            {TOC_ITEMS.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>))}
          </ul>
        </div>

        <section id="tech-stack" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. Fund Ops Tech Stack — 6대 플랫폼 (Q1 2026)" : "§ 1 Six fund ops platforms (Q1 2026)"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "10년 전만 해도 Excel + email + custom Access database가 PE Fund Ops의 표준이었다. 지금은 6개 platform이 글로벌 시장을 지배한다. 각각 sweet spot이 있고, mega-cap은 보통 4-5개 동시 사용." : "A decade ago, Excel + email + a custom Access database was the PE fund ops stack. Today, six platforms dominate. Each has a sweet spot, and mega-caps typically run 4-5 in parallel."}
          </p>
          <div className="space-y-3 mb-8">
            {TECH_STACK.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-bold text-sm">{p.platform}</div>
                  <div className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: `${ACCENT}20`, color: ACCENT }}>{p.category}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">{p.price}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? p.koUseCase : p.enUseCase}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="ai-use-cases" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. AI in Fund Ops — 2026년 8가지 실전 use case" : "§ 2 AI in fund ops — eight real use cases in 2026"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "2023-2024가 \"AI 가능성 탐색\" phase였다면 2025-2026은 \"실전 deployment\" phase. Q1 2026 기준 글로벌 mega-cap PE 80%+가 최소 1개 AI use case를 production에 배치. ROI 가장 큰 영역은 LP IR · ESG reporting · NAV reconciliation." : "If 2023-2024 was AI exploration, 2025-2026 is production deployment. By Q1 2026, 80%+ of global mega-cap PE has at least one AI use case in production. Highest ROI: LP IR, ESG reporting, NAV reconciliation."}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {AI_USE_CASES.map((u, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-2" style={{ color: ACCENT }}>{ko ? u.koUse : u.enUse}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? u.koDetail : u.enDetail}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="cybersecurity" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. Cybersecurity — 6 Layer 방어 모델" : "§ 3 Cybersecurity — the six-layer defense model"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "BEC + ransomware + insider threat가 PE Fund Ops의 3대 위협. 2024년 EU 익명 PE €50M 사고처럼 BEC + ransomware combo가 가장 무섭다. 표준 방어는 6 layer." : "BEC, ransomware, and insider threats are PE fund ops' three biggest threats. The 2024 €50M anonymous EU-PE incident — a BEC + ransomware combo — is the scariest mode. The standard defense is six layers."}
          </p>
          <div className="space-y-2 mb-8">
            {CYBERSECURITY_LAYERS.map((l, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-semibold text-sm mb-1" style={{ color: ACCENT }}>{ko ? l.koLayer : l.enLayer}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? l.koDetail : l.enDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="tokenization" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Tokenization + 2030 Forecast" : "§ 4 Tokenization + 2030 forecast"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "Fund Tokenization 주요 사례 (2022-2026)" : "Fund tokenization milestones (2022-2026)"}</h3>
          <div className="space-y-3 mb-8">
            {TOKENIZATION_2026.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-semibold text-sm">{t.project}</div>
                  <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{t.year}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koDetail : t.enDetail}</div>
              </motion.div>
            ))}
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "2030 Forecast — Fund Ops가 어떻게 바뀔까" : "2030 forecast — how fund ops changes"}</h3>
          <div className="space-y-2 mb-8">
            {FORECAST_2030.map((f, i) => (
              <div key={i} className="rounded-lg border-2 p-4" style={{ borderColor: `${ACCENT}40` }}>
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{ko ? f.koArea : f.enArea}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? f.koDetail : f.enDetail}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-2 p-6 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-lg font-bold mb-3">{ko ? "Fund Ops 시리즈 마무리 — 7챕터를 관통하는 핵심" : "Fund Ops Series Wrap — what runs through all seven chapters"}</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "Front/Middle/Back 분리는 conflict of interest 통제의 기본 (Ch.1)" : "Front/middle/back separation is the baseline conflict-of-interest control (Ch.1)"}</li>
              <li>• {ko ? "LP onboarding · capital call에서 BEC fraud가 #1 운영 위험 (Ch.2)" : "BEC fraud is the #1 operational risk at LP onboarding and capital call (Ch.2)"}</li>
              <li>• {ko ? "NAV/Valuation은 사기가 가장 많이 나는 영역 — 외부 검증 필수 (Ch.3)" : "NAV and valuation see the most fraud — external verification is mandatory (Ch.3)"}</li>
              <li>• {ko ? "Sub-line · NAV facility · recap은 strong tool이지만 위기 시 weak point (Ch.4)" : "Sub-lines, NAV facilities, and recaps are powerful tools but become weak points in a crisis (Ch.4)"}</li>
              <li>• {ko ? "Continuation fund가 zombie 문제 해결책으로 부상 (Ch.5)" : "Continuation funds emerged as the answer to the zombie problem (Ch.5)"}</li>
              <li>• {ko ? "사고는 항상 패턴이 있다 — 6가지 공통 교훈 체크리스트 (Ch.6)" : "Failures always have patterns — six common lessons in the checklist (Ch.6)"}</li>
              <li>• {ko ? "2026 현재 AI · tokenization이 Fund Ops를 재정의 중 (Ch.7)" : "AI and tokenization are redefining fund ops as of 2026 (Ch.7)"}</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 italic">
              {ko ? "다음 시리즈는 무엇이 좋을까? Deal Story가 다루는 영역 — Korean PE deep dive, Distressed/Special Situations, Private Credit 등이 후보." : "What should come next? Candidates: Korean PE deep dive, distressed and special situations, private credit."}
            </div>
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          <Link href={ko ? "/learn" : "/en/learn"} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "학습 인덱스 →" : "Learn index →"}</div><div className="text-sm font-semibold">{ko ? "전체 시리즈 보기" : "Browse all series"}</div></Link>
        </div>
      </div>
    </div>
  );
}
