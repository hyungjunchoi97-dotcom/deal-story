/**
 * Terra Firma (Guy Hands) × EMI Music LBO (2007–2011)
 * 산업 타이밍 재앙의 교과서 — LBO 정점 + 음악 산업 디지털 붕괴 + 브리지론 잠금
 *
 * 스폰서 중심 서사: 영국 최대 PE 스타가 21x EBITDA로 EMI를 인수,
 * 코스트컷·디지털 전환 시도 → 아티스트 이탈 → Citi 소송 → 펀드 전손.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "terra-firma-emi-2007",
  category: "lbo",

  title: "Terra Firma의 Guy Hands는 어떻게 £4.2B EMI 인수로 펀드 한 개를 통째로 날렸나",
  titleEn: "How Terra Firma's Guy Hands Wiped Out an Entire Fund on the £4.2B EMI Buyout",
  subtitle:
    "Guy Hands × Citi 브리지론 · 21x EBITDA 진입 · Radiohead·McCartney 이탈 · Citi 소송 패소 · 펀드 III 전손",
  subtitleEn:
    "Guy Hands × Citi Bridge · 21x EBITDA Entry · Radiohead and McCartney Walk · Lost Citi Lawsuit · Fund III Wipe-Out",

  industry: "음악 / 엔터테인먼트",
  industryEn: "Music / Entertainment",
  country: "영국",
  announcedAt: "2007-05-21",
  closedAt: "2007-08-01",
  announcedDisplay: "2007년 5월",
  closedDisplay: "2007년 8월",
  readingMinutes: 17,
  tags: [
    "EMI",
    "Terra Firma",
    "Guy Hands",
    "LBO",
    "Citigroup",
    "Bridge Loan",
    "음악 산업",
    "Music Industry",
    "Radiohead",
    "Paul McCartney",
    "디지털 전환",
    "산업 타이밍",
    "2007 LBO",
    "Hands v Citigroup",
    "Universal Music",
    "Sony Music",
  ],
  excerpt:
    "Terra Firma의 Guy Hands가 2007년 8월 EMI Music을 £4.2B에 인수했다. 진입 멀티플은 EBITDA 대비 21배 — 음악 산업 평균의 두 배. 인수 부채 £2.6B는 Citigroup의 단기 브리지론이었으며, GFC가 터지면서 영구 부채로 리파이낸스되지 못했다. 코스트컷, 아티스트 계약 재협상, 디지털 전환을 동시에 시도했지만 Radiohead가 'In Rainbows'를 자율가격으로 출시하며 떠났고 Paul McCartney와 Robbie Williams도 이탈. CD가 사라지고 스트리밍이 아직 미미했던 그 사이의 1-2년이 EMI의 P&L을 가루로 만들었다. 2011년 Citi가 debt-for-equity swap으로 통제권을 가져갔고, Terra Firma는 £1.7B equity를 전손했다. Guy Hands의 Citi 사기소송도 두 차례 패소. 2012년 EMI는 Universal과 Sony에 분할 매각되며 130년 역사가 끝났다.",
  excerptEn:
    "In August 2007, Terra Firma's Guy Hands bought EMI Music for £4.2B at an entry multiple of 21x EBITDA — about twice the music-industry norm. The £2.6B of acquisition debt was a short-term Citigroup bridge that the GFC then froze, leaving it unable to refinance into permanent capital. Hands attempted cost cuts, aggressive contract renegotiation, and digital transformation simultaneously — but Radiohead released In Rainbows as pay-what-you-want and left, and Paul McCartney and Robbie Williams also walked. CDs were collapsing while streaming was not yet meaningful — the 1-2-year gap pulverized EMI's P&L. In 2011 Citi seized control via debt-for-equity swap; Terra Firma's £1.7B equity was wiped out. Hands lost his fraud suit against Citi twice. In 2012 EMI was broken up and sold to Universal and Sony — ending a 130-year history.",

  fund: {
    initials: "TF",
    bg: "bg-slate-800",
    label: "Terra Firma Capital Partners",
    labelEn: "Terra Firma Capital Partners",
  },
  portfolio: {
    initials: "EMI",
    bg: "bg-amber-600",
    label: "EMI Group plc",
    labelEn: "EMI Group plc",
  },

  lboMetrics: {
    fundName: "Terra Firma Capital Partners III",
    fundNameEn: "Terra Firma Capital Partners III",
    entryYear: 2007,
    exitYear: 2011,

    entryEvBn: 6.7,
    exitEvBn: 6.5,
    entryEbitdaBn: 0.32,
    exitEbitdaBn: 0.24,
    entryMultiple: 21.0,
    exitMultiple: 27.0,

    equityInvestedBn: 2.7,
    equityProceedsBn: 0.0,
    moic: 0.0,
    irrPct: -100.0,

    totalDebtBn: 4.15,
    debtToEbitda: 13.0,
    exitType: "bankruptcy",

    capitalStructure: [
      {
        tranche: "Citigroup 브리지론 (1순위)",
        trancheEn: "Citigroup Bridge Loan (1L)",
        amountBn: 2.5,
        rate: "LIBOR + 250bp (단기)",
        rateEn: "LIBOR + 250bp (short-term)",
        maturity: "1년 (영구 부채 리파이낸스 전제)",
        maturityEn: "1yr (intended take-out)",
        color: "bg-rose-500",
      },
      {
        tranche: "메자닌 패실리티",
        trancheEn: "Mezzanine Facility",
        amountBn: 1.0,
        rate: "LIBOR + 600bp",
        maturity: "8년",
        maturityEn: "8yr",
        color: "bg-violet-600",
      },
      {
        tranche: "Working Capital + Revolver",
        trancheEn: "Working Capital + Revolver",
        amountBn: 0.65,
        rate: "LIBOR + 225bp",
        maturity: "5년",
        maturityEn: "5yr",
        color: "bg-sky-500",
      },
      {
        tranche: "Terra Firma 펀드 III 출자",
        trancheEn: "Terra Firma Fund III Equity",
        amountBn: 1.7,
        rate: "지분",
        rateEn: "Equity",
        maturity: "장기 보유",
        maturityEn: "long-term",
        color: "bg-emerald-500",
      },
      {
        tranche: "공동투자자(LP) 출자",
        trancheEn: "Co-Investor (LP) Equity",
        amountBn: 1.0,
        rate: "지분",
        rateEn: "Equity",
        maturity: "장기 보유",
        maturityEn: "long-term",
        color: "bg-indigo-600",
      },
    ],

    leverageJourney: [
      { year: 2007, debtEbitda: 13.0, ebitdaBn: 0.32, label: "Terra Firma 진입", labelEn: "Terra Firma entry" },
      { year: 2008, debtEbitda: 15.0, ebitdaBn: 0.27, label: "GFC + CD 매출 붕괴", labelEn: "GFC + CD collapse" },
      { year: 2009, debtEbitda: 19.0, ebitdaBn: 0.21, label: "코베넌트 위반 임박", labelEn: "Covenant breach near" },
      { year: 2010, debtEbitda: 25.0, ebitdaBn: 0.165, label: "Terra Firma 추가 출자", labelEn: "Terra Firma cash injection" },
      { year: 2011, debtEbitda: 27.0, ebitdaBn: 0.15, label: "Citi 통제권 인수 (debt-for-equity)", labelEn: "Citi takes over (debt-for-equity)" },
      { year: 2012, debtEbitda: 27.0, ebitdaBn: 0.16, label: "Universal/Sony 분할 매각", labelEn: "Sold to Universal/Sony" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: -0.7,
      fromMultipleExpansion: 0.1,
      fromDebtPaydown: -0.4,
      total: -1.0,
    },

    investmentThesis: [
      {
        driver: "operations",
        icon: "✂️",
        titleKo: "공격적 코스트컷 + 아티스트 계약 재협상",
        titleEn: "Aggressive Cost Cuts + Artist Contract Renegotiation",
        bodyKo:
          "EMI의 비용구조는 음악 업계 평균 대비 ~30% 비효율이라고 Hands는 진단. 2,000명 감원 + 비효율 마케팅 예산 삭감 + 아티스트 어드밴스(선급금) 재협상 계획. 그러나 아티스트들에게는 'PE가 음악을 모르고 돈만 따진다'는 신호로 받아들여졌다.",
        bodyEn:
          "Hands diagnosed EMI as ~30% less efficient than industry norms. Plan: 2,000 job cuts + slashed marketing budgets + renegotiated artist advances. Artists interpreted it as 'a PE firm that doesn't understand music and only cares about money.'",
        isPrimary: true,
      },
      {
        driver: "sector",
        icon: "💿",
        titleKo: "음악 산업 디지털 전환을 PE가 이끌 수 있다는 베팅",
        titleEn: "Belief That PE Could Steer Music's Digital Transition",
        bodyKo:
          "Hands는 'CD가 사라져도 음악 자체는 사라지지 않으며, 산업 구조를 디지털 친화적으로 재설계하면 마진은 회복된다'고 봤다. 그러나 2007-09 시점 스트리밍은 아직 미미했고 iTunes 단가는 너무 낮아 매출 갭이 메워지지 않았다.",
        bodyEn:
          "Hands believed 'CDs may die but music doesn't — restructure the industry for digital and margins return.' But in 2007-09 streaming was still negligible and iTunes pricing was too low to fill the revenue gap.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "🏦",
        titleKo: "Citi 브리지론에 대한 영구 부채 리파이낸스 가정",
        titleEn: "Bet on Refinancing the Citi Bridge into Permanent Debt",
        bodyKo:
          "Citi가 제공한 £2.5B 브리지론은 단기성. Terra Firma는 12-18개월 내에 고수익 본드·TLB로 take-out할 계획이었지만 GFC가 터지면서 LevFin 시장이 얼어붙어 영구 부채로 전환 불가. 사실상 인수 구조의 최약한 고리.",
        bodyEn:
          "Citi's £2.5B bridge was short-term. Terra Firma planned to take it out via HY bonds or TLB within 12-18 months, but the GFC froze LevFin markets and conversion to permanent debt became impossible. Effectively the weakest link in the structure.",
        isPrimary: false,
      },
      {
        driver: "multiple",
        icon: "📉",
        titleKo: "21x EBITDA 진입 — 사이클 정점 미스",
        titleEn: "21x EBITDA Entry — Missing the Cycle Top",
        bodyKo:
          "음악 산업 적정 EBITDA 멀티플은 8-10x. Terra Firma는 EMI에 21x를 지불 — 사실상 '미래 EBITDA가 2배 이상 늘어난다'는 강한 가정 없이는 정당화 불가. 산업이 오히려 축소되며 multiple compression + EBITDA 하락이 동시 발생.",
        bodyEn:
          "Reasonable music-industry EBITDA multiples sat at 8-10x. Terra Firma paid 21x — only justifiable with a strong assumption that EBITDA would more than double. Instead the industry shrank, hitting both multiple compression and EBITDA decline simultaneously.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2007.05",
        eventKo: "Terra Firma의 £4.2B EMI 인수 제안 — Cerberus·One Equity 경쟁",
        eventEn: "Terra Firma's £4.2B EMI bid — competing with Cerberus and One Equity",
        type: "entry",
      },
      {
        year: "2007.08",
        eventKo: "딜 클로징 — Citi가 £2.5B 브리지론 단독 인수",
        eventEn: "Deal closes — Citi sole underwriter of £2.5B bridge",
        type: "entry",
      },
      {
        year: "2007.10",
        eventKo: "Radiohead 'In Rainbows' 자율가격 디지털 발매 — EMI 이탈 신호",
        eventEn: "Radiohead releases In Rainbows pay-what-you-want — signals EMI exit",
        type: "crisis",
      },
      {
        year: "2008.01",
        eventKo: "Hands가 2,000명 감원 + 마케팅 예산 삭감 발표 — 아티스트 반발",
        eventEn: "Hands announces 2,000 job cuts and marketing reductions — artists revolt",
        type: "crisis",
      },
      {
        year: "2008.09",
        eventKo: "리먼 쇼크 — Citi 브리지론 영구 부채 리파이낸스 불가",
        eventEn: "Lehman shock — Citi bridge cannot refinance into permanent debt",
        type: "crisis",
      },
      {
        year: "2010.06",
        eventKo: "Terra Firma가 Citi 상대 사기 소송 — 다른 입찰자 정보 왜곡 주장",
        eventEn: "Terra Firma sues Citi for fraud — alleges misrepresentation of other bidders",
        type: "crisis",
      },
      {
        year: "2011.02",
        eventKo: "Citi가 debt-for-equity swap으로 EMI 통제권 인수 — Terra Firma equity 전손",
        eventEn: "Citi seizes EMI via debt-for-equity swap — Terra Firma equity wiped out",
        type: "exit",
      },
      {
        year: "2012.09",
        eventKo: "Universal Music이 레코딩 사업 $1.9B 인수, Sony가 퍼블리싱 $2.2B 인수 — EMI 해체",
        eventEn: "Universal acquires recorded music for $1.9B, Sony acquires publishing for $2.2B — EMI broken up",
        type: "exit",
      },
    ],
  },

  background: [
    "EMI는 1931년 영국에서 창립된 130년 역사의 메이저 음반사다. 비틀스, 핑크 플로이드, 데이비드 보위, 콜드플레이, 라디오헤드, 폴 매카트니, 로비 윌리엄스 같은 영국 음악의 정수가 모두 EMI 카탈로그에 속했다. 2006년 시점 매출 약 £2.1B, EBITDA £200M 수준의 글로벌 4대 메이저 음반사 중 하나였다.",
    "Guy Hands는 영국 PE의 스타였다. Goldman Sachs를 거쳐 Nomura Principal Finance Group에서 펍 체인 LBO 등으로 명성을 쌓았고, 2002년 자신의 펀드 Terra Firma Capital Partners를 독립적으로 설립했다. 강한 직관, 운영 개입, 큰 베팅이 그의 시그니처였다. 2007년 시점 Fund III는 약 £5B를 모금한 영국 최대 PE 펀드 중 하나였다.",
    "EMI는 2006년부터 사실상 매물이었다. CD 매출 붕괴와 디지털 전환이 동시에 진행되며 P&L이 흔들렸고, 워너뮤직과의 합병 시도도 EU 반독점 이슈로 무산됐다. 2007년 5월 Terra Firma가 주당 265p, EV £4.2B의 공식 제안을 발표 — 이는 음악 산업 평균을 한참 웃도는 21x EBITDA 멀티플이었다.",
    "딜 구조는 Citigroup 단독 어레인지로 £2.5B 브리지론 + £1.0B 메자닌 + £2.7B 에쿼티(Terra Firma £1.7B + 공동투자자 £1.0B). 핵심 가정은 12-18개월 내 브리지를 고수익 본드와 TLB로 take-out한다는 것이었다. 그러나 클로징 한 달 후인 2007년 8월부터 LevFin 시장이 얼어붙기 시작했고, 9월 BNP Paribas의 머니마켓 펀드 동결, 2008년 3월 Bear Stearns 붕괴를 거치며 영구 부채 발행 창구가 완전히 닫혔다.",
  ],
  backgroundEn: [
    "EMI was a 130-year-old major label founded in Britain in 1931. The Beatles, Pink Floyd, David Bowie, Coldplay, Radiohead, Paul McCartney, Robbie Williams — the essence of British music sat in EMI's catalog. By 2006 it generated about £2.1B in revenue and £200M EBITDA — one of the world's four major labels.",
    "Guy Hands was a star of British PE. After Goldman Sachs and Nomura Principal Finance Group (where he made his name on UK pub-chain LBOs), he founded Terra Firma Capital Partners independently in 2002. Strong instincts, hands-on operating involvement, big bets — his signature. By 2007 Fund III had raised about £5B, among the largest UK PE funds.",
    "EMI had effectively been for sale since 2006. CD collapse and digital transition battered P&L simultaneously; a Warner Music merger attempt was blocked on EU antitrust grounds. In May 2007 Terra Firma's formal offer at 265p/share and £4.2B EV translated to a 21x EBITDA multiple — well above music-industry norms.",
    "Citigroup sole-arranged the structure: £2.5B bridge + £1.0B mezzanine + £2.7B equity (Terra Firma £1.7B + co-investors £1.0B). The pivotal assumption was that the bridge would be taken out within 12-18 months via HY bonds and TLB. But starting a month after close — August 2007 — LevFin markets seized up. BNP Paribas' money-market fund halt (Sept 2007) and Bear Stearns' collapse (March 2008) closed the permanent-debt window entirely.",
  ],

  executiveSummary: [
    "Terra Firma의 Guy Hands가 2007년 8월 EMI를 £4.2B(21x EBITDA)에 인수 — 음악 산업 평균의 2배 멀티플.",
    "£2.5B Citi 브리지론은 영구 부채 take-out 가정. 그러나 GFC로 LevFin 시장 동결.",
    "코스트컷 + 아티스트 계약 재협상으로 Radiohead, Paul McCartney, Robbie Williams 등 핵심 자산 이탈.",
    "산업 타이밍 미스 — CD 붕괴는 가속, 스트리밍은 아직 미미한 1-2년 갭.",
    "2010년 Hands가 Citi 상대 사기 소송 — 다른 입찰자 정보 왜곡 주장. 2회 모두 패소.",
    "2011년 Citi가 debt-for-equity swap으로 통제권 인수 → Terra Firma £1.7B equity 전손, Fund III 사실상 와이프아웃.",
  ],
  executiveSummaryEn: [
    "Terra Firma's Guy Hands bought EMI for £4.2B (21x EBITDA) in August 2007 — about 2x the industry norm.",
    "The £2.5B Citi bridge depended on permanent-debt take-out. The GFC froze LevFin markets instead.",
    "Cost cuts and contract renegotiations drove Radiohead, McCartney, and Robbie Williams away.",
    "Industry timing miss — CD collapse accelerated while streaming was still negligible. A 1-2-year gap.",
    "In 2010 Hands sued Citi for fraud (alleging misrepresentation of other bidders). Lost twice.",
    "In Feb 2011 Citi took control via debt-for-equity swap — Terra Firma's £1.7B equity wiped out, Fund III effectively destroyed.",
  ],

  companyOverview: {
    body: "EMI는 두 개의 사업부로 구성됐다 — 레코딩 뮤직(매출 ~75%, 마진 낮음, 변동성 큼)과 뮤직 퍼블리싱(매출 ~25%, 마진 높음, 안정적). Terra Firma 인수 시점에는 레코딩 매출이 CD 붕괴로 빠르게 줄고 있었지만, 퍼블리싱 카탈로그(작곡 저작권)는 안정적 캐시플로우를 제공했다. 사후 분할 매각에서 Sony가 사들인 것이 바로 이 퍼블리싱 사업이었다.",
    bodyEn: "EMI ran two segments — recorded music (~75% of revenue, low margin, high volatility) and music publishing (~25% of revenue, high margin, stable). When Terra Firma acquired it, recorded-music revenue was eroding fast with the CD collapse, while the publishing catalog (songwriting rights) provided steady cash flow. That publishing arm was what Sony bought in the eventual break-up.",
    metrics: [
      { label: "사업부", labelEn: "Segments", value: "2개", sub: "레코딩 + 퍼블리싱" },
      { label: "주요 아티스트", labelEn: "Key Artists", value: "Beatles, Radiohead 등" },
      { label: "FY2006 매출", labelEn: "FY2006 Revenue", value: "£2.08B" },
      { label: "FY2006 EBITDA", labelEn: "FY2006 EBITDA", value: "£200M", sub: "~9.6% 마진" },
      { label: "글로벌 시장점유율", labelEn: "Global Market Share", value: "~13%", sub: "Big 4 중 4위" },
      { label: "Entry EV", labelEn: "Entry EV", value: "£4.2B (~$6.7B)", sub: "21× EBITDA" },
    ],
    financials: [
      { year: "FY2006", ebitdaBn: 0.20, revenueBn: 2.08, ebitdaMarginPct: 9.6, note: "LBO 직전 회계연도", noteEn: "Pre-LBO FY" },
      { year: "FY2007", ebitdaBn: 0.32, revenueBn: 1.75, ebitdaMarginPct: 18.3, note: "LBO 진입 (조정 EBITDA)", noteEn: "LBO entry (adj. EBITDA)" },
      { year: "FY2008", ebitdaBn: 0.27, revenueBn: 1.65, ebitdaMarginPct: 16.4, note: "코스트컷 시작 + CD 매출 하락", noteEn: "Cost cuts begin + CD revenue falling" },
      { year: "FY2009", ebitdaBn: 0.21, revenueBn: 1.45, ebitdaMarginPct: 14.5, note: "Radiohead·McCartney 이탈", noteEn: "Radiohead, McCartney exit" },
      { year: "FY2010", ebitdaBn: 0.165, revenueBn: 1.34, ebitdaMarginPct: 12.3, note: "코베넌트 위반 임박", noteEn: "Covenant breach near" },
      { year: "FY2011", ebitdaBn: 0.15, revenueBn: 1.30, ebitdaMarginPct: 11.5, note: "Citi 통제권 인수", noteEn: "Citi seizes control" },
    ],
    financialsNote: "단위: £B | 출처: Maltby Capital 연간보고서, Terra Firma 투자자 서신, Citi 공시",
    financialsNoteEn: "Units: £B | Source: Maltby Capital annual reports, Terra Firma investor letters, Citi disclosures",
  },

  postDealAssessment: {
    body: "EMI 딜은 LBO 역사상 가장 깔끔한 'industry timing 실패' 케이스다. 동시에 세 가지가 잘못 정렬됐다 — 첫째, 인수 가격(21x EBITDA)이 음악 산업 적정선의 두 배. 둘째, 자본구조의 핵심이 단기 브리지론이었는데 GFC가 영구 부채 시장을 닫음. 셋째, 산업 자체가 'CD는 끝났지만 스트리밍은 아직 도착하지 않은' 가장 위험한 전환 구간에 있었다. Guy Hands는 강하게 운영 개입했지만 — 사실 너무 강하게 개입한 것이 Radiohead와 McCartney를 떠나게 만들었다. Citi 사기소송은 두 차례 모두 패소했고, Hands는 세제 이유로 영국에서 건지 섬으로 거주지를 옮긴 후 다시는 PE 일선에 돌아오지 못했다. Terra Firma Fund III의 LP들은 사실상 전손을 기록했다.",
    bodyEn: "EMI is the cleanest industry-timing failure in LBO history. Three things misaligned simultaneously — first, the 21x EBITDA entry was twice the industry norm. Second, the structure depended on a short-term bridge but the GFC closed the permanent-debt market. Third, the industry was in its most dangerous transition window — 'CDs are dying but streaming hasn't arrived.' Guy Hands intervened operationally aggressively — too aggressively, in fact, which pushed Radiohead and McCartney out the door. He lost the Citi fraud case twice, moved from the U.K. to Guernsey for tax reasons, and never returned to PE's front line. Fund III's LPs took an effective total loss.",
    overallVerdict: "산업 타이밍 + 가격 + 자본구조 트리플 미스 — LBO 역사상 최악의 펀드 단위 손실 중 하나",
    overallVerdictEn: "Industry timing + price + capital structure triple-miss — one of the worst fund-level losses in LBO history",
    positives: [
      "음악 카탈로그 자산(특히 퍼블리싱)의 장기적 가치 자체는 옳았음 — 2012 Sony가 $2.2B에 매입.",
      "디지털 전환의 필요성을 인식한 점은 시기적으로 정확 — 단지 실행 타이밍이 1-2년 빨랐을 뿐.",
      "Hands가 자기 재산 일부를 Fund III 손실 완화에 사용 — LP에 대한 윤리적 책임 표현.",
      "PE 업계 전반에 '산업 사이클 타이밍의 위험성'을 각인시킨 사회적 학습 효과.",
    ],
    positivesEn: [
      "The long-term thesis on music catalog assets — especially publishing — was correct (Sony bought it for $2.2B in 2012).",
      "Recognizing the need for digital transition was directionally right — execution was simply 1-2 years too early.",
      "Hands committed personal capital to soften Fund III losses — an ethical signal to LPs.",
      "Reinforced 'industry cycle timing risk' across the PE industry — broader learning.",
    ],
    risks: [
      "Entry 21x EBITDA는 어떤 가정으로도 정당화 어려움 — 사이클 정점 LBO의 정의.",
      "단기 브리지론에 인수 구조 의존 — GFC가 아니어도 high risk.",
      "음악처럼 talent-heavy 산업에서 PE 스타일 코스트컷이 자산 가치 자체를 파괴할 수 있다는 점 underestimate.",
      "Citi 소송 전략 — 평판 손상 + 패소 시 추가 손실 + 다른 banking 관계까지 악영향.",
    ],
    risksEn: [
      "Entry at 21x EBITDA was indefensible under any plausible assumption — definitionally a cycle-top LBO.",
      "Depending on a short-term bridge for the structure was high-risk even without the GFC.",
      "Underestimated that PE-style cost cuts can destroy asset value itself in talent-heavy industries like music.",
      "Suing Citi — reputational damage + further loss on defeat + spillover into other banking relationships.",
    ],
    editorNote: "EMI는 모든 LBO 케이스북에 등장하는 산업 타이밍 실패의 정수다. Guy Hands는 음악 산업이 어디로 가는지에 대한 macro 판단은 정확했다 — 그러나 그 변화가 실제 P&L에 반영되기 전 1-2년의 '죽음의 계곡'을 LBO 자본구조로 버틸 수 없다는 점을 미처 보지 못했다. PE 실무자에게 던지는 메시지는 명확하다 — 산업이 secular shift를 겪는 시점에 21x로 들어가지 말 것, 그리고 단기 브리지를 영구 부채의 take-out 가정으로 사용하지 말 것. 이 두 가지만 안 어겼어도 EMI는 단지 '평범하게 어려운 LBO'였을 것이다.",
    editorNoteEn: "EMI is the textbook industry-timing failure in every LBO case book. Hands' macro call on music was directionally correct — but he failed to see that an LBO capital structure cannot bridge the 1-2-year 'valley of death' between the old model dying and the new model arriving. The message to PE practitioners is clear: don't enter at 21x in the middle of a secular shift, and don't depend on a short-term bridge as your take-out assumption for permanent debt. Avoid those two and EMI would have merely been an ordinarily hard LBO.",
  },

  tombstone: {
    fundInitials: "TF",
    fundBg: "bg-slate-800",
    portfolioInitials: "EMI",
    portfolioBg: "bg-amber-600",
    fundName: "Terra Firma Capital Partners",
    portfolioName: "EMI Group plc",
    dealTitle: "Terra Firma × EMI — £4.2B 음악 산업 LBO 재앙",
    dealTitleEn: "Terra Firma × EMI — A £4.2B Music-Industry LBO Disaster",
    dealSize: "£4.2B EV (~$6.7B)",
    entryMultiple: "21× EBITDA",
    moic: "0×",
    irr: "-100%",
    holdYears: "3.5년",
    holdYearsEn: "3.5 yrs",
    closeDate: "2007년 8월 1일",
    closeDateEn: "Aug 1, 2007",
  },

  concepts: [
    {
      term: "Bridge Loan (브리지론)",
      termEn: "Bridge Loan",
      description: "LBO 클로징 시 단기 자금 조달용. 통상 12-18개월 내 고수익 본드·TLB로 take-out되며, 만약 시장이 닫혀 take-out 실패하면 인수자가 '브리지에 갇히는(stuck in the bridge)' 위험. EMI는 정확히 이 상황.",
      descriptionEn: "Short-term financing for LBO closing, typically taken out by HY bonds or TLB within 12-18 months. If markets close before take-out, the buyer gets 'stuck in the bridge' — exactly what happened at EMI.",
    },
    {
      term: "Multiple Compression (멀티플 컴프레션)",
      termEn: "Multiple Compression",
      description: "엑싯 시점 EV/EBITDA 멀티플이 진입 시점보다 낮은 현상. EMI는 21x 진입이었지만 음악 산업 자체가 축소되며 정상 멀티플로 회귀 — returns에 직격탄.",
      descriptionEn: "Exit EV/EBITDA below entry. EMI entered at 21x but the industry shrank, reverting to normal multiples — a direct hit to returns.",
    },
    {
      term: "Debt-for-Equity Swap",
      termEn: "Debt-for-Equity Swap",
      description: "디폴트 위기 시 채권자가 부채 일부를 면제하는 대신 회사 지분을 받는 거래. 기존 equity 보유자(스폰서)는 지분이 희석되거나 전손. Citi가 2011년 EMI에 적용 — Terra Firma equity 100% 소각.",
      descriptionEn: "In a near-default, creditors swap debt forgiveness for equity in the company. Existing equity holders (the sponsor) are diluted or wiped out. Citi applied it to EMI in 2011 — Terra Firma's equity went to zero.",
    },
    {
      term: "Hands v. Citigroup (한즈 대 시티 소송)",
      termEn: "Hands v. Citigroup",
      description: "2010년 Terra Firma가 Citi의 EMI 인수 자문이 다른 입찰자(Cerberus) 존재를 왜곡했다고 주장한 사기 소송. 1심·2심 모두 Hands 패소. PE 스폰서가 자문은행을 사기로 고소한 드문 케이스로 평판 비용이 컸다.",
      descriptionEn: "In 2010 Terra Firma sued Citi alleging that Citi misrepresented the existence of another bidder (Cerberus). Hands lost at trial and on retrial. A rare case of a PE sponsor suing its own advisor for fraud — the reputational cost was substantial.",
    },
    {
      term: "산업 사이클 타이밍 (Industry Cycle Timing)",
      termEn: "Industry Cycle Timing",
      description: "특정 산업이 secular shift(예: 아날로그→디지털) 한복판에 있을 때 LBO를 하면, 자본구조의 짧은 horizon이 산업 전환의 긴 horizon과 어긋난다. EMI는 이 mismatch의 정수.",
      descriptionEn: "Doing an LBO while an industry is mid-secular-shift (e.g. analog → digital) misaligns the short horizon of the capital structure with the long horizon of the transition. EMI distills this mismatch.",
    },
  ],

  faq: [
    {
      q: "Guy Hands는 왜 21x EBITDA라는 무리한 가격을 냈나요?",
      qEn: "Why did Guy Hands pay 21x EBITDA — such a stretched price?",
      a: "공식적으로는 'EMI EBITDA가 운영 개선으로 2-3년 내 두 배 가능'이라는 계산이었다. 실제로는 경쟁 입찰 압력(특히 Cerberus 존재 여부)이 작용했고, 이게 후일 Citi 소송의 핵심 쟁점이 됐다. Hands는 Citi가 Cerberus 입찰이 여전히 살아있다고 잘못 말해 자신을 압박했다고 주장 — 법원은 받아들이지 않았다.",
      aEn: "Officially, Hands argued EMI's EBITDA could double in 2-3 years via operating improvement. In practice, auction pressure — specifically whether Cerberus was still bidding — drove the price up. That became the central issue in the Citi lawsuit. Hands argued Citi misrepresented that Cerberus was still active to pressure him. The court rejected it.",
    },
    {
      q: "Radiohead의 In Rainbows가 그렇게 큰 충격이었나요?",
      qEn: "Was Radiohead's In Rainbows really that big a shock?",
      a: "직접 매출 손실보다는 시그널 효과가 컸다. 'EMI 같은 메이저 라벨 없이도 톱 아티스트가 직접 출시 가능하다'는 증명이었기 때문. 이후 Paul McCartney, Robbie Williams 같은 카탈로그 핵심 아티스트들의 계약 갱신 협상력이 급격히 약화. EMI의 catalog value 자체가 흔들렸다.",
      aEn: "The direct revenue hit was modest — the signal effect was huge. It proved that 'a top artist can release directly without a major label like EMI.' Afterward EMI's negotiating leverage with catalog mainstays like Paul McCartney and Robbie Williams collapsed. The value of the catalog itself was destabilized.",
    },
    {
      q: "Citi는 결국 이 딜에서 손해를 봤나요?",
      qEn: "Did Citi end up losing money on this deal?",
      a: "Citi도 큰 손실을 봤다. 2011년 debt-for-equity swap 시점 부채 가치를 일부 상각했고, 2012년 Universal과 Sony에 EMI 분할 매각으로 회수한 총액(£4.1B)은 원금 £2.5B + 누적이자보다는 낮았다. 다만 Terra Firma처럼 전손은 아니었다.",
      aEn: "Citi also took losses. It wrote down debt at the 2011 debt-for-equity swap, and the £4.1B recovered from the 2012 sale to Universal and Sony was below £2.5B principal + accrued interest. Painful, but not a total loss like Terra Firma's.",
    },
    {
      q: "스트리밍이 조금만 더 일찍 왔으면 EMI는 살았을까요?",
      qEn: "Would EMI have survived if streaming had arrived a bit earlier?",
      a: "Spotify는 2008년 출시했지만 글로벌 음악 매출에 실질 기여한 건 2013-14년 이후. Terra Firma가 2007년 들어가서 2011년 통제권을 잃었으니 정확히 '죽음의 계곡' 안에 있었다. 만약 deal이 2003년이나 2015년이었다면 결과가 달랐을 가능성이 크다. Industry timing의 잔혹함을 보여주는 대표 케이스.",
      aEn: "Spotify launched in 2008 but didn't move global music revenues meaningfully until 2013-14. Terra Firma entered in 2007 and lost control in 2011 — sitting precisely in the valley of death. Had the deal landed in 2003 or 2015, the outcome would likely have been very different. A striking case in the cruelty of industry timing.",
    },
    {
      q: "Guy Hands는 그 후 어떻게 됐나요?",
      qEn: "What happened to Guy Hands afterward?",
      a: "Hands는 영국 세제 이슈로 건지 섬으로 이주했고, Terra Firma는 신규 펀드 조성에 사실상 실패. 이후 인프라·재생에너지 분야에서 작은 규모 활동을 이어갔다. 2010년대 후반 회고록과 인터뷰에서 EMI 딜에 대한 후회를 공개적으로 언급했다.",
      aEn: "Hands relocated to Guernsey over U.K. tax issues, and Terra Firma effectively failed to raise new funds. He continued in smaller infrastructure and renewable-energy roles. In later 2010s memoirs and interviews, he publicly expressed regret about the EMI deal.",
    },
    {
      q: "EMI 딜에서 PE가 배워야 할 단 하나의 교훈은?",
      qEn: "The single lesson PE should take from EMI?",
      a: "'macro thesis가 맞아도 timing이 1-2년 빗나가면 LBO 자본구조로는 못 버틴다.' Hands의 음악 산업 디지털 전환에 대한 thesis는 결국 맞았다. 하지만 그 thesis가 P&L로 증명되는 시간이 LBO 부채 만기보다 길었다. 모든 산업 변환기에 PE가 반드시 자문하는 timing risk의 비싼 사례.",
      aEn: "'Even if your macro thesis is right, missing the timing by 1-2 years is enough to break an LBO capital structure.' Hands' thesis on music's digital transition was ultimately correct. But the time it took to show up in P&L exceeded the LBO debt maturity. An expensive reminder of the timing risk every PE firm must think about in any industry transition.",
    },
  ],

  sources: [
    { id: 1, text: "Terra Firma Capital Partners 투자자 서신, 2007~2011" },
    { id: 2, text: "Maltby Capital Limited 연간보고서, FY2008~FY2011" },
    { id: 3, text: "Hands v. Citigroup Inc., S.D.N.Y., 1심·2심 판결문 (2010~2013)" },
    { id: 4, text: "Financial Times — 'Terra Firma Loses Control of EMI to Citigroup' (2011.02)" },
    { id: 5, text: "Wall Street Journal — 'Universal Music to Buy EMI Recorded Music for $1.9 Billion' (2012.09)" },
    { id: 6, text: "The Economist — 'EMI: Terra Firma's Disaster' (2010)" },
    { id: 7, text: "Bloomberg — 'How Guy Hands' EMI Bet Went Wrong' (2011)" },
    { id: 8, text: "Guy Hands 회고록 'The Dealmaker: Lessons from a Life in Private Equity' (2021)" },
  ],

  seo: {
    title: "EMI 2007 LBO — Terra Firma Guy Hands의 펀드 전손 케이스 | Deal Story",
    description:
      "£4.2B Terra Firma의 EMI 인수 — 21x EBITDA 진입, Citi 브리지론, Radiohead 이탈, 디지털 전환 타이밍 미스, Citi 소송 패소, 펀드 III 전손까지. PE 산업 타이밍 실패의 교과서.",
    keywords: [
      "EMI LBO",
      "Terra Firma EMI",
      "Guy Hands",
      "음악 산업 LBO",
      "Music Industry LBO",
      "Bridge Loan 갇힘",
      "Stuck in Bridge",
      "Hands v Citigroup",
      "Citi 소송",
      "Radiohead In Rainbows",
      "2007 LBO 정점",
      "산업 타이밍 실패",
      "Industry Timing",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
