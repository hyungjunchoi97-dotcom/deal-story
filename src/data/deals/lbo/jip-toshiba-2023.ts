/**
 * Japan Industrial Partners × Toshiba LBO (2023~)
 * 일본 역사상 최대 LBO (¥2T / ~$14B) — 거버넌스 사가 끝의 국내 자본 구제 MBO
 *
 * 스폰서 앵글: JIP 컨소시엄 — 일본 카브아웃 전문 PE + 20+ 전략적 공동투자자(Orix, 중부전력, Rohm, Suzuki 등).
 * 비공개화를 통한 콘글로머릿 분할, METI 비공식 후원, 행동주의 헤지펀드 퇴장 — 일본식 구제 MBO의 결정판.
 */
import type { LboDeal } from "@/lib/lbo-deal-data";

const deal: LboDeal = {
  slug: "jip-toshiba-2023",
  category: "lbo",

  title: "JIP는 어떻게 ¥2조 도시바 MBO로 일본 거버넌스 사가를 끝내고 비공개 분할에 들어갔나",
  titleEn: "How JIP Closed Japan's Largest-Ever LBO at ¥2T to End the Toshiba Governance Saga and Begin a Private Breakup",
  subtitle:
    "일본 사상 최대 LBO · 130년 산업 콘글로머릿 비공개화 · 행동주의 엑싯 · 20+ 전략적 공동투자자",
  subtitleEn:
    "Japan's Largest-Ever LBO · Taking a 130-Year Industrial Conglomerate Private · Activist Exit · 20+ Strategic Co-Investors",

  industry: "종합 산업 / 인프라 / 반도체",
  industryEn: "Industrial Conglomerate / Infrastructure / Semiconductors",
  country: "일본",
  announcedAt: "2023-03-23",
  closedAt: "2023-12-20",
  announcedDisplay: "2023년 3월",
  closedDisplay: "2023년 12월",
  readingMinutes: 17,
  tags: [
    "JIP",
    "Japan Industrial Partners",
    "도시바",
    "Toshiba",
    "일본 LBO",
    "MBO",
    "거버넌스",
    "Effissimo",
    "행동주의",
    "콘글로머릿",
    "비공개화",
    "Orix",
    "METI",
    "도쿄증권거래소",
    "카브아웃",
  ],
  excerpt:
    "일본 산업 파트너스(JIP)가 이끄는 국내 자본 컨소시엄이 ¥2조(약 $14B)에 도시바를 인수한 일본 사상 최대 LBO. 6년에 걸친 거버넌스 사가 — 웨스팅하우스 손실, 회계 스캔들, 외국 행동주의 입성, METI 결탁 — 끝에 도시바를 도쿄증권거래소에서 74년 만에 상장폐지. 20여 곳의 전략적 공동투자자(Orix, 중부전력, Rohm, Suzuki 등)가 분할 후 인접 사업을 노리는 일본식 구제 MBO의 결정판이다.",
  excerptEn:
    "Led by Japan Industrial Partners (JIP), a domestic consortium took Toshiba private for ¥2T (~$14B) — the largest LBO in Japanese history. After a six-year governance saga (Westinghouse loss, accounting scandal, foreign activist entry, METI collusion), Toshiba delisted from the TSE after 74 years. Backed by 20+ strategic co-investors (Orix, Chubu Electric, Rohm, Suzuki) each eyeing adjacent assets, this is the definitive Japan-style rescue MBO.",

  fund: {
    initials: "JIP",
    bg: "bg-red-700",
    label: "Japan Industrial Partners 컨소시엄",
    labelEn: "Japan Industrial Partners Consortium",
  },
  portfolio: {
    initials: "東芝",
    bg: "bg-slate-800",
    label: "도시바 주식회사",
    labelEn: "Toshiba Corporation",
  },

  lboMetrics: {
    fundName: "Japan Industrial Partners + 20+ 전략적 공동투자자",
    fundNameEn: "Japan Industrial Partners + 20+ Strategic Co-Investors",
    entryYear: 2023,

    entryEvBn: 14.0,
    entryEbitdaBn: 1.6,
    entryMultiple: 8.75,

    equityInvestedBn: 7.0,

    totalDebtBn: 7.0,
    debtToEbitda: 4.4,
    exitType: "held",

    capitalStructure: [
      {
        tranche: "JIP 펀드 에쿼티",
        trancheEn: "JIP Fund Equity",
        amountBn: 2.0,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-rose-500",
      },
      {
        tranche: "전략적 공동투자자 에쿼티 (Orix · 중부전력 · Rohm 등)",
        trancheEn: "Strategic Co-Investor Equity (Orix · Chubu Electric · Rohm et al.)",
        amountBn: 5.0,
        rate: "에쿼티",
        maturity: "장기 보유",
        maturityEn: "Long-term hold",
        color: "bg-violet-600",
      },
      {
        tranche: "은행 신디케이트 시니어 텀론 (SMBC·미즈호 주관)",
        trancheEn: "Senior Bank Term Loan (SMBC/Mizuho-led)",
        amountBn: 5.0,
        rate: "TIBOR + 150~200bp",
        maturity: "5~7년",
        maturityEn: "5–7yr",
        color: "bg-indigo-600",
      },
      {
        tranche: "메자닌 및 보조 금융",
        trancheEn: "Mezzanine / Subordinated Facility",
        amountBn: 1.5,
        rate: "고정 6~7%",
        maturity: "7년",
        maturityEn: "7yr",
        color: "bg-sky-500",
      },
      {
        tranche: "회전 운영자금 한도",
        trancheEn: "Revolving Working Capital Facility",
        amountBn: 0.5,
        rate: "TIBOR + 100bp",
        maturity: "3년",
        maturityEn: "3yr",
        color: "bg-emerald-500",
      },
    ],

    leverageJourney: [
      { year: 2023, debtEbitda: 4.4, ebitdaBn: 1.6, label: "MBO 클로징", labelEn: "MBO close" },
      { year: 2024, debtEbitda: 4.6, ebitdaBn: 1.5, label: "구조조정 비용", labelEn: "Restructuring costs" },
      { year: 2025, debtEbitda: 4.2, ebitdaBn: 1.7 },
      { year: 2026, debtEbitda: 3.8, ebitdaBn: 1.9, label: "사업부 분할 진행", labelEn: "Carveouts underway" },
    ],

    investmentThesis: [
      {
        driver: "operations",
        icon: "🏭",
        titleKo: "비공개화 후 분할 — 공개시장 압박 제거",
        titleEn: "Take-Private + Breakup — Free of Public Market Pressure",
        bodyKo:
          "에너지·인프라·디바이스 등 6개 핵심 사업부를 단계적으로 분리. 분기 실적 압박 없이 R&D 합리화, 비핵심 자산 매각, 일부 자회사(Toshiba Tec·Plant Systems)는 별도 IPO 옵션도 살아 있다.",
        bodyEn:
          "Phased separation of six core segments — energy, infrastructure, devices. With no quarterly pressure, JIP can rationalize R&D, divest non-core assets, and preserve optional IPOs for high-quality subs like Toshiba Tec and Plant Systems.",
        isPrimary: true,
      },
      {
        driver: "sector",
        icon: "🇯🇵",
        titleKo: "일본 전략적 자본 결합",
        titleEn: "Domestic Strategic Capital Stack",
        bodyKo:
          "JIP 단독으로는 ¥2조를 감당 불가. Orix(금융), 중부전력(에너지), Rohm(반도체), Suzuki(모빌리티) 등 20여 곳이 각자 인접 사업 인수를 노리고 LP/공동투자자로 합류. METI 비공식 후원이 외국 PE 대비 결정적 차별 요소.",
        bodyEn:
          "JIP alone cannot underwrite ¥2T. Twenty-plus strategic LPs/co-investors — Orix (finance), Chubu Electric (energy), Rohm (semis), Suzuki (mobility) — each eye adjacent divisions. METI's tacit backing was the decisive edge over foreign PE bidders.",
        isPrimary: true,
      },
      {
        driver: "multiple",
        icon: "♻️",
        titleKo: "콘글로머릿 디스카운트 해소",
        titleEn: "Unlocking the Conglomerate Discount",
        bodyKo:
          "도시바는 6개 이질적 사업이 묶여 만년 SOTP 디스카운트 상태였다. Kioxia(NAND, 비연결) 지분 ~40%만 해도 시장가 $1.5B+. 분할·매각으로 합계가 부분의 합 이상 — 클래식 콘글로머릿 분해 플레이.",
        bodyEn:
          "Six disparate businesses left Toshiba persistently SOTP-discounted. Its ~40% Kioxia stake alone is worth $1.5B+. Phased breakup unlocks sum-of-the-parts — a classic conglomerate-busting play.",
        isPrimary: false,
      },
      {
        driver: "leverage",
        icon: "💴",
        titleKo: "낮은 일본식 레버리지 + 저금리",
        titleEn: "Modest Japanese Leverage + Low Rates",
        bodyKo:
          "엔트리 D/EBITDA 4.4x — 미국 메가LBO(6~7x) 대비 보수적. SMBC·미즈호의 TIBOR + 200bp 수준 조달, BOJ 저금리 기조로 이자비용 부담 미국 대비 절반 이하.",
        bodyEn:
          "Entry leverage of 4.4x is conservative versus US mega-LBOs (6–7x). SMBC/Mizuho funding at TIBOR + ~200bp, against BOJ's low-rate backdrop, keeps interest burden under half of US comparables.",
        isPrimary: false,
      },
    ],

    keyMilestones: [
      {
        year: "2017.03",
        eventKo: "웨스팅하우스 챕터11 — 도시바 ¥1.6조 손실, 자본증자 추진",
        eventEn: "Westinghouse Chapter 11 — Toshiba booking ¥1.6T loss, capital raise begins",
        type: "crisis",
      },
      {
        year: "2017.09",
        eventKo: "Effissimo·3D·Farallon 등 외국 행동주의 자본증자 참여",
        eventEn: "Foreign activists (Effissimo, 3D, Farallon) join via emergency rights issue",
        type: "crisis",
      },
      {
        year: "2021.06",
        eventKo: "외부 조사: 도시바-METI 결탁으로 행동주의 의결권 억압 — 일본 거버넌스 스캔들",
        eventEn: "Independent probe: Toshiba-METI collusion to suppress activist votes — landmark governance scandal",
        type: "crisis",
      },
      {
        year: "2022.04",
        eventKo: "5건의 인수 제안 접수 (CVC·KKR·Bain·Brookfield·Apollo)",
        eventEn: "Five takeover proposals received (CVC, KKR, Bain, Brookfield, Apollo)",
        type: "value-creation",
      },
      {
        year: "2023.03",
        eventKo: "JIP 컨소시엄 ¥4,620/주 텐더 오퍼 발표 — 이사회 권고",
        eventEn: "JIP consortium announces ¥4,620/share tender — board recommends",
        type: "entry",
      },
      {
        year: "2023.12.20",
        eventKo: "MBO 클로징, 도쿄증권거래소 상장폐지 (74년 만에)",
        eventEn: "MBO closes, Toshiba delists from TSE after 74 years",
        type: "entry",
      },
      {
        year: "2024~",
        eventKo: "사업부 분할 착수, Kioxia 지분 활용 논의, 비핵심 자산 매각",
        eventEn: "Phased segment breakup begins, Kioxia stake monetization debated, non-core divestitures",
        type: "value-creation",
      },
    ],
  },

  background: [
    "도시바는 1875년 다나카 히사시게가 창립한 '다나카 제작소'에서 출발해 1939년 도쿄전기와 합병하며 현재 사명을 갖춘 130년 기업이다. 원자력·반도체·인프라·가전을 아우르는 일본 산업의 상징이자 1949년부터 도쿄증권거래소에 상장된 핵심 종목이었다.",
    "도시바의 MBO 길은 2006년 웨스팅하우스 인수($5.4B 과지급)에서 시작된다. 2015년에는 7년간 ¥1,520억 분식회계가 드러났고, 2017년 웨스팅하우스 챕터11로 ¥1.6조 손실이 확정됐다. 자본금 음수를 막기 위해 메모리 사업(현 Kioxia)을 Bain 컨소시엄에 $18B에 매각하고, 동시에 ¥6,000억 비상 자본증자에서 Effissimo·3D·Farallon 등 외국 행동주의 헤지펀드를 주주로 받아들였다.",
    "이후 거버넌스 격돌이 6년간 이어졌다. 2020~21년 행동주의 주주들이 이사 선임에 개입했고, 2021년 6월 외부 조사보고서가 도시바 경영진과 경제산업성(METI)이 결탁해 행동주의 의결권을 억압한 사실을 폭로했다 — 일본 거버넌스 역사상 최대 스캔들이다. 도시바는 사실상 공개 회사로 운영이 불가능해졌고, 2022년 4월 5건의 인수 제안을 받기에 이른다.",
    "최종 승자는 외국 메가펀드(CVC·KKR·Bain·Brookfield·Apollo)가 아니라 일본 국내 PE인 Japan Industrial Partners(JIP)였다. JIP는 단독으로 감당 불가능한 ¥2조 딜을 Orix·중부전력·Rohm·Suzuki·이와사키전기 등 20여 곳의 사업회사 공동투자자로 메우는 '일본식 자본 패키지'로 METI 후원과 함께 승리. ¥4,620/주 텐더가 성공하며 2023년 12월 20일 도시바는 74년 만에 도쿄증권거래소에서 상장폐지됐다.",
  ],
  backgroundEn: [
    "Toshiba traces back to 1875, when Hisashige Tanaka founded the Tanaka Works; the modern company emerged from a 1939 merger with Tokyo Electric. For 130 years it has been a pillar of Japanese industry — nuclear, semis, infrastructure, appliances — and a TSE listing since 1949.",
    "Toshiba's MBO journey began with the 2006 Westinghouse acquisition (a $5.4B overpay). A seven-year, ¥152B accounting fraud surfaced in 2015. In 2017, Westinghouse's Chapter 11 crystallized a ¥1.6T loss. To avoid negative equity, Toshiba sold its memory business (now Kioxia) to a Bain-led consortium for $18B and ran an emergency ¥600B rights issue — which let foreign activists (Effissimo, 3D, Farallon) onto the cap table.",
    "Six years of governance fights followed. In 2020–21 activists challenged board elections; a June 2021 independent report exposed collusion between Toshiba management and METI to suppress activist votes — the biggest governance scandal in modern Japan. Toshiba was effectively ungovernable as a public company, and by April 2022 it had received five takeover proposals.",
    "The winner was not a foreign megafund (CVC, KKR, Bain, Brookfield, Apollo) but the domestic PE firm Japan Industrial Partners (JIP). JIP could not underwrite ¥2T alone — it built a uniquely Japanese capital package with 20+ strategic co-investors (Orix, Chubu Electric, Rohm, Suzuki, Iwasaki Electric) plus tacit METI backing, then won with a ¥4,620/share tender. Toshiba delisted from the TSE on December 20, 2023, ending a 74-year public chapter.",
  ],

  executiveSummary: [
    "JIP 주도 일본 국내 컨소시엄이 도시바를 ¥2조(~$14B)에 비공개화 — 일본 사상 최대 LBO.",
    "에쿼티 ¥1조 중 절대 다수가 Orix·중부전력·Rohm·Suzuki 등 20+ 전략적 공동투자자 자본.",
    "부채 ¥1조는 SMBC·미즈호 주관 일본 메가뱅크 신디케이트 — 미국식 TLB/CLO 구조 없이 관계 금융.",
    "외국 PE 5곳(CVC·KKR·Bain·Brookfield·Apollo)을 제치고 METI 묵시적 후원을 등에 업은 국내 자본이 승리.",
    "행동주의 헤지펀드(Effissimo 등)는 ¥4,620/주에 엑싯하며 누적 $2B+ 차익 실현.",
    "비공개 상태에서 6개 사업부 단계적 분할 + Kioxia 지분 ~40% 활용 + 자회사 별도 IPO 옵션 — 콘글로머릿 디스카운트 해소가 핵심 가치 창출 동력.",
  ],
  executiveSummaryEn: [
    "JIP-led domestic consortium took Toshiba private for ¥2T (~$14B) — the largest LBO in Japanese history.",
    "Of the ~¥1T equity, the vast majority came from 20+ strategic co-investors (Orix, Chubu Electric, Rohm, Suzuki).",
    "The ~¥1T debt was syndicated by SMBC and Mizuho-led Japanese megabanks — relationship lending, not US-style TLB/CLO.",
    "Five foreign PE bidders (CVC, KKR, Bain, Brookfield, Apollo) lost to domestic capital backed by tacit METI support.",
    "Activist hedge funds (Effissimo et al.) exited at ¥4,620/share, realizing $2B+ in cumulative gains.",
    "Value creation hinges on phased breakup of six segments, monetizing the ~40% Kioxia stake, and optional sub-IPOs — unlocking the conglomerate discount.",
  ],

  companyOverview: {
    body:
      "딜 시점 도시바는 매출 ¥3.4조(약 $25B), EBITDA ¥2,200억 안팎의 종합 산업 그룹이었다. 에너지 시스템(원자력·화력·재생), 인프라(전력·철도), 디바이스(파워반도체·HDD), Kioxia 지분(약 40%), 그리고 Toshiba Tec(POS·리테일)와 Plant Systems(엔지니어링)이 핵심 자회사. 전 세계 직원 약 12만 명, 매출 절반 이상이 일본 외 지역에서 발생한다.",
    bodyEn:
      "At the time of the deal Toshiba had revenue of ~¥3.4T (~$25B) and ~¥220B in EBITDA. Core segments: energy systems (nuclear, thermal, renewables), infrastructure (power, rail), devices (power semis, HDDs), a ~40% stake in Kioxia, and subsidiaries like Toshiba Tec (POS/retail) and Plant Systems (engineering). Roughly 120,000 employees worldwide, with more than half of revenue outside Japan.",
    metrics: [
      { label: "창립", labelEn: "Founded", value: "1875년" },
      { label: "직원 수", labelEn: "Employees", value: "~120,000" },
      { label: "FY2022 매출", labelEn: "FY2022 Revenue", value: "¥3.4T", sub: "약 $25B" },
      { label: "FY2022 EBITDA", labelEn: "FY2022 EBITDA", value: "¥220B", sub: "약 $1.6B" },
      { label: "Kioxia 지분", labelEn: "Kioxia Stake", value: "~40%", sub: "비연결" },
      { label: "Entry EV", labelEn: "Entry EV", value: "¥2T", sub: "8.75× EBITDA" },
    ],
    financials: [
      { year: "FY2019", ebitdaBn: 1.3, revenueBn: 25.0, ebitdaMarginPct: 5.2 },
      { year: "FY2020", ebitdaBn: 1.4, revenueBn: 23.5, ebitdaMarginPct: 6.0, note: "COVID", noteEn: "COVID" },
      { year: "FY2021", ebitdaBn: 1.7, revenueBn: 24.8, ebitdaMarginPct: 6.9, note: "회복", noteEn: "Recovery" },
      { year: "FY2022", ebitdaBn: 1.6, revenueBn: 25.0, ebitdaMarginPct: 6.4, note: "MBO 직전", noteEn: "Pre-MBO" },
      { year: "FY2023", ebitdaBn: 1.5, revenueBn: 24.0, ebitdaMarginPct: 6.3, note: "MBO 클로징", noteEn: "MBO close" },
    ],
    financialsNote: "단위: $B 환산 (¥1 = $0.0073 가정) | 출처: 도시바 연간보고서, JIP 공시",
    financialsNoteEn: "Units: $B (assumed ¥1 = $0.0073) | Source: Toshiba annual reports, JIP filings",
  },

  postDealAssessment: {
    body:
      "JIP-도시바 MBO는 아직 진행 중이지만, 일본 PE 산업의 한 시대를 가르는 딜로 평가된다. 외국 메가펀드가 일본 대표 산업기업을 비공개화하려면 사회적·정치적 장벽이 여전히 높다는 점을 확인시켰고, 동시에 행동주의 헤지펀드가 거버넌스 변화를 강제할 수 있다는 점도 입증했다. 콘글로머릿 디스카운트 해소와 비핵심 분할이 5~7년 내 IPO·매각으로 이어진다면 일본식 구제 MBO의 모범 사례가 될 것이다.",
    bodyEn:
      "The JIP-Toshiba MBO is still in progress, but already marks an inflection point for Japanese PE. It confirmed that taking an iconic Japanese industrial company private remains socially and politically hard for foreign mega-funds — and showed that activists can force governance change. If JIP unlocks the conglomerate discount and exits via segment IPOs/sales within 5–7 years, it will be the template for the Japan-style rescue MBO.",
    overallVerdict: "일본 거버넌스 사가의 종점 · 국내 자본 + METI 후원의 결정적 승리",
    overallVerdictEn: "Endpoint of Japan's governance saga — a decisive win for domestic capital plus METI backing",
    positives: [
      "행동주의 압력 → MBO 구제의 일본식 해법 — 모든 이해관계자에게 'face-saving' 출구 제공.",
      "20+ 전략적 공동투자자 구조 — 자본 조달과 분할 후 인접 사업 매수자를 동시 확보.",
      "엔트리 레버리지 4.4x로 보수적 — 일본 저금리·관계 금융 이점 극대화.",
      "Kioxia 지분과 우량 자회사 IPO 옵션 등 다중 회수 경로 보유.",
    ],
    positivesEn: [
      "A uniquely Japanese resolution to activist pressure — a face-saving exit for every stakeholder.",
      "20+ strategic co-investors lock in both capital and ready buyers for post-breakup carveouts.",
      "Conservative entry leverage (4.4x) maximizes Japan's low-rate, relationship-banking advantage.",
      "Multiple exit paths — Kioxia stake, sub-IPOs (Toshiba Tec, Plant Systems), and segment trade sales.",
    ],
    risks: [
      "20+ 공동투자자 거버넌스의 복잡성 — 분할 자산 배분에서 이해관계 충돌 가능.",
      "원자력·인프라 등 정치적으로 민감한 사업부의 매각 제약 — 가치 실현 속도가 느릴 수 있음.",
      "엔화 약세와 미국 금리 환경이 해외 매출·자금 조달에 미치는 영향 — 매크로 리스크.",
    ],
    risksEn: [
      "Governance complexity across 20+ co-investors — potential conflicts when carveouts are allocated.",
      "Politically sensitive segments (nuclear, infrastructure) face divestiture limits — value realization may be slow.",
      "Yen weakness and US rate cycles weigh on overseas revenue and refi conditions — material macro risk.",
    ],
    editorNote:
      "JIP-도시바는 '일본 PE의 성년식'이다. 130년 산업 콘글로머릿을 외국이 아닌 국내 자본이 비공개화한 사상 첫 사례이자, 행동주의·METI·국내 PE가 함께 만든 일본식 거버넌스 종결 모델. 5~7년 후 분할 회수 실적이 일본 PE 시장의 다음 사이클을 좌우할 것이다.",
    editorNoteEn:
      "JIP-Toshiba is the coming-of-age moment for Japanese PE — the first time domestic capital, not foreign, has taken a 130-year industrial conglomerate private, and a uniquely Japanese resolution co-authored by activists, METI, and domestic PE. The breakup outcomes over the next 5–7 years will set the tone for the next cycle of Japanese PE.",
  },

  tombstone: {
    fundInitials: "JIP",
    fundBg: "bg-red-700",
    portfolioInitials: "東芝",
    portfolioBg: "bg-slate-800",
    fundName: "Japan Industrial Partners 컨소시엄",
    portfolioName: "도시바 주식회사",
    dealTitle: "JIP × 도시바 — 일본 사상 최대 ¥2조 MBO",
    dealSize: "¥2T / ~$14B EV",
    entryMultiple: "8.75× EBITDA",
    holdYears: "진행 중",
    closeDate: "2023년 12월 20일",
  },

  concepts: [
    {
      term: "MBO (Management Buyout)",
      termEn: "MBO (Management Buyout)",
      description:
        "현 경영진이 PE와 손잡고 상장사를 비공개화하는 거래. 도시바는 이사회 권고와 함께 진행된 'recommended MBO' 케이스로, 적대적 인수와 구분된다.",
      descriptionEn:
        "A take-private led by incumbent management together with a PE sponsor. Toshiba's was a 'recommended MBO' endorsed by the board — distinct from a hostile takeover.",
    },
    {
      term: "전략적 공동투자자 (Strategic Co-Investor)",
      termEn: "Strategic Co-Investor",
      description:
        "재무적 LP가 아니라 사업 시너지를 노리고 PE 딜에 에쿼티로 합류하는 사업회사. 도시바 딜에서는 Orix·중부전력·Rohm·Suzuki 등이 분할 후 인접 사업 인수 옵션을 함께 가져갔다.",
      descriptionEn:
        "Operating companies — not financial LPs — that take equity in a PE deal for strategic synergies. In Toshiba, Orix, Chubu Electric, Rohm, and Suzuki bought in with options on adjacent post-breakup carveouts.",
    },
    {
      term: "텐더 오퍼 (Tender Offer)",
      termEn: "Tender Offer",
      description:
        "공개시장 매수가 아닌, 일정 가격으로 주주들에게 직접 매도를 권유하는 절차. 일본은 통상 2/3 이상 응모 조건 — JIP는 ¥4,620/주에서 통과.",
      descriptionEn:
        "A formal solicitation of shareholders to tender shares at a set price. In Japan a two-thirds threshold is typical — JIP cleared it at ¥4,620/share.",
    },
    {
      term: "콘글로머릿 디스카운트 (Conglomerate Discount)",
      termEn: "Conglomerate Discount",
      description:
        "여러 이질적 사업을 묶은 그룹의 시장가가 SOTP 합계보다 낮게 거래되는 현상. 도시바는 6개 사업부와 Kioxia 지분의 합 대비 시장가가 30% 이상 할인됐다는 분석.",
      descriptionEn:
        "When a multi-business group trades below the sum of its parts. Toshiba was estimated to trade at a 30%+ discount to SOTP across its six segments plus the Kioxia stake.",
    },
    {
      term: "METI (경제산업성)",
      termEn: "METI (Ministry of Economy, Trade and Industry)",
      description:
        "일본의 산업 정책 주관 부처. 도시바처럼 안보·원자력과 연관된 산업기업의 인수에는 사실상 묵시적 승인이 필요하며, 외국 PE가 일본 대표 산업기업을 인수하기 어려운 핵심 이유.",
      descriptionEn:
        "Japan's industrial-policy ministry. Acquisitions of security- or nuclear-linked companies like Toshiba require its tacit blessing — a key reason foreign PE struggles to buy iconic Japanese industrials.",
    },
  ],

  faq: [
    {
      q: "왜 외국 메가펀드가 아닌 국내 JIP가 이겼나요?",
      qEn: "Why did domestic JIP beat the foreign mega-funds?",
      a:
        "도시바는 원자력·방산 관련 사업을 보유해 METI의 사실상 승인이 필수였습니다. JIP 컨소시엄은 일본 대기업 20+곳을 공동투자자로 모아 'all-Japan' 패키지를 만들었고, 정부와 노조에 '안심'을 줄 수 있었습니다.",
      aEn:
        "Toshiba's nuclear and defense exposure made METI's tacit approval essential. JIP assembled an 'all-Japan' package of 20+ corporate co-investors that reassured the government and unions — something foreign mega-funds could not credibly offer.",
    },
    {
      q: "JIP는 어떻게 회수하나요?",
      qEn: "How does JIP plan to exit?",
      a:
        "비공개 상태에서 (1) 핵심 자회사 IPO (Toshiba Tec, Plant Systems 등), (2) 비핵심 사업부 전략적 매각 (공동투자자 우선 매수권), (3) Kioxia 지분 ~40% 시장 매각이 주요 회수 경로입니다.",
      aEn:
        "Under private ownership: (1) IPOs of premium subs like Toshiba Tec and Plant Systems, (2) strategic sales of non-core segments (with co-investor rights of first offer), and (3) eventually monetizing the ~40% Kioxia stake.",
    },
    {
      q: "행동주의 헤지펀드는 얼마를 벌었나요?",
      qEn: "How much did the activists make?",
      a:
        "Effissimo는 2017년 ¥2,628/주 자본증자에 참여해 ¥4,620/주에 엑싯 — 약 75% 차익에 7년 보유. 누적 차익은 $2B+로 추정. 3D·Farallon 등도 유사한 수익을 실현했습니다.",
      aEn:
        "Effissimo entered at ¥2,628/share in the 2017 rights issue and exited at ¥4,620 — ~75% gain over seven years, an estimated $2B+ cumulative profit. 3D and Farallon realized similar gains.",
    },
    {
      q: "엔트리 레버리지 4.4x는 너무 낮지 않나요?",
      qEn: "Isn't 4.4x entry leverage too low?",
      a:
        "일본 LBO는 미국 대비 보수적인 것이 표준입니다. 메가뱅크 관계 금융 의존, TLB/CLO 시장 부재, 분기 실적 부담 없는 비공개 후 분할 전략 — 모두 낮은 레버리지를 정당화합니다.",
      aEn:
        "Japanese LBOs are structurally more conservative than US peers. Reliance on megabank relationship lending, the absence of a TLB/CLO market, and the post-take-private breakup playbook all justify the lighter capital stack.",
    },
    {
      q: "왜 다른 일본 대기업도 이런 MBO를 안 하나요?",
      qEn: "Why don't other Japanese conglomerates do the same?",
      a:
        "트리거가 필요합니다 — 도시바는 6년간 누적된 회계스캔들·자본부족·행동주의 압박이 결합된 특수 사례. 다만 JIP의 성공이 다른 거버넌스 위기 기업(소니, 후지필름 등이 아닌 중견 콘글로머릿)들에 'JIP 솔루션'을 옵션으로 제공할 가능성은 높아졌습니다.",
      aEn:
        "It takes a trigger — Toshiba had six years of accumulated scandals, capital shortfalls, and activist pressure stacked together. JIP's success, however, makes the 'JIP solution' a viable option for other mid-cap Japanese conglomerates facing governance crises.",
    },
    {
      q: "이 딜이 일본 PE 시장에 갖는 의미는?",
      qEn: "What does this deal mean for the Japanese PE market?",
      a:
        "일본 PE 시장이 '소규모 카브아웃'에서 '메가LBO 가능 시장'으로 진화한 분기점입니다. 동시에 외국 메가펀드가 일본 대표 자산을 통째로 비공개화하기는 여전히 어렵다는 신호이기도 합니다.",
      aEn:
        "It marks Japan's transition from a small-carveout PE market to one capable of true mega-LBOs — while signalling that wholesale take-privates of iconic Japanese assets by foreign mega-funds remain off-limits.",
    },
  ],

  sources: [
    { id: 1, text: "Toshiba Corporation, JIP 텐더 오퍼 관련 임시 보고서 (2023.03.23)", url: "https://www.global.toshiba/" },
    { id: 2, text: "JIP 보도자료 — Toshiba MBO 클로징 (2023.12.20)" },
    { id: 3, text: "Toshiba 외부 조사위원회 보고서 (2021.06) — METI 결탁 의혹" },
    { id: 4, text: "Nikkei Asia, 'Inside Japan's biggest-ever LBO' 시리즈 (2023~2024)" },
    { id: 5, text: "Financial Times, 'Toshiba's six-year governance saga' (2023.03)" },
    { id: 6, text: "Reuters, 'Activists exit Toshiba with $2bn-plus gain' (2023.12)" },
    { id: 7, text: "도쿄증권거래소 상장폐지 공시 (2023.12.20)" },
  ],

  seo: {
    title: "JIP × 도시바 2023 MBO — 일본 사상 최대 LBO | Deal Story",
    description:
      "Japan Industrial Partners가 이끄는 국내 컨소시엄의 ¥2조 도시바 비공개화. 6년 거버넌스 사가, 20+ 전략적 공동투자자, METI 후원, 행동주의 엑싯까지 — 일본식 구제 MBO 풀 케이스 스터디.",
    keywords: [
      "JIP 도시바",
      "Japan Industrial Partners",
      "Toshiba MBO",
      "일본 LBO",
      "도시바 비공개화",
      "Effissimo",
      "도시바 거버넌스 스캔들",
      "METI",
      "콘글로머릿 디스카운트",
      "일본 PE",
    ],
  },
};

export default deal;
