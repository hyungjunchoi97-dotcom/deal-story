"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const COLOR_MAP: Record<string, { bg: string; border: string; text: string; badge: string; dot: string }> = {
  blue:    { bg: "bg-blue-50 dark:bg-blue-900/20",     border: "border-blue-200 dark:border-blue-800",     text: "text-blue-700 dark:text-blue-300",     badge: "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300",     dot: "bg-blue-500" },
  amber:   { bg: "bg-amber-50 dark:bg-amber-900/20",   border: "border-amber-200 dark:border-amber-800",   text: "text-amber-700 dark:text-amber-300",   badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",   dot: "bg-amber-500" },
  emerald: { bg: "bg-emerald-50 dark:bg-emerald-900/20", border: "border-emerald-200 dark:border-emerald-800", text: "text-emerald-700 dark:text-emerald-300", badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  rose:    { bg: "bg-rose-50 dark:bg-rose-900/20",     border: "border-rose-200 dark:border-rose-800",     text: "text-rose-700 dark:text-rose-300",     badge: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",     dot: "bg-rose-500" },
  violet:  { bg: "bg-violet-50 dark:bg-violet-900/20", border: "border-violet-200 dark:border-violet-800", text: "text-violet-700 dark:text-violet-300", badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  indigo:  { bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-200 dark:border-indigo-800", text: "text-indigo-700 dark:text-indigo-300", badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300", dot: "bg-indigo-500" },
  sky:     { bg: "bg-sky-50 dark:bg-sky-900/20",       border: "border-sky-200 dark:border-sky-800",       text: "text-sky-700 dark:text-sky-300",       badge: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",       dot: "bg-sky-500" },
  orange:  { bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-200 dark:border-orange-800", text: "text-orange-700 dark:text-orange-300", badge: "bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300", dot: "bg-orange-500" },
};

// ── 데이터 (컴포넌트 함수 바깥) ────────────────────────────────────

const PROCESS_STEPS = [
  {
    num: "01",
    title: "공시 (Announcement)",
    desc: "SEC 14D-9 제출, 제안 가격·기간 공시. 보통 시장가 대비 20~40% 프리미엄 제시. 공시 즉시 시장 반응 및 차익거래(Arb) 포지션 형성.",
    color: "blue",
  },
  {
    num: "02",
    title: "응모 기간",
    desc: "최소 20거래일(미국 기준). 주주들이 제안 가격에 주식을 팔지(응모) 보유할지 결정하는 기간. 인수자는 기간 내 조건 변경 가능.",
    color: "indigo",
  },
  {
    num: "03",
    title: "이사회 반응",
    desc: "이사회는 White Knight 탐색, 포이즌 필 발동, 법적 대응 등 방어 조치를 실행할 수 있다. SEC 14D-9 공시를 통해 주주에게 권고안 발표.",
    color: "amber",
  },
  {
    num: "04",
    title: "Proration (비례 배분)",
    desc: "응모 주식이 목표 수량을 초과할 경우 비례 배분. 예: 목표의 2배 응모 시 각 주주의 50%만 매수. 나머지는 환원.",
    color: "orange",
  },
  {
    num: "05",
    title: "완료 또는 철회",
    desc: "최소 응모 조건(보통 50%+ 또는 90%) 충족 시 인수 완료 후 상장폐지 절차 진행. 조건 미달 시 공개매수 철회, 주가 원상복귀.",
    color: "emerald",
  },
];

const DEFENSE_STRATEGIES = [
  {
    title: "포이즌 필 (Poison Pill / Shareholder Rights Plan)",
    desc: "특정 주주가 지분 20% 초과 시 다른 모든 주주들이 대폭 할인된 가격에 신주를 매수할 수 있는 권리. 인수자의 지분 희석 효과로 인수 비용이 폭발적으로 증가해 사실상 불가능하게 만든다.",
    color: "rose",
    tag: "가장 강력한 방어 수단",
  },
  {
    title: "White Knight (우호적 제3자 인수자)",
    desc: "적대적 인수자 대신 우호적인 제3자 인수자를 찾아 합병하는 전략. 이사회와 합의한 조건으로 진행. Adobe가 Figma 인수 당시 이 역할을 노린 구조.",
    color: "emerald",
    tag: "대안 인수자 전략",
  },
  {
    title: "Pac-Man Defense",
    desc: "방어 기업이 역으로 공격 기업을 공개매수하는 전략. 공격자가 방어자가 되는 상황 반전. 현실에서는 자금력 차이로 실행이 어려운 경우가 많다.",
    color: "amber",
    tag: "역공 전략",
  },
  {
    title: "Crown Jewel Defense (핵심 자산 매각)",
    desc: "핵심 자산(Crown Jewel)을 제3자에게 매각해 기업의 매력도를 낮추는 전략. 인수자가 탐내는 자산이 없어지면 인수 동기 자체가 약해진다. 주주 이익 침해 논란이 있어 법원에서 제한되는 경우도 있다.",
    color: "violet",
    tag: "자산 방어 전략",
  },
  {
    title: "법적 대응",
    desc: "독점금지법(반독점) 위반 주장, 공개매수 절차 하자, 정보공개 의무 위반 등을 이유로 법원에 금지 명령 신청. 시간을 버는 전략으로 활용되는 경우가 많다.",
    color: "sky",
    tag: "절차적 방어",
  },
];

const RELATED_LINKS = [
  { href: "/deal-101/ma-process", label: "M&A 프로세스", note: "전체 딜 프로세스" },
  { href: "/deal-101/break-fee", label: "Break-up Fee", note: "딜 파기 위약금" },
  { href: "/deal-101/mac-clause", label: "MAC 조항", note: "중대 부정적 변화" },
  { href: "/deal-101/antitrust", label: "반독점 규제", note: "규제 리스크" },
];

// ── 컴포넌트 ───────────────────────────────────────────────────────

export function TenderOfferClient() {
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
              <span className="text-xs text-gray-400">딜 구조</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">공개매수</span>
            </div>
            <span className={`inline-block text-xs font-medium rounded-full px-3 py-1 mb-4 ${COLOR_MAP.rose.badge}`}>
              딜 구조
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              공개매수 (Tender Offer)
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                이사회를 건너뛰고 주주에게 직접 제안하는 인수 전략
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              공개매수 프로세스·방어 전략 5가지·Musk×Twitter 강제 이행 사건·
              Microsoft×Activision 18개월 규제 전쟁까지 — 공개매수의 모든 것.
            </p>
            <div className="mt-4">
              <Link href="/en/deal-101/tender-offer" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">
                Read in English →
              </Link>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-14">

          {/* ── 1. 공개매수란 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">공개매수란 무엇인가</h2>
            <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                공개매수(Tender Offer)는 <strong className="text-gray-800 dark:text-gray-200">인수자가 대상 기업의 이사회를 거치지 않고
                주주들에게 직접 주식 매수를 제안하는 방식</strong>이다.
                일반적인 협상 M&A에서는 인수자가 이사회(경영진)와 먼저 협상하고,
                이사회가 주주에게 권고하는 구조다. 공개매수는 이 순서를 뒤집는다.
              </p>
              <p>
                공개매수가 선택되는 주요 상황 세 가지:
              </p>
              <ul className="space-y-2 pl-4">
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">①</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">이사회가 거부한 경우:</strong> 적대적 공개매수. 인수자가 이사회 동의 없이 주주들에게 직접 접근.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">②</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">딜 속도:</strong> 협상보다 빠르게 과반 지분 확보. 조건을 공시하고 시한을 정해 주주의 결정을 유도.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-rose-400 flex-shrink-0 font-bold">③</span>
                  <span><strong className="text-gray-800 dark:text-gray-200">상장폐지(Going Private):</strong> PE가 상장 기업을 비공개화할 때 공개매수를 통해 소수주주 지분을 매수.</span>
                </li>
              </ul>
            </div>

            {/* 비유 */}
            <div className={`mt-5 rounded-lg border p-4 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.border}`}>
              <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.amber.text}`}>💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                집주인(이사회)이 팔기 싫다고 버티면, 그 집의 지분 일부를 갖고 있는 세입자들(주주)에게
                직접 찾아가 "내가 더 좋은 조건에 살게요"라고 제안하는 것이다. 집주인의 동의 없이도,
                세입자들의 과반이 동의하면 거래가 성립될 수 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 2. 공개매수 프로세스 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">공개매수 프로세스</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              공시부터 완료까지 통상 4~8주 소요. 미국 기준.
            </p>
            <div className="space-y-3">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className={`rounded-xl border p-4 flex items-start gap-3 ${COLOR_MAP[step.color].border} ${COLOR_MAP[step.color].bg}`}
                >
                  <span className={`text-base font-black flex-shrink-0 ${COLOR_MAP[step.color].text}`}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── 3. 방어 전략 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">
              방어 전략 — 대상 기업 입장에서
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              공개매수를 받은 이사회가 사용할 수 있는 방어 수단들이다.
              모든 방어가 허용되는 것은 아니며, Delaware 법원은 이사회의 신의성실 의무(Fiduciary Duty) 위반 여부를 면밀히 검토한다.
            </p>
            <div className="space-y-3">
              {DEFENSE_STRATEGIES.map((d) => (
                <div
                  key={d.title}
                  className={`rounded-xl border p-4 ${COLOR_MAP[d.color].border} ${COLOR_MAP[d.color].bg}`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{d.title}</h3>
                    <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${COLOR_MAP[d.color].badge}`}>
                      {d.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* ── 4. 케이스 스터디 ── */}
          <section>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-6">케이스 스터디</h2>
            </motion.div>

            <div className="space-y-6">

              {/* Case 1: Musk × Twitter */}
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
                      우호적 → 강제 이행
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Elon Musk × Twitter — $44B (2022)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">거부에서 강제 완료까지</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.amber.bg} ${COLOR_MAP.amber.text} border ${COLOR_MAP.amber.border}`}>
                    Specific Performance 강제
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2022년 4월, 머스크는 주당 $54.20에 Twitter 전체 공개매수를 제안했고
                      Twitter 이사회가 수용했다. SPA가 체결됐다.
                    </p>
                    <p>
                      그러나 5월, 머스크는 "<strong className="text-gray-800 dark:text-gray-200">봇 계정 수를 허위로 공개했다 — MAC(중대 부정적 변화) 해당</strong>"이라며
                      딜 철회를 통보했다. Twitter는 즉시 Delaware 법원에 소송을 제기했다:
                      "철회 사유가 없다. 계약대로 딜을 완성하라(Specific Performance)."
                    </p>
                    <p>
                      법원은 10월 재판 일정을 잡았고, 증거개시(Discovery) 과정에서 머스크에게
                      불리한 내부 문건들이 속속 드러났다. 머스크는 재판 직전
                      <strong className="text-gray-800 dark:text-gray-200"> 원래 합의된 $54.20에 인수를 완료</strong>했다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      SPA 서명 이후 MAC 조항 없이 철회를 시도하면 법원이 Specific Performance(특정이행)를 명령할 수 있다.
                      Break-up Fee(약 $10억)를 내고 나가는 것이 &ldquo;옵션&rdquo;이라는 인식은 틀릴 수 있다 —
                      계약 구조에 따라 딜 강제 완성이 더 현실적인 결과가 된다.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Case 2: Microsoft × Activision */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${COLOR_MAP.blue.badge}`}>
                      우호적 딜 — 규제 전쟁
                    </span>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
                      Microsoft × Activision Blizzard — $68.7B (2023)
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">역대 최대 게임 M&A / 16개월 규제 전쟁</p>
                  </div>
                  <div className={`text-xs font-medium rounded-lg px-3 py-2 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.text} border ${COLOR_MAP.blue.border}`}>
                    규제 리스크의 교과서
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    <p>
                      2022년 1월, Microsoft는 주당 $95(약 45% 프리미엄)에 Activision Blizzard 공개매수를 발표했다.
                      Activision 이사회는 우호적으로 수용했다.
                    </p>
                    <p>
                      하지만 FTC(미국 연방거래위원회)와 영국 CMA(경쟁시장청)가 반독점 소송을 제기했다.
                      <strong className="text-gray-800 dark:text-gray-200"> CMA는 클라우드 게이밍 시장 독점 우려</strong>를 이유로
                      딜을 막았다. 16개월간의 규제 전쟁이 이어졌다.
                    </p>
                    <p>
                      Microsoft는 Activision의 클라우드 게임 스트리밍 권한을 Ubisoft에 라이선스하는
                      구조적 시정 조치를 제안했다. 2023년 10월, CMA가 최종 승인하며 딜이 완료됐다.
                    </p>
                  </div>

                  <div className={`rounded-lg border p-3 ${COLOR_MAP.blue.bg} ${COLOR_MAP.blue.border}`}>
                    <p className={`text-xs font-semibold mb-1 ${COLOR_MAP.blue.text}`}>🔑 핵심</p>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      우호적 공개매수도 규제 리스크로 18개월이 걸릴 수 있다. 딜 발표 후 클로징까지의
                      규제 불확실성은 주가 아비트라지 스프레드에 그대로 반영된다.
                      대형 테크 딜에서 반독점 규제 전략은 딜 구조 설계 단계부터 핵심 고려 사항이다.
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>
          </section>

          {/* ── 5. 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">관련 개념</h2>
            <div className="flex flex-wrap gap-2">
              {RELATED_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 rounded-full border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 px-3.5 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 hover:border-rose-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors"
                >
                  {item.label}
                  <span className="text-gray-400 dark:text-gray-500 text-[10px]">· {item.note}</span>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"tender-offer"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
