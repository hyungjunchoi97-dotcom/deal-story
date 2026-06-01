/**
 * Sections 1-9 for the Private Credit Era note.
 */

import type { NoteSection } from "../notes";

export const SECTIONS_PART_A: NoteSection[] = [
  // ════════════════════════════════════════════════════════════════
  // 1. Hook — 17년 호황의 끝자락
  // ════════════════════════════════════════════════════════════════
  {
    heading: "1. 17년 호황의 끝자락, 세 가지 신호가 한 분기에 겹침",
    headingEn: "1. The End of a 17-Year Bull — Three Signals in One Quarter",
    blocks: [
      {
        type: "text",
        body:
          "2025년 봄, 사모대출(Private Credit, 이하 PC) 시장에서 세 가지 사건이 한 분기에 겹침.\n\n각 사건은 단독으로는 결정적이지 않음.\n\n다만 세 개가 함께 일어났다는 사실이 의미를 만듦.\n\n첫째, 2025년 3월 4일, 한국 대형마트 홈플러스가 서울회생법원에 법인회생을 신청.\n\nMBK파트너스가 2015년 ₩7.2조에 인수한 지 10년 만.\n\n인수 당시 차입금 약 ₩4.3조(전체의 59.8%)가 인수금융으로 조달됐고, 10년이 지난 시점 누적 부채 ₩8.5조 규모로 보도됨.¹\n\n한국 PEF(Private Equity Fund, 사모투자펀드)·인수금융 역사상 단일 최대 손실 사례가 될 가능성.\n\n둘째, 같은 봄 미국에서는 Blue Owl Capital의 비상장 BDC(Business Development Company, 사업개발회사) OBDC II가 일부 자산을 할인 매각한다는 보도.\n\n비공개 자산을 시장에 던지는 행위 자체는 흔치 않음.\n\n인터벌 펀드·non-traded BDC가 환매 한도(분기 2% / 연 5%)에 부딪히기 시작한 첫 시그널.²\n\n셋째, 2025년 9월 Apollo Global Management의 CEO Marc Rowan은 CNBC 인터뷰에서 \"전통적 투자 모델은 깨졌다\"고 발언.\n\n같은 인터뷰에서 \"부채의 20-30%만 은행 balance sheet, 나머지는 investment marketplace에 있다\"고 함.\n\n다른 자리에서는 shakeout (구조조정) 이라는 단어를 사용.³\n\n한 분기 안에 한국 PEF 최대 손실 사례, 미국 retail PC의 환매 시그널, PC 시장 원조 운용사의 shakeout 발언이 겹침.\n\n그렇기에 이 글을 작성하게 됨.",
        bodyEn:
          "In spring 2025, *three events* hit the Private Credit (PC) market in a single quarter. None of them is decisive on its own. The meaning comes from the fact that they happened together.\n\nFirst, on 4 March 2025, *Homeplus* — Korea's second-largest hypermarket chain — filed for court-supervised reorganization at the Seoul Bankruptcy Court. It had been ten years since MBK Partners acquired Homeplus for ₩7.2 trillion in 2015. The deal was funded with roughly ₩4.3 trillion of acquisition finance (about 59.8% of the total enterprise value). A decade later, reported accumulated debt sat at roughly ₩8.5 trillion.¹ This may become *the single largest loss in Korean PEF (Private Equity Fund) and acquisition-finance history*.\n\nSecond, that same spring in the US, *Blue Owl Capital*'s non-traded BDC (Business Development Company) — OBDC II — was reported to be discounting selected positions for sale. Selling private positions *into the market* is itself unusual. It was the first concrete signal that interval funds and non-traded BDCs were brushing up against redemption gates (2% per quarter / 5% per year).²\n\nThird, in September 2025, *Marc Rowan* — the CEO of Apollo Global Management — told CNBC that \"the traditional investing model is broken.\" In the same conversation he noted that \"only 20-30% of debt sits on bank balance sheets — the rest lives in the investment marketplace.\" Elsewhere he used the word *shakeout*.³\n\nIn one quarter: *Korea's largest PEF loss case*, *the first US retail-PC redemption signal*, and *a shakeout call from the architect of the modern PC industry*. That is why we are writing this piece.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "이 글이 답할 7가지 질문",
          headingEn: "Seven Questions This Note Answers",
          body:
            "① PC가 정확히 무엇인가 (→ ✓1.5)  ② 17년간 어떻게 $250B → $1.7T로 성장했나 (→ ✓2)  ③ 왜 은행이 떠났나 (→ ✓3)  ④ 6개 자산 클래스의 진짜 차이는 (→ ✓4-9)  ⑤ 빅 7 + Sixth Street은 누구인가 (→ ✓10)  ⑥ 한국 시장은 어디까지 왔나 (→ ✓12)  ⑦ 다음 12개월 어디서 무엇이 깨질 수 있나 (→ ✓14-15)",
          bodyEn:
            "(1) What exactly is PC? (→ ✓1.5)  (2) How did it grow from $250B to $1.7T in 17 years? (→ ✓2)  (3) Why did banks leave? (→ ✓3)  (4) What really separates the six asset classes? (→ ✓4-9)  (5) Who are the Big 7 plus Sixth Street? (→ ✓10)  (6) How far has Korea come? (→ ✓12)  (7) Where could things break in the next 12 months? (→ ✓14-15)",
        },
      },
      {
        type: "metrics",
        items: [
          { label: "MBK 홈플러스 인수가", labelEn: "MBK Homeplus deal", value: "₩7.2조 (2015)", valueEn: "₩7.2T (2015)", sub: "인수금융 ~₩4.3조 (59.8%)", subEn: "~₩4.3T acq-fin (59.8%)", color: "text-red-500" },
          { label: "OBDC II fire sale 보도", labelEn: "OBDC II fire-sale reports", value: "2025 봄", valueEn: "Spring 2025", sub: "비공개 자산 → 시장 매각", subEn: "Private positions → market", color: "text-amber-500" },
          { label: "Apollo CEO 발언", labelEn: "Apollo CEO statement", value: "\"shakeout\"", valueEn: "\"shakeout\"", sub: "2025.9 CNBC", subEn: "CNBC, Sept 2025", color: "text-violet-500" },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 1.5 비유 사전 — PC가 정확히 뭔가
  // ════════════════════════════════════════════════════════════════
  {
    heading: "1.5. Private Credit이 정확히 뭔가, 비유 4개와 사전 1개",
    headingEn: "1.5. What Is Private Credit, Exactly — Four Analogies and One Glossary",
    blocks: [
      {
        type: "text",
        body:
          "본론에 들어가기 전에 PC가 무엇인지를 명확히 짚어둠.\n\n영어 약어를 모르면 뒤의 어떤 표도 의미가 없음.\n\nPC를 한 줄로 정의하면, 공개시장(은행 대출·공모채)을 거치지 않고 자산운용사가 직접 모집·실행하는 기업·자산 담보 대출.\n\n차주는 주로 중견·중소기업 또는 PE 스폰서가 인수한 회사이고, 대주는 BDC·PC 펀드·보험사 GA(General Account, 일반계정)임.",
        bodyEn:
          "Before we go deeper, let us pin down *what PC actually is*. None of the tables that follow make sense without the acronyms.\n\nIn one line: PC is *a loan to a company or asset pool that is originated and held by an asset manager, bypassing the public bank-loan and bond markets*. Borrowers are typically mid-market companies or PE-sponsored buyouts. Lenders are BDCs, PC funds, and insurance general accounts (GA).",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "비유 ① 은행 대출 vs PC",
          headingEn: "Analogy 1 — Bank Loan vs PC",
          body:
            "은행 대출은 백화점 매대.\n\n진열대가 정해져 있고, 약관도 표준화돼 있고, 누구나 볼 수 있음.\n\nPC는 동네 부자 아저씨의 직접 대출에 가까움.\n\n조건은 상대방을 보고 협상하고, 약관은 거래마다 다시 씀.\n\n영어권 비유로 옮기면 the wealthy uncle down the street, lending out of his own pocket, 한 사람이 직접 본다는 점이 핵심.",
          bodyEn:
            "A bank loan is *the department-store rack*: defined shelf, standardised terms, visible to everyone. PC is closer to *the wealthy uncle down the street lending out of his own pocket*: terms are negotiated against the actual borrower, and the documentation is rewritten deal-by-deal. The point of the analogy is the same — *one party, looking the borrower in the eye, holds the paper*.",
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "비유 ② BSL vs PC",
          headingEn: "Analogy 2 — BSL vs PC",
          body:
            "BSL(Broadly Syndicated Loan, 광범위 신디케이트 대출)은 공동구매.\n\nJP Morgan이 한 거래를 주선하면 50-100개 기관이 조각으로 나눠 삼.\n\nPC는 맞춤 정장.\n\nBlue Owl이 단독 또는 3-4개 club deal로 한 회사를 끝까지 hold함.\n\n영어로 적으면 BSL = Costco bulk pack, PC = bespoke tailor.\n\n가격·약관·hold 기간이 전부 다름.",
          bodyEn:
            "BSL (Broadly Syndicated Loan) is a *group buy*: when JPMorgan arranges a deal, 50-100 institutions split it into slices. PC is a *bespoke tailor* — Blue Owl, alone or in a 3-4 lender club, originates and holds the position to maturity. BSL = *Costco bulk pack*; PC = *bespoke tailor*. Price, covenants, and hold period are all different.",
        },
      },
      {
        type: "table",
        table: {
          id: "pc-vs-bank-bsl",
          title: "PC vs 은행 대출 vs BSL, 한 표 비교",
          titleEn: "PC vs Bank Loan vs BSL — At a Glance",
          headers: ["항목", "은행 대출", "BSL", "Private Credit"],
          headersEn: ["Dimension", "Bank Loan", "BSL", "Private Credit"],
          rows: [
            ["대주", "은행 (예금 기반)", "은행 + 기관 50-100개", "자산운용사 (BDC·PC 펀드·보험 GA)"],
            ["거래 사이즈", "소액-대형", "보통 $250M+", "$50M-$5B+ (unitranche)"],
            ["가격", "소규모는 저렴, 대형은 변동", "SOFR + 250-450bp 변동", "SOFR + 500-700bp 변동"],
            ["약관", "표준화", "Cov-Lite 93%", "Cov-Lite ~21% (2024-25, 상승 중)"],
            ["hold 기간", "만기까지", "유통시장에서 거래", "만기까지 hold가 원칙"],
            ["valuation", "장부가", "매일 mark-to-market", "분기 fair value"],
          ],
          rowsEn: [
            ["Lender", "Bank (deposit-funded)", "Bank + 50-100 institutions", "Asset manager (BDC, PC fund, insurance GA)"],
            ["Deal size", "Small to large", "Typically $250M+", "$50M-$5B+ (unitranche)"],
            ["Pricing", "*Cheap for small, variable for large*", "SOFR + 250-450bp floating", "SOFR + 500-700bp floating"],
            ["Covenants", "Standardised", "93% Cov-Lite", "Cov-Lite ~21% (2024-25, rising)"],
            ["Hold period", "*To maturity*", "Trades in secondary", "*Hold-to-maturity is the norm*"],
            ["Valuation", "Book", "Daily mark-to-market", "*Quarterly fair value*"],
          ],
          highlightRows: [5],
          caption: "Sources: Proskauer (PC vs BSL overview), CreditSights, KBRA DLD. Highlight = valuation timing, 이 한 줄이 \"왜 위기 때 진짜 노출이 늦게 보이는가\"의 답임.",
          captionEn: "Sources: Proskauer (PC vs BSL overview), CreditSights, KBRA DLD. Highlight row = valuation cadence — this is the single line that explains *why true exposure shows up late in a crisis*.",
        },
      },
      {
        type: "table",
        table: {
          id: "pc-acronyms",
          title: "이 글에서 가장 많이 나오는 영어 약어 12개",
          titleEn: "The 12 Acronyms Used Most in This Note",
          headers: ["약어", "풀네임", "한 줄 설명"],
          headersEn: ["Acronym", "Full name", "One-line meaning"],
          rows: [
            ["PC", "Private Credit", "비은행·비공개 대출 전체"],
            ["BSL", "Broadly Syndicated Loan", "은행 주선 + 50-100개 기관 분배"],
            ["BDC", "Business Development Company", "PC 자산을 보유한 상장/비상장 펀드 비클"],
            ["LBO", "Leveraged Buyout", "차입 인수, PC의 최대 차주 풀"],
            ["EBITDA", "Earnings before Interest, Tax, Depreciation, Amortization", "현금흐름 대용지표 (LBO leverage 분모)"],
            ["GA", "General Account (insurance)", "보험사 자기자본, annuity 부채 매칭용"],
            ["ABF", "Asset-Based Finance", "특정 자산 풀 담보 대출 (자동차·항공·매출채권)"],
            ["NAV", "Net Asset Value", "PE 펀드 보유 자산 가치, NAV 대출 담보"],
            ["DIP", "Debtor-in-Possession", "챕터 11 진입 기업 신규 대출 (최우선 변제)"],
            ["SRT", "Significant Risk Transfer", "은행이 PC 펀드에 자기자본 risk 양도"],
            ["SOFR", "Secured Overnight Financing Rate", "LIBOR 대체 변동금리 기준"],
            ["RBC", "Risk-Based Capital", "보험사 자본 규제 (NAIC framework)"],
          ],
          rowsEn: [
            ["PC", "Private Credit", "Non-bank, non-public lending in total"],
            ["BSL", "Broadly Syndicated Loan", "Bank-arranged loan distributed to 50-100 institutions"],
            ["BDC", "Business Development Company", "Listed/non-listed vehicle holding PC assets"],
            ["LBO", "Leveraged Buyout", "Debt-funded acquisition — the largest PC borrower pool"],
            ["EBITDA", "Earnings before Interest, Tax, Depreciation, Amortization", "Cash-flow proxy, denominator of LBO leverage"],
            ["GA", "General Account (insurance)", "Insurer balance-sheet capital matched to annuity liabilities"],
            ["ABF", "Asset-Based Finance", "Loans secured by a defined pool (autos, aircraft, receivables)"],
            ["NAV", "Net Asset Value", "PE fund's invested-portfolio value — collateral for NAV loans"],
            ["DIP", "Debtor-in-Possession", "Priority new lending to a Chapter 11 borrower"],
            ["SRT", "Significant Risk Transfer", "Bank transfers regulatory risk to a PC fund"],
            ["SOFR", "Secured Overnight Financing Rate", "Post-LIBOR floating-rate benchmark"],
            ["RBC", "Risk-Based Capital", "Insurance capital regime (NAIC framework)"],
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "용어가 흔들리는 지점 1개",
          headingEn: "One Place Where Definitions Drift",
          body:
            "PC AUM 자체가 source마다 다름.\n\nPreqin 협의 정의는 2024년 $1.7T, BIS 광의 정의는 $2.1T, JPM·PitchBook 보수 정의는 $1.2T.\n\n본문에서 단일 숫자를 인용할 땐 Preqin 협의 기준으로 통일.\n\n다른 소스를 인용할 땐 명시함.",
          bodyEn:
            "Even *PC AUM* itself differs by source. Preqin's narrow definition gives $1.7T for 2024; BIS's broad definition gives $2.1T; JPM and PitchBook's conservative cut gives $1.2T. When a single number is cited in the body, the *Preqin narrow* basis is used. Any departure is flagged.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 2. 17년의 산수
  // ════════════════════════════════════════════════════════════════
  {
    heading: "2. 17년의 산수, $250B에서 $1.7T로",
    headingEn: "2. The Math of 17 Years — From $250B to $1.7T",
    blocks: [
      {
        type: "text",
        body:
          "PC AUM은 2008년 GFC(Global Financial Crisis, 글로벌 금융위기) 직후 약 $250B에서 2024년 약 $1.7T로, 17년간 약 7배 증가함 (Preqin 협의 정의).\n\n같은 기간 미국 GDP는 약 1.8배, S&P 500은 약 4배 상승.\n\nPC는 어떤 다른 자산군보다도 빠르게 늘었음.⁴\n\n2024년 한 해 deployed capital(실집행 자본)은 약 $592.8B로 직전년 $333.4B 대비 +78%.\n\nPreqin은 2030년 $2.64T를 전망하고, BlackRock은 HPS 인수 직후 자료에서 최대 $4.5T 시나리오를 제시.⁵",
        bodyEn:
          "PC AUM grew from roughly $250B just after the Global Financial Crisis (GFC) in 2008 to about $1.7T in 2024 — *roughly seven times* in 17 years (Preqin narrow basis). Over the same window, US GDP rose about 1.8x and the S&P 500 about 4x. PC grew *faster than any other major asset class*.⁴\n\nFor 2024 alone, deployed capital reached about $592.8B vs. $333.4B the prior year, +78%. Preqin projects $2.64T by 2030; BlackRock, in materials around its HPS deal, sketched a scenario reaching $4.5T.⁵",
      },
      {
        type: "chart",
        chart: {
          id: "pc-aum-growth",
          title: "Chart 1 — 글로벌 사모대출 AUM 추이 ($B, 2008-2024)",
          titleEn: "Chart 1 — Global Private Credit AUM ($B, 2008-2024)",
          caption: "Source: Preqin Private Debt AUM (dry powder 포함). 광의 정의 시 2024년 ~$2.1T(BIS), 보수 정의 시 ~$1.2T(JPM). 본 차트는 Preqin 협의 기준.",
          captionEn: "Source: Preqin Private Debt AUM (incl. dry powder). Broad definition (BIS) ~$2.1T for 2024; conservative (JPM) ~$1.2T. This chart uses the Preqin narrow series.",
          data: [
            { year: 2008, aum: 250 },
            { year: 2009, aum: 280 },
            { year: 2010, aum: 315 },
            { year: 2011, aum: 380 },
            { year: 2012, aum: 440 },
            { year: 2013, aum: 500 },
            { year: 2014, aum: 560 },
            { year: 2015, aum: 600 },
            { year: 2016, aum: 660 },
            { year: 2017, aum: 730 },
            { year: 2018, aum: 806 },
            { year: 2019, aum: 880 },
            { year: 2020, aum: 1000 },
            { year: 2021, aum: 1230 },
            { year: 2022, aum: 1400 },
            { year: 2023, aum: 1600 },
            { year: 2024, aum: 1700 },
          ],
          annotations: [
            { year: 2013, label: "Basel III + LLG", labelEn: "Basel III + LLG" },
            { year: 2020, label: "COVID 흡수", labelEn: "COVID absorption" },
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "수치 해석 — \"누가 이 자본을 댔나\"",
          headingEn: "Reading the Number — \"Who Funded This?\"",
          body:
            "$1.7T의 절반 가까이는 보험사 GA에서 옴.\n\nApollo가 Athene을 통해, KKR이 Global Atlantic 100% 인수를 통해, Brookfield가 American Equity Life를 통해, Blackstone이 Corebridge·Allstate·Resolution Life SMA(Separately Managed Account)를 통해, 연금 부채(평균 듀레이션 7-10년)를 long-dated PC 자산과 매칭함.\n\n즉 PC 성장의 자금원은 retail이 아니라 보험·연금 long money가 본체.\n\n(→ ✓11)",
          bodyEn:
            "*Roughly half of the $1.7T* came from insurance general accounts. Apollo via Athene, KKR via its 100% buy-out of Global Atlantic, Brookfield via American Equity Life, Blackstone via SMAs (Separately Managed Accounts) with Corebridge, Allstate, and Resolution Life — all matching *annuity liabilities (7-10 year average duration)* against long-dated PC assets. The fuel for PC's growth is *insurance and pension long money*, not retail. (→ ✓11)",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 3. 왜 은행이 떠났나
  // ════════════════════════════════════════════════════════════════
  {
    heading: "3. 왜 은행이 떠났나, Basel III와 Dodd-Frank의 사슬",
    headingEn: "3. Why the Banks Left — The Basel III + Dodd-Frank Chain",
    blocks: [
      {
        type: "text",
        body:
          "PC가 성장한 이유를 한 줄로 답하면, 은행이 떠났기 때문.\n\n그러나 은행은 자발적으로 떠난 게 아님.\n\n규제가 떠밀었음.\n\n첫 번째 사슬은 Basel III.\n\nBIS(Bank for International Settlements, 국제결제은행) Basel 위원회가 2010년 발표한 규제.\n\n핵심은 자본 요건 강화와 자본보존완충(Capital Conservation Buffer, CCB) 신설.\n\n2013년부터 2019년까지 7년에 걸쳐 phase-in 함.\n\n은행이 위험가중자산 대비 보유해야 할 자본 비율이 8.0%에서 10.5%로 상승, G-SIB(Global Systemically Important Bank, 글로벌 시스템적 중요 은행)는 추가 1-3.5% buffer가 더해짐.⁶\n\n두 번째 사슬은 미국 Interagency Leveraged Lending Guidance (LLG).\n\nOCC(통화감독청)·Fed(연준)·FDIC(연방예금보험공사) 세 기관이 2013년 3월 22일 공동 발표한 가이던스.\n\n핵심 룰은 단순했음, 총부채 / EBITDA > 6배 거래는 추가 scrutiny 대상.\n\n적용 대상은 미국 은행뿐, PC 펀드는 비적용.\n\n결과는 더 단순했음.\n\n6배+ 거래가 통째로 PC로 넘어옴.\n\nPC는 그 자리에서 7-9배 leverage 거래를 흡수.⁷\n\n세 번째 사슬은 Volcker Rule (Dodd-Frank §619).\n\n2015년 시행.\n\n은행 내부의 PE 펀드 sponsorship과 자기자본 거래(proprietary trading)를 제한.\n\n은행 내부에서 키우던 PC 팀들이 밖으로 나가 독립 운용사가 됨.\n\nHPS의 분사 경로(2007년 JPMorgan AM 산하 Highbridge → 2016년 분사 → 2025년 BlackRock 인수)가 정확히 이 패턴.⁸",
        bodyEn:
          "Why did PC grow? In one line: *because the banks left*. But banks did not leave voluntarily — *regulation pushed them out*.\n\nThe first chain is Basel III. Issued by the BIS (Bank for International Settlements) Basel Committee in 2010. Two pillars: *higher capital requirements* and *the Capital Conservation Buffer (CCB)*. Phased in from 2013 to 2019 over seven years. Total capital requirements against risk-weighted assets rose from 8.0% to 10.5%, with an additional 1-3.5% buffer for Global Systemically Important Banks (G-SIBs).⁶\n\nThe second chain is the US *Interagency Leveraged Lending Guidance* (LLG), issued 22 March 2013 jointly by the OCC (Office of the Comptroller of the Currency), Fed, and FDIC (Federal Deposit Insurance Corporation). The rule was blunt: *deals at Total Debt / EBITDA > 6x receive heightened scrutiny*. It applied only to US banks; PC funds were not covered. The result was equally blunt: *6x+ deals migrated wholesale to PC*, which immediately absorbed transactions at 7-9x leverage.⁷\n\nThe third chain is the *Volcker Rule* (Dodd-Frank §619), effective 2015. It restricted in-bank PE-fund sponsorship and proprietary trading. PC desks that had been incubated inside banks *spun out* and became standalone managers. HPS's path — Highbridge Principal Strategies inside JPMorgan AM (2007), spun out (2016), acquired by BlackRock (2025) — is exactly this pattern.⁸",
      },
      {
        type: "table",
        table: {
          id: "basel-iii-phasein",
          title: "Basel III 자본 요건 phase-in (2013-2019)",
          titleEn: "Basel III Capital Phase-in (2013-2019)",
          headers: ["연도", "CET1 최소", "Tier 1 최소", "자본보존완충(CCB)", "총 자본 + CCB"],
          headersEn: ["Year", "CET1 min", "Tier 1 min", "CCB", "Total Capital + CCB"],
          rows: [
            ["2013", "3.5%", "4.5%", "0%", "8.0%"],
            ["2014", "4.0%", "5.5%", "0%", "8.0%"],
            ["2015", "4.5%", "6.0%", "0%", "8.0%"],
            ["2016", "4.5%", "6.0%", "0.625%", "8.625%"],
            ["2017", "4.5%", "6.0%", "1.25%", "9.25%"],
            ["2018", "4.5%", "6.0%", "1.875%", "9.875%"],
            ["2019", "4.5%", "6.0%", "2.5%", "10.5%"],
          ],
          highlightRows: [6],
          caption: "Source: BIS Basel III phase-in arrangements. G-SIB은 추가 1-3.5% buffer. 2019년 최종 단계에서 은행은 자본을 모으느라 변두리 leverage 거래를 포기함.",
          captionEn: "Source: BIS Basel III phase-in arrangements. G-SIBs carry an additional 1-3.5% buffer. *By the 2019 endpoint*, banks were busy building capital and let marginal leveraged deals go.",
        },
      },
      {
        type: "chart",
        chart: {
          id: "bank-vs-pc-share",
          title: "Chart 2 — 미국 LBO 자금조달: BSL vs PC 점유 (%)",
          titleEn: "Chart 2 — US LBO Financing Share, BSL vs PC (%)",
          caption: "Source: PitchBook LCD, Proskauer, JPM 종합 (중소·중견 LBO 한정). 메가딜(>$3B)은 여전히 BSL 우세. 2022년 PC 비중 60%는 금리 급등으로 BSL 시장이 stall한 결과로 일시 효과.",
          captionEn: "Source: PitchBook LCD, Proskauer, JPM (mid-market LBOs only). Mega-deals (>$3B) still skew BSL. The 2022 60% PC peak reflects *BSL stalling under rate shock* — a transient effect.",
          data: [
            { year: 2010, bsl: 90, pc: 10 },
            { year: 2012, bsl: 85, pc: 15 },
            { year: 2014, bsl: 80, pc: 20 },
            { year: 2015, bsl: 75, pc: 25 },
            { year: 2017, bsl: 68, pc: 32 },
            { year: 2019, bsl: 62, pc: 38 },
            { year: 2020, bsl: 60, pc: 40 },
            { year: 2021, bsl: 55, pc: 45 },
            { year: 2022, bsl: 40, pc: 60 },
            { year: 2023, bsl: 45, pc: 55 },
            { year: 2024, bsl: 50, pc: 50 },
          ],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "2025.12.5 사슬의 첫 끊김 — LLG withdrawal",
          headingEn: "Dec 5, 2025 — First Link Snaps (LLG Withdrawal)",
          body:
            "2025년 12월 5일, OCC와 FDIC가 2013 Interagency Leveraged Lending Guidance에서 withdraw함 (트럼프 2기 deregulation, Fed는 잔류).\n\n12년간 PC를 키운 규제 한 축이 끊김.\n\n단기 효과는 은행이 6배+ 거래로 다시 들어올 수 있다는 것, PC와 직접 경쟁 가능성.\n\n이 단 한 줄이 2026년 PC 가격 압박의 시작점.⁹",
          bodyEn:
            "On 5 December 2025, the OCC and FDIC *withdrew* from the 2013 Interagency Leveraged Lending Guidance (Trump-2 deregulation; the Fed remained). One of the two regulatory pillars that fed 12 years of PC growth snapped. The near-term consequence: *banks can re-enter 6x+ deals* and *compete directly with PC*. That single line is the starting point for PC pricing pressure in 2026.⁹",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 4. Direct Lending
  // ════════════════════════════════════════════════════════════════
  {
    heading: "4. Direct Lending, PC의 주력 ($1.7T의 44%)",
    headingEn: "4. Direct Lending — PC's Workhorse (44% of $1.7T)",
    blocks: [
      {
        type: "text",
        body:
          "PC AUM의 ~44%가 Direct Lending.\n\n우리가 PC라고 부를 때 머릿속에 떠올리는 그림, Blue Owl이 Carlyle이 인수한 회사에 $2B unitranche를 빌려준다, 가 정확히 이것.\n\nDirect Lending의 표준 구조는 Unitranche.\n\n1st lien(1순위 담보)과 2nd lien(2순위 담보)을 합쳐 단일 트랜치로 만든 대출.\n\n차주 입장에서는 협상 상대가 한 곳, 변제 우선순위 분쟁이 없다는 장점.\n\n대주 입장에서는 더 높은 금리(SOFR + 500-700bp)와 더 많은 컨트롤을 가져감.\n\n2024년 미국 direct lending 거래 volume은 약 $302B로 전년 대비 +107%, 중기업(Middle Market) direct lending은 약 $139B로 +85%.\n\n전체 시장 volume은 약 $390B로 두 배.\n\nLBO 평균 leverage는 2024년 Q4 기준 4.8배 EBITDA.¹⁰",
        bodyEn:
          "About 44% of PC AUM is Direct Lending. When we say *PC*, the picture we have in mind — *Blue Owl writing a $2B unitranche to a Carlyle-backed buyout* — is exactly this.\n\nThe standard structure is the *unitranche*: a single tranche combining first-lien and second-lien collateral into one instrument. For the borrower, that means a single counterparty and no inter-creditor disputes. For the lender, it means a higher coupon (SOFR + 500-700bp) and more control.\n\nUS direct lending volume reached about $302B in 2024, up 107% year-on-year; mid-market direct lending was about $139B, up 85%. Total market volume roughly doubled to $390B. Average LBO leverage in Q4 2024 was 4.8x EBITDA.¹⁰",
      },
      {
        type: "chart",
        chart: {
          id: "pc-asset-classes",
          title: "Chart 3 — PC AUM 자산 클래스별 비중 (2024, %)",
          titleEn: "Chart 3 — PC AUM by Strategy (2024, %)",
          caption: "Source: Preqin + McKinsey 종합. 운용사별 분류 차이로 ±5% 오차. Direct Lending이 단일 최대 자산군이고, ABF가 가장 빠르게 성장 중.",
          captionEn: "Source: Preqin + McKinsey. ±5% by manager-classification differences. Direct Lending is the single largest sleeve; ABF is the fastest-growing.",
          data: [
            { strategy: "Direct Lending", strategyEn: "Direct Lending", share: 44 },
            { strategy: "Asset-Based Finance", strategyEn: "Asset-Based Finance", share: 13 },
            { strategy: "Distressed/Special Sit", strategyEn: "Distressed / Special Sit", share: 11 },
            { strategy: "Mezzanine", strategyEn: "Mezzanine", share: 10 },
            { strategy: "Venture/Growth Debt", strategyEn: "Venture / Growth Debt", share: 5 },
            { strategy: "NAV Finance", strategyEn: "NAV Finance", share: 4 },
            { strategy: "Real Estate Debt", strategyEn: "Real Estate Debt", share: 8 },
            { strategy: "Infrastructure Debt", strategyEn: "Infrastructure Debt", share: 5 },
          ],
        },
      },
      {
        type: "text",
        body:
          "### Cov-Lite — \"covenant이 없는 약관\"\n\nCov-Lite(Covenant-Lite, 약식 약관)는 차주에게 유리한 약관 구조.\n\n전통적 maintenance covenant(정기 재무비율 준수 조항)가 완화되거나 사라진 대출.\n\n위반 trigger가 없거나 매우 느슨해서 차주가 EBITDA add-back을 늘리거나 PIK(Payment-in-Kind, 이자 원금 가산) 옵션을 자유롭게 사용 가능.\n\n전체 institutional leveraged loan 시장의 93%가 Cov-Lite.\n\nUpper middle market PC(EBITDA $50M+)도 약 30%, 메가딜(>$500M)은 50%가 maintenance covenant 없음.\n\n일반 PC 평균은 2023년 ~4%에서 2024-25년 ~21%로 5배 급등 (Proskauer 측정).¹¹\n\n### PIK — \"이자를 현금이 아니라 원금에 얹는다\"\n\nPIK(Payment-in-Kind)는 차주가 이자를 현금으로 내는 대신 원금에 가산해 누적시키는 구조.\n\n단기 현금흐름이 나쁜 회사에 유리하지만, 대주 입장에서는 실현 수익이 늦어짐.\n\n2024-25년 PC 포트폴리오의 PIK 비중 상승은 BDC 환매 압력의 한 요인.\n\n### EBITDA Add-back — \"미래 비용 절감을 미리 더한다\"\n\nLBO 대출에서 가장 논쟁적인 항목.\n\n예상 시너지, 비반복 비용, cost-out 계획을 EBITDA에 더해 leverage 비율을 낮춰 보이게 만듦.\n\n2024년 일부 거래에서는 add-back이 reported EBITDA의 30-40%까지 올라갔다는 보도.\n\n### SOFR — \"LIBOR 사망 후 표준 변동금리\"\n\nSOFR(Secured Overnight Financing Rate)는 LIBOR 사망(2021-23 phase-out) 후 미국 변동금리 시장의 표준.\n\nPC 대출의 대부분이 SOFR + 500-700bp spread 형태.\n\n금리가 오르면 PC 수익률이 자동 인상되지만 동시에 차주 이자부담도 자동 인상됨, 2022-23년 금리 급등이 PC borrower interest coverage ratio를 1 아래로 떨어뜨린 직접적 원인.",
        bodyEn:
          "### Cov-Lite — \"covenants softened or gone\"\n\nCov-Lite (Covenant-Lite) is a borrower-friendly term structure. Traditional maintenance covenants (periodic financial-ratio tests) are *softened or removed*. Triggers are weak or absent, so the borrower can extend EBITDA add-backs and exercise PIK (Payment-in-Kind) options at will.\n\n*93%* of the institutional leveraged-loan market is Cov-Lite. Upper-middle-market PC (EBITDA $50M+) runs around 30%; mega-deals (>$500M) about 50% lack maintenance covenants. The average across general PC went from ~4% in 2023 to ~21% in 2024-25 — a *fivefold jump* (Proskauer).¹¹\n\n### PIK — \"interest stacked onto principal instead of paid in cash\"\n\nIn a PIK (Payment-in-Kind) structure, the borrower *accrues interest onto principal* rather than paying cash. It helps companies with weak near-term cash flow, but lenders take *delayed realised yield*. Rising PIK shares in PC portfolios across 2024-25 are one driver of BDC redemption pressure.\n\n### EBITDA Add-backs — \"counting future cost savings up front\"\n\nThe most contested line item in LBO lending. *Expected synergies*, *non-recurring costs*, and *cost-out plans* get added back into EBITDA so reported leverage looks lower. Reports in 2024 cited add-backs reaching 30-40% of reported EBITDA on selected deals.\n\n### SOFR — \"the post-LIBOR floating benchmark\"\n\nSOFR (Secured Overnight Financing Rate) is the US floating-rate standard after LIBOR's 2021-23 phase-out. Most PC loans are quoted as *SOFR + 500-700bp spread*. When rates rise, PC yields rise automatically — and so do borrower interest payments. The *rate shock of 2022-23* is the direct cause of PC borrower interest-coverage ratios falling below 1.",
      },
      {
        type: "table",
        table: {
          id: "direct-lending-megadeals",
          title: "Direct Lending 대표 메가딜 (2023-2024)",
          titleEn: "Direct Lending Mega-Deals (2023-2024)",
          headers: ["거래", "연도", "사이즈", "주관 운용사", "비고"],
          headersEn: ["Deal", "Year", "Size", "Lead managers", "Notes"],
          rows: [
            ["Finastra unitranche", "2023", "~$5B", "Blue Owl, Oak Hill, HPS, Sixth Street", "사상 최대 unitranche"],
            ["New Relic ($6.5B LBO)", "2023", "~$2.7B+ unitranche", "Blue Owl, Blackstone, Sixth Street", "Francisco Partners + TPG 인수"],
            ["Cotiviti", "2024", "~$5.5B PC 패키지", "Blackstone 등", "Carlyle 인수금융"],
            ["Squarespace", "2024", "~$2.6B PC 패키지", "Blackstone 등", "Permira 인수금융"],
          ],
          rowsEn: [
            ["Finastra unitranche", "2023", "~$5B", "Blue Owl, Oak Hill, HPS, Sixth Street", "*Largest unitranche ever*"],
            ["New Relic ($6.5B LBO)", "2023", "~$2.7B+ unitranche", "Blue Owl, Blackstone, Sixth Street", "Francisco Partners + TPG buyout"],
            ["Cotiviti", "2024", "~$5.5B PC package", "Blackstone et al.", "Carlyle acquisition finance"],
            ["Squarespace", "2024", "~$2.6B PC package", "Blackstone et al.", "Permira acquisition finance"],
          ],
          highlightRows: [0],
          caption: "Sources: LSTA 2024 Direct Lending Review, Proskauer. Highlight = Finastra, 최초로 PC 컨소시엄이 메가딜 BSL 시장을 직접 대체한 사건.",
          captionEn: "Sources: LSTA 2024 Direct Lending Review, Proskauer. Highlight = Finastra: *the first time a PC consortium directly replaced a mega-deal BSL syndication*.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 5. Distressed Credit + Howard Marks 인용
  // ════════════════════════════════════════════════════════════════
  {
    heading: "5. Distressed Credit, Howard Marks의 시선",
    headingEn: "5. Distressed Credit — Through Howard Marks's Lens",
    blocks: [
      {
        type: "text",
        body:
          "Distressed Credit는 PC AUM의 ~11%로, Direct Lending에 비하면 작음.\n\n그러나 역사적으로 가장 안정적인 수익률을 낸 영역.\n\n1986-2024년 미국 HY(High Yield, 고수익) 채권의 연환산 수익률은 7.83%, 10년 국채 5.14%, HY 평균 디폴트율은 3.5% (Oaktree 자체 정리).¹²\n\n이 영역의 대표 플레이어는 Oaktree Capital Management (Brookfield 산하).\n\n공동 창업자 Howard Marks는 1995년 회사 출범 이후 credit cycle에 대한 가장 영향력 있는 메모를 써온 인물.\n\n그의 2024-25년 메모 두 편이 PC 전체 논쟁의 가장 정직한 framing을 제공.",
        bodyEn:
          "Distressed credit is about 11% of PC AUM — small relative to direct lending, but historically *the most consistent return generator*. From 1986 to 2024, US high-yield (HY) bonds delivered a 7.83% annualised return vs. 5.14% on the 10-year Treasury, with HY's average default rate at 3.5% (Oaktree's own tabulation).¹²\n\nThe defining player here is *Oaktree Capital Management* (now under Brookfield). Co-founder Howard Marks has, since 1995, written the most influential memos in credit. Two of his 2024-25 pieces offer the most honest framing of the PC debate.",
      },
      {
        type: "callout",
        callout: {
          variant: "quote",
          heading: "Howard Marks — \"Gimme Credit\" (2024.10)",
          headingEn: "Howard Marks — \"Gimme Credit\" (Oct 2024)",
          body:
            "\"오늘 신용투자는 매력적이다. 고정수익을 5% + 추가 spread로 가져갈 수 있다. 다만 — yield spread는 이유가 있어서 존재한다. 무위험 자산 대비 약 200-400bp의 추가 수익은 디폴트 위험과 illiquidity 위험에 대한 정직한 보상이다. 누군가가 이 spread를 '과도하다'고 한다면, 그는 진짜 위험을 측정하지 못한 것이다.\"\n\n본 메모는 Oaktree의 매수 권유로도 읽히지만, 동시에 \"credit이 cheap하지는 않다\"는 정직한 인정이기도 함.",
          bodyEn:
            "\"Credit investing is attractive today. We can lock in 5% plus an additional spread. But — *yield spreads are there for a reason*. The 200-400bp premium over risk-free assets is *honest compensation for default risk and illiquidity*. If someone tells you that spread is 'excessive,' they are not measuring the real risk.\"\n\n*— A buy-case in Oaktree's voice, but also a candid admission that credit is not cheap.*",
        },
      },
      {
        type: "callout",
        callout: {
          variant: "quote",
          heading: "Howard Marks — \"What's Going on in Private Credit?\" (2025)",
          headingEn: "Howard Marks — \"What's Going on in Private Credit?\" (2025)",
          body:
            "\"Direct lending이 소프트웨어 LBO에 집중된 점이 우려된다. ~20x EBITDA로 인수된 회사들 — 이는 미래 EBITDA 성장이 반드시 일어나야만 정당화되는 가격이다. AI가 소프트웨어 가치를 disrupt 한다면 — 그리고 그 가능성은 결코 0이 아닌데 — PC 채권자가 가장 먼저 손실을 본다.\"\n\nMarks는 systemic risk라 부르지 않음.\n\nconcentrated risk라고 부름.\n\n차이가 중요함.",
          bodyEn:
            "\"What worries me is direct lending's *concentration in software LBOs* — companies bought at ~20x EBITDA, a price that only makes sense if future EBITDA growth *actually materialises*. If AI disrupts software value — and the probability is far from zero — PC creditors take the first loss.\"\n\n*— Marks does not call this systemic risk. He calls it concentrated risk. The distinction matters.*",
        },
      },
      {
        type: "callout",
        callout: {
          variant: "quote",
          heading: "Howard Marks — CNBC (2025.11)",
          headingEn: "Howard Marks — CNBC (Nov 2025)",
          body:
            "\"credit carelessness는 있다. 그러나 systemic은 아니다.\"\n\n이 한 문장이 Marks의 최종 입장.\n\n2024년 \"Gimme Credit\"의 buy-case와 2025년 software LBO 우려를 양손에 들고, 결론은 \"방심은 보이지만 시스템은 안전하다\"로 정리됨.\n\nPC 시장의 가장 영향력 있는 운용사가 경계는 하되 panic하지 않는다는 입장을 명확히 한 셈.¹³",
          bodyEn:
            "\"There is credit carelessness. But it is not systemic.\"\n\nThat single sentence is Marks's *final stance*. Holding the 2024 \"Gimme Credit\" buy-case in one hand and the 2025 software-LBO concern in the other, he lands on: *carelessness yes, system no*. The most influential voice in credit has chosen to stay alert without panicking.¹³",
        },
      },
      {
        type: "text",
        body:
          "Distressed에서 PC와 가장 가까운 두 가지 실행 도구를 정리.\n\nDIP financing (Debtor-in-Possession, 채무자유지대출)은 챕터 11 진입 기업에 신규로 빌려주는 대출.\n\n도산 절차 안에서 최우선 변제 지위를 받음.\n\n2024년 WeWork DIP (Goldman Sachs 주선, Cupar Grimmond 등)가 대표 사례.\n\nPC 운용사 입장에서는 다른 채권자가 다 손실을 본 다음에도 자기 자본은 회수할 수 있는 가장 안전한 distressed 도구.\n\nLoan-to-Own은 부실 회사의 채권을 시장에서 매입한 다음 debt-for-equity swap으로 지분을 확보하는 전략.\n\n2024년 Vista의 Pluralsight가 정확히 이 패턴, Blue Owl·Ares·Golub·Oaktree·Benefit Street·Goldman·BlackRock이 채권자 컨소시엄으로 회사를 인수.\n\nPE가 손실을 보고, PC가 회사를 가짐.\n\n(→ ✓13)",
        bodyEn:
          "Two distressed tools sit closest to PC.\n\n*DIP financing* (Debtor-in-Possession) is new lending to a borrower already in Chapter 11. It carries *priority over all pre-petition claims*. The 2024 *WeWork DIP* (Goldman-led, with Cupar Grimmond and others) is the textbook case. For a PC manager, DIP is the *safest distressed instrument* — capital can be recovered even after every other creditor takes a haircut.\n\n*Loan-to-own* is the strategy of buying a distressed company's debt and then forcing a *debt-for-equity swap* to take the keys. The 2024 Vista *Pluralsight* outcome was exactly this — a lender consortium of Blue Owl, Ares, Golub, Oaktree, Benefit Street, Goldman, and BlackRock ended up owning the business. PE took the loss, PC took the company. (→ ✓13)",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 6. Mezzanine
  // ════════════════════════════════════════════════════════════════
  {
    heading: "6. Mezzanine, 사라지지는 않았지만 줄어든 한 자리",
    headingEn: "6. Mezzanine — Shrunken, But Not Gone",
    blocks: [
      {
        type: "text",
        body:
          "Mezzanine은 senior debt와 equity 사이의 후순위 자본.\n\nCash interest + PIK 합쳐 yield 12-15%, equity warrant(주식 인수권)를 동반하는 경우가 많음.\n\n과거 미국 LBO의 25%를 차지했으나 unitranche 부상으로 현재 PC AUM의 ~10% 수준까지 떨어짐.¹⁴\n\nMezz가 줄어든 이유는 unitranche가 더 단순하기 때문.\n\n차주가 senior + mezz 두 트랜치를 협상하는 대신 unitranche 하나로 모든 걸 끝냄.\n\nmezz 운용사들은 점차 junior 포지션과 growth financing으로 이동함, 좀 더 equity-like한 리스크.",
        bodyEn:
          "Mezzanine sits *subordinated* between senior debt and equity. Cash plus PIK coupons usually yield 12-15%, often packaged with equity warrants. It once made up about 25% of US LBOs, but the rise of the unitranche has shrunk it to roughly 10% of PC AUM today.¹⁴\n\nThe reason is simple: *the unitranche is simpler*. Borrowers no longer negotiate a senior plus mezz stack — one tranche does the whole job. Many mezz managers have migrated to *junior positions* and *growth financing*, which carry more equity-like risk.",
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 7. ABF
  // ════════════════════════════════════════════════════════════════
  {
    heading: "7. ABF, Apollo×Athene 모델의 본체",
    headingEn: "7. ABF — The Core of the Apollo × Athene Model",
    blocks: [
      {
        type: "text",
        body:
          "ABF(Asset-Based Finance)는 특정 자산 풀을 담보·기초자산으로 구조화한 대출.\n\n자동차 리스, 항공기 리스, 매출채권, 소비자 채권, 부동산 임대료, 로열티, 회사 자체의 신용이 아니라 자산의 현금흐름에 기반.\n\nApollo의 추산에 따르면 광의 ABF 시장 규모는 약 $5-6T (이 중 PC 펀드 운용분은 약 $300-400B).\n\nApollo는 자체 분류상 \"Direct Origination + ABF + Opportunistic + Multi-credit\" 합계 $749.2B (2024 Q4, IR).\n\nMarc Rowan은 ABF 시장이 2030년 $40T까지 성장한다는 자체 outlook을 여러 차례 제시함, 매우 공격적인 숫자.¹⁵",
        bodyEn:
          "ABF (Asset-Based Finance) is lending against a *defined pool of assets*: auto leases, aircraft leases, receivables, consumer loans, real-estate rents, royalties. Repayment depends on *the asset's cash flow*, not on the operating company's credit.\n\nApollo estimates the broad ABF market at $5-6T; PC funds run about $300-400B of it. Apollo's own \"Direct Origination + ABF + Opportunistic + Multi-credit\" tally is $749.2B (Q4 2024, IR). Marc Rowan has repeatedly forecast that ABF could reach *$40T by 2030* — an *aggressive* number.¹⁵",
      },
      {
        type: "chart",
        chart: {
          id: "abf-growth",
          title: "Chart 4 — ABF 시장 규모 추이 ($T, Apollo 정의)",
          titleEn: "Chart 4 — Apollo-Defined ABF Market Size ($T)",
          caption: "Source: Apollo IR / Marc Rowan outlook. 광의 정의 (auto·aviation·consumer·receivables 포함). 2030 $40T는 Apollo 자체 outlook으로 매우 공격적, PC 펀드 보유분은 시장 전체의 ~10%대.",
          captionEn: "Source: Apollo IR / Marc Rowan outlook. Broad definition (autos, aviation, consumer, receivables). The 2030 $40T figure is *highly aggressive* — PC funds hold roughly 10% of the broad market.",
          data: [
            { year: 2020, market: 4.5 },
            { year: 2021, market: 4.8 },
            { year: 2022, market: 5.1 },
            { year: 2023, market: 5.5 },
            { year: 2024, market: 6.0 },
            { year: 2025, market: 6.5, projected: true },
            { year: 2030, market: 40.0, projected: true },
          ],
        },
      },
      {
        type: "table",
        table: {
          id: "abf-mega-deals",
          title: "ABF 대표 거래 (2023-2024)",
          titleEn: "ABF Mega-Deals (2023-2024)",
          headers: ["거래", "연도", "사이즈", "구조", "운용사"],
          headersEn: ["Deal", "Year", "Size", "Structure", "Manager"],
          rows: [
            ["Apollo × PayPal BNPL", "2023", "최대 ~$40B 약정", "Forward Flow 매입", "Apollo (Athene)"],
            ["Apollo × Intel 아일랜드 fab JV", "2024", "$11B financing", "JV 구조 (ABF + equity)", "Apollo"],
            ["KKR × Discover 학자금", "2024.7", "~$10.1B", "포트폴리오 매입", "KKR"],
            ["Apollo × Air France-KLM", "2024", "(비공개)", "항공기 리스 financing", "Apollo"],
            ["Blue Owl Atalaya 인수", "2024", "(플랫폼)", "ABF 운용 라이선스", "Blue Owl"],
          ],
          rowsEn: [
            ["Apollo × PayPal BNPL", "2023", "Up to ~$40B commitment", "Forward-flow purchase", "Apollo (Athene)"],
            ["Apollo × Intel Ireland fab JV", "2024", "$11B financing", "JV structure (ABF + equity)", "Apollo"],
            ["KKR × Discover student loans", "Jul 2024", "~$10.1B", "Portfolio purchase", "KKR"],
            ["Apollo × Air France-KLM", "2024", "(undisclosed)", "Aircraft-lease financing", "Apollo"],
            ["Blue Owl acquires Atalaya", "2024", "(platform)", "ABF origination license", "Blue Owl"],
          ],
          caption: "Sources: Apollo IR, KKR IR, Blue Owl IR. SRT (Significant Risk Transfer) 거래도 ABF의 일부, 은행이 자기 portfolio risk를 PC에 양도하는 구조로 2023-24년 급증.",
          captionEn: "Sources: Apollo IR, KKR IR, Blue Owl IR. *SRT* (Significant Risk Transfer) trades — banks transferring portfolio risk to PC — also belong here; volumes spiked in 2023-24.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 8. NAV Finance
  // ════════════════════════════════════════════════════════════════
  {
    heading: "8. NAV Finance, 가장 빠르게 자라고 가장 논란이 된 한 자리",
    headingEn: "8. NAV Finance — Fastest-Growing, Most Contested",
    blocks: [
      {
        type: "text",
        body:
          "NAV Finance는 PE 펀드의 NAV(보유 portfolio 자산 가치)를 담보로 한 fund-level 대출.\n\n약정금(uncalled capital)이 아닌 이미 투자된 자본에 대한 leverage라는 점이 핵심.\n\n2024년 평균 per-lender deal volume이 €800M+, 전년 €330M 대비 +142% (Rede Partners 2025 survey).\n\n17Capital은 2025년 deployment ~$70B, 2030년 ~$145B 전망을 제시함, TAM(Total Addressable Market)은 ~$700B 추정.¹⁶\n\n표준 LTV(Loan-to-Value)는 NAV 대비 10-25%.\n\ncovenant는 보통 \"NAV가 loan balance의 3배 이상 유지\".\n\n선두 플레이어는 17Capital(Brookfield 산하), Pemberton, Whitehorse Liquidity Partners, Ares NAV Lending, Hark Capital, Goldman PE Financing, KKR Capital Markets, Blackstone GSO.",
        bodyEn:
          "NAV Finance is *a fund-level loan secured by the PE fund's NAV (its invested-portfolio value)*. The key point: leverage is on *capital already deployed*, not on uncalled commitments.\n\nIn 2024, average per-lender deal volume hit €800M+, up from €330M the prior year — +142% (Rede Partners 2025 survey). 17Capital projects ~$70B of deployment in 2025 and ~$145B by 2030, on a $700B TAM (Total Addressable Market).¹⁶\n\nStandard LTV (Loan-to-Value) sits at 10-25% of NAV; covenants typically require NAV to stay above 3x the loan balance. Lead players include 17Capital (Brookfield), Pemberton, Whitehorse Liquidity Partners, Ares NAV Lending, Hark Capital, Goldman PE Financing, KKR Capital Markets, and Blackstone GSO.",
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "Vista Outcomes Fund 논란",
          headingEn: "The Vista Outcomes Fund Controversy",
          body:
            "Vista Equity Partners는 Vista Outcomes Fund의 NAV를 담보로 대출을 받아 LP에게 배당(dividend recap)을 실행함.\n\n이미 손실 위험이 있는 portfolio에 leverage를 추가해 LP 입장에서 risk-adjusted return을 악화시킨다는 비판이 거셌음.\n\nILPA(Institutional Limited Partners Association, 기관 LP 협회)는 2024년 NAV financing 가이드라인을 발간하며 LP 사전 동의 필수를 권고.\n\n이 한 사건이 NAV finance 전체에 LP 불신이라는 그림자를 남김.¹⁷",
          bodyEn:
            "Vista Equity Partners drew on the Vista Outcomes Fund's NAV to fund *a dividend recap to LPs*. Adding leverage to a portfolio that was already under stress *worsened the LP-level risk-adjusted return* — and the criticism was loud. The ILPA (Institutional Limited Partners Association) issued NAV-financing guidelines in 2024, recommending *prior LP consent*. The episode left a shadow of *LP distrust* over NAV finance more broadly.¹⁷",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 9. CLO Equity
  // ════════════════════════════════════════════════════════════════
  {
    heading: "9. CLO Equity, 빌라의 가장 아래층",
    headingEn: "9. CLO Equity — The Ground Floor of the Building",
    blocks: [
      {
        type: "text",
        body:
          "CLO(Collateralized Loan Obligation, 대출담보부증권)는 BSL 시장의 일부지만 일부 PC 운용사가 CLO equity tranche를 PC 펀드에 편입함.\n\nCLO를 6층짜리 빌라에 비유하면, 1층(AAA)부터 6층(equity)까지 손실 부담 순서가 정해짐.\n\n6층(equity)이 맨 먼저 손실을 흡수하는 대신 가장 높은 수익률을 가져감.\n\n잘 굴러갈 때는 연 15-20% IRR, 디폴트가 늘면 0이 될 수도 있음.\n\n2024년 미국 CLO 신규 발행은 약 $200B (LSTA).\n\nrefinancing·reset 활동이 활발했음.\n\nApollo·Blackstone·Ares·KKR 모두 CLO 운용 라이선스를 보유.¹⁸",
        bodyEn:
          "A CLO (Collateralized Loan Obligation) is technically part of the *BSL market*, but some PC managers wrap CLO-equity tranches into their PC funds. Think of a CLO as *a six-storey building*: from floor 1 (AAA) up to floor 6 (equity), each layer carries a defined loss order. The equity floor *absorbs losses first* in exchange for *the highest expected yield* — 15-20% IRR in good years, zero if defaults stack up.\n\nUS CLO issuance reached about $200B in 2024 (LSTA), with active refinancing and reset volumes. Apollo, Blackstone, Ares, and KKR all hold CLO-management licenses.¹⁸",
      },
    ],
  },
];
