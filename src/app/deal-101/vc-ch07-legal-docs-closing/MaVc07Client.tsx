"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch07-legal-docs-closing";

const RCPS_FEATURES = [
  { feature: "Redeemable (상환)",      koDetail: "5-7년 후 회사가 발행가 + 이자 (5-8% IRR)로 사주는 옵션. VC의 \"발 빼는 카드\".",                                     enDetail: "After 5-7 years, the company can buy back at issue price + 5-8% IRR. VC's \"exit card.\"" },
  { feature: "Convertible (전환)",      koDetail: "보통주 전환권. IPO 시 강제 전환 (mandatory conversion). 1:1 비율 표준.",                                            enDetail: "Right to convert to common. Mandatory conversion at IPO at 1:1 standard ratio." },
  { feature: "Preferred (우선)",         koDetail: "청산 시 우선권 (liquidation preference) + 의결권 + 배당 우선권.",                                                  enDetail: "Liquidation preference + voting + dividend priority on a winding-up." },
  { feature: "Anti-dilution",           koDetail: "Down round 시 보통 broad-based weighted average 적용. 한국 RCPS는 \"가중평균방식\" 명시 의무.",                       enDetail: "Broad-based weighted average on a down round. Korean RCPS must specify the \"weighted-average method\" explicitly." },
  { feature: "Tag-along / Drag-along",   koDetail: "주주간계약 (SHA) 에 명시. Founder 매각 시 VC도 동참 권리 + 50%+ 합의 시 강제 매각.",                                  enDetail: "Specified in the SHA. VC tags along on founder sale; 50%+ consent forces a sale." },
  { feature: "Right of First Refusal",   koDetail: "기존 주주의 신주 우선매수권 + 다른 주주 매각 시 우선매수권.",                                                       enDetail: "Existing holders get pre-emptive rights on new issuance + ROFR on transfers." },
];

const LEGAL_DOCS_KR = [
  { doc: "신주인수계약 (SPA)",          pages: "30-50", koWhat: "RCPS 발행 조건 · 대금 지급 · 진술 및 보장 · 면책 조항." },
  { doc: "주주간계약 (SHA)",            pages: "40-80", koWhat: "이사회 구성 · 정보권 · 사전동의권 · drag-along · 우선매수권 · 매도청구권." },
  { doc: "정관 변경",                    pages: "5-10",  koWhat: "우선주 조항 추가 · 의결권 · 배당 · 청산 우선권 정의." },
  { doc: "이사회 결의서",                pages: "2-5",   koWhat: "신주 발행 결의 · 임원 선임 (VC 측 이사)." },
  { doc: "주주총회 결의서",              pages: "2-5",   koWhat: "정관 변경 · 신주 발행 승인." },
  { doc: "전환·상환 청구서 양식",          pages: "2-3",   koWhat: "VC가 IPO 시 강제 전환 청구 · 5-7년 후 상환 청구 시 사용." },
];

const TOP_LAW_FIRMS = [
  { region: "🇰🇷 Korea Big 5",   firms: "김앤장 · 세종 · 태평양 · 광장 · 율촌", koFee: "₩30-80M (Series A)",   koNote: "김앤장 (Kim & Chang)이 한국 VC deal 60%+ 점유. 세종·태평양이 VC 전담팀 강세." },
  { region: "🇺🇸 US Top",         firms: "Cooley · Wilson Sonsini · Fenwick · Gunderson · Goodwin", koFee: "$25-75K (Series A)", koNote: "Cooley · WSGR이 VC deal 표준. Fenwick은 SaaS · biotech 강세." },
  { region: "🇰🇷 Mid-tier KR",   firms: "Yoon&Yang · Shin&Kim · Bae Kim & Lee", koFee: "₩15-40M", koNote: "Bae Kim & Lee가 cross-border deal · 한국 진출 외국 VC에 강함." },
];

const CLOSING_CHECKLIST = [
  { section: "1. Pre-closing (1-2주 전)", items: ["변호사 final draft 합의", "VC IC 최종 승인", "Cap table 시뮬레이션 (Carta · 한국은 자체)", "Wire instruction 양측 confirm", "Bank account setup"] },
  { section: "2. Signing day",           items: ["SPA · SHA · 정관 변경 서명", "이사회 결의서 서명", "Wire instruction final lock", "Press release prep (NDA cleared)"] },
  { section: "3. Closing day",            items: ["Wire 발송 + 입금 확인", "주식 발행 (전자증권 발행)", "Stock certificate 발행 (한국은 전자증권)", "Cap table 업데이트 + 모든 holder에 share", "VC 이사 board 등록"] },
  { section: "4. Post-closing (1주 안)",  items: ["Closing memo 작성 → fund admin", "모태펀드 보고 (KVIC) — 출자 진행률", "Press release 발표", "신규 board member orientation", "Monthly update cadence 합의"] },
];

const TOC_ITEMS = [
  { id: "rcps",          ko: "§1. 한국 RCPS Deep Dive — 6가지 권리",     en: "§1 Korean RCPS deep dive — six rights" },
  { id: "legal-docs",    ko: "§2. Legal Docs Package — 6 문서",          en: "§2 Legal docs package — six documents" },
  { id: "law-firms",     ko: "§3. 주요 Law Firms + Fee 구조",            en: "§3 Top law firms + fee structure" },
  { id: "closing",       ko: "§4. Closing Checklist 50+ Items",           en: "§4 50+ item closing checklist" },
];

