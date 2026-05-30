"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ALL_DEALS } from "@/data/deals";
import { ALL_DEALS_EN } from "@/data/deals/en";
import { ALL_MARKET101_CONCEPTS } from "@/data/market-101-concepts";

// ── 타입 ────────────────────────────────────────────────────────────────────
type Lang = "ko" | "en";

type ConceptItem = {
  slug: string;
  term: string;
  tagline: string;
  category: string;
  published: boolean;
  /** 'deal' = /deal-101/[slug], 'market' = /market-101/[slug]. 기본값 'deal' */
  kind?: "deal" | "market";
  /** Market 101 한정 — 'article' 은 챕터, 'term' 은 용어집. Deal 101 entries 는 모두 article 취급. */
  entryType?: "article" | "term";
};

// ── KO 개념 카탈로그 ──────────────────────────────────────────────────────────
// 카테고리: M&A 시리즈 · Valuation 시리즈 · FDD 시리즈 · Modelling 시리즈 · LBO 시리즈 · 기타
// LBO 시리즈만 챕터 형태로 유지. 나머지 신규 4개 시리즈는 비어있는 상태로 (Coming Soon).
// 기존 27개 글은 "기타"로 통합 — 용어집/참고용 역할.
const KO_CONCEPT_CATALOG: ConceptItem[] = [
  // LBO 시리즈 — 기존 4개 챕터 유지 (이미 시리즈 구조)
  { slug: "lbo-overview",          term: "LBO 101 Ch.0 — LBO의 본질",           tagline: "레버리지로 기업을 사는 수학: 수익 증폭 메커니즘, 7가지 타겟 기준, GP/LP Carry Waterfall, Blackstone/Hilton·TXU 케이스",        category: "LBO 시리즈", published: true  },
  { slug: "lbo-capital-structure", term: "LBO 101 Ch.1 — 자본구조 완전 해부",   tagline: "TLA·TLB·Senior Notes·Mezz·PIK Toggle·Equity — 부채 피라미드, Covenant-Lite, DSCR, Hilton 2007 실제 구조",                  category: "LBO 시리즈", published: true  },
  { slug: "lbo-returns",           term: "LBO 101 Ch.2 — 리턴 분석",           tagline: "MOIC·IRR 충돌 시나리오, J-커브, 가치창출 3대 드라이버(EBITDA·멀티플·부채상환), Vintage Year 효과",                            category: "LBO 시리즈", published: true  },
  { slug: "lbo-deal-process",      term: "LBO 101 Ch.3 — 딜 프로세스 & 리스크", tagline: "6단계 딜 타임라인, Sources & Uses, Maturity Wall, TXU·Toys'R'Us·Caesars 실패 / Alliance Boots 성공 해부",                   category: "LBO 시리즈", published: true  },

  // M&A 시리즈 — 전과정 흐름 + 이해관계자 + 유명 뱅커 케이스
  { slug: "ma-ch01-overview",      term: "M&A 101 Ch.1 — 전과정 흐름 (6개월의 여정)", tagline: "M&A는 보기보다 단순한 흐름이다 — 9단계 타임라인 · 5개 주체 병렬 워크스트림 · 진짜 어려운 4지점",                                                  category: "M&A 시리즈", published: true  },
  { slug: "ma-ch02-stakeholders",  term: "M&A 101 Ch.2 — 이해관계자 도감 (누가 무엇을 하는가)", tagline: "한 딜에 평균 8개 firm — IB · 회계 FAS · 컨설팅 · 법무 · Lender + 클라이언트. Deliverable · 등장 시점 · IB와의 인터페이스 · risk",   category: "M&A 시리즈", published: true  },
  { slug: "ma-ch03-fdd-case",      term: "M&A 101 Ch.3 — FDD 실랑이: 1회성 vs 반복적 (Wasserstein × RJR + WeWork)", tagline: "Adjusted EBITDA가 만들어진 순간 (Wasserstein × RJR Nabisco 1988) + 어디서 fiction이 됐나 (WeWork Community Adjusted EBITDA 2019)", category: "M&A 시리즈", published: true  },
  { slug: "ma-ch04-valuation-case", term: "M&A 101 Ch.4 — Valuation 가정의 게임 (Disney×Pixar + AOL×Time Warner)", tagline: "Iger가 DCF $5B을 $7.4B narrative로 정당화 (Disney×Pixar 2006) + 가정이 깨졌을 때 $165B→$3B (AOL×Time Warner 2000)",        category: "M&A 시리즈", published: true  },
  { slug: "ma-ch05-orchestration-case", term: "M&A 101 Ch.5 — IB Lead 오케스트레이션 (Rohatyn × NYC + Bayer × Monsanto)", tagline: "Felix Rohatyn × NYC bailout (1975) orchestration archetype + Bayer × Monsanto (2016) operational 성공 · 전략적 synthesis 실패 → $60B 가치 파괴", category: "M&A 시리즈", published: true  },
  { slug: "ma-ch06-closing-case",  term: "M&A 101 Ch.6 — 가격 협상 + 클로징 막판 (Twitter × Musk + Adobe × Figma)", tagline: "Twitter SPA의 specific performance가 $44B 사수 (2022) + Adobe × Figma regulatory가 deal 깨고 $1B break fee (2023). M&A 시리즈 마무리",                     category: "M&A 시리즈", published: true  },

  // Valuation 시리즈 — DCF·WACC·Terminal Value 중심 (Modelling 시리즈와 상호 cross-link)

  // Modelling 시리즈 — Excel workbook 아키텍처 (Valuation 시리즈와 상호 cross-link)

  // FDD 시리즈 — Big 4 Transaction Services 표준 워크플로우 (한국·미국·글로벌 dual case)

  // 기타 — 기존 27개 글 통합 (밸류·딜구조·실사·규제·전략)
  { slug: "ev-ebitda",            term: "EV/EBITDA 멀티플",                    tagline: "M&A 가격 협상의 출발점 — 기업가치를 영업 현금창출력으로 나눈 핵심 지표",                                                      category: "기타", published: true  },
  { slug: "adjusted-ebitda",      term: "Adjusted EBITDA — 조정의 전쟁",       tagline: "EV = Multiple × EBITDA — EBITDA 조정이 곱셈으로 매각가에 증폭된다. 1회성 판정 기준과 이해관계자 충돌 지도",                     category: "기타", published: true  },
  { slug: "synergy",              term: "시너지 (Synergy)",                     tagline: "M&A 프리미엄의 근거 — Cost Synergy vs Revenue Synergy, 그리고 왜 70%의 M&A가 시너지를 달성 못하는가",                         category: "기타", published: true  },
  { slug: "acquisition-premium",  term: "인수 프리미엄",                        tagline: "왜 시장가보다 30~40% 더 내는가 — 시너지·경영권·희소성이 만드는 프리미엄의 원천",                                               category: "기타", published: true  },
  { slug: "ev-sales",             term: "EV/Sales 멀티플",                     tagline: "EBITDA 적자 성장기 기업을 평가할 때 쓰는 매출 기반 밸류에이션 — Slack 26x, Figma 50x의 근거",                                  category: "기타", published: true  },
  { slug: "arr-multiple",         term: "ARR 멀티플",                          tagline: "SaaS 기업 전용 — 연간반복매출 대비 기업가치 배수와 버블·조정 사이클",                                                           category: "기타", published: true  },
  { slug: "saas-valuation",       term: "SaaS 밸류에이션",                      tagline: "ARR·NRR·Rule of 40 — 구독 소프트웨어 기업을 완전히 다른 방식으로 평가하는 이유",                                               category: "기타", published: true  },
  { slug: "ma-process",           term: "M&A 프로세스 완전 정리",               tagline: "전략 수립부터 클로징까지 6단계 — 이해관계자·핵심 문서·딜이 성공하고 실패하는 이유",                                             category: "기타", published: true  },
  { slug: "lbo",                  term: "LBO (레버리지 바이아웃)",               tagline: "타깃의 현금흐름을 담보로 차입해 에쿼티 투입을 최소화하는 PE 핵심 전략 — KKR의 RJR 나비스코부터 현대 PE까지",                     category: "기타", published: true  },
  { slug: "tender-offer",         term: "공개매수 (Tender Offer)",              tagline: "이사회를 건너뛰고 주주에게 직접 매수 제안 — 머스크·트위터부터 방어 전략까지",                                                    category: "기타", published: true  },
  { slug: "spinoff",              term: "스핀오프 (Spin-off)",                  tagline: "사업부를 독립 법인으로 분리해 숨겨진 가치를 꺼내는 전략 — PayPal, GE 3분할",                                                    category: "기타", published: true  },
  { slug: "reverse-morris-trust", term: "Reverse Morris Trust",                tagline: "스핀오프 후 합병으로 수십억 달러 세금을 절감하는 구조 — AT&T·WarnerMedia 사례",                                                  category: "기타", published: true  },
  { slug: "stock-vs-asset-deal",  term: "주식 인수 vs 자산 인수",               tagline: "같은 회사를 인수해도 구조 하나로 세금·부채·리스크가 달라진다 — Stock Deal vs Asset Deal 결정 기준",                             category: "기타", published: true  },
  { slug: "pmi",                  term: "PMI (인수 후 통합)",                   tagline: "딜이 끝난 뒤 진짜 전쟁 — 조직·IT·문화 통합 실패가 M&A 가치를 갉아먹는 이유",                                                    category: "기타", published: true  },
  { slug: "ipo-vs-ma-exit",       term: "IPO vs M&A 엑싯",                     tagline: "PE·VC 포트폴리오 매각의 두 갈래 — 상장과 전략적 매각 중 어떤 선택이 더 유리한가",                                               category: "기타", published: true  },
  { slug: "break-fee",            term: "Break-up Fee",                        tagline: "딜 파기 시 일방이 지급하는 위약금 — 딜 완결 의지를 나타내는 신호",                                                               category: "기타", published: true  },
  { slug: "mac-clause",           term: "MAC 조항",                            tagline: "서명 후 대상 기업에 중대한 부정적 변화 발생 시 인수자가 계약을 파기할 수 있는 조항",                                               category: "기타", published: true  },
  { slug: "antitrust",            term: "반독점 규제 (Antitrust)",              tagline: "M&A가 시장 경쟁을 해치는지 각국 경쟁 당국이 심사하는 절차 — Adobe×Figma 파국의 진짜 이유",                                      category: "기타", published: true  },
  { slug: "regulatory-risk",      term: "M&A 규제 리스크",                     tagline: "반독점·안보심사·섹터 규제까지 — 딜을 막는 5가지 보이지 않는 벽과 대응 전략",                                                      category: "기타", published: true  },
  { slug: "fdd",                  term: "재무 실사 (FDD)",                     tagline: "재무제표 이면을 파헤치는 실사 — 정상화 EBITDA·운전자본·잠재부채를 검증하는 방법론",                                               category: "기타", published: true  },
  { slug: "cdd",                  term: "상업 실사 (CDD)",                     tagline: "시장·고객·경쟁 구도를 검증해 성장 가정의 현실성을 따지는 실사",                                                                   category: "기타", published: true  },
  { slug: "ldd",                  term: "법무 실사 (LDD)",                     tagline: "계약·소송·지식재산·규제 리스크를 발굴해 딜 파기 또는 가격 조정의 근거를 만드는 실사",                                             category: "기타", published: true  },
  { slug: "strategic-ma",         term: "전략적 M&A",                         tagline: "재무 수익이 아닌 시장 지위·기술·인재 확보 — Meta×Instagram $1B가 왜 역대 최고의 딜인가",                                          category: "기타", published: true  },
  { slug: "vertical-integration", term: "수직 통합",                           tagline: "공급망을 직접 소유해 원가·품질·경쟁을 통제하는 전략 — Amazon·Apple이 왜 모든 것을 만드는가",                                      category: "기타", published: true  },
  { slug: "subscription-economy", term: "구독 경제",                           tagline: "일회성 판매에서 ARR로 — Adobe가 $10B에서 $330B이 된 구독 전환의 경제학",                                                         category: "기타", published: true  },
  { slug: "platform-strategy",    term: "플랫폼 전략",                         tagline: "네트워크 효과가 만드는 M&A 프리미엄 — Google×YouTube, Microsoft×LinkedIn의 공통점",                                             category: "기타", published: true  },
  { slug: "competitive-moat",     term: "경쟁 해자",                           tagline: "버핏의 해자 개념으로 보는 M&A 멀티플 — 네트워크 효과·전환 비용·브랜드·규모의 경제",                                              category: "기타", published: true  },
];

