/**
 * Sections 1, 1.5, 2-9 for the AI Semiconductor Value Chain 2026 note.
 */

import type { NoteSection } from "../notes";

export const SECTIONS_PART_A: NoteSection[] = [
  // ════════════════════════════════════════════════════════════════
  // 1. Hook — 같은 분기에 한국 안에서도 사이클이 갈렸다
  // ════════════════════════════════════════════════════════════════
  {
    heading: "1. 같은 분기에 한국 안에서도 사이클이 갈렸다",
    headingEn: "1. Same Quarter, Same Country — Korea's Semiconductor Cycle Split in Two",
    blocks: [
      {
        type: "text",
        body:
          "2026년 1분기 SK하이닉스는 분기 매출 52.58조원, 영업이익 37.61조원, 영업이익률 72%를 기록했다.\n\n회사 사상 최대 분기 실적이다.\n\n매출의 절반 이상이 HBM(High Bandwidth Memory)에서 나왔다.\n\n글로벌 HBM 시장 점유율 57-59%로 마이크론 19%, 삼성 22%를 압도하는 1위 자리를 굳혔다.¹\n\n같은 분기 한미반도체는 매출 509억원을 기록했다.\n\n전년 동기 대비 -65.5%.\n\n회사 역사상 손에 꼽는 부진한 분기였다.\n\n한미반도체는 HBM을 만들지 않는다.\n\nHBM을 적층하는 장비, TC Bonder(Thermal Compression Bonder)를 만든다.\n\n글로벌 TC Bonder 시장 점유율 약 70%로 사실상 독점 위치다.²\n\n그런데도 매출이 반 토막이 났다.\n\n이유는 단순하다.\n\nHBM3E 12-Hi에서 HBM4로 세대가 바뀌는 공백기에 발주가 일시 정체됐다.\n\n같은 분기에 솔브레인은 매출 2,517억원으로 +18.9% 성장했다.\n\nHPSP는 2026 연간 매출 가이던스 2,341억원으로 전년 대비 회복 흐름이다.³\n\n같은 한국 반도체 소부장 안에서도 사이클이 갈린 것이다.",
        bodyEn:
          "In Q1 2026, SK Hynix reported quarterly revenue of KRW 52.58 trillion, operating profit of KRW 37.61 trillion, and an operating margin of *72%*.\n\nThe largest quarterly result in company history.\n\nMore than half of the revenue came from HBM (High Bandwidth Memory).\n\nSK Hynix's global HBM market share reached 57-59%, surpassing Micron's 19% and Samsung's 22% combined.¹\n\nIn the same quarter, Hami Semiconductor recorded revenue of KRW 50.9 billion — down 65.5% year-over-year.\n\nOne of the worst quarters in company history.\n\nHami doesn't make HBM. Hami makes the *TC Bonder* (Thermal Compression Bonder), the machine that stacks HBM.\n\nHami holds approximately 70% of the global TC Bonder market — a near-monopoly position.²\n\nYet revenue was cut in half. The reason is simple: the transition window between HBM3E 12-Hi and HBM4 created a temporary order gap.\n\nIn the same quarter, Soulbrain posted revenue of KRW 251.7 billion, up 18.9%. HPSP guided full-year 2026 revenue at KRW 234.1 billion, on a recovery trend.³\n\nWithin the same Korean semiconductor supply chain, the cycle split in two.",
      },
      {
        type: "metrics",
        items: [
          { label: "SK하이닉스 2026 Q1 영업이익률", labelEn: "SK Hynix Q1 2026 OPM", value: "72%", valueEn: "72%", sub: "분기 매출 52.58조원, 사상 최대", subEn: "Quarterly revenue ₩52.58T, all-time high", color: "text-red-500" },
          { label: "한미반도체 2026 Q1 매출 YoY", labelEn: "Hami Q1 2026 revenue YoY", value: "-65.5%", valueEn: "-65.5%", sub: "TC Bonder 세대 전환 공백", subEn: "TC Bonder generation transition gap", color: "text-amber-500" },
          { label: "솔브레인 2026 Q1 매출", labelEn: "Soulbrain Q1 2026 revenue", value: "+18.9%", valueEn: "+18.9%", sub: "HBM·CoWoS·EUV 다영역 노출", subEn: "HBM · CoWoS · EUV exposure", color: "text-emerald-500" },
        ],
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "이 글이 답하려는 한 가지 질문",
          headingEn: "The One Question This Note Answers",
          body:
            "왜 같은 분기, 같은 한국 안에서, 회사마다 결과가 이렇게 달랐는가.\n\n답은 한 줄로 압축된다.\n\nAI 시대 반도체는 세 가지 병목, 즉 HBM, CoWoS, EUV에서 가격과 우선순위가 결정된다.\n\n그 세 병목의 어느 단계에 박혀있느냐가 회사의 운명을 갈랐다.\n\nSK하이닉스는 HBM 셀 제조의 1위로 그 사이클을 정면에서 받았다.\n\n한미반도체는 HBM 적층 장비 1위지만 세대 전환 공백에 정확히 걸렸다.\n\n솔브레인은 HBM과 CoWoS 양쪽에 소재로 박혀 있어 흐름 위에 올라탔다.\n\nHPSP는 EUV 다음 단계인 고압 어닐링(High-Pressure Annealing)에서 사실상 글로벌 logic capex 지표가 됐다.",
          bodyEn:
            "Why did the same quarter, in the same country, produce such divergent results across companies?\n\nThe answer compresses into one line: in the AI era, semiconductor pricing and priority are decided at three bottlenecks — HBM, CoWoS, and EUV. Where a company sits relative to those three bottlenecks determines its fate.\n\nSK Hynix faced the cycle head-on as the #1 HBM cell manufacturer.\n\nHami, the #1 HBM stacking equipment maker, was caught precisely in the generation transition gap.\n\nSoulbrain, embedded as a materials supplier in both HBM and CoWoS, rode the broader flow.\n\nHPSP, which dominates High-Pressure Annealing (the step after EUV in the logic flow), has effectively become a single global indicator for logic capex.",
        },
      },
      {
        type: "text",
        body:
          "이 사이클의 시작점은 명확하다.\n\n2022년 11월 30일 OpenAI가 ChatGPT를 공개했다.\n\n그 한 달 안에 NVIDIA의 H100 주문이 폭발했다.\n\n2023년 글로벌 반도체 시장은 526.8B 달러로 전년 대비 -8.2% 후퇴했지만, 그 안에서 데이터센터 GPU 매출만 +200% 이상 증가했다.\n\n2024년 시장 전체가 627.6B 달러로 +19.1% 회복, 2025년 791.7B 달러로 +26%, 2026년 1T 달러 돌파가 유력하다는 것이 WSTS 가을 2025 전망이다.⁴\n\nGDP가 1.5배 늘어나는 동안 반도체는 두 배가 된다.\n\n그 안에서 AI 칩 합산 매출(NVIDIA 데이터센터 + AMD 데이터센터 + Broadcom AI semi)은 2024년 1분기 약 270억 달러에서 2026년 1분기 약 700억 달러로 2.6배가 됐다.⁵\n\n사이클의 100%가 AI다.",
        bodyEn:
          "The starting point of this cycle is clear.\n\nOpenAI launched ChatGPT on November 30, 2022. Within a month, NVIDIA H100 orders exploded.\n\nIn 2023, the global semiconductor market contracted to $526.8B, down 8.2% YoY — but within that contraction, data center GPU revenue grew over 200%.\n\nIn 2024 the total market recovered to $627.6B (+19.1%), reached $791.7B in 2025 (+26%), and is on track to break $1T in 2026 per WSTS Autumn 2025 forecast.⁴\n\nWhile GDP grew 1.5×, semiconductors doubled.\n\nWithin that growth, combined AI chip revenue (NVIDIA Data Center + AMD Data Center + Broadcom AI semi) rose from approximately $27B in Q1 2024 to approximately $70B in Q1 2026 — a 2.6× increase.⁵\n\nThe entire cycle is being driven by AI.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "이 글이 다루는 것",
          headingEn: "What This Article Covers",
          body:
            "50분, 17 섹션 안에 다음을 전부 푼다.\n\n- 2023년 ChatGPT 이후 반도체 시장이 어떻게 다시 그려졌나 (→ ✓2-4)\n\n- HBM이 일반 DRAM을 잡아먹는 메모리 사이클 (→ ✓5)\n\n- 파운드리에서 TSMC가 압도하고 삼성, 인텔이 추격하는 구도 (→ ✓6)\n\n- 중국이 5년 안에 따라잡을 수 있다는 위협론 (→ ✓7)\n\n- 3대 병목 분석, HBM, CoWoS, EUV (→ ✓8-10)\n\n- 일본, 미국, 유럽 소부장 매핑 (→ ✓11)\n\n- 한국 소부장 30+사가 그 흐름의 어디에 박혀있나 (→ ✓12)\n\n- 한국 3대 알파, 한미반도체, 솔브레인, HPSP 비교 (→ ✓13)\n\n- TSMC가 NVIDIA의 capacity를 결정하는 메커니즘 (→ ✓14)\n\n- 위험 신호 5채널, 메모리 사이클 중심 (→ ✓15)\n\n- 투자자가 매주 봐야 할 7개 지표 (→ ✓16)",
          bodyEn:
            "In 50 minutes across 17 sections:\n\n- How the semiconductor market was redrawn after ChatGPT in 2023 (→ ✓2-4)\n\n- The memory cycle — how HBM is eating into general DRAM (→ ✓5)\n\n- Foundry dynamics — TSMC dominance, Samsung and Intel chasing (→ ✓6)\n\n- The thesis that China could catch up within five years (→ ✓7)\n\n- The three bottlenecks — HBM, CoWoS, EUV (→ ✓8-10)\n\n- Japanese, US, and European supplier mapping (→ ✓11)\n\n- Where Korea's 30+ supplier companies sit in this flow (→ ✓12)\n\n- The three Korean alpha plays — Hami, Soulbrain, HPSP (→ ✓13)\n\n- The mechanism through which TSMC controls NVIDIA's capacity (→ ✓14)\n\n- Five risk channels, centered on the memory cycle (→ ✓15)\n\n- Seven weekly indicators for investors to watch (→ ✓16)",
        },
      },
      {
        type: "table",
        table: {
          id: "semi-acronyms-8",
          title: "자주 등장할 약어 8개",
          titleEn: "Eight Acronyms You'll See Repeatedly",
          headers: ["약어", "풀네임", "한 줄 설명"],
          headersEn: ["Acronym", "Full name", "One-line meaning"],
          rows: [
            ["HBM", "High Bandwidth Memory", "DRAM을 12-16층 적층한 고대역폭 메모리"],
            ["TC Bonder", "Thermal Compression Bonder", "HBM 적층 시 칩을 정밀하게 붙이는 장비"],
            ["CoWoS", "Chip on Wafer on Substrate", "TSMC의 첨단 패키징, GPU와 HBM을 한 자리에"],
            ["EUV", "Extreme Ultraviolet", "13.5nm 파장 노광, 7nm 이하 필수"],
            ["HPC", "High Performance Computing", "데이터센터, 슈퍼컴 시장"],
            ["ASIC", "Application-Specific Integrated Circuit", "Google TPU, AWS Trainium 같은 특정 용도 칩"],
            ["ALD", "Atomic Layer Deposition", "한 원자씩 정밀하게 코팅하는 증착 방식"],
            ["PR", "Photoresist", "노광용 감광액"],
          ],
          rowsEn: [
            ["HBM", "High Bandwidth Memory", "DRAM stacked 12-16 layers for ultra-high bandwidth"],
            ["TC Bonder", "Thermal Compression Bonder", "Precision bonder for HBM layer stacking"],
            ["CoWoS", "Chip on Wafer on Substrate", "TSMC's advanced packaging combining GPU + HBM"],
            ["EUV", "Extreme Ultraviolet", "13.5nm wavelength lithography — required at 7nm and below"],
            ["HPC", "High Performance Computing", "Data center and supercompute market"],
            ["ASIC", "Application-Specific Integrated Circuit", "Custom chips like Google TPU, AWS Trainium"],
            ["ALD", "Atomic Layer Deposition", "Atom-by-atom precision coating"],
            ["PR", "Photoresist", "Light-sensitive lithography material"],
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 1.5 비유 사전 — 핵심 용어 12개를 한 페이지로
  // ════════════════════════════════════════════════════════════════
  {
    heading: "1.5. 비유 사전, 핵심 용어 12개를 한 페이지로",
    headingEn: "1.5. Twelve Core Terms in One Page — Analogy Glossary",
    blocks: [
      {
        type: "text",
        body:
          "반도체 용어가 어렵다.\n\n가장 자주 등장하는 12개를 비유로 한 번에 정리한다.\n\n본문 어디서 막혀도 여기로 돌아오면 된다.",
        bodyEn:
          "Semiconductor terminology is hard. The twelve most-cited terms, explained through analogy on a single page.\n\nReturn here whenever a term blocks you.",
      },
      {
        type: "table",
        table: {
          id: "semi-glossary-memory",
          title: "메모리 영역",
          titleEn: "Memory",
          headers: ["용어", "정의", "비유"],
          headersEn: ["Term", "Definition", "Analogy"],
          rows: [
            ["HBM", "여러 층의 DRAM을 위로 쌓아 만든 초고대역폭 메모리", "단층 건물을 옆으로 늘리는 대신 빌딩처럼 위로 쌓은 메모리. 같은 면적에서 데이터 통로가 수십 배 늘어남"],
            ["TC Bonder", "HBM 적층 시 칩을 정밀하게 붙이는 장비", "빌딩 한 층씩 정밀하게 쌓아 올리는 크레인. 한미반도체가 글로벌 70%"],
            ["HBM substrate", "HBM 아래에 까는 회로 기판", "빌딩의 기초 콘크리트. 일본 Ibiden, Shinko 압도"],
          ],
          rowsEn: [
            ["HBM", "Multi-layer stacked DRAM for ultra-high bandwidth", "Memory built like a high-rise instead of stretched horizontally"],
            ["TC Bonder", "Machine that precisely bonds each HBM layer", "The precision crane that stacks each floor. Hami Semiconductor holds ~70% globally"],
            ["HBM substrate", "Circuit board beneath the HBM stack", "The building's foundation. Japan's Ibiden and Shinko dominate"],
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "semi-glossary-foundry",
          title: "파운드리, 패키징",
          titleEn: "Foundry / Packaging",
          headers: ["용어", "정의", "비유"],
          headersEn: ["Term", "Definition", "Analogy"],
          rows: [
            ["파운드리", "다른 회사가 설계한 칩을 위탁 생산하는 공장", "옷 디자이너 설계대로 봉제만 해주는 공장. NVIDIA가 디자이너, TSMC가 공장"],
            ["CoWoS", "TSMC의 첨단 패키징 기술. GPU와 HBM을 한 자리에 묶는다", "한 식당 안에 여러 메인 요리를 한 접시에 담아 내는 셰프 코스. 2026년 NVIDIA, AMD, Broadcom 모두 줄을 서고 있음"],
            ["ABF substrate", "CoWoS 위 회로 기판. Ajinomoto가 사실상 독점", "셰프 접시 자체. 일본 아지노모토가 거의 100%"],
            ["OSAT", "Outsourced Semiconductor Assembly and Test, 후공정 외주", "셰프가 못 다 만든 코스를 외주에 맡기는 식당. ASE, Amkor, 하나마이크론"],
          ],
          rowsEn: [
            ["Foundry", "A factory that manufactures chips designed by another company", "NVIDIA designs, TSMC manufactures"],
            ["CoWoS", "TSMC's advanced packaging — combines GPU + HBM on one platform", "In 2026, NVIDIA, AMD, and Broadcom are all queued for it"],
            ["ABF substrate", "Circuit board above the CoWoS stack — Ajinomoto holds near-100%", "Japan's Ajinomoto effectively owns the category"],
            ["OSAT", "Outsourced Semiconductor Assembly and Test", "ASE, Amkor, Hana Micron"],
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "semi-glossary-litho",
          title: "노광, 회로",
          titleEn: "Lithography / Logic",
          headers: ["용어", "정의", "비유"],
          headersEn: ["Term", "Definition", "Analogy"],
          rows: [
            ["노드 (3nm, 2nm)", "회로 선의 굵기. 작을수록 더 많은 트랜지스터", "도시 도로 폭. 좁을수록 같은 면적에 더 많은 차선이 들어감"],
            ["EUV", "극자외선 노광 장비. 회로 굵기 7nm 이하부터 필수", "가장 정밀한 도면 인쇄기. ASML이 전 세계 유일 제조사"],
            ["High-NA EUV", "차세대 EUV. 2nm 이하 회로용", "한 단계 더 정밀한 도면 인쇄기. 2025년부터 Intel, 삼성, TSMC 첫 도입"],
            ["고압 어닐링 (HPSP)", "EUV로 그린 회로 결함을 고압 수소로 치료하는 공정", "인쇄된 회로의 미세 흠집을 메우는 마감 공정. HPSP가 글로벌 거의 독점"],
          ],
          rowsEn: [
            ["Node (3nm, 2nm)", "Width of a circuit line — smaller means more transistors", "Narrower roads pack more lanes into the same surface area"],
            ["EUV", "Extreme Ultraviolet — required for any node 7nm or below", "The most precise blueprint printer. ASML is the world's only manufacturer"],
            ["High-NA EUV", "Next-generation EUV (NA 0.55), built for 2nm and below", "A step finer blueprint printer. First adopted in 2025 by Intel, Samsung, TSMC"],
            ["HPSP (High-Pressure Annealing)", "High-pressure hydrogen anneal that heals defects after EUV patterning", "The finishing pass that fills in microscopic flaws. HPSP holds a near-monopoly globally"],
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "semi-glossary-industry",
          title: "산업 카테고리",
          titleEn: "Industry Category",
          headers: ["용어", "정의", "비유"],
          headersEn: ["Term", "Definition", "Analogy"],
          rows: [
            ["소부장", "소재, 부품, 장비. 반도체 공장에 들어가는 모든 것", "식당 셰프(파운드리)에게 식재료(소재), 칼, 도마(부품), 오븐(장비)을 파는 회사들"],
          ],
          rowsEn: [
            ["Sobujang (소부장)", "Materials, Components, and Equipment — everything that feeds a fab", "Suppliers who sell ingredients, knives, and ovens to the chef (foundry)"],
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "6가지 자산 클래스 미리 보기",
          headingEn: "Preview — The Ten-Stage Value Chain",
          body:
            "반도체 밸류체인은 10단계로 나뉜다.\n\n본문 §3에서 전체 지도를 푼다.\n\n1. EDA 도구 (Cadence, Synopsys)\n\n2. IP (ARM, RISC-V)\n\n3. 설계 (NVIDIA, AMD, Broadcom — Fabless)\n\n4. 파운드리 (TSMC, 삼성, 인텔, SMIC)\n\n5. 메모리 (SK하이닉스, 삼성, 마이크론)\n\n6. 후공정, 패키징 (TSMC CoWoS, ASE, Amkor)\n\n7. EUV 장비 (ASML)\n\n8. 일반 장비 (AMAT, LAM, KLA, TEL, Disco)\n\n9. 소재 (Shin-Etsu, SUMCO, JSR, 솔브레인, 동진)\n\n10. 검사, 테스트 (어드밴테스트, KLA, Lasertec, 인텍플러스)",
          bodyEn:
            "The semiconductor value chain breaks into ten stages. §3 maps the whole thing:\n\n1. EDA tools (Cadence, Synopsys)\n\n2. IP (ARM, RISC-V)\n\n3. Design — Fabless (NVIDIA, AMD, Broadcom)\n\n4. Foundry (TSMC, Samsung, Intel, SMIC)\n\n5. Memory (SK Hynix, Samsung, Micron)\n\n6. Back-end / Packaging (TSMC CoWoS, ASE, Amkor)\n\n7. EUV (ASML)\n\n8. General equipment (AMAT, LAM, KLA, TEL, Disco)\n\n9. Materials (Shin-Etsu, SUMCO, JSR, Soulbrain, Dongjin)\n\n10. Inspection / Test (Advantest, KLA, Lasertec, Intekplus)",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 2. ChatGPT가 반도체 시장을 다시 그렸다
  // ════════════════════════════════════════════════════════════════
  {
    heading: "2. ChatGPT가 반도체 시장을 다시 그렸다",
    headingEn: "2. ChatGPT Redrew the Semiconductor Market",
    blocks: [
      {
        type: "text",
        body:
          "2022년 11월 30일 OpenAI가 ChatGPT를 공개했다.\n\n그 한 달 안에 NVIDIA H100 주문이 폭발했다.\n\n그 후 3년 안에 글로벌 반도체 시장은 526B 달러에서 1T 달러 직전까지 왔다.\n\n2023년이 결정적이다.\n\n전체 시장은 -8.2%로 후퇴했다.\n\n그러나 그 안에서 데이터센터 GPU 매출만 분리해 보면 NVIDIA 데이터센터 매출이 2022년 약 150억 달러에서 2023년 약 470억 달러로 +200% 이상 폭증했다.\n\n같은 해 같은 시장 안에서 메모리는 사이클 바닥을 찍었고, 일반 DRAM 가격은 2년 만의 최저점을 통과했다.\n\n같은 산업이 두 방향으로 갈라진 첫 분기였다.",
        bodyEn:
          "OpenAI launched ChatGPT on November 30, 2022.\n\nWithin a month, NVIDIA H100 orders exploded. Three years later, the global semiconductor market is approaching $1T from $526B.\n\n2023 was decisive. The total market contracted 8.2%.\n\nWithin that contraction, NVIDIA's data center revenue jumped from approximately $15B in 2022 to approximately $47B in 2023 — over 200%.\n\nIn the same industry in the same year, memory hit a cycle bottom and general DRAM prices passed through a two-year low.\n\nIt was the first quarter the same industry visibly split into two directions.",
      },
      {
        type: "chart",
        chart: {
          id: "semi-market-cycle",
          title: "Chart 1, 글로벌 반도체 시장 사이클과 AI 칩 합산 ($B, 2022-2026E)",
          titleEn: "Chart 1 — Global Semiconductor Market vs. AI Chip Combined ($B, 2022-2026E)",
          caption: "출처: WSTS Autumn 2025, SIA Feb 2026. AI 칩 합산 = NVIDIA DC + AMD DC + Broadcom AI semi 연환산.",
          captionEn: "Source: WSTS Autumn 2025, SIA Feb 2026. AI chip combined = NVIDIA DC + AMD DC + Broadcom AI semi (annualised).",
          data: [
            { year: 2022, total: 574.1, aiCombined: 70 },
            { year: 2023, total: 526.8, aiCombined: 80 },
            { year: 2024, total: 627.6, aiCombined: 140 },
            { year: 2025, total: 791.7, aiCombined: 220 },
            { year: 2026, total: 1000, aiCombined: 320 },
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "semi-market-table",
          title: "글로벌 반도체 시장 사이클 ($526B → $1T)",
          titleEn: "Global Semiconductor Market Cycle ($526B → $1T)",
          headers: ["연도", "매출 ($B)", "YoY", "메모"],
          headersEn: ["Year", "Revenue ($B)", "YoY", "Note"],
          rows: [
            ["2022", "574.1", "+3.3%", "코로나 PC 수요 끝나는 시점"],
            ["2023", "526.8", "-8.2%", "메모리 사이클 바닥, 그 안에 AI 칩만 +200%+"],
            ["2024", "627.6", "+19.1%", "AI 회복 본격화"],
            ["2025", "791.7", "+25.6%", "HBM 시장 폭발 (SIA Feb 2026)"],
            ["2026E", "약 1,000", "약 +25%", "1조 달러 milestone 도달 유력 (WSTS Autumn 2025)"],
          ],
          rowsEn: [
            ["2022", "574.1", "+3.3%", "End of COVID-era PC demand"],
            ["2023", "526.8", "-8.2%", "Memory cycle bottom — yet AI chips alone +200%"],
            ["2024", "627.6", "+19.1%", "AI recovery in full swing"],
            ["2025", "791.7", "+25.6%", "HBM market explosion (SIA Feb 2026)"],
            ["2026E", "~1,000", "~+25%", "$1T milestone likely (WSTS Autumn 2025)"],
          ],
          highlightRows: [4],
          caption: "출처: WSTS, SIA, 글로벌 반도체 통계.⁶",
          captionEn: "Source: WSTS, SIA, global semiconductor statistics.⁶",
        },
      },
      {
        type: "table",
        table: {
          id: "ai-chip-combined",
          title: "AI 칩 매출 폭발, 합산으로 보면 명확",
          titleEn: "AI Chip Revenue Explosion — Combined View",
          headers: ["분기", "NVIDIA DC ($B)", "AMD DC ($B)", "Broadcom AI semi ($B)", "합산 ($B)"],
          headersEn: ["Quarter", "NVIDIA DC ($B)", "AMD DC ($B)", "Broadcom AI semi ($B)", "Combined ($B)"],
          rows: [
            ["2024 Q1", "22.6", "2.3", "약 2.3 (추정)", "약 27"],
            ["2024 Q4", "35.6", "3.9", "3.8", "약 43"],
            ["2025 Q4", "약 50+", "약 5", "6.2", "약 62"],
            ["2026 Q1 (CY)", "약 55+", "약 6", "8.4", "약 70"],
            ["2026 Q2 가이던스", "n/a", "n/a", "10.7", "n/a"],
          ],
          rowsEn: [
            ["2024 Q1", "22.6", "2.3", "~2.3 (est.)", "~27"],
            ["2024 Q4", "35.6", "3.9", "3.8", "~43"],
            ["2025 Q4", "~50+", "~5", "6.2", "~62"],
            ["2026 Q1 (CY)", "~55+", "~6", "8.4", "~70"],
            ["2026 Q2 guidance", "n/a", "n/a", "10.7", "n/a"],
          ],
          caption: "출처: NVIDIA Form 8-K (FY2026 Q4), AMD IR, Broadcom IR (Q1 FY2026 AI semi $8.4B +106% YoY).⁷",
          captionEn: "Source: NVIDIA Form 8-K (FY2026 Q4), AMD IR, Broadcom IR (Q1 FY2026 AI semi $8.4B, +106% YoY).⁷",
        },
      },
      {
        type: "text",
        body:
          "2년 안에 약 27억 달러에서 약 70억 달러로 2.6배가 됐다.\n\n특히 Broadcom의 변화가 흥미롭다.\n\n2026 Q1 AI semi 매출이 84억 달러로 전년 대비 +106%.\n\n2026 Q2 가이던스는 107억 달러로 +140%를 예고했다.\n\nbacklog 730억 달러.⁸\n\nGoogle TPU, AWS Trainium, Meta MTIA 같은 ASIC(특정 용도 칩) 위탁 설계를 Broadcom이 거의 독점하고 있기 때문이다.\n\nNVIDIA만 본 사람은 절반만 본 것이다.\n\nAI 칩 시장의 진짜 폭발은 GPU(NVIDIA, AMD)와 ASIC(Broadcom, Marvell)이 동시에 일어나는 것이고, 그 둘의 합산을 처음으로 같이 봐야 한다.",
        bodyEn:
          "In two years, combined AI chip revenue grew 2.6× — from ~$27B to ~$70B.\n\nBroadcom's trajectory is particularly notable. Q1 FY2026 AI semi revenue of $8.4B, +106% YoY. Q2 guidance of $10.7B, +140% YoY. Backlog of $73B.⁸\n\nBroadcom dominates outsourced ASIC design for hyperscaler custom chips — Google TPU, AWS Trainium, Meta MTIA.\n\nLooking only at NVIDIA misses Broadcom's ASIC backlog.\n\nThe real AI chip explosion is happening on two fronts simultaneously — GPU (NVIDIA, AMD) and ASIC (Broadcom, Marvell) — and the combined view is what matters.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "3년 안에 일어난 일을 한 줄로",
          headingEn: "Three Years, Compressed Into One Sentence",
          body:
            "2022년 ChatGPT 공개, 2023년 NVIDIA H100 폭발, 2024년 반도체 전체 사이클 회복, 2025년 HBM 시장 본격 폭발, 2026년 1조 달러 시장 milestone.\n\n이 흐름 안에서 한국 반도체는 어디에 있나가 다음 §3 밸류체인 지도에서 시작한다.",
          bodyEn:
            "2022 ChatGPT launch → 2023 NVIDIA H100 explosion → 2024 full cycle recovery → 2025 HBM market explosion → 2026 the $1T milestone.\n\n§3 maps where Korea sits inside that flow.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 3. 반도체 밸류체인 10단계 지도
  // ════════════════════════════════════════════════════════════════
  {
    heading: "3. 반도체 밸류체인, 10단계 지도",
    headingEn: "3. The Semiconductor Value Chain — Ten-Stage Map",
    blocks: [
      {
        type: "text",
        body:
          "반도체는 한 회사가 다 만들지 않는다.\n\n10단계 분업 구조다.\n\n그 안에서 어느 단계를 잡았느냐가 그 회사의 운명을 결정한다.",
        bodyEn:
          "No single company builds a chip end-to-end. The industry is a ten-stage division of labor. Where a company sits in that chain determines its fate.",
      },
      {
        type: "chart",
        chart: {
          id: "vc-roadmap",
          title: "Chart 2, 반도체 밸류체인 10단계와 한국 노출도",
          titleEn: "Chart 2 — Ten-Stage Semiconductor Value Chain & Korea's Exposure",
          caption: "색상은 한국 노출도, 보라(high), 파랑(medium), 회색(low), 흰색(none).",
          captionEn: "Box colour = Korea exposure: violet (high), blue (medium), grey (low), white (none).",
          stages: [
            { id: "s1", label: "1. EDA 도구", labelEn: "1. EDA Tools", companies: "Cadence, Synopsys, Siemens EDA", companiesEn: "Cadence, Synopsys, Siemens EDA", koreaExposure: "none" },
            { id: "s2", label: "2. IP", labelEn: "2. IP", companies: "ARM, RISC-V", companiesEn: "ARM, RISC-V", koreaExposure: "none" },
            { id: "s3", label: "3. 설계 (Fabless)", labelEn: "3. Design (Fabless)", companies: "NVIDIA, AMD, Broadcom, Marvell, MediaTek", companiesEn: "NVIDIA, AMD, Broadcom, Marvell, MediaTek", koreaExposure: "low" },
            { id: "s4", label: "4. 파운드리", labelEn: "4. Foundry", companies: "TSMC, 삼성, Intel, SMIC, UMC", companiesEn: "TSMC, Samsung, Intel, SMIC, UMC", koreaExposure: "medium" },
            { id: "s5", label: "5. 메모리", labelEn: "5. Memory", companies: "SK하이닉스, 삼성, 마이크론, 키오시아", companiesEn: "SK Hynix, Samsung, Micron, Kioxia", koreaExposure: "high" },
            { id: "s6", label: "6. 후공정 패키징", labelEn: "6. Back-end / Packaging", companies: "TSMC CoWoS, ASE, Amkor + 하나마이크론, SFA, 심텍", companiesEn: "TSMC CoWoS, ASE, Amkor + Hana Micron, SFA, Simmtech", koreaExposure: "medium" },
            { id: "s7", label: "7. EUV 노광", labelEn: "7. EUV Lithography", companies: "ASML 단독 (네덜란드)", companiesEn: "ASML alone (Netherlands)", koreaExposure: "none" },
            { id: "s8", label: "8. 일반 장비", labelEn: "8. General Equipment", companies: "AMAT, LAM, KLA, TEL, Disco + 원익IPS, 주성, 한미반도체", companiesEn: "AMAT, LAM, KLA, TEL, Disco + Wonik IPS, Jusung, Hami", koreaExposure: "medium" },
            { id: "s9", label: "9. 소재", labelEn: "9. Materials", companies: "Shin-Etsu, SUMCO, JSR, TOK + 솔브레인, 동진, SK실트론", companiesEn: "Shin-Etsu, SUMCO, JSR, TOK + Soulbrain, Dongjin, SK Siltron", koreaExposure: "high" },
            { id: "s10", label: "10. 검사, 테스트", labelEn: "10. Inspection / Test", companies: "KLA, Lasertec, 어드밴테스트, Teradyne + 인텍플러스, 고영, 테크윙", companiesEn: "KLA, Lasertec, Advantest, Teradyne + Intekplus, Koh Young, Techwing", koreaExposure: "medium" },
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "vc-10stages",
          title: "10단계 분업과 한국 노출",
          titleEn: "Ten-Stage Division and Korea Exposure",
          headers: ["단계", "무엇", "글로벌 dominant", "한국 노출"],
          headersEn: ["Stage", "What", "Global dominant", "Korea exposure"],
          rows: [
            ["1", "EDA 도구 (회로 설계 소프트웨어)", "Cadence, Synopsys, Siemens EDA", "거의 0"],
            ["2", "IP (재사용 회로 블록)", "ARM, RISC-V", "거의 0"],
            ["3", "설계 (Fabless)", "NVIDIA, AMD, Broadcom, Marvell, MediaTek, Qualcomm", "삼성 LSI"],
            ["4", "파운드리 (위탁 생산)", "TSMC, 삼성, 인텔, SMIC, UMC", "삼성 파운드리"],
            ["5", "메모리 (DRAM, NAND, HBM)", "SK하이닉스, 삼성, 마이크론, 키오시아", "SK하이닉스, 삼성"],
            ["6", "후공정 패키징 (CoWoS, OSAT)", "TSMC, ASE, Amkor", "하나마이크론, SFA, 심텍"],
            ["7", "EUV 노광", "ASML (네덜란드)", "0"],
            ["8", "일반 장비 (식각, 증착, CMP, 검사)", "AMAT, LAM, KLA, TEL, Disco", "원익IPS, 주성, 한미반도체"],
            ["9", "소재 (웨이퍼, PR, 식각액, 전구체, 가스)", "Shin-Etsu, SUMCO, JSR, TOK, Henkel", "솔브레인, 동진, SK실트론, 원익머트리얼즈"],
            ["10", "검사, 테스트 (메트롤로지, 테스터, 핸들러)", "KLA, Lasertec, 어드밴테스트, Teradyne", "인텍플러스, 고영, 테크윙"],
          ],
          rowsEn: [
            ["1", "EDA tools (circuit design software)", "Cadence, Synopsys, Siemens EDA", "Near 0"],
            ["2", "IP (reusable circuit blocks)", "ARM, RISC-V", "Near 0"],
            ["3", "Design (Fabless)", "NVIDIA, AMD, Broadcom, Marvell, MediaTek, Qualcomm", "Samsung LSI"],
            ["4", "Foundry", "TSMC, Samsung, Intel, SMIC, UMC", "Samsung Foundry"],
            ["5", "Memory (DRAM, NAND, HBM)", "SK Hynix, Samsung, Micron, Kioxia", "SK Hynix, Samsung"],
            ["6", "Back-end packaging (CoWoS, OSAT)", "TSMC, ASE, Amkor", "Hana Micron, SFA, Simmtech"],
            ["7", "EUV lithography", "ASML (Netherlands)", "0"],
            ["8", "General equipment (etch, depo, CMP, inspection)", "AMAT, LAM, KLA, TEL, Disco", "Wonik IPS, Jusung, Hami"],
            ["9", "Materials (wafer, PR, etchants, precursors, gases)", "Shin-Etsu, SUMCO, JSR, TOK, Henkel", "Soulbrain, Dongjin, SK Siltron, Wonik Mat"],
            ["10", "Inspection / test", "KLA, Lasertec, Advantest, Teradyne", "Intekplus, Koh Young, Techwing"],
          ],
        },
      },
      {
        type: "text",
        body:
          "한국은 5단계(메모리), 8단계(일부 장비), 9단계(일부 소재), 10단계(일부 검사)에 박혀 있다.\n\n1, 2단계(EDA, IP)는 거의 0이다.\n\n7단계(EUV)도 0이다.\n\n3단계(Fabless)는 삼성 LSI가 일부 하지만 글로벌 시장에서 의미 있는 점유율은 거의 없다.\n\n4단계(파운드리)는 삼성이 추격 중이지만 TSMC와의 격차는 좁혀지지 않고 있다.\n\n즉 한국이 잡은 것은 메모리(5)와 소부장 일부(8-10)다.\n\n이 구조 자체가 글의 모든 분석의 출발점이 된다.",
        bodyEn:
          "Korea is anchored in Stage 5 (memory), parts of Stage 8 (equipment), parts of Stage 9 (materials), and parts of Stage 10 (inspection).\n\nStages 1-2 (EDA, IP) are essentially zero. Stage 7 (EUV) is zero. Stage 3 (Fabless) has Samsung LSI but no meaningful global share. Stage 4 (Foundry) has Samsung chasing TSMC, but the gap is not closing.\n\nWhat Korea owns is memory (5) and parts of sobujang (8-10).\n\nThis structure is the starting point for every analysis that follows.",
      },
      {
        type: "table",
        table: {
          id: "opm-by-stage",
          title: "단계별 영업이익률, 누가 더 가져가는가 (2025 연간 + 2026 Q1)",
          titleEn: "Operating Margin by Stage — Who Takes More (2025 FY + Q1 2026)",
          headers: ["단계", "회사", "2025 OPM", "2026 Q1 OPM"],
          headersEn: ["Stage", "Company", "2025 OPM", "Q1 2026 OPM"],
          rows: [
            ["EDA", "Cadence", "약 35%", "약 36%"],
            ["EDA", "Synopsys", "약 30%", "약 32%"],
            ["IP", "ARM", "약 24%", "약 25%"],
            ["설계 GPU", "NVIDIA", "약 60%", "약 65%"],
            ["설계 GPU", "AMD", "약 10%", "약 11%"],
            ["설계 ASIC", "Broadcom", "약 45%", "약 47%"],
            ["설계 ASIC", "Marvell", "약 10%", "약 15%"],
            ["파운드리", "TSMC", "약 45%", "약 50%"],
            ["파운드리", "삼성 파운드리", "약 -5%", "약 -3%"],
            ["파운드리", "Intel IFS", "약 -25%", "약 -20%"],
            ["메모리 HBM", "SK하이닉스", "약 50%", "72% (HBM 사이클 정점)"],
            ["메모리", "삼성 메모리", "약 25%", "약 30%"],
            ["메모리", "마이크론", "약 30%", "약 36%"],
            ["EUV", "ASML", "약 32%", "약 35%"],
            ["일반 장비", "AMAT", "약 30%", "약 30%"],
            ["일반 장비", "LAM", "약 28%", "약 29%"],
            ["일반 장비", "KLA", "약 35%", "약 36%"],
            ["소재", "Shin-Etsu", "약 30%", "약 30%"],
            ["검사", "Lasertec", "약 35%", "약 35%"],
            ["한국 소부장", "한미반도체", "약 30%", "약 -10% (HBM 공백)"],
            ["한국 소부장", "솔브레인", "약 18%", "약 22%"],
            ["한국 소부장", "HPSP", "약 50%", "(2026E 약 45%)"],
          ],
          rowsEn: [
            ["EDA", "Cadence", "~35%", "~36%"],
            ["EDA", "Synopsys", "~30%", "~32%"],
            ["IP", "ARM", "~24%", "~25%"],
            ["Design GPU", "NVIDIA", "~60%", "~65%"],
            ["Design GPU", "AMD", "~10%", "~11%"],
            ["Design ASIC", "Broadcom", "~45%", "~47%"],
            ["Design ASIC", "Marvell", "~10%", "~15%"],
            ["Foundry", "TSMC", "~45%", "~50%"],
            ["Foundry", "Samsung Foundry", "~-5%", "~-3%"],
            ["Foundry", "Intel IFS", "~-25%", "~-20%"],
            ["Memory HBM", "SK Hynix", "~50%", "72% (cycle peak)"],
            ["Memory", "Samsung Memory", "~25%", "~30%"],
            ["Memory", "Micron", "~30%", "~36%"],
            ["EUV", "ASML", "~32%", "~35%"],
            ["General eq.", "AMAT", "~30%", "~30%"],
            ["General eq.", "LAM", "~28%", "~29%"],
            ["General eq.", "KLA", "~35%", "~36%"],
            ["Materials", "Shin-Etsu", "~30%", "~30%"],
            ["Inspection", "Lasertec", "~35%", "~35%"],
            ["Korea sobujang", "Hami", "~30%", "~-10% (HBM gap)"],
            ["Korea sobujang", "Soulbrain", "~18%", "~22%"],
            ["Korea sobujang", "HPSP", "~50%", "(2026E ~45%)"],
          ],
          highlightRows: [10],
          caption: "출처: 각 사 2025-2026 Q1 IR 종합. NVIDIA, SK하이닉스(HBM 사이클 정점), TSMC, ASML이 영업이익률 35%+ 영역이다. 같은 산업 안에서도 어느 단계를 잡았느냐가 영업이익률 5-7배 차이를 만든다.",
          captionEn: "Source: 2025-Q1 2026 IR aggregated. NVIDIA, SK Hynix (cycle peak), TSMC and ASML sit at 35%+ OPM. Within the same industry, stage selection produces 5-7× margin differences.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 4. Fabless 설계사 매핑
  // ════════════════════════════════════════════════════════════════
  {
    heading: "4. Fabless 설계사 매핑, NVIDIA, AMD, Broadcom, Marvell, MediaTek",
    headingEn: "4. Fabless Design — NVIDIA, AMD, Broadcom, Marvell, MediaTek",
    blocks: [
      {
        type: "text",
        body:
          "AI 칩 시장은 GPU와 ASIC 두 갈래로 갈린다.\n\nNVIDIA, AMD가 GPU, Broadcom, Marvell이 ASIC이다.\n\n그 둘이 같이 폭발하고 있다.",
        bodyEn:
          "The AI chip market splits two ways: GPU (NVIDIA, AMD) and ASIC (Broadcom, Marvell). Both are exploding in parallel.",
      },
      {
        type: "text",
        body:
          "NVIDIA는 GPU에서 압도한다.\n\n2024년 4분기(FY2026 Q4) 데이터센터 매출 35.6B 달러, 분기 매출 전체의 88%.\n\n2024년 4월 Blackwell(B100, B200) 발표, 2025년 1분기 양산 시작.\n\nBlackwell 칩 하나에 HBM3E 8스택, 총 192GB 메모리.\n\n2025년 4분기 Rubin 차세대 발표 예고, 2026년 양산 시작.\n\nRubin은 HBM4 8스택 탑재 예정.\n\nNVIDIA가 TSMC CoWoS capacity의 약 절반을 차지한다는 것이 SemiAnalysis의 추정이다.",
        bodyEn:
          "NVIDIA dominates GPUs. Q4 FY2026 data center revenue of $35.6B — 88% of total quarterly revenue. Blackwell (B100, B200) was announced April 2024 and entered production Q1 2025. Each Blackwell chip carries 8 stacks of HBM3E for a total of 192GB. Rubin (next gen) was previewed Q4 2025, production starting 2026, with 8 stacks of HBM4. SemiAnalysis estimates NVIDIA takes roughly half of TSMC's CoWoS capacity.",
      },
      {
        type: "text",
        body:
          "AMD는 추격하는 2위다.\n\nMI300X(2024), MI325X(2025 상반기), MI350(2025 하반기), MI400(2026) 로드맵.\n\n2026 Q1 데이터센터 GPU 매출 추정 약 60억 달러.\n\nNVIDIA 대비 약 1/9 수준이지만 유일한 의미 있는 대안이다.\n\nOpenAI가 2024년 말부터 MI300X 본격 도입.\n\nMicrosoft Azure도 MI300X 인스턴스 출시.",
        bodyEn:
          "AMD is the chasing #2. MI300X (2024), MI325X (H1 2025), MI350 (H2 2025), MI400 (2026) roadmap. Q1 2026 data center GPU revenue is estimated around $6B. About 1/9 of NVIDIA, but the only meaningful alternative. OpenAI began deploying MI300X at scale from late 2024; Microsoft Azure has launched MI300X instances.",
      },
      {
        type: "text",
        body:
          "Broadcom은 ASIC의 진짜 강자다.\n\n여기가 흥미로운 영역이다.\n\nBroadcom은 GPU를 만들지 않는다.\n\nGoogle TPU, Meta MTIA, ByteDance Pangu 같은 hyperscaler 자체 칩을 위탁 설계해주고 위탁 생산 관리까지 해준다.\n\n수익 모델은 NVIDIA와 정반대로 디자인 fee + 칩당 royalty다.\n\n2026 Q1 FY AI semi 매출 84억 달러, 전년 대비 +106%.\n\n2026 Q2 가이던스 107억 달러, +140%.\n\nbacklog 730억 달러.\n\n이 backlog 숫자가 무엇을 의미하나.\n\n이미 hyperscaler가 주문해놓은 AI 칩 물량이 NVIDIA 1년 매출과 맞먹는다는 뜻이다.",
        bodyEn:
          "Broadcom is the real ASIC heavyweight. The interesting part: Broadcom doesn't make GPUs. It does custom-silicon design and production management for hyperscaler in-house chips — Google TPU, Meta MTIA, ByteDance Pangu. Revenue model is the opposite of NVIDIA — design fee plus per-chip royalty.\n\nQ1 FY2026 AI semi revenue of $8.4B, +106% YoY. Q2 guidance of $10.7B, +140% YoY. Backlog of $73B.\n\nWhat that backlog implies: AI-chip volume already on order from hyperscalers equals roughly one year of NVIDIA revenue.",
      },
      {
        type: "text",
        body:
          "Marvell은 두 번째 ASIC 강자다.\n\nAWS Trainium, Inferentia 위탁 설계가 핵심.\n\nMicrosoft Azure Cobalt CPU도 일부.\n\n2025 회계연도 매출 약 60억 달러, 그 중 AI 관련 약 45%.\n\nNVIDIA, Broadcom, Marvell 합산 AI 칩 매출이 전체 AI 칩 시장의 90%+를 차지한다.",
        bodyEn:
          "Marvell is the #2 ASIC name. Core wins: AWS Trainium and Inferentia, plus part of Microsoft Azure Cobalt CPU. FY2025 revenue ~$6B with AI ~45% of that. Combined NVIDIA, Broadcom and Marvell account for 90%+ of the AI chip market.",
      },
      {
        type: "text",
        body:
          "MediaTek은 대만의 다크호스다.\n\n스마트폰 SoC가 본업이지만, 2024년부터 NVIDIA와 파트너십으로 AI PC 칩 설계 시작.\n\nARM 기반 데이터센터 CPU 진출 시도.\n\n대만 정부의 적극 지원.\n\n장기적으로 Broadcom, Marvell 영역에 도전할 가능성이 있다.",
        bodyEn:
          "MediaTek is Taiwan's dark horse. Smartphone SoC is the core business, but from 2024 it began co-designing AI PC chips with NVIDIA. Trying to enter ARM-based data center CPU. Active Taiwan government support. Over the long run, it could challenge Broadcom and Marvell.",
      },
      {
        type: "text",
        body:
          "한국 fabless는 글로벌 AI 칩 시장에 거의 노출이 없다.\n\n삼성 LSI Exynos는 스마트폰 AP에 머문다.\n\nLX세미콘은 DDI(디스플레이 구동 IC) 중심.\n\n리벨리온이 NPU 스타트업으로 부상했지만 아직 매출 의미 있는 수준 아니다.\n\n이게 한국 반도체의 구조적 약점이다.\n\n설계는 약하고 메모리와 일부 소부장에 박혀 있다.",
        bodyEn:
          "Korean fabless has near-zero exposure to global AI chips. Samsung LSI Exynos remains in smartphone APs. LX Semicon is DDI (display driver IC). Rebellion has emerged as an NPU startup, but revenue isn't yet meaningful.\n\nThis is a structural Korean weakness — design is thin; memory and parts of sobujang carry the country.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "AI 칩 시장에서 가장 큰 오해",
          headingEn: "The Biggest Misconception in AI Chips",
          body:
            "NVIDIA만 보면 Broadcom의 ASIC backlog 730억 달러를 놓친다.\n\nASIC backlog는 hyperscaler가 NVIDIA에서 자체 칩으로 옮겨가고 있다는 신호다.\n\n그 흐름 안에서 진짜 알파는 둘 다 의존하는 공급망, 즉 TSMC CoWoS, SK하이닉스 HBM, ASML EUV다.",
          bodyEn:
            "Look only at NVIDIA and you miss Broadcom's $73B ASIC backlog. That backlog signals hyperscalers migrating from NVIDIA to in-house silicon. Inside that flow, the real alpha is the supply chain both sides depend on — TSMC CoWoS, SK Hynix HBM, ASML EUV.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 5. 메모리 사이클 — HBM이 일반 DRAM을 잡아먹는다
  // ════════════════════════════════════════════════════════════════
  {
    heading: "5. 메모리 사이클, HBM이 일반 DRAM을 잡아먹는다",
    headingEn: "5. The Memory Cycle — HBM Is Eating General DRAM",
    blocks: [
      {
        type: "text",
        body:
          "같은 SK하이닉스가 같은 wafer로 HBM을 만들 수도, DDR5를 만들 수도 있다.\n\nHBM이 wafer area를 4배 더 차지한다.\n\n그래서 HBM 생산이 늘어날수록 DDR5 공급이 부족해진다.\n\n2026년 1분기 DDR5 spot 가격은 그래서 폭등하고 있다.",
        bodyEn:
          "The same SK Hynix fab and the same wafer can make either HBM or DDR5.\n\nHBM consumes roughly 4× the wafer area per useful bit. So as HBM production grows, DDR5 supply tightens. Q1 2026 DDR5 spot prices are surging for exactly that reason.",
      },
      {
        type: "table",
        table: {
          id: "hbm-timeline",
          title: "HBM 세대별 timeline",
          titleEn: "HBM Generation Timeline",
          headers: ["세대", "대역폭", "적층", "양산 시작", "주요 GPU 탑재"],
          headersEn: ["Generation", "Bandwidth", "Stack", "Production start", "Main GPU"],
          rows: [
            ["HBM2", "256 GB/s", "4-Hi", "2016", "NVIDIA P100 (2016)"],
            ["HBM2E", "460 GB/s", "8-Hi", "2020", "A100 (2020)"],
            ["HBM3", "819 GB/s", "12-Hi", "2023", "H100 (2023)"],
            ["HBM3E", "1,200 GB/s", "12-Hi → 16-Hi", "2024-2025", "H200, Blackwell B100/B200"],
            ["HBM4", "2,000 GB/s+", "16-Hi", "2026 (양산 시작)", "Rubin, MI400"],
          ],
          rowsEn: [
            ["HBM2", "256 GB/s", "4-Hi", "2016", "NVIDIA P100 (2016)"],
            ["HBM2E", "460 GB/s", "8-Hi", "2020", "A100 (2020)"],
            ["HBM3", "819 GB/s", "12-Hi", "2023", "H100 (2023)"],
            ["HBM3E", "1,200 GB/s", "12-Hi → 16-Hi", "2024-2025", "H200, Blackwell B100/B200"],
            ["HBM4", "2,000 GB/s+", "16-Hi", "2026 (production start)", "Rubin, MI400"],
          ],
          caption: "출처: SK하이닉스, 삼성, 마이크론 IR. 3년마다 대역폭이 약 2배.",
          captionEn: "Source: SK Hynix, Samsung, Micron IR. Bandwidth roughly doubles every three years.",
        },
      },
      {
        type: "chart",
        chart: {
          id: "hbm-share-quarterly-semi",
          title: "Chart 3, HBM 분기별 점유율 (2023 Q1 → 2026 Q1)",
          titleEn: "Chart 3 — Quarterly HBM Share (2023 Q1 → 2026 Q1)",
          caption: "출처: Counterpoint Research, TrendForce. 2026 Q1은 추정. SK하이닉스가 1위를 유지하면서 마이크론이 삼성을 추월한 것이 핵심 사건이다.",
          captionEn: "Source: Counterpoint Research, TrendForce. Q1 2026 is estimate. The key event: SK Hynix held #1 while Micron overtook Samsung.",
          data: [
            { quarter: "23Q1", skhynix: 50, samsung: 40, micron: 10 },
            { quarter: "23Q4", skhynix: 52, samsung: 40, micron: 8 },
            { quarter: "24Q1", skhynix: 55, samsung: 38, micron: 7 },
            { quarter: "24Q4", skhynix: 52, samsung: 31, micron: 17 },
            { quarter: "25Q3", skhynix: 57, samsung: 22, micron: 21 },
            { quarter: "26Q1", skhynix: 59, samsung: 22, micron: 19 },
          ],
        },
      },
      {
        type: "text",
        body:
          "2023년 1분기 약 5억 달러였던 시장이 3년 만에 200억 달러로 40배가 됐다.\n\n같은 기간 SK하이닉스가 1위를 유지하면서 마이크론이 삼성을 추월하는 사건이 일어났다.\n\n2024년 4분기에 마이크론이 삼성을 처음으로 추월했다.\n\n삼성이 NVIDIA HBM3E 12-Hi 퀄 통과에 9개월 늦었기 때문이다.\n\n2025년 3분기 삼성이 HBM3E 12-Hi 본격 공급 시작, 2026년 1분기 HBM4 NVIDIA 퀄 최고점 통과 보도.",
        bodyEn:
          "A $0.5B market in Q1 2023 became a $20B market in three years — 40×.\n\nOver the same span, SK Hynix held #1 while Micron overtook Samsung. Micron first passed Samsung in Q4 2024 because Samsung was 9 months late on NVIDIA HBM3E 12-Hi qualification.\n\nIn Q3 2025 Samsung began full HBM3E 12-Hi shipments, and Q1 2026 reports indicated Samsung passed top-line NVIDIA HBM4 qualification.",
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "HBM이 일반 DRAM을 잡아먹는 메커니즘",
          headingEn: "The Mechanism: HBM Cannibalizing General DRAM",
          body:
            "SK하이닉스 한 wafer는 HBM 또는 DDR5를 만들 수 있다.\n\nHBM 한 스택은 일반 DRAM 칩보다 wafer area를 약 4배 차지한다.\n\n같은 wafer로 HBM을 만들수록 일반 DRAM 공급이 줄어든다.\n\n2026년 1분기 결과는 명확하다.\n\n2026년 1분기 CNBC 보도, 일반 DRAM이 shortage다.\n\n이게 한국 반도체에 의미하는 것은 두 가지다.\n\n첫째, SK하이닉스와 삼성의 메모리 부문 평균 영업이익률이 사상 최고 영역으로 진입한다.\n\n둘째, DDR5를 쓰는 서버, PC, 스마트폰 OEM이 메모리 조달 비용 폭증으로 영업이익이 압박받는다.",
          bodyEn:
            "An SK Hynix wafer can be used for HBM or DDR5. One HBM stack consumes roughly 4× the wafer area of a comparable DDR5 chip. So the more HBM made on a wafer, the less DDR5 supply available.\n\nQ1 2026 result is clear: CNBC reported general DRAM in shortage.\n\nTwo implications for Korean semis:\n\n1. SK Hynix and Samsung memory-segment OPMs enter all-time-high territory.\n\n2. Server, PC and smartphone OEMs using DDR5 face severe memory-cost pressure on margins.",
        },
      },
      {
        type: "table",
        table: {
          id: "ddr5-spot",
          title: "DDR5 8Gb spot 가격 추세",
          titleEn: "DDR5 8Gb Spot Price Trend",
          headers: ["분기", "DDR5 8Gb spot ($)", "비고"],
          headersEn: ["Quarter", "DDR5 8Gb spot ($)", "Note"],
          rows: [
            ["2023 Q3", "약 1.3", "사이클 바닥"],
            ["2024 Q4", "약 1.9", "회복"],
            ["2025 Q4", "3+", "HBM wafer 점유 가속"],
            ["2026 Q1", "shortage 보도", "CNBC 2026.04"],
          ],
          rowsEn: [
            ["2023 Q3", "~1.3", "Cycle bottom"],
            ["2024 Q4", "~1.9", "Recovery"],
            ["2025 Q4", "3+", "HBM wafer crowd-out accelerating"],
            ["2026 Q1", "Shortage reports", "CNBC, Apr 2026"],
          ],
          caption: "출처: TrendForce, DRAMeXchange, 보도 종합. spot은 변동 크고 정의 차이.",
          captionEn: "Source: TrendForce, DRAMeXchange, news compilations. Spot prices are volatile and definitions vary.",
        },
      },
      {
        type: "text",
        body:
          "NAND는 DRAM 사이클과 약 6-12개월 시차로 움직인다.\n\n2024년 NAND ASP는 약 2.6달러(512Gb TLC)로 회복.\n\n2025년 4분기 약 3달러 이상.\n\n키오시아(전 Toshiba Memory) 2026년 IPO 추진 보도.\n\nYMTC(중국)가 232L NAND 양산으로 공급 측 위협이 되고 있다.",
        bodyEn:
          "NAND tracks DRAM with a 6-12 month lag. NAND ASP recovered to ~$2.6 (512Gb TLC) in 2024 and exceeded $3 in Q4 2025. Kioxia (ex-Toshiba Memory) reportedly pursuing 2026 IPO. YMTC (China) has become a supply-side threat with 232L NAND mass production.",
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "메모리 사이클의 진짜 위험",
          headingEn: "The Real Risk in the Memory Cycle",
          body:
            "HBM 사이클이 언제 꺾이는가가 가장 큰 변수다.\n\n2026-2027년 HBM 공급 과잉 우려가 SemiAnalysis와 Jim Chanos(공매도 전문)에서 나오고 있다.\n\nSK하이닉스, 삼성, 마이크론 셋 다 HBM4 capa 확장을 발표.\n\nNVIDIA Rubin, AMD MI400 출하량이 기대만큼 안 늘어나면, HBM 공급이 수요를 초과할 수 있다.\n\n이 시나리오는 §15 위험 신호에서 자세히 본다.",
          bodyEn:
            "When the HBM cycle turns is the biggest variable. SemiAnalysis and Jim Chanos (short-seller) have flagged 2026-27 HBM oversupply concerns.\n\nAll three — SK Hynix, Samsung, Micron — announced HBM4 capacity expansions.\n\nIf NVIDIA Rubin and AMD MI400 shipments grow slower than expected, HBM supply could exceed demand. §15 examines this scenario.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 6. 파운드리 — TSMC 압도, 삼성·인텔 추격
  // ════════════════════════════════════════════════════════════════
  {
    heading: "6. 파운드리, TSMC 압도 삼성과 인텔 추격",
    headingEn: "6. Foundry — TSMC Dominates, Samsung and Intel Chase",
    blocks: [
      {
        type: "text",
        body:
          "파운드리는 한 회사가 사실상 압도한다.\n\nTSMC가 글로벌 60%+, 첨단 노드(N3 이하)에서는 90%+ 점유.\n\n삼성이 추격하고 있고, 인텔이 IFS로 다시 시도하고 있다.",
        bodyEn:
          "Foundry is effectively a one-company industry. TSMC holds 60%+ globally and 90%+ at leading nodes (N3 and below). Samsung is chasing; Intel is trying again via IFS.",
      },
      {
        type: "chart",
        chart: {
          id: "foundry-node-share",
          title: "Chart 4, 노드별 파운드리 글로벌 점유율 (2026 Q1)",
          titleEn: "Chart 4 — Foundry Share by Node (Q1 2026)",
          caption: "출처: TrendForce, SemiAnalysis 2026 분기 분석. N2는 2026 ramp 시 변동.",
          captionEn: "Source: TrendForce, SemiAnalysis Q1 2026 analysis. N2 will shift as 2026 ramp proceeds.",
          data: [
            { node: "N5/N4", tsmc: 85, samsung: 12, intel: 0, smic: 0 },
            { node: "N3", tsmc: 95, samsung: 5, intel: 0, smic: 0 },
            { node: "N2/SF2/18A", tsmc: 60, samsung: 20, intel: 18, smic: 0 },
          ],
        },
      },
      {
        type: "text",
        body:
          "TSMC 2026 Q1 실적을 보자.\n\n매출 35.9억 달러, 전년 대비 +30%.\n\nHPC(High Performance Computing) 비중 61%.\n\n2026년 capex 가이던스 520-560억 달러로 상향.\n\n이 capex 대부분이 CoWoS capacity 확장과 N2 양산 fab에 들어간다.",
        bodyEn:
          "TSMC Q1 2026: revenue of $35.9B (+30% YoY), HPC mix at 61%. 2026 capex guidance raised to $52-56B. Most of that capex flows to CoWoS capacity expansion and N2 production fabs.",
      },
      {
        type: "text",
        body:
          "삼성 파운드리는 추격 시도 중이다.\n\nSF2(2nm 등급) 2025년 4분기 양산 시작.\n\nGAA(Gate-All-Around) 구조로 TSMC N2와 정면 경쟁.\n\n2026년 1분기 NVIDIA, Qualcomm, Tesla(자사용 칩) 일부 수주 보도.\n\n문제는 수율이다.\n\n업계 보도 기준 삼성 SF2 수율은 TSMC N2 대비 약 20-30%p 낮다.\n\n같은 칩을 같은 가격에 만들 수 없다.",
        bodyEn:
          "Samsung Foundry is chasing. SF2 (2nm class) entered production in Q4 2025 using a GAA (Gate-All-Around) architecture to compete head-on with TSMC N2. Q1 2026 reports indicated Samsung won partial NVIDIA, Qualcomm and Tesla (in-house chip) orders.\n\nThe problem is yield. Industry reporting puts Samsung SF2 yield 20-30 percentage points below TSMC N2. The same chip cannot be made at the same price.",
      },
      {
        type: "text",
        body:
          "Intel Foundry Services(IFS)는 18A 양산에 진입했다.\n\nPat Gelsinger 사임 후 새 CEO 체제에서 18A 양산 우선으로 전략 단순화.\n\n2025년 4분기 18A 양산 시작.\n\nMicrosoft, Amazon AWS 일부 위탁 수주 보도.\n\n다만 외부 위탁 비중은 아직 10% 미만이다.\n\nIntel 자사 칩(Panther Lake 등)이 18A의 주력 수요다.",
        bodyEn:
          "Intel Foundry Services (IFS) is now producing 18A. After Pat Gelsinger's departure, the new CEO simplified strategy to 18A-first. Production started Q4 2025. Microsoft and Amazon AWS reportedly won some outsourcing slots.\n\nExternal share is still below 10%. Intel's in-house chips (Panther Lake, etc.) remain the main 18A demand.",
      },
      {
        type: "text",
        body:
          "SMIC는 중국 추격의 선두다.\n\n7nm(N+2) 양산은 2023년 시작.\n\n5nm 수준 시도는 2024-2025년 일부 보도.\n\n다만 EUV 없이 DUV 멀티패터닝으로 만들기 때문에 수율과 비용이 매우 불리하다.\n\nHuawei Mate 60 Pro의 Kirin 9000S가 SMIC 7nm 칩.\n\n2026년 1분기 SMIC 매출 25억 달러.",
        bodyEn:
          "SMIC leads China's chase. 7nm (N+2) production began 2023. 5nm-class attempts reported in 2024-25. But without EUV, using DUV multi-patterning, yield and cost are severely disadvantaged.\n\nHuawei Mate 60 Pro's Kirin 9000S is an SMIC 7nm chip. Q1 2026 SMIC revenue was $2.5B.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "파운드리 사이클의 본질",
          headingEn: "The Essence of the Foundry Cycle",
          body:
            "TSMC의 압도는 몇 년 안에 깨지지 않는다.\n\n이유는 세 가지다.\n\n첫째, 첨단 노드 진입 비용이 fab 1개당 200억 달러+로 폭증했다.\n\n둘째, 같은 노드를 같은 수율로 만들려면 수년의 학습 곡선이 필요하다.\n\n셋째, 고객이 옮기지 않는다. NVIDIA, AMD, Apple, Qualcomm이 TSMC를 떠날 이유가 없다.\n\n이게 §14에서 다룰 TSMC가 NVIDIA의 capacity를 결정하는 메커니즘의 출발점이다.",
          bodyEn:
            "TSMC's lead will not be broken in a few years. Three reasons.\n\n1. Leading-node entry cost has exploded to $20B+ per fab.\n\n2. Reaching the same yield at the same node requires years of learning curve.\n\n3. Customers don't move. NVIDIA, AMD, Apple, Qualcomm have no reason to leave TSMC.\n\nThis is the starting point for the §14 discussion of how TSMC decides NVIDIA's capacity.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 7. 중국 굴기
  // ════════════════════════════════════════════════════════════════
  {
    heading: "7. 중국 굴기, 5년 안에 따라잡힐 수도",
    headingEn: "7. China's Rise — Catch-up Within Five Years?",
    blocks: [
      {
        type: "text",
        body:
          "중국은 EUV가 없다.\n\n그래도 메모리, NAND, 식각 장비에서는 5년 안에 한국을 위협할 수 있는 수준이다.\n\nChina Big Fund Phase 3가 475억 달러를 풀고 있다.",
        bodyEn:
          "China has no EUV. Even so, in memory, NAND and etch equipment it can threaten Korea within five years. China's Big Fund Phase 3 is deploying $47.5B.",
      },
      {
        type: "table",
        table: {
          id: "us-china-controls",
          title: "미·중 수출 통제 timeline",
          titleEn: "US-China Export Control Timeline",
          headers: ["시점", "조치", "핵심 영향"],
          headersEn: ["Time", "Action", "Core impact"],
          rows: [
            ["2022.10", "16/14nm 이하 첨단 반도체 장비 수출 통제", "ASML EUV 중국 수출 0, AMAT, LAM, KLA 일부 장비 차단"],
            ["2023.10", "NVIDIA H100, H800, A100, A800 중국 수출 금지", "NVIDIA 중국 매출 -50%, H20(저성능 대체) 출시"],
            ["2024.10", "HBM 18% bandwidth 임계점 수출 통제", "HBM2E 이상 사실상 차단, 중국 자체 HBM 가속"],
            ["2024.12", "China Big Fund Phase 3 발표 (475억 달러)", "메모리, logic, 장비 국산화 총력"],
            ["2025-2026", "추가 수출 통제 + 보복 관세 협상 진행", "미·중 반도체 전선이 거시 정치 변수가 됨"],
          ],
          rowsEn: [
            ["Oct 2022", "Export controls on 16/14nm and below leading-edge equipment", "ASML EUV exports to China zero; partial AMAT, LAM, KLA blocks"],
            ["Oct 2023", "Ban on NVIDIA H100/H800/A100/A800 exports to China", "NVIDIA China revenue -50%; H20 (lower-spec) released"],
            ["Oct 2024", "HBM 18% bandwidth threshold export control", "HBM2E and above effectively blocked; China accelerates own HBM"],
            ["Dec 2024", "China Big Fund Phase 3 announced ($47.5B)", "All-out push on memory, logic, equipment localization"],
            ["2025-2026", "Additional controls + retaliatory tariff talks", "US-China semi front becomes a macro political variable"],
          ],
          caption: "출처: 미국 BIS(상무부 산업안보국) 공지, 중국 국가집적회로산업투자기금 발표.",
          captionEn: "Source: US BIS notices; China National IC Industry Investment Fund announcements.",
        },
      },
      {
        type: "chart",
        chart: {
          id: "china-self-sufficiency",
          title: "Chart 5, 중국 반도체 자급률 추이 (%, 2018-2026E)",
          titleEn: "Chart 5 — China Semiconductor Self-Sufficiency (%, 2018-2026E)",
          caption: "출처: SIA, Boston Consulting, SemiAnalysis 추정 종합.",
          captionEn: "Source: SIA, Boston Consulting, SemiAnalysis estimates aggregated.",
          data: [
            { year: 2018, total: 15, dram: 1, nand: 3, logic: 9 },
            { year: 2020, total: 17, dram: 3, nand: 7, logic: 11 },
            { year: 2022, total: 20, dram: 6, nand: 10, logic: 14 },
            { year: 2024, total: 23, dram: 9, nand: 13, logic: 17 },
            { year: 2026, total: 26, dram: 12, nand: 17, logic: 19 },
          ],
        },
      },
      {
        type: "text",
        body:
          "중국 자체 공급망이 5년 안 따라잡을 수 있는 영역을 보자.\n\nSMIC는 2023년 7nm(N+2) 양산 성공.\n\n2024-2025년 5nm 시도 보도.\n\n2026년 1분기 매출 25억 달러.\n\nEUV 없이 DUV 멀티패터닝으로 만들기 때문에 비용은 TSMC 대비 2-3배, 수율은 절반 수준으로 추정된다.\n\n그래도 Huawei Mate 60 Pro의 Kirin 9000S가 SMIC 7nm로 양산되면서 기술적 가능성은 증명했다.\n\n5nm 이하에서는 5-10년 격차가 유지된다는 것이 SemiAnalysis의 평가다.",
        bodyEn:
          "Where China can catch up within five years.\n\nSMIC began 7nm (N+2) mass production in 2023, with 5nm attempts reported in 2024-25 and Q1 2026 revenue of $2.5B. Without EUV, using DUV multi-patterning, cost is estimated 2-3× vs TSMC with yield about half. Yet Huawei Mate 60 Pro's Kirin 9000S, built on SMIC 7nm, proved technical feasibility. SemiAnalysis estimates a 5-10 year gap will persist below 5nm.",
      },
      {
        type: "text",
        body:
          "CXMT(창신메모리)는 DDR4 양산은 이미 완료.\n\n2024-2025년 DDR5 양산 시작.\n\n2026년 LPDDR5(모바일 메모리) 양산 예고.\n\nTrendForce 기준 글로벌 DRAM 점유율 약 6-7%(2025년 말 추정), 2027년까지 10%+ 달성 시나리오.\n\n기술 격차는 약 2-3 세대.\n\n다만 가격 경쟁력은 명백히 위협이다.",
        bodyEn:
          "CXMT completed DDR4 mass production and began DDR5 in 2024-25, with LPDDR5 (mobile memory) production scheduled for 2026. TrendForce estimates 6-7% global DRAM share at end-2025, with a path to 10%+ by 2027. The tech gap is roughly 2-3 generations — but price competitiveness is clearly a threat.",
      },
      {
        type: "text",
        body:
          "YMTC는 232L NAND 양산 성공(2024).\n\n기술적으로 키오시아, 마이크론과 동급.\n\n미·중 수출 통제로 최첨단 장비 도입에 제약이 있지만, 이미 2025년 글로벌 NAND 점유율 약 10%.\n\nNAND는 DRAM보다 사이클이 더 cyclical이라 중국발 공급 증가가 글로벌 NAND ASP를 끌어내릴 위험이 크다.\n\nAMEC는 CCP(Capacitively Coupled Plasma) 식각 장비에서 LAM Research 점유율을 일부 잠식했다.\n\n2025년 글로벌 식각 장비 점유율 약 8-10%(추정).\n\n장기적으로 LAM, TEL과 본격 경쟁할 가능성.\n\nNaura는 CVD, 식각, PVD, 세정 등 여러 카테고리에 진입.\n\n2025년 매출 약 25억 달러 추정.\n\nAMAT, LAM이 중국 외 시장에서는 압도적이지만 중국 내수에서는 점차 점유율 잃는 구조.",
        bodyEn:
          "YMTC succeeded in 232L NAND mass production (2024) — technically on par with Kioxia and Micron. Despite US-China controls limiting access to the most advanced tools, YMTC already holds ~10% global NAND share by 2025. NAND is more cyclical than DRAM, so Chinese supply expansion risks dragging down global NAND ASP.\n\nAMEC has eroded part of LAM Research's CCP (Capacitively Coupled Plasma) etch share. Global etch share estimated at 8-10% in 2025 — long-run, real competition for LAM and TEL.\n\nNaura has entered multiple categories (CVD, etch, PVD, clean), with 2025 revenue around $2.5B. AMAT and LAM remain dominant outside China but are steadily losing share inside China.",
      },
      {
        type: "text",
        body:
          "중국이 따라잡지 못하는 영역은 두 개다.\n\nEUV와 HBM이 두 영역이다.\n\nEUV는 ASML이 수출 통제 대상이고, 자체 개발에는 10-15년 격차가 있다는 평가가 다수.\n\nSMEE(상하이 마이크로일렉트로닉스 장비)가 DUV 단계에 머물고 있다.\n\nHBM은 기술적 격차보다 NVIDIA 퀄 통과 자체가 어렵다.\n\nCXMT가 HBM 시도 보도가 있지만, NVIDIA가 중국산 HBM을 채택할 가능성은 정치적으로 거의 0이다.",
        bodyEn:
          "Two areas China cannot catch up on: EUV and HBM.\n\nASML EUV is under export control; in-house Chinese development is estimated 10-15 years behind. SMEE (Shanghai Micro Electronics Equipment) remains stuck at DUV.\n\nFor HBM, the real barrier isn't the tech gap — it's NVIDIA qualification. CXMT has been reported attempting HBM, but the chance NVIDIA adopts Chinese HBM is politically near zero.",
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "한국 반도체에 의미하는 것",
          headingEn: "Implications for Korean Semis",
          body:
            "세 가지로 압축된다.\n\n첫째, 일반 DRAM(DDR5, LP5)은 5년 안에 중국과 가격 경쟁에 들어간다. 이게 SK하이닉스, 삼성의 메모리 매출의 약 30-40%다.\n\n둘째, NAND는 이미 위협받고 있다. YMTC가 가격 덤핑에 가까운 전략을 쓰면 삼성 NAND 영업이익이 사라질 수 있다.\n\n셋째, HBM과 EUV는 5-10년 안전 영역이다. 이 두 영역에 박힌 한국 회사들, SK하이닉스 HBM, 한미반도체 TC Bonder, 솔브레인 인산 식각, HPSP 고압 어닐링이 상대적으로 더 안전하다.",
          bodyEn:
            "Three implications.\n\n1. General DRAM (DDR5, LP5) enters price competition with China within five years. This is ~30-40% of SK Hynix and Samsung memory revenue.\n\n2. NAND is already under pressure. If YMTC moves to near-dumping pricing, Samsung NAND operating profit could disappear.\n\n3. HBM and EUV are safe for 5-10 years. Korean firms anchored here — SK Hynix HBM, Hami TC Bonder, Soulbrain phosphoric etch, HPSP high-pressure annealing — are relatively safer.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 8. 3대 병목 ① HBM
  // ════════════════════════════════════════════════════════════════
  {
    heading: "8. 3대 병목 ①, HBM 그리고 SK하이닉스가 잡은 새 사이클",
    headingEn: "8. Bottleneck #1 — HBM, the New Cycle SK Hynix Captured",
    blocks: [
      {
        type: "text",
        body:
          "HBM 시장은 3년 만에 5억 달러에서 200억 달러로 40배가 됐다.\n\nSK하이닉스가 60% 점유.\n\n그 뒤에 한미반도체 TC Bonder가 70%, 심텍 substrate, 솔브레인 식각액이 있다.",
        bodyEn:
          "The HBM market grew from $0.5B to $20B in three years — 40×. SK Hynix holds 60%. Behind it sit Hami TC Bonder at 70%, Simmtech substrate, and Soulbrain etchant.",
      },
      {
        type: "table",
        table: {
          id: "hbm-supply-chain",
          title: "HBM 공급 체인 한 페이지",
          titleEn: "HBM Supply Chain on One Page",
          headers: ["단계", "글로벌 dominant", "한국 핵심"],
          headersEn: ["Stage", "Global dominant", "Korea core"],
          rows: [
            ["HBM 셀 (DRAM)", "SK하이닉스 59% / 삼성 22% / 마이크론 19%", "SK하이닉스 압도"],
            ["TC Bonder (적층 장비)", "한미반도체 약 70%", "한미반도체"],
            ["HBM substrate (기판)", "Ibiden, Shinko (일본) 압도", "심텍 (일부)"],
            ["HBM TSV 그라인딩", "Disco (일본) 약 80%", "일부"],
            ["HBM 검사", "KLA, 어드밴테스트", "인텍플러스, 고영"],
            ["HBM 식각액, 전구체", "(글로벌 여럿)", "솔브레인, 원익머트리얼즈, 디엔에프, 후성"],
            ["HBM 테스트 핸들러", "어드밴테스트 일부", "테크윙"],
            ["HBM 패키지 (최종)", "TSMC CoWoS + SK하이닉스 자체 MR-MUF", "SFA반도체, 하나마이크론"],
          ],
          rowsEn: [
            ["HBM cell (DRAM)", "SK Hynix 59% / Samsung 22% / Micron 19%", "SK Hynix dominant"],
            ["TC Bonder (stacker)", "Hami ~70%", "Hami"],
            ["HBM substrate", "Ibiden, Shinko (Japan) dominant", "Simmtech (partial)"],
            ["HBM TSV grinding", "Disco (Japan) ~80%", "Partial"],
            ["HBM inspection", "KLA, Advantest", "Intekplus, Koh Young"],
            ["HBM etchant, precursors", "(several global)", "Soulbrain, Wonik Mat, DNF, Foosung"],
            ["HBM test handlers", "Advantest (some)", "Techwing"],
            ["HBM package (final)", "TSMC CoWoS + SK Hynix in-house MR-MUF", "SFA Semicon, Hana Micron"],
          ],
        },
      },
      {
        type: "text",
        body:
          "SK하이닉스는 HBM의 절대 강자다.\n\n2026년 1분기 매출 52.58조원, 영업이익 37.61조원, 영업이익률 72%로 회사 사상 최대 분기 실적.\n\nHBM 점유율 57-59%로 마이크론 19%, 삼성 22%를 합친 것보다 크다.\n\nHBM3E 12-Hi는 NVIDIA Blackwell B200, H200에 독점 공급에 가깝다.\n\nHBM4는 2026년 1분기 NVIDIA 퀄 최고점 통과 보도, 2분기 본양산 시작.\n\nNVIDIA Rubin, AMD MI400에 HBM4 표준 탑재 예정.",
        bodyEn:
          "SK Hynix is HBM's clear leader. Q1 2026 revenue ₩52.58T, operating profit ₩37.61T, OPM 72% — an all-time high. HBM share at 57-59%, larger than Micron 19% + Samsung 22% combined. HBM3E 12-Hi supplies NVIDIA Blackwell B200 and H200 effectively on a sole-source basis. HBM4 reportedly passed top NVIDIA qualification in Q1 2026 and enters production Q2. NVIDIA Rubin and AMD MI400 will standardise on HBM4.",
      },
      {
        type: "text",
        body:
          "삼성은 추격하는 2위지만 본 격차가 있다.\n\n삼성 HBM은 NVIDIA HBM3E 12-Hi 퀄 통과에 9개월 늦었다.\n\n2025년 3분기에야 본격 공급 시작.\n\n그 사이 마이크론이 삼성을 추월하는 사건이 일어났다 (2024년 4분기 첫 추월).\n\n2026년 1분기 HBM4 NVIDIA 퀄 최고점 통과로 복귀 시도 중.\n\n다만 시장 점유율이 회복되는지는 2-3 분기 더 봐야 안다.",
        bodyEn:
          "Samsung is the chasing #2 but with a real gap. Samsung HBM was 9 months late on NVIDIA HBM3E 12-Hi qualification, starting full shipments only in Q3 2025. In between, Micron overtook Samsung (first time Q4 2024). Q1 2026 HBM4 NVIDIA qualification represents Samsung's comeback attempt. Whether share actually recovers will take 2-3 more quarters to confirm.",
      },
      {
        type: "text",
        body:
          "마이크론은 다크호스다.\n\nFY Q2 2026 매출 238.6억 달러로 전년 대비 +196%.\n\nFY Q3 가이던스 매출 335억 달러, 마진 81%.\n\nHBM4 Vera Rubin용 양산 NVIDIA Rubin에 일부 공급 시작.\n\nHBM 점유율 약 19-21%.\n\n미국 회사라서 지정학적 리스크가 없다는 점이 NVIDIA, AMD에게 매력적.",
        bodyEn:
          "Micron is the dark horse. FY Q2 2026 revenue $23.86B (+196% YoY); FY Q3 guidance $33.5B at 81% margin. HBM4 (Vera Rubin variant) is shipping in volume into NVIDIA Rubin. HBM share ~19-21%. As a US firm with no geopolitical risk, it is attractive to NVIDIA and AMD.",
      },
      {
        type: "table",
        table: {
          id: "korea-hbm-chain",
          title: "한국 HBM 공급망, 누가 진짜 알파인가",
          titleEn: "Korean HBM Supply Chain — Who is the Real Alpha",
          headers: ["회사", "역할", "글로벌 위치", "2026 노출"],
          headersEn: ["Firm", "Role", "Global position", "2026 exposure"],
          rows: [
            ["SK하이닉스", "HBM 셀", "글로벌 1위 (59%)", "정점 사이클"],
            ["한미반도체", "TC Bonder", "글로벌 1위 (약 70%)", "HBM 세대 전환 공백 (2026 Q1 -65.5%)"],
            ["심텍", "HBM substrate", "글로벌 일부 (일본 Ibiden 압도)", "SK하이닉스 의존"],
            ["솔브레인", "인산 식각액", "(한국 강자)", "SK하이닉스, TSMC 의존"],
            ["원익머트리얼즈", "NF3, HCDS 가스", "(한국 강자)", "SK하이닉스, 삼성 의존"],
            ["인텍플러스", "HBM 검사", "(한국 강자)", "SK하이닉스 의존"],
            ["테크윙", "메모리 테스트 핸들러", "(한국 강자)", "마이크론, SK하이닉스 의존"],
            ["SFA반도체", "OSAT (일반 메모리)", "(한국 중간)", "삼성 의존"],
            ["하나마이크론", "OSAT", "(한국 중간)", "삼성 의존"],
          ],
          rowsEn: [
            ["SK Hynix", "HBM cell", "Global #1 (59%)", "Cycle peak"],
            ["Hami", "TC Bonder", "Global #1 (~70%)", "HBM gen-transition gap (Q1 2026 -65.5%)"],
            ["Simmtech", "HBM substrate", "Global partial (Japan Ibiden dominant)", "SK Hynix-dependent"],
            ["Soulbrain", "Phosphoric etchant", "Korea strong", "SK Hynix, TSMC dependent"],
            ["Wonik Materials", "NF3, HCDS gases", "Korea strong", "SK Hynix, Samsung dependent"],
            ["Intekplus", "HBM inspection", "Korea strong", "SK Hynix dependent"],
            ["Techwing", "Memory test handlers", "Korea strong", "Micron, SK Hynix dependent"],
            ["SFA Semicon", "OSAT (general memory)", "Korea mid", "Samsung dependent"],
            ["Hana Micron", "OSAT", "Korea mid", "Samsung dependent"],
          ],
        },
      },
      {
        type: "text",
        body:
          "한미반도체가 글로벌 70% 점유한다는 점이 가장 흥미롭다.\n\n같은 SK하이닉스 HBM이 늘어나면 한미반도체도 함께 늘어난다는 직접적 베타.\n\n다만 2026년 1분기 -65.5% 실적이 보여준 것은 세대 전환 공백 위험이다.\n\nHBM3E 12-Hi에서 HBM4로 넘어가는 사이에 TC Bonder 발주가 일시 정체될 수 있다.\n\n장기 thesis(HBM 시장 폭발)와 단기 변동성이 따로 움직인다.",
        bodyEn:
          "The most interesting fact is Hami's 70% global share. As SK Hynix HBM grows, Hami grows — a direct beta. But Q1 2026's -65.5% revealed the generation-transition risk: the move from HBM3E 12-Hi to HBM4 can briefly stall TC Bonder orders. The long-term thesis (HBM market explosion) and short-term volatility move on different tracks.",
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "SK하이닉스 OPM 72%, 지속 가능한가",
          headingEn: "Is SK Hynix's 72% OPM Sustainable?",
          body:
            "SK하이닉스 영업이익률 72%가 지속 가능한가가 가장 큰 변수다.\n\nHBM 시장은 폭발 중이지만 공급 측에서도 셋(SK, 삼성, 마이크론) 모두 capa 확장이다.\n\n2026-2027년 사이 HBM 공급 과잉 시나리오가 SemiAnalysis와 Jim Chanos에서 나오고 있다.\n\n이건 §15 위험 신호에서 자세히 본다.",
          bodyEn:
            "The biggest variable is whether 72% OPM is sustainable. HBM demand is exploding, but all three suppliers (SK, Samsung, Micron) are expanding capacity. SemiAnalysis and Jim Chanos have raised 2026-27 oversupply scenarios. §15 examines this risk in detail.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 9. 3대 병목 ② CoWoS
  // ════════════════════════════════════════════════════════════════
  {
    heading: "9. 3대 병목 ②, CoWoS와 TSMC가 NVIDIA의 capacity를 결정한다",
    headingEn: "9. Bottleneck #2 — CoWoS and How TSMC Decides NVIDIA's Capacity",
    blocks: [
      {
        type: "text",
        body:
          "CoWoS는 GPU와 HBM을 한 자리에 묶는 첨단 패키징이다.\n\nTSMC가 사실상 독점한다.\n\n2023년 월 15,000 wafer였던 capacity가 2026년 130,000으로 8.6배.\n\nNVIDIA, AMD, Broadcom 모두 줄을 서고 있다.",
        bodyEn:
          "CoWoS is the advanced packaging that combines GPU and HBM on one platform. TSMC effectively monopolises it. Capacity grew from 15,000 wafer/month at end-2023 to 130,000 at end-2026 — 8.6×. NVIDIA, AMD and Broadcom are all in the queue.",
      },
      {
        type: "chart",
        chart: {
          id: "cowos-capacity",
          title: "Chart 6, TSMC CoWoS 월 wafer capacity 추이 (2023-2026E)",
          titleEn: "Chart 6 — TSMC CoWoS Monthly Wafer Capacity (2023-2026E)",
          caption: "출처: TrendForce, TSMC capex commentary. 3년 안에 8.6배.",
          captionEn: "Source: TrendForce, TSMC capex commentary. 8.6× in three years.",
          data: [
            { year: "2023말", capacity: 15 },
            { year: "2024말", capacity: 35 },
            { year: "2025말", capacity: 78 },
            { year: "2026말 (E)", capacity: 125, projected: true },
          ],
        },
      },
      {
        type: "text",
        body:
          "3년 안에 8.6배.\n\n같은 기간 NVIDIA 데이터센터 매출이 약 6배 늘었으니, CoWoS가 NVIDIA보다 빠르게 늘어나고 있다.\n\n그래도 부족하다.",
        bodyEn:
          "8.6× in three years. Over the same window NVIDIA data center revenue grew about 6× — CoWoS is growing faster than NVIDIA. And still short.",
      },
      {
        type: "callout",
        callout: {
          variant: "example",
          heading: "2024-2025 NVIDIA Blackwell delay, CoWoS가 진짜 변수였다",
          headingEn: "2024-25 NVIDIA Blackwell Delay — CoWoS Was the Real Variable",
          body:
            "2024년 4월 NVIDIA Blackwell 발표.\n\n2024년 4분기 양산 예고였지만 몇 차례 delay.\n\n표면적 이유는 Blackwell 자체의 설계 issue로 알려졌다.\n\n실제로는 CoWoS capacity 부족이 더 큰 변수였다는 것이 SemiAnalysis(Dylan Patel)의 분석이다.\n\nTSMC가 NVIDIA, AMD, Broadcom, Marvell, Apple 사이에서 CoWoS capa를 배분해야 했고, NVIDIA가 모든 물량을 받지 못했다.\n\n결과적으로 2025년 1분기 양산으로 늦춰졌고, 그 사이 AMD MI300X가 일부 시장을 가져갔다.",
          bodyEn:
            "NVIDIA announced Blackwell in April 2024 for Q4 2024 production, with multiple delays. The stated cause was a Blackwell design issue. Per SemiAnalysis (Dylan Patel), the larger driver was CoWoS shortage. TSMC had to allocate CoWoS across NVIDIA, AMD, Broadcom, Marvell, Apple — NVIDIA could not get its full ask. Production slipped to Q1 2025, and AMD MI300X took some share in the gap.",
        },
      },
      {
        type: "text",
        body:
          "TSMC 2026 Q1 실적과 capex를 보자.\n\n매출 35.9억 달러, +30% YoY.\n\nHPC(데이터센터) 비중 61%.\n\n2026년 capex 가이던스 520-560억 달러로 상향.\n\n이 capex의 대부분이 CoWoS capacity 확장과 N2 양산 fab에 들어간다.\n\nTSMC가 2026년에만 350-400억 달러를 CoWoS에 투자한다는 시장 추정.",
        bodyEn:
          "TSMC Q1 2026: revenue $35.9B (+30% YoY), HPC (data center) at 61%. 2026 capex guidance raised to $52-56B. Most flows to CoWoS expansion and N2 production fabs. Market estimates TSMC invests $35-40B in CoWoS alone in 2026.",
      },
      {
        type: "table",
        table: {
          id: "cowos-chain",
          title: "CoWoS 공급 체인",
          titleEn: "CoWoS Supply Chain",
          headers: ["단계", "글로벌 dominant", "한국 노출"],
          headersEn: ["Stage", "Global dominant", "Korea exposure"],
          rows: [
            ["Interposer 제조 (CoWoS-S/L)", "TSMC 직제조", "미미"],
            ["ABF substrate (기판)", "Ajinomoto (일본) 약 100%", "0"],
            ["Underfill 소재", "Henkel, Namics (일본)", "0"],
            ["CMP 슬러리", "CMC, Merck, Cabot", "솔브레인, SK엔펄스 일부"],
            ["Si parts (식각 챔버 부품)", "(글로벌 여럿)", "하나머티리얼즈, 티씨케이"],
            ["EUV/DUV 노광", "ASML", "0"],
            ["검사", "KLA, Lasertec, 어드밴테스트", "인텍플러스 일부"],
          ],
          rowsEn: [
            ["Interposer (CoWoS-S/L)", "TSMC in-house", "Negligible"],
            ["ABF substrate", "Ajinomoto (Japan) ~100%", "0"],
            ["Underfill materials", "Henkel, Namics (Japan)", "0"],
            ["CMP slurry", "CMC, Merck, Cabot", "Partial Soulbrain, SK Enpulse"],
            ["Si parts (etch-chamber parts)", "(global multi)", "Hana Materials, TCK"],
            ["EUV/DUV lithography", "ASML", "0"],
            ["Inspection", "KLA, Lasertec, Advantest", "Partial Intekplus"],
          ],
          caption: "CoWoS에서 한국 노출은 상대적으로 제한적이다. ABF substrate를 일본 Ajinomoto가 사실상 100% 점유하고, underfill 소재도 일본 강자. 한국 노출은 식각 챔버 부품과 슬러리에 머문다.",
          captionEn: "Korea's CoWoS exposure is relatively limited. ABF substrate is effectively 100% Ajinomoto (Japan); underfill is also Japan-led. Korea sits mostly in etch-chamber parts and slurry.",
        },
      },
      {
        type: "text",
        body:
          "이게 한국 반도체의 구조적 약점 중 하나다.\n\nCoWoS가 폭발해도 한국이 직접 받는 부분은 크지 않다.\n\n대신 SK하이닉스 HBM이 CoWoS에 들어간다는 간접 베타가 있다.",
        bodyEn:
          "This is one of Korean semis' structural weaknesses. A CoWoS explosion does not directly flow to Korea — but SK Hynix HBM going into CoWoS gives Korea indirect beta.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "CoWoS는 AI 칩 시장 전체의 병목",
          headingEn: "CoWoS Is the Whole Market's Bottleneck",
          body:
            "TSMC가 capacity로 통제한다는 메커니즘은 §14 Case Study에서 더 깊이 본다.\n\n핵심은 NVIDIA, AMD, Broadcom 셋이 같이 줄을 서면 TSMC가 누구에게 얼마를 줄지를 결정하는 위치에 있다는 것이다.\n\nCoWoS는 NVIDIA만의 병목이 아니라 AI 칩 시장 전체의 병목이다.",
          bodyEn:
            "§14 dives deeper into the TSMC-as-allocator mechanism. The key point: when NVIDIA, AMD and Broadcom all queue together, TSMC decides who gets how much. CoWoS is not NVIDIA's bottleneck alone — it is the bottleneck of the entire AI chip market.",
        },
      },
    ],
  },
];
