/**
 * after-pax-americana.ts — "After Pax Americana" 시리즈 15편 스텁
 *
 * 시리즈 구조:
 *   Act I — Forces of Change (1~4)
 *   Act II — Theaters of Conflict (5~9)
 *   Act III — Shifting Alliances (10~13)
 *   Act IV — Capital After Hegemony (14~15)
 *
 * 각 챕터는 status: "coming-soon"으로 시작.
 * 발행 시 status: "published" + sections·references 채움.
 */

import type { NoteData } from "./notes";

// ── 공통 메타 ──────────────────────────────────────────────────────────────────
const SERIES_ID = "after-pax-americana" as const;
const PUBLISH_DATE = "2026-05-29"; // 시리즈 announce 시점 — 발행 시 개별 chapter 날짜로 덮어씀

// ── 스텁 헬퍼 ──────────────────────────────────────────────────────────────────
function stub(args: {
  order: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  thesis: string;
  thesisEn: string;
  readingMinutes?: number;
}): NoteData {
  return {
    slug: `after-pax-americana-${args.order}`,
    category: "macro",
    status: "coming-soon",
    series: SERIES_ID,
    seriesOrder: args.order,
    title: args.title,
    titleEn: args.titleEn,
    description: args.description,
    descriptionEn: args.descriptionEn,
    date: PUBLISH_DATE,
    readingMinutes: args.readingMinutes ?? 22,
    keyPoints: [args.thesis],
    keyPointsEn: [args.thesisEn],
    sections: [],
    references: [],
  };
}

// ══════════════════════════════════════════════════════════════════════════════
// ACT I — FORCES OF CHANGE (Chapters 1–4)
// ══════════════════════════════════════════════════════════════════════════════

