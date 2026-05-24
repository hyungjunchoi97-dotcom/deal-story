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

// ── 주요 심사 기관 데이터 ──────────────────────────────────────────
const AUTHORITIES = [
  {
    name: "공정거래위원회 (KFTC)",
    country: "한국",
    law: "공정거래법",
    timeline: "30~120일",
    color: "blue",
    note: "국내 기업 또는 국내 매출 기준 일정 규모 이상 거래 의무 신고. 대형 글로벌 딜도 한국 매출 기준 충족 시 신고 의무 발생.",
  },
  {
    name: "EU 집행위원회",
    country: "유럽연합",
    law: "EC Merger Regulation",
    timeline: "Phase I: 25일 / Phase II: 90일+",
    color: "violet",
    note: "Phase I는 경쟁 우려가 없는 경우, Phase II는 심층 조사. Adobe×Figma는 Phase II에서 사실상 금지 방향으로 결론났다.",
  },
  {
    name: "DOJ / FTC",
    country: "미국",
    law: "HSR Act, Clayton Act",
    timeline: "30일 (2차 심사 시 수개월)",
    color: "rose",
    note: "HSR Act에 따른 사전 신고 의무. 2차 심사(Second Request) 발동 시 수개월 이상 소요. FTC와 DOJ가 각각 산업 영역에 따라 심사를 담당.",
  },
  {
    name: "MOFCOM",
    country: "중국",
    law: "반독점법",
    timeline: "30~180일",
    color: "amber",
    note: "중국 매출 기준 충족 시 의무 신고. 지정학적 리스크와 결합되면 심사가 무기한 지연되기도 한다. Qualcomm×NXP 무산의 직접 원인.",
  },
  {
    name: "CFIUS",
    country: "미국",
    law: "FIRRMA (국가안보)",
    timeline: "30~45일",
    color: "emerald",
    note: "외국인의 미국 기업 인수 시 국가안보 관점 심사. 반도체·AI·통신·국방 등 핵심 기술 분야는 의무 신고. 거부 시 딜 금지.",
  },
  {
    name: "영국 CMA",
    country: "영국 (Brexit 후 독립)",
    law: "Enterprise Act 2002",
    timeline: "Phase I: 40일 / Phase II: 24주+",
    color: "teal",
    note: "Brexit 이후 EU와 별도 심사. Microsoft×Activision에서 초기 차단 후 조건부 승인으로 선회한 사례로 주목받았다.",
  },
];

// ── 심사 핵심 개념 ────────────────────────────────────────────────
const CONCEPTS = [
  {
    title: "관련 시장 획정 (Market Definition)",
    color: "blue",
    description:
      "경쟁 당국이 가장 먼저 하는 작업: '이 두 회사는 같은 시장에서 경쟁하는가?' 제품 시장(어떤 제품들이 대체재인가)과 지리적 시장(어느 지역에서 경쟁하는가)을 획정한다.",
    example: "Adobe × Figma 심사의 핵심 쟁점: 'Figma와 Adobe XD는 같은 시장인가?' EU는 UI/UX 디자인 소프트웨어를 별개 시장으로 획정하고 두 회사가 그 시장의 지배적 사업자라고 판단했다.",
  },
  {
    title: "HHI (허핀달-허쉬만 지수)",
    color: "violet",
    description:
      "시장 집중도를 측정하는 지표. 각 사업자 시장점유율의 제곱합으로 계산한다. HHI가 높을수록 시장이 독점 또는 과점에 가깝다는 의미다.",
    example: "HHI 1,500 미만: 경쟁 시장 / HHI 1,500~2,500: 보통 집중 / HHI 2,500 이상: 고도로 집중된 시장. 합병 후 HHI 증가폭(Delta HHI) 200 이상이면 규제 당국이 주목.",
  },
  {
    title: "수평적 합병 vs. 수직적 합병",
    color: "rose",
    description:
      "수평적 합병(Horizontal Merger): 동일 시장의 경쟁자끼리 — 직접적인 경쟁 제거 문제. 수직적 합병(Vertical Merger): 공급망 상단(원자재)과 하단(유통) 결합 — 경쟁사 접근 차단(Foreclosure) 우려.",
    example: "Adobe×Figma는 수평적 합병. Microsoft×Activision은 게임 퍼블리셔(수평) + 클라우드 플랫폼(수직) 복합 구조라 더 복잡했다.",
  },
  {
    title: "잠재적 경쟁 이론 (Potential Competition)",
    color: "amber",
    description:
      "현재는 직접 경쟁하지 않지만, 미래에 경쟁할 가능성이 있는 회사를 인수하는 경우에도 규제 당국이 제동을 걸 수 있다. '잠재 경쟁자를 미리 제거하는 행위'로 본다.",
    example: "Figma는 2022년 당시 Adobe의 일부 시장과 직접 경쟁하지 않았지만, EU는 Figma가 크리에이티브 소프트웨어 전반으로 확장할 잠재적 경쟁자라는 점을 핵심 우려로 삼았다.",
  },
];

