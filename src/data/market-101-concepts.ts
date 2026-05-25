/**
 * Market 101 개념 데이터.
 * DCM · ECM · S&T · 구조·규제 핵심 개념을 딜 사례와 함께 정리.
 * 각 개념은 KO/EN 이중 언어 지원.
 *
 * 타입은 market-concepts.ts 에서 재활용.
 * section.body / section.bodyEn 에서 \n\n 은 단락 구분자.
 */
import type { MarketConcept } from "@/data/market-concepts";
export type { MarketConcept, Reference, AppearsInRef } from "@/data/market-concepts";
export { CATEGORY_COLOR } from "@/data/market-concepts";

// ── 카테고리 메타 ─────────────────────────────────────────────────────────────
export const MARKET_101_CATEGORIES = [
  { key: "dcm"       as const, label: "DCM",      labelEn: "DCM",                    dotColor: "bg-teal-500"   },
  { key: "ecm"       as const, label: "ECM",      labelEn: "ECM",                    dotColor: "bg-blue-500"   },
  { key: "st"        as const, label: "S&T",      labelEn: "S&T",                    dotColor: "bg-violet-500" },
  { key: "structure" as const, label: "구조·규제", labelEn: "Structure & Regulation", dotColor: "bg-orange-500" },
];

// ── 개념 데이터 ──────────────────────────────────────────────────────────────
export const ALL_MARKET101_CONCEPTS: MarketConcept[] = [

  // ────────────────────────────────────────────────────────────────────────────
  // Chapter 0 — DCM 생태계 전체 지도
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "dcm-ecosystem",
    title: "DCM 생태계 전체 지도",
    titleEn: "The DCM Ecosystem Map",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "글로벌 채권시장은 130조 달러 규모로 주식시장보다 크다. 그런데 이 시장을 움직이는 가장 큰 손들 상당수는 수익률 때문에 채권을 사지 않는다. DCM이 무엇인지 이해하려면 이 역설에서 시작해야 한다 — 발행사·투자자·IB의 삼각구도 전체 지도.",
    excerptEn:
      "The global bond market is worth over $130 trillion — larger than equities. Yet many of the biggest buyers aren't here for yield. Understanding DCM starts with this paradox: a complete map of the issuer–investor–investment bank triangle.",
    readingMinutes: 15,
    tags: ["DCM", "채권시장", "발행사", "투자자", "SSA", "IG", "HY", "차이니즈월", "신디케이트", "스프레드"],
    tagsEn: ["DCM", "Bond Market", "Issuer", "Investor", "SSA", "IG", "HY", "Chinese Wall", "Syndicate", "Spread"],
    sections: [
      // ── 섹션 1 ──────────────────────────────────────────────────────────────
      {
        heading: "이 시장이 왜 이렇게 큰가",
        headingEn: "Why Is This Market So Large?",
        body:
`글로벌 채권시장의 총 발행 잔액은 2024년 기준 약 130조 달러다.¹ 같은 시기 글로벌 주식시장 시가총액이 약 110조 달러인 것과 비교하면,² 채권시장이 더 크다는 게 잘 와닿지 않는 사람도 있을 것이다. 주식 뉴스가 훨씬 더 많이 들리는데.

이유는 간단하다. 기업과 정부가 자금을 조달하는 방법은 크게 두 가지다 — 지분을 파는 것(주식)과 빚을 지는 것(채권). 그런데 대부분의 자금 조달은 빚으로 이루어진다. 삼성전자가 공장을 지을 때, 한국 정부가 재정을 충당할 때, 독일 개발은행 KfW가 인프라 대출 재원을 마련할 때 — 이 모든 게 채권 발행으로 이루어진다. 지분 발행은 상대적으로 드물다.

DCM(Debt Capital Markets, 채권 자본시장)은 이 거대한 자금 흐름의 1차 시장(Primary Market)이다. 발행사가 새 채권을 만들어 투자자에게 파는 곳. IB의 DCM 팀은 이 거래가 성사될 수 있도록 발행사와 투자자 사이를 연결하는 역할을 한다. 이 시리즈는 그 연결의 구체적인 메커니즘을 처음부터 끝까지 해부한다.`,

        bodyEn:
`The global bond market has an outstanding balance of approximately $130 trillion as of 2024.¹ The global equity market cap sits at around $110 trillion by comparison² — meaning bonds are actually larger than stocks, which surprises many who follow financial news, since equity stories dominate headlines.

The reason is straightforward. There are two fundamental ways for a company or government to raise capital: sell equity (ownership) or issue debt (borrowing). And most capital raising is done through debt. When Apple funds a new data center, when the US Treasury covers a fiscal deficit, when Germany's KfW raises capital for infrastructure loans — all of this happens through bond issuance. Equity raises are comparatively rare.

DCM (Debt Capital Markets) is the primary market for this enormous flow of capital — the place where new bonds are created and sold to investors. The DCM team at an investment bank bridges issuers and investors to make this happen. This series dissects that mechanism from beginning to end.`,
      },

      // ── 섹션 2 ──────────────────────────────────────────────────────────────
      {
        heading: "발행사 스펙트럼 — 신용등급이 곧 운명이다",
        headingEn: "The Issuer Spectrum — Credit Rating Determines Everything",
        body:
`채권 발행사를 한 줄로 세우면, 왼쪽 끝에는 신용등급 AAA의 초우량 발행사가, 오른쪽 끝에는 부도 직전의 Distressed 발행사가 앉는다. 이 줄에서 어디 앉느냐가 거의 모든 것을 결정한다 — 접근 가능한 투자자 풀의 크기, 쿠폰(금리), 딜 구조, 심지어 어느 IB 팀이 담당하는지까지.

왼쪽부터: SSA(Sovereign·Supranational·Agency)가 스펙트럼의 최상단이다. 각국 정부(Sovereign), 세계은행·EIB 같은 국제기구(Supranational), KDB·KfW·KEXIM 같은 정책금융기관(Agency)이 여기 해당한다. 한국 기재부가 발행하는 외평채가 바로 Sovereign 발행이다. 이 발행사들은 신용리스크가 낮거나 없어서 DCM 팀이 신용분석에 쓰는 시간이 거의 없다 — 투자자도 이미 이름을 안다.

그 아래로 SOE(State-Owned Enterprise, 국영기업) — 한국의 KEPCO, 사우디의 Aramco가 여기다. 국가와 연결된 신용이지만 Sovereign은 아니다. 그 아래에 FIG(Financial Institutions Group) — 시중은행, 보험사가 발행하는 채권들. 그다음 IG 회사채(BBB- 이상). 줄의 오른쪽 절반부터는 BB+ 이하의 HY(High Yield), 그리고 부도 위기의 Distressed까지.

핵심은 이것: 신용등급이 낮아질수록 ① 살 수 있는 투자자가 좁아지고(규제 때문에) ② 이자를 더 줘야 하고 ③ IB 팀이 DCM에서 LevFin으로 바뀌고 ④ 계약서의 covenant가 두꺼워지고 ⑤ 딜을 끝내는 데 걸리는 시간이 길어진다. SSA 발행이 하루 만에 끝나는 것과 HY 딜이 몇 주에 걸쳐 로드쇼를 도는 것의 차이가 이 때문이다.`,

        bodyEn:
`Line up all bond issuers on a spectrum. At the far left: AAA-rated, highest-quality issuers. At the far right: distressed companies on the verge of default. Where you sit on this line determines almost everything — the size of your accessible investor pool, your coupon (interest rate), deal structure, and which IB team handles your transaction.

Starting from the left: SSA (Sovereign, Supranational, Agency) occupies the top of the credit spectrum. This includes national governments (Sovereign), international institutions like the World Bank and EIB (Supranational), and policy lenders like the FHLB, KfW, and KEXIM (Agency). The US Treasury issuing Treasuries, Germany's KfW issuing development bonds — these are classic SSA issuances. These issuers carry minimal credit risk — DCM bankers spend almost no time on credit analysis, and investors already know the names.

Moving down: SOE (State-Owned Enterprises) — Fannie Mae and Freddie Mac in the US, Aramco in Saudi Arabia, TVA (Tennessee Valley Authority). Government-linked credit but not sovereign. Below that, FIG (Financial Institutions Group) — bonds issued by commercial banks and insurance companies. Then IG Corporates (rated BBB- or above). The right half of the spectrum begins with HY (High Yield) at BB+ and below, ending with Distressed near default.

The key insight: as credit rating deteriorates, ① the investor pool narrows (due to regulatory restrictions), ② coupons must be higher, ③ the IB team shifts from DCM to LevFin, ④ covenants in the indenture get thicker, and ⑤ execution takes longer. This is why an SSA deal can price in a single day while an HY deal requires weeks of roadshows.`,
      },

      // ── 섹션 3 ──────────────────────────────────────────────────────────────
      {
        heading: "투자자의 진짜 목적 — 수익이 아닌 이유",
        headingEn: "Why Most Investors Aren't Here for Yield",
        body:
`채권시장에 오는 투자자들에게 "왜 이 채권을 삽니까?"라고 물으면, 솔직한 대답이 의외인 경우가 많다.

중앙은행은 외환보유고를 관리한다. 원화 가치 방어를 위한 실탄이 필요하고, 그 실탄은 안전하고 유동성이 높아야 한다. 수익은 세 번째 우선순위다. 그래서 중앙은행은 US Treasury, 초우량 SSA 채권을 주로 산다. 한국 외평채가 아시아 중앙은행들에게 잘 팔리는 이유 중 하나가 외환보유고 다변화 수요다.

보험사와 연기금은 ALM(Asset-Liability Management, 자산부채관리)을 한다. 보험사는 20년 후 보험금을 지급해야 한다. 이 미래 의무를 20년 장기채 현금흐름으로 덮는 게 핵심 전략이다. 수익 극대화가 아니라 부채의 만기와 현금흐름을 자산으로 매칭하는 게 목적이다. 대만과 일본 보험사가 달러 장기채의 거대한 수요처인 이유가 여기 있다.

은행 Treasury는 유동성 규제(LCR, HQLA)⁴ 때문에 채권을 산다. 바젤 III⁵ 규제상 은행은 30일 스트레스 시나리오를 견딜 유동성 완충재를 보유해야 하는데, 국채와 우량 SSA 채권이 이 요건을 충족한다. 역시 수익이 1순위가 아니다.

자산운용사는 Bloomberg Global Aggregate³ 같은 채권 인덱스를 추종하면서 초과수익을 낸다. 여기서부터 수익이 중요해진다. 헤지펀드는 캐리 트레이드, 상대가치, 차익거래로 수익을 극대화한다. 가장 수익 지향적인 투자자다.

이 구분이 DCM 실무에서 중요한 이유: 목적이 다른 주머니들이 같은 딜에 동시에 들어오면 오더북이 탄탄해진다. 중앙은행(외환보유고 다변화) + 보험사(ALM) + 자산운용사(인덱스 편입) + 헤지펀드(캐리) — 이 네 주머니가 각자 다른 이유로 같은 채권을 살 때 오더북이 5배 초과청약이 된다. 각 투자자에게 다른 스토리를 들고 가는 것이 세일즈의 역할이고, 그 스토리를 설계하는 것이 신디케이트와 DCM의 일이다.`,

        bodyEn:
`Ask bond investors "Why are you buying this bond?" and the honest answer is often unexpected.

Central banks are managing foreign exchange reserves. They need ammunition to defend their currency — and that ammunition must be safe and liquid above all. Yield is the third priority. So central banks primarily buy US Treasuries and top-rated SSA bonds. Sovereign bonds from stable governments sell well to Asian central banks partly because of FX reserve diversification demand.

Insurance companies and pension funds practice ALM (Asset-Liability Management). An insurer must pay claims 20 years from now. Their core strategy is to cover these future liabilities with long-duration bonds whose cash flows match. The goal isn't to maximize returns — it's to match asset cash flows to liability maturities. This is why Taiwanese and Japanese insurers are enormous buyers of long-dated dollar bonds.

Bank treasuries buy bonds because of liquidity regulations (LCR, HQLA).⁴ Under Basel III,⁵ banks must hold high-quality liquid assets to survive a 30-day stress scenario. Government bonds and top-rated SSA bonds qualify. Again, yield isn't the primary driver.

Asset managers track benchmarks like the Bloomberg Global Aggregate Index³ while trying to generate alpha. Here, returns start to matter. Hedge funds maximize yield through carry trades, relative value, and arbitrage — the most return-oriented investors in the room.

Why this matters in DCM practice: when investors with different motivations hit the same deal simultaneously, the orderbook becomes durable. Central banks (FX diversification) + insurers (ALM) + asset managers (index inclusion) + hedge funds (carry) — when all four buy the same bond for different reasons, you get a 5x oversubscribed book. Delivering a different story to each investor type is exactly what Sales does, and designing those stories is DCM and Syndicate's job.`,
      },

      // ── 섹션 4 ──────────────────────────────────────────────────────────────
      {
        heading: "IB의 위치 — 두 세계를 잇는 사람들",
        headingEn: "Where the Investment Bank Sits — Bridging Two Worlds",
        body:
`채권 발행 딜에서 IB의 각 팀이 어디 앉는지를 이해하려면, 먼저 큰 구분 하나를 알아야 한다: 프라이빗 사이드와 퍼블릭 사이드의 분리.

DCM 팀은 프라이빗 사이드에 앉는다. 발행사와 기밀 정보를 공유하며 딜을 설계한다. 아직 공개되지 않은 발행 계획, 발행 규모, 타이밍, 가격 목표 — 이 모든 게 MNPI(Material Non-Public Information, 중요 미공개 정보)다. 따라서 DCM 팀은 이 정보를 회사 내 다른 팀, 특히 트레이더들과 공유할 수 없다. 공유하면 내부자거래다.

이 경계가 차이니즈 월(Chinese Wall)이다. IB(프라이빗)와 마켓(퍼블릭) 사이의 정보 장벽.

그렇다면 발행 가격을 어떻게 정하나? 시장에서 비슷한 채권이 어디서 거래되는지 알아야 하는데, 그 정보는 트레이딩 데스크에 있다. 여기서 신디케이트(Syndicate) 팀이 등장한다. 신디케이트는 차이니즈 월의 경계선 위에 앉아, 두 세계를 연결하는 공식 창구다. DCM이 신디케이트를 월크로싱(wall-crossing)시키면 — 컴플라이언스 승인을 받아 MNPI를 공식 공유하면 — 신디케이트는 Sales·Trading과 소통해 시장 수요와 가격 수준을 파악할 수 있다.

Sales 팀은 투자자를 담당한다. 중앙은행, 보험사, 자산운용사에게 딜 정보를 전달하고 주문을 받는다. Trading 팀은 세컨더리(2차 시장)에서 채권을 사고판다. 트레이더는 지금 시장에서 비슷한 채권이 어떤 스프레드에서 거래되는지 가장 잘 안다 — 이 정보가 신디케이트를 통해 DCM에게 전달되어 신규 발행 가격의 기준점(fair value)이 된다.

정보 흐름을 정리하면: 발행사 → DCM(프라이빗) → 월크로싱 → Syndicate → Sales·Trading(퍼블릭) → 투자자 주문 → Syndicate → DCM → 발행사 최종 확정.`,

        bodyEn:
`To understand where each IB team sits in a bond deal, start with one fundamental distinction: the separation between the private side and the public side.

The DCM team sits on the private side. They work with issuers, sharing confidential information — undisclosed issuance plans, deal size, timing, and pricing targets. All of this is MNPI (Material Non-Public Information). DCM bankers cannot share this with other desks in the firm, especially traders. Doing so would constitute insider trading.

This boundary is the Chinese Wall — the information barrier separating IB (private side) from Markets (public side).

So how does the deal get priced? You need to know where comparable bonds are trading in the market — information that lives with the trading desk. This is where the Syndicate team comes in. Syndicate sits on the boundary of the Chinese Wall, acting as the official conduit between the two worlds. When DCM "wall-crosses" Syndicate — formally sharing MNPI under compliance approval — Syndicate can then communicate with Sales and Trading to gauge market demand and current price levels.

Sales covers investors. They relay deal information to central banks, insurers, and asset managers, and collect orders. Trading operates in the secondary market — buying and selling existing bonds. Traders know better than anyone what spread comparable bonds are trading at right now. This information flows through Syndicate back to DCM, becoming the reference point (fair value) for pricing the new issue.

The information flow: Issuer → DCM (private) → wall-crossing → Syndicate → Sales & Trading (public) → investor orders → Syndicate → DCM → final terms confirmed to issuer.`,
      },

      // ── 섹션 5 ──────────────────────────────────────────────────────────────
      {
        heading: "통화 축 — 어디서 발행하는가",
        headingEn: "The Currency Axis — Where to Issue",
        body:
`발행사는 어느 통화로, 어느 시장에서 채권을 발행할지를 선택해야 한다. 이 선택은 단순히 "달러로 할까, 유로로 할까"의 문제가 아니다. 접근 가능한 투자자 풀이 달라지고, 스왑 비용이 달라지고, 발행 비용의 구조 자체가 바뀐다.

USD — 가장 큰 투자자 풀을 자랑하는 기축통화 시장이다. 양키본드(Yankee Bond)는 미국 내에서 SEC 등록(또는 Reg S/144A)으로 발행하는 달러채다. 대부분의 아시아 SSA 발행사가 택하는 메인 통화이고, 한국 외평채도 여기 해당한다.

EUR — 유럽 투자자 풀에 접근하는 통화다. 특히 유럽 보험사와 연기금이 주요 수요처다. 유로 표기 SSA와 FIG 발행이 활발하며, Eurobond 시장은 규제 측면에서 미국보다 유연하다.

JPY — 사무라이본드(Samurai Bond)는 일본 내에서 엔화로 발행하는 외국채다. 일본 투자자 베이스 접근이 목적이며, 스왑 비용과 투자자 구성을 고려해 선택한다.

TWD — 포모사본드(Formosa Bond)는 대만에서 발행하는 외화 표기 채권이다. 대만 보험사들의 달러 자산 ALM 수요가 매우 강해, 달러 포모사 시장이 특히 발달해 있다. 콜옵션이 붙은 장기 달러채가 많다.

KRW — 아리랑본드(Arirang Bond)는 외국 발행사가 국내 원화 채권 시장에서 발행하는 채권이다. 원화 유동성을 원하는 외국 발행사가 활용한다.

발행사는 어떻게 최적 통화를 고르나? 핵심은 올인 비용(all-in cost) 계산이다. 달러 채권을 발행하고 원화가 필요하다면, 달러를 원화로 바꾸는 통화스왑 비용을 더해야 한다. 스왑 후 원화 조달 비용이 원화 직접 발행 비용보다 낮으면 달러 발행이 유리하다. 이 계산이 발행사가 통화를 선택하는 핵심 로직이다.`,

        bodyEn:
`An issuer must choose which currency, and in which market, to issue bonds. This isn't merely "dollar or euro" — it determines the accessible investor pool, swap costs, and the entire cost structure of the transaction.

USD — The largest investor pool globally. Yankee Bonds are dollar-denominated bonds issued in the US under SEC registration (or Reg S/144A). Most sovereign and SSA issuers choose USD as their primary currency — it offers the deepest investor pool and the most liquid secondary market.

EUR — Access to European investor bases, particularly European insurers and pension funds. Active for SSA and FIG issuers. The Eurobond market offers more regulatory flexibility than the US market.

JPY — Samurai Bonds are foreign bonds issued in Japan, denominated in yen. The purpose is accessing Japanese investor bases. Selection depends on swap economics and investor composition.

TWD — Formosa Bonds are foreign-currency bonds issued in Taiwan. Taiwanese insurers have extremely strong demand for dollar-denominated assets for ALM purposes, making the dollar Formosa market particularly developed — with many long-dated, dollar-denominated callable bonds.

KRW — Arirang Bonds are bonds issued in Korea's domestic won-denominated market by foreign issuers, used by foreign entities seeking won-denominated funding.

How do issuers choose the optimal currency? The key is calculating the all-in cost. If a Korean issuer sells dollar bonds but needs won, the cross-currency swap cost must be added. If the swapped won-denominated funding cost comes out lower than issuing directly in won, dollar issuance wins. This calculation is the core logic behind every currency selection decision.`,
      },

      // ── 섹션 6 ──────────────────────────────────────────────────────────────
      {
        heading: "이 시리즈의 지도 — 19편으로 가는 길",
        headingEn: "Roadmap for This Series",
        body:
`이 글에서 잡은 생태계 지도를 바탕으로, 앞으로의 편들이 각 영역을 파고든다.

발행사 편에서는 SSA부터 Distressed까지 각 발행사 유형이 왜 발행하고 어떤 구조로 발행하는지를 다룬다. 투자자 편에서는 각 투자자 유형이 채권시장에서 무엇을 원하는지, 어떻게 분석하는지를 구체화한다. 상품 편에서는 IG 회사채, HY, Leveraged Finance, ABS·CLO, Private Credit까지 상품별 구조와 특성을 다룬다. 국제채 편에서는 Yankee·Eurobond·Arirang·Formosa·Samurai 각 시장의 메커니즘을 해부한다.

딜 프로세스 편에서는 Mandate에서 Closing까지 한 딜이 어떻게 만들어지는지 — 딜 로드쇼와 논딜 로드쇼의 차이, 북빌딩과 오더북 읽는 법, PP·클럽딜·Public Deal의 구분까지. 프라이싱 편에서는 Bloomberg YAS 화면을 켜고 G/I/Z/OAS/ASW 스프레드 5형제를 실전으로 다루고 NIC의 경제학을 풀어낸다. 구조·제도 편에서는 차이니즈 월, MNPI, 신디케이트 데스크의 실제 역할을 다룬다.

이 모든 것은 결국 하나의 딜 안에서 만난다. 발행사가 가격을 고민할 때, 투자자가 주문을 낼 때, 트레이더가 세컨더리 레벨을 전할 때, 신디케이트가 오더북을 조이며 최종 스프레드를 결정할 때 — 이 모든 움직임이 하나의 숫자에 수렴한다. 그 숫자에 도달하는 과정 전체가 이 시리즈다.`,

        bodyEn:
`With this ecosystem map established, the remaining articles each drill into a specific territory.

The issuer chapters cover why each issuer type from SSA to Distressed comes to market and how they structure their deals. The investor chapters explore what each investor type wants from the bond market and how they analyze it. The products chapters cover IG corporates, HY, Leveraged Finance, ABS/CLO, and Private Credit. The international bond chapters dissect the mechanics of Yankee, Eurobond, Arirang, Formosa, and Samurai markets.

The deal process chapters trace a deal from Mandate to Closing — the difference between deal roadshows and non-deal roadshows, how to read an orderbook, and the distinctions between PP, club deals, and public deals. The pricing chapters open a Bloomberg YAS screen and work through the five spread types (G/I/Z/OAS/ASW) in practice, along with the economics of the New Issue Concession. The structure and regulation chapters cover the Chinese Wall, MNPI, and the real operational role of the Syndicate desk.

All of this ultimately converges in a single deal. When an issuer debates the price, when an investor submits an order, when a trader relays the secondary level, when Syndicate tightens the orderbook toward a final spread — all of these movements converge on one number. The journey to that number is what this entire series is about.`,
      },
    ],

    keyTerms: [
      {
        term: "DCM (채권 자본시장)",
        termEn: "DCM — Debt Capital Markets",
        definition:
          "DCM은 기업·정부·금융기관이 채권을 발행해 자금을 조달하는 1차 시장과, 이를 중개하는 IB의 팀명을 동시에 가리킨다. 주식(ECM)이 '회사 지분 살래요?'라면, DCM은 '우리한테 돈 빌려줄래요? 이자는 이만큼 드릴게요'다. 만기와 쿠폰(이자율)이 정해진 계약이라는 점에서, 개인의 대출과 구조는 같지만 규모와 시장 메커니즘이 다르다. 채권이 발행된 뒤 투자자들 사이에서 거래되는 시장은 2차 시장(Secondary Market)이라 부르고, DCM은 그 이전 단계인 1차 발행을 담당한다.",
        definitionEn:
          "DCM refers both to the primary market where corporations, governments, and financial institutions raise capital by issuing bonds, and to the IB team that facilitates this. If ECM (equity) is 'want to own a piece of our company?', DCM is 'will you lend us money? Here's the interest we'll pay.' Like a personal loan in structure, but at a vastly different scale and with market mechanisms. After bonds are issued, trading between investors happens in the Secondary Market — DCM handles the issuance stage that comes before.",
      },
      {
        term: "신디케이트 (Syndicate)",
        termEn: "Syndicate",
        definition:
          "신디케이트는 IB 내에서 차이니즈 월 경계선 위에 앉아 프라이빗 사이드(DCM, 발행사)와 퍼블릭 사이드(Sales, Trading, 투자자)를 공식적으로 연결하는 팀이다. 오케스트라 지휘자에 비유할 수 있다 — 악보(딜 구조)는 DCM이 짰지만, 실제로 단원들(Sales·Trading·투자자)을 조율해 소리(가격)를 만드는 건 신디케이트다. IPT(초기 가격 제시)를 설정하고, 주문을 집계하고, 시장 반응을 보며 가격을 조이는 전 과정이 신디케이트의 손에서 이루어진다.",
        definitionEn:
          "Syndicate is the team within an investment bank that sits on the boundary of the Chinese Wall, officially bridging the private side (DCM, issuer) and the public side (Sales, Trading, investors). Think of them as the orchestra conductor — DCM wrote the score (deal structure), but Syndicate coordinates the musicians (Sales, Trading, investors) to produce the sound (price). Setting the IPT, aggregating orders, monitoring market response, and tightening toward final pricing all happen through Syndicate.",
      },
      {
        term: "1차 시장 / 2차 시장",
        termEn: "Primary Market / Secondary Market",
        definition:
          "1차 시장(Primary Market)은 새 채권이 처음 발행되는 시장으로, 발행사가 실제로 자금을 받는 곳이다. 2차 시장(Secondary Market)은 이미 발행된 채권이 투자자들 사이에서 사고팔리는 시장이다. 자동차로 비유하면, 1차 시장은 출고장(제조사에서 처음 차가 나오는 곳)이고 2차 시장은 중고차 시장이다. 발행사는 1차 시장에서만 돈을 받는다. 하지만 1차 시장의 가격은 반드시 2차 시장의 거래 수준을 기준점으로 삼는다 — 이미 유통 중인 비슷한 채권보다 비싸게 새 채권을 팔 수는 없기 때문이다.",
        definitionEn:
          "The Primary Market is where new bonds are issued for the first time — where the issuer actually receives the funds. The Secondary Market is where already-issued bonds trade between investors. Car analogy: the primary market is the dealership (where new vehicles roll out from the factory), the secondary market is used-car sales. Issuers only raise capital in the primary market. But primary market pricing must reference secondary market levels — you can't sell a new bond at a worse price than comparable bonds already trading in the market.",
      },
      {
        term: "IG / HY (투자등급 / 고수익채)",
        termEn: "IG (Investment Grade) / HY (High Yield)",
        definition:
          "투자등급(IG)은 신용평가사(S&P·Moody's·Fitch)가 BBB-(Baa3) 이상의 등급을 부여한 채권을 가리킨다. 대부분의 기관 투자자(연기금·보험·중앙은행)가 규제상 살 수 있다. 고수익채(HY)는 BB+(Ba1) 이하 등급 채권으로 '정크본드(junk bond)'라고도 불린다. 규제 때문에 많은 기관이 HY를 살 수 없어 투자자 풀이 좁은 대신, 쿠폰이 높다. 신용점수 좋은 사람이 낮은 금리로 대출받고, 신용점수 나쁜 사람이 높은 금리를 내는 것과 같은 원리다. 같은 '빚'이지만 신뢰도가 다르다.",
        definitionEn:
          "Investment Grade (IG) refers to bonds rated BBB- (Baa3) or higher by credit agencies (S&P, Moody's, Fitch). Most institutional investors (pension funds, insurers, central banks) can hold IG bonds under their regulatory mandates. High Yield (HY) covers bonds rated BB+ (Ba1) or below — commonly called 'junk bonds.' Many institutions are restricted from buying HY, which narrows the investor pool but means higher coupons to compensate. It's the same principle as a creditworthy borrower getting a prime mortgage rate while a higher-risk borrower pays credit card rates. Same concept (debt), different trust levels, different rates.",
      },
      {
        term: "스프레드 (Spread)",
        termEn: "Spread",
        definition:
          "스프레드는 채권 금리와 기준금리(보통 국채 금리 또는 스왑 금리) 사이의 차이로, 베이시스 포인트(bp, 0.01%)로 표시한다. 예를 들어 미국 5년 국채 금리가 4.00%이고 어떤 회사채 금리가 4.80%라면 스프레드는 80bp다. 이 80bp가 투자자가 국채 대신 이 회사채를 사면서 요구하는 신용 프리미엄이다. 호텔 비유: 국채가 '가장 안전한 5성 호텔'이라면 스프레드는 그보다 안전성이 낮은 숙소에 머물 때 부담하는 리스크 비용이다. 신용이 나쁠수록 스프레드가 넓어진다(더 비싸진다). 채권 세계의 모든 가격 협상은 이 스프레드 숫자 위에서 이루어진다.",
        definitionEn:
          "Spread is the difference between a bond's yield and a benchmark rate (typically government bond yield or swap rate), expressed in basis points (bp, 0.01%). If a 5-year US Treasury yields 4.00% and a corporate bond yields 4.80%, the spread is 80bp. This 80bp is the credit premium investors demand for holding the corporate bond instead of the Treasury. Hotel analogy: if government bonds are the 'safest five-star hotel,' spread is the risk premium you pay for staying somewhere less safe. The lower the credit quality, the wider the spread (the higher the risk cost). Every price negotiation in the bond world happens on top of this spread number.",
      },
      {
        term: "NIC (신규발행 프리미엄)",
        termEn: "NIC — New Issue Concession",
        definition:
          "NIC는 새 채권을 발행할 때 기존 세컨더리 시장 수준보다 더 높은 스프레드(더 낮은 가격)로 발행하는 것이다. 발행사 입장에서는 손해지만, 이걸 주지 않으면 투자자가 기존 채권 대신 새 채권을 살 이유가 없다. 신규 분양 아파트가 주변 시세보다 약간 저렴하게 나오는 것과 같다 — 이미 지어진 아파트(세컨더리)가 있는데 왜 새 아파트를 사겠나? 실무에서 DCM 팀이 발행사에게 'NIC 10~15bp 정도는 줘야 투자자들이 들어옵니다'라고 설득하는 게 일상이다. 시장이 좋으면(오더북 풍성) NIC가 줄어들고, 시장이 좋지 않으면 NIC를 더 줘야 한다.",
        definitionEn:
          "NIC is the additional spread above secondary market levels at which a new bond is issued. It's a cost to the issuer, but without it investors have no incentive to buy the new bond over existing ones in the secondary market. Think of it like a newly built apartment priced slightly below comparable resale units — why buy new construction when existing inventory is available at the same price? In practice, DCM bankers regularly tell issuers: 'You'll need to offer around 10–15bp of NIC to attract investors.' In hot markets (abundant orderbooks) the NIC compresses; in difficult markets, more must be offered.",
      },
      {
        term: "북빌딩 / O/S (오더북 / 초과청약)",
        termEn: "Book Building / Oversubscription (O/S)",
        definition:
          "북빌딩(수요예측)은 신규 채권 발행 전에 투자자들의 매입 의향을 미리 모아 수요를 파악하는 과정이다. 신디케이트가 Sales를 통해 IPT(Initial Price Thoughts, 초기 가격 제시)를 알리고, 각 투자자가 '이 가격이면 얼마 사겠다'는 주문을 내면 오더북이 형성된다. 예약 판매와 같다 — 출시 전에 '이 가격이면 사시겠어요?'를 물어보고 주문을 받는 것. O/S(초과청약, Oversubscription)는 목표 발행 금액 대비 주문이 얼마나 더 들어왔는지의 비율이다. O/S 5배는 10억 모집에 50억이 들어왔다는 뜻이고, 이때 신디케이트는 스프레드를 좁혀(NIC를 줄여) 발행사에게 유리한 조건으로 마무리할 수 있다.",
        definitionEn:
          "Book building is the process of pre-collecting investor purchase indications before a new bond is issued. Syndicate communicates the IPT (Initial Price Thoughts) via Sales; each investor submits an order for how much they'd buy at that price. The resulting collection is the 'order book.' It's like pre-order sales — 'would you buy at this price?' before the product launches. O/S (oversubscription) is how many times the target issuance amount was ordered. A 5x O/S on a $1bn deal means $5bn in orders — at which point Syndicate can tighten the spread (compress the NIC) and deliver better terms to the issuer.",
      },
      {
        term: "차이니즈 월 (Chinese Wall)",
        termEn: "Chinese Wall",
        definition:
          "차이니즈 월은 IB 내에서 미공개 정보(MNPI)가 함부로 흘러가지 못하도록 설치된 정보 장벽이다. 같은 은행 안에서도 DCM(발행사의 비공개 정보 보유)과 Trading(해당 증권을 시장에서 거래 가능)이 서로 정보를 공유할 수 없는 이유가 이것이다. 만리장성에서 이름을 따왔다. 실무에서는 IT 시스템 분리, 공간 분리, 컴플라이언스 부서가 관리하는 Watch list·Restricted list로 작동한다. 월크로싱(wall-crossing)은 이 장벽을 공식 절차로 넘는 것 — 컴플라이언스 승인 하에 특정 인물에게 딜 진행 정보를 공유하는 행위다. 월크로싱된 사람은 해당 발행사 증권을 직접 거래할 수 없게 되는 제약이 따른다.",
        definitionEn:
          "The Chinese Wall is an information barrier within an investment bank that prevents MNPI (Material Non-Public Information) from flowing freely between desks. Even within the same firm, DCM (holding an issuer's confidential information) and Trading (which may trade that issuer's securities) cannot share information — doing so would constitute insider trading. Named after the Great Wall of China. In practice it operates through IT system segregation, physical separation, and compliance-managed Watch/Restricted lists. Wall-crossing is the formal process of crossing this barrier — officially sharing deal information with specific individuals under compliance approval. Those who are wall-crossed become restricted from directly trading the relevant issuer's securities.",
      },
      {
        term: "OAS (옵션조정스프레드)",
        termEn: "OAS — Option-Adjusted Spread",
        definition:
          "OAS는 채권에 내재된 옵션(예: 발행사가 일찍 상환할 수 있는 콜옵션)의 가치를 제거한 후 남는 순수한 신용 스프레드다. 콜러블 채권은 발행사가 금리가 내리면 일찍 갚을 수 있어 투자자에게 불리한 옵션이 내재돼 있다. 이 옵션 가치를 제거해야 두 채권의 신용 리스크를 사과 대 사과로 비교할 수 있다. 비유: 두 호텔 가격을 비교할 때 하나는 취소 수수료가 있고 하나는 없다면, 취소 수수료를 빼야 순수 숙박비를 비교할 수 있다. OAS는 그 '취소 수수료'를 제거한 순수 신용 프리미엄이다. 콜러블 FIG 채권, 포모사 채권, 커버드본드 비교 시 핵심 지표다.",
        definitionEn:
          "OAS is the pure credit spread remaining after stripping out the value of any embedded option in a bond — most commonly a call option giving the issuer the right to repay early. Callable bonds contain an option that works against investors: if rates fall, the issuer can redeem and reissue at a lower rate. To compare two bonds' credit risk on an apples-to-apples basis, you must remove this option value. Analogy: comparing two hotel prices when one has a cancellation fee and one doesn't — strip out the cancellation fee to compare the real room rate. OAS strips out that 'cancellation fee' to reveal the pure credit premium. It's the critical metric when comparing callable FIG bonds, Formosa bonds, or covered bonds.",
      },
      {
        term: "ALM (자산부채관리)",
        termEn: "ALM — Asset-Liability Management",
        definition:
          "ALM은 금융기관, 특히 보험사와 연기금이 미래에 지급해야 할 부채(보험금·연금)의 현금흐름·만기를 자산(채권 등)의 현금흐름·만기와 일치시키는 전략이다. 20년 후 보험금을 줘야 한다면, 20년 만기 채권을 사서 그 시점에 현금이 나오게 맞추는 것이다. 결혼 자금 마련에 비유하면, 결혼 예정일에 맞게 3년 만기 적금을 드는 것이 ALM의 개념이다 — 필요한 시점에 필요한 금액이 나오도록 자산의 만기를 맞춘다. 대만·일본 보험사가 초장기 달러 채권의 거대한 수요처인 이유가 바로 이것이다 — 그들의 부채가 달러 표기 장기 상품이기 때문이다.",
        definitionEn:
          "ALM is the strategy used by financial institutions — particularly insurers and pension funds — to match the cash flows and maturities of their assets (bonds, etc.) to their liabilities (future insurance payouts, pension payments). If you must pay insurance claims 20 years from now, you buy a 20-year bond so the cash arrives exactly when needed. Analogy: saving for a wedding — you put money in a 3-year time deposit timed to mature exactly when you need the funds. That's ALM: matching asset maturity to when cash is actually required. This is why Taiwanese and Japanese insurers are enormous buyers of long-dated dollar bonds — their liabilities are long-duration, dollar-denominated obligations.",
      },
    ],
    relatedSlugs: [],

    references: [
      {
        id: 1,
        author: "Bank for International Settlements (BIS)",
        title: "Debt Securities Statistics",
        source: "BIS Quarterly Review, Q4 2024",
        year: "2024",
        url: "https://www.bis.org/statistics/secstats.htm",
      },
      {
        id: 2,
        author: "World Federation of Exchanges (WFE)",
        title: "Global Market Statistics — Equity Market Capitalization",
        source: "WFE Annual Statistics, 2024",
        year: "2024",
        url: "https://www.world-exchanges.org/our-work/statistics",
      },
      {
        id: 3,
        author: "Bloomberg L.P.",
        title: "Bloomberg Global Aggregate Bond Index Factsheet",
        source: "Bloomberg Index Services, 2024",
        year: "2024",
        url: "https://www.bloomberg.com/professional/product/indices/bloomberg-fixed-income-indices/",
      },
      {
        id: 4,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: The Liquidity Coverage Ratio and Liquidity Risk Monitoring Tools",
        source: "BIS Basel Framework, January 2013",
        year: "2013",
        url: "https://www.bis.org/publ/bcbs238.htm",
      },
      {
        id: 5,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems",
        source: "BIS Basel Framework, December 2010 (rev. June 2011)",
        year: "2010",
        url: "https://www.bis.org/publ/bcbs189.htm",
      },
      {
        id: 6,
        author: "SIFMA",
        title: "2024 Capital Markets Fact Book",
        source: "Securities Industry and Financial Markets Association, 2024",
        year: "2024",
        url: "https://www.sifma.org/resources/research/fact-book/",
      },
    ],
  },

];

export function getMarket101ConceptBySlug(slug: string): MarketConcept | undefined {
  return ALL_MARKET101_CONCEPTS.find((c) => c.slug === slug);
}

export function getMarket101RelatedConcepts(slugs: string[]): MarketConcept[] {
  return slugs
    .map((s) => getMarket101ConceptBySlug(s))
    .filter((c): c is MarketConcept => c !== undefined);
}
