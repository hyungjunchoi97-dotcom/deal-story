"use client";
/**
 * 딜 상세 페이지 디자인 프리뷰 (블랙스톤 x 케네딕스 더미 데이터)
 * http://localhost:3001/deals/preview
 */
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DEAL_CATEGORY_LABEL, DEAL_CATEGORY_COLOR } from "@/lib/types";
import FinancialsChart, { type FinancialYear } from "@/components/deal/FinancialsChart";
import OwnershipDiagram from "@/components/deal/OwnershipDiagram";
import AnimatedBar from "@/components/deal/AnimatedBar";
import AdvisorsSection, { type AdvisorSide } from "@/components/deal/AdvisorsSection";
import Tombstone from "@/components/deal/Tombstone";

// ── 데이터 ────────────────────────────────────────────────────
const FINANCIALS: FinancialYear[] = [
  { year: "FY2019", revenue: 22.1, cogs: 9.8,  grossProfit: 12.3, sga: 4.5, operatingIncome: 7.8,  ebitda: 10.2 },
  { year: "FY2020", revenue: 24.3, cogs: 10.6, grossProfit: 13.7, sga: 4.8, operatingIncome: 8.9,  ebitda: 11.5 },
  { year: "FY2021", revenue: 28.7, cogs: 12.4, grossProfit: 16.3, sga: 5.8, operatingIncome: 10.5, ebitda: 13.8 },
  { year: "FY2022", revenue: 32.4, cogs: 13.9, grossProfit: 18.5, sga: 6.7, operatingIncome: 11.8, ebitda: 15.2 },
];

const PRE_DEAL_NODES = [
  { id: "public", label: "공개 주주", sub: "TSE 프라임 상장, 분산 주주", type: "public" as const },
  { id: "kenedix", label: "케네딕스", sub: "상장 독립 자산운용사", type: "target" as const },
  { id: "funds", label: "27개 펀드", sub: "오피스, 물류, 주거, 헬스케어", type: "fund" as const },
];
const PRE_DEAL_EDGES = [
  { from: "public", to: "kenedix", label: "100% 지분 보유" },
  { from: "kenedix", to: "funds", label: "운용 책임" },
];

const POST_DEAL_NODES = [
  { id: "bx", label: "Blackstone", sub: "글로벌 사모펀드 (BREP IX)", type: "acquirer" as const },
  { id: "kenedix", label: "케네딕스", sub: "비상장 전환, 완전 자회사", type: "target" as const },
  { id: "funds", label: "27개 펀드", sub: "물류, 주거 중심 재편", type: "fund" as const },
];
const POST_DEAL_EDGES = [
  { from: "bx", to: "kenedix", label: "100% 완전 취득 (TOB)" },
  { from: "kenedix", to: "funds", label: "운용 지속" },
];

const SOURCES = [
  { id: 1, text: "Kenedix, Inc. Annual Report FY2022 (일본 회계기준, 단위: 억 엔)", url: "#" },
  { id: 2, text: "Blackstone Press Release, \"Blackstone Completes Acquisition of Kenedix\", October 2023", url: "#" },
  { id: 3, text: "東京証券取引所 TOB 공시 (2022.12)", url: "#" },
  { id: 4, text: "CBRE Japan Research, \"Japan Real Estate Market Outlook 2023\"", url: "#" },
  { id: 5, text: "JLL, \"Asia Pacific Investment Volumes\", Q4 2023", url: "#" },
  { id: 6, text: "PwC, \"Real Estate Asset Management in Japan\", 2022", url: "#" },
];

const ADVISOR_SIDES: AdvisorSide[] = [
  {
    side: "acquirer",
    sideLabel: "Blackstone",
    initials: "BX",
    bg: "bg-gray-900",
    advisors: [
      {
        firm: "Goldman Sachs",
        role: "재무 자문",
        roleType: "financial",
        note: "공개매수 구조화 및 가격 협상 주도. 블랙스톤 아시아 대형 딜의 반복 파트너로 현지 규제 조율까지 담당.",
      },
      {
        firm: "Kirkland & Ellis",
        role: "법무 자문",
        roleType: "legal",
        note: "글로벌 PE 크로스보더 인수 전문 로펌. 계약 구조화, 진술 및 보증, 규제 대응을 총괄.",
      },
    ],
  },
  {
    side: "target",
    sideLabel: "Kenedix",
    initials: "KDX",
    bg: "bg-blue-600",
    advisors: [
      {
        firm: "노무라증권",
        role: "재무 자문",
        roleType: "financial",
        note: "일본 최대 증권사로 FA 수행. 이사회에 공정가격 의견서(Fairness Opinion) 제출.",
      },
      {
        firm: "모리하마다&마쓰모토",
        role: "법무 자문",
        roleType: "legal",
        note: "일본 최상위 M&A 로펌. TOB 공시 규제 대응 및 이사회 선관의무 법리 검토 담당.",
      },
    ],
  },
];

