/**
 * Market Story 개념 데이터.
 * 각 개념은 KO/EN 이중 언어 지원.
 */

export type ConceptSection = {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
};

export type KeyTerm = {
  term: string;
  termEn: string;
  definition: string;
  definitionEn: string;
};

export type MarketConcept = {
  slug: string;
  title: string;
  titleEn: string;
  category: "dcm" | "ecm" | "st" | "structure";
  categoryLabel: string;
  categoryLabelEn: string;
  excerpt: string;
  excerptEn: string;
  readingMinutes: number;
  tags: string[];
  sections: ConceptSection[];
  keyTerms: KeyTerm[];
  relatedSlugs: string[];
};

// ── 카테고리 색상 매핑 ────────────────────────────────────────────────────
export const CATEGORY_COLOR: Record<
  MarketConcept["category"],
  { bg: string; fg: string; border: string }
> = {
  dcm:       { bg: "bg-teal-50",   fg: "text-teal-700",   border: "border-teal-200" },
  ecm:       { bg: "bg-blue-50",   fg: "text-blue-700",   border: "border-blue-200" },
  st:        { bg: "bg-violet-50", fg: "text-violet-700", border: "border-violet-200" },
  structure: { bg: "bg-orange-50", fg: "text-orange-700", border: "border-orange-200" },
};

