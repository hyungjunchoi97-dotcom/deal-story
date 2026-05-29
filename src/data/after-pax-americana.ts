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
          body: "1. 오늘 한국에서 휘발유 5만 원을 넣었다고 하자.\n2. 정유사 마진과 유류세를 떼고 나면, 남는 원유 원가는 절반 정도임.\n3. 그 원유 원가의 약 **70%가 페르시아만으로 흘러감.**\n4. 사우디아람코, ADNOC(아부다비), 쿠웨이트 KPC, 카타르에너지 — 이 네 회사가 한국 주유소 기름의 실제 출처임.\n5. 17년 전 미국 운전자가 같은 5만 원을 넣었어도 비율은 거의 똑같았음 — 사우디 23%, 베네수엘라 11%, 나이지리아·이라크 합쳐 12%.\n6. 그래서 미국은 1980년 **Carter Doctrine**을 발표함 — \"걸프 지역을 외부 세력이 통제하려 들면 군사력으로 격퇴한다.\"\n7. 이 독트린이 5함대를 바레인에 깔았고, 미국은 50년간 그 비용을 자기 일로 봤음.\n8. 2025년 미국 운전자의 5만 원에서 페르시아만이 차지하는 비중은 **7%로 떨어짐.**\n9. 한국 운전자의 비중은 그대로 **70%임.**\n10. 같은 자동차, 같은 엔진, 같은 유종.\n11. 그러나 \"이 기름이 끊기면 누가 가장 먼저 흔들리는가\"의 답이 완전히 뒤집힘.\n12. **이 시리즈 1편이 추적하는 것은 그 한 가지임.**",
          bodyEn: "1. Suppose you fill up at ₩50,000 in Seoul today.\n2. Strip out refining margin and excise tax — roughly half is the raw crude cost.\n3. About **70% of that crude cost ends up in the Persian Gulf.**\n4. Saudi Aramco, ADNOC, Kuwait Petroleum, QatarEnergy — those four companies are the real source of the gasoline at every Korean pump.\n5. Seventeen years ago, an American driver's tank looked almost identical: 23% Saudi, 11% Venezuelan, 12% Nigerian and Iraqi combined.\n6. So in 1980, the US issued the **Carter Doctrine** — *any attempt by an outside force to control the Persian Gulf will be repelled by military force.*\n7. That doctrine put the 5th Fleet in Bahrain, and for fifty years Washington treated the bill as its own.\n8. By 2025, the Persian Gulf share of an American driver's tank had fallen to **7%.**\n9. The Korean driver's share is still **70%.**\n10. Same car, same engine, same fuel grade.\n11. But the answer to *who blinks first if this oil is cut* has completely flipped.\n12. **That single flip is what Chapter 1 traces.**",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "그래서 \"셰일\"이 정확히 뭔가?",
            headingEn: "So what exactly is \"shale\"?",
            body: "1. 셰일(shale)은 점판암임 — 단단한 진흙 바위.\n2. 이 바위 속에 기름과 가스가 미세한 틈에 갇혀 있다는 사실은 100년 전부터 알려져 있었음.\n3. 못 뽑은 이유는 단순함 — **바위가 단단해서 기름이 우물로 흘러나오지 않음.**\n4. 2008년 전후로 두 기술이 결합되면서 자물쇠가 풀림.\n5. **① 수평시추(horizontal drilling)** — 지하 2km를 수직으로 뚫은 다음, 시추기를 90도 꺾어 셰일층을 따라 옆으로 2~3km 더 뻗음.\n6. 시추공 하나로 훨씬 넓은 면적에 닿게 되는 것임.\n7. **② 수압파쇄(hydraulic fracturing, \"fracking\")** — 수평으로 뻗은 시추공에 고압수 + 모래 + 점성 약품을 쏘아 바위에 미세한 균열을 만듦.\n8. 모래(propant)가 균열을 받쳐 닫히지 않게 하고, 그 틈으로 기름·가스가 흘러나오게 됨.\n9. 이 두 기술이 적용되는 미국 내 주요 분지가 셋임 — **텍사스 서부·뉴멕시코의 Permian**(세계 최대 단일 분지), **노스다코타의 Bakken**, **텍사스 남부의 Eagle Ford**.\n10. 2008년 미국 원유의 5%에 불과했던 이 세 분지의 비중은 2024년 **65%를 넘김.**",
            bodyEn: "1. Shale is mudstone — hard, dense rock.\n2. Geologists have known for a century that oil and gas sit in microscopic pores inside it.\n3. The reason no one could extract it is simple — **the rock is too tight; oil will not flow into a well bore.**\n4. Around 2008, two techniques combined and the lock opened.\n5. **① Horizontal drilling** — bore 2 km straight down, then turn the bit 90° and run another 2–3 km laterally through the shale layer.\n6. A single well now covers far more rock area than a vertical one ever could.\n7. **② Hydraulic fracturing (\"fracking\")** — pump high-pressure water + sand + viscous chemicals into that lateral, cracking the rock into a web of micro-fractures.\n8. The sand (proppant) holds the cracks open, and oil and gas flow back through them into the well bore.\n9. Three US basins do this at scale — the **Permian** in West Texas / New Mexico (the largest single basin in the world), the **Bakken** in North Dakota, the **Eagle Ford** in South Texas.\n10. Those three contributed ~5% of US crude in 2008. By 2024, they contributed over **65%.**",
          },
        },
      ],
    },

    // ── §2 17년의 셈 ──────────────────────────────────────────────────────────
    {
      heading: "17년의 셈 — 5.0에서 13.6까지",
      headingEn: "Seventeen Years of Arithmetic — From 5.0 to 13.6",
      blocks: [
        {
          type: "text",
          body: "셰일 기술이 풀어 낸 자물쇠가 어떤 결과로 나타났는지부터 보자. 미국 원유 생산 그래프 한 장이면 충분하다.\n\n1970년 미국은 일 9.64MM 배럴을 뽑았다 — 텍사스·캘리포니아·알래스카 같은 **재래식 유전**의 정점이다. 그 뒤 35년간 미국은 내리막을 걸었다. 2005년에는 5.18MM bpd까지 떨어졌고, \"미국의 에너지 자급은 끝났다\"가 모든 정치 담론의 전제였다. 부시 행정부의 이라크 침공도, 오바마 행정부의 셰일가스 보조금도, 그 전제 위에 서 있었다.\n\n그 전제가 깨진 게 2008–2025년이다. 일 5.0MM에서 13.6MM까지. 17년 만에 **재래식 정점(1970)을 41% 넘어선** 새 최고점에 도달했다. 사우디(2024년 9MM bpd 대)와 러시아(2024년 10MM 대)를 같은 해에 한꺼번에 추월했고, 지금은 둘을 합쳐도 미국 한 나라에 못 미친다.",
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
            body: "유가가 \\$60대로 떨어지면 셰일 회사는 신규 시추를 줄인다. 주가가 빠지고 배당이 깎이고, 일부 한계 운영자가 정리된다 — 그래도 회사로서는 계속 굴러간다.\n\n같은 \\$60대에서 사우디는 **사회 안정 보조금**, **왕가 정통성 유지 비용**, **Vision 2030 추진 자금**의 재원이 동시에 끊긴다. 셰일이 가격 하락에서 잃는 건 주주 수익률이지만, 사우디가 잃는 건 정권 자체다. 그래서 OPEC+ 협상 테이블에서 가장 깊이 양보하는 쪽은 늘 사우디다 — 셈이 그렇게 만든다.",
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
            body: "미국이 페르시아만 자유 통항을 \"보장하지 않기로 선택\"하는 결정은 **세계 1위 산유국이 세계 1위 소비국에게 휘두르는 압박**이다. 1973년 OPEC이 미국에 휘둘렀던 카드를 정확히 거꾸로 뒤집은 그림이다. 차이는 두 가지 — 이번엔 미국이 군사적 비용을 거의 안 들이고, 중국은 이 카드를 맞을 때 얼마를 치러야 하는지 아직 모른다.",
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
          body: "다음 편(Ch.2 Demographics)에서는 같은 셈을 \"누가 늙고 누가 젊은가\"라는 차원에서 다시 본다. 미국 합계출산율 1.66 vs 한국 0.72 vs 중국 1.0. 자원에서 풀려난 미국의 여유 위에, 인구가 만들어 낼 새로운 비대칭이 한 겹 더 얹히는 — 그게 향후 30년의 이야기다.",
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

const ch02_demographics: NoteData = {
  slug: "after-pax-americana-2",
  category: "macro",
  status: "published",
  series: SERIES_ID,
  seriesOrder: 2,
  title: "인구라는 덫 — 30년 뒤 당신이 65세가 될 때",
  titleEn: "The Demographic Lock-In — When You Turn 65, Thirty Years From Now",
  description:
    "2025년 한국은 65세 노인 1명을 노동자 3.6명이 부양한다. 2055년엔 1.2명이다. 출생률을 오늘 당장 2.1로 끌어올려도 그 효과는 20–30년 뒤에야 나타난다 — 인구는 정책으로 못 바꾸는 유일한 거시 변수다. 이 덫은 한국·중국·일본·독일을 묶고, 미국과 인도만 빠져나간다. Ch.1 셰일이 미국에 여유를 줬다면, Ch.2 인구는 한국이 가장 먼저 묶이는 변수다.",
  descriptionEn:
    "In 2025 Korea has 3.6 working-age people supporting each retiree. By 2055 it will be 1.2. Even if fertility jumped to 2.1 tomorrow, the effect would arrive 20–30 years later — demographics are the one macro variable policy cannot reverse. The lock binds Korea, China, Japan, and Germany; only the US and India escape. If Ch.1 shale was America's degree of freedom, Ch.2 demographics is the lock that closes on Korea first.",
  date: "2026-05-30",
  readingMinutes: 24,
  keyPoints: [
    "한국 합계출산율 0.72 (2023, 세계 최저) — 만 20세 남자 코호트는 2023년 25.7만 → 2045년 약 12만 명. 현역병 50만 정원 유지가 계산상 불가능해진다.",
    "노년부양비: 2025년 27% (노동자 3.6명/노인 1명) → 2055년 85% (1.2명/1명) → 2080년 106% (역전). 국민연금은 5차 재정계산 기준 2055년 적립금 소진.",
    "중국 인구 1.4128B 정점(2022)에서 감소 시작. UN 추계 2050년 1.32B, Yi Fuxian 추정 1.09B — 130M 갭이 시진핑이 활용 가능한 군·노동·소비 기반의 실제 크기를 결정한다.",
    "미국 2020–2024 인구 성장의 95%가 이민 (2023년은 109%, 자연증가 -0.14M). 트럼프 2기 이민 차단이 강행되면 CBO 저시나리오 기준 2055년 미국 인구가 -33M (한국 인구의 2/3 소실).",
    "일본 잠재성장률: 1990년 3.8% → 2024년 0.5%. 인구학적 노동 축소 → 임금·금리 +2–3%p 상향 → 일본 251% 부채 모델이 다른 어디서도 작동 불가 (Goodhart·Pradhan). Ch.3 부채로 이어지는 다리.",
  ],
  keyPointsEn: [
    "Korea's total fertility rate is 0.72 (2023, the world's lowest). The cohort of 20-year-old males drops from 257k in 2023 to ~120k by 2045 — making a 500k active-duty army arithmetically impossible to sustain.",
    "Old-age dependency: 27% in 2025 (3.6 workers per retiree) → 85% by 2055 (1.2 per retiree) → 106% by 2080 (inversion). The National Pension Fund is projected to be exhausted in 2055 per the 5th Actuarial Review.",
    "China's population peaked at 1.4128B in 2022 and is now declining. UN projects 1.32B by 2050; Yi Fuxian estimates 1.09B — a 130M gap that determines the actual size of the military, labor, and consumer base Xi Jinping can deploy.",
    "95% of US population growth in 2020–2024 came from immigration (109% in 2023 alone, with natural increase at −0.14M). Under CBO's low-immigration scenario, the US 2055 population is 33M smaller — losing 2/3 of South Korea's entire population.",
    "Japan's potential growth: 3.8% (1990) → 0.5% (2024). Demographic labor shrinkage pushes wages and rates up by 2–3 pp (Goodhart-Pradhan) — meaning Japan's 251%-of-GDP debt model cannot be replicated elsewhere. This is the bridge to Ch.3 (Debt).",
  ],
  sections: [
    // ── §1 후크 — 30년 뒤 65세가 되는 당신 ────────────────────────────────────
    {
      heading: "30년 뒤 당신이 65세가 될 때",
      headingEn: "When You Turn 65, Thirty Years From Now",
      blocks: [
        {
          type: "text",
          body: "2025년 한국에서 65세 노인 한 명을 부양하는 노동자(15–64세)는 약 **3.6명**이다. 국민연금, 건강보험, 노인 장기요양보험, 기초연금 — 모든 사회보장 시스템이 이 비율 위에 설계됐다. 보험료를 내는 사람이 받는 사람의 3.6배라는 전제.\n\n그 비율이 30년 뒤엔 **1.2명**이다.\n\n지금 35세인 한국인이 65세가 되는 2055년. 통계청 장래인구추계 중위 시나리오 기준 노년부양비 84.8%. 노동자 1.2명이 노인 1명을 부양한다는 뜻이고, 같은 해 국민연금 적립기금이 소진된다는 점은 5차 재정계산이 이미 못박았다. **그 사이에 정책으로 출생률을 끌어올려도 의미가 없다 — 오늘 태어난 아기가 노동시장에 들어오는 건 2050년대 중반이고, 그때는 이미 흐름이 끝난 뒤다.**\n\nCh.1에서 셰일은 미국을 50년치 안보 가정에서 풀어 줬다. Ch.2에서 인구는 정확히 같은 30년 시계에서 한국을 묶는다. 한쪽이 풀리는 동안 다른 쪽이 묶이는, 같은 시리즈의 거꾸로 뒤집힌 두 편이다.",
          bodyEn: "In 2025, the number of working-age Koreans (15–64) supporting each retiree (65+) is about **3.6**. The National Pension Fund, national health insurance, long-term elderly care, basic pension — every Korean social-security program was designed on the assumption that contributors outnumber recipients 3.6 to 1.\n\nThirty years from now, that ratio is **1.2**.\n\nIf you are 35 in Korea today, you will turn 65 in 2055. Per Statistics Korea's medium projection, the old-age dependency ratio that year is 84.8%. 1.2 workers supporting 1 retiree — and in the same year, the National Pension Fund runs out of reserves, as the 5th Actuarial Review (2023) already nailed down. **No fertility policy can change this — a baby born today will not enter the labor market until the mid-2050s, by which point the lock has already snapped shut.**\n\nIn Ch.1, shale released the US from fifty years of security assumptions. In Ch.2, demographics close a lock on Korea over precisely the same thirty-year clock. Two mirror-image chapters of the same series.",
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "왜 인구학이 \"덫\"인가 — 20–30년 시차의 셈",
            headingEn: "Why \"lock-in\" — the arithmetic of a 20–30 year lag",
            body: "인구학을 다른 거시 변수와 구분 짓는 한 가지가 있다. **결과가 나타나기까지의 시차가 다른 어떤 변수보다 길고, 그 시차 동안은 무엇도 못 바꾼다.**\n\n금리는 한 번의 FOMC 결정으로 바뀐다. 환율은 분 단위로 움직인다. 부채는 일생 안에 갚을 수 있다. 그러나 **\"30년 뒤 노동시장에 들어올 사람의 수\"는 이미 지금 태어난 아기들 명단에 적혀 있고, 그 명단은 정의상 더 늘어날 수 없다.** 출산 장려금·세금 감면·주거 지원으로 출생률을 1.5로 끌어올려도, 그 효과가 노동·소비·세수에 처음 닿는 건 빨라야 20년 뒤다. 그 20년 동안의 노동력 풀은 이미 \"확정\"돼 있다.\n\n그래서 인구학은 거시 변수 중 가장 정확한 예측 도구다. 정확한데 피할 수 없다 — 그게 \"덫\"의 의미다.",
            bodyEn: "One thing separates demographics from every other macro variable. **The lag to outcome is longer than for any other variable, and nothing can change anything during that lag.**\n\nInterest rates change with one FOMC vote. Currencies move by the minute. Debts can be paid down within a lifetime. But **the number of people entering the labor market thirty years from now is already written on the list of babies born today — and by definition that list cannot grow.** Even if cash incentives, tax breaks, and housing support push fertility to 1.5, the first dollar of impact on labor, consumption, or tax revenue arrives at least 20 years later. During those 20 years, the labor pool is already \"decided.\"\n\nThat is what makes demographics the most accurate forecasting tool in macro. Accurate, and unavoidable — which is the meaning of *lock-in*.",
          },
        },
      ],
    },

    // ── §2 6개국의 운명 — TFR ────────────────────────────────────────────────
    {
      heading: "6개국의 운명 — 한 장의 그래프",
      headingEn: "Six Countries, One Graph",
      blocks: [
        {
          type: "text",
          body: "이 흐름의 강도는 합계출산율(TFR — total fertility rate) 한 숫자에 압축된다. 여성 1명이 평생 낳는 자녀 수의 평균. 인구가 자연스럽게 유지되는 임계점이 **2.1명**(대체출산율 — 일부 사망률 보정 포함). 이 선 아래로 내려간 모든 사회는 다음 세대 노동력이 줄어든다는 점이 확정된다.\n\n2023–2024년 확정 수치 기준 6개국의 위치는 이렇다.",
          bodyEn: "The strength of the lock compresses to a single number — the total fertility rate (TFR), the average number of children a woman is projected to bear over her lifetime. The natural replacement threshold is **2.1** (which includes some adjustment for mortality). Every society below that line has already locked in a smaller next-generation labor force.\n\nHere is where six countries actually sit at the confirmed 2023–2024 reading.",
        },
        {
          type: "chart",
          chart: {
            id: "tfr-6countries",
            title: "6개국 합계출산율 (TFR, 2023–2024 확정)",
            titleEn: "Total Fertility Rate, Six Countries (2023–2024 confirmed)",
            caption: "출처: 한국 통계청 KOSIS 2024.02 · CDC NCHS 2024.04 · 일본 후생노동성 2024.06 · Destatis 2024.07 · NBS China + Yi Fuxian 비판 추정 · India SRS 2022. 대체출산율 = 2.10.",
            captionEn: "Source: Statistics Korea (Feb 2024) · CDC NCHS (Apr 2024) · MHLW Japan (Jun 2024) · Destatis (Jul 2024) · NBS China + Yi Fuxian critique · India SRS 2022. Replacement rate = 2.10.",
            data: [
              { country: "인도",     countryEn: "India",         tfr: 1.98, year: 2022, color: "#f59e0b", note: "대체출산율 근접 — 마지막 보너스 국가", noteEn: "Near replacement — the last bonus country" },
              { country: "미국",     countryEn: "United States", tfr: 1.62, year: 2023, color: "#3b82f6", note: "이민 1세대 출산력 가중", noteEn: "Lifted by first-generation immigrants" },
              { country: "독일",     countryEn: "Germany",       tfr: 1.35, year: 2023, color: "#64748b", note: "이민으로 보전하는 모델", noteEn: "Backfilled through immigration" },
              { country: "일본",     countryEn: "Japan",         tfr: 1.20, year: 2023, color: "#8b5cf6", note: "한국보다 30년 앞서 늙은 나라", noteEn: "Aged 30 years ahead of Korea" },
              { country: "중국",     countryEn: "China",         tfr: 1.00, year: 2023, color: "#dc2626", note: "공식 1.00 / Yi Fuxian 0.8~1.0", noteEn: "Official 1.00 / Yi Fuxian 0.8–1.0" },
              { country: "대한민국", countryEn: "South Korea",   tfr: 0.72, year: 2023, color: "#16a34a", note: "통계청 확정 — 세계 최저", noteEn: "Statistics Korea — global low" },
            ],
            replacementLine: 2.1,
          },
        },
        {
          type: "text",
          body: "여기서 핵심은 단순한 순위가 아니다. **대체출산율 2.1을 넘는 큰 나라는 사실상 인도 한 곳뿐**이고, 그 인도조차 1.98로 임계에 도달했다 — 2030년대 어느 시점에 인도도 같은 선 아래로 내려간다. 미국 1.62는 \"이민 1세대 여성\"의 높은 출산력이 끌어올린 평균이다. 그 이민이 멈추면 미국 TFR도 1.4 아래로 떨어진다.\n\n그러니까 이 그래프의 진짜 메시지는 \"한국이 꼴찌\"가 아니라 **\"2030년대 이후 인구가 늘어나는 나라가 사실상 사라진다\"** 이다. 자본·노동·소비가 늘 어디에서 나올지 — 이 그래프 한 장에 다음 50년의 답이 들어 있다.",
          bodyEn: "The point here is not the ranking. **The only large country still above replacement is India** — and at 1.98, even India is at the threshold; some time in the 2030s, it crosses below the line. The US 1.62 is an average lifted by the high fertility of first-generation immigrants. The day immigration stops, US fertility drops below 1.4.\n\nSo the real message of this chart is not *Korea is last*. It is **after the 2030s, almost no large country has a growing population.** Where future capital, labor, and consumption will come from — this chart contains the answer for the next fifty years.",
        },
      ],
    },

    // ── §3 한국 — 0.72의 산수 ────────────────────────────────────────────────
    {
      heading: "한국 — 0.72라는 숫자의 무게",
      headingEn: "Korea — The Arithmetic of 0.72",
      blocks: [
        {
          type: "text",
          body: "Ch.1에서 한국·일본 이야기를 §3에 일찍 놓았던 것과 같은 이유로, Ch.2에서도 한국을 §3에 둔다. 인구라는 변수가 가장 먼저 실제로 작동하는 나라가 한국이기 때문이다.\n\n한국 출생아 수는 2000년 64만 명에서 2023년 23만 명까지 떨어졌다 — 23년 만에 **64% 감소**. 같은 23년 동안 한국 GDP는 4배 커졌으니, 거시 변수가 보통 움직이는 방향과 완전히 정반대로 갔다는 뜻이다. 2024년에는 +3.6% YoY 반등(혼인 증가 효과)이 있었지만, 이는 \"24만 명대에서 25만 명대로 올라온 것\"일 뿐 추세가 꺾인 건 아니다.",
          bodyEn: "For the same reason Ch.1 put Korea / Japan early in §3, Ch.2 does the same. The country where the demographic lock snaps fastest is Korea.\n\nKorean annual births fell from 640k in 2000 to 230k in 2023 — a **64% drop in 23 years**. Over those same 23 years, Korean GDP roughly quadrupled, so the population variable moved in completely the opposite direction from typical macro. 2024 brought a +3.6% YoY rebound (lifted by rising marriages), but moving from the 240k zone to the 250k zone is not a trend reversal — it is noise on top of a structural collapse.",
        },
        {
          type: "chart",
          chart: {
            id: "korea-births",
            title: "한국 출생아 수 (2000–2024, 천 명)",
            titleEn: "Korea Annual Births (2000–2024, thousands)",
            caption: "출처: 통계청 KOSIS 인구동향조사. 2024년 +3.6% YoY는 혼인 증가가 1년 시차로 반영된 효과.",
            captionEn: "Source: Statistics Korea KOSIS Vital Statistics. The 2024 +3.6% YoY reflects a one-year lag from rising marriages.",
            data: [
              { year: 2000, births: 640, event: "밀레니엄 베이비" },
              { year: 2002, births: 497 },
              { year: 2005, births: 438 },
              { year: 2010, births: 470 },
              { year: 2012, births: 484 },
              { year: 2015, births: 438 },
              { year: 2017, births: 357 },
              { year: 2018, births: 327 },
              { year: 2019, births: 302 },
              { year: 2020, births: 272, event: "첫 30만 미달" },
              { year: 2021, births: 261 },
              { year: 2022, births: 249 },
              { year: 2023, births: 230, event: "TFR 0.72 세계 최저" },
              { year: 2024, births: 238, event: "+3.6% YoY 반등" },
            ],
            annotations: [
              { year: 2020, label: "30만 미달", labelEn: "Sub-300k" },
              { year: 2023, label: "TFR 0.72", labelEn: "TFR 0.72" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "가장 차가운 한 줄 — 만 20세 남자 코호트",
            headingEn: "The coldest number — the 20-year-old male cohort",
            body: "한국 현역병 정원은 약 50만 명. 18개월 복무 기준 매년 약 25만 명이 입대해야 정원이 유지된다. **만 20세 남자 코호트는 2023년 25.7만 → 2045년 약 12만 명.** 2045년에 만 20세 남자를 *전원* 입대시켜도 36만에 못 미친다 — 50만 정원은 셈을 어떻게 해도 불가능해진다. 국방부가 비공식으로 \"2040년대 36만 명 감축안\"을 검토 중이라는 사실은, **셰일이 미국 외교에 여유를 줬다면 같은 30년 시계 반대편에서 한국 안보가 산술적으로 줄어든다는** 가장 차가운 증거다.",
            bodyEn: "Korea's active-duty target is roughly 500,000. With 18-month service, ~250k men must enlist each year to hold that number. **The 20-year-old male cohort: 257k in 2023 → ~120k by 2045.** In 2045, even drafting *every single* 20-year-old man falls short of 360k — a 500k active-duty force becomes *mathematically* impossible. The Ministry of National Defense is already unofficially reviewing a downsize to ~360k for the 2040s. That is the coldest piece of evidence I can produce for the mirror image of Ch.1 — **the exact inverse of America's shale-given freedom is Korea's mathematically locked-in security shrinkage.**",
          },
        },
        {
          type: "chart",
          chart: {
            id: "korea-dependency",
            title: "한국 노년부양비 (2025–2080, %)",
            titleEn: "Korea Old-Age Dependency Ratio (2025–2080, %)",
            caption: "출처: 통계청 장래인구추계 2022 중위 시나리오 (2023.12 발표). 노년부양비 = 65+ 인구 / 15–64세 인구 × 100.",
            captionEn: "Source: Statistics Korea Population Projections 2022 (medium variant, released Dec 2023). Dependency ratio = 65+ / 15–64 × 100.",
            data: [
              { year: 2025, ratio: 27.4 },
              { year: 2030, ratio: 38.6 },
              { year: 2035, ratio: 49.4 },
              { year: 2040, ratio: 60.5 },
              { year: 2045, ratio: 69.2 },
              { year: 2050, ratio: 78.6 },
              { year: 2055, ratio: 84.8, event: "국민연금 적립기금 소진" },
              { year: 2060, ratio: 90.4 },
              { year: 2070, ratio: 100.6 },
              { year: 2080, ratio: 106.0 },
            ],
            annotations: [
              { year: 2055, label: "연금 소진", labelEn: "Pension exhausted" },
              { year: 2070, label: "1:1 도달", labelEn: "1:1 reached" },
            ],
          },
        },
        {
          type: "metrics",
          items: [
            { label: "노년부양비 (2025 → 2055)", labelEn: "Dependency (2025 → 2055)", value: "27% → 85%", valueEn: "27% → 85%", sub: "노동자 3.6명 → 1.2명/노인 1인", subEn: "3.6 → 1.2 workers per retiree", color: "text-red-600" },
            { label: "국민연금 적립금 소진",      labelEn: "Pension Fund Exhausted",   value: "2055년",  valueEn: "2055",     sub: "5차 재정계산 (2023.03)",         subEn: "5th Actuarial Review (Mar 2023)", color: "text-amber-600" },
            { label: "만 20세 남자 코호트",        labelEn: "20-y-old Male Cohort",     value: "257k → 120k", valueEn: "257k → 120k", sub: "2023 → 2045 (통계청 추계)",     subEn: "2023 → 2045 (Statistics Korea)",  color: "text-red-600" },
          ],
        },
      ],
    },

    // ── §4 중국 — -130M의 시간표 ─────────────────────────────────────────────
    {
      heading: "중국 — 시진핑이 서두르는 이유는 인구 곡선에 있다",
      headingEn: "China — Why Xi Hurries Is Written in the Population Curve",
      blocks: [
        {
          type: "text",
          body: "중국 총인구는 2022년 14억 1,260만 명으로 정점을 찍은 뒤 감소로 돌아섰다. NBS 공식 2024년 14억 830만 명. UN World Population Prospects 2024는 2050년 13억 1,700만 명을 추계한다 — 정점에서 약 9,500만 명 감소.\n\n그런데 위스콘신대 인구학자 **Yi Fuxian**(이부현)은 NBS 수치 자체에 의구심을 제기한다. 그가 *BMJ Global Health* (2023)에 발표한 추정으로는 중국 실제 인구가 2024년 시점 약 12억 5,500만 명. **공식치보다 1억 3,000만 명 적다.** 이 130M 갭은 단순한 학술 논쟁이 아니다 — 시진핑이 활용 가능한 군 동원 인력, 노동시장, 내수 소비자의 *실제* 규모를 결정한다.",
          bodyEn: "China's total population peaked at 1.4126B in 2022, then began declining. NBS's 2024 official figure is 1.4083B. UN WPP 2024 projects 1.317B by 2050 — about 95M below the peak.\n\nBut Wisconsin demographer **Yi Fuxian** has openly challenged the NBS numbers themselves. His estimate, published in *BMJ Global Health* (2023), puts China's actual 2024 population at roughly 1.255B — **130M below the official figure.** That gap is not a footnote in an academic debate; it determines the *actual* size of the military mobilization base, the labor market, and the domestic consumer pool that Xi Jinping can deploy.",
        },
        {
          type: "chart",
          chart: {
            id: "china-pop-trajectory",
            title: "중국 총인구 추이 (1980–2100, 백만 명)",
            titleEn: "China Total Population Trajectory (1980–2100, millions)",
            caption: "출처: NBS China 7th Census 2021 + 2024 Communiqué (공식) · UN WPP 2024 medium variant · Yi Fuxian BMJ Global Health 2023 (비판 추정). 격차는 2020 이후 점진 확대.",
            captionEn: "Source: NBS 7th Census 2021 + 2024 Communiqué (official) · UN WPP 2024 medium · Yi Fuxian, BMJ Global Health 2023 (critique). The gap widens progressively after 2020.",
            data: [
              { year: 1980, official: 987,    yiFuxian: 987 },
              { year: 1990, official: 1143,   yiFuxian: 1143 },
              { year: 2000, official: 1263,   yiFuxian: 1243 },
              { year: 2010, official: 1341,   yiFuxian: 1290 },
              { year: 2015, official: 1379,   yiFuxian: 1285 },
              { year: 2020, official: 1412,   yiFuxian: 1280 },
              { year: 2022, official: 1412.6, yiFuxian: 1270, event: "공식 정점 — 첫 감소" },
              { year: 2024, official: 1408.3, yiFuxian: 1255 },
              { year: 2030, official: 1394,   yiFuxian: 1210 },
              { year: 2040, official: 1357,   yiFuxian: 1140 },
              { year: 2050, official: 1317,   yiFuxian: 1090, event: "−95M (UN) vs −180M (Yi)" },
              { year: 2070, official: 1015,   yiFuxian: 800 },
              { year: 2100, official: 633,    yiFuxian: 488 },
            ],
            annotations: [
              { year: 2022, label: "공식 정점", labelEn: "Official peak" },
              { year: 2050, label: "Δ −95M vs −180M", labelEn: "Δ −95M vs −180M" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "시진핑이 빨리 결정해야 하는 이유는 인구 곡선 안에 있다",
            headingEn: "Xi's timeline is the first derivative of the population curve",
            body: "시진핑이 \"중국 인민해방군 현대화 완성\"의 목표 시점으로 잡은 해는 **2027년** (인민해방군 창설 100주년 + 시진핑 임기 중 마지막 군 개혁 창문). 그해 만 18세 남자 코호트(2009년생)는 약 800만 명이다. **2035년이면 약 860만 명**(잠깐 반등했다가 다시 감소), **2049년 건국 100주년 시점엔 580만 명**까지 떨어진다.\n\n이 곡선이 매년 더 가파르게 내려간다는 사실 자체가 시진핑의 판단을 재촉한다. 코호트가 줄어들수록 \"군사력으로 무언가를 시도하려면 지금이 마지막 정점\"이라는 셈이 강해진다. 대만·남중국해 결정의 *시간 압박*은 \"누가 더 빨리 결정하느냐\"라는 정치 의지가 아니라, **이 인구 곡선이 해마다 좁아진다는 단순한 셈에서 나온다.** 셰일이 미국 외교에 여유를 줬다면, 인구 곡선은 중국 외교를 *재촉한다*.",
            bodyEn: "Xi Jinping has set **2027** as the target year for *complete modernization of the People's Liberation Army* (the 100th anniversary of the PLA, and the last window of his current term to execute it). That year's cohort of 18-year-old males — those born in 2009 — is roughly 8.0M. **By 2035 it is 8.6M** (after a small bounce), and **by the 2049 PRC centennial it has fallen to 5.8M**.\n\nThe first derivative of this curve is Xi's decision function. The smaller each year's cohort, the stronger the math behind *if we are going to do anything militarily, now is the peak*. The *time pressure* on Taiwan and South China Sea decisions does not come from political will alone — it comes from the **population curve narrowing every year.** As shale freed US foreign policy, the demographic curve *hurries* Chinese foreign policy.",
          },
        },
      ],
    },

    // ── §5 미국 — 1.62의 비밀은 이민 ─────────────────────────────────────────
    {
      heading: "미국 — 1.62의 비밀은 이민이다",
      headingEn: "America — The Secret of 1.62 Is Immigration",
      blocks: [
        {
          type: "text",
          body: "Ch.1에서 미국이 \"풀려난\" 이유가 셰일이었다면, Ch.2에서 미국이 \"덜 잠긴\" 이유는 이민이다. 두 변수 모두 미국 거시의 비대칭 자유도를 만든다 — 그리고 두 번째 변수는 첫 번째보다 *훨씬 더 정치적*이다.\n\n**미국 2020–2024년 인구 성장 9.7M 중 9.2M, 즉 95%가 순이민**이다. 2023년 단년으로는 자연증가가 -0.14M(첫 마이너스), 순이민이 +1.78M — **이민 기여율 109%**. 자연증가가 음수라는 말은, 이민이 없었다면 미국 인구가 이미 줄고 있다는 뜻이다.",
          bodyEn: "If shale is what *freed* America in Ch.1, immigration is what keeps America *less locked* in Ch.2. Both variables generate asymmetric macro freedom for the US — and the second is **far more political** than the first.\n\n**Of US population growth of 9.7M over 2020–2024, 9.2M — 95% — came from net immigration.** In 2023 alone, natural increase was −0.14M (the first negative on record) and net immigration was +1.78M — an **immigration contribution of 109%.** A negative natural increase means that without immigration, the US population would *already* be shrinking.",
        },
        {
          type: "chart",
          chart: {
            id: "us-pop-decomp",
            title: "미국 인구 성장 분해 — 자연증가 vs 순이민 (백만 명)",
            titleEn: "US Population Growth Decomposition — Natural vs Immigration (millions)",
            caption: "출처: US Census Bureau Population Estimates 2024 + ACS 5-year 2018–2023 + CBO Demographic Outlook 2025 + Pew Research 2024.",
            captionEn: "Source: US Census Bureau Population Estimates 2024 + ACS 5-year 2018–2023 + CBO Demographic Outlook 2025 + Pew Research 2024.",
            data: [
              { period: "2000s 10년",   periodEn: "2000s decade", natural: 17.0,  immigration: 10.3, immSharePct: 38 },
              { period: "2010s 10년",   periodEn: "2010s decade", natural: 12.0,  immigration: 10.7, immSharePct: 47 },
              { period: "2020–24 (4년)", periodEn: "2020–24 (4y)", natural: 0.5,   immigration: 9.2,  immSharePct: 95 },
              { period: "2023 단년",    periodEn: "2023 only",    natural: -0.14, immigration: 1.78, immSharePct: 109 },
              { period: "2024 단년",    periodEn: "2024 only",    natural: 0.52,  immigration: 2.78, immSharePct: 84 },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "warning",
            heading: "트럼프 2기 이민 차단이 만들어 내는 결과",
            headingEn: "The arithmetic of a Trump-2 immigration freeze",
            body: "CBO Demographic Outlook 2025는 미국 인구의 2055년 시점을 두 시나리오로 추계한다.\n\n- **베이스라인 (이민 정상화):** 2055년 3.84억 명.\n- **저이민 시나리오 (트럼프 2기 강행):** 2055년 3.51억 명.\n\n**차이가 3,300만 명이다 — 한국 인구의 2/3이 통째로 사라지는 규모.** 트럼프 2기 이민 정책이 셰일과 정확히 같은 무게의 거시 변수가 되는 이유다. 노동시장, 사회보장 흑자, 잠재성장률 — 모두 이 3,300만 명이 들어오느냐 마느냐로 갈린다.\n\n그리고 이 시나리오는 미국 *내부*의 결정이지만, 그 결과의 청구서는 글로벌이다. 미국 노동력이 33M 줄면 글로벌 자본은 갈 곳을 잃고, 글로벌 자본이 갈 곳을 잃으면 한국·일본 자산 가격이 흔들린다.",
            bodyEn: "CBO Demographic Outlook 2025 projects the US 2055 population under two scenarios:\n\n- **Baseline (immigration normalizes):** 384M by 2055.\n- **Low-immigration (Trump-2 enforcement):** 351M.\n\n**The gap is 33M — equal to two-thirds of South Korea's entire population, gone.** That is why Trump-2 immigration policy is a macro variable of exactly the same weight as shale. Labor markets, social-security surpluses, potential growth — all of it pivots on whether those 33M people enter the country.\n\nAnd while the decision is *internal* to America, the bill is global. If the US labor force is 33M smaller, global capital loses a destination — and when global capital loses a destination, Korean and Japanese asset prices feel it first.",
          },
        },
      ],
    },

    // ── §6 일본 — 한국보다 30년 앞서 같은 길을 간 나라 ───────────────────────
    {
      heading: "일본 — 한국보다 30년 앞서 같은 길을 간 나라",
      headingEn: "Japan — What 30 Years of Aging Has Already Shown",
      blocks: [
        {
          type: "text",
          body: "한국이 2025년에 서 있는 자리에 일본은 1995년에 서 있었다. 정확히 30년 시차. **그래서 일본은 한국에 가장 정직한 거울이다.** 일본이 1990년대 이후 거시 변수에서 그린 경로가, 한국이 2025–2055년에 그릴 경로의 기준선이 된다.\n\n그중 가장 단순하면서 가장 강력한 한 가지가 **잠재성장률**이다. 한 경제가 인플레 없이 낼 수 있는 최대 성장률. 노동·자본·생산성으로 쪼개지는데, 인구가 줄어들기 시작하면 잠재성장률이 가장 먼저 떨어진다.",
          bodyEn: "Where Korea stands in 2025, Japan stood in 1995. A clean 30-year lead. **That makes Japan the most honest mirror Korea has.** The path Japan's macro variables traced after 1990 is the baseline for what Korea's macro will trace 2025–2055.\n\nThe simplest and most powerful one of those variables is **potential growth** — the maximum non-inflationary growth rate of an economy. It decomposes into labor, capital, and productivity, and when demographic labor shrinkage starts, potential growth falls first.",
        },
        {
          type: "chart",
          chart: {
            id: "japan-potential-growth",
            title: "일본 잠재성장률 (1990–2024, %)",
            titleEn: "Japan Potential Growth Rate (1990–2024, %)",
            caption: "출처: IMF Japan Article IV 2024 + 한국은행 BOK 이슈노트 2023.11 + Cabinet Office 経済財政白書 2024.",
            captionEn: "Source: IMF Japan Article IV 2024 + Bank of Korea Issue Note Nov 2023 + Cabinet Office Annual Economic & Fiscal Report 2024.",
            data: [
              { year: 1990, potential: 3.8, event: "자산 거품 정점" },
              { year: 1995, potential: 1.8, event: "인구 정점 신호" },
              { year: 2000, potential: 1.2 },
              { year: 2005, potential: 0.8 },
              { year: 2010, potential: 0.5 },
              { year: 2015, potential: 0.4, event: "아베노믹스" },
              { year: 2020, potential: 0.2, event: "코로나" },
              { year: 2024, potential: 0.5 },
            ],
            annotations: [
              { year: 1990, label: "거품 정점", labelEn: "Asset bubble peak" },
              { year: 2015, label: "아베노믹스", labelEn: "Abenomics" },
            ],
          },
        },
        {
          type: "callout",
          callout: {
            variant: "insight",
            heading: "Goodhart-Pradhan 명제 — Ch.3 부채로 이어지는 다리",
            headingEn: "The Goodhart-Pradhan thesis — bridge to Ch.3 (Debt)",
            body: "Charles Goodhart(전 영란은행 통화정책위원)과 Manoj Pradhan은 2020년 *The Great Demographic Reversal*에서 강력한 명제를 하나 내세웠다 — **\"지난 40년 동안의 글로벌 디스인플레이션은 중국·동구권 노동력이 글로벌 시장에 합류하면서 만든 일회성 사건이었고, 그 효과는 이제 끝났다. 인구가 줄어들기 시작한 이상 향후 30년은 임금·금리가 구조적으로 2–3%p 더 높게 형성된다.\"**\n\n이 명제가 맞다면 일본이 35년간 누린 \"부채 251% + 제로금리\" 조합은 **다른 어디에서도 다시 만들어지지 않는다.** 한국이 일본 경로를 따라간다는 통념은 바로 이 지점에서 깨진다. 한국은 일본처럼 늙되, *금리는 일본처럼 떨어지지 않는다*. 같은 인구 충격에 부채 부담은 일본보다 훨씬 가파르게 쌓인다.\n\n그래서 Ch.3는 부채다. 인구가 미국·중국·한국의 비용 구조를 다시 짜고 난 다음, 그 비용을 누가 빌려서 누구한테 갚는지가 다음 챕터의 변수다.",
            bodyEn: "Charles Goodhart (former BoE MPC member) and Manoj Pradhan, in *The Great Demographic Reversal* (2020), put forward a powerful thesis — **\"the last 40 years of global disinflation was a one-off event driven by the integration of Chinese and Eastern European labor into the global market; that effect is now exhausted. With demographic labor shrinkage beginning, wages and rates structurally move up by 2–3 percentage points over the next 30 years.\"**\n\nIf that thesis is correct, the *Japan combo* of 251%-of-GDP debt at zero rates **does not replicate anywhere else.** The assumption that Korea simply follows Japan's path breaks at exactly that point. Korea ages like Japan — but *Korean rates do not fall like Japan's*. The same demographic lock arrives with a debt-service curve far steeper than Japan ever faced.\n\nThat is why Ch.3 is *Debt*. After demographics rewrites the cost function for America, China, and Korea, the next bridge is *who borrows to cover the gap, and at what price*.",
          },
        },
      ],
    },

    // ── §7 인도 — 마지막 보너스 국가 ─────────────────────────────────────────
    {
      heading: "인도 — 인구 보너스를 받는 마지막 큰 나라",
      headingEn: "India — The Last Demographic-Dividend Country",
      blocks: [
        {
          type: "text",
          body: "이 흐름에서 *덜* 묶이는 두 번째 큰 나라가 인도다. 미국이 이민으로 메운다면, 인도는 *아직* 메울 필요가 없다. TFR 1.98로 대체출산율 바로 아래까지 왔지만, 총인구는 2061년까지 늘어난다(UN WPP 2024 추계 정점 17억 명). 더 중요한 변수는 **생산가능인구 비율** — 15–64세가 전체 인구에서 차지하는 비중. 인도의 이 비율은 2050년대 초중반 정점(약 68%)에 도달한 뒤에야 내려가기 시작한다.\n\n경제학에서 \"인구 보너스\"란 이 비율이 올라가는 동안 자연스럽게 따라오는 성장 가속을 말한다. **2025–2055년의 인도는 인구 보너스를 받는 유일한 큰 나라다.** 그 30년 동안 글로벌 자본이 인도로 흐를 구조적 이유가 한 줄 더 늘어난다는 뜻이다.",
          bodyEn: "The second large country *less* affected by the lock is India. America offsets through immigration; India *does not yet need to offset*. TFR is 1.98 — already just below replacement — but the cumulative population keeps growing until 2061, peaking around 1.7B (UN WPP 2024). The variable that matters most is **the working-age share** of the population (15–64). India's working-age share keeps rising until the mid-2050s, where it tops out around 68%, before turning down.\n\nEconomists call the growth tailwind during a rising working-age share the *demographic dividend*. **For 2025–2055, India will be the only large country in the world receiving that dividend.** Over that 30-year window, the structural reasons for global capital to flow to India grow by at least one more line.",
        },
        {
          type: "callout",
          callout: {
            variant: "example",
            heading: "한국 투자자가 봐야 할 다섯 줄 (Ch.2 인구학 버전)",
            headingEn: "Five lines a Korean investor should watch (Ch.2 demographics edition)",
            body: "1) **미국 이민 정책 트래커** — 자연증가 음수에 진입한 미국에서 이민이 GDP·노동·세수의 *유일한* 성장 동력이 됐다. 트럼프 2기 단속 강도 = S&P 500 잠재 EPS 성장률의 가장 큰 단일 변수.\n2) **한국 인구 인프라 관련주 재평가** — 노동력 부족 = 자동화·로봇·이민 인프라 수혜. 두산로보틱스·레인보우로보틱스·한솔로지스틱스 5년 단위로 재평가 여지.\n3) **인도 자본 흐름** — 2025–2055년 글로벌 유일 인구 보너스. ETF (INDA, NIFTY 50) 기본 노출 + 인도 인프라·소비주.\n4) **한국 금리·국채 곡선** — Goodhart-Pradhan 명제가 맞으면 한국 장기금리는 일본처럼 안 떨어진다. 30년 국채 + 한국 보험사·연금사 자산 듀레이션 *반대로* 봐야 함.\n5) **중국 디플레 vs 일본 디플레** — Yi Fuxian 130M 갭이 맞다면 중국 내수가 일본보다 빠르게 축소된다. 중국 소비재 다국적 기업 (애플·테슬라·LVMH·나이키) 중국 매출 가이던스 = 핵심 신호.",
            bodyEn: "1) **US immigration policy tracker** — with natural increase now negative, immigration is the *only* engine of US labor, GDP, and tax-base growth. The intensity of Trump-2 enforcement is the single biggest variable in S&P 500 potential EPS growth.\n2) **Re-rating Korean labor-substitution names** — labor shortage = automation, robotics, and immigration infrastructure as structural beneficiaries. Doosan Robotics, Rainbow Robotics, Hansol Logistics — five-year re-rating room.\n3) **India capital flows** — the only large country with a demographic dividend in 2025–2055. Core ETF exposure (INDA, NIFTY 50) plus Indian infrastructure and consumer plays.\n4) **Korean rates and yield curve** — if the Goodhart-Pradhan thesis is right, Korean long rates do not fall the way Japan's did. Position 30Y KTB and Korean insurer / pension duration on the *opposite* assumption.\n5) **Chinese deflation vs Japanese deflation** — if Yi Fuxian's 130M gap holds, Chinese domestic demand contracts faster than Japan's ever did. Multinationals heavily exposed to Chinese consumers (Apple, Tesla, LVMH, Nike) — China revenue guidance becomes the critical signal.",
          },
        },
      ],
    },

    // ── §8 마무리 — 다시 65세의 당신 ─────────────────────────────────────────
    {
      heading: "다시 65세의 당신 — 무엇이 달라지나",
      headingEn: "Back to 65-Year-Old You — What Actually Changes",
      blocks: [
        {
          type: "text",
          body: "글의 처음으로 돌아온다. 30년 뒤 65세가 되는 한국 독자 — 그 시점에 *구체적으로* 무엇이 다른가.\n\n**2025년 당신이 보고 있는 것:** 국민연금이 매월 들어오고, 노동자 3.6명이 당신 한 명을 떠받친다. 의료비는 국민건강보험이 80%를 부담한다. 군은 50만 명의 현역병으로 운영된다. 잠재성장률은 2%대다. 모든 사회·재정·안보 시스템이 \"인구가 천천히 늘어나는 나라\"라는 전제 위에 서 있다.\n\n**2055년 당신이 보게 될 것:** 국민연금 적립금은 2055년에 소진되고, 그 이후엔 *동시대 노동자가 내는 보험료*만으로 같은 시점 노인 연금을 지급한다 — 그런데 노동자 1.2명이 노인 1명을 부양해야 한다. 모자라는 부분은 *세금 인상·연금 삭감·수급 연령 상향* 세 카드로 메운다. 국민건강보험 보장률은 60% 아래로 떨어지고, 사적 의료보험 비중이 일본 수준(20%)까지 커진다. 군은 36만 명 — 그것도 *모든 코호트가 입대한다*는 전제 위에서. 잠재성장률은 일본의 1990–2024년 경로를 따라간다면 0.5–1.0% 사이에 자리 잡는다.\n\n**그래서 셰일(Ch.1)이 \"미국 안보 비용의 청구서가 한국 쪽으로 옮겨 오는 이야기\"였다면, 인구(Ch.2)는 \"그 청구서를 받을 한국의 지불 능력 자체가 줄어드는 이야기\"다.** 두 변수가 정확히 같은 30년 동안 같은 방향으로 한국을 압박한다. 한쪽이 풀리는 동안 다른 쪽이 묶인다 — 그게 이번 챕터를 \"덫\"이라고 부른 이유다.",
          bodyEn: "Back to the opening. The Korean reader who will be 65 thirty years from now — what is *concretely* different at that point?\n\n**What you see in 2025:** Pension checks arrive monthly. 3.6 working-age people support each retiree. National health insurance covers 80% of medical cost. The military runs on 500,000 active-duty soldiers. Potential growth runs in the 2% range. Every social, fiscal, and security system stands on the assumption *the population grows slowly*.\n\n**What you will see in 2055:** The National Pension Fund is exhausted that very year; from that point on, retirees are paid only from *current-year worker contributions* — but only 1.2 workers exist per retiree. The arithmetic gap is filled by three cards: *higher taxes, smaller pension checks, later eligibility*. National health insurance coverage falls below 60%, and private health insurance grows toward Japan's 20% share. The army shrinks to 360,000 — *and only if every cohort enlists*. Potential growth, on Japan's 1990–2024 path, settles at 0.5–1.0%.\n\n**If Ch.1 (shale) was the story of America's security bill being readdressed to Korea, Ch.2 (demographics) is the story of Korea's ability to pay that bill shrinking at the same time.** Both variables push Korea in the same direction over precisely the same thirty-year clock. That is why I called it a *lock-in*.",
        },
        {
          type: "table",
          table: {
            id: "scenarios-2055-three-paths",
            title: "2055년 한국 — 세 가지 경로",
            titleEn: "Korea 2055 — Three Paths",
            headers: ["경로", "조건", "결과", "한국 독자에게 의미"],
            headersEn: ["Path", "Condition", "Outcome", "What it means for a Korean reader"],
            rows: [
              ["A. 일본 경로",      "TFR 0.8–1.0 유지 + 이민 5% 이하 + 일본형 부채 누적", "GDP 잠재 0.5–1.0%, 부채/GDP 200%↑", "연금 30% 삭감 + 수급 70세 + 사적의료 일본화"],
              ["B. 독일 경로",      "이민 연 10–15만 명 + 자동화 적극 + EU형 사회보장 개혁", "GDP 잠재 1.0–1.5%, 부채/GDP 130%대", "이민자 200만 명 시대, 사회적 갈등 거시 risk"],
              ["C. 통일 시나리오", "북한 흡수 통일 + 청년 인구 +1,500만 명 유입", "10년 충격 (GDP −5% 단기) 후 정상화", "1990년 독일 통일 모델 — 단 한국은 부채 여력 부족"],
            ],
            rowsEn: [
              ["A. Japan path",       "TFR 0.8–1.0 + immigration <5% + Japan-style debt buildup",   "Potential GDP 0.5–1.0%, debt/GDP >200%",   "Pension cuts of ~30%, retirement age 70, Japanese-level private medical"],
              ["B. Germany path",     "Net immigration ~100–150k / yr + aggressive automation + EU-style reforms", "Potential GDP 1.0–1.5%, debt/GDP ~130%",   "Two million immigrants by 2055; social tension becomes macro risk"],
              ["C. Reunification",    "North-South integration adds ~15M young people",             "10-year shock (−5% GDP near-term) then normalization", "1990 German model — but Korea has far less debt capacity"],
            ],
            caption: "셰일이 Ch.1의 출발 조건을 바꿨듯, 인구가 Ch.2의 출발 조건을 바꾼다. 세 경로의 차이는 정책이 아니라 *이민 + 자동화 + 통일* 세 변수의 조합으로 결정된다.",
            captionEn: "As shale changed the starting condition in Ch.1, demographics changes it in Ch.2. The differences between the three paths are not set by fertility policy — they are set by the combination of *immigration + automation + reunification*.",
          },
        },
        {
          type: "text",
          body: "다음 편(Ch.3 Debt)에서는 같은 셈을 부채 차원에서 본다. 미국 연방 부채 \\$34조, 한국 가계+기업+정부 부채 합산 GDP 252%, 일본 251% — 그러나 셋이 짊어진 무게는 같지 않다. **인구가 깎아 놓은 잠재성장률 위에 부채가 쌓일 때, 그 부채를 누가 빌려서 누구한테 갚는지가 향후 30년의 마지막 변수다.**",
          bodyEn: "Ch.3 (Debt) runs the same arithmetic across the debt dimension. US federal debt \\$34T, Korea's household + corporate + government debt at 252% of GDP, Japan at 251% — but the three carry different weights. **When debt piles up on top of demographically-locked declining potential growth, the last variable of the next thirty years is who borrows, and to whom the debt is owed.**",
        },
      ],
    },
  ],
  references: [
    // ── 1차 자료: UN·OECD·IMF ──────────────────────────────────────────────────
    { id: 1,  title: "World Population Prospects 2024 Revision", source: "UN DESA Population Division", year: "2024-07", url: "https://population.un.org/wpp/" },
    { id: 2,  title: "Pensions at a Glance 2023", source: "OECD", year: "2023-12", url: "https://www.oecd.org/publications/oecd-pensions-at-a-glance-19991363.htm" },
    { id: 3,  title: "Fiscal Monitor October 2024", source: "IMF", year: "2024-10" },
    { id: 4,  title: "Japan Article IV Consultation 2024", source: "IMF", year: "2024-04" },
    // ── 1차 자료: 한국 ─────────────────────────────────────────────────────────
    { id: 5,  title: "인구동향조사 (Vital Statistics, monthly)", source: "통계청 KOSIS", year: "2024-08", url: "https://kosis.kr/" },
    { id: 6,  title: "장래인구추계 2022~2072", source: "통계청", year: "2023-12" },
    { id: 7,  title: "국민연금 제5차 재정계산 결과", source: "보건복지부 · 국민연금 재정추계위원회", year: "2023-03" },
    { id: 8,  title: "재정전망 2024", source: "KDI", year: "2024-11" },
    { id: 9,  title: "BOK 이슈노트 — 일본 잠재성장률 분석", source: "한국은행", year: "2023-11" },
    // ── 1차 자료: 중국 ─────────────────────────────────────────────────────────
    { id: 10, title: "Seventh National Population Census 2020", source: "National Bureau of Statistics of China", year: "2021-05" },
    { id: 11, title: "2024 Statistical Communiqué", source: "NBS China", year: "2025-01" },
    { id: 12, author: "Yi Fuxian", title: "China's population may be 130 million smaller than official statistics suggest", source: "BMJ Global Health", year: "2023", url: "https://gh.bmj.com/" },
    { id: 13, author: "Yi Fuxian", title: "Big Country with an Empty Nest", source: "Independent monograph", year: "2021" },
    // ── 1차 자료: 미국 ─────────────────────────────────────────────────────────
    { id: 14, title: "Population Estimates 2024", source: "US Census Bureau", year: "2024-12", url: "https://www.census.gov/programs-surveys/popest.html" },
    { id: 15, title: "National Vital Statistics System 2023–2024", source: "CDC NCHS", year: "2024-04" },
    { id: 16, title: "Demographic Outlook 2025–2055", source: "Congressional Budget Office", year: "2025-01" },
    { id: 17, title: "Immigration Reports 2024", source: "Pew Research Center", year: "2024" },
    // ── 1차 자료: 일본 · 독일 · 인도 ────────────────────────────────────────────
    { id: 18, title: "将来推計人口 (Population Projections) 2023", source: "国立社会保障・人口問題研究所 (IPSS)", year: "2023-04" },
    { id: 19, title: "経済財政白書 (Annual Economic & Fiscal Report) 2024", source: "Cabinet Office Japan", year: "2024-08" },
    { id: 20, title: "Bevölkerungsvorausberechnung 15", source: "Destatis (Federal Statistical Office Germany)", year: "2023" },
    { id: 21, title: "EUROPOP 2023 projection", source: "Eurostat", year: "2023" },
    { id: 22, title: "Sample Registration System (SRS) 2022", source: "Office of the Registrar General of India (MOSPI)", year: "2024" },
    { id: 23, title: "National Family Health Survey (NFHS-5)", source: "MoHFW India", year: "2021-22" },
    // ── 2차 자료: 학계 ─────────────────────────────────────────────────────────
    { id: 24, author: "Charles Goodhart · Manoj Pradhan", title: "The Great Demographic Reversal", source: "Palgrave Macmillan", year: "2020" },
    { id: 25, author: "Wolfgang Lutz et al.", title: "World Population & Human Capital in the 21st Century", source: "IIASA / Oxford University Press", year: "2014, updated annually" },
    { id: 26, title: "Global Fertility Forecast 1950–2100 (GBD 2024)", source: "The Lancet", year: "2024-03" },
    { id: 27, author: "Peter Zeihan", title: "The End of the World Is Just the Beginning (Ch.3 Demographics)", source: "Harper Business", year: "2022" },
    // ── 2차 자료: 보도·분석 ───────────────────────────────────────────────────
    { id: 28, title: "South Korea's military faces demographic cliff", source: "Reuters", year: "2024-09" },
    { id: 29, title: "China's hidden population: Wisconsin demographer challenges Beijing's numbers", source: "Financial Times", year: "2023-08" },
    { id: 30, title: "Why the US needs immigrants to grow", source: "The Economist", year: "2024-11" },
  ],
};

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
