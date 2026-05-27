/**
 * Serta Simmons Bedding — 2020 Uptier Exchange (Lender-on-Lender Violence)
 * 기존 TLB 채권자 $9억을 후순위로 밀어내고 수퍼-선순위 $12억 TL 발행
 * 2024년 5th Circuit "거래 무효" 판결 — 신디케이티드론 역사의 분수령
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "serta-simmons-uptier",
  title: "세르타 시몬스는 어떻게 자신의 채권자들을 후순위로 밀어냈나",
  subtitle: "$12억 업티어 익스체인지 — Lender-on-Lender Violence의 교과서이자 법원이 무효 판결한 거래",
  category: "ma",
  industry: "소비재 / 침구 제조",
  country: "미국",
  announcedAt: "2020-06-08",
  closedAt: "2020-06-22",
  announcedDisplay: "2020년 6월",
  closedDisplay: "2020년 6월",
  readingMinutes: 13,
  tags: [
    "세르타시몬스", "Serta Simmons", "업티어", "Uptier", "익스체인지", "LME",
    "Lender-on-Lender Violence", "LoLV", "TLB", "레버리지드론", "LevFin",
    "신디케이티드론", "코비넌트", "5th Circuit", "Chapter 11", "파산",
    "아폴로", "Angelo Gordon", "Goldman BDC", "Highland Capital",
  ],
  excerpt:
    "2020년 6월, Serta Simmons는 동의한 채권자들에게 수퍼-선순위 $12억 TL을 발행하고 기존 TLB 채권자 ~$9억을 후순위로 밀어냈다. COVID-19로 촉발된 이 'Lender-on-Lender Violence' 거래는 Highland Capital 등 비동의 채권자들의 소송으로 이어졌고, 2023년 Chapter 11 이후 2024년 5th Circuit이 거래를 '무효'로 판결했다. 현대 레버리지드론 코비넌트의 허점이 낳은 역대 최대 법정 공방.",

  acquirer: { initials: "LoLV", bg: "bg-red-900", label: "과반수 채권자단 (Apollo, Angelo Gordon, Goldman BDC)" },
  target:   { initials: "SSB",  bg: "bg-rose-700", label: "Serta Simmons Bedding, LLC" },

  background: [
    "Serta Simmons Bedding는 미국 최대 침구 브랜드(Serta, Beautyrest 등)로, 2012년 Ares Management와 Ontario Teachers' Pension Plan이 약 $30억에 LBO 인수했다. 2016년 추가 LBO(Advent International 참여)로 부채가 $18억+으로 늘어났다.",
    "2020년 3월 COVID-19 팬데믹으로 가구·소비재 소매 채널이 급격히 위축되었다. Serta Simmons의 EBITDA는 전년 대비 30%+ 감소할 것으로 전망됐다. 회사는 현금 확보와 부채 경감을 위한 자본 구조 재편을 모색했다.",
    "레버리지드론 신용 협정에는 '과반수(Required Lenders)' 동의로 특정 조항을 개정할 수 있다는 조항이 있었다. Serta Simmons는 기존 채권자 중 과반수를 설득해, 신규 수퍼-선순위 TL을 발행하고 이들에게 기존 TLB를 할인 매입(exchange)해주는 방식으로 자본 구조를 재편하기로 했다.",
  ],

  dealSummary: {
    dealValueDisplay: "$12억 (수퍼-선순위 TL)",
    acquirerName: "과반수 채권자단 (Apollo, Angelo Gordon, Goldman Sachs BDC 등)",
    targetName: "Serta Simmons Bedding, LLC",
    announcedDisplay: "2020년 6월 8일",
    closedDisplay: "2020년 6월 22일",
    country: "미국 (비상장)",
  },

  executiveSummary: [
    "COVID-19로 재무 악화 → 과반수 채권자 동의로 수퍼-선순위 TL $12억 발행.",
    "비동의 채권자 ~$9억(Highland Capital, Gamut Capital 등) → 후순위로 밀려남(primed).",
    "비동의 채권자들 즉각 소송: '신용 협정 위반(breach of contract)' 주장.",
    "2023년 1월 Chapter 11 파산 신청 — 총 부채 ~$18.4억.",
    "2024년 6월 5th Circuit: 업티어 거래 무효(invalid) 판결 — 신디케이티드론 시장 충격.",
  ],

  levfinOverview: {
    title: "Serta Simmons 자본 구조 — 업티어 전·후",
    description: "과반수 채권자가 수퍼-선순위 TL을 받고 기존 TLB를 할인 교환. 비동의 채권자는 후순위로 밀려남.",
    tranches: [
      {
        label: "수퍼-선순위 TL (신규)",
        amount: "$1.2B",
        rate: "L+750bps (PIK 옵션)",
        priority: "1순위 (업티어)",
        color: "bg-emerald-500",
      },
      {
        label: "기존 TLB (비동의 채권자, primed)",
        amount: "~$0.9B",
        rate: "L+350bps",
        priority: "후순위로 밀림",
        color: "bg-red-500",
      },
      {
        label: "2L 채권",
        amount: "~$0.5B",
        rate: "고정 8.0%",
        priority: "3순위",
        color: "bg-red-700",
      },
      {
        label: "에쿼티 (스폰서)",
        amount: "N/A",
        rate: "—",
        priority: "최후순위",
        color: "bg-gray-500",
      },
    ],
    metrics: [
      { label: "업티어 규모", value: "$1.2B", sub: "수퍼-선순위 TL" },
      { label: "후순위로 밀린 TLB", value: "~$0.9B", sub: "비동의 채권자 피해", isAlert: true },
      { label: "5th Circuit 판결", value: "무효", sub: "2024년 6월", isAlert: true },
      { label: "Chapter 11", value: "2023년 1월", sub: "총 부채 ~$18.4억", isAlert: true },
    ],
  },

  timeline: [
    {
      date: "2012년",
      title: "1차 LBO",
      description: "Ares + Ontario Teachers' Pension이 ~$30억에 인수. 부채 ~$12억.",
    },
    {
      date: "2020년 3월",
      title: "COVID-19 충격",
      description: "팬데믹으로 소매 채널 급감. EBITDA 30%+ 감소 전망. 유동성 위기.",
    },
    {
      date: "2020년 6월",
      title: "업티어 익스체인지 클로징",
      description:
        "과반수 채권자(Apollo, Angelo Gordon, Goldman BDC) 동의로 수퍼-선순위 TL $12억 발행. 기존 TLB 할인 교환. Highland Capital, Gamut Capital 등 비동의 채권자 ~$9억 후순위로 밀림.",
    },
    {
      date: "2020년 6월",
      title: "비동의 채권자 소송",
      description:
        "Highland Capital Management 등이 신용 협정 위반 소송 제기. '과반수 동의로 1순위 담보를 희석하는 것은 채권자 전원 동의(unanimous consent) 사항'이라고 주장.",
    },
    {
      date: "2022년",
      title: "연방지방법원 판결: 유효",
      description:
        "텍사스 남부 연방지방법원: 업티어 거래 유효 판결. 신용 협정 문언(plain language) 해석에 따라 과반수 동의로 가능하다고 봄.",
    },
    {
      date: "2023년 1월",
      title: "Chapter 11 파산",
      description: "총 부채 ~$18.4억으로 챕터 11 신청. 뉴욕 남부 파산법원. 수퍼-선순위 TL 채권자는 새 회사 지분 수령.",
    },
    {
      date: "2024년 6월",
      title: "5th Circuit 판결: 무효",
      description:
        "제5 순회 항소법원: 업티어 거래 무효. '과반수 동의로 특정 채권자를 후순위로 밀어내는 것은 신용 협정의 Pro Rata 조항 위반'이라고 판시. 시장 전체에 충격.",
    },
  ],

  lessons: [
    "**Open Market Purchase 조항 해석**: 많은 신디케이티드론 신용 협정의 '공개시장 매입(Open Market Purchase)' 조항이 업티어 거래의 법적 근거로 활용됐다. 5th Circuit 판결 이후 이 조항에 명시적 제한(anti-subordination language)이 추가되고 있다.",
    "**Pro Rata 조항의 중요성**: 신디케이티드론의 핵심 원칙인 Pro Rata(채권자 간 평등 처우)가 업티어로 침해될 경우 법적 분쟁이 불가피하다. 이후 발행 신용 협정에는 'Serta blocker'라 불리는 조항이 표준으로 삽입됐다.",
    "**LME(Liability Management Exercise)의 법적 리스크**: 2020-2024년 사이 Serta, Envision, TriMark 등 다수 LME 거래가 법정에서 다퉈졌다. 업티어는 단기 유동성을 확보하지만 법적 불확실성과 채권자 관계 훼손이 장기적으로 더 큰 비용을 초래할 수 있다.",
  ],

  concepts: [
    "levfin-covenants",
    "levfin-distressed",
    "levfin-cases",
  ],

  relatedChapters: [
    {
      slug: "levfin-covenants",
      title: (ko: boolean) => ko ? "Ch.3 코비넌트 & LME" : "Ch.3 Covenants & LME",
      description: (ko: boolean) =>
        ko
          ? "Pro Rata 조항, Serta Blocker, Open Market Purchase 조항 — 업티어가 만든 신규 표준 코비넌트"
          : "Pro Rata provisions, Serta Blocker, Open Market Purchase clauses — new covenant standards born from the Serta uptier",
    },
    {
      slug: "levfin-distressed",
      title: (ko: boolean) => ko ? "Ch.6 부실 대출 & 구조조정" : "Ch.6 Distressed Debt & Restructuring",
      description: (ko: boolean) =>
        ko
          ? "Chapter 11 메커니즘, DIP 파이낸싱, 채권자 소송 — 업티어 이후 파산 절차 해부"
          : "Chapter 11 mechanics, DIP financing, creditor litigation — anatomy of bankruptcy proceedings post-uptier",
    },
    {
      slug: "levfin-cases",
      title: (ko: boolean) => ko ? "Ch.7 LevFin 케이스 스터디" : "Ch.7 LevFin Case Studies",
      description: (ko: boolean) =>
        ko
          ? "Serta Simmons 업티어를 다른 LoLV 케이스(Envision, TriMark)와 비교 분석"
          : "Serta Simmons uptier compared with other LoLV cases — Envision Healthcare, TriMark USA",
    },
  ],
};

export default deal;