// ── 보조 컴포넌트 ─────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 mb-4 relative">
      <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 pb-3 border-b border-gray-100 dark:border-gray-800">
        {children}
      </h2>
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-blue-400 dark:bg-blue-500"
        initial={{ width: 0 }}
        whileInView={{ width: "2.5rem" }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}

function CompanyLogo({ initials, bg, label }: { initials: string; bg: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-base tracking-tight shadow-sm ${bg}`}>
        {initials}
      </div>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
}

function MetricCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <motion.div
      className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4 cursor-default"
      whileHover={{ y: -3, scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.07)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-base font-bold text-gray-900 dark:text-gray-100">{value}</p>
      {sub && <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">{sub}</p>}
    </motion.div>
  );
}

function Sup({ n }: { n: number }) {
  return <sup className="text-[9px] text-blue-400 font-bold ml-0.5 align-super">[{n}]</sup>;
}

// ── 페이지 ────────────────────────────────────────────────────
export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="max-w-2xl mx-auto px-5 py-10">

          {/* 뒤로가기 */}
          <Link
            href="/deals"
            className="inline-flex items-center gap-1 text-sm text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors mb-8 group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-0.5 transition-transform" aria-hidden={true}>
              <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
            </svg>
            딜 목록
          </Link>

          {/* ── 1. 회사 로고 + 메타 ─────────────────────── */}
          <div className="flex items-center gap-5 mb-6">
            <CompanyLogo initials="BX" bg="bg-gray-900 dark:bg-gray-100" label="Blackstone" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-300 dark:text-gray-600 flex-shrink-0" aria-hidden={true}>
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
            <CompanyLogo initials="KDX" bg="bg-blue-600" label="Kenedix" />
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`text-[11px] font-semibold rounded-full px-2.5 py-0.5 ${DEAL_CATEGORY_COLOR["ma"]}`}>
              {DEAL_CATEGORY_LABEL["ma"]}
            </span>
            <span className="text-xs text-gray-400 dark:text-gray-500">부동산</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">2023년 10월 12일</span>
            <span className="text-xs text-gray-400 dark:text-gray-500">8분 읽기</span>
          </div>

          {/* ── 2. 제목 ──────────────────────────────────── */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
            블랙스톤, 일본 케네딕스 2.5조 원 인수
          </h1>
          <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
            아시아 태평양 역대 최대 단일 부동산 딜
          </p>

          {/* ── 3. 배경 ──────────────────────────────────── */}
          <SectionTitle>배경</SectionTitle>
          <div className="space-y-4 text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              2010년대 초반부터 일본은 글로벌 대형 사모펀드(PE)들의 아시아 전략 핵심 시장으로 부상했다.<Sup n={4} /> 마이너스 금리 정책과 엔화 약세가 맞물리며 도쿄 오피스 캡레이트는 3.0~3.5% 수준을 유지했고, 물류 부문은 전자상거래 확장에 힘입어 연 8~10%의 수요 성장세를 기록했다.<Sup n={5} />
            </p>
            <p>
              블랙스톤은 이미 2017~2022년 사이 일본에서 복수의 물류 포트폴리오를 매입하며 운용 경험을 축적해왔다. 그러나 개별 자산 매입 방식으로는 성장 속도에 한계가 있었다. 케네딕스는 AUM 2.1조 엔, 27개 펀드를 운용하는 일본 최대 독립 자산운용사로, 현지 딜소싱 네트워크와 로컬 LP와의 신뢰 관계를 모두 보유하고 있었다.
            </p>
            <p>
              블랙스톤의 선택은 단순 자산 매입이 아닌 플랫폼 인수였다. 케네딕스의 운용 팀과 인프라를 통째로 흡수함으로써 일본에서의 딜소싱, 펀드 운용, LP 관리 역량을 즉각적으로 내재화하는 전략이었다.<Sup n={2} />
            </p>
            <p>
              타이밍 측면에서는 엔화가 달러 대비 역사적 저점(2022년 USD/JPY 150 돌파)에 근접하며 외국인 투자자 관점의 매입 비용이 크게 낮아졌다. 블랙스톤은 이 환율 기회를 활용해 공개매수 가격을 주당 1,100엔으로 제시했다.
            </p>
          </div>

          {/* ── 4. 딜 요약 카드 ──────────────────────────── */}
          <div className="mt-8 rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">딜 요약</p>
            <dl className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4">
              <div className="col-span-2 sm:col-span-1 flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">딜 금액</dt>
                <dd className="text-base font-bold text-amber-500">약 2.5조 원 (USD 1.8B)</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">인수자</dt>
                <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200">Blackstone</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">피인수자</dt>
                <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200">케네딕스</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">발표일</dt>
                <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200">2022년 12월</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">클로징</dt>
                <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200">2023년 10월</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide">국가</dt>
                <dd className="text-sm font-semibold text-gray-800 dark:text-gray-200">일본</dd>
              </div>
            </dl>
          </div>

          {/* ── 5. Executive Summary ─────────────────────── */}
          <div className="mt-8 rounded-xl border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/15 px-5 py-4">
            <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">Executive Summary</p>
            <ul className="space-y-2">
              {[
                "블랙스톤이 일본 최대 독립 부동산 자산운용사 케네딕스를 공개매수(TOB)로 완전 인수. 주당 1,100엔, 프리미엄 44%.",
                "딜 규모 약 2.5조 원(USD 1.8B). 블랙스톤의 아시아 태평양 단일 부동산 딜 역대 최대.",
                "케네딕스 AUM 2.1조 엔, 27개 펀드 운용 플랫폼을 통째로 내재화하는 전략적 인수.",
                "인수 후 물류, 주거 중심 포트폴리오 재편 및 일본을 아시아 부동산 전략의 거점으로 공식화.",
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* ── 6. Industry Overview ─────────────────────── */}
          <SectionTitle>Industry Overview</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            일본 부동산 자산운용 시장은 J-REIT 제도 도입(2001년) 이후 급속히 성장했다. 2023년 기준 J-REIT 시가총액은 약 17조 엔으로 아시아 최대 규모이며, 비상장 PE 부동산 펀드를 포함한 기관투자자 대상 운용 자산은 50조 엔을 초과하는 것으로 추정된다.<Sup n={4} /><Sup n={6} />
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            <MetricCard label="J-REIT 시총" value="17조 엔" sub="2023년 기준" />
            <MetricCard label="도쿄 오피스 캡레이트" value="3.0~3.5%" sub="도심 A급" />
            <MetricCard label="물류 수요 성장" value="연 8~10%" sub="전자상거래 효과" />
            <MetricCard label="외국인 PE 투자" value="USD 8.2B" sub="2022년 일본 유입" />
          </div>

          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
            섹터별로는 물류와 주거(멀티패밀리)에 기관 자금이 집중되고 있으며, 오피스는 재택근무 확산으로 수요 전망이 엇갈린다. 헬스케어 부동산(노인 주거, 병원)은 초고령화 인구 구조를 감안할 때 장기 성장 섹터로 꼽힌다.
          </p>

          <div className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">주요 플레이어</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {[
                ["미쓰이 부동산 / 미쓰비시 지쇼", "전통 종합 디벨로퍼"],
                ["GLP", "물류 특화 글로벌 플랫폼"],
                ["블랙스톤", "외국계 PE 최대 규모"],
                ["CBRE IM / JP모건 AM", "글로벌 부동산 운용사"],
              ].map(([name, role]) => (
                <div key={name} className="flex gap-2">
                  <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 text-[13px]">{name}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-[12px] ml-1">: {role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 7. Company Overview ──────────────────────── */}
          <SectionTitle>Company Overview: 케네딕스</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            케네딕스(Kenedix, Inc.)는 1997년 설립된 일본 최대 독립 부동산 자산운용사다.<Sup n={1} /> 도쿄증권거래소 프라임 시장에 상장했으며, 오피스, 물류, 주거, 헬스케어 4개 섹터에 걸쳐 기관 투자자 자금을 운용하는 플랫폼을 구축했다. 운용 구조의 핵심은 개방형 플랫폼으로, 국내외 연기금, 보험사, 사모펀드 등 다양한 LP 베이스를 확보하고 있다.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <MetricCard label="AUM" value="2.1조 엔" sub="2022년 기준" />
            <MetricCard label="운용 펀드 수" value="27개" sub="4개 섹터" />
            <MetricCard label="임직원" value="약 500명" sub="도쿄 본사" />
            <MetricCard label="설립" value="1997년" sub="도쿄 증권거래소 상장" />
            <MetricCard label="주요 LP" value="연기금, 보험사" sub="국내외 기관투자자" />
            <MetricCard label="비상장 전환" value="2023년 10월" sub="TOB 완료 후" />
          </div>

          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">사업 부문별 AUM 구성</p>
          <div className="space-y-2.5 mb-2">
            {[
              { name: "물류", pct: 38, color: "bg-blue-500" },
              { name: "오피스", pct: 27, color: "bg-violet-500" },
              { name: "주거", pct: 22, color: "bg-emerald-500" },
              { name: "헬스케어", pct: 13, color: "bg-amber-500" },
            ].map(({ name, pct, color }, idx) => (
              <div key={name} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 w-16 flex-shrink-0">{name}</span>
                <AnimatedBar pct={pct} color={color} delay={idx * 0.1} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">{pct}%</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">출처: Kenedix Annual Report FY2022<Sup n={1} /></p>

          {/* 매출 부문별 구성 */}
          <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 mt-6">사업부문별 매출 구성 (FY2022)</p>
          <div className="space-y-2.5 mb-1">
            {[
              { name: "물류 운용", pct: 35, amt: "¥11.3B", color: "bg-blue-500" },
              { name: "오피스 운용", pct: 30, amt: "¥9.7B",  color: "bg-violet-500" },
              { name: "주거 운용", pct: 22, amt: "¥7.1B",  color: "bg-emerald-500" },
              { name: "헬스케어 운용", pct: 13, amt: "¥4.2B",  color: "bg-amber-500" },
            ].map(({ name, pct, amt, color }, idx) => (
              <div key={name} className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 w-24 flex-shrink-0">{name}</span>
                <AnimatedBar pct={pct} color={color} delay={idx * 0.1} />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 w-8 text-right">{pct}%</span>
                <span className="text-[11px] text-gray-400 dark:text-gray-500 w-14 text-right">{amt}</span>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1.5 mb-2">
            매출액 ¥32.4B 기준 추정치. 운용 보수(관리 수수료) 위주 구성으로 안정적 수익 구조.<Sup n={1} />
          </p>

          {/* ── 8. 딜 구조 ───────────────────────────────── */}
          <SectionTitle>딜 구조</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            블랙스톤은 도쿄증권거래소 프라임 시장 상장사인 케네딕스에 대해 공개매수(TOB)를 실시했다. 매수 희망 가격은 주당 1,100엔으로, TOB 개시 전 60거래일 가중평균 주가 대비 약 44% 프리미엄이었다.<Sup n={3} /> TOB 성립 후 케네딕스는 상장폐지되어 블랙스톤의 100% 완전 자회사로 편입됐다.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-4">
            <OwnershipDiagram
              title="딜 이전"
              nodes={PRE_DEAL_NODES}
              edges={PRE_DEAL_EDGES}
              delay={0}
            />
            <OwnershipDiagram
              title="딜 이후"
              nodes={POST_DEAL_NODES}
              edges={POST_DEAL_EDGES}
              delay={0.2}
            />
          </div>

          <div className="mt-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">거래 핵심 조건</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-1.5 text-[13px] mt-2">
              <div><span className="text-gray-400 dark:text-gray-500">거래 형태</span><span className="ml-2 font-medium text-gray-700 dark:text-gray-300">공개매수(TOB)</span></div>
              <div><span className="text-gray-400 dark:text-gray-500">매수 가격</span><span className="ml-2 font-medium text-gray-700 dark:text-gray-300">주당 1,100엔</span></div>
              <div><span className="text-gray-400 dark:text-gray-500">프리미엄</span><span className="ml-2 font-medium text-amber-500 font-bold">+44%</span></div>
              <div><span className="text-gray-400 dark:text-gray-500">취득 지분</span><span className="ml-2 font-medium text-gray-700 dark:text-gray-300">100%</span></div>
              <div><span className="text-gray-400 dark:text-gray-500">조달 방법</span><span className="ml-2 font-medium text-gray-700 dark:text-gray-300">Blackstone BREP IX</span></div>
              <div><span className="text-gray-400 dark:text-gray-500">상장폐지</span><span className="ml-2 font-medium text-gray-700 dark:text-gray-300">TOB 성립 후 즉시</span></div>
            </div>
          </div>

          {/* ── 자문사 ───────────────────────────────────── */}
          <SectionTitle>자문사</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            본 딜에는 양측 자문단이 구성되어 공개매수 구조화, 법적 검토, 가격 적정성 분석을 분담했다.
            블랙스톤은 글로벌 IB와 PE 전문 로펌을, 케네딕스는 일본 현지 최상위 기관을 선임했다.
          </p>
          <AdvisorsSection sides={ADVISOR_SIDES} />
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-4">
            주: 자문사 정보는 공개 자료 기반 추정치입니다. 실제와 다를 수 있습니다.
          </p>

          {/* ── 9. Financials ────────────────────────────── */}
          <SectionTitle>Financials</SectionTitle>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mb-4">
            단위: 10억 엔 (¥B)  |  일본 회계기준  |  출처: Kenedix Annual Report<Sup n={1} />
          </p>

          <FinancialsChart data={FINANCIALS} unit="B엔" currency="¥" />

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2.5 pr-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">항목</th>
                  {FINANCIALS.map((d) => (
                    <th key={d.year} className="text-right py-2.5 px-2 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">{d.year}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  { label: "매출액", key: "revenue" as const },
                  { label: "매출원가", key: "cogs" as const },
                  { label: "매출총이익", key: "grossProfit" as const },
                  { label: "판관비", key: "sga" as const },
                  { label: "영업이익", key: "operatingIncome" as const, bold: true },
                  { label: "EBITDA", key: "ebitda" as const, bold: true, accent: true },
                ].map(({ label, key, bold, accent }) => (
                  <tr key={key} className={accent ? "bg-emerald-50/60 dark:bg-emerald-900/10" : ""}>
                    <td className={`py-2.5 pr-4 text-[13px] ${bold ? "font-bold text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>
                      {label}
                    </td>
                    {FINANCIALS.map((d) => (
                      <td key={d.year} className={`py-2.5 px-2 text-right text-[13px] ${bold ? "font-bold" : ""} ${accent ? "text-emerald-600 dark:text-emerald-400" : "text-gray-700 dark:text-gray-300"}`}>
                        ¥{d[key]?.toFixed(1) ?? "-"}B
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-blue-50/40 dark:bg-blue-900/10">
                  <td className="py-2.5 pr-4 text-[13px] text-gray-400 dark:text-gray-500">EBITDA 마진</td>
                  {FINANCIALS.map((d) => (
                    <td key={d.year} className="py-2.5 px-2 text-right text-[13px] text-blue-600 dark:text-blue-400 font-medium">
                      {d.revenue && d.ebitda ? ((d.ebitda / d.revenue) * 100).toFixed(1) : "-"}%
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── 10. Valuation ────────────────────────────── */}
          <SectionTitle>Valuation</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            블랙스톤이 제시한 공개매수 가격 기준으로 케네딕스의 기업가치를 산출하면 EV/EBITDA 약 13.5~14.5배 수준으로 추정된다. 이는 동일 시기 일본 부동산 자산운용사 거래 평균(10~12배)을 상회하는 수준으로, 케네딕스의 플랫폼 프리미엄이 반영된 것으로 해석된다.<Sup n={2} /><Sup n={3} />
          </p>

          <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 overflow-hidden mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800/60 border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-2.5 px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">항목</th>
                  <th className="text-right py-2.5 px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">금액</th>
                  <th className="text-right py-2.5 px-4 text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">비고</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  { item: "시가총액 (공개매수가 기준)", val: "¥252B", note: "주당 1,100엔 × 229M주", accent: false },
                  { item: "(+) 순부채", val: "¥48B", note: "총부채 - 현금성자산", accent: false },
                  { item: "기업가치 (EV)", val: "¥300B", note: "≈ USD 2.1B", accent: true },
                  { item: "EBITDA (FY2022)", val: "¥15.2B", note: "일본 회계기준", accent: false },
                  { item: "EV / EBITDA", val: "약 19.7배", note: "플랫폼 프리미엄 반영", accent: true },
                ].map(({ item, val, note, accent }) => (
                  <tr key={item} className={accent ? "bg-amber-50/50 dark:bg-amber-900/10" : ""}>
                    <td className={`py-3 px-4 text-[13px] ${accent ? "font-bold text-gray-800 dark:text-gray-200" : "text-gray-600 dark:text-gray-400"}`}>{item}</td>
                    <td className={`py-3 px-4 text-right text-[13px] font-bold ${accent ? "text-amber-500" : "text-gray-700 dark:text-gray-300"}`}>{val}</td>
                    <td className="py-3 px-4 text-right text-[12px] text-gray-400 dark:text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">
            주: 순부채 및 발행주식수는 공시 자료 추정치 기반. 실제 수치와 다를 수 있음.<Sup n={3} />
          </p>

          {/* ── 11. 딜 논리 ──────────────────────────────── */}
          <SectionTitle>딜 논리</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* 매수자 논리 */}
            <div className="rounded-xl border border-blue-100 dark:border-blue-900/40 bg-blue-50/50 dark:bg-blue-900/10 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-gray-900 dark:bg-gray-100 flex items-center justify-center">
                  <span className="text-white dark:text-gray-900 text-[9px] font-black">BX</span>
                </div>
                <p className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">왜 블랙스톤은 샀는가</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "현지 딜소싱, LP 네트워크, 운용 인프라를 즉각 내재화. 단순 자산 매입 대비 수년의 시간 단축.",
                  "AUM 2.1조 엔 규모 운용 수수료 흐름 확보 (Management Fee + Performance Fee)",
                  "엔화 약세 구간의 타이밍을 활용. USD 기준 매입 비용이 역대 최저 수준.",
                  "물류, 주거 섹터 리포지셔닝으로 장기 임대 수요 기반 안정적 현금흐름 확보",
                  "일본을 아시아 부동산 플랫폼의 거점으로 삼아 지역 확장의 발판 마련",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* 매도자 논리 */}
            <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/30 p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-[8px] font-black">KDX</span>
                </div>
                <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">왜 케네딕스는 팔았는가</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  "독립 상장사로서의 한계. 글로벌 LP 모집과 대형 딜 참여에 자본력 제약이 존재.",
                  "주가 저평가 상태 지속 (PBR 0.7~0.9배), 44% 프리미엄은 주주 입장에서 매력적 Exit",
                  "블랙스톤의 글로벌 네트워크와 자본력을 통해 AUM 성장 가속화 가능",
                  "상장 유지 비용 및 공시 규제 부담에서 해방, 장기 전략에 집중 가능",
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 12. 딜 사후 평가 ─────────────────────────── */}
          <SectionTitle>딜 사후 평가 (2026년 5월 기준)</SectionTitle>
          <p className="text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
            딜 클로징(2023년 10월)으로부터 약 2년 반이 지난 현재 시점에서, 이 인수는 전략적으로 성공적인 딜로 평가된다. 다만 일본 금리 환경 변화라는 예상치 못한 변수가 단기 밸류에이션 압박 요인으로 작용했다.
          </p>

          {/* 종합 평가 뱃지 */}
          <div className="flex items-center gap-3 mb-6">
            <motion.span
              className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full px-4 py-1.5"
              initial={{ scale: 0.82, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 340, damping: 22, delay: 0.15 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden={true}><polyline points="20 6 9 17 4 12"/></svg>
              종합 평가: 전략적 성공
            </motion.span>
            <span className="text-xs text-gray-400 dark:text-gray-500">2026년 5월 기준</span>
          </div>

          {/* 긍정 / 부정 요인 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl border border-emerald-100 dark:border-emerald-900/40 bg-emerald-50/40 dark:bg-emerald-900/10 p-4">
              <p className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-3">성과 및 긍정 요인</p>
              <ul className="space-y-2">
                {[
                  "케네딕스 플랫폼을 통해 일본 물류 자산 추가 매입 가속. 2024~2025년 사이 물류 포트폴리오 AUM 약 30% 확대 추정.",
                  "현지 딜소싱 내재화로 경쟁 입찰 없이 오프마켓 딜 다수 확보. 블랙스톤 아시아 부동산 수익률 개선에 기여.",
                  "케네딕스 운용 인력 이탈 최소화. 운용 연속성 유지로 LP 신뢰 확보 및 펀드 만기 연장 성공.",
                  "엔화 약세 구간(2023~2024년 USD/JPY 150~160)에서 USD 기준 자산 매입 비용 추가 절감 효과.",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-amber-100 dark:border-amber-900/40 bg-amber-50/40 dark:bg-amber-900/10 p-4">
              <p className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-3">리스크 및 부정 요인</p>
              <ul className="space-y-2">
                {[
                  "일본은행(BOJ) 금리 인상(2024년 3월 마이너스 금리 종료, 2025년 추가 인상)으로 캡레이트 상승 압력. 보유 자산의 장부 가치 일부 조정.",
                  "오피스 섹터는 재택근무 정착으로 공실률 완전 회복 미달. 오피스 비중 축소 리포지셔닝 진행 중.",
                  "EV/EBITDA 약 19.7배의 높은 인수가. 내부 수익률(IRR) 목표 달성을 위한 자산 매각 타이밍 관리 중요.",
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-700 dark:text-gray-300 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Tombstone ────────────────────────────── */}
          <Tombstone
            acquirerInitials="BX"
            acquirerBg="bg-gray-900 dark:bg-gray-100"
            targetInitials="KDX"
            targetBg="bg-blue-600"
            acquirerName="Blackstone"
            targetName="Kenedix"
            dealTitle="Blackstone's Acquisition of Kenedix, Inc. via Tender Offer"
            dealSize="약 2.5조 원"
            dealSizeUSD="approx. USD 1.8 Billion"
            evEbitda="약 19.7×"
            closeDate="Oct 2023"
          />

          {/* 결론 */}
          <div className="rounded-xl border border-gray-200 dark:border-gray-700/60 bg-gray-50 dark:bg-gray-800/40 p-5 text-[0.9375rem] text-gray-600 dark:text-gray-400 leading-relaxed">
            <p className="font-bold text-gray-800 dark:text-gray-200 mb-2 text-sm">편집자 총평</p>
            <p>
              블랙스톤의 케네딕스 인수는 "플랫폼 프리미엄을 지불하더라도 현지 거점을 내재화"하는 전략이 유효함을 입증한 사례다. 인수 이후 물류, 주거 자산의 추가 매입이 케네딕스 네트워크를 통해 이루어졌으며, 이는 블랙스톤이 개별 자산 매입 방식으로는 달성하기 어려웠을 속도다. BOJ 금리 인상이라는 역풍이 존재하나, 일본 부동산 시장의 실물 수요는 견조하게 유지되고 있어 중장기 전망은 긍정적이다. 단, EV/EBITDA 약 20배에 달하는 인수가 정당화를 위해서는 AUM의 지속 성장과 성과 보수 실현이 필수적이다.
            </p>
          </div>

          {/* ── 13. 태그 ─────────────────────────────────── */}
          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-2">
            {["블랙스톤", "케네딕스", "일본", "부동산", "PE", "TOB", "자산운용"].map((tag) => (
              <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1">
                #{tag}
              </span>
            ))}
          </div>

          {/* ── 14. 출처 ─────────────────────────────────── */}
          <div className="mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
            <p className="text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">출처 및 주석</p>
            <ol className="space-y-2">
              {SOURCES.map(({ id, text }) => (
                <li key={id} className="flex items-start gap-2 text-[12px] text-gray-400 dark:text-gray-500 leading-relaxed">
                  <span className="font-bold text-blue-400 flex-shrink-0">[{id}]</span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 하단 뒤로 */}
          <div className="mt-12 pt-6 border-t border-gray-100 dark:border-gray-800">
            <Link href="/deals" className="text-sm text-blue-500 hover:underline">
              다른 딜 보기
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
