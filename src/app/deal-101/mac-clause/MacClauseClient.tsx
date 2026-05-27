"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

export default function MacClauseClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/deal-101"
                className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">MAC 조항</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.violet.badge}`}>
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              MAC 조항 완전 정리
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                계약 파기의 마지막 수단
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Material Adverse Change — SPA 서명과 클로징 사이에 기업에 중대한 변화가 발생했을 때 인수자가 딜을 파기할 수 있는 조항.
              하지만 법원에서 인정받는 기준은 극도로 높다.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {/* ── 1. 핵심 정의 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">핵심 정의</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              MAC 조항(Material Adverse Change / Material Adverse Effect, MAE)은{" "}
              <strong className="text-gray-800 dark:text-gray-200">
                SPA 서명과 딜 클로징 사이의 기간에 타겟 기업이나 시장에 "중대한 부정적 변화"가 발생했을 때,
                인수자가 딜을 파기할 수 있는 계약 조항
              </strong>
              이다. 인수자의 보험처럼 설계됐지만, 실제 법정에서 인정받는 기준은 매우 높다.
            </p>

            {/* 비유 */}
            <div className={`rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                집을 계약했는데 잔금 치르기 전에 집에 큰 불이 났다면, 원래 가격에 그냥 사야 할 이유가 없다.
                MAC 조항은 그 "불"에 해당하는 사건이 생겼을 때 인수자를 보호하는 장치다.
                하지만 "집값이 내려갔다"거나 "마음이 바뀌었다"는 MAC이 아니다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 법원의 MAC 인정 기준 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">법원의 MAC 인정 기준 — 매우 높다</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              델라웨어 법원을 비롯한 미국 법원들은 MAC 주장에 대해 극도로 높은 기준을 적용한다.
              아래 기준들을 모두 충족해야 MAC이 성립한다.
            </p>

            <div className="space-y-3">
              {[
                {
                  label: "단기적 사건은 MAC이 아니다",
                  desc: "주가 하락, 단기 실적 악화, 일시적 영업 침체는 MAC이 아니다. 장기적·구조적으로 기업 가치를 훼손하는 사건이어야 한다.",
                  color: "rose",
                },
                {
                  label: "업계 전반 영향은 MAC에서 제외",
                  desc: "팬데믹, 금리 급등, 전쟁, 경기침체 등 업계 전체에 영향을 주는 거시적 사건은 통상 MAC 정의에서 제외된다. SPA에 명시적으로 제외 항목을 열거하는 것이 표준 관행이다.",
                  color: "amber",
                },
                {
                  label: "기업이 근본적으로 달라져야 한다",
                  desc: '"가격이 비싸 보인다"는 MAC이 아니다. 기업의 사업 모델, 핵심 자산, 수익 창출 능력이 구조적으로 훼손됐어야 한다.',
                  color: "violet",
                },
                {
                  label: "계약 전에 알려진 사실은 MAC이 아니다",
                  desc: "SPA 서명 전부터 알려진 리스크를 나중에 MAC이라고 주장할 수 없다. '새로운' 중대한 변화여야 한다.",
                  color: "blue",
                },
              ].map((item, i) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={i} className="flex gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 3. 협상 포인트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">협상 포인트 — MAC 정의 범위</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              MAC 조항은 정의 범위 자체가 중요한 협상 포인트다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className={`rounded-xl border p-4 ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.violet.text} mb-2`}>인수자 전략</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  MAC 정의를 최대한 <strong className="text-gray-800 dark:text-gray-200">넓게</strong> 정의하고,
                  제외 항목을 좁게 설정한다. 더 많은 사건에서 딜을 파기할 수 있는 옵션을 확보한다.
                </p>
              </div>
              <div className={`rounded-xl border p-4 ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.rose.text} mb-2`}>매도자 전략</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  MAC 정의를 최대한 <strong className="text-gray-800 dark:text-gray-200">좁게</strong> 정의하고,
                  제외 항목(업계 리스크, 경제 상황, 금리, 전쟁 등)을 폭넓게 열거한다.
                  인수자가 MAC을 구실로 딜을 빠져나갈 여지를 없앤다.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
              실무에서는 제외 항목의 범위가 가장 치열하게 다투는 협상 포인트다. 특히 "업계 전반" 리스크를 어디까지 제외할지,
              "타겟에 불균형하게 영향을 미치는 경우"는 제외하지 않는다는 단서 조항을 넣을지가 핵심이다.
            </p>
          </motion.section>

          {/* ── 4. 케이스 ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 — MAC이 인정됐나, 안 됐나</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                두 케이스를 비교하면 MAC 인정 기준이 얼마나 엄격한지 명확히 드러난다.
              </p>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Musk × Twitter — MAC 실패 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.rose.badge}`}>
                      MAC 주장 실패
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">머스크 × 트위터 — "봇 계정 = MAC" 주장 실패</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$440억 딜 / 2022</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.rose.bg} ${COLOR_MAP.rose.text} border ${COLOR_MAP.rose.border}`}>
                    딜 강제 완성
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 맥락</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      "인수 가격이 비싸 보인다"는 MAC이 아니다 — 실제로 법원이 이를 인정하지 않으면 어떻게 되는지를 보여주는 교과서 케이스다.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2022년 7월, 머스크는 "트위터가 봇 계정 수를 허위로 공개한 것이 MAC에 해당한다"며 딜 파기를 선언했다.
                      트위터 주가는 합의 가격($54.20) 대비 크게 하락해 있었고, 머스크 입장에서는 "비싸게 사게 됐다"는 상황이었다.
                    </p>
                    <p>
                      트위터 측의 반박은 명확했다: "봇 계정 이슈는 SPA 서명 이전부터 공개적으로 알려진 사실이다. 새로운 MAC이 아니다."
                      Delaware 법원도 MAC 성립 가능성이 낮다는 방향으로 흘렀다.
                    </p>
                    <p>
                      머스크는 법원의 강제 이행 명령(Specific Performance)이 내려질 가능성을 계산한 끝에,
                      재판 직전 원래 가격에 클로징을 완료했다. MAC 주장은 법정에서 실질적으로 기각된 것이다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심 교훈</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      MAC 주장은 법원에서 거의 인정받지 못한다. "가격이 아깝다"거나 "계약 전에 알려진 리스크"는 MAC이 아니다.
                      MAC을 구실로 딜을 파기하려는 전략은 대부분 역풍을 맞는다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Akorn × Fresenius — MAC 인정 */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.emerald.badge}`}>
                      MAC 인정 성공 (희귀 케이스)
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">Akorn × Fresenius — MAC이 실제로 인정된 케이스</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$4.3B 딜 / 2017–2018</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.emerald.bg} ${COLOR_MAP.emerald.text} border ${COLOR_MAP.emerald.border}`}>
                    딜 파기 허용
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 맥락</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      계약 후 집 안에서 몰랐던 구조적 결함이 발견된 케이스 — 단순히 집값이 내려간 게 아니라
                      집 자체가 근본적으로 달라진 경우다.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2017년, 독일 제약회사 Fresenius는 미국 제네릭 의약품 회사 Akorn을 $4.3B에 인수하기로 계약했다.
                      그런데 DD 이후 진행되는 과정에서 충격적인 사실이 드러났다.
                    </p>
                    <p>
                      Akorn이 FDA에 제출한 규제 서류에 <strong className="text-gray-800 dark:text-gray-200">데이터 조작이 있었고,
                      내부 규정 준수 시스템이 심각하게 붕괴</strong>돼 있었다. Fresenius가 이 사실을 FDA에 신고했고,
                      FDA 조사 결과 위반이 확인됐다.
                    </p>
                    <p>
                      2018년, Delaware 법원은 이를 진정한 MAC으로 인정했다: 단순한 재무 악화가 아니라
                      기업의 핵심 가치와 규제 적합성이 구조적으로 훼손됐다는 판단이었다.
                      이는 미국 역사상 Delaware 법원이 MAC을 공식 인정한 극히 드문 케이스 중 하나다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심 교훈</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      MAC이 성립하려면 "가격이 비싸 보이는 것"이 아니라 "기업이 근본적으로 달라진 것"이어야 한다.
                      Akorn 케이스는 FDA 규정 위반과 데이터 조작이라는 구조적 훼손이 있었기 때문에 인정됐다.
                      이 기준을 충족하는 케이스는 현실에서 매우 드물다.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 두 케이스 비교 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">두 케이스 비교</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-1/4">구분</th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-3/8">머스크 × 트위터</th>
                    <th className="text-left py-2 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 w-3/8">Akorn × Fresenius</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    { label: "MAC 주장 사유", a: "봇 계정 허위 공개", b: "FDA 규정 위반 & 데이터 조작" },
                    { label: "법원 판단", a: "MAC 불인정 (사실상)", b: "MAC 인정 (역사적 선례)" },
                    { label: "결과", a: "원래 가격에 강제 클로징", b: "딜 파기 허용" },
                    { label: "핵심 차이", a: "계약 전 알려진 사실", b: "계약 후 발견된 구조적 훼손" },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="py-2.5 px-3 text-xs font-medium text-gray-600 dark:text-gray-400">{row.label}</td>
                      <td className="py-2.5 px-3 text-xs text-gray-600 dark:text-gray-400">{row.a}</td>
                      <td className="py-2.5 px-3 text-xs text-gray-600 dark:text-gray-400">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* ── 5. 핵심 인사이트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={`rounded-xl border p-5 ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg}`}>
              <p className={`text-xs font-semibold mb-2 ${COLOR_MAP.blue.text}`}>🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                MAC 조항은 인수자의 보험처럼 보이지만, 실제 법정에서 인정받는 기준이 극도로 높다.
                SPA 협상에서 <strong className="text-blue-700 dark:text-blue-300">MAC 범위를 좁게 정의하는 것이 매도자의 전략</strong>이고,
                이를 최대한 넓히는 것이 인수자의 전략이다.
                하지만 인수자가 MAC을 구실로 딜을 탈출하려 해도, Specific Performance 조항이 있으면
                법원이 딜 강제 완성을 명령할 수 있다는 점을 함께 고려해야 한다.
              </p>
            </div>
          </motion.section>

          {/* ── 6. 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">관련 개념</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/deal-101/break-fee",
                  title: "Break-up Fee",
                  desc: "딜 파기 비용의 다른 차원 — MAC 조항과 함께 SPA의 핵심 보호 장치",
                  badge: "딜 구조",
                },
                {
                  href: "/deal-101/ma-process",
                  title: "M&A 프로세스 — Phase 5 SPA",
                  desc: "MAC 조항이 포함되는 SPA 협상 단계의 전체 그림",
                  badge: "프로세스",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-600 transition-colors"
                >
                  <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP.violet.badge}`}>
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
      </main>
      <Footer />
    </>
  );
}
