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


  // ────────────────────────────────────────────────────────────────────────────
  // FIG 용어 — AT1 / PONV / CoCo / Bail-in
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "at1-capital",
    title: "AT1 (Additional Tier 1 자본)",
    titleEn: "AT1 — Additional Tier 1 Capital",
    entryType: "term",
    category: "fig",
    categoryLabel: "FIG",
    categoryLabelEn: "FIG",
    excerpt:
      "은행 자본구조에서 CET1 바로 위에 위치하는 규제자본 도구. 채권처럼 거래되지만 법적으로는 자본이다.",
    excerptEn:
      "A regulatory capital instrument ranking just above CET1. It trades like a bond but is legally capital.",
    readingMinutes: 5,
    tags: ["AT1", "바젤III", "규제자본", "은행", "자본구조", "CoCo", "쿠폰", "콜옵션", "손실흡수", "FIG"],
    tagsEn: ["AT1", "Basel III", "Regulatory Capital", "Bank", "Capital Structure", "CoCo", "Coupon", "Call Option", "Loss Absorption", "FIG"],
    sections: [
      {
        heading: "AT1이란 무엇인가",
        headingEn: "What Is AT1?",
        body:
`AT1(Additional Tier 1)은 바젤 III 자본 프레임워크에서 규정하는 세 계층의 자본 중 두 번째에 해당하는 자본 도구다. 은행의 자본구조는 위에서부터 CET1(보통주 자본) → AT1 → Tier 2 → Senior 채무 순서로 쌓여 있으며, 손실이 발생하면 아래서부터 위로가 아니라 위에서부터 — 즉 주주(CET1)부터 먼저 흡수한다.

AT1은 채권 시장에서 채권처럼 거래된다. 쿠폰이 있고, CUSIP이나 ISIN이 있고, 블룸버그 화면에서 가격이 뜬다. 하지만 법적으로는 자본이다 — 만기가 없고(영구채 구조), 쿠폰 지급이 의무가 아니며, 자본비율이 특정 임계치 아래로 떨어지면 자동으로 손실을 흡수한다. 이 '채권처럼 생겼지만 자본'이라는 이중적 성격이 AT1을 복잡하고 투자자 입장에서 오해하기 쉬운 도구로 만든다.

왜 은행은 AT1을 발행하나? 가장 큰 이유는 비용이다. 주식(CET1)을 발행해 자본비율을 올리면 기존 주주 지분이 희석된다. AT1은 지분 희석 없이 규제자본 요건을 충족할 수 있는 수단이다. 대신 투자자에게 더 높은 쿠폰을 제공한다. 발행사(은행) 입장에서는 자본비율 관리와 주주 가치 보호를 동시에 추구하는 최적점이다. 글로벌 AT1 시장은 2024년 기준 약 2,500억 달러 이상 규모로 성장했으며, 유럽 대형 은행들과 아시아 은행들이 주요 발행 주체다.`,

        bodyEn:
`AT1 (Additional Tier 1) is the second tier in the Basel III capital framework. A bank's capital structure stacks from top to bottom: CET1 (Common Equity Tier 1) → AT1 → Tier 2 → Senior debt. When losses occur, they are absorbed from the top — shareholders (CET1) go first.

AT1 trades in bond markets like a bond. It has a coupon, a CUSIP or ISIN, and a Bloomberg quote. But legally it is capital — it has no maturity (perpetual structure), coupon payments are discretionary rather than obligatory, and it automatically absorbs losses if the bank's capital ratio falls below a specified trigger. This dual nature — looking like a bond but functioning as capital — is what makes AT1 complex and easy for investors to misunderstand.

Why do banks issue AT1? The primary driver is cost efficiency. Issuing common equity (CET1) dilutes existing shareholders. AT1 allows banks to meet regulatory capital requirements without diluting equity, in exchange for paying investors a higher coupon. From the issuer's perspective, it is the optimal instrument for simultaneously managing capital ratios and protecting shareholder value. The global AT1 market had grown to approximately $250 billion or more by 2024, with major European and Asian banks as the dominant issuers. The instrument became a cornerstone of post-crisis bank capital structures precisely because it accomplishes what regulators want — genuine loss absorption — while giving issuers a capital-efficient tool that sits comfortably within institutional fixed income portfolios.`,
      },
      {
        heading: "구조 — 쿠폰, 콜, 트리거",
        headingEn: "Structure — Coupon, Call, and Trigger",
        body:
`AT1의 구조는 세 가지 핵심 특징으로 정의된다: 쿠폰, 콜 옵션, 그리고 손실흡수 트리거.

첫째, 쿠폰은 임의 지급(discretionary)이다. 일반 채권이라면 쿠폰을 지급하지 않으면 디폴트가 발생한다. AT1은 다르다. 감독당국이 쿠폰 지급을 금지하거나 발행사가 자체 판단으로 쿠폰을 취소할 수 있다. 은행의 배당가능한도(MDA, Maximum Distributable Amount)가 부족해지면 쿠폰 지급이 자동으로 제한될 수 있다. 이 쿠폰 임의 미지급 리스크는 투자자가 AT1에서 요구하는 스프레드 프리미엄의 주요 원천이다.

둘째, 콜 옵션이 있다. AT1은 영구채지만 통상 발행 후 5년 또는 10년 시점에 First Call Date가 설정된다. 발행사는 이 날짜에 액면가로 상환(콜)할 권리가 있다. 시장 관행상 First Call Date에 콜을 행사하지 않으면 — 즉 채권을 연장하면 — 투자자에게 부정적 시그널이 된다. 하지만 발행사에게 의무가 아닌 '권리'다. 콜 스킵이 발생하면 해당 발행사의 AT1 스프레드는 크게 벌어진다.

셋째, 손실흡수 트리거가 핵심이다. AT1에는 두 종류의 손실흡수 메커니즘이 있다. 하나는 기계적 트리거: CET1 비율이 5.125%(또는 계약서에 명시된 수준) 아래로 떨어지면 AT1이 자동으로 주식으로 전환되거나 원금이 상각된다. 다른 하나는 PONV(비존속성 판단) 트리거: 감독당국이 은행이 더 이상 존속 가능하지 않다고 판단하면 강제 손실흡수가 발생한다. 크레디트 스위스 2023년 사태가 후자의 전형적 사례다.`,

        bodyEn:
`AT1's structure is defined by three core features: the coupon, the call option, and the loss-absorption trigger.

First, the coupon is discretionary. On a conventional bond, missing a coupon constitutes a default. AT1 works differently. The regulator may prohibit coupon payments, or the issuer itself may cancel them at its discretion. When a bank's Maximum Distributable Amount (MDA) becomes insufficient, coupon payments can be automatically restricted. This discretionary non-payment risk is a principal driver of the spread premium investors demand on AT1 instruments.

Second, there is a call option. AT1 is perpetual in legal structure, but issuances typically set a First Call Date five or ten years after issuance. The issuer has the right — not the obligation — to redeem the bonds at par on that date. Market convention treats a First Call Date as an implied redemption commitment; if the issuer skips the call and extends the bond, it sends a strongly negative signal to the market, typically causing the issuer's AT1 spreads to widen significantly. The option remains the issuer's right, not the investor's.

Third — and most critically — is the loss-absorption trigger. AT1 carries two distinct loss-absorption mechanisms. The first is a mechanical trigger: if the CET1 ratio falls below 5.125% (or whatever level is specified in the prospectus), the AT1 automatically converts to equity or its principal is written down. The second is the PONV (Point of Non-Viability) trigger: if the regulator determines the bank is no longer viable, mandatory loss absorption is imposed by regulatory action. The Credit Suisse episode of March 2023 is the definitive real-world example of the latter — CHF 16 billion of AT1 was written to zero under FINMA's PONV declaration, even as shareholders retained some residual value.`,
      },
      {
        heading: "투자자의 시각 — 왜 사고 왜 조심해야 하나",
        headingEn: "Investor View — Why Buy, and Why Be Careful",
        body:
`투자자들이 AT1을 사는 이유는 명확하다: 높은 쿠폰이다. 같은 은행이 발행한 Senior 채권 대비 AT1 쿠폰은 통상 200~400bp 이상 높다. 동일한 발행사에서 추가 수익을 얻기 위해 구조상 열후 지위를 받아들이는 것이다. 이 스프레드 차이는 위에서 설명한 세 가지 위험 — 쿠폰 임의 미지급, 콜 스킵, 손실흡수 — 에 대한 보상이다.

하지만 투자자가 조심해야 하는 이유도 명확하다. 핵심은 PONV 조항의 비대칭 리스크다. AT1 계약서에는 감독당국이 PONV를 선언하면 원금 전액이 상각될 수 있다고 적혀 있다. 그런데 이 조항이 실제로 발동되는 상황은 곧 은행이 구제금융이나 강제 합병을 받는 상황이기도 하다. 주주는 일부 가치를 받을 수 있지만 AT1 보유자는 제로가 될 수 있다. 크레디트 스위스 사태가 정확히 이 시나리오였다.

두 번째 조심 이유는 관할권 리스크다. PONV가 작동하는 방식은 나라마다 다르다. 스위스(FINMA)는 주식보다 먼저 AT1을 상각할 수 있다는 점이 계약서에 명시되어 있었다. EU와 영국은 주식 먼저 손실 흡수 원칙을 따르는 것이 일반적이다. 투자자가 어느 관할권에서 발행된 AT1을 사는지, 그 나라의 법과 계약서상 조항이 정확히 무엇인지를 반드시 확인해야 한다. '채권처럼 생겼다'는 이유만으로 산 투자자들이 CS 사태에서 가장 큰 충격을 받은 이유가 바로 이것이다. AT1은 계약서를 정독해야 하는 도구다.`,

        bodyEn:
`Investors buy AT1 for one straightforward reason: yield. AT1 coupons typically run 200–400 basis points or more above the same issuer's senior bonds. In exchange for accepting a structurally subordinated position, investors receive a meaningful additional return. This spread premium is compensation for the three risks described above — discretionary coupon cancellation, call skip, and loss absorption under trigger events.

But the reasons for caution are equally clear. The central concern is the asymmetric risk embedded in PONV provisions. The prospectus states that if the regulator declares a PONV, the entire principal can be written to zero. The problem is that a PONV declaration typically occurs precisely when the bank is receiving emergency support or being forced into a merger — a moment when shareholders may still retain residual value even as AT1 holders face total loss. The Credit Suisse episode of March 2023 was exactly this scenario: equity holders received merger consideration while CHF 16 billion of AT1 was written to zero.

The second risk is jurisdictional. PONV mechanics vary materially across countries. Swiss law and FINMA's mandate explicitly permit AT1 write-down ahead of equity — a provision that was clearly disclosed in Credit Suisse's prospectus but underweighted by many buyers. The EU and UK generally follow a principle of equity absorbing losses first before AT1. Investors must verify which jurisdiction's laws govern the issuance and exactly what the prospectus says about loss absorption sequencing. The investors most shocked by the CS outcome were those who bought on yield and brand name without parsing the legal terms. AT1 is a product that demands detailed prospectus analysis before any position is taken.`,
      },
    ],
    keyTerms: [],
    relatedSlugs: ["ponv", "coco-bond", "bail-in", "dcm-ecosystem"],
    appearsIn: [
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        title: "크레디트 스위스 AT1 전액상각 (2023)",
        titleEn: "Credit Suisse AT1 Write-Down (2023)",
      },
    ],
    references: [
      {
        id: 1,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems — Section on Additional Tier 1 Capital",
        source: "BIS Basel Framework (CAP 10–CAP 60), 2010 (consolidated 2023)",
        year: "2023",
        url: "https://www.bis.org/basel_framework/",
      },
      {
        id: 2,
        author: "FINMA (Swiss Financial Market Supervisory Authority)",
        title: "FINMA Approves Merger of Credit Suisse with UBS — AT1 Write-Down",
        source: "FINMA Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.finma.ch/en/news/2023/03/20230319-mm-ubs-cs-en/",
      },
    ],
  },

  {
    slug: "ponv",
    title: "PONV (비존속성 판단)",
    titleEn: "PONV — Point of Non-Viability",
    entryType: "term",
    category: "fig",
    categoryLabel: "FIG",
    categoryLabelEn: "FIG",
    excerpt:
      "감독당국이 은행이 더 이상 정상 기능을 유지할 수 없다고 판단하는 시점. AT1·CoCo 트리거의 핵심.",
    excerptEn:
      "The moment a regulator determines a bank is no longer viable. The central trigger mechanism for AT1 and CoCo instruments.",
    readingMinutes: 5,
    tags: ["PONV", "비존속성", "감독당국", "FINMA", "AT1", "CoCo", "바젤III", "은행위기", "크레디트스위스", "FIG"],
    tagsEn: ["PONV", "Point of Non-Viability", "Regulator", "FINMA", "AT1", "CoCo", "Basel III", "Bank Crisis", "Credit Suisse", "FIG"],
    sections: [
      {
        heading: "PONV의 정의와 역할",
        headingEn: "Definition and Role of PONV",
        body:
`PONV(Point of Non-Viability, 비존속성 판단)는 바젤 III 자본 프레임워크가 도입한 개념으로, 은행 감독당국이 해당 은행이 더 이상 자체 능력으로 정상 기능을 유지할 수 없다고 공식 판단하는 시점을 의미한다. 이 판단이 내려지는 순간, 은행이 발행한 AT1과 CoCo 채권의 손실흡수 조항이 즉각 발동된다.

바젤 III 이전에는 은행 위기 시 손실흡수의 순서와 방아쇠가 명확히 규정되지 않았다. 2008년 글로벌 금융위기에서 대형 은행들이 납세자 돈(베일아웃)으로 구제된 이후, 국제 규제 당국들은 '민간 자본이 먼저 손실을 흡수해야 한다'는 원칙을 법제화했다. PONV 조항은 그 원칙의 핵심 집행 도구다. 감독당국이 PONV를 선언하면 공적 자금이 투입되기 전에 AT1·CoCo 보유자가 손실을 부담한다.

PONV 판단 권한은 각국의 금융 감독당국에게 있다. 스위스는 FINMA, EU에서는 ECB(단일감독메커니즘, SSM)와 각국 NCA(국가 감독당국), 영국은 PRA(건전성감독청), 미국은 FDIC·연준이 해당 권한을 갖는다. 중요한 것은, PONV 선언이 반드시 은행이 이미 부실해진 후에 이루어지는 게 아니라는 점이다. '더 이상 자체 능력으로 회복할 수 없을 것'이라는 전망만으로도 PONV 선언이 가능하다. 이 전망적(forward-looking) 특성이 AT1 투자자에게 큰 불확실성 원천이 된다.`,

        bodyEn:
`PONV (Point of Non-Viability) is a concept introduced by the Basel III capital framework. It refers to the moment at which a banking regulator formally determines that a bank can no longer sustain normal operations under its own power. Once this determination is made, the loss-absorption clauses in the bank's AT1 and CoCo bonds are triggered immediately.

Before Basel III, the sequence and trigger for loss absorption in a bank crisis were not clearly codified. Following the 2008 global financial crisis — during which major banks were rescued with taxpayer funds (bail-outs) — international regulators enshrined the principle that private capital must absorb losses first. The PONV clause is the central enforcement tool for that principle. When a regulator declares PONV, AT1 and CoCo holders bear the losses before any public funds are deployed.

The authority to declare PONV rests with each country's financial supervisory body. In Switzerland it is FINMA; in the EU it is the ECB (Single Supervisory Mechanism) together with each country's NCA (National Competent Authority); in the UK it is the PRA (Prudential Regulation Authority); in the US the FDIC and Federal Reserve hold comparable authority. A critical nuance: PONV does not require that the bank has already failed. A forward-looking assessment that the bank will be unable to recover under its own steam is sufficient for a declaration. This prospective, judgment-based nature is a major source of uncertainty for AT1 investors — the trigger point is not a precise quantitative threshold but a supervisory call.`,
      },
      {
        heading: "관할권별 차이 — 스위스 vs EU vs 영국",
        headingEn: "Jurisdictional Differences — Switzerland vs EU vs UK",
        body:
`PONV 조항이 모든 나라에서 같은 방식으로 작동한다고 가정하는 것이 AT1 투자자의 가장 큰 실수 중 하나다. 관할권마다 손실흡수의 순서와 감독당국의 재량 범위가 다르기 때문에, 어느 나라에서 발행된 AT1인지가 투자 결과를 결정적으로 바꿀 수 있다.

스위스는 가장 강력한 감독 재량을 갖는 체계를 운영한다. 스위스 은행법과 FINMA의 규정에 따르면, FINMA는 주주 지분이 완전히 소멸되기 전이라도 AT1을 먼저 전액 상각할 수 있다. 이 '주식보다 먼저 AT1 상각' 원칙이 크레디트 스위스 2023년 사태의 핵심이었다. FINMA는 CS-UBS 강제 합병 구조에서 주주에게 일부 UBS 주식을 제공하면서도 AT1 CHF 16B를 전액 상각했다. 이는 일반적인 도산법 원칙(주식이 먼저 소멸)에 반하는 것처럼 보였고, 시장 충격을 증폭시켰다.

EU는 BRRD(은행회생·정리지침)를 기반으로 한다. BRRD의 원칙은 일반적으로 손실흡수가 자본구조의 아래에서부터(주식 → AT1 → Tier 2 순으로) 이루어져야 한다는 것이다. ECB 산하 SSM의 PONV 선언이 이루어져도 자본구조 순서를 뒤집기가 스위스보다 어렵다. 다만 '동일 순위 동일 처우(pari passu)' 원칙에도 예외가 있을 수 있다는 점은 주의가 필요하다.

영국 PRA는 EU에서 독립한 이후 독자적인 정리 체계(UK SRB)를 운영하지만, 기본 원칙은 EU와 유사하게 주식 먼저 손실 흡수를 원칙으로 한다. 결론: 투자자는 동일한 'AT1'이라는 라벨이 붙어 있어도 스위스, EU, 영국, 싱가포르, 홍콩 발행 채권이 서로 다른 법적 보호 수준을 갖는다는 점을 반드시 인식해야 한다.`,

        bodyEn:
`Assuming that PONV provisions work the same way in every jurisdiction is one of the most costly mistakes an AT1 investor can make. The sequence of loss absorption and the scope of supervisory discretion vary meaningfully across countries, meaning the jurisdiction of issuance can be decisive for investment outcomes.

Switzerland operates the framework with the strongest supervisory discretion. Under Swiss banking law and FINMA's mandate, FINMA can write down AT1 in full before shareholder equity has been entirely extinguished. This "AT1 write-down before equity" principle was at the heart of the Credit Suisse episode of 2023. In the forced CS-UBS merger, FINMA granted shareholders residual value in the form of UBS shares while writing CHF 16 billion of AT1 to zero. This appeared to invert the conventional insolvency hierarchy — shareholders typically go to zero before more senior creditors absorb losses — and amplified the market shock.

The EU operates under BRRD (Bank Recovery and Resolution Directive). BRRD's general principle is that losses are absorbed from the bottom of the capital structure upward: equity → AT1 → Tier 2. Inverting the capital hierarchy under the ECB's SSM is structurally harder than in Switzerland. That said, exceptions to the pari passu principle do exist and investors should not treat EU protection as absolute.

The UK's PRA, post-Brexit, operates its own resolution framework (UK SRR) but follows similar foundational principles to the EU, generally maintaining equity-first loss absorption. The takeaway for investors: the same "AT1" label affixed to bonds from Switzerland, the EU, the UK, Singapore, and Hong Kong carries materially different legal protection profiles. Jurisdiction and prospectus terms must be analyzed with the same rigor as the issuer's credit fundamentals.`,
      },
      {
        heading: "실전 적용 — CS 2023년 3월",
        headingEn: "Real Application — CS March 2023",
        body:
`2023년 3월 19일, FINMA는 크레디트 스위스(CS)에 대한 PONV를 공식 선언하고 UBS와의 강제 합병을 승인했다. 이 결정으로 CS가 발행한 AT1 채권 CHF 160억(약 17조 원)이 전액 상각되었다. 이것이 AT1 시장 역사상 가장 큰 단일 손실 사건이다.

사태의 경위를 정리하면: 2022년 10월 이후 CS는 대규모 고객 자금 유출, 경영진 교체, 연이은 손실로 신뢰가 급격히 저하되었다. 2023년 3월 초 실리콘밸리은행(SVB) 붕괴가 글로벌 은행 신뢰를 흔든 이후, CS 주가가 급락하고 CDS(신용부도스왑) 스프레드가 폭등했다. 3월 15일 사우디 국립은행(최대 주주)이 추가 지원 불가를 선언하면서 유동성 위기가 가속화되었다. FINMA와 스위스 중앙은행은 시스템 리스크 방지를 위해 UBS와의 합병을 밀어붙였다.

합병 조건에서 주주는 CS 22.48주당 UBS 1주를 받았다(1주당 약 CHF 0.76의 가치). AT1 보유자는 CHF 0을 받았다. 주식보다 선순위 지위를 가진 AT1이 주식 잔존 가치보다 먼저 소멸한 것이다. 이 '역전된 손실흡수 순서'가 글로벌 AT1 시장에 큰 충격을 주었고, 이후 수주간 다른 유럽 은행들의 AT1 스프레드도 크게 벌어졌다.

투자자 교훈: PONV 선언은 시장이 준비되기 전에 발생한다. 계약서상 명시된 스위스 법적 체계에서는 이 결과가 법적으로 유효했다. 높은 쿠폰의 대가로 투자자가 받아들인 리스크가 현실화된 사례다. AT1 투자에서는 발행사 신용등급만큼이나 관할권 법적 리스크 분석이 중요하다는 것을 이 사태가 입증했다.`,

        bodyEn:
`On 19 March 2023, FINMA formally declared Credit Suisse (CS) to have reached the Point of Non-Viability and approved a forced merger with UBS. The decision resulted in the complete write-down of CS's outstanding AT1 bonds, totalling CHF 16 billion — the largest single loss event in the history of the AT1 market.

A brief reconstruction of events: from October 2022 onward, CS suffered accelerating client outflows, serial management changes, and mounting losses that eroded confidence sharply. In early March 2023, the collapse of Silicon Valley Bank (SVB) shook global bank sentiment. CS's stock entered freefall and CDS spreads spiked. On 15 March, the Saudi National Bank — CS's largest shareholder — publicly ruled out further financial support, accelerating the liquidity spiral. FINMA and the Swiss National Bank, acting to prevent systemic contagion, engineered an emergency merger with UBS.

Under the merger terms, CS shareholders received 1 UBS share for every 22.48 CS shares held — approximately CHF 0.76 per share, a residual value. AT1 holders received CHF zero. An instrument ranking structurally above equity was extinguished before equity residual value was fully wiped out. This inversion of the conventional loss-absorption hierarchy sent a shock through global AT1 markets; spreads on other European banks' AT1 instruments widened sharply in the weeks that followed as investors repriced jurisdictional risk.

The lessons for investors are lasting. PONV declarations arrive before markets are positioned. Under the Swiss legal framework clearly disclosed in the prospectus, this outcome was legally valid. The high coupon AT1 investors had been earning was compensation for precisely this risk — and that risk materialized. The Credit Suisse episode established conclusively that jurisdictional legal analysis is at least as important as issuer credit analysis when investing in AT1 instruments.`,
      },
    ],
    keyTerms: [],
    relatedSlugs: ["at1-capital", "coco-bond", "bail-in"],
    appearsIn: [
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        title: "크레디트 스위스 AT1 전액상각 (2023)",
        titleEn: "Credit Suisse AT1 Write-Down (2023)",
      },
    ],
    references: [
      {
        id: 1,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems — PONV and AT1 Qualifying Criteria",
        source: "BIS Basel Framework (CAP 10.11–10.15), 2010 (consolidated 2023)",
        year: "2023",
        url: "https://www.bis.org/basel_framework/",
      },
      {
        id: 2,
        author: "FINMA (Swiss Financial Market Supervisory Authority)",
        title: "FINMA Approves Merger of Credit Suisse with UBS",
        source: "FINMA Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.finma.ch/en/news/2023/03/20230319-mm-ubs-cs-en/",
      },
      {
        id: 3,
        author: "European Banking Authority (EBA)",
        title: "EBA Statement on the Recognition of AT1 Instruments Following the CS Transaction",
        source: "EBA Press Statement, 20 March 2023",
        year: "2023",
        url: "https://www.eba.europa.eu/eba-statement-supervisory-and-resolution-practice-eba-jurisdiction-following-credit-suisse",
      },
    ],
  },

  {
    slug: "coco-bond",
    title: "CoCo (조건부 전환사채)",
    titleEn: "CoCo — Contingent Convertible Bond",
    entryType: "term",
    category: "fig",
    categoryLabel: "FIG",
    categoryLabelEn: "FIG",
    excerpt:
      "특정 조건이 충족될 때 자동으로 손실을 흡수하도록 설계된 채권형 자본 도구. AT1이 가장 대표적인 유형.",
    excerptEn:
      "A bond-like capital instrument that automatically absorbs losses when a trigger is hit. AT1 is the most common type.",
    readingMinutes: 5,
    tags: ["CoCo", "조건부전환사채", "AT1", "바젤III", "손실흡수", "은행자본", "트리거", "원금상각", "주식전환", "FIG"],
    tagsEn: ["CoCo", "Contingent Convertible", "AT1", "Basel III", "Loss Absorption", "Bank Capital", "Trigger", "Write-down", "Equity Conversion", "FIG"],
    sections: [
      {
        heading: "CoCo의 작동 원리",
        headingEn: "How CoCos Work",
        body:
`CoCo(Contingent Convertible Bond, 조건부 전환사채)의 이름에서 '조건부(Contingent)'는 핵심을 담고 있다 — 특정 조건이 충족될 때만 전환 또는 상각이 발생한다. 평상시에는 일반 채권처럼 쿠폰을 지급하고 원금을 보유하고 있다가, 미리 정해진 트리거가 발동되면 손실흡수 메커니즘이 작동한다.

손실흡수 방식에는 두 가지가 있다. 첫째는 주식 전환(Equity Conversion): 트리거 발동 시 CoCo 원금이 발행사의 보통주로 전환된다. 이 경우 채권 보유자는 주주가 되고, 원금 가치는 전환 시점의 주가에 의해 결정된다. 은행이 부실해지는 시점에 주가는 일반적으로 크게 하락해 있으므로, 투자자는 상당한 가치 손실을 겪는다. 둘째는 원금 상각(Write-down): 트리거 발동 시 원금의 전부 또는 일부가 즉시 소멸된다. 크레디트 스위스 AT1이 이 방식이었다.

트리거 종류도 두 가지다. 기계적(Mechanical) 트리거는 발행사의 CET1 비율이 계약서에 명시된 수준(통상 5.125% 또는 7%)으로 하락하면 자동 발동된다. 수치가 기준에 도달하면 기계적으로 작동하므로 '자동 트리거'라 부른다. PONV(비존속성) 트리거는 감독당국이 은행이 더 이상 존속 가능하지 않다고 판단할 때 발동된다. 앞서 설명한 PONV 개념이 여기서 직접 연결된다. 대부분의 AT1 CoCo는 기계적 트리거와 PONV 트리거를 모두 포함하며, 어느 쪽이든 먼저 발동되면 손실흡수가 시작된다.`,

        bodyEn:
`The word "Contingent" in CoCo (Contingent Convertible Bond) captures the instrument's essence: conversion or write-down only occurs when a specific condition is met. In normal times, a CoCo pays a coupon and maintains its principal like any bond. When a pre-defined trigger is hit, the loss-absorption mechanism activates.

There are two loss-absorption methods. The first is equity conversion: when the trigger fires, the CoCo's principal converts into the issuer's common equity. The bondholder becomes a shareholder, and the value received depends on the share price at the moment of conversion. Since banks are typically distressed when triggers activate, equity prices are usually deeply depressed — meaning investors absorb substantial value loss. The second method is principal write-down: when the trigger activates, some or all of the principal is immediately extinguished. Credit Suisse's AT1 instruments used this write-down mechanism.

Triggers also come in two forms. Mechanical triggers activate automatically when the issuer's CET1 ratio falls to the threshold specified in the prospectus — typically 5.125% or 7.00%. Because the trigger fires when the number hits the threshold, it is rules-based and predictable. PONV triggers activate when the regulator determines the bank is no longer viable — the PONV concept discussed in the related entry applies directly here. Most AT1 CoCo instruments include both mechanical and PONV triggers, with loss absorption initiating when whichever trigger fires first. The combination means investors face both a quantitative tripwire and an open-ended regulatory judgment call as potential activation events.`,
      },
      {
        heading: "왜 은행은 CoCo를 발행하나",
        headingEn: "Why Banks Issue CoCos",
        body:
`CoCo, 특히 AT1 CoCo가 바젤 III 도입 이후 급성장한 데는 명확한 경제적 논리가 있다. 은행 규제자는 은행이 충분한 손실흡수 능력을 보유하기를 원한다. 하지만 규제자의 요구를 충족하는 방법이 반드시 주식 발행일 필요는 없다 — 손실흡수 조항을 가진 자본 도구라면 규제자본으로 인정받을 수 있다.

주식 대비 CoCo(AT1)의 핵심 장점은 주주 희석 방지와 세금 혜택이다. 보통주를 발행하면 기존 주주의 지분율이 낮아진다. CoCo 발행은 트리거가 발동되기 전까지는 주주 지분에 영향을 주지 않는다. 또한 대부분의 국가에서 CoCo 쿠폰은 세금 공제가 가능한 이자비용으로 처리되는 반면, 주식 배당은 세후 이익에서 지급된다. 세금 효율성 측면에서 CoCo가 주식보다 유리하다.

투자자 입장에서는 고수익 채권형 도구라는 매력이 있다. 기관 투자자 중 일부 — 특히 상대적으로 유연한 투자 제한을 가진 고수익 채권 펀드, 크레딧 헤지펀드 — 는 AT1 CoCo가 제공하는 높은 쿠폰에 매력을 느낀다. 글로벌 AT1·CoCo 시장은 2024년 기준 2,500억 달러 이상 규모로 성장했다. 바클레이즈, HSBC, BNP 파리바, 도이치방크, 산탄데르 등 유럽 대형 은행들이 주요 발행 주체며, 아시아에서는 중국 대형 국영은행들과 홍콩 소재 은행들이 활발히 발행한다. 한국에서는 시중은행들이 신종자본증권이라는 명칭으로 국내에서 발행한다.`,

        bodyEn:
`The rapid growth of CoCo — particularly AT1 CoCo — after Basel III was introduced reflects clear economic logic. Bank regulators want banks to hold sufficient loss-absorbing capacity. But meeting that requirement does not necessarily require issuing common equity — any capital instrument with genuine loss-absorption provisions can qualify as regulatory capital.

The core advantages of CoCo (AT1) over common equity are two-fold: no shareholder dilution, and tax efficiency. Issuing new shares reduces existing shareholders' ownership percentages. CoCo issuance leaves existing shareholder stakes untouched until a trigger fires. Additionally, in most jurisdictions CoCo coupons are treated as tax-deductible interest expenses, whereas equity dividends are paid out of after-tax earnings. On a tax-adjusted basis, CoCo financing is cheaper than common equity financing for most bank issuers.

For investors, the appeal is straightforward: a bond-like instrument offering high yield. A subset of institutional investors — particularly high-yield fixed income funds and credit hedge funds with relatively flexible investment mandates — find AT1 CoCo attractive for the coupons on offer. The global AT1 and CoCo market had grown to over $250 billion by 2024. Major European banks including Barclays, HSBC, BNP Paribas, Deutsche Bank, and Santander are the primary issuers, while in Asia, large Chinese state-owned banks and Hong Kong-based lenders are active. In Korea, domestic commercial banks issue economically equivalent instruments under the domestic label of "신종자본증권" (new-type capital securities) in the local won-denominated market. The instrument has become a near-universal feature of large bank capital structures globally, cementing its role as a post-Basel III fixture.`,
      },
      {
        heading: "CoCo의 리스크 — 투자자 관점",
        headingEn: "Risks for Investors",
        body:
`CoCo, 특히 AT1 구조의 채권에 투자할 때 투자자가 직면하는 리스크는 크게 세 가지다.

첫째, Extension Risk(연장 리스크)다. AT1은 영구채지만 통상 5년 또는 10년 후 First Call Date가 있다. 시장 관행상 발행사가 이 날짜에 콜을 행사할 것이라는 기대가 형성되어 있다. 하지만 발행사가 경제적으로 콜 행사가 불리할 경우 — 예를 들어 콜 이후 리파이낸싱 비용이 현재 쿠폰보다 훨씬 높을 경우 — 콜 행사를 생략(스킵)할 수 있다. 콜 스킵이 발생하면 투자자는 예상보다 훨씬 긴 기간 동안 AT1을 보유하게 되고, 해당 발행사 AT1의 시장 가격이 크게 하락하는 것이 일반적이다.

둘째, 쿠폰 임의 미지급 위험이다. AT1 쿠폰은 발행사의 재량으로 언제든지 취소될 수 있으며, 취소가 되어도 기술적 디폴트가 아니다. 은행의 분배 가능 이익이 부족해지거나 규제 자본이 특정 요건 아래로 내려가면 쿠폰 지급이 자동으로 제한된다. 투자자는 이 쿠폰 취소 리스크를 명확히 인지해야 한다 — 특히 은행의 재정 상태가 악화되는 국면에서 이 리스크가 현실화될 가능성이 높다.

셋째, 원금 전액 손실 위험이다. 트리거(기계적 또는 PONV)가 발동되면 CoCo 원금의 전부 또는 상당 부분이 영구적으로 소멸될 수 있다. 이것은 일반적인 디폴트와 다르다 — 디폴트라면 회사 정리 과정에서 잔여 가치를 회수할 기회라도 있다. CoCo 원금 상각은 계약서에 명시된 조건에 따라 즉시, 영구적으로 이루어진다. CS 2023 사태에서 AT1 보유자들이 경험한 것이 바로 이것이다. 관할권에 따라 손실흡수 순서가 다르다는 점(특히 스위스 FINMA의 재량), 그리고 계약서상 정확히 어떤 조건에서 어떤 방식으로 손실흡수가 이루어지는지를 반드시 확인해야 한다.`,

        bodyEn:
`Investors in CoCo instruments — particularly AT1-structured bonds — face three principal risk categories.

First is extension risk. AT1 is legally perpetual, but standard practice embeds a First Call Date five or ten years after issuance, creating a market expectation of redemption. If the issuer finds it economically disadvantageous to call — for example, if refinancing costs post-call would be substantially higher than the current coupon — it may skip the call. When a call is skipped, investors are left holding the AT1 far longer than expected, and the market price of that issuer's AT1 typically drops sharply. Extension risk is not a tail event; several European banks have skipped AT1 calls, and each instance generated significant spread widening.

Second is discretionary coupon cancellation risk. AT1 coupons can be suspended by the issuer at any time without constituting a technical default. If the bank's distributable earnings fall short or its regulatory capital falls below specified thresholds, coupon payments are automatically restricted. Investors must treat this not as a remote event but as a material risk that is most likely to crystallize precisely when the bank's financial position is deteriorating — the moment when investors would most rely on their investment continuing to perform.

Third is principal loss risk. When a trigger — mechanical or PONV — activates, the CoCo's principal can be permanently extinguished in full or in substantial part. This differs from conventional default: in a normal restructuring, creditors retain some claim on residual value through the insolvency process. CoCo write-down is contractually immediate and permanent, with no residual claim remaining. This is exactly what AT1 holders experienced in the Credit Suisse episode. Investors must closely analyze the jurisdiction governing the instrument, the specific trigger levels and write-down mechanics disclosed in the prospectus, and the regulator's explicit discretionary powers — because the contractual terms, not general intuition about creditor hierarchies, determine the outcome.`,
      },
    ],
    keyTerms: [],
    relatedSlugs: ["at1-capital", "ponv", "bail-in"],
    appearsIn: [
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        title: "크레디트 스위스 AT1 전액상각 (2023)",
        titleEn: "Credit Suisse AT1 Write-Down (2023)",
      },
    ],
    references: [
      {
        id: 1,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems — Qualifying Criteria for AT1 and CoCo Instruments",
        source: "BIS Basel Framework (CAP 10–CAP 30), 2010 (consolidated 2023)",
        year: "2023",
        url: "https://www.bis.org/basel_framework/",
      },
      {
        id: 2,
        author: "FINMA (Swiss Financial Market Supervisory Authority)",
        title: "FINMA Approves Merger of Credit Suisse with UBS — AT1 Write-Down",
        source: "FINMA Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.finma.ch/en/news/2023/03/20230319-mm-ubs-cs-en/",
      },
    ],
  },

  {
    slug: "bail-in",
    title: "베일인 (Bail-in)",
    titleEn: "Bail-in",
    entryType: "term",
    category: "fig",
    categoryLabel: "FIG",
    categoryLabelEn: "FIG",
    excerpt:
      "은행 위기 시 정부 세금(납세자)이 아닌 채권자와 주주가 손실을 부담하게 하는 메커니즘. 2008 금융위기 이후 글로벌 규제의 핵심 원칙.",
    excerptEn:
      "A mechanism requiring a bank's creditors and shareholders — not taxpayers — to absorb losses in a crisis. The core principle of post-2008 financial regulation.",
    readingMinutes: 5,
    tags: ["베일인", "bail-in", "베일아웃", "BRRD", "TLAC", "MREL", "은행정리", "AT1", "자본구조", "금융규제"],
    tagsEn: ["Bail-in", "Bail-out", "BRRD", "TLAC", "MREL", "Bank Resolution", "AT1", "Capital Structure", "Financial Regulation", "FIG"],
    sections: [
      {
        heading: "베일인 vs 베일아웃",
        headingEn: "Bail-in vs Bail-out",
        body:
`2008년 글로벌 금융위기가 남긴 가장 큰 제도적 유산 하나는 '베일아웃(Bail-out)'에 대한 반성이다. 당시 미국 정부는 리먼 브라더스의 파산을 허용한 뒤 그 충격을 목도하고, AIG에 850억 달러, 씨티그룹에 450억 달러, 뱅크 오브 아메리카에 450억 달러를 투입했다. 영국은 RBS와 로이즈에 수백억 파운드를 쏟아부었다. 이 구제금융의 재원은 모두 납세자의 세금이었다.

베일아웃(Bail-out)의 문제는 두 가지다. 첫째, 납세자가 민간 금융기관의 손실을 대신 부담하는 것은 형평성 문제를 야기한다. 둘째, 대형 은행들이 '망하기엔 너무 크다(Too Big to Fail)'는 암묵적 정부 보증을 기대하게 되어 과도한 리스크를 감수하는 도덕적 해이(Moral Hazard)가 발생한다.

베일인(Bail-in)은 이 문제에 대한 규제적 해법이다. 은행이 위기에 처할 때 손실을 먼저 흡수해야 하는 것은 납세자가 아니라 그 은행의 주주와 채권자다 — 위험을 알고 투자한 민간 자본이 먼저 손실을 부담해야 한다는 원칙이다. 이 원칙을 법제화한 것이 EU의 BRRD(은행회생·정리지침, 2014년 도입), 글로벌 G-SIB(글로벌 시스템적으로 중요한 은행)에 대한 TLAC(총손실흡수능력) 요건, 그리고 유럽 은행들에 적용되는 MREL(최소요구자기자본·적격부채)이다. 이 모든 규제 체계가 베일인을 기본 원칙으로 설계되었다.`,

        bodyEn:
`The most significant institutional legacy of the 2008 global financial crisis is the collective reckoning with bail-outs. Following the Lehman Brothers failure — whose collapse the US government permitted before observing the resulting systemic shock — the US Treasury injected $85 billion into AIG, $45 billion into Citigroup, and $45 billion into Bank of America. The UK poured tens of billions of pounds into RBS and Lloyds. All of this was funded by taxpayers.

The problems with bail-outs are structural. First, requiring taxpayers to absorb losses from private financial institutions raises fundamental fairness objections. Second, when large banks expect an implicit government guarantee — the "Too Big to Fail" assurance — they have an incentive to take on excessive risk, knowing that the downside will be socialized. This moral hazard distorts risk-taking behavior throughout the financial system.

Bail-in is the regulatory response to these problems. When a bank faces insolvency, the first loss-bearers should be the bank's own shareholders and creditors — private capital that invested in the institution knowingly and was compensated for the risk it accepted. This principle was codified in the EU's BRRD (Bank Recovery and Resolution Directive, enacted 2014), the TLAC (Total Loss-Absorbing Capacity) requirements applicable to global systemically important banks (G-SIBs), and the MREL (Minimum Requirement for Own Funds and Eligible Liabilities) framework for European banks. All of these regulatory regimes were architecturally designed around the bail-in principle as their foundational logic.`,
      },
      {
        heading: "베일인이 작동하는 순서",
        headingEn: "The Bail-in Sequence",
        body:
`베일인이 실제로 발동되면, 손실 흡수는 자본구조상 가장 열후한 계층부터 순서대로 이루어진다. 이 순서를 이해하는 것이 은행 채권 투자자에게 핵심이다.

첫 번째 손실흡수층은 CET1(보통주 자본)이다. 주주가 먼저 손실을 흡수한다. 주식 가치가 먼저 소멸된다. 두 번째는 AT1이다. CET1이 완전히 소멸되거나 감독당국이 PONV를 선언하면, AT1이 다음으로 손실을 흡수한다. AT1은 주식으로 전환되거나 원금이 상각된다. 세 번째는 Tier 2(후순위 채권)다. AT1까지도 부족하면 Tier 2 채권 보유자가 손실을 부담한다. 네 번째로는 Senior Non-Preferred(선순위 비우선) 채권이 있다 — 이는 주요 규제 목적으로 손실흡수에 사용될 수 있도록 설계된 시니어 채무의 일종이다. 일반 Senior(선순위 담보·무담보) 채권과 예금은 이론상 보호된다.

이 손실흡수 능력의 최소 요건을 보장하기 위해 도입된 것이 TLAC과 MREL이다. TLAC은 G-SIB(글로벌 시스템적으로 중요한 은행 — JP모건, HSBC, BNP 파리바 등)에 적용되며, 위험가중자산 대비 최소 18%(2022년 이후) 이상의 손실흡수 능력을 보유하도록 요구한다. MREL은 EU 은행들에게 적용되며 비슷한 요건을 규정한다. 두 요건 모두 충분한 '베일인 가능 자본(bail-inable capital)'의 사전 적립을 강제함으로써, 위기 시 납세자 개입 없이 은행 구조조정이 가능하도록 설계되었다.`,

        bodyEn:
`When a bail-in is activated, losses are absorbed sequentially from the most subordinated layer of the capital structure upward. Understanding this sequence is essential for any investor in bank debt instruments.

The first loss-absorption layer is CET1 (common equity). Shareholders absorb losses first; equity value is extinguished before anything else. The second layer is AT1: once CET1 is fully wiped out — or if the regulator declares PONV — AT1 absorbs losses next, through equity conversion or principal write-down. The third layer is Tier 2 (subordinated bonds): if AT1 is insufficient, Tier 2 bondholders bear losses. The fourth layer includes Senior Non-Preferred bonds — a category of senior debt specifically designed to be eligible for bail-in for resolution purposes, sitting below ordinary senior unsecured in the hierarchy. Standard Senior (secured and unsecured) bonds and deposits are protected in theory and typically the last resort.

TLAC and MREL were introduced to ensure that banks maintain adequate minimum bail-in capacity at all times. TLAC applies to G-SIBs (Globally Systemically Important Banks — JPMorgan, HSBC, BNP Paribas, etc.) and requires them to hold loss-absorbing capacity of at least 18% of risk-weighted assets (from 2022 onward). MREL imposes comparable requirements on EU banks. Both frameworks achieve the same goal: by mandating a pre-positioned stack of bail-inable capital, they ensure that when a bank fails, an orderly restructuring is possible without taxpayer involvement. The bail-in mechanism is the machinery through which this theoretical pre-positioning is actually executed.`,
      },
      {
        heading: "CS 2023 — 베일인의 실제 사례",
        headingEn: "CS 2023 — Bail-in in Practice",
        body:
`크레디트 스위스 2023년 3월 사태는 현대 은행 규제 역사에서 가장 중요한 베일인 사례 중 하나다 — 단, 완전한 교과서적 베일인은 아니었다는 점이 흥미롭다.

베일인이 부분적으로 발생한 것은 명확하다. CS AT1 채권 CHF 160억이 전액 상각되었다. 이것은 베일인의 핵심 메커니즘 — 민간 채권자(AT1 보유자)가 납세자 대신 손실을 흡수 — 이 실제로 작동한 사례다. 스위스 정부가 지원한 유동성(CHF 100B 이상의 중앙은행 대출 보증)은 베일인이 발생한 이후의 안전망이었지, 주주나 채권자보다 먼저 투입된 베일아웃이 아니었다.

그런데 '비정상적' 요소가 있었다. 일반적인 베일인 원칙에서는 주식이 CoCo/AT1보다 먼저 소멸되어야 한다. 하지만 CS-UBS 합병에서 주주는 일부 가치(UBS 주식)를 받았고 AT1 보유자는 제로를 받았다. 이 손실흡수 순서의 역전이 국제 금융계에 큰 논란을 일으켰다. EU와 영국 감독당국은 즉각 성명을 통해 "우리 관할권에서는 주식이 먼저 손실을 흡수할 것"이라고 명확히 했다.

제도적 보완 논의 측면에서, CS 사태 이후 AT1 계약서의 표준 문구와 관할권별 손실흡수 순서에 대한 점검이 이루어졌다. 스위스는 FINMA의 재량을 허용하는 법적 체계를 유지하되, 관련 리스크가 투자자에게 더 명확하게 전달되어야 한다는 논의가 진행되었다. 동시에 AT1 쿠폰 스프레드가 전반적으로 확대되었다 — 투자자들이 관할권 리스크와 PONV 리스크에 더 높은 가격을 요구하게 된 것이다. 베일인 원칙이 제대로 작동하려면 계약서와 법적 체계가 정확히 무엇을 규정하는지를 투자자가 사전에 이해해야 한다는 교훈이 남았다.`,

        bodyEn:
`The Credit Suisse episode of March 2023 stands as one of the most consequential bail-in events in modern banking regulatory history — though notably, it was not a textbook bail-in in the purest sense, and that distinction is precisely what generated lasting controversy.

That a partial bail-in occurred is unambiguous. CHF 16 billion of CS AT1 bonds were written to zero. The core bail-in mechanism — private creditors (AT1 holders) absorbing losses rather than taxpayers — functioned as designed. The Swiss government-backed liquidity support (a central bank lending guarantee of over CHF 100 billion) served as a backstop deployed after the bail-in, not as a bail-out deployed instead of it.

The "abnormal" element was the sequencing. Under standard bail-in principles, equity should be extinguished before CoCo/AT1 absorbs losses. In the CS-UBS merger, shareholders received some residual value — UBS shares — while AT1 holders received zero. This inversion of the standard loss-absorption hierarchy triggered an immediate and significant reaction from international regulators. The ECB, EBA, and PRA collectively issued statements within hours, explicitly affirming that in their jurisdictions, equity would absorb losses before AT1 in any future resolution.

The institutional aftermath involved two main dimensions. First, prospectus language and jurisdiction-specific loss absorption sequencing came under fresh scrutiny. Switzerland maintained its legal framework permitting FINMA discretion, while debate continued about ensuring that the associated risks are communicated transparently to investors. Second, AT1 coupon spreads widened structurally across the market — investors repriced jurisdictional and PONV risk upward. The enduring lesson: the bail-in principle only functions as intended when investors genuinely understand, in advance, what the contractual terms and applicable law actually prescribe for every scenario. The label "bail-in compliant" is not a uniform standard — the details in each prospectus and each jurisdiction's statute book are what ultimately determine outcomes.`,
      },
    ],
    keyTerms: [],
    relatedSlugs: ["at1-capital", "ponv", "coco-bond"],
    appearsIn: [
      {
        type: "market-deal",
        slug: "credit-suisse-at1",
        title: "크레디트 스위스 AT1 전액상각 (2023)",
        titleEn: "Credit Suisse AT1 Write-Down (2023)",
      },
    ],
    references: [
      {
        id: 1,
        author: "Bank for International Settlements (BIS) / Financial Stability Board (FSB)",
        title: "Principles on Loss-absorbing and Recapitalisation Capacity of G-SIBs in Resolution — TLAC Term Sheet",
        source: "FSB TLAC Standard, November 2015",
        year: "2015",
        url: "https://www.fsb.org/2015/11/total-loss-absorbing-capacity-tlac-principles-and-term-sheet/",
      },
      {
        id: 2,
        author: "FINMA (Swiss Financial Market Supervisory Authority)",
        title: "FINMA Approves Merger of Credit Suisse with UBS",
        source: "FINMA Press Release, 19 March 2023",
        year: "2023",
        url: "https://www.finma.ch/en/news/2023/03/20230319-mm-ubs-cs-en/",
      },
      {
        id: 3,
        author: "European Banking Authority (EBA) / Single Resolution Board (SRB) / European Central Bank (ECB)",
        title: "Joint Statement on AT1 Instruments Following Credit Suisse",
        source: "EBA / SRB / ECB Joint Press Statement, 20 March 2023",
        year: "2023",
        url: "https://www.eba.europa.eu/eba-statement-supervisory-and-resolution-practice-eba-jurisdiction-following-credit-suisse",
      },
      {
        id: 4,
        author: "Bank for International Settlements (BIS)",
        title: "Basel III: A Global Regulatory Framework for More Resilient Banks and Banking Systems",
        source: "BIS Basel Framework, December 2010 (consolidated 2023)",
        year: "2010",
        url: "https://www.bis.org/basel_framework/",
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