// ── 심사 결과 3가지 ───────────────────────────────────────────────
const OUTCOMES = [
  {
    type: "무조건 승인",
    icon: "✓",
    color: "emerald",
    description: "경쟁 우려가 없거나 미미한 경우. 대부분의 M&A는 신고 후 Phase I 기간 내 무조건 승인으로 끝난다.",
    example: "규모가 작거나, 시장 점유율이 낮거나, 수직적 통합 효과가 제한적인 딜.",
  },
  {
    type: "조건부 승인 (Remedies)",
    icon: "△",
    color: "amber",
    description: "경쟁 우려가 있으나 조치를 통해 해소 가능한 경우. 구조적 조치(사업부 매각)와 행동 조치(가격·접근성 보장)로 나뉜다.",
    example: "Microsoft×Activision: EU와 영국 CMA가 클라우드 스트리밍 권리를 Ubisoft에 매각하는 조건으로 승인.",
  },
  {
    type: "금지 (Block)",
    icon: "✕",
    color: "rose",
    description: "시장 경쟁을 회복 불가능하게 해친다고 판단하는 경우. 어떤 조치로도 경쟁 우려를 해소할 수 없다는 결론.",
    example: "Adobe×Figma: EU Phase II에서 사실상 금지 방향. 딜은 자진 포기로 마무리됐다.",
  },
];

// ── 이해관계자 ────────────────────────────────────────────────────
const STAKEHOLDERS = [
  {
    role: "규제 전문 법무법인",
    color: "blue",
    responsibility: "기업결합 신고서 작성, 경제학자 고용, 당국 질문 대응, 청문회 준비. 각국 규제 기관의 심사 스타일과 선례를 꿰고 있어야 한다. EU와 미국 동시 심사가 필요한 딜에는 각국 전문 법무팀이 별도로 구성된다.",
  },
  {
    role: "경제 전문가 (Economist)",
    color: "violet",
    responsibility: "HHI 분석, 시장 획정 의견서 제출, 가격 효과 분석. 규제 당국의 경제학자와 반론을 주고받는 학술적 논쟁이 실제로 심사 결과에 영향을 준다.",
  },
  {
    role: "규제 당국 심사관",
    color: "rose",
    responsibility: "질문 리스트(RFI) 발송, 현장 조사, 제3자(경쟁사·고객) 인터뷰, 청문회. 심사관이 어떤 이론으로 시장을 획정하느냐에 따라 딜의 운명이 달라진다.",
  },
  {
    role: "회사 전략팀 / CFO",
    color: "amber",
    responsibility: "리미디 수용 여부 결정 — 사업부 매각이 딜 가치를 훼손하는지 내부 계산. SPA에 규제 당국 요건이 클로징 조건(Condition Precedent)으로 포함되므로, 리미디 협상이 장기화되면 딜 전체가 흔들린다.",
  },
];

