"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch01-industry-stages";

const STAGES = [
  { stage: "Pre-Seed",       koRound: "$100K-1M",   enRound: "$100K-1M",   koVal: "$3-8M post",    enVal: "$3-8M post",     koMetric: "Idea + 창업자 + early prototype", enMetric: "Idea + founders + prototype",         koInvestor: "Angel · YC · Techstars · 한국 primer·매쉬업", enInvestor: "Angel, YC, Techstars" },
  { stage: "Seed",            koRound: "$1-5M",      enRound: "$1-5M",      koVal: "$8-25M post",   enVal: "$8-25M post",    koMetric: "Product launched · early traction · $0-100K MRR", enMetric: "Product launched, early traction, $0-100K MRR", koInvestor: "Seed fund · 본엔젤스 · 카카오벤처스 · USV", enInvestor: "Seed funds, USV, micro-VC" },
  { stage: "Series A",        koRound: "$5-20M",     enRound: "$5-20M",     koVal: "$25-100M post", enVal: "$25-100M post",  koMetric: "$1M+ ARR · 200%+ YoY · 130%+ NDR · product-market fit", enMetric: "$1M+ ARR, 200%+ YoY, 130%+ NDR, PMF",         koInvestor: "알토스·한투파·Sequoia·Benchmark", enInvestor: "Sequoia, Benchmark, Accel" },
  { stage: "Series B",        koRound: "$15-60M",    enRound: "$15-60M",    koVal: "$100-400M",     enVal: "$100-400M",      koMetric: "$5-15M ARR · GTM 검증 · sales playbook", enMetric: "$5-15M ARR, GTM validated, sales playbook",   koInvestor: "Lightspeed · Greylock · 카카오·KB · IMM", enInvestor: "Lightspeed, Greylock, Index" },
  { stage: "Series C",        koRound: "$30-150M",   enRound: "$30-150M",   koVal: "$300M-1.5B",    enVal: "$300M-1.5B",     koMetric: "$15-50M ARR · 새 지역·라인 확장",     enMetric: "$15-50M ARR, geographic/line expansion",     koInvestor: "Tiger · Insight · Coatue · SoftBank", enInvestor: "Tiger, Insight, Coatue, SoftBank" },
  { stage: "Series D+",       koRound: "$100M+",     enRound: "$100M+",     koVal: "$1-10B",        enVal: "$1-10B",         koMetric: "$50M+ ARR · profitable path · pre-IPO", enMetric: "$50M+ ARR, path to profitability, pre-IPO",    koInvestor: "Sovereign · crossover (T. Rowe·Fidelity·BlackRock)", enInvestor: "Sovereign, crossovers (T. Rowe, Fidelity, BlackRock)" },
];

const ASSOC_WEEK = [
  { area: "Sourcing / Screening",    pct: 30, koDetail: "매일 inbound deck 30-50건 triage · 주 5-10건 1차 미팅 · sourcing thesis 업데이트", enDetail: "30-50 inbound decks triaged daily, 5-10 first meetings weekly, sourcing thesis updates" },
  { area: "Active DD",               pct: 25, koDetail: "1-2 active deal에 deep DD — customer call · financial review · reference check", enDetail: "Deep DD on 1-2 active deals — customer calls, financial review, references" },
  { area: "IC Memo 작성",            pct: 15, koDetail: "분기 1-3건 IC 통과를 위한 30-50 page memo · partner review iteration",          enDetail: "1-3 IC memos per quarter (30-50 pages) with partner review iterations" },
  { area: "Portfolio Monitoring",    pct: 15, koDetail: "보유 portco 15-25개 monthly check-in · 분기 board prep · monthly update 정리",   enDetail: "15-25 portcos monitored, quarterly board prep, monthly update digests" },
  { area: "Internal / 보고",          pct: 10, koDetail: "Fund LP 보고 · 모태펀드 보고 · 출자위원회 자료",                                  enDetail: "Fund LP reporting, KVIC reporting, IC prep" },
  { area: "Sourcing trip / 네트워킹", pct: 5,  koDetail: "Conference · founder dinner · advisor session — KSV·NextRise·Disrupt",          enDetail: "Conferences, founder dinners, advisor sessions — KSV, NextRise, Disrupt" },
];