// ── EN 개념 카탈로그 ──────────────────────────────────────────────────────────
// Categories: M&A Series · Valuation Series · FDD Series · Modelling Series · LBO Series · Other
// Only LBO Series keeps chapter format. New 4 series start empty (Coming Soon).
// All 27 legacy concepts move to "Other" — function as glossary/reference.
const EN_CONCEPT_CATALOG: ConceptItem[] = [
  // LBO Series — keep existing 4 chapters
  { slug: "lbo-overview",          term: "LBO 101 Ch.0 — The Essence of LBO",       tagline: "The math of buying companies with leverage: return mechanics, target criteria, GP/LP Carry Waterfall, Blackstone/Hilton & TXU",  category: "LBO Series", published: true },
  { slug: "lbo-capital-structure", term: "LBO 101 Ch.1 — Capital Structure",        tagline: "TLA, TLB, Senior Notes, Mezz, PIK Toggle, Equity — the debt pyramid, Covenant-Lite, DSCR, Hilton 2007 real structure",         category: "LBO Series", published: true },
  { slug: "lbo-returns",           term: "LBO 101 Ch.2 — Return Analysis",          tagline: "MOIC vs IRR conflict scenarios, the J-curve, three value drivers (EBITDA, multiple, paydown), Vintage Year effects",            category: "LBO Series", published: true },
  { slug: "lbo-deal-process",      term: "LBO 101 Ch.3 — Deal Process & Risks",     tagline: "Six-phase timeline, Sources & Uses, Maturity Wall, TXU/Toys'R'Us/Caesars failures vs Alliance Boots success",                    category: "LBO Series", published: true },

  // M&A Series — lifecycle + stakeholders + banker case studies
  { slug: "ma-ch01-overview",      term: "M&A 101 Ch.1 — The Lifecycle (6-month journey)", tagline: "M&A is more linear than it looks — 9-stage timeline · 5 parallel workstreams · the 4 places where it actually gets hard",                                  category: "M&A Series", published: true },
  { slug: "ma-ch02-stakeholders",  term: "M&A 101 Ch.2 — The Stakeholder Map (who does what)", tagline: "An average deal runs ~8 firms — IB · accounting FAS · consultants · law firm · lenders + client. Deliverable · timing · interface with IB · risk",   category: "M&A Series", published: true },
  { slug: "ma-ch03-fdd-case",      term: "M&A 101 Ch.3 — The FDD Fight: one-time vs recurring (Wasserstein × RJR + WeWork)", tagline: "When Adjusted EBITDA was effectively invented (Wasserstein × RJR Nabisco 1988) + where it crossed into fiction (WeWork Community Adjusted EBITDA 2019)", category: "M&A Series", published: true },
  { slug: "ma-ch04-valuation-case", term: "M&A 101 Ch.4 — Valuation: the Assumptions Game (Disney×Pixar + AOL×Time Warner)", tagline: "Iger turned a $5B DCF into a $7.4B narrative (Disney×Pixar 2006) + what assumption collapse looks like at $165B→$3B (AOL×Time Warner 2000)",      category: "M&A Series", published: true },
  { slug: "ma-ch05-orchestration-case", term: "M&A 101 Ch.5 — IB Lead Orchestration (Rohatyn × NYC + Bayer × Monsanto)", tagline: "Felix Rohatyn × NYC bailout (1975) — the orchestration archetype + Bayer × Monsanto (2016) operationally clean but strategically broken → $60B value destruction", category: "M&A Series", published: true },
  { slug: "ma-ch06-closing-case",  term: "M&A 101 Ch.6 — Final Negotiation + Closing (Twitter × Musk + Adobe × Figma)", tagline: "Twitter SPA's specific performance defended $44B (2022) + Adobe × Figma killed by regulators with a $1B break fee (2023). The series wrap",                category: "M&A Series", published: true },

  // Valuation Series — DCF / WACC / Terminal Value (cross-linked with Modelling Series)

  // Modelling Series — Excel workbook architecture (cross-linked with Valuation Series)

  // FDD Series — Big 4 Transaction Services standard workflow (US/Korea/global dual cases)

  // Other — 27 legacy concepts consolidated
  { slug: "ev-ebitda",            term: "EV/EBITDA Multiple",                 tagline: "The starting point of any M&A price conversation — enterprise value divided by operating cash generation",                              category: "Other", published: true },
  { slug: "adjusted-ebitda",      term: "Adjusted EBITDA",                    tagline: "EV = Multiple × EBITDA — why every add-back is a battle, who benefits, and how FDD teams push back",                                    category: "Other", published: true },
  { slug: "synergy",              term: "Synergy",                            tagline: "The justification for the M&A premium — Cost Synergy vs Revenue Synergy, and why 70% of deals miss their targets",                      category: "Other", published: true },
  { slug: "acquisition-premium",  term: "Acquisition Premium",                tagline: "Why buyers pay 30–40% above market — the sources of control, synergy, and scarcity premiums",                                           category: "Other", published: true },
  { slug: "ev-sales",             term: "EV/Sales Multiple",                  tagline: "Revenue-based valuation when EBITDA is negative — the math behind Slack at 26x and Figma at 50x",                                       category: "Other", published: true },
  { slug: "arr-multiple",         term: "ARR Multiple",                       tagline: "SaaS-specific valuation — enterprise value vs annual recurring revenue through bubble and correction",                                    category: "Other", published: true },
  { slug: "saas-valuation",       term: "SaaS Valuation",                     tagline: "ARR, NRR, Rule of 40 — why subscription software businesses are valued on completely different terms",                                    category: "Other", published: true },
  { slug: "ma-process",           term: "The M&A Process, End to End",        tagline: "Six phases from strategy to closing — stakeholders, key documents, and why deals succeed or fail",                                       category: "Other", published: true },
  { slug: "lbo",                  term: "LBO (Leveraged Buyout)",              tagline: "Using the target's own cash flows as collateral to minimize equity — from KKR's RJR Nabisco to modern PE",                              category: "Other", published: true },
  { slug: "tender-offer",         term: "Tender Offer",                       tagline: "Going directly to shareholders, bypassing the board — from Musk's Twitter gambit to hostile defense strategies",                         category: "Other", published: true },
  { slug: "spinoff",              term: "Spin-off",                           tagline: "Separating a unit to unlock hidden value — PayPal from eBay, GE's three-way breakup",                                                    category: "Other", published: true },
  { slug: "reverse-morris-trust", term: "Reverse Morris Trust",               tagline: "Spin off, then merge — saving billions in taxes on a large divestiture (AT&T / WarnerMedia)",                                           category: "Other", published: true },
  { slug: "stock-vs-asset-deal",  term: "Stock Deal vs Asset Deal",           tagline: "Same company, different structure — one choice shifts taxes, liabilities, and risk between buyer and seller",                            category: "Other", published: true },
  { slug: "pmi",                  term: "PMI (Post-Merger Integration)",       tagline: "The real war starts after signing — why org, IT, and culture failures destroy the value M&A promised",                                  category: "Other", published: true },
  { slug: "ipo-vs-ma-exit",       term: "IPO vs M&A Exit",                    tagline: "Two paths for PE/VC portfolio exits — when a public listing beats a strategic sale, and when it doesn't",                               category: "Other", published: true },
  { slug: "break-fee",            term: "Break-up Fee",                       tagline: "Termination fee paid if a party walks away — signals deal conviction and negotiating leverage",                                          category: "Other", published: true },
  { slug: "mac-clause",           term: "MAC Clause",                         tagline: "Allows the buyer to exit if a materially adverse change occurs between signing and closing",                                             category: "Other", published: true },
  { slug: "antitrust",            term: "Antitrust Review",                   tagline: "How competition authorities assess whether a deal harms market competition — the real reason Adobe×Figma collapsed",                    category: "Other", published: true },
  { slug: "regulatory-risk",      term: "Regulatory Risk in M&A",             tagline: "Antitrust, national security, sector regulators — five invisible walls that can kill any deal",                                          category: "Other", published: true },
  { slug: "fdd",                  term: "Financial Due Diligence (FDD)",       tagline: "Behind the financial statements — normalizing EBITDA, working capital, and uncovering hidden liabilities",                              category: "Other", published: true },
  { slug: "cdd",                  term: "Commercial Due Diligence (CDD)",      tagline: "Market, customer, and competitive reality-testing — validating the growth story before you sign",                                       category: "Other", published: true },
  { slug: "ldd",                  term: "Legal Due Diligence (LDD)",           tagline: "Surfacing contract, litigation, IP, and regulatory risk — the evidence that kills deals or adjusts price",                              category: "Other", published: true },
  { slug: "strategic-ma",         term: "Strategic M&A",                      tagline: "Market position, technology, and talent over pure financial returns — why Meta paid $1B for Instagram with zero revenue",               category: "Other", published: true },
  { slug: "vertical-integration", term: "Vertical Integration",               tagline: "Owning the supply chain to control cost, quality, and competition — why Amazon and Apple make everything themselves",                    category: "Other", published: true },
  { slug: "subscription-economy", term: "Subscription Economy",               tagline: "From one-time sales to ARR — the economics of Adobe's journey from $10B to $330B",                                                      category: "Other", published: true },
  { slug: "platform-strategy",    term: "Platform Strategy",                  tagline: "Network effects and the M&A premium — what Google × YouTube and Microsoft × LinkedIn have in common",                                   category: "Other", published: true },
  { slug: "competitive-moat",     term: "Competitive Moat",                   tagline: "Buffett's moat framework applied to M&A multiples — network effects, switching costs, brands, scale",                                   category: "Other", published: true },
];