export default function MaVc07Client({ lang }: { lang: "ko" | "en" }) {
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
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.7</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.7" : "VC Series · Ch.7"}</span>
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

        <section id="rcps" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. RCPS (상환전환우선주) Deep Dive — 6가지 권리" : "§ 1 RCPS (redeemable convertible preferred shares) deep dive — six rights"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "한국 VC deal의 75%+가 RCPS (상환전환우선주) 구조. 미국 Preferred Stock과 비슷하지만 \"상환 권리 (Redeemable)\"가 핵심 차이 — VC가 5-7년 후 회사한테 자기 주식을 사라고 강제할 수 있다. 한국 stock market의 IPO exit이 더 오래 걸리기 때문에 진화한 구조." : "75%+ of Korean VC deals use RCPS. Similar to US Preferred but with a key twist: a redemption right lets the VC force the company to buy back after 5-7 years. Evolved because IPO exits in Korea take longer."}
          </p>
          <div className="space-y-2 mb-6">
            {RCPS_FEATURES.map((f, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{f.feature}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? f.koDetail : f.enDetail}</div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "기타 instrument: CB · BW" : "Other instruments: CB and BW"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• <strong>CB ({ko ? "전환사채" : "Convertible Bond"})</strong>: {ko ? "Bridge round · 일시적 자금 조달 시. 만기 + 이자 명시." : "Bridge rounds / interim financing. Maturity + interest specified."}</li>
              <li>• <strong>BW ({ko ? "신주인수권부사채" : "Bond with Warrant"})</strong>: {ko ? "CB + 신주인수권 (warrant) 부착. 채권 + 옵션 hybrid." : "CB + attached warrant — a bond + option hybrid."}</li>
              <li>• {ko ? "Series A부터는 거의 RCPS 표준. CB·BW는 bridge 또는 strategic financing에 한정." : "RCPS dominates from Series A. CB/BW limited to bridges or strategic financing."}</li>
            </ul>
          </div>
        </section>

        <section id="legal-docs" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. Legal Docs Package — 6 문서 (한국 Series A 기준)" : "§ 2 Legal docs package — six documents (Korea Series A)"}</h2>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-56">{ko ? "문서" : "Document"}</th>
                  <th className="text-left p-3 w-20">Pages</th>
                  <th className="text-left p-3">{ko ? "내용" : "Content"}</th>
                </tr>
              </thead>
              <tbody>
                {LEGAL_DOCS_KR.map((d, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{d.doc}</td>
                    <td className="p-3 text-xs font-mono">{d.pages}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{d.koWhat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="law-firms" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 주요 Law Firms + Fee 구조 (Q2 2026)" : "§ 3 Top law firms + fee structure (Q2 2026)"}</h2>
          <div className="space-y-3 mb-6">
            {TOP_LAW_FIRMS.map((f, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <div className="font-bold text-sm" style={{ color: ACCENT }}>{f.region}</div>
                  <div className="text-xs font-mono">{f.koFee}</div>
                </div>
                <div className="text-xs text-gray-700 dark:text-gray-300 mb-1"><span className="font-semibold">{ko ? "Firms: " : "Firms: "}</span>{f.firms}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{f.koNote}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-4">
            {ko ? "한국 legal fee는 회사 (founder side)가 통상 부담 — VC fee는 fund operating expense에서 차감. 미국은 양측 각자 부담 (양측 lawyer 모두 회사가 부담하는 경우도 있음 — \"company pays both sides\")." : "In Korea, the company (founders) typically bears legal fees; VC fees come out of fund operating expenses. In the US, each side pays its own (sometimes the company pays both sides — \"company pays both\")."}
          </p>
        </section>

        <section id="closing" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. Closing Checklist — 50+ Items, 4 Phases" : "§ 4 Closing checklist — 50+ items, four phases"}</h2>
          <div className="space-y-3 mb-6">
            {CLOSING_CHECKLIST.map((s, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{s.section}</div>
                <ul className="space-y-1">
                  {s.items.map((item, j) => (
                    <li key={j} className="text-xs text-gray-700 dark:text-gray-300 flex gap-2"><span style={{ color: ACCENT }}>☐</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="rounded-xl border-2 p-5" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-base font-bold mb-2">{ko ? "Term sheet → Closing 평균 timeline" : "Term sheet → closing timeline"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• 🇰🇷 {ko ? "한국 Series A: 8-12주 (RCPS 복잡성 + 5-party 변호사 review)" : "Korea Series A: 8-12 weeks (RCPS complexity + 5-party review)"}</li>
              <li>• 🇺🇸 {ko ? "US Series A: 4-8주 (NVCA template 표준화)" : "US Series A: 4-8 weeks (NVCA template standardization)"}</li>
              <li>• {ko ? "Hot deal: KR 4-6주 / US 2-4주" : "Hot deal: KR 4-6 weeks / US 2-4 weeks"}</li>
            </ul>
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