const US_VC_ATLAS = [
  { name: "Andreessen Horowitz (a16z)",    aum: 45, koFocus: "Crypto · biotech · fintech · enterprise — full-stack platform model",   enFocus: "Crypto, biotech, fintech, enterprise — full-stack platform model",  hq: "Menlo Park",     koDeals: "Coinbase · Lyft · Airbnb · Databricks · OpenSea", enDeals: "Coinbase, Lyft, Airbnb, Databricks, OpenSea" },
  { name: "Sequoia Capital",                aum: 85, koFocus: "Seed부터 Growth까지 모든 stage. 가장 오래된 (1972) top-tier VC.",          enFocus: "Every stage from seed to growth. The oldest top-tier VC (1972).",   hq: "Menlo Park",     koDeals: "Apple · Google · WhatsApp · Stripe · Coupang", enDeals: "Apple, Google, WhatsApp, Stripe, Coupang" },
  { name: "Benchmark",                       aum: 14, koFocus: "5명 equal partner · 1 round당 1 lead · Series A 집중",                   enFocus: "Five equal partners, one lead per round, Series A focus",            hq: "Woodside",       koDeals: "Uber · eBay · Twitter · Snap · Discord",        enDeals: "Uber, eBay, Twitter, Snap, Discord" },
  { name: "Accel Partners",                  aum: 21, koFocus: "Enterprise SaaS 강자 · Facebook Series A로 유명",                          enFocus: "Enterprise SaaS specialist; famous for the Facebook Series A",        hq: "Palo Alto",      koDeals: "Facebook · Atlassian · Slack · Dropbox · Spotify", enDeals: "Facebook, Atlassian, Slack, Dropbox, Spotify" },
  { name: "Founders Fund",                   aum: 11, koFocus: "Peter Thiel · contrarian thesis · 우주·국방 강세",                          enFocus: "Peter Thiel, contrarian thesis, strong in space and defense",         hq: "San Francisco",  koDeals: "SpaceX · Palantir · Stripe · Anduril",          enDeals: "SpaceX, Palantir, Stripe, Anduril" },
  { name: "Union Square Ventures (USV)",      aum: 3,  koFocus: "Network effect thesis · early-stage NY 중심",                              enFocus: "Network-effect thesis, early-stage, NY-based",                       hq: "New York",       koDeals: "Twitter · Tumblr · Etsy · Coinbase · Duolingo",   enDeals: "Twitter, Tumblr, Etsy, Coinbase, Duolingo" },
  { name: "Greylock Partners",               aum: 12, koFocus: "Enterprise + consumer mix · LinkedIn 초기 투자",                            enFocus: "Enterprise + consumer mix, early LinkedIn investor",                  hq: "Menlo Park",     koDeals: "LinkedIn · Workday · Airbnb · Figma",            enDeals: "LinkedIn, Workday, Airbnb, Figma" },
  { name: "Lightspeed Venture Partners",     aum: 25, koFocus: "Global (US·India·China·EU) · multi-stage",                                 enFocus: "Global (US, India, China, EU), multi-stage",                          hq: "Menlo Park",     koDeals: "Snap · Affirm · Mulesoft · Epic Games",          enDeals: "Snap, Affirm, Mulesoft, Epic Games" },
  { name: "Tiger Global Management",         aum: 95, koFocus: "Hedge fund + VC hybrid · 2021 peak에 mega round 폭주, 이후 conservative", enFocus: "Hedge fund + VC hybrid; aggressive at the 2021 peak, conservative since", hq: "New York", koDeals: "Stripe · Coupang · ByteDance · Flipkart",       enDeals: "Stripe, Coupang, ByteDance, Flipkart" },
  { name: "Insight Partners",                aum: 80, koFocus: "Growth-stage SaaS 전문 · ScaleUp 모델 (post-investment operating team)",   enFocus: "Growth-stage SaaS specialist with the ScaleUp post-investment operating team", hq: "New York", koDeals: "Shopify · Twitter · DocuSign · Qualtrics",      enDeals: "Shopify, Twitter, DocuSign, Qualtrics" },
];

