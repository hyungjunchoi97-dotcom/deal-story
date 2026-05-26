/**
 * Learning Paths — 큐레이션된 학습 경로
 *
 * 각 Path는 Market 101 아티클/용어 + Market Story 딜을 순서대로 연결해
 * 독자가 개념 → 실전 → 더 깊은 개념 루프를 경험하게 한다.
 */

export type LearningPathStep = {
  /** "market-101" | "market-deal" */
  type: "market-101" | "market-deal";
  slug: string;
  /** 이 스텝에서 독자가 얻어가는 핵심 포인트 (KO) */
  note: string;
  noteEn: string;
};

export type LearningPath = {
  slug: string;
  title: string;
  titleEn: string;
  tagline: string;
  taglineEn: string;
  /** 한 줄 소개 */
  description: string;
  descriptionEn: string;
  level: "beginner" | "intermediate" | "advanced";
  /** 예상 총 읽기 시간 (분) */
  estimatedMinutes: number;
  /**
   * 대표 카테고리 — Market 101의 category key와 동일한 값을 사용
   * "dcm" | "credit" | "leveraged-finance" | "distressed" | "s-t" | "sovereign" | "fig"
   */
  category: string;
  steps: LearningPathStep[];
};

// ─────────────────────────────────────────────────────────────────────────────
// 데이터
// ─────────────────────────────────────────────────────────────────────────────