const ch01_shale: NoteData = {
  slug: "after-pax-americana-1",
  category: "macro",
  status: "published",
  series: SERIES_ID,
  seriesOrder: 1,
  title: "셰일 전환 — 미국이 페르시아만에서 손을 떼는 산수",
  titleEn: "The Shale Pivot — Why America Walks Away from the Persian Gulf",
  description:
    "2008년 일 5.0백만 배럴이던 미국 원유 생산은 2024년 13.2백만, 2025년 7월 13.6백만 배럴로 정점을 찍었다. 페르시아만 수입 비중은 1973년 7%에서 2024년 7%로 돌아왔다 — 그러나 그 사이 미국은 순수출국이 됐다. 미국이 70년간 페르시아만 안보를 자임했던 단 하나의 이유가 사라졌다. 세계는 그것이 무엇을 의미하는지 아직 가격에 반영하지 않았다.",
  descriptionEn:
    "US crude output rose from 5.0 MM bpd in 2008 to 13.2 MM in 2024, peaking at 13.6 MM in July 2025. The US share of Persian Gulf oil imports returned to 7% in 2024 — the same level as 1973. But in between, America became a net exporter. The single reason it underwrote Gulf security for seventy years has dissolved. Markets have not yet priced what that means.",
  date: "2026-05-29",
  readingMinutes: 26,
  keyPoints: [
    "미국 원유 생산은 2008년 5.0MM bpd에서 2024년 13.2MM, 2025년 7월 13.6MM bpd로 정점을 찍었다 — 사우디·러시아를 동시에 추월한 세계 최대 생산국.",
    "페르시아만 원유 수입은 1973년 7% → 2024년 7%로 돌아왔지만 그 사이 미국은 순수출국이 됐다 — 같은 숫자, 정반대 의미.",
    "Permian 운영 단가는 $35–40, 사우디 재정 손익분기는 IMF 기준 $96 — 정부 운영비를 기름값에 의존하는 국가와, 사기업 수익률에 의존하는 국가의 비대칭.",
    "유럽 가스 시장에서 러시아 비중은 2021년 45%에서 2025년 12%로 떨어졌고 미국 LNG가 그 자리를 채웠다 — 셰일은 안보의 도구가 됐다.",
    "한국·일본의 중동 원유 의존도는 여전히 70%대 — 미군이 호르무즈를 자유 통과시키지 않는 첫날, 청구서는 동맹국에 먼저 도착한다.",
  ],
  keyPointsEn: [
    "US crude output rose from 5.0 MM bpd in 2008 to 13.2 MM in 2024, peaking at 13.6 MM in July 2025 — overtaking both Saudi Arabia and Russia.",
    "Persian Gulf imports returned to 7% in 2024, matching the 1973 level — but in between, America became a net exporter. Same number, opposite meaning.",
    "Permian wellhead breakeven $35–40; Saudi fiscal breakeven $96 (IMF). Asymmetry between a state that funds its government from oil prices and a private industry that funds shareholders.",
    "Russian gas in EU supply fell from 45% in 2021 to 12% in 2025; US LNG took the void. Shale has become an instrument of security policy.",
    "Korea and Japan still source ~70% of crude from the Gulf. The first day the US Navy stops free-passing Hormuz, the bill arrives at the allies' door — not Washington's.",
  ],
  sections: [
    // ── §1 출발점 — 산수의 변화 ────────────────────────────────────────────────
    {
      heading: "산수의 변화 — 5.0에서 13.6까지",
      headingEn: "The Arithmetic Has Changed — From 5.0 to 13.6",
      blocks: [
        {
          type: "text",
          body: "지정학을 움직이는 변수는 많지 않다. 한 세대를 정의하는 변화는 보통 **자원**, **인구**, **부채** 셋 중 하나에서 출발한다. 2008년부터 2025년 사이 미국에서 일어난 일은 자원의 변화였다 — 일 5.0백만 배럴이던 원유 생산이 13.2백만 배럴로 늘어나, 2025년 7월 13.6백만 배럴 신기록을 쓰는 데까지 17년이 걸렸다.\n\n이 숫자는 추정이 아니다. EIA(미 에너지정보청)가 매월 발표하는 *Petroleum Supply Monthly* 그대로다. **세계 최대 산유국이라는 지위는 2014년에 사우디아라비아를, 2019년에 러시아를 넘어섰고, 지금은 두 나라가 합쳐도 미국 한 나라에 못 미친다.**",
          bodyEn: "Geopolitics turns on a small number of variables. The changes that define a generation usually start with one of three: **resources**, **demographics**, **debt**. Between 2008 and 2025, what happened in the US was a resource change — daily oil output rose from 5.0 to 13.2 million barrels, peaking at a record 13.6 million in July 2025. It took seventeen years.\n\nThese numbers are not estimates. They are EIA's monthly *Petroleum Supply Monthly* on the page. **America passed Saudi Arabia in 2014 and Russia in 2019. Today the two of them combined fall short of one country: the United States.**",
        },
        {
          type: "chart",
          chart: {
            id: "us-oil-production",
            title: "미국 원유 생산 (1970–2026, 일 만 배럴)",
            titleEn: "US Crude Oil Production (1970–2026, MM bpd)",
            caption: "출처: EIA Petroleum Supply Monthly + STEO 2025. 2026 = EIA 전망치. 2025년 7월 13.6MM bpd가 사상 최고치.",
            captionEn: "Source: EIA Petroleum Supply Monthly + STEO 2025. 2026 = EIA forecast. July 2025 set the all-time high at 13.6 MM bpd.",
            data: [
              { year: 1970, production: 9637, event: "재래식 정점" },
              { year: 1975, production: 8375 },
              { year: 1980, production: 8597 },
              { year: 1985, production: 8971 },
              { year: 1990, production: 7355 },
              { year: 1995, production: 6560 },
              { year: 2000, production: 5822 },
              { year: 2005, production: 5178 },
              { year: 2008, production: 5000, event: "셰일 변곡점" },
              { year: 2010, production: 5482 },
              { year: 2012, production: 6497 },
              { year: 2014, production: 8769, event: "OPEC 가격전쟁" },
              { year: 2016, production: 8836 },
              { year: 2018, production: 10964 },
              { year: 2019, production: 12290 },
              { year: 2020, production: 11283 },
              { year: 2022, production: 11910 },
              { year: 2023, production: 12930 },
              { year: 2024, production: 13200, event: "세계 1위" },
              { year: 2025, production: 13600, event: "신기록" },
              { year: 2026, production: 13500 },
            ],
            annotations: [
              { year: 2008, label: "셰일 변곡점", labelEn: "Shale begins" },
              { year: 2019, label: "러시아 추월", labelEn: "Passes Russia" },
              { year: 2025, label: "13.6MM 신기록", labelEn: "13.6 MM record" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "두 곡선의 차이",
            headingEn: "Two Curves, One Difference",
            body: "1970년 정점(9.64MM bpd)은 **재래식 유전**의 한계였다. 2025년 정점(13.6MM bpd)은 **수평시추(horizontal drilling) + 수압파쇄(fracking)** 두 기술이 만든 새로운 한계다. 그 사이엔 35년의 감산 흐름이 있었고, 그 35년 동안 미국 안보 독트린이 '페르시아만 자유 통항'이라는 가정 위에 세워졌다.",
            bodyEn: "The 1970 peak (9.64 MM bpd) was the limit of **conventional reservoirs**. The 2025 peak (13.6 MM bpd) is a new limit, defined by **horizontal drilling and hydraulic fracturing**. Between the two peaks lay 35 years of decline — and during those 35 years, the entire architecture of US security doctrine was built on the premise of free passage through the Persian Gulf.",
          },
        },
      ],
    },

    // ── §2 1973과 2024 — 같은 숫자, 정반대 의미 ────────────────────────────────
    {
      heading: "1973과 2024 — 같은 7%, 정반대 의미",
      headingEn: "1973 and 2024 — Same 7%, Opposite Meaning",
      blocks: [
        {
          type: "text",
          body: "1973년 아랍 석유 금수조치(Oil Embargo)가 시작됐을 때, 미국이 직접 페르시아만에서 들여오는 원유는 전체 수입의 약 7%였다. 충격은 그러나 가격 채널을 통해 전 경제를 휩쓸었다. 그 결과가 1980년 **Carter Doctrine** — \"걸프 지역에 대한 외부 세력의 통제 시도는 미국의 사활적 이익에 대한 공격으로 간주되며, 군사력을 포함한 모든 수단으로 격퇴될 것\" — 이었다.\n\n2024년, 미국이 페르시아만에서 직접 들여오는 원유는 다시 7%다. 2025년에도 비슷한 수준을 유지하고 있다. **숫자는 똑같다. 그런데 의미가 완전히 뒤집혔다.** 1973년의 7%는 \"여기서 더 끊기면 미국 경제가 멈춘다\"는 신호였다. 2024년의 7%는 \"이만큼은 가격 비교상 들여오는 게 싸서 들여오는 것\"이라는 신호다.",
          bodyEn: "When the Arab Oil Embargo struck in 1973, direct US imports from the Persian Gulf were about 7% of the total. The shock still swept through the entire economy via the price channel. The doctrine that followed in 1980 was the **Carter Doctrine** — *an attempt by any outside force to gain control of the Persian Gulf region will be regarded as an assault on the vital interests of the United States, and will be repelled by any means necessary, including military force*.\n\nIn 2024, direct US imports from the Persian Gulf were 7% again, and 2025 looks similar. **The number is identical. The meaning is reversed.** In 1973, 7% meant *cut any more and the US economy stops*. In 2024, 7% means *this is the cheap arbitrage barrel — we could replace it tomorrow if we wanted to*.",
        },
        {
          type: "chart",
          chart: {
            id: "us-pg-imports",
            title: "미국의 페르시아만 원유 수입 비중 (1973–2025, % of total imports)",
            titleEn: "US Persian Gulf Oil Imports (% of total, 1973–2025)",
            caption: "출처: EIA Monthly Energy Review · Today in Energy 2024-25. 직접 수입 기준.",
            captionEn: "Source: EIA Monthly Energy Review + Today in Energy 2024-25. Direct imports basis.",
            data: [
              { year: 1973, pct: 7,  event: "Arab Oil Embargo" },
              { year: 1980, pct: 22, event: "Carter Doctrine" },
              { year: 1990, pct: 24 },
              { year: 2000, pct: 21 },
              { year: 2008, pct: 18, event: "셰일 시작점" },
              { year: 2010, pct: 17 },
              { year: 2014, pct: 21 },
              { year: 2016, pct: 16 },
              { year: 2018, pct: 16 },
              { year: 2020, pct: 11 },
              { year: 2022, pct: 12 },
              { year: 2024, pct: 7,  event: "1973년 수준 회귀" },
              { year: 2025, pct: 8 },
            ],
            annotations: [
              { year: 1980, label: "Carter Doctrine", labelEn: "Carter Doctrine" },
              { year: 2024, label: "1973 수준", labelEn: "1973 level" },
            ],
          },
        },
        {
          type: "text",
          body: "같은 그래프를 한 번 더 봐야 한다. **위로 올라가는 50년 — Carter Doctrine, 5함대 상주, 1·2차 걸프전, 9·11 이후 중동 주둔 확장.** 미국이 페르시아만에 군사력을 투입한 모든 결정은 위로 올라가는 의존 곡선의 결과였다.\n\n그 곡선이 2008년 셰일 시작점부터 내려간다. 그리고 2024년, 다시 1973년의 출발점으로 돌아온다. **출발선으로 돌아왔다는 사실이 그 사이에 만들어진 안보 인프라까지 자동으로 되돌리지는 않는다.** 그것이 이 시리즈가 추적할 80년의 첫 부조화다.",
          bodyEn: "Look at the same graph one more time. **The 50 years going up — Carter Doctrine, the 5th Fleet stationed in Bahrain, two Gulf Wars, expanded Middle East presence after 9/11.** Every decision to put American boots and ships into the region was a function of that rising dependence curve.\n\nThat curve turns down at the 2008 shale inflection. In 2024, it returns to the 1973 starting point. **Returning to the starting line does not automatically unwind the security architecture built on top of it.** That dissonance is the first thread this series will pull on across the next eighty years.",
        },
      ],
    },

    // ── §3 손익분기의 비대칭 ───────────────────────────────────────────────────
    {
      heading: "손익분기의 비대칭 — $35 vs $96",
      headingEn: "The Asymmetry of Breakeven — $35 vs $96",
      blocks: [
        {
          type: "text",
          body: "셰일이 \"가격 전쟁에서 못 버틸 거다\"라는 예측은 2014년 이후 매년 등장했고, 매년 틀렸다. 이유는 단순한 비교에 있다. **두 가지 다른 '손익분기'를 같은 단어로 부르기 때문이다.**\n\n- **생산 손익분기 (production breakeven):** 운영자가 새 유정을 뚫었을 때 자본 회수까지 받아야 하는 최소 가격. Permian 셰일은 운영 단가 기준 $35–40, 배당·자본비용까지 포함한 all-in 기준으로도 $62.5 수준.\n- **재정 손익분기 (fiscal breakeven):** 산유국 정부가 예산을 균형 맞추기 위해 필요한 유가. IMF가 사우디에 부여한 2025년 재정 손익분기는 $96.2, Vision 2030 추가 지출과 PIF 투자 의무까지 포함하면 $112.",
          bodyEn: "Every year since 2014, the same forecast has come back: shale will not survive the next price war. Every year, it has been wrong. The reason is a definitional confusion — **two different breakevens are being called the same word**.\n\n- **Production breakeven:** the minimum price an operator needs to recover capital on a new well. Permian wellhead operating cost is $35–40; all-in (including dividends and hurdle rates) is around $62.50.\n- **Fiscal breakeven:** the oil price a producer-state needs to balance its budget. The IMF's 2025 fiscal breakeven for Saudi Arabia is $96.20. Including Vision 2030 spending and PIF investment obligations, it rises to about $112.",
        },
        {
          type: "chart",
          chart: {
            id: "breakeven-bars",
            title: "손익분기 비교 ($/bbl WTI, 2024-25)",
            titleEn: "Breakeven Comparison ($/bbl WTI, 2024-25)",
            caption: "출처: IMF Saudi Arabia Article IV 2025, Rystad Energy Shale Productivity 2025, Federal Reserve Bank of Dallas Energy Survey 2024.",
            captionEn: "Source: IMF Saudi Arabia Article IV 2025, Rystad Energy Shale Productivity 2025, Dallas Fed Energy Survey 2024.",
            data: [
              { label: "Permian 웰헤드 (운영 단가)",                     labelEn: "Permian wellhead (operating)",   value: 35,   color: "#10b981" },
              { label: "Permian All-in (배당·hurdle 포함)",              labelEn: "Permian all-in (with dividends)", value: 62.5, color: "#16a34a" },
              { label: "사우디 재정 손익분기 (IMF, 정부 운영)",          labelEn: "Saudi fiscal breakeven (IMF)",    value: 96.2, color: "#f59e0b" },
              { label: "사우디 + Vision 2030·PIF 의무 포함",             labelEn: "Saudi + Vision 2030 + PIF",       value: 112,  color: "#dc2626" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "이 격차가 곧 정치적 격차다",
            headingEn: "This gap is the political gap",
            body: "유가가 $60대로 떨어지면 셰일은 신규 시추를 줄인다. 같은 가격에서 사우디는 **사회 안정**과 **왕가 정통성**의 재원이 끊긴다. 셰일 기업의 다운사이드는 주주의 손실로 끝나지만, 사우디의 다운사이드는 정권의 사활로 이어진다. — 그래서 사우디가 OPEC+ 감산 합의에서 매번 가장 큰 양보를 한다.",
            bodyEn: "When oil drops to the $60s, shale operators trim new drilling. At the same price, Saudi Arabia loses the **funding for social stability and royal legitimacy**. A shale firm's downside ends with shareholder losses; the Saudi downside ends in regime survival. That is why Saudi Arabia makes the deepest cuts in every OPEC+ negotiation.",
          },
        },
      ],
    },

    // ── §4 LNG — 유럽 가스의 재배치 ─────────────────────────────────────────────
    {
      heading: "LNG — 유럽이 다시 그린 가스 지도",
      headingEn: "LNG — Europe's Redrawn Gas Map",
      blocks: [
        {
          type: "text",
          body: "원유보다 더 빠르게 움직인 것은 천연가스였다. 2015년 첫 LNG 수출 화물(Sabine Pass)을 보낸 미국은, 2024년 호주·카타르를 제치고 세계 1위 LNG 수출국이 됐다. 2025년 EIA STEO 기준 일 11.9 Bcf/d.\n\n같은 시기, 유럽의 가스 공급 구조가 통째로 재배치됐다. 2021년 EU 가스 수입의 45%를 차지하던 러시아 비중은, 2022년 우크라이나 전쟁과 Nord Stream 폭파 이후 2025년 12%까지 떨어졌다. 그 자리를 채운 것이 미국 LNG, 노르웨이 파이프라인, 카타르 장기계약이다.",
          bodyEn: "Gas moved faster than oil. The US sent its first LNG export cargo from Sabine Pass in 2015. By 2024 it had overtaken Australia and Qatar to become the world's largest LNG exporter — 11.9 Bcf/d in EIA's 2025 STEO.\n\nOver the same window, Europe's gas-supply map was redrawn. Russia, which supplied 45% of EU gas imports in 2021, dropped to 12% by 2025 after the Ukraine war and the Nord Stream sabotage. The void was filled by US LNG, Norwegian pipelines, and long-term Qatari contracts.",
        },
        {
          type: "chart",
          chart: {
            id: "lng-exporters",
            title: "글로벌 LNG 수출 1위 (2024, Bcf/d)",
            titleEn: "Top LNG Exporters (2024, Bcf/d)",
            caption: "출처: EIA Natural Gas Monthly, IGU World LNG Report 2024.",
            captionEn: "Source: EIA Natural Gas Monthly, IGU World LNG Report 2024.",
            data: [
              { country: "미국",       countryEn: "United States", bcfd: 11.9, color: "#dc2626" },
              { country: "호주",       countryEn: "Australia",     bcfd: 10.5, color: "#0ea5e9" },
              { country: "카타르",     countryEn: "Qatar",         bcfd: 10.4, color: "#8b5cf6" },
              { country: "러시아",     countryEn: "Russia",        bcfd:  4.4, color: "#475569" },
              { country: "말레이시아", countryEn: "Malaysia",      bcfd:  3.7, color: "#f59e0b" },
            ],
          },
        },
        {
          type: "chart",
          chart: {
            id: "eu-russian-gas",
            title: "EU 가스 수입 중 러시아 비중 (2021–2025, %)",
            titleEn: "Russian Share of EU Gas Imports (2021–2025, %)",
            caption: "출처: Bruegel European Gas Imports Dataset, Eurostat. 파이프라인 + LNG 합산.",
            captionEn: "Source: Bruegel European Gas Imports Dataset, Eurostat. Pipeline + LNG combined.",
            data: [
              { year: 2021, pct: 45 },
              { year: 2022, pct: 30, event: "우크라 전쟁·Nord Stream" },
              { year: 2023, pct: 22 },
              { year: 2024, pct: 18 },
              { year: 2025, pct: 12, event: "우크라이나 통과 종료" },
            ],
            annotations: [
              { year: 2022, label: "Nord Stream 파괴", labelEn: "Nord Stream sabotage" },
              { year: 2025, label: "통과 계약 종료", labelEn: "Transit deal ends" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "셰일이 만든 두 번째 자유도",
            headingEn: "Shale's Second Degree of Freedom",
            body: "1973년 미국에는 원유 수입원을 다양화할 자유가 있었다. 사우디 대신 베네수엘라·멕시코·나이지리아로 갈아탈 수 있었다. **2025년의 자유도는 다르다 — 미국은 동맹국이 누구로부터 살지를 결정한다.** 유럽의 12%는 정치적 협상의 결과가 아니라 미국 LNG의 공급 능력이 결정한 수치다.",
            bodyEn: "In 1973, the United States had the freedom to diversify *its own* oil suppliers — Saudi out, Venezuela / Mexico / Nigeria in. **The 2025 degree of freedom is different — it now decides who its allies buy from.** Europe's 12% is not the outcome of political negotiation; it is the throughput limit of US LNG supply.",
          },
        },
      ],
    },

    // ── §5 페트로달러 — 균열의 가격 ────────────────────────────────────────────
    {
      heading: "페트로달러의 균열",
      headingEn: "Cracks in the Petrodollar",
      blocks: [
        {
          type: "text",
          body: "페트로달러 시스템은 두 개의 약속 위에 세워졌다. (1) 사우디는 원유를 달러로만 판매한다. (2) 그 대가로 미국은 사우디 왕가의 안보를 보장하고, 사우디는 잉여 달러를 미국채에 재투자한다. 1974년 키신저-사이먼 합의 이후 50년간 이 회로는 견고했다.\n\n2023–2025년 균열이 동시에 세 곳에서 발생했다. 첫째, 사우디는 중국과 위안화 결제 시범 거래를 시작했다 — 2023년 사우디아람코의 첫 위안화 표시 회사채. 둘째, BRICS+ 확장에 사우디가 \"고려 중\" 입장을 유지한다 — 가입도 거부도 안 한 채. 셋째, 사우디 외환보유고의 미국채 비중이 PIF로의 자본 이전과 함께 천천히 줄어든다.\n\n이 균열의 **속도**는 아직 느리다. 위안화 결제는 사우디 원유 수출의 5% 이하로 추정된다. 그러나 **방향**은 분명하다. 그리고 방향이 바뀐 첫 해와 마지막 해 사이의 거리는, 보통 시장이 가격에 반영하는 것보다 훨씬 짧다.",
          bodyEn: "The petrodollar system rests on two promises. (1) Saudi Arabia sells oil only in dollars. (2) In return, the US guarantees the royal family's security, and Saudi Arabia recycles surplus dollars into Treasuries. The 1974 Kissinger–Simon agreement made this loop, and for fifty years it held.\n\nIn 2023–2025, three cracks opened at once. First, Saudi Arabia began trial yuan settlement with China — Saudi Aramco's first yuan-denominated corporate bond came in 2023. Second, on BRICS+ expansion Saudi Arabia maintains a *considering* posture — neither in, nor out. Third, Saudi US-Treasury holdings drift lower as capital is reallocated to the Public Investment Fund (PIF).\n\nThe **pace** of the crack is still slow — yuan settlement is probably under 5% of Saudi crude exports. But the **direction** is unmistakable. And the distance between the year a direction reverses and the year markets price it tends to be far shorter than people expect.",
        },
        {
          type: "table",
          table: {
            id: "petrodollar-cracks",
            title: "페트로달러 균열의 세 신호",
            titleEn: "Three Signals of Petrodollar Strain",
            headers: ["축", "1974년 합의", "2024–25 변화", "함의"],
            headersEn: ["Axis", "1974 Deal", "2024–25 Change", "Implication"],
            rows: [
              ["결제 통화", "원유 전량 달러 결제", "위안화 시범 결제 + Aramco 위안화 채권", "달러 단일 통로 가설 붕괴 시작"],
              ["보유 자산", "잉여 달러 → 미국채 재투자", "PIF로 이동, 미국채 비중 점진 감소", "달러 보유의 수동성 → 능동성 전환"],
              ["안보 거래", "5함대 + F-15·F-35 공급", "이란과의 베이징 중재 화해 (2023.3)", "사우디 자체 헤지 시작"],
            ],
            rowsEn: [
              ["Settlement", "Oil priced only in USD", "Yuan trial trades + Aramco yuan bond", "Single-currency assumption begins to fracture"],
              ["Reserves", "Recycle surplus USD into Treasuries", "Capital reallocated to PIF, Treasury share trending down", "Reserve-holding shifts from passive to active"],
              ["Security", "5th Fleet + F-15 / F-35 access", "Beijing-brokered détente with Iran (Mar 2023)", "Saudi Arabia begins its own hedge"],
            ],
            caption: "출처: People's Bank of China, Reuters 2023-03-10, Saudi PIF Annual Report 2024.",
            captionEn: "Source: PBOC, Reuters 10-Mar-2023, Saudi PIF Annual Report 2024.",
          },
        },
      ],
    },

    // ── §6 시장이 잘못 가격을 매기는 곳 — 중국 ─────────────────────────────────
    {
      heading: "시장이 잘못 가격 매기는 곳 — 중국의 그림자 함대",
      headingEn: "What Markets Misprice — China's Shadow Fleet",
      blocks: [
        {
          type: "text",
          body: "셰일이 미국에 자유도를 주는 동안, 중국은 정반대 방향으로 움직였다. 2024년 중국 원유 수입에서 러시아가 20%, 이란이 11%, 사우디·이라크·UAE·오만·쿠웨이트·카타르가 합쳐 42%다. **중국이 수입하는 원유의 70% 이상이 미국이 정치적으로 통제할 수 있거나, 통제하지 않기로 선택할 수 있는 항로를 지난다.**\n\n특히 이란산 원유 11%는 공식적으로 존재하지 않는 거래다 — 그림자 함대(shadow fleet)로 불리는 등록 불명 유조선이 호르무즈 동쪽 해상에서 STS(ship-to-ship) 환적으로 중국에 들어간다. 미국이 이 거래를 묵인하는 한 중국은 OK다. **묵인을 멈춘 첫 해, 중국 원유의 11%가 즉시 시장에서 사라진다.** 시장은 이 옵션의 가격을 매기지 않는다 — 행사된 적이 없기 때문이다.",
          bodyEn: "While shale gave the United States degrees of freedom, China moved the opposite way. In 2024 its crude imports were 20% Russia, 11% Iran, and a combined 42% from Saudi Arabia, Iraq, the UAE, Oman, Kuwait, and Qatar. **More than 70% of every barrel China imports passes through a sea-lane Washington can either police or stop policing.**\n\nThe 11% from Iran is officially a transaction that does not exist — a *shadow fleet* of unregistered tankers does ship-to-ship transfers east of Hormuz to deliver into Chinese ports. As long as the US looks the other way, China is fine. **The first day Washington stops looking the other way, 11% of China's crude evaporates instantly.** Markets do not price this option, because it has never been exercised.",
        },
        {
          type: "chart",
          chart: {
            id: "china-oil-mix",
            title: "중국 원유 수입 구성 (2024, %)",
            titleEn: "China Crude Oil Imports by Source (2024, %)",
            caption: "출처: China General Administration of Customs, Visual Capitalist 2024-12. 이란 비중은 추정치(공식 통계 없음).",
            captionEn: "Source: China General Administration of Customs, Visual Capitalist Dec 2024. Iranian share is estimated (no official figure).",
            data: [
              { country: "러시아",     countryEn: "Russia",       pct: 20, bucket: "russia",     color: "#475569" },
              { country: "사우디",     countryEn: "Saudi Arabia", pct: 14, bucket: "gulf-major", color: "#f59e0b" },
              { country: "이라크",     countryEn: "Iraq",         pct: 11, bucket: "gulf-major", color: "#f59e0b" },
              { country: "이란",       countryEn: "Iran",         pct: 11, bucket: "iran",       color: "#dc2626" },
              { country: "UAE",        countryEn: "UAE",          pct:  7, bucket: "gulf-major", color: "#f59e0b" },
              { country: "오만",       countryEn: "Oman",         pct:  6, bucket: "gulf-major", color: "#f59e0b" },
              { country: "말레이시아", countryEn: "Malaysia",     pct:  4, bucket: "other",      color: "#94a3b8" },
              { country: "쿠웨이트",   countryEn: "Kuwait",       pct:  3, bucket: "gulf-major", color: "#f59e0b" },
              { country: "브라질",     countryEn: "Brazil",       pct:  3, bucket: "other",      color: "#94a3b8" },
              { country: "앙골라",     countryEn: "Angola",       pct:  3, bucket: "other",      color: "#94a3b8" },
              { country: "카타르",     countryEn: "Qatar",        pct:  1, bucket: "gulf-major", color: "#f59e0b" },
              { country: "기타",       countryEn: "Others",       pct: 17, bucket: "other",      color: "#94a3b8" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "비대칭 노출의 본질",
            headingEn: "The Real Shape of the Asymmetry",
            body: "미국이 페르시아만 자유 통항을 \"보장하지 않기로 선택\"하는 결정은 **세계 1위 산유국이 세계 1위 소비국에게 행사하는 압박**이다. 1973년 OPEC이 미국에 행사했던 카드의 정확한 거울상이다. 차이는 둘 — 미국은 군사적 비용이 거의 안 들고, 중국은 이 카드의 가격을 아직 모른다는 것.",
            bodyEn: "If the United States decides *not to guarantee* free passage through the Persian Gulf, that decision is **the world's #1 producer applying pressure on the world's #1 consumer** — the exact mirror image of the 1973 card OPEC played against America. Two differences: the US bears almost no military cost to play it, and China has not yet priced what playing it would cost.",
          },
        },
      ],
    },

    // ── §7 청구서 — 한국·일본의 자리 ───────────────────────────────────────────
    {
      heading: "청구서 — 한국과 일본은 어디에 서 있는가",
      headingEn: "The Bill — Where Korea and Japan Stand",
      blocks: [
        {
          type: "text",
          body: "셰일이 미국의 안보 비용 함수를 바꿨다는 명제는, 동맹국 기준으로 보면 정반대의 문장이 된다. **한국과 일본의 안보 비용은 변하지 않았는데, 그 비용을 누가 낼지가 바뀌었다.**\n\n한국은 원유의 약 70%, 일본은 95% 이상을 호르무즈 해협 동측에서 수입한다. 1973년에는 미국도 같은 항로의 가격에 노출돼 있었기 때문에, 5함대 유지비를 미국이 사실상 전액 부담했다. 2025년에는 그 비용을 부담할 인센티브가 미국 본토에서 사라진다. — 셰일이 만든 자유도의 다른 이름이다.",
          bodyEn: "The thesis that shale rewrote America's security cost function reads the opposite way from an allied vantage. **Korea's and Japan's security costs have not changed; only who pays them has.**\n\nKorea imports ~70% and Japan more than 95% of crude from east of the Strait of Hormuz. In 1973, Washington bore essentially the entire cost of the 5th Fleet because the US economy faced the same sea-lane risk. By 2025, that incentive has drained out of the domestic political calculus. This is another name for the degree of freedom shale created.",
        },
        {
          type: "metrics",
          items: [
            { label: "한국 중동 원유 의존",    labelEn: "Korea Gulf Crude",      value: "~70%",  valueEn: "~70%",  sub: "2024 KEEI",                        subEn: "2024 KEEI",                            color: "text-red-600" },
            { label: "일본 중동 원유 의존",    labelEn: "Japan Gulf Crude",      value: "95%+",  valueEn: "95%+",  sub: "2024 METI",                         subEn: "2024 METI",                            color: "text-red-600" },
            { label: "한국 LNG 중 미국 비중",  labelEn: "Korea LNG from US",     value: "12.2%", valueEn: "12.2%", sub: "+10.2% YoY (KOGAS)",               subEn: "+10.2% YoY (KOGAS)",                   color: "text-emerald-600" },
          ],
        },
        {
          type: "table",
          table: {
            id: "korea-japan-exposure",
            title: "동맹 3국의 에너지 노출 구조 (2024)",
            titleEn: "Energy Exposure of Three Allies (2024)",
            headers: ["국가", "원유 — 페르시아만 의존", "가스/LNG — 다변화", "정치적 헤지 도구"],
            headersEn: ["Country", "Crude — Gulf Share", "Gas / LNG — Diversification", "Political Hedge"],
            rows: [
              ["한국",     "≈70% (사우디 30% · UAE 12% · 쿠웨이트 11%)", "호주 24% · 카타르 19% · 미국 12.2% (+10.2% YoY)", "미군 주둔 + 자체 핵 옵션 논의 (70%+ 여론)"],
              ["일본",     "95%+ (사우디 45% · UAE 38%)",                 "호주·말레이시아·미국 분산, 카타르 신규 장기계약", "미일 동맹 + Quad + 자체 방위비 2% 증액"],
              ["중국",     "42% (걸프 합산) + 이란 11% + 러시아 20%",      "러시아 파이프라인 (Power of Siberia) + 카타르 27년 계약", "그림자 함대 + 위안화 결제 + BRICS"],
            ],
            rowsEn: [
              ["Korea",  "~70% (Saudi 30%, UAE 12%, Kuwait 11%)",   "Australia 24%, Qatar 19%, US 12.2% (+10.2% YoY)", "US troops + emerging nuclear-option debate (70%+ support)"],
              ["Japan",  "95%+ (Saudi 45%, UAE 38%)",                 "Diversified across Australia/Malaysia/US + new Qatari LTC", "US-Japan alliance + Quad + 2% defense uplift"],
              ["China",  "42% Gulf-combined + Iran 11% + Russia 20%", "Russian pipeline (Power of Siberia) + 27-yr Qatari LNG deal", "Shadow fleet + yuan settlement + BRICS"],
            ],
            caption: "출처: KEEI, METI, China Customs, KOGAS, World Bank WITS 2024.",
            captionEn: "Source: KEEI, METI, China Customs, KOGAS, World Bank WITS 2024.",
          },
        },
        {
          type: "text",
          body: "주목할 숫자는 마지막 행이 아니라 첫째 칸의 **12.2%** 다. 한국이 미국으로부터 들여오는 LNG가 1년 만에 10.2% 늘었고, 2026–2030년 신규 장기계약으로 더 늘어날 예정이다. 이것은 우연이 아니다. 호르무즈가 닫혔을 때 사라지는 카타르 19%를 누가 채울지 한국 정부와 KOGAS가 이미 **계약 수준에서** 답을 만들고 있다는 신호다.",
          bodyEn: "The number to watch is not the last row but the **12.2%** in the first. US LNG into Korea grew 10.2% in a single year, with more growth contracted for 2026–2030. This is not random. KOGAS and the Korean government are already answering — *at the contract level* — who refills the 19% Qatari share if Hormuz closes.",
        },
      ],
    },

    // ── §8 시나리오 + 투자 시사점 ──────────────────────────────────────────────
    {
      heading: "시나리오 — 2026–2030의 세 갈래",
      headingEn: "Scenarios — Three Branches, 2026–2030",
      blocks: [
        {
          type: "text",
          body: "셰일은 모든 시나리오를 결정짓지 않는다. 그러나 모든 시나리오의 **출발 조건**을 바꿔 놓는다. 향후 5년의 가능한 세 흐름을 압축하면 다음과 같다.",
          bodyEn: "Shale does not decide every scenario. It does, however, change the **starting condition** of every scenario. Compressed to three branches, the next five years look like this.",
        },
        {
          type: "table",
          table: {
            id: "scenarios-2026-2030",
            title: "2026–2030 시나리오 매트릭스",
            titleEn: "2026–2030 Scenario Matrix",
            headers: ["시나리오", "트리거", "유가 (WTI)", "셰일 반응", "동맹·아시아 영향"],
            headersEn: ["Scenario", "Trigger", "Oil (WTI)", "Shale Response", "Allies / Asia"],
            rows: [
              ["A. 정적 후퇴 (base)", "미국 5함대 유지하되 신규 분쟁 불개입", "$60–80",   "유지·소폭 성장",                "한국·일본 LNG 다변화 가속, 동맹 부담분담 협상 격화"],
              ["B. 비대칭 압박",      "이란 우라늄 농축 80%+ → 미국 묵인 종료, 그림자 함대 단속", "$90–110 spike", "신규 시추 6–9개월 ramp", "중국 비축 소진, 위안화 결제 가속, 카타르 LNG 재가격"],
              ["C. 능동적 철수",     "트럼프 2기 후반 페르시아만 군사 자세 축소, 5함대 재배치", "$70–90 + 변동성↑", "재무 규율 유지, 배당 우선",   "한국·일본 자체 함대·핵 옵션 본격 논의, 사우디 다극화 가속"],
            ],
            rowsEn: [
              ["A. Passive retreat (base)", "5th Fleet stays; US avoids new entanglements", "$60–80",       "Steady, slight growth",     "Korea/Japan accelerate LNG diversification; alliance burden-sharing fights intensify"],
              ["B. Asymmetric pressure",   "Iran enriches to 80%+ → US ends tolerance, cracks down on shadow fleet", "$90–110 spike", "6–9 month new-drilling ramp", "Chinese reserves drained, yuan settlement accelerates, Qatari LNG reprices"],
              ["C. Active withdrawal",     "Late Trump-2 redeploys the 5th Fleet, reduces Gulf posture", "$70–90 with higher vol",  "Capital discipline holds; dividends first", "Korea/Japan move toward indigenous fleet and nuclear-option debate; Saudi multipolarity hardens"],
            ],
            caption: "각 시나리오의 정량적 임계는 §10 (이 챕터 말미의 5개 Watchpoints)에서 추적한다.",
            captionEn: "Quantitative thresholds for each branch are tracked in §10 of this chapter's five Watchpoints.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "example",
            heading: "투자 시사점 — 미세하지만 명확한 다섯 줄",
            headingEn: "Investor Implications — Five Lines, Each Small but Clear",
            body: "1) **US 셰일 우량주(Pioneer/Diamondback/EOG)**는 모든 시나리오에서 +다. 단, *재무 규율 유지* 조건. 신규 시추 ramp가 빨라지면 배당 매력은 떨어진다.\n2) **사우디 Aramco**의 정치 리스크는 IMF 재정 손익분기 $96 위에 있다. 유가 $60대 장기화는 곧 Vision 2030 축소 발표를 의미한다.\n3) **한국 KOGAS 장기계약**과 **일본 JERA·INPEX**의 미국 LNG 비중 확대는 발생 중인 헷지다. 이미 가격에 일부 반영됐지만 5년 단위로는 미반영.\n4) **호르무즈 동측 보험·운임 (Lloyd's War Risk + BDI)**은 비대칭 옵션 — 시나리오 B에서 즉시 가격 변동.\n5) **달러 + 금**의 동시 강세는 시나리오 C의 첫 신호다. 페트로달러 균열이 진행되면 보유자 다양화가 금으로 먼저 나타난다.",
            bodyEn: "1) **US shale majors (Pioneer / Diamondback / EOG)** are net-positive across all scenarios — conditional on capital discipline. A fast drilling ramp erodes the dividend case.\n2) **Saudi Aramco**'s political risk lives above the IMF fiscal breakeven of $96. A sustained $60s tape ultimately means a quiet Vision-2030 downsize.\n3) **Korea's KOGAS long-term contracts** and **Japan's JERA / INPEX** moves into US LNG are an in-progress hedge — partly priced now, but not on a five-year view.\n4) **East-of-Hormuz war-risk insurance and freight (Lloyd's War Risk + BDI)** is an asymmetric option that reprices instantly under scenario B.\n5) **A coincident bid in dollar and gold** is the first signal of scenario C — if the petrodollar fractures, holder diversification shows up in gold before anywhere else.",
          },
        },
      ],
    },

    // ── §9 정리 ────────────────────────────────────────────────────────────────
    {
      heading: "정리 — 그래서 시리즈의 1편이다",
      headingEn: "Why This Is Chapter One",
      blocks: [
        {
          type: "text",
          body: "After Pax Americana 시리즈는 \"미국이 후퇴한다\"는 한 줄로 시작하지 않는다. 그 한 줄은 너무 단순하고, 보통 틀린다.\n\n이 시리즈는 **자원·인구·부채 세 변수가 미국의 비용 함수를 바꿨다**는 문장으로 시작한다. 1편의 셰일이 자원 변수다. 2편은 인구, 3편은 부채를 다룬다. 그 셋이 만나는 점에서 80년의 안보 인프라가 천천히 재배치된다. **빠르지 않다 — 그러나 시장이 가격에 반영하는 속도보다는 빠르다.**\n\n다음 편(Ch.2 Demographics)에서는, 같은 산수를 인구학으로 다시 본다. 합계출산율 1.66의 미국과 1.0의 중국, 0.72의 한국. 30년이 지나면, 셰일이 만든 자유도 위에 인구가 만든 새로운 비대칭이 한 겹 더 쌓인다.",
          bodyEn: "The *After Pax Americana* series does not start with the sentence *America is in retreat*. That sentence is too clean, and usually wrong.\n\nIt starts with **three variables — resources, demographics, debt — that have rewritten America's cost function**. Chapter 1 handles resources, in the form of shale. Chapter 2 handles demographics. Chapter 3 handles debt. The eighty-year security architecture is being redrawn at the point those three intersect. **Not quickly — but more quickly than markets price.**\n\nIn the next chapter (Ch.2 Demographics) we run the same arithmetic on people. US fertility 1.66, China 1.0, Korea 0.72. Thirty years from now, a second layer of asymmetry — built by population — sits on top of the degree of freedom shale created.",
        },
      ],
    },
  ],
  references: [
    // ── 1차 자료: 미국 정부 ─────────────────────────────────────────────────────
    { id: 1,  title: "Petroleum Supply Monthly", source: "EIA — US Energy Information Administration", year: "2025", url: "https://www.eia.gov/petroleum/supply/monthly/" },
    { id: 2,  title: "Short-Term Energy Outlook (STEO)", source: "EIA", year: "2025-05", url: "https://www.eia.gov/outlooks/steo/" },
    { id: 3,  title: "Annual Energy Outlook 2025", source: "EIA", year: "2025", url: "https://www.eia.gov/outlooks/aeo/" },
    { id: 4,  title: "Monthly Energy Review — Petroleum Trade", source: "EIA", year: "2025-04", url: "https://www.eia.gov/totalenergy/data/monthly/" },
    { id: 5,  title: "Natural Gas Monthly — LNG Exports", source: "EIA", year: "2025-04", url: "https://www.eia.gov/naturalgas/monthly/" },
    { id: 6,  title: "Today in Energy — US Crude Imports From Persian Gulf Lowest Since 1985", source: "EIA", year: "2024-08", url: "https://www.eia.gov/todayinenergy/" },
    // ── 1차 자료: 국제기구 ─────────────────────────────────────────────────────
    { id: 7,  title: "Saudi Arabia — 2025 Article IV Consultation", source: "International Monetary Fund (IMF)", year: "2025-04", url: "https://www.imf.org/en/Publications/CR/" },
    { id: 8,  title: "Regional Economic Outlook: Middle East and Central Asia", source: "IMF", year: "2025-04" },
    { id: 9,  title: "World Energy Outlook 2024", source: "International Energy Agency (IEA)", year: "2024-10", url: "https://www.iea.org/reports/world-energy-outlook-2024" },
    { id: 10, title: "Oil Market Report (monthly)", source: "IEA", year: "2025-04" },
    { id: 11, title: "World LNG Report 2024", source: "International Gas Union (IGU)", year: "2024-07", url: "https://www.igu.org/" },
    // ── 1차 자료: 업계·민간 리서치 ─────────────────────────────────────────────
    { id: 12, title: "Shale Productivity Outlook 2025", source: "Rystad Energy", year: "2025-03" },
    { id: 13, title: "Dallas Fed Energy Survey — Q4 2024", source: "Federal Reserve Bank of Dallas", year: "2024-12", url: "https://www.dallasfed.org/research/surveys/des" },
    { id: 14, title: "European Gas Imports Dataset (live)", source: "Bruegel", year: "2025", url: "https://www.bruegel.org/dataset/european-natural-gas-imports" },
    // ── 1차 자료: 수입국 통계 ──────────────────────────────────────────────────
    { id: 15, title: "Customs Statistics — Crude Oil Imports", source: "General Administration of Customs of China", year: "2024" },
    { id: 16, title: "China's Crude Oil Import Mix 2024", source: "Visual Capitalist", year: "2024-12", url: "https://www.visualcapitalist.com/" },
    { id: 17, title: "Korea LNG Trade Statistics", source: "World Bank WITS / KOGAS Annual Report", year: "2024" },
    { id: 18, title: "Energy Statistics Yearbook 2024", source: "Korea Energy Economics Institute (KEEI)", year: "2024" },
    { id: 19, title: "Japan Petroleum & LNG Statistics", source: "METI — Agency for Natural Resources and Energy", year: "2024" },
    // ── 2차 자료: 학계·싱크탱크 ───────────────────────────────────────────────
    { id: 20, author: "Daniel Yergin", title: "The New Map: Energy, Climate, and the Clash of Nations", source: "Penguin", year: "2020" },
    { id: 21, author: "Peter Zeihan", title: "The End of the World Is Just the Beginning", source: "Harper Business", year: "2022" },
    { id: 22, author: "Meghan O'Sullivan", title: "Windfall: How the New Energy Abundance Upends Global Politics", source: "Simon & Schuster", year: "2017" },
    { id: 23, title: "Energy & Security — Strategic Report", source: "Council on Foreign Relations (CFR)", year: "2024" },
    { id: 24, title: "Center on Global Energy Policy — Working Papers", source: "Columbia University SIPA", year: "2024-25", url: "https://www.energypolicy.columbia.edu/" },
    { id: 25, title: "King Abdullah Petroleum Studies and Research Center (KAPSARC) Discussion Papers", source: "KAPSARC", year: "2024" },
    // ── 비판적 시각 (반증 가능성 확보) ─────────────────────────────────────────
    { id: 26, author: "J. David Hughes", title: "Shale Reality Check 2024", source: "Post Carbon Institute", year: "2024", note: "셰일 생산성 정점 가설을 가장 강하게 주장" },
    { id: 27, author: "Art Berman", title: "Shale Cost Curve Critique (blog series)", source: "artberman.com", year: "2024-25", note: "Permian core 고갈 가설" },
    // ── 보도 ───────────────────────────────────────────────────────────────────
    { id: 28, title: "Saudi-Iran Détente — Beijing Brokered Deal", source: "Reuters", year: "2023-03-10", url: "https://www.reuters.com/" },
    { id: 29, title: "Aramco's First Yuan-Denominated Bond", source: "Bloomberg", year: "2023-11" },
    { id: 30, title: "Nord Stream Pipeline Sabotage — Investigative Report", source: "Wall Street Journal", year: "2023-03" },
  ],
};

const ch02_demographics = stub({
  order: 2,
  title: "인구학의 잠금 — 누가 늙고 누가 젊은가",
  titleEn: "The Demographic Lock-In — Who Ages, Who Stays Young",
  description:
    "중국 합계출산율 1.0, 한국 0.72, 일본 1.2, 독일 1.46. 미국 1.66. 인도 2.0. 인구는 정책으로 바꿀 수 없다 — 향후 30년의 노동·소비·자본 흐름을 결정할 변수가 이미 결정돼 있다.",
  descriptionEn:
    "Total fertility rates: China 1.0, Korea 0.72, Japan 1.2, Germany 1.46, US 1.66, India 2.0. Demographics cannot be reversed by policy. The labor, consumption, and capital flows of the next thirty years are already locked in.",
  thesis:
    "인구는 정책으로 바꿀 수 없다 — 그래서 인구학은 지정학에서 가장 정확한 예측 도구다.",
  thesisEn:
    "Demographics cannot be reversed by policy — which makes them the most reliable predictor in geopolitics.",
});

const ch03_debt = stub({
  order: 3,
  title: "부채의 함정 — $34조의 그림자",
  titleEn: "The Debt Trap — The Shadow of $34 Trillion",
  description:
    "미국 연방 부채 $34조, GDP 대비 123%. 2026년 이자비용이 국방예산을 추월한다. 차환 wall이 다가오는데 일본·중국은 매도자로 돌아섰다. 패권 유지 비용이 패권 자체를 깎아먹는 시점.",
  descriptionEn:
    "US federal debt $34 trillion, 123% of GDP. Interest expense overtakes the defense budget in 2026. A refinancing wall looms while Japan and China have turned net sellers. The cost of maintaining hegemony begins to erode hegemony itself.",
  thesis:
    "미국 부채는 산수 문제가 아니라 의지 문제다 — 그리고 의지는 이미 흔들리고 있다.",
  thesisEn:
    "American debt is not an arithmetic problem but a question of will — and that will is already faltering.",
});

const ch04_bretton_woods = stub({
  order: 4,
  title: "브레튼우즈의 종료 — 무역과 안보의 분리",
  titleEn: "The End of Bretton Woods — When Trade and Security Diverge",
  description:
    "1944년 이후 미국은 동맹국의 안보를 보장하는 대가로 자국 시장 개방을 거래했다. 80년이 지나 미국은 동맹의 가치보다 자국 산업의 보호를 우선한다 — 관세·반도체법·IRA가 그 증거다. 자유무역 시스템 자체가 만든 자의 손에서 깨지고 있다.",
  descriptionEn:
    "Since 1944, America has traded market access for allied security. Eighty years on, it now prioritizes industrial protection over the value of alliances — tariffs, the CHIPS Act, and the IRA are the evidence. The free-trade system itself is breaking, in the hands of its own architect.",
  thesis:
    "자유무역은 미국이 동맹을 사기 위해 지불한 비용이었다 — 그 동맹이 더 이상 필요 없으니 비용도 끝난다.",
  thesisEn:
    "Free trade was the price America paid to buy alliances — and the alliances are no longer worth the price.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT II — THEATERS OF CONFLICT (Chapters 5–9)
// ══════════════════════════════════════════════════════════════════════════════

const ch05_russia_ukraine = stub({
  order: 5,
  title: "러시아-우크라이나 — 핵 제국의 마지막 발악",
  titleEn: "Russia-Ukraine — The Last Convulsion of a Nuclear Empire",
  description:
    "러시아 합계출산율 1.4, 평균 수명 남성 64세, 우크라이나 전쟁 이후 2백만 명 이상 유출. 무기 재고는 소진되고, 셰일이 유럽 가스 시장을 빼앗았다. 푸틴이 무엇을 잃든, 인구학적 시계는 멈추지 않는다.",
  descriptionEn:
    "Russian fertility 1.4, male life expectancy 64, over 2 million emigrants since the war began. Arms stockpiles depleted; shale has stolen the European gas market. Whatever Putin wins or loses, the demographic clock does not stop.",
  thesis:
    "러시아는 우크라이나에서 이겨도 진다 — 패배의 형태만 다를 뿐이다.",
  thesisEn:
    "Russia loses whether or not it wins in Ukraine — only the shape of the defeat differs.",
});

const ch06_iran_hormuz = stub({
  order: 6,
  title: "이란·이스라엘과 호르무즈 해협",
  titleEn: "Iran, Israel & the Strait of Hormuz",
  description:
    "호르무즈 해협을 통과하는 원유는 일 1,700만 배럴 — 세계 무역의 30%. 이란이 그 해협을 봉쇄할 능력이 있고, 미군은 더 이상 그것을 막을 인센티브가 약하다. 셰일이 자급을 만들고, 이스라엘이 동맹의 부담을 키운다. 한국·일본·중국이 가장 먼저 그 비용을 받는다.",
  descriptionEn:
    "17 million barrels per day pass through the Strait of Hormuz — 30% of seaborne oil trade. Iran can close it; the US Navy has weakening incentive to keep it open. Shale provides self-sufficiency; Israel raises the cost of alliance. Korea, Japan, and China bear the bill first.",
  thesis:
    "호르무즈가 닫히는 첫날, 한국·일본·중국이 미군 없는 페르시아만의 진짜 비용을 처음으로 본다.",
  thesisEn:
    "The day Hormuz closes, Korea, Japan, and China will see for the first time the real cost of a Persian Gulf without the US Navy.",
});

const ch07_venezuela = stub({
  order: 7,
  title: "베네수엘라와 라틴 재구성",
  titleEn: "Venezuela & the Latin Realignment",
  description:
    "베네수엘라의 6,000억 배럴 매장량은 사우디아라비아보다 크다. 트럼프 행정부의 카리브 작전이 라틴아메리카를 새로 정렬하고 있다 — 중국·러시아·이란의 서반구 거점을 정리하는 첫 단계.",
  descriptionEn:
    "Venezuela's 600 billion barrels of reserves exceed Saudi Arabia's. The Trump administration's Caribbean operations are realigning Latin America — the first stage of clearing Chinese, Russian, and Iranian footholds from the Western Hemisphere.",
  thesis:
    "베네수엘라는 미국이 자기 뒷마당을 다시 정리하는 첫 신호다 — 그 다음은 멕시코, 그 다음은 콜롬비아다.",
  thesisEn:
    "Venezuela is the first signal that America is reclaiming its backyard — Mexico is next, Colombia after.",
});

const ch08_taiwan = stub({
  order: 8,
  title: "대만 해협 — 반도체와 봉쇄의 산수",
  titleEn: "The Taiwan Strait — The Arithmetic of Semiconductors and Siege",
  description:
    "TSMC가 세계 첨단 파운드리의 92%를 만든다. 시진핑은 73세, 중국 인구는 이미 정점을 지났다 — 그의 시간표는 빠르게 좁아진다. 그러나 봉쇄 작전은 침공보다 적은 비용에 더 큰 효과를 만들 수 있다.",
  descriptionEn:
    "TSMC produces 92% of the world's advanced foundry capacity. Xi Jinping is 73; China's population has already peaked — his timeline narrows fast. But a blockade can deliver more leverage at less cost than an invasion.",
  thesis:
    "시진핑은 침공할 필요가 없다 — 그저 봉쇄 위협만 유지하면 된다. 그것만으로 세계 반도체 공급이 인질이 된다.",
  thesisEn:
    "Xi does not need to invade — sustained threat of blockade is enough to hold global semiconductor supply hostage.",
});

const ch09_korea = stub({
  order: 9,
  title: "한반도 — 핵·동맹·통일의 트라일레마",
  titleEn: "The Korean Peninsula — The Trilemma of Nukes, Alliance, and Unification",
  description:
    "북한 핵 능력은 ICBM 단계로 진입했고, 한국 핵무장 여론은 70%를 넘었다. 미군 주둔 비용 분담 협상은 매 정권마다 격해진다. 동맹과 자주국방 사이에서 한국이 선택해야 하는 시간이 다가온다.",
  descriptionEn:
    "North Korea has crossed into ICBM-capable status; South Korean public support for nuclear weapons exceeds 70%. US troop-cost negotiations grow harder every administration. The decision between alliance and self-reliance is approaching.",
  thesis:
    "한국의 진짜 질문은 더 이상 '핵을 가질까'가 아니다 — '언제, 어떤 조건으로'다.",
  thesisEn:
    "South Korea's real question is no longer whether to acquire nuclear weapons — but when, and on what terms.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT III — SHIFTING ALLIANCES (Chapters 10–13)
// ══════════════════════════════════════════════════════════════════════════════

const ch10_nato = stub({
  order: 10,
  title: "NATO 2.0 — 독일·폴란드·튀르키예의 부상",
  titleEn: "NATO 2.0 — The Rise of Germany, Poland, and Türkiye",
  description:
    "독일의 €1,000억 방위 펀드, 폴란드의 GDP 4.7% 방위비, 튀르키예의 자체 방산 산업. NATO는 더 이상 미국이 이끄는 동맹이 아니다 — 미국 없이도 작동하는 시스템으로 재편되고 있다.",
  descriptionEn:
    "Germany's €100B defense fund, Poland's 4.7% of GDP on defense, Türkiye's indigenous defense industry. NATO is no longer an alliance led by America — it is being rebuilt to function without America.",
  thesis:
    "독일이 80년의 평화주의를 포기하는 순간, 유럽의 안보 지도가 새로 그려진다.",
  thesisEn:
    "The moment Germany abandons 80 years of pacifism, Europe's security map is redrawn.",
});

const ch11_crink = stub({
  order: 11,
  title: "CRINK 대 동맹 — 새로운 진영화",
  titleEn: "CRINK vs the Allies — The New Bloc Politics",
  description:
    "중국·러시아·이란·북한(CRINK)의 무기·기술·자본 협력이 깊어진다. 한미일·AUKUS는 그 반대편에서 묶인다. 1950년대식 진영화가 다시 등장하지만, 이번엔 비대칭이다 — 인구·자본·기술 모두 동맹 쪽이 우세하다.",
  descriptionEn:
    "Weapons, technology, and capital cooperation among China, Russia, Iran, and North Korea deepens. ROK-US-Japan and AUKUS bind together on the other side. A 1950s-style bloc politics returns — but asymmetric. Demographics, capital, and technology all favor the allies.",
  thesis:
    "두 진영은 동등하지 않다 — 인구·자본·기술 모두 한쪽으로 기울어 있다.",
  thesisEn:
    "The two blocs are not equal — demographics, capital, and technology all tilt one way.",
});

const ch12_gulf_trio = stub({
  order: 12,
  title: "걸프의 삼각 — 사우디·UAE·이스라엘",
  titleEn: "The Gulf Trio — Saudi Arabia, the UAE, and Israel",
  description:
    "미국이 페르시아만에서 발을 빼는 가운데, 사우디·UAE·이스라엘이 자생적 균형을 시도한다. Abraham Accords 2.0, 사우디의 미국·중국 양다리, 이스라엘의 다중 전선. 중동의 다음 10년은 미국이 결정하지 않는다.",
  descriptionEn:
    "As America withdraws from the Persian Gulf, Saudi Arabia, the UAE, and Israel attempt a self-stabilizing balance. Abraham Accords 2.0, Saudi straddling between Washington and Beijing, Israel on multiple fronts. The Middle East's next decade is not decided in Washington.",
  thesis:
    "미국이 떠난 자리에 페르시아만의 세 강자가 직접 균형을 만들기 시작한다 — 그것이 작동할지는 다른 문제다.",
  thesisEn:
    "In America's absence, the Gulf's three powers begin building their own balance — whether it holds is another question.",
});

const ch13_hedgers = stub({
  order: 13,
  title: "헷저들 — 인도·ASEAN·아프리카의 비동맹 부활",
  titleEn: "The Hedgers — India, ASEAN, and Africa's Non-Aligned Revival",
  description:
    "인도는 미국·러시아·중국 모두와 동시에 거래한다. 베트남·인도네시아·필리핀은 안보는 미국, 무역은 중국. 아프리카는 가장 늦게 정렬된다. 비동맹은 1955년의 이상이 아니라 2026년의 합리적 선택이다.",
  descriptionEn:
    "India trades simultaneously with America, Russia, and China. Vietnam, Indonesia, the Philippines hedge: security from Washington, trade with Beijing. Africa is the last to align. Non-alignment is no longer the 1955 ideal — it is the 2026 rational choice.",
  thesis:
    "비동맹은 1955년의 이상이 아니라 2026년의 가장 합리적 전략이다.",
  thesisEn:
    "Non-alignment is no longer the 1955 ideal — it is the most rational strategy of 2026.",
});

// ══════════════════════════════════════════════════════════════════════════════
// ACT IV — CAPITAL AFTER HEGEMONY (Chapters 14–15)
// ══════════════════════════════════════════════════════════════════════════════

const ch14_dollar = stub({
  order: 14,
  title: "달러 이후의 달러 — 무역·결제·보유의 분리",
  titleEn: "The Dollar After the Dollar — Trade, Settlement, and Reserves Diverge",
  description:
    "위안화 무역 결제 비중은 늘었지만 달러 외환보유고 비중은 여전히 58%. 탈달러화의 진짜 위협은 BRICS의 정치가 아니라 스테이블코인·CBDC·금의 보유자 다양화에 있다. 달러 패권은 끝나지 않지만 — 그 형태가 바뀐다.",
  descriptionEn:
    "Yuan-denominated trade settlement has grown, but the dollar's share of FX reserves remains 58%. The real threat of de-dollarization is not BRICS politics but the diversification of holders — stablecoins, CBDCs, and gold. Dollar hegemony does not end — but its shape transforms.",
  thesis:
    "탈달러화의 진짜 위협은 BRICS가 아니라 보유자 다양화다.",
  thesisEn:
    "The real threat of de-dollarization is not BRICS but the diversification of who holds reserves.",
});

const ch15_world_2035 = stub({
  order: 15,
  title: "2035년의 세계 — 종합과 포트폴리오 시나리오",
  titleEn: "The World in 2035 — Synthesis and Portfolio Scenarios",
  description:
    "14편의 분석을 종합한다. 5개 거시 시나리오, 자산군별 백테스트, 한국·미국·유럽·신흥국 포트폴리오 구조 제안. 14편은 진단이었고, 15편은 처방이다.",
  descriptionEn:
    "A synthesis of fourteen prior memos. Five macro scenarios, asset-class backtests, portfolio frameworks for Korean, American, European, and emerging-market investors. The first fourteen were diagnosis; this is prescription.",
  thesis:
    "패권 이후의 세계는 다극이 아니라 비대칭 다극이다 — 투자자의 포트폴리오도 그렇게 설계되어야 한다.",
  thesisEn:
    "The world after hegemony is not multipolar but asymmetrically multipolar — portfolios should be built that way.",
});

// ── Export ─────────────────────────────────────────────────────────────────────

export const AFTER_PAX_AMERICANA_NOTES: NoteData[] = [
  ch01_shale,
  ch02_demographics,
  ch03_debt,
  ch04_bretton_woods,
  ch05_russia_ukraine,
  ch06_iran_hormuz,
  ch07_venezuela,
  ch08_taiwan,
  ch09_korea,
  ch10_nato,
  ch11_crink,
  ch12_gulf_trio,
  ch13_hedgers,
  ch14_dollar,
  ch15_world_2035,
];
