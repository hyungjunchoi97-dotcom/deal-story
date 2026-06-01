/**
 * Sections 10-16 for the Private Credit Era note.
 * Part B: Big 7 / Apollo-Athene / Korea / Cases / Contagion / Action / Glossary
 *
 * Style rules:
 *  - No `**bold**` (italic `*foo*` only — renders violet)
 *  - First use of acronyms expanded in full
 *  - Korean: first-person ("우리/당신"), English: global-reader voice
 *  - Cross-refs use ✓ ("→ ✓14")
 *  - Section headings: numeric, no §
 *  - Footnote markers ¹²³ matched to REFERENCES
 */

import type { NoteSection } from "../notes";

export const SECTIONS_PART_B: NoteSection[] = [
  // ════════════════════════════════════════════════════════════════
  // 10. 빅 7 글로벌 플레이어
  // ════════════════════════════════════════════════════════════════
  {
    heading: "10. 빅 7 + 1 — 누가 시장을 굴리는가",
    headingEn: "10. The Big 7 (plus One) — Who Runs the Market",
    blocks: [
      {
        type: "text",
        body:
          "PC 시장은 *집중*이 본질이다. 운용 AUM 합산 기준 상위 7개사 — Apollo·Blackstone·KKR·Ares·Blue Owl·Oaktree·HPS — 가 글로벌 PC 자산의 *절반 이상*을 통제한다. 여기에 별도 단락으로 다룰 만한 *Sixth Street*까지 더하면 *빅 7 + 1*이다.\n\n표는 단순한 줄세우기가 아니다. 각 운용사의 *모델*이 다르다 — Apollo는 보험사 합병형(Athene), Blackstone은 위탁운용형(SMA, Corebridge·Allstate), KKR은 100% 인수형(Global Atlantic), Ares는 합작형(Aspida), Blue Owl은 멀티플랫폼 인수형(Atalaya·Kuvare), Oaktree는 distressed 전통강자(Brookfield 산하), HPS는 mezz·specialty 전문(BlackRock에 매각).¹⁹\n\n또한 *AUM 정의*가 회사별로 다르다는 점은 반드시 기억해야 한다 — Apollo의 \"Direct Origination + ABF + Opportunistic + Multi-credit 합계 $749.2B\"와 KBRA의 \"Direct Lending\" 한정 수치는 다른 동물이다. 본문 표의 AUM은 *2024 Q4 IR 또는 2025 H1 공시* 기준이며, ±10% 오차는 정의 차이에서 온다.²⁰",
        bodyEn:
          "PC is a *concentration* business. The top seven managers — Apollo, Blackstone, KKR, Ares, Blue Owl, Oaktree, HPS — control *more than half* of global PC AUM. Add *Sixth Street*, which deserves its own paragraph, and you get the *Big 7 plus One*.\n\nThe table is not just a ranking. Each manager runs a different *model*: Apollo merged with its insurer (Athene); Blackstone runs separately managed accounts (Corebridge, Allstate); KKR bought its insurer outright (Global Atlantic); Ares incubated one (Aspida); Blue Owl bolted on platforms (Atalaya, Kuvare); Oaktree is the distressed legacy house under Brookfield; HPS, a junior-debt and specialty shop, was bought by BlackRock.¹⁹\n\nOne caveat: *AUM definitions differ*. Apollo's \"Direct Origination + ABF + Opportunistic + Multi-credit\" totalling $749.2B is not the same animal as KBRA's narrow \"Direct Lending\" tally. The numbers below are *2024 Q4 IR or 2025 H1 disclosures*; expect ±10% drift driven by definition.²⁰",
      },
      {
        type: "table",
        table: {
          id: "big-seven-snapshot",
          title: "빅 7 + Sixth Street — AUM·모델·특화 한 표",
          titleEn: "The Big 7 + Sixth Street — AUM, Model, Specialty",
          headers: ["운용사", "총 AUM ('24Q4)", "Credit AUM", "보험사", "모델", "특화"],
          headersEn: ["Manager", "Total AUM (Q4'24)", "Credit AUM", "Insurance Arm", "Model", "Specialty"],
          rows: [
            ["*Apollo*", "~$751B", "~$598B", "Athene + Athora", "*합병형*", "ABF · IG PC · Distressed"],
            ["Blackstone", "~$1.1T (C&I $375.5B)", "~$375B (C&I)", "Corebridge · Allstate (SMA)", "*위탁형*", "Large-cap unitranche · Infra debt"],
            ["KKR", "~$638B", "~$240B", "Global Atlantic (100%)", "*100% 인수*", "Leveraged credit · ABF"],
            ["Ares", "~$484B", "~$199B (DL)", "Aspida", "*합작형*", "Direct lending 1위 · NAV lending"],
            ["Blue Owl", "~$235B", "~$235B", "Kuvare AM (2024 인수)", "*멀티 플랫폼*", "Upper-MM unitranche · GP financing"],
            ["Oaktree", "~$205B", "(대부분)", "American Equity Life (Brookfield)", "*distressed 전통*", "Distressed · HY · Opportunity"],
            ["HPS", "~$165B (2025.6)", "(전체)", "(직접 보유 없음)", "*specialty*", "Junior · mezz · Large-cap DL"],
            ["Sixth Street", "~$75B", "(대부분)", "(없음)", "*cross-platform*", "Sports media · Growth credit"],
          ],
          rowsEn: [
            ["*Apollo*", "~$751B", "~$598B", "Athene + Athora", "*Merger model*", "ABF · IG PC · Distressed"],
            ["Blackstone", "~$1.1T (C&I $375.5B)", "~$375B (C&I)", "Corebridge · Allstate (SMA)", "*Mandate model*", "Large-cap unitranche · Infra debt"],
            ["KKR", "~$638B", "~$240B", "Global Atlantic (100%)", "*100% acquisition*", "Leveraged credit · ABF"],
            ["Ares", "~$484B", "~$199B (DL)", "Aspida", "*Joint-venture model*", "#1 direct lending · NAV lending"],
            ["Blue Owl", "~$235B", "~$235B", "Kuvare AM (2024)", "*Multi-platform*", "Upper-MM unitranche · GP financing"],
            ["Oaktree", "~$205B", "(majority)", "American Equity Life (Brookfield)", "*Distressed legacy*", "Distressed · HY · Opportunity"],
            ["HPS", "~$165B (H1'25)", "(all)", "(none directly held)", "*Specialty*", "Junior · mezz · Large-cap DL"],
            ["Sixth Street", "~$75B", "(majority)", "(none)", "*Cross-platform*", "Sports media · Growth credit"],
          ],
          caption: "출처: 각사 IR 2024 Q4·2025 H1. AUM 정의는 회사별 상이 (Apollo \"Direct Origination + ABF\" 합계 vs Ares \"Direct Lending\" 단독). Sixth Street은 2020년 TPG에서 분사. *2025.7 BlackRock의 HPS 인수 완결*로 BlackRock 통합 PC franchise는 ~$220B.²¹",
          captionEn: "Sources: company IR Q4 2024 / H1 2025. AUM definitions differ by firm (Apollo's \"Direct Origination + ABF\" composite vs Ares' standalone \"Direct Lending\"). Sixth Street spun out of TPG in 2020. *BlackRock closed the HPS acquisition in July 2025*, bringing the combined BlackRock PC franchise to ~$220B.²¹",
          highlightRows: [0, 4],
        },
      },
      {
        type: "chart",
        chart: {
          id: "pc-asset-classes",
          title: "Chart 3 — 2024년 PC AUM 자산 클래스별 비중 (%)",
          titleEn: "Chart 3 — PC AUM Breakdown by Strategy, 2024 (%)",
          caption: "출처: Preqin + McKinsey 종합. 운용사별 분류 차이로 ±5% 오차. Direct Lending이 시장의 *약 절반*을 차지하는 점이 핵심.",
          captionEn: "Sources: Preqin + McKinsey composite; ±5% drift across managers. The key fact is that *direct lending is roughly half* of the market.",
          data: [
            { strategy: "Direct Lending", strategyEn: "Direct Lending", share: 44 },
            { strategy: "Asset-Based Finance", strategyEn: "Asset-Based Finance", share: 13 },
            { strategy: "Distressed/Special Sit", strategyEn: "Distressed/Special Sit", share: 11 },
            { strategy: "Mezzanine", strategyEn: "Mezzanine", share: 10 },
            { strategy: "Real Estate Debt", strategyEn: "Real Estate Debt", share: 8 },
            { strategy: "Venture/Growth Debt", strategyEn: "Venture/Growth Debt", share: 5 },
            { strategy: "Infrastructure Debt", strategyEn: "Infrastructure Debt", share: 5 },
            { strategy: "NAV Finance", strategyEn: "NAV Finance", share: 4 },
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "왜 Sixth Street만 별도인가",
          headingEn: "Why Sixth Street Sits Apart",
          body:
            "AUM은 ~$75B로 빅 7보다 작지만 *cross-platform thematic* 전략이 독특하다 — Real Madrid·FC Barcelona의 미디어 라이선스 financing, Airbnb pre-IPO convertible, 스포츠팀 지분 financing 등. 2020년 TPG에서 분사한 이후 *deal-by-deal* 색깔이 강하다. 빅 7과 같은 \"flow business\"가 아니라 *event-driven*에 가깝다. → ✓13에서 다시 등장.²²",
          bodyEn:
            "At ~$75B, Sixth Street is smaller than the Big 7 — but its *cross-platform thematic* style stands apart: Real Madrid and FC Barcelona media-rights financing, Airbnb's pre-IPO convertible, sports-franchise equity financings. Since spinning out of TPG in 2020 it has been a *deal-by-deal* shop, *event-driven* rather than the Big 7's \"flow business.\" Re-appears in → ✓13.²²",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 11. Apollo × Athene 보험사 모델
  // ════════════════════════════════════════════════════════════════
  {
    heading: "11. 보험사 자본의 무한 엔진 — Apollo × Athene 모델",
    headingEn: "11. The Infinite Engine of Insurance Capital — Apollo × Athene",
    blocks: [
      {
        type: "text",
        body:
          "*왜 PC 운용사가 보험사를 사는가.* 답은 한 줄로 요약된다 — *영구 자본 + 스프레드 차익*. 펀드는 만기가 있다. LP가 돈을 빼면 deployment가 멈춘다. 그러나 *연금(annuity) 부채*는 평균 듀레이션이 7-10년이고, 만기 도래분만 신규 발행으로 갈음하면 *영원히 굴릴 수 있다*. 이것이 영구 자본(Permanent Capital)이다.\n\n동시에 보험사의 부채비용(annuity cost)은 ~4-5%, IG PC(Investment Grade Private Credit) 운용수익은 ~6-8%. 200-300bp의 *spread*가 운용사 fee와 보험사 마진으로 분배된다. Apollo의 표현으로 *\"insurance capital is the deepest, longest, and most cost-efficient funding source available\"*. → ✓14 위기 진앙에서 이 모델이 왜 systemic risk로 분류되는지 다시 다룬다.²³",
        bodyEn:
          "*Why does a PC manager buy an insurer?* In one line: *permanent capital plus spread arbitrage*. Funds have maturities. When LPs redeem, deployment stops. *Annuity liabilities*, by contrast, average 7-10 years and can be rolled forever by writing new policies — that is permanent capital.\n\nAt the same time, annuity cost runs ~4-5% while investment-grade PC yields ~6-8%. The 200-300bp *spread* is split between the manager's fee and the insurer's margin. In Apollo's own framing: *insurance capital is the deepest, longest, and most cost-efficient funding source available*. → ✓14 explains why regulators classify the same architecture as systemic risk.²³",
      },
      {
        type: "chart",
        chart: {
          id: "apollo-athene-flow",
          title: "Diagram — Apollo × Athene 6단계 자본 흐름",
          titleEn: "Diagram — Apollo × Athene Six-Stage Capital Flow",
          caption: "Source: Apollo IR 2024, Athene 10-K. 단계별 마진은 *Apollo 자체 추정* 수준이며 실제 spread는 vintage·duration·credit mix에 따라 변동.",
          captionEn: "Sources: Apollo IR 2024, Athene 10-K. Stage margins are *Apollo's own indicative ranges*; realised spreads move with vintage, duration, and credit mix.",
          stages: [
            { step: 1, actor: "연금 가입자", actorEn: "Annuity holders", flow: "보험료 납부 (~$1)", flowEn: "Premium paid (~$1)", detail: "은퇴자가 매월·일시납으로 연금 매입", detailEn: "Retirees buy annuities monthly or as a lump sum", color: "#0ea5e9" },
            { step: 2, actor: "Athene (보험사)", actorEn: "Athene (insurer)", flow: "부채비용 4-5%", flowEn: "Liability cost 4-5%", detail: "annuity 부채 (평균 듀레이션 7-10년)", detailEn: "Annuity liabilities, avg duration 7-10 years", color: "#8b5cf6" },
            { step: 3, actor: "Apollo (운용사)", actorEn: "Apollo (asset manager)", flow: "운용수수료 ~50-100bp", flowEn: "Management fee ~50-100bp", detail: "Direct Origination + ABF + IG PC 등으로 매칭 배분", detailEn: "Allocates to Direct Origination, ABF, and IG PC", color: "#ef4444" },
            { step: 4, actor: "기업·자산 풀", actorEn: "Borrowers and asset pools", flow: "운용수익 6-8%", flowEn: "Asset yield 6-8%", detail: "mid-market 기업 대출·항공기·자동차·BNPL 등", detailEn: "Mid-market loans, aircraft, autos, BNPL pools", color: "#10b981" },
            { step: 5, actor: "Athene 자산 vs 부채 매칭", actorEn: "Athene ALM (asset-liability match)", flow: "spread ~200-300bp", flowEn: "Net spread ~200-300bp", detail: "이자수익 - 부채비용 - 운용fee = 보험사 이익", detailEn: "Asset income minus liability cost minus fees = insurer margin", color: "#f59e0b" },
            { step: 6, actor: "연금 가입자 수령", actorEn: "Annuity payouts", flow: "약정 수익률 지급", flowEn: "Contracted payout", detail: "은퇴자에게 약정 수익률 지급, 잔여는 보험사 자본 증식", detailEn: "Retirees receive contracted yield; residual builds insurer capital", color: "#0ea5e9" },
          ],
        },
      },
      {
        type: "chart",
        chart: {
          id: "insurer-balance-sheet",
          title: "Chart 5 — 빅 운용사별 보험사 자산 vs PC 운용 AUM ($B, 2024)",
          titleEn: "Chart 5 — Big PC Managers: Insurance GA vs PC AUM, 2024 ($B)",
          caption: "출처: 각 운용사 IR 2024 Q4. 보험사 GA(General Account) 자산과 PC 운용 AUM 정의가 회사별 상이 (±10% 오차). Apollo 보험사 자산은 Athene 단독, KKR은 Global Atlantic 100%, Blue Owl은 Kuvare 인수분.",
          captionEn: "Sources: company IR Q4 2024. Insurer GA (general account) assets and PC AUM definitions differ across firms (±10%). Apollo figure = Athene standalone; KKR = Global Atlantic at 100%; Blue Owl = Kuvare post-acquisition.",
          data: [
            { firm: "Apollo", insurance: 330, pcAUM: 598 },
            { firm: "Blackstone", insurance: 200, pcAUM: 375 },
            { firm: "KKR", insurance: 170, pcAUM: 240 },
            { firm: "Oaktree", insurance: 70, pcAUM: 205 },
            { firm: "Ares", insurance: 25, pcAUM: 199 },
            { firm: "Blue Owl", insurance: 20, pcAUM: 235 },
            { firm: "HPS", insurance: 0, pcAUM: 148 },
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "NAIC와 BoE의 우려 — 같은 그림, 다른 시선",
          headingEn: "NAIC and BoE See the Same Picture — Differently",
          body:
            "NAIC(전미보험감독관협회)는 2024년 RBC(Risk-Based Capital) framework 강화안에서 *affiliated investment*에 추가 자본 charge를 검토했다. CLO equity·BDC 지분 등 illiquid 자산 보유 한도, Bermuda 재보험사로의 위험 이전(특히 Athene·Global Atlantic·Resolution Life 패턴)에 대한 Bermuda Working Group까지 출범했다.\n\nBoE는 2024년 11월 FSR에서 *\"PE firms owning life insurers\"* 를 systemic risk로 명시했다. 우려 메커니즘은 단순하다 — 보험 연금 부채 → illiquid PC로 운용 → 시장 충격 시 자산 매도 어려움 → 폴리시홀더 손실 가능성. 2025년 BoE의 SWES(System-Wide Exploratory Scenario)에 *private markets* 가 포함된 것은 이 우려의 공식화다.²⁴",
          bodyEn:
            "The NAIC (National Association of Insurance Commissioners) is tightening its RBC (Risk-Based Capital) framework with an extra capital charge on *affiliated investments*; it is reviewing holding caps on CLO equity and BDC stakes; and it has stood up a Bermuda Working Group specifically targeting the Athene/Global Atlantic/Resolution Life pattern of reinsuring liabilities offshore.\n\nThe Bank of England's November 2024 FSR labelled *PE firms owning life insurers* as a systemic risk. The mechanism is simple — annuity liabilities funded with illiquid PC, hard to liquidate in a stress, with the policyholder exposed to the residual. The Bank's 2025 System-Wide Exploratory Scenario (SWES) explicitly included *private markets* — the formalisation of that concern.²⁴",
        },
      },
      {
        type: "table",
        table: {
          id: "insurer-deal-history",
          title: "보험사 인수·합작 timeline",
          titleEn: "Insurer Acquisition / JV Timeline",
          headers: ["연도", "운용사 × 보험사", "구조", "사이즈", "핵심 의미"],
          headersEn: ["Year", "Manager × Insurer", "Structure", "Size", "Significance"],
          rows: [
            ["2009", "Apollo → Athene 출범", "Apollo design·sponsor (Bermuda)", "신생 리인슈어러", "*패턴의 원조*"],
            ["2021.3 → 2022.1", "Apollo × Athene 합병", "All-stock ($11B)", "Apollo 76% / Athene 24%", "Asset Mgr + Retirement dual platform"],
            ["2021 / 2024.1", "KKR × Global Atlantic", "63% (2021) → 100% (2024.1, $2.7B)", "GA AUM ~$158B", "*인수형의 표본*"],
            ["2022.9", "Blackstone × Corebridge", "SMA 위탁", "초기 ~$50B → 5년 $92.5B 한도", "*지분 없는 위탁형*"],
            ["2020", "Ares × Aspida", "합작 출범", "2024 신규자본 ~$1B 투입", "*합작형*"],
            ["2024", "Blue Owl × Kuvare AM", "인수", "~$20B AUM", "*멀티 플랫폼*"],
            ["2024", "Brookfield × American Equity Life", "인수", "~$70B", "*Oaktree 모회사 통합*"],
          ],
          rowsEn: [
            ["2009", "Apollo designs Athene", "Apollo sponsor (Bermuda reinsurer)", "Greenfield startup", "*The original pattern*"],
            ["Mar 2021 → Jan 2022", "Apollo × Athene merger", "All-stock ($11B)", "Apollo 76% / Athene 24%", "Asset manager + retirement dual platform"],
            ["2021 / Jan 2024", "KKR × Global Atlantic", "63% (2021) → 100% (2024, $2.7B)", "GA AUM ~$158B", "*The acquisition template*"],
            ["Sep 2022", "Blackstone × Corebridge", "SMA mandate", "~$50B initial → $92.5B cap over 5 years", "*Mandate model, no equity*"],
            ["2020", "Ares × Aspida", "JV launch", "~$1B new capital in 2024", "*Joint-venture model*"],
            ["2024", "Blue Owl × Kuvare AM", "Acquisition", "~$20B AUM", "*Multi-platform model*"],
            ["2024", "Brookfield × American Equity Life", "Acquisition", "~$70B", "*Oaktree parent integration*"],
          ],
          caption: "출처: 각사 보도자료·SEC 8-K·BSIC. Bermuda 재보험을 통한 capital relief 구조는 NAIC·BoE 우려의 공통 분모.",
          captionEn: "Sources: company press, SEC 8-K, BSIC. Bermuda reinsurance for capital relief is the common denominator of NAIC/BoE concern.",
          highlightRows: [1, 2],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 12. 한국 PC 시장
  // ════════════════════════════════════════════════════════════════
  {
    heading: "12. 한국 PC 시장 — 인수금융·PF·NPL, 그리고 데이터의 한계",
    headingEn: "12. Korea's PC Market — Acquisition Finance, PF, NPL, and the Data Gap",
    blocks: [
      {
        type: "text",
        body:
          "글로벌 PC가 미국·유럽 중심으로 정의된다면, 한국의 *PC 인접 시장*은 세 갈래로 나뉜다 — *인수금융*, *부동산 PF(Project Financing)*, *NPL(Non-Performing Loan, 부실채권)*. 여기에 *K-BDC*(국내 BDC 도입 논의), *개인투자자 PC 접근*까지 더하면 다섯 영역이다. 각 영역의 시장 규모와 데이터 한계를 차례로 본다.",
        bodyEn:
          "If global PC is defined around the US and Europe, Korea's *PC-adjacent markets* split into three: *acquisition finance*, *real-estate Project Financing (PF)*, and *NPL (Non-Performing Loans)*. Add *K-BDC* (the domestic BDC debate) and *retail PC access*, and you get five buckets. Each has its own size — and its own data gap.",
      },
      // ── 12-1 인수금융 ─────────────────────────────────────
      {
        type: "text",
        body:
          "*12-1. 인수금융.* 2024년 국내 M&A 인수금융 주선 규모는 ₩20.3조 (145건). 2023년 ~₩16조대 저점에서 회복했다. 1위는 KB증권 ₩2.96조 (8건), 그 뒤로 한국투자증권 ₩2.51조 (20건), KB국민은행 ₩2.5조 (15건) 순이다. *2024 thebell League Table* 기준.²⁵",
        bodyEn:
          "*12-1. Acquisition finance.* 2024 arrangement volume reached ₩20.3T across 145 deals — a rebound from the ~₩16T low of 2023. KB Securities led with ₩2.96T (8 deals), followed by Korea Investment & Securities ₩2.51T (20 deals) and KB Kookmin Bank ₩2.5T (15 deals). Source: *thebell League Table 2024*.²⁵",
      },
      {
        type: "chart",
        chart: {
          id: "korea-acq-finance",
          title: "Chart 6 — 한국 인수금융 주선 상위 기관 (2024, ₩조)",
          titleEn: "Chart 6 — Korea Acquisition Finance League Table 2024 (₩T)",
          caption: "출처: thebell League Table 2024. 삼성증권은 상반기 1위였으나 연간 수치 별도 cross-check 필요 — 표에서 제외. 외국계 (Apollo·KKR·PAG) 는 *공동 주관* 형태로 일부 참여.",
          captionEn: "Source: thebell League Table 2024. Samsung Securities led in H1 but the annual figure could not be cross-checked, so it is excluded here. Foreign managers (Apollo, KKR, PAG) appeared on selected deals as *co-arrangers*.",
          data: [
            { firm: "KB증권", firmEn: "KB Securities", value: 2.96, deals: 8 },
            { firm: "한국투자증권", firmEn: "Korea Investment", value: 2.51, deals: 20 },
            { firm: "KB국민은행", firmEn: "KB Kookmin Bank", value: 2.50, deals: 15 },
            { firm: "NH투자증권", firmEn: "NH Investment", value: 1.80, deals: 12 },
            { firm: "키움증권", firmEn: "Kiwoom Securities", value: 1.36, deals: 11 },
            { firm: "신한은행", firmEn: "Shinhan Bank", value: 1.34, deals: 11 },
            { firm: "하나증권", firmEn: "Hana Securities", value: 1.34, deals: 14 },
            { firm: "신한투자증권", firmEn: "Shinhan Securities", value: 0.94, deals: 11 },
          ],
        },
      },
      // ── 12-2 부동산 PF ─────────────────────────────────────
      {
        type: "text",
        body:
          "*12-2. 부동산 PF.* 2023년 12월 기준 잔액 ~₩230조 (주거 ~70%). 2023년 6월 새마을금고 PF 연체율이 ~6%에 도달하면서 시장이 한 차례 흔들렸다 — 새마을금고가 사실상 PF에서 철수했고, 부담은 증권사·캐피탈로 옮겨갔다. 2024년 금융위가 PF 정상화 방안을 발표하고 사업성 평가·재구조화가 진행됐다. 외국계는 KKR·Apollo·PAG·Blackstone·Goldman Sachs·GIC가 *물류센터·오피스·데이터센터*에 집중 — 2023년 해외자본 국내 부동산 투자가 ~$1.6B 수준이었다.²⁶",
        bodyEn:
          "*12-2. Real-estate PF.* Outstanding balance was ~₩230T at end-2023 (housing ~70%). In June 2023, MG Community Credit Cooperatives' PF delinquency hit ~6%, effectively pushing them out of PF and shifting the burden to securities firms and capital companies. In 2024 the FSC announced a PF normalisation framework, with viability assessments and restructuring under way. Foreign managers — KKR, Apollo, PAG, Blackstone, Goldman Sachs, GIC — concentrate on *logistics centres, offices, and data centres*. Foreign capital deployed into Korean real estate hit ~$1.6B in 2023.²⁶",
      },
      // ── 12-3 NPL ─────────────────────────────────────
      {
        type: "text",
        body:
          "*12-3. NPL.* 2024년 시장에 풀린 NPL 매물 ~₩8.31조 (2023년 ~₩5.43조 대비 +53%). 1위는 *연합자산관리(UAMCO)* — 2024년 매입 ₩3.77조, 시장점유 45.3% (전년 37.1%). 자금조달은 회사채 ₩3.9조. 2026년 전망은 ~₩4조 전후로 normalize 예상. 외국계는 Oaktree·CarVal 등이 등장하지만 2024년 활동은 자료 한계로 cross-check가 어렵다.²⁷",
        bodyEn:
          "*12-3. NPL.* In 2024, ~₩8.31T of NPL deals came to market — up 53% from ~₩5.43T in 2023. *UAMCO (Korea's joint-venture asset manager)* was #1, buying ₩3.77T for a 45.3% share (up from 37.1%), funded with ₩3.9T of corporate bond issuance. The 2026 outlook is normalisation to ~₩4T. Foreign managers — Oaktree, CarVal — show up in the dataset, but 2024 activity is hard to cross-check.²⁷",
      },
      {
        type: "chart",
        chart: {
          id: "korea-pc-markets",
          title: "Chart 7 — 한국 인수금융·NPL·부동산 PF 추이 (₩조)",
          titleEn: "Chart 7 — Korean Acq. Finance · NPL · PF Markets (₩T)",
          caption: "출처: thebell·블로터·금융위·삼일PwC 종합. 2018-2022 인수금융은 보도 추정. 부동산 PF는 2024년 정상화로 일부 감소.",
          captionEn: "Sources: thebell, Bloter, FSC, Samil PwC composite. 2018-2022 acquisition-finance figures are press estimates. PF balance dipped in 2024 as the FSC's normalisation framework took effect.",
          data: [
            { year: 2018, acqFin: 24, npl: 4.5, pf: 130 },
            { year: 2019, acqFin: 28, npl: 5.0, pf: 160 },
            { year: 2020, acqFin: 32, npl: 5.5, pf: 180 },
            { year: 2021, acqFin: 35, npl: 5.8, pf: 200 },
            { year: 2022, acqFin: 30, npl: 4.2, pf: 220 },
            { year: 2023, acqFin: 16, npl: 5.43, pf: 230 },
            { year: 2024, acqFin: 20.3, npl: 8.31, pf: 215 },
          ],
        },
      },
      // ── 12-4 K-BDC ─────────────────────────────────────
      {
        type: "callout",
        callout: {
          variant: "info",
          heading: "12-4. K-BDC와 개인투자자 접근로",
          headingEn: "12-4. K-BDC and Retail Access",
          body:
            "한국은 *미국형 BDC* 가 아직 없다. 2024-2025년 자본시장법 개정 논의에서 K-BDC 도입과 일반 투자자의 PEF 출자 한도 완화가 주요 의제로 올라왔다. 현재 한국에서 글로벌 PC에 접근하는 경로는 ① 미래에셋·삼성자산운용 등의 BDC ETF (미국 BDC index 추종), ② 사모재간접펀드 형태로 ARCC·OBDC·BCRED 간접 노출이다. 단, 정확한 AUM·티커는 cross-check 필요 영역.²⁸",
          bodyEn:
            "Korea does not yet have a *US-style BDC*. The 2024-2025 capital-markets reform debate put K-BDC introduction and looser retail PEF-investment caps on the table. Today, Korean investors reach global PC through either (i) BDC ETFs from Mirae Asset, Samsung AM and others (tracking US BDC indices), or (ii) feeder funds offering indirect exposure to ARCC, OBDC, and BCRED. Precise AUMs and tickers in this segment need cross-check.²⁸",
        },
      },
      // ── 12-5 데이터 한계 ─────────────────────────────────
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "12-5. 한국 데이터의 한계 — 솔직하게 적는다",
          headingEn: "12-5. The Korean Data Gap — Stated Plainly",
          body:
            "*첫째*, NH·KB·한국투자증권 등 *국내 PC 운용사별 부문 AUM 별도 공시가 부재*하다. 인수금융·PC 부문이 IR에서 분리 표기되지 않는다. *둘째*, 금감원 자본시장통계는 PEF·헤지펀드 중심이고 *PC 별도 통계가 없다*. *셋째*, 본 노트의 한국 수치는 보도(thebell·인베스트조선·머니투데이·한국경제)와 KCMI(자본시장연구원) 자료 종합이다. *cross-check 권장* 영역은 ① 외국계 한국 부동산 PF 실제 deployment 규모 ② 국내 PC 운용사 부문별 AUM ③ ABF의 PC 펀드 보유 비중. 이 세 영역은 \"보도 기반\"임을 명시한다.²⁹",
          bodyEn:
            "*First*, domestic firms (NH, KB, Korea Investment) *do not separately disclose acquisition-finance and PC segment AUM* in IR. *Second*, FSS capital-markets statistics centre on PEFs and hedge funds; *PC has no standalone series*. *Third*, the Korea numbers in this note are a composite of press reporting (thebell, Investchosun, Money Today, Hankyung) and KCMI (Korea Capital Market Institute) studies. *Cross-check is recommended* for: (i) actual foreign-PC deployment into Korean real-estate PF, (ii) Korean PC managers' segment AUM, and (iii) PC funds' share of broad ABF holdings. These are flagged as \"press-based\" throughout.²⁹",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 13. 케이스 3개 + 대칭 비교
  // ════════════════════════════════════════════════════════════════
  {
    heading: "13. 케이스 3개 — Pluralsight · MBK 홈플러스 · Blue Owl OBDC II",
    headingEn: "13. Three Cases — Pluralsight, MBK Homeplus, Blue Owl OBDC II",
    blocks: [
      {
        type: "text",
        body:
          "PC 시장의 *현재*를 보려면 통계가 아니라 *사례*를 봐야 한다. 세 케이스는 의도적으로 *서로 다른 축*을 친다 — Pluralsight는 *미국 software LBO의 valuation 위험*, MBK 홈플러스는 *한국 PEF·인수금융 최대 손실 사례 가능성*, Blue Owl OBDC II는 *retail PC의 유동성 한계 첫 노출*. 세 사건이 같은 분기에 신호를 보냈다는 점이 우리가 *✓1*에서 세 시그널을 꺼낸 이유다.",
        bodyEn:
          "To see the *present* of PC, you read cases, not statistics. The three below are picked to hit *different axes* — Pluralsight on *US software-LBO valuation risk*, MBK Homeplus on *Korea's potential single largest PEF/acq-finance loss*, and Blue Owl OBDC II on *the first liquidity stress in retail PC*. They lit up in one quarter — exactly why we opened the note in *✓1* with the same three signals.",
      },
      // ── Case 1 Pluralsight ───────────────────────────────────
      {
        type: "text",
        body:
          "*Case 1. Pluralsight (Vista Equity).* 2021년 Vista가 ~$3.5B에 인수한 온라인 코딩 교육 회사. 2024년 5월 Vista는 $1.6B equity 가치를 *0으로 mark-down*. 같은 해 8월 *debt-for-equity swap*으로 PC 채권단 — Blue Owl·Ares·Golub·Oaktree·Benefit Street·Goldman·BlackRock — 이 회사를 인수했다. *첫 대형 PC change-of-control 사례*. AI가 코딩 교육을 disrupt했다는 해석과 Vista의 leverage·multiple이 과도했다는 해석이 공존한다.³⁰",
        bodyEn:
          "*Case 1. Pluralsight (Vista Equity).* Vista bought the online coding-education business in 2021 for ~$3.5B. In May 2024, Vista *marked the $1.6B equity to zero*. In August 2024, the PC syndicate — Blue Owl, Ares, Golub, Oaktree, Benefit Street, Goldman, BlackRock — took control via a *debt-for-equity swap*. The *first major PC change-of-control deal*. Read it two ways: AI is disrupting paid coding-education, and Vista paid too much with too much leverage.³⁰",
      },
      // ── Case 2 MBK Homeplus ───────────────────────────────────
      {
        type: "text",
        body:
          "*Case 2. MBK 홈플러스 (2015 인수 → 2025.3 회생).* MBK파트너스가 2015년 Tesco로부터 ₩7.2조에 인수. 인수금융 ~₩4.3조 (전체의 59.8%) — 주선 KB국민은행·NH투자증권·신한은행. 10년이 지난 2025년 3월 4일 서울회생법원에 법인회생 신청. 보도 기준 누적 부채 ~₩8.5조. 한국 PEF·인수금융 *역사상 단일 최대 손실 사례 가능성*이 열렸다. *글로벌 PC와의 대칭* — Pluralsight는 software AI disruption이 핵심이고, 홈플러스는 *오프라인 리테일 구조변화 + 과도한 leverage* 가 핵심이다. 둘 다 *원금 손상*이라는 결말은 같다.³¹",
        bodyEn:
          "*Case 2. MBK Homeplus (2015 buyout → March 2025 reorganization).* MBK Partners bought Homeplus from Tesco in 2015 for ₩7.2T, funded with ~₩4.3T (59.8%) of acquisition finance arranged by KB Kookmin Bank, NH Investment, and Shinhan Bank. A decade later, on 4 March 2025, the company filed for court-supervised reorganization at the Seoul Bankruptcy Court. Press reports put accumulated debt at ~₩8.5T. This may become *the single largest PEF/acquisition-finance loss in Korean history*. *The contrast with global PC*: Pluralsight is software disrupted by AI; Homeplus is *offline-retail structural decline plus too much leverage*. Same ending — *principal impairment*.³¹",
      },
      // ── Case 3 Blue Owl OBDC II ───────────────────────────────
      {
        type: "text",
        body:
          "*Case 3. Blue Owl OBDC II — 2025 봄 fire-sale 보도.* OBDC II는 Blue Owl의 *비상장* BDC. 2025년 봄, 일부 자산을 *시장에 할인 매각*한다는 보도가 나왔다. 평소 hold-to-maturity가 원칙인 PC에서 *비공개 자산을 시장에 던지는 행동* 자체가 드물다. non-traded BDC·인터벌 펀드의 환매 한도(분기 2% / 연 5%)가 작동하기 시작했다는 *첫 시그널*. 2022-23년 Blackstone BREIT 환매 폭주의 *PC 버전*이 시작됐다는 해석이 나왔다.³²",
        bodyEn:
          "*Case 3. Blue Owl OBDC II — spring 2025 fire-sale reports.* OBDC II is Blue Owl's *non-traded* BDC. In spring 2025, the press reported the fund was discounting selected positions to market buyers. In a hold-to-maturity asset class, *selling private positions into the market is itself unusual*. It was the *first signal* that the non-traded BDC and interval-fund redemption gates (2% per quarter / 5% per year) were starting to bite — the *PC version* of the 2022-23 BREIT redemption rush, in one reading.³²",
      },
      {
        type: "table",
        table: {
          id: "three-cases-symmetry",
          title: "세 케이스 대칭 비교 — 무엇이 공통이고 무엇이 다른가",
          titleEn: "Three Cases Side-by-Side — Common Ground, Divergence",
          headers: ["축", "Pluralsight", "MBK 홈플러스", "Blue Owl OBDC II"],
          headersEn: ["Axis", "Pluralsight", "MBK Homeplus", "Blue Owl OBDC II"],
          rows: [
            ["국가/시장", "미국 software LBO", "한국 오프라인 리테일 PEF", "미국 retail PC (non-traded BDC)"],
            ["트리거", "*AI disruption + 과도 leverage*", "*리테일 구조변화 + 인수금융 부담*", "*환매 한도 + valuation 갭*"],
            ["결말", "PC 채권단 debt-for-equity", "회생 신청, 회수율 ~10% 미만 보도", "fire-sale (현재진행)"],
            ["손실 주체", "Vista equity ($1.6B) → 0", "MBK + 한국 PEF LP + 인수금융 채권단", "OBDC II 투자자"],
            ["systemic 함의", "*software LBO portfolio 재평가*", "*한국 PEF 시장 신뢰 충격*", "*retail PC의 첫 stress test*"],
            ["관련 자산 클래스", "Direct Lending (sponsor-backed)", "인수금융 (한국 BSL 등가)", "Direct Lending + interval fund 구조"],
          ],
          rowsEn: [
            ["Geography / market", "US software LBO", "Korean offline retail PEF", "US retail PC (non-traded BDC)"],
            ["Trigger", "*AI disruption + excess leverage*", "*Structural retail decline + acq-fin burden*", "*Redemption gates + valuation gap*"],
            ["Outcome", "PC syndicate debt-for-equity swap", "Court reorganization, ~<10% recovery reported", "Fire-sale (live)"],
            ["Loss takers", "Vista equity ($1.6B) → zero", "MBK, Korean PEF LPs, acq-fin lenders", "OBDC II investors"],
            ["Systemic read", "*Software LBO mark-to-market*", "*Korean PEF trust shock*", "*First stress test of retail PC*"],
            ["Asset class", "Direct Lending (sponsor-backed)", "Acquisition finance (Korea BSL equivalent)", "Direct Lending + interval-fund wrapper"],
          ],
          caption: "세 사건 모두 *2025년 봄~여름*에 신호를 보냈다. 자산 클래스·지역·트리거는 다르지만 *원금 손상·유동성 한계·valuation 신뢰* 라는 같은 질문에 도달한다.",
          captionEn: "All three lit up in *spring–summer 2025*. The asset class, geography, and trigger differ; the questions are the same — *principal impairment, liquidity limits, valuation credibility*.",
          highlightRows: [1, 4],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 14. 위기 진앙 5채널
  // ════════════════════════════════════════════════════════════════
  {
    heading: "14. 위기 진앙 — 5채널 전염 메커니즘과 디폴트 현주소",
    headingEn: "14. The Fault Line — Five Contagion Channels and Where Defaults Stand",
    blocks: [
      {
        type: "text",
        body:
          "*\"PC가 systemic risk인가\"*는 잘못된 질문이다. 정확한 질문은 *\"PC에서 시작된 충격이 어떤 채널로 다른 시장에 옮겨가는가\"*다. IMF GFSR April 2024 Chapter 2와 BoE 2024 FSR이 공통으로 지적한 *5개 전염 채널*을 정리한다.\n\n그 전에 *디폴트 현주소* 부터. Direct Lending TTM(Trailing Twelve Months) 디폴트율은 2024 Q4 *2.67%* (Proskauer PC Default Index). BSL은 *4.33%* (Fitch). Sponsor-backed borrower는 ~2.5%, Non-sponsored는 ~4.0%. KBRA DLD의 2024 전망은 *2.75%* — *\"mild and benign\"*. *현재 디폴트 자체는 낮다*. 우려는 *시장 미경험* (post-2008 사이클 한 번도 안 겪음) 과 *stress 시 5채널 연쇄* 다.³³",
        bodyEn:
          "*\"Is PC a systemic risk?\"* is the wrong question. The right one is *\"through which channels would a shock starting in PC propagate to other markets?\"* The IMF GFSR April 2024 Chapter 2 and the BoE 2024 FSR converge on *five contagion channels*. We line them up below.\n\nFirst the *baseline*. Direct Lending TTM (trailing-twelve-month) default rate was *2.67%* in Q4 2024 (Proskauer PC Default Index); BSL ran *4.33%* (Fitch). Sponsor-backed borrowers: ~2.5%; non-sponsored: ~4.0%. KBRA DLD's 2024 forecast was *2.75%* — *mild and benign*. *Defaults today are low*. The worry is *the asset class has never lived through a full cycle since 2008*, and *under stress, the five channels link up*.³³",
      },
      {
        type: "chart",
        chart: {
          id: "pc-default-rates",
          title: "Chart 8 — 미국 Direct Lending vs BSL Default Rate TTM (%)",
          titleEn: "Chart 8 — US Direct Lending vs BSL TTM Default Rate (%)",
          caption: "출처: Proskauer PC Default Index (DL), Fitch Ratings (BSL), KBRA DLD. *PC 디폴트율이 낮은 것은 데이터로 확인되지만*, 데이터 자체가 짧은(post-2008 사이클 부재) 한계가 있다.",
          captionEn: "Sources: Proskauer PC Default Index (DL), Fitch Ratings (BSL), KBRA DLD. *Lower PC default rates are confirmed by the data — but the data itself is short*: no full post-2008 cycle yet.",
          data: [
            { period: "2022 Q4", directLending: 1.5, bsl: 1.6 },
            { period: "2023 Q2", directLending: 2.0, bsl: 2.5 },
            { period: "2023 Q4", directLending: 2.3, bsl: 3.8 },
            { period: "2024 Q2", directLending: 2.0, bsl: 4.2 },
            { period: "2024 Q4", directLending: 2.67, bsl: 4.33 },
          ],
        },
      },
      {
        type: "chart",
        chart: {
          id: "pc-contagion-map",
          title: "Diagram — PC 펀드 발 5채널 전염 지도",
          titleEn: "Diagram — Five Contagion Channels from a PC Fund Shock",
          caption: "Source: IMF GFSR April 2024 Ch.2, BoE FSR Nov 2024, BIS Quarterly Review March 2025 종합. *위험 강도는 채널별 상대 평가* — danger(빨강) = 즉시 전염, caution(주황) = 지연 전염, info(파랑) = 잠재 채널.",
          captionEn: "Sources: IMF GFSR April 2024 Ch.2, BoE FSR Nov 2024, BIS Quarterly Review March 2025. *Severity is a relative ranking* — danger (red) = immediate transmission, caution (amber) = delayed, info (blue) = latent.",
          center: { label: "PC 펀드", labelEn: "PC Fund", color: "#8b5cf6" },
          channels: [
            { id: "asset-mgr", label: "자산운용사", labelEn: "Asset Managers", channel: "재간접·세컨더리·CLO equity", channelEn: "Fund-of-funds, secondaries, CLO equity", risk: "medium", detail: "운용사 주가·BDC 주가가 NAV 하락 따라 즉시 반응", detailEn: "Manager and BDC share prices react to NAV marks immediately" },
            { id: "insurer", label: "보험사 GA", labelEn: "Insurer GA", channel: "annuity 부채 매칭 illiquid PC", channelEn: "Annuity liabilities funded with illiquid PC", risk: "high", detail: "stress 시 자산 매도 어려움 → 폴리시홀더 노출", detailEn: "Hard to liquidate under stress; policyholders exposed" },
            { id: "semi-liquid", label: "semi-liquid 인터벌 펀드", labelEn: "Semi-liquid Interval Funds", channel: "환매 한도 발동 (BREIT 학습)", channelEn: "Redemption gates triggered (BREIT precedent)", risk: "high", detail: "non-traded BDC·인터벌 펀드 분기 2% / 연 5% 한도", detailEn: "Non-traded BDC and interval funds hit 2%/quarter and 5%/year caps" },
            { id: "bank-line", label: "은행 신용공여", labelEn: "Bank Credit Lines", channel: "PC 펀드 subscription line·NAV facility", channelEn: "Subscription lines and NAV facilities to PC funds", risk: "medium", detail: "은행 portfolio risk가 PC 펀드 stress와 연결 (BIS d598)", detailEn: "Bank portfolio risk linked to PC fund stress (BIS d598)" },
            { id: "retail-bdc", label: "retail BDC", labelEn: "Retail BDC", channel: "개인투자자 직접 노출", channelEn: "Direct retail exposure", risk: "high", detail: "BCRED·OBDC II·ARCC 등 retail 환매·redemption", detailEn: "Retail redemptions from BCRED, OBDC II, ARCC" },
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "양쪽 모두 맞다 — 단 *시점*이 다르다",
          headingEn: "Both Sides Are Right — But on *Different Timeframes*",
          body:
            "Marc Rowan(Apollo)·Howard Marks(Oaktree) 의 반론은 *현재 디폴트 수치*에 기반한다 — PC 자체는 sponsor 인센티브 정렬·hold-to-maturity·bilateral covenant로 BSL보다 안전. 단, Marks는 2024년 *\"What's Going on in Private Credit?\"* 메모에서 *software LBO 집중*과 *AI disruption 가능성*을 명시 경고. 결론은 *\"credit carelessness 있으나 systemic은 아니다\"* (CNBC 2025.11).\n\n반대편 — Cliff Asness(AQR)의 *\"Volatility Laundering\"*은 *mark-to-market 부재*를 핵심으로 한다. *PE/PC는 quarterly fair value를 쓰기 때문에 표시 변동성이 낮아 보일 뿐*. IMF·BIS·BoE는 *stale valuation + opacity + leverage layers + interconnections* 네 가지를 공식 경고. 양쪽 합의 사항: *PC 자체 디폴트는 낮다 + 단 5채널 인터커넥션 stress test가 부재하다*.³⁴",
          bodyEn:
            "Marc Rowan (Apollo) and Howard Marks (Oaktree) anchor their defense on *current default numbers* — PC itself is safer than BSL thanks to sponsor alignment, hold-to-maturity, and bilateral covenants. Marks did flag *software-LBO concentration and AI disruption* in his 2024 memo *\"What's Going on in Private Credit?\"* — his conclusion was *\"credit carelessness, but not systemic\"* (CNBC, Nov 2025).\n\nOn the other side, Cliff Asness (AQR) built *\"Volatility Laundering\"* on the *absence of mark-to-market*: *PE/PC use quarterly fair value, so apparent volatility looks low*. The IMF, BIS, and BoE formally flagged four issues — *stale valuations, opacity, layered leverage, and interconnections*. Both camps agree: *PC defaults are low — but the five-channel interconnection has never been stress-tested*.³⁴",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 15. 액션 가이드 + Watch Dashboard
  // ════════════════════════════════════════════════════════════════
  {
    heading: "15. 액션 가이드 — 기관·일반·매주 봐야 할 7지표",
    headingEn: "15. Action Guide — For Institutions, for Individuals, and the Weekly Seven",
    blocks: [
      // ── 15-1 기관 5 ─────────────────────────────────────
      {
        type: "text",
        body:
          "*15-1. 기관 투자자에게 — 5가지 액션.*\n\n① *vintage diversification 명시 정책*. 2021-23 peak vintage (low rate, 높은 multiple) 비중을 한도화. 신규 commitment는 2024 후반 ~2026 vintage에 집중.\n\n② *manager concentration 한도*. 빅 7 중 한 곳에 PC 포트폴리오의 30% 이상을 *맡기지 않는다*. Apollo×Athene·KKR×Global Atlantic처럼 *보험사-PC 자기거래 비중*도 별도 한도.\n\n③ *NAV financing 정책 명시*. ILPA 2024 가이드라인을 LPA(Limited Partnership Agreement)에 반영 — NAV loan dividend recap은 *LP 사전 동의 필수*.\n\n④ *covenant audit 분기 1회*. cov-lite 비율, maintenance covenant 유무, equity cure 가능성 — 운용사 IR에서 분기마다 받아본다.\n\n⑤ *interval fund / non-traded BDC 환매 모니터링*. BCRED·OBDC II·ARCC 등 분기 redemption 비율 추적. 한도(분기 2% / 연 5%) 도달 시 *즉시 회의*.³⁵",
        bodyEn:
          "*15-1. For institutional investors — five actions.*\n\n(1) *Vintage diversification policy in writing.* Cap exposure to the 2021-23 peak vintages (low rates, high multiples); concentrate new commitments in late-2024 through 2026 vintages.\n\n(2) *Manager concentration limit.* No single Big-7 manager gets more than 30% of the PC sleeve. The *insurer-PC affiliated share* (Apollo × Athene, KKR × Global Atlantic) gets its own separate cap.\n\n(3) *Written NAV-financing policy.* Bake ILPA's 2024 guidelines into the LPA (Limited Partnership Agreement): NAV-loan dividend recaps require *prior LP consent*.\n\n(4) *Quarterly covenant audit.* Pull cov-lite ratios, maintenance-covenant status, and equity-cure mechanics from manager IR every quarter.\n\n(5) *Interval-fund / non-traded BDC redemption monitoring.* Track quarterly redemption rates at BCRED, OBDC II, ARCC; if they touch the gate (2%/quarter, 5%/year), *escalate immediately*.³⁵",
      },
      // ── 15-2 일반 5 ─────────────────────────────────────
      {
        type: "text",
        body:
          "*15-2. 일반 투자자에게 — 5가지 액션.*\n\n① *PC ETF·BDC ETF 비중을 portfolio의 5-10% 이하*. 분산 효과 + 수익률 보완 목적. 단, *equity-like risk*임을 인식.\n\n② *non-traded BDC·인터벌 펀드 *절대* 가입 신중*. 환매 한도가 *실제로 작동*한다는 사실이 2025년 봄 OBDC II로 확인됐다.\n\n③ *상장 BDC (ARCC·OBDC·BXSL·TSLX) 만 검토*. NAV 대비 할인·할증, dividend coverage, NII(Net Investment Income) 추적. *premium 거래 시점에 매수 금지*.\n\n④ *PC 운용사 *주가* 와 보험사 자회사 자산을 분리해서 본다*. Apollo·KKR·Blackstone 주가는 PC 펀드 management fee + 보험사 spread + LP 모집 속도의 함수. *세 요소 중 어디서 흔들리는지*를 본다.\n\n⑤ *한국 시장 노출은 인수금융 직접 노출 대신 상장 PEF GP (가능한 경우) 또는 외국계 PC를 통한 간접 노출*. 한국 PC 데이터의 한계 (✓12-5)를 인식.³⁶",
        bodyEn:
          "*15-2. For retail investors — five actions.*\n\n(1) *Keep PC and BDC ETFs to 5-10% of portfolio*. Use them for diversification and yield. But recognise this is *equity-like risk*.\n\n(2) *Be very cautious about non-traded BDCs and interval funds.* Spring 2025 OBDC II confirmed that the gates *actually trigger*.\n\n(3) *Stick to listed BDCs (ARCC, OBDC, BXSL, TSLX).* Track NAV premium/discount, dividend coverage, and NII (Net Investment Income). *Don't buy when the fund is trading at a premium*.\n\n(4) *Separate the manager's stock price from its insurer assets.* Apollo, KKR, Blackstone share prices are a function of PC fee income + insurer spread + LP fundraising velocity — figure out *which leg is moving*.\n\n(5) *For Korea exposure, prefer listed GP (where available) or indirect exposure through foreign PC*, not direct acquisition-finance positions. Respect the Korean data gap (✓12-5).³⁶",
      },
      // ── 15-3 Watch Dashboard ─────────────────────────────
      {
        type: "text",
        body:
          "*15-3. Watch Dashboard — 매주 봐야 할 7지표.*\n\n아래 7개 변수는 *PC sector 전체의 stress 신호*다. 정상·주의·위험 구간을 사전 정의해두고 *매주 같은 페이지로* 본다. 한 지표가 \"주의\" 진입하면 회의, 두 지표가 동시에 \"위험\" 진입하면 portfolio rebalancing 시작.",
        bodyEn:
          "*15-3. The Watch Dashboard — seven indicators to track weekly.*\n\nThese seven cover *the full sector stress map*. Define normal / caution / danger bands up front, then check the *same page every week*. One indicator entering \"caution\" triggers a meeting; two entering \"danger\" simultaneously triggers portfolio rebalancing.",
      },
      {
        type: "chart",
        chart: {
          id: "watch-dashboard",
          title: "Watch Dashboard — 매주 7지표 상황판",
          titleEn: "Watch Dashboard — Seven Indicators, Weekly",
          caption: "출처: 각 지표는 KBRA DLD·Proskauer·BCRED 8-K·ILPA·NAIC·thebell·Apollo IR에서 update. *현재 status*는 2025 H1 ~ 2026.5.31 verified data 기준. 종합 판정은 표 하단에 자동.",
          captionEn: "Sources by indicator: KBRA DLD, Proskauer, BCRED 8-K, ILPA, NAIC, thebell, Apollo IR. *Current status* uses verified data through H1 2025 to 31 May 2026. The overall verdict line appears below the table.",
          data: [
            { indicator: "DL TTM 디폴트율", indicatorEn: "DL TTM default rate", current: "2.67% (24Q4)", normalRange: "<3%", cautionRange: "3-4%", dangerRange: "4%+", status: "normal", source: "Proskauer PC Default Index", sourceEn: "Proskauer PC Default Index" },
            { indicator: "DL-BSL 디폴트 스프레드", indicatorEn: "DL-BSL default spread", current: "-1.66%p", normalRange: "spread > 100bp (DL이 낮음)", cautionRange: "50-100bp", dangerRange: "<50bp 또는 역전", status: "normal", source: "Proskauer + Fitch", sourceEn: "Proskauer + Fitch" },
            { indicator: "BCRED·OBDC 환매율", indicatorEn: "BCRED / OBDC redemption rate", current: "OBDC II fire-sale 보도 (25봄)", normalRange: "<1% per quarter", cautionRange: "1-2%", dangerRange: "한도 도달 (2% 분기)", status: "caution", source: "BCRED 8-K, 보도", sourceEn: "BCRED 8-K, press" },
            { indicator: "PC Cov-Lite 비율", indicatorEn: "PC cov-lite share", current: "~21% (24-25, 일반 PC 평균)", normalRange: "<15%", cautionRange: "15-30%", dangerRange: "30%+", status: "caution", source: "Proskauer", sourceEn: "Proskauer" },
            { indicator: "NAV loan dividend recap", indicatorEn: "NAV-loan dividend recaps", current: "Vista 외 지속 보도", normalRange: "ILPA 가이드라인 100% 준수", cautionRange: "선택적 LP 동의", dangerRange: "LP 동의 없이 실행 사례", status: "caution", source: "ILPA + 보도", sourceEn: "ILPA + press" },
            { indicator: "NAIC affiliated investment 규제", indicatorEn: "NAIC affiliated-investment rules", current: "RBC framework 강화 검토", normalRange: "현행 유지", cautionRange: "framework 변경 발표", dangerRange: "한도 부과 시행", status: "caution", source: "NAIC", sourceEn: "NAIC" },
            { indicator: "한국 MBK 홈플러스 회수율", indicatorEn: "MBK Homeplus recovery rate", current: "~10% 미만 보도 (2025)", normalRange: "30%+", cautionRange: "10-30%", dangerRange: "<10%", status: "danger", source: "회생법원 + 보도", sourceEn: "Court + press" },
          ],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 16. 다음 거래 + 글로서리
  // ════════════════════════════════════════════════════════════════
  {
    heading: "16. 다음 거래 6개 + 글로서리 30개",
    headingEn: "16. Six Deals to Watch and a 30-Term Glossary",
    blocks: [
      {
        type: "text",
        body:
          "마지막으로 *2026년 12개월간 봐야 할 거래 6개*. 어떤 것은 새 자금조달, 어떤 것은 후속 보도가 핵심이다.\n\n① *BlackRock × HPS post-deal 운영* — 2025.7 완결 후 fee margin, retention, 운용 합산 효율. ② *MBK 홈플러스 회생 결과* — 회수율과 한국 LP의 PEF outflow. ③ *Apollo×Athene Bermuda 재보험 NAIC 규제* — 2026년 NAIC 결정. ④ *Vista Outcomes-type NAV loan 재발 여부* — ILPA 가이드라인 준수율. ⑤ *KKR Global Atlantic 100% 통합 후 first stress* — Bermuda 재보험 risk-relief가 NAIC에서 어떻게 평가되는가. ⑥ *한국 K-BDC 도입 입법 진행* — 2025-2026 자본시장법 개정.",
        bodyEn:
          "Six deals to watch over the next twelve months. Some are new financings, others are follow-up disclosures.\n\n(1) *BlackRock × HPS post-close performance* — fee margin, retention, integration efficiency after the July 2025 closing. (2) *MBK Homeplus reorganization outcome* — recovery rate and Korean LP outflows from PEFs. (3) *Apollo × Athene Bermuda reinsurance treatment* — the NAIC's 2026 ruling. (4) *Vista Outcomes-style NAV loans* — ILPA compliance rate. (5) *KKR Global Atlantic 100% integration first stress* — how NAIC treats the Bermuda reinsurance relief. (6) *Korea K-BDC introduction legislation* — 2025-2026 Capital Markets Act revisions.",
      },
      {
        type: "table",
        table: {
          id: "glossary-30",
          title: "글로서리 — PC 핵심 용어 30개 (영어 약어 → 풀네임 → 한국어 의미)",
          titleEn: "Glossary — 30 Key PC Terms (Acronym → Full Name → Plain Meaning)",
          headers: ["약어", "풀네임", "의미"],
          headersEn: ["Acronym", "Full Name", "Meaning"],
          rows: [
            ["PC", "Private Credit", "비상장 사모대출 — 운용사가 직접 모집·실행"],
            ["BDC", "Business Development Company", "사업개발회사. 미국 1940 Act 기반 PC 비클"],
            ["BSL", "Broadly Syndicated Loan", "광범위 신디케이트 대출. PC의 *공동구매* 비교 대상"],
            ["LBO", "Leveraged Buyout", "차입매수. 대상 회사 자산·EBITDA를 담보로 인수자금 조달"],
            ["ABF", "Asset-Based Finance", "자산담보부 대출 — 자동차·항공기·BNPL·매출채권 등"],
            ["NAV", "Net Asset Value", "순자산가치. NAV financing은 PE 펀드 보유자산 담보 대출"],
            ["DL", "Direct Lending", "직접대출. PC의 가장 큰 자산군 (~44%)"],
            ["GA", "General Account", "보험사 일반계정 — annuity 부채 매칭 자산 보유처"],
            ["GP / LP", "General Partner / Limited Partner", "운용사 / 유한책임 출자자 (펀드 구조)"],
            ["IRR", "Internal Rate of Return", "내부수익률 — PC 펀드 성과 지표"],
            ["IG / HY", "Investment Grade / High Yield", "투자등급 / 고수익 (= 투기등급 채권)"],
            ["ALM", "Asset-Liability Matching", "자산-부채 매칭. 보험사·연금 핵심 운영기법"],
            ["LTV", "Loan-to-Value", "담보가치 대비 대출비율"],
            ["EBITDA", "Earnings Before Interest, Taxes, D&A", "이자·세금·감가 차감 전 영업이익 (leverage 측정)"],
            ["PIK", "Payment in Kind", "현금이 아닌 부채증가로 이자 지급"],
            ["CLO", "Collateralized Loan Obligation", "대출담보부증권. 6층 빌라 비유 (✓9)"],
            ["DIP", "Debtor-in-Possession", "회생절차 진입 기업 신규 대출. 최우선 변제"],
            ["SRT", "Significant Risk Transfer", "은행이 portfolio risk를 PC에 이전하는 거래"],
            ["RBC", "Risk-Based Capital", "위험기반자본 — 보험사 자기자본 요구"],
            ["NAIC", "National Association of Insurance Commissioners", "전미보험감독관협회"],
            ["ILPA", "Institutional Limited Partners Association", "기관 LP 협회 (가이드라인 발간)"],
            ["FSR", "Financial Stability Report", "금융안정보고서 (BoE·한국은행 등)"],
            ["SWES", "System-Wide Exploratory Scenario", "BoE 시스템 전반 stress test (2024-25)"],
            ["GFSR", "Global Financial Stability Report", "IMF 글로벌 금융안정보고서"],
            ["FSB", "Financial Stability Board", "금융안정위원회 (G20 산하)"],
            ["NBFI", "Non-Bank Financial Intermediary", "비은행 금융중개. PC·hedge fund·MMF 등"],
            ["LLG", "Leveraged Lending Guidance", "2013 OCC·Fed·FDIC 6x EBITDA 룰 (2025.12 OCC·FDIC withdrew)"],
            ["CET1", "Common Equity Tier 1", "보통주 자기자본 (Basel III 핵심)"],
            ["TAM", "Total Addressable Market", "총 가용 시장 규모"],
            ["TTM", "Trailing Twelve Months", "최근 12개월 누적 (디폴트율 표기 표준)"],
          ],
          rowsEn: [
            ["PC", "Private Credit", "Non-public lending originated and held by an asset manager"],
            ["BDC", "Business Development Company", "US 1940-Act vehicle, the standard PC wrapper"],
            ["BSL", "Broadly Syndicated Loan", "The *group-buy* counterpart to PC"],
            ["LBO", "Leveraged Buyout", "Debt-funded acquisition secured by target assets / EBITDA"],
            ["ABF", "Asset-Based Finance", "Pooled-asset loans — autos, aircraft, BNPL, receivables"],
            ["NAV", "Net Asset Value", "Net asset value; NAV financing = loan secured by PE fund NAV"],
            ["DL", "Direct Lending", "PC's largest single asset class (~44%)"],
            ["GA", "General Account", "Insurer general account — funds annuity liabilities"],
            ["GP / LP", "General Partner / Limited Partner", "Fund manager / limited-liability investor"],
            ["IRR", "Internal Rate of Return", "Standard PC fund return metric"],
            ["IG / HY", "Investment Grade / High Yield", "Investment-grade / speculative-grade bonds"],
            ["ALM", "Asset-Liability Matching", "Core insurance/pension portfolio technique"],
            ["LTV", "Loan-to-Value", "Loan principal relative to collateral value"],
            ["EBITDA", "Earnings Before Interest, Taxes, D&A", "Operating cash-flow proxy for leverage measurement"],
            ["PIK", "Payment in Kind", "Interest paid as additional debt rather than cash"],
            ["CLO", "Collateralized Loan Obligation", "Securitisation of leveraged loans — the *six-storey building* (✓9)"],
            ["DIP", "Debtor-in-Possession", "Loan to a company in Chapter 11; super-priority"],
            ["SRT", "Significant Risk Transfer", "Bank transfers portfolio risk to a PC fund"],
            ["RBC", "Risk-Based Capital", "Insurance capital requirement framework"],
            ["NAIC", "National Association of Insurance Commissioners", "US insurance regulators' association"],
            ["ILPA", "Institutional Limited Partners Association", "LP industry body issuing PC guidelines"],
            ["FSR", "Financial Stability Report", "Central-bank stability report (BoE, BoK, etc.)"],
            ["SWES", "System-Wide Exploratory Scenario", "BoE's system-wide stress test (2024-25)"],
            ["GFSR", "Global Financial Stability Report", "IMF's biannual stability publication"],
            ["FSB", "Financial Stability Board", "G20 financial stability body"],
            ["NBFI", "Non-Bank Financial Intermediary", "Non-bank intermediaries — PC, hedge funds, MMFs"],
            ["LLG", "Leveraged Lending Guidance", "2013 OCC/Fed/FDIC rule for 6x EBITDA (OCC and FDIC withdrew Dec 2025)"],
            ["CET1", "Common Equity Tier 1", "Core Basel-III capital tier"],
            ["TAM", "Total Addressable Market", "Total addressable market"],
            ["TTM", "Trailing Twelve Months", "Standard 12-month rolling window for default rates"],
          ],
          caption: "30개 용어는 본문에서 *적어도 한 번씩* 등장했다. *시리즈 cross-link*: ABF·spread 모델은 → ✓dollar-hegemony 시리즈의 보험사·연금 메커니즘과 연결, retail BDC 환매는 → ✓ai-capital-cycle 시리즈의 hyperscale capex financing과 연결.",
          captionEn: "Every term above appears at least once in the body. *Cross-series link*: ABF and the spread model connect to → ✓dollar-hegemony series (insurer-pension mechanics); retail BDC redemptions connect to → ✓ai-capital-cycle series (hyperscale capex financing).",
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "이 노트의 thesis 한 줄",
          headingEn: "The Thesis of This Note in One Line",
          body:
            "*17년 호황의 끝자락에 우리가 본 것은 — PC가 mainstream asset class로 들어선 바로 그 순간, 첫 cycle stress가 시작됐다는 사실이다.* MBK 홈플러스(한국)·Pluralsight debt-for-equity(미국 LBO)·Blue Owl OBDC II fire-sale(retail PC) 세 사건은 *trinity*다 — 같은 분기, 다른 axes, 같은 질문. 답은 5채널 인터커넥션(✓14)이 어떻게 작동하는지가 결정한다. *그래서 watch dashboard 7개를 매주 본다*.",
          bodyEn:
            "*What we see at the end of a 17-year bull is this — the moment PC became a mainstream asset class is the same moment its first cycle stress began.* MBK Homeplus (Korea), the Pluralsight debt-for-equity (US LBO), and the Blue Owl OBDC II fire-sale (retail PC) form a *trinity*: same quarter, different axes, same question. The answer depends on how the five-channel interconnection (✓14) plays out. *Which is why the seven-indicator watch dashboard is checked weekly*.",
        },
      },
    ],
  },
];