// ── 케이스 스터디 3개 ─────────────────────────────────────────────
const CASES = [
  {
    slug: "adobe-figma-blocked",
    title: "EU가 막은 $200억 딜",
    company: "Adobe × Figma (2022~2023)",
    type: "금지 케이스",
    typeColor: "rose",
    premium: "$10억 Break-up Fee",
    analogy: "두 최대 경쟁사가 하나가 되려 했더니 심판이 '그럼 게임이 안 되잖아요' 하고 막은 것이다.",
    paragraphs: [
      "2022년 9월, 어도비는 UI/UX 디자인 협업 툴 피그마를 약 $200억에 인수한다고 발표했다. 피그마의 ARR 약 $4억의 약 50배에 달하는 역대 최고 수준의 SaaS M&A 프리미엄이었다. 어도비 입장에서는 크리에이티브 클라우드와 피그마의 결합으로 디자인 소프트웨어 시장을 완전히 지배한다는 전략이었다.",
      "EU 집행위원회는 Phase II 심층 조사에 돌입했다. 핵심 쟁점은 두 가지 — 첫째, 두 회사가 UI/UX 디자인 소프트웨어라는 동일 시장에서 경쟁하는 수평 결합이라는 것. 둘째, 피그마가 어도비의 '잠재적 경쟁자(Potential Competitor)'로서 크리에이티브 소프트웨어 전반으로 확장할 가능성을 제거한다는 것. EU가 제시한 어떤 시정조치도 이 우려를 해소하기에 충분하지 않다는 방향으로 결론이 기울었다.",
      "15개월의 심사 끝에 2023년 12월, 어도비와 피그마는 스스로 딜 포기를 선언했다. 어도비는 피그마에게 SPA상 약정된 Break-up Fee $10억(약 1.3조원)을 지급했다. 피그마는 독립 기업으로 남아 IPO 준비에 들어갔다.",
    ],
    lesson: "SaaS 플랫폼 간 수평 합병은 '잠재적 경쟁 제거' 이론으로 점점 더 막힌다. M&A 전략 수립 단계에서 '이 딜이 규제를 통과할 수 있는가'를 독립적으로 검증해야 한다. $10억 위약금과 15개월의 기회비용이 그 검증 비용보다 훨씬 크다.",
  },
  {
    slug: "microsoft-activision",
    title: "18개월 규제 전쟁 끝 조건부 승인",
    company: "Microsoft × Activision Blizzard (2022~2023)",
    type: "조건부 승인 케이스",
    typeColor: "amber",
    premium: "$68.7B, ~45% 프리미엄",
    analogy: "게임 판사 세 명이 서로 다른 판결을 내렸고, 결국 두 명이 '조건부 OK'로 마무리됐다.",
    paragraphs: [
      "2022년 1월, 마이크로소프트는 게임사 액티비전 블리자드를 $68.7B(약 90조원)에 인수한다고 발표했다. Call of Duty, World of Warcraft, Candy Crush 등 대형 IP를 한 번에 확보하는 전략이었다. 그러나 이 딜은 역대 가장 복잡한 글로벌 규제 심사 과정을 거쳐야 했다.",
      "규제 기관마다 결론이 달랐다. EU 집행위원회는 마이크로소프트가 Call of Duty의 PC·콘솔 스트리밍 라이선스를 경쟁사에 제공하겠다는 약속을 조건으로 조건부 승인했다. 미국 FTC는 딜을 막으려 했지만 연방법원에서 패소했다. 가장 까다로웠던 건 영국 CMA였다 — 초기에는 클라우드 게임 스트리밍 시장 독점을 이유로 차단 방향을 잡았다가, 마이크로소프트가 10년간 클라우드 스트리밍 권리를 Ubisoft에 매각하는 구조적 조치를 제안하자 조건부 승인으로 선회했다.",
      "결국 2023년 10월, 딜은 최종 클로징됐다. 동일한 딜이 EU는 행동 조치 조건부 승인, 미국은 FTC 패소로 승인, 영국은 구조적 조치 조건부 승인 — 세 기관이 세 가지 다른 결론과 다른 조건을 달았다.",
    ],
    lesson: "글로벌 딜은 복수 규제 기관을 동시에 상대해야 한다. 한 기관이 OK해도 다른 기관이 막을 수 있다. 특히 동일한 딜에 대해 EU·미국·영국이 서로 다른 시장 획정과 이론을 적용하므로, 각국 규제 전략을 별도로 준비해야 한다. 리미디 협상에는 딜 가치의 일부가 소진된다는 점도 미리 계산해야 한다.",
  },
  {
    slug: "qualcomm-nxp",
    title: "중국 혼자 반대로 무산된 $440억 딜",
    company: "Qualcomm × NXP Semiconductors (2016~2018)",
    type: "지정학적 리스크 케이스",
    typeColor: "violet",
    premium: "$44B 딜 총 규모",
    analogy: "99명이 찬성했는데 1명이 반대해서 투표가 성립 안 된 것과 같다 — 그 1명이 중국이었다.",
    paragraphs: [
      "2016년 10월, 퀄컴은 차량용 반도체 기업 NXP 세미컨덕터를 $440억에 인수한다고 발표했다. 모바일 칩과 자동차 전장의 결합이라는 전략적 비전이 담긴 딜이었다. 미국·EU·한국·일본 등 8개 규제 기관이 심사를 진행했고, 중국 MOFCOM을 제외한 모든 기관이 승인을 완료했다.",
      "문제는 중국이었다. 2018년은 미중 무역전쟁이 본격화된 해였다. MOFCOM은 18개월째 심사를 이어가며 침묵했다. 퀄컴과 NXP의 합산 중국 매출 비중은 전체의 약 60%에 달했고, MOFCOM 승인 없이는 딜을 클로징할 수 없었다.",
      "퀄컴은 MOFCOM이 요구하는 조건(중국 경쟁사에 대한 기술 라이선스 의무화 등)이 딜의 전략적 가치를 훼손한다고 판단했다. 미국 정부는 화웨이 제재를 강화하고 있었고, 미중 긴장이 규제 심사에 직접 개입됐다. 2018년 7월, SPA 만료 기한을 앞두고 퀄컴은 딜 포기를 선언했다. NXP에 Break-up Fee $20억을 지급했다.",
    ],
    lesson: "중국 시장 비중이 높은 글로벌 테크 딜은 MOFCOM을 단순한 신고 절차가 아닌 독립적인 전략 리스크로 관리해야 한다. 지정학적 긴장이 고조될 때 심사가 정치적 도구로 활용될 수 있다. 딜 설계 단계에서 'MOFCOM이 침묵하면 어떻게 되는가'에 대한 시나리오와 SPA 만료 조항을 명확히 설계해야 한다.",
  },
];

