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

export default function BreakFeeClient() {
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
              <span className="text-xs text-gray-400">Break-up Fee</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.violet.badge}`}>
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              Break-up Fee 완전 정리
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                딜 파기의 비용
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              SPA 서명 이후 한 당사자가 딜을 파기할 때 지불하는 위약금 — 바이사이드 Fee와 리버스 Fee의 차이,
              거래금액 대비 규모, 그리고 Adobe×Figma와 머스크×트위터 케이스까지.
            </p>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-12">

          {/* ── 1. 핵심 정의 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">핵심 정의</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              Break-up Fee(해약금·위약금)는 <strong className="text-gray-800 dark:text-gray-200">SPA(주식매매계약서) 서명 이후 한 당사자가 딜을 파기했을 때
              상대방에게 지불하는 위약금</strong>이다. 딜 파기의 기회 비용을 예측 가능하게 만들고,
              당사자들의 딜 완결 의지를 계약 조항으로 담보하는 장치다.
            </p>

            {/* 비유 */}
            <div className={`rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                결혼 약속을 했다가 파혼하면 예식장·청첩장 위약금을 내야 하는 것처럼, M&A에서도
                "딜을 파기하면 이만큼 배상한다"는 약속이 SPA에 들어간다. 파혼할 자유는 있지만,
                그 자유에는 비용이 따른다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 어떻게 작동하는가 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">어떻게 작동하는가</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              Break-up Fee는 파기 주체에 따라 두 종류로 나뉜다.
            </p>

            <div className="space-y-4">
              {/* 바이사이드 Fee */}
              <div className={`rounded-xl border p-5 ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    바이사이드 Break-up Fee (Buyer Termination Fee)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  인수자(Buyer)가 딜을 파기할 때 매도자에게 지불한다. 통상 <strong className="text-gray-800 dark:text-gray-200">거래금액의 2~4%</strong> 수준.
                </p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>매도자의 기회 비용을 보상한다 (다른 잠재 인수자와의 협상 포기)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>인수자의 딜 완결 의지를 시장에 신호한다</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.violet.dot}`} />
                    <span>규제 차단 등 외부 사유로 딜이 무산될 때도 지급 의무가 발생할 수 있다</span>
                  </li>
                </ul>
              </div>

              {/* 리버스 Fee */}
              <div className={`rounded-xl border p-5 ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-2 h-2 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                  <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                    리버스 Break-up Fee (Reverse Termination Fee)
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                  매도자가 더 좋은 제안(Superior Proposal)을 받아들이거나 이사회 권고를 철회할 때 인수자에게 지불한다.
                  통상 <strong className="text-gray-800 dark:text-gray-200">거래금액의 3~5%</strong>.
                  PE 딜에서 인수금융(Debt Financing) 조달 실패 시에도 이에 해당하는 경우가 많다.
                </p>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                    <span>인수자 입장에서 손해 배상의 상한선(Cap)이 되기도 한다</span>
                  </li>
                  <li className="flex gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${COLOR_MAP.rose.dot}`} />
                    <span>바이사이드 Fee보다 높게 설정되는 경향이 있다 — 매도자 보호 강화</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 규모 요약 */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className={`rounded-lg p-4 border text-center ${COLOR_MAP.violet.border} ${COLOR_MAP.violet.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.violet.text} mb-1`}>바이사이드 Fee</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">2 – 4%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">거래금액 대비</p>
              </div>
              <div className={`rounded-lg p-4 border text-center ${COLOR_MAP.rose.border} ${COLOR_MAP.rose.bg}`}>
                <p className={`text-xs font-semibold ${COLOR_MAP.rose.text} mb-1`}>리버스 Fee</p>
                <p className="text-xl font-bold text-gray-900 dark:text-gray-100">3 – 5%</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">거래금액 대비 (또는 그 이상)</p>
              </div>
            </div>
          </motion.section>

          {/* ── 3. 왜 중요한가 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">왜 중요한가</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                SPA 서명부터 클로징까지는 수개월이 걸린다. 그 사이 매도자는 다른 인수 제안을 거절하고,
                직원들에게 딜을 공개하며, 규제 심사 비용을 부담한다. 인수자가 갑자기 파기하면 이 모든 기회 비용이
                매도자의 손실이 된다.
              </p>
              <p>
                Break-up Fee는 이 불확실성을 <strong className="text-gray-800 dark:text-gray-200">예측 가능한 금액으로 환산</strong>한다.
                "파기하면 얼마를 내야 한다"는 명확한 조건은 양쪽 모두의 행동을 규율하고,
                딜의 진지함을 시장에 신호한다.
              </p>
              <p>
                Fee 규모가 클수록 "이 딜은 진지하다"는 신호가 강해진다.
                반대로 Fee가 너무 낮으면 "파기할 의향이 있다"는 인상을 줄 수 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 4. 케이스 ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">케이스 — 실제로 어떻게 작동했나</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Adobe × Figma */}
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
                      바이사이드 Fee 지급
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">어도비 × 피그마 — $10억 Break-up Fee</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$200억 딜 / 2022–2023</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.rose.bg} ${COLOR_MAP.rose.text} border ${COLOR_MAP.rose.border}`}>
                    Fee = 거래금액의 5%
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 맥락</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      최고급 디자인 툴이 경쟁 디자인 툴을 사들이려 했는데, 규제 당국이 "그러면 경쟁이 사라진다"고 막아버린 케이스다.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2022년 9월, 어도비는 UI/UX 디자인 협업 툴 피그마를 약 $200억에 인수하겠다고 발표했다.
                      SPA에는 어도비가 규제 심사를 통과하지 못하면 피그마에게 <strong className="text-gray-800 dark:text-gray-200">$10억(약 1.3조원)의 Break-up Fee를 지불</strong>하는 조항이 포함됐다.
                    </p>
                    <p>
                      EU 집행위원회와 영국 CMA는 두 회사 모두 UI 디자인 소프트웨어 시장의 지배적 사업자라고 판단했다.
                      어도비는 15개월간 시정 조치를 제안하며 버텼지만, 2023년 12월 딜 해지를 선언했다.
                    </p>
                    <p>
                      피그마는 규제 차단으로 딜이 무산됐음에도 불구하고 $10억의 Break-up Fee를 수령했다.
                      이 현금은 피그마가 독립 기업으로 IPO를 준비하는 충분한 실탄이 됐다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심 교훈</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Break-up Fee는 규제 차단 리스크까지 커버한다. 어도비가 규제 심사를 통과 못하는 것은
                      "어도비의 잘못"이 아니지만, SPA 조건에 따라 Fee 지급 의무가 발생했다.
                      대형 딜에서 규제 리스크를 Break-up Fee 조항에 어떻게 반영하느냐가 중요한 협상 포인트다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Musk × Twitter */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.amber.badge}`}>
                      Fee가 아닌 강제 이행
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">머스크 × 트위터 — Break-up Fee를 넘어선 특정이행</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">$440억 딜 / 2022</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.text} border ${COLOR_MAP.amber.border}`}>
                    Specific Performance 승리
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className={`rounded-lg border p-3 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 맥락</p>
                    <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                      집을 계약서에 서명하고 나서 "이 집 가격이 너무 비싸고 결함이 있어"라며 계약 파기를 선언했다가,
                      집주인이 "법원에서 판결 받겠다"며 맞선 케이스다.
                    </p>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      트위터 SPA에는 머스크가 딜을 파기할 경우 <strong className="text-gray-800 dark:text-gray-200">$10억의 바이사이드 Break-up Fee</strong>를 지불하는 조항이 있었다.
                      2022년 7월, 머스크는 "봇 계정 허위 공개 = MAC"이라며 딜 파기를 선언했다.
                    </p>
                    <p>
                      트위터는 Break-up Fee 청구 대신 <strong className="text-gray-800 dark:text-gray-200">특정이행(Specific Performance)</strong>을 청구했다.
                      "SPA에 서명했고 정당한 파기 사유가 없다. 계약대로 딜을 완성하라"는 요구였다.
                      트위터 SPA에는 Specific Performance를 청구할 수 있는 조항이 명시돼 있었다.
                    </p>
                    <p>
                      Delaware 법원이 10월 재판을 시작하기로 하자, 머스크는 재판 직전 원래 합의된 주당 $54.20에
                      인수를 완료했다. $10억 Break-up Fee를 내는 것보다 법원의 강제 이행 명령이 더 두려웠기 때문이다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심 교훈</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      Break-up Fee가 있어도, SPA에 <strong className="text-blue-700 dark:text-blue-300">Specific Performance 조항</strong>이 있으면
                      법원이 딜 강제 완성을 명령할 수 있다. Fee를 내고 나가는 것이 "옵션"이 아니라,
                      원래 계약대로 딜을 이행해야 하는 상황이 될 수 있다는 뜻이다.
                      큰 딜에서는 Fee 수준보다 Specific Performance 조항이 더 강력한 이행 강제 수단이다.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 5. 핵심 인사이트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className={`rounded-xl border p-5 ${COLOR_MAP.blue.border} ${COLOR_MAP.blue.bg}`}>
              <p className={`text-xs font-semibold mb-2 ${COLOR_MAP.blue.text}`}>🔑 핵심 인사이트</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                Break-up Fee는 딜 파기 비용을 예측 가능하게 만든다. 하지만 큰 딜에서는 fee 수준보다
                <strong className="text-blue-700 dark:text-blue-300"> Specific Performance 조항</strong>이 더 강력한 이행 강제 수단이 될 수 있다.
                "Fee를 내면 나갈 수 있다"는 인식은 틀릴 수 있다 — SPA 조항 구성에 따라 법원이 딜 완성을 강제할 수 있기 때문이다.
              </p>
            </div>
          </motion.section>

          {/* ── 6. 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">관련 개념</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  href: "/deal-101/mac-clause",
                  title: "MAC 조항",
                  desc: "딜 파기의 또 다른 수단 — 중대한 부정적 변화 발생 시 인수자의 탈출구",
                  badge: "딜 구조",
                },
                {
                  href: "/deal-101/ma-process",
                  title: "M&A 프로세스 — Phase 5 SPA",
                  desc: "Break-up Fee가 포함되는 SPA 협상 단계의 전체 그림",
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
