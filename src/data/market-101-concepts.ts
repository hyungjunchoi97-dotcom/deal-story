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
  { key: "dcm"        as const, label: "DCM",       labelEn: "DCM",                    dotColor: "bg-teal-500"   },
  { key: "ecm"        as const, label: "ECM",       labelEn: "ECM",                    dotColor: "bg-blue-500"   },
  { key: "fig"        as const, label: "FIG",       labelEn: "FIG",                    dotColor: "bg-rose-500"   },
  { key: "sovereign"  as const, label: "소버린",     labelEn: "Sovereign",              dotColor: "bg-indigo-500" },
  { key: "structured" as const, label: "구조화",     labelEn: "Structured",             dotColor: "bg-amber-500"  },
  // LBO 시리즈는 /deal-101 로 이관됨 — market-101에서 제거
  // { key: "lbo" as const, label: "LBO", labelEn: "LBO", dotColor: "bg-indigo-500" },
  { key: "levfin"     as const, label: "LevFin",          labelEn: "LevFin",                 dotColor: "bg-yellow-500" },
  { key: "syndloan"   as const, label: "신디케이티드론", labelEn: "Syndicated Loans",       dotColor: "bg-cyan-500"   },
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
    entryType: "article",
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
    keyTerms: [
      {
        term: "AT1 자본 (Additional Tier 1)",
        termEn: "Additional Tier 1 Capital (AT1)",
        definition: "바젤III 자본 프레임워크에서 CET1(보통주 자본) 바로 위에 위치하는 규제자본 도구. 만기가 없는 영구채 구조이며 쿠폰 지급이 임의 지급이다. 자본비율이 특정 임계치(보통 CET1 5.125%) 아래로 떨어지면 자동으로 손실을 흡수하거나 주식으로 전환된다. 채권처럼 거래되지만 법적으로는 자본 — 이 이중적 성격이 AT1을 오해하기 쉬운 도구로 만든다. 글로벌 시장 규모 $2,500억+(2024).",
        definitionEn: "A regulatory capital instrument sitting just above CET1 in the Basel III capital framework. Features a perpetual structure with discretionary coupon payments. If the capital ratio falls below a specified threshold (typically CET1 5.125%), it automatically absorbs losses or converts to equity. It trades like a bond but is legally capital — this dual nature makes AT1 prone to investor misunderstanding. Global market size: $250B+ (2024).",
      },
      {
        term: "영구채 구조 (Perpetual Bond)",
        termEn: "Perpetual Bond Structure",
        definition: "AT1의 핵심 특성 — 법적 만기가 없다. 대신 발행 5년 후부터 발행자(은행)가 콜옵션을 행사해 상환할 수 있다. 시장 관행상 첫 콜 시점에 상환하는 것이 '암묵적 기대'였으나, 2019년 산탄더 AT1 콜 미행사 사건이 이 기대를 깨뜨렸다. 콜을 행사하지 않으면 쿠폰이 재설정되므로 발행자도 상환 유인이 있다. 투자자 리스크 = 기대한 상환일에 상환받지 못할 가능성.",
        definitionEn: "AT1's key characteristic — no legal maturity date. From the 5th year post-issuance, the issuer can exercise a call option to redeem. Market convention held that redemption at first call was an 'implicit expectation,' but Santander's 2019 non-call event shattered this norm. Since failing to call triggers coupon reset, issuers retain redemption incentive. Investor risk = the possibility of not being redeemed on the expected date.",
      },
      {
        term: "손실흡수 메커니즘",
        termEn: "Loss Absorption Mechanism",
        definition: "AT1이 은행 위기 시 손실을 흡수하는 두 가지 방법. ①주식 전환(Conversion): CET1 비율이 임계치 이하로 떨어지면 AT1이 보통주로 전환. ②원금 상각(Write-down): CET1 임계치 이하 시 원금을 전부 또는 일부 0으로 감액. Credit Suisse 사태(2023.3)는 상각 방식으로 CHF 160억의 AT1이 전액 소각됐다. 어떤 메커니즘이 적용되는지는 발행 국가 규정과 발행 설명서(Prospectus)에 명시된다.",
        definitionEn: "Two methods by which AT1 absorbs losses during a bank crisis. ①Equity Conversion: when the CET1 ratio falls below threshold, AT1 converts to common equity. ②Principal Write-down: when below threshold, principal is reduced to zero in whole or part. The Credit Suisse episode (March 2023) used write-down, extinguishing CHF 16B of AT1 to zero. Which mechanism applies is specified in the issuing country's regulations and the prospectus.",
      },
      {
        term: "Credit Suisse AT1 전액 상각 (2023)",
        termEn: "Credit Suisse AT1 Write-Down (2023)",
        definition: "2023년 3월 UBS에 의한 CS 강제 합병 과정에서 FINMA가 CHF 160억 AT1 전액을 소각한 사건. 충격: CS 주주는 약 CHF 0.76/주의 잔존 가치를 받았으나 AT1 보유자는 0을 받았다 — 법적으로 주식보다 선순위여야 할 AT1이 먼저 소각된 것. 스위스 법상 PONV 선언 시 이 순서가 허용됨이 사후 확인됐다. 글로벌 AT1 시장 스프레드가 수주일간 급등하며 투자자들이 관할권 리스크를 재평가하는 계기가 됐다.",
        definitionEn: "FINMA's decision to write down CHF 16 billion of AT1 to zero during UBS's forced acquisition of Credit Suisse in March 2023. The shock: CS equity holders received ~CHF 0.76/share in residual value, while AT1 holders received nothing — AT1, which should be legally senior to equity, was extinguished first. Swiss law confirmed this sequencing was permitted upon a PONV declaration. Global AT1 spreads surged for weeks as investors repriced jurisdictional risk.",
      },
      {
        term: "쿠폰 취소 (Coupon Cancellation)",
        termEn: "Coupon Cancellation",
        definition: "AT1 발행자(은행)가 규제 요건에 미달하거나 MDA(최대 배분 가능 금액) 기준을 충족하지 못할 때 쿠폰을 지급하지 않을 수 있는 권리. 의무 쿠폰 채권과 달리 AT1 쿠폰 취소는 법적 디폴트가 아니다. MDA 한도 미달 시 AT1 쿠폰 지급이 자동 제한된다. 투자자 리스크 = 은행 재무 악화 시 예상 현금흐름이 끊길 가능성.",
        definitionEn: "The right of AT1 issuers to skip coupon payments when they fall below regulatory requirements or fail to satisfy MDA (Maximum Distributable Amount) criteria. Unlike mandatory coupon bonds, AT1 coupon cancellation is not a legal default. When MDA criteria are not met, AT1 coupons are automatically restricted. Investor risk = the possibility that expected cash flows are cut when a bank's finances deteriorate.",
      },
    ],
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
    keyTerms: [
      {
        term: "PONV (생존불가능 시점)",
        termEn: "Point of Non-Viability (PONV)",
        definition: "규제당국이 '이 은행은 공적 자금 지원 없이는 생존 불가능하다'고 판단하는 시점. PONV 선언은 CoCo 채권(AT1/T2)의 손실흡수 메커니즘을 트리거한다 — 원금 상각 또는 주식 전환이 자동 발동. 시장 기반 CET1 트리거(자동 기계적)와 달리 PONV는 규제당국의 재량 판단이다. Credit Suisse 사태에서 스위스 FINMA가 공식 CET1 트리거 미달 전에 PONV를 선언하며 AT1을 소각했다.",
        definitionEn: "The point at which a regulator determines a bank cannot survive without public support. A PONV declaration triggers the loss absorption mechanism of CoCo bonds (AT1/T2) — principal write-down or equity conversion activates automatically. Unlike market-based CET1 triggers (automatic and mechanical), PONV is a discretionary regulatory judgment. In the Credit Suisse episode, Swiss FINMA declared PONV before the official CET1 trigger threshold was breached, extinguishing AT1.",
      },
      {
        term: "PONV vs CET1 트리거",
        termEn: "PONV vs CET1 Trigger",
        definition: "CoCo 채권 손실흡수를 발동시키는 두 가지 경로. CET1 트리거는 자본비율이 사전 설정치(5.125% 또는 7%) 이하로 떨어질 때 자동 발동 — 기계적·예측 가능. PONV는 규제당국이 재량으로 판단 — 주관적·불확실. 문제는 PONV 선언이 CET1 트리거보다 먼저 발동될 수 있다는 점이다. CS 사태처럼 자본비율이 공식 임계치 위에 있어도 당국이 PONV로 판단하면 AT1이 소각될 수 있다.",
        definitionEn: "Two paths that trigger CoCo bond loss absorption. The CET1 trigger fires automatically when the capital ratio falls below a preset level (5.125% or 7%) — mechanical and predictable. PONV is a discretionary regulatory judgment — subjective and uncertain. The critical issue: PONV can be declared before the CET1 trigger threshold is breached. As in the CS case, even if the capital ratio is above the official threshold, regulators can determine PONV and extinguish AT1.",
      },
      {
        term: "관할권 리스크 (Jurisdictional Risk)",
        termEn: "Jurisdictional Risk",
        definition: "AT1/CoCo 투자에서 발행 국가의 법률 체계에 따라 손실흡수 메커니즘이 다르게 작동하는 리스크. 스위스(FINMA)는 PONV 선언 시 AT1을 주식보다 먼저 소각할 수 있다. EU/영국은 일반적으로 주식이 먼저 손실을 흡수해야 AT1으로 전이된다는 원칙을 따른다. CS 사태 전까지 많은 투자자가 이 차이를 인지하지 못했다. '높은 쿠폰만 보고 법률 조건 미확인' 투자자들에게 가장 큰 충격을 준 사건이다.",
        definitionEn: "The risk in AT1/CoCo investing that loss absorption mechanisms operate differently depending on the issuing country's legal framework. Switzerland (FINMA) can extinguish AT1 before equity under a PONV declaration. The EU/UK generally follows the principle that equity must absorb losses before AT1. Many investors were unaware of this distinction before the CS episode — it was the most shocking event for those who chased the high coupon without reading the legal terms.",
      },
      {
        term: "CS AT1 사태의 투자 교훈",
        termEn: "Investment Lessons from CS AT1",
        definition: "2023년 CS AT1 전액 소각에서 투자자들이 얻은 교훈. ①발행 설명서(Prospectus) 정독 필수 — PONV 조항, 관할권 법률 준거, 손실흡수 방식. ②발행자 신용도만큼 관할권 법률 분석이 중요. ③AT1 고쿠폰은 고유한 리스크에 대한 보상 — '안전한 채권'이 아님. ④등급(BBB 은행)만 믿지 말고 구조적 후순위성을 이해해야. ⑤유동성 위기 시 AT1 가격은 채권·주식보다 먼저, 더 크게 하락한다.",
        definitionEn: "Investment lessons from the 2023 CS AT1 full write-down. ①Mandatory prospectus reading — PONV provisions, governing jurisdiction, loss absorption method. ②Jurisdiction legal analysis is as important as issuer creditworthiness. ③AT1 high coupons compensate for inherent risks — they are NOT safe bonds. ④Don't rely on ratings alone (BBB bank) — understand structural subordination. ⑤In liquidity crises, AT1 prices fall faster and harder than bonds or equity.",
      },
      {
        term: "MDA (최대 배분 가능 금액)",
        termEn: "Maximum Distributable Amount (MDA)",
        definition: "은행이 쿠폰·배당 등을 지급할 수 있는 최대 한도를 규제하는 EU/바젤 규정. 자본 보전 완충(CCB), 경기대응 완충(CCyB), G-SIB 추가 완충을 초과하는 이익에만 배분 가능. MDA 기준 미달 시 AT1 쿠폰 지급이 자동 제한된다. MDA 한도가 높을수록 AT1 쿠폰 지급 안정성이 높다. 바젤III 체계에서 MDA는 자본 완충 재건 전에 가치를 이전하는 것을 방지하는 안전장치다.",
        definitionEn: "An EU/Basel regulation that caps the maximum distributable amount for coupons, dividends, and bonuses. Only profits exceeding the Capital Conservation Buffer (CCB), Countercyclical Buffer (CCyB), and G-SIB surcharge are distributable. When MDA criteria are not met, AT1 coupons are automatically restricted. A higher MDA headroom means greater AT1 coupon stability. In Basel III, MDA prevents banks from distributing value before rebuilding capital buffers.",
      },
    ],
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
    keyTerms: [
      {
        term: "CoCo 채권 (조건부 전환사채)",
        termEn: "Contingent Convertible Bond (CoCo)",
        definition: "특정 조건(자본비율 임계치 이하 또는 PONV 선언)이 충족되면 자동으로 손실을 흡수하는 은행 자본 상품. AT1과 Tier 2 두 가지 형태로 발행된다. '조건부'(Contingent)는 손실흡수가 특정 조건에 달려있다는 의미, '전환'(Convertible)은 주식으로 전환될 수 있다는 의미. 전환 대신 원금 상각(Write-down) 방식을 사용하는 CoCo도 있다. 바젤 III 이후 유럽 은행들이 대규모 발행했으며 글로벌 시장은 $2,500억 이상.",
        definitionEn: "A bank capital instrument that automatically absorbs losses when specific conditions are met (capital ratio falls below threshold or PONV is declared). Issued as both AT1 and Tier 2. 'Contingent' means loss absorption depends on specific conditions; 'Convertible' means it can convert to equity. Some CoCos use principal write-down instead of conversion. European banks issued CoCos extensively after Basel III; the global market exceeds $250 billion.",
      },
      {
        term: "전환형 vs 상각형 CoCo",
        termEn: "Conversion vs Write-Down CoCo",
        definition: "CoCo의 두 가지 손실흡수 방식. ①전환형(Equity Conversion): 트리거 발동 시 사전 결정된 비율로 주식으로 전환 — 기존 주주 희석이지만 보유자가 잔존 가치를 가짐. ②상각형(Principal Write-down): 트리거 발동 시 원금을 부분 또는 전액 0으로 소각 — CS AT1이 이 방식. 투자자 관점에서 상각형이 전환형보다 리스크가 더 크다. 어느 방식인지는 발행 설명서(Prospectus)에 명시.",
        definitionEn: "Two loss absorption methods for CoCos. ①Equity Conversion: upon trigger, converts at a predetermined rate to common equity — dilutes shareholders but holders retain residual value. ②Principal Write-Down: upon trigger, principal is reduced to zero in part or full — CS AT1 used this method. From an investor perspective, write-down CoCos carry more risk than conversion CoCos. The method is specified in the prospectus.",
      },
      {
        term: "CET1 트리거 임계치",
        termEn: "CET1 Trigger Threshold",
        definition: "CoCo 채권 손실흡수를 자동 발동시키는 자본비율 수준. 일반적으로 CET1 비율 5.125%가 AT1 최소 요건(바젤 III). 일부 은행은 7% 고임계치 CoCo를 발행 — 더 일찍 손실흡수 발동, 대신 투자자에게 더 높은 쿠폰 지급. 임계치가 높을수록 투자자 리스크가 크다. CS 사태가 증명했듯, 5.125% 임계치 미달 없이도 PONV 선언으로 소각될 수 있어 임계치가 '안전 보장선'이 아니다.",
        definitionEn: "The capital ratio level that automatically triggers a CoCo bond's loss absorption. Generally, a CET1 ratio of 5.125% is the AT1 minimum under Basel III. Some banks issue 'high-trigger' CoCos at 7% — absorbing losses earlier, in exchange for higher coupons. A higher threshold means greater investor risk. As the CS episode proved, 5.125% is NOT a safety guarantee — PONV can trigger write-down even without breaching the CET1 threshold.",
      },
      {
        term: "Deutsche Bank CoCo 충격 (2016)",
        termEn: "Deutsche Bank CoCo Shock (2016)",
        definition: "2016년 2월 Deutsche Bank의 AT1 쿠폰 지급 능력 의구심이 부각되며 글로벌 AT1/CoCo 시장이 급락한 사건. DB의 2015년 순손실 발표 후 투자자들이 MDA 규정에 따른 쿠폰 취소 가능성을 우려했다. 실제 쿠폰은 지급됐으나 AT1 가격은 수주 만에 10~15% 하락. CoCo 고쿠폰의 리스크 프리미엄이 실질적임을 재확인한 사례다.",
        definitionEn: "The February 2016 event when questions about Deutsche Bank's ability to pay AT1 coupons triggered a global AT1/CoCo market sell-off. After DB reported a 2015 net loss, investors feared coupon cancellation under MDA rules. The coupon was ultimately paid, but AT1 prices fell 10–15% within weeks. A case that reconfirmed the CoCo high-coupon risk premium is real.",
      },
      {
        term: "바젤 III 자본 계층",
        termEn: "Basel III Capital Hierarchy",
        definition: "국제 은행 규제 기준(바젤 III)이 정한 은행 자본의 3계층. ①CET1(보통주자본): 보통주+이익잉여금, 최고 품질, RWA의 4.5% 이상 필수. ②AT1(추가기본자본): CoCo 채권, CET1과 합산 Tier 1 자본 6% 이상. ③Tier 2(보완자본): 후순위채·CoCo T2, 총자본 8% 이상. 각 계층은 위기 시 손실흡수 순서와 규제 요건이 다르다. 이 계층 구조를 이해해야 AT1의 리스크 위치를 파악할 수 있다.",
        definitionEn: "The three-tier bank capital structure defined by Basel III. ①CET1 (Common Equity Tier 1): common equity + retained earnings, highest quality, must be at least 4.5% of RWA. ②AT1 (Additional Tier 1): CoCo bonds, combined with CET1 must reach 6%+ Tier 1 capital. ③Tier 2 (Supplementary Capital): subordinated bonds and T2 CoCos, total capital must reach 8%+. Each tier has different loss absorption sequencing and regulatory requirements.",
      },
    ],
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
    keyTerms: [
      {
        term: "베일인 (Bail-in)",
        termEn: "Bail-in",
        definition: "은행 위기 시 공적 자금(납세자 부담) 대신 은행의 채권자와 주주에게 손실을 강제로 분담시키는 규제 도구. 2008년 금융위기의 Bail-out(공적 자금 구제) 반성에서 탄생했다. 규제당국은 은행 파산 시 주식 → AT1 → Tier 2 → 선순위채 순서로 강제 상각 또는 주식 전환을 명령할 수 있다. 2016년 키프로스 베일인이 최초의 본격 적용 사례다.",
        definitionEn: "A regulatory tool that forces banks' creditors and shareholders to absorb losses during a crisis, instead of using public funds (taxpayer bailouts). Born from the backlash against 2008 crisis bailouts. Regulators can order forced write-downs or equity conversions in order: equity → AT1 → Tier 2 → senior bonds. Cyprus's 2016 bail-in was the first full-scale application.",
      },
      {
        term: "Bail-in vs Bail-out",
        termEn: "Bail-in vs Bail-out",
        definition: "은행 위기 대응의 두 가지 근본적으로 다른 접근. Bail-out은 정부·중앙은행이 공적 자금으로 부실 은행을 구제 — 2008년 AIG($1,800억), Citigroup 구제가 대표적. 납세자 부담이 크고 도덕적 해이(Too Big to Fail)를 유발. Bail-in은 은행 내부 손실 흡수 — 주주·AT1·T2 순서로 손실 강제 분담. EU는 BRRD(은행회생·정리지침)로 bail-in을 제도화. CS 사태는 bail-in이 예측 불가능하게 작동할 수 있음을 보여줬다.",
        definitionEn: "Two fundamentally different approaches to banking crises. Bail-out: government/central bank rescues troubled banks with public funds — AIG ($180B), Citigroup rescues in 2008 are exemplary. Carries large taxpayer burden and creates moral hazard (Too Big to Fail). Bail-in: internal loss absorption — forcing shareholders, AT1, and T2 to share losses in sequence. The EU institutionalized bail-in through BRRD. The CS episode showed that bail-in can operate unpredictably in practice.",
      },
      {
        term: "BRRD (은행회생·정리지침)",
        termEn: "Bank Recovery and Resolution Directive (BRRD)",
        definition: "EU가 2016년 시행한 은행 위기 관리 지침. 모든 EU 은행에 베일인 가능한 부채를 최소 비율(MREL — 최소 손실흡수·자본재건 요건) 이상 유지하도록 의무화. 위기 시 당국이 주주·AT1·T2·선순위채 순서로 베일인을 적용할 수 있다. BRRD 이전에는 각국 규정이 달라 EU 내 은행 위기 대응이 불일관했다. CS 사태는 BRRD 비적용(스위스) 관할의 리스크를 부각시켰다.",
        definitionEn: "An EU directive implemented in 2016 for bank crisis management. Requires all EU banks to maintain a minimum ratio of bail-in-able liabilities (MREL — Minimum Requirement for own funds and Eligible Liabilities). In a crisis, authorities can apply bail-in in order: equity → AT1 → T2 → senior bonds. Before BRRD, inconsistent national rules made EU bank crisis responses uneven. The CS episode highlighted the risks of non-BRRD jurisdictions (Switzerland).",
      },
      {
        term: "TLAC (총손실흡수능력)",
        termEn: "Total Loss-Absorbing Capacity (TLAC)",
        definition: "FSB(금융안정위원회)가 G-SIB(글로벌 시스템중요 은행)에 요구하는 최소 손실흡수 능력 기준. RWA의 16~18% 또는 총 익스포저의 6% 이상을 베일인 가능 부채(주식·AT1·T2·일부 선순위채)로 보유해야 한다. JP모건·Citi·HSBC·BNP 등이 TLAC 의무 적용 대상. TLAC와 MREL이 함께 글로벌 베일인 아키텍처를 구성한다.",
        definitionEn: "The minimum loss-absorbing capacity standard required by the FSB for G-SIBs (Global Systemically Important Banks). They must hold at least 16–18% of RWA or 6% of total exposures in bail-in-able liabilities (equity, AT1, T2, and some senior bonds). JP Morgan, Citi, HSBC, and BNP Paribas are among TLAC-obligated institutions. TLAC and MREL together form the global bail-in architecture.",
      },
      {
        term: "선순위채 베일인 위험",
        termEn: "Senior Bond Bail-in Risk",
        definition: "AT1·Tier 2 자본이 모두 소진된 후에도 은행을 살리기 위해 선순위채(Senior Unsecured Bond)까지 베일인 대상이 될 수 있다는 리스크. BRRD/TLAC 체계에서 '선순위 비우선(Senior Non-Preferred)' 부채가 명시적 베일인 대상으로 설계됐다. 선순위채 투자자들이 과거에는 보호받는다고 생각했지만, 규제 강화 이후 선순위채도 베일인 대상이 될 수 있다는 인식이 확산됐다. 결국 은행 채권 투자자 모두에게 해당 은행 건전성 모니터링이 필수가 됐다.",
        definitionEn: "The risk that even senior unsecured bonds may be bailed in to rescue a bank after AT1 and Tier 2 capital are exhausted. Under BRRD/TLAC frameworks, 'Senior Non-Preferred' liabilities are explicitly designated as bail-in-able. While senior bond investors previously assumed protection, post-regulation awareness has spread that senior bonds can also be bailed in. Ultimately, all bank bond investors must actively monitor the issuing bank's financial health.",
      },
    ],
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

  // ══════════════════════════════════════════════════════════════════════════
  // DCM 프로세스 — Agent 2 terms
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "chinese-wall",
    title: "차이니즈 월",
    titleEn: "Chinese Wall",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "IB 부서와 S&T·리서치 사이의 정보 장벽. 미공개 발행 정보가 트레이딩 데스크로 흘러들어 내부자 거래로 이어지지 않도록 막는 제도적 경계선.",
    excerptEn:
      "The information barrier between the IB division and S&T/Research. A regulatory and procedural boundary preventing undisclosed issuance information from leaking to trading desks.",
    readingMinutes: 5,
    tags: ["차이니즈 월", "정보 장벽", "MNPI", "내부자 거래", "컴플라이언스"],
    tagsEn: ["Chinese Wall", "Information Barrier", "MNPI", "Insider Trading", "Compliance"],
    sections: [
      {
        heading: "왜 '벽'이 필요한가",
        headingEn: "Why the Wall Exists",
        body:
`투자은행은 한 지붕 아래 두 개의 상충하는 역할을 수행한다. IB 부서는 발행사의 자금 조달을 돕는다 — 아직 시장에 공개되지 않은 재무 계획, 발행 규모, 가격 의향을 다룬다. 반면 S&T 부서는 같은 채권이나 주식을 시장에서 사고판다.

두 부서 사이에 정보가 자유롭게 흐른다면, S&T 트레이더가 미공개 발행 계획을 미리 알고 포지션을 잡는 것은 명백한 내부자 거래다. 차이니즈 월은 이 구조적 이해충돌을 관리하기 위한 제도적 장치로, 물리적(별도 층·구역), 절차적(시스템 접근 권한), 법적(서약서·교육) 세 층으로 운영된다.

글로벌 규제당국은 차이니즈 월을 IB 영업의 전제 조건으로 본다. 미국 SEC Rule 10b-5, 유럽 MAR(Market Abuse Regulation) 모두 이 장벽의 존재와 실효성을 요구한다.`,
        bodyEn:
`An investment bank performs two structurally conflicting roles under one roof. The IB division helps issuers raise capital, handling information not yet public: financing plans, deal size, pricing intent. The S&T division trades the same bonds or equities in the market.

If information flowed freely between these two, an S&T trader learning of an undisclosed issuance plan and pre-positioning would constitute clear insider trading. The Chinese Wall is the institutional mechanism managing this structural conflict, operating on three layers: physical (separate floors/zones), procedural (system access controls), and legal (NDAs, compliance training).

Global regulators treat the Chinese Wall as a prerequisite for IB business. Both U.S. SEC Rule 10b-5 and Europe's Market Abuse Regulation (MAR) require this barrier to exist and be operationally effective.`,
      },
      {
        heading: "벽을 넘을 때 — 'Over the Wall'",
        headingEn: "When the Wall Comes Down — 'Over the Wall'",
        body:
`때로는 S&T나 리서치 담당자가 IB 딜 정보를 알아야 할 경우가 있다. 헤징 전략 논의, 발행사 실사 참여 등이 그 예다. 이때 컴플라이언스 승인을 받은 뒤 '벽을 넘어(over the wall)' IB 사이드에 들어온다.

그 순간부터 해당 인물은 MNPI(중요 미공개 정보) 보유자가 되어 해당 증권의 거래가 제한된다. 딜이 완료되고 정보가 공개될 때까지 제한은 유지된다.

차이니즈 월의 붕괴는 IB 역사에서 반복적으로 등장하는 스캔들의 원인이었다 — Salomon Brothers 국채 경매 스캔들, 닷컴 버블기 리서치·IB 유착 문제 등이 대표적이다.`,
        bodyEn:
`Sometimes S&T or Research personnel need access to IB deal information — for example, to discuss hedging strategies or participate in issuer due diligence. In such cases, after compliance approval, the person crosses "over the wall" into the IB side.

From that moment, they hold MNPI and are restricted from trading the relevant securities until the deal closes and information becomes public.

Wall breaches are the root of recurring IB scandals — the Salomon Brothers Treasury auction scandal, the Research/IB conflicts during the dot-com bubble, and others.`,
      },
    ],
    keyTerms: [
      {
        term: "MNPI",
        termEn: "MNPI",
        definition: "Material Non-Public Information. 시장에 아직 공개되지 않은 중요 정보. 이를 이용한 거래는 법적으로 금지된다.",
        definitionEn: "Material Non-Public Information. Significant undisclosed market information; trading on it is legally prohibited.",
      },
      {
        term: "Over the Wall",
        termEn: "Over the Wall",
        definition: "컴플라이언스 승인을 거쳐 차이니즈 월을 넘어 IB 사이드의 미공개 정보에 접근하는 행위.",
        definitionEn: "Crossing the Chinese Wall with compliance approval to access non-public information on the IB side.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "mnpi", "syndicate"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "syndicate",
    title: "신디케이트",
    titleEn: "Syndicate",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "채권 발행을 공동으로 인수하는 은행 컨소시엄. Lead Manager·Bookrunner·Co-Manager 계층 구조와 각자의 역할·수수료 배분을 이해하면 DCM 딜의 핵심 역학이 보인다.",
    excerptEn:
      "A consortium of banks jointly underwriting a bond issuance. Understanding the Lead Manager–Bookrunner–Co-Manager hierarchy, roles, and fee splits reveals the core dynamics of any DCM deal.",
    readingMinutes: 6,
    tags: ["신디케이트", "북러너", "리드 매니저", "인수단", "수수료", "DCM"],
    tagsEn: ["Syndicate", "Bookrunner", "Lead Manager", "Underwriter", "Fees", "DCM"],
    sections: [
      {
        heading: "왜 혼자 하지 않는가",
        headingEn: "Why Not Go It Alone?",
        body:
`대형 채권 발행 — 수천억 원에서 수조 원 규모 — 은 단일 은행이 혼자 소화하기엔 너무 크다. 만약 발행 직후 시장이 나빠져 투자자가 나타나지 않으면 은행이 전액을 떠안게 된다. 리스크 분산을 위해 여러 은행이 컨소시엄, 즉 신디케이트를 구성한다.

신디케이트 구조는 세 계층으로 나뉜다. (1) Lead Manager / Joint Bookrunner — 딜 구조 설계, 투자자 로드쇼 주도, 최종 가격 결정 권한 보유. 수수료 배분의 40–60%를 가져간다. (2) Co-Lead Manager — 북빌딩에 참여하고 특정 투자자 그룹을 담당. 수수료의 20–30% 수준. (3) Co-Manager — 소규모 참여, 특정 지역·계정 접근성 제공.

발행사 입장에서 신디케이트는 투자자 접근성의 확장이다. 단일 은행의 고객 네트워크를 넘어 글로벌 기관투자자에게 동시에 채권을 판매할 수 있다.`,
        bodyEn:
`Large bond deals — ranging from hundreds of millions to billions — are too large for a single bank to absorb alone. If the market sours after launch and investors don't show up, the bank is stuck holding the entire deal. To distribute risk, multiple banks form a consortium: the syndicate.

The syndicate structure has three tiers: (1) Lead Manager / Joint Bookrunner — designs the deal structure, leads investor roadshows, has final pricing authority. Takes 40–60% of fees. (2) Co-Lead Manager — participates in bookbuilding, covers specific investor segments. Earns ~20–30% of fees. (3) Co-Manager — smaller participation, provides access to specific regions or accounts.

From the issuer's perspective, a syndicate expands investor reach — simultaneously distributing bonds to global institutional investors beyond any single bank's client network.`,
      },
      {
        heading: "신디케이트와 스프레드 — 수수료의 구조",
        headingEn: "Syndicate and Spread — Fee Structure",
        body:
`채권 발행의 수수료는 주로 인수 스프레드(underwriting spread)로 불리며, 발행 가격과 은행들이 지불하는 가격의 차이다. 이 스프레드는 Management Fee, Underwriting Fee, Selling Concession 세 파트로 구성된다.

투자등급(IG) 딜의 총 수수료는 통상 발행금액의 20–50bp(0.20–0.50%) 수준이다. 하이일드(HY)는 리스크가 높아 100–300bp까지 올라간다. 국가(소버린) 발행은 관계 유지 목적으로 수수료가 낮게 설정되는 경우가 많다.

신디케이트 내에서 북러너 지위는 순수 수익뿐 아니라 '리그테이블' 순위에도 직결된다 — 블룸버그, 딜로직 등이 집계하는 이 순위는 향후 딜 수임에 직접 영향을 미친다.`,
        bodyEn:
`Bond issuance fees are primarily captured as the underwriting spread: the difference between the public offering price and what the banks pay. This spread is split into three components: Management Fee, Underwriting Fee, and Selling Concession.

Investment grade (IG) deal fees typically run 20–50bps (0.20–0.50%) of issuance size. High-yield (HY) deals carry higher risk and fees can reach 100–300bps. Sovereign issuances are often priced with lower fees as relationship-maintenance transactions.

Within a syndicate, bookrunner status matters not just for revenue but for "league table" rankings — compiled by Bloomberg and Dealogic — which directly influence future deal mandates.`,
      },
    ],
    keyTerms: [
      {
        term: "Bookrunner",
        termEn: "Bookrunner",
        definition: "북빌딩을 주도하고 수요장부를 관리하는 신디케이트 내 핵심 은행. 딜 구조 결정권과 최대 수수료 배분을 갖는다.",
        definitionEn: "The lead bank managing the order book in a syndicated offering. Holds deal structuring authority and the largest fee share.",
      },
      {
        term: "인수 스프레드",
        termEn: "Underwriting Spread",
        definition: "발행 가격과 은행들이 지불하는 가격의 차이. Management Fee, Underwriting Fee, Selling Concession으로 구성된다.",
        definitionEn: "The difference between public offering price and what banks pay. Consists of Management Fee, Underwriting Fee, and Selling Concession.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "book-building", "chinese-wall", "nic"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "primary-secondary-market",
    title: "발행시장 vs 유통시장",
    titleEn: "Primary vs Secondary Market",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "채권이 처음 세상에 나오는 발행시장(1차)과, 이후 투자자들 사이에서 거래되는 유통시장(2차). 이 두 시장의 구분이 DCM 생태계 전체의 출발점이다.",
    excerptEn:
      "The primary market where bonds are first issued, and the secondary market where they trade afterward among investors. This distinction is the foundation of the entire DCM ecosystem.",
    readingMinutes: 5,
    tags: ["발행시장", "유통시장", "1차 시장", "2차 시장", "DCM", "채권"],
    tagsEn: ["Primary Market", "Secondary Market", "Bond Issuance", "Trading", "DCM"],
    sections: [
      {
        heading: "발행시장 — 채권의 탄생",
        headingEn: "Primary Market — Where Bonds Are Born",
        body:
`발행시장(Primary Market)은 발행사가 처음으로 채권을 발행하는 시장이다. 기업이 공장을 짓기 위해, 정부가 재정 적자를 메우기 위해, 은행이 자본을 조달하기 위해 채권을 발행하는 모든 행위가 여기서 일어난다.

DCM 뱅커의 일은 바로 이 시장을 위한 것이다. 발행 구조 설계(만기, 쿠폰, 통화), 투자자 수요 탐색(로드쇼, IOI), 가격 결정, 실제 자금 수령이 1차 시장의 프로세스다. 발행이 완료되면 발행사는 자금을 수령하고, 투자자는 새 채권을 보유하게 된다.

발행시장의 특성상 모든 거래는 발행사와 투자자 사이의 직접 거래다. 이미 발행된 채권은 이 시장에서 거래되지 않는다.`,
        bodyEn:
`The primary market is where issuers first create bonds. Everything here — a corporation issuing bonds to build a factory, a government to fund a budget deficit, a bank to raise capital — begins in this market.

DCM bankers work for this market. Deal structure design (maturity, coupon, currency), investor demand discovery (roadshows, IOIs), pricing, and actual fund receipt all happen in the primary market. When issuance completes, the issuer receives proceeds and investors hold new bonds.

By definition, all primary market transactions are direct between issuer and investor. Already-issued bonds do not trade here.`,
      },
      {
        heading: "유통시장 — 채권이 살아 움직이는 곳",
        headingEn: "Secondary Market — Where Bonds Come Alive",
        body:
`유통시장(Secondary Market)은 이미 발행된 채권이 투자자들 사이에서 거래되는 곳이다. 주식의 거래소와 달리 채권 유통시장은 대부분 OTC(장외 거래, Over-the-Counter) 방식으로 운영된다 — 딜러(주로 IB의 S&T 데스크)가 매수·매도 호가를 제시하고 투자자와 직접 거래한다.

유통시장의 유동성은 발행시장 수요에도 직결된다. 유통시장에서 특정 발행사의 채권이 활발히 거래된다는 것은 투자자가 '필요할 때 팔 수 있다'는 신뢰를 의미하고, 이는 1차 발행 시 더 낮은 금리(발행사에 유리)로 이어진다.

채권 가격은 유통시장에서 실시간으로 형성된다. 이 가격이 1차 발행의 기준점(벤치마크)이 되는 것이다 — 예컨대 "기존 채권 대비 T+5bp" 같은 표현이 그 연결을 보여준다.`,
        bodyEn:
`The secondary market is where already-issued bonds trade among investors. Unlike equity exchanges, most bond secondary markets operate OTC (Over-the-Counter): dealers (primarily IB S&T desks) quote bid/ask prices and trade directly with investors.

Secondary market liquidity directly affects primary market demand. Active secondary trading of an issuer's bonds signals that investors can sell when needed, which translates into lower interest rates (advantageous for the issuer) at primary issuance.

Bond prices form in real time in the secondary market. These prices become the reference point for primary issuance — expressions like "T+5bps over existing bonds" show this connection.`,
      },
    ],
    keyTerms: [
      {
        term: "OTC (장외 거래)",
        termEn: "OTC (Over-the-Counter)",
        definition: "거래소를 거치지 않고 딜러와 투자자가 직접 거래하는 방식. 채권 유통시장의 지배적 거래 형태.",
        definitionEn: "Trading directly between dealer and investor without a formal exchange. The dominant form of bond secondary market trading.",
      },
      {
        term: "벤치마크 (Benchmark)",
        termEn: "Benchmark",
        definition: "신규 채권 가격 결정의 기준이 되는 기존 채권. 미국 국채(UST), 독일 국채(Bund) 등이 대표적.",
        definitionEn: "Existing bonds used as reference points for pricing new issuances. U.S. Treasuries (UST) and German Bunds are key examples.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "book-building", "spread-basis", "nic"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "book-building",
    title: "북빌딩",
    titleEn: "Book-Building",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "투자자의 수요를 모아 발행 가격과 규모를 결정하는 프로세스. 발행사와 은행이 시장의 진짜 수요를 발견하는 핵심 메커니즘.",
    excerptEn:
      "The process of gathering investor orders to determine issuance price and size. The core mechanism by which issuers and banks discover real market demand.",
    readingMinutes: 5,
    tags: ["북빌딩", "수요 조사", "발행 가격", "IOI", "신디케이트", "DCM"],
    tagsEn: ["Book-Building", "Demand Discovery", "Issue Price", "IOI", "Syndicate", "DCM"],
    sections: [
      {
        heading: "북빌딩 — 가격 발견의 과정",
        headingEn: "Book-Building — Price Discovery in Action",
        body:
`북빌딩(Book-Building)은 채권 발행 전 투자자들의 수요를 체계적으로 수집하는 프로세스다. 은행이 일방적으로 가격을 정하는 것이 아니라, 실제 시장 수요를 기반으로 발행 조건을 결정한다는 점에서 '수요 발견(demand discovery)' 메커니즘이라고도 불린다.

프로세스는 대략 이렇게 진행된다. (1) 발행 의사 타진(Announcement/IOI) — 발행사와 북러너가 발행 예정을 시장에 알리고 사전 관심도를 파악한다. (2) 로드쇼(Roadshow) — 발행사 CFO와 IR팀이 주요 투자자를 직접 만나 투자 설득에 나선다. (3) 북 오픈(Book Open) — 공식 수요 접수 시작. 투자자는 희망 금리(스프레드)와 금액을 제출한다. (4) 프라이싱(Pricing) — 수요 집계 후 최종 스프레드와 발행 규모 확정.

북빌딩 결과는 단순한 발행 성공·실패를 넘어 시장이 발행사를 어떻게 평가하는지를 보여주는 신호다.`,
        bodyEn:
`Book-building is the process of systematically gathering investor demand before a bond issuance. Rather than the bank unilaterally setting a price, issuance terms are determined based on actual market demand — hence it's also called "demand discovery."

The process typically unfolds as follows: (1) Announcement/IOI — the issuer and bookrunner signal an upcoming deal and gauge preliminary interest. (2) Roadshow — the issuer's CFO and IR team meet key investors to make the investment case. (3) Book Open — official order collection begins; investors submit preferred spread levels and amounts. (4) Pricing — after order aggregation, final spread and deal size are confirmed.

Book-building results signal far more than deal success or failure — they reveal how the market assesses the issuer's credit quality and investor appetite.`,
      },
      {
        heading: "오버부킹과 커버리지 — 시장이 말하는 것",
        headingEn: "Oversubscription and Coverage — What the Market Says",
        body:
`북빌딩에서 중요한 지표 중 하나는 커버리지 비율(coverage ratio) — 총 수요를 최종 발행 규모로 나눈 값이다. 3배 커버리지는 목표의 3배에 해당하는 수요가 몰렸다는 뜻이다.

높은 커버리지는 (1) 타이트한 스프레드 실현, (2) 발행 규모 확대, (3) 이후 발행의 협상력 강화로 이어진다. 반대로 커버리지가 낮으면 스프레드를 넓혀야 하거나, 최악의 경우 발행이 취소된다.

투자자 구성(investor mix)도 중요하다. 고품질 장기 투자자(보험사, 연기금)가 북을 채우면 'sticky money'로 불리며 이후 유통시장 가격 안정에 기여한다. 반면 헤지펀드 위주의 북은 단기 매도 압력이 크다.`,
        bodyEn:
`A key metric in book-building is the coverage ratio — total demand divided by final deal size. A 3x coverage means demand was three times the target amount.

High coverage enables: (1) tighter spread pricing, (2) upsizing the deal, and (3) stronger negotiating leverage on future issuances. Low coverage forces wider spreads or, in the worst case, deal withdrawal.

Investor composition also matters. High-quality long-term investors (insurers, pension funds) filling the book are called "sticky money," contributing to secondary market price stability. A hedge-fund-heavy book carries higher near-term selling pressure.`,
      },
    ],
    keyTerms: [
      {
        term: "IOI (Indication of Interest)",
        termEn: "IOI (Indication of Interest)",
        definition: "발행 전 투자자가 북러너에게 전달하는 비공식 수요 의향. 구속력은 없지만 수요 파악의 핵심 도구.",
        definitionEn: "Informal pre-deal demand indications from investors to the bookrunner. Non-binding but essential for demand discovery.",
      },
      {
        term: "커버리지 비율",
        termEn: "Coverage Ratio",
        definition: "총 수요를 최종 발행 규모로 나눈 값. 딜의 시장 수용도를 나타내는 핵심 지표.",
        definitionEn: "Total demand divided by final deal size. Key indicator of market receptivity to a deal.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "syndicate", "nic", "primary-secondary-market"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // DCM 가격 결정 — Agent 3 terms
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "spread-basis",
    title: "스프레드와 베이시스",
    titleEn: "Spread & Basis",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "채권 수익률이 무위험 기준금리보다 얼마나 높은가. 이 차이(스프레드)가 신용 리스크와 유동성 리스크를 포함한 시장의 신용 평가를 보여준다.",
    excerptEn:
      "How much higher a bond's yield is versus the risk-free benchmark. This spread encapsulates the market's credit and liquidity assessment of the issuer.",
    readingMinutes: 6,
    tags: ["스프레드", "베이시스", "신용 리스크", "국채", "bp", "DCM"],
    tagsEn: ["Spread", "Basis", "Credit Risk", "Treasury", "bps", "DCM"],
    sections: [
      {
        heading: "스프레드란 무엇인가",
        headingEn: "What Is a Spread?",
        body:
`채권 스프레드는 특정 채권의 수익률(yield)과 같은 만기의 무위험 기준 금리의 차이다. 예컨대 삼성전자 5년물 채권이 5.00% 수익률을 제공하고, 동일 만기 한국 국채 수익률이 3.50%라면 스프레드는 150bp(basis points = 1.5%)다.

이 스프레드는 두 가지 리스크의 합산이다. (1) 신용 리스크 — 발행사가 원리금을 갚지 못할 리스크. 신용등급이 낮을수록 스프레드가 크다. (2) 유동성 리스크 — 언제든지 시장에서 팔 수 있는가. 소규모·신규 발행사는 유동성 프리미엄이 붙는다.

시장 전체의 신용 스프레드 수준은 경기 사이클의 가장 민감한 온도계 중 하나다. 위기 시 스프레드는 급격히 확대(widening)되고, 안정기에는 타이트(tight)해진다.`,
        bodyEn:
`A bond spread is the difference between a bond's yield and the risk-free benchmark rate for the same maturity. For example, if a Samsung Electronics 5-year bond yields 5.00% and the same-maturity Korean government bond yields 3.50%, the spread is 150bps (basis points = 1.5%).

This spread is the sum of two risk premiums: (1) Credit risk — the risk that the issuer cannot repay principal and interest. Lower-rated issuers pay wider spreads. (2) Liquidity risk — whether the bond can be sold in the market at any time. Smaller or newer issuers carry a liquidity premium.

The overall level of credit spreads is one of the most sensitive gauges of the economic cycle. Spreads widen sharply during crises and tighten during stable periods.`,
      },
      {
        heading: "베이시스 — 기준 금리의 선택",
        headingEn: "Basis — Choosing the Benchmark",
        body:
`스프레드를 계산하려면 기준 금리('베이시스')가 먼저 필요하다. 시장에서 쓰이는 주요 기준은 세 가지다.

(1) 국채(Government Bond) 스프레드 — 미국 국채(UST), 독일 국채(Bund), 한국 국채(KTB)에 대한 스프레드. "T+150bp"처럼 표기. 소버린·SSA 발행에서 가장 일반적. (2) SOFR/LIBOR 스프레드 — 은행 간 금리 기준. 금융기관 발행에서 흔히 사용. LIBOR가 2023년 폐지되면서 SOFR로 전환. (3) 스왑 스프레드 (ASW: Asset Swap Spread) — 이자율 스왑 커브에 대한 스프레드. 상대가치 분석에서 많이 쓰임.

어떤 베이시스를 쓰느냐는 투자자 유형과 발행 통화에 따라 다르다. 미국 달러 IG 채권은 대부분 UST 스프레드로 호가된다.`,
        bodyEn:
`To calculate a spread, a benchmark ("basis") is needed first. Three main bases are used in markets:

(1) Government bond spread — spread over U.S. Treasuries (UST), German Bunds, or Korean government bonds (KTB). Quoted as "T+150bps." Most common for sovereign and SSA issuance. (2) SOFR/LIBOR spread — interbank rate basis. Common for financial institution issuance. LIBOR was replaced by SOFR in 2023. (3) Swap spread (ASW: Asset Swap Spread) — spread over the interest rate swap curve. Widely used in relative value analysis.

Which basis to use depends on investor type and issuance currency. USD IG bonds are typically quoted vs. UST.`,
      },
    ],
    keyTerms: [
      {
        term: "bp (Basis Point)",
        termEn: "bp (Basis Point)",
        definition: "0.01%에 해당하는 금리 단위. 100bp = 1%. 채권 스프레드와 금리 변화의 기본 표현 단위.",
        definitionEn: "A unit of 0.01% in interest rates. 100bps = 1%. The standard unit for expressing bond spreads and rate changes.",
      },
      {
        term: "스프레드 확대/축소",
        termEn: "Spread Widening / Tightening",
        definition: "스프레드 확대(widening)는 신용 리스크 증가 또는 유동성 악화 신호. 축소(tightening)는 시장 안정 신호.",
        definitionEn: "Spread widening signals increasing credit risk or deteriorating liquidity. Tightening signals improving market stability.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "oas", "nic", "investment-grade", "high-yield"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
      { type: "market-deal", slug: "korea-1998-external-bond", title: "한국 1998 외평채", titleEn: "Korea 1998 External Bond" },
    ],
  },

  {
    slug: "oas",
    title: "OAS (옵션 조정 스프레드)",
    titleEn: "OAS (Option-Adjusted Spread)",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "콜옵션·풋옵션 등 내재된 옵션의 가치를 제거한 뒤 측정한 채권의 순수 신용 스프레드. AT1·콜러블 채권 등 복잡한 구조 채권의 가격 비교에 필수 도구.",
    excerptEn:
      "The pure credit spread of a bond after stripping out embedded option value (calls, puts, etc.). An essential tool for comparing complex structured bonds like AT1s and callables.",
    readingMinutes: 5,
    tags: ["OAS", "옵션 조정 스프레드", "콜옵션", "AT1", "구조 채권", "DCM"],
    tagsEn: ["OAS", "Option-Adjusted Spread", "Call Option", "AT1", "Structured Bonds", "DCM"],
    sections: [
      {
        heading: "왜 '옵션을 조정'해야 하는가",
        headingEn: "Why 'Adjust for Options'?",
        body:
`콜러블(callable) 채권은 발행사가 만기 전에 상환을 선택할 수 있는 옵션을 내포한다. AT1 채권(Additional Tier 1)은 대표적인 콜러블 채권이다. 이 경우 단순 Z-스프레드로 측정하면 내재 옵션의 가치가 스프레드에 섞여 들어가 순수 신용 리스크를 과대 또는 과소 평가하게 된다.

OAS는 옵션의 가치를 따로 분리해 제거한 뒤 남은 '순수 신용 스프레드'다. 기술적으로는 금리 시나리오 나무(interest rate tree)를 이용해 여러 금리 경로에서 옵션 행사 확률을 시뮬레이션하고, 그 기댓값을 차감한다.

실무에서 OAS는 옵션 구조가 다른 여러 채권을 사과대 사과(apples-to-apples)로 비교할 때 쓰인다. CS AT1 위기(2023) 당시 시장이 AT1 스프레드를 급격히 재평가한 것도 OAS 기준이었다.`,
        bodyEn:
`Callable bonds contain an embedded option allowing the issuer to redeem before maturity. AT1 bonds (Additional Tier 1) are prototypical callables. In this case, simple Z-spread measures mix option value with credit spread, overstating or understating pure credit risk.

OAS separates and removes option value to isolate the "pure credit spread." Technically, it uses an interest rate tree to simulate option exercise probabilities across multiple rate paths and subtracts the expected option value.

In practice, OAS enables apples-to-apples comparison across bonds with different option structures. When markets rapidly repriced AT1 spreads following the Credit Suisse crisis (2023), OAS was the reference measure.`,
      },
      {
        heading: "Z-스프레드, OAS, 그리고 I-스프레드의 차이",
        headingEn: "Z-Spread, OAS, and I-Spread — The Differences",
        body:
`세 스프레드 지표는 계산 방법이 달라 서로 다른 상황에서 쓰인다.

I-스프레드(Interpolated Spread): 같은 만기의 스왑 금리에 대한 단순 차이. 가장 빠르게 계산되나 구조가 단순한 채권에만 적합. Z-스프레드(Zero-Volatility Spread): 전체 수익률 곡선(zero curve)에 평행 이동해 더하는 스프레드. 쿠폰 지급 시점마다 할인율을 조정. 옵션 없는 채권의 상대가치 분석에 적합. OAS(Option-Adjusted Spread): Z-스프레드에서 내재 옵션 가치를 차감. 콜러블·풋터블·AT1 등 옵션 내재 채권에 적합.

FIG(금융기관) 채권, 특히 AT1·CoCo·Tier 2 채권 분석에서 OAS는 필수 도구다.`,
        bodyEn:
`Three spread measures use different calculation methods and suit different situations.

I-Spread (Interpolated Spread): Simple difference vs. the swap rate at the same maturity. Fastest to calculate but only appropriate for plain vanilla bonds. Z-Spread (Zero-Volatility Spread): The parallel shift added to the entire zero curve. Adjusts discount rates at each coupon payment date. Suitable for relative value analysis of non-option bonds. OAS (Option-Adjusted Spread): Z-spread minus embedded option value. Appropriate for callable, puttable, AT1, and other option-embedded bonds.

For FIG bonds — especially AT1, CoCo, and Tier 2 — OAS is an indispensable analytical tool.`,
      },
    ],
    keyTerms: [
      {
        term: "Z-스프레드",
        termEn: "Z-Spread",
        definition: "전체 수익률 곡선에 평행 이동해 더하는 스프레드. 옵션이 없는 채권의 상대가치 비교에 사용.",
        definitionEn: "The parallel shift added across the entire yield curve. Used for relative value comparison of non-option bonds.",
      },
      {
        term: "콜러블 채권",
        termEn: "Callable Bond",
        definition: "발행사가 만기 전 정해진 일자(콜 날짜)에 상환을 선택할 수 있는 채권. AT1이 대표적.",
        definitionEn: "A bond the issuer can redeem before maturity on specified call dates. AT1 is the prototypical example.",
      },
    ],
    relatedSlugs: ["spread-basis", "at1-capital", "coco-bond", "dcm-ecosystem"],
    appearsIn: [
      { type: "market-deal", slug: "credit-suisse-at1", title: "CS AT1 전액 상각 사태", titleEn: "Credit Suisse AT1 Write-Down" },
      { type: "market-101", slug: "at1-capital", title: "AT1 자본", titleEn: "AT1 Capital" },
    ],
  },

  {
    slug: "nic",
    title: "NIC (신규발행 프리미엄)",
    titleEn: "NIC (New Issue Concession)",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "신규 발행 채권이 기존 유통 채권보다 더 높은 금리를 제시해야 하는 추가 프리미엄. 발행사와 은행의 협상 핵심 변수이자 시장 상황의 바로미터.",
    excerptEn:
      "The extra premium a new bond must offer above existing secondary-market bonds to attract investors. A key negotiation variable between issuers and banks, and a barometer of market conditions.",
    readingMinutes: 4,
    tags: ["NIC", "신규발행 프리미엄", "발행 가격", "DCM", "스프레드"],
    tagsEn: ["NIC", "New Issue Concession", "Issue Price", "DCM", "Spread"],
    sections: [
      {
        heading: "NIC — 발행의 비용",
        headingEn: "NIC — The Cost of New Issuance",
        body:
`투자자 입장에서 새로 발행되는 채권은 이미 유통되는 동일 발행사의 기존 채권과 비교해 이점이 없다면 살 이유가 없다. 기존 채권은 가격 추이를 관찰할 수 있고, 유동성이 어느 정도 검증된 상태다. 새 채권에는 이런 이점이 없다.

이를 보상하기 위해 신규 발행 채권은 기존 채권보다 조금 더 높은 수익률(낮은 가격)을 제시한다 — 이게 NIC(New Issue Concession)다. 일반적으로 5–15bp 수준이며, 시장이 불안정하거나 발행 규모가 클수록 커진다.

NIC는 북빌딩 과정에서 발행사와 은행이 치열하게 협상하는 변수다. 발행사는 NIC를 낮춰 자금 조달 비용을 줄이려 하고, 은행은 충분한 수요를 확보하기 위해 NIC를 유지하려 한다.`,
        bodyEn:
`From an investor's perspective, there's no reason to buy a newly issued bond over existing secondary market bonds from the same issuer unless there's a clear advantage. Existing bonds have observable price histories and established liquidity. New bonds lack these.

To compensate, new issuances offer slightly higher yields (lower prices) than existing bonds — this is the NIC (New Issue Concession). Typically 5–15bps, it widens when markets are unstable or deal sizes are large.

NIC is an intensely negotiated variable between issuers and banks during book-building. Issuers push to minimize NIC to reduce funding costs; banks aim to maintain sufficient NIC to attract demand.`,
      },
      {
        heading: "NIC vs. OID — 발행 할인의 두 얼굴",
        headingEn: "NIC vs. OID — Two Faces of Issuance Discount",
        body:
`NIC와 자주 혼동되는 개념이 OID(Original Issue Discount)다. NIC는 기존 유통 채권 대비 추가 스프레드인 반면, OID는 채권이 액면가(par) 이하로 발행될 때의 할인이다.

예컨대 액면가 100인 채권이 99.5에 발행된다면 0.5의 OID가 발생한다. 이는 발행 가격과 만기 상환액(100) 사이의 차이로, 세금 처리에서도 쿠폰과 다르게 취급된다.

실무에서 IG 채권 발행은 거의 항상 par 근처에서 이루어진다. OID는 HY나 신흥국 채권에서 더 자주 나타난다.`,
        bodyEn:
`A concept often confused with NIC is OID (Original Issue Discount). NIC is the additional spread vs. existing secondary bonds; OID is the discount when bonds are issued below par (face value).

For example, if a bond with $100 face value is issued at $99.5, a $0.5 OID arises. This represents the difference between issue price and maturity redemption ($100), and is treated differently from coupon income for tax purposes.

In practice, IG bond issuance almost always occurs near par. OID appears more frequently in HY or emerging market bonds.`,
      },
    ],
    keyTerms: [
      {
        term: "NIC (New Issue Concession)",
        termEn: "NIC (New Issue Concession)",
        definition: "신규 발행 채권이 기존 유통 채권보다 추가로 제시하는 스프레드. 통상 5–15bp.",
        definitionEn: "The additional spread a new bond offers above existing secondary market bonds. Typically 5–15bps.",
      },
      {
        term: "OID (Original Issue Discount)",
        termEn: "OID (Original Issue Discount)",
        definition: "채권이 액면가 이하로 발행될 때의 할인. 발행가와 만기 상환액의 차이.",
        definitionEn: "The discount when bonds are issued below par. The difference between issue price and maturity redemption value.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "book-building", "spread-basis", "investment-grade"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "investment-grade",
    title: "투자적격등급 (Investment Grade)",
    titleEn: "Investment Grade",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "S&P BBB- / Moody's Baa3 이상의 신용등급. 전 세계 기관투자자 상당수는 내규상 이 등급 이상의 채권만 보유할 수 있어, IG와 HY는 단순 등급 차이 이상의 의미를 갖는다.",
    excerptEn:
      "BBB- (S&P) / Baa3 (Moody's) and above. Because most institutional investors are mandated to hold only IG bonds, the IG/HY divide carries implications far beyond a simple ratings boundary.",
    readingMinutes: 5,
    tags: ["투자적격등급", "IG", "BBB", "신용등급", "기관투자자", "DCM"],
    tagsEn: ["Investment Grade", "IG", "BBB", "Credit Rating", "Institutional Investor", "DCM"],
    sections: [
      {
        heading: "IG — 선 하나가 만드는 세계",
        headingEn: "IG — One Line That Divides the World",
        body:
`S&P 기준으로 BBB- 이상이면 투자적격(Investment Grade, IG), BBB- 미만이면 투기등급(Non-Investment Grade) 혹은 '하이일드(High Yield)'다. 무디스 기준으로는 Baa3/Ba1이 경계선이다.

이 선 하나가 만드는 차이는 극적이다. 전 세계 보험사, 연기금, 국부펀드의 내규 상당수에는 'IG 이상의 채권만 보유 가능'이라는 조항이 있다. 즉 BBB-에서 BB+로 강등되는 순간, 전 세계에서 가장 큰 자금이 해당 채권을 팔 수밖에 없는 구조가 된다.

이를 '강제 매도(forced selling)' 혹은 '폴른 엔젤(Fallen Angel)' 효과라고 부른다. IG 등급을 유지하기 위한 기업의 재무 관리가 단순한 신용 목표를 넘어 전략적 의무가 되는 이유다.`,
        bodyEn:
`By S&P standards, BBB- and above is Investment Grade (IG); below BBB- is speculative or "High Yield." Moody's boundary falls at Baa3/Ba1.

The difference one line makes is dramatic. A large portion of global insurer, pension fund, and sovereign wealth fund mandates restrict holdings to IG-or-above bonds. This means: the moment a bond is downgraded from BBB- to BB+, the world's largest pools of capital are structurally forced to sell it.

This is called "forced selling" or the "Fallen Angel" effect. It's why maintaining IG status is not merely a credit target but a strategic imperative for many corporates.`,
      },
      {
        heading: "BBB — 가장 혼잡한 등급",
        headingEn: "BBB — The Most Crowded Rating",
        body:
`IG 중에서도 BBB 등급(S&P: BBB+, BBB, BBB-)은 전체 IG 시장의 약 50%를 차지할 만큼 거대하다. 이 집중도 자체가 시스템 리스크의 원천이다 — 경기 침체기에 BBB 기업들이 대거 강등되면 시장 전체가 충격을 받는다.

2020년 코로나 위기 당시 Ford, Boeing 등 대형 BBB 기업들이 HY로 강등되면서 HY 스프레드가 급등했다. 이 시기 '폴른 엔젤 리스크'는 DCM 시장의 핵심 화두였다.

AA·A 등급은 수가 줄어드는 추세다. 미국의 경우 현재 AAA 등급 기업은 Microsoft와 Johnson & Johnson 둘뿐이다.`,
        bodyEn:
`Within IG, BBB (S&P: BBB+, BBB, BBB-) accounts for roughly 50% of the entire IG market — a concentration that creates systemic risk. If BBB-rated companies are mass-downgraded in a recession, the entire market absorbs the shock.

During the 2020 COVID crisis, large BBB companies like Ford and Boeing were downgraded to HY, triggering sharp spikes in HY spreads. "Fallen Angel risk" was the central DCM market theme of that period.

AA and A ratings are declining in number. In the U.S., only Microsoft and Johnson & Johnson currently hold AAA ratings.`,
      },
    ],
    keyTerms: [
      {
        term: "폴른 엔젤 (Fallen Angel)",
        termEn: "Fallen Angel",
        definition: "IG에서 HY로 강등된 채권. 강제 매도가 발생해 스프레드가 급등한다.",
        definitionEn: "A bond downgraded from IG to HY. Forces mandatory selling, causing spreads to spike sharply.",
      },
      {
        term: "Rising Star",
        termEn: "Rising Star",
        definition: "HY에서 IG로 승등된 채권. 신규 IG 투자자의 수요 유입으로 스프레드가 축소된다.",
        definitionEn: "A bond upgraded from HY to IG. New IG mandated demand flows in, compressing spreads.",
      },
    ],
    relatedSlugs: ["high-yield", "spread-basis", "dcm-ecosystem", "reach-for-yield"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "high-yield",
    title: "하이일드 (High Yield)",
    titleEn: "High Yield",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "BB+ 이하 투기등급 채권. '정크본드'라는 별명이 붙은 이 시장이 1980년대 LBO 혁명과 기업 인수합병 생태계를 바꿔놓은 과정.",
    excerptEn:
      "Sub-investment-grade bonds rated BB+ and below. How the 'junk bond' market transformed leveraged buyouts and the entire corporate M&A ecosystem in the 1980s and beyond.",
    readingMinutes: 6,
    tags: ["하이일드", "HY", "정크본드", "BB", "LBO", "투기등급"],
    tagsEn: ["High Yield", "HY", "Junk Bond", "BB", "LBO", "Speculative Grade"],
    sections: [
      {
        heading: "정크본드 — 오해와 진실",
        headingEn: "Junk Bonds — Myth and Reality",
        body:
`'정크본드(Junk Bond)'라는 이름은 1970–80년대 마이클 밀켄(Michael Milken)이 드렉셀 번햄 램버트에서 하이일드 시장을 개척했을 때 비판적 언론이 붙인 별명이다. 하지만 오늘날 글로벌 HY 시장 규모는 약 2–3조 달러로, '쓰레기' 이미지와는 거리가 멀다.

HY 채권의 발행사는 크게 두 부류다. (1) 폴른 엔젤(Fallen Angel) — 과거 IG였다가 강등된 기업. 여전히 사업 규모와 브랜드가 있다. (2) 원래 HY(Born HY) — 성장 단계 기업, LBO 딜 이후 레버리지가 높은 기업, 스타트업에서 성장한 기업 등.

HY 채권은 IG 대비 스프레드가 300–600bp 이상이어서 투자자에게 훨씬 높은 수익을 제공하지만, 부도 시 원금 손실 리스크도 크다. 역사적 하이일드 채권의 연간 부도율은 약 3–5%다.`,
        bodyEn:
`"Junk bond" is a nickname coined by critical journalists when Michael Milken pioneered the HY market at Drexel Burnham Lambert in the 1970s–80s. Yet today's global HY market is roughly $2–3 trillion in size — far from the "junk" image.

HY issuers fall into two main categories: (1) Fallen Angels — former IG issuers downgraded to HY. They still have substantial operations and brand recognition. (2) Original HY (Born HY) — growth-stage companies, post-LBO highly leveraged firms, and startups that scaled.

HY bonds offer spreads of 300–600bps+ vs. IG, providing much higher investor returns, but carrying significant default risk if the issuer stumbles. Historical annual default rates for HY are approximately 3–5%.`,
      },
      {
        heading: "HY와 LBO — 레버리지 자본주의의 연료",
        headingEn: "HY and LBO — Fuel for Leveraged Capitalism",
        body:
`하이일드 시장이 현대 자본시장에서 갖는 가장 큰 전략적 의미는 LBO(Leveraged Buyout)와의 연결이다. LBO는 인수 대상 기업의 자산 또는 현금흐름을 담보로 대규모 부채를 일으켜 기업을 인수하는 구조다. 이 부채의 상당 부분이 HY 채권 또는 레버리지드 론(Leveraged Loan) 형태로 시장에서 조달된다.

KKR, Blackstone, Apollo 같은 PE 펀드들이 HY 시장 없이는 현재 규모의 딜을 실행할 수 없다. HY 시장의 스프레드 수준과 유동성이 PE 딜의 실행 가능성을 직접 결정한다.

2022–2023년 금리 급등기에 HY 스프레드가 확대되면서 PE 딜 실행이 급감한 것은 이 연결의 현실을 보여준다.`,
        bodyEn:
`The greatest strategic significance of the HY market in modern capital markets is its connection to LBOs (Leveraged Buyouts). An LBO uses the target company's assets or cash flows as collateral to raise large amounts of debt for acquisition. Much of this debt is raised as HY bonds or leveraged loans in the capital markets.

PE firms like KKR, Blackstone, and Apollo could not execute deals at their current scale without the HY market. HY spread levels and liquidity directly determine PE deal feasibility.

The sharp decline in PE deal activity during the 2022–2023 rate spike — when HY spreads widened significantly — illustrated this connection in real time.`,
      },
    ],
    keyTerms: [
      {
        term: "LBO (Leveraged Buyout)",
        termEn: "LBO (Leveraged Buyout)",
        definition: "인수 대상의 자산·현금흐름을 담보로 대규모 부채를 일으켜 기업을 인수하는 방식. HY 채권이 핵심 조달 수단.",
        definitionEn: "Acquiring a company using large amounts of debt secured by target assets/cash flows. HY bonds are a primary funding tool.",
      },
      {
        term: "부도율 (Default Rate)",
        termEn: "Default Rate",
        definition: "일정 기간 동안 원리금 지급을 이행하지 못한 HY 채권의 비율. 역사적 평균 연 3–5%.",
        definitionEn: "The percentage of HY bonds that fail to meet payment obligations in a given period. Historically ~3–5% annually.",
      },
    ],
    relatedSlugs: ["investment-grade", "spread-basis", "dcm-ecosystem", "reach-for-yield"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // 소버린·구조 — Agent 4 terms
  // ══════════════════════════════════════════════════════════════════════════

  {
    slug: "cac",
    title: "CAC (집합행동조항)",
    titleEn: "CAC (Collective Action Clause)",
    entryType: "term",
    category: "sovereign",
    categoryLabel: "소버린",
    categoryLabelEn: "Sovereign",
    excerpt:
      "국채 채무조정 시 소수 채권자가 다수 합의를 막지 못하도록 하는 조항. 1998년 한국 외평채, 아르헨티나·그리스 위기를 거쳐 현대 소버린 채권의 표준이 된 역사.",
    excerptEn:
      "A clause preventing minority bondholders from blocking debt restructuring agreed by the majority. Its evolution from the Korea 1998 bond through Argentina and Greece crises to today's sovereign bond standard.",
    readingMinutes: 6,
    tags: ["CAC", "집합행동조항", "채무조정", "소버린", "국채", "아르헨티나"],
    tagsEn: ["CAC", "Collective Action Clause", "Debt Restructuring", "Sovereign", "Government Bond", "Argentina"],
    sections: [
      {
        heading: "소수의 독재 — CAC 없는 세계",
        headingEn: "The Tyranny of the Minority — A World Without CAC",
        body:
`국가가 부채를 갚지 못할 위기에 처했을 때, 채무조정(debt restructuring)은 불가피한 선택이 되곤 한다. 원리금 삭감, 만기 연장, 쿠폰 인하 등의 방식으로 채무 부담을 줄이는 협상을 채권자들과 해야 한다.

문제는 채권자가 수천 명이라는 점이다. 다수가 조정안에 동의해도 일부 채권자('홀드아웃'이라고 불린다)가 거부하면 법적으로 전액 상환을 청구할 수 있었다. 1990–2000년대 아르헨티나·에콰도르 위기 때, 헤지펀드들이 헐값에 채권을 사모은 뒤 전액 상환을 요구하며 소송을 제기한 것이 대표적 사례다.

CAC(Collective Action Clause, 집합행동조항)는 이 문제의 해법이다. 채권자의 일정 비율(통상 75% 이상)이 채무조정에 동의하면, 나머지 소수도 그 결정에 구속된다는 조항이다.`,
        bodyEn:
`When a country faces the inability to repay its debts, restructuring — cutting principal, extending maturities, reducing coupons — becomes unavoidable. This requires negotiating with bondholders.

The problem: bondholders number in the thousands. Even when the majority agrees to restructuring, "holdout" creditors who refuse can legally demand full repayment. During the Argentina and Ecuador crises of the 1990s–2000s, hedge funds bought bonds at deep discounts and sued for full repayment — the prototypical holdup.

CAC (Collective Action Clause) is the solution. If a specified percentage of bondholders (typically 75%+) agrees to restructuring, the remaining minority is legally bound by that decision.`,
      },
      {
        heading: "1998 한국에서 그리스까지 — CAC의 진화",
        headingEn: "From Korea 1998 to Greece — The Evolution of CAC",
        body:
`1998년 한국 외평채(Korea 1998 External Bond)는 CAC 조항을 포함한 초기 글로벌 소버린 채권 중 하나였다. 당시 한국 정부는 IMF 위기 속에서 신속한 채무 관리 능력을 보여주기 위해 이 조항을 채택했다.

2003년 멕시코가 미국 뉴욕법 준거 소버린 채권에 CAC를 도입하면서 선진국 발행의 표준이 됐다. 이후 2012년 그리스 구제금융 당시, CAC를 소급 적용해 95% 이상의 채권자를 구조조정에 동의시킨 역대 최대 규모의 CAC 발동 사례가 나왔다.

현재 유로존 국채(ESM·EFSF 후속)는 단일 집합행동 메커니즘(Single Limb CAC)을 채택해, 개별 채권 시리즈가 아닌 전체 채무에 대한 다수결이 가능해졌다.`,
        bodyEn:
`Korea's 1998 External Bond was one of the early global sovereign bonds to include CAC provisions. The Korean government adopted this clause to demonstrate rapid debt management capacity amid the IMF crisis.

When Mexico introduced CAC into New York law-governed sovereign bonds in 2003, it became standard for advanced-economy issuance. Then in 2012, during the Greek bailout, CAC was retroactively applied to bind over 95% of bondholders to restructuring — the largest CAC activation in history.

Today's eurozone bonds (post-ESM/EFSF) adopt a Single Limb CAC mechanism, enabling majority voting across the entire debt stock rather than individual bond series.`,
      },
    ],
    keyTerms: [
      {
        term: "홀드아웃 채권자",
        termEn: "Holdout Creditor",
        definition: "채무조정 합의에 참여하지 않고 전액 상환을 요구하는 채권자. CAC가 없으면 법적 위협이 된다.",
        definitionEn: "A creditor refusing to participate in restructuring and demanding full repayment. Without CAC, this constitutes a legal threat.",
      },
      {
        term: "슈퍼홀드아웃 문제",
        termEn: "Super-Holdout Problem",
        definition: "CAC가 개별 트렌치별로 적용될 때, 특정 시리즈 채권자가 블로킹 마이너리티를 형성할 수 있는 구조적 취약점.",
        definitionEn: "A structural vulnerability where per-tranche CAC allows holders of a specific series to form a blocking minority.",
      },
    ],
    relatedSlugs: ["reach-for-yield", "investment-grade", "spread-basis"],
    appearsIn: [
      { type: "market-deal", slug: "korea-1998-external-bond", title: "한국 1998 외평채", titleEn: "Korea 1998 External Bond" },
    ],
  },

  {
    slug: "alm",
    title: "ALM (자산부채관리)",
    titleEn: "ALM (Asset-Liability Management)",
    entryType: "term",
    category: "fig",
    categoryLabel: "FIG",
    categoryLabelEn: "FIG",
    excerpt:
      "은행·보험사·연기금이 자산과 부채의 만기·금리·통화 구조를 일치시켜 금리 리스크와 유동성 리스크를 관리하는 프레임워크. 채권 투자 수요의 뿌리.",
    excerptEn:
      "The framework by which banks, insurers, and pension funds match asset/liability maturities, rates, and currencies to manage interest rate and liquidity risk. The root driver of institutional bond investment demand.",
    readingMinutes: 6,
    tags: ["ALM", "자산부채관리", "금리 리스크", "듀레이션", "보험", "연기금"],
    tagsEn: ["ALM", "Asset-Liability Management", "Interest Rate Risk", "Duration", "Insurance", "Pension"],
    sections: [
      {
        heading: "왜 기관투자자는 수익률이 아닌 채권을 사는가",
        headingEn: "Why Institutions Buy Bonds — Not for Yield",
        body:
`DCM 생태계의 가장 큰 역설 중 하나는 기관투자자 상당수가 수익률을 극대화하기 위해 채권을 사지 않는다는 것이다. 그들은 ALM(자산부채관리) 목적으로 채권을 산다.

ALM이란 기관이 보유한 자산(채권, 주식, 대출 등)과 부채(보험 지급 의무, 연금 지급 의무, 예금 등)의 구조를 일치시키는 관리 체계다. 보험사를 예로 들면: 가입자에게 20년 후 보험금을 지급해야 하는 의무가 있다면, 20년 만기의 채권을 사서 자산과 부채의 듀레이션(금리 민감도)을 맞춘다.

이 수요는 시장 상황과 무관하다. 보험사는 금리가 낮아도, 스프레드가 좁아도 ALM 목적으로 채권을 사야 한다. 이것이 DCM 시장에 구조적 수요를 만드는 기반이다.`,
        bodyEn:
`One of the great paradoxes of the DCM ecosystem is that a significant portion of institutional investors don't buy bonds to maximize yield — they buy bonds for ALM (Asset-Liability Management) purposes.

ALM is the framework for matching the structure of an institution's assets (bonds, equities, loans) with its liabilities (insurance payment obligations, pension obligations, deposits). Take an insurer: if it has an obligation to pay policyholders in 20 years, it buys 20-year bonds to match the duration (interest rate sensitivity) of assets and liabilities.

This demand is structurally independent of market conditions. Insurers must buy bonds for ALM purposes even when rates are low and spreads are tight. This is the foundation of structural demand in DCM markets.`,
      },
      {
        heading: "듀레이션 매칭과 채권 시장",
        headingEn: "Duration Matching and Bond Markets",
        body:
`ALM의 핵심 도구는 듀레이션(Duration)이다. 듀레이션은 채권의 현금흐름 타이밍을 가중 평균한 값으로, 금리 1% 변화 시 가격이 얼마나 변하는지를 나타낸다. 30년 채권은 듀레이션이 ~20년이면, 금리 1% 상승 시 가격이 약 20% 하락한다.

보험사·연기금이 장기 부채(20–30년 지급 의무)를 가지면 장기 채권 수요가 생긴다 — 이것이 30년 국채, 30년 회사채 시장이 존재하는 이유다. 이 투자자 없이는 누가 30년짜리 채권을 살 것인가?

ALM 수요는 또한 장기 채권 수익률이 단기 채권보다 항상 높지 않아도 되는 이유를 설명한다. 구조적 수요가 장기 금리를 '눌러' 수익률 곡선을 평탄하게 만들기도 한다.`,
        bodyEn:
`The core ALM tool is duration. Duration is the weighted-average timing of a bond's cash flows, expressing how much the price changes for a 1% move in rates. A 30-year bond with ~20-year duration falls ~20% in price when rates rise 1%.

When insurers and pension funds have long-duration liabilities (20–30 year payment obligations), they create demand for long-term bonds — this is why 30-year government and corporate bond markets exist. Without these investors, who would buy 30-year bonds?

ALM demand also explains why long-term bond yields don't always need to be higher than short-term rates. Structural demand "anchors" long rates, sometimes flattening the yield curve.`,
      },
    ],
    keyTerms: [
      {
        term: "듀레이션 (Duration)",
        termEn: "Duration",
        definition: "채권의 금리 민감도를 나타내는 지표. 듀레이션 N년 = 금리 1% 변화 시 가격 약 N% 변동.",
        definitionEn: "A measure of bond price sensitivity to interest rate changes. Duration N years ≈ N% price change for a 1% rate move.",
      },
      {
        term: "면역 전략 (Immunization)",
        termEn: "Immunization",
        definition: "자산과 부채의 듀레이션을 일치시켜 금리 변화에 의한 순자산가치 변동을 최소화하는 ALM 전략.",
        definitionEn: "An ALM strategy matching asset and liability durations to minimize net asset value sensitivity to rate changes.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "reach-for-yield", "investment-grade", "spread-basis"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "reach-for-yield",
    title: "Reach for Yield (수익률 추구)",
    titleEn: "Reach for Yield",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "저금리 환경에서 수익률 목표를 충족하기 위해 투자자들이 더 높은 리스크를 감수하는 행동 패턴. 1998년 외평채 T+345bp의 배경이기도 하고, 위기의 씨앗이기도 하다.",
    excerptEn:
      "The behavioral pattern where investors take on higher risk to meet yield targets in a low-rate environment. The backdrop behind Korea 1998's T+345bp spread — and the seed of many crises.",
    readingMinutes: 5,
    tags: ["Reach for Yield", "수익률 추구", "저금리", "리스크", "신흥국", "채권"],
    tagsEn: ["Reach for Yield", "Low Rate Environment", "Risk-Taking", "Emerging Markets", "Bond"],
    sections: [
      {
        heading: "왜 투자자들은 리스크를 '사야' 했는가",
        headingEn: "Why Investors Were 'Forced' to Buy Risk",
        body:
`2009년 글로벌 금융위기 이후 선진국 중앙은행들은 제로(혹은 마이너스) 금리를 10년 이상 유지했다. 이 환경에서 연기금, 보험사, 자산운용사들은 곤경에 처했다 — 수익률 목표(보험금 지급, 연금 약정 수익률 등)는 그대로인데 안전자산(국채)의 수익률이 너무 낮았다.

해법은 리스크를 올리는 것이었다. IG 대신 HY, 선진국 대신 신흥국(EM), 단기 대신 장기 채권으로 이동하는 패턴이 반복됐다. 이를 "Reach for Yield(수익률 추구)"라고 부른다.

IMF, BIS 등 국제기구는 이 행동이 시스템 전체의 리스크 농도를 높인다고 반복적으로 경고했다. 수익률 추구는 자산 가격을 자본 비용과 괴리시키고, 이후 금리 정상화 시 급격한 조정의 원인이 된다.`,
        bodyEn:
`After the 2008 global financial crisis, advanced-economy central banks maintained zero (or negative) rates for over a decade. Pension funds, insurers, and asset managers were caught in a bind — yield targets (insurance payout obligations, pension return commitments) were unchanged, but safe assets (government bonds) yielded too little.

The solution was to take on more risk: moving from IG to HY, from developed to emerging markets (EM), from short to long duration. This pattern is called "Reach for Yield."

The IMF, BIS, and other international institutions repeatedly warned that this behavior concentrates systemic risk. Reaching for yield decouples asset prices from fundamental capital costs, creating conditions for sharp corrections when rates normalize.`,
      },
      {
        heading: "1998 외평채와 Reach for Yield — 위기의 씨앗",
        headingEn: "Korea 1998 and Reach for Yield — Seeds of Crisis",
        body:
`1998년 한국 외평채가 T+345bp로 성공적으로 발행된 배경에는 글로벌 투자자들의 신흥국 수익률 추구 수요가 있었다. 아시아 외환위기로 한국의 리스크가 극도로 부각된 상황에서도 높은 스프레드가 투자자들을 끌어들였다.

이 패턴은 위기의 두 번째 국면에서 역전된다. 투자자들이 수익률 추구로 신흥국 채권을 대거 매입하다가, 리스크 회피(risk-off) 국면이 오면 일제히 팔고 나간다. '급격한 자본 유입 → 갑작스런 자본 이탈'의 사이클이 신흥국 위기의 전형적 패턴이다.

페드(Fed)의 테이퍼링 공포(2013 Taper Tantrum), 2022년 금리 인상 충격이 신흥국 자산에 미친 영향 모두 Reach for Yield의 되돌림이었다.`,
        bodyEn:
`The success of Korea's 1998 External Bond at T+345bp was underpinned by global investors' demand for emerging market yield. Even with Korean risk acutely elevated during the Asian financial crisis, high spreads attracted capital.

This pattern reverses in the crisis's second phase. Investors who aggressively bought EM bonds via reach-for-yield behavior exit en masse when risk-off sentiment arrives. The "rapid capital inflow → sudden capital flight" cycle is the textbook pattern of emerging market crises.

The 2013 Taper Tantrum, and the 2022 rate-hike shock's impact on EM assets, were both reversals of the reach-for-yield dynamic.`,
      },
    ],
    keyTerms: [
      {
        term: "Risk-Off",
        termEn: "Risk-Off",
        definition: "투자자들이 리스크 자산을 팔고 안전자산(국채, 현금)으로 이동하는 시장 심리 상태.",
        definitionEn: "A market sentiment state where investors sell risk assets and move to safe havens (government bonds, cash).",
      },
      {
        term: "테이퍼 탠트럼 (Taper Tantrum)",
        termEn: "Taper Tantrum",
        definition: "2013년 Fed의 양적완화 축소 시사 발언 후 신흥국 자산 가격이 급락한 사건. Reach for Yield의 되돌림.",
        definitionEn: "The 2013 EM asset selloff following Fed hints at QE tapering. A sharp reversal of reach-for-yield positioning.",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "investment-grade", "high-yield", "cac", "alm"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
      { type: "market-deal", slug: "korea-1998-external-bond", title: "한국 1998 외평채", titleEn: "Korea 1998 External Bond" },
    ],
  },

  {
    slug: "mnpi",
    title: "MNPI (중요 미공개 정보)",
    titleEn: "MNPI (Material Non-Public Information)",
    entryType: "term",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "시장에 공개되기 전 특정인이 보유한 중요 기업·시장 정보. 이를 이용한 거래는 내부자 거래로 엄격히 금지되며, DCM 프로세스 전체가 이 정보 통제를 중심으로 설계된다.",
    excerptEn:
      "Significant company or market information held by specific individuals before public disclosure. Trading on it is strictly prohibited as insider trading, and the entire DCM process is designed around controlling this information.",
    readingMinutes: 5,
    tags: ["MNPI", "중요 미공개 정보", "내부자 거래", "컴플라이언스", "차이니즈 월", "DCM"],
    tagsEn: ["MNPI", "Material Non-Public Information", "Insider Trading", "Compliance", "Chinese Wall", "DCM"],
    sections: [
      {
        heading: "MNPI란 무엇인가",
        headingEn: "What Is MNPI?",
        body:
`MNPI(Material Non-Public Information, 중요 미공개 정보)는 두 요건이 동시에 충족될 때 성립한다. (1) Material(중요) — 합리적 투자자가 투자 결정에 영향을 미칠 것으로 판단하는 정보. 실적 발표 전 순이익 수치, 아직 공개되지 않은 M&A 계획, 신규 채권 발행 계획 등. (2) Non-Public(미공개) — 아직 시장에 공표되지 않은 정보.

DCM 맥락에서 MNPI는 발행 예정인 채권의 규모, 쿠폰, 발행사의 재무 상황 등이 해당된다. IB의 DCM 뱅커는 딜 진행 중 항상 MNPI를 다루며, 이것이 차이니즈 월이 필요한 근본 이유다.

규제 프레임워크: 미국 SEC Rule 10b-5, 유럽 MAR(Market Abuse Regulation) Article 7–10, 한국 자본시장법 제174조 등이 MNPI 이용 거래를 금지한다.`,
        bodyEn:
`MNPI (Material Non-Public Information) exists when two conditions are simultaneously met: (1) Material — information that a reasonable investor would consider significant for an investment decision: pre-earnings net income figures, undisclosed M&A plans, new bond issuance plans. (2) Non-Public — information not yet disclosed to the market.

In DCM contexts, MNPI includes planned bond sizes, coupon levels, and issuer financial details before announcement. DCM bankers always handle MNPI during deal execution — this is the fundamental reason the Chinese Wall exists.

Regulatory framework: U.S. SEC Rule 10b-5, EU MAR Articles 7–10, and Korea's Capital Market Act Article 174 all prohibit trading on MNPI.`,
      },
      {
        heading: "DCM 딜 중 MNPI 관리",
        headingEn: "Managing MNPI During a DCM Deal",
        body:
`DCM 딜이 진행되는 동안 MNPI 관리는 매우 구체적인 절차를 따른다. 발행사와 IB가 초기 논의를 시작하는 순간부터 MNPI 클록이 시작된다.

딜 팀 구성원들은 '신디케이트 월(syndicate wall)' 안에 있다고 표현한다 — 거래 정보에 접근이 허용된 인원의 목록(wall list)이 작성되고 관리된다. S&T 데스크는 원칙적으로 접근 불가다. 딜 발표(announcement) 이후 정보가 공개되면 MNPI가 아닌 공개 정보가 된다.

'마켓 사운딩(market sounding)'이라는 프로세스에서 특히 복잡하다 — 발행 전 투자자 관심도를 탐색하는 과정에서 일부 정보를 공유해야 하는데, 이 정보를 받은 투자자도 MNPI 보유자가 된다. EU MAR는 이 경우 투자자가 MNPI임을 인지했다는 확인을 받도록 요구한다.`,
        bodyEn:
`During a DCM deal, MNPI management follows very specific procedures. The MNPI clock starts the moment initial discussions begin between issuer and IB.

Deal team members are described as being "inside the syndicate wall" — a wall list of authorized personnel is created and managed. S&T desks are in principle excluded. Once the deal is announced (made public), the information is no longer MNPI.

Complexity arises in "market sounding" — the pre-deal process of gauging investor interest requires sharing some information, making recipients MNPI holders. EU MAR requires receiving investors to acknowledge that they are receiving MNPI in such cases.`,
      },
    ],
    keyTerms: [
      {
        term: "Wall List",
        termEn: "Wall List",
        definition: "DCM 딜 중 MNPI에 접근이 허용된 인원 목록. 컴플라이언스 팀이 관리하며, 명단 외 인원에 대한 정보 공유는 금지된다.",
        definitionEn: "The list of personnel authorized to access MNPI during a DCM deal. Managed by compliance; sharing with non-listed personnel is prohibited.",
      },
      {
        term: "마켓 사운딩",
        termEn: "Market Sounding",
        definition: "발행 전 주요 투자자에게 발행 계획을 사전 탐색하는 과정. EU MAR 하에서 엄격한 절차가 요구된다.",
        definitionEn: "The pre-deal process of gauging key investor interest in a planned issuance. Subject to strict procedural requirements under EU MAR.",
      },
    ],
    relatedSlugs: ["chinese-wall", "syndicate", "dcm-ecosystem", "book-building"],
    appearsIn: [
      { type: "market-101", slug: "dcm-ecosystem", title: "DCM 생태계 전체 지도", titleEn: "The DCM Ecosystem Map" },
    ],
  },

  {
    slug: "dcm-overview",
    title: "DCM 개요 — 부채자본시장 입문",
    titleEn: "DCM Overview — An Introduction to Debt Capital Markets",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM(Debt Capital Markets)이 무엇인지, 왜 존재하는지, 누가 참여하는지에 대한 입문 가이드. IB 지원자부터 투자자까지 DCM 생태계를 처음 접하는 모든 이를 위한 출발점.",
    excerptEn:
      "An introductory guide to what DCM (Debt Capital Markets) is, why it exists, and who participates. The starting point for anyone — from IB candidates to investors — encountering the DCM ecosystem for the first time.",
    readingMinutes: 8,
    tags: ["DCM", "부채자본시장", "채권", "IB", "발행사", "투자자", "입문"],
    tagsEn: ["DCM", "Debt Capital Markets", "Bonds", "IB", "Issuer", "Investor", "Introduction"],
    sections: [
      {
        heading: "DCM이란 무엇인가",
        headingEn: "What Is DCM?",
        body:
`DCM(Debt Capital Markets, 부채자본시장)은 채권(bond)과 기타 부채 증권을 통해 발행사가 자금을 조달하고 투자자가 이를 매입하는 시장 및 투자은행 업무 영역이다.

기업이 새 공장을 짓거나 인수합병을 추진할 때, 국가가 예산 부족을 메울 때, 은행이 규제 자본을 보충할 때 — 이들은 모두 DCM을 통해 자금을 조달한다. 미국 국채, 삼성전자 회사채, 세계은행 그린본드, CS AT1 채권 — 이 모든 것이 DCM의 산물이다.

ECM(Equity Capital Markets, 주식자본시장)이 지분(equity)을 다루는 반면, DCM은 부채(debt)를 다룬다. 지분과 달리 부채는 만기가 있고, 정해진 이자(쿠폰)를 지급하며, 상환 우선순위가 높다는 특징이 있다.`,
        bodyEn:
`DCM (Debt Capital Markets) encompasses both the markets and investment banking functions through which issuers raise capital via bonds and other debt securities, and investors purchase them.

When a corporation builds a new factory or pursues an acquisition, when a government covers a budget shortfall, when a bank replenishes regulatory capital — all of these use DCM. U.S. Treasuries, Samsung Electronics bonds, World Bank green bonds, CS AT1 bonds — all are DCM products.

While ECM (Equity Capital Markets) deals with equity (ownership), DCM deals with debt. Unlike equity, debt has a maturity, pays defined interest (coupon), and holds higher repayment priority in the capital structure.`,
      },
      {
        heading: "DCM의 세 플레이어",
        headingEn: "DCM's Three Players",
        body:
`DCM 생태계는 세 주요 플레이어의 삼각 관계로 작동한다.

(1) 발행사(Issuer) — 자금이 필요한 주체. SSA(소버린·초국가기관·기관), 금융기관(FIG), 투자등급(IG) 기업, 하이일드(HY) 기업 등 다양하다. 각 발행사 유형에 따라 요구되는 채권 구조, 투자자층, 규제 요건이 다르다.

(2) 투자자(Investor) — 채권을 매수하는 주체. 중앙은행·국부펀드(수익률 무관 수요), 보험·연기금(ALM 수요), 자산운용사·헤지펀드(수익률 추구 수요)로 구분된다. 투자자 유형별 수요 특성이 DCM 가격 결정의 핵심 변수다.

(3) 투자은행(IB) — 발행사와 투자자를 연결하는 중개자. DCM 뱅커는 딜 구조 설계, 신디케이트 구성, 투자자 마케팅, 가격 결정, 발행 실행을 수행한다. S&T 데스크는 유통시장에서 채권을 매매해 유동성을 공급한다.`,
        bodyEn:
`The DCM ecosystem operates as a triangular relationship among three key players.

(1) Issuers — entities that need capital. They span SSA (sovereign, supranational, agency), financial institutions (FIG), investment grade (IG) corporates, and high yield (HY) corporates. Each issuer type demands different bond structures, investor bases, and regulatory frameworks.

(2) Investors — entities that buy bonds. Subdivided into: central banks and sovereign wealth funds (yield-agnostic demand), insurers and pension funds (ALM demand), and asset managers and hedge funds (yield-seeking demand). Investor type demand characteristics are the core variable in DCM pricing.

(3) Investment Banks (IBs) — intermediaries connecting issuers and investors. DCM bankers design deal structures, assemble syndicates, market to investors, set pricing, and execute issuances. S&T desks trade bonds in secondary markets, providing liquidity.`,
      },
      {
        heading: "DCM이 중요한 이유",
        headingEn: "Why DCM Matters",
        body:
`DCM의 규모와 중요성은 종종 과소평가된다. 글로벌 채권시장(130조 달러)은 주식시장(110조 달러)보다 크고, 전 세계 대부분의 자금 조달은 주식 발행이 아닌 채권 발행으로 이루어진다.

거시경제 관점에서 DCM은 중앙은행 통화정책의 전달 통로다. 기준금리 변화가 시장 금리에 반영되는 가장 빠른 경로가 국채 시장이며, 회사채 스프레드를 통해 실물 경제로 전파된다.

IB 커리어 관점에서 DCM은 구조 설계(structuring), 가격 산정(pricing), 투자자 관계(IR), 규제 대응의 복합적 역량이 필요한 분야다. M&A와 달리 실제 자금이 이동하는 '실행' 중심의 업무이며, 시장 사이클에 민감하게 반응하는 다이나믹한 환경에서 일한다.`,
        bodyEn:
`DCM's scale and importance are often underappreciated. The global bond market ($130T) exceeds equities ($110T), and most global capital raising happens through bond issuance, not equity.

From a macroeconomic perspective, DCM is the transmission channel for central bank monetary policy. The fastest route from rate changes to market rates runs through government bond markets, then propagates through corporate spreads to the real economy.

From an IB career perspective, DCM requires a complex blend of structural design (structuring), pricing, investor relations, and regulatory navigation. Unlike M&A, it's execution-focused — capital actually moves — and operates in a dynamic environment highly sensitive to market cycles.`,
      },
    ],
    keyTerms: [
      {
        term: "쿠폰 (Coupon)",
        termEn: "Coupon",
        definition: "채권 발행사가 보유자에게 주기적으로 지급하는 이자. 연 1–2회 지급이 일반적이며, 발행 시 고정된다.",
        definitionEn: "The periodic interest payment bond issuers make to holders. Typically paid semi-annually or annually; fixed at issuance.",
      },
      {
        term: "SSA",
        termEn: "SSA",
        definition: "Sovereign, Supranational, Agency. 국가(정부), 초국가기관(세계은행, EIB), 정부기관(KDB, 한국전력 등)의 채권 발행 분류.",
        definitionEn: "Sovereign, Supranational, Agency. Bond issuance classification covering governments, supranationals (World Bank, EIB), and government agencies (KDB, KEPCO, etc.).",
      },
    ],
    relatedSlugs: ["dcm-ecosystem", "syndicate", "investment-grade", "high-yield", "spread-basis", "book-building"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.1 — 발행사 스펙트럼 ───────────────────────────────────
  {
    slug: "dcm-issuers",
    title: "DCM Ch.1 — 발행사 스펙트럼: SSA에서 Distressed까지",
    titleEn: "DCM Ch.1 — Issuer Spectrum: From SSA to Distressed",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "누가 채권을 발행하는가 — SSA(소버린·초국가기관), FIG(금융기관), 투자등급 기업, 하이일드, 디스트레스드까지. 각 발행사 유형이 왜 다른 채권 구조·투자자층·스프레드를 가지는지 DCM 뱅커 시각에서 해부합니다.",
    excerptEn:
      "Who issues bonds — SSA, FIG, IG corporates, high yield, distressed. Why each issuer type commands different structures, investor bases, and spreads from a DCM banker's perspective.",
    readingMinutes: 16,
    tags: ["DCM", "발행사", "SSA", "FIG", "투자등급", "하이일드", "Distressed", "신용등급"],
    tagsEn: ["DCM", "Issuer", "SSA", "FIG", "Investment Grade", "High Yield", "Distressed", "Credit Rating"],
    sections: [],
    keyTerms: [
      {
        term: "발행자",
        termEn: "Issuer",
        definition:
          "채권을 발행해 자금을 조달하는 주체. 크게 기업(Corporate), 금융기관(FIG — Banks, Insurance, Asset Managers), 정부·공공기관(SSA — Sovereigns, Supranationals, Agencies)으로 분류된다. 각 유형마다 채권 구조와 신용 분석 방법론이 다르며, 발행자의 성격이 채권의 스프레드와 투자자 베이스를 결정한다. 마치 집주인(정부)·회사원(기업)·은행원(FIG)이 각각 다른 신용도로 대출을 받는 것과 같다.",
        definitionEn:
          "The entity that issues bonds to raise capital. Broadly categorized into corporates, financial institutions (FIG — banks, insurance, asset managers), and government/public-sector entities (SSA — sovereigns, supranationals, agencies). Each type has distinct bond structures and credit analysis methodologies, and the issuer's nature determines spreads and investor base. Think of it like a landlord (government), salaried worker (corporate), and banker (FIG) each borrowing at different creditworthiness.",
      },
      {
        term: "FIG (금융기관)",
        termEn: "Financial Institutions Group",
        definition:
          "은행·보험·자산운용사 등 금융기관 발행자를 총칭하는 DCM 용어. AT1·T2 채권 등 특수 자본 구조를 가지며, 규제 요건(BIS 자기자본 비율)이 채권 발행 수요를 결정한다. FIG 분석은 일반 기업 분석과 달리 자기자본 규제, 예금 기반, NIM(순이자마진) 등 금융 특유 지표를 핵심으로 본다. 은행이 발행하는 채권은 투자자에게 해당 은행 건전성에 대한 간접적 베팅이기도 하다.",
        definitionEn:
          "A DCM term encompassing financial institution issuers — banks, insurance companies, and asset managers. They carry unique capital structures like AT1 and T2 bonds, with regulatory requirements (BIS capital ratios) driving issuance demand. FIG analysis differs from corporate analysis, focusing on capital regulation, deposit base, and NIM. Buying an FIG bond is in part a bet on the issuing bank's financial health.",
      },
      {
        term: "SSA (소버린·초국가·에이전시)",
        termEn: "Sovereign, Supranational, Agency",
        definition:
          "정부(국채), 세계은행·ADB 같은 초국가 기관, 한국전력·도로공사 같은 정부 지원 기관의 채권을 총칭. 채권 시장에서 가장 안전한 발행자 군으로 분류되며 가장 낮은 신용 스프레드를 형성한다. SSA 채권은 많은 국가의 은행 자기자본 계산 시 위험가중치가 0으로 처리되어 은행 투자자에게 특히 매력적이다. 국채는 수익률 곡선의 기준선(벤치마크)으로 기능하여 모든 다른 채권의 가격 결정 좌표계가 된다.",
        definitionEn:
          "Bonds issued by governments (sovereign bonds), supranational organizations like the World Bank and ADB, and government-supported agencies like KEPCO and Korea Expressway Corporation. Classified as the safest issuer category in bond markets, they carry the lowest credit spreads. SSA bonds often receive 0% risk-weighting in bank capital calculations, making them especially attractive to bank investors. Sovereign bonds serve as benchmark yield curves — the coordinate system for pricing all other bonds.",
      },
      {
        term: "발행 신용등급",
        termEn: "Credit Rating",
        definition:
          "S&P·Moody's·Fitch 등 신용평가사가 발행사의 채무 상환 능력을 기호로 등급화한 것. IG(Investment Grade, BBB- 이상) 발행자는 저금리로 광범위한 투자자 풀에 접근 가능하고, HY(High Yield, BB+ 이하) 발행자는 더 높은 쿠폰을 지불해야 한다. 등급 하락(Downgrade)은 발행 비용을 즉각 높이고 일부 규제 투자자의 매도를 유발할 수 있어 '절벽 효과(Fallen Angel)'로 불린다. 등급은 단순한 숫자가 아니라 채권 시장 접근성의 문을 여닫는 열쇠다.",
        definitionEn:
          "A letter-grade assessment of an issuer's debt repayment capacity, assigned by rating agencies like S&P, Moody's, and Fitch. Investment Grade (BBB- and above) issuers access broader investor pools at lower rates, while High Yield (BB+ and below) issuers must pay higher coupons. A downgrade immediately raises funding costs and can trigger forced selling by regulated investors — the so-called 'fallen angel' cliff effect. A rating is not just a number; it's the key that opens or closes the bond market door.",
      },
      {
        term: "발행 동기",
        termEn: "Issuance Motivation",
        definition:
          "발행자가 채권 시장을 찾는 이유. 기업은 M&A 자금·설비 투자·채무 재조정을 위해, 은행은 BIS 자기자본 충족을 위해, 정부는 재정 적자 보전과 인프라 투자를 위해 채권을 발행한다. 발행 동기를 이해하면 어떤 구조의 채권이 발행될지, 어떤 투자자가 관심을 가질지 예측할 수 있다. DCM 뱅커는 발행자의 동기를 파악해 최적의 채권 구조와 타이밍을 제안하는 전략가이기도 하다.",
        definitionEn:
          "The reason an issuer turns to the bond market. Corporates issue for M&A financing, capex, and debt restructuring; banks issue to meet BIS capital requirements; governments issue to cover fiscal deficits and fund infrastructure. Understanding issuance motivation allows you to predict the bond structure and likely investor interest. A DCM banker is also a strategist who identifies the issuer's motivation and proposes the optimal structure and timing.",
      },
    ],
    relatedSlugs: ["dcm-overview", "dcm-ecosystem", "investment-grade", "high-yield", "spread-basis", "dcm-investors"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.2 — 투자자 생태계 ────────────────────────────────────
  {
    slug: "dcm-investors",
    title: "DCM Ch.2 — 투자자 생태계: 왜 큰 손들은 수익률을 안 보나",
    titleEn: "DCM Ch.2 — Investor Ecosystem: Why the Biggest Buyers Don't Chase Yield",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM 수요를 결정하는 6가지 투자자 유형 — 중앙은행, 보험·연기금, 은행 Treasury, 자산운용사, 헤지펀드, SWF. 각 투자자가 왜 다른 동기로 채권을 사는지, 그 동기가 DCM 가격 결정에 어떤 영향을 미치는지.",
    excerptEn:
      "The 6 investor types that drive DCM demand. Why each buys bonds for fundamentally different reasons — and how those motives shape spreads, tenors, and deal structures.",
    readingMinutes: 14,
    tags: ["DCM", "투자자", "중앙은행", "연기금", "보험사", "자산운용사", "헤지펀드", "ALM"],
    tagsEn: ["DCM", "Investor", "Central Bank", "Pension", "Insurance", "Asset Manager", "Hedge Fund", "ALM"],
    sections: [],
    keyTerms: [
      {
        term: "연기금",
        termEn: "Pension Fund",
        definition:
          "퇴직연금 자산을 운용하는 기관 투자자. 초장기(20~30년) 부채를 매칭하기 위해 장기 IG 채권을 선호하며, 전 세계 채권 시장의 최대 수요 기반 중 하나다. 연기금은 수익률보다 부채 매칭(ALM)을 우선하기 때문에 금리가 낮아도 장기 채권을 꾸준히 매수한다. 마치 20년 후 연금을 지급해야 하는 '약속된 지출'에 맞춰 자산을 미리 잠가두는 것과 같다.",
        definitionEn:
          "An institutional investor managing retirement assets. They prefer long-term IG bonds to match ultra-long liabilities (20–30 year horizons) and are among the largest buyers in global bond markets. Pension funds prioritize liability matching (ALM) over yield chasing, buying long-duration bonds consistently even when rates are low. Think of it as locking in assets to match 'promised payouts' due 20 years from now.",
      },
      {
        term: "보험사",
        termEn: "Insurance Company",
        definition:
          "보험계약자에게 미래 지급 의무를 가지고 있어 장기·안정 수익을 선호하는 기관 투자자. ALM(자산부채관리) 관점에서 만기와 듀레이션을 매칭하는 투자 전략을 취한다. 생명보험사는 10~30년 만기 채권에 집중하고, 손해보험사는 상대적으로 단기 채권 비중이 높다. 보험사의 채권 투자 행태는 중앙은행의 금리 정책보다 규제(IFRS 17, RBC 비율)에 더 민감하게 반응하기도 한다.",
        definitionEn:
          "An institutional investor with future payment obligations to policyholders, preferring long-term stable returns. They employ asset-liability management (ALM) strategies to match the duration of their assets to liabilities. Life insurers focus on 10–30 year bonds while non-life insurers hold relatively shorter-dated paper. Insurance companies often respond more sensitively to regulation (IFRS 17, RBC ratios) than to central bank rate policy.",
      },
      {
        term: "헤지펀드",
        termEn: "Hedge Fund",
        definition:
          "수익 기회가 있는 곳이라면 IG에서 HY, 부실채권까지 전 스펙트럼에 걸쳐 투자하는 적극적 투자자. 빠른 포지션 전환과 레버리지 활용이 특징이며, 채권 가격 왜곡 시 차익거래 기회를 추구한다. 연기금·보험사가 '구매 후 보유(Buy-and-Hold)' 전략을 쓰는 반면, 헤지펀드는 발행 직후부터 활발하게 매매해 시장에 유동성을 공급한다. DCM 입장에서는 오더북을 빠르게 채워주지만 장기 보유 신뢰도가 낮은 '빠른 손(Fast Money)'으로 불린다.",
        definitionEn:
          "An active investor that spans the full credit spectrum from IG to high yield and distressed bonds wherever opportunities exist. Known for rapid position changes and leverage, hedge funds seek arbitrage when bond prices dislocate. While pension funds and insurers pursue 'buy-and-hold' strategies, hedge funds actively trade from the moment of issuance, providing market liquidity. In DCM, they are called 'fast money' — quick to fill order books but unlikely to hold bonds long-term.",
      },
      {
        term: "만기 선호도",
        termEn: "Maturity Preference",
        definition:
          "각 투자자 유형마다 선호하는 채권 만기가 다르다. 중앙은행은 초단기~중기, 연기금·보험사는 장기(10~30년), 일반 기관투자자는 5~10년을 주로 선호한다. 이 수요 불균형이 수익률 곡선의 형태를 결정하며, 특정 만기 구간에 수요가 집중되면 그 구간 금리가 상대적으로 낮아진다. DCM 뱅커는 투자자별 만기 선호를 파악해 발행사에게 '어느 만기로 발행하면 가장 저렴하게 자금을 조달할 수 있는지'를 제안한다.",
        definitionEn:
          "Each investor type has a distinct preferred bond maturity. Central banks favor short-to-medium term, pension funds and insurers prefer long-dated (10–30 years), and general institutional investors tend toward 5–10 years. This demand imbalance shapes the yield curve — heavy demand in a specific maturity segment drives that tenor's yields lower. DCM bankers map investor maturity preferences to advise issuers on which tenor offers the cheapest funding.",
      },
      {
        term: "리테일 투자자",
        termEn: "Retail Investor",
        definition:
          "소액 단위로 채권에 투자하는 개인 투자자. 예금 대체 수단으로 단기·안전 채권을 선호하며, 한국에서는 주로 증권사 창구에서 회사채·국채를 매수한다. 최근 개인 투자자의 해외 채권 ETF 투자도 빠르게 증가하고 있다. 기관 투자자에 비해 규모는 작지만, 한국처럼 개인 채권 투자 문화가 발달한 시장에서는 하이일드 공모채의 주요 수요층을 형성하기도 한다.",
        definitionEn:
          "An individual investor who buys bonds in small denominations. They prefer short-term, safe bonds as deposit alternatives, typically purchasing corporate bonds and government bonds through brokerage windows in Korea. Retail investment in overseas bond ETFs has also grown rapidly. While smaller than institutional buyers, retail investors form a key demand base for high-yield public bonds in markets like Korea where individual bond investment culture is well-developed.",
      },
    ],
    relatedSlugs: ["dcm-overview", "dcm-issuers", "alm", "reach-for-yield", "dcm-bond-products"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.3 — 채권 상품 스펙트럼 ───────────────────────────────
  {
    slug: "dcm-bond-products",
    title: "DCM Ch.3 — 채권 상품 스펙트럼: 선순위에서 CLO까지",
    titleEn: "DCM Ch.3 — Bond Product Spectrum: From Senior to CLO",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM이 다루는 채권 상품의 전체 지형 — 선순위·FRN·커버드본드·AT1/CoCo·HY 코버넌트채·ABS/CLO·그린본드·Private Credit. 각 상품의 구조·투자자·리스크를 한 번에 정리합니다.",
    excerptEn:
      "The full landscape of DCM bond products — senior, FRN, covered bonds, AT1/CoCo, HY covenant bonds, ABS/CLO, green bonds, private credit. Structure, investor base, and risk for each.",
    readingMinutes: 16,
    tags: ["DCM", "채권상품", "커버드본드", "AT1", "CoCo", "ABS", "CLO", "그린본드", "FRN"],
    tagsEn: ["DCM", "Bond Products", "Covered Bond", "AT1", "CoCo", "ABS", "CLO", "Green Bond", "FRN"],
    sections: [],
    keyTerms: [
      {
        term: "고정금리 채권",
        termEn: "Fixed Rate Bond",
        definition:
          "만기까지 동일한 쿠폰 이자를 지급하는 가장 일반적인 채권 형태. 발행 시점의 금리가 만기까지 고정되기 때문에, 이후 시장 금리가 상승하면 채권 가격은 하락하는 금리 리스크가 있다. 단순한 구조 덕분에 기관·개인 투자자 모두에게 선호되며, 대부분의 국채와 IG 회사채가 이 형태다. 마치 고정 월세 계약처럼 시장 변화와 무관하게 약속된 이자가 지급된다.",
        definitionEn:
          "The most common bond type, paying the same coupon rate throughout its life until maturity. Since the rate is locked at issuance, the bond price falls when market rates rise — this is known as interest rate risk. Its simplicity makes it popular with both institutional and retail investors; most government bonds and IG corporate bonds take this form. Like a fixed-rent lease, the promised interest is paid regardless of market changes.",
      },
      {
        term: "변동금리 채권 (FRN)",
        termEn: "Floating Rate Note",
        definition:
          "SOFR·Euribor 등 기준금리에 스프레드를 더한 변동 쿠폰을 지급하는 채권. 금리 상승기에 쿠폰이 함께 올라가기 때문에 가격이 액면가 근처에서 안정적으로 유지된다. 단기 자금 운용 펀드·CLO 투자자에게 인기가 높다. 은행이 변동금리 대출을 해줄 때 이자율 위험을 헤지하는 수단으로 FRN을 발행하기도 한다.",
        definitionEn:
          "A bond paying a coupon that resets periodically based on a reference rate (like SOFR or Euribor) plus a spread. Since the coupon rises with interest rates, the price stays near par even in rising rate environments. Popular among short-term money market funds and CLO investors. Banks also issue FRNs to hedge the interest rate risk of their floating-rate loan portfolios.",
      },
      {
        term: "영구채 (Perpetual Bond)",
        termEn: "Perpetual Bond / Perp",
        definition:
          "원칙적으로 만기가 없는 채권. 이자는 영구적으로 지급하되 발행사 재량에 따라 특정 시점에 조기상환(Call)이 가능하다. AT1 자본 증권(은행 영구채)이 대표적이며, 회계·규제상 자기자본으로 인정받을 수 있어 BIS 비율 관리에 활용된다. 투자자 입장에서는 만기 없는 현금 흐름을 받는 대신, 금리 리스크와 콜 위험을 감수해야 한다.",
        definitionEn:
          "A bond with no stated maturity date in principle. Interest is paid indefinitely, but the issuer can redeem it at its discretion at specific call dates. AT1 capital securities (bank perps) are the prime example, counting as regulatory capital under Basel III for BIS ratio management. For investors, the trade-off is receiving perpetual cash flows while bearing interest rate risk and call risk.",
      },
      {
        term: "제로쿠폰 채권",
        termEn: "Zero-Coupon Bond",
        definition:
          "이자를 지급하지 않는 대신 액면가보다 크게 할인된 가격으로 발행되고, 만기에 액면가를 수령하는 채권. 듀레이션이 만기와 동일하여 채권 중 금리 변동에 가장 민감하다. 중간 이자 재투자 위험이 없어 특정 미래 시점의 현금이 필요한 투자자(연기금, 보험사)에게 적합하다. 1,000원을 받기 위해 오늘 600원을 내는 것처럼, 시간 가치를 압축한 상품이다.",
        definitionEn:
          "A bond that pays no periodic interest but is issued at a deep discount to face value, with the investor receiving full face value at maturity. Its duration equals its maturity, making it the most sensitive bond type to interest rate changes. With no reinvestment risk from interim coupons, it suits investors needing a specific lump sum at a future date (pensions, insurers). Like paying 600 today to receive 1,000 later — a product that compresses the time value of money.",
      },
      {
        term: "구조화 채권 (Structured Note)",
        termEn: "Structured Note",
        definition:
          "금리·환율·주가 등 기초자산 성과에 연동된 수익 구조를 내장한 채권. ELS와 유사하나 채권 형태로 발행되어 원금 보장 여부, 쿠폰 조건, 조기상환 트리거가 다양하게 설계된다. 복잡한 구조로 높은 잠재 수익을 제공하지만 리스크도 그만큼 크며, 발행사는 파생상품을 통해 투자자에게 전가한 리스크를 헤지한다. 전통 채권과 파생상품이 결합된 상품이라 이해하기 어렵고 유동성도 낮은 편이다.",
        definitionEn:
          "A bond with an embedded payoff structure linked to the performance of an underlying asset — interest rates, FX, equities, or credit. Similar to ELS but issued in bond form, with customizable principal protection, coupon conditions, and early redemption triggers. The complex structure offers high potential returns but commensurate risks; the issuer hedges the transferred risk through derivatives. As a hybrid of traditional bonds and derivatives, structured notes are hard to value and tend to have low secondary market liquidity.",
      },
    ],
    relatedSlugs: ["dcm-overview", "dcm-investors", "oas", "spread-basis", "high-yield", "dcm-international-markets"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.4 — 국제채 지형도 ────────────────────────────────────
  {
    slug: "dcm-international-markets",
    title: "DCM Ch.4 — 국제채 지형도: Yankee·Eurobond·Samurai·Formosa·Arirang",
    titleEn: "DCM Ch.4 — International Bond Markets: Yankee, Eurobond, Samurai, Formosa, Arirang",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "한국 기업·기관이 어디서 달러·유로·엔을 빌리는가 — 각 국제채 시장의 투자자 베이스·규제·비용 구조를 비교합니다. Reg S vs 144A, 통화 스왑, 시장 선택의 실무 기준.",
    excerptEn:
      "Where Korean corporates and institutions raise foreign currency — comparing investor base, regulatory environment, and cost for each international bond market. Reg S vs 144A, cross-currency swaps, and practical selection criteria.",
    readingMinutes: 14,
    tags: ["DCM", "외화채", "Yankee", "Eurobond", "사무라이", "Formosa", "Arirang", "달러채"],
    tagsEn: ["DCM", "International Bond", "Yankee", "Eurobond", "Samurai", "Formosa", "Arirang", "Dollar Bond"],
    sections: [],
    keyTerms: [
      {
        term: "유로본드",
        termEn: "Eurobond",
        definition:
          "발행국 이외의 통화로, 해당 통화 발행국 이외의 장소에서 발행되는 채권. 명칭에 'Euro'가 있지만 유럽이나 유로화에 한정되지 않으며, 한국 기업이 런던에서 달러로 발행하는 채권도 유로본드다. 규제가 비교적 유연하고 국제 투자자 베이스가 넓어 대규모 공모 발행에 적합하다. 세금 혜택과 익명성 덕분에 역사적으로 기관 투자자들이 선호해온 시장이다.",
        definitionEn:
          "A bond issued in a currency other than the currency of the country where it is issued. Despite the 'Euro' prefix, it has no relation to Europe or the euro — a Korean company issuing dollar bonds in London qualifies as a Eurobond. Relatively flexible regulation and a broad international investor base make it well-suited for large public offerings. Historically favored by institutional investors for its tax advantages and anonymity.",
      },
      {
        term: "양키본드",
        termEn: "Yankee Bond",
        definition:
          "외국 기업이나 정부가 미국 투자자를 대상으로 달러화로 미국에서 발행하는 채권. SEC 등록 또는 Rule 144A 사모 면제를 통해 발행 가능하며, 미국 투자자 풀에 직접 접근한다는 것이 핵심 장점이다. 한국 기업들도 미국 자본 시장 접근을 위해 양키본드를 자주 활용한다. 미국 국채 시장과 연동되어 T+스프레드로 가격이 결정된다.",
        definitionEn:
          "A bond issued in the United States in USD by a foreign company or government, targeting U.S. investors. Issued either via SEC registration or Rule 144A private placement exemption, the key advantage is direct access to the U.S. investor pool. Korean issuers frequently tap the Yankee bond market to reach U.S. capital markets. Pricing is benchmarked against U.S. Treasuries as a T+ spread.",
      },
      {
        term: "사무라이본드",
        termEn: "Samurai Bond",
        definition:
          "외국 발행자가 일본에서 엔화로 발행하는 채권. 저금리의 안정적인 일본 자금을 유치하는 수단으로, 엔화 조달 후 크로스커런시 스왑을 통해 달러 등 다른 통화로 전환해 사용한다. 일본 투자자들은 보수적 성향으로 IG 발행사를 선호하며, 한국 공기업들이 일본 자금 조달을 위해 활발히 활용하는 시장이다. 사무라이는 일본에서 외국 발행자를 위한 '일본판 양키본드'라 할 수 있다.",
        definitionEn:
          "A bond issued in Japan in JPY by a foreign issuer. Used to tap into Japan's low-cost, stable funding pool, with JPY proceeds typically converted to USD or other currencies via cross-currency swaps. Japanese investors tend to be conservative and favor IG issuers; Korean SOEs are active in this market for Japanese funding. Samurai bonds are effectively the 'Japanese equivalent of Yankee bonds' for foreign issuers.",
      },
      {
        term: "144A / Reg S",
        termEn: "Rule 144A / Regulation S",
        definition:
          "미국 증권법의 두 가지 해외 채권 발행 면제 규정. 144A는 미국 적격기관투자자(QIB) 대상 사모 발행으로 SEC 등록 없이 미국 자본 시장에 접근 가능하다. RegS는 미국 외 투자자 대상 발행을 규율한다. 대부분의 글로벌 하이일드 딜은 144A/RegS를 동시에 사용해 미국과 해외 투자자 모두에게 판매한다.",
        definitionEn:
          "Two U.S. securities law exemptions for international bond issuance. Rule 144A allows private placement to U.S. Qualified Institutional Buyers (QIBs) without SEC registration, providing access to U.S. capital markets. Regulation S governs issuances to non-U.S. investors. Most global high-yield deals are launched as combined 144A/RegS offerings to reach both U.S. and international investors simultaneously.",
      },
      {
        term: "외화 조달 동기",
        termEn: "Motivation for Foreign Currency Issuance",
        definition:
          "기업·기관이 해외에서 달러·유로·엔 채권을 발행하는 이유는 크게 네 가지다: ① 국내보다 낮은 조달 금리 ② 투자자 베이스 다양화를 통한 발행 규모 확대 ③ 외화 부채로 환리스크 자연 헤지 ④ 글로벌 자본 시장 존재감 강화. 환헤지 비용을 포함한 종합 조달 비용(올인 코스트)이 국내 발행보다 유리한지 계산하는 것이 핵심 의사결정이다. DCM 뱅커는 통화별 아비트라지 기회를 발행사에게 제시하며 딜을 수임한다.",
        definitionEn:
          "There are four main reasons companies and institutions issue foreign currency bonds abroad: (1) lower funding rates than domestic markets, (2) expanded issuance size through investor base diversification, (3) natural hedging of FX risk via foreign currency debt, and (4) enhanced global capital market presence. The core decision is whether the all-in funding cost including FX hedging is cheaper than domestic issuance. DCM bankers pitch cross-currency arbitrage opportunities to win mandates from issuers.",
      },
    ],
    relatedSlugs: ["dcm-overview", "dcm-bond-products", "spread-basis", "dcm-deal-process"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.5 — 딜 프로세스 ──────────────────────────────────────
  {
    slug: "dcm-deal-process",
    title: "DCM Ch.5 — 딜 프로세스: Mandate부터 클로징까지",
    titleEn: "DCM Ch.5 — Deal Process: From Mandate to Closing",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM 딜이 어떻게 시작해서 끝나는가 — Mandate 확보, 구조 설계, 로드쇼, 북빌딩, 가격 결정, 클로징까지. IB 실무자 시각에서 각 단계의 의사결정 포인트를 해부합니다.",
    excerptEn:
      "How a DCM deal begins and ends — mandate, structure design, roadshow, book-building, pricing, closing. Each decision point from an IB practitioner's perspective.",
    readingMinutes: 16,
    tags: ["DCM", "딜프로세스", "Mandate", "로드쇼", "북빌딩", "프라이싱", "클로징", "PP"],
    tagsEn: ["DCM", "Deal Process", "Mandate", "Roadshow", "Book Building", "Pricing", "Closing", "Private Placement"],
    sections: [],
    keyTerms: [
      {
        term: "만데이트",
        termEn: "Mandate",
        definition:
          "발행사가 특정 IB에게 채권 주간사를 맡기는 공식 결정. 경쟁 피치(Beauty Contest) 이후 금리 수준·투자자 커버리지·팀 경험 등을 종합 평가해 선택한다. 만데이트를 받은 IB는 발행 구조 설계부터 클로징까지 전 과정을 주도한다. 딜 경쟁에서 만데이트 수임 실적은 IB의 리그테이블 순위와 직결되어 영업 활동의 궁극적 목표가 된다.",
        definitionEn:
          "The formal selection of a specific investment bank as bond underwriter by the issuer. Following a competitive pitch (beauty contest), the issuer chooses based on pricing capability, investor coverage, and team experience. The mandated bank leads the entire process from structure design to closing. Winning mandates feeds directly into league table rankings, making it the ultimate commercial goal of IB origination efforts.",
      },
      {
        term: "로드쇼",
        termEn: "Roadshow",
        definition:
          "발행사 경영진이 주요 투자자를 직접 방문하거나 영상 회의로 채권 발행 계획과 사업 전망을 설명하는 IR 활동. 통상 1~5일에 걸쳐 주요 금융 센터의 투자자를 순방한다. 투자자 피드백을 반영해 최종 발행 가격과 규모를 조정하며, 기관 투자자와의 신뢰 관계 구축에도 중요한 역할을 한다. 디지털 전환으로 최근에는 글로벌 버추얼 로드쇼가 일반화됐다.",
        definitionEn:
          "An IR activity where the issuer's management directly meets key investors — in person or via video conference — to present bond issuance plans and business outlook. Typically spanning 1–5 days across major financial centers. Investor feedback gathered during roadshows shapes the final pricing and deal size, and the process also builds institutional relationships. Digital transformation has made global virtual roadshows increasingly common.",
      },
      {
        term: "북빌드",
        termEn: "Book Build",
        definition:
          "투자자로부터 가격·물량 주문을 취합해 발행 가격과 물량을 결정하는 과정. 오더북이 목표 이상으로 채워지면(오버서브스크라이브) 가격이 개선되고, 미달이면 발행을 취소하거나 조건을 낮춰야 한다. 주간사(Bookrunner)는 실시간으로 오더 현황을 모니터링하며 Real Money vs. Fast Money 비율을 고려해 최적 가격을 결정한다. 북빌드는 채권 발행의 심장으로, 여기서 발행 성패가 결정된다.",
        definitionEn:
          "The process of collecting price and volume orders from investors to determine the final issue price and deal size. An oversubscribed order book allows for price improvement (tightening), while an undersubscribed book may force deal cancellation or weaker terms. The bookrunner monitors orders in real time, balancing real money vs. fast money to set the optimal price. The book build is the heart of bond issuance — this is where success or failure is decided.",
      },
      {
        term: "그레이 마켓",
        termEn: "Grey Market / When-Issued Market",
        definition:
          "채권이 공식 발행되기 전, 기관 투자자들 사이에서 비공식으로 발행 예정 채권을 거래하는 시장. 발행 가격에 대한 시장의 기대치를 선행 반영하며, 그레이 마켓 가격이 공식 IPT보다 타이트하면 강한 수요 신호로 해석된다. DCM 뱅커들은 그레이 마켓 동향을 실시간으로 체크해 IPT 설정 시 참고한다. 공식 시장은 아니지만 발행 성공 여부를 가늠하는 중요한 선행 지표다.",
        definitionEn:
          "An informal market where institutional investors trade anticipated bonds before their official issuance. Grey market prices reflect market expectations about the final deal price in advance — if they are tighter than the official IPT, it signals strong demand. DCM bankers monitor grey market movements in real time to calibrate IPT levels. While not an official market, grey market activity is a critical leading indicator of deal success.",
      },
      {
        term: "클로징",
        termEn: "Closing",
        definition:
          "채권 발행의 최종 단계로, 법적 문서 서명, 자금 이전, 채권 등록이 완료되는 날. 클로징 후 채권이 2차 시장에서 거래 가능 상태가 된다. 통상 거래 체결일(Trade Date)로부터 T+3~T+5 영업일 후에 클로징이 이루어진다. 클로징 전 법무팀의 서류 검토와 결제 기관(Euroclear, Clearstream) 등록이 선행되어야 하며, 모든 조건 충족 시 발행사에게 자금이 입금된다.",
        definitionEn:
          "The final stage of bond issuance, when legal documents are signed, funds are transferred, and the bond is formally registered. After closing, the bond becomes tradeable in the secondary market. Closing typically occurs T+3 to T+5 business days after the trade date. It requires prior completion of legal document review and registration with clearing houses (Euroclear, Clearstream); once all conditions are met, the proceeds are credited to the issuer.",
      },
    ],
    relatedSlugs: ["dcm-overview", "book-building", "nic", "syndicate", "dcm-pricing", "dcm-international-markets"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.6 — 프라이싱 ──────────────────────────────────────────
  {
    slug: "dcm-pricing",
    title: "DCM Ch.6 — 프라이싱: G/I/Z/OAS/ASW 스프레드와 NIC",
    titleEn: "DCM Ch.6 — Pricing: G/I/Z/OAS/ASW Spreads and NIC",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "채권 가격이 어떻게 결정되는가 — G·I·Z·OAS·ASW 스프레드의 차이와 사용 시점. Bloomberg YAS 화면에서 DCM 뱅커가 실제로 무엇을 보는지, NIC가 어떻게 협상되는지.",
    excerptEn:
      "How bond prices are set — when to use G, I, Z, OAS, and ASW spreads. What DCM bankers actually look at on Bloomberg YAS, and how NIC is negotiated in real time.",
    readingMinutes: 15,
    tags: ["DCM", "프라이싱", "G스프레드", "Z스프레드", "OAS", "NIC", "Bloomberg YAS"],
    tagsEn: ["DCM", "Pricing", "G-Spread", "Z-Spread", "OAS", "NIC", "Bloomberg YAS"],
    sections: [],
    keyTerms: [
      {
        term: "IPT (초기 가격 제시)",
        termEn: "Initial Price Talk",
        definition:
          "북빌드 개시 시 IB가 시장에 제시하는 예상 발행 금리 또는 스프레드 범위. 수요 반응을 보고 점차 좁혀가며 최종 Guidance → Final Price로 확정된다. IPT는 발행사에게 불리하지 않을 정도로 보수적으로 시작하여 수요가 확인되면 타이트하게 이동하는 것이 일반적이다. 마치 경매의 시작 가격처럼, IPT는 투자자들의 첫 반응을 측정하는 탐색 도구다.",
        definitionEn:
          "The initial expected yield or spread range that an IB announces to the market at the start of a book build. It narrows progressively as demand is gauged, moving to Guidance and then Final Price. IPT typically starts conservatively to not disadvantage the issuer, then tightens as demand builds. Like an auction's opening bid, IPT is a price discovery tool to measure the first wave of investor reactions.",
      },
      {
        term: "가격 개선 (Tightening)",
        termEn: "Price Tightening",
        definition:
          "오더북이 목표 이상으로 채워지면 최종 발행 가격을 IPT보다 낮은 금리(더 좋은 가격)로 확정하는 과정. 발행사 입장에서는 더 저렴하게 자금을 조달하는 유리한 결과다. 반대로 수요 부진 시에는 스프레드를 확대하거나 발행 자체를 철회하기도 한다. Tightening 폭이 클수록 딜의 성공과 발행사의 신용 강도를 입증한다.",
        definitionEn:
          "The process of finalizing the issue at a lower yield (better price) than the initial IPT when the order book is significantly oversubscribed. For the issuer, this means achieving cheaper funding — a favorable outcome. Conversely, weak demand may require widening the spread or even withdrawing the deal. A large tightening move demonstrates deal success and the issuer's credit strength.",
      },
      {
        term: "NIC (신규 발행 콘세션)",
        termEn: "New Issue Concession",
        definition:
          "새 채권을 시장에 소화시키기 위해 발행사가 기존 유통 채권 대비 추가로 지급하는 스프레드 프리미엄. 투자자에게 기존 채권 대신 새 채권을 살 이유를 제공한다. NIC가 작을수록 발행사에게 유리하지만, 너무 작으면 수요 부진 위험이 있다. 강한 크레딧과 우호적 시장 환경에서는 NIC 없이 또는 마이너스 NIC로 발행하는 경우도 있다.",
        definitionEn:
          "The additional spread premium an issuer pays over its existing secondary market bonds to incentivize investors to buy the new issue. It gives investors a reason to choose the new bond over existing paper. A smaller NIC benefits the issuer, but too little risks a thin order book. In favorable markets with strong credits, issuers sometimes print with zero or even negative NIC.",
      },
      {
        term: "OAS (옵션조정 스프레드)",
        termEn: "Option-Adjusted Spread",
        definition:
          "콜·풋 등 내재 옵션 가치를 제거하고 순수 신용 리스크에 해당하는 스프레드만 추출한 지표. 옵션이 내장된 채권(콜러블, AT1 등)의 실질 신용 프리미엄을 비교할 때 사용한다. OAS가 같다면 옵션 구조가 달라도 동일한 신용 리스크를 내포한다고 볼 수 있다. 마치 보험료를 제외하고 순수 원가를 비교하는 것처럼, 옵션 비용을 걷어낸 진짜 스프레드를 보는 도구다.",
        definitionEn:
          "A spread measure that strips out the value of embedded options (calls, puts) to isolate pure credit risk. Used to compare the true credit premium of bonds with embedded options (callables, AT1s, etc.). If two bonds have the same OAS, they carry equivalent credit risk despite differing option structures. Like comparing costs net of insurance premiums, OAS is the tool for seeing the 'real' spread after removing option costs.",
      },
      {
        term: "포워드 커브",
        termEn: "Forward Rate Curve",
        definition:
          "현재 시점의 금리 구조에서 추출한, 미래 특정 시점의 예상 단기금리를 연결한 곡선. 채권 만기별 실제 수익률이 포워드 커브에서 얼마나 이탈했는지를 비교해 상대적 매력도를 평가한다. 포워드 커브가 가파를수록 시장이 미래 금리 상승을 기대한다는 신호다. DCM 뱅커는 포워드 커브를 활용해 발행사에게 '지금 장기로 발행하는 것이 미래보다 유리한지'를 분석한다.",
        definitionEn:
          "A curve derived from the current yield curve structure, representing expected short-term rates at future points in time. Used to assess relative attractiveness by comparing actual yields across maturities against the forward curve. A steeper forward curve signals that the market expects future rate increases. DCM bankers use forward curves to analyze whether it is more advantageous for an issuer to lock in long-term funding today versus waiting.",
      },
    ],
    relatedSlugs: ["dcm-overview", "spread-basis", "oas", "nic", "book-building", "dcm-deal-process"],
    appearsIn: [],
  },

  // ── DCM 시리즈: Ch.7 — 구조와 제도 ──────────────────────────────────────
  {
    slug: "dcm-structure-regulation",
    title: "DCM Ch.7 — 구조와 제도: 차이니즈 월·MNPI·신디케이트·문서화",
    titleEn: "DCM Ch.7 — Structure & Regulation: Chinese Wall, MNPI, Syndicate, Documentation",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM을 움직이는 제도적 인프라 — 차이니즈 월이 왜 존재하는지, MNPI가 딜 실행에 어떤 영향을 주는지, 신디케이트 데스크의 역할, Prospectus·OM·Pricing Supplement의 구조. 실무자가 반드시 알아야 할 규제 프레임워크.",
    excerptEn:
      "The institutional infrastructure powering DCM — why Chinese Walls exist, how MNPI shapes deal execution, the syndicate desk's role, and documentation structure (Prospectus, OM, PS). The regulatory framework every practitioner must know.",
    readingMinutes: 14,
    tags: ["DCM", "차이니즈월", "MNPI", "신디케이트", "Reg S", "144A", "규제", "문서화"],
    tagsEn: ["DCM", "Chinese Wall", "MNPI", "Syndicate", "Reg S", "144A", "Regulation", "Documentation"],
    sections: [],
    keyTerms: [
      {
        term: "셸프 등록",
        termEn: "Shelf Registration",
        definition:
          "일정 기간(보통 3년) 동안 반복 발행할 수 있는 포괄 공시 제도. 미국 Form S-3, 일본 방식 등이 대표적이다. 매번 새로 신고하지 않아도 되어 시장 창이 열릴 때 신속하게 발행할 수 있다. 사전에 등록을 완비한 발행사는 좋은 시장 환경이 왔을 때 24~48시간 내 발행을 완료할 수 있어 기회 비용을 최소화한다.",
        definitionEn:
          "A pre-registration framework that allows repeated bond issuances over a set period (typically three years) without filing anew each time. Examples include the U.S. Form S-3 and Japanese shelf systems. Because documentation is pre-approved, issuers can launch when market windows open. An issuer with a shelf in place can complete a deal in 24–48 hours when favorable conditions arise, minimizing opportunity cost.",
      },
      {
        term: "담보부 채권 vs 무담보 채권",
        termEn: "Secured vs Unsecured Bond",
        definition:
          "담보부 채권은 특정 자산(부동산·기계·수익권)이 채권에 담보로 설정되어 디폴트 시 담보 처분으로 우선 변제된다. 무담보 채권은 일반 채권자 위계에서 청산 시 변제되며, 담보부에 비해 동일 발행사라도 더 높은 스프레드를 지불한다. 담보 유무는 등급 평가와 스프레드 결정에 직접적 영향을 미친다. 은행 커버드 본드가 대표적인 담보부 채권으로, 주택 담보 자산을 기반으로 일반 선순위채보다 낮은 금리로 발행된다.",
        definitionEn:
          "Secured bonds have specific assets (real estate, equipment, receivables) pledged as collateral, giving bondholders priority claim on those assets in a default. Unsecured bonds rank within the general creditor hierarchy in a liquidation and require higher spreads than secured bonds from the same issuer. Collateral presence directly impacts rating and spread determination. Covered bonds (e.g., bank mortgage-backed bonds) are a prime example of secured debt, issued at lower rates than plain senior unsecured bonds.",
      },
      {
        term: "기한이익 상실",
        termEn: "Event of Default",
        definition:
          "채무불이행 사유 발생 시 원금 전액을 즉시 상환해야 하는 채권자 권리 발동 조건. 이자 미납, 코버넌트 위반, 파산 신청 등이 트리거가 된다. 인덴처에 상세히 정의되어 있으며, 단일 채권의 EOD가 교차 디폴트 조항을 통해 다른 채권에도 연쇄 발동될 수 있다. 투자자는 EOD 조항을 통해 최악의 시나리오에서도 일정 수준의 법적 보호를 받는다.",
        definitionEn:
          "A trigger condition in the bond indenture that accelerates the full principal repayment obligation when a default event occurs — such as missed interest payments, covenant breach, or bankruptcy filing. Defined in detail in the indenture, a single bond's EOD can cascade to other bonds via cross-default provisions. EOD clauses give investors a layer of legal protection even in worst-case scenarios.",
      },
      {
        term: "바젤 III 규제",
        termEn: "Basel III",
        definition:
          "BIS가 은행의 자기자본 적정성·유동성·레버리지를 규율하는 국제 표준. CET1 비율·LCR·NSFR 등을 요구한다. 바젤 III가 은행에게 AT1(신종자본증권)·T2(후순위채)를 발행해야 하는 핵심 동인이 된다. 규제가 강화될수록 은행의 채권 발행 수요가 증가하며, 은행채 투자자는 규제 변화를 주요 신용 분석 요소로 반드시 모니터링해야 한다.",
        definitionEn:
          "The BIS international standard governing bank capital adequacy, liquidity, and leverage. It requires metrics like CET1 ratio, LCR, and NSFR. Basel III is the primary driver behind bank issuance of AT1 (additional tier 1) and T2 (tier 2) bonds. As regulations tighten, bank bond issuance demand grows, and investors in bank bonds must monitor regulatory changes as a core credit analysis factor.",
      },
      {
        term: "MNPI (미공개 중요 정보)",
        termEn: "Material Non-Public Information",
        definition:
          "일반에 공개되지 않은 채권 발행사의 중요 정보. 내부자 거래 규제상 MNPI를 보유한 자는 해당 채권을 거래하거나 투자자에게 선택적으로 공개할 수 없다. DCM 딜 과정에서 IB 내부 팀은 MNPI에 노출될 수 있으므로, 차이니즈 월을 통해 트레이딩 데스크와 정보를 차단한다. MNPI 관리 실패는 규제 제재와 법적 책임으로 이어질 수 있다.",
        definitionEn:
          "Material information about a bond issuer that has not been disclosed to the public. Under insider trading regulations, anyone possessing MNPI cannot trade the relevant bonds or selectively disclose it to investors. In DCM deal execution, internal IB teams may be exposed to MNPI, which is why Chinese Walls separate them from the trading desk. Failure to manage MNPI properly can result in regulatory sanctions and legal liability.",
      },
    ],
    relatedSlugs: ["dcm-overview", "chinese-wall", "mnpi", "syndicate", "dcm-deal-process", "dcm-pricing"],
    appearsIn: [],
  },

  // ── DCM Ch.8 — Execution ─────────────────────────────────────────────────
  {
    slug: "dcm-execution",
    title: "DCM Ch.8 — 국제채 발행 실전: Arb 계산부터 북빌딩까지",
    titleEn: "DCM Ch.8 — Bond Execution in Practice: Arb Calculation to Book-Building",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "DCM 피치의 핵심: \"우리 하우스를 써서 이 통화로 발행하면 USD 대비 Xbp 저렴합니다.\" EUR/JPY/TWD→USD Arb 계산, Bloomberg Comps에서 IPT 도출, 북빌딩 4시간의 실시간 판단, Real money vs. Fast money 배분 전략. Korea MOEF EUR 5yr 케이스.",
    excerptEn:
      "The core of every DCM pitch: 'Our house saves you Xbp vs. direct USD issuance.' EUR/JPY/TWD→USD arb calculation, Bloomberg comps to IPT, 4-hour bookbuilding decisions, real money vs. fast money allocation. Korea MOEF EUR 5yr case study.",
    readingMinutes: 20,
    tags: ["DCM", "CCBS", "크로스커런시스왑", "Arb", "북빌딩", "IPT", "NIC", "외평채", "사무라이본드", "포모사본드", "신디케이트"],
    tagsEn: ["DCM", "CCBS", "Cross-Currency Swap", "Arb", "Book-Building", "IPT", "NIC", "KTB", "Samurai Bond", "Formosa Bond", "Syndicate"],
    sections: [],
    keyTerms: [
      {
        term: "듀얼 트랑쉐 발행",
        termEn: "Dual-Tranche Issuance",
        definition:
          "만기가 다른 두 종류의 채권을 동시에 발행하는 방법. 예를 들어 5년물 + 10년물을 동시 발행하면 투자자 수요를 만기별로 분산 수용하여 조달 비용을 최적화할 수 있다. 단일 트랑쉐보다 총 발행 규모를 키울 수 있고, 다양한 투자자 베이스에 접근해 오더북의 질을 높인다. 대규모 딜에서 자주 사용되며 각 트랑쉐의 상대적 수요 강도가 가격 결정에 서로 영향을 미친다.",
        definitionEn:
          "The simultaneous issuance of two bond tranches with different maturities — for example, a 5-year and a 10-year issued at the same time. This absorbs investor demand across maturities, optimizing the issuer's funding cost. It increases total deal size versus a single tranche and improves order book quality by reaching a wider investor base. Common in large-scale deals, where the relative demand strength of each tranche influences the pricing of the other.",
      },
      {
        term: "그린슈 옵션",
        termEn: "Greenshoe Option",
        definition:
          "채권 발행 시 주관사가 초과 수요 발생 시 원래 공모 물량에 추가해 발행할 수 있는 옵션. 초기 발행 규모보다 더 많은 수요가 확인되면 발행사가 추가 물량을 같은 가격으로 발행해 자금 조달을 극대화한다. 주식 IPO에서도 같은 이름으로 쓰이며, 채권에서는 'Upsize Option' 또는 'Over-allotment Option'으로도 불린다. 발행사 입장에서는 '일단 최소 규모로 시작해, 수요가 있으면 키운다'는 유연한 전략이다.",
        definitionEn:
          "An option granted to the bookrunner to issue additional bonds at the same price when demand exceeds the initial offering size. When confirmed demand surpasses the original deal size, the issuer exercises this option to maximize proceeds at favorable terms. Known by the same name in equity IPOs and also called 'Upsize Option' or 'Over-allotment Option' in bond markets. For the issuer, it's a flexible strategy: 'start small, and scale up if demand warrants it.'",
      },
      {
        term: "주간사 역할",
        termEn: "Bookrunner / Lead Manager",
        definition:
          "채권 발행의 주간사(Bookrunner)는 가격 설정, 로드쇼 조직, 북빌드 진행, 배분 결정, 2차 시장 초기 유동성 공급의 전 과정을 책임진다. 여러 IB가 공동 주간사(Joint Bookrunner)로 참여할 때 리드 레프트(Left-Lead)가 실질적 주도권을 갖는다. 딜이 성공하면 리그테이블 실적이 되고, 실패하면 평판 리스크를 진다. 주간사는 발행사의 이익을 대리하면서도 시장 투자자와의 관계를 동시에 관리해야 하는 이중적 역할을 수행한다.",
        definitionEn:
          "The lead manager (bookrunner) is responsible for the entire bond issuance process — pricing, roadshow organization, book build execution, allocation decisions, and initial secondary market liquidity support. When multiple banks serve as joint bookrunners, the 'left-lead' holds primary authority. A successful deal becomes a league table credit; a failed deal carries reputational risk. The bookrunner plays a dual role: representing the issuer's interests while simultaneously managing relationships with market investors.",
      },
      {
        term: "콜옵션 / 풋옵션",
        termEn: "Call / Put Option",
        definition:
          "콜옵션은 발행사가 만기 전 채권을 조기 상환할 수 있는 권리, 풋옵션은 투자자가 채권을 발행사에 되팔 수 있는 권리다. 콜옵션이 있으면 금리 하락 시 저금리 채권을 재발행할 수 있어 발행사에게 유리하지만, 투자자는 이를 감안해 추가 스프레드를 요구한다. 풋옵션은 투자자 보호 수단으로 신용 이벤트 발생 시 조기 회수 가능성을 제공한다. 옵션의 존재는 채권 가격과 듀레이션 계산을 복잡하게 만든다.",
        definitionEn:
          "A call option gives the issuer the right to redeem the bond before maturity; a put option gives investors the right to sell the bond back to the issuer. Call options benefit issuers in falling rate environments by enabling refinancing at lower rates, but investors demand a premium spread in compensation. Put options protect investors by providing early exit if credit events occur. Embedded options complicate bond pricing and duration calculation.",
      },
      {
        term: "가격 발견",
        termEn: "Price Discovery",
        definition:
          "시장 참여자들의 주문(IOI·북빌드 오더)을 통해 채권의 공정 가격이 형성되는 과정. 활발한 2차 시장 유동성이 가격 발견을 원활하게 하고 1차 발행 비용을 낮춘다. 가격 발견이 잘 이루어지는 시장에서는 NIC가 낮아지고 발행사가 유리한 조건을 얻는다. DCM 관점에서 가격 발견의 투명성과 효율성은 채권 시장 전반의 신뢰성을 결정하는 핵심 요소다.",
        definitionEn:
          "The process by which the fair price of a bond is established through market participants' orders — IOIs and book-build orders. Deep secondary market liquidity facilitates price discovery and lowers primary market issuance costs. In markets with efficient price discovery, NIC narrows and issuers secure more favorable terms. From a DCM perspective, the transparency and efficiency of price discovery is a cornerstone of overall bond market credibility.",
      },
    ],
    relatedSlugs: ["dcm-deal-process", "dcm-pricing", "dcm-international-markets", "dcm-structure-regulation", "dcm-rate-benchmarks"],
    appearsIn: [],
  },

  // ── DCM Ch.9 — Liability Management ─────────────────────────────────────
  {
    slug: "dcm-liability-management",
    title: "DCM Ch.9 — 부채관리 실전: 텐더 오퍼·익스체인지 오퍼·콜 옵션",
    titleEn: "DCM Ch.9 — Liability Management: Tender Offer, Exchange Offer & Call Options",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "채권 발행 후 기발행 채권의 능동적 관리 — 캐시 텐더 오퍼, 익스체인지 오퍼, Make-Whole Call, Par Call, Consent Solicitation. 만기 절벽 회피부터 금리 하락 기회 활용까지. KEXIM USD 500mn 케이스.",
    excerptEn:
      "Active management of outstanding bonds post-issuance — cash tender offer, exchange offer, make-whole call, par call, consent solicitation. Avoiding maturity walls to exploiting rate environments. KEXIM USD 500mn case study.",
    readingMinutes: 16,
    tags: ["DCM", "텐더오퍼", "익스체인지오퍼", "부채관리", "LME", "Make-Whole Call", "Par Call", "Consent Solicitation", "만기절벽"],
    tagsEn: ["DCM", "Tender Offer", "Exchange Offer", "Liability Management", "LME", "Make-Whole Call", "Par Call", "Consent Solicitation", "Maturity Wall"],
    sections: [],
    keyTerms: [
      {
        term: "LME (부채 관리 거래)",
        termEn: "Liability Management Exercise",
        definition:
          "기업이 기존 채권을 사전 상환·교환·재구조화해 만기 프로파일, 금리, 코버넌트 조건을 개선하는 일련의 거래. Tender Offer, Exchange Offer, Consent Solicitation이 대표적 수단이다. LME는 새 채권 발행과 함께 실행되는 경우가 많으며, 고금리 구채권 소각과 저금리 신채권 발행을 동시에 진행해 조달 비용을 낮춘다. 만기 집중으로 인한 유동성 위기를 선제적으로 예방하는 부채 관리 전략이다.",
        definitionEn:
          "A set of transactions by which a company proactively retires, exchanges, or restructures existing bonds to improve its maturity profile, interest cost, or covenant terms. Key tools include tender offers, exchange offers, and consent solicitations. LME is often executed alongside new bond issuance, simultaneously retiring high-coupon old bonds and issuing lower-coupon new ones to reduce funding costs. It is a proactive debt management strategy to prevent liquidity crises from maturity concentrations.",
      },
      {
        term: "텐더오퍼 (채권 공개매수)",
        termEn: "Tender Offer",
        definition:
          "발행사가 기존 채권 보유자에게 일정 프리미엄을 지급하고 채권을 시장에서 조기 매입하는 행위. 금리 하락기에 고금리 채권을 소각하고 저금리 채권을 재발행하는 비용 절감 전략으로 사용된다. 투자자 입장에서는 시장가보다 높은 가격에 매도할 기회를 제공받는다. 텐더오퍼 가격은 Make-Whole 계산 또는 Fixed Spread 방식으로 결정되며, 수락률이 낮으면 전략적 의미가 줄어든다.",
        definitionEn:
          "An action in which the issuer offers to buy back outstanding bonds from holders at a premium price, retiring them ahead of maturity. Used in falling rate environments to retire high-coupon bonds and refinance with lower-cost debt. For investors, it offers an exit above market price. Tender prices are set using make-whole calculations or a fixed spread approach; low acceptance rates reduce the strategic effectiveness of the exercise.",
      },
      {
        term: "교환오퍼",
        termEn: "Exchange Offer",
        definition:
          "기존 채권을 새로운 조건의 채권으로 교환하는 거래. 현금 지급 없이 만기·금리·코버넌트 구조를 변경할 수 있어 현금이 부족한 상황에서도 부채 구조를 재편할 수 있다. 부실 기업의 법정 외 구조조정 수단으로도 활용되며, 투자자는 헤어컷을 수용하는 대신 새로운 채권을 받는다. 성공적인 교환오퍼는 채권 보유자 과반수 이상의 참여가 필요하다.",
        definitionEn:
          "A transaction that exchanges existing bonds for new bonds with modified terms — without cash payment. It allows restructuring of maturity, coupon, or covenants even when the issuer lacks cash. Also used as an out-of-court restructuring tool for distressed companies, where investors accept a haircut in exchange for new bonds. A successful exchange offer requires participation from a majority of bondholders.",
      },
      {
        term: "컨센트 솔리시테이션",
        termEn: "Consent Solicitation",
        definition:
          "채권 인덴처의 특정 조항을 변경하기 위해 채권 보유자 과반수(또는 슈퍼마조리티) 동의를 구하는 절차. 코버넌트 완화, 담보 제거, 만기 연장, 크로스 디폴트 조항 수정 등의 목적으로 사용된다. 동의 대가로 발행사는 보통 현금 수수료(Consent Fee)를 지급한다. 교환오퍼와 함께 진행되는 경우가 많으며, 법적 절차(파산 신청) 없이 채권 조건을 유연하게 변경할 수 있는 수단이다.",
        definitionEn:
          "A process for soliciting bondholder consent (majority or supermajority) to amend specific indenture terms. Used to relax covenants, release collateral, extend maturities, or modify cross-default provisions. In exchange, the issuer typically pays a consent fee. Often conducted alongside exchange offers, it allows flexible modification of bond terms without resorting to formal legal proceedings (bankruptcy).",
      },
      {
        term: "리파이낸싱",
        termEn: "Refinancing",
        definition:
          "만기가 도래하거나 금리 조건이 불리한 기존 부채를 새로운 채권·대출로 교체하는 행위. 금리 인하 사이클에서는 비용 절감 효과가 크고, 만기 연장을 통해 유동성을 확보한다. 시장 혼란 시 리파이낸싱 실패가 유동성 위기로 직결될 수 있어, 기업은 통상 만기 1~2년 전에 선제적으로 리파이낸싱을 추진한다. 만기 절벽(Maturity Wall) 관리가 기업 재무의 핵심이다.",
        definitionEn:
          "Replacing existing debt that is maturing or carrying unfavorable terms with new bonds or loans. In rate-cutting cycles, refinancing yields significant cost savings while extending maturities improves liquidity. Refinancing failures during market dislocations can directly trigger liquidity crises, which is why companies typically pursue refinancing proactively 1–2 years before maturity. Managing the maturity wall is a core corporate treasury function.",
      },
    ],
    relatedSlugs: ["dcm-execution", "dcm-pricing", "dcm-deal-process", "dcm-bond-products"],
    appearsIn: [],
  },

  // ── DCM Ch.10 — ESG Green Bond ────────────────────────────────────────────
  {
    slug: "dcm-esg-green-bond",
    title: "DCM Ch.10 — ESG·녹색채권 실무: GBP·Greenium·SLB vs 그린본드",
    titleEn: "DCM Ch.10 — ESG & Green Bonds in Practice: GBP, Greenium, SLB vs Green Bond",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt:
      "4조 달러 ESG 채권 시장의 실무 지도. GBP 4원칙, 그린본드·SLB·소셜본드·서스테이너빌리티본드·트랜지션본드 비교, Greenium 실측 데이터, SPO 제공자 분석, 그린워싱 식별법. 한국 기획재정부 최초 그린 소버린 케이스.",
    excerptEn:
      "Practitioner's map of the $4 trillion ESG bond market. GBP four pillars, green vs SLB vs social vs sustainability vs transition bonds, empirical greenium data by segment, SPO providers, greenwashing red flags. Korea MOEF first green sovereign case.",
    readingMinutes: 18,
    tags: ["DCM", "그린본드", "ESG", "SLB", "GBP", "Greenium", "SPO", "K-택소노미", "소셜본드", "그린워싱", "외평채"],
    tagsEn: ["DCM", "Green Bond", "ESG", "SLB", "GBP", "Greenium", "SPO", "K-Taxonomy", "Social Bond", "Greenwashing", "KTB"],
    sections: [],
    keyTerms: [
      {
        term: "그린본드",
        termEn: "Green Bond",
        definition:
          "환경 프로젝트(재생에너지·에너지 효율·친환경 건축 등)를 위한 자금 조달에만 사용되는 채권. ICMA 그린본드 원칙에 따라 자금 사용처 보고가 의무화되어 있다. 동일 발행사의 일반채 대비 낮은 금리(Greenium)가 발생하기도 하며, ESG 전용 투자자 베이스에 접근할 수 있다는 것이 발행사의 주요 유인이다. 환경 목적의 증빙이 부실할 경우 그린워싱 논란을 야기할 수 있다.",
        definitionEn:
          "A bond whose proceeds are exclusively used for environmental projects — renewable energy, energy efficiency, green buildings, and similar. Use-of-proceeds reporting is mandatory under ICMA Green Bond Principles. Issuers may benefit from a Greenium — a lower yield versus their conventional bonds — and gain access to the dedicated ESG investor pool. Insufficient environmental evidence risks triggering greenwashing criticism.",
      },
      {
        term: "서스테이너빌리티링크본드 (SLB)",
        termEn: "Sustainability-Linked Bond",
        definition:
          "사용처를 지정하지 않지만, 발행사가 사전에 합의한 KPI(탄소 감축률, 재생에너지 비율 등)를 달성하지 못하면 쿠폰이 자동 인상되는 구조의 채권. 환경 성과 미달 시 투자자에게 금전적 보상이 이루어지는 메커니즘이다. 그린본드와 달리 자금 사용에 제약이 없어 일반 기업들이 ESG 의지를 표명하며 발행하기 좋다. KPI 목표치 설정이 너무 쉬우면 그린워싱 논란을 피할 수 없다.",
        definitionEn:
          "A bond with no use-of-proceeds restriction but with an automatic coupon step-up if the issuer fails to meet pre-agreed KPIs (e.g., carbon reduction rates, renewable energy share). The mechanism provides financial compensation to investors if environmental targets are missed. Unlike green bonds, SLBs carry no funding restrictions, making them attractive for issuers that want to signal ESG commitment without earmarking proceeds. Overly easy KPI targets invite greenwashing criticism.",
      },
      {
        term: "ICMA 원칙",
        termEn: "ICMA Principles",
        definition:
          "국제자본시장협회(ICMA)가 제시한 그린본드·소셜본드·서스테이너빌리티 채권의 발행 원칙. 네 가지 핵심 구성요소는 ① 자금 사용처(Use of Proceeds) ② 프로젝트 평가·선정 기준 ③ 자금 분리 관리 ④ 보고 의무다. 법적 구속력은 없지만 시장 표준으로 광범위하게 채택되어 있으며, 이를 준수해야 ESG 투자자들의 신뢰를 얻을 수 있다. ICMA 원칙 준수 여부를 외부 기관이 검토(SPO)하는 것이 일반적이다.",
        definitionEn:
          "Voluntary guidelines published by the International Capital Market Association (ICMA) for green, social, and sustainability bonds. The four core components are: (1) Use of Proceeds, (2) Process for Project Evaluation and Selection, (3) Management of Proceeds, and (4) Reporting. While not legally binding, they are widely adopted as market standards; compliance is essential to gain ESG investor confidence. Independent review (Second Party Opinion) of ICMA Principles compliance is standard practice.",
      },
      {
        term: "그리니엄",
        termEn: "Greenium",
        definition:
          "그린본드가 동일 발행사의 일반채 대비 낮은 금리(스프레드 기준 5~20bp)로 발행되는 현상. Green Premium의 합성어로, ESG 전용 투자자들의 집중 수요가 가격 우위를 만드는 메커니즘이다. 그리니엄이 존재하면 발행사는 일반채보다 저렴하게 자금을 조달할 수 있어 ESG 채권 발행의 경제적 유인이 된다. 시장 환경과 발행사 크레딧에 따라 그리니엄이 사라지거나 역전되는 경우도 있다.",
        definitionEn:
          "The phenomenon where a green bond is priced at a lower yield than conventional bonds from the same issuer — typically 5–20bps tighter in spread. A portmanteau of 'green' and 'premium,' it arises when concentrated demand from dedicated ESG investors creates a pricing advantage. When a greenium exists, issuers can fund more cheaply than via conventional bonds — the key economic incentive for ESG issuance. Greenium can disappear or invert depending on market conditions and issuer credit.",
      },
      {
        term: "외부 검토 (SPO)",
        termEn: "Second Party Opinion",
        definition:
          "그린본드 프레임워크의 환경 목적 부합성을 독립 기관이 검토해 의견서를 발행하는 절차. Sustainalytics·ISS·V.E(Moody's ESG Solutions) 등이 대표적 제공 기관이다. SPO는 발행사의 그린워싱 리스크를 낮추고 투자자에게 신뢰성을 제공하는 역할을 한다. 법적 의무는 아니지만 ESG 투자자들이 요구하는 사실상의 표준이 되어 거의 모든 그린본드 발행에 수반된다.",
        definitionEn:
          "A review by an independent institution of a green bond framework's alignment with environmental objectives, resulting in a published opinion. Leading providers include Sustainalytics, ISS, and V.E (Moody's ESG Solutions). An SPO reduces the issuer's greenwashing risk and provides investors with credibility assurance. While not legally required, it has become a de facto standard demanded by ESG investors and accompanies virtually every green bond issuance.",
      },
    ],
    relatedSlugs: ["dcm-execution", "dcm-international-markets", "dcm-pricing", "dcm-issuers"],
    appearsIn: [],
  },

  // ── DCM Special: Rate Benchmarks ─────────────────────────────────────────
  {
    slug: "dcm-rate-benchmarks",
    title: "DCM Special — 글로벌 금리 기준선: SOFR·LIBOR·Mid-Swap·통화스왑 완전 해부",
    titleEn: "DCM Special — Global Rate Benchmarks: SOFR, LIBOR, Mid-Swap & Currency Swap",
    entryType: "article",
    category: "dcm",
    categoryLabel: "DCM",
    categoryLabelEn: "DCM",
    excerpt: "왜 USD 채권은 'T+180bp'이고 EUR 채권은 'MS+80bp'인가? LIBOR 조작 스캔들과 SOFR 전환 배경, Mid-Swap의 정체, 그리고 Cross-Currency Swap으로 엔화 0.3%가 달러 3.2%가 되는 메커니즘을 처음부터 끝까지 해부합니다.",
    excerptEn: "Why do USD bonds quote 'T+180bp' while EUR bonds quote 'MS+80bp'? The LIBOR manipulation scandal, the shift to SOFR, what Mid-Swap actually is, and how a 0.3% JPY rate becomes 3.2% USD via Cross-Currency Swap — fully dissected.",
    readingMinutes: 20,
    tags: ["SOFR", "LIBOR", "Mid-Swap", "통화스왑", "CCS", "금리기준선", "EURIBOR", "Basis Swap", "DCM"],
    tagsEn: ["SOFR", "LIBOR", "Mid-Swap", "Currency Swap", "CCS", "Rate Benchmarks", "EURIBOR", "Basis Swap", "DCM"],
    sections: [],
    keyTerms: [
      {
        term: "SOFR (담보부 일일금리)",
        termEn: "Secured Overnight Financing Rate",
        definition:
          "미국 국채 레포 거래를 기반으로 산출되는 무위험 기준금리. 2023년 USD LIBOR 폐지 이후 달러 시장의 공식 벤치마크로 자리 잡았다. 변동금리 채권·대출·이자율 스왑의 기준점으로 널리 사용되며, LIBOR와 달리 실제 거래 데이터에 기반해 조작이 어렵다. 다만 순수 익일물(overnight) 금리이므로, 기간물 금리(Term SOFR)는 파생상품 시장에서 별도로 산출된다.",
        definitionEn:
          "A risk-free benchmark rate derived from U.S. Treasury repo transactions. Since the USD LIBOR cessation in 2023, SOFR has become the official dollar market benchmark. Widely used as the reference for floating rate bonds, loans, and interest rate swaps, it is harder to manipulate than LIBOR because it is based on actual transaction data. As a pure overnight rate, Term SOFR (for longer tenors) is separately derived from derivatives markets.",
      },
      {
        term: "LIBOR 전환",
        termEn: "LIBOR Transition",
        definition:
          "2023년 6월 USD LIBOR가 공식 폐지되고 SOFR 등 무위험 기준금리(RFR)로 대체된 역사적 변화. 수십 년간 글로벌 금융 계약의 기준이었던 LIBOR는 2012년 조작 스캔들 이후 신뢰를 잃고 단계적으로 퇴출됐다. 전환 과정에서 수백조 달러 규모의 금융 계약이 새 기준금리로 전환되어야 했으며, 이는 금융 역사상 가장 복잡한 인프라 전환 중 하나였다. 한국 채권 시장도 SOFR 연동 FRN 발행이 빠르게 증가했다.",
        definitionEn:
          "The historic 2023 shift away from USD LIBOR to risk-free rates (RFRs) like SOFR. LIBOR had been the global financial contract benchmark for decades, but lost credibility after the 2012 manipulation scandal and was phased out. The transition required converting hundreds of trillions of dollars in financial contracts to new reference rates — one of the most complex infrastructure overhauls in financial history. Korean bond markets also saw rapid growth in SOFR-linked FRN issuance.",
      },
      {
        term: "수익률 곡선",
        termEn: "Yield Curve",
        definition:
          "동일 발행자의 만기별 채권 금리를 연결한 선. 정상적으로는 우상향(장기 > 단기)하지만, 역전(단기 > 장기) 시 경기 침체의 선행 지표로 해석된다. 채권 가격 결정의 기본 좌표계이며, 모든 스프레드 계산의 기준이 된다. 중앙은행의 통화 정책 의도와 시장의 미래 금리 기대가 응축된 금융 시장 전체의 나침반이기도 하다.",
        definitionEn:
          "A line connecting the yields of bonds from the same issuer across different maturities. Normally upward-sloping (long-term yields > short-term yields), an inversion (short > long) is interpreted as a leading indicator of recession. It is the fundamental coordinate system for bond pricing and the reference for all spread calculations. The yield curve is also the compass of the entire financial market — compressing the central bank's policy intent and market expectations about future rates.",
      },
      {
        term: "기간 프리미엄",
        termEn: "Term Premium",
        definition:
          "투자자가 장기 채권 보유에 따른 불확실성·유동성 위험에 대해 요구하는 추가 수익률. '장기 금리 = 기대 단기금리 평균 + 기간 프리미엄'으로 분해된다. Fed의 QE(양적완화)는 대규모 장기 국채 매입을 통해 기간 프리미엄을 인위적으로 압축하는 수단이었다. 기간 프리미엄이 상승하면 같은 기대 단기금리 수준에서도 장기 금리가 높아져 채권 가격이 하락한다.",
        definitionEn:
          "The extra yield investors demand to compensate for the uncertainty and liquidity risk of holding long-duration bonds. Decomposed as: 'long-term yield = expected average short-term rate + term premium.' The Fed's QE (quantitative easing) artificially compressed the term premium by buying large quantities of long-dated Treasuries. When the term premium rises, long-term rates increase even if short-rate expectations are unchanged — driving bond prices lower.",
      },
      {
        term: "금리 보간",
        termEn: "Rate Interpolation",
        definition:
          "두 만기 사이의 금리를 수학적으로 추정하는 방법. 예를 들어 5년물과 10년물 금리를 알면 7년물 금리를 선형 또는 스플라인 보간으로 계산할 수 있다. 채권 가격 결정, 헤지 비율 산출, OIS 스왑 커브 구축에 활용된다. 정확한 금리 보간은 DCM 가격 결정의 정밀도를 높이며, 특히 유동성이 낮은 만기 구간의 채권을 발행할 때 중요하다.",
        definitionEn:
          "A mathematical method for estimating the yield at a maturity point that falls between two observable data points. For example, knowing 5-year and 10-year yields allows estimation of the 7-year yield through linear or spline interpolation. Used in bond pricing, hedge ratio calculation, and OIS swap curve construction. Accurate interpolation improves DCM pricing precision, especially when issuing bonds in less liquid maturity segments.",
      },
    ],
    relatedSlugs: ["dcm-pricing", "dcm-international-markets", "dcm-deal-process", "spread-basis", "oas"],
    appearsIn: [],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // LBO 101 시리즈
  // ────────────────────────────────────────────────────────────────────────────
  {
    slug: "lbo-overview",
    title: "LBO의 본질 — 레버리지로 기업을 사는 수학",
    titleEn: "What Is LBO? — The Math of Buying Companies with Leverage",
    entryType: "article",
    category: "lbo",
    categoryLabel: "LBO",
    categoryLabelEn: "LBO",
    excerpt:
      "레버리지드 바이아웃(LBO)은 빌려서 사고, 가치를 만들고, 팔아라 — 세 단어로 요약된다. 인수 대금의 60–70%를 차입금으로 충당하고 그 빚을 기업의 현금흐름으로 갚는 구조가 어떻게 자기자본 수익률을 증폭시키는지, 7가지 LBO 타겟 기준, GP/LP 경제학과 Carry Waterfall, Blackstone/Hilton·TXU 케이스스터디까지 — PE 바이아웃의 본질을 처음부터 끝까지 해부한다.",
    excerptEn:
      "LBO in three words: borrow, build, sell. How funding 60–70% of an acquisition with debt — and repaying it from the company's own cash flows — amplifies equity returns. Seven LBO target criteria, GP/LP economics and carry waterfall, Blackstone/Hilton and TXU case studies — the full anatomy of a PE buyout from first principles.",
    readingMinutes: 15,
    tags: ["LBO", "레버리지드바이아웃", "PE 바이아웃", "사모펀드", "GP LP", "Carried Interest", "Carry Waterfall", "IRR MOIC", "Blackstone Hilton", "TXU", "레버리지 수익률"],
    tagsEn: ["LBO", "Leveraged Buyout", "PE Buyout", "Private Equity", "GP LP", "Carried Interest", "Carry Waterfall", "IRR MOIC", "Blackstone Hilton", "TXU Energy Future", "Leverage Returns"],
    sections: [],
    keyTerms: [
      {
        term: "LBO (레버리지드 바이아웃)",
        termEn: "LBO — Leveraged Buyout",
        definition: "인수 대금의 60~70%를 차입금으로 충당하고 피인수 기업의 현금흐름으로 빚을 갚는 PE 인수 방식이다. 적은 자기자본으로 큰 기업을 사면서 레버리지가 수익률을 증폭시키는 원리로, 집을 살 때 20%만 내고 80%는 모기지로 조달하는 것과 유사하다. 집값이 10% 오르면 실제 자기자본 수익률은 50%가 된다. LBO의 성패는 기업의 안정적 현금흐름, 낮은 Capex 요구, 그리고 부채 상환 후 남는 에쿼티 가치 증가에 달려 있다.",
        definitionEn: "An LBO funds 60–70% of an acquisition with debt, repaying it from the target company's own cash flows. Just as buying a house with 20% down and 80% mortgage amplifies your return when the price rises 10% into a 50% equity gain, leverage magnifies PE returns. The strategy succeeds when the target generates stable free cash flow, requires low capex, and builds equity value as debt is retired. It's the defining transaction type of private equity.",
      },
      {
        term: "GP / LP",
        termEn: "General Partner / Limited Partner",
        definition: "GP(제너럴 파트너)는 KKR·Blackstone 같은 PE 운용사로, 펀드 투자 결정권을 가지며 성과 보수(Carry)만 받는다. LP(리미티드 파트너)는 연기금·보험사·국부펀드 등 실제 자금을 제공하는 투자자로, 의사결정에는 참여하지 않는다. GP는 운동장 설계자이고 LP는 돈을 넣은 선수들이라 할 수 있다. LP는 통상 원금의 1.5~2%를 관리수수료로, 나머지 수익의 80%를 배당으로 받는다.",
        definitionEn: "The GP (General Partner) — firms like KKR or Blackstone — manages the fund, makes all investment decisions, and earns carried interest as compensation. The LP (Limited Partner) — pension funds, insurers, sovereign wealth funds — provides the capital but has no say in investment decisions. Think of the GP as the architect who designs the game and the LPs as investors who put in the money. LPs typically receive 80% of profits after a preferred return, paying the GP a 2% annual management fee.",
      },
      {
        term: "Carry (캐리드 인터레스트)",
        termEn: "Carried Interest",
        definition: "GP가 펀드 수익의 20%를 성과 보수로 받는 제도다. LP에게 먼저 Hurdle Rate(통상 8%)를 돌려준 뒤 초과 수익의 20%를 GP가 가져간다. 식당을 공동 운영할 때 손님 없는 날 직원(GP)은 최저 임금(관리 수수료)만 받지만 대박 나면 이익의 20%를 챙기는 구조와 비슷하다. Carry 때문에 GP는 단순히 '크게' 투자하기보다 '잘' 투자하는 동기를 갖게 된다.",
        definitionEn: "Carried interest is the GP's performance fee — typically 20% of fund profits after LPs receive their preferred return. The GP first returns the Hurdle Rate (commonly 8%) to LPs, then keeps 20% of all excess gains. Like a restaurant manager who earns only a base salary on slow days but takes 20% of profits when the place is packed, carry aligns the GP's interest with strong investment performance rather than mere asset gathering.",
      },
      {
        term: "MOIC",
        termEn: "Money-on-Invested-Capital",
        definition: "투자 원금 대비 최종 회수 금액의 배수다. MOIC 3.0×이면 $1 투자가 $3으로 돌아온 것을 의미한다. IRR과 달리 기간을 반영하지 않기 때문에 빠른 Exit가 느린 Exit보다 IRR 측면에서 훨씬 유리해 보이지만 MOIC는 동일하게 표시된다. PE 펀드는 통상 5년 보유 기준 MOIC 2~3×, IRR 20%+를 목표로 한다.",
        definitionEn: "MOIC measures the total return on invested capital as a simple multiple: a 3.0× MOIC means $1 invested returned $3. Unlike IRR, it ignores the time dimension — a 3× in 3 years and a 3× in 7 years look identical on MOIC. PE funds typically target 2–3× MOIC and 20%+ IRR over a 5-year hold. When evaluating a deal, both metrics are reported together because each captures a different aspect of returns.",
      },
      {
        term: "Hurdle Rate (허들레이트)",
        termEn: "Hurdle Rate / Preferred Return",
        definition: "LP가 Carry 배분 전에 먼저 돌려받아야 하는 최소 수익률로, 통상 8%다. 펀드 전체 IRR이 8%를 넘어야 GP가 Carry를 받기 시작한다. 장애물 경주에서 GP가 LP 앞을 먼저 뛰어야 하는 허들과 같다. 8% 이하 구간의 수익은 100% LP 몫이고, 초과분에서 80:20으로 배분된다.",
        definitionEn: "The Hurdle Rate is the minimum return LPs must receive before the GP earns any carried interest — typically 8% annually. Think of it as a hurdle in a race: the GP can only start collecting carry once they've cleared the bar for their LPs. Returns below 8% flow 100% to LPs; only the excess above the hurdle is split 80/20 between LPs and the GP.",
      },
    ],
    relatedSlugs: ["lbo-capital-structure", "lbo-returns", "lbo-deal-process"],
    appearsIn: [],
  },
  {
    slug: "lbo-capital-structure",
    title: "LBO Ch.1 — 자본구조 완전 해부: 부채 스택과 채권자 위계",
    titleEn: "LBO Ch.1 — Capital Stack Deep Dive: Debt Tranches & Creditor Hierarchy",
    entryType: "article",
    category: "lbo",
    categoryLabel: "LBO",
    categoryLabelEn: "LBO",
    excerpt:
      "LBO 부채 피라미드 완전 분해: Term Loan A·B, Senior Secured·Unsecured, Mezz, PIK Toggle Note, Equity — 각 트랜치의 금리·담보·코버넌트·회수율. Covenant-Lite의 부상, DSCR 계산법, Hilton 2007 실제 자본구조를 해부한다.",
    excerptEn:
      "Full decomposition of the LBO debt pyramid: Term Loan A/B, Senior Secured/Unsecured, Mezz, PIK Toggle Notes, Equity — rate, collateral, covenants, and recovery for each tranche. The rise of covenant-lite, DSCR calculation, and the actual Hilton 2007 capital structure dissected.",
    readingMinutes: 12,
    tags: ["LBO", "Term Loan B", "TLB", "HY채권", "PIK Toggle", "Covenant-Lite", "DSCR", "자본구조", "채권자 위계", "Hilton"],
    tagsEn: ["LBO", "Term Loan B", "TLB", "HY Bond", "PIK Toggle", "Covenant-Lite", "DSCR", "Capital Stack", "Creditor Hierarchy", "Hilton"],
    sections: [],
    keyTerms: [
      {
        term: "Term Loan A / B (TLA·TLB)",
        termEn: "Term Loan A / B",
        definition: "TLA는 원금 분할상환 방식으로 주로 관계 은행이 보유하고, TLB는 만기에 원금을 일시상환(Bullet Maturity)하는 방식으로 기관투자자·CLO가 선호한다. LBO에서는 TLB가 대다수를 차지하며 Cov-Lite 구조가 일반적이다. 아파트 대출에 비유하면 TLA는 매달 원금을 조금씩 갚는 분할상환 방식이고, TLB는 만기에 한꺼번에 원금을 갚는 풍선 대출이다. TLB의 Bullet 구조 덕분에 차입자는 영업 초기 현금 유출을 최소화할 수 있다.",
        definitionEn: "TLA amortizes principal over the loan's life and is typically held by relationship banks; TLB has a bullet maturity and is preferred by institutional investors and CLOs. In LBOs, TLB dominates and is usually structured as covenant-lite. Think of TLA as a standard mortgage where you pay down principal each month, and TLB as a balloon loan where the full principal is due at maturity. The bullet structure preserves cash flow during the early hold period when value creation is underway.",
      },
      {
        term: "DSCR (부채상환능력비율)",
        termEn: "Debt Service Coverage Ratio",
        definition: "(EBITDA - Capex)를 총부채상환액(이자 + 원금)으로 나눈 비율이다. 1.0× 미만이면 현금흐름만으로 부채를 갚지 못함을 의미한다. 월급쟁이가 월 소득으로 대출 원리금을 감당할 수 있는지 따지는 DSR(총부채상환비율)과 같은 개념이다. LBO 부채 구조 설계 시 은행 대출약정의 핵심 검증 지표로 활용된다.",
        definitionEn: "DSCR divides (EBITDA minus Capex) by total debt service (interest plus principal). A ratio below 1.0× means the company cannot cover its obligations from operating cash flow alone. It's the corporate equivalent of a personal debt-to-income check used in mortgage underwriting. When structuring an LBO's debt stack, lenders stress-test DSCR under multiple downside scenarios to ensure coverage even in adverse conditions.",
      },
      {
        term: "메자닌 (Mezzanine)",
        termEn: "Mezzanine Debt",
        definition: "선순위 채권(TLB·HY)과 에쿼티 사이의 중간 단계 부채다. 금리는 일반 HY보다 높고(12~18%), 워런트·PIK 등 에쿼티 업사이드 조건이 붙기도 한다. 빌딩 1층(선순위 채권)과 옥상(에쿼티) 사이에 있는 중간 층(메자닌)이라는 이름 그대로다. 은행보다 유연한 헤지펀드·메자닌 펀드가 주요 공급자로, 리스크와 리턴이 중간 수준이다.",
        definitionEn: "Mezzanine sits between senior secured debt (TLB/HY) and equity in the capital stack. It carries higher coupons than standard HY (12–18%) and often includes equity kickers such as warrants or PIK options. The name literally means the middle floor between ground level (senior debt) and the roof (equity). Hedge funds and dedicated mezzanine funds are the primary providers, offering flexibility that banks cannot match in exchange for higher returns.",
      },
      {
        term: "PIK Toggle Note",
        termEn: "PIK Toggle Note",
        definition: "발행사가 매 분기 현금 이자(Cash Pay)와 PIK(원금에 이자 추가) 중 선택할 수 있는 구조다. 현금 부담을 줄이는 장점이 있지만, PIK 선택 시 부채가 복리로 증가한다. 신용카드 최소결제 옵션과 비슷하게, 당장은 편하지만 쌓이는 잔액이 나중에 큰 부담이 된다. 주로 LBO의 Junior 트랜치나 메자닌에서 활용되며, 현금흐름이 불확실한 성장 기업에서 선호된다.",
        definitionEn: "A PIK Toggle lets the issuer choose each quarter between paying cash interest and adding the interest to the principal balance (Payment-in-Kind). Like paying only the minimum on a credit card, it relieves near-term cash pressure but compounds the outstanding balance. When the PIK option is elected repeatedly, the debt snowballs and refinancing risk rises sharply at maturity. It's most common in junior tranches and mezzanine financing for LBOs with uncertain near-term cash flows.",
      },
      {
        term: "채권자 위계 (Creditor Hierarchy)",
        termEn: "Creditor Hierarchy",
        definition: "파산·청산 시 변제 순서를 정한 법적 위계다. RCF·TLA·TLB(최우선 담보 채권) → 선순위 무담보 채권자 → 후순위 채권자 → 에쿼티 순으로 변제된다. 아래로 갈수록 회수율이 낮고 기대 수익(쿠폰)은 높다. 건물 화재 시 보험금을 1순위 담보권자가 먼저 받고 남은 돈을 순서대로 나눠 갖는 것과 같다.",
        definitionEn: "The creditor hierarchy is the legally mandated repayment order in bankruptcy or liquidation: RCF / TLA / TLB (first-lien secured) → senior unsecured creditors → subordinated creditors → equity holders. Lower in the stack means lower recovery rates but higher expected coupons to compensate. Think of it like a building fire insurance payout: the first-lien mortgage holder is made whole first, and whatever remains is distributed down the chain.",
      },
    ],
    relatedSlugs: ["lbo-overview", "lbo-returns", "lbo-deal-process"],
    appearsIn: [],
  },
  {
    slug: "lbo-returns",
    title: "LBO Ch.2 — 리턴 분석: MOIC·IRR·가치창출의 수학",
    titleEn: "LBO Ch.2 — Return Analysis: MOIC, IRR & the Math of Value Creation",
    entryType: "article",
    category: "lbo",
    categoryLabel: "LBO",
    categoryLabelEn: "LBO",
    excerpt:
      "MOIC와 IRR이 왜 다른 결론을 내리는지, J-커브 효과, 가치창출 3대 드라이버(EBITDA 성장·Multiple Expansion·Deleveraging), Exit Multiple이 수익의 50–60%를 결정하는 이유, Vintage Year 효과, Carry Waterfall 계산 — PE 리턴 분석의 핵심 수학.",
    excerptEn:
      "Why MOIC and IRR give different conclusions, the J-curve, three value creation drivers (EBITDA growth, Multiple Expansion, Deleveraging), why exit multiple determines 50–60% of returns, vintage year effects, and carry waterfall math — the core return analytics of private equity.",
    readingMinutes: 13,
    tags: ["MOIC", "IRR", "J-커브", "Multiple Expansion", "Deleveraging", "Value Creation", "Vintage Year", "LBO 리턴", "Exit Multiple"],
    tagsEn: ["MOIC", "IRR", "J-curve", "Multiple Expansion", "Deleveraging", "Value Creation", "Vintage Year", "LBO Returns", "Exit Multiple"],
    sections: [],
    keyTerms: [
      {
        term: "IRR (내부수익률)",
        termEn: "Internal Rate of Return",
        definition: "현금 유출입의 순현재가치(NPV)를 0으로 만드는 할인율이다. 기간을 반영해 빠른 Exit·중간 배당을 유리하게 평가하기 때문에, MOIC가 동일해도 Exit 시점에 따라 IRR은 크게 달라진다. 3년에 3×를 달성한 투자의 IRR은 약 44%인 반면, 7년에 3×면 IRR은 약 17%로 급락한다. PE 업계에서 IRR 20%+를 마법의 기준선으로 여기는 이유가 여기에 있다.",
        definitionEn: "IRR is the discount rate that makes the net present value of all cash inflows and outflows equal to zero. Because it weights timing, early exits and interim dividends look more attractive under IRR than MOIC. A 3× return in 3 years implies ~44% IRR; the same 3× stretched to 7 years falls to ~17% IRR. The PE industry's informal 20%+ IRR target reflects this time-sensitivity and the opportunity cost of capital.",
      },
      {
        term: "J-커브 효과",
        termEn: "J-Curve Effect",
        definition: "PE 펀드 초기에는 관리수수료와 미실현 손실로 IRR이 음수였다가, 투자 포트폴리오가 성숙하고 Exit가 시작되면서 양수로 반등하는 전형적인 패턴이다. 차트가 J자 형태를 그린다. LP 입장에서는 초반 음수 IRR에 당황하지 말아야 하며, 10년 펀드 기준 첫 3~4년은 J-커브 구간으로 간주된다. 빈티지 연도가 같은 펀드들을 비교할 때 J-커브 단계를 감안해야 한다.",
        definitionEn: "In the early years of a PE fund, management fees and unrealized write-downs push IRR into negative territory; as the portfolio matures and exits begin, returns recover and exceed initial investment, tracing a J-shaped curve on a chart. LPs should expect and tolerate negative IRR in the first three to four years of a 10-year fund. Cross-fund comparisons must account for where each fund sits on its J-curve before drawing performance conclusions.",
      },
      {
        term: "Multiple Expansion (멀티플 확장)",
        termEn: "Multiple Expansion",
        definition: "인수 시 6× EV/EBITDA로 샀다가 Exit 시 8×에 팔면 EBITDA 성장 없이도 배수 확대가 발생하는 것을 말한다. 시장 전반의 리레이팅이나 섹터 인기 상승, 구조 개선으로 인한 '프리미엄 기업화'가 주요 원인이다. 역사적으로 PE 리턴의 30~40%가 Multiple Expansion에서 창출되지만, 고금리 환경에서는 이 레버가 약해진다. EBITDA를 키우지 않고도 Exit 배수만 올라도 수익이 증폭되는 PE의 중요한 알파 원천이다.",
        definitionEn: "Multiple expansion occurs when a company is sold at a higher EV/EBITDA multiple than it was acquired at — generating returns even without EBITDA growth. For example, buying at 6× and selling at 8× on the same EBITDA doubles the gain from operations alone. Historically, 30–40% of PE returns come from multiple expansion. In high-interest-rate environments, this lever weakens as discount rates rise and public market multiples compress.",
      },
      {
        term: "Deleveraging (부채 축소)",
        termEn: "Deleveraging",
        definition: "보유 기간 동안 FCF(잉여현금흐름)로 부채를 상환해 에쿼티 가치를 높이는 과정이다. $4억 에쿼티로 $10억 딜을 했을 때, 부채 $6억이 $4억으로 줄면 같은 EV 기준 에쿼티가 $6억으로 늘어 MoM 1.5×가 된다. 부채 상환이 에쿼티 가치를 기계적으로 증가시키기 때문에 안정적 FCF 창출 기업이 LBO 타겟으로 선호된다. LBO 가치창출 3대 드라이버(EBITDA 성장·Multiple Expansion·Deleveraging) 중 가장 확실하고 예측 가능한 요소다.",
        definitionEn: "Deleveraging is the process of using the target's free cash flow to pay down acquisition debt, mechanically increasing equity value over the hold period. If a $1B deal was financed with $600M of debt and $400M of equity, paying debt down to $400M while EV stays flat grows equity to $600M — a 1.5× gain from deleveraging alone. Because this driver is the most predictable of the three value-creation levers, PE sponsors prize targets with durable, high-conversion free cash flows.",
      },
      {
        term: "Vintage Year (빈티지 연도)",
        termEn: "Vintage Year",
        definition: "펀드가 투자를 본격적으로 시작한 연도다. 2005~2007 빈티지는 금융위기 직전 고가 인수로 수익률이 저조했고, 2009~2010 빈티지는 위기 직후 저가 매수로 초과수익을 올렸다. 와인의 빈티지처럼 어느 해에 투자를 시작했느냐가 최종 리턴에 결정적 영향을 미친다. LP가 복수 펀드에 분산 투자하는 이유도 특정 빈티지 리스크를 희석하기 위해서다.",
        definitionEn: "Vintage year refers to the year a fund deployed its first capital. Like a wine vintage, the macro and market conditions at entry fundamentally shape long-term returns. The 2005–2007 vintage suffered from pre-crisis peak valuations, while the 2009–2010 vintage benefited from post-crisis distressed pricing. LPs diversify across vintage years precisely to avoid concentrating in a single economic cycle, since entry timing drives 30–50% of ultimate fund performance.",
      },
    ],
    relatedSlugs: ["lbo-overview", "lbo-capital-structure", "lbo-deal-process"],
    appearsIn: [],
  },
  {
    slug: "lbo-deal-process",
    title: "LBO Ch.3 — 딜 프로세스 & 리스크: Origination부터 Exit까지",
    titleEn: "LBO Ch.3 — Deal Process & Risk: From Origination to Exit",
    entryType: "article",
    category: "lbo",
    categoryLabel: "LBO",
    categoryLabelEn: "LBO",
    excerpt:
      "LBO 딜 타임라인 전체(3–6개월): Sources & Uses 테이블, 만기장벽(Maturity Wall), 금리 인상기 SOFR 폭등 리스크, TXU($45B)·Toys\"R\"Us($6.6B)·iHeartMedia($24B) 실패 케이스 심층 해부 — LBO 리스크 관리의 실전 프레임워크.",
    excerptEn:
      "Full LBO deal timeline (3–6 months): sources & uses table, maturity wall mechanics, SOFR spike risk in rising rate environments, deep dives into TXU ($45B), Toys\"R\"Us ($6.6B), and iHeartMedia ($24B) failures — a practitioner's risk management framework for LBOs.",
    readingMinutes: 14,
    tags: ["LBO 프로세스", "Sources and Uses", "Maturity Wall", "TXU", "Toys R Us", "iHeartMedia", "레버리지 리스크", "SOFR", "Cov-Lite", "딜 타임라인"],
    tagsEn: ["LBO Process", "Sources and Uses", "Maturity Wall", "TXU", "Toys R Us", "iHeartMedia", "Leverage Risk", "SOFR", "Cov-Lite", "Deal Timeline"],
    sections: [],
    keyTerms: [
      {
        term: "Sources & Uses",
        termEn: "Sources & Uses Table",
        definition: "딜 자금의 출처(Sources: 부채·에쿼티·롤오버 등)와 용도(Uses: 인수 대금·수수료·기존 부채 상환 등)를 대조한 표다. Sources 합계와 Uses 합계는 항상 일치해야 하며, 딜 경제성 검증의 출발점이다. 가계부에서 수입 합계와 지출 합계가 맞아야 하는 것처럼, Sources ≠ Uses이면 딜 자체가 불가능하다. IB Analyst가 LBO 모델의 첫 번째 탭으로 반드시 작성하는 기초 자료다.",
        definitionEn: "The Sources & Uses table maps where the deal money comes from (debt tranches, equity, rollover equity, etc.) against where it goes (purchase price, transaction fees, debt repayment, etc.). Sources must equal Uses — a mismatch means the deal cannot close. It's the corporate finance equivalent of balancing a household budget before any purchase. Every LBO model starts with this table on Tab 1; it sets the entire capital structure and equity check.",
      },
      {
        term: "만기장벽 (Maturity Wall)",
        termEn: "Maturity Wall",
        definition: "여러 부채의 만기가 특정 연도에 집중되는 현상이다. 2025~2026년 대규모 Maturity Wall이 형성되어 LBO 기업들이 동시에 리파이낸싱 압박을 받고 있다. 고금리 환경에서는 리파이낸싱 비용이 급증해 이자 커버리지가 악화된다. 고속도로 여러 출구가 동시에 막히면 교통 체증이 폭발하듯, Maturity Wall이 쌓인 시기에는 신용 시장 전반이 경색될 수 있다.",
        definitionEn: "A Maturity Wall occurs when large volumes of debt mature in the same year, forcing issuers to refinance simultaneously. The 2025–2026 window has a historically large Maturity Wall from the 2020–2021 LBO boom. In a high-rate environment, refinancing costs spike and interest coverage deteriorates across the board. Like multiple highway exits closing at once, a concentrated Maturity Wall creates systemic stress in credit markets, raising default risk even for otherwise healthy borrowers.",
      },
      {
        term: "Sponsor (재무적 스폰서)",
        termEn: "Financial Sponsor / PE Firm",
        definition: "LBO를 주도하는 사모펀드를 말한다. Blackstone·KKR·Apollo·Carlyle 등이 대표적이다. 스폰서는 IB에게 딜 파이낸싱을 발주하고 수수료를 지불하는 주요 고객으로, IB와 스폰서 간 관계 관리가 딜 플로우를 좌우한다. 스폰서는 에쿼티 체크를 제공하고 경영 전략을 주도하며, 통상 3~7년 후 IPO·M&A·리캡(Recapitalization) 방식으로 Exit한다.",
        definitionEn: "A financial sponsor is the private equity firm orchestrating an LBO — Blackstone, KKR, Apollo, Carlyle and their peers. Sponsors are the primary clients of leveraged finance desks, commissioning deal financing and paying substantial fees to banks they work with repeatedly. The sponsor provides the equity check, drives operational strategy, and typically exits via IPO, M&A, or dividend recapitalization three to seven years post-acquisition.",
      },
      {
        term: "리파이낸싱 리스크",
        termEn: "Refinancing Risk",
        definition: "만기 도래 부채를 새 부채로 교체할 때 금리 상승·신용등급 하락·시장 혼란 등으로 조달 비용이 크게 오를 위험이다. TXU는 2008년 금융위기와 천연가스 가격 급락이 겹쳐 리파이낸싱이 막혔고 결국 파산했다. 빚을 갚기 위해 또 빚을 빌려야 하는 구조에서 시장이 닫히면 치명적이다. 고레버리지 기업일수록 리파이낸싱 리스크를 주기적으로 점검하고 만기를 분산시켜야 한다.",
        definitionEn: "Refinancing risk is the danger that maturing debt cannot be replaced on acceptable terms due to rising rates, credit deterioration, or market disruption. TXU — the largest LBO of its era at $45B — collapsed when the 2008 crisis and plunging natural gas prices made refinancing impossible. The lesson: when a highly leveraged company relies on rolling debt to survive and the market closes, bankruptcy follows swiftly. Spreading maturities and monitoring credit metrics continuously are the primary defenses.",
      },
      {
        term: "전략적 리스크 (Operational Risk in LBO)",
        termEn: "Operational / Business Risk in LBO",
        definition: "부채 레버리지가 높은 LBO에서 실적 악화는 즉각적인 디폴트로 이어진다. Toys R Us는 Amazon 부상과 e-commerce 대응 실패로 영업이익이 급감해 $5.2B 부채를 감당하지 못하고 파산했다. 줄타기 곡예사가 높은 곳에 있을수록 작은 흔들림도 치명적이듯, 레버리지가 높을수록 사업 리스크 허용 폭이 좁아진다. LBO 타겟 선정 시 경쟁 구조·기술 변화·고객 집중도 등 전략적 리스크를 필수로 검토해야 한다.",
        definitionEn: "In a high-leverage LBO, operating underperformance translates directly into default risk with no buffer. Toys R Us entered its LBO with $5.2B in debt and no capacity to invest in e-commerce; when Amazon systematically eroded its market position, EBITDA collapsed and the debt became unpayable. Like a tightrope walker — the higher you go, the less a misstep is survivable. LBO due diligence must stress-test competitive moats, technology disruption, and customer concentration to ensure the business can service its debt through a full cycle.",
      },
    ],
    relatedSlugs: ["lbo-overview", "lbo-capital-structure", "lbo-returns"],
    appearsIn: [],
  },

  // ── LevFin ──────────────────────────────────────────────────────────────
  {
    slug: "levfin-ecosystem",
    title: "LevFin Ch.0 — 레버리지드 파이낸스 전체 지도: HY채권·레버리지드 론·LBO 생태계",
    titleEn: "LevFin Ch.0 — Leveraged Finance Ecosystem: HY Bonds, Leveraged Loans & LBO Map",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "레버리지드 파이낸스 생태계 완전 해설: HY채권($1.4T)·레버리지드 론($1.5T)·CLO($1.1T) 시장 규모, 자본구조 워터폴(회수율 RCF~TLB 60-80%, HY 30-50%), 힐튼 LBO(2007 $26.9bn 인수 → 2018 MoM 2.6×·IRR 21% 성공) vs Toys R Us 실패 비교, 한국 PE 딜(MBK·KKR·칼라일) 심층 분석.",
    excerptEn:
      "Complete LevFin ecosystem guide: HY bonds ($1.4T), leveraged loans ($1.5T), CLO ($1.1T) market sizes; capital structure waterfall (recovery rates RCF–TLB 60–80%, HY 30–50%); Hilton LBO (2007 $26.9bn acquisition → 2018 MoM 2.6×, IRR 21%) vs Toys R Us failure comparison; Korean PE deals (MBK, KKR, Carlyle) deep dive.",
    readingMinutes: 22,
    tags: [
      "레버리지드 파이낸스", "하이일드 채권", "레버리지드 론", "LBO",
      "CLO", "자본구조 워터폴", "힐튼 LBO", "디폴트율", "크레딧 사이클",
      "메자닌", "TLB", "코버넌트", "MBK", "KKR", "칼라일",
    ],
    tagsEn: [
      "Leveraged Finance", "High Yield Bond", "Leveraged Loan", "LBO",
      "CLO", "Capital Structure Waterfall", "Hilton LBO", "Default Rate", "Credit Cycle",
      "Mezzanine", "TLB", "Covenant", "MBK Partners", "KKR", "Carlyle",
    ],
    sections: [],
    keyTerms: [
      {
        term: "레버리지드 파이낸스 (Leveraged Finance)",
        termEn: "Leveraged Finance",
        definition: "신용등급 BB+/Ba1 이하의 발행사가 조달하는 고수익·고위험 부채 금융의 총칭이다. 하이일드(HY) 채권, 레버리지드론(TLB), 2차시장 부실채권 등 다양한 형태를 포함한다. 은행 일반 대출과 달리 높은 레버리지와 높은 금리를 감수하며, PE 스폰서의 LBO 파이낸싱에 핵심적으로 활용된다. 투자등급(IG) 파이낸스와 구분되며, 리스크가 높은 만큼 투자자도 헤지펀드·CLO 등 위험 선호 기관이 주를 이룬다.",
        definitionEn: "Leveraged finance is the umbrella term for high-yield, high-risk debt capital raised by issuers rated BB+/Ba1 or below. It encompasses high yield bonds, leveraged loans (TLBs), and secondary market distressed debt instruments. Unlike investment-grade lending, leveraged finance accepts higher leverage ratios and higher interest rates, making it the primary financing tool for PE-sponsored LBOs. The investor base skews toward risk-tolerant institutions such as hedge funds and CLOs.",
      },
      {
        term: "CLO (담보대출채권)",
        termEn: "CLO (Collateralized Loan Obligation)",
        definition: "레버리지드론을 기초자산으로 묶어 트랑쉐별로 리패키징한 구조화 금융 상품이다. AAA부터 BB, 그리고 Equity(First Loss) 트랑쉐까지 신용도별로 나뉘며, CLO 매니저가 편입 대출 자산을 적극적으로 운용한다. 레버리지드론 시장의 약 65%를 CLO가 흡수하는 핵심 투자자이기 때문에, CLO 기술적 수요가 줄면 TLB 스프레드가 즉각 상승한다. 단순히 묶어놓는 것이 아니라 마치 건물처럼 층별로 손실을 흡수하는 구조라 할 수 있다.",
        definitionEn: "A CLO is a structured finance vehicle that pools leveraged loans as collateral and repackages them into tranches differentiated by credit quality — from AAA down to BB and an equity (first-loss) piece. A CLO manager actively manages the underlying loan portfolio within defined eligibility criteria. Because CLOs absorb roughly 65% of leveraged loan supply, any contraction in CLO formation directly widens TLB spreads. Think of it like a building where upper floors (AAA) only suffer losses after all lower floors are wiped out.",
      },
      {
        term: "자본구조 워터폴 (Capital Structure Waterfall)",
        termEn: "Capital Structure Waterfall",
        definition: "기업이 청산하거나 디폴트에 빠졌을 때 채권자별 회수 우선순위를 정해놓은 구조다. RCF(리볼빙) → TLA → TLB → HY채권 → 메자닌 → 에쿼티 순서로 선순위부터 차례로 회수한다. 폭포처럼 위에서 아래로 흐르다가 자산이 바닥나면 그 이하는 아무것도 받지 못한다. 투자자들이 동일 회사의 부채라도 트랑쉐별로 전혀 다른 수익률을 요구하는 이유가 바로 이 워터폴 구조 때문이다.",
        definitionEn: "The capital structure waterfall defines the priority of repayment among creditors in a liquidation or default scenario. Claims flow from the most senior — revolving credit facility, TLA, TLB — down through high yield bonds, mezzanine, and finally equity. Like a waterfall, when the pool of assets runs dry, everything below the waterline receives nothing. This hierarchy is precisely why investors demand very different yields on the same company's debt depending on which tranche they hold.",
      },
      {
        term: "Covenant-Lite (코브라이트)",
        termEn: "Covenant-Lite",
        definition: "재무유지약정(Financial Maintenance Covenant) 없이 부채발행제한·지불제한 같은 Incurrence-only 코버넌트만 적용되는 대출 구조다. 2010년대 이후 레버리지드론의 85% 이상이 이 방식으로 발행되며, 차입자에게는 유리하지만 은행이 재무 악화를 조기에 감지하기 어렵다는 단점이 있다. 전통적인 대출에서는 분기마다 레버리지 배수가 특정 기준을 넘으면 은행이 강제로 협상 테이블로 불러올 수 있었지만, Cov-Lite에서는 그 권한이 사라진다. PE 스폰서가 LBO 파이낸싱 협상에서 가장 먼저 요구하는 조건 중 하나다.",
        definitionEn: "Covenant-lite loans omit financial maintenance covenants — the quarterly ratio tests that traditionally give banks an early-warning trigger to renegotiate — and instead rely only on incurrence covenants that are tested only when the borrower takes a specific action such as issuing new debt or paying a dividend. Over 85% of leveraged loans issued since 2010 have been cov-lite, heavily favouring borrowers. While PE sponsors love the flexibility, lenders lose the ability to detect deterioration early and force a restructuring conversation before the situation becomes dire.",
      },
      {
        term: "PIK (현금 미지급 이자)",
        termEn: "PIK (Payment-in-Kind)",
        definition: "현금으로 이자를 지급하는 대신 원금에 이자를 더해 나중에 한꺼번에 상환하는 구조다. Payment-in-Kind의 약자로, 단기 현금 부담을 줄여주는 장점이 있지만 이자가 복리로 쌓여 원금이 눈덩이처럼 불어나는 단점이 있다. LBO 초기 현금흐름이 부족한 시기에 활용되거나, 부실 징후가 나타날 때 발행사가 선택적으로 PIK로 전환하는 PIK Toggle 구조도 존재한다. 투자자 입장에서는 현금을 지금 받지 못하는 위험을 감수하는 대가로 더 높은 표면금리를 요구한다.",
        definitionEn: "PIK interest is paid not in cash but by adding the interest amount to the outstanding principal balance, deferring the actual cash outflow until maturity. The acronym stands for Payment-in-Kind. While PIK reduces near-term cash pressure for the borrower, the compounding effect means the debt burden snowballs over time. Some instruments carry a PIK Toggle feature, allowing the issuer to switch between cash-pay and PIK at each interest period. Investors demand a higher coupon to compensate for not receiving current cash income.",
      },
    ],
    relatedSlugs: [
      "levfin-hy-vs-loans", "levfin-credit-metrics", "levfin-covenants",
      "levfin-process", "levfin-pricing", "levfin-distressed", "levfin-cases",
      "lbo-overview",
    ],
    appearsIn: [],
  },

  {
    slug: "levfin-hy-vs-loans",
    title: "LevFin Ch.1 — HY채권 vs 레버리지드 론: 구조·투자자·선택 기준 완전 해설",
    titleEn: "LevFin Ch.1 — HY Bonds vs Leveraged Loans: Structure, Investors & Issuer Choice",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "하이일드 채권 vs TLB 10가지 핵심 차이: 고정 vs 변동금리, 담보 순위, Cov-Lite 85%, Call Schedule(7NC3), OID 숨겨진 비용, CLO 65% 투자자 구조, Dollar General KKR LBO($6.9bn, IRR ~40%) 케이스스터디, 한국 LevFin 구조적 부재 원인 4가지 — 발행사가 HY와 TLB를 동시에 쓰는 이유부터 LIBOR→SOFR 전환 영향까지.",
    excerptEn:
      "10 key HY bond vs TLB differences: fixed vs floating rate, security ranking, Cov-Lite 85%, 7NC3 call schedule, OID hidden cost, CLO 65% investor structure, Dollar General KKR LBO ($6.9bn, IRR ~40%) case study, four structural reasons Korea lacks a LevFin market — from why issuers simultaneously issue HY and TLBs to the LIBOR-to-SOFR transition impact.",
    readingMinutes: 18,
    tags: [
      "하이일드 채권", "레버리지드 론", "TLB", "HY 채권", "Cov-Lite",
      "Call Schedule", "OID", "CLO", "SOFR", "MFN",
      "Equity Clawback", "CoC Put", "Dollar General", "KKR", "한국 레버리지드 파이낸스",
    ],
    tagsEn: [
      "High Yield Bond", "Leveraged Loan", "TLB", "HY Bond", "Cov-Lite",
      "Call Schedule", "OID", "CLO", "SOFR", "MFN",
      "Equity Clawback", "Change of Control Put", "Dollar General", "KKR", "Korean LevFin",
    ],
    sections: [],
    keyTerms: [
      {
        term: "OID (원가할인)",
        termEn: "OID (Original Issue Discount)",
        definition: "채권을 액면가(100)보다 낮은 가격(예: 97)에 발행해 투자자에게 추가 수익을 제공하는 구조다. 표면 금리가 같더라도 실질 수익률은 OID 때문에 더 높아진다. 1포인트(1pt) OID는 대략 14~20bp의 실질 금리 상승에 해당하며, 발행사 입장에서는 금리를 직접 올리지 않고도 투자자를 유인할 수 있는 유연한 도구다. 시장 수요가 약할 때 IB가 Market Flex 권한으로 OID를 넓혀 딜을 완성하는 경우가 많다.",
        definitionEn: "OID occurs when a bond or loan is issued below its par value — for example, at $97 instead of $100 — giving investors an additional yield pickup on top of the stated coupon. Even with the same headline rate, the effective yield is higher due to the discount. One point of OID is roughly equivalent to 14-20 basis points of additional effective spread. For issuers, OID is a flexible lever to attract investors without formally raising the coupon, and bankers routinely widen OID under market-flex provisions when bookbuild demand disappoints.",
      },
      {
        term: "Call Schedule (조기상환 스케줄)",
        termEn: "Call Schedule",
        definition: "발행사가 만기 전 채권을 조기상환할 수 있는 시기와 가격(프리미엄)을 사전에 정해둔 일정이다. 예를 들어 7NC3는 7년 만기에 3년간 콜 보호(No-Call) 기간을 두는 구조로, 투자자는 초기 3년 동안 조기상환 없이 약정된 쿠폰을 받는다. 콜 보호 기간 이후에는 액면가에 일정 프리미엄(예: +50bp)을 더한 가격으로 상환 가능하며, 해마다 프리미엄이 줄어들어 만기 직전에는 Par(100)로 콜이 가능해진다. 금리 하락 시 발행사는 리파이낸싱 기회를 활용하지만, 투자자는 재투자 위험에 노출된다.",
        definitionEn: "The call schedule specifies when and at what price an issuer may redeem bonds before maturity. A common structure is 7NC3 — a 7-year bond with a 3-year non-call period — guaranteeing investors their coupon for the first three years without reinvestment risk. After the call protection window, the issuer may redeem at a declining premium (e.g., par plus 50bps in year four, stepping down each year to par at maturity). When interest rates fall, issuers benefit by calling and refinancing at lower rates, while investors face reinvestment risk.",
      },
      {
        term: "MFN (최혜국 조항)",
        termEn: "MFN (Most Favored Nation)",
        definition: "동일 발행사가 새로운 TLB를 기존 대출보다 높은 금리로 발행할 경우, 기존 대출자도 자동으로 금리를 인상받을 수 있는 조항이다. 통상 새 대출의 스프레드가 기존 대출보다 50bp 이상 높으면 MFN 조항이 발동된다. 투자자 입장에서는 기존 포지션의 희석을 방지하는 핵심 보호 장치이며, 발행사는 MFN 조항을 피하기 위해 새 트랑쉐 구조를 정교하게 설계해야 한다. PE 스폰서가 add-on 인수를 통한 추가 파이낸싱 시 가장 먼저 검토하는 조항이다.",
        definitionEn: "The MFN clause protects existing TLB lenders by requiring that if the same borrower issues a new leveraged loan at a spread more than a defined threshold (typically 50 bps) above the existing loan, the existing loan's spread is automatically reset to match. It prevents the issuer from diluting existing holders by issuing cheaper paper in the future. For PE sponsors executing add-on acquisitions with incremental debt, navigating the MFN threshold is a key structuring consideration, as breaching it raises the cost of the entire existing debt stack.",
      },
      {
        term: "Change of Control Put (지배권 변경 풋)",
        termEn: "Change of Control Put (CoC Put)",
        definition: "발행사의 지배권이 변경될 경우(예: PE 매각, 경영권 교체) HY채권 보유자가 채권을 101% 가격에 되팔 수 있는 권리다. PE가 포트폴리오 회사를 제3자에게 매각할 때 채권 투자자가 불리한 조건의 새 오너 아래에 묶이지 않도록 보호하는 장치다. 투자자가 101에 풋을 행사하면 발행사(또는 인수자)는 전체 채권을 상환해야 하므로, 대규모 CoC Put 행사는 M&A 비용을 크게 높인다. 레버리지드론(TLB)에는 일반적으로 CoC Put이 없어 HY채권과의 핵심 구조 차이 중 하나다.",
        definitionEn: "The change of control put gives high yield bondholders the right to sell their bonds back to the issuer at 101 cents on the dollar if a defined change of control event — such as a sale of the company by its PE sponsor — occurs. It prevents investors from being locked under a new owner they did not underwrite. If a large portion of bondholders exercise the 101 put, the acquirer must effectively refinance the entire bond stack at closing, meaningfully increasing the deal's financing cost. Leveraged loans typically do not include a CoC put, which is one of the key structural differences between HY bonds and TLBs.",
      },
      {
        term: "Cov-Lite",
        termEn: "Covenant-Lite",
        definition: "재무유지약정(Maintenance Covenant) 없이 부채발행·배당지급 같은 특정 행위 시에만 테스트하는 Incurrence 코버넌트만 적용하는 대출 구조다. 2010년대 이후 레버리지드론의 85% 이상이 Cov-Lite 구조로 발행되어 시장의 표준이 됐다. 차입자 입장에서는 분기마다 재무비율을 맞춰야 하는 부담이 없어 운영 유연성이 높지만, 은행은 실적 악화를 조기에 포착해 재협상을 요구할 기회를 잃는다. Cov-Lite 확산이 2008년 이후 구조조정 협상을 더 복잡하게 만들었다는 비판이 있다.",
        definitionEn: "Covenant-lite loans contain only incurrence covenants — tested solely when the borrower takes a specific action such as issuing additional debt or making a restricted payment — and omit the traditional maintenance covenants that require the borrower to comply with financial ratios every quarter. Since 2010, over 85% of leveraged loans have been cov-lite, making it the market standard. Borrowers gain operational flexibility, but lenders lose the early-warning mechanism that would otherwise compel a restructuring dialogue before the company deteriorates severely. Critics argue cov-lite proliferation has made post-default recoveries more complicated.",
      },
    ],
    relatedSlugs: [
      "levfin-ecosystem", "levfin-credit-metrics", "levfin-covenants",
      "levfin-process", "levfin-pricing", "levfin-distressed", "lbo-overview",
    ],
    appearsIn: [],
  },

  {
    slug: "levfin-credit-metrics",
    title: "LevFin Ch.2 — 크레딧 메트릭 & 언더라이팅: EBITDA·Leverage·Coverage·FCF 심층 해부",
    titleEn: "LevFin Ch.2 — Credit Metrics & Underwriting: EBITDA Addbacks, Leverage, Coverage & FCF",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "LBO 크레딧 분석 완전 가이드: EBITDA Addback 3단계(Standard~Aggressive/Sponsor EBITDA), 레버리지 4종(Total/First Lien/Net/Senior Secured), FCCR 2.0× 인덴처 테스트, FCF 워터폴 8단계, Excess Cash Flow Sweep, S&P vs Moody's 방법론 비교, Atlas Industrial Corp($840mn EBITDA/$5.2bn 부채) 실전 크레딧 위원회 워크드 예제.",
    excerptEn:
      "Complete LBO credit analysis: EBITDA addback tiers (standard to aggressive/sponsor EBITDA), four leverage metrics (total/first lien/net/senior secured), FCCR 2.0× indenture test, 8-step FCF waterfall, excess cash flow sweep mechanics, S&P vs Moody's methodology comparison, Atlas Industrial Corp ($840mn EBITDA/$5.2bn debt) credit committee worked example.",
    readingMinutes: 20,
    tags: ["EBITDA Addback", "레버리지 메트릭", "FCCR", "FCF 워터폴", "S&P", "무디스", "크레딧 분석", "언더라이팅", "ECF Sweep", "레이팅 방법론", "Atlas Industrial", "크레딧 위원회", "한국 크레딧"],
    tagsEn: ["EBITDA Addback", "Leverage Metrics", "FCCR", "FCF Waterfall", "S&P", "Moody's", "Credit Analysis", "Underwriting", "ECF Sweep", "Rating Methodology", "Credit Committee", "Korean Credit"],
    sections: [],
    keyTerms: [
      {
        term: "EBITDA Addback (EBITDA 조정)",
        termEn: "EBITDA Addback",
        definition: "LBO 분석에서 비반복적·비현금성 비용을 EBITDA에 더해 조정 EBITDA(Adjusted EBITDA)를 산출하는 과정이다. 구조조정 비용, 주식보상비, 일회성 법무비용 등을 더하는 것은 비교적 표준적이지만, PE 스폰서가 시너지 효과나 미래 비용절감 항목까지 더하는 경우 주관성이 지나치게 높아진다. 실제로 Sponsor EBITDA는 실제 수치보다 30~50%까지 부풀려지는 사례도 있어, 크레딧 애널리스트는 Addback 내역을 반드시 개별 검증해야 한다. 마치 집값을 산정할 때 리모델링 비용을 자산 가치에 포함시키는 것처럼, 무엇을 더하느냐에 따라 레버리지 배수가 전혀 달라진다.",
        definitionEn: "EBITDA addbacks are adjustments that add back non-recurring and non-cash expenses to reported EBITDA to derive an Adjusted EBITDA used in LBO credit analysis. Standard addbacks include restructuring charges, stock-based compensation, and one-time legal fees. However, PE sponsors often push the envelope by including projected synergies and forward-looking cost savings, which can inflate Sponsor EBITDA by 30-50% versus the as-reported figure. Credit analysts must scrutinize each addback line individually — just as a home appraiser must verify which renovations actually add value before marking up the property.",
      },
      {
        term: "Total Leverage / First Lien Leverage",
        termEn: "Total Leverage / First Lien Leverage",
        definition: "Total Leverage는 기업의 총 부채를 EBITDA로 나눈 배수로, LBO 크레딧 분석의 가장 기본 지표다. First Lien Leverage는 선순위 담보 부채(TLA, TLB, RCF)만을 EBITDA로 나눠, 시니어 채권자의 위험 노출을 별도로 측정한다. 두 지표의 차이가 클수록 HY채권·메자닌 등 후순위 부채가 많다는 의미이며, 채권 계약서에 직접 쓰이는 핵심 수치다. 예를 들어 Total Leverage 7.0×, First Lien Leverage 4.5×라면 TLB 투자자는 3.5× EBITDA의 에쿼티+후순위 쿠션을 가진 셈이다.",
        definitionEn: "Total Leverage (total debt ÷ EBITDA) is the primary headline metric in LBO credit analysis. First Lien Leverage (senior secured debt only ÷ EBITDA) isolates the exposure of senior creditors and is the figure most commonly written directly into TLB credit agreement covenant definitions. The gap between the two metrics represents the subordinated debt cushion — the more HY bonds and mezzanine below the senior debt, the more protected TLB holders are in a downside scenario. A 7.0× total / 4.5× first-lien structure means TLB lenders sit behind 2.5 turns of subordinated debt before suffering a first-dollar loss.",
      },
      {
        term: "FCCR (고정비용커버리지비율)",
        termEn: "FCCR (Fixed Charge Coverage Ratio)",
        definition: "Fixed Charge Coverage Ratio의 약자로, (EBITDA - Capex) ÷ (현금 이자 + 원금 상환)으로 계산한다. HY 인덴처의 부채발행 테스트로 활용되며, 이 비율이 2.0× 이상이어야 추가 부채를 발행할 수 있다는 조항이 표준이다. FCCR이 2.0 미만으로 떨어지면 인덴처상 부채 발행이 제한되기 때문에, 발행사는 이 임계치를 사수하기 위해 Capex를 줄이거나 자산을 매각하는 판단을 내리기도 한다. 레버리지 배수가 회사의 부채 크기를 말해준다면, FCCR은 그 부채를 실제로 감당할 능력을 보여주는 지표다.",
        definitionEn: "The Fixed Charge Coverage Ratio (FCCR) is calculated as (EBITDA minus capex) divided by (cash interest plus scheduled debt amortization). In a typical HY indenture, the debt incurrence covenant requires FCCR to exceed 2.0× before the company may incur additional debt. When FCCR falls below this threshold, the incurrence test fails and new debt issuance is effectively blocked — forcing the issuer to consider asset sales or capex cuts to restore headroom. If leverage ratios tell you how much debt a company carries, FCCR tells you whether it can actually afford to service it.",
      },
      {
        term: "ECF Sweep (초과현금흐름 강제상환)",
        termEn: "ECF Sweep (Excess Cash Flow Sweep)",
        definition: "일정 금액 이상의 잉여현금흐름(Free Cash Flow)을 강제로 원금 상환에 사용하도록 요구하는 TLB 코버넌트다. 일반적으로 레버리지가 높을 때(예: 4.0× 이상)는 FCF의 50~75%를 Sweep하고, 레버리지가 낮아짐에 따라 Sweep 비율이 25% → 0%로 줄어드는 래칫(ratchet) 구조를 사용한다. LBO 초기 레버리지를 빠르게 낮춰 채권자 위험을 줄이는 장치이며, 발행사 입장에서는 현금을 M&A나 배당에 쓰지 못하도록 제한하는 족쇄가 된다. PE 스폰서가 협상 시 Sweep 임계치를 최대한 높이려는 이유가 바로 이 때문이다.",
        definitionEn: "The excess cash flow sweep is a TLB covenant that mandates a portion of annual free cash flow above a defined threshold be applied to mandatory debt prepayment. The sweep percentage typically steps down as leverage improves — for example, 75% sweep when leverage exceeds 4.0×, falling to 25% when leverage drops below 3.5×, and eventually 0% once the borrower is below a target level. This ratchet mechanism accelerates deleveraging early in the LBO when lender risk is highest. PE sponsors negotiate aggressively to raise the leverage thresholds and widen the step-downs, preserving more cash for dividends or bolt-on acquisitions.",
      },
      {
        term: "신용등급 노칭 (Rating Notching)",
        termEn: "Rating Notching",
        definition: "동일 발행사의 부채라도 선순위·후순위 여부, 담보 유무에 따라 신용등급을 위아래로 조정하는 방식이다. 일반적으로 1순위 담보 TLB는 기업 전체 등급보다 1~2 노치 높게 부여되고, 무담보 HY채권은 기업 등급과 동일하거나 1 노치 낮게, 후순위 HY는 1~2 노치 더 낮게 부여된다. 노칭의 근거는 디폴트 시 회수율 차이에 있으며, S&P와 Moody's가 각기 다른 노칭 기준을 적용한다. 같은 회사 채권이라도 어느 트랑쉐냐에 따라 BB+와 B-의 등급 차이가 날 수 있어, 투자자의 투자 가능 범위(mandate)에 직접 영향을 준다.",
        definitionEn: "Rating notching adjusts the credit rating of a specific debt instrument above or below the issuer's overall corporate credit rating based on its position in the capital structure and the presence or absence of collateral. Senior secured TLBs are typically notched one to two levels above the corporate rating, reflecting higher expected recovery in default; unsecured HY bonds sit at or one notch below; and subordinated instruments trade another one to two notches below that. The theoretical basis is recovery-rate differentiation validated by historical default data. Two instruments from the same issuer can therefore carry ratings several notches apart, directly affecting which fund mandates can hold them.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "levfin-covenants", "levfin-process", "levfin-pricing", "lbo-overview"],
    appearsIn: [],
  },

  {
    slug: "levfin-covenants",
    title: "LevFin Ch.3 — 코버넌트 구조: HY 인덴처 & 론 에그리먼트의 모든 것",
    titleEn: "LevFin Ch.3 — Covenant Structure: Everything in HY Indentures & Loan Agreements",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "HY 인덴처·TLB 코버넌트 완전 해설: 부채 발행 FCCR 2.0× 테스트 + 카브아웃 전체, 지불 제한 빌더 바스켓 계산법, 비제한 자회사(PE의 비밀 무기), J.Crew IP 이전(2017)·PetSmart/Chewy(2018)·Serta Simmons(2020)·Envision Healthcare(2020) 4대 루프홀 완전 해부 — 각 사건 이후 시장이 어떻게 blocker 조항을 추가했는지까지.",
    excerptEn:
      "Complete HY indenture & TLB covenant guide: debt incurrence FCCR 2.0× test + all carve-outs, restricted payments builder basket calculation, unrestricted subsidiaries (PE's secret weapon), four landmark loopholes (J.Crew 2017, PetSmart/Chewy 2018, Serta Simmons 2020, Envision Healthcare 2020) fully dissected — including how the market added blocker language after each event.",
    readingMinutes: 18,
    tags: ["코버넌트", "HY 인덴처", "부채 발행 제한", "FCCR", "빌더 바스켓", "비제한 자회사", "J.Crew", "PetSmart", "Serta Simmons", "Envision", "업타이어", "Cov-Lite", "코버넌트 협상"],
    tagsEn: ["Covenants", "HY Indenture", "Limitation on Indebtedness", "FCCR", "Builder Basket", "Unrestricted Subsidiaries", "J.Crew", "PetSmart", "Serta Simmons", "Envision", "Uptier", "Cov-Lite", "Covenant Negotiation"],
    sections: [],
    keyTerms: [
      {
        term: "비제한 자회사 (Unrestricted Subsidiary)",
        termEn: "Unrestricted Subsidiary",
        definition: "크레딧 어그리먼트·인덴처의 제약을 받지 않도록 별도로 지정된 자회사다. PE 스폰서는 이 구조를 활용해 핵심 자산(특허, 부동산 등)을 비제한 자회사로 이전하고, 채권자의 담보 범위와 코버넌트 통제 밖에 배치할 수 있다. J.Crew(2017년 브랜드 IP 이전)와 Chewy(PetSmart 지분 분리) 사건이 대표적인 악용 사례로, 이후 시장은 IP 이전과 지분 분리를 차단하는 Blocker 조항을 표준으로 추가했다. 비제한 자회사는 PE의 가장 강력한 코버넌트 우회 도구이자, 채권 투자자가 가장 경계하는 조항이다.",
        definitionEn: "An unrestricted subsidiary is a subsidiary explicitly designated as outside the restricted group governed by the credit agreement or indenture, meaning it is not subject to any of the debt incurrence, restricted payments, or asset-sale covenants. PE sponsors use this carve-out to ring-fence valuable assets — intellectual property, real estate, high-growth subsidiaries — away from creditors' security package and covenant controls. The J.Crew brand IP transfer (2017) and PetSmart/Chewy spin-off (2018) are landmark cases of this being weaponized; both events prompted the market to add specific blocker language into standard indenture packages. It remains the single most powerful covenant-avoidance tool in the PE toolkit.",
      },
      {
        term: "업타이어 트랜잭션 (Uptier Transaction)",
        termEn: "Uptier Transaction",
        definition: "기존 채권자 전원의 동의 없이 다수결(통상 50.1% 또는 2/3 동의)만으로 새로운 최선순위 트랑쉐를 기존 부채 위에 얹는 구조 재편 방식이다. 새 부채를 참여 채권자들이 함께 발행하고 기존 비참여 채권자들은 열위 순위로 밀려난다. Serta Simmons(2020)와 Envision Healthcare(2020)가 대표적이며, 이후 시장에서는 이를 차단하는 'Sacred Rights'(만장일치 요건) 조항이 표준으로 자리잡았다. 채권자 간 소송이 끊이지 않아 LevFin 법무 분야의 가장 뜨거운 쟁점이 됐다.",
        definitionEn: "An uptier transaction allows the issuer — with the consent of a majority (typically 50.1% or 66.7%) rather than all creditors — to issue a new super-priority tranche that sits senior to the existing debt, effectively cramming down non-participating holders. Participating creditors exchange existing paper for the new senior debt while holdouts are pushed deeper into the waterfall. Serta Simmons and Envision Healthcare (both 2020) brought the structure to prominence, sparking extensive litigation. The market response was to designate lien subordination provisions as sacred rights requiring unanimous consent, but uptier litigation continues to be the most contested area of leveraged finance law.",
      },
      {
        term: "빌더 바스켓 (Builder Basket)",
        termEn: "Builder Basket",
        definition: "누적 이익의 일정 비율(예: EBITDA의 50%)을 배당이나 추가 투자에 사용할 수 있도록 허용하는 코버넌트 조항이다. 기업이 이익을 쌓을수록 배당 및 투자 허용 한도가 늘어나는 구조로, PE 스폰서가 LBO 운영 중 배당 재원을 축적하는 핵심 통로다. 빌더 바스켓은 재무적으로 성공적인 기업일수록 PE에 유리하게 작동하지만, 채권 투자자 입장에서는 기업 자금이 채권 상환보다 PE 수익 실현에 먼저 쓰일 수 있다는 우려를 낳는다. '이익 벽돌을 쌓아 나중에 배당 건물을 짓는다'는 비유로 이해하면 쉽다.",
        definitionEn: "The builder basket (also called the cumulative credit basket) allows the issuer to make restricted payments — dividends to the PE sponsor, investments in unrestricted subsidiaries — up to a defined limit that builds over time as a percentage of cumulative net income or EBITDA. The better the company performs, the larger the basket grows, giving the PE sponsor an increasingly wide runway to upstream cash. From the creditor's perspective, the builder basket means that a financially healthy portfolio company may legitimately send cash to its equity owner rather than deleveraging. Think of it as laying profit bricks over time to eventually construct a dividend payout.",
      },
      {
        term: "Incurrence Covenant vs Maintenance Covenant",
        termEn: "Incurrence Covenant vs Maintenance Covenant",
        definition: "Incurrence Covenant는 추가 부채 발행·배당 지급 같은 특정 행위를 하려 할 때만 재무 비율을 테스트하는 방식이다. 반면 Maintenance Covenant는 매 분기 말 재무 비율이 지정된 기준을 지속적으로 충족해야 하는 의무 약정이다. Cov-Lite 구조는 Maintenance를 제거하고 Incurrence만 남긴 형태로, 차입자는 나쁜 분기를 겪어도 자동으로 디폴트 이벤트가 발생하지 않는다. 전통 은행 대출이 매 분기 건강 검진을 요구한다면, Cov-Lite는 '큰일이 있을 때만 체크'하는 구조다.",
        definitionEn: "An incurrence covenant is tested only when the borrower takes a specified action — issuing new debt, paying a dividend, making an acquisition — and prohibits that action if the financial ratio would fall below the required threshold at that moment. A maintenance covenant, by contrast, requires the borrower to pass a financial ratio test every quarter regardless of any specific action; failure automatically triggers a default event. Cov-lite structures eliminate maintenance covenants and retain only incurrence tests, meaning a company can experience a run of poor quarters without automatically triggering a default. Traditional bank loans demand a quarterly health check; cov-lite is test only when you act.",
      },
      {
        term: "IP 이전 루프홀 (IP Transfer Loophole)",
        termEn: "IP Transfer Loophole",
        definition: "J.Crew가 2017년 자사 브랜드 지식재산권을 케이맨제도 비제한 자회사로 이전해 채권자의 담보 범위에서 빼낸 사례에서 유래한 코버넌트 취약점이다. 이 구조에서 IP를 보유한 자회사는 인덴처 제약을 받지 않으므로 새 선순위 부채를 발행할 수 있고, 기존 채권자들은 핵심 자산 없이 껍데기만 남은 담보를 갖게 된다. 이 사건 이후 시장은 IP 자산의 이전 제한(IP Transfer Blocker)과 비제한 자회사 지정 한도를 표준 인덴처에 삽입하기 시작했다. 루프홀이 발견될 때마다 시장이 반응해 새 방어 장치를 추가하는 LevFin 코버넌트의 진화 역사를 보여주는 대표 사례다.",
        definitionEn: "The IP transfer loophole refers to the structural vulnerability exploited by J.Crew in 2017, when the company transferred its brand intellectual property to a Cayman Islands unrestricted subsidiary sitting outside the indenture restricted group. Once the IP was housed in the unrestricted subsidiary, it could be used as collateral for a new super-senior facility, leaving original bondholders with a pledge over an operating company that no longer owned its most valuable asset. The market responded by incorporating IP transfer blockers and caps on the value of assets that may be designated to unrestricted subsidiaries into standard indenture packages. The J.Crew saga is the canonical example of how leveraged finance covenants evolve — a loophole is exploited, litigation ensues, and new defensive language becomes market standard.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "levfin-credit-metrics", "levfin-process", "levfin-distressed", "lbo-overview"],
    appearsIn: [],
  },

  {
    slug: "levfin-process",
    title: "LevFin Ch.4 — 딜 프로세스: 만기에서 클로징까지 실무 타임라인 완전 해부",
    titleEn: "LevFin Ch.4 — Deal Process: Complete Practitioner Timeline from Mandate to Close",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "LBO 파이낸싱 실전 6단계: Pre-mandate(T-8주)부터 Closing(T+8주)까지 전체 타임라인 — Commitment Letter·Fee Letter·Market Flex 구조, CIM 80-120페이지 작성 과정, 레이팅 에이전시 4-6주 블랙박스 프로세스, 북빌드 10AM 업데이트·배분 정치학, 수수료 구조($25-40mn/딜), Hung Deal 위험(2022 Twitter $13bn 사례).",
    excerptEn:
      "LBO financing 6-stage process: T-8 weeks (pre-mandate) through T+8 weeks (closing) — commitment letter, fee letter, market flex structure; 80-120 page CIM drafting process; 4-6 week rating agency black box; book build 10AM updates and allocation politics; fee structure ($25-40mn/deal); hung deal risk (2022 Twitter $13bn case study).",
    readingMinutes: 20,
    tags: ["딜 프로세스", "Commitment Letter", "Fee Letter", "Market Flex", "CIM", "북빌드", "레이팅 에이전시", "배분", "수수료 구조", "Hung Deal", "Twitter", "신디케이션", "한국 LBO 프로세스"],
    tagsEn: ["Deal Process", "Commitment Letter", "Fee Letter", "Market Flex", "CIM", "Book Build", "Rating Agency", "Allocation", "Fee Structure", "Hung Deal", "Twitter", "Syndication", "Korean LBO Process"],
    sections: [],
    keyTerms: [
      {
        term: "Commitment Letter (커미트먼트 레터)",
        termEn: "Commitment Letter",
        definition: "IB가 일정 조건에서 파이낸싱을 실행할 것을 약속하는 계약 문서다. 딜 서명 전 발행사에게 자금 조달 확약을 제공하며, 조건 미충족 시 IB가 직접 손실을 감수해야 하는 법적 구속력이 있다. PE 스폰서가 M&A 입찰에서 경쟁력을 갖추려면 자금 조달 확실성이 필수이므로, Commitment Letter는 사실상 LBO 딜의 선결 조건이다. IB 입장에서는 시장 리스크를 짧은 기간 떠안는 것이므로, Market Flex 조항으로 조건 변경 권한을 확보해 위험을 부분적으로 헤지한다.",
        definitionEn: "A commitment letter is the legally binding document in which one or more investment banks agree to provide financing at specified terms as a precondition to signing the LBO acquisition agreement. Without it, the PE buyer cannot credibly bid for a target. If market conditions deteriorate after signing and the bank cannot syndicate the debt, the bank must hold the loan on its own balance sheet, absorbing any mark-to-market loss. To partially hedge this risk, commitment letters almost always include a market-flex provision allowing the bank to adjust pricing and terms within agreed parameters.",
      },
      {
        term: "Market Flex (마켓 플렉스)",
        termEn: "Market Flex",
        definition: "북빌드 결과에 따라 IB가 금리·OID·구조를 사전 합의된 범위 내에서 조정할 수 있는 권한이다. 투자자 수요가 약하면 IB는 스프레드를 올리거나 OID를 넓히는 방식으로 딜을 완성하며, 이 비용은 발행사에게 돌아간다. 반대로 수요가 매우 강하면 역방향 플렉스(Reverse Flex)로 조건을 발행사에게 유리하게 조정하기도 한다. 마켓 플렉스는 IB가 언더라이팅 리스크를 줄이면서도 발행사에게 확정적인 파이낸싱 확약을 줄 수 있게 하는 핵심 메커니즘이다.",
        definitionEn: "Market flex is a provision in the commitment letter that gives the arranging bank the right to adjust pricing, OID, structure, and certain terms within pre-agreed limits in response to investor demand during the bookbuild. If demand is weak, the bank flexes spreads wider or increases OID to clear the book — a cost borne by the issuer. When demand is very strong, banks sometimes exercise a reverse flex, improving terms for the borrower. Market flex allows banks to provide firm financing commitments while managing syndication risk, making it a cornerstone of the leveraged finance primary market.",
      },
      {
        term: "CIM (기밀 정보 메모)",
        termEn: "CIM (Confidential Information Memorandum)",
        definition: "LBO 딜에서 발행사의 사업 현황·재무·투자 논거를 담은 80~120페이지 분량의 투자자 제안 문서다. Confidential Information Memorandum의 약자로, 신디케이션 과정에서 잠재 기관 투자자들에게 배포된다. Executive Summary, Business Overview, Industry Analysis, Financial Analysis, Credit Highlights 등의 섹션으로 구성되며, IB Analyst가 주로 초안을 작성한다. CIM의 품질은 북빌드 성공을 좌우하며, 특히 Credit Highlights 섹션이 투자자의 첫인상을 결정한다.",
        definitionEn: "The CIM is an 80-120 page marketing document prepared by the arranging bank that presents the company's business, financial performance, and investment thesis to prospective institutional lenders during syndication. Standard sections include an executive summary, business and industry overview, detailed financial analysis, and credit highlights. Analysts are the primary drafters, often working through the night during deal execution. The CIM's quality directly affects bookbuild momentum — a compelling credit highlights section is frequently the difference between a fully subscribed deal and a difficult syndication.",
      },
      {
        term: "Hung Deal (헝 딜)",
        termEn: "Hung Deal",
        definition: "북빌드에서 투자자를 충분히 모집하지 못해 IB가 약속한 부채를 시장에 소화시키지 못하고 직접 보유해야 하는 상황이다. 2022년 Elon Musk의 Twitter 인수에서 Morgan Stanley 등 주선 IB들이 약 $130억의 TLB·HY채권을 떠안게 된 것이 최근 가장 큰 사례다. Hung Deal이 되면 IB는 대규모 마크다운 손실을 감수해야 하며, 이후 레버리지드 파이낸싱 시장 전반에 위험 회피 분위기가 형성된다. IB가 Commitment Letter 서명에 신중을 기하는 이유이기도 하다.",
        definitionEn: "A hung deal occurs when the arranging bank cannot syndicate all of the committed debt to institutional investors, leaving the bank holding the unsold portion on its own balance sheet — often at a significant mark-to-market loss. The 2022 Twitter/Musk LBO left approximately $13 billion in leveraged loans and high yield bonds hung at Morgan Stanley and other arrangers, representing one of the largest hung deal situations in leveraged finance history. A hung deal chills the broader syndication market as banks become more cautious about providing commitment letters, and it often marks the peak of a credit cycle.",
      },
      {
        term: "레이팅 에이전시 프로세스 (Rating Agency Process)",
        termEn: "Rating Agency Process",
        definition: "S&P·Moody's가 발행사 경영진과 미팅 후 4~6주의 검토를 거쳐 채권 등급을 부여하는 절차다. 경영진 프레젠테이션, 재무 모델 제출, Q&A, 신용위원회 내부 논의를 거쳐 예비 등급이 결정되며, 최종 등급은 딜 클로징 직전에 확정된다. 등급이 HY 기준선 이하(B- 이하)로 나오면 투자자 베이스가 급감해 스프레드가 급등하거나 딜 구조 자체를 변경해야 하는 상황이 생긴다. 등급 결과는 IB와 스폰서가 통제할 수 없기 때문에, 레이팅 에이전시 프로세스는 딜 타임라인에서 가장 큰 불확실성 요인 중 하나다.",
        definitionEn: "The rating agency process involves S&P and Moody's reviewing the issuer's financials, business plan, and credit story before assigning an instrument rating, typically taking four to six weeks from the management presentation to the preliminary rating. The process includes a formal management meeting, submission of the financial model, a Q&A process, and internal credit committee deliberation at each agency. If the resulting rating comes in below expectations — particularly at CCC territory — the investor universe shrinks dramatically, forcing spread increases or structural changes. Because agencies operate independently and unpredictably, the rating process is consistently one of the largest execution risks in an LBO financing timeline.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "levfin-credit-metrics", "levfin-pricing", "levfin-cases", "lbo-overview"],
    appearsIn: [],
  },

  {
    slug: "levfin-pricing",
    title: "LevFin Ch.5 — 프라이싱 심화: OID·PIK·Call Schedule·NIC·Cross-Currency",
    titleEn: "LevFin Ch.5 — Advanced Pricing: OID, PIK, Call Schedules, NIC & Cross-Currency",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "LevFin 프라이싱 완전 해설: IPT→Guidance→Final 5단계 프로세스, New Issue Concession(NIC) 시장 상황별 5-150bp 비교, OID 1pt=14~20bp 실질 비용 계산, PIK Toggle 복리 함정(iHeartMedia 사례), NC/2 vs NC/3 vs NC/4 Call Schedule 최적화, Cross-Currency HY(USD vs EUR), Rating Notching(인스트루먼트별 등급 차이), 2021~2024 매크로 사이클과 프라이싱.",
    excerptEn:
      "Complete LevFin pricing guide: IPT→Guidance→Final 5-stage process, New Issue Concession (NIC) 5-150bp by market condition, OID 1pt=14-20bp effective cost calculation, PIK toggle compounding trap (iHeartMedia case), NC/2 vs NC/3 vs NC/4 call schedule optimization, cross-currency HY (USD vs EUR), rating notching by instrument, 2021-2024 macro cycle and pricing.",
    readingMinutes: 18,
    tags: ["프라이싱", "IPT", "NIC", "OID", "PIK Toggle", "Call Schedule", "Cross-Currency HY", "Rating Notching", "iHeartMedia", "Twitter", "2022 금리 급등", "EUR HY", "Equity Clawback"],
    tagsEn: ["Pricing", "IPT", "NIC", "OID", "PIK Toggle", "Call Schedule", "Cross-Currency HY", "Rating Notching", "iHeartMedia", "Twitter", "2022 Rate Shock", "EUR HY", "Equity Clawback"],
    sections: [],
    keyTerms: [
      {
        term: "IPT (초기 가격 제시)",
        termEn: "IPT (Initial Price Talk)",
        definition: "북빌드 개시 시 발행사와 IB가 시장에 제시하는 예상 금리·스프레드 범위다. 투자자들은 IPT를 보고 관심 여부와 수량을 표명하며, 북빌드 경과에 따라 IPT → Guidance → Final Pricing 순으로 범위가 좁혀진다. IPT는 최종 가격이 아니라 협상의 출발점이므로, IB는 보통 실제 예상 수준보다 5~25bp 넓게 제시해 투자자에게 타이트해지는 여지를 남긴다. 투자자가 많이 몰릴수록 IB는 스프레드를 줄이는 방향으로 Guidance를 업데이트한다.",
        definitionEn: "Initial Price Talk is the indicative spread or yield range communicated to investors at the launch of a bookbuild, representing the starting point for price discovery rather than the final terms. Investors respond with indications of interest and order sizes, and the book runner progressively tightens the range through guidance updates and ultimately sets final pricing. Banks typically set IPT 5-25 bps wide of where they expect to price, preserving room to tighten as the book builds. A heavily oversubscribed book may tighten through IPT by 50 bps or more, while a weak book may require the bank to hold or widen the initial talk.",
      },
      {
        term: "NIC (신규발행 프리미엄)",
        termEn: "NIC (New Issue Concession)",
        definition: "새 채권을 기존 세컨더리 시장 수준보다 추가로 높은 스프레드에 발행하는 비용이다. 투자자 입장에서는 새 채권을 분석하고 포지션을 설정하는 수고에 대한 보상이고, 발행사 입장에서는 시장 진입 비용이다. 시장이 안정적일 때는 5~15bp의 NIC가 일반적이지만, 변동성이 클 때는 100bp를 초과하기도 한다. NIC가 크다는 것은 시장 환경이 발행사에게 불리하다는 신호이며, 투자자들이 새 공급에 대한 프리미엄을 요구하고 있음을 의미한다.",
        definitionEn: "The new issue concession is the additional spread premium above the secondary market fair value of comparable outstanding bonds that a borrower must offer to attract investors to a new deal. It compensates investors for the analytical effort of underwriting a new credit and the market risk of holding an illiquid new issue before it settles. In stable markets, NICs of 5-15 bps are typical; in volatile markets they can exceed 100 bps as investors demand a larger cushion. A widening NIC environment signals deteriorating primary market conditions and rising borrowing costs for issuers across the leveraged finance universe.",
      },
      {
        term: "PIK Toggle (PIK 토글)",
        termEn: "PIK Toggle",
        definition: "발행사가 선택에 따라 현금 이자 또는 PIK(원금에 이자 추가) 방식으로 전환할 수 있는 채권 구조다. 현금 압박이 심할 때 PIK로 전환하면 단기 유동성을 보전할 수 있지만, 이자가 복리로 쌓여 원금이 급격히 증가한다. iHeartMedia가 PIK Toggle을 활용해 현금 유출을 줄였지만 결국 부채가 눈덩이처럼 불어나 2018년 파산한 것이 대표적 사례다. 투자자는 PIK Toggle을 부실 징후로 인식하는 경향이 있어, Toggle 채권은 일반 현금이자 채권보다 높은 스프레드로 발행된다.",
        definitionEn: "A PIK toggle bond allows the issuer to elect, at each interest payment date, whether to pay interest in cash or to add the interest amount to the outstanding principal balance (payment-in-kind). This toggle feature preserves liquidity when cash is tight but creates a compounding snowball effect on the debt balance. iHeartMedia famously used PIK toggles to manage cash outflows, but the accumulating debt burden contributed to its 2018 bankruptcy filing. Investors view a PIK election as a significant distress signal, and toggle bonds therefore carry meaningfully higher spreads than otherwise comparable cash-pay instruments.",
      },
      {
        term: "Rating Notching (신용등급 노칭)",
        termEn: "Rating Notching",
        definition: "같은 발행사의 부채라도 담보 유무·선후순위에 따라 신용등급을 위아래로 조정하는 방식이다. 1순위 담보 TLB는 기업 등급보다 1~2 노치 높고, 무담보 HY채권은 기업 등급과 동일하거나 1 노치 낮으며, 후순위 HY는 추가로 1~2 노치 더 낮게 부여된다. 노칭의 이론적 근거는 디폴트 시 트랑쉐별 회수율 차이이며, S&P와 Moody's는 각기 다른 노칭 가이드라인을 적용한다. 투자자 펀드 mandate는 특정 등급 범위만 편입 가능하도록 제한하기 때문에, 노칭 결과에 따라 해당 트랑쉐의 접근 가능한 투자자 풀이 완전히 달라진다.",
        definitionEn: "Rating notching is the practice of assigning a credit rating to a specific debt instrument that differs from the issuer's overall corporate family rating based on the instrument's structural position — its security interest, seniority, and recovery prospects in a default. First-lien secured loans are typically notched one to two levels above the corporate rating; unsecured HY bonds at or one notch below; and deeply subordinated instruments two or more notches below. S&P and Moody's apply their own distinct notching methodologies. Because institutional fund mandates restrict holdings to specific rating categories, the notched rating directly determines the investor universe for each tranche and therefore its pricing.",
      },
      {
        term: "Cross-Currency HY (크로스커런시 HY)",
        termEn: "Cross-Currency HY",
        definition: "달러 대신 유로 표시로 HY채권을 발행해 유럽 투자자 풀을 공략하는 전략이다. 유럽 HY 시장은 USD HY 시장보다 전통적으로 코버넌트 구조가 타이트하고 발행 규모가 작지만, 유로 투자자를 함께 끌어들여 전체 자금 조달 비용을 낮출 수 있다. 발행사는 EUR 부채 원금과 이자를 달러로 교환하는 FX 헤지 비용(Cross-Currency Swap)을 부담해야 하며, 이 비용이 EUR 금리 절감분보다 크면 경제성이 없다. EUR/USD 스프레드 차이, 헤지 비용, 투자자 다변화 편익을 종합적으로 고려해 통화를 결정한다.",
        definitionEn: "Cross-currency HY refers to the strategy of issuing euro-denominated high yield bonds to access the European investor base alongside or instead of dollar-denominated paper. The EUR HY market has historically featured tighter covenant packages and smaller deal sizes than USD HY, but tapping European investors can broaden the order book and potentially reduce total funding costs. Issuers typically layer on cross-currency swap agreements to convert euro principal and interest payments back into dollars, and the all-in cost of the EUR tranche including hedging must be compared against the equivalent dollar funding cost. The currency mix decision balances absolute spread differentials, swap costs, and investor diversification benefits.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "levfin-process", "levfin-credit-metrics", "levfin-distressed", "lbo-overview"],
    appearsIn: [],
  },

  {
    slug: "levfin-distressed",
    title: "LevFin Ch.6 — 부실채권 & 구조조정: LBO가 무너질 때 무슨 일이 벌어지나",
    titleEn: "LevFin Ch.6 — Distressed Debt & Restructuring: What Happens When an LBO Fails",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "LBO 부실 완전 가이드: PIK 선택→리볼버 인출→CCC 강등→Chapter 11 8단계 부실 신호, Amend & Extend·Out-of-Court·Ch.11·Prepackaged 4가지 구조조정 옵션, Serta Simmons·Envision Healthcare·TriMark USA 업타이어 트랜잭션 3사례, DIP 파이낸싱 메커니즘, 회수율(1st Lien 70-80% → Equity ~0%), 한국 법정관리 vs 워크아웃 vs KAMCO.",
    excerptEn:
      "Complete LBO distress guide: 8 warning signals (PIK election → revolver drawdown → CCC downgrade → Chapter 11), four restructuring options (A&E / out-of-court / Ch.11 / prepackaged), three uptier case studies (Serta Simmons, Envision Healthcare, TriMark USA), DIP financing mechanics, recovery rates (1st lien 70-80% → equity ~0%), Korean court receivership vs workout vs KAMCO.",
    readingMinutes: 20,
    tags: ["부실채권", "구조조정", "Chapter 11", "업타이어", "DIP 파이낸싱", "Serta Simmons", "Envision Healthcare", "TriMark", "Amend & Extend", "회수율", "법정관리", "워크아웃", "KAMCO", "Loan to Own"],
    tagsEn: ["Distressed Debt", "Restructuring", "Chapter 11", "Uptier", "DIP Financing", "Serta Simmons", "Envision Healthcare", "TriMark", "Amend & Extend", "Recovery Rate", "Court Receivership", "Workout", "KAMCO", "Loan to Own"],
    sections: [],
    keyTerms: [
      {
        term: "DIP 파이낸싱 (DIP Financing)",
        termEn: "DIP Financing (Debtor-In-Possession Financing)",
        definition: "Chapter 11 파산 신청 후 기업이 영업을 유지하기 위해 조달하는 초선순위 부채다. Debtor-In-Possession의 약자로, 법원 승인 하에 기존 채권자보다 우선 상환권을 갖는다. 파산 기업은 신규 자금 조달이 사실상 불가능하므로 DIP 파이낸싱이 운영 자금의 생명줄 역할을 하며, DIP 대출자는 낮은 신용 위험과 높은 수익률을 동시에 누린다. 기존 채권자들이 자신의 담보 가치를 보호하기 위해 스스로 DIP를 제공하는 경우(Roll-up DIP)도 많다.",
        definitionEn: "DIP financing is super-priority debt raised by a company after filing for Chapter 11 bankruptcy protection to fund ongoing operations while reorganizing under court supervision. As debtor-in-possession, the company has court-approved authority to borrow on terms that sit ahead of all pre-petition claims in the repayment waterfall. DIP lenders enjoy low credit risk combined with above-market returns, since the court protects their priority position. Existing senior secured creditors often provide DIP financing themselves — a roll-up DIP — to protect their collateral value and maintain negotiating leverage over the reorganization plan.",
      },
      {
        term: "Amend & Extend (만기 연장)",
        termEn: "Amend & Extend (A&E)",
        definition: "만기가 임박한 부채를 법정 절차 없이 채권자 동의만으로 기간을 연장하는 법정 외 구조조정 방식이다. 기업이 즉각적인 파산 없이 숨통을 틔우는 현실적 선택지로, 대신 금리 인상·추가 담보·약간의 원금 상환을 조건으로 한다. 채권자 입장에서도 즉각 청산보다 A&E가 더 높은 회수율을 기대할 수 있을 때 동의하므로, 양측 모두에게 합리적인 선택이 될 수 있다. 단, A&E는 근본 문제를 해결하지 못하고 만기를 미루는 것이라서, 이후에도 사업 개선이 없으면 결국 Chapter 11로 이어지는 경우가 많다.",
        definitionEn: "Amend & Extend is an out-of-court restructuring technique where existing lenders agree to push out a looming debt maturity in exchange for improved economic terms — typically a higher spread, additional fees, or incremental collateral. It avoids the cost, stigma, and uncertainty of formal bankruptcy while giving the borrower time to execute an operational turnaround. Lenders agree when they believe A&E will produce a higher recovery than an immediate enforcement or liquidation. However, A&E is a deferral rather than a cure — without genuine business improvement, many A&E candidates eventually file for Chapter 11 after the extended maturity arrives.",
      },
      {
        term: "Loan-to-Own (론투온)",
        termEn: "Loan-to-Own",
        definition: "부실채권을 시장가(액면 대비 30~70% 할인)에 매입한 뒤, 구조조정 과정에서 채권을 에쿼티로 전환해 기업 지배권을 획득하는 헤지펀드 전략이다. Elliott Management, Apollo Global Management 등이 대표적 플레이어로, 부채 매입 비용이 낮기 때문에 에쿼티 전환 후 기업이 회복되면 큰 수익을 거둔다. 이 전략은 기존 주주를 완전히 희석시키고 새 오너가 되는 것이므로, 주주 및 기존 채권자들과의 법적 분쟁이 빈번하게 발생한다. Loan-to-Own 투자자는 Plan of Reorganization 협상에서 새 에쿼티 배분을 극대화하기 위해 적극적으로 개입한다.",
        definitionEn: "Loan-to-own is a distressed investing strategy in which a hedge fund or private credit manager purchases a company's debt at a steep discount — often 30-70 cents on the dollar — with the explicit intention of converting that debt into controlling equity through the reorganization process. Firms such as Elliott Management and Apollo have built franchises around this strategy. Because the investor's cost basis is far below par, even a modest business recovery can generate extraordinary equity returns. Loan-to-own is inherently adversarial toward existing shareholders and junior creditors who get wiped out, so it typically involves protracted litigation over the valuation and allocation of new equity in the plan of reorganization.",
      },
      {
        term: "Chapter 11 (미국 파산 보호)",
        termEn: "Chapter 11 Bankruptcy",
        definition: "미국 파산법 제11장에 따른 기업 회생 절차로, 영업을 중단하지 않고 법원 감독 하에 채무 재조정 계획(Plan of Reorganization)을 수립·인가받는 방식이다. 자동유예(Automatic Stay) 덕분에 채권자들의 강제집행이 일시 중단되고 기업에게 협상 시간을 준다. TXU·Caesars·iHeartMedia 등 대형 LBO 기업들이 이 절차를 활용했으며, 통상 12~24개월 내에 종결된다. 미국 Chapter 11은 글로벌 LBO 파이낸싱에서 사실상의 표준 구조조정 플랫폼으로, 채권자 위계에 따른 회수율을 법원이 강제하는 구조다.",
        definitionEn: "Chapter 11 of the U.S. Bankruptcy Code provides a court-supervised reorganization framework under which a company continues operating as a going concern while negotiating a Plan of Reorganization with creditors. Upon filing, an automatic stay halts all enforcement actions by creditors, giving the debtor breathing room to negotiate. Major LBO bankruptcies including TXU Energy, Caesars Entertainment, and iHeartMedia all restructured through Chapter 11 processes. The proceeding typically concludes in 12-24 months with court confirmation of a reorganization plan that distributes new equity and restructured debt according to the absolute priority rule — effectively enforcing the capital structure waterfall at gunpoint.",
      },
      {
        term: "회수율 (Recovery Rate)",
        termEn: "Recovery Rate",
        definition: "디폴트·청산 시 각 트랑쉐 채권자가 원금 대비 실제 돌려받는 비율이다. 역사적 평균으로는 1순위 담보 TLB가 70~80%, 무담보 HY채권이 30~50%, 메자닌이 10~30%, 에쿼티가 ~0%다. 회수율은 신용등급 노칭의 이론적 근거이자, 부실채권 투자자가 매입 가격을 결정하는 핵심 변수다. LBO에서 레버리지가 높을수록 워터폴 하단의 HY채권·에쿼티 회수율이 급격히 낮아지므로, 크레딧 애널리스트는 항상 최악 시나리오의 회수율을 시뮬레이션해야 한다.",
        definitionEn: "Recovery rate is the percentage of par value that each class of creditor ultimately receives in a default, restructuring, or liquidation scenario. Historical averages show first-lien secured TLBs recovering 70-80 cents on the dollar, unsecured high yield bonds 30-50 cents, mezzanine 10-30 cents, and equity near zero. Recovery rates are the empirical foundation for rating notching and are the primary pricing input for distressed debt investors determining at what discount to purchase impaired claims. In highly leveraged LBOs, subordinated tranches face dramatically lower recoveries as enterprise value declines, which is why credit analysts stress-test recovery rates under multiple downside scenarios when underwriting debt.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-covenants", "levfin-credit-metrics", "levfin-pricing", "levfin-cases", "lbo-deal-process"],
    appearsIn: [],
  },

  {
    slug: "levfin-cases",
    title: "LevFin Ch.7 — 케이스 종합: 역사를 바꾼 LBO 5개 완전 해부",
    titleEn: "LevFin Ch.7 — Case Studies: Five Landmark LBOs Fully Dissected",
    entryType: "article",
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt:
      "LevFin 시리즈 대미: KKR/RJR Nabisco 1989($31.4bn·Drexel/Milken 정크본드), Blackstone/Hilton 2007($26.9bn·IRR 21%)·KKR/Toys R Us 2005($6.6bn·아마존에 무너진 LBO), Apollo/Caesars 2008($30.7bn·Good/Bad Bank LME·$1.25bn 소송 합의), MBK/홈플러스 2015(₩7.2조·한국 최대 LBO) — 5개 케이스에서 뽑은 LevFin 6대 교훈.",
    excerptEn:
      "LevFin series finale: KKR/RJR Nabisco 1989 ($31.4bn, Drexel/Milken junk bonds), Blackstone/Hilton 2007 ($26.9bn, IRR 21%), KKR/Toys R Us 2005 ($6.6bn, destroyed by Amazon), Apollo/Caesars 2008 ($30.7bn, Good/Bad Bank LME, $1.25bn litigation settlement), MBK/Homeplus 2015 (₩7.2T, Korea's largest LBO) — six LevFin lessons from five landmark deals.",
    readingMinutes: 24,
    tags: ["RJR Nabisco", "KKR", "Blackstone", "힐튼", "Toys R Us", "Caesars", "Apollo", "MBK Partners", "홈플러스", "Drexel Burnham", "마이클 밀컨", "LBO 케이스스터디", "업타이어", "LBO 교훈"],
    tagsEn: ["RJR Nabisco", "KKR", "Blackstone", "Hilton", "Toys R Us", "Caesars", "Apollo", "MBK Partners", "Homeplus", "Drexel Burnham", "Michael Milken", "LBO Case Study", "Uptier", "LBO Lessons"],
    sections: [],
    keyTerms: [
      {
        term: "Drexel Burnham Lambert / 정크본드 혁명",
        termEn: "Drexel Burnham Lambert / Junk Bond Revolution",
        definition: "1980년대 Michael Milken이 주도해 정크본드(HY채권)를 M&A 파이낸싱의 핵심 도구로 만든 금융 혁명이다. 이전까지 투자등급 기업만 접근 가능했던 자본시장을 BB 이하 기업에게 열었으며, KKR/RJR Nabisco $31.4bn 딜이 이 혁명의 정점이었다. 1990년 Drexel의 파산은 HY채권 시장을 일시적으로 얼어붙게 했지만, 그 구조 혁신은 이후 현대 레버리지드 파이낸스의 기반이 됐다. Milken은 HY채권 발행에 대한 내부자 거래 혐의로 유죄를 받았으나, 그가 개척한 시장 구조는 살아남아 지금도 연간 $400bn+ 규모로 작동하고 있다.",
        definitionEn: "The junk bond revolution of the 1980s was driven by Michael Milken at Drexel Burnham Lambert, who created the modern high yield bond market by convincing institutional investors that the risk-adjusted returns on sub-investment-grade debt were attractive. This opened the capital markets to companies and PE sponsors that had previously been locked out, and culminated in the KKR/RJR Nabisco $31.4 billion LBO in 1989 — still the largest LBO by inflation-adjusted value. Drexel's 1990 bankruptcy following Milken's securities fraud conviction temporarily froze the market, but the structural innovation survived and underpins the $400bn+ annual HY issuance market operating today.",
      },
      {
        term: "Good Bank / Bad Bank 분리",
        termEn: "Good Bank / Bad Bank Split",
        definition: "부실 기업을 우량 자산(Good Bank)과 불량 자산(Bad Bank)으로 분리해 구조조정하는 전략이다. Apollo/Caesars 사례에서 Caesars Palace, Paris Las Vegas 등 핵심 자산은 CEOC(Good Bank)에, 문제 자산은 별도 법인에 배치해 핵심 자산을 채권자로부터 격리했다. 이 전략은 기업의 최선 자산을 보호하는 동시에 부실 자산을 법원 절차로 정리하는 PE의 고전적 구조 최적화 기법이지만, 채권자들은 자신들이 나쁜 쪽에 놓였다고 주장하며 대규모 소송을 제기했다. Caesars 사례는 결국 $1.25bn 소송 합의로 종결됐다.",
        definitionEn: "The good bank / bad bank split involves separating a distressed company's assets into a high-quality operating entity and a vehicle containing the problem assets, allowing the valuable franchise to restructure under better terms while the bad assets are wound down or resolved through bankruptcy. In the Apollo/Caesars restructuring, prime casino properties including Caesars Palace were housed in CEOC while other assets were placed separately. Creditors who found themselves holding claims against the bad entity sued, alleging that Apollo had improperly transferred value away from their reach — litigation that ultimately settled for $1.25 billion. The tactic is now a standard element of PE distressed-asset playbooks worldwide.",
      },
      {
        term: "Liability Management Exercise (LME)",
        termEn: "Liability Management Exercise (LME)",
        definition: "기존 부채 조건을 교체·재구조화해 디폴트를 피하거나 만기를 연장하는 포괄적 부채 관리 기법이다. Exchange Offer, Tender + Consent Solicitation, Uptier Transaction 등 다양한 방식을 포함하며, 법원 절차 없이 채권자 동의로 진행한다. 최근에는 Uptier LME가 소수 채권자들의 반발과 소송을 낳아 시장에서 가장 논쟁적인 구조 재편 기법이 됐다. Apollo/Caesars의 LME는 업계에서 교과서적 사례로 연구되며, 법적 분쟁 없이 LME를 진행하기가 얼마나 어려운지를 잘 보여준다.",
        definitionEn: "A liability management exercise is a broad term for any out-of-court transaction that modifies existing debt obligations to improve the borrower's financial position — encompassing exchange offers, tender offers combined with consent solicitations, and uptier transactions. LMEs are preferred over formal bankruptcy because they are faster, cheaper, and avoid the reputational damage of a court filing. However, aggressive LMEs — particularly uptier transactions that subordinate holdout creditors — have generated a wave of litigation as disaffected creditors challenge the fairness of the process. The Apollo/Caesars LME is studied as a cautionary tale illustrating both the power and the legal peril of pushing liability management to its structural limits.",
      },
      {
        term: "브리지 파이낸싱 (Bridge Financing)",
        termEn: "Bridge Financing",
        definition: "LBO 클로징 직후 영구 자금 조달이 완료될 때까지 단기로 운용하는 중간 대출이다. KKR/RJR Nabisco에서 Drexel Burnham이 브리지를 제공했고, 이후 6~12개월 내에 HY채권·TLB로 재파이낸싱하는 구조가 표준이 됐다. 브리지 파이낸싱은 딜 클로징 타이밍과 시장 상황이 맞지 않을 때 유용하지만, 시장이 급격히 악화되면 IB가 브리지를 장기 보유하는 Hung Deal로 이어질 수 있다. 브리지 금리는 보통 TLB보다 높고, 기간이 길어질수록 단계적으로 금리가 상승하는 스텝업(step-up) 구조를 채택해 발행사가 조기 재파이낸싱에 나서도록 유도한다.",
        definitionEn: "Bridge financing is short-term debt provided by investment banks at LBO closing to allow the deal to complete before permanent capital markets financing — high yield bonds and term loans — is syndicated. Drexel's bridge for KKR in the RJR Nabisco deal established the template still used today: close the acquisition with bridge capital, then refinance into permanent instruments within six to twelve months. The bridge carries a higher interest rate that steps up over time to incentivize prompt refinancing. When capital markets deteriorate sharply after a commitment is made, the bridge can become a hung deal, forcing the arranging bank to hold a large illiquid position at a mark-to-market loss.",
      },
      {
        term: "Sale & Leaseback (세일앤리스백)",
        termEn: "Sale & Leaseback",
        definition: "기업이 보유 부동산·설비 등 자산을 매각한 뒤 임대료를 내고 계속 사용하는 방식이다. MBK/홈플러스는 LBO 부채 상환을 위해 ₩4조 규모의 점포 부동산을 매각 후 임차하는 S&L을 실행했다. 자산 유동화와 영업 연속성을 동시에 달성할 수 있는 장점이 있지만, 장기 임차 부담이 발생해 운영 고정비가 높아지는 트레이드오프가 있다. PE LBO에서 S&L은 레버리지를 빠르게 낮추는 유용한 도구이지만, 자산 보유 이익(부동산 가치 상승)을 포기하는 비용을 수반한다.",
        definitionEn: "A sale and leaseback transaction involves selling owned assets — typically real estate — to a third-party investor and simultaneously signing a long-term lease to continue occupying and operating the assets. MBK Partners executed a KRW 4 trillion sale-leaseback of Homeplus store properties to deleverage the LBO balance sheet and return capital to investors. The structure simultaneously monetizes illiquid assets and preserves operational continuity, but it converts a fixed asset into a fixed operating lease obligation, permanently increasing the cost base. In PE-backed LBOs, S&L is a powerful deleveraging tool, but it forfeits the long-term upside from property appreciation and leaves the portfolio company exposed to rent escalation.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "levfin-credit-metrics", "levfin-covenants", "levfin-process", "levfin-pricing", "levfin-distressed"],
    appearsIn: [],
  },

  // ── 신디케이티드론 101 시리즈 ──────────────────────────────────────────
  {
    slug: "syndicated-loan-overview",
    title: "신디케이티드론 Ch.0 — 왜 은행들은 뭉치는가",
    titleEn: "Syndicated Loans Ch.0 — Why Banks Pool Together",
    entryType: "article",
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "삼성전자가 100조를 빌리려 하면 한 은행이 다 빌려줄 수 있을까? BIS 자기자본 규제·집중 리스크·관계 관리 — 세 가지 이유로 은행들은 뭉친다. 연간 $4조+ 신디케이티드론 시장 전체 지도: IG와 레버리지드 두 세계의 차이, MLA·에이전트·참여은행의 역할과 수익구조, 언더라이트 vs 베스트에포트, Analyst가 밤새 만드는 IM의 실체까지.",
    excerptEn:
      "Could a single bank lend ¥100T to Samsung Electronics? BIS capital rules, concentration risk, and relationship management — three reasons banks syndicate. The complete map of the $4T+ global syndicated loan market: IG vs leveraged worlds, MLA/agent/participant roles, underwrite vs best efforts, and what an Analyst actually builds overnight.",
    readingMinutes: 18,
    tags: ["신디케이티드론", "신디케이션", "MLA", "주선은행", "레버리지드론", "IG론", "에이전트은행", "언더라이트", "베스트에포트", "SOFR", "RWA", "BIS"],
    tagsEn: ["Syndicated Loan", "Syndication", "MLA", "Mandated Lead Arranger", "Leveraged Loan", "IG Loan", "Agent Bank", "Underwrite", "Best Efforts", "SOFR", "RWA", "BIS"],
    sections: [],
    keyTerms: [
      {
        term: "신디케이티드론",
        termEn: "Syndicated Loan",
        definition: "단일 은행이 아닌 여러 은행·기관이 공동으로 자금을 제공하는 대규모 대출 방식이다. 은행별 집중 위험을 분산시키면서도 수십억 달러 규모의 자금을 공급할 수 있다. 마치 아파트 개발 프로젝트에 여러 투자자가 각자의 자금을 나눠 투자하는 것처럼, 신디케이티드론도 각 은행이 감당 가능한 부분만 책임진다. 글로벌 연간 시장 규모는 $4조+로, 기업 금융의 핵심 자금 조달 수단이다.",
        definitionEn: "A syndicated loan is a large credit facility provided jointly by a group of banks and financial institutions rather than a single lender. It allows enormous capital amounts to flow to a single borrower while spreading credit risk across many participants. Think of it like multiple investors co-funding a real estate development, each taking only the slice of risk they can comfortably absorb. At $4T+ annually, the global syndicated loan market is the backbone of large-scale corporate finance.",
      },
      {
        term: "MLA (주선은행)",
        termEn: "MLA — Mandated Lead Arranger",
        definition: "딜을 설계하고 조건을 결정한 뒤 참여은행을 모집하는 주간사 역할이다. 가장 많은 수수료를 가져가며 시장에서 딜 리더로 인식된다. 건설 현장의 원도급자처럼 전체 프로젝트를 책임지고 하도급업체(참여은행)를 모집해 작업을 배분한다. 대형 딜에서는 복수의 MLA가 공동 주선(Joint MLA)을 맡기도 한다.",
        definitionEn: "The MLA structures the deal, sets terms, and recruits the syndicate of participating banks. It earns the largest share of fees and is recognized by the market as the deal's architect and leader. Like a general contractor who takes full project responsibility and sub-contracts work to specialists, the MLA underwrites or arranges the full commitment and distributes portions to participants. Large deals often feature multiple Joint MLAs sharing the lead role.",
      },
      {
        term: "RWA (위험가중자산)",
        termEn: "RWA — Risk-Weighted Asset",
        definition: "BIS 자기자본 규제(바젤 III)에서 자산을 위험도에 따라 가중치를 적용한 값이다. RWA가 높을수록 은행이 쌓아야 하는 자기자본이 늘어난다. 국채는 RWA 0%, 기업 대출은 통상 100%로 계산된다. 은행이 대규모 단독 대출 대신 신디케이션을 선택하는 핵심 이유로, 참여 금액을 줄여 RWA를 절약하면 동일한 자본으로 더 많은 딜에 참여할 수 있다.",
        definitionEn: "Risk-Weighted Assets apply regulatory multipliers to bank assets based on credit risk; higher RWA requires more capital to be held in reserve under Basel III. Government bonds carry 0% risk weight while corporate loans are typically 100%. This is the primary structural driver behind syndication: by limiting exposure to any single borrower, each participating bank conserves RWA, freeing capital for other transactions. It's essentially the regulatory plumbing that makes syndication economically rational.",
      },
      {
        term: "언더라이팅 vs 베스트에포트",
        termEn: "Underwrite vs Best Efforts",
        definition: "언더라이팅은 MLA가 전체 금액 조달을 보장하는 방식으로, 북빌드 실패 시 자체 보유해야 한다. 베스트에포트는 최선을 다하되 미달 위험을 발행사가 부담한다. 언더라이팅은 발행사에게 확실성을 주는 대신 MLA가 높은 수수료와 시장 리스크를 진다. 신용도 좋은 IG 딜은 베스트에포트, 레버리지드 딜은 언더라이팅이 일반적이다.",
        definitionEn: "In an underwritten deal, the MLA guarantees the full funding amount — if the bookbuild falls short, the arranger holds the unsold portion on its own balance sheet. In a best-efforts deal, the arranger commits only to using its best efforts; shortfall risk stays with the borrower. Underwriting gives the issuer certainty and commands a higher fee, while best-efforts pricing is lower but exposes the borrower to market risk. Investment-grade deals often use best-efforts; LBO financings typically require underwriting.",
      },
      {
        term: "집중위험 (Concentration Risk)",
        termEn: "Concentration Risk",
        definition: "한 차입자나 섹터에 대출이 과도하게 집중될 경우 해당 차입자 디폴트 시 은행 자본에 큰 타격이 발생하는 위험이다. 계란을 한 바구니에 담지 말라는 원칙의 금융판이다. 바젤 III의 대규모 익스포저 규제(LEX)는 단일 차입자 익스포저를 은행 자기자본의 25% 이내로 제한한다. 신디케이션이 존재하는 본질적인 이유 중 하나가 이 집중위험 분산이다.",
        definitionEn: "Concentration risk arises when a bank has excessive exposure to a single borrower, sector, or geography — making a default in that area disproportionately damaging to the bank's capital. It's the financial version of 'don't put all your eggs in one basket.' Basel III's Large Exposure framework caps any single counterparty exposure at 25% of a bank's Tier 1 capital. Syndication is structurally motivated by the need to distribute this risk across multiple institutions.",
      },
    ],
    relatedSlugs: ["syndicated-loan-players", "syndicated-loan-process", "syndicated-loan-docs", "syndicated-loan-cases", "levfin-ecosystem"],
    appearsIn: [],
  },

  {
    slug: "syndicated-loan-players",
    title: "신디케이티드론 Ch.1 — 플레이어와 수익구조",
    titleEn: "Syndicated Loans Ch.1 — Players & Economics",
    entryType: "article",
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "MLA·에이전트·참여은행·기관투자자(CLO) — 신디케이트를 구성하는 4대 플레이어의 역할과 수익 구조. 수백 bps 스프레드가 어떻게 Arrangement Fee·Upfront Fee·Agency Fee로 쪼개지는지, Analyst가 첫날 밤 만드는 Fee Model의 실체.",
    excerptEn:
      "MLA, agent bank, participant banks, institutional investors (CLO) — the four players that make a syndicate and how they get paid. How hundreds of bps in spread split into arrangement fees, upfront fees, and agency fees, and what the Analyst builds on night one.",
    readingMinutes: 16,
    tags: ["MLA", "주선은행", "에이전트은행", "CLO", "어레인지먼트피", "업프론트피", "참여은행", "북러너", "코어레인저"],
    tagsEn: ["MLA", "Mandated Lead Arranger", "Agent Bank", "CLO", "Arrangement Fee", "Upfront Fee", "Participant Bank", "Bookrunner", "Co-Arranger"],
    sections: [],
    keyTerms: [
      {
        term: "Bookrunner (북러너)",
        termEn: "Bookrunner",
        definition: "북빌드(참여은행 모집)를 실행하고 투자자 주문을 취합하는 역할이다. 통상 MLA와 겹치며, 대형 딜에서는 복수의 Joint Bookrunner가 공동으로 수행한다. 공연 티켓 판매처럼 전체 수요를 한 곳에서 집계하고 배분을 결정하는 게이트키퍼 역할이다. 북러너가 되면 리그테이블 크레딧을 받아 은행의 시장 지위를 높이는 데도 기여한다.",
        definitionEn: "The bookrunner runs the bookbuild — soliciting and aggregating orders from potential lenders to fill the syndicate. It typically overlaps with the MLA role, and large deals often feature multiple joint bookrunners. Like a concert ticketing platform that centralizes all demand and decides allocation, the bookrunner controls the distribution process. Bookrunner credit feeds league table rankings, which in turn drive future deal flow and client relationships.",
      },
      {
        term: "에이전트은행 (Agent Bank)",
        termEn: "Agent Bank",
        definition: "대출 실행 후 차입자와 대출 참여기관 사이에서 이자 지급·원금 상환·코버넌트 모니터링·정보 전달을 대행하는 은행이다. 딜 클로징 후에도 만기까지 수수료(Agency Fee)를 받는 지속적인 수익원이다. 아파트 관리사무소처럼 입주(클로징) 이후에도 지속적으로 계약 이행을 관리하고 문제를 중재하는 역할이다. MLA와 에이전트를 동일 은행이 맡는 경우가 많다.",
        definitionEn: "After a deal closes, the agent bank acts as the operational hub between borrower and all lenders: processing interest payments, managing principal repayments, monitoring covenants, and distributing financial information. It collects an annual agency fee for the life of the loan — a durable, low-risk revenue stream after deal execution. Think of it as the building manager who keeps everything running after the tenants move in. The MLA and agent role are frequently held by the same institution.",
      },
      {
        term: "Arrangement Fee (어레인지먼트 피)",
        termEn: "Arrangement Fee",
        definition: "딜 주선의 대가로 MLA가 받는 일회성 수수료다. 딜 규모의 0.5~1.5% 수준으로, 전체 수수료 풀(Gross Spread)에서 가장 큰 비중을 차지한다. $1B 딜이면 $5M~$15M을 MLA가 가져간다. 수수료는 딜 클로징 시 일괄 지급되므로, MLA에게 딜 완성의 경제적 동기가 된다.",
        definitionEn: "The arrangement fee is a one-time upfront fee paid to the MLA for structuring and arranging the syndicated facility — typically 0.5–1.5% of deal size. On a $1B transaction, that's $5M–$15M in a single payment. It's the largest single component of the total fee pool and is paid at closing, creating a strong incentive for the arranger to get the deal done. Larger, more complex deals command higher arrangement fees.",
      },
      {
        term: "CLO (담보대출채권)",
        termEn: "CLO — Collateralized Loan Obligation",
        definition: "레버리지드론 100~200개를 포트폴리오로 묶어 AAA~Equity 트랑쉐로 재분류한 구조화 상품이다. 레버리지드론 시장의 65% 이상을 흡수하는 핵심 투자자로, CLO 매니저가 기존 대출을 사들여 포트폴리오를 구성한다. 위험도가 다른 층(트랑쉐)으로 나누어 파는 케이크처럼, 최상위 AAA 트랑쉐는 연기금이 사고 하위 Equity 트랑쉐는 헤지펀드가 매입한다. CLO 발행이 줄면 레버리지드론 시장 전체가 위축된다.",
        definitionEn: "A CLO pools 100–200 leveraged loans into a portfolio, then issues tranches from AAA down to Equity — each tranche carries different risk and return characteristics. CLOs absorb over 65% of all leveraged loan issuance, making them the market's dominant buyer. Think of it as a tiered cake: pension funds buy the AAA layers at near-risk-free yields while hedge funds take the equity slice for double-digit returns. When CLO formation slows, leveraged loan markets tighten significantly.",
      },
      {
        term: "Upfront Fee (업프론트 피)",
        termEn: "Upfront Fee",
        definition: "참여은행이 대출 참여의 대가로 지급받는 초기 수수료다. MLA의 어레인지먼트 피보다 낮은 수준으로, 참여 금액에 비례해 지급된다. 같은 딜에 더 많이 참여할수록 더 많은 업프론트 피를 받기 때문에, 참여은행의 참여 규모를 유도하는 인센티브로 작동한다. 소규모 참여행에게는 이자 스프레드에 추가되는 알파 수익원이다.",
        definitionEn: "The upfront fee is paid to each participating lender at closing in proportion to their commitment — a lower rate than the arranger's fee but a meaningful yield enhancement. Because larger commitments earn more upfront fee, it incentivizes deeper participation from each lender. For smaller regional banks that lack relationship ties to the borrower, the upfront fee can be the economic tipping point that makes participation attractive beyond the coupon spread alone.",
      },
    ],
    relatedSlugs: ["syndicated-loan-overview", "syndicated-loan-process", "syndicated-loan-docs", "syndicated-loan-cases"],
    appearsIn: [],
  },

  {
    slug: "syndicated-loan-process",
    title: "신디케이티드론 Ch.2 — 딜 프로세스 실무",
    titleEn: "Syndicated Loans Ch.2 — Deal Process in Practice",
    entryType: "article",
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "피치에서 클로징까지 8단계 전체 타임라인. 뷰티콘테스트→mandate→IM 작성→렌더 미팅→북빌드→배분→서명→클로징. Analyst가 IM의 각 섹션을 어떻게 쓰는지, Market Flex 조항이 왜 생겼는지, 북빌드 3× 커버리지란 무슨 뜻인지.",
    excerptEn:
      "The full 8-step timeline from pitch to closing. Beauty contest → mandate → IM writing → lender meetings → bookbuild → allocation → signing → closing. How Analysts write each IM section, why Market Flex exists, and what 3× bookbuild coverage actually means.",
    readingMinutes: 18,
    tags: ["뷰티콘테스트", "mandate", "IM", "정보제공각서", "북빌드", "마켓플렉스", "클로징", "CP", "선행조건"],
    tagsEn: ["Beauty Contest", "Mandate", "IM", "Information Memorandum", "Bookbuild", "Market Flex", "Closing", "CP", "Conditions Precedent"],
    sections: [],
    keyTerms: [
      {
        term: "IM (정보제공각서)",
        termEn: "IM — Information Memorandum",
        definition: "차입자의 사업 개요·재무 현황·투자 논거를 담은 잠재 참여은행 대상 제안서다. 신디케이티드론에서는 CIM(Confidential Information Memorandum)이라 부르기도 한다. Analyst가 주도해 80~120페이지 분량으로 작성하며, Executive Summary·업황 분석·재무 모델·리스크 섹션으로 구성된다. IM의 스토리텔링 품질이 북빌드 성공률을 직접 결정한다.",
        definitionEn: "The Information Memorandum is the deal's marketing document sent to potential lenders — covering business overview, financial performance, investment thesis, and risk factors. Often called a CIM (Confidential Information Memorandum) in leveraged deals, it runs 80–120 pages and is primarily written by the Analyst. Sections include executive summary, industry analysis, financial model, and risk disclosures. The quality of the IM's narrative directly drives bookbuild participation rates.",
      },
      {
        term: "Beauty Contest (뷰티콘테스트)",
        termEn: "Beauty Contest",
        definition: "발행사가 복수의 은행에게 피치를 받고 MLA를 선정하는 경쟁 과정이다. 각 은행은 자신만의 조건·팀·네트워크를 어필해 딜을 따낸다. 오디션 프로그램처럼 은행들이 차별화된 가격, 구조, 배분 능력을 경쟁적으로 제시하는 과정이다. 선정된 MLA는 Mandate Letter를 받고 딜 설계를 본격적으로 시작한다.",
        definitionEn: "A beauty contest is the competitive pitch process where a borrower invites multiple banks to present their proposed terms, team, and distribution capabilities before selecting the MLA. Like an audition, each bank differentiates itself on pricing, structure, and relationship depth. The winning bank receives a mandate letter and begins formal deal structuring. The beauty contest outcome often hinges on the bank's league table credibility and the MD's personal relationship with the CFO or treasurer.",
      },
      {
        term: "Lender Meeting (렌더 미팅)",
        termEn: "Lender Meeting",
        definition: "IM 배포 후 차입자 경영진과 잠재 참여은행들이 만나는 투자자 설명회다. Q&A를 통해 코버넌트·재무 전망에 대한 신뢰를 쌓는 핵심 과정이다. 회사 신규 상장 시 IR 로드쇼와 유사하게, 경영진이 직접 회사의 비전과 재무 건전성을 어필한다. 렌더 미팅의 성과가 북빌드 커버리지에 즉각 반영된다.",
        definitionEn: "Lender meetings bring the borrower's senior management face-to-face with potential syndicate participants after the IM has been distributed. Like a roadshow for an IPO, management presents the company's strategy and financials and fields detailed Q&A on covenants, projections, and risk factors. The quality of management's presentation and responsiveness directly shapes lender confidence, which translates into bookbuild demand.",
      },
      {
        term: "북빌드 커버리지",
        termEn: "Bookbuild Coverage",
        definition: "북빌드에서 모집된 참여 의향 금액이 목표 금액의 몇 배인지를 나타내는 수치다. 3× 커버리지라면 목표의 세 배 수요가 몰린 것이다. 높을수록 가격 우위가 발행사에게 넘어가 스프레드 인하·조건 개선이 가능하다. 반대로 1× 미만이면 딜이 미달되거나 MLA가 자체 보유해야 하는 상황이 발생한다.",
        definitionEn: "Bookbuild coverage is the ratio of orders received to the target facility size. A 3× coverage means demand is three times the amount being raised, giving the borrower pricing power to tighten spreads or improve terms. Coverage above 1× confirms the deal will close; coverage below 1× risks a shortfall that the underwriting bank must absorb. Reporting strong coverage in early bookbuild is itself a marketing signal that attracts additional lenders chasing a successful deal.",
      },
      {
        term: "선행조건 (CP)",
        termEn: "Conditions Precedent",
        definition: "대출 실행(Closing) 직전 충족해야 하는 법적·재무적 조건들이다. 대표적으로 정관 확인, 담보 등록, 보험 증빙, 최신 재무제표 제출 등이 있다. 조건 중 하나라도 미충족이면 대출 실행이 지연되거나 취소된다. 에이전트은행이 CP 충족 여부를 확인하고 모든 참여은행에게 통보하는 역할을 맡는다.",
        definitionEn: "Conditions Precedent are the legal and financial requirements that must be satisfied before the loan is drawn down. Typical CPs include confirmation of corporate authorizations, registration of security interests, delivery of audited financials, and evidence of insurance. Any unsatisfied CP blocks funding until resolved. The agent bank verifies each CP item and confirms satisfaction to all syndicate members, triggering the disbursement of funds.",
      },
    ],
    relatedSlugs: ["syndicated-loan-overview", "syndicated-loan-players", "syndicated-loan-docs", "syndicated-loan-cases"],
    appearsIn: [],
  },

  {
    slug: "syndicated-loan-docs",
    title: "신디케이티드론 Ch.3 — 문서와 코버넌트",
    titleEn: "Syndicated Loans Ch.3 — Documentation & Covenants",
    entryType: "article",
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "Credit Agreement 15개 조항 완전 해부. LIBOR→SOFR 전환의 실무 의미, Financial Covenant(레버리지·커버리지·FCCR) 계산법, Cov-Lite가 어떻게 은행의 눈을 멀게 하는가, Amendment & Waiver 투표 메커니즘.",
    excerptEn:
      "Complete dissection of the 15-clause Credit Agreement. The practical meaning of LIBOR→SOFR transition, how to calculate financial covenants (leverage, coverage, FCCR), how Cov-Lite blinds banks to risk, and the amendment & waiver voting mechanism.",
    readingMinutes: 17,
    tags: ["크레딧어그리먼트", "SOFR", "LIBOR", "파이낸셜코버넌트", "레버리지비율", "이자보상비율", "Cov-Lite", "어멘드먼트", "웨이버"],
    tagsEn: ["Credit Agreement", "SOFR", "LIBOR", "Financial Covenant", "Leverage Ratio", "Interest Coverage", "Cov-Lite", "Amendment", "Waiver"],
    sections: [],
    keyTerms: [
      {
        term: "크레딧 어그리먼트",
        termEn: "Credit Agreement",
        definition: "신디케이티드론의 핵심 법률 문서로, 대출 조건·코버넌트·이자 계산·기한이익 상실·대출인 교체 절차 등 15개 이상의 조항을 규정한다. LMA(영국) 또는 LSTA(미국) 표준 양식을 기반으로 하며, 실제 협상에서 수십 개의 조항이 수정된다. 부동산 매매 계약처럼 당사자 간 권리와 의무를 완전히 규정하는 계약서로, 딜 구조의 모든 것이 여기에 담긴다. 문서 길이는 통상 200~400페이지에 달한다.",
        definitionEn: "The Credit Agreement is the master legal document governing a syndicated loan — covering pricing, drawdown mechanics, covenant obligations, events of default, and lender transfer procedures across 15+ articles. It follows LMA (UK) or LSTA (US) standard forms, with negotiated modifications added for each deal. Think of it as the comprehensive title deed and operating manual for the loan: every right and obligation of every party for the loan's full life is defined here. Typical Credit Agreements run 200–400 pages.",
      },
      {
        term: "SOFR",
        termEn: "SOFR — Secured Overnight Financing Rate",
        definition: "미국 국채 레포 시장 기반의 무위험 기준금리다. 2023년 LIBOR 폐지 이후 USD 변동금리 대출의 공식 기준점으로 전환됐다. 'SOFR + Spread'로 레버리지드론의 금리가 결정된다. LIBOR가 은행 간 호가 기반이었다면, SOFR는 실제 거래 기반이라 조작 가능성이 없는 것이 핵심 장점이다.",
        definitionEn: "SOFR is the overnight benchmark rate based on U.S. Treasury repo transactions, replacing LIBOR as the reference rate for USD-denominated floating-rate loans after LIBOR's official cessation in 2023. Leveraged loan rates are now quoted as SOFR + a credit spread. Unlike LIBOR, which was based on bank submissions vulnerable to manipulation (as the 2012 scandal revealed), SOFR is grounded in actual transaction data, making it more robust and trustworthy as a global benchmark.",
      },
      {
        term: "파이낸셜 코버넌트",
        termEn: "Financial Covenant",
        definition: "매 분기 검사하는 재무 약정(Maintenance Covenant)이다. 레버리지 비율·이자보상비율·최소 유동성 등이 대표적이며, 위반 시 즉각 기한이익 상실 사유가 될 수 있다. 자동차 정기검사처럼 분기마다 재무 건전성을 점검하는 장치로, 문제가 생기면 은행이 조기에 개입할 수 있는 트리거가 된다. Cov-Lite 구조에서는 이 정기검사 의무가 없어져 은행이 문제를 늦게 발견하게 된다.",
        definitionEn: "Financial covenants are maintenance tests run every quarter — typically covering maximum leverage ratio, minimum interest coverage, and sometimes minimum liquidity. A breach triggers an Event of Default, giving lenders the right to accelerate repayment or renegotiate terms. Think of them as quarterly MOT tests for the borrower's financial health: they force early intervention before problems compound. In Cov-Lite structures, these quarterly checkups are removed, leaving lenders to discover distress only when it's already severe.",
      },
      {
        term: "Amendment & Waiver",
        termEn: "Amendment & Waiver",
        definition: "대출 조건 변경(Amendment) 또는 코버넌트 위반을 일시 용인(Waiver)하는 행위다. 단순 웨이버는 과반수(50%+) 대출인 동의로 가능하고, 핵심 조건(금리·만기 변경)은 슈퍼마조리티(통상 2/3 이상) 동의가 필요하다. 집 수리 공사처럼 건물 소유자(차입자)가 임차인 대다수(대출인들)의 동의를 받아 구조를 변경하는 과정이다. 에이전트은행이 투표를 집계하고 공식 통보한다.",
        definitionEn: "An Amendment formally changes loan terms; a Waiver temporarily suspends enforcement of a covenant breach. Both require lender votes: routine changes pass with simple majority (50%+), while modifications to core economic terms like rate or maturity require supermajority (typically 66–75%). Think of it as a homeowner needing tenant consent to structurally modify a building. The agent bank coordinates the vote, tracks responses, and issues the official notice once the required threshold is met.",
      },
      {
        term: "Cov-Lite",
        termEn: "Covenant-Lite",
        definition: "재무약정(Maintenance Covenant) 없이 Incurrence 조건만 있는 대출 구조다. 차입자는 분기마다 재무 테스트를 받지 않아 유리하지만, 은행은 문제를 조기에 감지하기 어렵다. 2014년 이후 레버리지드론의 80% 이상이 Cov-Lite 구조로 발행됐다. 정기검진 없이 큰 병이 될 때까지 방치되는 것처럼, Cov-Lite 환경에서 신용 악화 기업들은 파산 직전까지 은행 개입이 없는 경우가 많다.",
        definitionEn: "Covenant-lite loans omit Maintenance Financial Covenants — the quarterly tests that let lenders catch deterioration early. Instead, they include only Incurrence Covenants that trigger only when the borrower takes an affirmative action (issuing new debt, paying dividends). Since 2014, over 80% of leveraged loans have been cov-lite. Like skipping annual medical checkups, cov-lite structures allow credit deterioration to go undetected until it's severe. This was a key factor amplifying losses in the 2020 and 2022 credit stress episodes.",
      },
    ],
    relatedSlugs: ["syndicated-loan-overview", "syndicated-loan-players", "syndicated-loan-process", "syndicated-loan-cases"],
    appearsIn: [],
  },

  {
    slug: "syndicated-loan-cases",
    title: "신디케이티드론 Ch.4 — 케이스스터디: 성공 vs 실패",
    titleEn: "Syndicated Loans Ch.4 — Case Studies: Win vs Fail",
    entryType: "article",
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "ARM Holdings $10B(2023) 성공과 Toys'R'Us $5B(2005) 파산 — 같은 신디케이티드론 구조, 정반대의 결말. 두 딜의 IM·코버넌트·투자자 배분·리파이낸싱 전략을 나란히 해부하고, Analyst가 당시 놓쳤어야 했을 신호들을 MD 관점에서 짚는다.",
    excerptEn:
      "ARM Holdings $10B (2023) success vs Toys'R'Us $5B (2005) bankruptcy — same syndicated loan structure, opposite outcomes. A side-by-side dissection of IM, covenants, investor allocation, and refinancing strategy, plus the signals an Analyst should have flagged from the MD's perspective.",
    readingMinutes: 20,
    tags: ["ARM홀딩스", "토이저러스", "케이스스터디", "레버리지드론", "파산", "Cov-Lite", "리파이낸싱", "LBO", "신디케이션성공"],
    tagsEn: ["ARM Holdings", "Toys'R'Us", "Case Study", "Leveraged Loan", "Bankruptcy", "Cov-Lite", "Refinancing", "LBO", "Syndication Success"],
    sections: [],
    keyTerms: [
      {
        term: "신디케이션 성공 요인",
        termEn: "Syndication Success Factors",
        definition: "IM의 재무 스토리 설득력, 발행사 신용도, 시장 타이밍, 북빌드 전략(경쟁 오더 유도)의 네 가지가 신디케이션 성패를 결정한다. ARM Holdings의 2023 $10B 신디케이션은 반도체 산업의 구조적 성장 내러티브와 소프트뱅크 상장 준비 맥락이 맞물려 3× 이상 오버서브되었다. 성공적인 신디케이션은 단순히 자금을 모으는 게 아니라 시장에 '이 딜은 좋은 딜이다'라는 신호를 보내는 행위다.",
        definitionEn: "Four factors determine syndication outcomes: the IM's financial narrative quality, issuer credit profile, market timing, and bookbuild strategy (generating competitive order flow). ARM Holdings' 2023 $10B syndication succeeded because the semiconductor structural growth story, combined with SoftBank's IPO preparation backdrop, drove over 3× oversubscription. A successful syndication isn't just about raising money — it signals to the market that a deal has strong institutional endorsement.",
      },
      {
        term: "재파이낸싱 (Refinancing)",
        termEn: "Refinancing",
        definition: "기존 부채를 새 조건(금리·만기·코버넌트)으로 교체하는 과정이다. 금리 하락기에는 차입자에게 유리한 조건으로 재파이낸싱이 가능하지만, 시장 악화 시 만기 도래 부채를 제때 교체하지 못하는 위험이 발생한다. Toys R Us는 e-commerce 경쟁 심화로 영업이익이 급감한 시점에 $5B 레버리지드론 만기가 도래했고, 재파이낸싱 실패가 직접적인 파산 원인이 됐다. 재파이낸싱 창이 언제 열리고 닫히는지 모니터링하는 것이 LevFin 뱅커의 핵심 업무다.",
        definitionEn: "Refinancing replaces existing debt with new obligations at revised terms — lower rate, extended maturity, or improved covenants. In falling-rate environments, borrowers can reduce interest costs significantly. Conversely, when markets are stressed, rolling maturing debt becomes dangerous. Toys R Us had $5B in leveraged loans come due as Amazon was destroying its business model; unable to refinance at any workable rate, it filed for bankruptcy in 2017. Tracking refinancing windows is a core LevFin banker responsibility.",
      },
      {
        term: "전략적 리스크 (사업 리스크)",
        termEn: "Business / Operational Risk",
        definition: "높은 레버리지 구조에서 사업 모델 붕괴는 즉각적인 디폴트로 직결된다. Toys R Us는 물리적 매장 중심 사업 모델이 Amazon·대형마트의 온라인 확장에 의해 근본적으로 무력화됐다. 줄타기 선수가 높을수록 흔들림을 견디기 어렵듯, 레버리지가 높을수록 사업 리스크를 허용할 여유가 없다. LBO·신디케이티드론 실사 단계에서 디지털 전환·경쟁 환경·고객 집중도 등 전략적 리스크를 핵심 항목으로 점검해야 한다.",
        definitionEn: "In a high-leverage structure, business model disruption translates directly into default without any buffer to absorb shocks. Toys R Us saw its entire physical-retail model become economically unviable as Amazon and big-box retailers expanded online. The more leverage you carry, the less room you have to survive strategic disruption — like a tightrope walker at greater height. Syndicated loan and LBO due diligence must treat digital transformation threats, competitive dynamics, and customer concentration as Tier-1 risks.",
      },
      {
        term: "보유 기간 (Holding Period)",
        termEn: "Holding Period",
        definition: "PE 투자 관점에서 대출 실행(또는 인수)에서 Exit까지의 기간이다. 통상 3~7년이며, 이 기간 동안 EBITDA 성장·Deleveraging·Multiple Expansion이 에쿼티 가치를 높인다. ARM Holdings는 소프트뱅크 보유 기간(2016~2023) 중 반도체 설계 IP 가치가 급성장했고, 상장 전 $10B 신디케이션으로 재무 유연성을 확보해 성공적인 IPO를 준비했다. 보유 기간이 너무 길어지면 J-커브 효과로 IRR이 급락한다.",
        definitionEn: "The holding period is the time from acquisition (or loan funding) to exit, typically 3–7 years. During this window, EBITDA growth, deleveraging, and multiple expansion build equity value. ARM Holdings' holding period under SoftBank (2016–2023) saw semiconductor IP value surge dramatically; the pre-IPO $10B syndication provided the financial flexibility to prepare a successful 2023 listing. Extending the hold beyond plan compresses IRR significantly, even if MOIC remains strong.",
      },
      {
        term: "디폴트율 (Default Rate)",
        termEn: "Default Rate",
        definition: "전체 레버리지드론·HY채권 중 12개월 내 디폴트가 발생한 비율이다. 경기 정상기 1~2%, 경기침체·위기 시 10~15%까지 급등한다. Moody's·S&P가 분기별로 추적 발표하며, LevFin 프라이싱의 기초 자료로 활용된다. Toys R Us 파산은 소매업 레버리지드론 전반의 디폴트 우려를 높여 해당 섹터 스프레드를 일시 급등시켰다.",
        definitionEn: "The default rate measures what percentage of leveraged loans or HY bonds defaulted within the past 12 months. In normal conditions it runs 1–2%; during recessions or credit crises it spikes to 10–15%. Moody's and S&P publish quarterly default rate reports, which serve as foundational inputs for LevFin pricing models and CLO stress testing. Sector-level default spikes — like Toys R Us triggering retail LBO repricing — can ripple through an entire segment's spread levels.",
      },
    ],
    relatedSlugs: ["syndicated-loan-overview", "syndicated-loan-players", "syndicated-loan-process", "syndicated-loan-docs"],
    appearsIn: [],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // ECM 시리즈 — Overview + IPO 핵심 6챕터 + 상품 5챕터
  // ────────────────────────────────────────────────────────────────────────────

  {
    slug: "ecm-overview",
    title: "ECM 개요 — 주식자본시장 완전 입문",
    titleEn: "ECM Overview — The Complete Introduction to Equity Capital Markets",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO는 회사의 데뷔 무대가 아니다 — 소유권 구조, 지배구조, 자금 조달 방식이 영구적으로 바뀌는 사건이다. 글로벌 ECM 시장 $9조+, IPO·팔로우온·전환사채 세 축, 발행사·투자자·ECM 뱅커 삼각구조, 그리고 WeWork 철회부터 Ant Group 48시간 전 취소까지 — ECM의 전체 지도.",
    excerptEn:
      "An IPO isn't a company's debut party — it's a permanent transformation of ownership structure, governance, and capital access. Global ECM market $9T+, three pillars of IPO / follow-on / convertibles, the issuer–investor–ECM banker triangle, and from WeWork's withdrawal to Ant Group's cancellation 48 hours before listing — the complete ECM map.",
    readingMinutes: 16,
    tags: ["ECM", "IPO", "주식자본시장", "공모", "팔로우온", "전환사채", "그린슈", "북빌딩", "밸류에이션", "WeWork", "Ant Group"],
    tagsEn: ["ECM", "IPO", "Equity Capital Markets", "Public Offering", "Follow-on", "Convertible", "Greenshoe", "Book Building", "Valuation", "WeWork", "Ant Group"],
    sections: [],
    keyTerms: [
      {
        term: "ECM (주식자본시장)",
        termEn: "ECM — Equity Capital Markets",
        definition: "ECM은 기업이 주식을 발행해 자금을 조달하는 1차 시장과, 그 거래를 중개하는 IB 팀명을 동시에 가리킨다. DCM(채권)이 '돈 빌려줄래요?'라면 ECM은 '우리 회사 지분 살래요?'다. 주식 발행은 상환 의무가 없는 대신 기존 주주의 지분이 희석(Dilution)된다. ECM의 세 축은 IPO(첫 공개), 팔로우온(추가 발행), 전환사채(CB)다.",
        definitionEn: "ECM refers to both the primary market where companies raise capital by issuing equity, and the IB team that facilitates it. If DCM (bonds) is 'will you lend us money?', ECM is 'want to own a piece of our company?' Equity has no repayment obligation but dilutes existing shareholders. The three ECM pillars are IPO (first public offering), follow-on (additional issuance), and convertible bonds (CB).",
      },
      {
        term: "IPO (기업공개)",
        termEn: "IPO — Initial Public Offering",
        definition: "IPO는 비상장 기업이 처음으로 일반 투자자에게 주식을 공개 판매하고 거래소에 상장하는 것이다. 단순한 '데뷔 무대'가 아니라 소유권 구조·지배구조·정보 공시 의무가 영구적으로 바뀌는 사건이다. 상장 후에는 매 분기 실적 공시와 시장의 감시를 받게 된다. IPO로 조달된 자금은 성장 투자·부채 상환·기존 주주 현금화 등에 사용된다.",
        definitionEn: "An IPO is when a private company first sells shares to the general public and lists on an exchange. It's not merely a 'debut party' — it's a permanent transformation of ownership structure, governance, and disclosure obligations. After listing, the company faces quarterly earnings releases and constant market scrutiny. Proceeds fund growth, debt repayment, or existing shareholder liquidity.",
      },
      {
        term: "팔로우온 (Follow-on Offering)",
        termEn: "Follow-on Offering",
        definition: "상장 이후 추가로 주식을 발행해 자금을 조달하는 방식이다. 크게 네 가지: ABB(하룻밤 속전속결), 블록 트레이드(기존 주주 대량 매각), 유상증자(기존 주주 우선 청약), ATM(수시 소량 발행). ABB가 PE 엑싯에 가장 흔하고, 유상증자는 한국 시장에서 자주 활용된다. 신주 발행 시 기존 주주 지분이 희석되어 주가 하방 압력이 생긴다.",
        definitionEn: "Raising additional capital by issuing more shares after a company is already listed. Four main forms: ABB (overnight, fastest), block trade (large shareholder sale), rights issue (existing shareholder subscription), ATM (ongoing small issuances). ABB is most common for PE exits; rights issues dominate Korean markets. New share issuance dilutes existing shareholders, creating downward price pressure.",
      },
      {
        term: "전환사채 (CB — Convertible Bond)",
        termEn: "CB — Convertible Bond",
        definition: "채권(낮은 쿠폰으로 원금 보장)과 주식 전환권(주가 상승 시 혜택)을 결합한 하이브리드 상품이다. 발행사는 일반 채권보다 낮은 금리로 자금을 조달하고, 투자자는 채권 보호와 주가 상승 시 전환 수익을 동시에 노린다. ECM과 DCM의 경계에 있어 두 팀이 함께 구조를 설계한다. 전환가격은 발행 시 주가보다 20~40% 높게 설정되는 것이 일반적이다.",
        definitionEn: "A hybrid combining bond protection (low coupon, principal guaranteed) with an equity call option (benefits if share price rises). Issuers borrow at below-market rates; investors get downside protection plus upside participation. Sits at the ECM-DCM boundary, requiring both teams. Conversion price is typically set 20–40% above the stock price at issuance.",
      },
      {
        term: "그린슈 옵션 (Greenshoe Option)",
        termEn: "Greenshoe Option (Over-Allotment Option)",
        definition: "IPO 시 주관사가 공모 규모의 최대 15%를 추가로 판매할 수 있는 권리다. 상장 후 30일 안정화 기간에 주가가 공모가 아래로 떨어지면 시장에서 매수(가격 지지), 공모가 이상이면 옵션을 행사해 추가 주식을 발행한다. 투자자 보호와 가격 안정화라는 두 가지 기능을 동시에 수행한다. 이름은 최초 도입 기업 'Green Shoe Manufacturing Company'에서 유래했다.",
        definitionEn: "The right for underwriters to sell up to 15% more shares than the original IPO size. During the 30-day stabilization window: if stock falls below IPO price, the underwriter buys in the market (price support); if it stays above, the underwriter exercises the option to issue extra shares. Simultaneously protects investors and stabilizes post-IPO price. Named after Green Shoe Manufacturing Company.",
      },
      {
        term: "희석 (Dilution)",
        termEn: "Dilution (EPS Dilution)",
        definition: "신주 발행으로 총 발행 주식수가 늘어나 기존 주주의 지분율과 주당순이익(EPS)이 낮아지는 현상이다. 예를 들어 1,000만 주 기업이 200만 주를 추가 발행하면 기존 주주의 지분율은 5분의 1 희석된다. 희석은 팔로우온·CB 전환·스톡옵션 행사 시 모두 발생한다. 발행사가 조달 자금으로 EPS를 늘릴 수 있다는 논리를 제시하지 못하면 주가 하락으로 이어지는 것이 일반적이다.",
        definitionEn: "The reduction in existing shareholders' ownership percentage and EPS when new shares are issued. For example, if a company with 10 million shares issues 2 million more, existing shareholders are diluted by one-fifth. Dilution occurs with follow-on offerings, CB conversions, and stock option exercises. Unless management can argue the new capital will grow EPS, dilution typically leads to stock price decline.",
      },
    ],
    relatedSlugs: ["ecm-ipo-issuers", "ecm-ipo-investors", "ecm-ipo-valuation", "ecm-ipo-process", "ecm-ipo-bookbuilding", "ecm-ipo-post"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-issuers",
    title: "ECM Ch.1 — 발행사: 누가, 왜 IPO를 하는가",
    titleEn: "ECM Ch.1 — Issuers: Who IPOs and Why",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "VC 백 스타트업, PE 엑싯, 국영기업 민영화, 계열사 분리상장, 성숙 성장기업 — 5가지 발행사 유형의 IPO 동기는 완전히 다르다. PE 펀드 만기가 다 됐거나, 창업자가 현금이 필요하거나, 정부가 재정 충당이 필요하거나. 뱅커는 그 동기를 파악하는 것부터 시작한다. IPO 타이밍 3요소, 18개월 체크리스트, Coupang·크래프톤·LG에너지솔루션 케이스.",
    excerptEn:
      "VC-backed startups, PE exits, SOE privatizations, conglomerate spin-offs, mature growth companies — five issuer types with completely different IPO motivations. PE fund approaching maturity, founder liquidity, government funding needs. The banker's first job is diagnosing the real motive. Three timing factors, the 18-month checklist, and the Coupang, Krafton, and LG Energy Solution cases.",
    readingMinutes: 14,
    tags: ["IPO 발행사", "PE 엑싯", "SOE 민영화", "VC 백 스타트업", "쿠팡", "크래프톤", "LG에너지솔루션", "IPO 타이밍", "계열사 분리상장"],
    tagsEn: ["IPO Issuers", "PE Exit", "SOE Privatization", "VC-backed", "Coupang", "Krafton", "LG Energy Solution", "IPO Timing", "Spin-off"],
    sections: [],
    keyTerms: [
      {
        term: "PE 엑싯 (IPO를 통한)",
        termEn: "PE Exit via IPO",
        definition: "사모펀드(PE)가 보유 중인 피투자 기업의 지분을 IPO를 통해 현금화하는 방식이다. 펀드 만기(보통 7~10년)가 가까워질수록 엑싯 압박이 커진다. 상장 직후에는 락업(보통 180일) 때문에 지분을 바로 팔지 못하고, 락업 만료 후 ABB(Accelerated Book Build)로 잔여 지분을 추가 매각하는 것이 일반적이다. PE가 대주주로 남아 있는 한 시장은 오버행(Overhang)을 우려해 주가에 할인을 적용한다.",
        definitionEn: "The process by which a private equity fund monetizes its stake in a portfolio company through an IPO. The closer a fund is to its maturity (typically 7–10 years), the greater the pressure to exit. Immediately after listing, the PE sponsor is typically locked up (often 180 days) and cannot sell. After lock-up expiry, residual stakes are usually sold via ABB. As long as the PE remains a major shareholder, the market applies an overhang discount to the stock.",
      },
      {
        term: "VC 백드 IPO",
        termEn: "VC-backed IPO",
        definition: "벤처캐피탈이 투자한 스타트업이 주식시장에 상장하는 IPO 유형이다. 전통적인 이익 기반 밸류에이션보다 매출 성장률을 기반으로 한 EV/Revenue 배수가 주로 사용된다. 수익(Profit)이 없어도 성장 스토리만으로 상장이 가능한 경우가 있다. 창업자와 초기 투자자의 락업이 만료되는 시점(D+180일 이후)에 대규모 오버행이 형성될 수 있다.",
        definitionEn: "An IPO by a venture capital-backed startup. Valuation typically relies on EV/Revenue multiples based on revenue growth rates rather than traditional profit-based metrics. Profitability is not required — growth story alone can justify a listing. A significant overhang risk emerges when founder and early investor lock-ups expire, typically 180 days after listing.",
      },
      {
        term: "SOE 민영화 IPO",
        termEn: "SOE Privatization IPO",
        definition: "정부가 소유한 국영기업(State-Owned Enterprise)의 지분 일부를 주식시장에 상장해 민간 투자자에게 매각하는 방식이다. 정부는 재정 충당과 기업 경영 효율화를 동시에 추구한다. 상장 후에도 정부가 최대 주주 지위를 유지하는 경우가 많다. Saudi Aramco, LG에너지솔루션, 한국전력 등의 사례가 대표적이다.",
        definitionEn: "The sale of a partial stake in a government-owned enterprise to public market investors via IPO. The government pursues dual objectives: fiscal funding and operational efficiency improvement. After listing, the government typically retains majority ownership. Notable examples include Saudi Aramco, LG Energy Solution, and KEPCO.",
      },
      {
        term: "스핀오프 / 분리상장",
        termEn: "Spin-off / Carve-out Listing",
        definition: "대기업(모회사)이 자회사 지분의 일부를 IPO를 통해 주식시장에 상장하는 구조다. 모회사는 지배 지분을 유지하면서도 자회사에 독립적인 시장 밸류에이션을 부여받는다. 사업 다각화 기업이 각 사업부의 가치를 재평가받기 위해 활용하는 전략이다. 상장된 자회사는 독자적인 자본 조달 능력을 갖추게 된다.",
        definitionEn: "A structure in which a parent company lists a portion of a subsidiary's shares via IPO. The parent retains a controlling stake while the subsidiary receives an independent public market valuation. Conglomerates use this strategy to unlock value across diversified business units. The listed subsidiary gains independent access to capital markets.",
      },
      {
        term: "IPO 타이밍 3요소",
        termEn: "IPO Timing Three Factors",
        definition: "IPO 실행의 최적 시점을 결정하는 세 가지 핵심 조건이다. 첫째, 자본시장 환경(VIX 지수·IG 스프레드 등 리스크 지표). 둘째, 섹터 멀티플(유사 상장 기업들의 현재 주가 수준). 셋째, 발행사의 재무 준비도(2~3년치 감사 재무제표, 거버넌스 체계 완비). 세 요소가 동시에 맞아떨어질 때 '윈도우가 열린다'고 표현하며, 이 창을 놓치면 6~12개월을 기다려야 할 수 있다.",
        definitionEn: "The three key conditions that determine the optimal timing for an IPO execution. First, capital market conditions (risk indicators such as VIX and IG spreads). Second, sector multiples (current price levels of comparable listed companies). Third, the issuer's financial readiness (2–3 years of audited financials and complete governance structures). When all three align, bankers say the 'window is open' — missing it may mean waiting another 6–12 months.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-investors", "ecm-ipo-valuation", "ecm-ipo-process"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-investors",
    title: "ECM Ch.2 — 투자자: 앵커·QIB·리테일의 삼층 구조",
    titleEn: "ECM Ch.2 — Investors: The Anchor–QIB–Retail Three-Layer Structure",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO 투자자는 DCM과 완전히 다른 생태계다. 상장 전 확약하는 앵커(Temasek·GIC·국민연금), 북빌딩 오더를 제출하는 QIB(자산운용사·헤지펀드), 공모 물량 30%를 받는 리테일 — 세 층위의 역할·락업·배분 전략이 다르다. 오더 유형 4가지, High Quality Book의 조건, NIC 협상까지.",
    excerptEn:
      "IPO investors are a completely different ecosystem from DCM. Anchors who commit before listing (Temasek, GIC, NPS), QIBs submitting orders during book-building (asset managers, hedge funds), and retail receiving 30% of the float — three layers with different roles, lock-ups, and allocation strategies. Four order types, High Quality Book criteria, and NIC negotiation.",
    readingMinutes: 13,
    tags: ["IPO 투자자", "앵커 투자자", "QIB", "기관투자자", "리테일 공모", "오더북", "락업", "배분 전략", "Temasek", "GIC", "국민연금"],
    tagsEn: ["IPO Investors", "Anchor Investor", "QIB", "Institutional", "Retail Offering", "Order Book", "Lock-up", "Allocation", "Temasek", "GIC", "NPS"],
    sections: [],
    keyTerms: [
      {
        term: "앵커 투자자",
        termEn: "Anchor Investor",
        definition: "IPO 공모 물량의 일부를 상장 전에 사전 확약하는 기관 투자자다. Temasek·GIC·국민연금 등 정부계 펀드가 대표적이다. 딜 신뢰도를 높여 다른 투자자들을 유인하는 '마중물' 역할을 한다. 배분 우선권을 받는 대신 락업 기간이 가장 길며(일반적으로 90일 이상), 확약 자체가 시장에 강력한 신호를 보낸다.",
        definitionEn: "An institutional investor that commits to subscribe for a portion of IPO shares before listing. Sovereign wealth funds like Temasek, GIC, and NPS are typical examples. They serve as a 'magnet' that boosts deal credibility and attracts other investors. In exchange for allocation priority, anchor investors accept the longest lock-up periods (typically 90+ days), and their commitment sends a strong signal to the market.",
      },
      {
        term: "QIB (적격 기관투자자)",
        termEn: "QIB (Qualified Institutional Buyer)",
        definition: "미국 증권법 Rule 144A에서 정의하는 적격 기관투자자로, 재량으로 운용하는 자산이 1억 달러 이상인 기관을 말한다. 헤지펀드·뮤추얼펀드·연기금 등이 해당된다. QIB만이 Rule 144A 사모 발행 증권을 취득할 수 있어, 미국 이외 발행사가 미국 기관투자자에게 접근하는 핵심 경로다. 미국 IPO 북빌딩에 참여하려면 QIB 자격이 요구된다.",
        definitionEn: "A qualified institutional buyer as defined under US securities law Rule 144A — an institution that manages at least $100 million in securities on a discretionary basis. Hedge funds, mutual funds, and pension funds qualify. Only QIBs can purchase Rule 144A privately placed securities, making QIB status the critical gateway for non-US issuers to access US institutional investors. QIB eligibility is required to participate in US IPO book-building.",
      },
      {
        term: "의무보유 확약",
        termEn: "Lock-up Commitment (Mandatory Hold)",
        definition: "한국 IPO 시장의 특수 제도로, 공모주 배분 시 일정 기간 동안 매각 금지를 확약한 투자자에게 더 많은 물량을 우선 배분한다. D+15일, D+30일, D+90일, D+180일 구간별로 가중치가 차등 적용된다. 확약 기간이 길수록 수요의 '질'이 높아진다고 평가하며, 상장 후 주가 안정성을 높이는 효과가 있다. 한국거래소(KRX)와 금융감독원의 배분 가이드라인에 반영되어 있다.",
        definitionEn: "A system unique to Korean IPO markets where investors who commit to mandatory holding periods receive priority and larger allocations of public offering shares. Weighted incentives apply across four holding periods: D+15, D+30, D+90, and D+180 days. Longer commitment periods are considered indicators of higher 'order quality,' improving post-listing price stability. This mechanism is reflected in KRX and FSC allocation guidelines.",
      },
      {
        term: "오더 유형 4가지",
        termEn: "Four Order Types in IPO Book-Building",
        definition: "IPO 북빌딩에서 기관투자자가 제출하는 수요 오더의 네 가지 유형이다. Strike Order는 가격에 상관없이 최대로 참여하는 오더, Limit Order는 특정 가격 이하에서만 참여하는 오더, Step-down Order는 가격이 높아질수록 수량을 줄이는 오더, Capped Order는 특정 가격 이상에서는 불참하는 오더다. 신디케이트는 오더 구성을 분석해 수요 곡선을 도출하고 공모가를 결정한다.",
        definitionEn: "The four types of demand orders submitted by institutional investors during IPO book-building. A Strike Order participates at any price for maximum allocation. A Limit Order only participates below a specified price. A Step-down Order reduces quantity as price increases. A Capped Order withdraws entirely above a specified price. The syndicate analyzes the order composition to construct the demand curve and determine the offer price.",
      },
      {
        term: "IPO 배분 (Allocation)",
        termEn: "IPO Allocation",
        definition: "오버부킹 시 주관사가 오더 품질·투자자 관계·보유 기간 의지를 종합해 주식을 배정하는 과정이다. 'High Quality Book'은 락업 기간이 긴 앵커 투자자와 장기 보유 의향을 가진 기관의 비중이 높은 상태를 의미한다. 빠른 매도가 예상되는 헤지펀드에는 적게 배분하는 것이 일반적이다. 배분 결정은 발행사와 주관사 간의 관계를 좌우하는 핵심 정치적 과정이기도 하다.",
        definitionEn: "The process by which the lead manager allocates shares when a deal is oversubscribed, weighing order quality, investor relationships, and intended holding period. A 'High Quality Book' means a high proportion of long-term anchor investors and institutions with genuine buy-and-hold intent. Hedge funds expected to flip quickly typically receive smaller allocations. Allocation decisions are a critical political process that shapes the issuer-banker relationship.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-issuers", "ecm-ipo-bookbuilding", "ecm-ipo-post"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-valuation",
    title: "ECM Ch.3 — 밸류에이션: Football Field와 5가지 방법론",
    titleEn: "ECM Ch.3 — Valuation: The Football Field and Five Methodologies",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO 가격은 과학이 아닌 협상이다. P/E·EV/EBITDA·EV/Revenue·DCF·선행 거래 5가지 방법론이 서로 다른 가격을 도출하고, 뱅커는 어떤 Comp를 포함하고 어떤 것을 제외할지로 Football Field를 설계한다. Rivian이 어떻게 매출 없이 $660억 밸류를 받았나, 크래프톤 53조→36조 하향 협상, Leave Money on the Table 논쟁까지.",
    excerptEn:
      "IPO pricing is negotiation, not science. P/E, EV/EBITDA, EV/Revenue, DCF, and precedent transactions each produce different valuations — the banker's skill is designing the Football Field by choosing which comps to include and exclude. How Rivian got a $66B valuation with almost no revenue, Krafton's ₩53T→₩36T negotiation, and the Leave Money on the Table debate.",
    readingMinutes: 17,
    tags: ["IPO 밸류에이션", "Football Field", "Comparable Analysis", "DCF", "EV/EBITDA", "PER", "크래프톤", "Rivian", "Leave Money on the Table", "Comps"],
    tagsEn: ["IPO Valuation", "Football Field", "Comparable Analysis", "DCF", "EV/EBITDA", "P/E", "Krafton", "Rivian", "Leave Money on the Table", "Comps"],
    sections: [],
    keyTerms: [
      {
        term: "풋볼 필드 밸류에이션",
        termEn: "Football Field Valuation",
        definition: "여러 밸류에이션 방법론(EV/EBITDA·P/E·EV/Revenue·DCF·선행 거래)의 결과를 하나의 수평 막대 차트에 나란히 표시한 것이다. 각 방법론이 서로 다른 가격 범위를 도출하며, 뱅커는 전체 범위를 보고 적정 공모가 구간을 제시한다. 범위가 넓을수록 불확실성이 높고 협상 여지가 크다는 신호다. IB 피치북과 밸류에이션 보고서의 핵심 슬라이드다.",
        definitionEn: "A horizontal bar chart that displays the outputs of multiple valuation methodologies — EV/EBITDA, P/E, EV/Revenue, DCF, and precedent transactions — side by side. Each methodology produces a different price range, and bankers use the full picture to propose an appropriate IPO price range. Wider ranges signal greater uncertainty and more negotiating room. It is the centerpiece slide in IB pitchbooks and valuation reports.",
      },
      {
        term: "EV/EBITDA 멀티플",
        termEn: "EV/EBITDA Multiple",
        definition: "기업가치(Enterprise Value)를 EBITDA로 나눈 배수로, 부채·세금·감가상각의 차이를 제거해 순수한 영업 수익성을 비교하는 지표다. 섹터마다 적정 배수가 다르며, 테크 기업은 15~25×, 소매업은 6~10× 수준이 일반적이다. IPO 시 유사 상장 기업(Comps)의 평균 EV/EBITDA에 IPO 할인율을 적용해 공모가 범위를 산출한다.",
        definitionEn: "A ratio of enterprise value to EBITDA that strips out differences in debt, taxes, and depreciation to enable pure operating profitability comparisons. Appropriate multiples vary by sector: technology typically trades at 15–25×, retail at 6–10×. In IPO valuation, the average EV/EBITDA of comparable listed companies is used as a benchmark, with an IPO discount applied to derive the offering price range.",
      },
      {
        term: "유사 기업 분석 (Comps)",
        termEn: "Comparable Company Analysis (Comps)",
        definition: "상장된 유사 기업들의 주가 배수를 기준으로 IPO 기업의 가치를 추정하는 분석 방법이다. 어떤 기업을 Comp에 포함하고 제외하는지가 뱅커의 핵심 기술이자 협상 도구다. 발행사는 가능한 한 높은 배수의 Comp 기업을 포함하려 하고, 투자자는 낮은 배수의 기업을 더 넣으려 한다. Comp 선택의 근거와 논리가 밸류에이션 신뢰도의 핵심이다.",
        definitionEn: "A method of estimating an IPO company's value by referencing the trading multiples of comparable listed companies. The selection of which companies to include or exclude is both a core technical skill and a negotiating tool for the banker. Issuers push to include high-multiple comparables, while investors prefer lower-multiple peers. The rationale for comp selection drives the credibility of the entire valuation.",
      },
      {
        term: "현금흐름할인법 (DCF)",
        termEn: "Discounted Cash Flow (DCF)",
        definition: "미래에 발생할 자유현금흐름(FCF)을 가중평균자본비용(WACC)으로 할인해 현재가치를 구하는 밸류에이션 방법이다. 성장률·영업이익률·WACC 등 핵심 가정이 조금만 바뀌어도 결과값이 크게 달라지는 '쓰레기 인·쓰레기 아웃(GIGO)' 문제가 있다. 현금흐름 예측이 불확실한 스타트업에는 EV/Revenue 등 다른 방법론이 더 선호된다.",
        definitionEn: "A valuation method that discounts projected future free cash flows back to present value using the weighted average cost of capital (WACC). The model is highly sensitive to assumptions around growth rate, margin, and WACC — small changes produce large valuation swings, a classic 'garbage in, garbage out' problem. For startups with unpredictable cash flows, revenue-based multiples like EV/Revenue are often preferred.",
      },
      {
        term: "Leave Money on the Table",
        termEn: "Leave Money on the Table",
        definition: "공모가를 너무 낮게 설정한 결과 상장 첫날 주가가 급등했을 때, 발행사가 더 높은 가격에 팔 수 있었던 금액을 포기한 것을 뜻하는 표현이다. 15~20%의 첫날 팝(First Day Pop)은 적절하지만, 30%를 넘으면 발행사가 실질적으로 손해를 본 것으로 해석된다. 주관사 입장에서는 투자자 만족을 의미하지만, 발행사 CFO에게는 과도한 할인의 증거가 된다. IPO 가격 협상의 핵심 긴장 지점이다.",
        definitionEn: "The value forfeited by an issuer when IPO pricing is set too low and the stock surges on the first day of trading. A 15–20% first-day pop is considered reasonable, but a pop exceeding 30% is seen as a failure to maximize proceeds. From the underwriter's perspective, a big pop means satisfied investors; from the issuer CFO's perspective, it is evidence of excessive underpricing. This tension is central to IPO price negotiations.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-issuers", "ecm-ipo-process", "ecm-ipo-bookbuilding"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-process",
    title: "ECM Ch.4 — IPO 프로세스: S-1부터 첫날 거래까지",
    titleEn: "ECM Ch.4 — IPO Process: From S-1 Filing to Day One Trading",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO는 18개월 프로젝트다. Bake-off에서 IB를 선발하고, 실사와 S-1 작성, SEC Comment Letter 전쟁, Quiet Period, Pre-deal 마케팅, 글로벌 로드쇼 50–80개 미팅, 프라이싱 나이트 — 각 단계에서 Analyst·Associate·MD가 실제로 무엇을 하는지. S-1 해부학: Risk Factors가 어떻게 투자자를 보호하면서 동시에 발행사를 노출시키는가.",
    excerptEn:
      "An IPO is an 18-month project. Bank selection through Bake-off, due diligence and S-1 drafting, SEC Comment Letter battles, Quiet Period rules, pre-deal marketing, global roadshow with 50–80 investor meetings, and Pricing Night — what Analysts, Associates, and MDs actually do at each stage. S-1 anatomy: how Risk Factors protect investors while simultaneously exposing the issuer.",
    readingMinutes: 18,
    tags: ["IPO 프로세스", "S-1", "SEC", "로드쇼", "Quiet Period", "프라이싱 나이트", "Comment Letter", "Bake-off", "투자설명서", "Due Diligence"],
    tagsEn: ["IPO Process", "S-1", "SEC", "Roadshow", "Quiet Period", "Pricing Night", "Comment Letter", "Bake-off", "Prospectus", "Due Diligence"],
    sections: [],
    keyTerms: [
      {
        term: "베이크오프 (Bake-off)",
        termEn: "Bake-off (Bank Selection Pitch)",
        definition: "발행사가 복수의 투자은행(IB)에 동시에 IPO 피치를 요청해 주관사를 선발하는 경쟁 과정이다. 각 은행은 밸류에이션·수수료·배분 능력·업종 전문성을 경쟁적으로 제시한다. 보통 10개 내외의 IB 중 2개를 북러너(Bookrunner)로 선정하고, 오른쪽에 Co-manager를 추가한다. 주관사 선정은 딜의 성패를 가르는 첫 번째 핵심 결정이다.",
        definitionEn: "The competitive process in which an issuer solicits IPO pitches from multiple investment banks simultaneously to select lead managers. Each bank competes on valuation, fees, distribution capability, and sector expertise. Typically, 2 bookrunners are selected from roughly 10 pitching banks, with co-managers added alongside. The bookrunner selection is the first critical decision that shapes the success of the entire deal.",
      },
      {
        term: "투자설명서 / S-1",
        termEn: "Prospectus / S-1 Filing",
        definition: "미국 IPO 시 SEC에 제출하는 등록 서류(Form S-1), 한국에서는 DART에 제출하는 증권신고서다. 사업 현황·재무제표·위험요소·공모 자금 사용 계획이 모두 공개된다. Risk Factors 섹션은 투자자를 보호하면서 동시에 발행사의 취약점을 노출하는 이중적 역할을 한다. SEC Comment Letter 왕복 수개월의 심사 과정을 거쳐 최종 확정된다.",
        definitionEn: "The registration statement (Form S-1) filed with the SEC for a US IPO; the equivalent in Korea is the securities registration statement filed with DART. It publicly discloses business overview, financial statements, risk factors, and use of proceeds. The Risk Factors section plays a dual role: protecting investors while simultaneously exposing issuer vulnerabilities. The document is finalized after months of SEC Comment Letter back-and-forth review.",
      },
      {
        term: "쿼이엇 피리어드 (Quiet Period)",
        termEn: "Quiet Period",
        definition: "IPO 전후 특정 기간 동안 발행사 임원과 주관사 애널리스트의 공개 발언을 제한하는 규정이다. 미국에서 언더라이터 애널리스트는 상장 후 40일간 투자 리서치 보고서 발행이 금지된다. 이 기간 중 말실수나 과도한 낙관론으로 SEC 조사를 받은 사례가 다수 있다. 쿼이엇 피리어드 종료 후 커버리지 개시 보고서가 주가에 영향을 미친다.",
        definitionEn: "A regulatory restriction on public statements by issuer executives and underwriter analysts during specified periods around an IPO. In the US, underwriter analysts are prohibited from publishing research reports for 40 days after listing. Violations through missteps or excessive optimism during this period have triggered SEC investigations. The initiation of coverage after the quiet period ends typically impacts the stock price.",
      },
      {
        term: "로드쇼 (Roadshow)",
        termEn: "Roadshow",
        definition: "북빌딩 기간(보통 1~2주) 동안 CEO·CFO·IR 담당자가 주요 도시를 순회하며 기관투자자에게 기업을 직접 프레젠테이션하는 과정이다. 일반적으로 50~80개의 투자자 미팅이 진행된다. 미팅 반응과 오더 강도가 수요 곡선 형성에 직접 반영된다. 현재는 가상(Virtual) 방식이 보편화됐지만, 핵심 앵커 투자자 미팅은 여전히 대면으로 진행된다.",
        definitionEn: "The process during the book-building period (typically 1–2 weeks) in which the CEO, CFO, and IR team tour major cities to present the company directly to institutional investors. Typically 50–80 investor meetings take place. Meeting reactions and order intensity directly shape the demand curve. Virtual roadshows are now the norm, but key anchor investor meetings are still conducted in person.",
      },
      {
        term: "프라이싱 나이트 (Pricing Night)",
        termEn: "Pricing Night",
        definition: "로드쇼 마지막 날 밤, 수요 곡선·오버북 배수·시장 환경을 종합 분석해 최종 공모가를 결정하는 과정이다. 발행사 CFO·이사회·주관사 MD들이 전화회의(콘퍼런스 콜)로 협상한다. 오버북 배수가 5× 이상이면 레인지 상단을 택하고, 1~2×에 머물면 하단을 선택하거나 딜을 연기한다. 다음 날 아침 시장 개장 전에 공모가가 공식 발표된다.",
        definitionEn: "The final night of the roadshow during which the demand curve, oversubscription multiples, and market conditions are analyzed to set the final offer price. The issuer's CFO, board, and lead manager MDs negotiate via conference call. If the deal is 5× oversubscribed, the top of the range is chosen; if only 1–2×, the bottom is selected or the deal is postponed. The final offer price is announced before market open the following morning.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-valuation", "ecm-ipo-bookbuilding", "ecm-ipo-post"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-bookbuilding",
    title: "ECM Ch.5 — 북빌딩·프라이싱: 수요 곡선과 그린슈의 메커니즘",
    titleEn: "ECM Ch.5 — Book-Building & Pricing: Demand Curve and Greenshoe Mechanics",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO 북빌딩은 DCM과 근본적으로 다르다 — 가격이 고정되지 않은 상태에서 수요를 모은다. 수요 곡선에서 '어디서 자르느냐'가 뱅커의 기술이다. 그린슈(Greenshoe) 3단계: 과배정→안정화 기간→옵션 행사 또는 시장 매입. '15–20% 첫날 팝이 이상적인 이유', '30% 팝이면 오히려 실패인 이유', 한국 의무보유 확약과 공모가 결정 메커니즘.",
    excerptEn:
      "IPO book-building fundamentally differs from DCM — demand is gathered before the price is set. 'Where to cut' the demand curve is the banker's core skill. Greenshoe in three steps: over-allotment → stabilization window → option exercise or market purchase. Why a 15–20% first-day pop is ideal, why a 30% pop is actually a failure, and Korea's mandatory lock-up commitment mechanism.",
    readingMinutes: 15,
    tags: ["북빌딩", "그린슈", "Greenshoe", "수요 곡선", "과배정 옵션", "공모가", "첫날 팝", "안정화", "의무보유 확약", "IPO 프라이싱"],
    tagsEn: ["Book Building", "Greenshoe", "Over-allotment", "Demand Curve", "IPO Price", "First Day Pop", "Stabilization", "Lock-up Commitment", "IPO Pricing"],
    sections: [],
    keyTerms: [
      {
        term: "수요 곡선",
        termEn: "Demand Curve",
        definition: "가격별 투자자 수요를 집계한 차트로, DCM과 달리 IPO는 가격을 고정하지 않은 상태에서 오더를 받는다. X축이 공모가, Y축이 수요 주식수로 구성된다. '어느 가격에서 공모 물량이 모두 채워지는가'를 보고 공모가를 결정하며, 상단에서도 오버북되면 가격을 올리고 하단도 미달이면 낮추거나 연기한다. 북빌딩의 핵심 산출물이다.",
        definitionEn: "A chart aggregating investor demand by price level. Unlike DCM, IPO book-building collects orders without a fixed price. The x-axis represents the offer price and the y-axis represents shares demanded. The offer price is set at the level where demand fully covers the offering — if oversubscribed at the top of the range, the price is raised; if undersubscribed at the bottom, the price is lowered or the deal is pulled. This is the central output of the book-building process.",
      },
      {
        term: "그린슈 / 과배정 옵션",
        termEn: "Greenshoe / Over-allotment Option",
        definition: "IPO 안정화 메커니즘으로, 공모 물량의 115%를 투자자에게 배분(15% 과배정)한 뒤 상장 후 30일 안정화 기간 동안 운용된다. 주가가 공모가 이하로 내려가면 시장에서 매수해 가격을 지지하고(숏 포지션 커버), 주가가 공모가 이상이면 발행사로부터 옵션을 행사해 주식을 수령한다. 주가 방향에 상관없이 주관사가 개입할 수 있는 양방향 안전장치다.",
        definitionEn: "An IPO stabilization mechanism in which 115% of the offering size is allocated to investors (15% over-allotment), followed by a 30-day stabilization window after listing. If the stock falls below the offer price, the stabilization agent buys in the market to support the price (covering the short position). If the stock rises above the offer price, the option is exercised with the issuer to receive additional shares. It provides a two-way safety net regardless of stock price direction.",
      },
      {
        term: "첫날 팝 (First Day Pop)",
        termEn: "First Day Pop",
        definition: "IPO 첫 거래일 종가가 공모가 대비 상승한 비율이다. 15~20%는 투자자 만족과 발행사의 적정 가격 사이의 균형점으로 이상적이다. 0%는 시장이 공모가에 동의하지 않는다는 신호로 실패로 간주된다. 30% 이상은 발행사가 더 비싸게 팔 수 있었음을 의미해 역설적으로 실패다. 뱅커의 목표는 '적당한 팝'을 만드는 것이다.",
        definitionEn: "The percentage gain of an IPO stock's closing price on its first trading day relative to the offer price. A pop of 15–20% is considered ideal, balancing investor satisfaction against the issuer leaving money on the table. A 0% pop signals market disagreement with the offer price and is considered a failure. A pop exceeding 30% paradoxically signals failure because the issuer could have priced higher. The banker's goal is to engineer a 'just right' pop.",
      },
      {
        term: "공모가 (Offer Price)",
        termEn: "Offer Price",
        definition: "북빌딩 결과를 반영해 프라이싱 나이트에 최종 확정되는 IPO 발행 가격이다. 보통 사전에 제시한 가격 레인지의 중간~상단에서 결정된다. 오버북 배수·오더 품질·시장 환경이 종합 반영된다. 거래소 상장 후 첫 거래 가격(시초가)은 이 공모가를 기준으로 매수·매도 수요에 따라 결정된다.",
        definitionEn: "The final IPO issuance price confirmed on Pricing Night, reflecting book-building results. It is typically set at the mid-to-upper end of the pre-announced price range. The decision incorporates oversubscription multiples, order quality, and market conditions. The opening trade price on the first day of exchange listing is determined by supply and demand around this offer price.",
      },
    ],
    relatedSlugs: ["ecm-ipo-process", "ecm-ipo-investors", "ecm-ipo-post", "ecm-ipo-valuation"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-post",
    title: "ECM Ch.6 — 포스트-IPO: 락업·오버행·상장 이후가 진짜 시작",
    titleEn: "ECM Ch.6 — Post-IPO: Lock-up, Overhang, and Why the Real Story Starts After Listing",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "상장은 끝이 아니다. 락업 만료 오버행 차트: D+90일(앵커 해제)·D+180일(PE+창업자, 최대 물량 폭탄)·D+365일(스톡옵션). LG에너지솔루션(성공)·WeWork 철회→파산·카카오뱅크 -70%·Rivian -80%·DiDi 상장 후 48시간 만에 앱 삭제 — 5가지 실패 유형으로 해부한 글로벌 IPO 케이스스터디.",
    excerptEn:
      "Listing isn't the end. Lock-up overhang chart: D+90 (anchor release), D+180 (PE + founder — the maximum supply bomb), D+365 (stock options). LG Energy Solution (success), WeWork withdrawal→bankruptcy, Kakao Bank -70%, Rivian -80%, DiDi's app deleted 48 hours after listing — global IPO case studies dissected into five failure types.",
    readingMinutes: 20,
    tags: ["포스트-IPO", "락업 만료", "오버행", "WeWork", "카카오뱅크", "Rivian", "DiDi", "Ant Group", "LG에너지솔루션", "SPAC 붕괴", "IPO 실패"],
    tagsEn: ["Post-IPO", "Lock-up Expiry", "Overhang", "WeWork", "Kakao Bank", "Rivian", "DiDi", "Ant Group", "LG Energy Solution", "SPAC Collapse", "IPO Failure"],
    sections: [],
    keyTerms: [
      {
        term: "오버행",
        termEn: "Overhang",
        definition: "락업 만료 후 시장에 출회될 수 있는 대규모 주식 물량 압박을 의미한다. 내부자·PE펀드·앵커 투자자가 곧 매각할 것이라는 시장의 기대만으로도 주가가 먼저 하락하는 효과가 있다. 실제 매도가 이루어지기 전에 '공급 폭탄이 뜨는 날 전에 미리 빠져나오자'는 심리가 주가를 압박한다. D+180일(PE·창업자 락업 만료)이 가장 큰 오버행 이벤트로 꼽힌다.",
        definitionEn: "The supply pressure created by large blocks of shares that could be sold into the market after lock-up expiry. The mere expectation that insiders, PE funds, or anchor investors will soon sell causes the stock to decline in advance of actual selling. The psychology of 'sell before the supply bomb hits' drives price pressure ahead of the event. The D+180 day lock-up expiry for PE and founders is typically the largest overhang event.",
      },
      {
        term: "락업 만료",
        termEn: "Lock-up Expiry",
        definition: "상장 후 내부자의 주식 매각 금지가 해제되는 시점이다. 일반적으로 앵커 투자자는 D+90일, PE·VC·창업자는 D+180일(최대 물량), 임직원 스톡옵션은 D+365일에 만료된다. 만료 전부터 주가가 하락하고, 만료 후 실제 매도 물량이 시장을 압박한다. 법적 의무이면서 동시에 IPO 이후 주가 흐름을 결정하는 핵심 이벤트다.",
        definitionEn: "The date on which insider share sale restrictions are lifted after an IPO listing. Typical schedules: anchor investors at D+90, PE/VC/founders at D+180 (maximum volume), and employee stock options at D+365. Stock prices tend to decline before expiry in anticipation, and actual selling after expiry adds further market pressure. Lock-up expiry is both a legal requirement and a defining event in post-IPO price action.",
      },
      {
        term: "안정화 매수",
        termEn: "Stabilization",
        definition: "상장 직후 30일 안정화 기간 동안 그린슈 운용사(주관사)가 공모가 이하에서 시장 매수를 통해 주가를 지지하는 행위다. 발행사와 투자자 모두를 위한 조치이며 규정에 따라 합법적으로 허용된 시장 개입이다. 안정화 기간이 종료된 이후에는 시장 자율에 맡긴다. 한국에도 유사한 시장조성(Market Making) 제도가 있다.",
        definitionEn: "The act of the greenshoe agent (lead manager) purchasing shares in the open market below the offer price to support the stock during the 30-day stabilization window after listing. This intervention is conducted on behalf of both issuers and investors and is legally permitted under securities regulations. After the stabilization period ends, the stock is left to trade freely. Korea has a similar market-making mechanism.",
      },
      {
        term: "포스트-IPO 애널리스트 커버리지",
        termEn: "Post-IPO Analyst Coverage Initiation",
        definition: "쿼이엇 피리어드 종료 후 주관사 애널리스트가 처음 발행하는 투자 보고서다. 첫 커버리지 개시는 시장의 주목을 받으며 주가에 즉각적인 영향을 미친다. 주관사는 이해충돌이 존재해 매수(Buy) 의견이 압도적으로 많지만, SEC Regulation AC에 따라 분석의 독립성 확인 의무가 있다. 양질의 커버리지는 상장 이후에도 기관투자자 관심을 유지시키는 역할을 한다.",
        definitionEn: "The first investment research report published by the lead underwriter's analyst after the quiet period ends. Initiation of coverage attracts market attention and typically has an immediate impact on the stock price. Underwriters face inherent conflicts of interest and overwhelmingly issue Buy recommendations, but SEC Regulation AC requires analysts to certify the independence of their views. High-quality coverage sustains institutional investor interest in the stock after listing.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-bookbuilding", "ecm-followon", "ecm-spac-direct"],
    appearsIn: [],
  },

  {
    slug: "ecm-followon",
    title: "ECM Ch.7 — 팔로우온: ABB·블록 트레이드·유상증자",
    titleEn: "ECM Ch.7 — Follow-on Offerings: ABB, Block Trades, and Rights Issues",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "상장 이후의 자본 조달 — ABB(하룻밤, 3–5% 할인)·블록 트레이드(수시간, 2–3% 할인)·유상증자(3–6주, 30–40% 할인)·ATM(상시) 4가지의 속도-가격-희석 트레이드오프. PE 엑싯 패턴, 삼성물산 블록 트레이드, 글로벌 팔로우온 시장 구조.",
    excerptEn:
      "Post-listing capital raising — ABB (overnight, 3–5% discount), block trade (hours, 2–3% discount), rights issue (3–6 weeks, 30–40% discount), ATM (ongoing) — the speed-price-dilution trade-off. PE exit patterns, Samsung C&T block trade, and global follow-on market structure.",
    readingMinutes: 13,
    tags: ["팔로우온", "ABB", "블록 트레이드", "유상증자", "ATM", "PE 엑싯", "희석", "삼성물산"],
    tagsEn: ["Follow-on", "ABB", "Block Trade", "Rights Issue", "ATM", "PE Exit", "Dilution"],
    sections: [],
    keyTerms: [
      {
        term: "팔로우온 공모",
        termEn: "Follow-on Offering",
        definition: "이미 상장된 기업이 추가로 신주를 발행하거나 대주주가 보유 주식을 공개 매도하는 거래다. IPO와 달리 이미 공개 정보가 있어 딜 속도가 빠르고 가격 발견이 용이하다. 기업 재무 상황 개선, PE 엑싯, 성장 투자 재원 마련 등 다양한 목적으로 활용된다. ABB·유상증자·ATM 등 방식에 따라 속도와 희석 정도가 달라진다.",
        definitionEn: "A transaction in which an already-listed company issues additional new shares or a major shareholder sells existing holdings publicly. Unlike an IPO, existing public information makes the deal faster and price discovery easier. It is used for various purposes including improving financial position, PE exits, and funding growth investments. Speed and dilution vary depending on the method — ABB, rights issue, or ATM.",
      },
      {
        term: "Primary vs Secondary 오퍼링",
        termEn: "Primary vs Secondary Offering",
        definition: "Primary는 신주를 새로 발행해 기업이 자금을 조달하는 방식으로, 조달 자금이 기업에 유입된다. Secondary는 기존 주주(PE·창업자)가 보유 주식을 팔아 그들이 현금화하는 방식으로, 기업에는 돈이 들어오지 않는다. 두 방식은 하나의 딜에 혼합되어 진행되는 경우도 많다. 시장은 Secondary 비중이 높을수록 기업 자체 성장 필요보다 기존 주주의 엑싯 욕구가 강하다고 해석한다.",
        definitionEn: "In a Primary offering, new shares are issued and proceeds flow to the company. In a Secondary offering, existing shareholders (PE, founders) sell their holdings and receive the proceeds — the company gets nothing. Both can be combined in a single transaction. Markets interpret a high Secondary component as a signal that existing shareholders are seeking an exit rather than the company needing growth capital.",
      },
      {
        term: "ATM (자동 시장 매도)",
        termEn: "At-the-Market Offering",
        definition: "증권거래소를 통해 소량씩 일상적 거래처럼 주식을 매도하는 방식이다. 전통적 팔로우온보다 가격 충격이 작고 유연하지만 한 번에 큰 금액 조달은 어렵다. 주관사가 브로커 역할을 맡아 일정 기간에 걸쳐 시장 상황에 따라 분산 매도한다. 미국 바이오·리츠(REIT) 기업이 자주 사용하며, 시장가에 가깝게 지속 발행한다는 점에서 ATM이라는 이름이 붙었다.",
        definitionEn: "A method of selling shares in small increments through the exchange like ordinary market trades. It causes less price impact and offers more flexibility than a traditional follow-on, but is not suited for raising large amounts at once. The underwriter acts as broker, distributing sales over time based on market conditions. Frequently used by US biotech and REIT companies; the name ATM reflects the practice of continuously issuing shares at near-market prices.",
      },
      {
        term: "보호예수 기간",
        termEn: "Lockup Period",
        definition: "IPO 후 내부자·기관 투자자가 보유 주식을 팔 수 없도록 제한하는 기간으로 통상 90~180일이다. 만료 직전·직후 대량 매도 우려가 커지며 주가 변동성이 높아진다. 앵커 투자자는 D+90일, PE·창업자는 D+180일에 제한이 해제되는 것이 일반적이다. 락업이 실질적으로 팔로우온 딜의 타이밍을 결정하는 핵심 변수다.",
        definitionEn: "A period during which insiders and institutional investors are restricted from selling their shares after an IPO, typically 90–180 days. Price volatility increases just before and after expiry as the market anticipates large block selling. Anchor investors typically unlock at D+90 and PE/founders at D+180. The lockup expiry is a key variable that effectively determines the timing of follow-on deals.",
      },
      {
        term: "희석 효과",
        termEn: "Dilution",
        definition: "신주 발행으로 기존 주주 지분율이 낮아지는 현상이다. Primary 팔로우온은 항상 희석을 수반하며, 발행 규모와 시장 가격 대비 발행 가격의 차이가 희석 정도를 결정한다. 기존 주주 입장에서는 지분율·EPS·배당 권리가 모두 희석된다. 주관사는 시장이 허용하는 최소 할인율에서 최대한 빠르게 발행해 희석 충격을 줄이려 한다.",
        definitionEn: "The reduction in existing shareholders' ownership percentage caused by the issuance of new shares. Primary follow-ons always involve dilution; the extent depends on the offering size and the discount to market price. From existing shareholders' perspective, ownership stake, EPS, and dividend rights are all diluted. Underwriters aim to minimize dilution impact by pricing at the minimum acceptable discount and executing as quickly as possible.",
      },
    ],
    relatedSlugs: ["ecm-ipo-post", "ecm-convertible", "ecm-overview"],
    appearsIn: [],
  },

  {
    slug: "ecm-convertible",
    title: "ECM Ch.8 — 전환사채: 채권인가 주식인가",
    titleEn: "ECM Ch.8 — Convertible Bonds: Debt or Equity?",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "전환사채는 채권의 안전벨트에 주식의 가속기를 단 차다. 주가가 오르면 주식처럼, 떨어지면 채권처럼. 전환가격·전환프리미엄·페이오프 다이어그램·델타 헤징. ECM과 DCM의 경계에 있는 하이브리드 상품 — 왜 성장 기업이 낮은 쿠폰에 이 구조를 선택하는가.",
    excerptEn:
      "A convertible bond is a car with a seatbelt (bond) and an accelerator (equity). Rises like a stock when the price climbs, protects like a bond when it falls. Conversion price, conversion premium, payoff diagram, delta hedging. The hybrid instrument at the ECM–DCM boundary — why growth companies choose this structure at a low coupon.",
    readingMinutes: 12,
    tags: ["전환사채", "CB", "전환프리미엄", "델타 헤징", "하이브리드", "페이오프", "ECM 상품"],
    tagsEn: ["Convertible Bond", "CB", "Conversion Premium", "Delta Hedging", "Hybrid", "Payoff", "ECM Products"],
    sections: [],
    keyTerms: [
      {
        term: "전환사채 (CB)",
        termEn: "Convertible Bond",
        definition: "채권으로 발행되지만 특정 조건에서 발행사 주식으로 전환할 수 있는 하이브리드 증권이다. 주가가 오르면 주식으로 전환해 이익을 보고, 내리면 채권 원금을 돌려받는 투자자 보호 구조다. 채권의 안전벨트와 주식의 가속기를 동시에 가진 차에 비유된다. 발행사는 낮은 쿠폰(이자율)을 대가로 투자자에게 주식 전환 옵션을 부여한다.",
        definitionEn: "A hybrid security issued as a bond but convertible into the issuer's stock under specific conditions. When the stock price rises, the holder converts to equity and profits; when it falls, the bondholder receives principal repayment. It is often compared to a car with both a seatbelt (bond protection) and an accelerator (equity upside). The issuer pays a lower coupon in exchange for granting the investor a stock conversion option.",
      },
      {
        term: "전환 프리미엄",
        termEn: "Conversion Premium",
        definition: "CB 전환가격이 발행 시 주가보다 높게 설정된 비율이다. 예를 들어 주가가 ₩10,000일 때 전환가를 ₩12,000으로 설정하면 20% 프리미엄이다. 발행사는 이 프리미엄만큼 희석을 줄이고, 투자자는 낮은 쿠폰을 감수하는 대신 주가 상승 업사이드를 얻는다. 프리미엄이 높을수록 투자자에게는 불리하지만 발행사 기존 주주에게는 유리하다.",
        definitionEn: "The percentage by which a CB's conversion price is set above the stock price at issuance. For example, if the stock trades at KRW 10,000 and the conversion price is KRW 12,000, that is a 20% premium. The issuer benefits from reduced dilution while the investor accepts a lower coupon in exchange for the equity upside. A higher premium is less favorable to investors but more favorable to the issuer's existing shareholders.",
      },
      {
        term: "델타 헤지",
        termEn: "Delta Hedge",
        definition: "CB 차익거래 투자자가 CB 내 주식 옵션 가치에 비례해 주식을 공매도하는 리스크 중립 전략이다. CB가 주가 변화에 관계없이 일정한 수익을 내도록 주식 헤지 비율(델타)을 지속 조정한다. 주가가 오르면 델타가 높아져 더 많은 공매도가 필요하고, 내리면 그 반대다. CB 차익거래 헤지펀드의 핵심 운용 방식이다.",
        definitionEn: "A risk-neutral strategy in which a convertible bond arbitrageur short-sells the underlying stock in proportion to the equity option value embedded in the CB. The hedge ratio (delta) is continuously adjusted so the position generates consistent returns regardless of stock price moves. When the stock rises, delta increases and more shorting is required; the reverse applies on a decline. This is the core strategy of CB arbitrage hedge funds.",
      },
      {
        term: "리픽싱 (Refixing)",
        termEn: "Refixing",
        definition: "주가 하락 시 CB 전환가격을 낮춰주는 조항이다. 투자자에게 유리하지만 발행사 입장에서는 더 많은 신주 발행(더 큰 희석)으로 이어질 수 있다. 한국에서는 최초 전환가의 70% 이하로는 리픽싱할 수 없도록 법적으로 제한한다. 리픽싱 조항이 있는 CB는 주가 하락 방어막 역할을 하기 때문에 투자자 수요가 높다.",
        definitionEn: "A clause that lowers the CB's conversion price if the stock price falls. It benefits the investor but leads to greater dilution for the issuer through additional share issuance. In Korea, refixing is legally capped at no lower than 70% of the original conversion price. CBs with refixing clauses attract strong investor demand because they provide a floor against stock price declines.",
      },
      {
        term: "만기 풋 옵션",
        termEn: "Put at Maturity",
        definition: "CB 보유자가 만기 전 특정 시점에 액면가(보통 100 또는 101)에 CB를 되팔 수 있는 권리다. 주가 급락 시 원금 보호를 위한 핵심 안전장치로 기능한다. 풋 옵션이 있는 CB는 발행사의 조기 상환 부담을 높이지만, 그만큼 낮은 쿠폰으로 발행 가능하다. 투자자는 주가 상승 시 전환으로, 하락 시 풋으로 두 방향 모두를 방어할 수 있다.",
        definitionEn: "The right of a CB holder to sell the bond back to the issuer at face value (typically 100 or 101) at a specific date before maturity. It serves as the primary capital protection mechanism when the stock price drops sharply. CBs with put options increase the issuer's early redemption obligation but allow issuance at a lower coupon. Investors are protected in both directions: conversion on the upside, put on the downside.",
      },
    ],
    relatedSlugs: ["ecm-followon", "ecm-overview", "ecm-ipo-valuation"],
    appearsIn: [],
  },

  {
    slug: "ecm-international-listing",
    title: "ECM Ch.9 — 국제 상장: ADR·GDR·해외 직상장",
    titleEn: "ECM Ch.9 — International Listings: ADR, GDR, and Overseas Direct Listing",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "한국 기업이 NYSE에, 외국 기업이 KRX에 상장하는 구조 — ADR·GDR·이중상장·해외 직상장의 메커니즘. 쿠팡이 왜 국내 대신 뉴욕을 택했나, 144A/Reg S 구조, 예탁증서의 작동 방식, 해외 상장의 비용·편익 분석.",
    excerptEn:
      "How Korean companies list on NYSE and foreign companies list on KRX — ADR, GDR, dual listing, and overseas direct listing mechanics. Why Coupang chose New York over Seoul, 144A/Reg S structure, how depositary receipts work, and cost-benefit analysis of overseas listing.",
    readingMinutes: 13,
    tags: ["ADR", "GDR", "국제 상장", "쿠팡 NYSE", "이중상장", "예탁증서", "144A", "Reg S", "해외 직상장"],
    tagsEn: ["ADR", "GDR", "International Listing", "Coupang NYSE", "Dual Listing", "Depositary Receipt", "144A", "Reg S"],
    sections: [],
    keyTerms: [
      {
        term: "ADR / GDR",
        termEn: "American Depositary Receipt / Global Depositary Receipt",
        definition: "외국 기업의 주식을 미국(ADR) 또는 글로벌(GDR) 예탁증서 형태로 발행해 현지 거래소에서 거래할 수 있게 한 구조다. 실제 주식은 예탁기관이 보관하고 투자자는 예탁증서를 보유한다. 한국 SK하이닉스·삼성전자도 ADR 형태로 미국에서 거래 가능하다. 환전·규제 장벽 없이 외국 기업 주식에 투자할 수 있는 가장 보편적 방식이다.",
        definitionEn: "A structure in which a foreign company's shares are issued as depositary receipts in the US (ADR) or globally (GDR) to be traded on local exchanges. The actual shares are held by a depositary institution while investors hold the receipts. Korean companies like SK Hynix and Samsung Electronics are also tradable in the US via ADRs. It is the most common mechanism for investing in foreign company shares without currency or regulatory barriers.",
      },
      {
        term: "이중상장 (Dual Listing)",
        termEn: "Dual Listing",
        definition: "동일 기업이 두 개 이상 거래소에 상장하는 것이다. 투자자 베이스를 넓히고 유동성을 높이지만 두 시장의 공시·규제 요건을 동시에 준수해야 하는 부담이 있다. 홍콩과 상하이에 이중 상장한 중국 기업, 미국과 한국 KRX에 동시 상장한 기업들이 사례다. 두 시장 간 주가 차이(프리미엄·디스카운트)가 발생하면 차익거래 기회가 생긴다.",
        definitionEn: "The listing of a single company on two or more exchanges simultaneously. It broadens the investor base and improves liquidity, but requires compliance with the disclosure and regulatory requirements of both markets. Chinese companies dual-listed in Hong Kong and Shanghai, or companies with simultaneous listings in the US and Korea, are typical examples. Price discrepancies between the two markets can create arbitrage opportunities.",
      },
      {
        term: "VIE 구조",
        termEn: "Variable Interest Entity (VIE) Structure",
        definition: "중국 기업이 외국인 투자 제한을 우회해 해외 상장하기 위한 계약 지배 구조다. 알리바바·바이두·JD닷컴 등이 활용했으며, 법적 소유권은 없지만 계약으로 경제적 권리를 확보하는 방식이다. 투자자는 중국 사업체에 대한 직접 소유권 없이 케이만 제도 법인에 투자한다. 구조적 리스크가 높아 SEC와 기관 투자자의 지속적 우려 대상이다.",
        definitionEn: "A contractual control structure used by Chinese companies to bypass foreign ownership restrictions and list overseas. Alibaba, Baidu, and JD.com have all used this structure; investors obtain economic rights through contracts without direct legal ownership of the operating entity. Investors hold shares in a Cayman Islands entity rather than the Chinese operating company. It carries significant structural risk and remains a persistent concern for the SEC and institutional investors.",
      },
      {
        term: "해외 상장 프리미엄",
        termEn: "Overseas Listing Premium",
        definition: "성장시장 기업이 선진 시장(뉴욕·홍콩)에 상장할 때 얻을 수 있는 추가 밸류에이션이다. 더 깊은 투자자 풀, 더 높은 유동성, ESG·거버넌스 기준 충족 인정 등에서 비롯된다. 단, 해외 상장 요건 준수 비용과 지정학 리스크(특히 미중 갈등 속 중국 기업)도 함께 고려해야 한다. 쿠팡이 국내보다 NYSE 상장을 선택한 주된 이유 중 하나다.",
        definitionEn: "The additional valuation a growth-market company can achieve by listing on a developed market exchange such as NYSE or Hong Kong. It derives from access to a deeper investor pool, higher liquidity, and recognition of ESG and governance standards. However, compliance costs and geopolitical risks (especially for Chinese companies amid US-China tensions) must also be weighed. This premium was one of the main reasons Coupang chose NYSE over the Korean market.",
      },
      {
        term: "공시 규제 격차",
        termEn: "Regulatory Gap",
        definition: "국내 상장 요건과 해외 상장 요건의 차이다. SEC Form 20-F, 홍콩 HKEx 기준 등은 한국 금융감독원 기준과 내용·형식이 다르다. 이 격차를 메우는 준비(법무·회계·IR) 비용이 해외 상장의 핵심 비용이며, 통상 딜 규모의 2~4%를 차지한다. 격차가 클수록 준비 기간이 길어지고 상장 타이밍 리스크가 높아진다.",
        definitionEn: "The difference between domestic and overseas listing requirements. SEC Form 20-F and Hong Kong HKEx standards differ substantially from Korea's FSS requirements in both content and format. Bridging this gap — through legal, accounting, and IR preparation — constitutes the core cost of an overseas listing, typically 2–4% of deal size. A larger gap means longer preparation time and higher timing risk.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-process", "ecm-spac-direct"],
    appearsIn: [],
  },

  {
    slug: "ecm-spac-direct",
    title: "ECM Ch.10 — SPAC과 직상장: 전통 IPO를 대체하는 경로",
    titleEn: "ECM Ch.10 — SPAC & Direct Listing: Alternatives to the Traditional IPO",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "전통 IPO(18개월·7% 수수료)·SPAC 합병(3–6개월·Due Diligence 없음)·직상장(자본 조달 없음) — 세 경로의 속도·비용·리스크 비교. Nikola 사기·Grab -71%·Bird 상장폐지로 해부하는 2020–22 SPAC 거품. 에어비앤비 직상장이 왜 성공했나. 2023년 이후 IPO 시장 정상화.",
    excerptEn:
      "Traditional IPO (18 months, 7% fee), SPAC merger (3–6 months, no due diligence), direct listing (no capital raise) — speed, cost, and risk comparison of three paths. Nikola fraud, Grab -71%, Bird delisted: the 2020–22 SPAC bubble dissected. Why Airbnb's direct listing succeeded. Post-2023 IPO market normalization.",
    readingMinutes: 15,
    tags: ["SPAC", "직상장", "Direct Listing", "에어비앤비", "Nikola", "Grab", "Bird", "SPAC 거품", "전통 IPO 비교", "De-SPAC"],
    tagsEn: ["SPAC", "Direct Listing", "Airbnb", "Nikola", "Grab", "Bird", "SPAC Bubble", "De-SPAC", "IPO Comparison"],
    sections: [],
    keyTerms: [
      {
        term: "SPAC (기업인수목적회사)",
        termEn: "Special Purpose Acquisition Company",
        definition: "실제 사업 없이 IPO를 통해 자금을 조달한 뒤 비상장 기업을 인수·합병하는 것만을 목적으로 하는 빈껍데기 회사다. 일반 IPO와 달리 합병 대상 기업이 증권신고서 없이 상장 가능하다. 보통 2년 내 합병 대상을 찾아야 하며, 실패하면 신탁 계정 자금을 투자자에게 반환한다. 2020~22년 붐 이후 규제 강화와 합병 실패로 시장이 급격히 위축됐다.",
        definitionEn: "A shell company that raises funds through an IPO with the sole purpose of acquiring or merging with a private company, without operating any actual business. Unlike a traditional IPO, the target company can go public without filing a securities registration statement. The SPAC typically has two years to find a merger target; if it fails, the trust account funds are returned to investors. After the 2020–22 boom, tighter regulation and deal failures caused the market to contract sharply.",
      },
      {
        term: "De-SPAC 합병",
        termEn: "De-SPAC Merger",
        definition: "SPAC이 실제 기업과 합병해 그 기업이 상장되는 과정이다. 기업 입장에서는 전통 IPO보다 빠르고 금융 프로젝션(미래 전망)을 IR에 활용할 수 있다는 장점이 있다. 그러나 Due Diligence 부재, 과도한 밸류에이션, SPAC 워런트 희석 등이 문제로 지적됐다. 2022년 이후 SEC가 SPAC 합병에도 IPO와 유사한 공시 기준을 적용하면서 이점이 줄었다.",
        definitionEn: "The process by which a SPAC merges with a real company, resulting in that company becoming publicly listed. For the target company, it is faster than a traditional IPO and allows the use of financial projections in IR materials. However, lack of due diligence, inflated valuations, and SPAC warrant dilution have been major criticisms. Since 2022, the SEC has applied IPO-equivalent disclosure standards to SPAC mergers, reducing their advantages.",
      },
      {
        term: "SPAC 워런트",
        termEn: "SPAC Warrant",
        definition: "SPAC IPO 시 유닛(주식+워런트)으로 발행되는 워런트다. 합병 완료 후 30일이 지나면 $11.50 등 고정가에 추가 주식을 살 수 있는 권리다. 합병 성공 시 업사이드를 위한 레버리지 도구로 기능하지만, 주가 상승 시 기존 주주를 희석시킨다. SPAC 워런트 남발이 2020~22년 SPAC 붕괴의 한 원인으로 지목됐다.",
        definitionEn: "Warrants issued as part of the SPAC IPO unit (stock + warrant). They grant the right to purchase additional shares at a fixed price (e.g., $11.50) 30 days after merger completion. They serve as a leverage tool for upside on merger success but dilute existing shareholders when exercised. The over-issuance of SPAC warrants was cited as one factor behind the 2020–22 SPAC collapse.",
      },
      {
        term: "직상장 (Direct Listing)",
        termEn: "Direct Listing",
        definition: "기존 주주가 보유 주식을 직접 공개 시장에 파는 방식으로 상장하되 신주 발행 없이 진행하는 방식이다. Spotify·Coinbase·Roblox가 활용했으며, 언더라이터 수수료가 없어 저비용이지만 자금 조달은 불가하다. 공모가 대신 시장 수요와 공급이 첫 거래 가격을 결정한다. 브랜드 인지도와 투자자 관심이 이미 높은 기업에 적합한 방식이다.",
        definitionEn: "A listing method in which existing shareholders sell their shares directly to the public market without issuing new shares. Spotify, Coinbase, and Roblox used this method; there are no underwriter fees, making it low-cost, but no capital is raised. Rather than an offer price, supply and demand determine the opening trade price. It is best suited for companies that already have high brand recognition and investor interest.",
      },
      {
        term: "SPAC 신탁 계정",
        termEn: "SPAC Trust Account",
        definition: "SPAC IPO로 조달한 자금을 합병 완료 전까지 격리 보관하는 신탁 계정이다. 합병이 실패하거나 주주가 반대하면 신탁 계정 자금을 투자자에게 되돌려준다. 신탁 계정 자금은 통상 미국 국채에 투자해 이자를 발생시킨다. 투자자에게는 원금 보호 장치이지만 발행 SPAC에는 2년 내 딜 완료 압박으로 작용한다.",
        definitionEn: "A trust account that holds the IPO proceeds in escrow until a merger is completed. If the merger fails or shareholders vote against it, the trust account funds are returned to investors. The funds are typically invested in US Treasuries to generate interest. For investors it serves as capital protection; for the SPAC it creates pressure to close a deal within the two-year window.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-post", "ecm-international-listing"],
    appearsIn: [],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // ECM 실무 시리즈 — 딜 타입별 실행 가이드
  // ────────────────────────────────────────────────────────────────────────────

  {
    slug: "ecm-rights-issue",
    title: "유상증자 실무 A-Z — TERP부터 DART 제출까지",
    titleEn: "Rights Issue Execution A-Z — From TERP to Final Filing",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "유상증자 딜이 들어오면 실제로 어떤 순서로 움직이는가. TERP 계산·할인율 결정·투자설명서 작성·서브언더라이팅·DART 제출까지 전 과정. 한화에어로스페이스 2.3조(2024)·Volkswagen €11B(2023) 글로벌 케이스 포함.",
    excerptEn:
      "What actually happens when a rights issue mandate arrives. TERP calculation, discount setting, prospectus drafting, sub-underwriting, and filing — end to end. Includes Hanwha Aerospace KRW 2.3T (2024) and Volkswagen €11B (2023) global cases.",
    readingMinutes: 18,
    tags: ["유상증자", "TERP", "할인율", "서브언더라이팅", "투자설명서", "DART", "주주배정", "일반공모", "실무가이드"],
    tagsEn: ["Rights Issue", "TERP", "Discount", "Sub-underwriting", "Prospectus", "Filing", "Rights Offering", "Execution Guide"],
    sections: [],
    keyTerms: [
      {
        term: "유상증자 (Rights Issue)",
        termEn: "Rights Issue / Rights Offering",
        definition: "기존 주주에게 지분율에 비례해 신주를 우선 매수할 수 있는 권리를 부여하는 증자 방식이다. 기존 주주가 권리를 행사하면 희석 없이 지분율을 유지할 수 있다. 신규 자본 조달과 주주 보호라는 두 목적을 동시에 달성하는 방식이다. 한국에서는 주주배정·일반공모·제3자배정 세 방식으로 구분된다.",
        definitionEn: "A capital-raising method that grants existing shareholders the preferential right to purchase new shares in proportion to their current holdings. Shareholders who exercise their rights can maintain their ownership percentage without dilution. It simultaneously achieves two goals: raising new capital and protecting shareholders. In Korea, it is categorized into three types: shareholder allotment, general public offering, and third-party allotment.",
      },
      {
        term: "신주인수권 (Rights)",
        termEn: "Rights",
        definition: "기존 주주가 신주를 우선 살 수 있는 권리다. 한국에서는 신주인수권증서로 별도 발행·거래 가능하며, 권리를 행사하지 않으면 실권 처리되거나 시장에 매도할 수 있다. 권리의 이론적 가치는 구주 시장가와 신주 발행가의 차이에 배정 비율을 곱해 계산한다. 신주인수권을 시장에 매도하면 권리 가치만큼 현금화가 가능하다.",
        definitionEn: "The preferential right granted to existing shareholders to purchase new shares. In Korea, rights are issued separately as right certificates and can be traded; if not exercised, they lapse or can be sold in the market. The theoretical value of a right is calculated as the difference between the market price of existing shares and the new issuance price, multiplied by the subscription ratio. Selling rights in the market allows holders to monetize their right value.",
      },
      {
        term: "실권주",
        termEn: "Unexercised / Lapsed Shares",
        definition: "주주가 신주인수권을 행사하지 않아 청약이 되지 않은 주식이다. 주관사가 잔액 인수 또는 일반 공모로 처리한다. 실권주 발생 비율이 높으면 기존 주주들의 자금력 부족 또는 투자 매력도 저하를 나타내는 시장 신호로 해석된다. 서브언더라이팅 계약에 따라 주관사가 실권주를 인수하고 시장에 재매각한다.",
        definitionEn: "Shares that remain unsubscribed because shareholders did not exercise their rights. The underwriter processes them through residual underwriting or a general public offering. A high rate of lapsed shares is interpreted as a market signal of insufficient shareholder capital or weak investment attractiveness. Under the sub-underwriting agreement, the underwriter takes up the lapsed shares and re-sells them to the market.",
      },
      {
        term: "할인 발행",
        termEn: "Discounted Issuance",
        definition: "유상증자 시 현재 시장가보다 낮은 가격에 신주를 발행하는 것이다. 주주들이 권리 행사에 참여할 경제적 유인을 만들기 위함이다. 할인율이 클수록 주주 참여율은 높아지지만 기존 주주 희석 피해도 커진다. 한국에서는 통상 시장가의 70~85% 수준에서 발행 가격이 결정된다.",
        definitionEn: "The issuance of new shares at a price below the current market price in a rights offering. The discount creates an economic incentive for shareholders to participate and exercise their rights. A larger discount increases participation rates but also magnifies the dilution impact on existing shareholders. In Korea, the issuance price is typically set at 70–85% of the market price.",
      },
      {
        term: "배정 비율",
        termEn: "Subscription Ratio",
        definition: "기존 주식 1주당 새로 받을 수 있는 신주 수다. 예를 들어 2:1이면 기존 주 2주당 신주 1주가 배정된다. 배정 비율과 발행 가격이 함께 희석 효과를 결정한다. 배정 비율이 높을수록 신규 자금 조달 규모가 크지만 희석 우려도 커져 주가에 부정적 영향을 줄 수 있다.",
        definitionEn: "The number of new shares a shareholder can receive per existing share held. For example, a ratio of 2:1 means one new share is allocated for every two existing shares. The subscription ratio and issuance price together determine the dilution effect. A higher ratio raises more capital but increases dilution concerns, which can weigh on the stock price.",
      },
    ],
    relatedSlugs: ["ecm-followon", "ecm-ipo-allocation", "ecm-overview", "ecm-pitchbook"],
    appearsIn: [],
  },

  {
    slug: "ecm-ipo-allocation",
    title: "IPO 배분 전략 — 누가 얼마나 받는가",
    titleEn: "IPO Allocation Strategy — Who Gets How Much",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "북빌드가 끝난 후 가장 뜨거운 순간 — 배분. 기관·리테일 배분 비율 결정, 코너스톤 투자자 우선 배정, 안정화(Greenshoe) 운영, Clawback 메커니즘. ARM IPO(2023)·LG에너지솔루션(2022) 배분 전략 해부.",
    excerptEn:
      "The hottest moment after bookbuild closes — allocation. Institutional vs retail split, cornerstone investor priority, stabilization (Greenshoe) operation, Clawback mechanism. ARM IPO (2023) and LG Energy Solution (2022) allocation strategies dissected.",
    readingMinutes: 16,
    tags: ["IPO배분", "코너스톤투자자", "그린슈", "안정화", "클로백", "기관배분", "리테일배분", "배분전략"],
    tagsEn: ["IPO Allocation", "Cornerstone Investor", "Greenshoe", "Stabilization", "Clawback", "Institutional Allocation", "Retail Allocation"],
    sections: [],
    keyTerms: [
      {
        term: "앵커 투자자",
        termEn: "Anchor Investor",
        definition: "IPO 전 사전 협의로 대량 참여를 약속한 기관 투자자다. 분위기 형성 효과가 있어 다른 투자자들의 참여를 유도한다. 통상 6개월 Lockup을 감수하는 대가로 우선 배분을 받으며, 발행사와 주관사에게 딜 성공의 안전판 역할을 한다. 홍콩 IPO에서는 코너스톤(Cornerstone) 투자자라는 이름으로 의무 공시된다.",
        definitionEn: "An institutional investor who has pre-committed to participate in large size before the IPO launch. Their commitment creates momentum and encourages other investors to participate. They typically accept a 6-month lockup in exchange for priority allocation and serve as a safety net for the issuer and underwriters. In Hong Kong IPOs, they are known as cornerstone investors and their commitments must be publicly disclosed.",
      },
      {
        term: "오버얼롯먼트",
        termEn: "Over-Allotment",
        definition: "주관사가 공모 수량보다 15% 더 배정하는 것이다. 그린슈 옵션과 연동되어 상장 후 주가 안정에 활용된다. 주가가 공모가 이하로 내려가면 시장에서 매수해 숏 포지션을 커버하고, 공모가 이상이면 발행사로부터 그린슈 옵션을 행사한다. 주관사에게 주가 방향 불문 개입 수단을 제공하는 양방향 안전장치다.",
        definitionEn: "The practice of allocating 15% more shares than the offering size. It is linked to the greenshoe option and used for post-listing price stabilization. If the price falls below the offer price, the stabilization agent buys in the market to cover the short position; if it rises above, the greenshoe option is exercised with the issuer. It is a two-way safety net that gives the underwriter tools to intervene regardless of price direction.",
      },
      {
        term: "그린슈 옵션",
        termEn: "Greenshoe Option",
        definition: "주관사가 상장 후 30일 내 추가로 공모가에 주식을 매수할 수 있는 옵션이다. 과배정(오버얼롯먼트)과 세트로 운용되며, 주가 상승 시 발행사로부터 옵션을 행사해 과배정 부분을 충당한다. 1963년 Green Shoe Manufacturing Company IPO에서 최초로 사용된 이름이다. IPO 이후 주가 안정화를 위한 표준 구조다.",
        definitionEn: "An option that allows the underwriter to purchase additional shares at the offer price within 30 days of listing. It operates as a set with over-allotment; when the stock price rises, the option is exercised with the issuer to cover the over-allotted portion. Named after the Green Shoe Manufacturing Company IPO of 1963, where it was first used. It is the standard structure for post-IPO price stabilization.",
      },
      {
        term: "배분 정치학",
        termEn: "Allocation Politics",
        definition: "IPO 배분은 단순 수요 크기가 아닌 투자자 관계·거래 수수료·주식 매수 후 보유 의향에 따라 결정된다. 장기 보유 성향 기관(Long-only)에 더 많이 배분하는 경향이 있다. 헤지펀드는 빠른 플립(단기 매도) 가능성 때문에 상대적으로 적게 배분받는다. 배분 결정은 북러너 MD의 재량으로 이루어지며, 이해충돌이 발생할 수 있는 민감한 과정이다.",
        definitionEn: "IPO allocation is determined not by demand size alone, but by investor relationships, commission history, and the investor's stated intention to hold. Long-only institutions tend to receive larger allocations. Hedge funds receive relatively smaller allocations due to the risk of quick flipping. Allocation decisions are made at the discretion of the bookrunner MD and can be a sensitive process prone to conflicts of interest.",
      },
      {
        term: "주가 안정 조치",
        termEn: "Price Stabilization",
        definition: "상장 후 30일 내 주관사가 공모가 이하로 주가 하락 시 시장에서 매수해 주가를 지지하는 행위다. 오버얼롯먼트와 그린슈 옵션을 활용해 이중 쿠션 역할을 한다. 규정에 따라 합법적으로 허용된 시장 개입이며, 주관사는 안정화 매수를 공시해야 한다. 안정화 기간 종료 후에는 시장 자율에 맡기며 추가 개입이 불가하다.",
        definitionEn: "The act of the underwriter purchasing shares in the market to support the stock price when it falls below the offer price within 30 days of listing. It uses over-allotment and the greenshoe option as a two-layer cushion. This market intervention is legally permitted under securities regulations, and the underwriter is required to disclose stabilization purchases. After the stabilization period ends, further intervention is not allowed and the stock trades freely.",
      },
    ],
    relatedSlugs: ["ecm-ipo-process", "ecm-ipo-bookbuilding", "ecm-rights-issue", "ecm-overview"],
    appearsIn: [],
  },

  {
    slug: "ecm-pitchbook",
    title: "ECM 피치북 해부학 — Equity Story부터 수수료 제안까지",
    titleEn: "ECM Pitchbook Anatomy — From Equity Story to Fee Proposal",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "IPO·유상증자·CB 모든 ECM 딜의 시작은 피치북. 10개 섹션의 구조, Equity Story 작성 논리, 비교 회사(Peer) 선정 기준, Football Field 구성법, 수수료 제안 방식. 뱅커가 CFO 회의실에 들어가기 전 48시간의 실체.",
    excerptEn:
      "Every ECM deal starts with a pitchbook. 10-section structure, equity story logic, peer selection criteria, Football Field construction, fee proposal format. The reality of the 48 hours before a banker walks into the CFO's conference room.",
    readingMinutes: 15,
    tags: ["피치북", "에퀴티스토리", "비교회사분석", "풋볼필드", "ECM수수료", "뷰티콘테스트", "IB피치"],
    tagsEn: ["Pitchbook", "Equity Story", "Comparable Company Analysis", "Football Field", "ECM Fees", "Beauty Contest", "IB Pitch"],
    sections: [],
    keyTerms: [
      {
        term: "ECM 피치북",
        termEn: "ECM Pitchbook",
        definition: "ECM 뱅커가 잠재 발행사(CEO·CFO)에게 거래를 제안하기 위해 작성하는 분석 문서다. 시장 환경, 경쟁사 비교, 예상 밸류에이션, 발행 타이밍 권고 등이 핵심 내용이다. 북러너 선정 경쟁(Bake-off)에서 은행들이 제출하는 핵심 산출물이기도 하다. 피치북의 질이 주관사 선정에서 분석력과 딜 실행 경험을 보여주는 증거물이 된다.",
        definitionEn: "An analytical document prepared by ECM bankers to pitch a transaction to a potential issuer (CEO/CFO). Its core contents include market conditions, comparable company analysis, estimated valuation, and issuance timing recommendations. It is also the primary deliverable submitted by banks in the bookrunner selection competition (Bake-off). The quality of the pitchbook serves as evidence of the bank's analytical capability and deal execution experience.",
      },
      {
        term: "컴프 분석",
        termEn: "Comparable Company Analysis",
        definition: "상장 경쟁사의 EV/EBITDA, P/E, EV/Sales 등 멀티플을 취합해 피칭 기업의 예상 밸류에이션 범위를 산출하는 방법론이다. 같은 업종 내 유사 규모·성장성·수익성을 가진 기업 5~10개를 선별한다. 피어 선정이 밸류에이션 결과에 결정적 영향을 미치므로 어떤 기업을 비교 대상으로 넣느냐가 전략적 선택이다. ECM 피치북과 IPO 밸류에이션의 핵심 도구다.",
        definitionEn: "A methodology that compiles EV/EBITDA, P/E, and EV/Sales multiples from listed peers to derive a valuation range for the pitching company. Typically 5–10 companies with similar sector, scale, growth, and profitability are selected. Peer selection is strategically critical because it decisively shapes the valuation outcome — which companies to include is a deliberate choice. It is the core tool in both ECM pitchbooks and IPO valuation analysis.",
      },
      {
        term: "공모 타이밍 (Market Window)",
        termEn: "IPO Market Window",
        definition: "투자자 심리가 좋고 시장 변동성이 낮은 최적의 공모 실행 시기다. 연도 초~봄(1~5월)과 가을(9~11월)이 전통적으로 공모 시즌이다. 금리·지정학·섹터 모멘텀이 창을 열고 닫는다. 피치북에서 뱅커는 '지금이 창이 열려 있다'는 논리로 발행사에게 딜 결정을 촉구하는 경우가 많다.",
        definitionEn: "The optimal timing for executing a public offering, when investor sentiment is positive and market volatility is low. Traditionally, the prime issuance seasons are early spring (January–May) and autumn (September–November). Interest rates, geopolitical events, and sector momentum open and close the window. In pitchbooks, bankers frequently argue that the window is currently open to urge issuers to make a deal decision.",
      },
      {
        term: "언더라이팅 커미션",
        termEn: "Underwriting Commission",
        definition: "주관사가 공모 대금의 일정 비율을 수수료로 받는 구조다. 한국은 통상 0.5~1.5%, 미국은 5~7% 수준이다. 대형 딜일수록 비율이 낮아지는 규모의 경제 효과가 있다. 피치북에서 수수료 제안은 딜 경쟁력의 일부로, 지나치게 낮으면 서비스 품질이 저하될 수 있어 발행사도 무조건 최저가를 선택하지 않는다.",
        definitionEn: "The structure in which the underwriter receives a percentage of the total offering proceeds as a fee. The typical range is 0.5–1.5% in Korea and 5–7% in the US. There is an economies-of-scale effect where the rate decreases for larger deals. In pitchbooks, the fee proposal is part of the competitive pitch; issuers do not always choose the lowest fee, as excessively low fees may signal reduced service quality.",
      },
      {
        term: "뱅크 피치 (Bank Pitch)",
        termEn: "Bank Pitch / Beauty Contest",
        definition: "발행사가 여러 IB에게 제안을 받아 주관사를 선정하는 경쟁 과정이다. 피치북 품질, 팀 경험, 배분 네트워크, 시장 인사이트가 선택 기준이다. 형식적으로는 분석 품질로 결정되지만 실질적으로 과거 관계와 신뢰가 큰 역할을 한다. 뷰티 콘테스트(Beauty Contest)라고도 불리며, 선정된 주관사가 딜 수수료 전체를 나눠 갖는다.",
        definitionEn: "The competitive process in which the issuer receives proposals from multiple investment banks to select lead managers. Selection criteria include pitchbook quality, team experience, distribution network, and market insight. While formally decided on analytical merit, prior relationships and trust play a significant role in practice. Also called a beauty contest; selected underwriters share the deal fees among themselves.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-ipo-valuation", "ecm-rights-issue", "ecm-ipo-process"],
    appearsIn: [],
  },

  {
    slug: "ecm-abb-execution",
    title: "ABB 실행 매뉴얼 — 장 마감 후 12시간",
    titleEn: "ABB Execution Manual — 12 Hours After Market Close",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "ABB(Accelerated Book Building)는 자본시장에서 가장 빠른 딜. 장 마감 → mandate → IOI → pricing → 장 시작 전 완료. 시간대별 세부 프로세스, IOI Tracker 구조, 할인율 결정 로직, 헤지펀드 vs 장기 기관 배분 전략. Arm(2023)·삼성물산·SK하이닉스 블록 트레이드 케이스.",
    excerptEn:
      "ABB is the fastest deal in capital markets. Market close → mandate → IOI → pricing → done before open. Hour-by-hour process, IOI Tracker structure, discount decision logic, hedge fund vs long-only allocation strategy. ARM (2023), Samsung C&T, SK Hynix block trade cases.",
    readingMinutes: 14,
    tags: ["ABB", "블록트레이드", "IOI트래커", "할인율", "북빌드", "장외매매", "PE엑싯", "기관배분"],
    tagsEn: ["ABB", "Accelerated Bookbuild", "Block Trade", "IOI Tracker", "Discount", "PE Exit", "Institutional Allocation"],
    sections: [],
    keyTerms: [
      {
        term: "ABB (가속장부매출)",
        termEn: "Accelerated Book Build",
        definition: "상장 기업이 기관 투자자 대상으로 12~24시간 내에 신속하게 대규모 주식을 발행하는 방식이다. 긴 IPO 로드쇼 없이 소수 기관과 북빌드로 가격을 결정한다. 장 마감 후 매뉴데이트를 받아 다음 날 장 시작 전까지 딜을 완료하는 것이 목표다. 속도가 최대 장점이지만, 짧은 마케팅 기간으로 인해 3~5%의 할인이 수반된다.",
        definitionEn: "A method by which a listed company rapidly issues a large volume of shares to institutional investors within 12–24 hours. The price is set through a book-build with a select group of institutions without a lengthy IPO roadshow. The goal is to receive the mandate after market close and complete the deal before the next day's open. Speed is the key advantage, but the short marketing window typically requires a 3–5% discount.",
      },
      {
        term: "IOI (관심 표명)",
        termEn: "Indication of Interest",
        definition: "북빌드 과정에서 투자자가 얼마나 매수하겠다는 의향을 표시하는 초기 단계다. IOI는 법적 구속력이 없으며, 최종 배분은 가격 확정 후 북러너 재량으로 결정된다. 뱅커는 실시간 IOI 트래커를 통해 수요 누적 상황을 모니터링하고 가격 범위를 조정한다. 헤지펀드의 IOI는 장기 기관보다 신뢰도가 낮다고 평가되는 경향이 있다.",
        definitionEn: "The initial stage of the book-build process in which investors indicate how much they intend to purchase. IOIs are not legally binding, and final allocation is determined at the bookrunner's discretion after price setting. Bankers use a real-time IOI tracker to monitor demand accumulation and adjust the price range accordingly. Hedge fund IOIs tend to be viewed as less reliable than those from long-only institutions.",
      },
      {
        term: "ABB 할인율",
        termEn: "ABB Discount",
        definition: "ABB 발행 가격을 현재 시장가 대비 낮추는 비율로 통상 3~5%다. 투자자는 이 할인을 통해 즉각적 업사이드를 얻고 참여 유인이 생긴다. 할인율이 너무 높으면 발행사·기존 주주에게 불리하고, 너무 낮으면 수요 부족으로 딜이 실패할 수 있다. 시장 변동성이 높을수록 투자자들이 더 큰 할인을 요구하는 경향이 있다.",
        definitionEn: "The percentage by which the ABB issuance price is set below the current market price, typically 3–5%. Investors gain immediate upside from this discount, creating an incentive to participate. Too large a discount is unfavorable to the issuer and existing shareholders; too small a discount risks insufficient demand and deal failure. Investors tend to demand larger discounts when market volatility is high.",
      },
      {
        term: "블록 트레이드",
        termEn: "Block Trade",
        definition: "상장 기업의 대주주(PE·창업자)가 보유 주식을 일괄 매각하는 거래다. 통상 전체 지분의 5~10%를 ABB 방식으로 처분한다. 기업이 자금을 받는 Primary가 아니라 기존 주주가 현금화하는 Secondary 딜이다. 처분 규모가 크고 공개되면 주가가 하락할 수 있어 대부분 장 마감 후 비밀리에 진행된다.",
        definitionEn: "A transaction in which a major shareholder (PE, founder) sells a large block of listed company shares at once. Typically 5–10% of total holdings are disposed of via ABB. It is a Secondary deal where existing shareholders monetize rather than a Primary deal that raises capital for the company. Because large disclosed disposals can push down the stock price, most block trades are conducted confidentially after market close.",
      },
      {
        term: "Pre-Placement (사전 배정)",
        termEn: "Pre-Placement",
        definition: "ABB 개시 전 핵심 기관(앵커 투자자)에게 일정 수량을 미리 배정하는 방식이다. 전체 수요의 일부를 사전에 확보해 북빌드 리스크를 낮춘다. 사전 배정 투자자들은 통상 가격 범위 하단 또는 중간에서 배정을 받는 대가로 의향서를 먼저 제출한다. 시장이 불안정하거나 딜 규모가 클 때 특히 중요한 수요 확보 전략이다.",
        definitionEn: "The practice of pre-allocating a portion of shares to key institutions (anchor investors) before the ABB officially launches. Securing a portion of total demand in advance reduces book-build risk. Pre-placement investors typically submit their indication first in exchange for receiving allocation at the lower or mid-range of the price band. It is an especially important demand-securing strategy when markets are unstable or the deal size is large.",
      },
    ],
    relatedSlugs: ["ecm-followon", "ecm-ipo-allocation", "ecm-pitchbook", "ecm-overview"],
    appearsIn: [],
  },

  // ────────────────────────────────────────────────────────────────────────────
  // ECM 상품 시리즈 — 미싱 상품 완전 해설
  // ────────────────────────────────────────────────────────────────────────────

  {
    slug: "ecm-warrant-bond",
    title: "BW(신주인수권부사채) 완전 해설 — CB와 뭐가 다른가",
    titleEn: "Bond with Warrant (BW) Complete Guide — How It Differs from Convertible Bonds",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "BW는 CB처럼 보이지만 다르다. 채권과 신주인수권이 분리되어 따로 유통된다. 행사가 리픽싱의 함정, 한국 특유의 제3자 배정 BW 남용, SM엔터테인먼트·하이브 사례. Tesla Warrant 2021 구조와의 비교.",
    excerptEn:
      "BW looks like a CB but works differently — the bond and warrant trade separately after issuance. The rifixing trap, Korea's unique third-party BW abuse, SM Entertainment and HYBE cases. Comparison with Tesla Warrant 2021 structure.",
    readingMinutes: 16,
    tags: ["BW", "신주인수권부사채", "분리형BW", "리픽싱", "제3자배정", "SM엔터", "하이브", "행사가"],
    tagsEn: ["BW", "Bond with Warrant", "Detachable Warrant", "Rifixing", "Third-party Allotment", "SM Entertainment", "HYBE"],
    sections: [],
    keyTerms: [
      {
        term: "신주인수권부사채 (BW)",
        termEn: "Bond with Warrant",
        definition: "채권에 신주인수권(Warrant)을 결합한 하이브리드 증권이다. 전환사채(CB)와 달리 워런트를 행사해도 채권이 그대로 남아, 발행사는 채권과 주식 납입 두 번 자금 유입이 가능하다. 투자자 입장에서는 채권 이자를 받으면서 주가 상승 시 추가 수익을 올릴 수 있는 구조다. 한국 중소기업의 자금 조달 수단으로 많이 활용되지만 남용 사례도 빈번하다.",
        definitionEn: "A hybrid security that combines a bond with a stock purchase warrant. Unlike a convertible bond, exercising the warrant does not extinguish the bond — the issuer receives two inflows of funds: from the bond issuance and from warrant exercise. For investors, it provides bond interest income while allowing additional profit if the stock price rises. Widely used by Korean small and mid-cap companies for fundraising, but also frequently abused.",
      },
      {
        term: "신주인수권 (Warrant)",
        termEn: "Warrant",
        definition: "미리 정해진 행사가격으로 새 주식을 매수할 수 있는 권리다. BW에서 분리되어 별도 거래소에 상장될 경우(분리형) 개인 투자자도 주식처럼 매매 가능하다. 주가가 행사가격을 초과해야 행사가 의미 있다(In-the-Money). 워런트는 주식 옵션과 유사하지만, 행사 시 신주가 발행된다는 점에서 기존 주주를 희석시킨다.",
        definitionEn: "The right to purchase new shares at a pre-agreed exercise price. If separated from the bond and listed on an exchange (detachable), individual investors can also trade it like a stock. Exercise is only meaningful when the stock price exceeds the exercise price (in-the-money). While similar to a stock option, warrant exercise results in new share issuance, which dilutes existing shareholders.",
      },
      {
        term: "분리형 / 비분리형",
        termEn: "Detachable / Non-detachable",
        definition: "분리형은 채권과 워런트가 별도로 유통·매매 가능하고, 비분리형은 반드시 함께 유통된다. 한국에서는 분리형이 80% 이상이며 대주주 이익 실현 도구로 악용된 사례가 있다. 분리형 BW에서 제3자 배정 방식으로 대주주 측에 발행한 후 워런트를 분리해 매각하는 방식이 대표적 남용 패턴이다. 금융당국은 이를 규제하기 위한 다양한 조치를 도입했다.",
        definitionEn: "In a detachable structure, the bond and warrant can be traded separately; in a non-detachable structure, they must always trade together. Over 80% of Korean BWs are detachable, and there have been cases of abuse as tools for major shareholders to extract value. A typical abuse pattern involves issuing detachable BWs to a related party via third-party allotment and then separately selling the warrants. Financial regulators have introduced various measures to curb such practices.",
      },
      {
        term: "리픽싱 (Refixing)",
        termEn: "Refixing",
        definition: "주가 하락 시 BW 행사가격을 낮춰주는 조항이다. 투자자를 보호하지만 발행사 입장에서 더 많은 신주가 발행되어 기존 주주를 희석시킨다. 한국에서는 최초 행사가의 70% 이하로는 낮출 수 없도록 제한한다. 악의적인 행위자들이 리픽싱을 악용해 주가를 인위적으로 끌어내린 뒤 낮은 가격에 신주를 취득하는 사례가 발생했다.",
        definitionEn: "A clause that lowers the BW exercise price if the stock price falls. It protects the investor but leads to greater dilution for the issuer through additional share issuance. In Korea, refixing is capped at no lower than 70% of the original exercise price. There have been cases of bad actors manipulating stock prices downward to take advantage of refixing and acquire new shares at artificially low prices.",
      },
      {
        term: "행사가격",
        termEn: "Exercise Price / Strike Price",
        definition: "워런트 보유자가 신주를 매수할 수 있는 고정 가격이다. 발행 시 시장가 대비 10~30% 프리미엄으로 설정되는 것이 일반적이다. 주가가 행사가를 초과해야 행사가 의미 있다(In-the-Money). 행사가격이 낮을수록 투자자에게 유리하지만 발행사 기존 주주에게는 더 큰 희석을 의미한다.",
        definitionEn: "The fixed price at which a warrant holder can purchase new shares. It is typically set at a 10–30% premium above the market price at the time of issuance. Exercise is only meaningful when the stock price exceeds the exercise price (in-the-money). A lower exercise price is more favorable to the investor but represents greater dilution for the issuer's existing shareholders.",
      },
    ],
    relatedSlugs: ["ecm-convertible", "ecm-exchangeable-bond", "ecm-overview", "ecm-dual-class"],
    appearsIn: [],
  },

  {
    slug: "ecm-buyback",
    title: "자사주매입 완전 해설 — 발행의 반대, 주주환원의 핵심",
    titleEn: "Share Buyback Complete Guide — The Opposite of Issuance",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "S&P500 기업들은 연간 $1조+ 자사주를 산다. 왜 배당 대신 바이백인가, 공개시장 매수·ASR·공개매수 세 방식의 차이, 10b5-1 플랜의 구조, EPS 마법. Apple $90B·Berkshire 방식·삼성전자 자사주 소각 케이스.",
    excerptEn:
      "S&P 500 companies buy back $1T+ in stock annually. Why buyback over dividend, differences between open market repurchase, ASR, and tender offer, the 10b5-1 plan structure, EPS magic. Apple $90B, Berkshire's approach, and Samsung Electronics treasury share cancellation.",
    readingMinutes: 15,
    tags: ["자사주매입", "바이백", "10b5-1", "ASR", "공개매수", "EPS부스팅", "주주환원", "Apple바이백", "삼성자사주"],
    tagsEn: ["Share Buyback", "Repurchase", "10b5-1 Plan", "ASR", "Tender Offer", "EPS Boost", "Shareholder Return", "Apple Buyback"],
    sections: [],
    keyTerms: [
      {
        term: "자사주 매입 (Share Buyback)",
        termEn: "Share Buyback / Stock Repurchase",
        definition: "기업이 시장에서 자사 주식을 매입하는 행위다. 배당과 함께 주주 환원의 핵심 수단이며, 유통 주식 수를 줄여 EPS를 높이고 주주 가치를 높인다. S&P500 기업들은 연간 $1조 이상을 자사주 매입에 투입한다. 배당과 달리 일회성으로 조정 가능해 재무 유연성이 높다는 장점이 있다.",
        definitionEn: "The act of a company purchasing its own shares from the market. Along with dividends, it is a core mechanism for shareholder returns, reducing shares outstanding to raise EPS and enhance shareholder value. S&P 500 companies collectively spend over $1 trillion on buybacks annually. Unlike dividends, buybacks can be adjusted on a one-time basis, offering greater financial flexibility.",
      },
      {
        term: "EPS 부스트",
        termEn: "EPS Boost",
        definition: "자사주 매입으로 유통 주식 수가 줄면 동일 이익에서 주당 이익(EPS)이 높아지는 효과다. 시장은 EPS 개선을 긍정적으로 평가해 주가 상승을 유발하는 경향이 있다. 그러나 실제 영업 이익 성장 없는 재무 공학적 EPS 개선은 장기 가치 창출이 아니라는 비판도 있다. CEO 스톡옵션·보너스가 EPS 달성과 연동될 때 자사주 매입 유인이 커진다.",
        definitionEn: "The effect of reducing shares outstanding through buybacks, which raises earnings per share (EPS) from the same total earnings. Markets tend to view EPS improvement positively, driving stock price appreciation. However, critics argue that financial-engineering EPS gains without underlying operating profit growth do not represent long-term value creation. The incentive for buybacks increases when CEO stock options and bonuses are tied to EPS targets.",
      },
      {
        term: "ASR (가속주식환매)",
        termEn: "Accelerated Share Repurchase",
        definition: "IB와 선도거래로 일정 기간 내 대규모 자사주 매입을 즉시 실행하는 방식이다. 통상 최종 수량은 향후 평균 시장가로 결정된다. 기업이 자사주 매입 의지를 시장에 강하게 신호하는 효과가 있다. IB가 시장에서 주식을 수집하는 동안 기업은 즉시 주식을 인도받아 소각할 수 있다.",
        definitionEn: "A structure in which a company immediately executes a large-scale share repurchase via a forward contract with an investment bank. The final number of shares is typically determined by the average market price over a future period. It strongly signals the company's commitment to buybacks to the market. While the bank gathers shares from the market, the company receives and can cancel shares immediately.",
      },
      {
        term: "자사주 소각",
        termEn: "Share Cancellation",
        definition: "매입한 자사주를 영구 소각해 자본금을 줄이는 행위다. 재발행 없이 주식 수를 영구적으로 줄이는 주주 친화 정책이다. 한국에서는 자사주 매입 후 소각이 주주환원 기대 지표로 작용하며, 소각 발표 시 주가가 상승하는 경향이 있다. 반면 자사주를 소각하지 않고 보유하면 경영권 방어 수단으로 재활용될 가능성이 있어 투자자들이 소각을 선호한다.",
        definitionEn: "The permanent cancellation of repurchased treasury shares, reducing paid-in capital. It is a shareholder-friendly policy that permanently reduces shares outstanding without reissuance. In Korea, cancellation of treasury shares is viewed as a key indicator of shareholder return commitment, and stock prices tend to rise on cancellation announcements. By contrast, holding treasury shares without cancellation raises concerns about their potential reuse as a takeover defense tool.",
      },
      {
        term: "포이즌 필 (Poison Pill)",
        termEn: "Poison Pill",
        definition: "적대적 인수를 시도하는 세력이 일정 지분 이상을 취득하면 기존 주주들이 시장가보다 할인된 가격으로 신주를 매수할 수 있게 하는 방어 장치다. 인수자 지분을 희석시켜 적대적 인수를 비경제적으로 만든다. 자사주 매입과 달리 인수 방어 목적으로 활용된다. 미국에서는 광범위하게 사용되지만 한국에서는 아직 제한적으로만 허용된다.",
        definitionEn: "A defense mechanism that allows existing shareholders to purchase new shares at a discounted price if a hostile acquirer exceeds a certain ownership threshold. It dilutes the acquirer's stake, making a hostile takeover economically unattractive. Unlike share buybacks, it is used specifically for takeover defense. Widely used in the US, but only limitedly permitted in Korea.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-tender-offer", "ecm-ipo-allocation", "ecm-followon"],
    appearsIn: [],
  },

  {
    slug: "ecm-dual-class",
    title: "차등의결권 구조 — 창업자는 왜 지배권을 유지하려 하는가",
    titleEn: "Dual Class Share Structure — Why Founders Fight to Keep Control",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "Alphabet Class A(1표)·B(없음)·C(10표), Meta·Snap의 지배구조. 왜 기관 투자자는 반대하고 창업자는 사수하는가. 선셋 조항, 한국 스타트업 특례 도입, 카카오·네이버 지배구조 비교. 상장 후 차등의결권이 기업 가치에 미치는 영향.",
    excerptEn:
      "Alphabet Class A (1 vote), B (none), C (10 votes), Meta and Snap governance. Why institutional investors oppose it and founders fight for it. Sunset clauses, Korea's startup exception law, Kakao and Naver governance comparison. Impact of dual class on post-IPO valuation.",
    readingMinutes: 14,
    tags: ["차등의결권", "듀얼클래스", "Alphabet", "Meta", "Snap", "창업자지배권", "선셋조항", "한국특례", "지배구조"],
    tagsEn: ["Dual Class Shares", "Dual Class Structure", "Alphabet", "Meta", "Snap", "Founder Control", "Sunset Clause", "Corporate Governance"],
    sections: [],
    keyTerms: [
      {
        term: "차등의결권 (Dual Class Shares)",
        termEn: "Dual-Class Share Structure",
        definition: "동일 경제적 권리를 가지면서 의결권만 다른 복수 주식 클래스를 발행하는 지배구조 설계다. 창업자가 소수 지분으로 과반 의결권을 확보해 장기 전략을 실행할 수 있게 한다. Alphabet은 Class A(1표)·B(비상장, 10표)·C(무의결권) 3중 구조를 운영한다. 창업자 비전 보호와 투자자 소수 권리 보호 사이의 균형이 핵심 논쟁이다.",
        definitionEn: "A governance design that issues multiple share classes with identical economic rights but different voting rights. It allows founders to retain majority voting control with a minority economic stake, enabling long-term strategic execution. Alphabet operates a three-tier structure: Class A (1 vote), Class B (unlisted, 10 votes), and Class C (no vote). The core debate is the balance between protecting the founder's vision and safeguarding minority investor rights.",
      },
      {
        term: "선셋 조항 (Sunset Clause)",
        termEn: "Sunset Clause",
        definition: "창업자 사망, 일정 기간 경과, 지분율 하락 등 특정 조건이 충족되면 다중 의결권이 자동 소멸하는 조항이다. 기관 투자자의 '영구 지배' 우려를 완화하는 장치다. 선셋 조항이 없으면 창업자 후손들이 영구적으로 지배권을 유지할 수 있어 지배구조 할인이 더 커진다. 한국 차등의결권 특례법도 선셋 조항 포함을 요건으로 한다.",
        definitionEn: "A clause under which enhanced voting rights automatically expire upon specific conditions — such as the founder's death, a set time period, or a drop in ownership stake. It alleviates institutional investors' concerns about permanent entrenchment. Without a sunset clause, the founder's heirs could perpetually retain control, amplifying the governance discount. Korea's dual-class exception law also requires inclusion of a sunset clause.",
      },
      {
        term: "지배구조 할인",
        termEn: "Governance Discount",
        definition: "차등의결권 구조 기업은 같은 수익성의 단일 의결권 기업보다 낮게 평가받을 수 있는 현상이다. ISS 같은 의결권 자문사의 반대 권고와 지수 편입 제한이 주요 요인이다. 할인 규모는 지배구조 투명성, 선셋 조항 유무, 창업자의 실적에 따라 달라진다. 구조적으로 우수한 기업도 차등의결권 때문에 밸류에이션 불이익을 받을 수 있다.",
        definitionEn: "The phenomenon in which dual-class companies are valued lower than single-class peers with equivalent profitability. Key drivers include against recommendations from proxy advisors like ISS and exclusion from major indices. The magnitude of the discount varies based on governance transparency, the presence of sunset clauses, and the founder's track record. Even operationally strong companies can face valuation penalties due to their dual-class structure.",
      },
      {
        term: "ISS (의결권 자문사)",
        termEn: "ISS (Institutional Shareholder Services)",
        definition: "기관 투자자에게 주주총회 안건에 대한 찬반 권고를 제공하는 의결권 자문사다. 차등의결권이나 ESG 미준수 기업에 반대 권고를 내려 투자자 압박을 유도한다. 전 세계 연금·운용사의 상당수가 ISS 권고를 참고해 의결권을 행사한다. ISS의 반대 권고는 기업 주가와 자본비용에 실질적 영향을 미친다.",
        definitionEn: "A proxy advisory firm that provides institutional investors with voting recommendations on shareholder meeting agenda items. It issues against recommendations for companies with dual-class structures or ESG non-compliance, applying investor pressure. A significant portion of global pension funds and asset managers reference ISS recommendations when exercising voting rights. ISS against recommendations have a tangible impact on stock prices and cost of capital.",
      },
      {
        term: "지수 편입 페널티",
        termEn: "Index Inclusion Penalty",
        definition: "S&P 500·FTSE Russell이 2017년 이후 극단적 차등의결권 기업의 지수 편입을 제한하는 정책이다. 패시브 펀드 자금 유입이 차단되어 밸류에이션 하방 압력이 발생한다. 지수 편입 제한은 기업이 차등의결권 구조를 유지하는 비용을 명확히 드러낸다. 홍콩 HKEx는 반대로 차등의결권 기업 유치를 위해 상장 요건을 완화한 바 있다.",
        definitionEn: "A policy by which S&P 500 and FTSE Russell have restricted index inclusion for companies with extreme dual-class structures since 2017. Exclusion from passive fund inflows creates downward valuation pressure. The exclusion policy makes the cost of maintaining a dual-class structure explicit. In contrast, Hong Kong HKEx has relaxed listing requirements to attract dual-class companies.",
      },
    ],
    relatedSlugs: ["ecm-overview", "ecm-spac-direct", "ecm-ipo-process", "ecm-warrant-bond"],
    appearsIn: [],
  },

  {
    slug: "ecm-tender-offer",
    title: "공개매수 실무 — 경영권 거래의 ECM 측면",
    titleEn: "Tender Offer Practice — The ECM Side of Control Transactions",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "공개매수는 주식을 사는 행위지만 ECM 딜이다. 강제공개매수 규정(5%룰·30%룰), Squeeze-out 요건, 프리미엄 결정 논리, 방어 전략(Poison Pill·White Knight). Musk-Twitter $44B 딜 해부, SM엔터 하이브-카카오 경쟁 공개매수.",
    excerptEn:
      "A tender offer is buying stock, but it's an ECM deal. Mandatory tender offer rules (5% rule, 30% rule), squeeze-out requirements, premium determination logic, defense strategies (Poison Pill, White Knight). Musk-Twitter $44B deal dissected, SM Entertainment Hybe-Kakao competing offer.",
    readingMinutes: 16,
    tags: ["공개매수", "강제공개매수", "스퀴즈아웃", "포이즌필", "화이트나이트", "Musk-Twitter", "SM엔터", "경영권프리미엄"],
    tagsEn: ["Tender Offer", "Mandatory Tender", "Squeeze-out", "Poison Pill", "White Knight", "Musk-Twitter", "SM Entertainment", "Control Premium"],
    sections: [],
    keyTerms: [
      {
        term: "공개매수 (Tender Offer)",
        termEn: "Tender Offer",
        definition: "인수자가 불특정 다수 주주에게 미리 공표한 가격으로 주식을 사겠다고 제안하는 행위다. 이사회를 거치지 않고 주주에게 직접 접근할 수 있어 적대적 M&A의 핵심 도구다. 통상 현재 시장가 대비 20~40% 프리미엄으로 제안해 주주의 응모를 유도한다. 머스크의 Twitter $44B 인수가 대표적 공개매수 사례다.",
        definitionEn: "An offer by an acquirer to buy shares from an unspecified number of shareholders at a publicly announced price. It allows the acquirer to approach shareholders directly, bypassing the board, making it a key tool for hostile M&A. Offers are typically made at a 20–40% premium to the current market price to encourage shareholder tendering. Elon Musk's $44B acquisition of Twitter is a prominent example of a tender offer.",
      },
      {
        term: "강제공개매수 규정",
        termEn: "Mandatory Tender Offer",
        definition: "일정 지분 초과 취득 시 나머지 주주에게도 동일 조건으로 매수를 제안해야 하는 규정이다. 한국은 5%룰(5% 초과 취득 시 공시)과 30%룰(30% 초과 시 강제 공개매수)을 적용한다. 소수 주주 보호가 목적이며, 지배 주주만 프리미엄을 받고 나머지 주주는 소외되는 상황을 방지한다. 유럽은 30% 이상 취득 시 100% 의무 공개매수(Full Bid)를 요구한다.",
        definitionEn: "A rule requiring an acquirer to offer the same purchase terms to all remaining shareholders once a specified ownership threshold is exceeded. Korea applies the 5% rule (disclosure required above 5%) and the 30% rule (mandatory tender offer above 30%). Its purpose is to protect minority shareholders and prevent situations where only the controlling shareholder receives a premium. Europe requires a full bid for 100% of shares once the 30% threshold is crossed.",
      },
      {
        term: "스퀴즈아웃 (Squeeze-out)",
        termEn: "Squeeze-out",
        definition: "지배 주주가 소수 주주의 주식을 강제로 매입해 회사를 완전 자회사화하는 행위다. 한국에서는 95% 이상 취득 시 나머지 5%를 강제 취득 가능하다. 소수 주주는 공정한 보상을 받을 권리가 있으며, 법원이 가격 결정에 개입하기도 한다. 완전 자회사화 후에는 상장 폐지(De-listing)가 진행된다.",
        definitionEn: "The forced acquisition of minority shareholders' shares by the controlling shareholder to make the company a wholly owned subsidiary. In Korea, once 95% ownership is reached, the remaining 5% can be compulsorily acquired. Minority shareholders have the right to fair compensation, and courts may intervene in price determination. After full privatization, the company is subsequently delisted.",
      },
      {
        term: "포이즌 필 (Poison Pill)",
        termEn: "Poison Pill",
        definition: "적대적 인수자가 일정 지분을 초과 취득하면 기존 주주들이 할인 가격에 신주를 매수할 수 있게 하는 방어 전략이다. 인수자 지분을 희석시켜 적대적 인수를 비경제적으로 만든다. 이사회가 주주 동의 없이 발동할 수 있어 적대적 인수 억지력이 강하다. Twitter는 머스크의 인수 시도에 대응해 포이즌 필을 발동했다가 합의에 이른 사례다.",
        definitionEn: "A defense strategy that allows existing shareholders to purchase new shares at a discount if a hostile acquirer exceeds a certain ownership threshold. It dilutes the acquirer's stake, making the hostile takeover economically unattractive. Because the board can trigger it without shareholder approval, it serves as a powerful deterrent against hostile bids. Twitter activated a poison pill in response to Musk's acquisition attempt before ultimately reaching an agreement.",
      },
      {
        term: "경영권 프리미엄",
        termEn: "Control Premium",
        definition: "공개매수 시 현재 시장가 대비 추가 지불하는 웃돈으로 통상 20~40%다. 지배권을 획득함으로써 창출할 수 있는 기대 가치(시너지·구조조정)를 반영한다. 프리미엄이 높을수록 인수자의 통합 가치에 대한 확신이 강하다는 신호다. 경쟁 공개매수(SM엔터 하이브-카카오 사례)에서는 프리미엄이 더 높아지는 경향이 있다.",
        definitionEn: "The additional amount paid above the current market price in a tender offer, typically 20–40%. It reflects the expected value to be created through control — synergies, restructuring, and strategic realignment. A higher premium signals stronger conviction by the acquirer about integration value. In competing tender offers (such as the Hybe-Kakao battle for SM Entertainment), premiums tend to escalate further.",
      },
    ],
    relatedSlugs: ["ecm-buyback", "ecm-dual-class", "ecm-overview", "ecm-followon"],
    appearsIn: [],
  },

  {
    slug: "ecm-exchangeable-bond",
    title: "EB(교환사채) 완전 해설 — 남의 주식으로 갚는 채권",
    titleEn: "Exchangeable Bond (EB) Complete Guide — Repaying with Someone Else's Shares",
    entryType: "article",
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt:
      "EB는 CB와 닮았지만 발행사가 아닌 제3자 주식으로 교환된다. SoftBank의 Alibaba 지분 EB로 $11B 조달, 현대차그룹 계열사 EB 구조. 발행사 입장에서 EB가 CB보다 유리한 경우, 세금 처리, 희석 여부.",
    excerptEn:
      "An EB looks like a CB but exchanges into a third party's shares, not the issuer's. SoftBank raised $11B via Alibaba share EB. Hyundai Motor Group affiliate EB structure. When EB beats CB for the issuer, tax treatment, and dilution analysis.",
    readingMinutes: 14,
    tags: ["교환사채", "EB", "SoftBank", "알리바바", "현대차EB", "제3자주식", "CB비교", "하이브리드증권"],
    tagsEn: ["Exchangeable Bond", "EB", "SoftBank", "Alibaba", "Third-Party Shares", "Hybrid Securities", "CB Comparison"],
    sections: [],
    keyTerms: [
      {
        term: "교환사채 (EB)",
        termEn: "Exchangeable Bond",
        definition: "발행사가 보유 중인 제3자(또는 자사 자기주식)의 주식으로 상환되는 채권이다. 전환사채(CB)는 새 주식을 발행하므로 희석이 발생하지만, EB는 기존 주식을 이전하므로 희석이 없다. SoftBank가 알리바바 지분을 기초자산으로 $11B EB를 발행한 것이 대표 사례다. 발행사 입장에서는 보유 자산을 처분하면서 자금을 조달하는 이중 효과를 얻는다.",
        definitionEn: "A bond redeemed with shares of a third party (or the issuer's own treasury shares) held by the issuer. Unlike a convertible bond — which issues new shares and thus dilutes existing shareholders — an EB transfers existing shares and causes no dilution. SoftBank's $11B EB using Alibaba shares as the underlying asset is the iconic example. For the issuer, it achieves a dual effect: disposing of held assets while raising capital.",
      },
      {
        term: "기초자산 (Underlying Shares)",
        termEn: "Underlying Shares",
        definition: "EB에서 교환 대상이 되는 주식이다. 발행사가 미리 보유하고 있어야 한다. SoftBank의 EB는 알리바바 지분을, 현대차그룹 계열 EB는 계열사 주식을 기초자산으로 사용했다. 기초자산 주가 변동이 EB의 가치에 직접 영향을 미치며, 투자자는 기초자산 상승 시 주식 교환으로 이익을 취한다.",
        definitionEn: "The shares into which an EB can be exchanged. The issuer must already hold these shares. SoftBank's EB used Alibaba shares as the underlying asset, while Hyundai Motor Group affiliate EBs used affiliated company shares. The performance of the underlying shares directly affects the EB's value; investors profit by exchanging into shares when the underlying stock price rises.",
      },
      {
        term: "희석 부재 (No Dilution)",
        termEn: "No Dilution",
        definition: "EB 전환 시 기존 주식을 이전하므로 발행사 주식의 유통 주식 수가 늘어나지 않는다. 이 점에서 신주 발행이 수반되는 CB·BW보다 발행사 기존 주주에게 유리하다. 다만 발행사가 보유하던 제3자 지분이 사라지면서 간접 자산 감소가 발생한다. 구조적 희석은 없지만 포트폴리오 자산 처분이라는 경제적 비용이 수반된다.",
        definitionEn: "Since EB conversion transfers existing shares rather than issuing new ones, the issuer's shares outstanding do not increase. This makes EB more favorable for the issuer's existing shareholders than CBs or BWs, which require new share issuance. However, the issuer's third-party stake disappears, resulting in an indirect reduction in assets. There is no structural dilution, but the disposal of portfolio assets carries its own economic cost.",
      },
      {
        term: "CB vs EB 전략적 선택",
        termEn: "CB vs EB Strategic Choice",
        definition: "발행사가 처분을 원하는 대량의 제3자 주식을 보유한 경우 EB 방식이 유리하다. 블록세일보다 낮은 가격 충격으로 지분을 서서히 시장에 공급하는 효과가 있다. CB는 신규 자금 조달이 목적이고, EB는 기존 자산 처분과 자금 조달을 동시에 달성하는 것이 목적이다. 두 방식 모두 저금리 환경에서 낮은 쿠폰으로 발행 가능한 하이브리드 구조다.",
        definitionEn: "When the issuer holds a large block of third-party shares it wishes to divest, EB is the preferred structure. It supplies shares to the market gradually with less price impact than a block sale. The purpose of a CB is to raise new capital, while EB simultaneously achieves asset disposal and capital raising. Both structures allow issuance at low coupons in a low-interest-rate environment as hybrid instruments.",
      },
      {
        term: "EB 발행 동기",
        termEn: "EB Issuance Motivation",
        definition: "EB는 계열사 지분 정리, 세금 이연 효과(주식 양도세 대신 이자 구조), 시장 충격 없는 대규모 지분 처분의 세 가지 목적으로 사용된다. 대량 지분 매각 시 블록 세일로 인한 주가 급락을 피하면서 서서히 시장에 공급하는 효과가 있다. 만기까지 교환이 없으면 채권으로 원리금을 상환하고 지분도 유지할 수 있다는 유연성도 있다. SoftBank의 Alibaba EB가 이 세 가지 동기를 모두 갖춘 대표 사례다.",
        definitionEn: "EB issuance is driven by three main motivations: unwinding affiliate holdings, tax deferral effects (interest structure instead of equity transfer tax), and disposing of large stakes without market disruption. It allows gradual supply to the market, avoiding the sharp price decline associated with a block sale. If no exchange occurs by maturity, the issuer repays principal and interest as a bond while retaining the stake — adding flexibility. SoftBank's Alibaba EB is the defining case combining all three motivations.",
      },
    ],
    relatedSlugs: ["ecm-convertible", "ecm-warrant-bond", "ecm-overview", "ecm-buyback"],
    appearsIn: [],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // ── 구조화금융 시리즈 (Structured Finance Series) ─────────────────────────────
  // ─────────────────────────────────────────────────────────────────────────────

  {
    slug: "structured-overview",
    title: "구조화금융 개요 — 증권화 기계 해부: SPV·워터폴·트랑쉐",
    titleEn: "Structured Finance Overview — Inside the Securitization Machine: SPV, Waterfall & Tranches",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "은행이 대출채권을 SPV에 팔고, SPV가 이를 묶어 등급별 채권으로 다시 판다. ABS·CLO·CMBS·CDO가 모두 이 하나의 메커니즘 위에 세워진다. 증권화의 원리, 트랑쉐 구조, 신용 보강 방법, 그리고 2008년 금융위기가 이 기계를 어떻게 망가뜨렸는지.",
    excerptEn: "Banks sell loan pools to an SPV; the SPV bundles them into rated bonds sold to investors. ABS, CLO, CMBS, and CDO all stand on this single mechanism. The logic of securitization, tranche structure, credit enhancement methods, and how the 2008 crisis broke the machine.",
    readingMinutes: 14,
    tags: ["구조화금융", "증권화", "SPV", "트랑쉐", "워터폴", "신용보강", "ABS", "CLO", "CMBS", "CDO"],
    tagsEn: ["Structured Finance", "Securitization", "SPV", "Tranche", "Waterfall", "Credit Enhancement", "ABS", "CLO", "CMBS"],
    sections: [], keyTerms: [
      {
        term: "증권화 (Securitization)",
        termEn: "Securitization",
        definition: "유동성이 낮은 자산(대출, 모기지, 카드채권)을 SPV에 매각하고, SPV가 이를 담보로 채권을 발행해 자본시장에 판매하는 구조. 은행이 대출채권을 장부에서 제거(Off-balance sheet)하고 새로운 대출을 위한 자본을 확보할 수 있게 한다. ABS·CLO·CMBS·CDO 모두 이 하나의 메커니즘 위에 세워진다. 2008년 금융위기는 이 기계가 검증되지 않은 방식으로 과도하게 사용될 때 어떤 결과를 낳는지 보여준 역사적 교훈이다.",
        definitionEn: "A process of selling illiquid assets (loans, mortgages, card receivables) to an SPV, which issues bonds backed by those assets to capital markets investors. Allows banks to remove loan assets from their balance sheet (off-balance sheet treatment) and free up capital for new lending. ABS, CLO, CMBS, and CDO all rest on this single mechanism. The 2008 financial crisis showed what happens when this machine is used excessively without proper validation.",
      },
      {
        term: "SPV (특수목적법인)",
        termEn: "Special Purpose Vehicle (SPV)",
        definition: "증권화의 핵심 도구. 원 발행자(Originator)로부터 자산을 매입하고, 그 자산을 담보로 채권을 발행하는 법적으로 독립된 법인이다. SPV는 파산 격리(Bankruptcy Remote) 구조여야 한다 — 즉 원 발행자가 파산하더라도 SPV의 자산과 채권은 영향을 받지 않는다. '진정한 양도(True Sale)'가 인정되어야 SPV가 원 발행자의 파산 위험에서 분리된다. 투자자 입장에서는 은행 신용이 아닌 자산 풀의 현금흐름만을 신뢰하는 구조다.",
        definitionEn: "The core tool of securitization. A legally independent entity that purchases assets from the originator and issues bonds backed by those assets. The SPV must be bankruptcy-remote — meaning the originator's insolvency does not affect the SPV's assets or bondholders. A 'true sale' legal opinion is required to confirm the SPV is separated from the originator's bankruptcy risk. From the investor's perspective, the structure relies solely on the asset pool's cash flows, not the originator's credit.",
      },
      {
        term: "트랑쉐 (Tranche)",
        termEn: "Tranche",
        definition: "증권화에서 자산 풀의 현금흐름을 우선순위별로 분리한 채권 등급. 선순위(Senior)가 가장 먼저 원리금을 받고 가장 나중에 손실을 흡수한다. 메자닌(Mezzanine)은 그 다음, 에쿼티(Equity/첫손실 조각)는 가장 먼저 손실을 흡수하는 대신 초과 현금흐름을 모두 가져간다. 이 구조 덕분에 BBB 등급 자산 풀에서도 AAA 등급 선순위 채권을 만들어낼 수 있다 — 신용 보강의 핵심 메커니즘이다.",
        definitionEn: "In securitization, tranches divide the asset pool's cash flows by priority. Senior tranches receive principal and interest first and absorb losses last. Mezzanine sits in between, while the equity (or first-loss) tranche absorbs losses first but captures all excess cash flows. This structure allows a AAA-rated senior bond to be created from a pool of BBB-rated assets — the core mechanism of credit enhancement.",
      },
      {
        term: "워터폴 (Waterfall)",
        termEn: "Waterfall",
        definition: "트랑쉐 간 현금흐름 배분 순서를 정한 규칙. 자산 풀에서 현금이 들어오면 선순위부터 순서대로 채워진다. 연체·부실이 발생하면 에쿼티부터 손실을 흡수하고, 에쿼티가 소진되면 메자닌, 마지막으로 선순위 순서로 손실이 전달된다. 워터폴 구조는 각 트랑쉐가 얼마나 많은 버퍼를 가지는지 — 즉 자산 풀의 몇 %가 손실 나야 내 채권이 손실을 입는지 — 를 결정한다. OC 트리거, IC 트리거 발동 시 후순위 트랑쉐로의 현금 흐름이 차단된다.",
        definitionEn: "The rules governing how cash flows are distributed across tranches. When cash enters from the asset pool, it fills from senior down to equity. When defaults occur, the equity tranche absorbs losses first; once exhausted, losses cascade to mezzanine and then senior. The waterfall determines each tranche's buffer — what percentage of the asset pool must default before a given tranche suffers any loss. When OC or IC triggers are breached, cash flow to junior tranches is redirected to deleverage senior notes.",
      },
      {
        term: "신용 보강 (Credit Enhancement)",
        termEn: "Credit Enhancement",
        definition: "선순위 트랑쉐의 신용도를 높이기 위해 구조화금융에서 사용하는 4가지 핵심 도구. ①후순위화: 에쿼티·메자닌이 선순위 앞에서 손실을 흡수, ②과잉담보(OC): 채권 발행액보다 더 많은 자산을 SPV에 넣음, ③초과 스프레드(XS): 자산 이자율이 채권 쿠폰보다 높아 발생하는 여분, ④준비적립금(Reserve Fund): 초기에 쌓아두는 현금 쿠션. 신용평가사는 이 4가지를 합산해 각 트랑쉐에 신용등급을 부여한다.",
        definitionEn: "Four key tools used in structured finance to enhance the credit quality of senior tranches. ①Subordination: equity and mezzanine absorb losses before senior; ②Overcollateralization (OC): more assets are placed in the SPV than bonds issued; ③Excess Spread (XS): the margin between asset yields and bond coupons; ④Reserve Fund: upfront cash cushion. Rating agencies combine all four to assign credit ratings to each tranche.",
      },
    ],
    relatedSlugs: ["structured-abs", "structured-clo", "structured-cmbs", "structured-waterfall"],
    appearsIn: [],
  },

  {
    slug: "structured-abs",
    title: "ABS (자산담보부증권) 완전 해설 — 자동차 할부·카드·학자금이 채권이 되는 과정",
    titleEn: "ABS Complete Guide — How Auto Loans, Credit Cards & Student Loans Become Bonds",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "현대캐피탈의 자동차 할부채권, 신한카드의 카드 매출채권, 미국의 학자금 대출이 ABS가 되는 과정. 선순위·후순위 트랑쉐, 과잉담보(OC), 초과 스프레드(XS), 준비적립금 — 신용 보강의 4가지 도구. Toyota ABS, SoFi 학자금 ABS 실제 구조 해부.",
    excerptEn: "How Hyundai Capital auto loans, Shinhan Card receivables, and US student loans become ABS. Senior/subordinate tranches, overcollateralization (OC), excess spread (XS), reserve funds — the four credit enhancement tools. Toyota ABS and SoFi student loan ABS real structure dissection.",
    readingMinutes: 15,
    tags: ["ABS", "자산담보부증권", "자동차ABS", "카드ABS", "학자금ABS", "신용보강", "SPV", "과잉담보", "Toyota", "현대캐피탈"],
    tagsEn: ["ABS", "Asset-Backed Securities", "Auto ABS", "Credit Card ABS", "Student Loan ABS", "Credit Enhancement", "Toyota ABS", "SoFi"],
    sections: [], keyTerms: [
      {
        term: "ABS (자산담보부증권)",
        termEn: "Asset-Backed Securities (ABS)",
        definition: "자동차 할부, 신용카드 매출채권, 학자금 대출, 장비 리스 등 동질적인 소비자·기업 대출을 묶어 SPV를 통해 발행하는 증권. 은행이 대출채권을 장부에서 제거(off-balance sheet)하고 새로운 대출 자금을 마련할 수 있게 한다. 선순위·후순위 트랑쉐 구조와 신용 보강 장치 덕분에 원 자산 등급보다 높은 신용도의 채권이 만들어진다. 한국에서는 현대캐피탈 자동차 ABS, 신한카드 카드채권 ABS가 대표 사례다.",
        definitionEn: "Securities issued through an SPV backed by homogeneous consumer or corporate loans such as auto finance, credit card receivables, student loans, and equipment leases. Allows banks to remove loan assets off their balance sheet and recycle capital for new lending. Through senior/subordinate tranche structures and credit enhancement, bonds with higher credit quality than the underlying assets are created. Hyundai Capital auto ABS and Shinhan Card receivables ABS are representative Korean examples.",
      },
      {
        term: "자동차 ABS",
        termEn: "Auto ABS",
        definition: "자동차 할부 대출 또는 리스 채권을 담보로 발행하는 ABS. 단기(3~5년) 만기, 고분산, 상대적으로 낮은 연체율로 신용 품질이 우수하다. Toyota Financial Services, Hyundai Capital 등이 정기적으로 발행하며 비용 효율적인 자금조달 수단이다. 자동차 가격 하락·금리 상승 시 차주 채무불이행 증가 위험이 있으나, 자동차 잔존가치 회수로 손실을 일부 방어한다. 2024년 미국 자동차 ABS 발행액은 연간 $1,200억을 상회했다.",
        definitionEn: "ABS backed by auto loans or lease receivables. Features short maturities (3–5 years), high diversification, and relatively low delinquency rates, giving it strong credit quality. Toyota Financial Services, Hyundai Capital and others issue regularly as a cost-efficient funding tool. Risks include increased borrower default from falling vehicle values or rising rates, though vehicle residual value recovery provides partial loss protection. US auto ABS issuance exceeded $120B annually in 2024.",
      },
      {
        term: "카드 ABS (Credit Card ABS)",
        termEn: "Credit Card ABS",
        definition: "신용카드 매출채권을 담보로 발행하는 ABS. 회전(Revolving) 구조 — 기존 채권이 상환되면 새로운 카드 사용 채권으로 교체된다. 재투자 기간(Revolving Period) 후 상환 기간(Amortization Period)으로 전환된다. 카드 사용자의 소비 패턴·연체율·결제율(Payment Rate)이 핵심 분석 변수다. 신한카드, KB국민카드 등이 한국 주요 발행사이며, 미국의 American Express, Citibank도 정기적으로 발행한다.",
        definitionEn: "ABS backed by credit card receivables. Features a revolving structure — as existing receivables are repaid, new card spending receivables replace them. After a revolving period, it transitions to an amortization period. Key analytical variables include cardholder spending patterns, delinquency rates, and payment rates. Shinhan Card and KB Kookmin Card are major Korean issuers; American Express and Citibank issue regularly in the US.",
      },
      {
        term: "선순위-후순위 구조 (Senior-Sub Structure)",
        termEn: "Senior-Subordinate Structure",
        definition: "ABS에서 자산 풀 현금흐름의 배분 우선순위를 정하는 핵심 신용 보강 방법. 선순위(AAA) 트랑쉐가 이자와 원금을 가장 먼저 받고, 후순위(메자닌·BB, 에쿼티)가 나머지를 받는다. 손실 발생 시 에쿼티→메자닌→선순위 순으로 흡수한다. 예: 자산 풀 손실이 10%여도 후순위 25%가 버퍼 역할을 하면 선순위 75%는 무손실. 신용평가사는 이 버퍼 두께를 스트레스 테스트해 선순위 등급을 결정한다.",
        definitionEn: "The core credit enhancement method in ABS that establishes the priority of cash flow distribution from the asset pool. Senior (AAA) tranches receive interest and principal first; subordinate (mezzanine BB, equity) receive what remains. In case of losses: equity absorbs first, then mezzanine, then senior. Example: even with 10% pool losses, if 25% subordination acts as buffer, the 75% senior tranche suffers zero loss. Rating agencies stress-test this buffer depth to determine the senior tranche rating.",
      },
      {
        term: "준비적립금 (Reserve Fund)",
        termEn: "Reserve Fund",
        definition: "ABS 발행 시 초기에 적립해 두는 현금 쿠션. 자산 풀 잔액의 일정 비율(보통 0.5~2%)을 신탁 계좌에 예치하고, 예상치 못한 손실이나 유동성 부족 시 이자 지급에 사용한다. 선순위 투자자의 신용 보강 수단 중 하나로, 신용평가사가 등급 부여 시 반영한다. 자산 연체율이 임계치를 넘으면 준비적립금이 먼저 소진되고, 그 후 에쿼티→메자닌 순서로 손실이 흡수된다.",
        definitionEn: "A cash cushion set aside at ABS issuance. A specified percentage (typically 0.5–2%) of the asset pool balance is deposited in a trust account and used for interest payments in case of unexpected losses or liquidity shortfalls. One of several credit enhancement tools factored into rating agency assessments. When pool delinquency exceeds a threshold, the reserve fund is depleted first, followed by equity then mezzanine loss absorption.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-waterfall", "structured-clo", "structured-cmbs"],
    appearsIn: [],
  },

  {
    slug: "structured-clo",
    title: "CLO 완전 해설 — 레버리지론이 채권이 되는 과정 & 2024년 CLO 붐",
    titleEn: "CLO Complete Guide — How Leveraged Loans Become Bonds & the 2024 CLO Boom",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "CLO는 100~200개 레버리지드론을 담보로 AAA~에쿼티 8개 트랑쉐 채권을 발행한다. CLO 매니저(Blackstone·Apollo·Ares)의 역할, 램프업→재투자→정산 3단계 라이프사이클, AAA 투자자가 레버리지드론 리스크를 피하는 방법. 2024년 글로벌 CLO 발행 $185B 신기록 배경.",
    excerptEn: "A CLO issues 8 tranches from AAA to equity backed by 100-200 leveraged loans. CLO manager roles (Blackstone, Apollo, Ares), the 3-stage lifecycle (ramp-up to reinvestment to wind-down), and how AAA investors avoid leveraged loan risk. Background to 2024 record $185B global CLO issuance.",
    readingMinutes: 16,
    tags: ["CLO", "담보대출채권", "레버리지론", "CLO매니저", "Blackstone", "Apollo", "AAA트랑쉐", "재투자기간", "LevFin"],
    tagsEn: ["CLO", "Collateralized Loan Obligation", "Leveraged Loans", "CLO Manager", "Blackstone", "Apollo", "AAA Tranche", "Reinvestment Period"],
    sections: [], keyTerms: [
      {
        term: "CLO (대출담보부채권)",
        termEn: "Collateralized Loan Obligation (CLO)",
        definition: "100~200개의 레버리지드 론(LBO 인수금융, BB~B 등급 기업 대출)을 담보로 AAA~에쿼티 8개 트랑쉐 채권을 발행하는 구조화금융 상품. 가장 정교하고 규모가 큰 ABS 형태 중 하나로, 글로벌 레버리지드 론 시장의 65%를 CLO가 보유한다. CLO는 채권(Bond)이 아닌 '론(Loan)'을 담보로 한다는 점에서 일반 ABS와 구분된다. Blackstone·Apollo·Ares 같은 대형 얼터너티브 자산운용사가 주요 CLO 매니저다.",
        definitionEn: "A structured finance product that issues 8 tranches from AAA to equity backed by 100–200 leveraged loans (LBO acquisition finance, BB–B rated corporate loans). One of the most sophisticated and large-scale ABS forms, CLOs hold approximately 65% of the global leveraged loan market. Unlike regular ABS, CLOs are backed by loans (not bonds). Major alternative asset managers like Blackstone, Apollo, and Ares are leading CLO managers.",
      },
      {
        term: "CLO 매니저 (CLO Manager)",
        termEn: "CLO Manager",
        definition: "CLO 구조 안에서 담보 대출 풀을 운용하는 전문 자산운용사. 론 선별, 재투자 기간 중 포트폴리오 교체, 크레딧 모니터링을 담당한다. 매니저의 실적(Manager Track Record)은 CLO 발행 비용과 투자자 수요에 직접 영향을 미친다. 소수 상위 매니저(Tier-1: Blackstone, Apollo, Ares, PGIM)는 AAA 트랑쉐 스프레드가 낮고, 신규 매니저는 더 높은 쿠폰을 제공해야 한다. 매니저는 에쿼티 트랑쉐를 5~10% 보유해 이해관계를 투자자와 정렬한다.",
        definitionEn: "A specialist asset manager that operates the collateral loan pool within the CLO structure. Responsible for loan selection, portfolio replacement during the reinvestment period, and credit monitoring. Manager track record directly affects CLO issuance costs and investor demand. Tier-1 managers (Blackstone, Apollo, Ares, PGIM) command tighter AAA spreads, while newer managers must offer higher coupons. The manager retains 5–10% of the equity tranche to align interests with investors.",
      },
      {
        term: "재투자 기간 (Reinvestment Period)",
        termEn: "Reinvestment Period",
        definition: "CLO 라이프사이클 3단계 중 핵심 단계. 램프업(1~6개월, 초기 론 매입) 후 보통 4~5년간 진행. 이 기간 동안 CLO 매니저는 상환된 원금으로 새로운 론을 매입해 담보 풀을 유지한다. 재투자 기간이 끝나면 CLO는 새 론 매입 없이 원금을 순차적으로 상환하는 정산 단계(Wind-down)로 전환된다. 재투자 기간의 길이가 CLO 에쿼티 투자자의 수익률에 결정적이다 — 재투자 기간이 길수록 초과 스프레드를 더 오래 수취할 수 있다.",
        definitionEn: "The core phase of the CLO lifecycle's three stages. Following the ramp-up period (1–6 months of initial loan purchases), it typically lasts 4–5 years. During this period, the CLO manager purchases new loans with repaid principal to maintain the collateral pool. After the reinvestment period ends, the CLO transitions to a wind-down phase, repaying principal sequentially without buying new loans. The length of the reinvestment period is critical to CLO equity investors' returns — a longer period means more excess spread accrual.",
      },
      {
        term: "AAA 트랑쉐 (CLO AAA)",
        termEn: "AAA Tranche (CLO AAA)",
        definition: "CLO에서 가장 선순위이며 신용도가 가장 높은 트랑쉐. 보통 CLO 총 발행액의 60~65%를 차지하며, 자산 풀(레버리지드 론)의 평균 신용등급이 B~BB임에도 불구하고 AAA 등급을 받는다. 두꺼운 후순위 버퍼(35~40%)와 OC·IC 트리거가 선순위를 보호한다. 2020년 COVID 충격에서 CLO AAA 트랑쉐는 단 한 건도 디폴트하지 않았다 — 2008년 RMBS/CDO 와는 달리 실제 분산된 기업 대출이 담보여서 시스템적 상관관계가 낮았기 때문이다.",
        definitionEn: "The most senior and highest-quality tranche in a CLO. Typically representing 60–65% of total CLO issuance, it achieves a AAA rating despite the collateral pool (leveraged loans) having an average rating of B to BB. Thick subordination buffers (35–40%) and OC/IC triggers protect the senior tranche. During the 2020 COVID shock, not a single CLO AAA tranche defaulted — unlike 2008 RMBS/CDO, the diversified corporate loan collateral had low systemic correlation.",
      },
      {
        term: "2024 CLO 붐",
        termEn: "2024 CLO Boom",
        definition: "2024년 전 세계 CLO 발행이 $1,850억이라는 사상 최대 기록을 달성한 현상. 배경: ①레버리지드 론 공급 증가(PE 인수금융), ②투자자들의 변동금리 선호(금리 고점 유지), ③CLO 에쿼티 수익률 개선. CLO 발행 붐은 레버리지드 론 시장에 막대한 수요를 공급하며 차입 비용을 낮추는 순환 피드백 구조를 만든다. Blackstone·Apollo·Ares 등 사모 신용 펀드가 CLO 매니저 역할을 확대하며 은행 경쟁자로 부상했다.",
        definitionEn: "The phenomenon of global CLO issuance reaching a record $185 billion in 2024. Drivers: ①Increased leveraged loan supply from PE acquisition finance; ②Investor preference for floating rate instruments (rates held near peak); ③Improving CLO equity returns. The CLO issuance boom creates a circular feedback loop supplying massive demand to the leveraged loan market, lowering borrowing costs. Private credit funds like Blackstone, Apollo, and Ares expanded their CLO manager roles, emerging as serious competitors to banks.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-waterfall", "levfin-ecosystem", "structured-abs"],
    appearsIn: [],
  },

  {
    slug: "structured-cmbs",
    title: "CMBS 완전 해설 — 상업용 부동산 모기지가 채권이 되는 과정 & 오피스 CMBS 위기",
    titleEn: "CMBS Complete Guide — How Commercial Mortgages Become Bonds & the Office CMBS Crisis",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "오피스·리테일·호텔·물류센터 등 상업용 부동산 모기지를 SPV로 넘겨 CMBS를 발행하는 구조. LTV·DSCR·NOI 핵심 지표, 선순위·메자닌·B피스 트랑쉐 구조, 스페셜 서비서 역할. 코로나19 이후 오피스 CMBS 부실 급증과 WeWork·Brookfield CMBS 디폴트 케이스.",
    excerptEn: "Securitization of office, retail, hotel, and logistics mortgages into CMBS via SPV. Key metrics LTV, DSCR, NOI; senior/mezzanine/B-piece tranche structure; special servicer role. Rapid post-COVID office CMBS deterioration and WeWork/Brookfield CMBS default cases.",
    readingMinutes: 15,
    tags: ["CMBS", "상업용부동산", "모기지증권화", "LTV", "DSCR", "스페셜서비서", "오피스CMBS", "WeWork", "Brookfield"],
    tagsEn: ["CMBS", "Commercial Mortgage-Backed Securities", "Commercial Real Estate", "LTV", "DSCR", "Special Servicer", "Office CMBS", "WeWork"],
    sections: [], keyTerms: [
      {
        term: "CMBS (상업용 모기지 담보부증권)",
        termEn: "Commercial Mortgage-Backed Securities (CMBS)",
        definition: "오피스, 리테일, 호텔, 물류센터 등 상업용 부동산 모기지를 SPV에 넘겨 발행하는 증권화 상품. 주거용 모기지(RMBS)와 달리 대규모 개별 상업 부동산 대출이 담보여서 분산도가 낮고 부동산 섹터별 집중 리스크가 있다. LTV·DSCR·NOI가 핵심 신용 분석 지표다. 만기 시 일괄 상환(Balloon Payment) 구조여서 리파이낸싱 리스크가 크다. 2023년 이후 오피스 섹터 가치 하락으로 오피스 CMBS 부실이 급증하고 있다.",
        definitionEn: "A securitization product backed by commercial real estate mortgages (office, retail, hotel, logistics) transferred to an SPV. Unlike residential MBS (RMBS), CMBS collateral consists of large individual commercial property loans, resulting in lower diversification and sector concentration risk. LTV, DSCR, and NOI are the core credit analysis metrics. Balloon payment structures at maturity create significant refinancing risk. Since 2023, falling office valuations have driven a rapid rise in office CMBS delinquencies.",
      },
      {
        term: "DSCR (부채상환커버리지비율)",
        termEn: "Debt Service Coverage Ratio (DSCR)",
        definition: "부동산에서 발생하는 연간 순영업이익(NOI)을 연간 원리금 상환액으로 나눈 비율. DSCR > 1.25이면 일반적으로 대출 기준 충족, 1.0 이하면 임박한 부실 신호. 오피스 CMBS에서 코로나19 이후 재택근무 확산으로 임차인 이탈 → NOI 감소 → DSCR 하락의 연쇄가 발생했다. 단순한 숫자이지만 상업용 부동산 대출 전 과정 — 심사, 모니터링, 부실 판정 — 에서 가장 중요한 지표다.",
        definitionEn: "Annual Net Operating Income (NOI) from the property divided by annual debt service (principal + interest). A DSCR above 1.25 generally meets lending criteria; below 1.0 signals imminent distress. In office CMBS, post-COVID remote work expansion drove a chain reaction: tenant departures → NOI decline → DSCR deterioration. A deceptively simple metric, but the most important indicator throughout the commercial real estate lending process — underwriting, monitoring, and default determination.",
      },
      {
        term: "스페셜 서비서 (Special Servicer)",
        termEn: "Special Servicer",
        definition: "CMBS에서 연체·부실 대출을 처리하는 전문 기관. 일반 서비서(Master Servicer)가 정상 대출 관리를 담당하는 반면, 스페셜 서비서는 부실 대출의 연장(Extension)·재구조화·임의처분을 결정한다. B-피스 바이어(가장 후순위 투자자)가 종종 스페셜 서비서 권한을 갖는 이익 상충 구조가 문제가 된다. WeWork·Brookfield 디폴트 CMBS 처리에서 스페셜 서비서의 결정이 회수율을 좌우했다.",
        definitionEn: "A specialist firm in CMBS that handles delinquent and defaulted loans. While the Master Servicer manages performing loans, the Special Servicer decides on extensions, restructurings, and disposals of non-performing loans. A conflict of interest arises when the B-piece buyer (most subordinate investor) holds Special Servicer rights. Special Servicer decisions were pivotal in determining recovery rates in the WeWork and Brookfield CMBS defaults.",
      },
      {
        term: "오피스 CMBS 위기",
        termEn: "Office CMBS Crisis",
        definition: "2023년 이후 미국 오피스 부동산 가치 급락이 CMBS 부실로 이어진 현상. 원인: ①재택근무 정착으로 오피스 수요 구조적 감소, ②금리 상승으로 캡레이트 상승 → 부동산 가치 하락, ③만기 시 리파이낸싱 불가(대출 금액 > 새 감정가). WeWork 파산, Brookfield의 LA 오피스 CMBS 디폴트, PIMCO의 오피스 빌딩 다수 반환이 대표 사례. 서울 강남 오피스는 상대적으로 견조하나 한국 상업용 부동산 PF ABS도 영향권이다.",
        definitionEn: "The rapid deterioration of US office real estate values from 2023 onward cascading into CMBS distress. Causes: ①Structural decline in office demand from permanent remote work adoption; ②Rising cap rates from interest rate hikes → property value decline; ③Inability to refinance at maturity (loan balance > new appraised value). Representative cases include WeWork's bankruptcy, Brookfield's LA office CMBS default, and PIMCO's return of multiple office buildings. Seoul's Gangnam office market remains relatively stable, but Korean commercial RE PF ABS is also affected.",
      },
      {
        term: "LTV (담보인정비율)",
        termEn: "Loan-to-Value Ratio (LTV)",
        definition: "CMBS 대출액을 부동산 감정가로 나눈 비율. 대출 시점 LTV가 낮을수록 부동산 가치 하락 시 담보 완충이 크다. 통상 CMBS 초기 LTV 기준 65~70% 이하가 요구된다. 그러나 부동산 가치가 30~40% 하락하면 LTV가 100%를 넘어 선순위 투자자도 손실 위험에 노출된다. 2023년 오피스 CMBS 위기에서 일부 건물 LTV가 150~200%까지 상승한 사례가 보고됐다.",
        definitionEn: "The CMBS loan balance divided by the property appraised value. A lower initial LTV provides more buffer against property value declines. CMBS typically requires an initial LTV of 65–70% or below. However, a 30–40% drop in property value can push LTV above 100%, exposing even senior investors to loss risk. During the 2023 office CMBS crisis, some properties reportedly saw LTV ratios surge to 150–200%.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-waterfall", "structured-cdo", "structured-abs"],
    appearsIn: [],
  },

  {
    slug: "structured-waterfall",
    title: "트랑쉐 & 워터폴 — 구조화금융 신용 리스크 배분의 원리",
    titleEn: "Tranche & Waterfall — The Mechanics of Credit Risk Distribution in Structured Finance",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "워터폴은 현금이 선순위에서 후순위 순서로 흐르는 규칙이다. 과잉담보(OC)·초과스프레드(XS)·준비적립금·후순위화 4가지 신용 보강 도구. OC 트리거, IC 트리거, 이벤트 오브 디폴트 발동 조건. 에쿼티 투자자가 레버리지드 수익을 얻는 구조적 근거.",
    excerptEn: "The waterfall governs cash flow order from senior to subordinate tranches. Four credit enhancement tools: overcollateralization (OC), excess spread (XS), reserve funds, and subordination. OC trigger, IC trigger, and event-of-default conditions. Why equity tranche investors earn leveraged returns.",
    readingMinutes: 13,
    tags: ["워터폴", "트랑쉐", "신용보강", "과잉담보", "초과스프레드", "OC트리거", "IC트리거", "에쿼티트랑쉐", "선순위"],
    tagsEn: ["Waterfall", "Tranche", "Credit Enhancement", "Overcollateralization", "Excess Spread", "OC Trigger", "IC Trigger", "Equity Tranche"],
    sections: [], keyTerms: [
      {
        term: "워터폴 (Cash Flow Waterfall)",
        termEn: "Cash Flow Waterfall",
        definition: "구조화금융에서 수취 현금을 선순위에서 후순위 방향으로 배분하는 규칙 체계. 이자 지급 우선순위(Priority of Payments) 조항에 따라 관리 수수료 → 선순위 이자 → 선순위 원금 → 메자닌 이자 → ... → 에쿼티 배당 순서로 현금이 흐른다. 이 순서가 지켜지는 한 선순위 투자자는 에쿼티 손실과 무관하게 원리금을 받는다. 워터폴 구조가 AAA 등급 선순위 채권을 저등급 자산 풀에서 만들어내는 핵심 원리다.",
        definitionEn: "The rule system in structured finance that distributes received cash from senior to subordinate tranches. According to the Priority of Payments clause, cash flows in order: management fees → senior interest → senior principal → mezzanine interest → ... → equity distributions. As long as this order is maintained, senior investors receive principal and interest regardless of equity-level losses. This is the core principle that produces AAA-rated senior bonds from a below-investment-grade asset pool.",
      },
      {
        term: "OC 트리거 (Overcollateralization Test)",
        termEn: "OC Trigger (Overcollateralization Test)",
        definition: "자산 풀 가치(OC 비율 = 자산 잔액 / 채권 잔액)가 사전 설정된 최소 임계치 아래로 떨어질 때 발동하는 안전장치. OC 트리거가 위반되면 후순위 트랑쉐(메자닌·에쿼티)로 가야 할 현금이 선순위 원금 상환으로 전환된다. 이 '디버팅(Diverting)' 메커니즘이 부실이 커질수록 선순위 보호 효과를 높인다. CLO에서 특히 중요하며, 2020년 COVID 충격에서 CLO AAA가 손실을 피한 주요 이유 중 하나다.",
        definitionEn: "A safety mechanism triggered when the asset pool coverage ratio (OC ratio = asset balance / bond balance) falls below a preset minimum threshold. When the OC trigger is violated, cash that would have gone to subordinate tranches (mezzanine, equity) is redirected to repay senior principal. This 'diverting' mechanism increases senior protection as defaults rise. Particularly important in CLOs and a key reason CLO AAA tranches avoided losses during the COVID shock of 2020.",
      },
      {
        term: "IC 트리거 (Interest Coverage Test)",
        termEn: "IC Trigger (Interest Coverage Test)",
        definition: "자산 풀의 이자 수입이 채권 이자 지급액의 특정 배수 이상이 되어야 한다는 요건. IC 트리거(이자커버리지 트리거)가 위반되면 역시 후순위 현금흐름을 차단하고 선순위 보호를 강화한다. OC 트리거와 함께 CLO의 두 가지 핵심 건전성 테스트다. 두 트리거 모두 통과해야 에쿼티 트랑쉐가 수익(배당)을 받을 수 있다. 트리거 위반 자체가 즉각적인 디폴트를 의미하진 않지만, 수익 차단이 에쿼티 투자자에게 강력한 신호가 된다.",
        definitionEn: "A requirement that the asset pool's interest income must be at least a specified multiple of the bond interest payments. Like the OC trigger, a violation of the IC trigger (interest coverage trigger) diverts subordinate cash flows to strengthen senior protection. Together with the OC test, these are the two core health tests in CLOs. Both triggers must be passed for the equity tranche to receive any returns. A trigger breach is not an immediate default, but the income diversion sends a powerful signal to equity investors.",
      },
      {
        term: "과잉담보 (Overcollateralization, OC)",
        termEn: "Overcollateralization (OC)",
        definition: "발행 채권 총액보다 더 많은 자산을 SPV에 넣는 신용 보강 방법. 예: 100의 자산으로 95의 채권만 발행 — 5의 초과 자산이 버퍼. 자산 풀에서 손실이 5 이하라면 선순위 채권은 전액 보호된다. OC 비율이 높을수록 선순위 트랑쉐 신용도가 높아진다. 신용평가사는 스트레스 시나리오에서 손실이 OC 버퍼를 초과하지 않을 경우에만 해당 트랑쉐에 특정 등급을 부여한다.",
        definitionEn: "A credit enhancement method where more assets are placed in the SPV than bonds issued. Example: issuing 95 in bonds from 100 in assets — the extra 5 acts as a buffer. If pool losses are below 5, senior bonds are fully protected. A higher OC ratio increases senior tranche credit quality. Rating agencies only assign a given rating to a tranche if stress-case losses do not exceed the OC buffer for that tranche.",
      },
      {
        term: "에쿼티 트랑쉐 (First-Loss Piece)",
        termEn: "Equity Tranche (First-Loss Piece)",
        definition: "구조화금융에서 손실을 가장 먼저 흡수하는 최후순위 조각. 자산 풀에서 손실이 발생하면 에쿼티가 먼저 소진된다. 그 대신 자산 이자 수입에서 선순위·메자닌 이자를 모두 지급하고 남은 초과 스프레드(XS)를 모두 가져간다. 레버리지드 수익 구조 — 소액 투자로 자산 풀 전체의 초과 수익에 참여. CLO에서 에쿼티 트랑쉐는 보통 CLO 매니저 자신이 5~10% 보유해 이해관계 정렬을 도모한다.",
        definitionEn: "The most subordinated slice in structured finance, absorbing losses first. When defaults occur in the asset pool, the equity tranche is depleted before any loss reaches senior or mezzanine. In return, it captures all excess spread (XS) remaining after paying senior and mezzanine interest. A leveraged return structure — small capital investment participates in the excess return of the entire asset pool. In CLOs, the equity tranche is typically retained 5–10% by the CLO manager itself to align interests.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-abs", "structured-clo", "structured-cmbs"],
    appearsIn: [],
  },

  {
    slug: "structured-cdo",
    title: "CDO & 합성CDO — 2008 금융위기를 만든 구조화금융의 폭탄",
    titleEn: "CDO & Synthetic CDO — The Structured Finance Bomb That Built the 2008 Crisis",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "CDO는 ABS(주로 모기지)를 담보로 새 채권을 발행한다. CDO 제곱은 CDO를 담보로 또 다른 CDO를 발행한다. 합성 CDO는 CDS로 실제 대출 없이 리스크를 합성한다. 무디스가 BBB 모기지 슬라이스를 AAA로 변환해준 방법, Big Short의 Michael Burry와 John Paulson이 어떻게 이 기계에 베팅했는가.",
    excerptEn: "A CDO issues new bonds backed by ABS (mostly mortgages). CDO-squared issues yet another CDO backed by CDOs. Synthetic CDO replicates risk via CDS without actual loans. How Moody's converted BBB mortgage slices to AAA, and how Michael Burry and John Paulson bet against the machine in the Big Short.",
    readingMinutes: 17,
    tags: ["CDO", "합성CDO", "2008금융위기", "서브프라임", "CDS", "MichaelBurry", "JohnPaulson", "BigShort", "무디스"],
    tagsEn: ["CDO", "Synthetic CDO", "2008 Financial Crisis", "Subprime", "CDS", "Michael Burry", "John Paulson", "Big Short"],
    sections: [], keyTerms: [
      {
        term: "CDO (부채담보부채권)",
        termEn: "Collateralized Debt Obligation (CDO)",
        definition: "주로 ABS(특히 모기지 담보부증권)를 담보로 새로운 채권을 발행하는 2차 증권화 상품. CDO의 담보는 다른 증권이기 때문에 원 자산(모기지)과 CDO 사이에 복잡한 리스크 전달 경로가 생긴다. 2008년 금융위기의 핵심 구조물 — BBB 등급 서브프라임 RMBS를 묶어 다시 AAA 등급 CDO를 만들어낸 것이 위기의 원인이 됐다. CDO²(CDO를 담보로 발행한 CDO)는 리스크 연결 고리를 더욱 복잡하게 만들었다.",
        definitionEn: "A secondary securitization product that issues new bonds backed primarily by ABS (especially mortgage-backed securities). Since CDO collateral consists of other securities, a complex risk transmission chain is created between the underlying assets (mortgages) and the CDO. A central structure in the 2008 financial crisis — bundling BBB-rated subprime RMBS to create AAA-rated CDOs caused the catastrophe. CDO-squared (CDOs backed by other CDOs) added even more layers of complexity to the risk linkage.",
      },
      {
        term: "합성 CDO (Synthetic CDO)",
        termEn: "Synthetic CDO",
        definition: "실제 대출이나 채권 없이 CDS(신용부도스왑)를 이용해 리스크만 합성적으로 결합한 CDO. '보장 매도자'가 되어 주거용 모기지 포트폴리오의 신용 리스크를 인수하는 구조. 실제 자산 없이도 레버리지를 크게 높일 수 있어, 서브프라임 모기지 리스크를 몇 배로 증폭시켰다. The Big Short의 Michael Burry가 모기지 CDO에 CDS(공매도)로 베팅한 메커니즘이 바로 합성 CDO를 이용한 것이다.",
        definitionEn: "A CDO that uses CDS (credit default swaps) to synthetically combine risks without actual loans or bonds. By becoming a 'protection seller,' it takes on the credit risk of a residential mortgage portfolio. The ability to create massive leverage without actual assets amplified subprime mortgage risk many times over. Michael Burry's CDS bets against mortgage CDOs in The Big Short were executed precisely through synthetic CDO mechanics.",
      },
      {
        term: "등급 매핑 오류 (Rating Agency Failure)",
        termEn: "Rating Agency Failure",
        definition: "2008년 위기에서 무디스·S&P·피치가 서브프라임 RMBS 슬라이스를 과도하게 높은 등급으로 평가해 위기를 심화시킨 문제. 핵심 원인: ①과거 데이터 기반 모델 — 주택 가격 전국 동시 하락 시나리오가 없었음, ②주택 가격 간 상관관계를 과소평가, ③구조화 상품 발행 수수료를 받는 이해 충돌, ④모기지 심사 기준 하락 반영 부족. CDO AAA 등급의 70%가 6개월 만에 정크 등급으로 강등됐다.",
        definitionEn: "The problem of Moody's, S&P, and Fitch assigning overly favorable ratings to subprime RMBS tranches in the lead-up to 2008, deepening the crisis. Root causes: ①Historical data-based models with no scenario for nationwide simultaneous home price declines; ②Underestimation of correlation between housing prices; ③Conflict of interest from receiving fees on structured product issuance; ④Insufficient reflection of declining mortgage underwriting standards. Within 6 months, 70% of CDO AAA ratings were downgraded to junk.",
      },
      {
        term: "The Big Short — Michael Burry & John Paulson",
        termEn: "The Big Short — Michael Burry & John Paulson",
        definition: "2005~2007년 서브프라임 CDO 버블을 미리 예측하고 CDS를 매입해 수십억 달러를 번 투자자들. Scion Capital의 Michael Burry는 개별 모기지 풀 데이터를 분석해 서브프라임 대출의 부실 가능성을 일찍 발견했다. Paulson & Co.의 John Paulson은 Goldman Sachs의 Abacus 합성 CDO 구조를 이용해 약 $150억을 수익으로 얻었다. Big Short의 교훈: 시장이 틀릴 수 있고, 구조적 분석이 군중 심리를 이길 수 있다.",
        definitionEn: "Investors who predicted the subprime CDO bubble ahead of 2005–2007 and bought CDS to earn billions. Scion Capital's Michael Burry analyzed individual mortgage pool data to detect subprime loan default risk early. John Paulson of Paulson & Co. used Goldman Sachs's Abacus synthetic CDO structure to earn approximately $15 billion in profits. The Big Short's lesson: markets can be wrong, and structural analysis can beat crowd psychology.",
      },
      {
        term: "Abacus — CDO 사기 혐의",
        termEn: "Abacus — CDO Fraud Allegations",
        definition: "Goldman Sachs가 2007년 발행한 합성 CDO. Paulson & Co.가 포트폴리오 선택에 영향을 미치며 공매도 포지션을 구축한 반면, 반대편 투자자(IKB, ABN Amro)는 이 사실을 몰랐다고 SEC가 주장. Goldman은 2010년 $5.5억 합의. '이해충돌' 문제의 극단적 사례로, CDO 구조화·판매·공매도를 동시에 한 투자은행의 윤리 문제를 드러냈다. The Big Short에서 자세히 묘사된 사례이기도 하다.",
        definitionEn: "A synthetic CDO issued by Goldman Sachs in 2007. The SEC alleged that Paulson & Co. influenced the portfolio selection while building a short position, while the counterpart investors (IKB, ABN Amro) were unaware of this. Goldman settled for $550 million in 2010. An extreme example of 'conflict of interest,' revealing the ethical problems of an investment bank simultaneously structuring, selling, and shorting the same CDO. Also prominently depicted in The Big Short.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-waterfall", "structured-cmbs", "structured-cases"],
    appearsIn: [],
  },

  {
    slug: "structured-cases",
    title: "구조화금융 케이스스터디 — 2008 RMBS 붕괴·CLO COVID 스트레스·오피스 CMBS 위기",
    titleEn: "Structured Finance Case Studies — 2008 RMBS Collapse, CLO COVID Stress & Office CMBS Crisis",
    entryType: "article",
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt: "같은 구조화금융이 어떤 상황에서 무너지고 어떤 상황에서 버티는가. 2008년 서브프라임 RMBS/CDO 전면 붕괴, 2020년 COVID 충격에서 CLO AAA가 왜 손실을 피했는가, 2023년 미국 오피스 CMBS 부실의 구조적 원인. 한국 부동산PF ABS 위기까지.",
    excerptEn: "When does structured finance collapse and when does it hold? The full 2008 subprime RMBS/CDO collapse; why CLO AAA tranches survived COVID in 2020; the structural roots of the 2023 US office CMBS stress; and Korea's real estate PF ABS crisis.",
    readingMinutes: 16,
    tags: ["구조화금융위기", "2008금융위기", "RMBS붕괴", "CLO스트레스", "오피스CMBS", "부동산PF", "한국ABS위기", "서브프라임"],
    tagsEn: ["Structured Finance Crisis", "2008 Crisis", "RMBS Collapse", "CLO Stress", "Office CMBS", "Korea PF ABS", "Subprime"],
    sections: [], keyTerms: [
      {
        term: "2008 RMBS/CDO 붕괴",
        termEn: "2008 RMBS/CDO Collapse",
        definition: "2007~2009년 미국 서브프라임 주거용 모기지 담보부증권(RMBS)과 CDO 시장의 전면 붕괴. 원인: ①부실한 모기지 심사 기준, ②등급기관의 과도한 AAA 부여, ③CDO²의 리스크 은폐, ④레버리지 과다 보유. Bear Stearns 헤지펀드 2개가 2007년 6월 붕괴하며 위기의 시작을 알렸고, Lehman Brothers 파산(2008.9)으로 정점을 찍었다. 전 세계 금융 손실 $2조+, 미국 GDP 4% 이상 감소. 구조화금융 역사에서 가장 중요한 케이스다.",
        definitionEn: "The complete collapse of US subprime residential MBS (RMBS) and CDO markets from 2007–2009. Causes: ①lax mortgage underwriting; ②excessive AAA ratings by credit agencies; ③risk obfuscation through CDO²; ④excessive leverage. Two Bear Stearns hedge funds collapsed in June 2007, signaling the start; Lehman Brothers bankruptcy (September 2008) marked the peak. Global financial losses exceeded $2 trillion; US GDP fell more than 4%. The most important case study in structured finance history.",
      },
      {
        term: "CLO COVID 스트레스 (2020)",
        termEn: "CLO COVID Stress (2020)",
        definition: "2020년 3월 COVID-19 충격으로 레버리지드 론 시장이 급락했음에도 CLO AAA 트랑쉐가 단 한 건도 디폴트하지 않은 사건. 이유: ①두꺼운 후순위 버퍼(35~40%), ②OC/IC 트리거 자동 작동으로 에쿼티·메자닌 수익 차단, ③분산된 기업 대출 담보, ④연준의 신속한 지원. 에쿼티 트랑쉐는 수개월간 수익이 막혔고, BBB~BB 메자닌 일부는 가격 급락. 2008 RMBS/CDO와 CLO의 결정적 차이를 보여준 사례다.",
        definitionEn: "Despite the March 2020 COVID-19 shock crashing the leveraged loan market, not a single CLO AAA tranche defaulted. Reasons: ①thick subordination buffer (35–40%); ②automatic OC/IC triggers diverted equity and mezzanine cash flows; ③diversified corporate loan collateral; ④swift Fed support. Equity tranches had income blocked for months; some BBB–BB mezzanine tranches saw sharp price declines. A landmark case showing the decisive difference between CLOs and 2008 RMBS/CDO.",
      },
      {
        term: "오피스 CMBS 위기 (2023~)",
        termEn: "Office CMBS Crisis (2023–)",
        definition: "재택근무 정착과 금리 상승이 맞물려 미국 오피스 부동산 가치가 급락하면서 발생한 CMBS 연체·부실 급증. WeWork 파산(2023.11), Brookfield LA 오피스 디폴트, 다수 CMBS 트랑쉐 등급 강등이 연속 발생. 구조적 원인: ①만기 리파이낸싱 불가(대출 > 새 감정가), ②공실률 20~30%로 DSCR 하락, ③금리 5~6%로 캡레이트 상승. 2024년 미국 오피스 CMBS 연체율 약 8.5%로 2008년 이후 최고.",
        definitionEn: "Remote work normalization and rising rates crushed US office valuations, triggering rapid CMBS delinquency and default. Consecutive events: WeWork bankruptcy (November 2023), Brookfield LA CMBS defaults, multiple tranche downgrades. Structural causes: ①impossible maturity refinancing (loan > appraised value); ②20–30% vacancy rates crushing DSCR; ③cap rate expansion from 5–6% rates. US office CMBS delinquency hit approximately 8.5% in 2024, the highest since 2008.",
      },
      {
        term: "한국 부동산 PF ABS 위기",
        termEn: "Korea Real Estate PF ABS Crisis",
        definition: "2022년 이후 금리 상승·부동산 경기 침체로 한국 건설·시행사의 프로젝트파이낸싱(PF) 자산유동화증권이 부실화된 사태. 태영건설 워크아웃(2024.1)이 가시적 트리거. 핵심 구조: 시행사가 토지 담보로 PF 대출을 받고, 증권사가 ABCP(자산담보부 기업어음)로 유동화. 증권사의 매입약정(보증)이 사실상 부외 보증이었음이 드러났다. 금융당국이 2024년 PF 정상화 펀드(조 단위)를 조성해 개입했다.",
        definitionEn: "Rising rates and real estate cooling from 2022 caused Korean construction and developer Project Finance (PF) ABS to deteriorate. Taeyoung E&C's workout (January 2024) was a visible trigger. Core structure: developers took PF loans against land collateral, which brokerages securitized as ABCP. Brokerage purchase commitments proved to be de facto off-balance-sheet guarantees. Financial regulators intervened in 2024 with a multi-trillion-won PF normalization fund.",
      },
      {
        term: "구조화금융 위기 공통 패턴",
        termEn: "Common Crisis Patterns in Structured Finance",
        definition: "2008 RMBS/CDO, 2023 오피스 CMBS, 한국 PF ABS 위기에서 반복되는 4가지 패턴. ①원자산 품질 저하(심사 기준 완화), ②유동성 환상(위기 시 거래 불가), ③레버리지의 비선형 효과(자산 5% 하락이 에쿼티 50% 손실), ④이해충돌(발행자·신평사·판매자 모두 수수료 구조). 구조화금융은 리스크를 없애지 않고 분산·은폐한다는 사실이 위기 때마다 확인된다.",
        definitionEn: "Four recurring patterns across the 2008 RMBS/CDO, 2023 office CMBS, and Korean PF ABS crises: ①deteriorating underlying asset quality (loosened underwriting); ②liquidity illusion (securities untradeable in crisis); ③non-linear leverage effects (5% asset decline → 50% equity loss); ④conflicts of interest (issuers, rating agencies, sellers all earn fees). Each crisis confirms that structured finance does not eliminate risk — it disperses and obscures it.",
      },
    ],
    relatedSlugs: ["structured-cdo", "structured-clo", "structured-cmbs", "structured-abs"],
    appearsIn: [],
  },


  // ── ECM 용어 ──────────────────────────────────────────────────────────────────
// ── ECM 용어 ──────────────────────────────────────────────────────────────────
  {
    slug: "greenshoe",
    title: "그린슈 옵션",
    titleEn: "Greenshoe Option",
    entryType: "term" as const,
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt: "IPO 직후 주가가 공모가 아래로 떨어지는 것을 막기 위해 주관사에게 부여되는 가격 안정화 옵션. 공모 물량의 최대 15%를 초과 배정한 뒤, 상장 후 주가 흐름에 따라 시장 매입 또는 발행사 추가 발행으로 포지션을 청산한다.",
    excerptEn: "A price stabilization option granted to the lead underwriter, allowing over-allotment of up to 15% of the offering size. After listing, the underwriter either purchases shares in the open market or exercises the option to issue additional shares, depending on how the stock trades relative to the IPO price.",
    readingMinutes: 5,
    tags: ["그린슈", "과배정", "가격 안정화", "IPO", "ECM"],
    tagsEn: ["Greenshoe", "Over-Allotment", "Price Stabilization", "IPO", "ECM"],
    sections: [
      {
        heading: "그린슈의 메커니즘",
        headingEn: "How the Greenshoe Mechanism Works",
        body: `그린슈 옵션(Over-Allotment Option)은 IPO 주관사가 공모 물량의 최대 15%를 추가로 배정할 수 있는 권리다. 예를 들어 1,000만 주를 공모할 경우 주관사는 실제로 1,150만 주를 시장에 배정하고, 초과 배정된 150만 주분의 숏 포지션을 보유한 상태로 상장일을 맞이한다. 이 옵션의 이름은 1960년 미국 Green Shoe Manufacturing Company(現 Stride Rite)의 IPO에서 처음 활용된 데서 유래했다.

옵션의 핵심 비대칭성은 주가 방향에 따라 주관사의 대응이 달라진다는 점에 있다. 주가가 공모가 아래로 하락하면 주관사는 시장에서 직접 주식을 매입해 숏 포지션을 커버한다(숏커버링). 이 매입 수요가 주가 하방을 지지하는 역할을 한다. 반대로 주가가 공모가 위에서 강세를 보이면 발행사로부터 추가 주식을 공모가에 발행받아(옵션 행사) 숏을 청산하고, 발행사는 당초보다 최대 15% 더 많은 자금을 조달하게 된다.

한국 자본시장에서는 2020년대 들어 대형 IPO에서 그린슈 옵션 활용이 정착됐다. 카카오뱅크(2021)·LG에너지솔루션(2022) 등의 사례에서 주관사단은 공모가 대비 주가 변동성이 크게 확대될 것을 우려해 전체 15% 한도를 최대한 활용했다. 금융투자업규정상 안정화 기간은 상장일로부터 30일로 제한되며, 이 기간 내에 매입 또는 옵션 행사를 완료해야 한다.`,
        bodyEn: `The greenshoe option, formally known as the over-allotment option, grants the lead underwriter the right to sell up to 15% more shares than the original offering size. In a 10 million-share IPO, the underwriter allocates 11.5 million shares to investors and holds a short position of 1.5 million shares at the time of listing. The name traces back to the 1960 IPO of Green Shoe Manufacturing Company (now Stride Rite), the first deal to contractually codify this mechanism.

The elegance of the structure lies in its asymmetric payoff profile, which automatically adjusts to post-listing price action. If the stock falls below the IPO price, the underwriter enters the market as a buyer, covering the short position through open-market purchases. This buying pressure creates a natural price floor and signals demand to other market participants. If the stock trades above the IPO price, the underwriter exercises the option against the issuer, receiving freshly issued shares at the IPO price to close the short, and the issuer receives up to 15% more proceeds than originally planned.

In practice, the greenshoe is almost universally included in large IPOs across global markets. In the U.S., the SEC's Regulation M governs stabilizing bids, requiring public disclosure and capping the stabilization price at the offering price. In Korea, the Financial Investment Business Regulation limits the stabilization window to 30 days post-listing. For landmark Korean IPOs such as LG Energy Solution (2022), where first-day volatility was severe given the ₩12.75 trillion offering size, the syndicate exercised the full 15% over-allotment to manage price discovery during the critical early trading period.`,
      },
      {
        heading: "가격 안정화 실제 작동 방식",
        headingEn: "Price Stabilization in Practice",
        body: `안정화 작동 방식을 구체적인 숫자로 살펴보자. 공모가 5만 원, 공모 물량 1,000만 주, 그린슈 150만 주(15%)가 설정된 IPO를 가정한다. 주관사는 상장 첫날부터 30일간 안정화 계좌를 운영하며, 주가가 5만 원 아래로 내려오는 순간 시장에서 매수에 나선다. 만약 30일 기간 동안 주가가 계속 4만 5,000원~4만 8,000원 사이에서 형성됐다면, 주관사는 150만 주 전량을 시장에서 평균 4만 7,000원에 매입해 숏을 청산할 수 있다. 이 경우 매입 단가(4만 7,000원)가 공모가(5만 원)보다 낮으므로 주관사는 약 45억 원의 안정화 이익을 얻게 된다.

반대 시나리오에서는 주가가 상장 직후 6만 원까지 오르고 30일 내내 공모가를 상회한다. 이때 주관사는 시장에서 매수할 유인이 없으므로 안정화 매입을 하지 않고, 대신 발행사에게 옵션을 행사해 150만 주를 5만 원에 추가 발행받아 숏을 청산한다. 발행사는 그린슈 행사로 750억 원을 추가 조달하고, 주관사는 주식 매입·발행 사이에서 별도 손익 없이 구조를 종결한다. 현실에서는 대부분의 대형 IPO가 주가 흐름에 따라 부분 매입·부분 옵션 행사를 혼합하는 방식으로 안정화를 마무리한다.

안정화 기간이 종료된 뒤에도 주관사는 시장 조성(Market Making) 역할을 유지한다. 하지만 이는 그린슈와 별개의 계약상 의무이며, 발행사와 협의한 스프레드 범위 내에서 호가를 제시하는 방식으로 이뤄진다. 투자자 입장에서 그린슈 존재 여부는 공모 청약 시 투자 결정에 중요한 참고 사항이다. 그린슈가 설정된 IPO는 상장 직후 30일간 공모가 이하 하방이 어느 정도 지지된다는 의미이기 때문이다.`,
        bodyEn: `Consider a concrete example: an IPO priced at ₩50,000 per share with a base offering of 10 million shares and a greenshoe of 1.5 million shares (15%). The stabilizing manager operates a dedicated account for 30 days post-listing. If the stock drifts to ₩47,000 on day two, the stabilizing manager begins purchasing shares in the open market at or below ₩50,000. If the stock averages ₩47,000 throughout the stabilization window and the manager buys all 1.5 million shares at that level, the stabilization account generates approximately ₩4.5 billion in profit (the difference between the ₩50,000 short proceeds received at IPO and the ₩47,000 average cost of covering). This profit is typically returned to the issuer or shared with the syndicate per the underwriting agreement.

In the bullish scenario, if the stock immediately jumps to ₩60,000 and stays there, the stabilizing manager never buys in the open market. Instead, on or before day 30, the manager exercises the greenshoe option against the issuer, receiving 1.5 million new shares at ₩50,000 each (raising an additional ₩75 billion for the issuer) to close the short position. The manager captures the difference between the ₩60,000 market price and ₩50,000 exercise price — though in practice, most underwriting agreements require this spread to be shared with selling shareholders or returned to the deal economics. Real-world stabilizations typically land somewhere in between, with partial open-market purchases combined with partial option exercise depending on the stock's trading path.

From a regulatory standpoint, stabilization bids are one of the few legally permitted forms of price manipulation. The SEC (in the U.S.) and FSS (in Korea) require public disclosure of the stabilization arrangement in the prospectus, strict record-keeping of all stabilizing transactions, and a hard cap on stabilization at the offering price. These guardrails ensure that greenshoe serves its intended purpose — orderly price discovery — rather than artificially inflating a stock above its fair value. Investors who understand the mechanism can use the presence or absence of stabilization activity as a signal about how the broader market is absorbing the new float.`,
      },
      {
        heading: "발행사·투자자·주관사 입장",
        headingEn: "Perspectives: Issuer, Investor, and Underwriter",
        body: `발행사 입장에서 그린슈는 기회와 비용이 공존하는 도구다. 주가가 강세를 보여 옵션이 행사되면 계획보다 최대 15% 더 많은 자금을 공모가에 조달할 수 있어 자금 조달 효율이 높아진다. 반면 초기 주가 약세 시 안정화 기간 동안 주관사의 매입으로 주가가 인위적으로 지지되는 효과는 있지만, 그만큼 시장의 진짜 수요를 확인하는 데 시간이 걸린다는 단점도 있다. 특히 창업자나 기존 PE 투자자 입장에서는 그린슈 주식이 기존 주주 보유분에서 나오는 세컨더리 방식과 신주 발행 방식 중 어떤 방식으로 설계되느냐에 따라 희석 효과와 현금화 규모가 달라진다.

기관 투자자 입장에서 그린슈는 배정 우선순위 협상 레버리지로 작동하기도 한다. 북빌딩 과정에서 공모가 밴드 최상단 또는 그 이상의 주문을 제출하고 장기 보유 의향을 밝힌 기관은 주관사로부터 우선 배정을 받는 경향이 있으며, 그린슈 물량까지 고려하면 전체 배정 가능 주식이 늘어난다. 반면 그린슈가 없는 IPO에서는 공모가 이하 하락 시 주가를 지지하는 메커니즘이 없으므로 기관 투자자는 더 보수적인 청약 전략을 택하는 경우가 많다.

주관사(주간사) 입장에서 그린슈는 인수 리스크 관리의 핵심 도구다. 주관사는 IPO 공모가를 확정하는 순간 사실상 발행사로부터 주식을 매입해 투자자에게 재판매하는 포지션을 취하게 된다. 이 과정에서 시장이 급변하면 주관사 자신이 손실을 볼 수 있는데, 그린슈를 통한 안정화 활동은 그 리스크를 일부 헤지하는 역할을 한다. 글로벌 IB들은 대형 딜에서 그린슈 설계를 표준 조건으로 제시하며, 이를 통해 발행사와 투자자 양측에 "딜이 성공적으로 마무리될 것"이라는 시그널을 보낸다.`,
        bodyEn: `For the issuer, the greenshoe is simultaneously a capital-raising upside and an implicit signal about demand quality. When the option is exercised in full, the issuer receives 15% more proceeds at the IPO price — a meaningful upside for large transactions. In LG Energy Solution's 2022 IPO, the full greenshoe exercise generated an additional roughly ₩1.9 trillion in proceeds. However, if stabilization buying is required throughout the 30-day window, management must contend with the uncomfortable reality that the market cleared below the offering price — raising questions about whether the deal was priced too aggressively. Structurally, issuers must also decide whether the greenshoe shares will come from new issuance (dilutive to existing holders) or from selling shareholders contributing additional secondary shares (non-dilutive to the company but impacting seller proceeds).

Institutional investors treat the presence and structure of the greenshoe as an important input to their IPO investment framework. A well-structured greenshoe signals that the underwriter has skin in the game for post-listing performance, which distinguishes quality bookrunners from those who simply price the deal and move on. For long-only funds that receive large allocations, the 30-day stabilization window provides a degree of downside protection during the critical period when lock-up holders cannot sell and retail sentiment often drives outsized volatility. Conversely, hedge funds and arbitrageurs sometimes trade around the anticipated end of the stabilization window, anticipating that buying support will withdraw and any excess demand will need to re-equilibrate.

For the underwriter, the greenshoe is the cornerstone of underwriting risk management. The moment the IPO is priced and the allotment letters go out, the lead bookrunner has effectively bought 115% of the offering from the issuer and sold it to investors. If the stock immediately collapses, the stabilization account — funded by the extra 15% over-allotment proceeds — provides a war chest to buy shares and defend the price without tapping the underwriter's own balance sheet. This asymmetric structure means the greenshoe essentially converts the underwriter's potential loss from a weakly performing IPO into a smaller, bounded stabilization cost. In exchange for bearing this residual risk, investment banks command underwriting fees typically ranging from 3.5% to 7% of proceeds on large ECM transactions, with the greenshoe being a key component of the risk-adjusted return on that fee.`,
      },
    ],
    keyTerms: [
      {
        term: "과배정",
        termEn: "Over-Allotment",
        definition: "IPO 시 주관사가 공모 물량보다 초과하여(최대 15%) 투자자에게 배정하는 행위. 초과분만큼 주관사는 숏 포지션을 보유하며, 이후 시장 매입 또는 옵션 행사를 통해 청산한다.",
        definitionEn: "The act of allocating more shares to investors than the base offering size (up to 15%). The underwriter holds a short position equal to the over-allotment and closes it via open-market purchases or by exercising the greenshoe option against the issuer.",
      },
      {
        term: "숏커버링",
        termEn: "Short Covering",
        definition: "주관사가 그린슈 안정화 기간 중 공모가 이하에서 주식을 시장에서 매입해 과배정으로 생긴 숏 포지션을 청산하는 행위. 매입 수요가 주가 하방을 지지하는 효과를 낳는다.",
        definitionEn: "The act of buying shares in the open market at or below the offering price to close the short position created by over-allotment. The buying demand from short covering provides a natural price floor during the stabilization window.",
      },
    ],
    relatedSlugs: ["ecm-ipo-bookbuilding", "ecm-ipo-post", "ecm-overview"],
    appearsIn: [
      { type: "market-101" as const, slug: "ecm-ipo-bookbuilding", title: "IPO 북빌딩과 공모가 산정", titleEn: "IPO Bookbuilding and Pricing" },
    ],
  },
  {
    slug: "lock-up",
    title: "의무보호예수",
    titleEn: "Lock-Up Period",
    entryType: "term" as const,
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt: "IPO 이후 창업자·PE·임원 등 기존 주주가 보유 주식을 매도할 수 없도록 제한하는 기간. 통상 90~180일이며, 만료 시점에 대규모 매도 물량이 쏟아질 수 있는 오버행 리스크가 발생한다.",
    excerptEn: "A contractual restriction preventing pre-IPO shareholders — founders, PE investors, executives — from selling their shares for a defined period following the listing, typically 90 to 180 days. Expiration can trigger significant overhang pressure as constrained sellers enter the market.",
    readingMinutes: 5,
    tags: ["의무보호예수", "락업", "오버행", "IPO", "ECM"],
    tagsEn: ["Lock-Up", "Lock-Up Period", "Overhang", "IPO", "ECM"],
    sections: [
      {
        heading: "의무보호예수란",
        headingEn: "What Is a Lock-Up Period",
        body: `의무보호예수(Lock-Up Period)는 IPO 이후 기존 주주가 보유 주식을 일정 기간 동안 시장에 매도하지 못하도록 계약상 제한하는 장치다. 대상자는 통상 창업자·공동창업자, 재무적 투자자(PE·VC), 임원·이사회 멤버, 5% 이상 대주주 등이 포함된다. 기간은 거래소 규정·주관사 계약·투자자 협의에 따라 결정되며, 미국 나스닥·NYSE 기준으로는 보통 180일, 한국 거래소 기준으로는 상장 유형에 따라 6개월~1년이 적용된다. 스타트업 계열 IPO에서 VC가 받는 보호예수는 6개월, 창업자는 1년 이상인 경우가 많다.

보호예수의 근거는 명확하다. IPO 투자자들은 상장 직후 대주주나 PE가 대량 매각에 나설 경우 주가가 폭락할 위험을 안고 있다. 이를 방지하기 위해 주관사는 딜 조건의 일부로 기존 주주들에게 보호예수 계약(Lock-Up Agreement)에 서명할 것을 요구한다. 계약 위반 시 주관사는 해당 주주의 매도를 중단시키거나 손해배상을 청구할 수 있으며, 거래소 차원에서도 의무보호예수 물량은 별도로 등록되어 매매가 제한된다. 한국에서는 한국예탁결제원(KSD)이 보호예수 주식의 매매 제한을 시스템적으로 관리한다.

보호예수 기간 설정은 발행사와 주관사 간 협상의 산물이기도 하다. 기존 주주 입장에서는 보호예수 기간이 짧을수록 빠른 현금화가 가능하지만, 투자자 입장에서는 긴 보호예수가 기존 주주의 장기 가치 신뢰도를 높여준다는 시그널 효과가 있다. 이 때문에 성장성이 높은 테크 기업일수록 창업자의 자발적 장기 보호예수를 투자 포인트로 부각시키는 경향이 있으며, 일부 기업은 상장 로ード쇼에서 경영진이 "3년 이상 매도하지 않겠다"는 의사를 공개적으로 밝히기도 한다.`,
        bodyEn: `A lock-up period is a contractual restriction — agreed between the issuer, pre-IPO shareholders, and the underwriter — that prohibits certain existing shareholders from selling their shares in the open market for a defined period following the IPO. Covered parties typically include founders, co-founders, PE and VC investors, directors, officers, and any shareholder owning 5% or more of the company. The standard duration in the United States is 180 days from the IPO date, governed by FINRA Rule 5110 for underwriters but otherwise set contractually. In Korea, the KRX listing regulations mandate 6 months to 1 year of lock-up for major shareholders and PE sponsors, depending on the listing pathway and share class.

The rationale is straightforward: IPO investors are buying into a company with asymmetric information relative to insiders. If the founders or PE sponsors who backed the company through its formative years are legally free to dump all their shares on day one, the IPO market would essentially become a mechanism for insiders to exit at the expense of public investors. The lock-up agreement creates a credible commitment device: insiders must hold through the initial price discovery period, which aligns their interests with those of the new public shareholders. Underwriters enforce this contractually, and in Korea, the Korea Securities Depository (KSD) manages the mechanical trading restrictions on lock-up shares at the system level, preventing unauthorized sales.

The negotiation of lock-up terms is a meaningful part of the IPO structuring process. Shorter lock-ups benefit insiders who want liquidity sooner, while longer lock-ups signal confidence to IPO investors and can support a higher IPO valuation. High-growth technology companies, in particular, often use extended voluntary lock-up commitments as a marketing tool during roadshows — founders publicly pledging not to sell for two or three years beyond the contractual minimum. Conversely, for PE-backed IPOs where sponsors need to demonstrate a clear exit timeline to their own LPs, negotiating a shorter lock-up (or a phased release schedule) becomes a priority, sometimes at the cost of IPO pricing.`,
      },
      {
        heading: "만료 효과와 오버행 리스크",
        headingEn: "Expiration Effects and Overhang Risk",
        body: `보호예수 만료일은 ECM 시장에서 '이벤트 데이(Event Day)'로 취급된다. 만료 시점에 잠재적으로 시장에 나올 수 있는 주식 물량(오버행)이 얼마나 되느냐에 따라 주가 하방 압력의 크기가 결정되기 때문이다. 학술 연구에 따르면 미국 IPO 종목들은 보호예수 만료 직전 평균 1~3%p의 초과 수익률 하락, 만료 당일 및 이후 수 일간 추가 3~5%p 하락을 경험하는 것으로 나타난다. 이 효과는 오버행 비율(보호예수 주식수 / 유통주식수)이 클수록 더욱 두드러진다.

오버행 리스크가 특히 큰 경우는 IPO 직전 라운드에서 고가에 투자한 PE·VC가 보호예수 만료와 동시에 전량 매각을 시도할 때다. 예를 들어 상장 전 마지막 VC 라운드 투자 단가가 공모가보다 낮고, 만료일 당시 주가가 공모가보다 30~50% 올라 있다면, VC는 만료 즉시 대량 매각 유인이 크다. 이러한 물량 압박은 시장 참여자들에게 사전에 알려지므로, 만료 3~4주 전부터 롱 포지션을 줄이거나 풋옵션을 매수하는 헤지 전략이 일반화돼 있다.

반면 오버행이 주가에 별 영향을 미치지 않는 경우도 있다. 보호예수 만료 시점에 회사의 펀더멘털이 뚜렷하게 개선되고 있거나, 기존 주주들이 주가 추가 상승 기대로 매각을 미룰 경우, 또는 기관 투자자들이 만료 물량을 선제적으로 블록딜(Block Deal)로 인수하기로 합의해둔 경우가 대표적이다. 실제로 많은 대형 PE 스폰서들은 보호예수 만료 전 2~4주 시점에 주관사를 통해 조용한 블록딜 또는 가속화된 북빌딩(Accelerated Bookbuilding, ABB)을 실시해 대량 물량을 시장 충격 없이 소화한다.`,
        bodyEn: `Lock-up expirations are treated as scheduled event risks by the ECM market. The magnitude of the overhang — defined as the number of lock-up shares eligible for sale relative to the existing daily trading volume or public float — determines how much downside pressure builds into the stock ahead of expiration. Academic studies of U.S. IPO markets consistently find that lock-up expirations are associated with abnormal returns of negative 1–3% in the week before expiration and an additional negative 3–5% around the expiration date itself, with the effect proportional to the size of the overhang. These patterns are well-known enough that most ECM desks maintain expiration calendars and begin flagging high-overhang names to their trading and research teams three to four weeks in advance.

The overhang is most severe when pre-IPO investors sitting on large unrealized gains have a firm incentive to sell immediately upon expiration. Consider a PE sponsor that invested in a company's pre-IPO round at ₩20,000 per share, while the IPO priced at ₩30,000 and the stock has since traded up to ₩45,000 by the lock-up expiration date. The PE fund has an IRR-driven mandate to return capital to LPs, and the premium to cost is too large to ignore. Market participants anticipating this dynamic begin shorting the stock or buying put options weeks before expiration, creating a self-fulfilling downward pressure even before a single share is sold. This is the mechanism by which overhang risk can become a tangible drag on stock performance well before the legal restriction expires.

However, not all lock-up expirations result in significant price declines. If the company's fundamentals are accelerating — beat-and-raise earnings reports, a transformative acquisition, or a product cycle inflection — the incremental selling pressure from insiders can be absorbed by new institutional demand. Alternatively, large PE sponsors frequently work with their IPO bookrunners to conduct a pre-arranged block trade or accelerated bookbuilding (ABB) in the two to four weeks before expiration. In an ABB, the bookrunner quietly canvasses institutional investors overnight, prices the block at a modest discount (typically 2–5%) to the prevailing market price, and places the entire lot in a single session. This technique converts what would have been a prolonged overhang into a single, well-anticipated event, after which the stock often recovers the discount within days.`,
      },
      {
        heading: "해제 전후 전략",
        headingEn: "Strategies Around Lock-Up Expiration",
        body: `보호예수 만료 전후는 기존 주주, 공매도 세력, 장기 투자자 모두에게 중요한 전략적 결정 시점이다. 기존 주주(PE·VC·창업자) 입장에서 최우선 고민은 '언제, 어떻게 매각할 것인가'다. 단순히 만료일에 시장가로 매도하는 것은 대규모 물량의 경우 자기 자신의 매도 충격으로 인해 불리한 가격을 실현하게 된다. 따라서 정교한 기존 주주들은 앞서 언급한 ABB, 또는 10b5-1 플랜(사전 프로그램 매매)을 활용해 수 주에서 수 개월에 걸쳐 물량을 분산 매각한다. 10b5-1 플랜은 미국에서 내부자 거래 이슈 없이 사전에 설정한 조건에 따라 자동 매도가 가능한 제도다.

공매도 투자자 입장에서는 만료일이 다가오는 고오버행 종목이 매력적인 숏 기회로 보인다. 다만 이 트레이드는 여러 위험을 내포한다. 첫째, 시장이 이미 만료 리스크를 충분히 선반영하고 있을 경우 숏 진입 후 오히려 주가가 반등할 수 있다. 둘째, 보호예수 주식을 빌릴 수 없는 경우가 많아 대주(貸株) 비용이 급등하는 '숏 스퀴즈' 상황이 연출되기도 한다. 셋째, 만료 직전 회사가 호재성 공시(실적 서프라이즈, 대형 계약 체결 등)를 발표하면 숏 포지션이 치명적 손실로 이어진다.

장기 기관 투자자(롱온리 펀드) 입장에서는 보호예수 만료 후 기존 주주의 매각이 완료된 시점이 오히려 저점 매수 기회가 되기도 한다. 오버행이 해소된 이후 유통주식(Free Float)이 증가하면 MSCI·FTSE 등 지수 제공자들이 해당 종목의 지수 내 비중을 재조정(리밸런싱)할 수 있고, 이는 패시브 펀드의 자동 매수 수요를 끌어들이는 효과로 이어진다. 실제로 한국 대형 IPO에서는 보호예수 만료 6~12개월 후 MSCI Korea 편입 또는 비중 확대가 이뤄지면서 주가가 유의미하게 회복되는 사례가 반복적으로 관찰된다.`,
        bodyEn: `The period surrounding lock-up expiration creates distinct strategic considerations for each class of market participant. For existing shareholders — PE sponsors, VC funds, and founding management — the primary decision is not whether to sell, but how to do so without self-destructing on market impact. A PE firm holding 20% of a ₩5 trillion market cap company cannot simply dump its entire position at the opening bell on expiration day; the market impact alone could reduce realized proceeds by 10–20% relative to pre-expiration prices. Sophisticated sellers therefore work with their banks months in advance to structure exit strategies: phased secondary offerings, ABBs timed to positive news flow, or SEC Rule 10b5-1 plans in the U.S. context, which allow insiders to pre-program automatic sales on a schedule established before they enter any material non-public information window.

Short sellers view high-overhang lock-up expirations as one of the cleanest tactical short opportunities in the equity market — a situation where the supply-demand imbalance is structurally foreseeable. However, this trade carries significant execution risks. First, if the overhang is well-publicized, the downside may be fully priced in weeks before expiration, leaving late shorts with no edge and substantial squeeze risk. Second, borrowing lock-up shares to facilitate a short often proves impossible or prohibitively expensive, since those shares are not in the lending pool. Third, management teams are acutely aware of the expiration calendar and sometimes time positive announcements — earnings beats, partnership deals, or guidance raises — to counteract selling pressure, which can catch shorts offside. The empirical evidence suggests that the best short entry is roughly three to four weeks before expiration, not on expiration day itself.

For long-only institutional investors, the post-expiration period can represent a compelling entry point once the overhang has been fully digested. After the lock-up shares are absorbed into the market, the free float increases materially, which has a second-order effect through index rebalancing. Index providers like MSCI and FTSE calculate constituent weights based on free-float-adjusted market cap; a larger float means a higher index weight, which triggers mandatory buying from passive funds tracking those benchmarks. In Korea, this dynamic is especially pronounced given the size of the passive AUM benchmarked to MSCI Korea and KOSPI 200. Several landmark Korean IPOs have followed a pattern of post-lock-up softness followed by a sharp recovery six to twelve months later, coinciding with index inclusion events or weight increases that generated billions of won in automatic index-driven demand.`,
      },
    ],
    keyTerms: [
      {
        term: "오버행",
        termEn: "Overhang",
        definition: "보호예수 만료 시 시장에 매물로 나올 수 있는 잠재적 대량 주식 물량. 유통주식 대비 비율이 높을수록 주가 하방 압력이 커진다.",
        definitionEn: "The pool of shares that could potentially enter the market upon lock-up expiration. A high overhang ratio (overhang shares / public float) is associated with greater downside price pressure around expiration.",
      },
      {
        term: "유통주식",
        termEn: "Float",
        definition: "전체 발행 주식 중 보호예수·대주주 보유분 등을 제외하고 시장에서 자유롭게 거래 가능한 주식의 수. 유통주식이 적을수록 주가 변동성이 크다.",
        definitionEn: "The number of shares available for public trading after excluding lock-up shares, insider holdings, and major strategic shareholders. A lower float typically implies higher price volatility.",
      },
    ],
    relatedSlugs: ["ecm-ipo-post", "free-float", "ecm-ipo-issuers"],
    appearsIn: [
      { type: "market-101" as const, slug: "ecm-ipo-post", title: "IPO 상장 이후: 주가 안정화와 사후 관리", titleEn: "Post-IPO: Price Stabilization and Aftermarket Management" },
    ],
  },
  {
    slug: "free-float",
    title: "유통주식비율",
    titleEn: "Free Float",
    entryType: "term" as const,
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt: "전체 발행 주식 중 대주주·경영진·보호예수 주식을 제외하고 시장에서 자유롭게 거래 가능한 주식의 비율. MSCI·FTSE 등 글로벌 지수 편입 기준과 직결되며, 패시브 자금 유입의 핵심 결정 요인이다.",
    excerptEn: "The proportion of a company's total shares outstanding that is freely tradable in the market, excluding holdings by controlling shareholders, management, and lock-up holders. Directly determines index inclusion eligibility and weighting under MSCI, FTSE, and other major global benchmarks.",
    readingMinutes: 5,
    tags: ["유통주식비율", "프리플로트", "지수편입", "MSCI", "ECM"],
    tagsEn: ["Free Float", "Float-Adjusted Market Cap", "Index Inclusion", "MSCI", "ECM"],
    sections: [
      {
        heading: "유통주식비율 계산법",
        headingEn: "How Free Float Is Calculated",
        body: `유통주식비율(Free Float Ratio)은 전체 발행 주식수에서 '비유통 주식'을 제외한 나머지 주식의 비율이다. 비유통 주식으로는 ① 최대주주 및 특수관계인 보유분, ② 의무보호예수 대상 주식, ③ 전략적 투자자(Strategic Investor) 장기 보유분, ④ 자사주(Treasury Stock), ⑤ 정부·공공기관 보유분이 포함된다. 공식으로 표현하면: 유통주식비율 = (전체 발행주식수 - 비유통 주식수) / 전체 발행주식수 × 100. 예를 들어 총 발행주식이 1억 주이고 최대주주가 4,000만 주, 보호예수 주식 1,000만 주, 자사주 500만 주를 보유하고 있다면 유통주식비율은 (1억 - 5,500만) / 1억 = 45%가 된다.

유통주식비율 계산에서 중요한 것은 지수 제공자마다 산정 방식이 다소 다르다는 점이다. MSCI는 외국인 투자 제한 종목의 경우 외국인 투자 가능 비율(FIF, Foreign Inclusion Factor)을 추가로 적용해 '조정 유통주식비율(Adjusted Float)'을 산출한다. FTSE Russell은 유통주식비율 25% 미만인 종목을 지수에서 제외하는 정책을 적용하며, 코스피200 등 국내 지수는 각 거래소별 규정에 따라 다소 다른 기준을 사용한다. 이 때문에 동일 종목이라도 MSCI 기준 지수 편입 비중과 코스피200 기준 비중이 다르게 나타날 수 있다.

실무적으로 유통주식비율은 정적인 수치가 아니다. 보호예수 만료, 대주주의 블록딜, 자사주 소각 또는 취득, 신주 발행 등의 이벤트가 발생할 때마다 변동한다. IPO 직후에는 보호예수로 인해 유통주식비율이 낮은 경우가 많고, 보호예수 만료 이후 단계적으로 비율이 높아지는 패턴을 보인다. 따라서 IRO(Investor Relations Officer)와 주관사는 상장 후 2~3년의 유통주식비율 변화 경로를 시뮬레이션하여, 예상되는 지수 편입 일정을 사전에 투자자에게 공유하는 것이 일반적이다.`,
        bodyEn: `Free float is calculated by subtracting all "non-tradable" shares from total shares outstanding. Non-tradable categories include: (1) shares held by controlling shareholders and related parties, (2) shares subject to lock-up restrictions, (3) long-term strategic holdings, (4) treasury shares held by the company itself, and (5) government and state-entity holdings. The formula is: Free Float Ratio = (Total Shares Outstanding − Non-Tradable Shares) / Total Shares Outstanding × 100. For a company with 100 million total shares, where the controlling shareholder holds 40 million, lock-up shares account for 10 million, and treasury stock is 5 million, the free float is (100M − 55M) / 100M = 45%.

The critical nuance in free float calculation is that each major index provider applies its own methodology. MSCI layers an additional Foreign Inclusion Factor (FIF) on top of the raw free float for markets with foreign ownership limits — such as Korea's investor registration system and sector-specific caps — producing an "Adjusted Market Cap" figure that can be materially lower than the headline free float. FTSE Russell maintains a hard threshold: companies with free float below 25% are ineligible for most of its global indices. S&P Dow Jones Indices uses a similar float-adjusted methodology for the S&P 500. Domestic Korean indices (KOSPI 200, KRX 300) each have their own float and liquidity screening criteria published by the KRX, which can diverge from MSCI's definition of the same stock's investable weight. This divergence means that a company optimizing its float for MSCI inclusion may still face a different weight in domestic passive benchmarks.

Practically speaking, free float is a dynamic number that changes with corporate actions. Lock-up expirations incrementally increase float as previously restricted shares become tradable. Block trades by major shareholders, secondary offerings, treasury stock buybacks (which reduce float) or cancellations (which increase investable shares proportionally), and new share issuances via equity offerings all shift the free float ratio in real time. IPO companies typically start with a low free float — often 20–35% immediately post-listing — that gradually rises over the first two to three years as lock-ups expire. Sophisticated IROs track this trajectory carefully, modeling the expected float expansion schedule and sharing it with index analysts and institutional investors so that the index rebalancing impact can be anticipated and priced in advance rather than occurring as a surprise.`,
      },
      {
        heading: "지수 편입과의 관계",
        headingEn: "Relationship to Index Inclusion",
        body: `유통주식비율은 글로벌 패시브 자금의 배분을 결정하는 가장 중요한 변수 중 하나다. MSCI는 분기별 지수 리뷰(Quarterly Index Review, QIR)와 반기별 지수 리뷰(Semi-Annual Index Review, SAIR)를 통해 구성 종목의 편입·제외·비중 조정을 실시한다. 신규 편입을 위해서는 MSCI 기준 유통시가총액(Float-Adjusted Market Cap)이 최소 기준을 초과해야 하며, FIF를 적용한 조정 유통주식비율이 일정 수준 이상이어야 한다. 유통주식비율이 낮으면 MSCI Emerging Markets Index 등에서 비중이 축소되거나 편입 자체가 불가능해진다.

패시브 펀드의 관점에서 지수 비중 변화는 의무적 매수·매도를 의미한다. 글로벌 패시브 AUM 중 MSCI EM Index를 추종하는 규모는 2024년 기준 약 2조 달러로 추산된다. 만약 어떤 한국 종목의 MSCI 비중이 기존 0.1%에서 0.2%로 두 배 확대되면, 이를 추종하는 패시브 펀드는 해당 종목을 약 20억 달러(약 2.7조 원)어치 추가 매수해야 한다. 이러한 수요는 리밸런싱 기준일(Rebalancing Date) 직전과 직후에 집중되어 단기적으로 주가에 강한 상방 압력을 만든다. 실제로 MSCI Korea 편입 또는 비중 확대 발표 이후 평균적으로 발표일부터 적용일까지 3~7%의 초과 수익이 관찰된다는 연구 결과가 다수 있다.

반대로 유통주식비율이 하락하는 상황(대주주 지분 매입, 자사주 취득, 외국인 투자 한도 소진 등)은 지수 비중 축소로 이어져 패시브 자금의 매도를 유발한다. 이를 '지수 이탈(Index Deletion)' 또는 '비중 축소(Weight Reduction)'라 하며, 사전 공시 없이 갑작스러운 자사주 대규모 취득 또는 대주주 지분 증가가 발생하면 시장이 예상치 못한 매도 충격에 노출될 수 있다. 따라서 기업들은 자사주 정책이나 지배구조 변화를 검토할 때 지수 유통주식비율 영향을 반드시 사전에 점검해야 한다.`,
        bodyEn: `Free float is arguably the single most important variable in determining how much passive capital flows into a given stock. MSCI conducts quarterly index reviews (QIR) and semi-annual index reviews (SAIR) to add, remove, and reweight constituents across its global indices. For new index inclusion, a stock must exceed MSCI's minimum float-adjusted market cap threshold — currently around USD 1.3 billion for MSCI Emerging Markets Large Cap — and its FIF-adjusted free float must surpass the applicable floor. A low free float constrains the investable weight assigned to the stock, directly reducing the passive AUM that must mechanically hold it.

The magnitude of index-driven flows can dwarf daily trading volume for smaller or mid-cap companies. Total passive AUM benchmarked to the MSCI Emerging Markets Index is estimated at approximately USD 2 trillion as of 2024. A 10 basis point increase in a Korean stock's weight within that index translates to roughly USD 2 billion in mandatory buying from index funds globally. This buying is concentrated in the days immediately before the rebalancing effective date, creating a predictable and exploitable price dynamic. Academic research consistently documents positive abnormal returns of 3–7% from the announcement date to the effective date for MSCI index inclusions, with partial reversal afterward as the one-time passive demand is absorbed. Active managers who anticipate index changes — by tracking float expansion events and comparing current weights against updated eligibility criteria — can generate excess returns by front-running the rebalancing flow.

The reverse dynamic — declining free float — is equally important to monitor. When a controlling shareholder increases its stake through a tender offer or creeping acquisition, when a company repurchases large volumes of treasury stock, or when foreign ownership limits are reached in a restricted market, MSCI's FIF can drop sharply, triggering involuntary selling by passive funds at the next rebalancing date. Korean companies have learned this lesson through hard experience: several KOSPI-listed conglomerates have seen their MSCI weights cut significantly following defensive buybacks by controlling families during hostile takeover scares, only to face additional selling pressure from the passive rebalancing that followed. Boards and IRO teams at major Korean public companies now routinely run float-impact analyses before approving significant shareholder structure changes.`,
      },
      {
        heading: "한국 시장 특수성",
        headingEn: "Korean Market Specifics",
        body: `한국 자본시장에서 유통주식비율은 특수한 구조적 특성으로 인해 글로벌 평균보다 낮은 경향이 있다. 가장 큰 원인은 재벌 지배구조다. 삼성전자·현대차·SK·LG 등 주요 그룹 계열사의 경우 오너 일가 및 계열사 간 상호출자를 통해 지배주주가 20~50%의 지분을 보유하는 구조가 일반적이다. 이 지분은 사실상 시장에 유통되지 않는 '고정 블록'으로, 유통주식비율을 구조적으로 낮추는 요인이 된다. MSCI는 이를 반영해 한국 종목들에 상대적으로 낮은 FIF를 부여하는 경우가 많으며, 이것이 한국의 MSCI EM 내 비중이 경제 규모 대비 낮다는 평가의 원인 중 하나다.

두 번째 특수성은 외국인 투자 한도(Foreign Ownership Limit, FOL) 제도다. 통신·방송·항공 등 일부 업종에서는 외국인 보유 가능 비율이 법적으로 제한된다. 방송법상 외국인은 지상파 방송사 주식을 보유할 수 없고, 항공법상 외국인 지분은 50% 미만으로 제한된다. 이러한 제한이 있는 종목은 MSCI FIF 산정 시 FOL을 별도 적용받아 조정 유통주식비율이 더욱 낮아진다. 또한 외국인 투자 한도가 이미 95% 이상 소진된 종목은 외국인이 추가 매수할 수 없어 실질적인 패시브 자금 유입이 차단되는 상황도 발생한다.

세 번째는 자사주 비율 문제다. 한국 기업들은 주주 환원 또는 M&A 방어 수단으로 자사주를 대규모 취득하는 경우가 많아, 일부 대형 블루칩 기업의 자사주 비율이 10~20%에 달한다. 자사주는 의결권도 배당권도 없어 지수 산정 시 발행주식수에서 제외되지만, 그 자체로는 비유통 주식이므로 실제 유통주식비율을 떨어뜨린다. 코리아 디스카운트의 해소를 위해 금융당국이 추진 중인 기업 밸류업 프로그램(2024~)에서도 유통주식비율 제고와 자사주 소각이 핵심 과제로 포함된 것은 이러한 구조적 문제를 반영한다.`,
        bodyEn: `Korean capital markets exhibit structurally lower free float ratios compared to most developed and peer emerging markets, driven by three distinctive characteristics. The most fundamental is the chaebol ownership structure. Korea's major conglomerate groups — Samsung, Hyundai, SK, LG, and Lotte — typically maintain controlling family stakes of 20–50% across listed subsidiaries, often amplified through circular cross-shareholdings among group affiliates. These stakes are effectively permanent non-tradable blocks that suppress free float across the entire listed universe. MSCI accounts for this by assigning relatively low FIFs to many Korean names, which is one structural reason why Korea's weight in MSCI Emerging Markets (~12–14%) remains modest relative to its economy's share of global GDP and the sophistication of its capital markets.

The second structural factor is Korea's Foreign Ownership Limit (FOL) system. Certain regulated sectors — broadcasting, telecommunications, aviation, and financial institutions — are subject to statutory caps on foreign shareholding. Broadcasting companies are prohibited from foreign ownership above 0%, domestic airlines are capped at 50%, and major banks have historically carried a 10–25% foreign ownership limit for strategic reasons. When a stock's foreign ownership approaches its legal ceiling, the stock effectively becomes unavailable to foreign passive funds regardless of its economic size, causing MSCI to apply a reduced FIF that shrinks the investable weight. In extreme cases where the FOL is more than 95% utilized, no additional foreign buying is possible, completely neutralizing the index-rebalancing channel as a source of price support.

The third factor is the unusually high treasury stock ratio among Korean blue chips. Korean companies have historically used large-scale treasury share repurchases as both a shareholder return mechanism and a defense against hostile M&A. Several KOSPI 200 constituents carry treasury stock ratios of 10–20% of total shares outstanding. While treasury shares have no voting rights or dividend entitlements and are excluded from index calculations, they represent shares that are technically issued but economically non-tradable, reducing free float. The Korea Discount — the persistent valuation gap between Korean stocks and global peers on P/B and P/E metrics — has multiple causes, but low free float and associated low liquidity are among the structural contributors. The Korean government's Corporate Value-up Program, launched in 2024, explicitly targets free float enhancement and treasury share cancellation as priority mechanisms for closing the valuation discount, signaling a regulatory push toward structurally higher float ratios across the KOSPI universe.`,
      },
    ],
    keyTerms: [
      {
        term: "지수편입",
        termEn: "Index Inclusion",
        definition: "특정 주식이 MSCI·FTSE·코스피200 등 벤치마크 지수의 구성 종목으로 추가되는 것. 편입 시 해당 지수를 추종하는 패시브 펀드의 의무 매수가 발생해 주가 상방 압력이 생긴다.",
        definitionEn: "The addition of a stock to a benchmark index such as MSCI, FTSE, or KOSPI 200. Inclusion triggers mandatory buying from passive funds tracking the index, generating systematic upward price pressure around the effective rebalancing date.",
      },
      {
        term: "유동성",
        termEn: "Liquidity",
        definition: "주식을 시장에서 큰 가격 충격 없이 매수·매도할 수 있는 능력. 유통주식비율이 높을수록 일반적으로 시장 유동성이 풍부해지고 bid-ask 스프레드가 좁아진다.",
        definitionEn: "The ability to buy or sell shares in the market without causing significant price impact. Higher free float generally correlates with greater market depth, tighter bid-ask spreads, and lower transaction costs for large institutional investors.",
      },
    ],
    relatedSlugs: ["lock-up", "ecm-ipo-issuers", "ecm-international-listing"],
    appearsIn: [
      { type: "market-101" as const, slug: "ecm-ipo-issuers", title: "발행사 관점에서의 IPO: 구조 설계와 주주 관리", titleEn: "IPO from the Issuer's Perspective: Structure Design and Shareholder Management" },
    ],
  },
  {
    slug: "dilution",
    title: "희석 효과",
    titleEn: "Dilution",
    entryType: "term" as const,
    category: "ecm",
    categoryLabel: "ECM",
    categoryLabelEn: "ECM",
    excerpt: "신주 발행으로 기존 주주의 지분율과 EPS(주당순이익)가 줄어드는 현상. 유상증자·CB 전환·스톡옵션 행사 모두 희석을 유발하며, 반희석(anti-dilution) 조항은 PE·VC 투자 계약의 핵심 보호 장치다.",
    excerptEn: "The reduction in existing shareholders' ownership percentage and earnings per share resulting from new share issuances. Rights offerings, convertible bond conversions, and stock option exercises all cause dilution; anti-dilution provisions are a cornerstone protection mechanism in PE and VC investment agreements.",
    readingMinutes: 5,
    tags: ["희석", "EPS 희석", "유상증자", "전환사채", "반희석", "ECM"],
    tagsEn: ["Dilution", "EPS Dilution", "Rights Offering", "Convertible Bond", "Anti-Dilution", "ECM"],
    sections: [
      {
        heading: "희석 계산: EPS 희석률",
        headingEn: "Calculating Dilution: EPS Dilution Rate",
        body: `희석(Dilution)은 신주 발행으로 인해 기존 주주의 지분율이 낮아지거나 주당 가치(EPS·BPS 등)가 감소하는 현상이다. 가장 직관적인 희석 지표는 EPS 희석률이다. 예를 들어 발행주식이 1,000만 주이고 당기순이익이 100억 원인 기업의 기본 EPS는 1,000원이다. 여기서 200만 주의 신주를 발행(희석 후 총 1,200만 주)하면, 순이익이 변하지 않는다고 가정할 때 희석 EPS는 100억 원 / 1,200만 주 = 833원이 되어, EPS가 약 16.7% 희석된다. 지분율 희석도 동일한 논리다. 기존에 10% 지분을 보유하던 주주는 신주 발행 후 10% × (1,000만/1,200만) ≈ 8.33%로 지분이 줄어든다.

희석의 경제적 영향은 신주 발행 가격에 크게 좌우된다. 현재 주가보다 높은 가격에 신주를 발행하면(프리미엄 발행) EPS 희석은 발생하지만 BPS(주당순자산)는 오히려 상승하여 장기적으로 주주가치를 높일 수 있다. 반대로 현재 주가보다 낮은 가격에 발행하면(디스카운트 발행) EPS와 BPS 모두 하락하여 기존 주주에게 즉각적인 경제적 손실이 발생한다. 한국 증권신고서 실무에서는 신주 발행가액 산정 기준(기준주가 대비 할인율)을 상세히 공시하도록 규정되어 있으며, 유상증자의 경우 통상 공시 직전 거래량 가중 평균 주가(VWAP)에 10~20% 할인율을 적용한다.

완전희석주식수(Fully Diluted Shares Outstanding)는 현재 발행된 주식에 더해 전환사채(CB)·신주인수권부사채(BW)·스톡옵션·전환우선주 등 잠재적으로 주식으로 전환될 수 있는 모든 증권을 주식으로 환산했을 때의 최대 발행주식수다. 기업 밸류에이션에서 EV/EBITDA·P/E 계산 시 완전희석주식수를 사용해야 진정한 희석 효과를 반영할 수 있다. M&A 딜에서 인수자는 항상 완전희석 기준 지분 가치를 계산하며, IPO 공모가 산정에서도 완전희석 EPS를 기반으로 한 목표 P/E 배수 적용이 일반적이다.`,
        bodyEn: `Dilution refers to the reduction in existing shareholders' ownership percentage or per-share value metrics (EPS, book value per share) caused by the issuance of additional shares. The most commonly tracked dilution metric is EPS dilution. Consider a company with 10 million shares outstanding earning ₩10 billion in net income, implying basic EPS of ₩1,000. If the company issues 2 million new shares (total outstanding rises to 12 million), net income unchanged, diluted EPS falls to ₩10 billion / 12 million = ₩833, a dilution of approximately 16.7%. Ownership dilution follows the same logic: a shareholder who previously held 10% of the company now holds 10% × (10M/12M) ≈ 8.33%.

The economic impact of dilution depends critically on the issuance price relative to intrinsic value. When new shares are issued above the current stock price (premium issuance), EPS may still decline on a per-share basis, but book value per share (BPS) increases, as the company receives more cash per share than the existing book value implies. This is accretive in a balance sheet sense and can support long-term value creation if the proceeds are deployed productively. Conversely, issuance below market price (discount issuance) — common in distressed secondary offerings or deeply discounted rights issues — immediately destroys per-share value for existing shareholders who do not participate. Under Korea's Securities Regulations, issuers conducting rights offerings must publicly disclose the new share pricing methodology in their registration statement, typically referencing a VWAP-based reference price with a 10–20% discount applied by the lead manager.

Fully diluted shares outstanding is the denominator that captures the theoretical maximum share count after all convertible instruments are exercised or converted. This includes shares issuable under convertible bonds (CB), bonds with warrants (BW), stock options, convertible preferred stock, and other equity-linked instruments. Analysts use fully diluted share counts when computing valuation multiples — P/E, EV/EBITDA — to ensure the market's pricing reflects the full potential dilution. In M&A contexts, acquirers always compute purchase price on a fully diluted basis using the treasury stock method for options and the if-converted method for convertibles. IPO pricing also relies on fully diluted EPS when applying target P/E multiples to determine the offering price range, making the choice of diluted share count a direct input to how the deal is marketed to investors.`,
      },
      {
        heading: "유상증자·CB에서의 희석",
        headingEn: "Dilution in Rights Offerings and Convertible Bonds",
        body: `유상증자는 한국 증시에서 가장 빈번하게 발생하는 희석 이벤트다. 2023년 한 해 동안 국내 상장사의 유상증자 공시 건수는 200건을 초과했으며, 총 조달 규모는 수십 조 원에 달한다. 유상증자는 구주 주주에게 신주 인수권을 부여하는 주주 배정 방식과, 제3자(기관·특정 투자자)에게 직접 배정하는 제3자 배정 방식으로 나뉜다. 주주 배정 방식은 기존 주주가 비율대로 신주를 인수하면 희석이 발생하지 않지만, 인수를 포기하거나 자금 여력이 없는 소수 주주는 희석을 피할 수 없다. 제3자 배정 방식은 일반적으로 발행 목적(M&A, 전략적 제휴)에 따라 시장에서 프리미엄을 받거나 할인을 적용받으며, 기존 주주 전체에게 즉각적인 희석을 초래한다.

전환사채(CB, Convertible Bond)는 채권 형태로 자금을 조달하되 일정 조건 충족 시 주식으로 전환될 수 있는 증권이다. CB 발행 자체는 즉각적인 희석을 유발하지 않지만, 전환권이 행사되는 순간 신주가 발행되어 기존 주주의 EPS와 지분율이 희석된다. CB의 전환가액(Conversion Price)이 낮게 설정될수록 전환 시 발행되는 주식수가 많아져 희석 효과가 크다. 리픽싱(Refixing) 조항이 있는 CB는 주가 하락 시 전환가액이 자동으로 낮아지도록 설계돼 있어, 주가 약세 국면에서 희석이 가속화되는 '희석의 악순환' 구조를 만들 수 있다. 한국 금융당국은 리픽싱 조항의 남용을 억제하기 위해 2022년 이후 전환가액 하향 조정 한도와 횟수에 제한을 두는 방향으로 규정을 강화했다.

스톡옵션(주식매수선택권)은 임직원에게 미래의 정해진 가격으로 주식을 살 수 있는 권리를 부여하는 보상 제도다. 옵션 부여 자체로는 주식이 발행되지 않지만, 행사 시 신주가 발행되어 희석이 발생한다. 스타트업 계열 상장사의 경우 IPO 전후로 대규모 스톡옵션이 부여되는 경우가 많아, 완전희석 기준 발행주식수가 기본 발행주식수 대비 10~20%까지 늘어나는 사례도 있다. 따라서 스타트업 기반 IPO를 분석할 때는 반드시 스톡옵션 풀(Option Pool)의 규모와 행사 조건을 확인하고, 이를 반영한 완전희석 EPS를 계산해야 한다.`,
        bodyEn: `Rights offerings are the most frequent dilution event in the Korean equity market, with over 200 listed companies conducting equity raises annually in recent years, collectively raising tens of trillions of won. A rights offering (주주 배정 유상증자) gives existing shareholders the right — but not the obligation — to subscribe to new shares in proportion to their current holding at a discounted price. If all shareholders exercise their rights, ownership percentages remain constant and dilution in a percentage sense is avoided; however, the share count increases and EPS still falls unless the new capital generates proportional earnings. Shareholders who choose not to exercise (or cannot afford to) suffer both ownership and EPS dilution. General public offerings (일반 공모 증자) and third-party allotments (제3자 배정) bypass existing shareholders entirely, causing immediate dilution to all who do not participate — a particularly sensitive dynamic for controlling shareholders who may need to maintain regulatory ownership thresholds.

Convertible bonds introduce contingent dilution: no immediate share issuance occurs at issuance, but the potential dilution is latent in the instrument and must be disclosed and reflected in fully diluted calculations. The conversion price determines the dilution magnitude — a CB with a ₩50,000 conversion price on a ₩1 trillion face value issuance would convert into 20 million shares; the same instrument with a ₩30,000 conversion price would produce 33 million shares, a 65% larger dilution. The refixing (리픽싱) feature embedded in most Korean CB structures is particularly pernicious: it automatically resets the conversion price downward if the stock price falls below a trigger level (typically 80–90% of the original conversion price). This creates a reflexive loop where a falling stock price lowers the conversion price, increasing the anticipated share dilution, which further depresses the stock price, triggering additional refixing. The FSS tightened refixing regulations in 2022, limiting downward adjustments to a floor of 70% of the original conversion price and restricting the number of adjustments, in response to a wave of abusive CB issuances that devastated minority shareholders.

Stock option programs create another layer of contingent dilution that is particularly significant for technology and startup-stage companies transitioning to public markets. Pre-IPO and post-IPO stock option grants can represent 10–20% of total shares outstanding on a fully diluted basis, substantially reducing per-share value for IPO investors who focus only on basic share counts. The treasury stock method is the standard approach for incorporating option dilution into EPS calculations: it assumes all in-the-money options are exercised, the company receives the exercise proceeds, and uses those proceeds to theoretically repurchase shares at the average market price. Options that are deeply out-of-the-money have no dilutive effect under this method. Analysts covering high-option-load companies must carefully track the strike price distribution of the option pool, since a stock price that rises well above the strike triggers significantly more dilution than the at-the-money scenario assumed at IPO.`,
      },
      {
        heading: "반희석 조항과 방어 수단",
        headingEn: "Anti-Dilution Provisions and Defensive Mechanisms",
        body: `반희석(Anti-Dilution) 조항은 PE·VC 투자 계약에서 기존 투자자를 향후 희석 이벤트로부터 보호하기 위해 삽입하는 조항이다. 가장 일반적인 두 가지 방식은 완전 래칫(Full Ratchet)과 가중평균(Weighted Average)이다. 완전 래칫은 후속 투자 라운드의 발행가액이 직전 라운드보다 낮을 경우(다운라운드), 기존 투자자의 전환가액을 새로운 발행가액으로 자동 조정하는 방식이다. 예를 들어 시리즈B에서 주당 10만 원에 투자한 VC가 있고, 이후 시리즈C에서 5만 원에 신주가 발행된다면, 완전 래칫 조항에 따라 시리즈B 투자자의 전환가액도 5만 원으로 낮아지고 이에 따라 받게 되는 주식수가 두 배로 늘어난다. 이는 기존 주주에게 극히 불리한 조항으로, 협상력이 강한 대형 VC에서 주로 요구한다.

가중평균 방식은 보다 시장 친화적이다. 다운라운드 발생 시 새로운 전환가액을 기존 발행가액과 신규 발행가액의 가중평균으로 산정한다. 가중치는 각 라운드의 실제 발행 물량을 반영하므로, 소규모 다운라운드는 기존 투자자의 전환가액에 미치는 영향이 제한적이다. 넓은 가중평균(Broad-Based Weighted Average) 방식은 완전희석 기준 총 발행주식수를 분모로 사용하여 모든 잠재 희석 증권을 고려하는 반면, 좁은 가중평균(Narrow-Based Weighted Average)은 실제 발행된 우선주만을 분모로 사용한다. 글로벌 VC 투자 표준에서는 넓은 가중평균이 일반적이며, 창업자 및 일반 주주에게 더 유리하다.

발행사 입장에서 희석을 최소화하는 방어 전략도 다양하다. 첫째, 기존 주주에게 신주 인수권(Pre-emptive Right)을 부여해 희석 참여를 선택할 수 있게 하는 방식이 있다. 둘째, 자사주 소각(Treasury Share Cancellation)은 발행주식수를 줄여 EPS를 높이는 반희석 효과를 낸다. 삼성전자가 2015~2017년에 걸쳐 시행한 대규모 자사주 소각은 EPS 개선을 통해 주가 상승에 기여한 대표적 사례다. 셋째, 유상증자 없이 내부 창출 현금(영업 현금흐름)으로 성장 투자를 충당하는 것이 희석을 근본적으로 피하는 방법이지만, 자본 집약적 산업에서는 현실적으로 불가능한 경우가 많다. 결국 자본 조달의 시기, 구조, 가격을 어떻게 설계하느냐가 기존 주주 보호의 핵심이다.`,
        bodyEn: `Anti-dilution provisions are contractual protections embedded in PE and VC investment agreements that adjust the conversion price of preferred shares downward if subsequent financing rounds occur at a lower price per share (a "down round"), thereby partially or fully compensating existing investors for dilution suffered. The two primary anti-dilution structures are full ratchet and weighted average. Full ratchet is the most aggressive: if any new shares are issued at a price below the Series B price, the Series B conversion price drops all the way to the new issue price, regardless of how many new shares are issued. A Series B investor who paid ₩100,000 per share would see their conversion price fall to ₩50,000 in a Series C at ₩50,000, effectively doubling their share count at no additional cost — devastating for common shareholders and employees holding options. Full ratchet provisions are relatively uncommon in healthy markets but sometimes demanded by investors in distressed financing situations or by unusually powerful early-stage VCs.

Weighted average anti-dilution is the market standard in institutional venture and growth equity investing. It recalculates the conversion price as a blend of the existing price and the new issue price, weighted by the number of shares outstanding and newly issued. The broad-based weighted average formula uses total fully diluted shares outstanding as the divisor, minimizing the impact of anti-dilution adjustments on common shareholders; narrow-based weighted average uses only outstanding preferred shares, which produces a more aggressive adjustment. Most sophisticated VC-backed company term sheets globally, and increasingly in Korea, use broad-based weighted average, which strikes a balance between protecting investors in down rounds and preserving enough equity incentive for founders and employees to maintain motivation through difficult periods.

From the issuer's perspective, defensive mechanisms to minimize unnecessary dilution have become a key element of capital markets strategy. Pre-emptive rights (신주 인수권), which give existing shareholders the right to subscribe to new shares before they are offered to third parties, are the most fundamental protection — a right that is often statutory in Korea but can be waived by shareholder vote. Treasury share cancellation, rather than merely holding repurchased shares on the balance sheet, directly reduces the share count and boosts EPS in a manner that is permanent and value-accretive. Samsung Electronics' landmark ₩10 trillion treasury share cancellation program between 2015 and 2017 is the canonical Korean example, materially improving EPS and contributing to the stock's subsequent rerating. Finally, financing growth through internally generated cash flow — avoiding equity issuance altogether — is the most powerful anti-dilution strategy available to companies with strong free cash flow generation. For capital-intensive sectors like semiconductors, shipbuilding, or battery manufacturing, where periodic large equity raises are structurally necessary, the discipline lies in timing issuances when the stock trades at a premium to intrinsic value, ensuring that any dilution is more than offset by the value created from deploying the capital raised.`,
      },
    ],
    keyTerms: [
      {
        term: "EPS 희석",
        termEn: "EPS Dilution",
        definition: "신주 발행으로 인해 주당순이익(EPS = 당기순이익 / 발행주식수)이 줄어드는 현상. 발행주식수 증가분에 비례해 EPS가 낮아지며, 주가 하방 압력의 원인이 된다.",
        definitionEn: "The reduction in earnings per share (EPS = net income / shares outstanding) resulting from an increase in the share count due to new share issuances. EPS dilution is proportional to the percentage increase in shares and is a primary driver of downward re-rating pressure on the stock.",
      },
      {
        term: "완전희석주식수",
        termEn: "Fully Diluted Shares Outstanding",
        definition: "현재 발행 주식에 CB·BW·스톡옵션·전환우선주 등 잠재적 전환·행사 가능한 증권 전체를 주식으로 환산했을 때의 최대 발행주식수. EPS 및 기업가치 산정의 분모로 사용된다.",
        definitionEn: "The maximum share count assuming all convertible instruments (CBs, BWs, stock options, convertible preferred shares) are converted or exercised into ordinary shares. Used as the denominator in fully diluted EPS and enterprise value calculations to capture the full potential dilution impact.",
      },
    ],
    relatedSlugs: ["ecm-followon", "ecm-convertible", "ecm-ipo-issuers"],
    appearsIn: [
      { type: "market-101" as const, slug: "ecm-followon", title: "상장 후 증자: 유상증자와 블록딜", titleEn: "Follow-On Offerings: Rights Issues and Block Trades" },
    ],
  },

  // ── LevFin 용어 ──────────────────────────────────────────────────────────────────
{
    slug: "leverage-ratio",
    title: "레버리지 배수",
    titleEn: "Leverage Ratio (Debt/EBITDA)",
    entryType: "term" as const,
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt: "기업의 총부채를 EBITDA로 나눈 배수로, LBO·하이일드 채권·레버리지드 론 분석에서 신용 리스크를 가늠하는 가장 핵심적인 지표다. 통상 LBO 거래에서는 5~7x 수준에서 딜이 구조화되며, 투자등급(IG) 기업은 2x 이하를 유지하는 경우가 많다.",
    excerptEn: "The ratio of a company's total debt to EBITDA is the single most important metric for assessing credit risk in LBO transactions, high-yield bonds, and leveraged loans. LBO deals are typically structured at 5–7x leverage, while investment-grade companies generally maintain below 2x.",
    readingMinutes: 5,
    tags: ["레버리지 배수", "Debt/EBITDA", "LBO", "신용 지표", "하이일드", "레버리지드 론"],
    tagsEn: ["Leverage Ratio", "Debt/EBITDA", "LBO", "Credit Metrics", "High Yield", "Leveraged Loans"],
    sections: [
      {
        heading: "Debt/EBITDA 계산과 해석",
        headingEn: "Calculating and Interpreting Debt/EBITDA",
        body: `레버리지 배수는 기업이 현재의 영업 현금 창출력(EBITDA)으로 전체 부채를 상환하는 데 몇 년이 걸리는지를 직관적으로 보여준다. 계산식은 단순하다: 총부채(Total Debt) ÷ LTM EBITDA. 예를 들어 EBITDA 1억 달러, 총부채 6억 달러인 기업은 6.0x 레버리지를 가진다. 이 숫자가 높을수록 채무 상환 부담이 크고 디폴트 리스크가 높다는 신호다.

시장에서 레버리지 배수를 해석할 때는 업종(sector)과 사이클(cycle) 맥락이 필수적이다. 소비재·헬스케어처럼 현금흐름이 안정적인 업종은 6x 이상에서도 투자자들이 편안하게 받아들이는 반면, 주기적(cyclical) 업종인 화학·철강은 4x도 높다고 볼 수 있다. 2021년 초저금리 환경에서는 일부 LBO가 8x 이상까지 레버리지를 올렸지만, 2022~2023년 금리 급등 이후 시장 평균은 5x 중반대로 내려왔다.

LBO 모델링에서는 진입(Entry) 레버리지와 엑싯(Exit) 레버리지를 함께 분석한다. 투자자들은 보유 기간(hold period) 동안 EBITDA 성장과 부채 상환을 통해 레버리지를 낮추는 '디레버리징(deleveraging)' 경로를 설계한다. 예를 들어 7.0x에 인수한 기업을 5년 후 5.0x 레버리지로 엑싯하면, 부채 감소와 EBITDA 성장이 동시에 IRR을 끌어올리는 구조가 된다. KKR이 2007년 TXU(현 Energy Future Holdings)를 인수할 당시 ~9x의 레버리지를 사용했던 것은 역대 최고 수준의 사례 중 하나로, 이후 디폴트로 이어진 교과서적 반면교사다.`,
        bodyEn: `The leverage ratio intuitively shows how many years it would take a company to repay its entire debt load using current operating cash generation (EBITDA). The formula is straightforward: Total Debt ÷ LTM EBITDA. A company with $100M of EBITDA and $600M of total debt carries 6.0x leverage. Higher multiples signal greater debt service burden and elevated default risk.

Interpreting leverage multiples always requires sector and cycle context. Stable-cash-flow businesses like consumer staples and healthcare can comfortably absorb 6x or more, while cyclical industries such as chemicals and steel are considered stretched at 4x. During the near-zero interest rate era of 2021, some LBOs pushed leverage north of 8x; after the 2022–2023 rate surge, market averages retreated to the mid-5x range as underwriting standards tightened.

In LBO modeling, analysts track both entry leverage and projected exit leverage. Sponsors design a "deleveraging path" where a combination of EBITDA growth and mandatory debt repayment reduces leverage over the hold period. A deal entered at 7.0x that exits at 5.0x after five years generates IRR through both debt paydown and multiple expansion. KKR's 2007 acquisition of TXU (later Energy Future Holdings) at approximately 9x leverage remains a canonical cautionary tale — the company ultimately filed for bankruptcy in 2014 amid collapsing natural gas prices, illustrating how thin the margin of safety becomes at extreme leverage levels.`,
      },
      {
        heading: "선순위/총부채 배수 구분 (Senior vs. Total Leverage)",
        headingEn: "Senior vs. Total Leverage: Why the Distinction Matters",
        body: `레버리지드 파이낸스에서는 단일 레버리지 숫자만으로는 부족하다. 자본구조(capital structure)상 선순위에 위치한 담보부 대출(Senior Secured Loan)과 후순위 하이일드 채권(HY Bond)의 금액을 구분하여 선순위 레버리지(Senior Leverage)와 총부채 레버리지(Total Leverage)를 각각 산출하는 것이 시장 관행이다. 예컨대 First Lien Term Loan B가 4.0x, Second Lien이 1.5x, HY Bond가 1.0x라면 선순위 레버리지는 4.0x, 총 레버리지는 6.5x가 된다.

이 구분이 중요한 이유는 담보회수율(recovery rate) 기대치가 다르기 때문이다. S&P의 역사적 데이터에 따르면 First Lien Senior Secured 대출의 평균 회수율은 약 70~80% 수준인 반면, 무담보 하이일드 채권은 40~50%에 그친다. 따라서 선순위 대출 투자자들은 선순위 레버리지(통상 4.0~5.0x)에 집중하고, 하이일드 채권 투자자들은 총 레버리지와 이자보상배율(Interest Coverage)을 더 중시한다.

레이팅 에이전시도 이 구분을 반영한다. Moody's와 S&P는 레버리지드 기업 평가 시 Gross Debt/EBITDA와 Net Debt/EBITDA(현금 차감)를 모두 고려하며, 업종별 레이팅 방법론에서 허용 가능한 레버리지 임계값을 명시하고 있다. 예를 들어 B3/B- 등급 기업의 경우 총 레버리지 6.0~7.5x가 전형적 범위이며, 이를 초과하면 CCC 등급 압박이 커진다.`,
        bodyEn: `A single leverage figure does not tell the full story in leveraged finance. Market practice requires calculating both senior leverage (focused on senior secured debt) and total leverage (including all layers of the capital structure). For example, if a deal has a First Lien Term Loan B at 4.0x, a Second Lien at 1.5x, and unsecured HY bonds at 1.0x, the senior secured leverage is 4.0x while total leverage reaches 6.5x.

The distinction matters because expected recovery rates differ dramatically across the capital structure. S&P's historical data shows average recovery rates for First Lien Senior Secured loans of approximately 70–80%, compared to only 40–50% for unsecured high-yield bonds. Accordingly, senior lenders focus their credit work on the senior leverage ratio (typically underwritten at 4.0–5.0x), while HY bond investors pay more attention to total leverage and interest coverage metrics.

Rating agencies embed this distinction into their methodologies. Moody's and S&P consider both Gross Debt/EBITDA and Net Debt/EBITDA (netting out cash) when rating leveraged issuers, and publish sector-specific leverage thresholds in their rating criteria. A B3/B- issuer typically exhibits total leverage in the 6.0–7.5x range; pushing materially beyond that range invites rating pressure toward the CCC tier, which triggers institutional investor selling mandates and covenant-based restrictions.`,
      },
      {
        heading: "코버넌트·레이팅에서의 활용",
        headingEn: "Leverage Ratio in Covenants and Credit Ratings",
        body: `레버리지 배수는 단순한 분석 지표를 넘어 법적 구속력 있는 대출 계약(loan agreement) 조항으로 기능하기도 한다. 유지형 코버넌트(maintenance covenant)를 포함하는 전통적 레버리지드 론은 분기별로 Debt/EBITDA가 특정 임계치(예: 6.5x)를 넘지 않도록 규정하며, 위반 시 대출자(lender)가 기한이익상실(acceleration)을 요구하거나 재협상을 강제할 수 있다. 반면 코버넌트 라이트(cov-lite) 구조에서는 이 요건이 없거나 Incurrence 기반으로만 적용된다.

실무적으로 코버넌트 트리거 수준은 통상 예상 레버리지에서 25~30%의 헤드룸(headroom)을 확보하도록 설계된다. 즉 딜 클로징 시점 레버리지가 6.0x라면 코버넌트 트리거는 7.5~8.0x 수준에서 협상되는 식이다. 금융위기 직전인 2007년에는 헤드룸이 지나치게 넓거나 아예 없는 구조가 양산되어 사후적으로 문제가 됐다.

레이팅 관점에서는 단순 Debt/EBITDA 외에 FCF/Debt, EBITDA-Capex/이자비용 등 복합 지표를 함께 본다. 그러나 시장 참여자들이 빠른 스크리닝에서 가장 먼저 확인하는 숫자는 여전히 Debt/EBITDA 배수다. PE 스폰서들이 딜 피치(deal pitch)에서 "5.5x into, 4.0x out"처럼 레버리지 프로파일을 요약하는 관행은 이 지표가 레버리지드 파이낸스 커뮤니케이션의 공통 언어임을 보여준다.`,
        bodyEn: `The leverage ratio functions not just as an analytical tool but as a legally binding provision in loan agreements. Traditional leveraged loans with maintenance covenants require that Debt/EBITDA remain below a specified threshold (e.g., 6.5x) tested quarterly; a breach gives lenders the right to demand acceleration or force an amendment/waiver negotiation. In covenant-lite structures, this requirement is absent or operates only on an incurrence basis, providing borrowers substantially more operating flexibility.

In practice, covenant triggers are typically set to provide 25–30% headroom above the projected leverage at close. If a deal closes at 6.0x leverage, the covenant trigger would be negotiated at around 7.5–8.0x. In the pre-GFC era of 2007, headroom was often excessively wide or nonexistent, contributing to the subsequent wave of distressed situations when operating performance deteriorated.

From a ratings perspective, agencies look beyond simple Debt/EBITDA to include metrics such as FCF/Debt and (EBITDA–Capex)/Interest expense. Nevertheless, Debt/EBITDA remains the first number practitioners check in a quick screen. The PE sponsor convention of summarizing a deal's leverage profile as "5.5x in, 4.0x out" — shorthand for entry leverage and projected exit leverage — illustrates how deeply this ratio is embedded in the common language of leveraged finance communication.`,
      },
    ],
    keyTerms: [
      {
        term: "선순위 레버리지",
        termEn: "Senior Leverage",
        definition: "자본구조 내 선순위 담보부 부채(First Lien)만을 EBITDA로 나눈 배수. 총부채 레버리지보다 낮으며, 담보부 대출 투자자의 핵심 신용 판단 기준.",
        definitionEn: "The ratio of only senior secured (First Lien) debt to EBITDA. Lower than total leverage, this is the primary credit metric for senior secured lenders assessing their collateral coverage.",
      },
      {
        term: "총부채 레버리지",
        termEn: "Total Leverage",
        definition: "선순위·후순위·무담보 채권을 포함한 모든 금융부채를 EBITDA로 나눈 배수. 하이일드 채권 투자자 및 레이팅 에이전시가 중점 분석하는 지표.",
        definitionEn: "The ratio of all financial debt — including senior, second lien, and unsecured bonds — to EBITDA. The primary lens for high-yield investors and rating agencies evaluating overall leverage risk.",
      },
      {
        term: "EBITDA 어드백",
        termEn: "EBITDA Addback",
        definition: "거래 비용, 구조조정 비용, 시너지 효과 등을 EBITDA에 가산하여 '조정 EBITDA'를 산출하는 과정. 어드백이 클수록 실제 레버리지 배수가 낮게 표시되어 채권자와의 협상에서 쟁점이 된다.",
        definitionEn: "The process of adding back transaction costs, restructuring charges, and projected synergies to reported EBITDA to arrive at 'Adjusted EBITDA.' Larger addbacks result in lower stated leverage multiples, making the size and credibility of addbacks a key negotiation point between sponsors and lenders.",
      },
    ],
    relatedSlugs: ["levfin-credit-metrics", "levfin-ecosystem", "covenant-lite"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "levfin-credit-metrics",
        title: "LevFin 핵심 신용 지표",
        titleEn: "LevFin Core Credit Metrics",
      },
    ],
  },
  {
    slug: "covenant-lite",
    title: "코버넌트 라이트",
    titleEn: "Covenant-Lite (Cov-Lite)",
    entryType: "term" as const,
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt: "재무 유지 테스트(maintenance covenant)가 없거나 극히 제한된 레버리지드 론 구조. 2010년대 이후 PE 친화적 시장 환경에서 주류가 되었으며, 차입자에게는 유연성을, 대출자에게는 신호 인식 지연과 회수율 저하 위험을 가져온다.",
    excerptEn: "A leveraged loan structure with no (or severely limited) financial maintenance covenants. Dominant in the post-2010 PE-friendly market, cov-lite loans offer borrowers maximum flexibility while reducing lenders' early-warning signals and potentially their recovery in distress.",
    readingMinutes: 6,
    tags: ["코버넌트 라이트", "Cov-Lite", "유지 코버넌트", "레버리지드 론", "채권자 보호", "PE"],
    tagsEn: ["Covenant-Lite", "Cov-Lite", "Maintenance Covenant", "Leveraged Loans", "Lender Protections", "PE"],
    sections: [
      {
        heading: "Maintenance vs. Incurrence Covenant 차이",
        headingEn: "Maintenance Covenants vs. Incurrence Covenants: Key Differences",
        body: `코버넌트는 크게 두 종류로 나뉜다. 유지형 코버넌트(Maintenance Covenant)는 분기마다 재무 기준을 충족해야 하는 의무다. 예를 들어 "매 분기말 기준 Debt/EBITDA 6.5x 이하 유지"처럼 기업 실적이 나빠지면 곧바로 위반(breach)이 발생하고, 대출자는 즉시 협상 테이블에 앉을 권리를 갖는다. 반면 발동형 코버넌트(Incurrence Covenant)는 특정 행위(신규 부채 조달, 배당 지급, 자산 매각 등)를 할 때만 테스트된다. 기업이 아무것도 하지 않으면 재무 상황이 악화돼도 코버넌트 위반이 발생하지 않는다.

코버넌트 라이트 론은 유지형 코버넌트를 없애고 발동형 코버넌트만 남긴 구조다. 사실상 하이일드 채권 수준의 보호 장치만 존재한다고 볼 수 있다. 전통적인 레버리지드 론에는 Leverage Ratio, Interest Coverage, Fixed Charge Coverage Ratio(FCCR) 등 3~4개의 유지형 코버넌트가 포함됐었는데, 코버넌트 라이트에서는 이것이 모두 또는 대부분 제거된다. 일부 구조에서는 리볼버(Revolver) 사용 잔액이 일정 비율(예: 35%)을 초과할 때만 단 하나의 레버리지 코버넌트가 발동되는 "스프링잉 코버넌트(Springing Covenant)" 방식을 채택하기도 한다.

핵심 차이를 실무 관점에서 요약하면: 유지형 코버넌트는 대출자에게 '조기 경보 시스템'을 제공한다. 기업이 실적 악화 초기 단계에 있을 때 대출자가 협상력을 갖고 구조조정을 유도할 수 있다. 코버넌트 라이트 구조에서는 이 조기 개입 기회가 사라지고, 대출자는 실질적 디폴트(지급 불능) 직전까지 기다려야 한다. 이는 회수율 저하와 직결된다.`,
        bodyEn: `Loan covenants fall into two broad categories. Maintenance covenants require a company to meet financial tests at regular intervals (typically quarterly), regardless of whether the company is taking any specific action. A breach of a "Debt/EBITDA must not exceed 6.5x as of each quarter-end" covenant triggers immediately when performance deteriorates, giving lenders the right to sit at the negotiating table before the situation becomes critical. Incurrence covenants, by contrast, are tested only when the company takes a specific action — raising new debt, paying a dividend, selling an asset. A company can see its financials quietly erode without ever technically breaching an incurrence covenant.

Covenant-lite loans eliminate maintenance covenants entirely, leaving only incurrence-based protections — functionally the same covenant package as a high-yield bond. Traditional leveraged loans typically included three to four maintenance covenants: a leverage ratio, an interest coverage ratio, and a Fixed Charge Coverage Ratio (FCCR). In a cov-lite structure, all or nearly all of these are stripped out. Some deals retain a single "springing" leverage covenant on the revolver that activates only when drawn balances exceed a specified threshold (e.g., 35% of commitments), providing minimal residual protection.

Summarizing the practical difference: maintenance covenants function as an early-warning system for lenders. When a borrower's performance begins to slip, lenders gain negotiating leverage early enough to guide a proactive restructuring. In a cov-lite structure, lenders lose this tool and must wait until actual payment default — or near-default — before they can compel action. This delay directly impairs recovery values, as asset values and liquidity often deteriorate significantly in the intervening period.`,
      },
      {
        heading: "Cov-Lite 확산 배경 (2013→2024)",
        headingEn: "The Rise of Cov-Lite: 2013 to 2024",
        body: `코버넌트 라이트 구조는 2000년대 초반 이미 존재했지만, 본격적인 주류화는 2012~2013년 저금리 환경에서 시작됐다. 당시 수익률을 쫓는 기관 투자자들(CLO, 뮤추얼펀드, 보험사)이 레버리지드 론 시장에 대거 유입되면서 차입자(PE 스폰서)들의 협상력이 급격히 강해졌다. LCD(Leveraged Commentary & Data)에 따르면 미국 레버리지드 론 신규 발행 중 코버넌트 라이트 비중은 2012년 약 55%에서 2018년 80% 이상으로 상승했다.

2020~2021년 팬데믹 이후 유동성 홍수 시기에는 코버넌트 라이트 비중이 90%에 육박했으며, "Cov-LLLL(Covenant Light Light Light Light)"이라는 자조적 표현까지 등장했다. 스폰서들은 코버넌트 제거에 더해 "Restricted Payment basket"(배당·자사주 매입 허용 범위)을 넓히고, "Grower" 조항(EBITDA 증가에 따라 자동 확대되는 허용 한도)을 삽입하는 등 전방위적으로 채권자 보호를 약화시켰다. 이 시기 발행된 딜의 상당수가 2023~2024년 금리 급등 사이클에서 유동성 위기에 봉착하게 됐다.

유럽 시장에서는 2015년 이후 코버넌트 라이트가 확산됐으나 미국 대비 1~2년 시차를 두고 진행됐다. 영국·독일 등 유럽 대형 LBO에서 코버넌트 라이트가 표준화된 시점은 약 2017~2018년이다. 규제 기관(Fed, OCC, ECB)들은 레버리지 가이드라인(6.0x 초과 딜에 대한 주의 의무) 등을 통해 간접 제동을 시도했지만, CLO 등 비은행 투자자들이 사실상 대부분의 레버리지드 론을 인수하면서 직접 규제 효과는 제한적이었다.`,
        bodyEn: `Covenant-lite structures existed in embryonic form in the early 2000s, but their mainstreaming began in earnest during the 2012–2013 low-rate environment. As yield-starved institutional investors — CLOs, mutual funds, insurance companies — flooded into the leveraged loan market, PE sponsors' negotiating leverage surged dramatically. According to LCD (Leveraged Commentary & Data), the cov-lite share of new U.S. leveraged loan issuance climbed from roughly 55% in 2012 to over 80% by 2018.

During the post-pandemic liquidity surge of 2020–2021, cov-lite penetration approached 90%, giving rise to the sardonic "Cov-LLLL" moniker. Beyond eliminating maintenance covenants, sponsors pushed for wider Restricted Payment baskets (expanding the permitted scope of dividends and buybacks) and inserted "grower" provisions — permitted-basket caps that automatically scale up as EBITDA grows — systematically eroding lender protections on multiple fronts. Many deals issued in this vintage encountered liquidity stress as rates surged in 2023–2024.

In European markets, the cov-lite wave arrived roughly one to two years after the U.S. Major UK and German LBOs broadly standardized cov-lite terms around 2017–2018. Regulators — the Fed, OCC, and ECB — attempted indirect intervention through leveraged lending guidance (flagging deals above 6.0x for heightened scrutiny), but as non-bank investors such as CLOs absorbed the vast majority of leveraged loan supply, the practical regulatory impact was limited.`,
      },
      {
        heading: "투자자 관점의 리스크",
        headingEn: "Risks from the Investor's Perspective",
        body: `코버넌트 라이트 구조에서 대출자들이 직면하는 가장 큰 리스크는 '정보 비대칭의 심화'다. 유지형 코버넌트가 있을 때는 분기별 재무 테스트 과정에서 차입자가 실적을 공유하고 위반 직전 단계부터 협상이 시작된다. 코버넌트 라이트에서는 이 정기적 커뮤니케이션 메커니즘이 사라지고, 대출자는 공개 공시나 관리 IR 자료에 의존해야 한다. 2019년 이후 여러 레버리지드 기업이 코버넌트 라이트 구조를 활용해 대출자 허락 없이 담보 자산을 계열사로 이전(collateral stripping)하거나 신규 선순위 채무를 추가하는 "Liability Management Exercise(LME)"를 감행하면서 시장의 공분을 사기도 했다. Envision Healthcare, Serta Simmons 사례가 대표적이다.

회수율 측면에서도 학술 연구와 실무 데이터 모두 코버넌트 라이트 대출의 열등한 성과를 지지한다. Moody's의 분석에 따르면 코버넌트 라이트 구조의 디폴트 시 회수율은 유지형 코버넌트 구조 대비 10~15%p 낮다는 결론이 반복적으로 확인된다. 조기 경보 부재로 인해 기업이 디폴트에 이르는 시점에는 이미 레버리지가 더욱 높아지고 사업 가치가 훼손된 상태이기 때문이다.

그럼에도 CLO 매니저들이 코버넌트 라이트 론을 선호하는 역설적 이유가 있다. CLO는 포트폴리오 가중평균 레이팅, OC(Over-Collateralization) 테스트 등 자체적인 구조적 보호 장치를 갖추고 있어, 개별 론의 코버넌트보다 포트폴리오 분산과 스프레드 수익을 우선한다. 또한 코버넌트 위반 발생 시 요구되는 복잡한 waiver 협상(대규모 신디케이트에서 필요 동의 비율 확보 등)을 피하고 싶어 한다. 이처럼 시장 구조적 요인이 코버넌트 라이트 확산을 지속시키고 있다.`,
        bodyEn: `The most significant risk covenant-lite structures create for lenders is a deepening of information asymmetry. With maintenance covenants in place, quarterly testing processes compel borrowers to share financial performance and trigger lender conversations at the first sign of deterioration. In cov-lite deals, this regular communication mechanism disappears, leaving lenders dependent on voluntary public disclosures and management IR materials. Beginning around 2019, a series of leveraged issuers exploited cov-lite flexibility to execute "Liability Management Exercises (LMEs)" — transferring collateral assets to unrestricted subsidiaries or layering in new priming debt without lender consent, triggering outrage across the market. The Envision Healthcare and Serta Simmons cases became the most-cited examples of aggressive lender-on-lender violence enabled by loose documentation.

On recovery rates, both academic research and practitioner data consistently support weaker outcomes for cov-lite defaults. Moody's analysis has repeatedly found that cov-lite loans recover 10–15 percentage points less than loans with maintenance covenants at default. The logic is straightforward: without early-warning triggers, companies that ultimately default arrive at that point with even higher leverage and more impaired enterprise values than they would have had lenders been able to intervene earlier.

Yet a paradox persists in that CLO managers — the dominant buyers of leveraged loans — often express a preference for cov-lite paper. CLOs operate under their own structural protections (weighted average rating tests, over-collateralization triggers) and prioritize portfolio diversification and spread income over individual loan covenant packages. They also actively dislike the operational complexity of waiver negotiations in large syndicated deals, where reaching required consent thresholds is time-consuming and expensive. These structural market dynamics perpetuate cov-lite dominance even as credit conditions tighten.`,
      },
    ],
    keyTerms: [
      {
        term: "유지형 코버넌트",
        termEn: "Maintenance Covenant",
        definition: "분기마다 레버리지, 이자보상배율 등 재무 지표가 특정 임계치를 충족하는지 테스트하는 의무 조항. 위반 시 대출자에게 기한이익상실 또는 재협상 권리를 부여한다.",
        definitionEn: "A loan covenant requiring the borrower to meet specified financial ratio tests (leverage, coverage, etc.) on a recurring periodic basis (typically quarterly). A breach gives lenders immediate rights to accelerate or force a waiver negotiation.",
      },
      {
        term: "발동형 코버넌트",
        termEn: "Incurrence Covenant",
        definition: "신규 부채 조달, 배당 지급 등 특정 행위를 할 때만 재무 테스트가 이루어지는 조항. 코버넌트 라이트 구조의 핵심 특징이며 하이일드 채권에서 표준적으로 사용된다.",
        definitionEn: "A covenant that is tested only when the borrower takes a specified corporate action, such as incurring new debt or making a restricted payment. The defining feature of cov-lite loans and the standard in high-yield bond documentation.",
      },
      {
        term: "고정비용보상배율",
        termEn: "Fixed Charge Coverage Ratio (FCCR)",
        definition: "EBITDA에서 Capex 및 세금을 차감한 값을 이자비용·스케줄드 원금 상환액으로 나눈 비율. 1.0x 이상이면 영업 현금흐름으로 고정 비용을 충당할 수 있음을 의미한다.",
        definitionEn: "A ratio of (EBITDA minus capex minus taxes) to (interest expense plus scheduled debt amortization). An FCCR above 1.0x indicates the company generates sufficient operating cash flow to cover all fixed charges, a common minimum threshold in leveraged loan maintenance covenants.",
      },
    ],
    relatedSlugs: ["levfin-covenants", "leverage-ratio", "levfin-ecosystem"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "levfin-covenants",
        title: "LevFin 코버넌트 구조",
        titleEn: "LevFin Covenant Structures",
      },
    ],
  },
  {
    slug: "pik",
    title: "PIK (현물 이자)",
    titleEn: "PIK (Payment-in-Kind)",
    entryType: "term" as const,
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt: "현금 대신 추가 채권·채무증서로 이자를 지급하는 방식. 고레버리지 구조에서 단기 현금 유출을 억제하는 수단이지만, 복리 효과로 인해 만기까지 부채 잔액이 급증하는 구조적 위험을 내포한다.",
    excerptEn: "An interest mechanism where the borrower pays interest by issuing additional debt instruments rather than cash. Useful in high-leverage structures to preserve near-term liquidity, but the compounding effect causes the outstanding principal to grow substantially over time.",
    readingMinutes: 5,
    tags: ["PIK", "현물 이자", "PIK Toggle", "하이일드", "LBO", "메자닌"],
    tagsEn: ["PIK", "Payment-in-Kind", "PIK Toggle", "High Yield", "LBO", "Mezzanine"],
    sections: [
      {
        heading: "PIK 메커니즘: 현금 이자 vs PIK 이자",
        headingEn: "The PIK Mechanism: Cash Interest vs. PIK Interest",
        body: `PIK(Payment-in-Kind) 이자란 차입자가 정해진 이자 지급일에 현금 대신 동일한 조건의 추가 채권(또는 론 잔액 증가)으로 이자를 대신하는 방식이다. 예를 들어 원금 1억 달러, PIK 금리 10%짜리 채권이라면 1년 후 현금 이자 1,000만 달러를 지급하는 대신 원금이 1억 1,000만 달러로 증가하고, 그 다음 해에는 1억 1,000만 달러에 대한 10%인 1,100만 달러가 다시 PIK 처리된다. 복리 효과로 인해 5년 후 원금은 1억 6,100만 달러에 육박한다. 만기까지 한 푼의 현금도 지급하지 않다가 만기에 전액을 일시 상환(bullet)하는 구조가 전형적이다.

PIK는 레버리지드 파이낸스에서 여러 계층에 걸쳐 활용된다. LBO 자본구조에서는 주로 후순위·메자닌 채권(subordinated/mezzanine notes) 또는 홀드코(HoldCo) 레벨에 삽입된다. 선순위 대출은 현금 이자를 요구하는 것이 일반적이다. 투자자 입장에서는 현금 이자 대비 PIK 이자에 100~200bp(1~2%p)의 프리미엄 금리를 요구하는 것이 시장 관행인데, 이는 만기까지 실제 현금 회수가 불확실한 데 대한 보상이다.

PIK의 핵심 매력은 차입자의 단기 현금 흐름 보존이다. 특히 인수 직후 통합(integration) 비용이 큰 LBO 초기, 또는 업황 악화로 EBITDA가 일시적으로 감소한 시기에 PIK를 통해 이자 현금 유출을 억제하면 디폴트를 회피하고 구조조정 시간을 확보할 수 있다. 실제로 2008~2009년 금융위기 기간 중 다수의 고레버리지 기업들이 채권자들과 "cash pay to PIK" 전환 협상을 벌이며 유동성 위기를 봉합했다.`,
        bodyEn: `PIK (Payment-in-Kind) interest is a mechanism by which a borrower satisfies its interest obligation not with cash but by issuing additional debt instruments — or simply accreting the outstanding principal balance — on each interest payment date. Consider a $100M principal PIK note at 10%: instead of paying $10M in cash after year one, the outstanding balance increases to $110M. In year two, interest accretes at 10% on $110M, adding $11M, bringing the balance to $121M. Compounded over five years, the principal approaches $161M — all without the borrower having paid a dollar in cash. The structure typically culminates in a bullet repayment at maturity.

PIK mechanisms appear across multiple layers of leveraged capital structures. In LBO transactions, they are most commonly embedded in subordinated or mezzanine notes, or at the HoldCo level — senior secured lenders almost invariably require cash-pay interest. Market convention demands a 100–200bps (1–2%) premium on PIK coupons versus equivalent cash-pay instruments, compensating investors for the uncertainty of actual cash collection prior to maturity.

The core appeal of PIK to borrowers is near-term cash flow preservation. In the early stages of an LBO when integration costs are elevated, or during periods of cyclical EBITDA compression, converting interest from cash to PIK eliminates a recurring cash drain and buys time to avoid default. During the 2008–2009 financial crisis, numerous highly leveraged companies negotiated "cash-to-PIK" amendments with creditors, effectively deferring interest obligations to survive the downturn and pursue more orderly restructurings.`,
      },
      {
        heading: "PIK Toggle 구조",
        headingEn: "The PIK Toggle Structure",
        body: `PIK Toggle은 차입자에게 매 이자 지급기마다 현금 이자(Cash Pay)와 PIK 이자 중 하나를 선택할 수 있는 옵션을 부여하는 구조다. 일반적으로 현금 이자 금리보다 PIK 금리가 더 높게(통상 25~75bp 추가) 설정되어 PIK 선택에 대한 비용 부담을 준다. 차입자가 현금 흐름 상황에 따라 유연하게 이자 방식을 전환할 수 있다는 점에서 단순 PIK보다 차입자 친화적이다.

PIK Toggle은 2006~2007년 LBO 붐 당시 특히 유행했다. 당시 KKR, Blackstone, Apollo 등 주요 스폰서들이 진행한 대형 LBO에서 HoldCo PIK Toggle 노트가 빈번히 사용됐다. 예를 들어 2006년 Freescale Semiconductor의 178억 달러 LBO에는 HoldCo 레벨의 PIK Toggle 채권이 포함됐으며, 이후 반도체 업황 악화 시 PIK 옵션을 활용해 현금 유출을 줄인 바 있다. 2008년 금융위기 이후 투자자들이 PIK Toggle 리스크를 재평가하면서 이 구조의 인기는 한풀 꺾였고, 발행 규모가 대폭 줄었다.

현재 시장에서 PIK Toggle은 주로 세 가지 맥락에서 등장한다. 첫째, 펀드 레벨의 GP NAV 파이낸싱(운용사가 자신의 펀드 포트폴리오를 담보로 차입하는 구조). 둘째, 소규모·고레버리지 Direct Lending 거래에서 Unitranche 위에 얹히는 후순위 슬라이스. 셋째, Preferred Equity와 채권의 중간 성격인 하이브리드 증권. 각각의 맥락에서 PIK Toggle은 현금 흐름 변동성 관리 수단으로 기능한다.`,
        bodyEn: `A PIK Toggle grants the borrower an option, exercisable on each interest payment date, to choose between paying interest in cash or in PIK form. Conventionally, the PIK rate carries a 25–75bps premium over the cash-pay rate, creating a modest pricing disincentive for exercising the toggle. The structure is more borrower-friendly than a pure PIK instrument because it preserves operational flexibility: a company with healthy cash flows can pay in cash and avoid balance accretion, while a company under stress can elect PIK to conserve liquidity.

PIK Toggle notes were particularly fashionable during the 2006–2007 LBO boom. KKR, Blackstone, Apollo, and other major sponsors routinely used HoldCo-level PIK Toggle notes in flagship transactions. The 2006 Freescale Semiconductor LBO — a $17.8B transaction — featured HoldCo PIK Toggle notes that the company later utilized as semiconductor industry conditions deteriorated, successfully deferring cash outflows. After 2008, investors repriced PIK Toggle risk sharply, and issuance volumes declined dramatically.

Today, PIK Toggle structures appear primarily in three contexts. First, GP NAV financing at the fund level, where a manager borrows against its portfolio of fund investments and PIK toggle provides payment flexibility tied to portfolio distributions. Second, as a subordinated slice layered above a unitranche in smaller, higher-leverage direct lending transactions. Third, in hybrid securities positioned between preferred equity and debt. In each context, PIK Toggle functions as a cash flow volatility management tool — appropriate so long as underlying asset values grow faster than the compounding interest obligation.`,
      },
      {
        heading: "위험성: 부채 복리 증가",
        headingEn: "The Core Risk: Compounding Debt Growth",
        body: `PIK의 가장 근본적인 위험은 시간이 지날수록 부채 원금이 복리로 늘어난다는 사실이다. PIK 금리 12%, 원금 5,000만 달러 구조를 5년 보유한다고 가정하면, 만기 상환해야 할 원금은 5,000만 달러 × (1.12)^5 = 약 8,811만 달러로 약 76% 증가한다. 이 기간 동안 현금 흐름이 기대만큼 성장하지 못하면, 만기 시 재금융(refinancing)이 불가능해지고 디폴트로 직행하는 '벼랑 끝 구조'가 된다.

PE 스폰서 입장에서 PIK는 엑싯(exit) 전략과의 정합성이 중요하다. 일반적으로 5년 이내 IPO 또는 M&A를 통한 엑싯을 전제로, PIK로 누적된 부채가 엑싯 시 기업 가치(equity value)에서 차감되는 구조다. 엑싯 타이밍이 늦어지거나 기업 가치가 예상보다 낮아지면 PIK 부채 복리 증가분이 equity 가치를 잠식한다. 이 때문에 경험 많은 LPs들은 포트폴리오 내 PIK 비중이 높은 스폰서에 대해 NAV 산정의 투명성을 요구하는 경향이 강해졌다.

신용 애널리스트 입장에서 PIK 채권을 평가할 때 핵심 질문은 "엑싯 또는 리파이낸싱 시 기업 가치가 PIK 채무를 포함한 총 부채를 상회할 수 있는가"다. 이를 위해 총 레버리지(PIK 누적 포함) 대비 예상 EV(Enterprise Value) 배수, 즉 커버리지 배수(coverage multiple)를 계산하는 것이 필수다. 만기 시 EV/EBITDA 가정과 그 시점의 예상 PIK 누적 잔액을 함께 모델링하여 equity cushion이 충분한지 검증하는 것이 LevFin 실무의 핵심 작업 중 하나다.`,
        bodyEn: `The fundamental risk of PIK is straightforward: the outstanding principal compounds over time, growing exponentially relative to the original face amount. A $50M PIK note at 12% held for five years accretes to approximately $88M at maturity — a 76% increase — without a single dollar of cash having changed hands. If the company's cash flows do not grow commensurately, refinancing at maturity becomes impossible, creating a "cliff" structure that ends in default with little warning.

From the PE sponsor's perspective, PIK instruments must align with the exit strategy. The underlying assumption is typically a 5-year-or-less hold with exit via IPO or strategic M&A, at which point the PIK-accreted debt is repaid from exit proceeds. If the exit is delayed or the exit valuation comes in below expectations, the compounding PIK balance erodes equity value — the sponsor gets less, and in extreme cases, PIK holders can find themselves in-the-money at the expense of equity. This dynamic has driven institutional LPs to demand greater NAV transparency from sponsors running portfolios with elevated PIK exposure.

For credit analysts underwriting a PIK instrument, the central question is: "Will enterprise value at exit or refinancing exceed total debt including the accreted PIK balance?" This requires modeling total leverage (including PIK accretion) against projected exit EV, effectively calculating a coverage multiple at the assumed exit date. Stress-testing the exit EBITDA multiple assumption alongside the projected PIK balance is standard practice in LevFin underwriting — an instrument that looks well-covered at 8x EV/EBITDA can be underwater at 6x, and the compounding timeline can turn a manageable starting leverage into an unworkable balance sheet in under three years.`,
      },
    ],
    keyTerms: [
      {
        term: "PIK Toggle",
        termEn: "PIK Toggle",
        definition: "이자 지급기마다 차입자가 현금 이자 또는 PIK 이자 중 선택할 수 있는 하이브리드 구조. 현금 이자 금리보다 PIK 금리가 25~75bp 높게 설정되어 PIK 선택 시 추가 비용을 부담한다.",
        definitionEn: "A hybrid instrument granting the borrower a period-by-period option to pay interest in cash or PIK form. The PIK rate is conventionally set 25–75bps above the cash-pay rate to create a cost disincentive for exercising the toggle.",
      },
      {
        term: "현금 이자",
        termEn: "Cash Pay",
        definition: "이자 지급일에 실제 현금으로 이자를 지불하는 일반적인 방식. LevFin에서 선순위 대출은 거의 예외 없이 현금 이자를 요구하며, PIK 대비 투자자 선호도가 높다.",
        definitionEn: "The standard mode of interest payment whereby the borrower transfers cash to the lender on each interest payment date. Senior secured lenders almost universally require cash-pay interest; cash-pay instruments command tighter spreads than equivalent PIK or PIK Toggle paper.",
      },
      {
        term: "홀드코 PIK",
        termEn: "HoldCo PIK",
        definition: "LBO 구조에서 운영 자회사(OpCo)의 선순위 채무보다 후순위에 위치하는 지주회사(HoldCo) 레벨의 PIK 채권. 자회사 배당이 유일한 상환 재원이므로 가장 높은 리스크·수익률을 갖는다.",
        definitionEn: "A PIK instrument issued at the holding company (HoldCo) level in an LBO structure, structurally subordinated to all OpCo debt. Dividends or distributions from the operating subsidiary are the sole source of repayment, making HoldCo PIK notes the highest-risk, highest-yield layer in an LBO capital structure.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "levfin-hy-vs-loans", "leverage-ratio"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "levfin-hy-vs-loans",
        title: "하이일드 채권 vs. 레버리지드 론",
        titleEn: "High Yield Bonds vs. Leveraged Loans",
      },
    ],
  },
  {
    slug: "unitranche",
    title: "유니트랜치",
    titleEn: "Unitranche",
    entryType: "term" as const,
    category: "levfin",
    categoryLabel: "LevFin",
    categoryLabelEn: "LevFin",
    excerpt: "선순위·후순위 대출을 하나의 단일 대출로 통합한 구조로, 주로 사모 직접대출(Direct Lending) 펀드가 제공한다. 전통적 신디케이트 론 대비 빠른 클로징, 단순한 구조, 유연한 조건을 제공하며 중견 기업 M&A 파이낸싱에서 주류 수단이 됐다.",
    excerptEn: "A single-tranche facility combining senior and subordinated debt into one unified loan, typically provided by private direct lending funds. Offering speed, structural simplicity, and flexibility compared to syndicated loans, unitranche has become the dominant financing tool for mid-market M&A.",
    readingMinutes: 6,
    tags: ["유니트랜치", "Unitranche", "직접대출", "Direct Lending", "사모 부채", "중견 기업 M&A"],
    tagsEn: ["Unitranche", "Direct Lending", "Private Credit", "Mid-Market M&A", "AAL", "First-Out Last-Out"],
    sections: [
      {
        heading: "유니트랜치 구조: First-out / Last-out 분리",
        headingEn: "Unitranche Structure: First-Out and Last-Out Tranches",
        body: `표면상 유니트랜치는 하나의 대출처럼 보이지만, 두 개 이상의 직접대출 펀드가 참여하는 경우 내부적으로 First-out(FO)과 Last-out(LO) 트랜치로 분리된다. First-out은 전통적 선순위 대출과 유사한 포지션으로, 디폴트 시 원금을 먼저 회수한다. Last-out은 후순위 포지션으로, 더 높은 쿠폰(통상 FO 대비 200~400bp 추가)을 받지만 손실도 후순위로 부담한다. 차입자는 이 내부 구분을 모르며 단일 금리(blended rate)로 단일 대출로 인식한다.

FO/LO 분리는 직접대출 펀드들 사이의 "Agreement Among Lenders(AAL)"에 의해 관리된다. AAL은 디폴트 발생 시 원금 배분 순서, 구조조정 의결권, 비용 부담 방식 등을 규정한 내부 계약이다. AAL의 핵심 조항 중 하나는 LO 투자자의 "buy-out" 권리로, LO 측이 FO의 지분을 일정 조건에 정해진 가격으로 매입할 수 있는 옵션이다. 이를 통해 LO 투자자가 구조조정 과정에서 더 적극적인 역할을 할 수 있다. AAL의 존재는 차입자에게 공개되지 않으며, 외부에서 보면 유니트랜치가 단일 대출처럼 작동한다.

금리 구조를 살펴보면, 전형적인 유니트랜치의 blended 금리는 SOFR + 500~700bp 수준에서 형성된다. 2023년 금리 환경에서는 올인(all-in) 금리가 11~13%에 달하는 경우도 있었다. FO 투자자는 SOFR + 400~450bp, LO 투자자는 SOFR + 750~900bp 수준을 받는 구조가 일반적이다. 이 blended 금리가 전통적 선순위 TLB(Term Loan B) + 하이일드 채권 조합보다 비싸지만, 차입자들은 클로징 속도와 구조 단순성을 위해 기꺼이 프리미엄을 지불한다.`,
        bodyEn: `Although a unitranche appears as a single facility to the borrower, when multiple direct lending funds participate, the loan is internally divided into First-Out (FO) and Last-Out (LO) tranches. The First-Out tranche functions analogously to traditional senior secured debt: in a default, it receives repayment priority. The Last-Out carries a subordinated position, receiving a higher coupon (typically 200–400bps above FO) but absorbing losses first after FO is made whole. The borrower is generally unaware of this bifurcation — it services a single blended interest rate on a single notional loan.

The FO/LO split is governed by an Agreement Among Lenders (AAL) — a private intercreditor-style document specifying principal distribution priorities, restructuring voting rights, and cost-sharing mechanics in a default scenario. One of the AAL's most important provisions is the LO lender's "buy-out" right: the ability to acquire the FO lender's position at a defined price under specified conditions, enabling Last-Out investors to assume a more active role in steering a restructuring process. The existence of the AAL is not disclosed to the borrower, preserving the unitranche's single-facility appearance from the outside.

On economics, a typical unitranche blended rate is set at SOFR plus 500–700bps. In the elevated rate environment of 2023, all-in rates frequently reached 11–13%. A common internal split sees FO investors receiving SOFR + 400–450bps and LO investors receiving SOFR + 750–900bps. While this blended rate is more expensive than a traditional syndicated TLB-plus-HY-bond combination, borrowers willingly pay the premium for the speed and structural simplicity unitranche provides.`,
      },
      {
        heading: "전통 신디론 대비 장단점",
        headingEn: "Unitranche vs. Syndicated Loans: Pros and Cons",
        body: `유니트랜치의 가장 큰 장점은 클로징 속도다. 전통 신디케이트 론은 어레인저 은행이 수십~수백 곳의 기관 투자자에게 론을 배분(syndicate)하는 과정에서 4~8주가 소요되며, 시장 상황에 따라 발행 조건이 조정(flex)되거나 발행 자체가 무산될 위험이 있다. 반면 유니트랜치는 1~3개의 직접대출 펀드가 전액을 인수(hold)하므로 시장 리스크가 없고, 파악된 인수자와의 협상만으로 2~3주 내에 클로징이 가능하다. 경쟁 입찰(auction) 프로세스에서 시간이 촉박한 PE 스폰서들에게 결정적인 이점이다.

단점은 비용이다. 앞서 언급했듯 유니트랜치의 blended 금리는 신디케이트 자본시장 대비 통상 150~250bp 비싸다. 대형 딜($5억 달러 이상)에서는 이 비용 차이가 연간 수백만 달러에 달해 전통 신디케이션을 선택할 유인이 커진다. 따라서 유니트랜치는 주로 $5,000만~$5억 달러 규모의 중견 기업(middle market) M&A에서 경제성이 성립한다. 거래 규모가 클수록 조건 개선(terms flex)을 감수하더라도 신디케이트 시장의 낮은 금리가 매력적이다.

또 다른 장단점은 관계와 유연성이다. 직접대출 펀드는 전통 은행 대비 훨씬 유연한 조건을 제공한다. Maintenance covenant를 완화해주거나, PIK option을 추가하거나, Equity co-invest 참여를 통해 금리를 낮추는 등 맞춤형 구조화가 가능하다. 반면 소수의 대출자가 전액을 보유하므로, 차입자가 추후 조건 변경(amendment)이나 waiver를 요청할 때 협상 상대가 명확하고 강력하다. 수백 개 기관이 분산된 신디케이트에서는 통상 diluted된 협상력을 갖는 것과 대조적이다.`,
        bodyEn: `The most significant advantage of unitranche is closing speed. Traditional syndicated loans require the arranger bank to distribute the loan across dozens to hundreds of institutional investors, a process that takes four to eight weeks and carries execution risk — market conditions can force flex of pricing and terms or, in volatile environments, kill a deal entirely. Unitranche eliminates this risk: with one to three direct lending funds holding the entire facility, there is no syndication market risk, and closings are routinely achieved in two to three weeks through negotiation with known counterparties. In competitive auction processes with compressed timelines, this execution certainty is a decisive advantage for PE sponsors.

The primary disadvantage is cost. As noted, unitranche blended rates typically run 150–250bps wider than comparable syndicated capital markets executions. On a transaction of $500M or more, that spread premium translates into millions of dollars of annual interest expense, tilting the economic calculus firmly toward traditional syndication despite the execution risk. Unitranche economics work best in the $50M–$500M transaction range — the classic middle market — where the cost premium is manageable relative to the benefits of speed and certainty.

A subtler trade-off involves the lender relationship. Direct lending funds offer considerable structural flexibility — softened maintenance covenants, PIK toggle options, or equity co-invest participation in exchange for a reduced coupon — enabling bespoke deal structuring that broadly-distributed syndicated facilities cannot match. However, having a small number of concentrated lenders means that any future amendment or waiver negotiation faces a well-organized, commercially sophisticated counterparty with significant leverage over the borrower. In a fragmented syndicate of hundreds of institutions, borrowers often enjoy softer negotiating dynamics by comparison.`,
      },
      {
        heading: "Direct Lending 시장에서의 위치",
        headingEn: "Unitranche's Role in the Direct Lending Market",
        body: `유니트랜치는 사모 신용(Private Credit) 시장의 성장과 함께 부상했다. Ares Capital, Blue Owl, Golub Capital, HPS, Blackstone Credit 등 대형 BDC(Business Development Company) 및 사모 신용 펀드들이 유니트랜치의 주요 공급자다. Preqin에 따르면 글로벌 직접대출 AUM은 2015년 약 3,000억 달러에서 2024년 1조 달러를 넘어섰으며, 유니트랜치는 이 시장의 가장 핵심 상품으로 자리잡았다.

2022~2023년 금리 급등과 은행 신디케이트 시장 경색 국면은 직접대출·유니트랜치 시장의 폭발적 성장을 이끌었다. 전통 신디케이션 시장이 사실상 동결됐던 2022년 하반기~2023년 상반기에, 상당수의 대형 LBO($10억 달러 이상)가 사모 직접대출로 파이낸싱을 구조화했다. KKR-Cotiviti($5.5B), Blackstone-Emerson Electric Automation 등 메가딜에서도 직접대출 클럽 딜 형태가 등장했다. 이는 과거에는 상상하기 어려웠던 규모다.

장기적으로 유니트랜치 시장은 전통 은행 대출 시장과 경쟁하면서도 공존하는 방향으로 진화하고 있다. 은행들은 대형 거래의 선순위 시니어 슬라이스를 제공하고, 직접대출 펀드들은 더 복잡하거나 소규모인 거래의 전 구간을 맡는 분업이 형성되는 중이다. 규제 환경(바젤 III 최종화에 따른 은행 자본 요건 강화)이 은행의 레버리지드 파이낸스 역량을 구조적으로 제한하는 방향으로 작용할수록, 직접대출과 유니트랜치의 시장 점유율은 더욱 높아질 전망이다.`,
        bodyEn: `The unitranche has risen alongside the broader private credit market expansion. Major BDCs (Business Development Companies) and private credit funds — Ares Capital, Blue Owl, Golub Capital, HPS, Blackstone Credit — are the primary unitranche providers. According to Preqin, global direct lending AUM grew from approximately $300B in 2015 to over $1 trillion by 2024, with unitranche as the market's anchor product.

The rate surge and syndicated market dislocation of 2022–2023 turbocharged direct lending and unitranche volumes. During the effective closure of the syndicated loan market in H2 2022–H1 2023, numerous large LBOs ($1B+) turned to private direct lending for their financing needs. Club-deal unitranche structures appeared in mega-transactions previously reserved for public markets — KKR's $5.5B financing for Cotiviti and Blackstone's Emerson Electric Automation deal both featured significant direct lending components, a scale that would have been inconceivable just five years earlier.

Over the longer term, the unitranche market is evolving toward coexistence and segmentation alongside traditional bank lending. Banks are increasingly providing the senior-most slices of large transactions, while direct lenders handle full-stack financing for smaller or more complex situations — a natural division of labor. As Basel III endgame capital requirements structurally constrain banks' leveraged finance capacity, the structural tailwind for direct lending and unitranche is strong: the regulatory pressure on banks effectively subsidizes the private credit industry by limiting its most formidable competitors.`,
      },
    ],
    keyTerms: [
      {
        term: "First-out / Last-out",
        termEn: "First-Out / Last-Out (FO/LO)",
        definition: "유니트랜치 내부에서 대출자 간 손실 배분 순서를 구분하는 트랜치 명칭. First-out이 디폴트 시 먼저 원금을 회수하고, Last-out은 후순위로 잔여분을 받는다. 차입자에게는 단일 대출로 인식된다.",
        definitionEn: "Internal tranche designations within a unitranche structure, governing the order of principal recovery among lenders in a default. First-Out lenders receive priority repayment; Last-Out lenders absorb first-loss exposure. From the borrower's perspective, the facility appears as a single unified loan.",
      },
      {
        term: "대출자간 협약",
        termEn: "Agreement Among Lenders (AAL)",
        definition: "유니트랜치에 참여하는 FO/LO 투자자 간 배분 우선순위, 의결권, buy-out 권리 등을 규정한 내부 계약. 차입자에게 공개되지 않으며 전통적인 인터크레디터 계약(Intercreditor Agreement)에 상응한다.",
        definitionEn: "A private intercreditor-style contract among the FO and LO investors in a unitranche facility, specifying repayment priority, voting rights, buy-out options, and cost-sharing mechanics. Not disclosed to the borrower; functionally analogous to a traditional intercreditor agreement.",
      },
      {
        term: "직접대출",
        termEn: "Direct Lending",
        definition: "은행 신디케이션 시장을 거치지 않고 사모 신용 펀드가 차입 기업에 직접 대출을 제공하는 방식. 비유동성 프리미엄을 수취하는 대신 빠른 클로징과 맞춤 구조를 제공하며, 유니트랜치가 대표 상품이다.",
        definitionEn: "A private credit strategy in which a fund lends directly to a corporate borrower, bypassing the public syndicated loan market. In exchange for providing an illiquidity premium, direct lenders offer closing speed and bespoke deal structuring; unitranche is their flagship product.",
      },
    ],
    relatedSlugs: ["levfin-ecosystem", "syndicated-loan-overview", "levfin-hy-vs-loans"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "levfin-ecosystem",
        title: "LevFin 생태계 개요",
        titleEn: "LevFin Ecosystem Overview",
      },
    ],
  },

  // ── 신디케이티드론 용어 ──────────────────────────────────────────────────────────────────
{
    slug: "mla",
    title: "주선은행 (MLA)",
    titleEn: "Mandated Lead Arranger (MLA)",
    entryType: "term" as const,
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "차주로부터 대출 주선 업무를 공식 위임받아 딜 구조화, 신디케이션 마케팅, 가격 결정을 주도하는 핵심 금융기관. Bookrunner 역할을 겸직하는 경우가 많으며, Arrangement Fee와 Underwriting Fee를 통해 수익을 창출한다.",
    excerptEn:
      "The financial institution formally mandated by the borrower to structure, price, and syndicate a loan facility. Often acting concurrently as Bookrunner, the MLA earns arrangement fees and underwriting fees as compensation for its gatekeeping role in the syndicated loan market.",
    readingMinutes: 5,
    tags: ["주선은행", "MLA", "북런너", "약정수수료", "신디케이션", "대출구조화", "인수수수료"],
    tagsEn: ["MLA", "Mandated Lead Arranger", "Bookrunner", "Arrangement Fee", "Underwriting Fee", "Syndication", "Loan Structuring"],
    sections: [
      {
        heading: "MLA의 역할과 책임",
        headingEn: "Role and Responsibilities of the MLA",
        body: `MLA(Mandated Lead Arranger)는 차주(Borrower)로부터 신디케이티드론 주선 업무를 공식 위임받은 금융기관으로, 딜의 전 생애주기에서 가장 중추적인 역할을 담당한다. 위임장(Mandate Letter)이 발급되는 순간부터 MLA는 차주를 대신해 대출 구조(금액, 만기, 가격, 재무 서약 조건 등)를 설계하고, 시장 상황에 맞는 조달 전략을 수립한다. 실무적으로는 정보각서(Information Memorandum, IM)를 작성해 잠재적 참여은행에 배포하고, 투자자 로드쇼(Lender Presentation)를 통해 딜의 신용 스토리를 전달한다.

딜 구조화 단계에서 MLA는 차주의 재무 모델을 분석해 적정 레버리지 배율, 이자보상배율(DSCR), 담보 커버리지 비율 등을 검토하고, 이를 바탕으로 신디케이트 시장에서 소화 가능한 가격대(스프레드)를 산정한다. 예컨대 BBB 등급의 한국 대기업이 3년 만기 5억 달러 리볼버를 조달하는 경우, MLA는 SOFR+85~100bps 수준을 제안하고 시장 반응을 보며 조정하는 Price Flex 권한을 행사한다. 이 과정에서 MLA는 단순한 중개자가 아닌 시장 조성자(Market Maker)로서 딜의 성공 가능성에 대한 신뢰를 시장에 부여하는 역할을 한다.

책임 측면에서 MLA는 Underwriting 조건(하드 또는 소프트)을 제시할 경우, 신디케이션이 실패하더라도 약정된 금액을 직접 인수해야 하는 리스크를 부담한다. 이것이 MLA 수수료가 단순 참여은행보다 높게 책정되는 근본적인 이유다. 실제 딜에서 MLA는 복수로 지정되는 경우가 많으며(Joint MLA), 이 경우 각 MLA가 인수 금액과 역할을 분담한다. 2023~2024년 글로벌 신디론 시장에서 APAC 지역 MLA의 평균 보유(Hold) 금액은 약 5,000만~1억 5,000만 달러 수준이었다.`,
        bodyEn: `The Mandated Lead Arranger is the financial institution formally appointed by the borrower through a Mandate Letter to structure, price, and distribute a syndicated loan facility. From the moment the mandate is awarded, the MLA assumes primary responsibility for the deal's architecture — determining facility size, tenor, pricing grid, financial covenant package, and overall syndication strategy. In practice, the MLA prepares the Information Memorandum (IM) and hosts lender presentations to convey the borrower's credit story to prospective syndicate members.

During the structuring phase, the MLA conducts rigorous credit analysis — reviewing leverage ratios, debt service coverage ratios (DSCR), and collateral coverage — to arrive at a market-clearing price. For example, a Korean investment-grade corporate rated BBB seeking a five-year $500 million revolving credit facility might see the MLA propose an initial pricing of SOFR+85–100bps, with a Price Flex mechanism allowing upward adjustment of 15–20bps if market appetite proves weaker than expected. This pricing authority positions the MLA not merely as a broker but as a market maker whose reputation and balance sheet credibility underwrite the deal's distribution success.

On the liability side, an MLA that commits to a hard underwrite assumes the obligation to fund its allocated portion even if syndication falls short, making the underwriting risk the primary driver of the MLA's premium fee. In practice, large transactions routinely carry two or more Joint MLAs to distribute this underwriting exposure. In the 2023–2024 APAC syndicated loan market, a typical MLA's final hold position ranged from approximately $50 million to $150 million per deal, depending on institutional appetite and internal credit limits.`,
      },
      {
        heading: "MLA vs 참여은행(Participant) 구분",
        headingEn: "MLA vs Participant: Key Distinctions",
        body: `신디케이트 대출은 역할에 따라 크게 주선 그룹(Arranger Tier)과 참여 그룹(Participant Tier)으로 구분된다. MLA는 딜의 초기 단계부터 관여해 구조화와 인수 리스크를 부담하는 반면, 참여은행은 신디케이션이 완료된 후 최종 서류에 서명하고 약정 금액(Commitment)을 제공하는 역할에 그친다. 참여은행은 IM과 로드쇼를 통해 딜 정보를 제공받고 참여 여부를 결정하므로, 정보 접근 시점과 의사결정 책임 면에서 MLA와 본질적으로 다르다.

타이틀(Title) 계층 구조도 중요한 구분점이다. 글로벌 신디론 시장에서는 통상 MLA → Lead Arranger → Arranger → Lead Manager → Manager → Participant 순으로 타이틀이 부여되며, 약정 금액 규모에 따라 타이틀이 결정된다. 예를 들어 총 10억 달러 규모의 딜에서 1억 달러 이상을 약정하면 MLA, 5,000만~9,999만 달러이면 Lead Arranger, 2,500만~4,999만 달러이면 Arranger 타이틀을 부여하는 방식이다. 이 타이틀 구조는 차주의 향후 자본 시장 활동에서 레퍼런스로 활용되므로, 은행들은 타이틀 확보를 위해 경쟁하는 경향이 있다.

수익 구조에서도 MLA와 참여은행은 뚜렷이 구별된다. MLA는 Arrangement Fee(보통 총 대출 금액의 0.30~1.00%)와 Underwriting Fee(리스크에 따라 차등)를 수취하며, 일부를 하위 참여은행에게 재배분(Sub-participation)하는 방식으로 수수료를 관리한다. 반면 참여은행은 대출 기간 동안 이자 마진(Margin)과 Participation Fee(통상 Arrangement Fee의 20~40%)만 수취한다. 이처럼 수수료 수익의 절대적 크기와 구성 면에서 MLA가 유리한 위치에 있으나, 그만큼 인수 리스크와 업무 부담도 크다.`,
        bodyEn: `A syndicated loan's participant universe splits into two tiers: the arranger group, led by the MLA, and the participant group, comprising banks that join after syndication closes. The MLA engages from day one — absorbing structuring risk, information asymmetry, and underwriting exposure — whereas participants receive the Information Memorandum, review terms already negotiated, and commit capital on a take-it-or-leave-it basis. This fundamental difference in timing and risk-bearing defines the MLA's privileged position in the deal hierarchy.

Title architecture further reinforces this distinction. In the global syndicated loan market, a tiered credit system runs roughly: MLA → Lead Arranger → Arranger → Lead Manager → Manager → Participant, with minimum commitment thresholds determining each tier. On a $1 billion deal, a bank committing $100 million or above might receive the MLA title, $50–99 million earns Lead Arranger, and $25–49 million earns Arranger. These titles carry meaningful reputational currency — they appear in league tables and tombstones, functioning as marketing credentials that banks actively compete for when evaluating deal participation.

The revenue split mirrors this hierarchy. MLAs collect the Arrangement Fee, typically 30–100bps on total facility size, plus an Underwriting Fee commensurate with hold risk. Out of the gross arrangement fee, the MLA allocates a sub-participation fee to lower-tier arrangers, retaining the residual as the "praecipium" — its compensation for origination and structuring work. Participants, by contrast, receive only the coupon margin plus a participation fee, often 20–40% of the headline arrangement fee. While participants enjoy lower risk, the economics strongly favour MLAs, which is why top-tier mandates are fiercely competed for among money-centre banks.`,
      },
      {
        heading: "수수료 구조와 인센티브",
        headingEn: "Fee Structure and Incentive Alignment",
        body: `MLA의 수수료는 크게 Arrangement Fee(주선수수료)와 Underwriting Fee(인수수수료)로 구성되며, 두 수수료는 대출 실행 시점에 일시불로 지급되는 Front-end Fee 성격을 가진다. Arrangement Fee는 딜 규모와 복잡성에 따라 총 약정 금액(Facility Amount)의 0.30%에서 1.00% 수준으로 결정되는데, 레버리지드 바이아웃(LBO) 딜이나 프로젝트 파이낸스처럼 구조가 복잡할수록, 그리고 MLA의 인수 리스크가 클수록 높게 책정된다. 예를 들어 BBB 등급 한국 대기업 딜에서는 약 0.40~0.60%, 싱글B 등급 LBO 딜에서는 1.00~2.00% 이상을 요구하는 경우도 있다.

MLA가 복수인 경우(Joint MLA) 각 MLA는 협상을 통해 수수료를 분배하며, 딜을 실질적으로 주도한 은행은 Praecipium(우선 수수료)이라는 별도 명목으로 추가 수수료를 수취하기도 한다. 이 경우 딜 주도권에 대한 협상이 Mandate 단계에서부터 시작되며, 특히 대형 딜에서는 Joint MLA 간 역할 배분(누가 Agent를 맡을지, 문서 작업을 주도할지 등)이 수수료 배분과 연동되어 결정된다. 실무에서 Joint MLA 수가 3개를 초과하면 수수료 분산으로 각 은행의 수익성이 낮아지는 구조적 딜레마가 발생한다.

인센티브 정렬(Incentive Alignment) 측면에서 MLA 구조는 단순히 수수료 수취를 넘어 장기적인 은행-차주 관계(Relationship Banking)를 구축하는 매개체 역할을 한다. 특정 차주를 위해 MLA를 반복적으로 수행한 은행은 해당 차주의 자본 시장 활동(채권 발행, M&A 금융, 헤징 등)에서 우선 협상권을 갖는 경향이 있다. 이러한 관계 자본(Relationship Capital)은 재무적 수수료 이상의 가치를 가지며, 대형 은행이 수익성이 낮은 딜에서도 MLA를 자처하는 전략적 이유가 된다. 한국 시장에서도 KDB산업은행, 하나은행, 우리은행 등이 국내 대기업 해외 신디론에서 MLA를 통해 관계를 유지하고 있다.`,
        bodyEn: `The MLA's fee economics hinge on two front-end components: the Arrangement Fee and the Underwriting Fee, both typically paid as a lump sum at financial close and expressed as basis points on the total facility amount. Arrangement fees range from approximately 30bps for plain-vanilla investment-grade deals to 100bps or more for structured transactions; leveraged buyout financing can command upfront economics of 150–200bps all-in when underwriting fees are included. The steeper the credit risk and the more bespoke the structure, the higher the fee the market will bear.

When a deal carries multiple Joint MLAs, the total fee pool is negotiated and divided among them, sometimes with a designated "praecipium" — a top-up slice retained by the bank that originated the deal or drove the documentation process. This creates a clear pecking order even within the MLA tier and drives intense competition at the mandate stage, where banks compete not just on price but on credentialing (who gets to be lead-left, who serves as Agent). Once the MLA count exceeds three or four, per-bank economics deteriorate materially, turning large club mandates into relationship plays rather than pure fee opportunities.

Beyond immediate fee income, the MLA role serves as a cornerstone of relationship banking. A bank that repeatedly leads a borrower's syndicated facilities builds privileged access to ancillary business — bond issuances, acquisition financing, FX hedging, and cash management. In the Korean market, institutions such as KDB, Hana Bank, and Woori Bank actively pursue MLA mandates on Korean corporates' offshore borrowings, viewing the fee as secondary to the wallet-share and intelligence advantages that come with being inside the deal from day one. This dynamic explains why rational banks sometimes accept thin economics on high-profile mandates — the option value on future business more than offsets the marginal fee discount.`,
      },
    ],
    keyTerms: [
      {
        term: "약정수수료 (Arrangement Fee)",
        termEn: "Arrangement Fee",
        definition:
          "MLA가 딜 구조화 및 신디케이션 수행의 대가로 수취하는 일시불 수수료. 총 약정 금액 대비 비율(bps)로 표시되며 대출 실행 시점에 지급된다.",
        definitionEn:
          "A one-time upfront fee paid to the MLA as compensation for structuring and syndicating the facility. Expressed as basis points on total commitment amount and settled at financial close.",
      },
      {
        term: "북런너 (Bookrunner)",
        termEn: "Bookrunner",
        definition:
          "신디케이션 과정에서 참여은행들의 약정 신청(Book)을 취합하고 최종 배분을 결정하는 역할. 통상 MLA가 겸직하며, 가격 결정 권한(Price Flex)을 보유한다.",
        definitionEn:
          "The bank responsible for building and managing the order book of lender commitments during syndication, typically held by the MLA. The Bookrunner retains Price Flex authority to adjust pricing based on demand.",
      },
      {
        term: "클럽딜 (Club Deal)",
        termEn: "Club Deal",
        definition:
          "소수의 은행(보통 3~6개)이 사전에 합의해 대출 금액을 균등하게 분담하는 방식. 광범위한 신디케이션 없이 비공개로 진행되며, MLA와 참여은행의 구분이 희미해지는 특성이 있다.",
        definitionEn:
          "A private arrangement among a small group of banks (typically 3–6) that pre-agree to hold equal portions of a facility without a formal syndication process. The distinction between arranger and participant is blurred in club deals.",
      },
    ],
    relatedSlugs: ["syndicated-loan-overview", "syndicated-loan-players", "syndicated-loan-process"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "syndicated-loan-players",
        title: "신디케이티드론의 주요 참여자",
        titleEn: "Key Players in a Syndicated Loan",
      },
    ],
  },
  {
    slug: "commitment-fee",
    title: "약정 수수료 (Commitment Fee)",
    titleEn: "Commitment Fee",
    entryType: "term" as const,
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "리볼빙 크레딧 퍼실리티(Revolving Credit Facility)에서 차주가 미인출 잔액에 대해 은행에 지급하는 연간 수수료. 통상 연 0.20~0.50% 수준이며, 은행의 자본 유보 비용을 보전하는 기능을 한다.",
    excerptEn:
      "An annual fee charged on the undrawn portion of a revolving credit facility, typically ranging from 20 to 50bps per annum. It compensates lenders for reserving capital against uncommitted liquidity, and is a standard feature of revolving and term-loan-B structures.",
    readingMinutes: 5,
    tags: ["약정수수료", "리볼버", "미인출잔액", "커밋먼트피", "신디론수수료", "유동성비용", "틱킹피"],
    tagsEn: ["Commitment Fee", "Revolving Credit Facility", "Undrawn Balance", "Ticking Fee", "Utilisation Fee", "Liquidity Cost", "Syndicated Loan Fees"],
    sections: [
      {
        heading: "약정 수수료 계산과 사례",
        headingEn: "How Commitment Fees Are Calculated — With Examples",
        body: `약정 수수료(Commitment Fee)는 리볼빙 크레딧 퍼실리티(RCF)에서 차주가 미인출 상태로 남겨둔 잔액(Undrawn Amount)에 대해 매년 지급하는 수수료다. 계산 방식은 단순하다: Commitment Fee = 미인출 금액 × 연간 수수료율(p.a.). 예를 들어 차주가 5억 달러 RCF 중 3억 달러만 인출한 경우, 미인출 잔액 2억 달러에 연 0.35%의 약정 수수료율이 적용되면 연간 수수료는 70만 달러가 된다. 이 수수료는 보통 분기 또는 반기 단위로 이자 지급일과 동일한 날에 납부된다.

수수료율 결정에는 차주의 신용 등급, 대출 약정 규모, 시장 환경이 복합적으로 영향을 미친다. 투자적격(Investment Grade) 차주의 경우 통상 연 0.15~0.35%, 하이일드(High Yield) 등급 차주는 0.35~0.75% 수준이 형성된다. 일부 대출 약정에서는 실제 인출 비율(Utilisation)에 따라 약정 수수료율이 달라지는 그리드(Grid) 방식을 채택하기도 한다: 예컨대 인출률 33% 미만 시 0.40%, 33~66% 구간 0.30%, 66% 초과 시 0.20%를 부과하는 식이다. 이 구조는 차주에게 리볼버를 실제로 활용하도록 유도하는 인센티브를 내장한다.

Ticking Fee는 약정 수수료와 유사하지만 용도가 다르다. 이는 딜 서명(Signing) 후 실제 대출 실행(First Drawdown) 전까지의 기간에 은행이 자금을 준비·유보하는 비용에 대한 보상으로 부과된다. 대규모 M&A 파이낸싱이나 프로젝트 파이낸스처럼 서명과 실행 사이에 수 개월의 간격이 생기는 딜에서 주로 등장하며, 통상 마진(Margin)의 30~50% 수준으로 책정된다. 실행일 이후에는 Ticking Fee가 소멸하고 정규 이자 및 약정 수수료 구조로 전환된다.`,
        bodyEn: `The commitment fee is levied on the undrawn balance of a revolving credit facility at an annualised rate, accruing daily and typically settling on each interest payment date alongside drawn-balance interest. The mechanics are straightforward: Commitment Fee = Undrawn Amount × Annual Rate. If a borrower has drawn $300 million from a $500 million RCF, the $200 million undrawn balance at a 35bps commitment fee generates $700,000 per annum, paid quarterly or semi-annually. The rate is fixed at signing unless a utilisation-linked grid is embedded in the facility agreement.

Pricing levels vary by credit quality and market conditions. Investment-grade borrowers typically pay 15–35bps; sub-investment-grade structures can see commitment fees of 35–75bps or higher, reflecting both the greater capital cost to lenders and the elevated risk that the facility might be drawn at a stress moment. Utilisation-graded grids — where the rate steps down as draw levels rise above 33% and again above 66% — have become increasingly common in European and Asian investment-grade RCFs as borrowers push back against the cost of holding large standby liquidity reserves undrawn.

The Ticking Fee deserves separate attention. Unlike the commitment fee, which runs throughout the facility's life on undrawn amounts, the ticking fee accrues only during the pre-utilisation period — the window between deal signing and first drawdown. In acquisition financings or project finance deals where closing conditions may take months to satisfy, banks reserve capital from signing onward, and the ticking fee compensates them for this bridging cost. It is typically set at 30–50% of the applicable margin, stepping up to the full margin structure once drawdown occurs and the facility is live.`,
      },
      {
        heading: "리볼버에서의 역할",
        headingEn: "The Role of Commitment Fees in Revolving Credit Facilities",
        body: `리볼빙 크레딧 퍼실리티(RCF)는 한도 내에서 인출·상환을 반복할 수 있는 유연한 유동성 공급 수단으로, 운전자본 조달, 긴급 유동성 확보, 계절적 자금 수요 충족에 광범위하게 활용된다. RCF의 경제적 가치는 인출 여부와 무관하게 한도 자체가 "가용한 백업 라인(Backup Line)"으로 기능한다는 데 있다. 차주는 이 유연성에 대한 대가를 약정 수수료 형태로 지불하며, 은행은 약정 수수료를 통해 실제 인출이 발생하지 않더라도 최소한의 수익성을 확보한다.

은행 규제 측면에서 약정 수수료의 존재 이유는 더욱 명확해진다. 바젤 III 체계에서 은행은 미인출 리볼버에 대해서도 신용 전환계수(Credit Conversion Factor, CCF)를 적용해 자본을 적립해야 한다. 만기 1년 초과 약정의 경우 CCF는 75%, 1년 이하는 20%다. 5억 달러 RCF가 전액 미인출 상태라면, 해당 은행은 3억 7,500만 달러의 위험가중자산(RWA)에 해당하는 자본을 보유해야 하며, 이 자본 비용이 약정 수수료를 통해 일부 회수된다. 따라서 약정 수수료는 단순한 관행이 아니라 규제 자본 효율성과 직접 연결된 가격 요소다.

최근 시장 트렌드에서는 ESG 연계 RCF(Sustainability-Linked RCF)에서 약정 수수료에도 ESG 성과 조정 메커니즘이 도입되는 사례가 늘고 있다. 차주가 사전에 합의한 ESG KPI(탄소 배출 감축률, 재생에너지 비중 등)를 달성하면 약정 수수료율이 2~5bps 하향 조정되고, 달성에 실패하면 동일 폭만큼 상향되는 구조다. 아시아 시장에서도 2022년 이후 한국, 싱가포르, 홍콩을 중심으로 이러한 딜이 증가하고 있으며, ESG 수수료 조정이 실질적 행동 변화를 유도하는 금융 인센티브로 자리잡고 있다.`,
        bodyEn: `The revolving credit facility is the workhorse of corporate liquidity management — a flexible instrument allowing the borrower to draw, repay, and redraw within a committed limit throughout the facility's life. Its value lies not just in drawn borrowings but in the option to access funds on demand. A large investment-grade issuer, for example, might maintain a $1 billion undrawn RCF as a pure liquidity backstop, never intending to draw unless capital markets close unexpectedly. That optionality has a cost — the commitment fee — which is effectively the premium the borrower pays for the insurance value of the standby line.

From a regulatory capital perspective, the commitment fee serves a concrete economic function. Under Basel III, banks must hold capital against undrawn revolving commitments via the Credit Conversion Factor: 75% CCF for commitments with original maturity exceeding one year, 20% for those maturing within a year. A $500 million fully undrawn RCF with tenor above one year generates $375 million of risk-weighted assets on the lender's balance sheet, requiring meaningful capital reserves even before a single dollar is borrowed. The commitment fee partially offsets this carrying cost, and the rate must be set high enough to clear the bank's internal hurdle rate on deployed capital — which is why low-credit or long-dated RCFs command disproportionately higher commitment fees.

An emerging development is the integration of ESG performance adjusters into commitment fee grids within sustainability-linked revolving facilities. Borrowers agree upfront to specific KPIs — carbon intensity reductions, renewable energy targets, supply chain auditing metrics — and if they hit those targets, the commitment fee (along with the drawn margin) steps down by 2–5bps. Shortfalls trigger a symmetric step-up. Since 2022, this structure has gained traction in Korean, Singaporean, and Hong Kong markets, with deals involving leading industrials and financial institutions embedding these adjusters as both a marketing tool and a genuine incentive for the borrower's ESG transition roadmap.`,
      },
      {
        heading: "기타 신디론 수수료와 비교 (Upfront, Participation, Agent Fee)",
        headingEn: "Comparing Commitment Fees with Other Syndicated Loan Fees",
        body: `신디케이티드론에는 약정 수수료 외에도 다양한 수수료가 존재하며, 각각의 경제적 기능과 지급 시점이 다르다. Upfront Fee(선급수수료, 일명 Arrangement Fee)는 대출 실행 시점에 차주가 MLA에게 일시불로 지급하는 수수료로, 딜 구조화와 신디케이션 서비스에 대한 대가다. 이에 반해 약정 수수료는 대출 약정 기간 전체에 걸쳐 발생하는 경상 비용이다. 차주 입장에서 Upfront Fee는 조달 비용에 일시적으로 반영되지만, 약정 수수료는 리볼버의 실질 조달 비용(All-in Cost)을 지속적으로 높이는 요인이 된다.

Participation Fee는 신디케이션 과정에서 참여은행들에게 약정 금액 대비 일정 비율로 지급되는 수수료로, Arrangement Fee의 하위 배분(Sub-participation) 성격을 갖는다. 보통 Arrangement Fee의 20~40%에 해당하는 금액이 참여 금액에 비례해 배분되며, 참여은행의 실제 이자 수익(Margin) 외에 초기 수익을 제공하는 기능을 한다. 이를 약정 수수료와 혼동하지 않는 것이 중요한데, Participation Fee는 딜 실행 시 일시불로 지급되는 반면 약정 수수료는 리볼버의 미인출 잔액에 대해 주기적으로 발생한다.

Agent Fee(대리은행 수수료)는 시설 대리은행(Facility Agent)이 행정 업무 수행의 대가로 수취하는 연간 고정 수수료다. 이자 계산, 원리금 배분, 재무 서약 모니터링 등의 행정 서비스에 대한 비용으로, 대출 금액이나 미인출 잔액과 무관하게 일정 금액(보통 연 5만~20만 달러)이 책정되는 경우가 많다. 차주 입장에서는 수수료 유형별로 지급 시점, 산정 기준, 수취 주체가 모두 다르므로, 딜 계약서상의 수수료 조항(Fee Letter)을 면밀히 검토해 All-in Cost를 정확히 산출하는 것이 실무상 중요하다.`,
        bodyEn: `Syndicated loan transactions carry a layered fee structure, and distinguishing each component is essential for accurate all-in cost analysis. The Upfront Fee (or Arrangement Fee) is a one-time payment made at financial close to the MLA, compensating the arranger for deal origination and syndication. It is typically amortised into the effective cost of borrowing using the Internal Rate of Return (IRR) method. The commitment fee, by contrast, is a recurring cost that accrues throughout the facility's life on undrawn amounts — it has no amortisation basis and simply increases the all-in cost of maintaining standby liquidity.

The Participation Fee flows from the MLA to sub-participating lenders and represents their share of the broader arrangement economics. Computed as a percentage of each bank's hold amount (commonly 20–40% of the headline arrangement fee), it is paid in a lump sum at signing alongside the MLA's retained praecipium. Although economically similar to a reduced arrangement fee for participants, it is structurally distinct from the commitment fee — it is a past-tense reward for joining the deal, whereas the commitment fee is a forward-looking charge for the borrower's option to access undrawn funds.

Agency fees occupy a separate category: a flat annual retainer paid to the Facility Agent for administrative services including interest calculations, fund flows, covenant compliance monitoring, and lender communication. Typically ranging from $50,000 to $200,000 per year regardless of facility utilisation, agency fees are relatively immaterial to large borrowers but can be significant on smaller deals. For a borrower modelling the true cost of a $300 million RCF, a disciplined all-in cost calculation must aggregate: drawn-balance interest (SOFR + margin), commitment fees on undrawn amounts, amortised upfront fees, and the annual agency fee — each with a distinct payment timing, counterparty, and economic rationale documented in the Fee Letter attached to the Facility Agreement.`,
      },
    ],
    keyTerms: [
      {
        term: "리볼빙 크레딧 퍼실리티 (Revolving Credit Facility)",
        termEn: "Revolving Credit Facility (RCF)",
        definition:
          "한도 내에서 인출, 상환, 재인출을 자유롭게 반복할 수 있는 유동성 공급 약정. 운전자본 및 긴급 유동성 목적으로 광범위하게 활용되며, 미인출 잔액에 대해 약정 수수료가 부과된다.",
        definitionEn:
          "A committed credit facility allowing the borrower to draw, repay, and redraw up to an agreed limit during the facility period. Undrawn amounts are subject to the commitment fee, and the flexibility to access capital on demand is the RCF's primary value proposition.",
      },
      {
        term: "이용 수수료 (Utilisation Fee)",
        termEn: "Utilisation Fee",
        definition:
          "인출 비율이 일정 임계치(예: 33% 또는 66%)를 초과할 때 인출 잔액에 추가로 부과되는 수수료. 약정 수수료와 반대 방향으로 작동하며, 과도한 인출을 억제하거나 은행의 유동성 리스크를 보전하는 기능을 한다.",
        definitionEn:
          "An additional fee levied on drawn amounts when utilisation exceeds a specified threshold (e.g., 33% or 66% of total commitment). It functions as a counterweight to the commitment fee, ensuring lenders are compensated at higher draw levels where balance-sheet strain increases.",
      },
      {
        term: "틱킹 피 (Ticking Fee)",
        termEn: "Ticking Fee",
        definition:
          "대출 약정 서명 후 최초 인출 전까지의 유보 기간에 은행이 자금을 준비·확보하는 비용을 보전하기 위해 부과되는 수수료. 통상 적용 마진의 30~50% 수준이며, 최초 인출 시점에 소멸한다.",
        definitionEn:
          "A fee accruing from deal signing to first utilisation, compensating lenders for holding committed capital during the pre-drawdown period. Typically set at 30–50% of the applicable drawn margin, the ticking fee ceases once the facility is first drawn and the regular interest and commitment fee structure takes over.",
      },
    ],
    relatedSlugs: ["syndicated-loan-docs", "syndicated-loan-overview", "mla"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "syndicated-loan-docs",
        title: "신디케이티드론 주요 문서",
        titleEn: "Key Documents in a Syndicated Loan",
      },
    ],
  },
  {
    slug: "agent-bank",
    title: "대리은행 (Agent Bank / Facility Agent)",
    titleEn: "Agent Bank (Facility Agent)",
    entryType: "term" as const,
    category: "syndloan",
    categoryLabel: "신디케이티드론",
    categoryLabelEn: "Syndicated Loans",
    excerpt:
      "신디케이티드론에서 차주와 참여은행 사이의 행정적 중개자. 이자 계산 및 원리금 배분, 재무 서약 모니터링, 인출 요청 처리 등 딜의 일상적 운영을 총괄한다. MLA가 겸직하는 경우가 많으나 역할은 별개다.",
    excerptEn:
      "The administrative intermediary between the borrower and the syndicate of lenders in a syndicated loan. Responsible for interest calculations, principal distribution, covenant monitoring, and drawdown processing, the Facility Agent is the operational engine of the loan throughout its life — a role distinct from, though often held by, the MLA.",
    readingMinutes: 5,
    tags: ["대리은행", "시설대리인", "파실리티에이전트", "원리금배분", "재무서약", "신디케이트행정", "에이전트"],
    tagsEn: ["Agent Bank", "Facility Agent", "Covenant Monitoring", "Principal Distribution", "Syndicate Administration", "Security Agent", "Information Agent"],
    sections: [
      {
        heading: "대리은행의 역할 범위",
        headingEn: "Scope of the Facility Agent's Role",
        body: `대리은행(Facility Agent)은 신디케이티드론 계약(Facility Agreement)에 의해 공식 지정되는 행정 대리인으로, 딜이 서명된 날부터 최종 상환일까지 차주와 신디케이트 전체의 소통 채널이자 자금 흐름의 허브 역할을 수행한다. 실무적으로 대리은행의 핵심 업무는 세 가지 축으로 나뉜다: (1) 이자 계산 및 원리금 배분, (2) 인출(Utilisation) 요청 처리, (3) 재무 서약 모니터링. 인출이 발생하면 차주는 대리은행에 Utilisation Request를 제출하고, 대리은행은 이를 검토해 각 참여은행에 자금 지원 요청을 발송한 뒤 당일 차주 계좌로 집중·지급하는 자금 풀링(Fund Pooling) 기능을 수행한다.

이자 계산에서 대리은행은 각 이자 기간(Interest Period)마다 준거 금리(SOFR, EURIBOR 등)를 확인하고, 여기에 마진(Margin)과 강제 비용(Mandatory Cost)을 합산해 각 참여은행의 보유 금액 기준으로 이자를 산출·배분한다. 특히 멀티커런시(Multi-currency) 또는 멀티트랜치(Multi-tranche) 딜에서는 통화별, 트랜치별 이자 기간이 달라 계산 복잡성이 대폭 증가하며, 이 작업의 정확성이 대리은행의 전문성을 가르는 기준이 된다. 오류 발생 시 대리은행은 참여은행들로부터 직접 이의를 받을 수 있으며, 반복적인 실수는 대리은행 교체의 빌미가 되기도 한다.

재무 서약 모니터링은 대리은행 업무 중 가장 법적 민감도가 높은 영역이다. 차주는 대출 약정에 따라 정기적으로(보통 분기 또는 반기) 재무 제표와 서약 준수 확인서(Compliance Certificate)를 대리은행에 제출하며, 대리은행은 이를 수신해 참여은행에 전달하는 역할을 한다. 대리은행이 서약 위반 여부를 직접 판단하지는 않는 것이 일반적이지만(그 판단은 참여은행 다수결에 따름), 통보 의무(Notification Obligation)를 이행하지 않으면 법적 책임이 발생할 수 있다. LMA(Loan Market Association) 표준 약정서는 대리은행의 의무와 면책 조항을 상세히 규정하고 있으며, 한국과 아시아 시장에서도 LMA 기준을 준용하는 딜이 증가하고 있다.`,
        bodyEn: `The Facility Agent, formally appointed under the Facility Agreement, serves as the administrative nerve centre of a syndicated loan from signing through to final repayment. Its mandate encompasses three core functional pillars: fund flow management (collecting lender contributions and disbursing proceeds to the borrower), interest mechanics (calculating amounts due on each interest payment date and allocating them to individual lenders), and covenant compliance administration (receiving, processing, and distributing the borrower's periodic financial reporting and compliance certificates). Each drawdown request initiates a choreographed sequence: the borrower submits a Utilisation Request, the Facility Agent verifies conditions precedent, notifies lenders of their respective funding obligations, pools incoming funds, and channels the aggregate amount to the borrower's designated account — all within tight intraday deadlines.

Interest computation is a technically demanding core competency. On each Interest Payment Date, the Facility Agent screens the applicable reference rate (SOFR for USD-denominated facilities, EURIBOR for EUR tranches), adds the contractual margin and any mandatory cost, and calculates each lender's entitlement based on its proportionate share of the outstanding loan. Multi-currency or multi-tranche facilities — common in large cross-border acquisition financings — multiply this complexity substantially, as each tranche may run different interest periods, reference rates, and repayment schedules simultaneously. Errors in this process expose the Facility Agent to direct claims from lenders and, in chronic cases, provide grounds for a replacement request.

Covenant monitoring represents the highest-stakes element of the Facility Agent role. Under standard LMA documentation, the borrower submits financial statements and a Compliance Certificate each quarter or semi-annually; the Facility Agent receives these documents and distributes them to lenders, maintaining a formal record of receipt. While the Facility Agent typically lacks authority to independently declare a breach (that decision belongs to the syndicate majority), its notification obligations are legally precise: failure to promptly relay a discovered potential event of default to lenders can expose the Agent to negligence claims. As LMA-standard documentation has become increasingly prevalent in Korean and broader Asian markets since the early 2010s, the Agent's role has grown more formalized and the associated liability framework more rigorous.`,
      },
      {
        heading: "Security Agent와의 구분",
        headingEn: "Distinguishing the Facility Agent from the Security Agent",
        body: `신디케이티드론에서 '에이전트'라는 명칭은 복수의 역할에 사용되므로 정확한 구분이 필요하다. Facility Agent(시설대리인)는 앞서 설명한 행정 대리인으로, 이자·원리금 배분과 재무 서약 모니터링을 담당한다. 반면 Security Agent(담보대리인, Security Trustee라고도 함)는 신디케이트를 대표해 담보(Collateral)를 보유하고 관리하는 역할을 한다. 양자는 법적 권한과 책임이 완전히 분리되어 있으며, 동일한 은행이 두 역할을 겸직하는 경우도 있지만 계약 내에서 역할은 별도로 명시된다.

Security Agent의 핵심 기능은 담보 퍼펙션(Perfection)과 실행(Enforcement)이다. 대출 약정 체결 시 저당권, 주식 질권, 통장 질권 등 각종 담보가 Security Agent 명의로 등록되며, Security Agent는 신디케이트 전체를 대표해 담보 자산을 신탁(Trust) 방식 또는 채권자 대표 방식으로 보유한다. 차주가 디폴트에 빠질 경우, 참여은행들의 다수결 지시에 따라 Security Agent가 담보를 실행(Enforce)해 대출금을 회수하고 그 수익을 참여은행에게 배분한다. 이 과정에서 Security Agent는 법률 자문팀과 협력해 강제 집행 절차를 진행하며, 복수의 국가에 걸친 국제 딜에서는 현지 법원 절차가 병행되기도 한다.

Information Agent는 또 다른 세분화된 역할로, 유통 시장(Secondary Market)에서 대출 채권이 매매될 때 참여은행의 교체 정보를 관리하고 신디케이트 구성원 목록을 최신 상태로 유지하는 역할을 한다. LMA 표준 약정서 기준으로 정보 대리인의 역할은 Facility Agent가 겸직하는 경우가 많다. 실무에서는 딜의 복잡성과 담보 구조에 따라 Facility Agent와 Security Agent를 동일 기관이 맡는지, 별도 기관이 맡는지가 계약 협상 단계에서 결정되며, 아시아 시장의 대형 LBO 딜에서는 양자를 분리하는 경향이 강하다.`,
        bodyEn: `The term "agent" encompasses several distinct roles in a syndicated loan, and conflating them leads to real-world misunderstandings in both documentation and enforcement. The Facility Agent handles administration — cash flows, interest mechanics, covenant compliance distribution — but holds no proprietary interest in the collateral package. The Security Agent (or Security Trustee in trust-law jurisdictions) holds all security interests on behalf of the entire syndicate, acting as a single legal holder of pledges, mortgages, share charges, and account security, regardless of how many lenders sit in the syndicate. This structural separation exists precisely to avoid having 20-plus lenders each independently registering and enforcing their own security claims — a logistical impossibility and legal nightmare.

The Security Agent's two defining responsibilities are perfection and enforcement. At closing, all security is registered or recorded in the Security Agent's name; in civil-law jurisdictions (including Korea), this typically involves filing with the relevant registry (real estate, movable property, corporate shares). Upon a borrower default, the Security Agent acts on the directions of a qualifying majority of lenders (commonly two-thirds by commitment value) to enforce the collateral: appointing receivers, initiating foreclosure, or conducting a going-concern sale of the charged assets. The net enforcement proceeds are then distributed pari passu among syndicate members in accordance with their proportionate entitlements — a process the Security Agent coordinates with legal counsel, often across multiple jurisdictions in cross-border deals.

The Information Agent, a less prominent but practically useful role, maintains the register of lender transfers in the secondary market and communicates relevant syndicate membership changes to the borrower and participants. Under LMA standard documentation, this function is usually absorbed by the Facility Agent, avoiding the need for a separate appointment. In practice, whether Facility Agent and Security Agent are the same institution or separate entities is a negotiated point at mandate stage, influenced by the deal's complexity, the collateral geography, and each bank's internal capabilities. In Asia-Pacific leveraged buyout transactions, where collateral packages span multiple jurisdictions and enforcement scenarios carry higher complexity, splitting the two roles across specialist institutions has become increasingly standard.`,
      },
      {
        heading: "대리은행 교체 시나리오",
        headingEn: "Agent Bank Replacement Scenarios",
        body: `대리은행은 대출 기간 내내 교체될 수 있으며, 교체 가능 조건과 절차는 시설 약정서에 명시된다. 일반적으로 대리은행 교체는 세 가지 시나리오에서 발생한다: (1) 대리은행 자발적 사임(Resignation), (2) 참여은행 다수결에 의한 해임(Replacement by Majority Lenders), (3) 대리은행 지위에 영향을 미치는 외부 이벤트(인수합병, 파산, 규제 변경 등). 자발적 사임의 경우 대리은행은 사전 통지 기간(보통 30~60일)을 두고 사임 의사를 표명하며, 후임 대리은행이 지정되지 않을 경우 역할 공백이 발생하는 것을 방지하기 위해 사임 효력은 후임 지정 시점까지 연기되는 경우가 많다.

참여은행 다수결에 의한 교체는 대리은행이 의무를 소홀히 하거나 기술적 오류를 반복하거나, 혹은 차주와의 이해 충돌 우려가 있을 때 발동된다. LMA 표준 약정서 기준으로 참여은행 과반수(금액 기준)의 서면 지시가 있으면 대리은행을 교체할 수 있으며, 이 조항은 대리은행에 대한 참여은행들의 견제 기능을 한다. 실무에서 대리은행 교체는 드물지만, 대형 부실 딜(Distressed Deal)이나 채무 재조정 과정에서 이해관계 충돌이 명백해질 경우 교체가 검토된다. 일부 딜에서는 대리은행이 참여은행으로서 자신의 이해관계와 대리 역할 사이의 갈등을 피하기 위해 스스로 대리은행 직을 내려놓기도 한다.

대리은행이 인수합병이나 사업 매각으로 인해 법인격이 변경될 경우, 기존 대출 약정상 대리은행 지위의 승계(Succession) 처리가 필요하다. 이 경우 차주와 참여은행 전체의 동의를 얻어 신규 법인으로 대리은행 지위를 이전하는 계약 수정(Amendment)을 진행하거나, 기존 계약상 자동 승계 조항(Automatic Succession Clause)이 있으면 이를 활용한다. 한국의 경우 우리은행과 우리투자증권의 분리, 하나은행과 외환은행의 합병 등 과거 금융권 재편 과정에서 이러한 대리은행 지위 승계 처리가 실제로 발생한 바 있다.`,
        bodyEn: `Agent Bank replacement is governed by specific provisions in the Facility Agreement, covering three principal scenarios: voluntary resignation, removal by majority lender instruction, and automatic succession triggered by a structural change at the Agent (merger, acquisition, insolvency, or regulatory disqualification). In a voluntary resignation, the outgoing Agent issues advance notice — typically 30 to 60 days — and the resignation only takes legal effect once a successor is formally appointed, preventing an administrative vacuum. The successor is usually nominated by the majority lenders in consultation with the borrower, and must satisfy eligibility criteria specified in the agreement (minimum credit rating, established loan agency platform, etc.).

Lender-driven removal is the more adversarial scenario, typically arising from persistent operational errors, demonstrated bias toward the borrower (most acute when the Agent also holds a large lender stake and faces conflicting interests in enforcement situations), or failure to comply with notification obligations. Under LMA documentation, a majority lender instruction (commonly defined as two-thirds of total commitments) can trigger an involuntary replacement without the Agent's consent. While this mechanism is rarely invoked in performing loans, it becomes highly relevant in distressed situations — restructurings, covenant-waiver negotiations, or pre-insolvency processes where the Agent's dual role as lender and administrator creates visible conflicts. In some cases, a Facility Agent that is also a large syndicate lender will proactively step down from the Agency role at the onset of restructuring discussions to preserve credibility with all parties.

Corporate events at the Agent's own institution — particularly mergers and acquisitions — require formal succession processing. When two banks merge and one holds Facility Agent positions across dozens of live deals, each affected Facility Agreement must either be amended to reflect the successor entity or contain a pre-drafted automatic succession clause that activates upon evidence of the legal merger (typically a certified copy of the merger registration). In Korea's financial sector, the 2015 merger of Hana Bank and Korea Exchange Bank (then KEB Hana Bank) and the earlier consolidation of several Woori Group entities generated precisely these administrative processes across a broad portfolio of domestic and offshore syndicated facilities. Post-merger, the combined institution engaged in systematic outreach to borrowers and co-lenders to execute the necessary documentation updates, a process that took 12–18 months to complete across the full affected deal book.`,
      },
    ],
    keyTerms: [
      {
        term: "시설대리인 (Facility Agent)",
        termEn: "Facility Agent",
        definition:
          "신디케이티드론에서 차주와 신디케이트를 연결하는 행정 대리인. 이자 계산, 원리금 배분, 인출 요청 처리, 재무 서약 모니터링을 담당하며, 대출 약정서에 명시적으로 지정된다.",
        definitionEn:
          "The administrative agent formally appointed under the Facility Agreement to act as the operational intermediary between the borrower and the lender syndicate. Responsible for interest calculations, fund flows, utilisation processing, and covenant compliance administration throughout the loan's life.",
      },
      {
        term: "담보대리인 (Security Agent)",
        termEn: "Security Agent",
        definition:
          "신디케이트 전체를 대표해 담보를 보유·관리하고, 디폴트 시 참여은행의 지시에 따라 담보를 실행하는 역할. 시설대리인과 별개의 법적 역할이며, 동일 기관이 겸직하기도 한다.",
        definitionEn:
          "The entity holding and managing collateral on behalf of the entire lender syndicate, and executing enforcement actions upon default following majority lender instructions. A legally distinct role from the Facility Agent, though the same institution often holds both positions.",
      },
      {
        term: "정보대리인 (Information Agent)",
        termEn: "Information Agent",
        definition:
          "신디케이트 구성원 목록을 관리하고 유통 시장에서의 참여은행 교체 정보를 처리하는 역할. 실무상 시설대리인이 겸직하는 경우가 많다.",
        definitionEn:
          "The agent responsible for maintaining the register of lenders and processing transfers of syndicate participations in the secondary market. In practice, this role is commonly combined with the Facility Agent appointment under LMA-standard documentation.",
      },
    ],
    relatedSlugs: ["syndicated-loan-players", "syndicated-loan-docs", "mla"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "syndicated-loan-players",
        title: "신디케이티드론의 주요 참여자",
        titleEn: "Key Players in a Syndicated Loan",
      },
    ],
  },

  // ── 구조화 용어 ──────────────────────────────────────────────────────────────────
{
    slug: "spv",
    title: "SPV (특수목적법인)",
    titleEn: "SPV (Special Purpose Vehicle)",
    entryType: "term" as const,
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt:
      "ABS·CLO·CMBS 등 구조화금융 거래에서 자산을 보유하는 독립 법인. 파산 절연(Bankruptcy Remoteness)이 핵심 속성으로, 자산 양도인(Originator)이 파산하더라도 SPV에 편입된 자산은 도산 절차로부터 격리되어 투자자를 보호한다.",
    excerptEn:
      "An isolated legal entity that holds assets in ABS, CLO, CMBS, and other structured finance transactions. Bankruptcy remoteness is its defining characteristic: even if the originator becomes insolvent, assets transferred to the SPV are shielded from bankruptcy proceedings, protecting investors.",
    readingMinutes: 5,
    tags: ["SPV", "파산절연", "구조화금융", "True Sale", "ABS", "CLO"],
    tagsEn: ["SPV", "Bankruptcy Remoteness", "Structured Finance", "True Sale", "ABS", "CLO"],
    sections: [
      {
        heading: "SPV의 법적 구조와 파산 절연",
        headingEn: "Legal Structure and Bankruptcy Remoteness",
        body: `SPV(Special Purpose Vehicle, 특수목적법인)는 구조화금융 거래에서 단 하나의 목적—자산을 보유하고 증권을 발행하는 것—을 위해 설립된 법인이다. 가장 일반적인 형태는 미국 델라웨어(Delaware) LLC와 케이맨(Cayman Islands) SPC(Segregated Portfolio Company)이며, 한국에서는 「자산유동화에 관한 법률」에 따라 설립되는 유동화전문회사(SPC)가 그 역할을 담당한다. SPV는 독립적인 이사회와 제한된 사업 목적 조항을 갖추고 있으며, 자발적 파산 신청을 금지하는 조항(Independent Director 동의 요건 등)을 정관에 삽입하여 도산 가능성을 구조적으로 차단한다.

파산 절연(Bankruptcy Remoteness)이란 자산 양도인(Originator)이 도산 절차에 들어가더라도 SPV가 보유한 자산에 대해 도산 관재인이 회수(Claw-back) 또는 자동정지(Automatic Stay) 효력을 주장하지 못하도록 설계된 법적 속성이다. 이를 달성하기 위해서는 두 가지 조건이 충족되어야 한다. 첫째, 자산의 이전이 True Sale(진정한 매매)로 인정받아야 하고, 둘째, SPV 자체가 Originator의 연결 도산(Substantive Consolidation)에 포함되지 않아야 한다. 법무법인의 True Sale Opinion과 Non-Consolidation Opinion이 모든 거래의 전제 조건으로 요구되는 이유가 여기에 있다.

실무적으로 SPV의 독립성을 유지하기 위한 장치들은 매우 세밀하다. SPV는 독립 이사(Independent Director)를 반드시 1인 이상 선임해야 하며, SPV의 부채는 Originator의 재무제표에 연결되지 않도록 Off-Balance Sheet 처리 요건을 충족해야 한다(IFRS 10 기준 지배력 판단 및 FAS 166/167 기준). 또한 SPV는 Originator와의 거래에서 시장 조건(Arm's Length)을 준수해야 하고, 자산 외의 별도 사업을 영위해서는 안 된다. 이러한 요건을 위반할 경우 법원이 SPV와 Originator를 하나의 법인으로 취급하는 Substantive Consolidation 판결을 내릴 수 있으며, 이는 투자자에게 치명적 손실을 야기한다.`,
        bodyEn: `A Special Purpose Vehicle (SPV) is a legal entity created for a single purpose—to hold assets and issue securities—within a structured finance transaction. The most common forms are Delaware LLCs in the United States and Cayman Islands Segregated Portfolio Companies (SPCs). In Korea, the equivalent is the Yudonghwa Jeonmun Hoesa (유동화전문회사) established under the Asset-Backed Securitization Act. SPVs are equipped with independent directors, restrictive purpose clauses, and provisions requiring unanimous consent (including that of an independent director) before any voluntary bankruptcy filing, structurally eliminating the risk of self-initiated insolvency.

Bankruptcy remoteness means that even if the originator enters insolvency proceedings, the bankruptcy trustee cannot assert claw-back claims or automatic stay protections over assets held by the SPV. Two conditions must be satisfied: the asset transfer must qualify as a true sale, and the SPV itself must not be subject to substantive consolidation with the originator. This is precisely why legal opinions—specifically a True Sale Opinion and a Non-Consolidation Opinion from reputable law firms—are non-negotiable prerequisites for any structured finance deal to close.

In practice, the mechanisms for preserving SPV independence are highly granular. The SPV must appoint at least one independent director whose fiduciary duty runs to the entity, not the originator. Off-balance-sheet treatment requires meeting IFRS 10 control criteria or the post-FAS 166/167 consolidation tests. All transactions between the SPV and the originator must be conducted on arm's length terms, and the SPV may not engage in any activity beyond its stated purpose. Violation of these requirements can lead a court to invoke substantive consolidation, treating the SPV and originator as a single estate—an outcome that would expose investors to the originator's full creditor pool and effectively destroy the credit enhancement embedded in the deal structure.`,
      },
      {
        heading: "True Sale vs Pledge 구분",
        headingEn: "True Sale vs. Pledge: The Legal Distinction",
        body: `True Sale과 담보권 설정(Pledge 또는 Security Assignment)은 구조적으로 유사해 보이지만 파산 절연 여부에서 결정적 차이를 낳는다. True Sale은 자산의 소유권이 Originator에서 SPV로 완전히 이전되는 거래로, 이후 Originator가 파산하더라도 해당 자산은 도산재단(Bankruptcy Estate)에 포함되지 않는다. 반면 Pledge는 자산을 담보로 제공하되 소유권은 Originator에게 남아 있는 구조로, 도산 시 담보권자는 자동정지 해제(Relief from Automatic Stay)를 별도로 신청해야 하며 도산 관재인의 회피권(Avoidance Power) 행사에 노출된다.

True Sale 인정 여부를 판단하는 핵심 기준은 "위험과 보상의 실질적 이전(Substantial Transfer of Risk and Reward)"이다. 미국 판례법에서는 Anderson v. Wilder(1985) 및 Octagon Gas Systems v. Rimmer(1993) 등에서 다음 요소들을 검토한다: ① Originator가 자산 매각 후에도 신용 위험을 재보유하는지(Recourse 여부), ② Originator가 환매 의무를 지는지, ③ 매각 가격이 공정 시장가치에 근접하는지, ④ SPV가 독립적 의사결정을 하는지. 실무적으로 Originator는 First Loss 포지션인 에쿼티 트랜치를 보유하는 경우가 많은데, 이 경우 법원이 경제적 실질을 담보대출로 재성격화(Recharacterization)할 위험이 있어 거래 구조 설계 시 법무 검토가 필수적이다.

한국 ABS 시장에서는 True Sale의 성립 여부가 「자산유동화법」 제13조(양도의 효력) 및 민법상 채권양도 대항 요건(채무자 통지 또는 승낙, 민법 제450조)과 맞물려 복잡한 양상을 띤다. 주택담보대출을 유동화하는 MBS 거래에서는 개별 채무자에 대한 통지 없이도 「자산유동화법」 특례를 통해 True Sale 효력이 인정되나, 기업 매출채권 유동화 등에서는 채무자 통지 여부가 쟁점이 된다. 2021년 홈플러스 사태에서 보듯 Originator의 재무 악화가 SPV 자산의 가치에 영향을 미칠 수 있는 구조(Commingling Risk 등)는 True Sale의 경제적 실질을 훼손할 수 있어 신용평가사들이 엄격히 검토한다.`,
        bodyEn: `True sale and pledge (or security assignment) may appear structurally similar, but they diverge sharply on the question of bankruptcy remoteness. In a true sale, ownership of the assets transfers fully from the originator to the SPV; if the originator later becomes insolvent, those assets do not form part of the bankruptcy estate. In a pledge, the originator retains legal ownership and merely grants a security interest, meaning a trustee in bankruptcy could subject the pledged assets to automatic stay while the secured party seeks relief, and could potentially exercise avoidance powers to unwind the transfer if it occurred within a preference period.

The central legal test for true sale recognition is whether there has been a "substantial transfer of risk and reward." U.S. case law—including Anderson v. Wilder and Octagon Gas Systems v. Rimmer—examines factors such as: (i) whether the originator retains credit recourse after the transfer, (ii) whether the originator bears any repurchase obligation, (iii) whether the transfer price approximates fair market value, and (iv) whether the SPV exercises independent decision-making. In practice, originators frequently retain the equity (first-loss) tranche, which creates recharacterization risk—a court could conclude that the economic substance of the transaction is a secured loan, not a sale—making rigorous legal review of the capital structure essential before any deal closes.

In the Korean ABS market, true sale validity intersects with Article 13 of the Asset-Backed Securitization Act and the Civil Code requirements for perfection of receivable assignments (debtor notification or consent under Civil Code Article 450). For residential mortgage-backed securities, the ABS Act provides a notification exemption that allows true sale treatment without individual borrower notice, but for trade receivable securitizations the notification requirement remains a live issue. As illustrated by the 2021 Homeplus restructuring, structures where the originator's financial deterioration can affect SPV asset values—through commingling risk, servicing disruption, or dilution risk—undermine the economic substance of the true sale, and rating agencies apply increasingly stringent structural safeguards to address these concerns.`,
      },
      {
        heading: "SPV 설계 실패 사례: Enron과 ABCP",
        headingEn: "SPV Design Failures: Enron and the ABCP Crisis",
        body: `엔론(Enron) 사태(2001년)는 SPV가 원래 목적—투자자 보호를 위한 파산 절연—이 아닌 재무제표 은폐 수단으로 악용된 대표적 사례다. 엔론은 Chewco, LJM Cayman 등 수백 개의 SPV를 설립하여 부채를 연결 재무제표 밖으로 이전하고 이익을 부풀렸다. 이들 SPV는 외부 투자자 지분 3%(당시 GAAP 기준 연결 제외 요건)를 충족하는 것처럼 설계되었으나, 실제로는 엔론의 임원이 지분을 보유하고 엔론이 실질적으로 지배하는 구조였다. FAS 140 및 FIN 46이 강화된 배경이 바로 이 사건이며, 현행 ASC 810(VIE 연결 기준)은 형식적 지분율이 아닌 실질적 지배력에 따라 연결 여부를 판단하도록 바뀌었다.

ABCP(Asset-Backed Commercial Paper) 콘듀잇 위기(2007~2008년)는 SPV의 유동성 리스크가 어떻게 금융 시스템 전체로 전이되는지를 보여주는 사례다. 은행들은 서브프라임 모기지 등 장기 자산을 ABCP 콘듀잇(구조적으로 SPV의 일종)에 편입시키고 단기 CP(만기 30~90일)를 발행하여 조달한 뒤, 은행 본체는 유동성 지원 약정(Liquidity Facility)만 제공하는 방식으로 레버리지를 쌓았다. 2007년 8월 서브프라임 우려가 확산되면서 CP 투자자들이 롤오버를 거부하자 콘듀잇들이 유동성 위기에 빠졌고, 유동성 지원 약정을 이행해야 하는 은행들의 대차대조표가 급격히 팽창했다. 독일 IKB, BNP파리바, SIV들의 연쇄 붕괴가 이 메커니즘으로 설명된다.

이 두 사례에서 얻을 수 있는 교훈은 SPV의 설계가 법적 형식이 아닌 경제적 실질에 의해 검증되어야 한다는 것이다. 법적으로 완벽한 파산 절연이 성립하더라도, 은행이 ABCP 만기 연장을 사실상 보장하거나 콘듀잇의 손실을 평판 리스크를 이유로 자발적으로 흡수한다면 SPV의 독립성은 경제적으로 소멸한다. 이후 바젤 III와 IFRS 10은 이러한 암묵적 지원(Implicit Support) 관행을 연결 요건에 반영하여, 형식적 SPV 구조를 통한 규제 차익거래를 대폭 축소시켰다. 현재 글로벌 CLO·ABS 시장에서 투자자들은 Legal Opinion의 질, 독립 이사 구성, 서비서 교체 조항(Hot Back-up Servicer 등)을 SPV 구조 평가의 핵심 지표로 활용한다.`,
        bodyEn: `The Enron collapse (2001) is the defining case study of SPVs being weaponized for financial statement manipulation rather than used for their intended purpose of investor protection through bankruptcy remoteness. Enron created hundreds of SPVs—including Chewco and LJM Cayman—to move debt off its consolidated balance sheet and inflate reported earnings. These vehicles were structured to satisfy the then-applicable 3% outside equity threshold under U.S. GAAP for deconsolidation, but in reality Enron executives held the equity interests and the parent exercised effective control. The scandal directly prompted the issuance of FAS 140 and FIN 46, and today's ASC 810 Variable Interest Entity framework evaluates consolidation based on substantive control rather than nominal ownership percentages.

The ABCP conduit crisis of 2007-2008 illustrated how liquidity risk embedded in SPV structures can propagate systemic stress. Banks securitized long-dated assets—including subprime mortgages—into ABCP conduits, funded them with short-term commercial paper (30-90 day maturities), and retained only a liquidity backstop facility on the bank's own balance sheet, accumulating leverage off-balance-sheet. When subprime concerns spread in August 2007 and CP investors refused to roll, the conduits faced acute liquidity shortfalls. Banks were forced to honor their liquidity facilities, causing rapid balance sheet expansion. The collapses of IKB, BNP Paribas's funds, and numerous SIVs are all explained by this same mechanism.

The lesson from both episodes is that SPV design must be validated on economic substance, not legal form. Even with legally airtight bankruptcy remoteness, if a bank implicitly guarantees CP rollover or voluntarily absorbs conduit losses to protect its reputation, the SPV's independence evaporates in economic reality. Basel III and IFRS 10 subsequently incorporated implicit support considerations into consolidation tests, substantially narrowing the regulatory arbitrage achievable through nominal SPV structures. In today's global CLO and ABS markets, sophisticated investors scrutinize the quality of legal opinions, independent director composition, and servicer replacement provisions—including hot back-up servicer arrangements—as the primary indicators of genuine SPV structural integrity.`,
      },
    ],
    keyTerms: [
      {
        term: "파산절연 (Bankruptcy Remoteness)",
        termEn: "Bankruptcy Remoteness",
        definition:
          "자산 양도인(Originator)의 파산이 SPV 보유 자산 및 증권에 미치는 영향을 차단하도록 설계된 법적·구조적 속성. True Sale Opinion 및 Non-Consolidation Opinion에 의해 지지된다.",
        definitionEn:
          "The legal and structural property that isolates SPV-held assets and securities from the insolvency of the originator. Supported by True Sale and Non-Consolidation legal opinions.",
      },
      {
        term: "True Sale (진정한 매매)",
        termEn: "True Sale",
        definition:
          "자산의 소유권이 Originator에서 SPV로 실질적으로 이전되는 거래. 법원이 담보대출로 재성격화(Recharacterization)하지 못하도록 위험·보상의 실질적 이전을 갖추어야 한다.",
        definitionEn:
          "A transfer in which legal and beneficial ownership of assets passes fully from the originator to the SPV, structured to withstand recharacterization as a secured loan by demonstrating substantial transfer of risk and reward.",
      },
      {
        term: "Orphan Structure",
        termEn: "Orphan Structure",
        definition:
          "SPV의 지분 전체를 자선 단체(Charitable Trust) 또는 독립 수탁자가 보유하여, 어떤 당사자도 SPV를 '소유'하지 않는 구조. Non-Consolidation 위험을 원천 차단한다.",
        definitionEn:
          "A structure in which all equity in the SPV is held by a charitable trust or independent trustee, ensuring no party 'owns' the SPV and eliminating the risk of substantive consolidation with any transaction participant.",
      },
    ],
    relatedSlugs: ["structured-overview", "structured-abs", "structured-clo"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "structured-overview",
        title: "구조화금융 개요",
        titleEn: "Structured Finance Overview",
      },
    ],
  },
  {
    slug: "tranche",
    title: "트랜치 (Tranche)",
    titleEn: "Tranche",
    entryType: "term" as const,
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt:
      "구조화 채권에서 현금흐름 수취와 손실 흡수의 우선순위에 따라 나뉜 층위. 선순위(Senior, AAA)부터 중순위(Mezzanine), 후순위(Junior), 에쿼티(Equity)까지 계층화되며, 각 트랜치는 서로 다른 신용등급·수익률·위험 프로파일을 가진다.",
    excerptEn:
      "Stratified layers of a structured security differentiated by priority of cash flow receipt and loss absorption. Ranging from senior (AAA) through mezzanine, junior, and equity tranches, each layer carries a distinct credit rating, yield, and risk profile.",
    readingMinutes: 5,
    tags: ["트랜치", "선순위", "후순위", "에쿼티", "CLO", "CDO", "신용등급"],
    tagsEn: ["Tranche", "Senior", "Mezzanine", "Equity", "CLO", "CDO", "Credit Rating"],
    sections: [
      {
        heading: "트랜치 구조의 논리",
        headingEn: "The Logic of Tranching",
        body: `트랜칭(Tranching)은 동일한 자산 풀(Asset Pool)에서 서로 다른 위험 선호를 가진 투자자 집단을 동시에 유치하기 위한 금융공학적 설계다. 가령 $500M 규모의 CLO(Collateralized Loan Obligation)를 구성할 때, 전체 자산 풀에서 발생하는 이자·원금 현금흐름은 워터폴(Waterfall) 방식으로 선순위 트랜치부터 순차적으로 배분된다. Class A(AAA, $300M, 스프레드 SOFR+130bps) → Class B(AA, $50M, SOFR+180bps) → Class C(A, $40M, SOFR+230bps) → Class D(BBB, $40M, SOFR+350bps) → Class E(BB, $30M, SOFR+650bps) → Equity($40M, 목표 IRR 15~20%)의 순서로 지급된다.

손실 흡수는 이 순서의 역방향으로 작동한다. 포트폴리오에서 차입자가 디폴트하여 원금 손실이 발생하면, 에쿼티 트랜치가 첫 번째로 손실을 흡수하고, 에쿼티가 소진된 이후에야 Class E, Class D 순으로 위로 올라가며 손실이 전가된다. 이로 인해 AAA 트랜치는 포트폴리오 전체 원금의 15~20%가 소멸되기 전까지는 원금 손실이 발생하지 않으므로, 극히 낮은 부도 확률 하에서 낮은 이자율로 발행될 수 있다. 이것이 평균 B+/B 등급의 레버리지론 포트폴리오에서 AAA 채권이 탄생하는 메커니즘이다.

트랜칭의 경제적 합리성은 "다양한 투자자의 위험 선호를 매칭함으로써 전체 자금조달 비용을 낮출 수 있다"는 원리에 있다. 보험사·연기금은 규제 자본 효율을 위해 AAA 채권을 선호하고, 헤지펀드·BDC는 초과 수익을 위해 에쿼티 트랜치를 매수한다. CLO 매니저는 이 두 수요층을 동시에 충족시킴으로써 레버리지론 포트폴리오를 경쟁력 있는 비용으로 조달할 수 있다. 2024년 기준 미국 시장에서 발행된 CLO의 AAA 트랜치 평균 스프레드는 약 SOFR+140~150bps, 에쿼티 트랜치의 기대 수익률은 15~22% 수준이다.`,
        bodyEn: `Tranching is a financial engineering technique designed to simultaneously attract investor cohorts with different risk appetites from the same underlying asset pool. Consider a $500 million CLO: interest and principal cash flows generated by the loan pool are distributed via a waterfall, paid sequentially from the most senior tranche downward—Class A (AAA, $300M, SOFR+130bps) → Class B (AA, $50M, SOFR+180bps) → Class C (A, $40M, SOFR+230bps) → Class D (BBB, $40M, SOFR+350bps) → Class E (BB, $30M, SOFR+650bps) → Equity ($40M, target IRR 15-20%). Each tranche only receives cash flow after the tranche above it has been fully paid.

Loss absorption works in the reverse direction. When borrowers in the portfolio default and principal losses crystallize, the equity tranche absorbs first. Only after equity is fully eroded does loss migrate up to Class E, then Class D, and so on. As a result, the AAA tranche sustains no principal loss until roughly 15-20% of the total portfolio principal is wiped out—explaining why it can be issued at a low spread with a negligible default probability. This is the mechanism by which a portfolio of B+/B-rated leveraged loans gives birth to AAA-rated bonds.

The economic rationale for tranching rests on the principle that matching heterogeneous investor risk preferences reduces the aggregate cost of funding. Insurance companies and pension funds seek AAA paper for regulatory capital efficiency; hedge funds and BDCs buy equity tranches for excess return. By satisfying both simultaneously, the CLO manager funds a leveraged loan portfolio at a blended cost lower than any single-class issuance could achieve. As of 2024, AAA CLO tranche spreads in the U.S. market averaged approximately SOFR+140-150bps, while equity tranche expected returns ranged from 15% to 22% IRR depending on deal vintage and manager track record.`,
      },
      {
        heading: "신용등급과 수익률의 관계",
        headingEn: "Credit Ratings and the Yield-Risk Trade-Off",
        body: `신용평가사(S&P, Moody's, Fitch)는 각 트랜치의 등급을 결정할 때 해당 트랜치가 견딜 수 있는 포트폴리오 손실 수준(Credit Enhancement Level)을 핵심 지표로 활용한다. AAA 등급은 통상 포트폴리오 전체 원금의 35~40% 손실 발생 후에도 원금이 보전될 수 있어야 한다는 기준을 통과해야 하며, 이를 위해 선순위 아래 모든 트랜치의 원금 합산(Subordination)이 충분히 두꺼워야 한다. 신용평가사는 CDR(Constant Default Rate), Recovery Rate, Correlation 등 시나리오를 다중으로 적용하여 각 트랜치의 Expected Loss 및 PD(Probability of Default)를 산출하고, 이를 등급별 허용 기준과 비교한다.

스프레드와 등급의 관계는 트랜치가 내려갈수록 비선형적으로 확대된다. 2023년 미국 BSL(Broadly Syndicated Loan) CLO 기준으로 AAA는 SOFR+145bps, AA는 +185bps, A는 +230bps, BBB는 +360bps, BB는 +700bps, 에쿼티는 기대 IRR 18%였다. BBB-BB 구간에서 스프레드가 급격히 벌어지는 현상은 이 구간에서 손실 발생 확률이 기하급수적으로 높아지기 때문이다. 특히 Mezzanine 트랜치(BBB~BB)는 경기 침체 시 등급 강등(Downgrade)이 집중되는 구간으로, 신용주기 전환에 가장 민감하게 반응한다.

투자자 유형별로 선호 트랜치가 명확히 구분된다. AAA·AA 트랜치의 약 70~80%는 보험사·은행·머니마켓펀드가 매수하며, 이들은 바젤 III 위험가중치(AAA CLO에 대한 표준법 기준 20%)와 솔벤시 II 자본 요건을 고려하여 규제 자본 효율을 극대화한다. A~BBB 트랜치는 생명보험사와 신용펀드가, BB 트랜치는 하이일드펀드와 CLO 매니저 자체(Retention 목적)가, 에쿼티 트랜치는 헤지펀드·사모펀드·CLO 매니저의 Fee 재투자가 주로 흡수한다. 이러한 투자자 생태계가 안정적으로 작동할 때 CLO 시장은 레버리지론 시장의 핵심 자금 공급원이 된다.`,
        bodyEn: `Rating agencies—S&P, Moody's, and Fitch—determine tranche ratings based primarily on the credit enhancement level: the amount of portfolio losses the tranche can absorb before sustaining principal impairment. A AAA rating typically requires that the tranche survive a scenario in which 35-40% of total portfolio principal is lost, necessitating sufficient subordination (the combined principal of all junior tranches) below the AAA class. Rating agencies run multi-scenario analyses using CDR (constant default rate), recovery rate, and correlation assumptions to compute expected loss and probability of default for each tranche, then compare results against the threshold permitted for each rating category.

The spread-to-rating relationship expands non-linearly as you move down the capital stack. Using 2023 U.S. broadly syndicated loan (BSL) CLO data as a reference: AAA at SOFR+145bps, AA at +185bps, A at +230bps, BBB at +360bps, BB at +700bps, and equity targeting ~18% IRR. The sharp spread widening in the BBB-to-BB range reflects the near-exponential increase in loss probability at those subordination levels. The mezzanine tranche corridor (BBB-BB) is particularly sensitive to credit cycle turns: in economic downturns, rating agency downgrades concentrate in this band, forcing leveraged investors to sell and accelerating spread widening.

Investor preferences are sharply segmented by tranche. Approximately 70-80% of AAA and AA paper is absorbed by insurance companies, banks, and money market funds that optimize for regulatory capital efficiency—AAA CLOs carry a 20% risk-weight under the Basel III standardized approach, and Solvency II capital charges follow a similar hierarchy. A-to-BBB tranches are favored by life insurers and credit funds; BB tranches go to high-yield funds and CLO managers holding risk retention positions; equity tranches are primarily purchased by hedge funds, private equity, and CLO managers recycling management fees. When this investor ecosystem functions smoothly, the CLO market becomes the dominant liquidity provider to the leveraged loan market, funding over 60% of institutional leveraged loan issuance in peak years.`,
      },
      {
        heading: "CDO 재증권화: 트랜치 위의 트랜치",
        headingEn: "CDO Re-Securitization: Tranches on Tranches",
        body: `CDO(Collateralized Debt Obligation)는 ABS·CLO·RMBS 등 구조화 증권의 트랜치들을 다시 자산 풀로 편입하여 새로운 트랜치를 만드는 재증권화(Re-securitization) 구조다. 2000년대 중반 미국에서는 서브프라임 RMBS의 BBB/BBB- 트랜치들을 모아 ABS CDO를 조성했고, 이 ABS CDO의 BBB 트랜치를 다시 모아 CDO²(CDO-Squared)를 만들었다. 이론적으로는 분산투자 효과로 각 층위에서 새로운 신용보강이 발생하지만, 실제로는 기초자산(서브프라임 모기지)과의 상관관계가 극히 높았기 때문에 분산 효과가 전혀 없었다.

재증권화의 치명적 문제는 불투명성과 상관관계 위험이다. CDO²의 투자자가 실제 기초자산인 개별 모기지의 특성을 파악하려면 CDO² → ABS CDO → RMBS → 개별 모기지 순으로 최소 3단계를 거슬러 올라가야 한다. 이 정보 불투명성은 신용평가사 모델이 높은 분산 효과(낮은 상관관계 가정)를 전제로 AAA를 부여할 때 극적으로 증폭된다. Moody's와 S&P는 2004~2006년 ABS CDO에 AAA를 대량 부여했으나, 가정한 상관관계가 현실화된 2007년에는 이 AAA의 상당 부분이 수개월 내에 CCC 이하로 강등되었다.

금융위기 이후 CDO 재증권화 시장은 사실상 소멸하고 CLO가 구조화금융의 주력 상품으로 남았다. CLO는 CDO와 달리 기초자산이 직접 만든 레버리지론(First Lien Senior Secured Loan)으로 구성되어 상관관계 문제가 상대적으로 낮다. 또한 CLO 매니저가 어약(Covenant)을 통해 포트폴리오를 능동적으로 관리하며 Reinvestment Period(통상 4~5년) 동안 자산을 교체할 수 있다. 현재 미국 CLO 시장 잔액은 약 $1.1조(2024년 기준)로, 레버리지론 시장의 핵심 투자자 기반이자 재증권화의 교훈을 흡수한 구조화금융의 현재 표준이다.`,
        bodyEn: `A CDO (Collateralized Debt Obligation) is a re-securitization structure that assembles tranches of ABS, CLO, or RMBS securities into a new asset pool and issues fresh tranches against them. During the mid-2000s in the United States, the BBB and BBB- tranches of subprime RMBS were pooled into ABS CDOs, and those ABS CDO BBB tranches were in turn pooled into CDO-squareds (CDO²). In theory, diversification across CDO tranches from different deals should have generated new credit enhancement at each layer; in reality, correlation to the common underlying asset (subprime mortgages) was so high that no meaningful diversification existed.

The fatal flaws of re-securitization are opacity and correlation risk. For an investor in a CDO² to understand the actual underlying assets, they must trace back at least three layers: CDO² → ABS CDO → RMBS → individual mortgage. This informational opacity became catastrophic when combined with rating agency models that assumed low inter-asset correlation and generous diversification benefits in assigning AAA ratings. Moody's and S&P rated large volumes of ABS CDO tranches AAA between 2004 and 2006; when the assumed correlations proved wildly optimistic in 2007, many of these instruments were downgraded to CCC or below within months—a speed of ratings collapse without historical precedent.

Post-crisis, the CDO re-securitization market effectively disappeared, and CLOs emerged as the dominant structured finance product. Unlike CDOs, CLOs hold directly originated leveraged loans—predominantly first-lien, senior-secured—keeping correlation risk comparatively contained. CLO managers actively manage the portfolio under indenture covenants and can rotate assets during the reinvestment period (typically four to five years). The U.S. CLO market stands at approximately $1.1 trillion in outstanding balance as of 2024, representing the primary investor base for leveraged loans and the contemporary standard form of structured finance, incorporating the hard lessons of CDO-era re-securitization.`,
      },
    ],
    keyTerms: [
      {
        term: "선순위 트랜치 (Senior Tranche)",
        termEn: "Senior Tranche",
        definition:
          "구조화 증권에서 현금흐름을 가장 먼저 수취하고 손실을 가장 나중에 흡수하는 층위. 통상 AAA~AA 등급을 받으며, 아래의 모든 트랜치가 신용보강(Credit Support)을 제공한다.",
        definitionEn:
          "The highest-priority tranche in a structured security, receiving cash flows first and absorbing losses last. Typically rated AAA-AA, with all subordinate tranches providing credit support.",
      },
      {
        term: "중순위 트랜치 (Mezzanine Tranche)",
        termEn: "Mezzanine Tranche",
        definition:
          "선순위와 에쿼티 사이에 위치하는 층위(통상 AA~BBB). 신용주기 전환 시 등급 강등이 집중되는 구간이며, 스프레드 변동성이 가장 크다.",
        definitionEn:
          "Tranches positioned between the senior and equity layers, typically rated AA through BBB. This band experiences the greatest concentration of rating downgrades during credit cycle turns and exhibits the highest spread volatility.",
      },
      {
        term: "에쿼티 트랜치 (Equity Tranche)",
        termEn: "Equity Tranche",
        definition:
          "구조화 증권에서 손실을 가장 먼저 흡수하는 First Loss 포지션. 잔여 현금흐름을 모두 수취하는 대신 포트폴리오 손실의 직격탄을 받는다. CLO에서는 CLO 매니저가 일부를 보유하는 것이 관행(Risk Retention).",
        definitionEn:
          "The first-loss position in a structured security that absorbs portfolio losses before any other tranche. In exchange, it receives all residual cash flows. In CLOs, managers typically retain a portion of the equity as risk retention.",
      },
    ],
    relatedSlugs: ["structured-waterfall", "structured-overview", "structured-cdo"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "structured-waterfall",
        title: "캐시플로우 워터폴",
        titleEn: "Cash Flow Waterfall",
      },
    ],
  },
  {
    slug: "credit-enhancement",
    title: "신용보강 (Credit Enhancement)",
    titleEn: "Credit Enhancement",
    entryType: "term" as const,
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt:
      "구조화금융 증권의 신용등급을 높이기 위한 장치의 총칭. 내부 신용보강(초과담보, 후순위 구조, 현금 준비금)과 외부 신용보강(모노라인 보증, 신용장)으로 나뉘며, 신용평가사가 요구하는 보강 수준이 트랜치 두께와 발행 비용을 결정한다.",
    excerptEn:
      "The collective set of mechanisms used to improve the credit quality of structured finance securities. Divided into internal enhancements (overcollateralization, subordination, reserve accounts) and external enhancements (monoline wraps, letters of credit), with rating agency requirements determining tranche sizing and issuance cost.",
    readingMinutes: 5,
    tags: ["신용보강", "초과담보", "후순위구조", "모노라인", "ABS", "신용등급"],
    tagsEn: ["Credit Enhancement", "Overcollateralization", "Subordination", "Monoline", "ABS", "Credit Rating"],
    sections: [
      {
        heading: "내부 신용보강 방법론",
        headingEn: "Internal Credit Enhancement Methods",
        body: `내부 신용보강(Internal Credit Enhancement)은 거래 자체의 구조 내에서 신용 위험을 흡수하는 장치로, 외부 제3자의 신용에 의존하지 않아 구조적 안정성이 높다. 가장 널리 쓰이는 방법은 후순위화(Subordination)다. 선순위 트랜치 아래에 더 얇고 열후한 트랜치들을 두어, 포트폴리오 손실이 일정 수준에 달하기까지 선순위에 손실이 미치지 않도록 한다. 예를 들어 AAA 트랜치가 전체 자산의 75%를 차지하고 나머지 25%가 후순위 트랜치와 에쿼티로 구성된다면, 포트폴리오의 25%가 소멸되기 전까지 AAA는 원금 손실이 없다(25% Subordination 수준).

초과담보(Overcollateralization, OC)는 SPV에 편입된 자산 원금이 발행한 채권 원금보다 크도록 설계하는 방법이다. 가령 $110M 자산으로 $100M 채권을 발행하면 OC는 110%다. 초과스프레드(Excess Spread)는 자산 포트폴리오의 평균 이자율과 발행 채권의 평균 쿠폰 간 차이로, 이 차이가 수수료와 손실을 흡수하고 잔여분은 에쿼티로 귀속된다. CLO에서 초과스프레드는 통상 자산 수익률 7~8%에서 부채 비용 4~5%를 차감한 2~3%p 수준이며, 이는 손실 완충의 첫 번째 방어선이다. 현금 준비금(Cash Reserve Account)은 발행 초기에 현금을 적립하여 초기 포트폴리오 손실 또는 유동성 부족 시 사용하는 장치로, 자동차 ABS·신용카드 ABS에서 특히 많이 활용된다.

구조를 설계할 때 신용평가사는 각 내부 보강 방법에 대해 "주어진 등급을 유지하기 위해 필요한 최소 보강 수준(Required Credit Enhancement)"을 제시하며, 구조 설계자(Arranger)는 이 요구 수준을 충족하면서 발행 비용을 최소화하는 최적 자본 구조를 찾는다. 2024년 기준 미국 자동차 ABS에서 프라임 자산 기준 AAA 트랜치의 요구 서브오디네이션은 약 3~5%, 서브프라임 자산 기준으로는 20~30%로 자산 품질에 따라 큰 차이가 있다.`,
        bodyEn: `Internal credit enhancement encompasses mechanisms embedded within the transaction structure itself to absorb credit risk, without relying on the creditworthiness of any external third party—giving the deal structural self-sufficiency. The most widely used technique is subordination: positioning thinner, lower-priority tranches below the senior class so that portfolio losses must first erode all junior tranches before reaching the senior. For example, if the AAA tranche represents 75% of total assets and the remaining 25% consists of subordinate tranches and equity, the AAA sustains no principal loss until the portfolio loses 25% of its value—meaning the tranche has 25% subordination.

Overcollateralization (OC) involves structuring the SPV so that the par value of assets exceeds the par value of issued notes. Issuing $100M of notes against $110M of assets creates 110% OC. Excess spread is the difference between the portfolio's average asset yield and the blended coupon on issued notes; after fees and losses are absorbed, residual spread flows to equity. In CLOs, excess spread is typically 2-3 percentage points—asset yield of 7-8% minus liability cost of 4-5%—serving as the first line of loss defense before OC is drawn upon. Cash reserve accounts, funded at closing or through excess spread trapping, serve as a liquidity buffer during the early stages of the transaction or periods of elevated defaults, and are especially prevalent in auto ABS and credit card ABS structures.

When structuring a deal, rating agencies communicate the minimum required credit enhancement for each target rating, and the arranger's job is to satisfy those requirements at the lowest possible all-in issuance cost. As of 2024 in the U.S. auto ABS market, prime collateral requires roughly 3-5% subordination for AAA, while subprime collateral demands 20-30%—a range that reflects the dramatically different loss distribution assumptions applied to each asset quality tier.`,
      },
      {
        heading: "외부 신용보강과 2008년 위기",
        headingEn: "External Credit Enhancement and the 2008 Crisis",
        body: `외부 신용보강(External Credit Enhancement)은 제3의 신용 제공자(Third-Party Credit Provider)의 보증이나 약정을 통해 증권의 신용등급을 높이는 방식이다. 가장 대표적인 형태는 모노라인 보험(Monoline Insurance)으로, AMBAC, MBIA, FSA(현 Assured Guaranty) 등이 지방채·구조화증권의 원리금 지급을 보증함으로써 해당 증권에 AAA 등급을 부여받게 하는 '신용등급 래핑(Rating Wrap)' 서비스를 제공했다. 모노라인이 AAA를 유지하는 한, 피보증 증권도 자동으로 AAA를 유지하는 구조다. 이 밖에 은행의 신용장(Letter of Credit, L/C), 지급보증(Surety Bond), 그리고 2000년대 중반에는 CDS(신용부도스왑)를 활용한 합성 신용보강도 광범위하게 활용되었다.

2007~2008년 금융위기는 외부 신용보강의 근본적 취약성을 드러냈다. AMBAC와 MBIA는 CDO·MBS 포트폴리오에 대규모 보증을 제공했는데, 서브프라임 모기지 부실이 현실화되면서 예상 손실 규모가 자본 수준을 압도했다. AMBAC는 2008년 AAA 등급을 잃었으며, MBIA도 연이어 강등되었다. 모노라인의 등급 강등은 이들이 보증한 수천억 달러 규모의 지방채·구조화증권의 연쇄 강등을 촉발했다. 외부 신용보강이 제공자의 신용에 전적으로 의존하기 때문에, 제공자의 부실이 시스템 전반의 신용 충격으로 증폭되는 구조적 취약성이 확인된 것이다.

위기 이후 외부 신용보강 시장은 크게 위축되고, 구조화금융은 내부 신용보강 중심으로 재편되었다. 모노라인 Wrap이 붙은 ABS 신규 발행은 2010년대 이후 사실상 사라졌으며, 신용평가사들도 외부 보강에 의존하는 구조보다 내부 보강의 두께와 자산 품질에 방점을 두어 등급을 평가하는 방향으로 방법론을 전환했다. 다만 CLO 등 일부 거래에서 Swap Counterparty(이자율 스왑)가 사실상 부분적 외부 신용보강 역할을 하는 경우가 있어, 카운터파티 위험 관리는 여전히 구조 설계의 중요 요소다.`,
        bodyEn: `External credit enhancement elevates a security's rating by deploying the creditworthiness of a third-party provider through a guarantee or commitment. The archetypal form is monoline insurance, offered by firms such as AMBAC, MBIA, and FSA (now Assured Guaranty), which guaranteed timely principal and interest payment on municipal bonds and structured securities, effectively "wrapping" them with the insurer's AAA rating. For as long as the monoline maintained its AAA, every wrapped security automatically inherited that rating—a powerful but entirely derivative form of credit protection. Letters of credit from highly-rated banks, surety bonds, and—during the mid-2000s—synthetic credit enhancement via credit default swaps also played prominent roles in the external enhancement toolkit.

The 2007-2008 financial crisis exposed the systemic fragility of external credit enhancement. AMBAC and MBIA had written massive guarantees on CDO and MBS portfolios; as subprime mortgage losses materialized, the scale of expected claims overwhelmed their capital bases. AMBAC lost its AAA in 2008, followed closely by MBIA. Their downgrades cascaded into hundreds of billions of dollars of guaranteed municipal bonds and structured securities, all of which were mechanically downgraded along with their guarantors. The crisis validated what had previously been theoretical: because external credit enhancement derives entirely from the provider's credit, the provider's distress amplifies into a systemic credit shock across every security the provider has wrapped.

Post-crisis, the external enhancement market contracted sharply and structured finance pivoted decisively toward internal credit enhancement. New-issue ABS with monoline wraps essentially ceased after 2010, and rating agencies updated their methodologies to place primary weight on internal subordination depth and asset quality rather than third-party guarantees. In CLO structures, interest rate swap counterparty arrangements retain a quasi-external enhancement role, meaning counterparty risk management remains a live structural consideration—typically addressed through collateral posting triggers, counterparty rating downgrade replacement provisions, and threshold events specifying when the swap counterparty must be replaced.`,
      },
      {
        heading: "신용평가사의 신용보강 요구 기준",
        headingEn: "Rating Agency Credit Enhancement Requirements",
        body: `신용평가사가 각 트랜치 등급에 요구하는 신용보강 수준은 (1) 자산 풀의 신용 품질, (2) 자산 유형(모기지·자동차·CLO 등), (3) 법적 구조, (4) 서비서 리스크, (5) 지급 구조(순차상환 vs 비례상환)에 따라 산출된다. S&P의 Cash Flow Model과 Moody's의 CDOROM·WARF(Weighted Average Rating Factor) 방식은 접근법이 다르지만, 공통적으로 스트레스 시나리오하에서 각 트랜치가 손실을 흡수한 후 원금을 보전할 수 있는지를 검증한다. AAA 등급을 위한 스트레스 배수는 통상 3x~5x CDR(Constant Default Rate)이며, BB 등급 스트레스는 1.2x~1.5x 수준에서 설정된다.

CLO 구조에서는 신용보강이 두 가지 테스트로 실시간 모니터링된다. OC 테스트(Overcollateralization Test)는 포트폴리오 원금 대비 해당 트랜치 이상 발행 채권 원금의 비율이 최소 수준(OC Trigger) 이상을 유지하는지를 점검하고, IC 테스트(Interest Coverage Test)는 포트폴리오 이자 수입이 발행 채권의 이자 비용 대비 일정 배수 이상인지를 점검한다. 트리거가 위반되면 에쿼티로 향하던 현금흐름이 선순위 채권의 원금 상환으로 전환(Diversion)되어, 자연스럽게 선순위 신용보강이 회복된다. 2020년 COVID-19 충격 시 다수의 CLO에서 OC·IC 트리거 위반이 발생했으나, 대출 시장 회복으로 6~9개월 내 대부분 회복되었다.

신용보강 수준은 시장 사이클에 따라 바뀐다. 신용 사이클 고점—발행이 활발하고 투자자 수요가 강한 시기—에는 신용평가사들이 방법론을 완화하거나 발행인이 '등급쇼핑(Rating Shopping)'을 통해 최소 보강으로 원하는 등급을 받으려는 압력이 발생한다. 반대로 사이클 저점에는 요구 신용보강이 급등하여 발행이 크게 줄어든다. 2021~2022년 CLO 붐에서 일부 AA 트랜치의 서브오디네이션이 역대 최저 수준으로 낮아졌다가, 2022년 하반기 고금리 환경 진입 이후 다시 상승했다. 이 반복 패턴은 구조화금융에서 신용보강이 단순한 기술적 지표가 아닌 시장 심리와 규제 환경의 바로미터임을 보여준다.`,
        bodyEn: `The credit enhancement level a rating agency demands for each tranche rating is a function of five primary variables: (1) the credit quality of the asset pool, (2) asset type (mortgages, auto loans, CLOs, etc.), (3) legal structure, (4) servicer risk, and (5) payment structure (sequential pay vs. pro-rata). S&P's cash flow model and Moody's CDOROM/WARF (Weighted Average Rating Factor) approach differ in methodology but converge on the same core question: can each tranche withstand a stress scenario and still return principal to investors? AAA ratings typically require stress multiples of 3x-5x the base-case CDR, while BB stress cases are set at 1.2x-1.5x, reflecting the much lower loss tolerance at that rating level.

In CLO structures, credit enhancement is monitored in real time through two covenant tests. The OC test (overcollateralization test) checks whether the ratio of portfolio par value to outstanding notes for a given tranche and all senior tranches remains above a minimum threshold; the IC test (interest coverage test) checks whether portfolio interest income covers note interest expense by a required multiple. If either trigger is breached, cash flows that would otherwise have flowed to equity are diverted to repay senior note principal—mechanically rebuilding credit enhancement until the test passes again. During the COVID-19 shock of 2020, OC and IC trigger violations were widespread across the CLO universe, but the leveraged loan market recovery allowed most deals to cure within six to nine months.

Credit enhancement requirements are not static; they shift with the market cycle. At credit cycle peaks—when issuance volumes are high and investor demand is strong—rating agencies face pressure to relax criteria, and issuers engage in rating shopping to achieve target ratings with minimum subordination. At cycle troughs, required enhancement spikes and issuance volume contracts sharply. During the 2021-2022 CLO boom, subordination on some AA tranches reached historic lows; after the high-rate environment took hold in late 2022, required levels began climbing back. This recurring pattern underscores that credit enhancement is not merely a technical metric—it is a barometer of market sentiment, investor risk appetite, and the prevailing regulatory climate.`,
      },
    ],
    keyTerms: [
      {
        term: "초과담보 (Overcollateralization)",
        termEn: "Overcollateralization (OC)",
        definition:
          "SPV에 편입된 자산 원금이 발행한 채권 원금보다 큰 상태. OC 비율 = 자산 원금 / 채권 원금. 내부 신용보강의 핵심 요소이자 CLO OC 테스트의 기준 지표.",
        definitionEn:
          "The condition in which the par value of assets held by the SPV exceeds the par value of issued notes. OC ratio = asset par / note par. A core internal credit enhancement mechanism and the reference metric for CLO OC covenant tests.",
      },
      {
        term: "초과스프레드 (Excess Spread)",
        termEn: "Excess Spread",
        definition:
          "자산 포트폴리오 평균 이자율과 발행 채권 평균 쿠폰의 차이. 수수료·손실 흡수 후 잔여분은 에쿼티로 귀속된다. CLO에서 손실 완충의 첫 번째 방어선.",
        definitionEn:
          "The difference between the portfolio's average asset yield and the blended note coupon. Residual spread after fees and losses flows to equity. Serves as the first line of loss defense in CLO structures.",
      },
      {
        term: "모노라인 보험 (Monoline Insurance)",
        termEn: "Monoline Insurance",
        definition:
          "지방채 및 구조화증권의 원리금 지급을 보증하는 단일 업무 보험사. AMBAC·MBIA 등이 대표적. 2008년 위기에서 과도한 CDO 보증으로 인해 AAA 등급을 상실하며 외부 신용보강의 취약성을 노출했다.",
        definitionEn:
          "A single-line insurance company that guarantees principal and interest payments on municipal bonds and structured securities. AMBAC and MBIA are the canonical examples. Their AAA downgrades in 2008—triggered by excess CDO guarantee exposure—exposed the systemic fragility of external credit enhancement.",
      },
    ],
    relatedSlugs: ["structured-abs", "structured-waterfall", "overcollateralization"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "structured-abs",
        title: "ABS (자산유동화증권)",
        titleEn: "ABS (Asset-Backed Securities)",
      },
    ],
  },
  {
    slug: "overcollateralization",
    title: "초과 담보 (Overcollateralization, OC)",
    titleEn: "Overcollateralization (OC)",
    entryType: "term" as const,
    category: "structured",
    categoryLabel: "구조화",
    categoryLabelEn: "Structured",
    excerpt:
      "SPV에 편입된 자산 가치(원금)가 발행한 채권 원금보다 큰 상태. 예: $110M 자산으로 $100M 채권 발행 = OC 110%. OC 비율이 트리거 이하로 하락하면 현금흐름이 후순위에서 선순위 원금 상환으로 전환(디버팅)되어 신용보강을 자동 회복한다.",
    excerptEn:
      "The condition where the par value of assets in the SPV exceeds the par value of issued notes—e.g., $110M of assets backing $100M of notes equals 110% OC. When the OC ratio falls below its trigger level, cash flows are diverted from junior tranches to repay senior principal, automatically restoring credit enhancement.",
    readingMinutes: 5,
    tags: ["초과담보", "OC트리거", "CLO", "ABS", "신용보강", "워터폴", "디버팅"],
    tagsEn: ["Overcollateralization", "OC Trigger", "CLO", "ABS", "Credit Enhancement", "Waterfall", "Diversion"],
    sections: [
      {
        heading: "OC 계산과 OC 트리거",
        headingEn: "OC Calculation and OC Trigger",
        body: `초과담보 비율(OC Ratio)은 가장 단순하게는 "SPV 자산 원금 합계 / 해당 트랜치 이상의 채권 원금 합계 × 100"으로 계산된다. 예를 들어 CLO 포트폴리오 원금이 $500M이고 Class A(AAA) 채권 원금이 $300M이면, Class A OC = $500M / $300M = 166.7%다. Class A+B(AA 포함) OC = $500M / $350M = 142.9%로 계산되며, 에쿼티 트랜치에 가까울수록 OC 비율이 낮아진다. 각 트랜치에 대해 별도의 OC 트리거(Required OC)가 설정되며, 통상 실제 OC가 Required OC를 5~10%p 상회하는 수준에서 발행된다.

OC 트리거 위반의 실무 계산에서는 단순 원금이 아닌 Market Value 또는 Recovery-Adjusted Par가 사용되는 경우도 있다. CLO 인덴처에서는 디폴트 자산을 Recovery Rate(통상 70~75% 가정)로 할인한 가격으로 반영하거나, 시장가격 기준으로 평가된 자산을 포트폴리오 원금에서 차감하는 방식이 활용된다. 또한 CCC 이하 자산이 일정 비율(통상 7.5%)을 초과하면 해당 초과분은 par가 아닌 market price로 계산에 반영된다. 이러한 "헤어컷(Haircut)" 적용 규칙들은 인덴처마다 상이하며, 투자자가 CLO 신용보강을 정밀 분석할 때 반드시 검토해야 하는 조항들이다.

2020년 COVID-19 충격 시기에 OC 트리거 계산 메커니즘은 실전에서 시험받았다. 2020년 4~6월 레버리지론 시장에서 CCC 등급 하락이 급증하면서 다수의 CLO에서 CCC 초과분 헤어컷과 디폴트 자산 Recovery 할인이 동시에 적용되어 OC 수치가 급격히 하락했다. Fitch 보고서에 따르면 2020년 2분기에 약 15~20%의 CLO에서 주니어 트랜치(BBB 이하) OC 트리거 위반이 발생했다. 이로 인해 에쿼티 배당이 중단되고 현금흐름이 선순위 원금 상환으로 전환되면서, CLO 에쿼티 IRR이 급락했다가 2021년 포트폴리오 회복과 함께 반등하는 패턴이 관찰되었다.`,
        bodyEn: `The OC ratio is most straightforwardly computed as: (aggregate par value of SPV assets) / (aggregate par value of notes at and above the relevant tranche) × 100. For a CLO with a $500M portfolio and $300M of Class A (AAA) notes, Class A OC = $500M / $300M = 166.7%. Including Class B (AA, $50M) gives Class A/B OC = $500M / $350M = 142.9%. OC ratios compress as you move toward the equity tranche—the equity OC equals portfolio par divided by total notes par. Each tranche has its own required OC trigger set in the indenture, and at closing the actual OC typically exceeds the required level by 5-10 percentage points.

The practical calculation of OC for trigger purposes is more nuanced than simple par comparison. CLO indentures discount defaulted assets at an assumed recovery rate (typically 70-75%) rather than par, and impose haircuts on CCC-rated assets exceeding a threshold concentration (typically 7.5% of the portfolio)—where the excess CCC assets are carried at market price rather than par. These haircut mechanics vary across indentures and are a key focus of CLO structural analysis, because they determine how quickly OC deteriorates under stress scenarios. A deal with a generous CCC threshold and high assumed recovery rates will show slower OC erosion than one with tighter parameters, even with identical portfolio performance.

During the COVID-19 shock of 2020, OC trigger mechanics were stress-tested in real time. The surge in CCC downgrades from April through June 2020 triggered simultaneous CCC haircuts and defaulted-asset recovery discounts across the CLO universe, causing rapid OC compression. According to Fitch's analysis, roughly 15-20% of CLOs reported junior tranche (BBB and below) OC trigger failures during Q2 2020. Equity distributions were suspended and cash flows diverted to senior principal repayment, causing sharp declines in CLO equity IRR; as the leveraged loan market recovered through 2021, most deals cured their OC tests and equity distributions resumed, producing the characteristic "dip and recovery" pattern in CLO equity returns that vintage 2019-2020 equity investors experienced.`,
      },
      {
        heading: "OC 테스트 실패 시 메커니즘",
        headingEn: "The Mechanics of OC Test Failure",
        body: `OC 테스트 위반 시 작동하는 현금흐름 전환(Diversion) 메커니즘은 구조화금융에서 가장 우아하게 설계된 자동 안전장치 중 하나다. 일반적인 CLO 인덴처에서 정기 지급일(Payment Date, 통상 분기)에 워터폴은 다음 순서로 집행된다: (1) 선순위 수수료(관리보수·수탁보수), (2) Class A 이자, (3) Class A OC/IC 테스트 → 위반 시 Class A 원금 상환 우선, (4) Class B 이자, (5) Class B OC/IC 테스트, … (n) Class E(BB) 이자, (n+1) CLO 매니저 인센티브 수수료, (n+2) 에쿼티 배당. 즉, 각 트랜치의 OC·IC 테스트는 해당 트랜치 이자 지급 직후에 실시되며, 트리거 위반 시 그 아래 모든 지급이 중단되고 위반 트랜치(또는 선순위 트랜치) 원금 상환에 현금이 집중된다.

"Diversion"의 경제적 의미는 포트폴리오 가치가 회복될 수 없을 정도로 훼손되기 전에 선순위 채권자에게 원금을 조기 상환하여 손실을 한정하는 것이다. 에쿼티 투자자 입장에서는 배당이 중단되는 동시에 레버리지가 줄어들어(레버리지 효과 감소) IRR이 타격을 받는다. 반면 선순위 채권 투자자는 예상보다 빨리 원금을 회수하는 조기 상환(Premium Prepayment 없이) 효과를 누린다. CLO 매니저는 디버팅이 발생하면 인센티브 수수료(Incentive Fee, 통상 에쿼티 20% 성과보수)를 받지 못하기 때문에 OC 트리거 유지를 위해 디폴트 자산 매각, 포트폴리오 업그레이드(Rating Migration 관리), CCC 농도 관리 등 적극적 포트폴리오 액션을 취한다.

2021~2022년 CLO 붐 시기에 발행된 일부 거래에서는 "Pay-In-Kind(PIK)" 조항을 가진 론이 포트폴리오에 다수 편입되었는데, PIK 이자는 현금으로 수취되지 않아 IC 테스트(이자 수입 기반)에 부정적 영향을 미치는 반면, OC 테스트(원금 기반)에는 영향이 없다. 이러한 구조적 불일치를 활용한 "OC 패딩(OC Padding)" 전략—PIK론을 통해 명목 원금을 유지하면서 현금 수입이 감소하는 구조—은 신용평가사와 투자자들이 경계하는 관행으로, 최근 CLO 인덴처에서 PIK 농도 제한 조항이 강화되고 있다.`,
        bodyEn: `The cash flow diversion mechanism triggered by an OC test failure is one of structured finance's most elegantly designed automatic stabilizers. In a standard CLO indenture, the waterfall on each payment date (typically quarterly) runs as follows: (1) senior fees (management fee, trustee fee); (2) Class A interest; (3) Class A OC/IC test—if failed, Class A principal repayment takes priority over all remaining payments; (4) Class B interest; (5) Class B OC/IC test; … continuing through to Class E (BB) interest, CLO manager incentive fee, and finally equity distributions. Each tranche's OC and IC test is performed immediately after its interest payment; a trigger failure redirects all remaining cash to principal repayment of the breaching tranche (or senior tranches), stopping every subordinate payment in the waterfall.

The economic logic of diversion is to return principal to senior creditors before portfolio deterioration becomes unrecoverable, capping potential losses at a lower level. For equity investors, diversion is doubly painful: distributions stop simultaneously as leverage declines (reducing the equity multiplier effect), compressing expected IRR. Senior noteholders, by contrast, benefit from early principal repayment without any premium—essentially a voluntary deleveraging of the deal at no cost to them. CLO managers have strong incentives to prevent diversion because incentive fees (typically 20% of excess equity returns) are subordinated below equity distributions in the waterfall; accordingly, managers facing OC pressure typically sell defaulted or deteriorating assets, manage rating migration through loan substitution, and reduce CCC concentrations before the payment date test.

A notable structural nuance emerged from the 2021-2022 CLO boom: many deals included loans with pay-in-kind (PIK) provisions, where interest accrues to principal rather than being paid in cash. PIK interest reduces the cash interest income captured by the IC test but has no effect on the OC test (which is par-based). This asymmetry created incentives for "OC padding" strategies—assembling PIK-heavy portfolios that maintained nominal par while cash interest income eroded—a practice that rating agencies and investors have increasingly flagged, leading to tighter PIK concentration limits in recent CLO indentures.`,
      },
      {
        heading: "CLO·ABS별 OC 수준 비교",
        headingEn: "OC Levels Across CLO and ABS Asset Classes",
        body: `OC 수준은 자산 유형, 자산 품질, 시장 사이클에 따라 구조화 상품마다 크게 다르다. CLO(레버리지론 담보)에서는 통상 Class A(AAA) OC Trigger가 160~170%, Class B(AA) 포함 시 140~150%, Class D(BBB) 포함 시 115~120%, Class E(BB) 포함 시 108~112% 수준에서 설정된다. 이는 기초자산인 레버리지론의 평균 등급이 B+/B 수준으로 낮고, 경기 침체 시 디폴트율이 10~15%에 달할 수 있다는 역사적 통계를 반영한 것이다. 실제로 2009년 금융위기와 2020년 COVID 충격에서 미국 레버리지론 연간 디폴트율은 각각 약 10%와 4~5%를 기록했다.

자동차 ABS는 CLO 대비 훨씬 낮은 OC를 요구한다. 프라임 자동차론 ABS의 AAA 트랜치 OC는 통상 102~105% 수준으로, 이는 자동차론 포트폴리오의 역사적 연간 손실율이 0.5~1.5% 수준으로 낮기 때문이다. 반면 서브프라임 자동차 ABS에서는 AAA 트랜치 OC가 130~160%까지 올라가는데, 서브프라임 자동차론의 연간 손실율이 8~12%에 달하기 때문이다. 주택담보대출 MBS(Non-Agency)에서는 주택 가격과 LTV 분포에 따라 OC가 크게 달라지며, 서브프라임 빈티지에서는 OC가 사실상 의미 없이 낮게 설정되었다—2006~2007년 서브프라임 RMBS의 대량 기술적 부실은 초기 OC 설계 실패의 직접적 결과다.

CLO에서 OC는 Reinvestment Period(재투자 기간, 통상 발행 후 4~5년) 동안 동적으로 관리된다. 매니저는 손실이 발생한 자산을 유리한 시기에 매각하거나, 포트폴리오 내 낮은 가격 자산을 교체하여 원금 가중평균가격(WAP)을 관리할 수 있다. 우수한 CLO 매니저는 스트레스 시기에도 OC 트리거를 유지함으로써 에쿼티 배당을 지속—이를 통해 에쿼티 IRR을 방어—하는 역량을 보여준다. Bloomberg 데이터 기준 2015~2021년 빈티지 CLO의 에쿼티 중간 IRR은 약 13~18%로, 같은 기간 고수익채권(HY Bond) 인덱스 수익률 5~7%를 크게 상회했다. 이 성과의 상당 부분은 OC 트리거를 지키면서 레버리지를 유지한 매니저의 포트폴리오 관리 역량에서 비롯된다.`,
        bodyEn: `OC levels vary significantly across structured products, driven by asset type, collateral quality, and market cycle. In CLOs backed by leveraged loans, the Class A (AAA) OC trigger is typically set at 160-170%; including Class B (AA) notes, 140-150%; through Class D (BBB), 115-120%; and through Class E (BB), 108-112%. These levels reflect the historical loss experience of leveraged loan portfolios—average ratings of B+/B, with annual default rates that can reach 10-15% in severe downturns. In practice, U.S. leveraged loan annual default rates hit approximately 10% during the 2009 financial crisis and 4-5% during the 2020 COVID shock.

Auto ABS operates with dramatically lower OC requirements. AAA OC in prime auto loan ABS typically runs 102-105%, reflecting the asset class's historically benign annual net loss rates of 0.5-1.5%. Subprime auto ABS demands AAA OC of 130-160%, consistent with subprime auto loan annual loss rates of 8-12%. Non-agency residential MBS shows wide OC variation depending on LTV distribution and home price assumptions; for 2006-2007 subprime vintages, OC was set far too low relative to realized losses—a direct structural design failure that contributed to the mass technical defaults of those vintages when home prices fell.

In CLOs, OC is dynamically managed throughout the reinvestment period (typically four to five years post-closing). Managers can sell deteriorating assets during favorable windows, rotate out of discount-priced loans to protect weighted average portfolio price (WAP), and make reinvestment decisions that balance yield maximization against OC maintenance. Skilled CLO managers demonstrate their value precisely by sustaining OC triggers through stress periods—preserving equity distributions and protecting investor IRR. Based on Bloomberg data, CLO equity from 2015-2021 vintages generated median IRRs of approximately 13-18%, substantially outperforming the high-yield bond index returns of 5-7% over the same period. A meaningful share of that outperformance is attributable to active OC management that kept leverage in place and distributions flowing through the COVID dip and recovery cycle.`,
      },
    ],
    keyTerms: [
      {
        term: "OC 트리거 (OC Trigger)",
        termEn: "OC Trigger",
        definition:
          "CLO·ABS 인덴처에 설정된 OC 비율 최솟값. 실제 OC가 트리거 이하로 하락하면 Diversion이 발동되어 에쿼티 배당이 중단되고 선순위 원금 상환이 우선된다.",
        definitionEn:
          "The minimum OC ratio threshold specified in a CLO or ABS indenture. When actual OC falls below the trigger, the diversion mechanism activates: equity distributions are suspended and cash flows are redirected to senior principal repayment.",
      },
      {
        term: "IC 테스트 (IC Test)",
        termEn: "IC Test (Interest Coverage Test)",
        definition:
          "포트폴리오 이자 수입이 발행 채권 이자 비용 대비 일정 배수(통상 1.1x~1.3x) 이상인지를 점검하는 테스트. OC 테스트와 함께 CLO 워터폴의 핵심 신용보강 점검 장치.",
        definitionEn:
          "A test that verifies whether portfolio interest income covers note interest expense by a required multiple (typically 1.1x-1.3x). Together with the OC test, it forms the core credit enhancement monitoring mechanism in the CLO waterfall.",
      },
      {
        term: "Diversion (디버팅)",
        termEn: "Diversion",
        definition:
          "OC 또는 IC 트리거 위반 시 에쿼티·하위 트랜치로 향하던 현금흐름을 상위 트랜치 원금 상환으로 전환하는 메커니즘. 선순위 투자자 보호와 레버리지 자동 축소를 동시에 달성한다.",
        definitionEn:
          "The mechanism that redirects cash flows from equity and junior tranches to senior principal repayment upon an OC or IC trigger breach. Simultaneously protects senior investors and automatically deleverages the transaction.",
      },
    ],
    relatedSlugs: ["structured-waterfall", "structured-clo", "credit-enhancement"],
    appearsIn: [
      {
        type: "market-101" as const,
        slug: "structured-waterfall",
        title: "캐시플로우 워터폴",
        titleEn: "Cash Flow Waterfall",
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

/**
 * 같은 카테고리 내에서 prev/next 마켓 101 컨셉 반환.
 * ALL_MARKET101_CONCEPTS 배열 순서 기준 (=교육적 흐름순).
 * article 과 term 을 함께 포함한다.
 */
export function getMarket101Nav(slug: string): { prev: MarketConcept | null; next: MarketConcept | null } {
  const current = getMarket101ConceptBySlug(slug);
  if (!current) return { prev: null, next: null };
  const siblings = ALL_MARKET101_CONCEPTS.filter((c) => c.category === current.category);
  const idx = siblings.findIndex((c) => c.slug === slug);
  if (idx < 0) return { prev: null, next: null };
  return {
    prev: idx > 0 ? siblings[idx - 1] : null,
    next: idx < siblings.length - 1 ? siblings[idx + 1] : null,
  };
}