export default function AntitrustClient() {
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
              <span className="text-xs text-gray-400">기업결합 심사</span>
            </div>
            <span className="inline-block text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-3 py-1 mb-4">
              규제 & 법률
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              기업결합 심사 완전 정리
              <span className="block text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mt-1">
                M&A의 마지막 관문
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              M&A에서 SPA 서명이 끝이 아니다. 공정거래위원회·EU 집행위원회·DOJ·MOFCOM — 각국 경쟁 당국의 심사를 통과해야 딜이 완성된다. 심사 기관, 핵심 개념, 결과 유형, 그리고 세 가지 실제 케이스로 정리한다.
            </p>

            {/* 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { href: "#why", label: "왜 심사하는가" },
                { href: "#authorities", label: "주요 기관" },
                { href: "#concepts", label: "핵심 개념" },
                { href: "#outcomes", label: "심사 결과 3가지" },
                { href: "#stakeholders", label: "이해관계자" },
                { href: "#cases", label: "케이스 스터디" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full px-3 py-1 text-xs font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 hover:opacity-80 transition-opacity"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 섹션 1: 왜 정부가 M&A를 심사하는가 ── */}
          <motion.section
            id="why"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">왜 정부가 M&A를 심사하는가?</h2>

            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
              <p>
                M&A는 경쟁 구조를 바꾼다. 두 회사가 하나가 되면 시장의 경쟁자 수가 줄어들고, 남은 기업들의 시장 지배력이 커진다.
                규제 당국은 그 결과가 소비자에게 해롭지 않은지 — 가격이 오르거나, 혁신이 감소하거나, 경쟁이 소멸하지 않는지 — 를 심사한다.
              </p>
              <p>
                M&A 자체를 막는 게 목적이 아니다. '경쟁에 미치는 영향이 수인 가능한 수준인가'를 따지는 것이다.
                대부분의 M&A는 별 문제 없이 통과된다. 문제가 되는 건 지배적 사업자끼리의 수평 합병,
                혁신 경쟁자의 사전 인수, 또는 공급망 통합을 통한 경쟁사 접근 차단 같은 케이스다.
              </p>
            </div>

            {/* 비유 */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
              <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                동네에 편의점이 두 개 있었는데 하나가 다른 하나를 사버리면, 이제 가격을 올려도 갈 곳이 없다. 그걸 막는 것이 기업결합 심사다. 심사관은 "이 합병 이후에도 소비자에게 진짜 선택지가 남아 있는가?"를 묻는다.
              </p>
            </div>

            {/* 3대 심사 기준 */}
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { title: "가격 인상 우려", color: "rose", desc: "합병 후 경쟁 압력이 약해지면 기업이 가격을 인상할 유인이 생긴다. 특히 과점 시장에서 두드러진다." },
                { title: "혁신 감소 우려", color: "violet", desc: "잠재 경쟁자를 제거하면 시장 선도 기업이 혁신 압력을 덜 받는다. 빅테크의 스타트업 인수가 이 우려의 대표 사례다." },
                { title: "경쟁 구조 파괴", color: "amber", desc: "수직 통합을 통해 경쟁사의 원자재·유통 접근을 차단(Foreclosure)하면 시장 경쟁이 구조적으로 훼손된다." },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.title} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-xs font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 2: 주요 심사 기관 ── */}
          <motion.section
            id="authorities"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">주요 심사 기관과 기준</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              글로벌 딜은 복수 기관에 동시 신고해야 한다. 각 기관은 독립적으로 심사하며, 하나가 승인해도 다른 기관이 금지할 수 있다.
            </p>

            <div className="space-y-3">
              {AUTHORITIES.map((auth) => {
                const c = COLOR_MAP[auth.color];
                return (
                  <div key={auth.name} className={`rounded-xl border ${c.border} p-4`}>
                    <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                      <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{auth.name}</h3>
                        <p className={`text-xs font-medium ${c.text}`}>{auth.country}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs font-medium rounded-full px-2.5 py-0.5 ${c.badge}`}>{auth.law}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400">⏱ {auth.timeline}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{auth.note}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심</p>
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                클로징에 가장 오래 걸리는 기관이 전체 딜의 타임라인을 결정한다. MS×Activision에서 영국 CMA가 마지막까지 버텼고, Qualcomm×NXP에서는 MOFCOM의 침묵이 딜을 무산시켰다. 신고 전략 수립 시 '최악의 기관(Worst-Case Jurisdiction)'을 먼저 분석해야 한다.
              </p>
            </div>
          </motion.section>

          {/* ── 섹션 3: 핵심 개념 ── */}
          <motion.section
            id="concepts"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">심사의 핵심 개념 4가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              규제 심사를 이해하려면 이 네 가지 개념을 알아야 한다. 딜 뉴스에서 등장하는 논쟁의 대부분이 이 개념들을 중심으로 전개된다.
            </p>

            <div className="space-y-4">
              {CONCEPTS.map((concept, idx) => {
                const c = COLOR_MAP[concept.color];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`rounded-xl border ${c.border} ${c.bg} p-5`}
                  >
                    <h3 className={`text-sm font-bold text-gray-900 dark:text-gray-100 mb-2`}>{concept.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{concept.description}</p>
                    <div className={`rounded-lg p-3 bg-white/60 dark:bg-gray-800/40 border ${c.border}`}>
                      <p className={`text-xs font-semibold ${c.text} mb-0.5`}>실제 사례</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{concept.example}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 4: 심사 결과 3가지 ── */}
          <motion.section
            id="outcomes"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">심사 결과 3가지</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              기업결합 심사의 결론은 세 가지다. 리미디 협상이 어느 쪽으로 결론날지가 딜의 클로징 여부를 결정한다.
            </p>

            <div className="space-y-4">
              {OUTCOMES.map((outcome) => {
                const c = COLOR_MAP[outcome.color];
                return (
                  <div key={outcome.type} className={`rounded-xl border ${c.border} overflow-hidden`}>
                    <div className={`px-5 py-3 ${c.bg} flex items-center gap-3`}>
                      <span className={`text-lg font-bold ${c.text}`}>{outcome.icon}</span>
                      <h3 className={`text-sm font-bold ${c.text}`}>{outcome.type}</h3>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{outcome.description}</p>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                          <strong className="text-gray-700 dark:text-gray-300">예시:</strong> {outcome.example}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 리미디 상세 */}
            <div className="mt-5 rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-5">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-3">조건부 승인 리미디(Remedies)의 두 유형</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">구조적 조치 (Structural Remedy)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    특정 사업부·브랜드·자산을 경쟁사에 매각하는 방식. 영구적 경쟁 구조 회복이 목적. MS가 클라우드 스트리밍 권리를 Ubisoft에 매각한 것이 사례.
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800/60 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mb-1">행동 조치 (Behavioral Remedy)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    가격 상한선, 경쟁사 접근 보장, 데이터 공유 의무 등을 약속하는 방식. 지속적인 모니터링 필요. 규제 당국은 구조적 조치를 선호하는 경향이 있다.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── 섹션 5: 이해관계자 ── */}
          <motion.section
            id="stakeholders"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">기업결합 심사의 이해관계자</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">
              규제 심사는 법무·경제·전략이 결합된 복잡한 과정이다. 어떤 사람들이 어떤 역할을 하는지 이해해야 딜 뉴스를 정확하게 읽을 수 있다.
            </p>

            <div className="space-y-3">
              {STAKEHOLDERS.map((s) => {
                const c = COLOR_MAP[s.color];
                return (
                  <div key={s.role} className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                    <div>
                      <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                      <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed text-xs">{s.responsibility}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 섹션 6: 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 3개</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                금지·조건부 승인·지정학적 리스크 — 기업결합 심사가 딜에 어떤 결과를 가져오는지 세 가지 케이스로 확인한다.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* 케이스 헤더 */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border} shrink-0`}>
                        {c_item.premium}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 비유 */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      {/* 본문 */}
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* 교훈 */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      {/* 딜 상세 링크 */}
                      <Link
                        href={`/deals/${c_item.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        이 딜 전체 스토리 보기 →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── 최종 인사이트 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">기업결합 심사 — 딜 실무에서 무엇이 중요한가</h2>

            <div className="space-y-3">
              {[
                { color: "blue", title: "전략 수립 단계(Phase 1)에서 규제 리스크를 먼저 평가하라", desc: "딜 LOI를 쓰기 전, '이 딜이 어느 국가 규제를 받는가'와 '가장 까다로운 기관이 어디인가'를 먼저 그려야 한다. Adobe는 이 단계에서 EU 리스크를 충분히 검토했어야 했다." },
                { color: "violet", title: "복수 기관 동시 심사 전략을 설계하라", desc: "글로벌 딜은 한 기관의 승인으로 끝나지 않는다. 기관마다 다른 시장 획정 이론과 심사 기준이 있다. 각국 전략을 별도로 준비하되, 기관 간 일관된 입장을 유지해야 한다." },
                { color: "rose", title: "리미디 협상이 딜 가치를 훼손하는지 미리 계산하라", desc: "조건부 승인을 받더라도 사업부 매각이 딜의 핵심 전략 가치를 제거할 수 있다. MS×Activision에서 클라우드 스트리밍 권리를 포기하는 게 딜 가치에 미치는 영향을 사전에 계산했어야 한다." },
                { color: "amber", title: "MOFCOM과 지정학적 리스크는 별도 시나리오로 관리하라", desc: "중국 매출 비중이 높은 딜에서 MOFCOM은 단순한 신고 기관이 아니다. 미중 관계 등 외부 변수가 심사에 직접 개입한다. SPA 만료 기한 설계 시 이 리스크를 반영해야 한다." },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.color} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-sm font-bold ${c.text} mb-2`}>{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
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
                { href: "/deal-101/ma-process", title: "M&A 프로세스", desc: "기업결합 심사는 Phase 6에서 다뤄진다. 전체 프로세스 맥락 확인.", badge: "Deal Structure" },
                { href: "/deal-101/acquisition-premium", title: "인수 프리미엄", desc: "고프리미엄 딜은 규제 당국의 주목을 더 받는다. Adobe×Figma 사례.", badge: "밸류에이션" },
                { href: "/deals/adobe-figma-blocked", title: "Adobe × Figma 딜 스토리", desc: "$200억 딜이 어떻게 $10억 위약금으로 끝났는가 — 전체 타임라인.", badge: "딜 케이스" },
                { href: "/deals/microsoft-activision", title: "Microsoft × Activision 딜 스토리", desc: "세 기관, 세 가지 결론 — 18개월 규제 전쟁의 전체 과정.", badge: "딜 케이스" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-rose-300 dark:hover:border-rose-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
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