// ── Market 101 카테고리 매핑 (key → KO/EN 카테고리 라벨) ─────────────────────
const MARKET_CATEGORY_LABEL_KO: Record<string, string> = {
  dcm: "DCM", ecm: "ECM", fig: "FIG", sovereign: "소버린",
  structured: "구조화", levfin: "LevFin", syndloan: "신디케이티드론",
};
const MARKET_CATEGORY_LABEL_EN: Record<string, string> = {
  dcm: "DCM", ecm: "ECM", fig: "FIG", sovereign: "Sovereign",
  structured: "Structured", levfin: "LevFin", syndloan: "Syndicated Loans",
};

// Market 101 컨셉들을 동일한 ConceptItem 포맷으로 변환해서 카탈로그에 합치기
// entryType 보존: 'article' 은 챕터, 'term' 은 용어집 — 렌더링에서 분리
for (const c of ALL_MARKET101_CONCEPTS) {
  const catKo = MARKET_CATEGORY_LABEL_KO[c.category];
  const catEn = MARKET_CATEGORY_LABEL_EN[c.category];
  if (!catKo || !catEn) continue;
  KO_CONCEPT_CATALOG.push({
    slug: c.slug,
    term: c.title,
    tagline: c.excerpt,
    category: catKo,
    published: true,
    kind: "market",
    entryType: c.entryType,
  });
  EN_CONCEPT_CATALOG.push({
    slug: c.slug,
    term: c.titleEn ?? c.title,
    tagline: c.excerptEn ?? c.excerpt,
    category: catEn,
    published: true,
    kind: "market",
    entryType: c.entryType,
  });
}