export const ALL_LEARNING_PATHS: LearningPath[] = [
  // ── 1. DCM 첫걸음 ────────────────────────────────────────────────────────
  {
    slug: "dcm-first-steps",
    title: "DCM 첫걸음",
    titleEn: "DCM First Steps",
    tagline: "채권이 어떻게 세상에 나오는지 — 발행부터 투자자까지",
    taglineEn: "How bonds come to market — from origination to investors",
    description:
      "DCM(채권 자본시장)의 생태계를 한눈에 파악하고, 북빌딩·NIC·신디케이트가 실제 딜에서 어떻게 맞물리는지 한국 1998 외화채 케이스로 마무리합니다.",
    descriptionEn:
      "Get a bird's-eye view of DCM, then see how book-building, NIC and the syndicate work together — anchored by the Korea 1998 sovereign bond case.",
    level: "beginner",
    estimatedMinutes: 55,
    category: "dcm",
    steps: [
      {
        type: "market-101",
        slug: "dcm-ecosystem",
        note: "DCM 생태계 전체를 조망합니다. 발행사·주관사·투자자·신디케이트가 어떻게 얽히는지 먼저 큰 그림을 잡으세요.",
        noteEn: "Start with the full DCM ecosystem — how issuers, bookrunners, investors and the syndicate fit together.",
      },
      {
        type: "market-101",
        slug: "book-building",
        note: "수요예측(북빌딩)이 어떻게 진행되고, 오더북이 어떻게 채워지는지 배웁니다. 초과청약(O/S)이 왜 중요한지도 여기서 이해하세요.",
        noteEn: "Learn how book-building aggregates investor demand and why oversubscription (O/S) matters for pricing.",
      },
      {
        type: "market-101",
        slug: "nic",
        note: "발행사가 실제로 얼마나 양보하는지를 NIC(신규발행 프리미엄)로 측정합니다. 딜 성공의 기준이 무엇인지 알 수 있습니다.",
        noteEn: "Measure how much the issuer concedes via NIC (New Issue Concession). This is the real cost of accessing capital markets.",
      },
      {
        type: "market-101",
        slug: "syndicate",
        note: "딜을 실행하는 신디케이트 팀의 역할과 주관사 간 책임 분배를 이해합니다.",
        noteEn: "Understand the syndicate's role and how bookrunner responsibilities are divided.",
      },
      {
        type: "market-deal",
        slug: "korea-1998-external-bond",
        note: "IMF 외환위기 직후 한국이 어떻게 국제 채권시장에 복귀했는지 — 앞서 배운 모든 개념이 실전에서 어떻게 적용됐는지 확인합니다.",
        noteEn: "See every concept you've learned applied to Korea's landmark re-entry to international bond markets in 1998.",
      },
    ],
  },

  // ── 2. 은행 자본의 세계 ───────────────────────────────────────────────────
  {
    slug: "bank-capital-deep-dive",
    title: "은행 자본의 세계",
    titleEn: "The World of Bank Capital",
    tagline: "AT1·CoCo·베일인 — 위기 때 가장 먼저 손실을 흡수하는 채권",
    taglineEn: "AT1, CoCo, bail-in — bonds designed to absorb losses in a crisis",
    description:
      "스프레드와 OAS로 채권 가격 결정을 이해한 뒤, 은행이 자산·부채를 어떻게 관리하는지(ALM) 파악하고, 크레딧스위스 AT1 전액 상각 사태로 마무리합니다.",
    descriptionEn:
      "Master spread and OAS pricing, understand bank ALM, then dive into the Credit Suisse AT1 write-down — the most dramatic bank capital event in modern history.",
    level: "intermediate",
    estimatedMinutes: 70,
    category: "fig",
    steps: [
      {
        type: "market-101",
        slug: "spread-basis",
        note: "국채 대비 스프레드가 어떻게 리스크를 반영하는지 — 모든 크레딧 채권 분석의 출발점입니다.",
        noteEn: "Understand spreads as the universal language of credit risk — the starting point for all bond analysis.",
      },
      {
        type: "market-101",
        slug: "oas",
        note: "옵션이 내포된 채권(AT1 포함)의 스프레드를 왜 단순 명목 스프레드만으로 볼 수 없는지 이해합니다.",
        noteEn: "Learn why AT1s and other callable bonds require OAS rather than nominal spread for accurate comparison.",
      },
      {
        type: "market-101",
        slug: "alm",
        note: "은행이 자산(대출)과 부채(예금·채권)의 만기 불일치를 어떻게 관리하는지 — SVB 붕괴 전조가 바로 여기서 시작됩니다.",
        noteEn: "See how banks manage asset-liability mismatches — and how ignoring this dynamic contributed to SVB's collapse.",
      },
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        note: "2023년 크레딧스위스 AT1 채권 전액 상각 사태 — PONV 트리거, 베일인, 주주보다 먼저 손실을 흡수한 AT1 채권자들의 이야기.",
        noteEn: "The 2023 Credit Suisse AT1 write-down — how PONV triggered, what bail-in means in practice, and why AT1 investors lost everything before equity holders.",
      },
      {
        type: "market-deal",
        slug: "svb-2023",
        note: "같은 해(2023년) 다른 원인의 은행 위기 — SVB는 ALM 실패, CS는 신용 손실. 둘을 비교하면 은행 리스크의 두 축이 보입니다.",
        noteEn: "Two bank crises in the same year (2023), different causes — SVB was ALM failure, CS was credit deterioration. Comparing them reveals the two axes of bank risk.",
      },
    ],
  },

  // ── 3. 크레딧 스펙트럼 완전 정복 ─────────────────────────────────────────
  {
    slug: "credit-spectrum-mastery",
    title: "크레딧 스펙트럼 완전 정복",
    titleEn: "Credit Spectrum Mastery",
    tagline: "AAA에서 디폴트까지 — 신용등급이 바뀔 때 채권에 무슨 일이 생기나",
    taglineEn: "From AAA to default — what happens to bonds as credit quality shifts",
    description:
      "투자등급(IG)과 하이일드(HY)의 차이, 스프레드가 위험을 어떻게 반영하는지, CAC가 구조조정을 어떻게 가능하게 하는지 — 두 개의 실전 딜로 마무리합니다.",
    descriptionEn:
      "The difference between IG and HY, how spreads price risk, how CACs enable restructuring — anchored by two landmark deals spanning crisis and recovery.",
    level: "advanced",
    estimatedMinutes: 80,
    category: "credit",
    steps: [
      {
        type: "market-101",
        slug: "investment-grade",
        note: "투자등급(BBB- 이상)이 무엇을 의미하는지 — 등급 기관의 방법론, 투자자 베이스 차이, IG 스프레드 결정 요인을 배웁니다.",
        noteEn: "What investment grade (BBB- and above) means — rating methodologies, investor base differences, and what drives IG spreads.",
      },
      {
        type: "market-101",
        slug: "high-yield",
        note: "IG 아래 세계 — 하이일드 채권은 왜 더 높은 스프레드를 요구하며, 어떤 투자자들이 참여하고, 어떤 위험이 있는지.",
        noteEn: "Below investment grade — why HY demands wider spreads, which investors participate, and what risks are embedded.",
      },
      {
        type: "market-101",
        slug: "spread-basis",
        note: "스프레드가 단순한 숫자가 아니라 시장 참여자들의 공포와 탐욕을 실시간으로 반영하는 지표임을 이해합니다.",
        noteEn: "Spread is not just a number — it's a real-time gauge of market fear and greed. Learn what drives spread widening and tightening.",
      },
      {
        type: "market-101",
        slug: "reach-for-yield",
        note: "저금리 시대에 투자자들이 수익률을 위해 어떻게 위험 수용도를 높이는지 — 그 결과가 시장 전체에 어떤 왜곡을 만드는지.",
        noteEn: "How low-rate environments push investors into riskier assets — and the market distortions this creates.",
      },
      {
        type: "market-101",
        slug: "cac",
        note: "CAC(집합행동조항)이 채권 구조조정을 어떻게 가능하게 하는지 — holdout 채권자 문제와 sovereign 부채 재편의 핵심 메커니즘.",
        noteEn: "How CACs (Collective Action Clauses) enable sovereign debt restructuring by preventing holdout creditors from blocking deals.",
      },
      {
        type: "market-deal",
        slug: "korea-1998-external-bond",
        note: "신흥국 크레딧 위기의 전형 — 극심한 스프레드 압박 속에서도 발행에 성공한 한국의 외화채 사례.",
        noteEn: "The emerging-market credit crisis playbook — how Korea issued sovereign bonds under extreme spread pressure and what it signals about market access.",
      },
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        note: "선진국 금융기관 크레딧 위기 — IG 등급이었던 AT1 채권이 하루아침에 전액 상각된 사태가 크레딧 스펙트럼에 주는 교훈.",
        noteEn: "A developed-market credit crisis — what the overnight write-down of IG-rated AT1 bonds teaches us about credit spectrum extremes.",
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 헬퍼
// ─────────────────────────────────────────────────────────────────────────────

export function getLearningPath(slug: string): LearningPath | undefined {
  return ALL_LEARNING_PATHS.find((p) => p.slug === slug);
}

export const LEVEL_LABEL: Record<LearningPath["level"], { ko: string; en: string; color: string; bg: string }> = {
  beginner:     { ko: "입문",   en: "Beginner",     color: "text-emerald-700 dark:text-emerald-300", bg: "bg-emerald-50 dark:bg-emerald-900/30" },
  intermediate: { ko: "중급",   en: "Intermediate", color: "text-amber-700 dark:text-amber-300",   bg: "bg-amber-50 dark:bg-amber-900/30"   },
  advanced:     { ko: "심화",   en: "Advanced",     color: "text-rose-700 dark:text-rose-300",     bg: "bg-rose-50 dark:bg-rose-900/30"     },
};
