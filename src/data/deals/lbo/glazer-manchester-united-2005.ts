/**
 * Glazer Family × Manchester United LBO (2005–현재)
 * 스포츠 LBO 논쟁의 원점 — 타깃 회사 자체의 대차대조표에 부채를 얹은 적대적 인수
 *
 * 스폰서 중심 서사: 미국 NFL 구단주 가문이 잉글랜드 빅클럽을 LBO로 인수,
 * 팬·미디어·정치권의 격렬한 반대 속에서 20년간 배당·수수료로 £1B+ 추출.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "glazer-manchester-united-2005",
  category: "lbo",

  title: "Glazer 가문은 어떻게 맨체스터 유나이티드 자체 자금으로 클럽을 LBO 인수했나",
  titleEn: "How the Glazer Family Used Manchester United's Own Balance Sheet to LBO the Club",
  subtitle:
    "Malcolm Glazer 적대적 인수 · 클럽 담보 £525M 부채 · 20년간 £1B+ 추출 · Love United Hate Glazer · 2024 INEOS 부분 매각",
  subtitleEn:
    "Malcolm Glazer's Hostile Takeover · £525M of Debt on the Club · £1B+ Extracted Over 20 Years · Love United Hate Glazer · INEOS Partial Sale 2024",

  industry: "스포츠 / 프로축구",
  industryEn: "Sports / Professional Football",
  country: "영국",
  announcedAt: "2005-05-12",
  closedAt: "2005-06-30",
  announcedDisplay: "2005년 5월",
  closedDisplay: "2005년 6월",
  readingMinutes: 16,
  tags: [
    "Manchester United",
    "맨체스터 유나이티드",
    "Glazer",
    "Malcolm Glazer",
    "Avram Glazer",
    "Sports LBO",
    "Hostile Takeover",
    "PIK",
    "Love United Hate Glazer",
    "Sir Alex Ferguson",
    "INEOS",
    "Jim Ratcliffe",
    "NYSE IPO",
    "Family Office LBO",
  ],
  excerpt:
    "2005년 미국 NFL 탬파베이 버커니어스 구단주 Malcolm Glazer가 잉글랜드 프리미어리그의 상징 맨체스터 유나이티드를 £790M에 적대적 인수했다. 핵심 논점은 자본구조 — 자기 자본은 £270M에 불과했고, £525M의 부채는 맨유 클럽 자체의 자산과 미래 매출에 담보로 잡혔다. 영국 축구 팬들에게는 '클럽 자체 돈으로 클럽을 산' 충격이었고, 'Love United Hate Glazer' 운동, 훈련장 시위, F.C. United of Manchester 분리 클럽 창단까지 이어졌다. 20년간 Glazer 가문은 배당·수수료·매각 대금으로 £1B+를 추출했고, 2024년 INEOS의 Sir Jim Ratcliffe에게 27.7% 지분을 매각했다. 페이퍼 수익은 거대하나, PE 윤리·이해관계자 관리의 대표 실패 사례로 남았다.",
  excerptEn:
    "In 2005 American NFL Tampa Bay Buccaneers owner Malcolm Glazer hostile-bought English Premier League icon Manchester United for £790M. The core controversy: only £270M of family equity, while £525M of debt was secured against the club's own assets and future revenues. To English fans this was 'using the club's own money to buy the club' — sparking the Love United Hate Glazer movement, training-ground protests, and the breakaway F.C. United of Manchester. Over 20 years the Glazers extracted £1B+ via dividends, fees, and sale proceeds, culminating in a 27.7% stake sale to INEOS's Sir Jim Ratcliffe in 2024. The paper gain is enormous but it remains the canonical failure case in PE ethics and stakeholder management.",

  fund: {
    initials: "GZ",
    bg: "bg-red-700",
    label: "Glazer Family (Avram + Joel)",
    labelEn: "Glazer Family (Avram + Joel)",
  },
  portfolio: {
    initials: "MU",
    bg: "bg-rose-600",
    label: "Manchester United PLC",
    labelEn: "Manchester United PLC",
  },

  lboMetrics: {
    fundName: "Glazer Family Office (Red Football Limited)",
    fundNameEn: "Glazer Family Office (Red Football Limited)",
    entryYear: 2005,
    exitYear: undefined,

    entryEvBn: 1.4,
    exitEvBn: 6.5,
    entryEbitdaBn: 0.14,
    exitEbitdaBn: 0.16,
    entryMultiple: 10.0,
    exitMultiple: 40.6,

    equityInvestedBn: 0.49,
    equityProceedsBn: 2.5,
    moic: 5.0,
    irrPct: 9.0,

    totalDebtBn: 0.95,
    debtToEbitda: 6.8,
    exitType: "held",

    capitalStructure: [
      {
        tranche: "1순위 담보 시니어 텀론 (JPM 주관)",
        trancheEn: "1L Senior Secured Term Loan (JPM-led)",
        amountBn: 0.275,
        rate: "LIBOR + 250bp",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-sky-500",
      },
      {
        tranche: "2순위 담보 텀론",
        trancheEn: "2L Secured Term Loan",
        amountBn: 0.275,
        rate: "LIBOR + 575bp",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-indigo-600",
      },
      {
        tranche: "PIK 노트 (헤지펀드 보유)",
        trancheEn: "PIK Notes (Hedge Fund Holders)",
        amountBn: 0.275,
        rate: "14.25% PIK 누적",
        maturity: "10년",
        maturityEn: "10yr",
        color: "bg-rose-500",
      },
      {
        tranche: "Glazer 가문 출자",
        trancheEn: "Glazer Family Equity",
        amountBn: 0.49,
        rate: "지분",
        maturity: "장기 보유",
        maturityEn: "long-term",
        color: "bg-emerald-500",
      },
      {
        tranche: "2010 재융자 — 시니어 본드",
        trancheEn: "2010 Refinance — Senior Secured Bonds",
        amountBn: 0.9,
        rate: "8.375% 고정 (GBP) / 8.75% (USD)",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-violet-600",
      },
    ],

    leverageJourney: [
      { year: 2005, debtEbitda: 6.8, ebitdaBn: 0.14, label: "Glazer 적대적 인수", labelEn: "Glazer hostile takeover" },
      { year: 2007, debtEbitda: 6.2, ebitdaBn: 0.15 },
      { year: 2008, debtEbitda: 5.8, ebitdaBn: 0.155, label: "GFC + PIK 누적", labelEn: "GFC + PIK accrual" },
      { year: 2010, debtEbitda: 5.5, ebitdaBn: 0.18, label: "£500M 본드 재융자", labelEn: "£500M bond refi" },
      { year: 2012, debtEbitda: 4.2, ebitdaBn: 0.22, label: "NYSE IPO", labelEn: "NYSE IPO" },
      { year: 2015, debtEbitda: 3.5, ebitdaBn: 0.16 },
      { year: 2024, debtEbitda: 4.8, ebitdaBn: 0.16, label: "INEOS 27.7% 매각", labelEn: "INEOS 27.7% sale" },
    ],

    returnsDecomposition: {
      fromEbitdaGrowth: 0.4,
      fromMultipleExpansion: 4.3,
      fromDebtPaydown: 0.3,
      total: 5.0,
    },

    investmentThesis: [
      {
        driver: "multiple",
        icon: "📈",
        titleKo: "글로벌 빅클럽 자산가치 재평가",
        titleEn: "Re-Rating of Trophy Global Sports Assets",
        bodyKo:
          "맨유는 전 세계 팬 6억+의 슈퍼브랜드. 2005년 EV £790M은 EBITDA 10x였지만, 2020년대 들어 빅클럽 자체가 '대체불가 트로피 자산'으로 재평가받으며 EV/EBITDA 30-40x 멀티플을 갖게 되었다. Glazer 가족 returns의 ~85%가 여기서 나옴.",
        bodyEn:
          "Man United is a global super-brand with 600M+ fans. The 2005 EV of £790M was 10x EBITDA, but by the 2020s big clubs themselves were re-rated as irreplaceable trophy assets at 30-40x EV/EBITDA. ~85% of Glazer returns came from this rerating.",
        isPrimary: true,
      },
      {
        driver: "leverage",
        icon: "🏛️",
        titleKo: "타깃 자산 담보 LBO",
        titleEn: "Target-Asset-Secured LBO",
        bodyKo:
          "Glazer 가족은 £490M만 출자하고 £950M 부채를 클럽의 미래 매출과 자산에 담보로 잡았다. 사실상 '맨유가 자기 돈으로 자기를 산' 구조. 영국 축구계에선 전례 없던 financial engineering.",
        bodyEn:
          "The Glazers put in only £490M of equity while loading £950M of debt against the club's future revenues and assets. Effectively 'Man United bought itself with its own money' — a financial structure without precedent in English football.",
        isPrimary: true,
      },
      {
        driver: "operations",
        icon: "💰",
        titleKo: "스폰서십·미디어 매출 상업화",
        titleEn: "Sponsorship + Media Commercialization",
        bodyKo:
          "Glazer 시기 맨유는 글로벌 지역 스폰서십(Chevrolet 셔츠 딜 연 $80M 등)을 공격적으로 개척. 매출은 £170M(2005) → £628M(2019) 약 3.7배 성장.",
        bodyEn:
          "Under the Glazers, Man United aggressively pioneered regional global sponsorships (e.g. Chevrolet shirt deal at ~$80M p.a.). Revenue grew from £170M (2005) to £628M (2019) — about 3.7x.",
        isPrimary: false,
      },
      {
        driver: "leverage",
        icon: "💸",
        titleKo: "배당·수수료를 통한 캐시 추출",
        titleEn: "Cash Extraction via Dividends + Fees",
        bodyKo:
          "2012 NYSE IPO 후 매년 배당 + 컨설팅·매니지먼트 수수료 명목으로 가족 LLC가 클럽으로부터 캐시 추출. 20년간 누적 £1B+ 추정 — equity invested의 2배 이상을 이미 회수.",
        bodyEn:
          "Since the 2012 NYSE IPO, dividends plus consulting/management fees from a family LLC have channeled cash out of the club. Cumulative extraction is estimated at £1B+ over 20 years — already 2x the initial equity.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2003~",
        eventKo: "Malcolm Glazer가 맨유 PLC 주식 시장에서 단계적 매집 시작 (~3.17%)",
        eventEn: "Malcolm Glazer begins stake-building in Man United PLC (~3.17%)",
        type: "entry",
      },
      {
        year: "2005.05",
        eventKo: "£790M 적대적 인수 제안 발표 — 팬·이사회 반대",
        eventEn: "£790M hostile takeover bid — fans and board oppose",
        type: "entry",
      },
      {
        year: "2005.06",
        eventKo: "Glazer 75% 지분 확보 → 상장 폐지, Red Football Limited 설립",
        eventEn: "Glazers reach 75%, take club private under Red Football Limited",
        type: "entry",
      },
      {
        year: "2005.07",
        eventKo: "F.C. United of Manchester 분리 클럽 창단 — 팬 시위 절정",
        eventEn: "F.C. United of Manchester founded — fan protests peak",
        type: "crisis",
      },
      {
        year: "2010.01",
        eventKo: "£500M 본드 발행 재융자 — PIK 부채 일부 상환, 추가 배당 여력 확보",
        eventEn: "£500M bond refinance — repays some PIK debt, frees up dividend capacity",
        type: "value-creation",
      },
      {
        year: "2012.08",
        eventKo: "NYSE IPO ($14/주, $234M 조달) — Glazer 50%+ 보유 유지",
        eventEn: "NYSE IPO ($14/share, $234M raised) — Glazers retain 50%+",
        type: "value-creation",
      },
      {
        year: "2024.02",
        eventKo: "Sir Jim Ratcliffe / INEOS가 27.7% 지분 $1.65B에 인수, 축구 운영권 확보",
        eventEn: "Sir Jim Ratcliffe / INEOS buys 27.7% for $1.65B and takes over football ops",
        type: "exit",
      },
    ],
  },

  background: [
    "맨체스터 유나이티드는 1878년 창단된 잉글랜드 프리미어리그의 가장 상징적인 클럽이다. 1998년 런던증권거래소에 상장(MNU.L)된 이후에도 글로벌 팬덤·미디어 권리·스폰서십에서 압도적 1위를 유지했다. 2005년 시점 매출 £170M, EBITDA 약 £140M, 부채는 거의 없는 클린 발란스시트였다.",
    "Glazer 가문은 미국 플로리다 기반의 자산가 가족이다. 가장 Malcolm Glazer는 1995년 NFL 탬파베이 버커니어스를 인수하며 스포츠 자산 운영 경험을 쌓았다. 2003년부터 맨유 PLC 주식을 시장에서 조용히 매집 — 3.17%에서 시작해 28%까지 단계적으로 늘렸다. 영국 축구 팬들과 미디어는 점점 거세게 반대했고, 'Glazer Out'은 이미 그때부터 슬로건이었다.",
    "2005년 5월 12일 Malcolm의 아들 Avram Glazer가 공식 적대적 인수 제안을 발표했다. £790M(주당 300p) 가격이었고, JPMorgan이 어레인저로 £525M의 부채를 조달했다. 핵심 논쟁점은 이 부채가 Glazer 가족의 다른 자산이 아니라 맨유 클럽 자체의 미래 매출(중계권, 입장권, 스폰서십)에 담보로 잡혔다는 점이다.",
    "팬들은 격렬히 반대했다. Old Trafford와 Carrington 훈련장에서 시위가 벌어졌고, 일부 팬들은 클럽 자체에서 떨어져 나와 7부리그 F.C. United of Manchester를 창단했다. 'Love United Hate Glazer'는 단순한 슬로건을 넘어 영국 축구사상 가장 큰 ownership 반대 운동이 됐다. 하지만 2005년 6월 말 Glazer는 75% 지분을 확보하며 상장 폐지를 강행했다.",
  ],
  backgroundEn: [
    "Manchester United was founded in 1878 and remains the most iconic club in the English Premier League. After its 1998 LSE listing (MNU.L), it dominated globally in fan base, media rights, and sponsorships. In 2005 it had revenue of ~£170M, EBITDA of ~£140M, and a virtually debt-free balance sheet.",
    "The Glazer family is a Florida-based American business family. Patriarch Malcolm Glazer had bought the NFL's Tampa Bay Buccaneers in 1995, building sports-asset experience. From 2003 onward they quietly accumulated Man United PLC shares — starting at 3.17%, building to ~28%. British fans and media grew increasingly hostile; 'Glazer Out' was already the cry.",
    "On 12 May 2005, Malcolm's son Avram Glazer launched the formal hostile takeover at £790M (300p/share). JPMorgan arranged £525M of debt. The central controversy: that debt was secured not against the Glazers' other assets but against Man United's own future revenues — TV rights, gate receipts, sponsorships.",
    "Fans pushed back violently. Protests erupted at Old Trafford and the Carrington training ground. Some broke away entirely, founding the 7th-tier F.C. United of Manchester. 'Love United Hate Glazer' became the largest ownership-protest movement in English football history. But by late June 2005 the Glazers had crossed 75% and forced the club private.",
  ],

  executiveSummary: [
    "Glazer 가족이 2005년 6월 맨유를 £790M에 적대적 인수 — 자기 자본은 £270M에 불과.",
    "£525M 부채는 맨유 클럽 자체의 자산·미래 매출에 담보로 잡힘 — 영국 축구계 전례 없는 구조.",
    "Sir Alex Ferguson 감독 체제(1986-2013)가 13개 트로피로 financial controversy를 가렸음.",
    "20년간 배당·수수료로 가족이 £1B+ 추출 추정 — equity invested의 2배 이상 이미 회수.",
    "2010 £500M 본드 재융자, 2012 NYSE IPO ($234M 조달) — Glazer는 지배지분 유지.",
    "2024년 2월 INEOS의 Sir Jim Ratcliffe가 27.7%를 $1.65B에 매입 — 축구 운영권만 이전, 가문은 잔존.",
  ],
  executiveSummaryEn: [
    "Glazers acquired Man United for £790M in June 2005 — putting in only £270M of equity.",
    "£525M of debt was secured against the club's own assets and future revenues — unprecedented in English football.",
    "Sir Alex Ferguson's tenure (1986-2013) and 13 trophies masked the financial controversy.",
    "Over 20 years the family is estimated to have extracted £1B+ via dividends and fees — already 2x their equity.",
    "2010 £500M bond refinance, 2012 NYSE IPO ($234M raised); Glazers retained control.",
    "In Feb 2024 Sir Jim Ratcliffe's INEOS bought 27.7% for $1.65B — football ops transfer, family stays in.",
  ],

  companyOverview: {
    body: "맨체스터 유나이티드는 매출이 세 축으로 구성된다 — 매치데이(입장권), 방송권(EPL 중계권 분배), 상업(스폰서십·머천다이즈). Glazer 인수 시점에는 매치데이가 가장 큰 비중이었지만, 20년 후에는 상업이 가장 큰 축으로 전환됐다. 글로벌 팬덤이 6억+로 추정되는 슈퍼브랜드라는 점이 모든 가치평가의 출발점.",
    bodyEn: "Manchester United's revenue rests on three pillars — matchday (gate), broadcasting (EPL distribution), and commercial (sponsorships + merchandise). At the time of the Glazer acquisition, matchday was the largest pillar; 20 years later, commercial has overtaken it. Underpinning everything is a global super-brand with an estimated 600M+ fans worldwide.",
    metrics: [
      { label: "팬 수 (글로벌)", labelEn: "Global Fans", value: "~600M+" },
      { label: "FY2005 매출", labelEn: "FY2005 Revenue", value: "£170M" },
      { label: "FY2005 EBITDA", labelEn: "FY2005 EBITDA", value: "£140M", sub: "~82% 마진" },
      { label: "트로피 (Glazer 시기)", labelEn: "Trophies under Glazer", value: "13+", sub: "주로 Ferguson 시대" },
      { label: "FY2024 매출", labelEn: "FY2024 Revenue", value: "£662M" },
      { label: "Entry EV", labelEn: "Entry EV", value: "£790M (~$1.4B)", sub: "10× EBITDA" },
    ],
    financials: [
      { year: "FY2005", ebitdaBn: 0.14, revenueBn: 0.17, ebitdaMarginPct: 82.0, note: "Glazer 인수 직전", noteEn: "Pre-Glazer" },
      { year: "FY2009", ebitdaBn: 0.155, revenueBn: 0.279, ebitdaMarginPct: 55.6, note: "GFC + 부채부담", noteEn: "GFC + debt burden" },
      { year: "FY2012", ebitdaBn: 0.22, revenueBn: 0.32, ebitdaMarginPct: 68.8, note: "NYSE IPO 직전", noteEn: "Pre-NYSE IPO" },
      { year: "FY2016", ebitdaBn: 0.19, revenueBn: 0.515, ebitdaMarginPct: 36.9, note: "Champions League 복귀", noteEn: "UCL return" },
      { year: "FY2019", ebitdaBn: 0.185, revenueBn: 0.627, ebitdaMarginPct: 29.5 },
      { year: "FY2022", ebitdaBn: 0.082, revenueBn: 0.583, ebitdaMarginPct: 14.1, note: "Post-Ferguson 부진", noteEn: "Post-Ferguson slump" },
      { year: "FY2024", ebitdaBn: 0.16, revenueBn: 0.662, ebitdaMarginPct: 24.2, note: "INEOS 부분 인수 직전", noteEn: "Pre-INEOS partial" },
    ],
    financialsNote: "단위: £B | 출처: Manchester United 연간보고서, NYSE 20-F",
    financialsNoteEn: "Units: £B | Source: Manchester United annual reports, NYSE 20-F",
  },

  postDealAssessment: {
    body: "Glazer × 맨유 딜은 'PE/family office LBO가 시장 가치 측면에서는 성공해도 stakeholder 측면에서는 처참히 실패할 수 있다'는 가장 강력한 사례다. 가족이 처음 출자한 £270M은 현재 5배 이상의 페이퍼 밸류와 20년간 추출한 £1B+ 현금으로 환산된다 — IRR 자체는 결코 나쁜 숫자가 아니다. 그러나 그 returns의 ~85%는 가족이 직접 만든 운영 개선이 아니라, 글로벌 스포츠 자산이 '대체불가 트로피'로 재평가받은 시장 멀티플 확장에서 왔다. 동시에 클럽 자체는 2013년 Sir Alex Ferguson 은퇴 이후 챔피언스리그 부진, 감독 5명 교체, 인프라 노후화로 경쟁력이 추락했다. 2024년 INEOS의 부분 인수는 사실상 '돈은 가족이, 축구는 다른 사람이'라는 합의에 가깝다.",
    bodyEn: "Glazer × Man United is the most powerful case study of how a family-office LBO can succeed on market-value metrics while failing brutally on stakeholders. The family's initial £270M now translates to 5x+ paper value plus £1B+ of extracted cash over 20 years — the IRR is not a bad number. But ~85% of those returns came not from operational improvements the family delivered, but from a global re-rating of trophy sports assets. Meanwhile the club itself, post-Ferguson (2013), declined competitively: Champions League absences, five manager turnovers, aging infrastructure. The 2024 INEOS partial buy-in is essentially a settlement: 'the family keeps the money, someone else runs the football'.",
    overallVerdict: "재무 성공 + 이해관계자 실패 — 스포츠 LBO 윤리 논쟁의 원점",
    overallVerdictEn: "Financial success, stakeholder failure — the origin point of the sports-LBO ethics debate",
    positives: [
      "Family equity 기준 5x+ MOIC + 20년간 £1B+ 캐시 추출 — 절대 수치는 거대.",
      "맨유 매출 £170M → £660M으로 약 3.9배 — 글로벌 상업화 전략은 객관적으로 성공.",
      "Sir Alex Ferguson에게 자율성을 부여한 점 — 2005-2013년 트로피 폭발이 financial cover.",
      "트로피 스포츠 자산의 멀티플 확장을 미리 포착한 family office 통찰력.",
    ],
    positivesEn: [
      "5x+ MOIC on family equity plus £1B+ in cash extraction over 20 years — the absolute numbers are huge.",
      "Man United revenue grew from £170M to £660M (~3.9x) — global commercialization objectively worked.",
      "Granting Sir Alex Ferguson autonomy — the trophy run of 2005-2013 provided financial cover.",
      "Family-office foresight in identifying the multiple expansion of trophy sports assets early.",
    ],
    risks: [
      "Stakeholder 관리 완전 실패 — 20년간 'Glazer Out' 시위가 끊임없이 지속.",
      "Post-Ferguson(2013-) 클럽 경쟁력 추락 — 챔피언스리그 부진, 감독 5명 교체.",
      "캐시 추출에 우선하다 보니 인프라 투자가 후순위 — Old Trafford 노후화 비판.",
      "Sports LBO 모델 자체에 대한 정치권·UEFA 규제 압력 강화 — 미래 같은 구조 어려움.",
    ],
    risksEn: [
      "Total failure of stakeholder management — 20 years of unrelenting 'Glazer Out' protests.",
      "Post-Ferguson decline (2013-): Champions League absences, five manager turnovers.",
      "Prioritizing cash extraction deprioritized infrastructure — heavy criticism over Old Trafford decay.",
      "Mounting political and UEFA regulatory pressure on the sports-LBO model itself — harder to replicate.",
    ],
    editorNote: "Glazer × 맨유는 '재무 성공 = 딜 성공'이 결코 아니라는 사실의 가장 큰 증거다. IRR 9-10%, MOIC 5x — 수치만 보면 표준 PE 빈티지보다 낮지 않다. 하지만 20년이 지난 지금 영국 축구 팬에게 'Glazer는 좋은 owner였다'고 말하는 사람은 없다. 스포츠처럼 강한 이해관계자(팬·지역사회·정치)가 존재하는 자산을 LBO할 때 stakeholder management의 비용을 underestimate한 대가는 사회적 정당성 상실로 귀결된다. 그리고 결국 그것이 2024년 INEOS 부분 매각의 진짜 이유다.",
    editorNoteEn: "Glazer × Man United is the strongest evidence that 'financial success ≠ deal success.' IRR of 9-10% and 5x MOIC look fine next to standard PE vintages. But 20 years on, no English football fan will say the Glazers were good owners. When you LBO assets with powerful stakeholders (fans, communities, politicians), underestimating the cost of stakeholder management ends in loss of social license. And that, ultimately, is the real reason behind the 2024 INEOS partial sale.",
  },

  tombstone: {
    fundInitials: "GZ",
    fundBg: "bg-red-700",
    portfolioInitials: "MU",
    portfolioBg: "bg-rose-600",
    fundName: "Glazer Family Office",
    portfolioName: "Manchester United PLC",
    dealTitle: "Glazer × Manchester United — £790M 스포츠 LBO",
    dealSize: "£790M EV (~$1.4B)",
    entryMultiple: "10× EBITDA",
    moic: "~5×",
    irr: "~9%",
    holdYears: "20년+ (현재진행)",
    closeDate: "2005년 6월 30일",
  },

  concepts: [
    {
      term: "타깃 자산 담보 LBO (Target-Asset-Secured LBO)",
      termEn: "Target-Asset-Secured LBO",
      description: "인수 부채를 인수자 자신이 아닌 타깃 회사의 자산·미래 매출에 담보로 잡는 구조. 미국 PE에선 일반적이지만 영국 축구계에선 Glazer 딜이 사실상 첫 적용 사례.",
      descriptionEn: "Structure where acquisition debt is secured against the target's own assets and future revenue, not the acquirer's. Standard in U.S. PE, but the Glazer deal was effectively the first application in English football.",
    },
    {
      term: "PIK 노트 (Payment-in-Kind Note)",
      termEn: "PIK (Payment-in-Kind) Notes",
      description: "이자를 현금이 아닌 추가 채권 발행으로 지급하는 구조. 부채 원금이 시간이 지나며 자동 증가. Glazer 딜에선 14.25% PIK 누적 채권 £275M이 클럽 부담을 빠르게 키웠다.",
      descriptionEn: "Notes where interest is paid in additional debt rather than cash — principal grows automatically over time. The Glazer deal's £275M of PIK notes at 14.25% accreted rapidly, ballooning the club's obligations.",
    },
    {
      term: "Family Office LBO vs Institutional PE",
      termEn: "Family Office LBO vs Institutional PE",
      description: "기관 PE는 5-7년 펀드 라이프로 엑싯 의무. 가족 자본은 무기한 보유 가능. Glazer는 20년+ 보유 중이며, 이 holding power 덕분에 시장 멀티플 확장을 길게 향유했다.",
      descriptionEn: "Institutional PE faces 5-7-year fund-life exit pressure. Family capital can hold indefinitely. The Glazers have held 20+ years — that holding power let them ride the long arc of trophy-asset multiple expansion.",
    },
    {
      term: "Stakeholder Capital Cost",
      termEn: "Stakeholder Capital Cost",
      description: "재무적 WACC 외에 팬·지역사회·정치권 같은 비재무적 이해관계자 관리에 드는 비용. 스포츠·미디어·인프라 LBO에선 이 비용을 과소평가하면 사회적 정당성을 잃고 결국 강제 매각으로 이어진다.",
      descriptionEn: "Beyond financial WACC, the cost of managing non-financial stakeholders — fans, communities, politicians. In sports, media, and infrastructure LBOs, underestimating this cost erodes social license and eventually forces a sale.",
    },
    {
      term: "Football Club Multiple Expansion",
      termEn: "Football Club Multiple Expansion",
      description: "2000년대 초 빅클럽 EV/EBITDA는 10x 수준. 2020년대에는 글로벌 미디어권 증가, 중동·미국 자본 유입, 트로피 자산 부각으로 30-40x까지 확장. Glazer returns의 핵심 동력.",
      descriptionEn: "Big-club EV/EBITDA hovered around 10x in the early 2000s. By the 2020s, expanding global media rights, Gulf and U.S. capital inflows, and trophy-asset framing pushed it to 30-40x. The core engine of Glazer returns.",
    },
  ],

  faq: [
    {
      q: "Glazer 가족은 정말 자기 돈을 거의 안 썼나요?",
      qEn: "Did the Glazers really put in very little of their own money?",
      a: "초기 자본 £270M은 실제 가족 자금이었다. 다만 EV £790M 대비 비중이 34%에 불과하고, £525M 부채를 클럽 자체에 얹은 것이 영국 축구계에 충격을 줬다. '쉽게 말해 맨유가 자기 돈으로 자기를 산 셈'이라는 비판은 사실에 가깝다.",
      aEn: "The initial £270M was real family capital. But that was only 34% of the £790M EV, and the £525M of debt was loaded onto the club itself — shocking to English football. The criticism that 'Man United effectively bought itself' is substantially accurate.",
    },
    {
      q: "Sir Alex Ferguson 시대의 트로피들은 Glazer 덕분인가요?",
      qEn: "Were the Sir Alex Ferguson trophies thanks to the Glazers?",
      a: "Ferguson은 Glazer 인수 전인 1986년부터 감독이었고, 그의 축구 철학은 Glazer와 무관했다. Glazer의 기여는 '간섭하지 않은 것' — Ferguson에게 충분한 자율성을 줘 그가 13개 트로피를 추가할 수 있게 한 것이다. 동시에 그 트로피들은 financial controversy를 가려주는 정치적 cover이기도 했다.",
      aEn: "Ferguson had been manager since 1986, well before the Glazers — his football philosophy was independent of them. The Glazers' contribution was non-interference, giving Ferguson autonomy to deliver 13 more trophies. Those trophies also provided political cover that masked the financial controversy.",
    },
    {
      q: "왜 NYSE에 상장했나요? 런던이 아니라?",
      qEn: "Why did they list on NYSE instead of London?",
      a: "런던증권거래소는 dual-class share 구조를 허용하지 않아 Glazer 가족의 지배지분 유지가 어려웠다. NYSE는 dual-class를 허용 — Glazer는 10x voting power의 Class B 주식을 통해 50% 미만 경제적 지분으로도 75%+ 의결권을 유지. 의도적 선택이었다.",
      aEn: "The LSE doesn't permit dual-class share structures, making it hard for the Glazers to retain control. NYSE allows dual-class — the Glazers hold Class B shares with 10x voting power, retaining 75%+ voting power on under 50% economic ownership. A deliberate choice.",
    },
    {
      q: "INEOS 인수로 Glazer는 완전히 나간 건가요?",
      qEn: "Did the INEOS deal mean the Glazers fully exited?",
      a: "아니다. INEOS는 27.7%만 인수했고 축구 운영권을 가져갔지만, Glazer 가족은 여전히 최대주주(50%+ 의결권)다. 사실상 'football side는 INEOS, business side는 Glazer'로 양분된 구조. 향후 추가 매각 가능성이 시장 기대 중이다.",
      aEn: "No. INEOS acquired only 27.7% and football ops, while the Glazers remain majority shareholders with 50%+ voting power. It's effectively a split: 'football side to INEOS, business side to Glazer.' Markets expect further sales over time.",
    },
    {
      q: "Glazer 모델은 다른 클럽에도 적용됐나요?",
      qEn: "Has the Glazer model been applied to other clubs?",
      a: "Liverpool은 2007년 Tom Hicks·George Gillett가 비슷한 leveraged 인수를 했고 거의 클럽을 망쳤다 — 2010년 FSG에 강제 매각. UEFA Financial Fair Play와 영국 정부의 클럽 거버넌스 규제 강화로 이제 같은 구조는 거의 불가능. Glazer 딜은 'first and last' 케이스에 가깝다.",
      aEn: "Liverpool was subjected to a similar leveraged buyout by Tom Hicks and George Gillett in 2007 and was nearly wrecked — forced into a 2010 sale to FSG. Tighter UEFA Financial Fair Play and U.K. governance rules now make this structure nearly impossible. The Glazer deal is close to 'first and last.'",
    },
    {
      q: "PE 관점에서 이 딜의 진짜 교훈은?",
      qEn: "What's the real lesson for PE professionals?",
      a: "재무 모델만으로 LBO를 평가하는 시대는 끝났다는 것. 스포츠·헬스케어·인프라처럼 강한 이해관계자가 있는 자산에선 social license가 곧 cost of capital의 일부다. Glazer는 수익을 만들었지만 그 과정에서 영국 축구계의 신뢰를 잃었고, 결국 family office의 '무기한 보유' 옵션도 완전히는 사용하지 못한 채 부분 매각해야 했다.",
      aEn: "The era of evaluating LBOs by financial model alone is over. In assets with strong stakeholders — sports, healthcare, infrastructure — social license is part of the cost of capital. The Glazers generated returns but lost the trust of English football, and even their family office's 'hold indefinitely' optionality couldn't be fully exercised before they had to partially sell.",
    },
  ],

  sources: [
    { id: 1, text: "Manchester United PLC 공시자료 및 인수 관련 Scheme of Arrangement (2005)" },
    { id: 2, text: "Manchester United Ltd. 20-F, FY2013~FY2024, SEC EDGAR" },
    { id: 3, text: "The Guardian — 'Glazers Complete Manchester United Takeover' (2005.06)" },
    { id: 4, text: "Financial Times — 'How Manchester United Was Loaded with Debt' (2010)" },
    { id: 5, text: "BBC — 'F.C. United of Manchester: A Club Born of Protest' (2005)" },
    { id: 6, text: "Bloomberg — 'Sir Jim Ratcliffe to Acquire 27.7% of Manchester United' (2023.12)" },
    { id: 7, text: "Forbes — 'The 20-Year Glazer Cash Extraction at Manchester United' (2024)" },
    { id: 8, text: "Manchester United Supporters Trust (MUST) Annual Reports, 2005~2024" },
  ],

  seo: {
    title: "Glazer 맨체스터 유나이티드 2005 LBO — 스포츠 LBO 윤리 논쟁의 원점 | Deal Story",
    description:
      "£790M Glazer 가족의 맨유 적대적 인수 — 클럽 자체 자산 담보 £525M 부채, Love United Hate Glazer 운동, 20년간 £1B+ 추출, 2024년 INEOS 부분 매각까지. 스포츠 LBO 윤리 논쟁의 원점.",
    keywords: [
      "맨체스터 유나이티드 LBO",
      "Glazer Manchester United",
      "스포츠 LBO",
      "Hostile Takeover",
      "Love United Hate Glazer",
      "Sir Alex Ferguson",
      "Sir Jim Ratcliffe INEOS",
      "Family Office LBO",
      "PIK Note",
      "2005 LBO",
      "Stakeholder Management",
      "딜 스토리 LBO",
    ],
  },
};

export default deal;