// ── 개념 데이터 ──────────────────────────────────────────────────────────
export const ALL_CONCEPTS: MarketConcept[] = [
  // ── 1. DCM ─────────────────────────────────────────────────────────────
  {
    slug: "dcm",
    title: "DCM — 채권 자본시장의 모든 것",
    titleEn: "DCM — Debt Capital Markets Explained",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM(Debt Capital Markets)은 기업·정부·금융기관이 채권을 발행해 자금을 조달하는 시장입니다. IB의 DCM 부서는 발행사가 최적의 조건으로 채권을 공모·사모 발행할 수 있도록 구조 설계, 투자자 마케팅, 신디케이션을 지원합니다.",
    excerptEn:
      "DCM (Debt Capital Markets) is the market where corporations, governments, and financial institutions raise capital by issuing bonds. The DCM desk at an investment bank structures, markets, and syndicates debt offerings to help issuers raise funds at optimal terms.",
    readingMinutes: 8,
    tags: ["DCM", "채권", "회사채", "IG", "HY", "ABS", "CLO", "그린본드", "로드쇼", "북빌딩"],
    sections: [
      {
        heading: "DCM이란 무엇인가",
        headingEn: "What Is DCM?",
        body: "DCM(채권 자본시장)은 자금이 필요한 발행사(기업·정부·금융기관)가 채권이라는 차입 증권을 발행해 기관투자자에게 매각하는 1차 시장을 의미합니다. ECM(주식 자본시장)이 지분 희석을 수반하는 반면, DCM은 만기·이자율이 확정된 부채성 자금 조달 수단입니다. IB의 DCM 팀은 발행 구조 설계(만기·금리·담보 등), 신용 스토리 작성, 로드쇼 준비, 주문서 작성(오더북 빌딩), 가격 결정(pricing), 최종 배정(allotment)까지 전 과정을 주관합니다.",
        bodyEn:
          "DCM (Debt Capital Markets) refers to the primary market where issuers — corporations, governments, and financial institutions — raise capital by issuing debt securities (bonds) and selling them to institutional investors. Unlike ECM which involves equity dilution, DCM offers fixed-term debt financing with defined coupons and maturities. The DCM team at an investment bank manages the entire process: structuring the deal, crafting the credit story, preparing roadshows, building the orderbook, pricing the bonds, and final allocation.",
      },
      {
        heading: "채권의 종류: IG, HY, ABS, CLO",
        headingEn: "Bond Types: IG, HY, ABS, CLO",
        body: "투자등급(IG, Investment Grade) 채권은 신용등급 BBB- 이상인 기업이 발행하며 낮은 금리로 대규모 자금 조달이 가능합니다. 고수익(HY, High Yield) 채권은 BB+ 이하 기업이 발행하며 높은 쿠폰 대신 재무 covenants가 강화됩니다. ABS(자산유동화증권)는 모기지·카드채권 등 자산 풀을 담보로 발행하며, CLO(대출채권담보증권)는 레버리지드 론 풀을 트랜치별로 구조화한 상품입니다. 그린본드·소셜본드는 지속가능성 기준을 충족하는 프로젝트에 자금을 배분합니다.",
        bodyEn:
          "Investment Grade (IG) bonds are issued by companies rated BBB- or above, enabling large-scale fundraising at lower rates. High Yield (HY) bonds, issued by BB+ or lower rated issuers, offer higher coupons but come with tighter financial covenants. ABS (Asset-Backed Securities) are backed by pools of assets like mortgages or credit card receivables, while CLOs (Collateralized Loan Obligations) are structured products backed by leveraged loan pools, tranched by risk. Green and social bonds earmark proceeds for ESG-qualifying projects.",
      },
      {
        heading: "DCM 딜 프로세스: 로드쇼에서 클로징까지",
        headingEn: "DCM Deal Process: Roadshow to Closing",
        body: "①만다테 확보 → ②구조 설계(만기·통화·규모 결정) → ③신용평가기관 미팅 → ④인수단 구성(bookrunner·co-manager) → ⑤IPT(Initial Price Talk) 공개 → ⑥투자자 로드쇼 또는 전화 릴레이 → ⑦오더북 빌딩(수요 집계) → ⑧가격 결정 및 압축(tightening) → ⑨최종 배정 → ⑩settlement(T+2 또는 T+5)·상장 순서로 진행됩니다. 오버부킹 배수가 높을수록 가격을 더 압축할 수 있어 발행사에 유리합니다.",
        bodyEn:
          "The typical DCM process: ①Mandate win → ②Structure design (tenor, currency, size) → ③Rating agency meetings → ④Syndicate formation (bookrunner, co-managers) → ⑤Announce Initial Price Talk (IPT) → ⑥Investor roadshow or phone relay → ⑦Orderbook building (demand aggregation) → ⑧Pricing and tightening → ⑨Final allocation → ⑩Settlement (T+2 or T+5) and listing. A higher oversubscription multiple allows the issuer to tighten spread, resulting in lower borrowing costs.",
      },
      {
        heading: "DCM과 ECM의 차이: IB에서의 역할 분리",
        headingEn: "DCM vs ECM: Role Split Within IB",
        body: "DCM과 ECM은 모두 자본시장부(Capital Markets) 소속이지만 커버리지 대상과 전문성이 다릅니다. DCM은 채권 인수·신디케이션을 담당하며 신용 분석과 금리·스프레드 리스크 이해가 핵심입니다. ECM은 주식 공모 주관, IPO 가치평가, 투자자 배정을 담당합니다. DCM은 은행·보험사·연기금 등 채권형 투자자를 상대하고, ECM은 뮤추얼펀드·헤지펀드 등 주식형 투자자를 상대합니다. 두 팀은 차이니즈 월로 구분되어 각자의 발행 정보를 S&T나 리서치와 공유하지 않습니다.",
        bodyEn:
          "DCM and ECM are both part of the Capital Markets division but differ in coverage and expertise. DCM handles bond underwriting and syndication, requiring expertise in credit analysis and interest rate/spread risk. ECM manages equity offerings, IPO valuation, and investor allocation. DCM deals with fixed-income investors (banks, insurance companies, pension funds), while ECM targets equity investors (mutual funds, hedge funds). Both teams are separated by Chinese Walls from S&T and research to prevent information leakage.",
      },
    ],
    keyTerms: [
      {
        term: "북런너 (Bookrunner)",
        termEn: "Bookrunner",
        definition:
          "채권 발행에서 오더북(투자자 주문 집계)을 주관하는 리드 IB. 투자자 마케팅, 가격 결정, 최종 배정을 총괄하며 인수 수수료(underwriting fee)의 가장 큰 몫을 가져갑니다.",
        definitionEn:
          "The lead investment bank responsible for managing the orderbook (aggregating investor orders) in a bond issuance. The bookrunner leads investor marketing, pricing, and allocation, and receives the largest share of underwriting fees.",
      },
      {
        term: "스프레드 (Spread)",
        termEn: "Spread",
        definition:
          "채권 수익률과 벤치마크 금리(통상 국채·OIS) 간의 차이(bps 단위). 발행사 신용 위험과 유동성 프리미엄을 반영하며, 스프레드가 좁을수록 발행사에 유리합니다.",
        definitionEn:
          "The difference (in basis points) between a bond's yield and a benchmark rate (typically government bonds or OIS). Reflects the issuer's credit risk and liquidity premium; a tighter spread means lower borrowing cost for the issuer.",
      },
      {
        term: "코버넌트 (Covenant)",
        termEn: "Covenant",
        definition:
          "채권 발행 시 투자자 보호를 위해 발행사가 약정하는 재무·행동 조건. 예) 부채비율 200% 유지, 추가 담보 제공 금지. 위반 시 기한이익상실(cross-default) 조항이 발동될 수 있습니다.",
        definitionEn:
          "Financial and operational conditions an issuer agrees to maintain to protect bondholders. Examples include maintaining debt/equity ratios or restrictions on additional pledges. Violation can trigger a cross-default clause.",
      },
      {
        term: "IPT (Initial Price Talk)",
        termEn: "Initial Price Talk (IPT)",
        definition:
          "로드쇼 전후로 발표하는 초기 가격 가이던스(스프레드 또는 쿠폰 범위). 투자자 수요를 탐색하는 역할을 하며, 오버부킹이 강하면 실제 가격은 IPT보다 타이트하게 결정됩니다.",
        definitionEn:
          "The initial pricing guidance (spread or coupon range) announced before or during a roadshow to gauge investor demand. If demand is strong (oversubscribed), the final price is typically tighter (lower yield) than the IPT.",
      },
      {
        term: "CLO (대출채권담보증권)",
        termEn: "Collateralized Loan Obligation (CLO)",
        definition:
          "레버리지드 론 풀을 기초자산으로 AAA부터 에쿼티 트랜치까지 여러 등급으로 구조화한 채권 상품. 선순위 트랜치는 낮은 수익률·높은 안전성을 제공하고, 에쿼티 트랜치는 높은 수익률 대신 손실을 먼저 부담합니다.",
        definitionEn:
          "A structured debt product backed by a pool of leveraged loans, tranched from AAA to equity. Senior tranches offer lower yield with higher safety; equity tranches absorb first losses but receive excess spread.",
      },
    ],
    relatedSlugs: ["ecm", "syndication"],
  },

  // ── 2. ECM ─────────────────────────────────────────────────────────────
  {
    slug: "ecm",
    title: "ECM — 주식 자본시장과 IPO의 모든 것",
    titleEn: "ECM — Equity Capital Markets and IPO Explained",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "ECM(Equity Capital Markets)은 기업이 주식·전환사채 등 지분성 증권을 발행해 자금을 조달하는 시장입니다. IPO 주관, 유상증자, CB/BW 발행부터 그린슈 옵션, 록업 관리까지 주식 공모의 전 과정을 다룹니다.",
    excerptEn:
      "ECM (Equity Capital Markets) is the market where companies raise capital by issuing equity or equity-linked securities. It covers the full lifecycle of equity offerings — from IPO underwriting and follow-on issuances to convertible bonds, greenshoe options, and lock-up management.",
    readingMinutes: 8,
    tags: ["ECM", "IPO", "유상증자", "CB", "BW", "SPAC", "그린슈", "록업", "북빌딩"],
    sections: [
      {
        heading: "ECM의 역할: 지분 자금 조달의 전 과정",
        headingEn: "ECM's Role: Managing the Full Equity Raising Cycle",
        body: "ECM 부서는 기업의 지분성 자금 조달을 end-to-end로 지원합니다. 주요 업무는 ①IPO 구조 설계 및 기업공개 주관 ②유상증자(follow-on offering) ③전환사채(CB)·신주인수권부사채(BW) 발행 ④SPAC 상장 주관 ⑤블록세일(block trade) 등입니다. ECM 팀은 발행사의 지분 희석 최소화와 공모가 극대화를 동시에 달성하기 위해 수요예측(book building) 과정에서 기관투자자 수요를 면밀히 관리합니다.",
        bodyEn:
          "The ECM team manages all equity capital raising activities end-to-end. Core functions include: ①IPO structuring and underwriting ②Follow-on (secondary) offerings ③Convertible bond (CB) and warrant bond (BW) issuances ④SPAC listings ⑤Block trades. ECM balances minimizing dilution for the issuer while maximizing the offering price by carefully managing institutional demand during the bookbuilding process.",
      },
      {
        heading: "IPO 프로세스: 선발부터 상장까지",
        headingEn: "IPO Process: From Selection to Listing",
        body: "①주관사 선정(bake-off) → ②실사(due diligence) 및 증권신고서 작성 → ③S-1 또는 투자설명서 제출 → ④기관 수요예측(roadshow·book building, 통상 2주) → ⑤공모가 확정 및 배정 → ⑥상장일 거래 시작 → ⑦록업 기간(통상 6개월) 관리 순서로 진행됩니다. 주관사는 발행사 지분의 일부를 직접 인수(firm commitment underwriting)해 발행 위험을 부담하거나, 최선형(best effort) 방식으로 주관만 담당할 수 있습니다.",
        bodyEn:
          "①Underwriter selection (bake-off) → ②Due diligence and prospectus drafting → ③S-1 or IPO prospectus filing → ④Institutional roadshow and bookbuilding (typically 2 weeks) → ⑤Pricing and allocation → ⑥First-day trading → ⑦Lock-up period management (typically 6 months). Underwriters can take on firm commitment underwriting (assuming issuance risk) or act as best-effort placement agents.",
      },
      {
        heading: "전환사채(CB)와 신주인수권부사채(BW)",
        headingEn: "Convertible Bonds (CB) and Warrant Bonds (BW)",
        body: "CB(전환사채)는 채권이지만 특정 조건에서 주식으로 전환할 수 있는 복합 증권입니다. 쿠폰이 낮은 대신 투자자는 주가 상승 시 전환권 행사로 추가 수익을 얻습니다. BW(신주인수권부사채)는 채권에 신주 인수권(warrant)이 분리 가능한 형태로 부착된 상품입니다. 두 상품 모두 발행사 입장에서는 낮은 금리로 자금을 조달하면서 잠재적 희석을 감수하는 트레이드오프가 있으며, 주가 변동성이 높을수록 전환 프리미엄이 높게 설정됩니다.",
        bodyEn:
          "A convertible bond (CB) is a hybrid security that pays a lower coupon than a straight bond but gives investors the right to convert into shares if the stock rises above the conversion price. A warrant bond (BW) attaches a detachable warrant to a bond, allowing separate trading. Both instruments let issuers raise funds at below-market rates in exchange for potential dilution — a trade-off that becomes more attractive when stock price volatility is high.",
      },
      {
        heading: "그린슈 옵션과 록업: IPO 이후 안정화 메커니즘",
        headingEn: "Greenshoe Option and Lock-up: Post-IPO Stabilization",
        body: "그린슈(greenshoe) 옵션은 주관사가 공모 물량의 최대 15%를 초과 배정한 뒤, 주가가 공모가 아래로 하락하면 시장에서 매입해 안정화(stabilization)하는 메커니즘입니다. 주가가 공모가 이상이면 발행사에서 추가 신주를 받아 초과 배정분을 커버합니다. 록업(lock-up)은 기존 주주·임원이 상장 후 일정 기간(보통 90~180일) 주식을 매도하지 못하도록 제한해 공모 직후 시장 충격을 방지합니다.",
        bodyEn:
          "The greenshoe (over-allotment) option allows underwriters to allocate up to 15% more shares than the offering size. If the stock falls below the IPO price, they buy shares in the open market to stabilize prices. If the stock trades above the IPO price, the issuer issues additional shares to cover the over-allotment. A lock-up agreement restricts existing shareholders and insiders from selling shares for a set period (usually 90–180 days) after the IPO, preventing an immediate sell-off.",
      },
    ],
    keyTerms: [
      {
        term: "수요예측 (Book Building)",
        termEn: "Book Building",
        definition:
          "IPO 또는 유상증자 시 기관투자자의 청약 가격·수량 희망을 수집해 공모가를 결정하는 과정. 수요가 많을수록 공모가 밴드 상단 또는 상단 초과에서 가격이 결정됩니다.",
        definitionEn:
          "The process of collecting bids from institutional investors (price and quantity) to determine the offering price. Strong demand leads to pricing at or above the top of the price band.",
      },
      {
        term: "오버행 (Overhang)",
        termEn: "Overhang",
        definition:
          "상장 후 매도 가능한 미유통 주식(록업 해제 예정 물량 등)이 잠재적 매도 압력으로 시장에 인식되는 현상. 오버행이 클수록 주가 상승이 제한됩니다.",
        definitionEn:
          "The potential selling pressure from shares that are not yet in free float (e.g., locked-up shares nearing expiry). A large overhang suppresses share price appreciation as investors anticipate future supply.",
      },
      {
        term: "공모가 밴드 (Price Range)",
        termEn: "Price Range (IPO)",
        definition:
          "수요예측 전 발행사·주관사가 제시하는 공모 예상 가격 범위. 시장 상황과 수요예측 결과에 따라 최종 공모가는 밴드 상단, 하단, 또는 밴드 외에서 결정될 수 있습니다.",
        definitionEn:
          "The preliminary price range set by the issuer and underwriter before bookbuilding. The final IPO price is determined based on market conditions and bookbuilding results, and may be set at, above, or below the range.",
      },
      {
        term: "딜루션 (Dilution)",
        termEn: "Dilution",
        definition:
          "신주 발행으로 인해 기존 주주의 지분율이 낮아지는 현상. 유상증자·CB 전환·스톡옵션 행사 등으로 발생하며, EPS(주당순이익) 희석으로 직결됩니다.",
        definitionEn:
          "The reduction in existing shareholders' ownership percentage when new shares are issued. Occurs through follow-on offerings, CB conversions, or stock option exercises, directly reducing EPS.",
      },
      {
        term: "SPAC (기업인수목적회사)",
        termEn: "SPAC (Special Purpose Acquisition Company)",
        definition:
          "사업 실체 없이 인수 목적으로만 상장하는 빈 껍데기 회사(blank check company). 통상 24개월 내에 비상장 기업과 합병해 우회상장(de-SPAC)을 완성합니다. IPO 대안으로 2020~2021년 크게 부상했습니다.",
        definitionEn:
          "A blank check company that IPOs with no operating business, raising capital solely to acquire a private company. The SPAC typically has 24 months to complete a merger (de-SPAC), providing an alternative IPO route for target companies. Surged in popularity in 2020–2021.",
      },
    ],
    relatedSlugs: ["dcm", "syndication"],
  },

  // ── 3. S&T ────────────────────────────────────────────────────────────
  {
    slug: "st",
    title: "S&T — 세일즈 & 트레이딩 완전 해부",
    titleEn: "S&T — Sales & Trading Explained",
    category: "st",
    categoryLabel: "S&T",
    categoryLabelEn: "S&T",
    excerpt:
      "S&T(세일즈 & 트레이딩)는 IB에서 금융 상품을 기관 고객에게 판매(Sales)하고 시장에서 직접 매매(Trading)하는 부서입니다. FICC와 에쿼티로 나뉘며, 마켓메이킹·리스크 관리·알고 트레이딩이 핵심 기능입니다.",
    excerptEn:
      "S&T (Sales & Trading) is the division of an investment bank that sells financial products to institutional clients (Sales) and trades securities in the market (Trading). Divided into FICC and Equity, its core functions include market making, risk management, and algorithmic trading.",
    readingMinutes: 7,
    tags: ["S&T", "세일즈", "트레이딩", "FICC", "마켓메이킹", "알고트레이딩", "bid-ask", "DMA", "리스크관리"],
    sections: [
      {
        heading: "세일즈와 트레이딩: 역할의 차이",
        headingEn: "Sales vs. Trading: Distinct Roles",
        body: "세일즈(Sales)는 기관투자자(펀드·연기금·보험사 등)와의 관계를 관리하며 트레이딩 데스크가 제시하는 가격으로 거래를 성사시킵니다. 고객의 투자 아이디어와 리서치 정보를 전달하고, 주문을 트레이더에게 연결합니다. 트레이딩(Trading)은 자기자본 또는 고객 주문을 위해 직접 포지션을 취하고 위험을 관리합니다. 마켓메이커 트레이더는 bid(매입)와 ask(매도) 가격을 동시에 제시해 시장 유동성을 공급하고 spread에서 수익을 얻습니다.",
        bodyEn:
          "Sales manages relationships with institutional clients (funds, pension funds, insurance companies) and facilitates trades at prices quoted by the trading desk. Sales reps relay investment ideas and research to clients and route orders to traders. Trading takes direct positions using the firm's capital or for client orders, managing market risk. Market-making traders quote both bid (buy) and ask (sell) prices simultaneously, providing liquidity and earning the bid-ask spread.",
      },
      {
        heading: "FICC vs 에쿼티: S&T의 양대 축",
        headingEn: "FICC vs. Equity: The Two Pillars of S&T",
        body: "FICC(Fixed Income, Currencies & Commodities)는 채권·외환·원자재·금리 파생상품·신용 파생상품 등을 다룹니다. 금리 변동에 민감하며 중앙은행 정책, 매크로 지표 분석이 핵심입니다. 에쿼티(Equity)는 주식·ETF·주식 파생상품(옵션·선물)을 다루며, 개별 기업 분석과 시장 모멘텀이 중요합니다. ECM에서 공모된 주식은 S&T 에쿼티 데스크를 통해 2차 시장에서 거래되고, DCM에서 발행된 채권은 FICC 데스크에서 유통됩니다.",
        bodyEn:
          "FICC (Fixed Income, Currencies & Commodities) covers bonds, foreign exchange, commodities, rates derivatives, and credit derivatives. It is sensitive to interest rate movements and requires macro analysis. The Equity desk handles stocks, ETFs, and equity derivatives (options, futures), where single-stock analysis and market momentum drive alpha. Shares issued via ECM trade through the Equity S&T desk in secondary markets, while bonds issued via DCM flow through the FICC desk.",
      },
      {
        heading: "마켓메이킹과 Bid-Ask Spread",
        headingEn: "Market Making and the Bid-Ask Spread",
        body: "마켓메이커는 특정 증권에 대해 항상 매입(bid)·매도(ask) 가격을 동시에 제시할 의무를 지며, 그 차이(spread)가 주된 수익원입니다. 유동성이 낮거나 변동성이 높을수록 spread가 벌어져 마켓메이커의 수익이 증가하지만 재고 위험도 높아집니다. DMA(Direct Market Access)는 기관투자자가 중개인 없이 거래소에 직접 주문을 넣는 방식으로, 세일즈 데스크를 거치지 않아 거래 비용이 낮습니다. 알고리즘 트레이딩은 사전 설정 규칙으로 대량 주문을 TWAP·VWAP 등 방식으로 자동 실행합니다.",
        bodyEn:
          "A market maker continuously quotes both bid (buy) and ask (sell) prices for a security, earning the spread between them. Wider spreads in illiquid or volatile markets increase revenue but also raise inventory risk. DMA (Direct Market Access) lets institutional investors route orders directly to exchanges without a sales intermediary, reducing transaction costs. Algorithmic trading automatically executes large orders using pre-set rules (TWAP, VWAP, etc.) to minimize market impact.",
      },
      {
        heading: "S&T의 규제 환경: 볼커룰과 바젤 III",
        headingEn: "S&T Regulatory Environment: Volcker Rule and Basel III",
        body: "2008년 금융위기 이후 미국 도드-프랭크법의 볼커룰(Volcker Rule)은 은행의 자기계정거래(proprietary trading)를 금지해 S&T의 수익 구조를 크게 바꿔놓았습니다. 은행은 고객 마켓메이킹·헤징 목적 외 자기자본으로 직접 투자하는 행위가 제한됩니다. 바젤 III는 시장 위험에 대한 자본 요구 기준을 강화해 S&T 데스크가 보유할 수 있는 포지션 규모를 사실상 줄였습니다. 이에 따라 많은 IB가 FICC 데스크를 축소하거나 구조조정했습니다.",
        bodyEn:
          "Following the 2008 financial crisis, the Volcker Rule (under Dodd-Frank) prohibited banks from engaging in proprietary trading, fundamentally changing S&T's revenue model — banks can only trade for client market-making or hedging purposes, not for their own accounts. Basel III strengthened capital requirements for market risk, effectively limiting the size of positions S&T desks can hold. As a result, many banks have downsized or restructured their FICC desks.",
      },
    ],
    keyTerms: [
      {
        term: "마켓메이킹 (Market Making)",
        termEn: "Market Making",
        definition:
          "특정 증권에 대해 매입(bid)·매도(ask) 양방향 가격을 지속적으로 제시해 시장 유동성을 공급하는 행위. 스프레드 수익이 주수입원이며, 재고 위험(inventory risk)을 수반합니다.",
        definitionEn:
          "The continuous quoting of two-sided prices (bid and ask) for a security to provide market liquidity. The bid-ask spread is the primary revenue source, but it involves inventory risk from holding securities.",
      },
      {
        term: "FICC",
        termEn: "FICC (Fixed Income, Currencies & Commodities)",
        definition:
          "채권(Fixed Income), 외환(Currencies), 원자재(Commodities)를 아우르는 S&T 부문. 금리·환율·상품 가격 변동에 연동된 다양한 현물·파생상품 거래를 포함합니다.",
        definitionEn:
          "The S&T division covering Fixed Income, Currencies, and Commodities. Encompasses a wide range of cash and derivative products linked to interest rates, exchange rates, and commodity prices.",
      },
      {
        term: "알고 트레이딩 (Algorithmic Trading)",
        termEn: "Algorithmic Trading",
        definition:
          "사전 설정된 규칙(가격·시간·거래량 조건)에 따라 컴퓨터가 자동으로 주문을 실행하는 거래 방식. TWAP(시간가중평균가격), VWAP(거래량가중평균가격) 전략이 대표적이며, 대량 주문의 시장 충격을 최소화합니다.",
        definitionEn:
          "Computer-driven order execution based on pre-set rules (price, time, volume conditions). TWAP (Time-Weighted Average Price) and VWAP (Volume-Weighted Average Price) are standard strategies for minimizing market impact when executing large orders.",
      },
      {
        term: "볼커룰 (Volcker Rule)",
        termEn: "Volcker Rule",
        definition:
          "미국 도드-프랭크법에 포함된 규정으로 은행의 자기계정 투기 거래(prop trading)를 금지합니다. 고객 마켓메이킹·헤징 목적 거래는 허용되며, 한국 등 다른 국가에도 유사한 규제가 확산되었습니다.",
        definitionEn:
          "A provision of the U.S. Dodd-Frank Act that prohibits banks from engaging in proprietary (speculative) trading for their own accounts. Market-making and hedging for clients are still permitted. Similar regulations have spread to other jurisdictions.",
      },
      {
        term: "DMA (Direct Market Access)",
        termEn: "DMA (Direct Market Access)",
        definition:
          "기관투자자가 IB 세일즈 데스크를 거치지 않고 거래소에 직접 주문을 라우팅하는 방식. 거래 속도 향상과 수수료 절감이 가능하지만, 전략 노출 위험이 있습니다.",
        definitionEn:
          "A service allowing institutional investors to route orders directly to exchanges without going through a sales desk. Offers faster execution and lower commissions but exposes the client's trading strategy.",
      },
    ],
    relatedSlugs: ["chinese-wall", "dcm"],
  },

  // ── 4. Chinese Wall ───────────────────────────────────────────────────
  {
    slug: "chinese-wall",
    title: "차이니즈 월 — IB 정보 장벽의 구조와 작동 원리",
    titleEn: "Chinese Wall — Information Barriers in Investment Banking",
    category: "structure",
    categoryLabel: "구조·규제",
    categoryLabelEn: "Structure & Regulation",
    excerpt:
      "차이니즈 월(Chinese Wall)은 IB 내부에서 중요 미공개 정보(MNPI)가 부서 간에 유출되지 않도록 설치하는 정보 장벽입니다. IB 부서와 S&T·리서치·대출 부서를 분리해 내부자 거래와 이해충돌을 방지합니다.",
    excerptEn:
      "The Chinese Wall is an information barrier within an investment bank designed to prevent Material Non-Public Information (MNPI) from flowing between departments. It separates the investment banking division from S&T, research, and lending to prevent insider trading and conflicts of interest.",
    readingMinutes: 6,
    tags: ["차이니즈월", "MNPI", "정보장벽", "컴플라이언스", "watch list", "restricted list", "내부자거래"],
    sections: [
      {
        heading: "차이니즈 월의 배경: 왜 필요한가",
        headingEn: "Why Chinese Walls Exist: The Background",
        body: "IB는 M&A 자문, DCM·ECM 주관 과정에서 미공개 딜 정보(합병 계획, 실적 전망 등)를 취급합니다. 만약 이 정보가 S&T 트레이더나 리서치 애널리스트에게 새어나가면, 해당 회사 주식·채권을 사전에 매매해 부당 이득을 취할 수 있습니다(내부자 거래). 미국 SEC·한국 금융감독원 등 각국 규제 당국은 내부자 거래를 엄격히 금지하며, IB는 이를 방지하기 위해 물리적·절차적 정보 장벽을 의무적으로 구축해야 합니다. 차이니즈 월이라는 용어는 긴 장성처럼 넘을 수 없는 장벽을 의미합니다.",
        bodyEn:
          "Investment banks handle confidential deal information (merger plans, undisclosed earnings, etc.) during M&A advisory and DCM/ECM deals. If this information leaked to S&T traders or research analysts, they could trade the relevant securities in advance for an illegal gain — this is insider trading. Regulators such as the SEC (U.S.) and the FSS (Korea) strictly prohibit insider trading, and investment banks are required to maintain physical and procedural information barriers. The term 'Chinese Wall' refers to an impenetrable barrier like the Great Wall.",
      },
      {
        heading: "Watch List와 Restricted List: 실무 운용 방식",
        headingEn: "Watch List and Restricted List: How They Work in Practice",
        body: "컴플라이언스 부서는 IB가 M&A 어드바이저리나 자본시장 딜에 관여하는 기업 리스트를 관리합니다. Watch List는 IB가 딜을 검토 중인 기업으로, S&T·리서치는 해당 기업에 대한 거래·리포트 발행을 강화된 모니터링 아래 수행합니다. Restricted List는 딜이 진행 중인 기업으로, S&T는 해당 주식·채권의 자기계정 거래가 원칙적으로 금지되고, 리서치는 신규 리포트 발행이 금지됩니다(research blackout). 딜이 공시·완료되면 Restricted List에서 제거됩니다.",
        bodyEn:
          "The compliance department maintains lists of companies that the IB is advising or underwriting. Companies under active consideration are placed on the Watch List — S&T and research continue to operate but under enhanced monitoring. Companies with ongoing live deals are placed on the Restricted List — S&T is generally prohibited from proprietary trading in those securities, and research analysts are barred from publishing new reports (research blackout). Companies are removed from the Restricted List once a deal is announced or closed.",
      },
      {
        heading: "물리적·디지털 정보 장벽의 구축",
        headingEn: "Physical and Digital Barrier Implementation",
        body: "물리적으로는 IB 뱅킹 부서와 S&T·리서치 부서가 다른 층 또는 건물에 위치하며, 내부 접근 권한도 분리됩니다. 디지털 장벽으로는 이메일 모니터링·정보 공유 시스템 접근 통제·채팅 아카이빙이 사용됩니다. 장벽을 건너는(wall crossing) 경우 — 예를 들어 S&T 헤지 목적으로 IB 딜 정보가 필요한 경우 — 반드시 컴플라이언스의 사전 승인과 기록이 필요하며, 해당 직원은 Restricted List 정보를 받은 즉시 해당 포지션에 대한 거래가 제한됩니다.",
        bodyEn:
          "Physically, IB banking teams and S&T/research are located on different floors or buildings, with separate IT access controls. Digitally, email monitoring, restricted information systems, and chat archiving enforce the barrier. 'Wall crossing' — when an S&T desk needs IB deal information for legitimate hedging — requires prior compliance approval and is carefully documented. Once an individual receives restricted information, their trading in related securities is immediately constrained.",
      },
      {
        heading: "차이니즈 월 위반 사례와 규제 리스크",
        headingEn: "Chinese Wall Violations and Regulatory Risk",
        body: "차이니즈 월 위반은 개인 형사 처벌(징역·벌금)과 기관 행정 제재(영업 정지·과징금)로 이어집니다. 2003년 글로벌 애널리스트 이해충돌 합의(Global Analyst Research Settlement)는 10개 IB가 총 14억 달러의 합의금을 냈으며, 리서치와 뱅킹의 완전한 분리를 규정했습니다. 한국의 경우 자본시장법 제174조가 내부자 거래를 금지하고, 금융감독원은 이상 거래 포착 시 딜 관계자 여부를 조사합니다. 컴플라이언스 문화가 약한 조직일수록 이해충돌과 규제 리스크에 노출됩니다.",
        bodyEn:
          "Chinese Wall violations can lead to criminal penalties (imprisonment, fines) for individuals and administrative sanctions (business suspension, penalties) for institutions. The 2003 Global Analyst Research Settlement required ten investment banks to pay $1.4 billion in total and mandated complete separation of research and investment banking. In Korea, Article 174 of the Financial Investment Services and Capital Markets Act prohibits insider trading, and the FSS investigates suspicious trading patterns in connection with deal parties. Organizations with weak compliance cultures face heightened conflict-of-interest and regulatory risk.",
      },
    ],
    keyTerms: [
      {
        term: "MNPI (중요 미공개 정보)",
        termEn: "MNPI (Material Non-Public Information)",
        definition:
          "공개되면 투자자의 투자 판단에 중요한 영향을 미칠 수 있는 미공개 정보. 예) 미발표 M&A 계획, 깜짝 실적, 규제 승인 여부. MNPI를 이용한 거래는 내부자 거래로 금지됩니다.",
        definitionEn:
          "Information that has not been disclosed publicly and would materially affect an investor's decision-making if known. Examples include unannounced M&A plans, earnings surprises, or regulatory approvals. Trading on MNPI constitutes insider trading.",
      },
      {
        term: "Restricted List",
        termEn: "Restricted List",
        definition:
          "IB가 현재 딜을 진행 중인 기업 목록. S&T 자기계정 거래와 리서치 발간이 금지됩니다. 딜 완료·취소 후 목록에서 제거됩니다.",
        definitionEn:
          "A list of companies for which the IB is executing an active deal. Proprietary trading and research publication are prohibited for restricted companies. Removed from the list after deal completion or cancellation.",
      },
      {
        term: "Wall Crossing",
        termEn: "Wall Crossing",
        definition:
          "차이니즈 월을 건너 MNPI를 합법적으로 공유하는 절차. 컴플라이언스 사전 승인과 문서화가 필수이며, 정보를 받은 자는 즉시 해당 포지션 거래 제한 대상이 됩니다.",
        definitionEn:
          "The formal procedure for sharing MNPI across the Chinese Wall for legitimate business purposes (e.g., hedging). Requires prior compliance approval and documentation; the recipient is immediately restricted from trading the related securities.",
      },
      {
        term: "리서치 블랙아웃 (Research Blackout)",
        termEn: "Research Blackout",
        definition:
          "딜 진행 중 또는 IPO 직후 일정 기간 동안 해당 기업에 대한 리서치 보고서 발간을 금지하는 기간. 미국 FINRA 규정상 IPO 후 25일(인수단) 또는 40일(비인수단)의 quiet period가 있습니다.",
        definitionEn:
          "A period during which research analysts are prohibited from publishing reports on a company involved in a live deal or after an IPO. Under U.S. FINRA rules, IPO underwriters are subject to a 25-day quiet period, while non-underwriters have a 40-day blackout.",
      },
      {
        term: "이해충돌 (Conflict of Interest)",
        termEn: "Conflict of Interest",
        definition:
          "IB의 서로 다른 이해관계(발행사 수수료 수입 vs 투자자 이익)가 충돌하는 상황. 차이니즈 월과 컴플라이언스 체계가 이를 관리하며, 글로벌 금융위기 이후 규제 강화로 더욱 엄격히 통제됩니다.",
        definitionEn:
          "A situation where an IB's competing interests (e.g., issuer fee revenue vs. investor best interests) may impair objective judgment. Chinese Walls and compliance frameworks manage these conflicts, which have been subject to stricter regulation since the 2008 financial crisis.",
      },
    ],
    relatedSlugs: ["st", "syndication"],
  },

  // ── 5. Syndication ───────────────────────────────────────────────────
  {
    slug: "syndication",
    title: "신디케이션 — 자본시장 딜의 인수단 구성과 북빌딩",
    titleEn: "Syndication — Underwriting Syndicate and Bookbuilding in Capital Markets",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "신디케이션(Syndication)은 대규모 자본시장 딜에서 여러 IB가 공동으로 인수단을 구성해 발행 위험과 수수료를 분담하는 구조입니다. 북런너, 공동 북런너, 시니어 매니저, 공동 매니저로 역할이 나뉘며, 발행 후 안정화 오퍼레이션까지 담당합니다.",
    excerptEn:
      "Syndication is the structure in which multiple investment banks form an underwriting syndicate to share the distribution risk and fees for a large capital markets deal. Roles are divided between bookrunner, joint bookrunner, senior manager, and co-manager, and the syndicate also manages post-issuance stabilization operations.",
    readingMinutes: 7,
    tags: ["신디케이션", "북런너", "인수단", "언더라이팅", "북빌딩", "안정화", "베스트에포트", "firm commitment"],
    sections: [
      {
        heading: "신디케이션이 필요한 이유: 위험 분산",
        headingEn: "Why Syndication Exists: Risk Distribution",
        body: "단일 IB가 수십억 달러 규모의 채권 또는 주식 발행을 혼자 인수(underwrite)하면 발행이 실패할 경우 그 손실을 전적으로 부담해야 합니다. 신디케이션은 여러 IB가 인수 물량을 분담함으로써 리스크를 분산하고, 각 IB의 투자자 네트워크를 활용해 더 넓은 투자자 베이스에 접근합니다. 글로벌 IB는 북아메리카·유럽·아시아 투자자 각각에 강점을 가진 IB를 신디케이트에 포함시켜 지역별 배분을 최적화합니다.",
        bodyEn:
          "If a single bank underwrites a multi-billion dollar bond or equity deal alone, it bears the full loss if the deal fails (market conditions deteriorate or demand is weak). Syndication distributes this underwriting risk across multiple banks and leverages each bank's investor network for broader distribution. Global IB deals often include banks with strengths in North America, Europe, and Asia to optimize regional allocation.",
      },
      {
        heading: "인수단 구조: 북런너부터 공동 매니저까지",
        headingEn: "Syndicate Structure: From Bookrunner to Co-Manager",
        body: "①북런너(Bookrunner): 오더북을 주관하고 최종 가격·배정을 결정하는 리드 IB. 가장 높은 수수료를 받으며 표지 왼쪽에 이름이 먼저 등장합니다(left-lead). ②공동 북런너(Joint Bookrunner): 북런너와 동등한 역할을 공동 수행. ③시니어 매니저(Senior Manager): 특정 지역·투자자 커버를 맡으며 상당한 배정 물량을 받습니다. ④공동 매니저(Co-Manager): 소규모 배정을 받으며 투자자 접촉 역할을 담당합니다. 수수료는 역할별로 차등 배분되며, 톰스톤(tombstone) 광고에서 서열이 공개됩니다.",
        bodyEn:
          "①Bookrunner: The lead IB that manages the orderbook and determines final pricing and allocation. It receives the highest fees and appears first on the left of the tombstone (left-lead). ②Joint Bookrunner: Shares equal responsibilities with the bookrunner. ③Senior Manager: Covers specific investor segments or regions and receives a significant allocation. ④Co-Manager: Receives a smaller allocation and handles investor outreach. Fees are tiered by role and rankings are publicly visible in tombstone announcements.",
      },
      {
        heading: "Firm Commitment vs Best Effort 인수 방식",
        headingEn: "Firm Commitment vs. Best Effort Underwriting",
        body: "Firm Commitment(확정 인수)는 IB가 발행 물량 전량을 발행사로부터 사전에 매입해 투자자에게 재매각하는 방식입니다. 발행이 실패해도 IB가 손실을 전부 부담하므로, IB는 충분한 수수료와 유리한 조건을 요구합니다. Best Effort(최선형)는 IB가 최대한 팔아주되 팔리지 않은 물량에 대한 책임은 지지 않는 방식입니다. 신용도가 낮거나 시장 불확실성이 높은 딜에서 자주 사용되며, HY 채권이나 소형 IPO에 많이 적용됩니다.",
        bodyEn:
          "In a firm commitment underwriting, the IB purchases the entire offering from the issuer upfront and resells it to investors, taking on full risk if demand falls short. IB demands higher fees and more favorable terms in exchange for this risk. In a best effort arrangement, the IB agrees to sell as much as possible but bears no responsibility for unsold securities. This method is common in deals with lower credit quality or high market uncertainty, such as HY bonds or smaller IPOs.",
      },
      {
        heading: "안정화 오퍼레이션과 그린슈",
        headingEn: "Stabilization Operations and the Greenshoe",
        body: "발행 직후 주가나 채권 가격이 공모가 아래로 하락할 경우, 신디케이트 주관사는 안정화 오퍼레이션(stabilization)을 수행합니다. 이는 시장에서 해당 증권을 매입해 인위적 수요를 창출하는 행위로, 규제 당국의 허가 아래 일정 기간·가격 범위 내에서만 허용됩니다. 주식의 경우 그린슈 옵션(초과 배정 옵션)을 통해 주관사가 공모가에서 추가 물량을 발행사로부터 매입할 수 있어, 안정화와 초과 공급을 동시에 조절할 수 있습니다.",
        bodyEn:
          "If the price of a newly issued security falls below the offering price, the lead manager conducts stabilization operations — buying securities in the secondary market to support the price. This is permitted by regulators only within defined price limits and for a limited period. For equity deals, the greenshoe (over-allotment) option allows the underwriter to purchase additional shares from the issuer at the offering price, providing a mechanism to simultaneously manage excess supply and price stability.",
      },
    ],
    keyTerms: [
      {
        term: "톰스톤 (Tombstone)",
        termEn: "Tombstone",
        definition:
          "자본시장 딜이 완료된 후 공개하는 공식 발표 광고. 발행사, 발행 규모, 발행일, 주관사 서열이 표기됩니다. 과거에는 신문 광고로 게재되었으며 지금은 주로 IB 마케팅 자료로 활용됩니다.",
        definitionEn:
          "A formal announcement advertisement published after a capital markets deal is completed, listing the issuer, deal size, date, and underwriter rankings. Historically printed as newspaper ads, tombstones are now primarily used as IB marketing materials.",
      },
      {
        term: "언더라이팅 수수료 (Underwriting Fee)",
        termEn: "Underwriting Fee",
        definition:
          "IB가 증권 발행을 주관하고 위험을 인수하는 대가로 받는 수수료. 발행 금액의 일정 퍼센트로 산정되며, 인수단 내 역할별로 배분됩니다.",
        definitionEn:
          "The fee paid to investment banks for underwriting and distributing a securities offering. It is calculated as a percentage of the deal size and divided among syndicate members based on their role.",
      },
      {
        term: "초과 배정 옵션 (Over-Allotment Option)",
        termEn: "Over-Allotment Option (Greenshoe)",
        definition:
          "신디케이트 주관사가 공모 물량의 최대 15%를 초과 배정할 수 있는 권리. 수요 초과 시 추가 물량을 발행사에서 받아 커버하고, 수요 미달 시 시장에서 매입해 가격을 안정화합니다.",
        definitionEn:
          "The right of the underwriting syndicate to sell up to 15% more shares than the offering size. If demand is strong, the underwriter receives additional shares from the issuer; if demand is weak, it buys shares in the market to support the price.",
      },
      {
        term: "로드쇼 (Roadshow)",
        termEn: "Roadshow",
        definition:
          "발행사 경영진이 주관사와 함께 주요 기관투자자를 방문해 발행 스토리를 설명하고 수요를 탐색하는 마케팅 프로세스. 통상 1~2주 동안 주요 금융 도시를 순회하며 진행됩니다.",
        definitionEn:
          "A marketing process in which company management and lead underwriters meet with key institutional investors to present the deal story and gauge demand. Typically conducted over 1–2 weeks across major financial centers.",
      },
      {
        term: "오더북 (Orderbook)",
        termEn: "Orderbook",
        definition:
          "북런너가 집계하는 투자자 주문 목록. 주문자, 희망 가격, 수량이 기록되며, 오버부킹(oversubscription) 배수가 최종 가격 결정에 큰 영향을 미칩니다.",
        definitionEn:
          "The aggregated record of investor orders managed by the bookrunner, including investor name, desired price, and quantity. The oversubscription multiple (demand vs. supply) heavily influences the final deal pricing.",
      },
    ],
    relatedSlugs: ["dcm", "ecm"],
  },
];

export function getConceptBySlug(slug: string): MarketConcept | undefined {
  return ALL_CONCEPTS.find((c) => c.slug === slug);
}

export function getRelatedConcepts(slugs: string[]): MarketConcept[] {
  return slugs
    .map((s) => getConceptBySlug(s))
    .filter((c): c is MarketConcept => c !== undefined);
}
