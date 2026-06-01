"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:    { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet:  { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:   { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:    { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald: { badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:    { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

// ── Stock Deal 장단점 ─────────────────────────────────────────────
const STOCK_PROS = [
  { title: "계약 이전 간단", desc: "허가·인허가가 회사 법인에 귀속되어 있어, 자산별로 이전 작업 없이 지분 이전만으로 모든 권리가 함께 넘어온다." },
  { title: "영업 연속성 유지", desc: "고객 계약, 직원 고용 관계, 공급업체 계약이 그대로 유지된다. 운영 중단 없이 사업을 이어받을 수 있다." },
  { title: "대규모 딜에서 효율적", desc: "자산이 수천 개에 달하는 대기업을 인수할 때, 자산 단위 이전보다 지분 인수가 훨씬 빠르고 비용이 적다." },
];

const STOCK_CONS = [
  { title: "숨겨진 부채도 떠안음", desc: "클로징 시점에 아직 드러나지 않은 소송, 환경 부채, 세금 추징 등 모든 우발 채무(Contingent Liability)까지 인수자가 책임진다." },
  { title: "매도자가 세금 측면에서 유리", desc: "개인 주주라면 주식 양도소득세만 납부. 법인세 + 배당세를 내야 하는 Asset Deal보다 세금 부담이 낮아 매도자는 Stock Deal을 선호한다." },
  { title: "Tax Step-up 불가", desc: "취득 자산의 장부가가 그대로 이어진다. 시가보다 낮은 장부가로 감가상각을 계속해야 해 세금 혜택이 없다." },
];

// ── Asset Deal 장단점 ────────────────────────────────────────────
const ASSET_PROS = [
  { title: "체리피킹 — 원하는 자산만", desc: "인수자가 필요한 자산(기술, 고객, 브랜드, 설비)만 선택적으로 구매할 수 있다. 수익성 없는 사업부나 노후 자산은 제외 가능." },
  { title: "부채·소송 리스크 차단", desc: "원칙적으로 부채는 매도자 법인에 남는다. 소송, 세금 추징, 환경 부채 등 우발 채무로부터 인수자를 보호한다." },
  { title: "Tax Step-up 효과", desc: "취득 자산을 현재 시가(FMV)로 새로 장부에 올릴 수 있다. 감가상각 기준이 높아지면 향후 수년간 세금을 절감할 수 있다." },
];

const ASSET_CONS = [
  { title: "자산별 이전 작업 복잡", desc: "계약서를 건별로 재체결하고, 허가를 재취득하며, 직원을 재고용해야 한다. 딜 클로징 이후 수개월이 걸리기도 한다." },
  { title: "매도자의 세금 부담 높음", desc: "법인이 자산을 팔면 법인세를 납부하고, 이후 현금을 주주에게 배당하면 배당소득세가 추가된다. 이중 과세 구조로 매도자가 기피." },
  { title: "핵심 인허가 재취득 불가 케이스", desc: "의약품 허가(FDA), 방송 면허, 금융 면허 등 일부 인허가는 법인에 귀속되어 자산 이전만으로 이전되지 않는다." },
];

// ── 상황별 선택 가이드 ──────────────────────────────────────────
const DECISION_TABLE = [
  { situation: "부채·소송 리스크가 큰 타겟", recommendation: "Asset Deal", color: "rose", reason: "부채를 차단하고 원하는 자산만 취득" },
  { situation: "핵심 인허가가 회사 법인에 귀속", recommendation: "Stock Deal", color: "blue", reason: "인허가가 지분 이전 시 함께 이전됨" },
  { situation: "사업 일부만 분리 인수", recommendation: "Asset Deal", color: "rose", reason: "특정 사업부 또는 특정 자산만 선택 가능" },
  { situation: "PE 엑싯 — 창업자 클린 엑싯", recommendation: "Stock Deal", color: "blue", reason: "개인 양도세만 납부, 법인세 이중 과세 없음" },
  { situation: "제약·의료 기업 인수", recommendation: "Stock Deal", color: "blue", reason: "FDA 허가가 법인에 귀속, 재취득 불가" },
  { situation: "부실기업 자산 인수", recommendation: "Asset Deal", color: "rose", reason: "부채 차단, 필요 자산만 선별 취득" },
];