// ── 카테고리 순서 ─────────────────────────────────────────────────────────────
// 새 구조: 프로덕트별 시리즈 (M&A · Valuation · FDD · Modelling · LBO) + 기존 글 모음 (기타)
const KO_CATEGORIES = [
  "M&A 시리즈", "Valuation 시리즈", "FDD 시리즈", "Modelling 시리즈", "LBO 시리즈",
  "DCM", "ECM", "FIG", "소버린", "구조화", "LevFin", "신디케이티드론",
  "기타",
] as const;
const EN_CATEGORIES = [
  "M&A Series", "Valuation Series", "FDD Series", "Modelling Series", "LBO Series",
  "DCM", "ECM", "FIG", "Sovereign", "Structured", "LevFin", "Syndicated Loans",
  "Other",
] as const;

// ── KO 카테고리 메타데이터 ─────────────────────────────────────────────────────
// comingSoon: true → 빈 폴더에 "Coming Soon" 배지 표시
const KO_CAT_META: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string; comingSoon?: boolean }> = {
  "M&A 시리즈":       { letter: "A", icon: "🤝", desc: "딜 본질·프로세스·협상·PMI까지 — M&A의 처음과 끝",                  dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300" },
  "Valuation 시리즈": { letter: "B", icon: "📊", desc: "가치평가 본질·멀티플·DCF·LBO/PE 밸류에이션",                       dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",    badgeFg: "text-blue-700 dark:text-blue-300",    comingSoon: true },
  "FDD 시리즈":       { letter: "C", icon: "🔍", desc: "재무 실사 — QoE·운전자본·잠재부채 검증 방법론",                    dot: "bg-violet-400",  badgeBg: "bg-violet-50 dark:bg-violet-900/30", badgeFg: "text-violet-700 dark:text-violet-300", comingSoon: true },
  "Modelling 시리즈": { letter: "D", icon: "📈", desc: "3-Statement·DCF·LBO 모델 구축 실전",                                dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",    badgeFg: "text-rose-700 dark:text-rose-300",    comingSoon: true },
  "LBO 시리즈":       { letter: "E", icon: "💰", desc: "LBO 101 — 자본구조·리턴 분석·딜 프로세스 (4 챕터)",                  dot: "bg-indigo-400",  badgeBg: "bg-indigo-50 dark:bg-indigo-900/30", badgeFg: "text-indigo-700 dark:text-indigo-300" },
  "DCM":              { letter: "F", icon: "📊", desc: "Debt Capital Markets — 채권 발행, 신디케이션, 가격 결정",            dot: "bg-teal-400",    badgeBg: "bg-teal-50 dark:bg-teal-900/30",     badgeFg: "text-teal-700 dark:text-teal-300"     },
  "ECM":              { letter: "G", icon: "📈", desc: "Equity Capital Markets — IPO·유상증자·블록딜",                       dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",     badgeFg: "text-blue-700 dark:text-blue-300"     },
  "FIG":              { letter: "H", icon: "🏦", desc: "금융기관 — 은행 자본구조, AT1, CoCo, 베일인",                        dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",     badgeFg: "text-rose-700 dark:text-rose-300"     },
  "소버린":           { letter: "I", icon: "🌐", desc: "Sovereign — 국채, EM 채권, 100년물",                                    dot: "bg-indigo-400",  badgeBg: "bg-indigo-50 dark:bg-indigo-900/30", badgeFg: "text-indigo-700 dark:text-indigo-300" },
  "구조화":           { letter: "J", icon: "🧩", desc: "Structured Finance — ABS, CLO, CDO, CMBS",                              dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300"   },
  "LevFin":           { letter: "K", icon: "💵", desc: "Leveraged Finance — HY채권, 레버드론, LBO",                            dot: "bg-yellow-400",  badgeBg: "bg-yellow-50 dark:bg-yellow-900/30", badgeFg: "text-yellow-700 dark:text-yellow-300" },
  "신디케이티드론":   { letter: "L", icon: "🤝", desc: "Syndicated Loans — MLA, 에이전트 은행, IG론 vs 레버리지드론",         dot: "bg-cyan-400",    badgeBg: "bg-cyan-50 dark:bg-cyan-900/30",     badgeFg: "text-cyan-700 dark:text-cyan-300"     },
  "기타":             { letter: "M", icon: "📚", desc: "용어집 — 밸류·딜구조·실사·규제·전략 참고 자료",                     dot: "bg-gray-400",    badgeBg: "bg-gray-100 dark:bg-gray-800",       badgeFg: "text-gray-600 dark:text-gray-400"     },
};

// ── EN 카테고리 메타데이터 ─────────────────────────────────────────────────────
const EN_CAT_META: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string; comingSoon?: boolean }> = {
  "M&A Series":       { letter: "A", icon: "🤝", desc: "Deal essence · process · negotiation · PMI — M&A end to end",     dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300" },
  "Valuation Series": { letter: "B", icon: "📊", desc: "Valuation fundamentals, multiples, DCF, LBO/PE valuation",         dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",    badgeFg: "text-blue-700 dark:text-blue-300",    comingSoon: true },
  "FDD Series":       { letter: "C", icon: "🔍", desc: "Financial diligence — QoE, working capital, hidden liabilities",   dot: "bg-violet-400",  badgeBg: "bg-violet-50 dark:bg-violet-900/30", badgeFg: "text-violet-700 dark:text-violet-300", comingSoon: true },
  "Modelling Series": { letter: "D", icon: "📈", desc: "Building 3-Statement, DCF, and LBO models — hands-on",             dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",    badgeFg: "text-rose-700 dark:text-rose-300",    comingSoon: true },
  "LBO Series":       { letter: "E", icon: "💰", desc: "LBO 101 — capital structure, returns, deal process (4 chapters)",   dot: "bg-indigo-400",  badgeBg: "bg-indigo-50 dark:bg-indigo-900/30", badgeFg: "text-indigo-700 dark:text-indigo-300" },
  "DCM":              { letter: "F", icon: "📊", desc: "Debt Capital Markets — bond issuance, syndication, pricing",         dot: "bg-teal-400",    badgeBg: "bg-teal-50 dark:bg-teal-900/30",     badgeFg: "text-teal-700 dark:text-teal-300"     },
  "ECM":              { letter: "G", icon: "📈", desc: "Equity Capital Markets — IPO, follow-on, block deals",                dot: "bg-blue-400",    badgeBg: "bg-blue-50 dark:bg-blue-900/30",     badgeFg: "text-blue-700 dark:text-blue-300"     },
  "FIG":              { letter: "H", icon: "🏦", desc: "Financial Institutions — bank capital, AT1, CoCo, bail-in",          dot: "bg-rose-400",    badgeBg: "bg-rose-50 dark:bg-rose-900/30",     badgeFg: "text-rose-700 dark:text-rose-300"     },
  "Sovereign":        { letter: "I", icon: "🌐", desc: "Sovereign — government bonds, EM debt, century bonds",                dot: "bg-indigo-400",  badgeBg: "bg-indigo-50 dark:bg-indigo-900/30", badgeFg: "text-indigo-700 dark:text-indigo-300" },
  "Structured":       { letter: "J", icon: "🧩", desc: "Structured Finance — ABS, CLO, CDO, CMBS",                            dot: "bg-amber-400",   badgeBg: "bg-amber-50 dark:bg-amber-900/30",   badgeFg: "text-amber-700 dark:text-amber-300"   },
  "LevFin":           { letter: "K", icon: "💵", desc: "Leveraged Finance — HY bonds, leveraged loans, LBO",                  dot: "bg-yellow-400",  badgeBg: "bg-yellow-50 dark:bg-yellow-900/30", badgeFg: "text-yellow-700 dark:text-yellow-300" },
  "Syndicated Loans": { letter: "L", icon: "🤝", desc: "Syndicated Loans — MLA, agent bank, IG vs leveraged loans",           dot: "bg-cyan-400",    badgeBg: "bg-cyan-50 dark:bg-cyan-900/30",     badgeFg: "text-cyan-700 dark:text-cyan-300"     },
  "Other":            { letter: "M", icon: "📚", desc: "Glossary — valuation, deal structure, diligence, strategy refs",   dot: "bg-gray-400",    badgeBg: "bg-gray-100 dark:bg-gray-800",       badgeFg: "text-gray-600 dark:text-gray-400"     },
};

// ── 딜 연결 수 (모듈 로드 시 1회 계산) ────────────────────────────────────────
// Market 101 컨셉은 딜과 직접 매핑되지 않으므로 0으로 처리됨 (자연스럽게).
const dealCountBySlugKo: Record<string, number> = {};
for (const concept of KO_CONCEPT_CATALOG) {
  if (concept.kind === "market") {
    dealCountBySlugKo[concept.slug] = 0;
    continue;
  }
  const href = `/deal-101/${concept.slug}`;
  dealCountBySlugKo[concept.slug] = ALL_DEALS.filter((d) =>
    d.concepts?.some((c) => c.href === href)
  ).length;
}

const dealCountBySlugEn: Record<string, number> = {};
for (const concept of EN_CONCEPT_CATALOG) {
  if (concept.kind === "market") {
    dealCountBySlugEn[concept.slug] = 0;
    continue;
  }
  const href = `/deal-101/${concept.slug}`;
  dealCountBySlugEn[concept.slug] = ALL_DEALS_EN.filter((d) =>
    d.concepts?.some((c) => c.href === href)
  ).length;
}

// ── 애니메이션 ─────────────────────────────────────────────────────────────────
const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const listItem = {
  hidden: { opacity: 0, x: -8 },
  show: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.3, ease: EASE, delay: i * 0.04 },
  }),
};

// ── 개념 행 (공개) ─────────────────────────────────────────────────────────────
function ConceptRow({
  concept, index, dealCount, lang,
}: {
  concept: ConceptItem;
  index: number;
  dealCount: number;
  lang: Lang;
}) {
  const ko = lang === "ko";
  const kindBase = concept.kind === "market"
    ? (ko ? "/market-101" : "/en/market-101")
    : (ko ? "/deal-101" : "/en/deal-101");
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <Link href={`${kindBase}/${concept.slug}`}>
        <div className="group flex items-start gap-3 p-3.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors border border-transparent hover:border-gray-200 dark:hover:border-gray-700/50">
          <div className="flex-1 min-w-0">
            <p className="text-[14px] font-semibold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
              {concept.term}
            </p>
            <p className="mt-0.5 text-[11px] text-gray-400 dark:text-gray-500 line-clamp-2 leading-relaxed">
              {concept.tagline}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-shrink-0 pt-0.5">
            <span className="text-[10px] font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded-full px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {ko ? "학습하기 →" : "Read →"}
            </span>
            {dealCount > 0 && (
              <span className="text-[10px] text-gray-400 dark:text-gray-500 whitespace-nowrap">
                {ko ? `딜 ${dealCount}개에서 등장` : `in ${dealCount} ${dealCount === 1 ? "deal" : "deals"}`}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ── 개념 행 (준비 중) ──────────────────────────────────────────────────────────
function UnpublishedRow({
  concept, index, lang,
}: {
  concept: ConceptItem;
  index: number;
  lang: Lang;
}) {
  const ko = lang === "ko";
  return (
    <motion.div custom={index} variants={listItem} initial="hidden" animate="show">
      <div className="flex items-start gap-3 p-3.5 rounded-lg opacity-50">
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-gray-400 dark:text-gray-600 leading-snug line-clamp-1">
            {concept.term}
          </p>
          <p className="mt-0.5 text-[11px] text-gray-300 dark:text-gray-700 line-clamp-1">
            {concept.tagline}
          </p>
        </div>
        <span className="text-[10px] text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-0.5 flex-shrink-0 whitespace-nowrap">
          {ko ? "준비 중" : "Coming soon"}
        </span>
      </div>
    </motion.div>
  );
}

// ── 카테고리 폴더 ─────────────────────────────────────────────────────────────
function CategoryFolder({
  category, concepts, defaultOpen, lang, catMeta, dealCounts,
}: {
  category: string;
  concepts: ConceptItem[];
  defaultOpen: boolean;
  lang: Lang;
  catMeta: Record<string, { letter: string; icon: string; desc: string; dot: string; badgeBg: string; badgeFg: string; comingSoon?: boolean }>;
  dealCounts: Record<string, number>;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const ko = lang === "ko";
  const meta = catMeta[category];
  const published = concepts.filter((c) => c.published);
  const unpublished = concepts.filter((c) => !c.published);
  const total = concepts.length;

  return (
    <div
      className={`rounded-xl border transition-all duration-200 overflow-hidden ${
        open
          ? "border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900"
          : "border-gray-200/70 dark:border-gray-700/50 bg-white dark:bg-gray-900 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
      }`}
    >
      {/* ── 폴더 헤더 ── */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3.5 px-5 py-4 text-left group"
      >
        {/* 컬러 액센트 바 */}
        <div className={`w-1 self-stretch rounded-full flex-shrink-0 ${meta.dot}`} />

        {/* 레터 배지 */}
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center text-[12px] font-black text-white flex-shrink-0 transition-all duration-200 ${meta.dot} ${open ? "" : "opacity-80"}`}
        >
          {meta.letter}
        </div>

        {/* 레이블 & 설명 */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="text-[15px] font-bold text-gray-900 dark:text-gray-100">
              {category}
            </span>
            {meta.comingSoon && total === 0 ? (
              <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                {ko ? "Coming Soon" : "Coming Soon"}
              </span>
            ) : (
              <>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${meta.badgeBg} ${meta.badgeFg}`}>
                  {ko ? `개념 ${published.length}` : `concepts ${published.length}`}
                </span>
                {unpublished.length > 0 && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    {ko ? `준비 중 ${unpublished.length}` : `soon ${unpublished.length}`}
                  </span>
                )}
              </>
            )}
          </div>
          <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">
            {meta.desc}
          </p>
        </div>

        {/* 항목 수 + 시보 */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[12px] font-semibold text-gray-400 dark:text-gray-500">
            {total === 0 ? (ko ? "0편" : "—") : ko ? `${total}편` : `${total}`}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
          >
            <svg
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2.5"
              className="text-gray-400 dark:text-gray-500"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── 폴더 콘텐츠 (accordion) ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{ overflow: "hidden" }}
          >
            <div className="px-4 pb-4">
              {/* 구분선 */}
              <div className="h-px bg-gray-100 dark:bg-gray-800 mb-3" />

              {/* 빈 시리즈 — Coming Soon 안내 */}
              {total === 0 && meta.comingSoon && (
                <div className="px-4 py-8 text-center">
                  <p className="text-2xl mb-2">{meta.icon}</p>
                  <p className="text-[13px] font-bold text-gray-700 dark:text-gray-300 mb-1">
                    {ko ? "곧 공개 예정" : "Coming soon"}
                  </p>
                  <p className="text-[11px] text-gray-400 dark:text-gray-500 leading-relaxed max-w-xs mx-auto">
                    {ko
                      ? "이 시리즈의 챕터(Ch.0 → Ch.N)가 곧 순차적으로 공개됩니다."
                      : "Chapters in this series (Ch.0 → Ch.N) will be published sequentially."}
                  </p>
                </div>
              )}

              {/* 공개 개념 — article(챕터) 먼저, term(용어) 나중. 사이에 구분선. */}
              {(() => {
                const articles = published.filter((c) => c.entryType !== "term");
                const terms = published.filter((c) => c.entryType === "term");
                let idx = 0;
                return (
                  <>
                    {articles.map((c) => (
                      <ConceptRow
                        key={c.slug}
                        concept={c}
                        index={idx++}
                        dealCount={dealCounts[c.slug] ?? 0}
                        lang={lang}
                      />
                    ))}
                    {articles.length > 0 && terms.length > 0 && (
                      <div className="flex items-center gap-2 my-3 px-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                          {lang === "ko" ? "용어" : "Terms"}
                        </span>
                        <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                      </div>
                    )}
                    {terms.map((c) => (
                      <ConceptRow
                        key={c.slug}
                        concept={c}
                        index={idx++}
                        dealCount={dealCounts[c.slug] ?? 0}
                        lang={lang}
                      />
                    ))}
                  </>
                );
              })()}

              {/* 준비 중 개념 */}
              {unpublished.length > 0 && (
                <>
                  {published.length > 0 && (
                    <div className="flex items-center gap-2 my-2 px-3.5">
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                      <span className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">
                        {ko ? "준비 중" : "Coming soon"}
                      </span>
                      <div className="flex-1 h-px bg-gray-100 dark:bg-gray-800" />
                    </div>
                  )}
                  {unpublished.map((c, i) => (
                    <UnpublishedRow
                      key={c.slug}
                      concept={c}
                      index={published.length + i}
                      lang={lang}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────────────────────────────
export default function LearnIndexClient({ lang = "ko" }: { lang?: Lang }) {
  const ko = lang === "ko";
  const catalog = ko ? KO_CONCEPT_CATALOG : EN_CONCEPT_CATALOG;
  const categories = ko ? KO_CATEGORIES : EN_CATEGORIES;
  const catMeta = ko ? KO_CAT_META : EN_CAT_META;
  const dealCounts = ko ? dealCountBySlugKo : dealCountBySlugEn;

  const publishedCount = catalog.filter((c) => c.published).length;
  const totalCount = catalog.length;

  return (
    <>
      {/* ── 통계 바 ── */}
      <div className="flex items-center gap-3 flex-wrap mb-5">
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `${categories.length}개 카테고리` : `${categories.length} categories`}
        </span>
        <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
        <span className="text-[12px] font-semibold text-gray-500 dark:text-gray-400">
          {ko ? `총 ${publishedCount}편` : `${publishedCount} published`}
        </span>
        {totalCount - publishedCount > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-gray-200 dark:bg-gray-700 flex-shrink-0" />
            <span className="text-[12px] text-gray-400 dark:text-gray-500">
              {ko ? `${totalCount - publishedCount}편 준비 중` : `${totalCount - publishedCount} coming soon`}
            </span>
          </>
        )}

        {/* 카테고리 도트 */}
        <div className="ml-auto hidden sm:flex items-center gap-1.5 flex-wrap">
          {(categories as readonly string[]).map((cat) => {
            const count = catalog.filter((c) => c.category === cat && c.published).length;
            const m = catMeta[cat];
            const isEmpty = count === 0;
            return (
              <span
                key={cat}
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full ${m.badgeBg} ${m.badgeFg} ${isEmpty ? "opacity-50" : ""}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${m.dot}`} />
                {m.letter}. {cat} {isEmpty ? "—" : count}
              </span>
            );
          })}
        </div>
      </div>

      {/* ── 카테고리 폴더 목록 ── */}
      <div className="space-y-3">
        {(categories as readonly string[]).map((cat, i) => {
          const concepts = catalog.filter((c) => c.category === cat);
          return (
            <CategoryFolder
              key={cat}
              category={cat}
              concepts={concepts}
              defaultOpen={false}
              lang={lang}
              catMeta={catMeta}
              dealCounts={dealCounts}
            />
          );
        })}
      </div>
    </>
  );
}