const KR_VC_ATLAS = [
  { name: "알토스벤처스 (Altos Ventures)",   aum: 24, koFocus: "한국 IT · consumer · fintech 강자 · 한킴 (Korean-American) · Toss 초기부터 lead",        koDeals: "Toss · 우아한형제들 · 무신사 · 직방 · 야놀자",       hq: "Menlo Park / 서울" },
  { name: "한국투자파트너스 (한투파)",        aum: 14, koFocus: "한국 최대 VC · 모든 stage · 가장 많은 IPO exit 기록 (300+ portco)",                     koDeals: "Toss · 카카오 · 네이버 · 카카오뱅크 · 쏘카",         hq: "서울" },
  { name: "KB인베스트먼트",                    aum: 11, koFocus: "KB금융 산하 · 모태펀드 · 정책펀드 적극 활용 · ICT·바이오 중심",                         koDeals: "쿠팡 · 야놀자 · 마켓컬리 · 직방 · 채널톡",          hq: "서울" },
  { name: "카카오벤처스",                      aum: 5,  koFocus: "카카오 corp VC · seed/Series A 집중 · 한국 스타트업 ecosystem 핵심",                    koDeals: "두나무 · 클라썸 · 두레이 · 빅인사이트",              hq: "성남" },
  { name: "IMM Investment",                    aum: 9,  koFocus: "IMM PE의 venture wing · growth-stage 강세 · biotech 강함",                              koDeals: "쏘카 · 야놀자 · 야나두 · 펄어비스",                   hq: "서울" },
  { name: "본엔젤스벤처파트너스",                aum: 2,  koFocus: "Seed/Series A 초기 전문 · 강석흔 대표 · founder-friendly 평판",                          koDeals: "당근 · 슈피겐 · 직방 · 마이리얼트립",                hq: "서울" },
  { name: "미래에셋벤처투자",                    aum: 4,  koFocus: "미래에셋 금융 산하 · 글로벌 (China·India·SEA) 동시 운용",                                koDeals: "쿠팡 · GRAB · Ola · Bukalapak",                       hq: "서울 / Hong Kong" },
  { name: "SBI Investment Korea",              aum: 3,  koFocus: "일본 SBI 산하 · 한일 cross-border deal 활발",                                              koDeals: "라인 · 직방 · 메디블록",                              hq: "서울 / Tokyo" },
];

const KO_VS_US = [
  { dim: "VC 펀드 1개 사이즈",     koKr: "₩300억-3,000억 (대형 fund $500M-2B)",     enKr: "₩30-300B per fund (large funds $500M-2B)",  koUs: "$200M-3B (mega-cap $5B+)",         enUs: "$200M-3B (mega-caps $5B+)" },
  { dim: "심사역 수",              koKr: "5-20명",                                    enKr: "5-20 per firm",                              koUs: "30-200명",                          enUs: "30-200 per firm" },
  { dim: "Deal flow 채널 비중",    koKr: "Warm intro 80%+ · cold 거의 안 봄",         enKr: "Warm intro 80%+; cold rarely opened",       koUs: "Warm 50-60% · cold/inbound 40-50%", enUs: "Warm 50-60%; cold/inbound 40-50%" },
  { dim: "표준 instrument",         koKr: "RCPS (상환전환우선주) 75%+",                enKr: "RCPS dominates 75%+ of deals",              koUs: "Preferred Stock (Series A Preferred)", enUs: "Preferred Stock (Series A Preferred)" },
  { dim: "Term sheet → close",     koKr: "8-12주",                                     enKr: "8-12 weeks",                                 koUs: "4-8주",                              enUs: "4-8 weeks" },
  { dim: "IC 의사결정",             koKr: "8-12명 위원회 · majority/unanimous · 2-4주", enKr: "8-12 person committee, majority/unanimous, 2-4 weeks", koUs: "Partner 5-8명 · majority · 1주 내", enUs: "5-8 partners, majority, within 1 week" },
  { dim: "Regulator",               koKr: "금감원 + KVIC + 산업부 (정책펀드)",          enKr: "FSS + KVIC + MoTIE for policy funds",       koUs: "SEC only (Form ADV · Form PF)",     enUs: "SEC only (Form ADV, Form PF)" },
];

const TOC_ITEMS = [
  { id: "stages",        ko: "§1. 단계별 정의 — Seed부터 Series D+까지", en: "§1 Stage-by-stage — seed through Series D+" },
  { id: "associate-week", ko: "§2. VC 심사역의 한 주 (시간 배분)",       en: "§2 The VC associate's week" },
  { id: "us-atlas",      ko: "§3. US VC Atlas — Top 10 firms",         en: "§3 US VC atlas — top 10 firms" },
  { id: "kr-atlas",      ko: "§4. 🇰🇷 한국 VC Atlas + KR vs US 차이",     en: "§4 Korean VC atlas + KR vs US differences" },
];

