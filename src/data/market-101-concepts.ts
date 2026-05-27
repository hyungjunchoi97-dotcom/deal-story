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
  { key: "st"         as const, label: "S&T",       labelEn: "S&T",                    dotColor: "bg-violet-500" },
  { key: "structure"  as const, label: "구조·규제",  labelEn: "Structure & Regulation", dotColor: "bg-orange-500" },
  { key: "sales"      as const, label: "세일즈",     labelEn: "Sales",                  dotColor: "bg-sky-500"    },
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
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
    sections: [], keyTerms: [],
    relatedSlugs: ["ecm-convertible", "ecm-warrant-bond", "ecm-overview", "ecm-buyback"],
    appearsIn: [],
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
