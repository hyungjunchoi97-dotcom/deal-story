/**
 * chip-crash-2026-06-05.ts
 *
 * 데일리 블로그 (market 카테고리). 톤 표준: CLAUDE.md §10
 *  - 음슴체 (~함 / ~임 / ~음)
 *  - 한자는 中 高 無 셋만
 *  - 중간점(·), 기울임(*...*), em-dash(—) 미사용
 *  - 강조는 **굵게**, 단계/인과는 화살표(→)
 */

import type { NoteData } from "../notes";

export const chipCrash20260605: NoteData = {
  slug: "chip-crash-2026-06-05",
  category: "market",
  status: "published",
  title: "SK하이닉스 독일서 -20%, 6월 5일 글로벌 증시가 무너진 날",
  titleEn: "SK Hynix -20% in Frankfurt: The Day Global Chips Cracked (June 5, 2026)",
  description:
    "SK하이닉스 독일 GDR -20.5%, 코스피 -5.5%, 코스피200 선물 -8%. 반도체만의 문제가 아니라 미국 고용지표가 쏘아올린 매크로 충격에 반도체 악재가 겹친 날이었음. 그런데 투자자가 봐야할 중요한건 따로 있음.",
  descriptionEn:
    "SK Hynix GDR -20.5%, KOSPI -5.5%, KOSPI200 futures -8%. Not just a chip problem: a hot US jobs print lit the fuse, and chip-specific bad news piled on. But the real takeaway for investors is elsewhere.",
  date: "2026-06-05",
  readingMinutes: 6,
  keyPoints: [
    "6월 5일 글로벌 증시 동반 급락. SK하이닉스 독일 GDR -20.53%, 삼성전자 KRX -6.40%, 코스피 -5.54%, 코스피200 선물 -8%.",
    "진짜 방아쇠는 미국 5월 고용지표 쇼크. NFP 17.2만건으로 예상(8.5만)의 2배 → 금리 인하 기대 후퇴 → 미 10년물 4.54% → 기술주 매도.",
    "반도체 악재 3종이 겹침. 브로드컴 가이던스 실망(-13%), 마이크론 호재에도 하락(-7.7%), 최태원의 캐파 2배 발표가 자극한 피크아웃 우려.",
    "한국 고유 변수. 원달러 1,560원 약세 + 국민연금이 5월 28일 국내주식 목표비중을 14.9%에서 20.8%로 올려 약 170조 매도폭탄을 피해둠.",
    "핵심: 이건 위기가 아니라 강세장 속 조정. 단 인플레와 유가 탓에 연준이 금리로 받쳐주기 어려워 눌림목이 길어질 수 있고, 피크아웃이 실적으로 확인되는지가 방향을 가름.",
  ],
  keyPointsEn: [
    "June 5 saw a synchronized global selloff: SK Hynix GDR -20.53%, Samsung KRX -6.40%, KOSPI -5.54%, KOSPI200 futures -8%.",
    "The real trigger was the US May jobs shock: NFP 172K, double the 85K consensus, which pushed back rate-cut hopes, sent the 10Y to 4.54%, and hit tech.",
    "Three chip negatives stacked: Broadcom's soft guidance (-13%), Micron falling despite good news (-7.7%), and peak-out fears stoked by SK Chairman's capacity-doubling plan.",
    "Korea-specific factors: KRW weakness near 1,560 plus the National Pension raising its domestic-equity target from 14.9% to 20.8% on May 28, sidestepping a ~KRW 170T forced-sell overhang.",
    "Takeaway: this is a correction within a bull market, not a crisis. But with inflation and oil limiting Fed easing, the dip may last longer, and whether peak-out shows up in actual results will decide direction.",
  ],
  sections: [
    {
      heading: "",
      blocks: [
        {
          type: "text",
          body:
            "6월 5일 글로벌 증시가 한꺼번에 무너졌음.\n\nSK하이닉스 독일 GDR -20.53%, 삼성전자 KRX -6.40%(329,000원), SK하이닉스 KRX -7.92%(2,116,000원). 코스피는 8,160으로 -5.54%, 코스피200 선물은 -8%까지 빠지며 매도 사이드카 발동.\n\n급락하게 된 배경을 이해하기 위해서는 반도체 섹터의 문제와 더불어 미국 고용지표를 함께 봐야함.\n\n우선 왜 빠졌는지 정리, 이후 투자자가 생각해봐야할 포인트를 짚어보겠음.",
          bodyEn:
            "Global equities cracked all at once on June 5.\n\nSK Hynix GDR -20.53%, Samsung KRX -6.40% (KRW 329,000), SK Hynix KRX -7.92% (KRW 2,116,000). KOSPI closed at 8,160 (-5.54%), and KOSPI200 futures fell as much as -8%, triggering a sell-side sidecar.\n\nTo understand the drop you have to look at both the chip sector and the US jobs print together.\n\nFirst, why it fell. Then, what investors should actually think about.",
        },
      ],
    },
    {
      heading: "Why 하락? 1. 미국 고용지표 쇼크",
      headingEn: "Why? 1. The US Jobs Shock",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "미국 5월 비농업 고용(NFP), 예상 vs 실제",
            titleEn: "US May Nonfarm Payrolls — Consensus vs Actual",
            unit: "천 건",
            data: [
              { label: "시장 예상", labelEn: "Consensus", value: 85 },
              { label: "실제 (5월)", labelEn: "Actual (May)", value: 172, highlight: true, note: "예상의 2배", noteEn: "2x consensus" },
            ],
            caption: "예상치의 2배. 3, 4월 수치도 위로 상향 조정됐음. 출처: 미 노동부(BLS).",
            captionEn: "Double the consensus, with March-April also revised up. Source: US BLS.",
          },
        },
        {
          type: "text",
          body:
            "6월 5일 발표된 미국 5월 비농업 고용(NFP)이 17만 2천 건. 시장 예상치 8만 5천 건의 2배. 3, 4월 수치도 위로 상향 조정.\n\n고용이 강하면 경제가 좋다는 뜻인데, 지금 시장은 반대로 받아들임.\n\n경제가 안 식음 → 연준이 금리를 못 내림 → 오히려 올릴 수도.\n\n미국 10년물 국채금리가 4.54%까지 급등. 6월 16일에서 17일 FOMC 금리 인하 가능성은 거의 사라졌고, 연말 인상 확률이 70%까지 올라옴.\n\n금리가 높게 유지되면 가장 먼저 맞는 게 고평가된 기술주. 전형적인 '좋은 경제 지표가 주식엔 나쁜 뉴스' 상황.",
          bodyEn:
            "The US May nonfarm payrolls released on June 5 came in at 172,000, double the 85,000 consensus. March and April were also revised higher.\n\nStrong jobs mean a strong economy, but the market read it the other way.\n\nIf the economy doesn't cool, the Fed can't cut, and might even hike.\n\nThe US 10-year yield jumped to 4.54%. A cut at the June 16-17 FOMC all but vanished, and odds of a hike by year-end rose to about 70%.\n\nWhen rates stay high, expensive tech gets hit first. A textbook 'good economic data is bad news for stocks' setup.",
        },
      ],
    },
    {
      heading: "Why 하락? 2. 브로드컴 가이던스 실망 매물",
      headingEn: "Why? 2. Broadcom's Guidance Disappointment",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "브로드컴 AI 반도체 매출 추이 (분기)",
            titleEn: "Broadcom AI Semiconductor Revenue (Quarterly)",
            unit: "10억 달러",
            data: [
              { label: "25 Q4", value: 6.2 },
              { label: "26 Q1", value: 8.4 },
              { label: "26 Q2", value: 10.8, highlight: true },
              { label: "26 Q3 (가이던스)", labelEn: "26 Q3 (guide)", value: 16, note: "예상 17.2 하회", noteEn: "below 17.2 est." },
            ],
            caption: "매출 자체는 우상향. 문제는 다음 분기 가이던스(16B)가 기대치(17.2B)를 밑돈 것. 출처: 브로드컴 IR.",
            captionEn: "Revenue keeps rising. The problem: next-quarter guidance (16B) came in below the 17.2B estimate. Source: Broadcom IR.",
          },
        },
        {
          type: "text",
          body:
            "6월 3일 브로드컴 실적은 숫자 자체는 좋았음. AI 반도체 매출 분기 10.8B달러, 총매출 22.2B달러로 전년 대비 +48%.\n\n문제는 다음 분기 AI 가이던스가 16B달러로 시장 기대치(17.2B달러)를 밑돈 것.\n\n여기에 CEO Hock Tan이 '구글이 여러 칩 공급사를 같이 쓸 것'이라 언급하고, AI 매출이 오히려 마진을 누른다고 밝히면서 실망 매물이 쏟아짐.\n\n브로드컴 -13% → 필라델피아 반도체지수(SOX) 급락 → 삼성, 하이닉스 동조 하락.",
          bodyEn:
            "Broadcom's June 3 results were strong on the numbers: AI chip revenue of 10.8B for the quarter, total revenue 22.2B (+48% YoY).\n\nThe problem was next-quarter AI guidance of 16B, below the 17.2B the Street wanted.\n\nThen CEO Hock Tan noted Google would likely use multiple chip suppliers and flagged that surging AI sales were pressuring margins, and the disappointment selling poured in.\n\nBroadcom -13% led the Philadelphia Semiconductor Index (SOX) lower, dragging Samsung and Hynix with it.",
        },
      ],
    },
    {
      heading: "Why 하락? 3. 마이크론, 좋은 뉴스에도 하락",
      headingEn: "Why? 3. Micron Fell Even on Good News",
      blocks: [
        {
          type: "text",
          body:
            "미국 메모리사 마이크론 -7.7%.\n\n호재가 나왔는데도 빠졌다는 게 핵심. 직전 엔비디아가 차세대 Vera Rubin용 HBM4 공급사로 삼성, SK하이닉스, 마이크론 셋을 모두 승인.\n\n그런데도 주가는 하락.",
          bodyEn:
            "US memory maker Micron fell 7.7%.\n\nThe key point is it dropped despite good news. Just before, Nvidia had approved Samsung, SK Hynix, and Micron all three as HBM4 suppliers for its next-gen Vera Rubin platform.\n\nThe stock fell anyway.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "좋은 뉴스가 이미 가격에 반영됐을 때",
            headingEn: "When Good News Is Already Priced In",
            body:
              "'좋은 뉴스는 이미 주가에 다 반영됐다' 는 시장 시그널.\n\n메모리는 동조성이 강해서 마이크론이 빠지면 하이닉스, 삼성도 같이 맞음.",
            bodyEn:
              "'Good news is already in the price' is the market's signal here.\n\nMemory names move together, so when Micron drops, Hynix and Samsung tend to follow.",
          },
        },
      ],
    },
    {
      heading: "Why 하락? 4. 메모리 피크아웃 우려",
      headingEn: "Why? 4. Memory Peak-Out Fears",
      blocks: [
        {
          type: "text",
          body:
            "최태원 SK 회장이 6월 2일 컴퓨텍스 2026에서 '5년 내 SK하이닉스 웨이퍼 캐파 2배'를 발표.\n\n지금 수요가 강하다는 뜻이지만, 시장 일부는 반대로 읽음.\n\n'지금은 AI 때문에 좋지만 몇 년 뒤 공급 과잉 오는 거 아냐?'\n\n여기에 AI 밸류에이션 부담(S&P 상위 5개사가 지수의 30%)과 이란발 유가 상승(브렌트 96달러대)까지 깔려 있어 매도가 더 셌음.",
          bodyEn:
            "At Computex 2026 on June 2, SK Chairman Chey Tae-won announced a plan to double SK Hynix wafer capacity within five years.\n\nThat signals strong demand, but part of the market read it inversely.\n\n'Great now because of AI, but won't oversupply hit in a few years?'\n\nAdd AI valuation strain (the top 5 S&P names are 30% of the index) and Iran-driven oil (Brent in the mid-90s), and the selling intensified.",
        },
      ],
    },
    {
      heading: "한국만의 변수, 국민연금과 환율",
      headingEn: "Korea-Specific: The National Pension and FX",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "국민연금 국내주식 비중",
            titleEn: "National Pension Domestic-Equity Weight",
            unit: "%",
            data: [
              { label: "기존 목표", labelEn: "Old target", value: 14.9 },
              { label: "실제 비중", labelEn: "Actual", value: 19, note: "2월말 24.5%까지", noteEn: "peaked 24.5% in Feb" },
              { label: "신규 목표", labelEn: "New target", value: 20.8, highlight: true, note: "5/28 상향", noteEn: "raised May 28" },
            ],
            caption: "목표를 14.9%에서 20.8%로 올려 약 170조 매도폭탄을 피함. 출처: 국민연금 기금운용위.",
            captionEn: "Raising the target from 14.9% to 20.8% sidestepped a ~KRW 170T forced-sell. Source: NPS Fund Committee.",
          },
        },
        {
          type: "text",
          body:
            "한국 급락에는 한국 고유 변수가 둘 더 있음.\n\n**첫째, 환율**. 6월 5일 원달러 1,559.95원으로 +1.77%. 한 달 새 약 8% 약세. 원화가 약해지면 외국인은 환차손까지 떠안아서 한국 주식을 더 팔게 됨.\n\n**둘째, 국민연금**. 여기가 의외로 중요함.\n\n코스피가 연초 이후 25% 넘게 급등하면서 국민연금 국내주식 실제 비중이 목표(14.9%)를 훌쩍 넘어 19%대까지 차오른 상태였음. 2월말에는 24.5%까지 치솟기도 했음. 원래 룰대로면 한도를 넘은 만큼 기계적으로 팔아야 함.\n\n그런데 국민연금이 5월 28일 국내주식 목표비중을 14.9%에서 20.8%로 상향(5.9%p). 시장에서는 '약 170조원 규모의 매도폭탄을 피했다'고 평가.\n\n참고로 올해 말 목표 자산배분은 국내주식 20.8%, 해외주식 34.7%, 국내채권 23.1%, 해외채권 7.4%, 대체투자 14.0%.\n\n즉 6월 5일 급락에서 국민연금은 매도 주범이 아니라 **오히려 완충** 역할. 한국 수급은 보기보다 최악은 아니라는 뜻.",
          bodyEn:
            "Korea's drop had two more local drivers.\n\n**First, FX.** On June 5 USD/KRW hit 1,559.95 (+1.77%), down about 8% in a month. A weaker won means foreigners also eat currency losses, so they sell Korean stocks harder.\n\n**Second, the National Pension Service (NPS).** This one matters more than it looks.\n\nWith KOSPI up over 25% YTD, NPS's actual domestic-equity weight had pushed well past its 14.9% target to the 19% area, even spiking to 24.5% at end-February. By the old rule, it would have to mechanically sell the excess.\n\nBut on May 28 NPS raised the domestic-equity target from 14.9% to 20.8% (+5.9pp). The market called it dodging a 'roughly KRW 170 trillion forced-sell.'\n\nFor reference, the year-end target mix is domestic equity 20.8%, foreign equity 34.7%, domestic bonds 23.1%, foreign bonds 7.4%, alternatives 14.0%.\n\nSo on June 5, NPS was a buffer, not the culprit. Korea's flow picture is less dire than it looks.",
        },
      ],
    },
    {
      heading: "그래서 투자자는 뭘 생각해봐야 하나",
      headingEn: "So What Should Investors Actually Think About?",
      blocks: [
        {
          type: "text",
          body:
            "여기가 핵심임.\n\n**1. 이건 위기가 아니라 강세장 속 조정**\n\n먼저 짚을 것. 지금 시장은 4년 연속 강세장이고 미국 S&P500은 사상 최고 부근. 6월 5일 급락은 '위기'가 아니라 과열 상태에서 나온 차익실현과 금리 재평가에 가까움. 강세장에서 10에서 20% 조정은 평균 17일 정도로 끝나는 정상적인 리듬임.\n\n단기 트리거(고용지표, 브로드컴)는 며칠에서 몇 주짜리 노이즈 성격이 강함.\n\n**2. 단, 이번 조정은 평소보다 길어질 수 있음**\n\n과거에는 시장이 흔들리면 연준이 금리를 내려 받쳐줬음. 그런데 지금은 인플레이션(4월 CPI 3.8%)과 이란발 유가 때문에 연준이 금리를 내리고 싶어도 못 내림.\n\n즉 이번엔 '급락하면 곧 금리 인하로 받쳐준다'는 카드가 약함. 밸류에이션이 스스로 소화해야 하는 국면이라, 눌림목이 평소보다 길어질 수 있음.\n\n**3. 진짜 봐야 할 건 피크아웃이 실적으로 확인되는지**\n\n지금 급락은 '공급 과잉이 올지도 모른다'는 우려 단계임. 아직 실제 메모리 가격이나 실적이 꺾인 건 無.\n\n우려가 실적으로 확인되면 진짜 조정, 확인 안 되면 과열 해소 후 재상승. 그래서 DDR5 가격과 HBM4 계약 속도가 분수령.\n\n**4. 한국 수급은 생각보다 덜 나쁨**\n\n국민연금이 비중 상향으로 매도폭탄을 피했음. 외국인 매도와 환율이 부담이지만, 연금이 받쳐주는 구조라 외국인 매도가 진정되면 반등 탄력이 생길 수 있음.",
          bodyEn:
            "This is the core.\n\n**1. This is a correction within a bull market, not a crisis**\n\nFirst, context: the market is in a fourth straight bull year and the S&P 500 sits near record highs. June 5 was profit-taking and rate repricing from an overheated state, not a crisis. In bull markets a 10-20% correction lasts about 17 days on average, a normal rhythm.\n\nThe short-term triggers (jobs, Broadcom) are days-to-weeks noise.\n\n**2. But this dip may last longer than usual**\n\nIn the past, when markets wobbled the Fed cut rates to cushion them. Now, with inflation (April CPI 3.8%) and Iran-driven oil, the Fed can't cut even if it wants to.\n\nSo the 'a selloff brings a quick rate-cut backstop' card is weak this time. Valuations have to digest on their own, so the dip can run longer.\n\n**3. What really matters is whether peak-out shows up in results**\n\nThe selloff is at the 'oversupply might come' worry stage. Actual memory prices and earnings have not rolled over.\n\nIf the worry shows up in numbers, it's a real correction; if not, it's overheating relief before another leg up. That makes DDR5 prices and HBM4 contract pace the swing factor.\n\n**4. Korea's flow is less bad than it looks**\n\nNPS dodged a forced-sell via the target hike. Foreign selling and FX are a drag, but with the pension as a backstop, a foreign-selling pause could give the rebound some lift.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "매주 봐야 할 체크포인트 5개",
            headingEn: "Five Things to Watch Weekly",
            body:
              "1. **6월 16일에서 17일 FOMC** 워시 신임 의장이 금리 경로를 어떻게 잡나\n2. **다음 미국 CPI, 고용** 인플레가 꺾이면 금리 부담 완화\n3. **6월 8일 한국 증시** 코스피200 선물 -8%가 실제로 반영되나\n4. **HBM4 본계약** 엔비디아와 삼성, SK하이닉스 공급 계약 속도\n5. **DDR5 현물가격** 피크아웃 우려가 진짜인지 가늠하는 지표",
            bodyEn:
              "1. **June 16-17 FOMC** how new Chair Warsh frames the rate path\n2. **Next US CPI and jobs** cooling inflation eases the rate burden\n3. **June 8 Korean market** whether the -8% futures move actually lands\n4. **HBM4 contracts** Nvidia-Samsung-SK Hynix supply deal pace\n5. **DDR5 spot price** the gauge for whether peak-out is real",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            heading: "한 문장으로 정리하면",
            headingEn: "In One Sentence",
            body:
              "강한 미국 고용지표가 금리 인하 기대를 날리며 기술주를 흔든 상태에서 브로드컴 실망과 메모리 피크아웃 우려가 겹친 조정임. 위기는 아니지만 금리 인하 여력이 적어 눌림목이 길어질 수 있고, 한국은 국민연금이 매도폭탄을 피해둔 점이 그나마 완충. 결국 피크아웃이 실적으로 확인되느냐가 방향을 가를 것임.",
            bodyEn:
              "A hot US jobs print killed rate-cut hopes and shook tech, with Broadcom's disappointment and memory peak-out fears piling on. Not a crisis, but limited Fed easing room means the dip can run longer; in Korea, NPS having dodged a forced-sell is the one cushion. Ultimately, whether peak-out shows up in actual results will decide direction.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "US BLS", title: "Employment Situation, May 2026 (NFP 172K vs 85K est.)", source: "Bureau of Labor Statistics", year: "2026-06-05" },
    { id: 2, author: "CNBC", title: "Hot jobs report puts Fed cuts further out of reach as Chair Warsh faces policy tests", source: "CNBC", year: "2026-06-05" },
    { id: 3, author: "Broadcom", title: "Q2 FY2026 earnings (AI semi $10.8B, Q3 guide $16B vs $17.2B est.)", source: "Broadcom IR", year: "2026-06-03" },
    { id: 4, author: "Investing.com", title: "Nvidia certifies Samsung, SK Hynix and Micron for Vera Rubin HBM4 supply", source: "Investing.com", year: "2026-06-05" },
    { id: 5, author: "파이낸셜뉴스", title: "최태원 SK 회장, 컴퓨텍스 2026 — 5년 내 SK하이닉스 웨이퍼 캐파 2배", source: "FN News", year: "2026-06-02" },
    { id: 6, author: "인베스트조선", title: "국민연금, 국내주식 목표비중 20.8%로 상향, 강제 매도 부담 덜었다", source: "Invest Chosun", year: "2026-05-28" },
    { id: 7, author: "TheStreet", title: "Chip selloff hits SOX after Broadcom's 13% drop (June 5, 2026)", source: "TheStreet", year: "2026-06-05" },
    { id: 8, author: "Morgan Stanley", title: "Stock Market Outlook 2026 — bull market still has room (S&P fwd P/E 22x, avg correction 17 days)", source: "Morgan Stanley", year: "2026" },
  ],
};
