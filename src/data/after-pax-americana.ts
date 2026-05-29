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
  title: "셰일 전환 — 5만 원짜리 주유의 흐름이 바뀐 17년",
  titleEn: "The Shale Pivot — How the Tank of Gas in Your Car Changed Hands",
  description:
    "한국 주유소에서 5만 원어치 기름을 넣으면, 그 돈의 절반은 결국 페르시아만으로 간다. 2008년 미국도 마찬가지였다 — 그런데 17년이 지난 지금은 정반대다. 셰일이라는 단어 하나가 미국의 원유 생산을 일 5.0백만 배럴에서 13.6백만 배럴로 끌어올렸고, 미국이 70년간 호르무즈 자유 통항을 자기 일로 본 단 하나의 이유를 지웠다. 그 자유도는 미국의 것이 됐고, 청구서는 한국·일본의 몫이 된다.",
  descriptionEn:
    "Fill up your tank in Seoul and roughly half of what you paid ends up in the Persian Gulf. America was in the same boat in 2008. Seventeen years later, it is not. A single word — *shale* — pushed US crude output from 5.0 to 13.6 MM bpd and erased the only reason Washington treated the free passage of Hormuz as its own problem. The new freedom belongs to America; the new bill is being addressed to Korea, Japan, and anyone else who still buys east of the Strait.",
  date: "2026-05-29",
  readingMinutes: 24,
  keyPoints: [
    "한국이 수입하는 원유의 약 70%, 일본 95%가 호르무즈 동측에서 온다 — 미군이 그 항로를 \"내 일\"로 보지 않게 되는 순간 주유소 가격이 가장 먼저 움직인다.",
    "셰일은 단순 자원이 아니라 두 기술(수평시추 + 수압파쇄)이 만나서 풀린 자물쇠다. Permian·Bakken·Eagle Ford 세 분지가 미국을 사우디·러시아를 동시에 추월한 세계 1위 산유국으로 만들었다.",
    "미국 원유 생산: 2008년 5.0MM bpd → 2024년 13.2MM → 2025년 7월 13.6MM bpd 신기록. 같은 기간 페르시아만 수입 비중은 1973년 수준인 7%로 회귀.",
    "Permian 운영 단가 $35–40 vs 사우디 재정 손익분기 $96. 셰일 기업의 다운사이드는 주주 손실로 끝나지만, 사우디의 다운사이드는 정권 사활이다. 가격 전쟁의 비대칭.",
    "유럽 가스 시장의 러시아 비중은 2021년 45%에서 2025년 12%로 추락했고, 미국 LNG가 그 자리를 채웠다 — 한국 LNG의 미국 비중도 2024년 12.2%로 +10.2% YoY. 헷지는 이미 계약 단계에서 진행 중.",
  ],
  keyPointsEn: [
    "Korea sources ~70% and Japan ~95% of crude east of Hormuz — the moment Washington stops treating that sea-lane as its own problem, the price at the pump is the first thing that moves.",
    "Shale is not just a resource — it is a lock that opened when two technologies met (horizontal drilling + hydraulic fracturing). The Permian, Bakken, and Eagle Ford basins turned the US into the world's largest producer, overtaking Saudi Arabia and Russia at once.",
    "US output: 5.0 MM bpd (2008) → 13.2 MM (2024) → 13.6 MM record in July 2025. Over the same window, Persian Gulf import share fell back to its 1973 level: 7%.",
    "Permian wellhead breakeven $35–40 vs Saudi fiscal breakeven $96. A shale firm's downside ends with shareholder losses; Saudi Arabia's ends in regime survival. That asymmetry decides every price war.",
    "Russia's share of EU gas collapsed from 45% (2021) to 12% (2025); US LNG took the void. Korea's LNG mix is already 12.2% US (+10.2% YoY) — the hedge is being booked at the contract level, today.",
  ],
  sections: [
    // ── §1 후크 — 당신의 5만 원 ────────────────────────────────────────────────
    {
      heading: "당신이 5만 원어치 기름을 넣을 때",
      headingEn: "When You Fill Up the Tank",
      blocks: [
        {
          type: "text",
          body: "오늘 한국에서 휘발유 5만 원을 넣었다고 하자. 그 돈은 어디로 흐를까. 정유사 마진과 유류세를 떼고 남는 **원유 원가 — 약 절반 — 의 70%가 페르시아만으로 간다.** 사우디아람코, ADNOC(아부다비), 쿠웨이트 KPC, 카타르에너지. 이 네 회사가 한국 주유소에 깔린 기름의 출처다.\n\n같은 5만 원을 17년 전 미국 운전자가 넣었다면, 비율은 거의 똑같았다. 사우디 23%, 베네수엘라 11%, 나이지리아·이라크 합쳐 12%. 그래서 미국은 1980년 **Carter Doctrine** — \"걸프 지역을 외부 세력이 통제하려 들면 군사력으로 격퇴한다\" — 으로 5함대를 바레인에 깔았고, 50년간 그 비용을 자기 일로 봤다.\n\n2025년 미국 운전자의 5만 원에서 페르시아만이 차지하는 비중은 **7%다.** 한국 운전자의 비중은 그대로 70%다. 같은 자동차, 같은 엔진, 같은 유종 — 그러나 \"이 기름이 끊기면 누가 가장 먼저 흔들리는가\"라는 질문의 답이 완전히 달라졌다. **이 시리즈 1편이 추적하는 것은 그 한 가지다.**",
          bodyEn: "Fill up at ₩50,000 in Seoul today. Where does the money go? Strip out refining margin and excise tax, and roughly half is the raw crude cost. Of that crude cost, **about 70% ends up in the Persian Gulf** — Saudi Aramco, ADNOC, Kuwait Petroleum, QatarEnergy. Those four companies are the ultimate source of the gasoline at every Korean pump.\n\nSeventeen years ago, an American driver's tank looked almost identical: 23% Saudi, 11% Venezuelan, another 12% Nigerian and Iraqi combined. That dependence is why the 1980 **Carter Doctrine** — *any attempt by an outside force to control the Persian Gulf will be repelled by military force* — put the US 5th Fleet in Bahrain. For fifty years, Washington treated the bill as its own.\n\nIn 2025, that same Persian Gulf share of the American driver's tank is **7%.** The Korean driver's share is still 70%. Same car, same engine, same fuel grade — but the answer to *who blinks first if this oil is cut* has flipped. **That single flip is what Chapter 1 traces.**",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "그래서 \"셰일\"이 정확히 뭔가?",
            headingEn: "So what exactly is \"shale\"?",
            body: "셰일(shale)은 점판암 — 단단한 진흙 바위다. 이 바위 속에 기름과 가스가 미세한 틈에 갇혀 있다는 사실은 100년 전부터 알려져 있었다. **못 뽑은 이유는 단순하다 — 바위가 단단해서 기름이 우물로 안 흘러나오기 때문이다.**\n\n2008년 전후로 두 기술이 결합되면서 그 자물쇠가 풀렸다:\n\n**① 수평시추(horizontal drilling)** — 지하 2km를 수직으로 뚫은 다음, 시추기를 90도 꺾어 셰일층을 따라 옆으로 2~3km 더 뻗는다. 같은 시추공 하나로 훨씬 넓은 면적에 닿는다.\n\n**② 수압파쇄(hydraulic fracturing, \"fracking\")** — 수평으로 뻗은 시추공에 고압수 + 모래 + 점성 약품을 쏘아 바위에 미세한 균열을 만든다. 모래(propant)가 균열을 받쳐 닫히지 않게 하고, 그 틈으로 기름·가스가 흘러나온다.\n\n이 두 기술이 적용되는 미국 내 주요 분지가 셋이다 — **텍사스 서부·뉴멕시코의 Permian**(세계 최대 단일 분지), **노스다코타의 Bakken**, **텍사스 남부의 Eagle Ford**. 2008년 미국 원유의 약 5%였던 이 세 분지의 비중은 2024년 65%를 넘었다.",
            bodyEn: "Shale is mudstone — hard, dense rock. Geologists have known for a century that oil and gas are trapped in microscopic pores inside it. **The reason no one could extract it is simple: the rock is too tight; the oil will not flow into a well bore.**\n\nAround 2008, two techniques combined to break that lock:\n\n**① Horizontal drilling** — bore 2 km straight down, then turn the drill bit 90° and run another 2–3 km laterally through the shale layer. A single well now covers far more rock area.\n\n**② Hydraulic fracturing (\"fracking\")** — pump high-pressure water + sand + viscous chemicals into that lateral, cracking the rock into a network of micro-fractures. The sand (proppant) holds those fractures open so oil and gas can flow back into the well bore.\n\nThe three US basins where this is done: the **Permian** in West Texas / New Mexico (the world's largest single basin), the **Bakken** in North Dakota, and the **Eagle Ford** in South Texas. These three contributed ~5% of US crude in 2008. By 2024, they contributed over 65%.",
          },
        },
      ],
    },

    // ── §2 17년의 산수 ────────────────────────────────────────────────────────
    {
      heading: "17년의 산수 — 5.0에서 13.6까지",
      headingEn: "Seventeen Years of Arithmetic — From 5.0 to 13.6",
      blocks: [
        {
          type: "text",
          body: "셰일의 기술적 잠금 해제가 어떤 양적 결과를 만들었는지부터 보자. 미국 원유 생산 그래프 한 장이면 충분하다.\n\n1970년 미국은 일 9.64MM 배럴을 뽑았다 — 텍사스·캘리포니아·알래스카 같은 **재래식 유전**의 정점. 그 뒤 35년간 미국은 내리막이었다. 2005년에는 5.18MM bpd까지 떨어졌고, \"미국은 에너지 자급이 끝났다\"가 모든 정치 담론의 출발점이었다. 부시 행정부의 이라크 침공도, 오바마 행정부의 셰일 가스 보조금도, 그 가정 위에 세워졌다.\n\n그 가정이 깨진 게 2008–2025년이다. 일 5.0MM에서 13.6MM까지. 17년 만에 **재래식 정점(1970)을 41% 초과한** 새로운 최고점에 도달했다. 사우디(2024년 9MM bpd 대)와 러시아(2024년 10MM 대)를 같은 해에 한꺼번에 넘어섰고, 지금은 둘을 합쳐도 미국 한 나라에 못 미친다.",
          bodyEn: "Start with what the technological unlock produced quantitatively. One chart is enough.\n\nIn 1970, US oil production peaked at 9.64 MM bpd — the limit of **conventional reservoirs** in Texas, California, and Alaska. The next 35 years were a downhill slope. By 2005, US output was 5.18 MM bpd, and the working assumption of every political conversation — Bush's Iraq invasion, Obama's shale-gas subsidies — was that *American energy self-sufficiency is over*.\n\nThat assumption broke between 2008 and 2025. From 5.0 to 13.6 MM bpd. In seventeen years, the United States blew through its 1970 conventional peak by 41% and set a new all-time high. It overtook Saudi Arabia (about 9 MM bpd today) and Russia (about 10 MM) in the same window. Combined, those two now produce less than the United States alone.",
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
      ],
    },

    // ── §3 한국·일본의 자리 (앞당김) ───────────────────────────────────────────
    {
      heading: "한국과 일본 — 청구서는 어디로 가는가",
      headingEn: "Korea and Japan — Where the Bill Goes",
      blocks: [
        {
          type: "text",
          body: "여기서 한 박자 멈추고 한국 독자가 이 그래프 앞에 있어야 할 이유를 정리한다.\n\n미국이 셰일로 자유도를 얻는 동안, **한국과 일본은 그 자유도를 얻지 못했다.** 한국이 수입하는 원유의 약 70%, 일본은 95% 이상이 호르무즈 해협 동측 — 사우디·UAE·쿠웨이트·이라크·카타르 — 에서 온다. 1973년 이후 50년 동안 그 비율은 거의 안 변했다. 변한 건 \"누가 이 항로를 지키는가\"의 답이다.\n\n1973년에는 미국이 5함대 유지 비용을 사실상 전액 부담했다. 자기도 같은 항로에 노출돼 있었기 때문이다. 2025년에는 그 인센티브가 미국 본토에서 사라진다. **셰일이 미국에 만들어 준 자유도의 다른 이름은, 동맹국 입장에서 \"청구서가 우리에게 온다\"는 문장이다.** 한국 정부가 매년 미국과 부담분담협상에서 깎이고 있는 그 비용 — 그게 이 셰일 그래프의 그림자다.",
          bodyEn: "Pause here. The reader who needs to be in front of this chart is the Korean or Japanese investor.\n\nWhile shale handed the United States a new degree of freedom, **Korea and Japan did not get one.** Korea imports about 70% of its crude from east of Hormuz; Japan, more than 95% — Saudi Arabia, the UAE, Kuwait, Iraq, Qatar. That ratio has barely moved in fifty years. What moved is the answer to *who pays to keep that sea-lane open*.\n\nIn 1973, the United States carried essentially the entire cost of the 5th Fleet, because it shared the exposure. By 2025, that incentive has drained out of Washington's domestic politics. **The other name for the freedom shale gave America is the sentence \"the bill arrives at our door\" from the allies' side.** The cost-sharing negotiations that grind Korea harder every administration — that is the shadow of the same shale graph.",
        },
        {
          type: "metrics",
          items: [
            { label: "한국 중동 원유 의존",    labelEn: "Korea Gulf Crude",      value: "~70%",  valueEn: "~70%",  sub: "사우디 30% · UAE 12% · 쿠웨이트 11%", subEn: "Saudi 30%, UAE 12%, Kuwait 11%",  color: "text-red-600" },
            { label: "일본 중동 원유 의존",    labelEn: "Japan Gulf Crude",      value: "95%+",  valueEn: "95%+",  sub: "사우디 45% · UAE 38%",               subEn: "Saudi 45%, UAE 38%",                 color: "text-red-600" },
            { label: "한국 LNG 중 미국 비중",  labelEn: "Korea LNG from US",     value: "12.2%", valueEn: "12.2%", sub: "+10.2% YoY (KOGAS, 2024)",            subEn: "+10.2% YoY (KOGAS, 2024)",           color: "text-emerald-600" },
          ],
        },
        {
          type: "table",
          table: {
            id: "korea-japan-china-exposure",
            title: "동맹 3국의 에너지 노출 구조 (2024)",
            titleEn: "Energy Exposure of Three Allies (2024)",
            headers: ["국가", "원유 — 페르시아만 의존", "가스/LNG — 다변화 상황", "정치적 헤지 도구"],
            headersEn: ["Country", "Crude — Gulf Share", "Gas / LNG — Diversification", "Political Hedge"],
            rows: [
              ["한국",     "≈70% (사우디 30% · UAE 12% · 쿠웨이트 11%)", "호주 24% · 카타르 19% · 미국 12.2% (+10.2% YoY)", "미군 주둔 + 자체 핵 옵션 논의 (70%+ 여론)"],
              ["일본",     "95%+ (사우디 45% · UAE 38%)",                 "호주·말레이시아·미국 분산, 카타르 신규 장기계약", "미일 동맹 + Quad + 자체 방위비 2% 증액"],
              ["중국",     "42% (걸프 합산) + 이란 11% + 러시아 20%",      "러시아 파이프라인 (Power of Siberia) + 카타르 27년 LTC", "그림자 함대 + 위안화 결제 + BRICS"],
            ],
            rowsEn: [
              ["Korea",  "~70% (Saudi 30%, UAE 12%, Kuwait 11%)",     "Australia 24%, Qatar 19%, US 12.2% (+10.2% YoY)",  "US troops + emerging nuclear-option debate (70%+ public support)"],
              ["Japan",  "95%+ (Saudi 45%, UAE 38%)",                  "Diversified across Australia/Malaysia/US + new Qatari LTC", "US-Japan alliance + Quad + 2% defense uplift"],
              ["China",  "42% Gulf-combined + Iran 11% + Russia 20%",  "Russian pipeline (Power of Siberia) + 27-yr Qatari LNG deal", "Shadow fleet + yuan settlement + BRICS"],
            ],
            caption: "출처: KEEI, METI, China Customs, KOGAS, World Bank WITS 2024.",
            captionEn: "Source: KEEI, METI, China Customs, KOGAS, World Bank WITS 2024.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "12.2% 라는 숫자가 중요한 이유",
            headingEn: "Why the 12.2% Matters",
            body: "한국 LNG 수입에서 미국 비중이 1년 만에 10.2% 늘었다. 신규 KOGAS 장기계약(2026–2030 인도분)으로 더 늘어날 예정이다. **이건 우연이 아니다.** 호르무즈가 닫혔을 때 사라지는 카타르 19%를 누가 채울지 — 한국 정부가 이미 계약 수준에서 답을 만들고 있다는 신호다. 셰일이 미국의 자유도라면, 한국 정부의 12.2%는 그 자유도를 \"빌려 쓰는\" 비용이다.",
            bodyEn: "Korean LNG imports from the US grew 10.2% in a single year, and the new KOGAS long-term contracts (2026–2030 deliveries) will push that higher. **This is not coincidence.** KOGAS and the Korean government are already pre-answering — *at the contract level* — who refills the 19% Qatari share if Hormuz closes. If shale is America's degree of freedom, Korea's 12.2% is the price of *renting* a piece of it.",
          },
        },
      ],
    },

    // ── §4 1973과 2024 ────────────────────────────────────────────────────────
    {
      heading: "1973과 2024 — 같은 7%, 정반대 의미",
      headingEn: "1973 and 2024 — Same 7%, Opposite Meaning",
      blocks: [
        {
          type: "text",
          body: "다시 미국 쪽 그래프로 돌아온다. 도입부에서 한 번 짚었지만, 한 번 더 정확하게.\n\n1973년 아랍 석유 금수조치가 시작됐을 때, 미국이 직접 페르시아만에서 들여오는 원유는 전체 수입의 약 7%였다. 그 7%가 실제로 끊긴 게 아니었다 — 그러나 가격이 4배로 뛰면서 미국 GDP에 2%포인트 충격을 줬다. 그 한 번의 충격이 미국 안보 독트린의 토대가 됐다 — Carter Doctrine, 5함대, 두 번의 걸프전, 9·11 이후의 중동 주둔까지.\n\n2024년, 미국이 페르시아만에서 직접 들여오는 원유는 다시 7%다. 2025년에도 비슷하다. **숫자는 같다. 그러나 의미가 완전히 뒤집혔다.** 1973년의 7%는 \"여기서 끊기면 미국 경제가 멈춘다\"였다. 2024년의 7%는 \"이만큼은 가격 비교상 들여오는 게 싸서 들여오는 것\"이다. 미국은 셰일·캐나다·멕시코로 즉시 대체 가능하다.",
          bodyEn: "Back to the American side of the graph. We touched it in the intro; let's be precise.\n\nWhen the Arab Oil Embargo struck in 1973, direct US imports from the Persian Gulf were about 7% of the total. That 7% was not actually cut off — but the price of oil quadrupled, and the resulting macro shock cost the US ~2 percentage points of GDP. That single shock became the foundation of half a century of American security doctrine — the Carter Doctrine, the 5th Fleet, two Gulf Wars, the post-9/11 Middle East posture.\n\nIn 2024, US direct imports from the Persian Gulf were 7% again, and 2025 looks similar. **The number is identical. The meaning is reversed.** In 1973, 7% meant *if this gets cut, the US economy stops*. In 2024, 7% means *this is the cheap arbitrage barrel — we could replace it tomorrow with shale, Canada, or Mexico*.",
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
          type: "callout",
          callout: {
            variant: "warning",
            heading: "출발선으로 돌아왔다는 사실의 함정",
            headingEn: "The Trap of \"Returning to the Starting Line\"",
            body: "위로 올라가는 50년 — Carter Doctrine, 5함대, 1·2차 걸프전 — 동안 만들어진 미국의 중동 군사·외교 인프라는, 의존도가 1973년 수준으로 돌아왔다고 해서 자동으로 같이 풀리지 않는다. 그러나 **그 인프라를 유지할 정치적 의지는 의존도와 같은 곡선을 그린다.** 매년 미국 의회에서 \"왜 우리가 페르시아만을 지키는가\"라는 질문이 더 큰 소리로 나온다 — 셰일이 만든 정치 현실이다.",
            bodyEn: "The fifty years of going up — Carter Doctrine, 5th Fleet, two Gulf Wars — built a military and diplomatic infrastructure around the Persian Gulf. That infrastructure does not automatically unwind just because dependence returned to its 1973 level. **But the political will to maintain it tracks the dependence curve.** Every year, the question \"why are we still defending the Gulf?\" gets louder in Congress. That, too, is a shale-built reality.",
          },
        },
      ],
    },

    // ── §5 손익분기의 비대칭 ───────────────────────────────────────────────────
    {
      heading: "손익분기의 비대칭 — 셰일은 가격 전쟁에서 안 망한다",
      headingEn: "Asymmetric Breakeven — Why Shale Doesn't Lose Price Wars",
      blocks: [
        {
          type: "text",
          body: "셰일 회의론은 2014년 이후 매년 같은 형태로 돌아왔다 — \"유가만 떨어지면 셰일은 끝난다.\" 매년 틀렸다. 틀린 이유는 단순하다. **\"손익분기\"라는 단어가 두 가지 전혀 다른 것을 가리키는데 사람들이 그걸 같은 척도로 비교한다.**\n\n- **생산 손익분기 (production breakeven):** 한 회사가 새 유정을 뚫고 자본을 회수하는 데 필요한 최소 유가. Permian 셰일은 운영 단가 기준 **\\$35–40**, 배당·hurdle rate까지 포함해도 **\\$62.5**.\n- **재정 손익분기 (fiscal breakeven):** 한 산유국 정부가 그해 예산을 맞추는 데 필요한 유가. 사우디아라비아의 2025년 IMF 재정 손익분기는 **\\$96.2**. Vision 2030 추가 지출과 PIF 투자 의무까지 더하면 **\\$112**.\n\n두 숫자는 다른 행성에 있다.",
          bodyEn: "The same shale-skeptic call has come back every year since 2014 — *the next price war kills shale*. Every year, it has been wrong. The reason is simple: **the word \"breakeven\" gets used for two entirely different things, and people treat them as the same yardstick.**\n\n- **Production breakeven:** the minimum oil price a company needs to recover capital on a new well. Permian wellhead operating cost is **\\$35–40**; all-in (including dividends and hurdle rate) is about **\\$62.50**.\n- **Fiscal breakeven:** the oil price a producer-state government needs to balance its annual budget. Saudi Arabia's 2025 IMF fiscal breakeven is **\\$96.20**. Including Vision 2030 spending and PIF obligations, it rises to **\\$112**.\n\nThose two numbers live on different planets.",
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
            heading: "이 격차가 OPEC+ 협상의 결과를 결정한다",
            headingEn: "This gap decides every OPEC+ outcome",
            body: "유가가 \\$60대로 떨어지면 셰일 회사는 신규 시추를 줄인다. 주가가 빠지고 배당이 깎이고, 일부 한계 운영자가 정리된다 — 그래도 회사로서는 계속 굴러간다.\n\n같은 \\$60대에서 사우디는 **사회 안정 보조금**, **왕가 정통성 유지 비용**, **Vision 2030 추진 자금**의 재원이 동시에 끊긴다. 셰일의 다운사이드는 주주 손실이지만 사우디의 다운사이드는 정권 사활이다. 그래서 OPEC+ 협상 테이블에서 가장 깊이 양보하는 쪽은 항상 사우디다 — 산수가 그렇게 강요한다.",
            bodyEn: "If oil falls into the \\$60s, a shale company trims new drilling. The stock drops, the dividend gets cut, some marginal operators consolidate — but the firm keeps running.\n\nAt the same \\$60s, Saudi Arabia loses the funding for **social-stability subsidies**, **royal-family legitimacy spending**, and **Vision 2030** all at once. A shale firm's downside is shareholder losses; Saudi Arabia's downside is regime survival. That is why Saudi Arabia is always the one making the deepest cuts at every OPEC+ table — the math forces it.",
          },
        },
      ],
    },

    // ── §6 LNG — 유럽 가스의 재배치 ─────────────────────────────────────────────
    {
      heading: "가스 — 유럽이 이미 갈아탄 다음",
      headingEn: "Gas — How Europe Already Switched Suppliers",
      blocks: [
        {
          type: "text",
          body: "원유보다 더 빠르게 움직인 게 가스다. 셰일 분지가 풀어낸 두 번째 자원이 천연가스인데, 가스는 원유보다 운송이 까다롭다 — 영하 162도로 냉각해 액체로 만든 다음(LNG) 특수 탱커로 옮긴다. 미국이 첫 LNG 화물(텍사스 Sabine Pass)을 출항시킨 게 2015년 2월. **그로부터 9년 만에 호주·카타르를 추월해 세계 1위 LNG 수출국이 됐다.**\n\n그 효과가 가장 극적으로 나타난 곳이 유럽이다. 2021년 EU 가스 수입의 45%를 차지하던 러시아 비중은, 2022년 우크라이나 전쟁과 Nord Stream 파괴 이후 2025년 **12%**까지 추락했다. 5년 만에 33%포인트가 빠진 자리를 채운 건 노르웨이 파이프라인(소폭 증가), 카타르 장기계약, 그리고 무엇보다 **미국 LNG**다. EU가 \"러시아 가스를 포기할 수 있다\"고 결정할 수 있었던 이유는 단 하나 — 그 결정을 가능하게 해 줄 대체 공급원이 텍사스 해안에 이미 깔려 있었기 때문이다.",
          bodyEn: "Gas moved faster than oil. The same shale basins that unlocked oil also unlocked natural gas, but gas is harder to ship — you have to cool it to −162 °C, turn it into liquid (LNG), and move it on specialized tankers. The US sent its first LNG cargo from Sabine Pass, Texas, in February 2015. **Nine years later, it had overtaken Australia and Qatar to become the world's #1 LNG exporter.**\n\nThe sharpest effect of all of this shows up in Europe. Russia supplied 45% of EU gas imports in 2021. By 2025 — after the Ukraine war and the Nord Stream sabotage — that share had collapsed to **12%**. The 33-point hole was filled by Norwegian pipelines (small lift), Qatari long-term contracts, and most of all, **US LNG**. The reason Europe could decide *we can do without Russian gas* is exactly one thing: a replacement supply was already sitting on the Texas coast.",
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
            body: "1973년 미국의 자유도는 \"누구로부터 살까\"였다 — 사우디 대신 베네수엘라·멕시코·나이지리아로 갈아탈 수 있었다. **2025년의 자유도는 다르다 — 미국은 동맹국이 누구로부터 살지를 결정한다.** 유럽의 러시아 12%는 정치 협상의 결과가 아니라 미국 LNG 수출 인프라의 처리 용량이 만든 수치다. 한국 LNG의 미국 12.2%도 같은 인프라 위에 놓여 있다.",
            bodyEn: "In 1973, America's degree of freedom was *who do we buy from* — Saudi out, Venezuela / Mexico / Nigeria in. **The 2025 degree of freedom is different — it now decides who its allies buy from.** Europe's 12% Russian share isn't the outcome of political bargaining; it is set by the throughput of US LNG export infrastructure. Korea's 12.2% US-LNG share sits on the same physical infrastructure.",
          },
        },
      ],
    },

    // ── §7 시장이 잘못 가격을 매기는 곳 — 중국 ─────────────────────────────────
    {
      heading: "시장이 미처 가격을 매기지 않은 곳 — 중국의 그림자 함대",
      headingEn: "What Markets Haven't Priced — China's Shadow Fleet",
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

    // ── §8 마무리 — 5만 원의 흐름은 어떻게 바뀌었나 ────────────────────────────
    {
      heading: "다시 5만 원 — 흐름은 어떻게 바뀌었나",
      headingEn: "Back to the ₩50,000 Tank — How the Money Now Moves",
      blocks: [
        {
          type: "text",
          body: "글의 처음으로 돌아온다. 한국 주유소에서 5만 원어치 기름을 넣는 그 순간 — 17년 전과 지금, 그 돈의 흐름이 어떻게 달라졌나.\n\n**2008년 당신의 5만 원 →** 원유 원가 부분이 페르시아만으로 향하고, 그 페르시아만의 안전 — 항로·생산·수출 인프라 — 은 미국 5함대가 \"우리 일\"이라며 무료로 지켜 준다. 호르무즈가 막힐 가능성? 미국이 책임지고 안 막히게 한다. 한국 운전자가 그 비용을 의식할 필요는 없었다.\n\n**2025년 당신의 5만 원 →** 원유 원가 부분이 똑같이 페르시아만으로 향한다. 그러나 그 항로의 안전은 더 이상 \"무료로 보장되는 공공재\"가 아니다. 미국 의회는 매년 \"왜 우리가 한국·일본 기름을 위해 함대를 유지하나\"를 더 큰 소리로 묻는다. 한국 정부는 매년 부담분담을 더 깎이고, KOGAS는 미국 LNG 장기계약으로 가스 다변화를 서두른다. **5만 원 영수증에는 안 찍히지만, 그 돈 뒤에 깔려 있는 \"안전 보장 비용\"의 청구서가 천천히 한국으로 옮겨 오고 있다.**\n\n그래서 셰일이 한국 독자에게 중요한 한 줄은 이것이다 — \"미국이 페르시아만에서 손을 떼면 내 주유소 가격이 얼마나 오르나\"가 아니라, **\"내 다음 10년의 세금과 국방예산이 얼마나 그쪽으로 흘러가게 되나\"** 이다.",
          bodyEn: "Back to the opening. The moment you fill up at ₩50,000 in Seoul — how does the money path differ from seventeen years ago?\n\n**Your ₩50,000 in 2008 →** the crude-cost portion flows to the Persian Gulf, and the security of that Gulf — sea lanes, production, export infrastructure — is provided free of charge by the US 5th Fleet, which treats it as *our problem*. Probability that Hormuz closes? America makes sure it doesn't. The Korean driver never had to think about who paid that bill.\n\n**Your ₩50,000 in 2025 →** the crude-cost portion still flows to the Persian Gulf. But the security of that route is no longer a free public good. Every year, Congress asks louder *why are we maintaining a fleet to protect Korean and Japanese oil?* Every year, Korea is squeezed harder in burden-sharing talks. KOGAS rushes to lock in US LNG long-term contracts to diversify supply. **None of this prints on your gasoline receipt — but the bill for the \"security guarantee\" sitting behind your tank is being slowly readdressed to Seoul.**\n\nSo the one-line takeaway that matters for a Korean reader is not *how much will the pump price rise if America leaves the Gulf?* It is, **how much of my next ten years of taxes and defense spending now flows in that direction?**",
        },
        {
          type: "table",
          table: {
            id: "scenarios-2026-2030",
            title: "2026–2030 시나리오 — 셰일이 출발 조건을 바꾼 세 갈래",
            titleEn: "2026–2030 Scenarios — Three Branches Off the Shale Inflection",
            headers: ["시나리오", "트리거", "유가 (WTI)", "한국 독자에게 의미"],
            headersEn: ["Scenario", "Trigger", "Oil (WTI)", "What it means for Korea"],
            rows: [
              ["A. 정적 후퇴 (base)", "5함대 유지, 신규 분쟁 불개입",                          "$60–80",         "LNG 다변화 가속, 부담분담 협상이 매년 5–10% 더 깎임"],
              ["B. 비대칭 압박",     "이란 우라늄 80%+ → 미국 묵인 종료, 그림자 함대 단속",   "$90–110 spike",  "한국 휘발유 +20–30% 단기 충격, 가스비 동반 상승, 운임 폭등"],
              ["C. 능동적 철수",    "트럼프 2기 후반 5함대 재배치·축소",                      "$70–90 + 변동성↑", "한국 핵 옵션 논의 본격화, 자체 호위 함대 예산 등장"],
            ],
            rowsEn: [
              ["A. Passive retreat (base)", "5th Fleet stays, US avoids new entanglements",                  "$60–80",            "LNG diversification accelerates; burden-sharing squeezed 5–10% per year"],
              ["B. Asymmetric pressure",    "Iran enriches >80%, US ends tolerance, shadow-fleet crackdown", "$90–110 spike",     "Korean gasoline up 20–30% short-term, gas bills rise, freight spikes"],
              ["C. Active withdrawal",      "Late Trump-2 redeploys/reduces 5th Fleet",                      "$70–90 + higher vol", "Korean nuclear-option debate goes mainstream; indigenous-escort budget emerges"],
            ],
            caption: "셰일이 모든 시나리오를 결정짓지는 않는다. 그러나 모든 시나리오의 출발 조건을 바꾼다.",
            captionEn: "Shale does not decide every scenario — but it changes the starting condition of every scenario.",
          },
        },
        {
          type: "callout",
          callout: {
            variant: "example",
            heading: "투자자라면 어디를 봐야 하나 — 다섯 줄",
            headingEn: "If You're an Investor — Five Lines",
            body: "1) **US 셰일 우량주 (Pioneer / Diamondback / EOG)** — 모든 시나리오에서 +. 단 \"신규 시추 ramp가 빨라지면 배당 매력 감소\" 조건. 셰일은 안 망하지만 주주환원 기조는 가격 따라 변한다.\n2) **사우디 Aramco** — 정치 리스크가 IMF 재정 손익분기 \\$96 위에 있다. 유가 \\$60대 장기화는 \"Vision 2030 조용한 축소\" 발표를 의미. 배당 안정성 의심 시작.\n3) **한국 KOGAS 장기계약 / 일본 JERA·INPEX** — 발생 중인 헷지. 이미 일부 반영됐지만 5년 누적 기준으로는 미반영. 한국 가스 인프라 관련주(SK가스·E1·삼천리) 재평가 여지.\n4) **호르무즈 동측 보험·운임 (Lloyd's War Risk + BDI)** — 비대칭 옵션. 시나리오 B에서 즉시 가격 변동. 보험을 싸게 사두는 자리.\n5) **달러 + 금 동시 강세** — 시나리오 C의 첫 신호. 페트로달러 균열이 진행되면 보유자 다양화는 금에서 먼저 보인다. 한국 투자자 입장에서 KRX 금 거래소 비중 점검 시점.",
            bodyEn: "1) **US shale majors (Pioneer / Diamondback / EOG)** — net-positive across all scenarios, conditional on capital discipline. Shale does not die, but the dividend story moves with price.\n2) **Saudi Aramco** — political risk lives above the IMF fiscal breakeven of \\$96. A sustained \\$60s tape ultimately means a quiet Vision-2030 downsize; the dividend stops being a given.\n3) **Korea's KOGAS LTCs / Japan's JERA, INPEX** — an in-progress hedge. Partly priced; not priced on a five-year view. Re-rating room in Korean gas-infrastructure names (SK Gas, E1, Samchully).\n4) **East-of-Hormuz war-risk insurance and freight (Lloyd's War Risk + BDI)** — an asymmetric option that reprices instantly under scenario B. A cheap place to own insurance.\n5) **A coincident bid in the dollar *and* gold** — the first signal of scenario C. If the petrodollar fractures, holder diversification shows up in gold first. Korean investors: check your KRX gold allocation.",
          },
        },
        {
          type: "text",
          body: "다음 편(Ch.2 Demographics)에서는 같은 산수를 \"누가 늙고 누가 젊은가\"의 차원에서 다시 본다. 미국 합계출산율 1.66 vs 한국 0.72 vs 중국 1.0. 자원에서 풀린 자유도 위에, 인구가 만들 새 비대칭이 한 겹 더 쌓이는 게 다음 30년의 이야기다.",
          bodyEn: "The next chapter (Ch.2 Demographics) runs the same arithmetic across *who ages, who stays young*. US fertility 1.66 vs Korea 0.72 vs China 1.0. On top of the degree of freedom shale already created, a second asymmetry — built by population — defines the next thirty years.",
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
