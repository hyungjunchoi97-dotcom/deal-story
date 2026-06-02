/**
 * KakaoBank KOSPI IPO, August 2021
 * Korea's first internet-only bank to list · IPO price ₩39,000 · ₩18.5T market cap
 * Day-1 +79% · ESOP 1+0.5-year lockup structure
 */
import type { DealData } from "@/lib/deal-data";

const deal: DealData = {
  slug: "kakaobank-kospi-ipo",
  title: "KakaoBank Lists on KOSPI at ₩39,000 and ₩18.5T Market Cap, Korea's First Digital Bank IPO",
  subtitle:
    "First internet-only bank to list on KOSPI · IPO price ₩39,000 (top of indicative range) · ₩18.5T market cap (₩33T at debut close) · ₩1.65T raised · P/B 3.1x re-rated Korean bank multiples · ESOP 1+0.5-year lockup that became the Korean IPO template",
  category: "ma",
  industry: "Banking / Internet-Only Bank / Fintech IPO",
  country: "South Korea",
  announcedAt: "2021-06-28",
  closedAt: "2021-08-06",
  announcedDisplay: "Jun 28, 2021 (Securities filing)",
  closedDisplay: "Aug 6, 2021 (KOSPI listing)",
  readingMinutes: 14,
  tags: [
    "KakaoBank",
    "KOSPI IPO",
    "Internet-Only Bank",
    "Digital Bank",
    "Korean IPO",
    "National Subscription",
    "ESOP Lockup",
    "P/B Re-rating",
    "Kakao",
    "Korea Investment Holdings",
    "KB Securities",
    "Credit Suisse",
  ],
  excerpt:
    "On August 6, 2021, KakaoBank listed on the KOSPI at an IPO price of ₩39,000 (top of the ₩33,000~39,000 indicative range), raising approximately ₩1.65 trillion and pricing the equity at a market capitalization of about ₩18.5 trillion. Shares closed the debut session at ₩69,800, up 79%, briefly pushing the market cap to roughly ₩33 trillion and overtaking KB Financial Group as the most valuable Korean banking stock on day one. The transaction was Korea's first digital bank listing on the main board, and at a P/B multiple of 3.1x it reset the Korean banking sector benchmark from the long-standing 0.4~0.6x box. Retail subscription cleared 168x and institutional book-building reached 1,733x, marking the start of a [national subscription] phenomenon. The ESOP design, a one-year base lockup plus an additional six-month bonus lockup, subsequently became the template for major Korean tech IPOs including Krafton and Toss.",

  acquirer: { initials: "PUB", bg: "bg-emerald-600", label: "Public Market (Retail · Institutional · Foreign)" },
  target: { initials: "KB", bg: "bg-yellow-500", label: "KakaoBank (KOSPI New Listing)" },

  background: [
    "[July 2017, the launch of Korea's first internet-only bank.] KakaoBank began operations on July 27, 2017 as the country's first mobile-only internet bank, launched in parallel with K Bank after the 2016 [Special Act on Internet-Only Banks] cleared the regulatory path. Ownership was anchored by a deliberately symmetric structure between Kakao (27.26%) and Korea Investment Holdings (27.26%), with KB Kookmin Bank at 9.35% plus strategic and financial LPs including Korea Post, eBay Korea, and Tencent's Skyblue. From inception, KakaoBank operated a fully branchless, mobile-only model, an entirely different cost base from Korea's incumbent universal banks.",
    "[2017 to 2020, 14 million customers from Korea's ~50 million population.] In its first month, KakaoBank opened more than three million new accounts, an unprecedented pace in Korean banking. By the end of 2020 it had reached roughly 14 million cumulative customers, equivalent to about one third of Korean adults. While K Bank cycled through suspension and resumption of operations due to capital shortfalls and shareholder-eligibility issues, KakaoBank reached operating breakeven in 2019 and crossed ₩20 trillion in loan balances in 2020, effectively running the Korean digital banking market alone.",
    "[June 28, 2021, the securities filing and the start of the ₩19 trillion valuation debate.] KakaoBank filed its securities registration with the Financial Services Commission on June 28, 2021, formally entering the KOSPI listing process. The indicative range was set at ₩33,000~39,000, implying a market cap of about ₩18.5 trillion at the top end, which would make KakaoBank the third largest Korean financial group ahead of Hana and Woori. The implied P/B of more than 3x against incumbent Korean bank P/B of 0.4~0.6x became the immediate flashpoint, traditional bank analysts opened a sustained valuation debate framed as [platform premium versus banking license earnings].",
    "[July 26-27, 2021, retail 168x and institutional 1,733x, the [national subscription].] The retail subscription book closed at roughly 168x, and the institutional book-building came in at about 1,733x, both among the largest in Korean IPO history. Retail deposit money mobilized for the offering reached approximately ₩58 trillion, with about 1.86 million individual subscription accounts. That works out to roughly 5~6% of Korean adults participating directly in the offering, a phenomenon the market began calling a [national subscription]. Following SK Bioscience and SK IE Technology earlier in 2021, KakaoBank marked the moment the Korean IPO market firmly entered the era of retail subscription money.",
    "[August 6, 2021, KOSPI debut, day-1 +79%, KB Financial overtaken.] Shares opened at ₩53,700, 37% above the IPO price, and closed the session at ₩69,800, up 79%, with market cap touching roughly ₩33 trillion. That number put KakaoBank ahead of KB Financial Group (~₩21 trillion) on its very first day of trading, a single digital bank surpassing 100-year-old Korean financial holding companies in one session. The ESOP lockup structure, one-year base plus six-month bonus, was unusual enough that it soon became the template for Krafton (2021) and Toss (2024) IPO employee-retention designs.",
  ],

  dealSummary: {
    dealValueDisplay: "₩39,000 × 65.45M shares ≈ ₩1.65T raised (₩18.5T market cap at IPO, ₩33T at debut close)",
    acquirerName: "Public Market (Retail 168x · Institutional 1,733x oversubscription)",
    targetName: "KakaoBank Corp., KOSPI new listing",
    announcedDisplay: "Jun 28, 2021 (Securities filing)",
    closedDisplay: "Aug 6, 2021 (KOSPI listing)",
    country: "South Korea",
  },

  executiveSummary: [
    "[Korea's first internet-only bank to list on KOSPI] On August 6, 2021 KakaoBank debuted on the KOSPI main board as the first Korean digital bank to reach public markets, directly testing the [banking license plus platform multiple] thesis against the incumbent four-financial-group structure.",
    "[IPO price ₩39,000, top of the indicative range] Indicative ₩33,000~39,000, priced at the top. Offering size ~₩1.65T, market cap ~₩18.5T at IPO, ranking third among Korean financials behind KB and Shinhan.",
    "[Day-1 +79%, KB Financial overtaken] Open ₩53,700 (+37%), close ₩69,800 (+79%). Market cap reached ~₩33T versus KB Financial's ~₩21T, a digital bank passing a century-old financial holding company in one session.",
    "[National subscription phenomenon] Retail subscription ~168x, institutional book-building ~1,733x. ~₩58T of subscription deposit money mobilized, ~1.86M individual subscription accounts. The Korean IPO market's pivot into the retail-money era.",
    "[P/B 3.1x re-rating of Korean banks] IPO P/B of about 3.1x, more than 5x the 0.4~0.6x of incumbent Korean banks. First market-priced test of the [banking license plus mobile platform] thesis, with the valuation debate active from day one.",
    "[Lockup structure] Co-largest shareholders Kakao and Korea Investment Holdings (27.26% each) on a 6-month lockup, ESOP on a [1-year base plus 6-month bonus] structure that became the standard for subsequent Korean tech IPOs.",
    "[Underwriter lineup] KB Securities as sole lead manager, with Credit Suisse and Citigroup Global Markets as joint bookrunners and JP Morgan as selling-group member, sized to capture foreign institutional demand.",
    "[Post-IPO trajectory] Sep 2021 peak ~₩89,000 (~₩42T market cap) → 2022 rate-hike and parent-absorption fears drove a slide to ~₩17,000 in Oct 2022 (-71% from peak) → 2023~2024 stabilized ₩25,000~30,000 (P/B ~2x). K Bank and Toss Bank IPOs were repeatedly pushed back 2022-2025 against this backdrop.",
  ],

  industryOverview: {
    body: "Korean banking entered 2021 stuck in a long-running P/B box of 0.4~0.6x for the top-four financial groups (KB, Shinhan, Hana, Woori). Low interest rates, slow growth, delayed digital transformation, and high branch overhead had locked Korean bank multiples at less than half the global average of 1.0~1.2x. Against that backdrop, the two internet-only banks launched in 2017, KakaoBank and K Bank, used a branchless mobile cost base to acquire customers rapidly, and by the early 2020s a new category, [digital bank as fintech platform], had crystallized for Korean capital markets. KakaoBank's IPO was the moment Korean capital markets first put a price on that category, and the start of the long-running debate over whether the [traditional bank versus digital bank] multiple gap is permanent.",
    metrics: [
      { label: "Korea Top-4 financial group avg P/B (Jul 2021)", value: "~0.45x",         sub: "KB, Shinhan, Hana, Woori average" },
      { label: "KakaoBank IPO P/B",                          value: "~3.1x",          sub: "At ₩39,000 IPO price" },
      { label: "Korean internet-only bank cumulative customers (2020)", value: "~14M",   sub: "KakaoBank standalone" },
      { label: "Korean IPO offering size (2021)",            value: "~₩19T",          sub: "Including KakaoBank, Krafton, SK Bioscience" },
    ],
    subBody:
      "Korean internet-only banks were launched in 2017 under the Special Act on Internet-Only Banks, with KakaoBank and K Bank splitting the market. KakaoBank's customer acquisition was overwhelmingly driven by its parent's KakaoTalk user base of ~45M, while K Bank repeatedly suspended and resumed operations during its early years on capital and shareholder-eligibility issues. KakaoBank's IPO sealed a first-mover advantage in reaching public capital markets and set the multiple benchmark that K Bank and Toss Bank would have to clear in subsequent IPO attempts.",
    players: [
      { name: "KakaoBank",                role: "Korea's first internet-only bank, KOSPI new-listing issuer" },
      { name: "Kakao",                    role: "Largest shareholder (27.26%), provides KakaoTalk user base and platform synergy" },
      { name: "Korea Investment Holdings", role: "Co-largest shareholder (27.26%), traditional finance partner" },
      { name: "KB Kookmin Bank",          role: "9.35% stake, only top-4 Korean bank invested, rival and LP simultaneously" },
      { name: "KB Securities",            role: "Sole lead manager, domestic subscription and price discovery" },
      { name: "Credit Suisse, Citi, JP Morgan", role: "Joint bookrunners and selling group, foreign institutional demand" },
      { name: "K Bank, Toss Bank",        role: "Subsequent Korean digital bank IPO candidates, benchmarked against this deal" },
    ],
  },

  companyOverview: {
    targetName: "KakaoBank Corp.",
    body: "KakaoBank was incorporated in January 2016 as Korea Kakao Bank Co., received its full banking license from the Financial Services Commission in April 2017, and began operations on July 27, 2017. As Korea's first mobile-only internet bank, it operates a fully branchless model, no branch staff, all customer contact through the mobile app and contact center. Core products include high-yield digital deposits, unsecured personal and housing loans, debit and payments, and platform brokerage of securities, insurance, and FX. The bank reached operating breakeven in 2020, and at IPO had ~14M cumulative customers, ~₩22T in loans, and ~₩25T in deposits, the clear number one in Korean digital banking.",
    metrics: [
      { label: "Incorporated",         value: "Jan 2016",       sub: "Korea Kakao Bank Co., Ltd." },
      { label: "Operations launched",  value: "Jul 27, 2017",    sub: "Korea's first internet-only bank" },
      { label: "KOSPI listed",         value: "Aug 6, 2021",     sub: "Ticker 323410" },
      { label: "FY2020 cumulative customers", value: "~14M",     sub: "~1/3 of Korean adults" },
    ],
    financials: [
      { year: "FY2017", revenue: 7050,   cogs: 6000,   grossProfit: 1050,  sga: 2200,  operatingIncome: -1200, ebitda: -800  },
      { year: "FY2018", revenue: 28140,  cogs: 22500,  grossProfit: 5640,  sga: 5800,  operatingIncome: -210,  ebitda: 200   },
      { year: "FY2019", revenue: 64550,  cogs: 52000,  grossProfit: 12550, sga: 11200, operatingIncome: 1300,  ebitda: 1900  },
      { year: "FY2020", revenue: 80420,  cogs: 64000,  grossProfit: 16420, sga: 14300, operatingIncome: 1200,  ebitda: 1800  },
      { year: "FY2021", revenue: 105430, cogs: 80000,  grossProfit: 25430, sga: 16800, operatingIncome: 2570,  ebitda: 3200  },
    ],
    financialsNote: "Unit: ₩million (separate K-IFRS basis). For a bank, revenue = interest income plus fee income, COGS = interest expense plus deposit-insurance premiums and related cost of funds. Source: KakaoBank annual reports and securities registration. FY2021 includes IPO-time estimates.",
    financialsCurrency: "₩",
    financialsUnit: "million",
  },

  dealStructure: {
    body: "The transaction was a mixed primary-and-secondary IPO. Total offering of approximately 65.45M shares (~16.5% of post-offering shares outstanding), with primary issuance of about 51.0M shares and secondary sale of about 14.45M shares. At ₩39,000 per share, total gross proceeds were approximately ₩1.65T, with the primary portion (~₩1.3T) flowing into the bank as new equity capital to strengthen BIS ratio and fund loan-book and AI expansion. Post-IPO ownership stood at Kakao 27.26%, Korea Investment Holdings 27.26%, KB Kookmin Bank 9.35%, ESOP ~0.6%, free float 16.5%, and other pre-IPO LPs ~19.03%. Co-largest shareholders Kakao and Korea Investment Holdings were on a 6-month lockup, and the ESOP was on the now-template [1-year base plus 6-month bonus] structure.",
    preOwnership: {
      nodes: [
        { id: "kakao_pre",  label: "Kakao",                       sub: "~31.6%", type: "acquirer" },
        { id: "kif_pre",    label: "Korea Investment Holdings",   sub: "~31.6%", type: "acquirer" },
        { id: "kb_pre",     label: "KB Kookmin Bank",             sub: "~9.9%",  type: "entity" },
        { id: "etc_pre",    label: "Pre-IPO LPs",                 sub: "Tencent, Korea Post, eBay, etc. ~26.9%", type: "fund" },
        { id: "kbank_pre",  label: "KakaoBank",                   sub: "Pre-IPO (~400M shares outstanding)", type: "target" },
      ],
      edges: [
        { from: "kakao_pre", to: "kbank_pre", label: "31.6% (co-largest)" },
        { from: "kif_pre",   to: "kbank_pre", label: "31.6% (co-largest)" },
        { from: "kb_pre",    to: "kbank_pre", label: "9.9%" },
        { from: "etc_pre",   to: "kbank_pre", label: "26.9% (other LPs)" },
      ],
    },
    postOwnership: {
      nodes: [
        { id: "kakao_post",  label: "Kakao",                       sub: "~27.26% (6-month lockup)", type: "acquirer" },
        { id: "kif_post",    label: "Korea Investment Holdings",    sub: "~27.26% (6-month lockup)", type: "acquirer" },
        { id: "kb_post",     label: "KB Kookmin Bank",             sub: "~9.35% (6-month lockup)",  type: "entity" },
        { id: "esop",        label: "ESOP (Employees)",            sub: "~0.6% (1yr + 6mo lockup)", type: "entity" },
        { id: "free_post",   label: "Free Float (Public Offering)", sub: "~16.5%",                  type: "public" },
        { id: "etc_post",    label: "Remaining Pre-IPO LPs",       sub: "~19.03%",                  type: "fund" },
        { id: "kbank_post",  label: "KakaoBank",                   sub: "KOSPI listed (323410)",    type: "target" },
      ],
      edges: [
        { from: "kakao_post",  to: "kbank_post", label: "27.26% (6-month lockup)" },
        { from: "kif_post",    to: "kbank_post", label: "27.26% (6-month lockup)" },
        { from: "kb_post",     to: "kbank_post", label: "9.35%" },
        { from: "esop",        to: "kbank_post", label: "~0.6% (1+0.5yr lockup)" },
        { from: "free_post",   to: "kbank_post", label: "16.5% (free float)" },
        { from: "etc_post",    to: "kbank_post", label: "19.03% (pre-IPO LPs)" },
      ],
    },
    keyTerms: [
      { label: "IPO price",                value: "₩39,000 / share (top of ₩33,000~39,000 range)",    accent: true },
      { label: "Offering size (shares)",    value: "~65.45M shares (~16.5% of post-offering)" },
      { label: "Offering size (gross)",     value: "~₩1.65T",                                          accent: true },
      { label: "Primary / secondary split", value: "~51.0M primary plus ~14.45M secondary" },
      { label: "IPO market cap",            value: "~₩18.5T (at IPO price)",                          accent: true },
      { label: "Debut close market cap",    value: "~₩33T (close ₩69,800)",                            accent: true },
      { label: "IPO P/B multiple",          value: "~3.1x (vs Korean bank 0.4~0.6x, >5x premium)",     accent: true },
      { label: "Retail subscription",       value: "~168x oversubscribed" },
      { label: "Institutional book-building", value: "~1,733x oversubscribed" },
      { label: "Subscription deposit money", value: "~₩58T mobilized" },
      { label: "Kakao lockup",              value: "6 months (mandatory holding)" },
      { label: "Korea Investment Holdings lockup", value: "6 months (mandatory holding)" },
      { label: "ESOP lockup",               value: "1-year base plus 6-month bonus (became Korean IPO template)", accent: true },
      { label: "Mandatory-holding institutional commitment", value: "~59.8% (foreign institutional 27.36%)" },
      { label: "Ticker",                    value: "KOSPI 323410" },
    ],
  },

  advisors: {
    body: "The deal was led by KB Securities as sole lead manager, with Credit Suisse and Citigroup Global Markets as joint bookrunners and JP Morgan in the selling syndicate. The KB Securities mandate carried an unresolved conflict of interest, since parent KB Financial Group itself held 9.35% of KakaoBank, but KB chose to run the mandate as a strategic [digital transition exposure] play. The three foreign houses split foreign institutional demand, the international roadshow, and the Rule 144A / Reg S tranche. On the issuer legal side, Kim and Chang ran Korean law while Cleary Gottlieb Steen and Hamilton ran U.S. securities-law work for the foreign tranche.",
    sides: [
      {
        side: "acquirer",
        sideLabel: "Underwriting Syndicate",
        initials: "UND",
        bg: "bg-emerald-600",
        advisors: [
          {
            firm: "KB Securities",
            role: "Sole Lead Manager",
            roleType: "financial",
            note: "Domestic subscription, price discovery, and allocation. Parent KB Financial Group's 9.35% KakaoBank stake created an unresolved conflict",
          },
          {
            firm: "Credit Suisse Securities (Korea)",
            role: "Joint Bookrunner",
            roleType: "financial",
            note: "Foreign institutional book-building, international roadshow, Reg S tranche",
          },
          {
            firm: "Citigroup Global Markets Securities (Citi)",
            role: "Joint Bookrunner",
            roleType: "financial",
            note: "Foreign institutional subscription, global fintech comparable valuation",
          },
          {
            firm: "JP Morgan",
            role: "Selling Group",
            roleType: "financial",
            note: "North American institutional subscription",
          },
        ],
      },
      {
        side: "target",
        sideLabel: "KakaoBank (Issuer) Legal and Advisory",
        initials: "KB",
        bg: "bg-yellow-500",
        advisors: [
          {
            firm: "Kim and Chang",
            role: "Issuer Legal (Korean law)",
            roleType: "legal",
            note: "Securities filing, disclosure, Capital Markets Act, and Banking Act review; conflicts review",
          },
          {
            firm: "Cleary Gottlieb Steen and Hamilton",
            role: "Issuer Legal (foreign law)",
            roleType: "legal",
            note: "Rule 144A and Reg S structuring for the foreign institutional tranche, U.S. SEC compliance",
          },
          {
            firm: "KakaoBank CFO office (in-house)",
            role: "Financial Advisory (in-house)",
            roleType: "financial",
            note: "Offer pricing, lockup design, and ESOP allocation managed in-house",
          },
        ],
      },
    ],
    disclaimer: "Note: Advisory information is drawn from the securities filing, public disclosures, and press reporting. A subset of selling-syndicate members has not been formally confirmed.",
  },

  valuation: {
    body: "The defining valuation marks are the IPO P/B of about 3.1x at ₩39,000 and the debut-close P/B of about 5.5x at ₩69,800. Against an average P/B of 0.45x for the Korean top-four financial groups, that is a 7~12x valuation premium, all of it attributable to [mobile-only cost base plus KakaoTalk's ~45M user base plus digital platform growth]. The five-year trajectory tracks three distinct phases, a Sep 2021 peak at ~₩89,000 (P/B ~7x), an Oct 2022 trough at ~₩17,000 (P/B ~1.2x), and a 2023~2024 trading range of ₩25,000~30,000 (P/B ~2x), a +128% to -71% to range-bound sequence.",
    rows: [
      { item: "Indicative range",                       val: "₩33,000 ~ ₩39,000",   note: "At securities filing" },
      { item: "Final IPO price",                        val: "₩39,000",             note: "Top of indicative range",          accent: true },
      { item: "Market cap at IPO",                      val: "~₩18.5T",             note: "IPO price × ~474M shares outstanding", accent: true },
      { item: "P/B at IPO",                             val: "~3.1x",               note: ">5x the Korean bank 0.4~0.6x range", accent: true },
      { item: "Debut session open",                     val: "₩53,700 (+37%)",       note: "Versus IPO price" },
      { item: "Debut session close",                    val: "₩69,800 (+79%)",       note: "One of the largest day-1 Korean IPO moves on record", accent: true },
      { item: "Debut close market cap",                 val: "~₩33T",                note: "Overtook KB Financial Group (~₩21T)",  accent: true },
      { item: "Sep 2021 peak",                          val: "~₩89,000",            note: "~₩42T market cap, P/B ~7x" },
      { item: "Oct 2022 trough",                        val: "~₩17,000",            note: "-71% from peak, P/B ~1.2x" },
      { item: "2024 Q4 range",                          val: "₩25,000 ~ ₩30,000",   note: "~₩12~14T market cap, P/B ~2x" },
      { item: "Gross proceeds raised",                  val: "~₩1.65T",              note: "~₩1.3T primary plus ~₩0.35T secondary", accent: true },
    ],
    disclaimer: "Note: Price, market-cap, and P/B figures are based on the securities filing, Korea Exchange disclosures, and contemporaneous press reporting. Some intraday levels are estimates from session-close benchmarks.",
  },

  rationale: {
    buyer: {
      title: "Why the Public Market Subscribed 168x — How This Became a [National Subscription]",
      initials: "PUB",
      bg: "bg-emerald-600",
      points: [
        "[First-ever digital bank category exposure on KOSPI] The KOSPI had no listed mobile-only bank before this transaction. For domestic and foreign investors alike, KakaoBank was the only way to gain pure-play digital-bank exposure in Korean equities.",
        "[KakaoTalk's ~45M user platform synergy] KakaoBank's 14M customers came largely through KakaoTalk's user funnel. Investors priced in further synergy potential with KakaoPay, Kakao Mobility, and Kakao Enterprise, and applied global digital-bank comparable multiples accordingly.",
        "[Peak of the 2021 Korean IPO retail wave] After the strong receptions of SK Bioscience (Mar 2021) and SK IE Technology (May 2021), Korean retail subscription money had moved decisively into the IPO market. KakaoBank caught the wave at its apex.",
        "[Scarcity premium despite valuation concerns] KakaoBank was effectively the only listed Korean digital bank, with K Bank and Toss Bank IPOs still pending. That scarcity sustained subscription demand even with the P/B 3.1x valuation under active debate.",
        "[Weak institutional mandatory-holding commitment] Mandatory-holding commitment was about 59.8% overall and 27.36% for foreign institutions, both below Korean IPO averages. The risk of early lockup-expiry supply was real, but retail subscription demand at 168x overwhelmed it for the debut session.",
      ],
    },
    seller: {
      title: "Why KakaoBank Chose KOSPI — Issuer and Pre-IPO LP Logic",
      initials: "KB",
      bg: "bg-yellow-500",
      points: [
        "[BIS capital ratio and loan-book expansion funding] The ~₩1.3T primary issuance flowed directly into shareholders' equity, simultaneously strengthening the BIS ratio and expanding regulatory lending capacity, securing capital-side leadership in Korean digital banking.",
        "[Exit valve from the symmetric Kakao / Korea Investment Holdings governance] The 27.26%-each co-largest structure at inception had slowed decision-making. Diluting 16.5% into the public float created longer-term governance flexibility.",
        "[Partial exit for pre-IPO LPs] Tencent, eBay Korea, Korea Post, and other inception-stage LPs received partial liquidity through the ~14.45M-share secondary tranche, with remaining stakes available for post-lockup sale.",
        "[Employee retention plus 1+0.5-year lockup achieved simultaneously] ESOP allocation plus the [1-year base plus 6-month bonus] lockup retained employees through the transition, suppressed early supply, and staggered employee wealth realization. The design became the template for Krafton and Toss subsequently.",
        "[First-mover market-price discovery for Korean digital banking] With K Bank and Toss Bank still pre-IPO, KakaoBank reached public markets first and pre-empted the Korean digital-bank P/B benchmark, creating real comparable pressure for any subsequent digital-bank IPO.",
      ],
    },
  },

  postDealAssessment: {
    asOfDate: "June 2026",
    body: "The IPO itself closed dramatically with the August 6, 2021 KOSPI debut. The five-year trajectory since is anything but linear, a Sep 2021 peak at ₩89,000 (P/B ~7x) during the post-IPO euphoria, a slide to ₩17,000 by Oct 2022 (-71% from peak) on rising rates, fintech platform discounts, and credible chatter that parent Kakao might absorb KakaoBank, then a 2023~2024 stabilization in the ₩25,000~30,000 range at P/B ~2x. The deal's footprint on Korean capital markets has outgrown the trade itself. K Bank and Toss Bank pushed back their IPOs repeatedly through 2022-2025, and the ESOP [1+0.5-year lockup] structure became the standard template for major Korean tech and large-cap IPOs including Krafton, Toss, and LG Energy Solution. As of June 2026, KakaoBank's market cap is around ₩14T versus KB Financial's roughly ₩32T, but its status as [the market-priced benchmark for Korean digital banking P/B] remains intact.",
    overallVerdict: "Clear success for the issuer, pre-IPO LPs, and ESOP members; a layered outcome for IPO subscribers depending on entry timing",
    positives: [
      "[Issuer] ~₩1.3T primary issuance strengthened BIS capital and funded loan-book expansion, locking in Korean digital banking leadership on the capital side.",
      "[Pre-IPO LPs] Secondary tranche plus post-lockup sales delivered multiple returns versus inception cost basis for Tencent, eBay Korea, and Korea Post.",
      "[ESOP] Post-lockup sale of employee shares delivered material wealth realization. The structure itself became the Korean tech-IPO template.",
      "[Korean capital markets] First market-priced reading of the digital banking category. The post-IPO P/B benchmark of ~2~3x for Korean digital banks crystallized the permanent gap versus traditional bank P/B ~0.5x.",
      "[National subscription phenomenon] ~1.86M retail subscription accounts and ~₩58T of subscription deposit money marked the moment Korean IPO retail money came of age.",
    ],
    risks: [
      "[Losses for peak-entry retail] Investors entering near the Sep 2021 peak of ₩89,000 saw -81% drawdowns by Oct 2022. Even the post-stabilization range of ₩25,000~30,000 is roughly -65% from peak.",
      "[K Bank and Toss Bank IPO delays] KakaoBank's P/B 3.1x became the reference and the burden for subsequent digital-bank IPOs. K Bank pushed back its IPO three times across 2022-2024, and Toss Bank's IPO timeline remained undefined into 2025.",
      "[Parent group risk] In 2023, Kakao's SM Entertainment share-price-manipulation probe and the founder's arrest transmitted directly into KakaoBank's stock, weakening the [digital bank without Kakao Group risk] narrative.",
      "[Platform-premium discount risk] Through the rate-hike cycle and the broader Korean fintech [platform multiple normalization], even P/B ~2x has drawn periodic calls of overvaluation against global digital-bank comparables.",
      "[Weak mandatory-holding aftermath] The ~59.8% overall (~27.36% foreign) institutional mandatory-holding commitment was below the Korean average. Supply at lockup expiry was one of the inputs to the 2022 drawdown.",
    ],
    editorNote:
      "The substantive significance of this transaction is not the [first Korean digital bank IPO] label but that a [digital category] entered Korea's 100-year banking P/B box of ~0.5x at a P/B of more than 3x for the first time. The market called this [platform premium] and produced a +79% debut, but five years later KakaoBank trades at roughly P/B 2x, locking in a permanent [traditional 0.5x versus digital 2x] gap. In parallel, the ESOP [1+0.5-year lockup] design became the Korean tech-IPO template, and the [national subscription] phenomenon marked the formal arrival of Korean retail money in IPO markets. Viewed as a single trade, KakaoBank's listing was volatile, day-1 +79%, then -71%, then range-bound, but viewed as a Korean capital-markets category event, it left a permanent mark as the first market-priced benchmark for digital banking. Reviewed June 2026.",
  },

  tombstone: {
    acquirerInitials: "PUB",
    acquirerBg: "bg-emerald-600",
    targetInitials: "KB",
    targetBg: "bg-yellow-500",
    acquirerName: "Public Market (Retail 168x · Institutional 1,733x Subscription)",
    targetName: "KakaoBank Corp. (KOSPI New Listing)",
    dealTitle: "First Digital Bank Listing on KOSPI, ₩18.5T Market Cap at IPO, Debut Day +79% to ₩33T",
    dealSize: "₩1.65T offering / ₩18.5T market cap at IPO",
    dealSizeUSD: "approx. USD 2.2B offering / USD 16B market cap",
    evEbitda: "P/B 3.1x at IPO",
    closeDate: "Aug 6, 2021",
  },

  sources: [
    { id: 1, text: "Korea Herald, [Newsmaker] Jackpot or bubble? KakaoBank IPO sizzles", url: "https://www.koreaherald.com/article/2666383" },
    { id: 2, text: "CNBC, IPO: Shares of South Korea's Kakao Bank jump nearly 80% on trading debut (Aug 6, 2021)", url: "https://www.cnbc.com/2021/08/06/ipo-shares-of-south-koreas-kakao-bank-surge-more-than-60percent-in-debut.html" },
    { id: 3, text: "Nikkei Asia, South Korea's Kakao Bank confirms IPO price at upper end of range", url: "https://asia.nikkei.com/Business/Markets/IPO/South-Korea-s-Kakao-Bank-confirms-IPO-price-at-upper-end-of-range" },
    { id: 4, text: "Nikkei Asia, Kakao Bank shares surge nearly 80% in Seoul market debut", url: "https://asia.nikkei.com/business/markets/ipo/kakao-bank-shares-surge-nearly-80-in-seoul-market-debut" },
    { id: 5, text: "Asia Times, KakaoBank becomes Korea's largest via IPO (Aug 2021)", url: "https://asiatimes.com/2021/08/kakaobank-becomes-koreas-largest-via-ipo/" },
    { id: 6, text: "Smartkarma, Kakao Bank IPO Lack of Lock-Up and MSCI / FTSE Index Implications", url: "https://www.smartkarma.com/insights/kakao-bank-ipo-lack-of-lock-up-and-msci-ftse-index-implications" },
    { id: 7, text: "Korea Times, Internet bank's IPO hastens banking groups' dividend payment", url: "https://www.koreatimes.co.kr/www/biz/2021/07/126_312606.html" },
    { id: 8, text: "Korea Herald, Kakao's bank stake at risk as legal pressures mount", url: "https://www.koreaherald.com/article/10566021" },
    { id: 9, text: "Korea Times, Shares of KakaoBank fluctuate after Kakao founder's arrest (Jan 2025)", url: "https://www.koreatimes.co.kr/www/biz/2025/01/602_379202.html" },
    { id: 10, text: "Newspim, K Bank IPO at P/B 2.56x criticized as still overvalued versus KakaoBank one-third level (Sep 20, 2024)", url: "https://www.newspim.com/news/view/20240920000386" },
    { id: 11, text: "Wikipedia, KakaoBank (operations launch, history, financials)", url: "https://en.wikipedia.org/wiki/KakaoBank" },
    { id: 12, text: "Korea DART, KakaoBank securities registration filing (Jun 28, 2021)", url: "https://dart.fss.or.kr" },
  ],

  seo: {
    title: "KakaoBank KOSPI IPO 2021, ₩39,000 Pricing and ₩18.5T Market Cap Explained",
    description:
      "KakaoBank listed on the KOSPI on Aug 6, 2021 as Korea's first internet-only bank, priced at ₩39,000 with a ₩18.5T market cap and a day-1 close at +79%, overtaking KB Financial Group at ₩33T. Retail 168x and institutional 1,733x subscription drove a national-subscription phenomenon, a P/B of 3.1x re-rated Korean bank multiples, and the ESOP 1+0.5-year lockup became the Korean IPO template. The first market-priced reading of Korea's digital-bank category.",
    keywords: [
      "KakaoBank IPO",
      "KakaoBank KOSPI listing",
      "Korean internet-only bank",
      "Korean digital bank IPO",
      "Korean IPO 2021",
      "national subscription Korea",
      "ESOP lockup Korea",
      "KakaoBank P/B",
      "KakaoBank market cap",
      "KB Securities KakaoBank",
      "Credit Suisse KakaoBank",
      "Korean fintech IPO",
    ],
  },

  concepts: [
    {
      term: "Internet-Only Bank License (Korean Digital Bank License)",
      description: "Banking-license category introduced by Korea's 2016 Special Act on Internet-Only Banks. Banks operate without physical branches, with all customer contact through mobile and online channels. KakaoBank and K Bank were the first generation in 2017, Toss Bank the second. This transaction was the first capital-markets price discovery for the category.",
    },
    {
      term: "KOSPI IPO Tranche Structure",
      description: "Standard Korean large-IPO structure that splits offering into a domestic retail tranche, a domestic institutional book-building tranche, a foreign institutional Rule 144A and Reg S tranche, and an ESOP allocation. Subscription multiples, mandatory-holding commitments, and lockups differ by tranche. This deal sat squarely in the four-tranche template.",
    },
    {
      term: "National Subscription (Gugmin-Ju Cheongyak)",
      description: "Phenomenon where a single IPO draws direct participation from a meaningful share (typically more than 5%) of all Korean adults. KakaoBank's ~1.86M retail subscription accounts and ~₩58T of subscription deposit money were among the largest in Korean IPO history. LG Energy Solution and Krafton subsequently repeated the pattern.",
    },
    {
      term: "ESOP Lockup (Employee Stock Ownership Plan Lockup)",
      description: "Restriction on employees selling shares allocated through the ESOP for a set period after IPO. KakaoBank introduced a [1-year base plus 6-month bonus] differentiated structure, designed to retain employees (the bonus is forfeited on early exit), suppress early supply at the one-year mark, and stagger employee wealth realization. The structure became the template for Krafton, Toss, and LG Energy Solution.",
    },
    {
      term: "P/B Multiple Re-rating",
      description: "Permanent shift in the market P/B benchmark for an industry triggered by a new category or business model. This deal pushed a [digital bank P/B 3x] into Korea's 0.4~0.6x traditional bank P/B box, locking in a permanent [traditional versus digital] gap that K Bank and Toss Bank IPO attempts have to navigate.",
    },
    {
      term: "Mobile-Only Banking",
      description: "Bank operating model with no branches or counters, where all customer interactions are handled through a mobile app and contact center. KakaoBank is Korea's first generation. The model cuts personnel and branch costs by an estimated 60~70% versus traditional banks, but concentrates customer-contact risk on a single digital channel.",
    },
    {
      term: "Customer Acquisition Cost (CAC)",
      description: "Marketing and operating cost to acquire one new customer. KakaoBank's CAC has been overwhelmingly low relative to traditional Korean banks because customers convert from KakaoTalk's ~45M user base at near-zero incremental marketing cost, enabling 14M cumulative customers within three years of launch.",
    },
    {
      term: "Parent Absorption Risk",
      description: "Risk that a listed subsidiary becomes subject to absorption-merger or full re-subsidiarization pressure during parent-group restructuring. In 2022, discussion of Kakao absorbing KakaoBank during a broader Kakao Group restructuring was a key driver of KakaoBank's -71% drawdown from peak to trough.",
    },
  ],

  faq: [
    {
      q: "Why did KakaoBank surge 79% on its KOSPI debut?",
      a: "Three factors compounded. First, the scarcity of being Korea's first listed digital bank, the only pure-play digital banking exposure available on KOSPI. Second, the timing aligned with the peak of the 2021 Korean IPO retail wave, following strong receptions for SK Bioscience and SK IE Technology that had moved retail money decisively into the IPO market. Third, even though institutional mandatory-holding commitment of ~59.8% was below the Korean average and signaled potential early supply, retail subscription demand at 168x simply overwhelmed it through the debut session. Shares opened at ₩53,700 (+37%) and closed at ₩69,800 (+79%), putting market cap at ~₩33T and surpassing KB Financial Group (~₩21T) in a single day.",
    },
    {
      q: "Was P/B 3.1x really overvalued? How does the five-year record look?",
      a: "In retrospect it was partially overvalued. The IPO P/B of ~3.1x sat at roughly 7x the Korean top-four average P/B of ~0.45x. At the Sep 2021 peak the multiple stretched to ~7x P/B, then normalized back to ~1.2x P/B at the Oct 2022 trough of ₩17,000. As of June 2026, KakaoBank trades at a market cap of ~₩14T and P/B of about 2x. The five-year conclusion, a permanent [traditional 0.5x versus digital 2x] gap has crystallized, but the IPO-time P/B of 3.1x was clearly above the subsequent five-year average.",
    },
    {
      q: "Why did the ESOP [1-year plus 6-month bonus] lockup become the Korean IPO template?",
      a: "Korean IPO ESOPs prior to this deal typically used a single 1-year lockup. KakaoBank introduced a differentiated [1-year base plus additional 6-month bonus] structure for three reasons, employee retention (breaking the bonus lockup costs the employee the incentive), suppression of supply at the one-year expiry, and staggered timing of employee wealth realization. The design was judged favorable to employees, issuer, and the broader market simultaneously, and was subsequently adopted across Krafton (Aug 2021), LG Energy Solution (Jan 2022), and Toss (2024), establishing it as the [Korean IPO template].",
    },
    {
      q: "Why did K Bank and Toss Bank IPOs keep getting pushed back after KakaoBank?",
      a: "Two factors. First, KakaoBank's IPO P/B of 3.1x became both the reference and the burden for subsequent digital-bank IPOs. When KakaoBank slid to P/B ~1.2x at its 2022 trough, the market pushed subsequent digital-bank candidates to price below that level. K Bank delayed its IPO three times across 2022-2024, and its Sep 2024 attempt at P/B ~2.56x (about one-third of KakaoBank's IPO P/B) still drew overvaluation criticism. Second, the 2022 rate-hike cycle combined with the broader Korean fintech [platform discount] made the digital-bank category structurally more conservative in market pricing. Toss Bank's IPO timing remained undefined into 2025.",
    },
    {
      q: "What does [national subscription] mean?",
      a: "It refers to a single IPO drawing direct participation from a meaningful fraction of all Korean adults. KakaoBank's IPO drew roughly 1.86M individual subscription accounts and mobilized about ₩58T of subscription deposit money, with roughly 5~6% of Korean adults participating directly, one of the largest such events in Korean IPO history. LG Energy Solution (Jan 2022, ~₩114T of subscription deposit money) and Krafton (Aug 2021) repeated the pattern. The phenomenon marked the formal arrival of Korean retail money in the IPO market and, simultaneously, introduced political risk into IPO design, since meaningful retail losses now produce real public reactions.",
    },
    {
      q: "What permanent marks did this IPO leave on Korean capital markets?",
      a: "Three are substantive. First, the market-priced benchmark for Korean digital bank P/B. The permanent gap of ~0.5x traditional bank versus ~2x digital bank has anchored every K Bank and Toss Bank IPO valuation discussion since. Second, the ESOP [1+0.5-year lockup] structure has become the Korean IPO template across subsequent major listings including Krafton, LG Energy Solution, and Toss. Third, the [national subscription] phenomenon marked the moment Korean retail money entered the IPO market at scale, with Korean IPO regulation and allocation rules subsequently tilting toward retail-first norms.",
    },
  ],
};

export default deal;