// ── 케이스 예시 ──────────────────────────────────────────────────
const CASES = [
  {
    company: "제약회사 인수",
    structure: "Stock Deal",
    color: "blue",
    reason: "FDA 신약 허가, 임상 데이터, GMP 인증 등 주요 자산이 법인에 귀속. 자산 이전 방식으로는 이 허가들을 재취득하기 어렵거나 불가능하다.",
  },
  {
    company: "부실기업 자산 인수",
    structure: "Asset Deal",
    color: "rose",
    reason: "부채와 소송이 쌓인 회사의 설비·기술·고객만 취득. 법인의 부채는 차단하고 사업 가치만 분리 인수.",
  },
  {
    company: "대기업 사업부 분리 매각",
    structure: "Asset Deal / Carve-out",
    color: "amber",
    reason: "모회사가 특정 사업부를 분리해 매각. 해당 사업부의 자산·계약·인력만 이전. 종종 신설 법인을 먼저 만들고 거기에 자산을 이전한 뒤 지분을 파는 Carve-out 구조를 사용.",
  },
];

export default function StockVsAssetClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">스톡딜 vs 에셋딜</span>
            </div>
            <span className="inline-block text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-3 py-1 mb-4">
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              스톡딜 vs 에셋딜
              <span className="block text-xl sm:text-2xl text-gray-500 dark:text-gray-400 mt-1 font-medium">
                회사를 통째로 살까, 자산만 살까
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              M&A 딜 구조를 결정하는 가장 근본적인 선택 — 주식을 살 것인가, 자산을 살 것인가. 구조의 차이가 세금, 리스크, 협상 방향을 모두 바꾼다.
            </p>

            {/* 섹션 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: "기본 정의", href: "#definition" },
                { label: "장단점 비교", href: "#pros-cons" },
                { label: "세금이 핵심", href: "#tax" },
                { label: "언제 어떤 구조?", href: "#decision" },
                { label: "케이스 예시", href: "#cases" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: 기본 정의 ── */}
          <motion.section id="definition" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">두 가지 구조의 기본 정의</h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {/* Stock Deal */}
              <div className={`rounded-xl border ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg} p-5`}>
                <span className={`text-xs font-bold ${COLOR_MAP.blue.text}`}>Stock Deal</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-1 mb-2">주식 인수</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  인수자가 타겟 회사의 주식 전부(또는 다수)를 매입한다. 회사 자체 — 즉 자산, 부채, 계약, 인허가, 소송 등 모든 것을 그대로 인수하는 구조다.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {["자산 전부", "부채 전부", "계약 이전", "인허가 포함"].map((tag) => (
                    <span key={tag} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.blue.badge}`}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Asset Deal */}
              <div className={`rounded-xl border ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg} p-5`}>
                <span className={`text-xs font-bold ${COLOR_MAP.rose.text}`}>Asset Deal</span>
                <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-1 mb-2">자산 인수</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  인수자가 원하는 자산만 선택적으로 구매한다. 부채는 원칙적으로 매도자 법인에 남는다. 필요한 것만 골라 살 수 있다.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {["선택적 자산", "부채 차단", "체리피킹", "Tax Step-up"].map((tag) => (
                    <span key={tag} className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.rose.badge}`}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* 비유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                <strong>Stock Deal은 식당을 통째로 사는 것</strong> — 레시피, 직원, 임차 계약, 식재료 재고, 그리고 전 주인이 진 빚까지 전부 포함된다.
                <br className="my-1" />
                <strong>Asset Deal은 레시피와 주방 기기만 사는 것</strong> — 빚은 전 주인에게 그대로 남는다. 당신은 원하는 것만 가져온다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 2: 장단점 비교 ── */}
          <motion.section id="pros-cons" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">장단점 — 인수자 관점</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">같은 딜이어도 구조에 따라 인수자가 부담하는 리스크와 누리는 혜택이 완전히 달라진다.</p>

            {/* Stock Deal 장단점 */}
            <div className="mb-6">
              <div className={`flex items-center gap-2 mb-3`}>
                <span className={`text-xs font-bold rounded-full px-3 py-1 ${COLOR_MAP.blue.badge}`}>Stock Deal</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">인수자 관점</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">장점</p>
                  <div className="space-y-2">
                    {STOCK_PROS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">단점</p>
                  <div className="space-y-2">
                    {STOCK_CONS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Asset Deal 장단점 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-bold rounded-full px-3 py-1 ${COLOR_MAP.rose.badge}`}>Asset Deal</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">인수자 관점</span>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div>
                  <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">장점</p>
                  <div className="space-y-2">
                    {ASSET_PROS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-emerald-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">단점</p>
                  <div className="space-y-2">
                    {ASSET_CONS.map((item, i) => (
                      <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                        <div className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-rose-500" />
                        <div>
                          <span className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</span>
                          <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── 섹션 3: 세금이 구조 결정의 핵심 ── */}
          <motion.section id="tax" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">세금이 구조 결정의 핵심이다</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              딜 구조 협상에서 가장 큰 갈등 포인트는 세금이다. 매도자와 인수자의 이해관계가 정반대로 충돌한다.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className={`rounded-xl border ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg} p-4`}>
                <p className={`text-xs font-bold ${COLOR_MAP.violet.text} mb-2`}>매도자의 선호</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Stock Deal 선호</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  개인 주주라면 주식 양도소득세만 납부. Asset Deal처럼 법인세를 내고 그 남은 돈을 다시 배당으로 가져올 때 배당세를 낼 필요가 없다. 세금 부담이 훨씬 낮다.
                </p>
                <div className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Stock Deal: <span className={`font-bold ${COLOR_MAP.violet.text}`}>양도소득세만</span>
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Asset Deal: <span className="font-bold text-rose-600 dark:text-rose-400">법인세 + 배당세 이중 과세</span>
                </div>
              </div>

              <div className={`rounded-xl border ${COLOR_MAP.teal.border} ${COLOR_MAP.teal.bg} p-4`}>
                <p className={`text-xs font-bold ${COLOR_MAP.teal.text} mb-2`}>인수자의 선호</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Asset Deal 선호</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  자산을 현재 시가(FMV)로 장부에 올릴 수 있다 (Tax Step-up). 이후 수년간 높은 감가상각 비용으로 세금을 절감한다. Stock Deal은 이 혜택이 없다.
                </p>
                <div className="mt-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Asset Deal: <span className={`font-bold ${COLOR_MAP.teal.text}`}>Tax Step-up → 향후 절세</span>
                </div>
                <div className="mt-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                  Stock Deal: <span className="text-gray-400 dark:text-gray-500">장부가 그대로 이어받음, 절세 없음</span>
                </div>
              </div>
            </div>

            {/* 핵심 인사이트 */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                딜 구조는 세금 때문에 매도자와 인수자의 이해가 충돌한다. 협상에서 자주 쓰이는 해결책은 <strong>세금 차액을 가격으로 조정</strong>하는 방식이다 — 매도자가 Asset Deal을 수락하는 대가로, 인수자가 추가 세금 부담분만큼 가격을 더 올려주는 것이다. 어떤 구조를 쓰느냐는 결국 "세후 수익이 누구에게 더 나은가"의 계산이다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 4: 언제 어떤 구조를 쓰는가 ── */}
          <motion.section id="decision" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">언제 어떤 구조를 쓰는가</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              세금 외에도 딜 구조 선택에 영향을 미치는 실무적 요인들이 있다.
            </p>

            <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800/60">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400">상황</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400">권장 구조</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-600 dark:text-gray-400 hidden sm:table-cell">이유</th>
                  </tr>
                </thead>
                <tbody>
                  {DECISION_TABLE.map((row, i) => {
                    const c = COLOR_MAP[row.color];
                    return (
                      <tr key={i} className="border-t border-gray-100 dark:border-gray-700/60">
                        <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.situation}</td>
                        <td className="px-4 py-3">
                          <span className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${c.badge}`}>
                            {row.recommendation}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-500 dark:text-gray-400 text-xs hidden sm:table-cell">{row.reason}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── 섹션 5: 케이스 예시 ── */}
          <motion.section id="cases" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">실제 딜 케이스 예시</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              같은 M&A라도 산업과 상황에 따라 구조 선택이 달라진다. 세 가지 케이스를 보자.
            </p>

            <div className="space-y-4">
              {CASES.map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className={`rounded-xl border ${c.border} p-5`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-3">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{item.company}</h3>
                      <span className={`text-xs font-semibold rounded-full px-3 py-0.5 ${c.badge}`}>{item.structure}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.reason}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "딜 구조는 Phase 3 LOI에서 처음 명시되고 Phase 5 SPA에서 확정된다", badge: "Deal Process" },
                { href: "/deal-101/pmi", title: "PMI (인수 후 통합)", desc: "Stock Deal과 Asset Deal은 PMI 방식에도 영향을 미친다", badge: "Deal Structure" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"stock-vs-asset-deal"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
