/**
 * bubble-1996-or-2000.ts
 *
 * 데일리 블로그 (market 카테고리). 분석형이라 ~다 / ~습니다 혼용 톤.
 *  - 종결: ~습니다 위주 + ~다 + ~있는데 + 가끔 음슴체, 자연스럽게 섞음
 *  - 한자: 中 高 無 셋만
 *  - 중간점(·), 기울임(*...*), em-dash(—) 미사용
 *  - 강조는 **굵게**, 인과는 화살표(→)
 */

import type { NoteData } from "../notes";

export const bubble1996Or2000: NoteData = {
  slug: "bubble-1996-or-2000",
  category: "market",
  status: "published",
  title: "지금은 1996인가, 2000인가",
  titleEn: "Is It 1996 or 2000?",
  description:
    "실러 PER이 39.8까지 올라 역대 2위권. 언론은 광기라고 부른다. 그런데 진짜 질문은 버블이냐가 아니라 지금이 1996에 가까운가 2000에 가까운가다. 경제, 인플레, 금리 시차로 따져보면 답이 보인다.",
  descriptionEn:
    "The Shiller PE has climbed to 39.8, the second highest on record. Media calls it mania. But the real question is not whether it is a bubble, but whether we are closer to 1996 or to 2000. The economy, inflation, and the rate-hike lag point to an answer.",
  date: "2026-06-07",
  readingMinutes: 7,
  keyPoints: [
    "미국 증시에 두 달간 개인 자금 800억 달러 유입(10년 최대). S&P500은 3월 이후 20% 가까이 올라 사상 최고 부근. 실러 PER 39.8로 역대 2위권(역대 최고는 1999년 12월 44.2).",
    "진짜 질문은 버블이냐가 아니라 '지금이 1996인가 2000인가'다. 1996년 그린스펀의 비이성적 과열 경고 후에도 S&P는 130% 더 올랐다.",
    "판별 키 1, 경제는 아직 강하다. 실질 GDP 2.7%(2분기 4% 전망), 월 12만건 고용. 침체 신호는 無.",
    "판별 키 2, 인플레가 분수령. 2026년 들어 2.4%에서 3.8%로 상승해 연준 목표 2%에서 멀어지는 中. 1990년대 말과 똑같은 패턴.",
    "핵심: 금리 인상은 12에서 14개월 시차로 작동한다. 1999년 1월 인상 후 고용 둔화는 2000년 3월부터였고, 그 사이 S&P는 25% 더 올랐다. 즉 지금은 2000보다 1996에 가깝다.",
  ],
  keyPointsEn: [
    "$80B of retail money flowed into US equities over two months (a decade high). The S&P 500 is near record highs, up nearly 20% since March. The Shiller PE at 39.8 is second only to December 1999's all-time 44.2.",
    "The real question is not whether it's a bubble but whether this is 1996 or 2000. After Greenspan's 'irrational exuberance' warning in 1996, the S&P still rose another 130%.",
    "Test 1, the economy is still strong. Real GDP 2.7% (4% Q2 estimate), 120K+ monthly job creation. No recession signal.",
    "Test 2, inflation is the swing factor. It rose from 2.4% to 3.8% in 2026, drifting from the Fed's 2% target. The same pattern as the late 1990s.",
    "Key point: rate hikes work with a 12-14 month lag. After the January 1999 hike, job creation only weakened from March 2000, and the S&P rose another 25% in between. So this looks closer to 1996 than 2000.",
  ],
  sections: [
    {
      heading: "",
      blocks: [
        {
          type: "text",
          body:
            "지난 두 달간 미국 증시에 들어온 개인 자금이 800억 달러입니다. 10년 만의 최대 규모이고, 2024년과 2025년 월평균의 2배가 넘습니다.\n\nS&P500은 3월 이후 20% 가까이 오르며 사상 최고 부근입니다. 동시에 **실러 PER이 39.8까지 올라 역대 2위권**에 도달했습니다.",
          bodyEn:
            "Over the past two months, $80 billion of retail money has flowed into US equities. A decade high, more than double the monthly average of 2024 and 2025.\n\nThe S&P 500 is near record highs, up nearly 20% since March. At the same time, the **Shiller PE has reached 39.8, the second highest on record**.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "실러 PER이 뭔가요?",
            headingEn: "What Is the Shiller PE?",
            body:
              "주가를 최근 10년 평균 순이익으로 나눈 값입니다.\n\n한 해 실적이 좋고 나쁨에 휘둘리지 않게 10년치를 평균 내서, 시장이 장기적으로 비싼지 싼지를 봅니다.\n\n노벨경제학상을 받은 로버트 실러가 만들었습니다. 숫자가 높을수록 비싼 시장이라는 뜻입니다.",
            bodyEn:
              "It divides the stock price by the average earnings of the past 10 years.\n\nAveraging a decade smooths out single-year swings, so it gauges whether the market is expensive over the long run.\n\nIt was created by Nobel laureate Robert Shiller. A higher number means a more expensive market.",
          },
        },
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "실러 PER, 역사적 정점 비교",
            titleEn: "Shiller PE — Historical Peaks Compared",
            unit: "x",
            refLine: { value: 32, label: "역사 평균", labelEn: "Historical avg" },
            data: [
              { label: "1929 (대공황 직전)", labelEn: "1929 (pre-crash)", value: 32 },
              { label: "1965", value: 24 },
              { label: "2000 정점 (닷컴)", labelEn: "2000 peak (dot-com)", value: 44.2, highlight: true, note: "역대 최고", noteEn: "all-time high" },
              { label: "2026 현재", labelEn: "2026 now", value: 39.8, highlight: true, note: "역대 2위권. 1929는 넘고 2000에 근접", noteEn: "2nd highest. above 1929, near 2000" },
            ],
            caption: "역사 평균은 약 32배. 현재 39.8은 1929년을 넘었고 역대 최고인 2000년 44.2에 근접. 출처: GuruFocus, multpl.",
            captionEn: "Historical average is about 32x. Today's 39.8 is above 1929 and close to the 2000 record of 44.2. Source: GuruFocus, multpl.",
          },
        },
        {
          type: "text",
          body:
            "역사 평균이 32 정도인데 지금은 40에 가깝습니다. 1929년 대공황 직전(약 32)은 이미 넘었고, 역대 최고였던 1999년 12월의 44.2에 바짝 다가섰습니다.\n\n언론은 이걸 '광기'라고 부릅니다. 1999년, 2007년과 비교하는 헤드라인이 쏟아집니다.\n\n그런데 여기서 중요한 사실이 하나 있는데, 그 헤드라인이 처음 나온 게 아니라는 점입니다.",
          bodyEn:
            "The historical average is around 32, and we're near 40 now. We've already passed 1929's pre-crash level (about 32) and are closing in on the December 1999 record of 44.2.\n\nMedia calls this 'mania,' with headlines comparing today to 1999 and 2007.\n\nBut here's the thing: those headlines are not new.",
        },
      ],
    },
    {
      heading: "그 버블 경고는 2025년 7월에도 나왔다",
      headingEn: "That Bubble Warning Was Already Out in July 2025",
      blocks: [
        {
          type: "text",
          body:
            "지금과 똑같은 버블 경고가 2025년 7월에도 있었습니다. 그런데 그 후 S&P500은 추가로 25% 더 올랐습니다.\n\n더 거슬러 올라가면 1996년에도 잡지 표지가 '역사상 가장 뜨거운 시장'을 외쳤습니다. 당시 연준 의장 그린스펀이 직접 '비이성적 과열'이라고 경고했죠. 이미 5년간 130% 오른 뒤였습니다.\n\n그런데 그 경고 후에도 S&P500은 2000년 3월까지 **추가로 130% 더 올랐습니다.** 그러고 나서야 닷컴 버블로 50% 빠졌습니다.\n\n시장은 당신이 버틸 수 있는 것보다 더 오래 비이성적일 수 있습니다. 지금 시장에도 그대로 적용되는 말입니다.\n\n**그래서 진짜 질문은 버블이냐 아니냐가 아니라, 지금이 1996에 가까운가 2000에 가까운가입니다.** 그리고 이건 꽤 정확하게 답할 수 있습니다.",
          bodyEn:
            "The same bubble warning was out in July 2025. Yet the S&P 500 rose another 25% after that.\n\nGo back further: in 1996, magazine covers were already calling it 'the hottest market ever.' Fed Chair Greenspan himself warned of 'irrational exuberance.' The market had already risen 130% over five years.\n\nAnd after that warning, the S&P 500 rose another 130% through March 2000, before finally dropping 50% in the dot-com bust.\n\nThe market can stay irrational longer than you can stay solvent. The same applies today.\n\n**So the real question is not whether it's a bubble, but whether we're closer to 1996 or to 2000.** And that we can answer fairly precisely.",
        },
      ],
    },
    {
      heading: "판별 키 1. 경제는 아직 강하다",
      headingEn: "Test 1. The Economy Is Still Strong",
      blocks: [
        {
          type: "text",
          body:
            "미국 실질 GDP 성장률은 현재 2.7% 수준입니다. 중동 전쟁에도 불구하고 그렇고, 연준은 2분기에 4%까지 올라갈 수 있다고 봅니다. 1990년대와 같은 강세장 조건입니다.\n\n지난 40년을 보면 **경제 성장률이 지금 수준일 때 증시는 항상 강세장이었습니다.** 증시가 빠진 건 성장률이 꺾이거나 침체로 갈 때뿐이었죠.\n\n그 핵심 지표가 고용인데, 미국은 지금도 매달 12만 건 이상 일자리를 만들고 있습니다. 2021년 고점보다는 식었지만 침체를 알리는 신호는 아닙니다.\n\n소비가 미국 경제의 70%인데, 일자리가 늘면 소비가 늘고 소비가 경제를 끌어올립니다. 과거 모든 침체는 고용이 마이너스로 꺾인 뒤에 왔습니다. 지금은 그게 아닙니다.",
          bodyEn:
            "US real GDP growth is around 2.7% now. That's despite the Middle East war, and the Fed sees it potentially rising to 4% in Q2. The same conditions as the 1990s bull market.\n\nOver the last 40 years, **whenever growth was at today's level, the market was in a bull run.** Stocks only fell when growth rolled over or tipped into recession.\n\nThe key gauge is jobs, and the US is still adding over 120,000 jobs a month. Cooler than the 2021 peak, but not a recession signal.\n\nConsumer spending is 70% of the US economy, so more jobs means more spending, which lifts the economy. Every past recession came after job creation turned negative. That's not where we are now.",
        },
      ],
    },
    {
      heading: "판별 키 2. 인플레이션이 분수령이다",
      headingEn: "Test 2. Inflation Is the Swing Factor",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "미국 인플레이션, 다시 오르는 中",
            titleEn: "US Inflation — Reaccelerating",
            unit: "%",
            refLine: { value: 2, label: "Fed 목표", labelEn: "Fed target" },
            data: [
              { label: "2026년 초", labelEn: "Early 2026", value: 2.4 },
              { label: "현재", labelEn: "Now", value: 3.8, highlight: true, note: "목표 2%에서 멀어지는 中", noteEn: "drifting from the 2% target" },
            ],
            caption: "2.4%에서 3.8%로 상승. 1990년대 말도 1.5%에서 3.7%로 오르자 연준이 금리를 올렸음. 출처: 미 노동부 CPI.",
            captionEn: "Up from 2.4% to 3.8%. In the late 1990s, inflation rising from 1.5% to 3.7% pushed the Fed to hike. Source: US CPI.",
          },
        },
        {
          type: "text",
          body:
            "여기가 진짜 리스크입니다.\n\n미국 인플레이션은 2026년 들어 2.4%에서 3.8%로 올랐습니다. 연준 목표 2%에서 점점 멀어지는 中.\n\n이게 왜 중요하냐면, 1990년대 말이 똑같았기 때문입니다.\n\n당시에도 연준은 인플레가 내려오는 동안 금리를 천천히 내렸고, 그게 증시를 띄웠습니다. 그런데 인플레가 1.5%에서 3.7%로 오르자 연준은 방향을 틀어 금리를 올리기 시작했습니다. 그게 버블 종료의 시작이었죠.\n\n지금 우리는 비슷한 위치에 있습니다.",
          bodyEn:
            "This is the real risk.\n\nUS inflation rose from 2.4% to 3.8% in 2026, drifting away from the Fed's 2% target.\n\nWhy it matters: the late 1990s looked exactly like this.\n\nBack then the Fed cut rates slowly while inflation fell, which lifted stocks. But when inflation climbed from 1.5% to 3.7%, the Fed reversed and started hiking. That was the beginning of the end.\n\nWe're in a similar spot now.",
        },
      ],
    },
    {
      heading: "그런데 당장 터지지는 않는다",
      headingEn: "But It Won't Pop Right Away",
      blocks: [
        {
          type: "chart",
          chart: {
            id: "daily-bar",
            title: "닷컴 사례: 금리 올린 뒤에도 S&P는 14개월간 더 올랐다",
            titleEn: "Dot-Com Case: The S&P Rose 14 More Months After the Hike",
            data: [
              { label: "1999.1 금리 인상", labelEn: "Jan 1999 hike", value: 100, note: "S&P 기준점 100", noteEn: "S&P indexed to 100" },
              { label: "2000.3 (+14개월)", labelEn: "Mar 2000 (+14mo)", value: 125, highlight: true, note: "고용 둔화 시작. 그 사이 S&P +25%", noteEn: "job creation rolls over. S&P +25% in between" },
            ],
            caption: "연준이 1999년 1월 금리를 올렸지만 고용이 꺾인 건 14개월 뒤. 그 사이 S&P는 25% 더 상승. 출처: 미 연준, S&P 데이터.",
            captionEn: "The Fed hiked in January 1999, but jobs only weakened 14 months later. The S&P rose 25% in between. Source: Federal Reserve, S&P data.",
          },
        },
        {
          type: "text",
          body:
            "여기서 가장 중요한 포인트가 있습니다.\n\n**금리 인상은 시차를 두고 작동합니다.** 보통 12개월에서 14개월입니다.\n\n1990년대 말을 봅시다. 연준이 금리를 올린 건 1999년 1월인데, 고용이 꺾이기 시작한 건 2000년 3월부터입니다. **무려 14개월 뒤죠.**\n\n그리고 그 14개월 동안 S&P500은 25% 더 올랐습니다.\n\n이유는 단순합니다. 높아진 차입비용이 경제에 스며들어서 기업이 실제로 사람을 줄이기까지는 시간이 걸립니다. 연준이 금리를 올린다고 기업이 다음 날 바로 해고하지 않으니까요.\n\n즉 **연준이 2026년 하반기에 금리를 올린다 해도, 실제 충격이 오는 건 2027년 하반기쯤**이라는 뜻입니다.",
          bodyEn:
            "Here's the most important point.\n\n**Rate hikes work with a lag.** Usually 12 to 14 months.\n\nTake the late 1990s. The Fed hiked in January 1999, but jobs only started rolling over in March 2000. A full 14 months later.\n\nAnd in those 14 months, the S&P 500 rose another 25%.\n\nThe reason is simple. It takes time for higher borrowing costs to filter through the economy before firms actually cut staff. A hike doesn't make companies fire people the next day.\n\nSo even if the Fed hikes in the second half of 2026, the real hit would likely land around the second half of 2027.",
        },
      ],
    },
    {
      heading: "그래서 지금은",
      headingEn: "So Where Are We",
      blocks: [
        {
          type: "text",
          body:
            "세 가지를 종합하면 이렇습니다.\n\n1. **경제는 강하다** 침체 신호 無\n2. **인플레는 리스크다** 2.4% → 3.8%, 연준 금리 인상을 부를 수 있음\n3. **단 인상해도 충격은 1년 뒤다** 그 사이 증시는 더 오를 수 있음\n\n결론은 명확합니다. **지금은 2000보다 1996에 가깝습니다.** 버블의 끝이 아니라 후반부 어딘가죠.\n\n물론 직선으로 오르지는 않습니다. 2000년 고점 직전에도 10% 이상 조정이 여러 번 있었습니다. 6월 5일 반도체 급락 같은 조정은 앞으로도 계속 나올 수 있고요.\n\n다만 큰 그림에서 추세는 아직 위쪽입니다.",
          bodyEn:
            "Putting the three together:\n\n1. **The economy is strong** no recession signal\n2. **Inflation is the risk** 2.4% to 3.8%, which could force a Fed hike\n3. **But even a hike hits a year later** stocks can rise in between\n\nThe conclusion is clear. **This looks closer to 1996 than 2000.** Not the end of the bubble, but somewhere in its later innings.\n\nOf course it won't be a straight line up. Even before the 2000 peak there were several 10%+ corrections. Selloffs like the June 5 chip drop will keep happening.\n\nBut in the big picture, the trend is still up.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "투자자가 기억할 것 3가지",
            headingEn: "Three Things for Investors",
            body:
              "**1. '버블 같다'와 '지금 판다'는 다르다**\n\n밸류에이션이 비싼 건 맞습니다. 그런데 비싼 시장이 더 비싸지는 구간이 역사적으로 길었습니다. 1996년 경고 후에도 130% 더 올랐으니까요.\n\n**2. 진짜 봐야 할 건 인플레와 연준이다**\n\n인플레가 꺾이면 → 연준 부담 완화 → 강세장 연장. 인플레가 더 오르면 → 연준 인상 → 카운트다운 시작. 단 그 카운트다운도 1년짜리입니다.\n\n**3. 조정은 사는 기회일 수 있다**\n\n추세가 살아있는 한, 6월 5일 같은 급락은 추세 안의 눌림목일 가능성이 큽니다. 단 인플레와 고용 지표가 추세를 깨는지는 매번 확인해야 합니다.",
            bodyEn:
              "**1. 'Looks like a bubble' is not 'sell now'**\n\nValuations are expensive, yes. But expensive markets getting more expensive has historically lasted a long time. After the 1996 warning, the market rose another 130%.\n\n**2. Watch inflation and the Fed**\n\nIf inflation cools → less Fed pressure → bull market extends. If it rises → Fed hike → the countdown starts. But that countdown is still about a year long.\n\n**3. Dips can be buying opportunities**\n\nAs long as the trend holds, selloffs like June 5 are likely dips within the trend. But check each time whether inflation and jobs are breaking that trend.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "quote",
            heading: "한 문장으로 정리하면",
            headingEn: "In One Sentence",
            body:
              "밸류에이션은 1929년을 넘어 2000년에 근접했지만, 경제는 아직 강하고 연준이 금리를 올려도 충격은 1년 뒤에 옵니다. 지금은 버블의 끝(2000)이 아니라 후반부(1996)에 가깝고, 인플레이션이 그 방향을 가를 분수령입니다.",
            bodyEn:
              "Valuations have passed 1929 and neared 2000, but the economy is still strong and even a Fed hike would only bite a year later. This looks closer to the bull's later innings (1996) than its end (2000), with inflation the swing factor.",
          },
        },
      ],
    },
  ],
  references: [
    { id: 1, author: "GuruFocus / multpl", title: "S&P 500 Shiller CAPE Ratio 39.8 (Jun 2026), all-time high 44.2 (Dec 1999)", source: "GuruFocus, multpl.com", year: "2026-06" },
    { id: 2, author: "Federal Reserve", title: "Real GDP ~2.7% (Q2 est. up to 4%), inflation 2.4% to 3.8% in 2026", source: "Federal Reserve / BEA / BLS", year: "2026" },
    { id: 3, author: "US BLS", title: "Monthly job creation 120K+, no recession signal", source: "Bureau of Labor Statistics", year: "2026-06" },
    { id: 4, author: "역사 사례", title: "Greenspan 'irrational exuberance' (Dec 1996), S&P +130% to Mar 2000", source: "Federal Reserve archives", year: "1996-2000" },
    { id: 5, author: "역사 사례", title: "Fed hiked Jan 1999, job creation rolled over Mar 2000 (14-month lag), S&P +25% in between", source: "Federal Reserve / S&P", year: "1999-2000" },
    { id: 6, author: "Investment flows", title: "$80B retail inflow over two months, a decade high", source: "Market data", year: "2026-06" },
  ],
};
