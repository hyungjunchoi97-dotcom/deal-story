/**
 * KKR × Dollar General LBO (2007–2013)
 * 불황형 소매의 역설 — 금융위기가 오히려 EBITDA를 키운 역대 최고 수익률 LBO
 * Entry: $6.9B (7.0× EBITDA) → 2009 IPO → IRR 70%+, MOIC ~4-5×
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kkr-dollar-general",
  title: "KKR은 어떻게 달러스토어 하나로 70% IRR을 달성했나",
  subtitle: "$69억 LBO → 금융위기가 실적을 끌어올린 역대급 역발상 투자",
  category: "ma",
  industry: "소매 / 할인 스토어",
  country: "미국",
  announcedAt: "2007-03-12",
  closedAt: "2007-07-07",
  announcedDisplay: "2007년 3월",
  closedDisplay: "2007년 7월",
  readingMinutes: 11,
  tags: [
    "KKR", "Dollar General", "달러제너럴", "LBO", "달러스토어",
    "경기방어주", "불황형소매", "Recession-Proof", "레버리지드론",
    "HY채권", "LevFin", "PE", "사모펀드", "IPO", "Exit", "IRR",
  ],
  excerpt:
    "2007년 7월 KKR이 Dollar General을 $69억에 LBO 인수했다. 1년 후 글로벌 금융위기가 터졌지만 Dollar General의 EBITDA는 오히려 35% 성장했다. '소비자가 가난해질수록 달러스토어는 번성한다'는 역설이 현실이 됐다. 2009년 IPO로 일부 엑싯 후 2013년 완전 회수 — IRR 70%+, MOIC ~4-5×. PE 역사상 가장 성공한 LBO 중 하나.",

  acquirer: { initials: "KKR", bg: "bg-emerald-700", label: "KKR" },
  target:   { initials: "DG",  bg: "bg-yellow-500", label: "Dollar General Corporation" },

  background: [
    "Dollar General은 테네시 주 굿레츠빌(Goodlettsville)에 본사를 둔 미국 최대 달러스토어 체인이다. 2007년 당시 매장 수 8,000+, 대부분 저소득 농촌 지역에 위치. 핵심 고객층은 연소득 $35,000 이하 가구로, 할인 잡화(식품, 생활용품, 의류)를 취급했다.",
    "KKR은 Dollar General의 '불황 면역성(recession immunity)'에 주목했다. 달러스토어의 특성상 경기 침체 시 고소득층 쇼핑객이 월마트에서 달러스토어로 내려오고, 기존 저소득층 고객은 이탈하지 않는다. 더욱이 Dollar General은 당시 오퍼레이션 효율화(shrink 감소, 재고 최적화, SCM 혁신) 여지가 컸다.",
    "2006년 Dollar General의 재무 이슈(회계 재조정, CEO 교체)가 주가를 억눌러 인수 가격이 합리적이었다. KKR은 $38억 레버리지드론·HY채권과 $31억 에쿼티를 활용해 $69억 딜을 클로징했다. 에쿼티 비율 ~45%로 전형적 LBO 대비 보수적 구조.",
  ],

  dealSummary: {
    dealValueDisplay: "$69억",
    acquirerName: "KKR",
    targetName: "Dollar General Corporation",
    announcedDisplay: "2007년 3월 12일",
    closedDisplay: "2007년 7월 7일",
    country: "미국 (NYSE: DG)",
  },

  executiveSummary: [
    "KKR이 Dollar General을 $69억에 LBO 인수 — 에쿼티 $31억, 레버리지드론+HY채권 $38억.",
    "Entry Leverage 5.5× → 1년 후 금융위기로 EBITDA가 35% 성장 → 실질 레버리지 급감.",
    "할인 소매의 역설: 경기 침체 시 '다운트레이딩(down-trading)' 수혜 — 고소득층도 달러스토어로 이동.",
    "2009년 11월 IPO — 주식시장 회복과 맞물려 역대 최고 평가가치에 재상장.",
    "2013년 완전 회수 완료 — IRR ~70%, MOIC ~4-5×, 투자 수익 $40억+.",
  ],

  levfinOverview: {
    title: "Dollar General LBO 자본 구조",
    description: "보수적 레버리지(5.5×)와 에쿼티 45% 구조. 금융위기로 EBITDA 성장 → 2년 만에 레버리지 4.5×로 자연 감소.",
    tranches: [
      {
        label: "Term Loan B (TLB)",
        amount: "$3.8B",
        rate: "L+275bps",
        priority: "1L 담보",
        color: "bg-amber-500",
      },
      {
        label: "리볼빙 크레딧 퍼실리티",
        amount: "$0.9B",
        rate: "L+250bps",
        priority: "1L 담보",
        color: "bg-amber-400",
      },
      {
        label: "HY 채권 (Senior Notes)",
        amount: "$0.7B",
        rate: "고정 10.625%",
        priority: "무담보 후순위",
        color: "bg-orange-500",
      },
      {
        label: "에쿼티 (KKR + Co-investors)",
        amount: "$2.4B",
        rate: "—",
        priority: "최후순위",
        color: "bg-emerald-500",
      },
    ],
    metrics: [
      { label: "엔트리 레버리지", value: "5.5×", sub: "보수적 구조" },
      { label: "2년 후 레버리지", value: "4.5×", sub: "EBITDA 성장으로 자연 감소" },
      { label: "IRR", value: "~70%+", sub: "PE 역대 최고 수준" },
      { label: "MOIC", value: "~4-5×", sub: "투자 수익 $40억+" },
    ],
  },

  timeline: [
    {
      date: "2007년 7월",
      title: "LBO 클로징",
      description:
        "KKR이 Dollar General을 $69억에 인수. TLB $38억, 에쿼티 ~$31억. Entry EV/EBITDA 7.0×. 전 CEO Rick Dreiling 영입(Home Depot 출신), 오퍼레이션 혁신 시작.",
    },
    {
      date: "2007–2008년",
      title: "오퍼레이션 혁신",
      description:
        "매장 재배치·리뉴얼, 식품 카테고리 강화, 재고 shrink 감소, SCM 최적화. 신규 매장 600+ 개설. EBITDA 마진 연간 100bps+ 개선.",
    },
    {
      date: "2008년 9월",
      title: "금융위기 — 역설적 수혜",
      description:
        "리먼 브라더스 파산, 주가 폭락, 실업률 급등. Dollar General은 오히려 수혜. 고소득층 소비자들이 'Down-Trading'으로 달러스토어 방문 급증. 동기 매출(SSS) +10%+.",
    },
    {
      date: "2009년 11월",
      title: "IPO — 역대 최대 소매 IPO",
      description:
        "달러스토어 섹터 사상 최대 규모 IPO. 주당 $21 공모가, 시가총액 $7B+. KKR 보유 지분 일부 매각. 2008년 금융위기 이후 가장 성공한 PE-backed IPO 중 하나.",
    },
    {
      date: "2010–2013년",
      title: "잔여 지분 블록세일·완전 회수",
      description:
        "KKR이 수차례 블록딜(secondary offering)을 통해 잔여 지분 매각. 2013년 완전 회수 완료. 총 회수액 $40억+. IRR ~70%, MOIC ~4-5× 달성.",
    },
  ],

  lessons: [
    "**불황 면역 비즈니스 선별**: 경기 사이클과 음(-)의 상관관계를 갖는 사업(달러스토어, 고가품 등)은 LBO에서 실질적 '헤지'가 된다. KKR은 레버리지가 가장 높은 시점에 EBITDA가 성장하는 구조를 설계했다.",
    "**보수적 레버리지 + 오퍼레이션 알파**: Entry Leverage 5.5×는 2007년 당시 시장 평균(7-8×)보다 낮았다. 대신 오퍼레이션 개선(매장 혁신, 식품 카테고리, 재고 관리)을 통해 EBITDA를 직접 키웠다. 레버리지보다 실적 개선이 결국 더 큰 수익을 만들었다.",
    "**Exit 타이밍**: 2009년 주식시장 저점 직후 IPO를 단행한 것은 탁월한 타이밍이었다. PE 투자자는 '최고점 엑싯'보다 '성장 스토리가 명확할 때 엑싯'이 장기적으로 더 큰 수익을 낸다는 것을 Dollar General이 입증했다.",
  ],

  concepts: [
    "levfin-credit-metrics",
    "levfin-hy-vs-loans",
    "levfin-cases",
  ],

  relatedChapters: [
    {
      slug: "levfin-credit-metrics",
      title: (ko: boolean) => ko ? "Ch.2 신용 메트릭스 & 언더라이팅" : "Ch.2 Credit Metrics & Underwriting",
      description: (ko: boolean) =>
        ko
          ? "Entry 5.5× → 금융위기 EBITDA 성장 → 2년 후 4.5× — 레버리지 비율이 어떻게 자연 감소하는지 해부"
          : "Entry 5.5× → financial crisis EBITDA growth → 4.5× in 2 years — how leverage ratios self-correct through earnings growth",
    },
    {
      slug: "levfin-hy-vs-loans",
      title: (ko: boolean) => ko ? "Ch.1 HY채권 vs 레버리지드론" : "Ch.1 HY Bonds vs Leveraged Loans",
      description: (ko: boolean) =>
        ko
          ? "TLB $38억 + HY 10.625% 채권 $7억 혼합 구조 — 동일 LBO에서 론과 채권의 역할 분담"
          : "TLB $3.8B + HY 10.625% notes $0.7B blended structure — how loans and bonds divide roles in the same LBO",
    },
    {
      slug: "levfin-cases",
      title: (ko: boolean) => ko ? "Ch.7 LevFin 케이스 스터디" : "Ch.7 LevFin Case Studies",
      description: (ko: boolean) =>
        ko
          ? "Dollar General(성공)과 Toys R Us(실패)를 같은 시대 같은 PE가 진행한 소매 LBO로 비교"
          : "Dollar General (success) vs. Toys R Us (failure) — two retail LBOs by the same PE in the same era compared",
    },
  ],
};

export default deal;