export default function MaVc01Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.1</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.1" : "VC Series · Ch.1"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q2 2026 기준` : `~${meta.readingMinutes} min · data as of Q2 2026`}</span>
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

        <section id="stages" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 단계별 정의 — Seed부터 Series D+까지" : "§ 1 Stage-by-stage — seed through Series D+"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "VC funding은 6단계로 분류된다 — 각 단계마다 round size · valuation · metric threshold가 명확하다. 한국 SaaS Series A 표준은 $5-10M raise @ $30-60M post-money인데, 미국 표준은 $10-20M @ $50-100M으로 더 큼." : "VC funding falls into six stages, each with characteristic round sizes, valuations, and metric thresholds. Korean SaaS Series A typically raises $5-10M at $30-60M post; US standard is larger, $10-20M at $50-100M."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3">Stage</th>
                  <th className="text-left p-3">Round size</th>
                  <th className="text-left p-3">Valuation</th>
                  <th className="text-left p-3">{ko ? "필요 metric" : "Metrics needed"}</th>
                  <th className="text-left p-3">{ko ? "주요 투자자" : "Typical investors"}</th>
                </tr>
              </thead>
              <tbody>
                {STAGES.map((s, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold" style={{ color: ACCENT }}>{s.stage}</td>
                    <td className="p-3 text-xs font-mono">{ko ? s.koRound : s.enRound}</td>
                    <td className="p-3 text-xs font-mono">{ko ? s.koVal : s.enVal}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300">{ko ? s.koMetric : s.enMetric}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400">{ko ? s.koInvestor : s.enInvestor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="associate-week" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. VC 심사역의 한 주 — 50시간 시간 배분" : "§ 2 The VC associate's week — a 50-hour time allocation"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "VC associate / 심사역은 PE associate와 일하는 방식이 완전히 다르다. PE는 1 deal에 6-12개월 집중하고, VC는 동시에 20-30개 deal을 다양한 stage에서 처리. 시간 배분은 sourcing 30% + DD 25% + IC memo 15% + portfolio 15% + 보고 10% + 네트워킹 5%." : "VC associates work very differently from PE associates. PE focuses on one deal for 6-12 months; VC juggles 20-30 deals at different stages simultaneously. Time breaks down: sourcing 30% + DD 25% + IC memo 15% + portfolio 15% + reporting 10% + networking 5%."}
          </p>
          <div className="space-y-2 mb-6">
            {ASSOC_WEEK.map((a, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="font-bold text-sm">{a.area}</div>
                  <div className="text-xs px-2 py-0.5 rounded text-white" style={{ backgroundColor: ACCENT }}>{a.pct}%</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? a.koDetail : a.enDetail}</div>
                <div className="mt-2 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                  <div className="h-full" style={{ width: `${a.pct * 3}%`, backgroundColor: ACCENT }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="us-atlas" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 🇺🇸 US VC Atlas — Top 10 firms (Q2 2026)" : "§ 3 🇺🇸 US VC atlas — top 10 firms (Q2 2026)"}</h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-48">Firm</th>
                  <th className="text-right p-3 w-20">AUM ($B)</th>
                  <th className="text-left p-3 w-32">HQ</th>
                  <th className="text-left p-3">{ko ? "특징" : "Focus"}</th>
                  <th className="text-left p-3">{ko ? "주요 deal" : "Notable deals"}</th>
                </tr>
              </thead>
              <tbody>
                {US_VC_ATLAS.map((v, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-sm">{v.name}</td>
                    <td className="p-3 text-right font-mono text-sm">{v.aum}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400">{v.hq}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? v.koFocus : v.enFocus}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? v.koDeals : v.enDeals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="kr-atlas" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 🇰🇷 한국 VC Atlas + KR vs US 차이" : "§ 4 🇰🇷 Korean VC atlas + KR vs US differences"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "한국 Top 8 VC (Q2 2026)" : "Top 8 Korean VCs (Q2 2026)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-48">{ko ? "운용사" : "Firm"}</th>
                  <th className="text-right p-3 w-20">AUM (₩T)</th>
                  <th className="text-left p-3">{ko ? "특징" : "Focus"}</th>
                  <th className="text-left p-3">{ko ? "주요 deal" : "Notable deals"}</th>
                </tr>
              </thead>
              <tbody>
                {KR_VC_ATLAS.map((v, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-sm">{v.name}</td>
                    <td className="p-3 text-right font-mono text-sm">{(v.aum / 10).toFixed(1)}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{v.koFocus}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{v.koDeals}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "KR vs US — 7가지 결정적 차이" : "KR vs US — seven decisive differences"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-44">{ko ? "차원" : "Dimension"}</th>
                  <th className="text-left p-3">🇰🇷 Korea</th>
                  <th className="text-left p-3">🇺🇸 United States</th>
                </tr>
              </thead>
              <tbody>
                {KO_VS_US.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{r.dim}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? r.koKr : r.enKr}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? r.koUs : r.enUs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
      <Footer />
    </>
  );
}
