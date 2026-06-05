"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getFundOpsSeriesNav, getFundOpsChapterBySlug } from "@/data/fund-ops-series";

const ACCENT = "#7c3aed"; // violet-600 — Fund Ops series
const SLUG = "fund-ops-ch01-three-tier-structure";

/* ============================================================
   DATA — 모든 KO/EN 분리, Q1 2026 기준
============================================================ */

const Q1_2026_STATS = [
  {
    koLabel: "Global Private Capital AUM",
    enLabel: "Global private capital AUM",
    value: "$14.7T",
    koDetail: "Buyout $5.0T · VC $3.3T · Private Credit $2.0T · RE $1.5T · Infra $1.4T · Secondaries $1.5T",
    enDetail: "Buyout $5.0T · VC $3.3T · Private Credit $2.0T · RE $1.5T · Infra $1.4T · Secondaries $1.5T",
  },
  {
    koLabel: "Dry Powder",
    enLabel: "Dry powder",
    value: "$2.0T",
    koDetail: "Buyout $1.0T · VC $0.5T · Credit $0.3T · 기타 $0.2T — 2024 record $2.6T 대비 정상화",
    enDetail: "Buyout $1.0T · VC $0.5T · Credit $0.3T · other $0.2T — normalized from the 2024 record of $2.6T",
  },
  {
    koLabel: "3rd-party Fund Admin TAM",
    enLabel: "Third-party fund admin TAM",
    value: "$11.5T AUA",
    koDetail: "Apex + SS&C + State Street + Alter Domus + Citco가 시장의 60%+",
    enDetail: "Apex + SS&C + State Street + Alter Domus + Citco hold 60%+ of the market",
  },
  {
    koLabel: "PE 내부 Ops 인력 비중",
    enLabel: "Ops share of PE headcount",
    value: "55-65%",
    koDetail: "Mega-cap PE: Investment 25-30% · Middle 20-25% · Back 35-45%",
    enDetail: "Mega-cap PE: investment 25-30% · middle 20-25% · back 35-45%",
  },
  {
    koLabel: "Sub-line 시장 규모",
    enLabel: "Sub-line market size",
    value: "$950B+",
    koDetail: "Wells Fargo · SMBC · MUFG · ING이 글로벌 top. 한국은 산은·신한이 점유율 확대 중",
    enDetail: "Wells Fargo, SMBC, MUFG, ING lead globally; KDB and Shinhan are scaling fast in Korea",
  },
];

const TIER_OVERVIEW = [
  {
    tierEn: "Front Office",
    tierKo: "Front Office",
    koTeams: "Investment Team (Deal Team)",
    enTeams: "Investment Team (Deal Team)",
    koMandate: "Deal sourcing · DD 주도 · Investment Committee 통과 · Portfolio governance · Exit 결정",
    enMandate: "Deal sourcing · driving DD · pushing deals through IC · portfolio governance · calling the exit",
    koPeople: "Partner · Principal · VP · Sr. Associate · Associate · Analyst",
    enPeople: "Partner · Principal · VP · Sr. Associate · Associate · Analyst",
    koHeadcount: "Mega-cap PE 기준 25-30% · Mid-cap PE 기준 40-50%",
    enHeadcount: "25-30% at mega-cap PE · 40-50% at mid-cap PE",
    koAccountability: "분기 portco performance, 5년 fund TVPI / DPI",
    enAccountability: "Quarterly portco performance, five-year fund TVPI / DPI",
  },
  {
    tierEn: "Middle Office",
    tierKo: "Middle Office",
    koTeams: "Risk · Valuation · Compliance · Investor Relations · ESG",
    enTeams: "Risk · Valuation · Compliance · Investor Relations · ESG",
    koMandate: "Portfolio risk 모니터링 · 분기 fair value mark · Form PF/ADV filing · LP 응대 · SFDR 보고",
    enMandate: "Portfolio risk monitoring · quarterly fair value marks · Form PF/ADV filings · LP support · SFDR reporting",
    koPeople: "Head of Risk · CCO (Chief Compliance Officer) · Head of IR · Valuation Director · ESG Lead",
    enPeople: "Head of Risk · CCO (Chief Compliance Officer) · Head of IR · Valuation Director · ESG Lead",
    koHeadcount: "20-25% (post-2008에서 가장 빠르게 성장한 tier) — 2026 ESG/SFDR로 추가 확장 중",
    enHeadcount: "20-25% — the fastest-growing tier post-2008, expanding further in 2026 on ESG/SFDR demands",
    koAccountability: "0 compliance breach, 외부 valuation 일치, LP 만족도",
    enAccountability: "Zero compliance breaches, alignment with external valuation, LP satisfaction",
  },
  {
    tierEn: "Back Office",
    tierKo: "Back Office",
    koTeams: "Fund Admin · Accounting · Treasury · Tax · Legal · Tech",
    enTeams: "Fund Administration · Accounting · Treasury · Tax · Legal · Technology",
    koMandate: "NAV 계산 · Capital call / distribution · K-1 발행 · Sub-line drawdown · LPA 준수 · 시스템 운영",
    enMandate: "NAV calculation · capital calls and distributions · K-1 issuance · sub-line drawdowns · LPA compliance · platform operations",
    koPeople: "CFO · Controller · Fund Accounting Manager · Treasury Manager · Tax Director · General Counsel",
    enPeople: "CFO · Controller · Fund Accounting Manager · Treasury Manager · Tax Director · General Counsel",
    koHeadcount: "Mega-cap 기준 35-45% — 단, Fund Admin 자체는 70%+가 외주 (Apex · SS&C · Citco)",
    enHeadcount: "35-45% at mega-cap PE, but 70%+ of fund admin itself is outsourced to Apex, SS&C, Citco",
    koAccountability: "0 NAV 오류, 0 wire fraud, 100% LP statement 정시 발행, 무결한 audit",
    enAccountability: "Zero NAV errors, zero wire fraud, 100% on-time LP statements, clean audits",
  },
];

const HISTORICAL_DRIVERS = [
  {
    year: "2008",
    koEvent: "Bernie Madoff 폰지 적발 — $65B",
    enEvent: "Bernie Madoff Ponzi exposed — $65B",
    koLesson: "Feeder fund들이 GP가 주는 'broker statement'만 받아 NAV 계산 → 독립적 verification 부재",
    enLesson: "Feeder funds calculated NAV from GP-supplied broker statements alone — no independent verification",
    koOutcome: "ILPA 가이드라인 강화 · SEC가 indep. admin 권고 · feeder fund admin 책임 명문화",
    enOutcome: "ILPA tightened guidelines · SEC pushed independent admin · feeder admin liability formalized",
  },
  {
    year: "2010",
    koEvent: "Dodd-Frank Act 통과 (US)",
    enEvent: "Dodd-Frank Act passed (US)",
    koLesson: "PE/HF advisor SEC 등록 의무화 → Form ADV, Form PF 분기보고",
    enLesson: "PE and HF advisors required to register with SEC — Form ADV and quarterly Form PF",
    koOutcome: "Compliance·Risk·IR 부서 헤드카운트 평균 3x 증가",
    enOutcome: "Compliance, risk, and IR headcount roughly tripled across the industry",
  },
  {
    year: "2013",
    koEvent: "AIFMD 시행 (EU Alternative Investment Fund Managers Directive)",
    enEvent: "AIFMD took effect (EU)",
    koLesson: "Depositary (수탁자) 분리 의무, valuation 외부화, leverage 보고 — middle/back office 의무화",
    enLesson: "Mandatory depositary separation, external valuation, leverage reporting — middle/back office became mandatory",
    koOutcome: "Luxembourg·Dublin이 fund admin 허브로 부상 (Apex·Alter Domus 본거지)",
    enOutcome: "Luxembourg and Dublin emerged as fund admin hubs (the home base of Apex and Alter Domus)",
  },
  {
    year: "2018",
    koEvent: "Abraaj Capital 붕괴 — $14B",
    enEvent: "Abraaj Capital collapsed — $14B",
    koLesson: "GP가 Health Fund LP 자금을 다른 fund 구멍 메우는 데 commingle. KPMG audit가 못 잡음",
    enLesson: "GP commingled Health Fund LP capital with other funds. KPMG audit failed to catch it",
    koOutcome: "Big 4 audit ≠ fund admin reconciliation — 양자 분리 원칙 재확립",
    enOutcome: "Big 4 audit is not a substitute for fund admin reconciliation — separation reaffirmed",
  },
  {
    year: "2021",
    koEvent: "Archegos Capital 붕괴 — Credit Suisse $5.5B loss",
    enEvent: "Archegos Capital collapsed — Credit Suisse loss of $5.5B",
    enLesson: "Multi-PB TRS structure — no single counterparty saw aggregate leverage",
    koLesson: "여러 prime broker에 TRS 분산 — 어느 누구도 총 노출 못 봄",
    enOutcome: "Counterparty risk teams now demand consolidated cross-PB exposure feeds",
    koOutcome: "Counterparty risk team들이 cross-PB 노출 통합 feed 요구",
  },
  {
    year: "2023",
    koEvent: "SVB 붕괴 — VC fund sub-line + treasury 동시 동결",
    enEvent: "SVB collapse — VC fund sub-lines and treasuries frozen simultaneously",
    koLesson: "Fund Treasury 자체의 concentration risk. SVB 한 곳에 sub-line + cash 모두 의존",
    enLesson: "Concentration risk inside fund treasury itself — sub-line and operating cash both at SVB",
    koOutcome: "Multi-bank treasury가 post-2023 표준. ILPA가 sub-line lender 분산 가이드 발행",
    enOutcome: "Multi-bank treasury became the post-2023 standard; ILPA issued sub-line diversification guidance",
  },
];

const FRONT_OFFICE_DAY = [
  {
    time: "07:00",
    koActivity: "Market open 전 portco update 확인 (특히 상장된 portfolio company)",
    enActivity: "Pre-market portco updates (especially for listed portfolio companies)",
  },
  {
    time: "08:30",
    koActivity: "Pipeline meeting — sourcing 진행 deal 5-15건 review",
    enActivity: "Pipeline meeting — review 5-15 active sourcing opportunities",
  },
  {
    time: "10:00",
    koActivity: "DD workstream 점검 — CDD/FDD/LDD/TDD/QoE/IT DD 진행 상황",
    enActivity: "DD workstream check — CDD/FDD/LDD/TDD/QoE/IT DD progress",
  },
  {
    time: "12:30",
    koActivity: "Banker / lawyer / consultant lunch (deal sourcing 또는 closing 협의)",
    enActivity: "Lunch with banker, lawyer, or consultant — sourcing or closing alignment",
  },
  {
    time: "14:00",
    koActivity: "Portco board prep 또는 100-day plan review",
    enActivity: "Portco board prep or 100-day plan review",
  },
  {
    time: "16:00",
    koActivity: "IC memo drafting · LBO model refinement · diligence call",
    enActivity: "IC memo drafting · LBO model refinement · diligence call",
  },
  {
    time: "18:00",
    koActivity: "LP IR call (특히 fundraising 중일 경우)",
    enActivity: "LP IR call (especially during fundraising)",
  },
  {
    time: "20:00",
    koActivity: "저녁 — 보통 client/banker dinner, 그렇지 않으면 deal model 계속",
    enActivity: "Dinner — usually with a client or banker; otherwise back to the model",
  },
  {
    time: "22:00+",
    koActivity: "Email cleanup · 내일 IC memo 마무리 · DD 자료 review",
    enActivity: "Email cleanup · finalizing tomorrow's IC memo · reviewing DD materials",
  },
];

const COMP_LADDER_US_Q1_2026 = [
  { level: "Analyst (1-2년)",         levelEn: "Analyst (1-2 yrs)",        front: "$200K",   middle: "$135K",   back: "$110K" },
  { level: "Associate (3-5년)",       levelEn: "Associate (3-5 yrs)",       front: "$400K",   middle: "$210K",   back: "$170K" },
  { level: "Sr. Associate / VP",      levelEn: "Sr. Associate / VP",       front: "$700-900K", middle: "$320K", back: "$260K" },
  { level: "Principal / Director",    levelEn: "Principal / Director",     front: "$1.5-3M",  middle: "$500K",   back: "$420K" },
  { level: "Partner / CXO",           levelEn: "Partner / CXO",            front: "$5-30M+",  middle: "$1.5-3M", back: "$1.2-3M" },
];

const COMP_LADDER_KR_Q1_2026 = [
  { level: "사원 (Analyst)",          levelEn: "Analyst",                  front: "₩100M",   middle: "₩80M",    back: "₩70M" },
  { level: "대리/과장 (Associate)",    levelEn: "Associate",                front: "₩180M",   middle: "₩130M",   back: "₩110M" },
  { level: "차장 / VP",                levelEn: "Sr. Associate / VP",        front: "₩400M",   middle: "₩220M",   back: "₩180M" },
  { level: "부장 / 이사",              levelEn: "Director / Principal",     front: "₩700M-1B", middle: "₩400M",  back: "₩320M" },
  { level: "전무 / 대표 (Partner)",    levelEn: "MD / Partner",             front: "₩2-10B+", middle: "₩600M-1B",back: "₩500M-1B" },
];

const TOP_FUND_ADMINS_Q1_2026 = [
  { rank: 1,  name: "Apex Group",             aua: 3.6, koHq: "Bermuda · London",       enHq: "Bermuda · London",       koDesc: "Sanne·MJ Hudson·Mainstream 인수로 글로벌 1위. PE·private credit·RE 전 영역 강함.",       enDesc: "Global #1 after Sanne, MJ Hudson, Mainstream acquisitions. Deep across PE, private credit, RE." },
  { rank: 2,  name: "SS&C GlobeOp",           aua: 3.2, koHq: "Windsor (Connecticut)",   enHq: "Windsor, CT",            koDesc: "Hedge fund 최강자, PE/credit 확장 중. Intralinks (데이터룸) 보유.",                          enDesc: "Hedge fund leader, expanding into PE/credit. Owns Intralinks (data rooms)." },
  { rank: 3,  name: "State Street IFS",       aua: 3.0, koHq: "Boston",                  enHq: "Boston",                 koDesc: "Custody + admin 통합. 대형 institutional client 강세 (CalPERS·CalSTRS 등).",                  enDesc: "Custody + admin integrated. Dominant with large institutionals (CalPERS, CalSTRS)." },
  { rank: 4,  name: "Alter Domus",            aua: 2.7, koHq: "Luxembourg",              enHq: "Luxembourg",             koDesc: "Private capital 전문 boutique. Apollo·Blackstone Credit·Ares 핵심 client.",                   enDesc: "Private capital boutique. Core clients: Apollo, Blackstone Credit, Ares." },
  { rank: 5,  name: "Citco Fund Services",    aua: 2.1, koHq: "Curaçao · Toronto",       enHq: "Curaçao · Toronto",      koDesc: "헷지펀드 강자. KKR·Bain Capital 등 주요 PE client.",                                          enDesc: "Hedge fund powerhouse. Key PE clients include KKR and Bain Capital." },
  { rank: 6,  name: "TMF Group",              aua: 1.4, koHq: "Amsterdam",               enHq: "Amsterdam",              koDesc: "Corporate services + fund admin 결합. EMEA·아시아 mid-cap 강세.",                              enDesc: "Corporate services + fund admin. Strong in EMEA and Asia mid-cap." },
  { rank: 7,  name: "Northern Trust",         aua: 1.3, koHq: "Chicago",                 enHq: "Chicago",                koDesc: "Custody bank 모델. Endowment·foundation client 다수.",                                        enDesc: "Custody-bank model. Heavy in endowment and foundation clients." },
  { rank: 8,  name: "Gen II Fund Services",   aua: 1.1, koHq: "New York",                enHq: "New York",               koDesc: "PE-only specialist. Blackstone·Carlyle·KKR mega-cap 주요 client.",                            enDesc: "PE-only specialist. Mega-cap clients include Blackstone, Carlyle, KKR." },
  { rank: 9,  name: "MUFG Investor Services", aua: 0.9, koHq: "Tokyo · Halifax",         enHq: "Tokyo · Halifax",        koDesc: "일본 메가뱅크 산하. 아시아 PE에 강함.",                                                       enDesc: "Backed by the MUFG megabank. Strong across Asian PE." },
  { rank: 10, name: "IQ-EQ",                  aua: 0.9, koHq: "Luxembourg",              enHq: "Luxembourg",             koDesc: "Private wealth + fund admin 결합. EMEA·아시아 mid-cap 강세.",                                  enDesc: "Private wealth + fund admin combo. Strong in EMEA and Asia mid-cap." },
];

const MIDDLE_OFFICE_DETAIL = [
  {
    koTeam: "Risk Management",
    enTeam: "Risk Management",
    koDuties: "Portfolio concentration · leverage covenant · FX exposure · sub-line utilization · stress test (GFC·COVID·금리 +200bp)",
    enDuties: "Portfolio concentration · leverage covenants · FX exposure · sub-line utilization · stress tests (GFC, COVID, +200bp rates)",
    koTools: "MSCI BarraOne · Axioma · 내부 Python/Excel 모델 · Bloomberg PORT",
    enTools: "MSCI BarraOne · Axioma · in-house Python/Excel · Bloomberg PORT",
    koRecentTrend: "Q1 2026: Private credit fund 증가로 default rate stress test가 가장 핫한 토픽",
    enRecentTrend: "Q1 2026: with private credit funds proliferating, default-rate stress testing is the hottest topic",
  },
  {
    koTeam: "Valuation",
    enTeam: "Valuation",
    koDuties: "분기 ASC 820 fair value mark · DCF + Comps + 최근 거래가 · IPEV Valuation Guidelines 준수 · Big 4 외부 검증",
    enDuties: "Quarterly ASC 820 fair value marks · DCF + Comps + recent transactions · IPEV Valuation Guidelines · Big 4 external review",
    koTools: "Kroll (구 Duff & Phelps) · Houlihan Lokey · EY Strategy & Transactions · 자체 모델",
    enTools: "Kroll (formerly Duff & Phelps) · Houlihan Lokey · EY Strategy & Transactions · in-house models",
    koRecentTrend: "Q1 2026: AI portco 밸류에이션이 가장 어려운 영역 — comparable 부재, multiple compression 우려",
    enRecentTrend: "Q1 2026: AI portco valuation is the hardest domain — no comparables, multiple-compression fears",
  },
  {
    koTeam: "Compliance",
    enTeam: "Compliance",
    koDuties: "KYC/AML LP onboarding · Form ADV (연 1회) · Form PF (분기, $1.5B+ AUM) · SEC Marketing Rule · FCPA · ESG/SFDR",
    enDuties: "KYC/CDD on LP onboarding · annual Form ADV · quarterly Form PF (>$1.5B AUM) · SEC Marketing Rule · FCPA · ESG/SFDR",
    koTools: "ACA Group · NorthPoint · Cordium · 내부 attestation 시스템",
    enTools: "ACA Group · NorthPoint · Cordium · in-house attestation systems",
    koRecentTrend: "Q1 2026: SEC Private Fund Rules 일부 무효 판결 (2024) 이후에도 자발적 ILPA 준수 압박 증가",
    enRecentTrend: "Q1 2026: even after the 2024 partial vacatur of SEC Private Fund Rules, ILPA-voluntary compliance pressure keeps rising",
  },
  {
    koTeam: "Investor Relations",
    enTeam: "Investor Relations",
    koDuties: "Quarterly LP letter · AGM 운영 · LPAC 관리 · ad hoc LP query 응대 · capital raising 지원",
    enDuties: "Quarterly LP letters · running the AGM · managing the LPAC · ad-hoc LP queries · supporting capital raises",
    koTools: "iLEVEL · Backstop · DealCloud · Salesforce Financial Services Cloud",
    enTools: "iLEVEL · Backstop · DealCloud · Salesforce Financial Services Cloud",
    koRecentTrend: "Q1 2026: ILPA Reporting Template 2.0 (2024 개정) 전면 채택, capital account statement 표준화 가속",
    enRecentTrend: "Q1 2026: ILPA Reporting Template 2.0 (revised 2024) is now the de facto standard for capital account statements",
  },
];

const BACK_OFFICE_DETAIL = [
  {
    koTeam: "Fund Administration",
    enTeam: "Fund Administration",
    koDuties: "NAV 계산 (분기) · Capital call notice · Distribution mechanics · LP statement (ILPA template) · Side letter MFN tracking",
    enDuties: "Quarterly NAV · capital call notices · distribution mechanics · LP statements (ILPA template) · side letter MFN tracking",
    koOutsource: "70%+ PE가 외주 (Apex·SS&C·Alter Domus·Citco·Gen II)",
    enOutsource: "70%+ of PE outsource (Apex, SS&C, Alter Domus, Citco, Gen II)",
  },
  {
    koTeam: "Fund Accounting",
    enTeam: "Fund Accounting",
    koDuties: "ASC 946 (US) / IFRS / K-IFRS · 분기·연간 financial statement · audit 지원 · partnership tax 기초 작업",
    enDuties: "ASC 946 (US) / IFRS / K-IFRS · quarterly and annual financials · audit support · partnership tax fundamentals",
    koOutsource: "보통 in-house (Controller가 책임). Audit는 Big 4 외주.",
    enOutsource: "Usually in-house under the Controller. Audit goes to a Big 4.",
  },
  {
    koTeam: "Treasury",
    enTeam: "Treasury",
    koDuties: "Cash management · sub-line drawdown/repay · FX hedge · short-term investment (T-bill ladder)",
    enDuties: "Cash management · sub-line drawdowns and repayments · FX hedging · short-term investments (T-bill ladders)",
    koOutsource: "전부 in-house. Bank counterparty (Wells Fargo · SMBC · MUFG)가 partner.",
    enOutsource: "Always in-house, with bank counterparties (Wells Fargo, SMBC, MUFG) as partners.",
  },
  {
    koTeam: "Tax",
    enTeam: "Tax",
    koDuties: "Fund 구조 유지 (Cayman·Lux·Delaware) · K-1 발행 (US LP) · withholding 최적화 · BEPS Pillar 2 대응",
    enDuties: "Maintaining fund structure (Cayman, Lux, Delaware) · K-1 issuance for US LPs · withholding optimization · BEPS Pillar 2",
    koOutsource: "Hybrid — 내부 Tax Director + Big 4 자문",
    enOutsource: "Hybrid — internal Tax Director plus Big 4 advisory",
  },
  {
    koTeam: "Legal / Secretariat",
    enTeam: "Legal / Secretariat",
    koDuties: "LPA 준수 모니터링 · side letter 관리 · LPAC meeting 운영 · regulatory filing 지원",
    enDuties: "LPA compliance monitoring · side letter management · LPAC meeting operations · regulatory filing support",
    koOutsource: "In-house GC + 외부 (Kirkland·Latham·Simpson Thacher · 한국은 김앤장·세종·태평양)",
    enOutsource: "In-house GC plus outside counsel (Kirkland, Latham, Simpson Thacher)",
  },
  {
    koTeam: "Technology",
    enTeam: "Technology",
    koDuties: "Fund admin system (eFront·Investran·Allvue) · IR portal · cybersecurity · 데이터 warehouse",
    enDuties: "Fund admin systems (eFront, Investran, Allvue) · IR portal · cybersecurity · data warehouse",
    koOutsource: "Hybrid — core platform 외주, internal team이 integration/data 담당",
    enOutsource: "Hybrid — core platform vendored, internal team owns integration and data",
  },
];

const CAREER_ROUTES_KR = [
  {
    koEntry: "Big 4 회계법인 감사",
    enEntry: "Big 4 Korea audit",
    koPath: "삼일·삼정·한영·안진 회계감사 3-5년 → CPA + 펀드 감사 경험 → PE Fund Accounting Manager",
    enPath: "3-5 years at Samil, Samjong, Hanyoung, or Anjin — CPA plus fund-audit experience, then PE fund accounting manager",
    koTarget: "Fund Accounting Manager → Controller → CFO",
    enTarget: "Fund Accounting Manager → Controller → CFO",
  },
  {
    koEntry: "자산운용사 운용지원",
    enEntry: "Korean AM operations",
    koPath: "미래에셋·삼성·한국투자 운용지원 부서 3-5년 → 사모펀드 운용사 백오피스로 lateral",
    enPath: "3-5 years in operations at Mirae Asset, Samsung, or Korea Investment, then lateral into a PE back office",
    koTarget: "Fund Admin Director → COO",
    enTarget: "Fund Admin Director → COO",
  },
  {
    koEntry: "신탁사 / Custody",
    enEntry: "Trust / custody",
    koPath: "KB·하나·국민 신탁부서 → NAV reconciliation 경험 → PE Treasury / Fund Admin",
    enPath: "KB, Hana, Kookmin trust departments — NAV reconciliation experience moving into PE treasury or fund admin",
    koTarget: "PE Treasury Director",
    enTarget: "PE Treasury Director",
  },
  {
    koEntry: "IB Sub-line lender",
    enEntry: "IB sub-line lender",
    koPath: "산은·신한·하나 IB부서에서 PE sub-line 제공 5-7년 → PE 내부 Treasury (lender-side 시야가 강점)",
    enPath: "5-7 years at KDB, Shinhan, Hana IB providing sub-lines, then PE in-house treasury (lender-side perspective)",
    koTarget: "PE CFO 트랙",
    enTarget: "PE CFO track",
  },
  {
    koEntry: "Law Firm (김앤장·세종·태평양)",
    enEntry: "Korean Big Law",
    koPath: "PE 자문 lawyer 5-7년 → PE 내부 General Counsel / Compliance Head",
    enPath: "5-7 years advising PE at Kim&Chang, Shin&Kim, Bae Kim Lee — moves to in-house GC or CCO",
    koTarget: "General Counsel / CCO",
    enTarget: "General Counsel / CCO",
  },
];

const CAREER_ROUTES_US = [
  {
    koEntry: "Big 4 Audit / Tax",
    enEntry: "Big 4 audit / tax",
    koPath: "PwC·EY·Deloitte·KPMG 감사·세무 3-5년 → PE Fund Accounting / Tax",
    enPath: "3-5 years at PwC, EY, Deloitte, KPMG in audit or tax, then PE fund accounting or tax",
    koTarget: "Fund Accounting Manager → Controller → CFO",
    enTarget: "Fund Accounting Manager → Controller → CFO",
  },
  {
    koEntry: "Fund Administrator",
    enEntry: "Fund administrator",
    koPath: "Citco·SS&C·Apex·Gen II에서 GP-side admin 5-7년 → PE in-house Fund Ops",
    enPath: "5-7 years at Citco, SS&C, Apex, or Gen II on the GP-services side, then in-house at the PE",
    koTarget: "Head of Fund Operations → COO",
    enTarget: "Head of Fund Operations → COO",
  },
  {
    koEntry: "Investment Banking Ops",
    enEntry: "IB operations",
    koPath: "Goldman·MS·JPM IB Ops 부서 3-5년 → PE Treasury / IR로 lateral",
    enPath: "3-5 years in IB ops at Goldman, Morgan Stanley, or JPM — lateral into PE treasury or IR",
    koTarget: "PE Treasury Director / IR Director",
    enTarget: "PE Treasury Director / IR Director",
  },
  {
    koEntry: "Big Law PE Practice",
    enEntry: "Big Law PE practice",
    koPath: "Kirkland·Latham·Simpson Thacher PE practice 7-9년 → PE in-house GC",
    enPath: "7-9 years in the PE practice at Kirkland, Latham, or Simpson Thacher — moves to PE in-house GC",
    koTarget: "General Counsel",
    enTarget: "General Counsel",
  },
  {
    koEntry: "Burnt-out Front Office",
    enEntry: "Burnt-out front office",
    koPath: "PE Associate 2-4년 후 hours·exit 좌절 → middle/back office로 lateral",
    enPath: "2-4 years as a PE Associate then frustration with hours and exits — lateral into middle or back office",
    koTarget: "Head of Portfolio Operations / Head of IR",
    enTarget: "Head of Portfolio Operations / Head of IR",
  },
];

const EXIT_OPTIONS = [
  {
    koDest: "Family Office CFO/COO",
    enDest: "Family office CFO/COO",
    koWhy: "PE 출신이 가장 선호하는 exit. 시간 통제 · 보상 안정 · LP 경험이 자산.",
    enWhy: "The most desired exit for PE veterans — time control, stable comp, and LP experience as a moat.",
  },
  {
    koDest: "Big 4 Partner (Deal Advisory)",
    enDest: "Big 4 partner (deal advisory)",
    koWhy: "PE Fund Ops 경험 + Big 4 background → partner 트랙 단축",
    enWhy: "PE fund ops experience plus a Big 4 background shortens the partner track.",
  },
  {
    koDest: "Endowment / Pension Fund",
    enDest: "Endowment / pension fund",
    koWhy: "GP-side 경험으로 LP-side 보면 차원이 다른 due diligence 가능",
    enWhy: "GP-side experience lets you read LP-side decks at a different depth.",
  },
  {
    koDest: "Fund Admin C-suite (Apex·SS&C)",
    enDest: "Fund admin C-suite (Apex, SS&C)",
    koWhy: "Senior PE Ops → admin firm의 C-level로 이동 — 보상이 PE보다 높을 수도",
    enWhy: "Senior PE ops people often move to C-level at admin firms — pay can exceed PE itself.",
  },
  {
    koDest: "Independent Consultant",
    enDest: "Independent consultant",
    koWhy: "PE 백오피스 setup · admin transition 컨설팅 — 시간당 $500-1,500",
    enWhy: "Advising on PE back-office setups and admin transitions — billing rates of $500-1,500/hour.",
  },
];

/* ============================================================
   COMPONENT
============================================================ */

const TOC_ITEMS = [
  { id: "why-three-tiers",    ko: "§1. 왜 3-tier로 나뉘는가",      en: "§1 Why three tiers" },
  { id: "front-office",       ko: "§2. Front Office — Deal Team", en: "§2 Front office — deal team" },
  { id: "middle-office",      ko: "§3. Middle Office",             en: "§3 Middle office" },
  { id: "back-office",        ko: "§4. Back Office",               en: "§4 Back office" },
  { id: "career-paths",       ko: "§5. 진입 루트와 커리어 경로",   en: "§5 Entry routes and careers" },
];

export default function MaFundOps01Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getFundOpsSeriesNav(SLUG);
  const meta = getFundOpsChapterBySlug(SLUG);

  if (!meta) return null;

  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">

        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span>
          <span>{ko ? "Fund Ops 시리즈" : "Fund Ops Series"}</span>
          <span className="mx-2">›</span>
          <span className="text-gray-700 dark:text-gray-300">Ch.1</span>
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>
              {ko ? "Fund Ops 시리즈 · Ch.1" : "Fund Ops Series · Ch.1"}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q1 2026 기준` : `~${meta.readingMinutes} min · data as of Q1 2026`}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        {/* Share top */}
        <div className="mb-10">
          <ShareButtons lang={lang} title={title} variant="top" />
        </div>

        {/* Q1 2026 stats banner */}
        <div className="mb-12 rounded-xl border-2 p-6" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
          <div className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: ACCENT }}>
            {ko ? "Q1 2026 — Fund Ops 시장 한눈에" : "Q1 2026 — Fund Ops market at a glance"}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {Q1_2026_STATS.map((s, i) => (
              <div key={i} className="rounded-lg bg-white dark:bg-gray-900 p-4 border border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{ko ? s.koLabel : s.enLabel}</div>
                <div className="text-2xl font-bold mb-2" style={{ color: ACCENT }}>{s.value}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? s.koDetail : s.enDetail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* TOC */}
        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">
            {ko ? "목차" : "Contents"}
          </div>
          <ul className="space-y-2">
            {TOC_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-gray-700 dark:text-gray-300 hover:underline" style={{ color: ACCENT }}>
                  {ko ? item.ko : item.en}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ============ § 1. Why three tiers ============ */}
        <section id="why-three-tiers" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            {ko ? "§ 1. 왜 3-tier로 나뉘는가 — Conflict of interest와 사고의 역사" : "§ 1 Why three tiers — conflict of interest and the history of failure"}
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {ko
              ? "단일 팀이 deal sourcing부터 valuation, cash 관리, LP 보고까지 다 한다면 어떨까. Deal team이 valuation도 한다면 자기 portco의 가치를 깎을 인센티브가 없다. Cash 관리까지 한다면 fund 간 자금 이체를 누구도 견제 못 한다. LP 보고까지 한다면 손실을 숨기는 게 너무 쉽다."
              : "Imagine one team owning sourcing, valuation, cash management, and LP reporting end-to-end. If the deal team also runs valuation, no one has an incentive to mark their own portco down. If they touch cash, inter-fund transfers go unchecked. If they own LP reporting, hiding losses becomes trivial."}
          </p>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "이게 단순한 이론이 아니라 2008년 Madoff 폰지가 정확히 이 메커니즘으로 $65B을 굴렸다. Feeder fund들은 Madoff가 주는 broker statement를 그대로 받아 NAV를 계산했고, audit firm은 reconciliation 없이 sign-off했다. 같은 패턴이 2018 Abraaj $14B 사기, 2019 라임 ₩1.6조 환매중단, 2020 옵티머스 ₩5,500억 사기에 그대로 반복됐다."
              : "This is not theoretical. The 2008 Madoff Ponzi ran $65B precisely on this mechanism — feeder funds calculated NAVs from Madoff's own broker statements, and audit firms signed off without independent reconciliation. The same pattern recurred at Abraaj in 2018 ($14B fraud) and in multiple subsequent fund failures."}
          </p>

          <div className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-6 mb-8 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-lg font-bold mb-4">
              {ko ? "분리의 3원칙 (Three Principles of Separation)" : "Three principles of separation"}
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: ACCENT }}>
                <div className="font-semibold text-sm mb-1">
                  {ko ? "1. Independence — 검증은 반드시 외부에서" : "1. Independence — verification must come from outside"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Valuation은 GP가 한 mark를 Big 4 (Kroll·Houlihan·EY)가 외부 검증해야 한다. Fund admin도 GP가 self-admin하면 안 되고, 3rd party admin (Apex·SS&C·Citco)을 써야 한다."
                    : "GP marks must be reviewed by an external Big 4 (Kroll, Houlihan, EY). Fund admin should be a third party (Apex, SS&C, Citco) — never self-administered by the GP."}
                </div>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: ACCENT }}>
                <div className="font-semibold text-sm mb-1">
                  {ko ? "2. Reconciliation — Front이 한 일을 Back이 다시 본다" : "2. Reconciliation — back office re-checks what front office did"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Deal team이 capital call $50M 보낸다면, fund admin은 wire 도착 시점·금액·sender를 독립적으로 확인한다. 매일 cash position, 매주 portfolio holdings, 매분기 NAV가 다 reconcile돼야 한다."
                    : "When the deal team requests a $50M capital call, fund admin independently verifies wire arrival, amount, and sender. Cash reconciles daily, holdings weekly, NAV quarterly."}
                </div>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: ACCENT }}>
                <div className="font-semibold text-sm mb-1">
                  {ko ? "3. Segregation of Duties — 한 사람이 한 cycle 전체를 통제 못 함" : "3. Segregation of duties — no single person owns a full cycle"}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {ko
                    ? "Wire 송금 한 건도 initiator → approver → releaser로 최소 3명 검증. Capital call도 deal team이 요청, CFO가 승인, admin이 발송. 한 사람이 시작부터 끝까지 보면 사고 1순위."
                    : "A single wire requires initiator → approver → releaser — at least three people. Capital calls: requested by deal team, approved by CFO, released by admin. One person owning end-to-end is the leading indicator of fraud."}
                </div>
              </div>
            </div>
          </div>

          {/* Historical drivers timeline */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "이 구조를 만든 6개의 사건 (2008-2023)" : "Six events that built the modern structure (2008-2023)"}
          </h3>
          <div className="space-y-3 mb-8">
            {HISTORICAL_DRIVERS.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 px-3 py-1 rounded text-xs font-bold text-white" style={{ backgroundColor: ACCENT }}>
                    {d.year}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-sm mb-2">{ko ? d.koEvent : d.enEvent}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-semibold">{ko ? "교훈: " : "Lesson: "}</span>
                      {ko ? d.koLesson : d.enLesson}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">
                      <span className="font-semibold">{ko ? "결과: " : "Outcome: "}</span>
                      {ko ? d.koOutcome : d.enOutcome}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Viz 1: Three-tier overview */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "3-Tier 한눈에 보기" : "The three tiers at a glance"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {TIER_OVERVIEW.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl border-2 border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
              >
                <div className="text-xs font-bold uppercase tracking-wide mb-3 px-2 py-1 inline-block rounded text-white" style={{ backgroundColor: ACCENT }}>
                  {t.tierEn}
                </div>
                <div className="font-semibold text-sm mb-2">{ko ? t.koTeams : t.enTeams}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  <span className="font-semibold">{ko ? "역할: " : "Mandate: "}</span>
                  {ko ? t.koMandate : t.enMandate}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                  <span className="font-semibold">{ko ? "사람: " : "People: "}</span>
                  {ko ? t.koPeople : t.enPeople}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mb-3 leading-relaxed">
                  <span className="font-semibold">{ko ? "헤드카운트: " : "Headcount: "}</span>
                  {ko ? t.koHeadcount : t.enHeadcount}
                </div>
                <div className="text-xs leading-relaxed pt-3 border-t border-gray-200 dark:border-gray-700" style={{ color: ACCENT }}>
                  <span className="font-semibold">{ko ? "평가 기준: " : "Held to: "}</span>
                  {ko ? t.koAccountability : t.enAccountability}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ § 2. Front Office ============ */}
        <section id="front-office" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            {ko ? "§ 2. Front Office — Deal Team의 하루" : "§ 2 Front office — a day in the deal team"}
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "Front Office는 우리가 흔히 '사모펀드 사람들'이라 부르는 그 deal team이다. Fund 시리즈 Ch.4에서 다룬 250:1 funnel의 주체, IC memo의 저자, portco board의 representative. 한국 mega-cap PE (MBK·Hahn·IMM) 기준 investment team은 보통 25-40명, mid-cap PE는 10-20명. 미국 mega-cap (Blackstone·KKR·Carlyle)은 500-1,000명 규모."
              : "Front office is what people mean when they say 'private equity people' — the deal team. The owners of the 250:1 funnel from Ch.4 of the Fund series, the authors of the IC memo, the representatives on portco boards. At a Korean mega-cap (MBK, Hahn, IMM) the investment team is typically 25-40; at a mid-cap, 10-20. At US mega-caps (Blackstone, KKR, Carlyle), it runs 500-1,000."}
          </p>

          {/* Front Office Day */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "PE Associate의 평일 하루 (서울/뉴욕 공통 패턴)" : "A weekday in the life of a PE Associate (Seoul/NY)"}
          </h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-8">
            {FRONT_OFFICE_DAY.map((d, i) => (
              <div key={i} className={`flex gap-4 p-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0 ${i % 2 === 0 ? "bg-white dark:bg-gray-900" : "bg-gray-50 dark:bg-gray-900/50"}`}>
                <div className="flex-shrink-0 w-16 font-mono text-sm font-semibold" style={{ color: ACCENT }}>{d.time}</div>
                <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? d.koActivity : d.enActivity}</div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 italic leading-relaxed mb-4">
            {ko
              ? "Front Office의 진짜 핵심역량: ① IC를 통과시킬 수 있는 thesis 짜기, ② Banker / consultant / lawyer 네트워크, ③ Portco CEO를 다루는 board skill, ④ Exit timing 감각. 보상은 carry로 받기 때문에 5-7년 보상 deferred."
              : "What separates the strongest front-office operators: (1) building an IC-passable thesis, (2) banker/consultant/lawyer networks, (3) board-level skill with portco CEOs, (4) exit-timing instinct. Pay is carry-driven, so true comp is 5-7 years deferred."}
          </p>
        </section>

        {/* Share mid */}
        <div className="my-16">
          <ShareButtons lang={lang} title={title} variant="mid" />
        </div>

        {/* ============ § 3. Middle Office ============ */}
        <section id="middle-office" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            {ko ? "§ 3. Middle Office — Deal과 Fund 사이의 brain" : "§ 3 Middle office — the brain between deal and fund"}
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "Middle Office는 post-2008에서 가장 빠르게 성장한 tier다. Dodd-Frank (2010), AIFMD (2013), SEC Marketing Rule (2022) 모두 미들 오피스 헤드카운트를 강제 증가시켰다. 2026년 현재는 ESG/SFDR (EU Sustainable Finance Disclosure Regulation) 보고가 또 한 번 인력 확장을 유발하고 있다."
              : "Middle office is the fastest-growing tier post-2008. Dodd-Frank (2010), AIFMD (2013), and the SEC Marketing Rule (2022) all forced middle-office headcount growth. As of 2026, ESG and SFDR (EU Sustainable Finance Disclosure Regulation) reporting is driving another expansion."}
          </p>

          <div className="space-y-4 mb-8">
            {MIDDLE_OFFICE_DETAIL.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-white dark:bg-gray-900"
              >
                <div className="font-bold text-base mb-3" style={{ color: ACCENT }}>{ko ? t.koTeam : t.enTeam}</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <div className="font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">{ko ? "주요 업무" : "Core duties"}</div>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koDuties : t.enDuties}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">{ko ? "시스템 / 도구" : "Systems / tools"}</div>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koTools : t.enTools}</div>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase tracking-wide">{ko ? "Q1 2026 트렌드" : "Q1 2026 trend"}</div>
                    <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{ko ? t.koRecentTrend : t.enRecentTrend}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ============ § 4. Back Office ============ */}
        <section id="back-office" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            {ko ? "§ 4. Back Office — Fund의 심장" : "§ 4 Back office — the heart of the fund"}
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "Back Office는 매일 cash가 어디 있는지 알고, 매주 holding이 정확한지 reconcile하고, 매분기 NAV를 발행하고, 매년 audit을 통과시키는 사람들이다. Front Office가 thesis로 살아남는다면, Back Office는 zero-defect 원칙으로 살아남는다. NAV 한 번 틀리면 LP 신뢰가 무너지고, wire 한 건 잘못 보내면 $30M이 사라진다."
              : "Back office is the team that knows where the cash is every day, reconciles holdings every week, issues NAV every quarter, and shepherds the audit every year. Where front office lives or dies on thesis, back office lives or dies on zero defects. One bad NAV and LP trust evaporates; one bad wire and $30M is gone."}
          </p>

          <div className="space-y-3 mb-8">
            {BACK_OFFICE_DETAIL.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="md:w-48 flex-shrink-0">
                    <div className="font-bold text-sm" style={{ color: ACCENT }}>{ko ? t.koTeam : t.enTeam}</div>
                  </div>
                  <div className="flex-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    <div className="mb-2">{ko ? t.koDuties : t.enDuties}</div>
                    <div className="text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">{ko ? "외주 모델: " : "Outsourcing: "}</span>
                      {ko ? t.koOutsource : t.enOutsource}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top fund admins Q1 2026 */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "Top 10 Fund Administrators (Q1 2026 기준)" : "Top 10 fund administrators (as of Q1 2026)"}
          </h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-12">#</th>
                  <th className="text-left p-3">{ko ? "운용사" : "Firm"}</th>
                  <th className="text-right p-3 w-24">AUA ($T)</th>
                  <th className="text-left p-3 w-40">HQ</th>
                  <th className="text-left p-3">{ko ? "특징" : "Profile"}</th>
                </tr>
              </thead>
              <tbody>
                {TOP_FUND_ADMINS_Q1_2026.map((a) => (
                  <tr key={a.rank} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold" style={{ color: ACCENT }}>{a.rank}</td>
                    <td className="p-3 font-semibold">{a.name}</td>
                    <td className="p-3 text-right font-mono">{a.aua.toFixed(1)}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400">{ko ? a.koHq : a.enHq}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? a.koDesc : a.enDesc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-4">
            {ko
              ? "출처: 각 사 IR 자료, Convergence Inc., Funds Europe 2026 Q1 fund administrator survey 기준 추정치. AUA는 alternative assets under administration."
              : "Source: company IR, Convergence Inc., and Funds Europe Q1 2026 fund-administrator survey estimates. AUA = alternative assets under administration."}
          </p>
        </section>

        {/* ============ § 5. Career Paths ============ */}
        <section id="career-paths" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">
            {ko ? "§ 5. 진입 루트와 커리어 경로 — 어떻게 들어가고 어디로 가는가" : "§ 5 Entry routes and career paths — how to break in and where it leads"}
          </h2>

          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko
              ? "PE Front Office는 IB 1-2년차 대상으로 buy-side recruiting을 통해 들어가는 게 정석이지만, Middle/Back Office는 진입 루트가 훨씬 다양하다. Big 4 회계법인, fund administrator, IB Ops, law firm — 다 PE 백/미들로 lateral하는 표준 경로다. 한국과 미국이 패턴이 살짝 다른데, 한국은 자산운용사·신탁사 경유가 많고 미국은 fund administrator 경유가 압도적이다."
              : "Front office is the classic banking-to-PE buy-side path, but middle and back office have many more entry routes. Big 4, fund administrators, IB ops, law firms — all are standard lateral routes into PE middle/back. The pattern diverges slightly between Korea and the US: Korean candidates often come via AM/trust companies, while in the US the fund-administrator route dominates."}
          </p>

          {/* Comp ladders side-by-side */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "Q1 2026 Comp Ladder — US vs Korea, tier별 비교" : "Q1 2026 comp ladder — US vs Korea, by tier"}
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 text-sm font-semibold">
                {ko ? "🇺🇸 미국 (총보상 = base + bonus + early carry, 단위 USD)" : "🇺🇸 United States (total comp = base + bonus + early carry, USD)"}
              </div>
              <table className="w-full text-xs">
                <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-gray-500 dark:text-gray-400">
                    <th className="text-left p-2">{ko ? "직급" : "Level"}</th>
                    <th className="text-right p-2">Front</th>
                    <th className="text-right p-2">Middle</th>
                    <th className="text-right p-2">Back</th>
                  </tr>
                </thead>
                <tbody>
                  {COMP_LADDER_US_Q1_2026.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <td className="p-2 font-medium">{ko ? c.level : c.levelEn}</td>
                      <td className="p-2 text-right font-mono">{c.front}</td>
                      <td className="p-2 text-right font-mono">{c.middle}</td>
                      <td className="p-2 text-right font-mono">{c.back}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-800 p-3 text-sm font-semibold">
                {ko ? "🇰🇷 한국 (총보상 = base + bonus + early carry, 단위 KRW)" : "🇰🇷 Korea (total comp = base + bonus + early carry, KRW)"}
              </div>
              <table className="w-full text-xs">
                <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                  <tr className="text-gray-500 dark:text-gray-400">
                    <th className="text-left p-2">{ko ? "직급" : "Level"}</th>
                    <th className="text-right p-2">Front</th>
                    <th className="text-right p-2">Middle</th>
                    <th className="text-right p-2">Back</th>
                  </tr>
                </thead>
                <tbody>
                  {COMP_LADDER_KR_Q1_2026.map((c, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                      <td className="p-2 font-medium">{ko ? c.level : c.levelEn}</td>
                      <td className="p-2 text-right font-mono">{c.front}</td>
                      <td className="p-2 text-right font-mono">{c.middle}</td>
                      <td className="p-2 text-right font-mono">{c.back}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 italic mb-8">
            {ko
              ? "Front Office는 carry가 70%+를 차지하므로 표시 금액은 fully vested 가정. Partner 레벨은 fund 성과에 따라 ±5x 변동 가능. Heidrick & Struggles · Hudson Sandler · Spencer Stuart 2026 Q1 PE comp survey 추정."
              : "Front office comp is 70%+ carry, shown fully vested. At partner level, fund performance creates ±5x variance. Estimates derived from Heidrick & Struggles, Hudson Sandler, Spencer Stuart Q1 2026 PE comp surveys."}
          </p>

          {/* Career routes KR */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "🇰🇷 한국 진입 루트 5가지" : "🇰🇷 Five Korean entry routes"}
          </h3>
          <div className="space-y-2 mb-8">
            {CAREER_ROUTES_KR.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="md:w-56 flex-shrink-0">
                    <div className="font-bold text-sm" style={{ color: ACCENT }}>{ko ? r.koEntry : r.enEntry}</div>
                    <div className="text-xs text-gray-500 mt-1">→ {ko ? r.koTarget : r.enTarget}</div>
                  </div>
                  <div className="flex-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    {ko ? r.koPath : r.enPath}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Career routes US */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "🇺🇸 미국 진입 루트 5가지" : "🇺🇸 Five US entry routes"}
          </h3>
          <div className="space-y-2 mb-8">
            {CAREER_ROUTES_US.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex flex-col md:flex-row md:items-start gap-3">
                  <div className="md:w-56 flex-shrink-0">
                    <div className="font-bold text-sm" style={{ color: ACCENT }}>{ko ? r.koEntry : r.enEntry}</div>
                    <div className="text-xs text-gray-500 mt-1">→ {ko ? r.koTarget : r.enTarget}</div>
                  </div>
                  <div className="flex-1 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                    {ko ? r.koPath : r.enPath}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Exit options */}
          <h3 className="text-lg font-bold mb-4">
            {ko ? "Fund Ops 출신의 exit options" : "Exit options for Fund Ops veterans"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
            {EXIT_OPTIONS.map((e, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900">
                <div className="font-bold text-sm mb-2" style={{ color: ACCENT }}>{ko ? e.koDest : e.enDest}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{ko ? e.koWhy : e.enWhy}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Wrap */}
        <section className="mb-12">
          <div className="rounded-xl border-2 p-6" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-lg font-bold mb-3">{ko ? "Ch.1 정리 — 그래서 무엇을 잡고 가야 하는가" : "Ch.1 wrap — what to take away"}</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "Front/Middle/Back 분리는 미덕이 아니라 의무 — Madoff·Abraaj·Lime이 가르쳐 준 비싼 교훈" : "Front/middle/back separation is not a virtue but an obligation — taught the hard way by Madoff, Abraaj, Lime"}</li>
              <li>• {ko ? "분리의 3원칙: Independence (외부 검증), Reconciliation (back이 front 확인), Segregation of Duties (한 명이 한 cycle 전체 통제 X)" : "Three principles: independence (external verification), reconciliation (back re-checks front), segregation of duties (no single cycle owner)"}</li>
              <li>• {ko ? "Mega-cap PE 헤드카운트는 Front 25-30% + Middle 20-25% + Back 35-45%. Ops가 절반 이상." : "At mega-cap PE: front 25-30% + middle 20-25% + back 35-45%. Ops is more than half the firm."}</li>
              <li>• {ko ? "Fund Admin 70%+는 외주 — Apex·SS&C·State Street·Alter Domus·Citco가 시장의 60% 점유" : "70%+ of fund admin is outsourced — Apex, SS&C, State Street, Alter Domus, Citco hold 60% of the market"}</li>
              <li>• {ko ? "Career path는 다양: Big 4 → Fund Accounting / Admin → PE Ops / IB Ops → PE Treasury / Law → GC. 한국은 자산운용·신탁사 경유가 추가." : "Many paths: Big 4 → fund accounting / admin → PE ops / IB ops → PE treasury / law → GC. In Korea, add the AM/trust route."}</li>
              <li>• {ko ? "다음 챕터: LP onboarding + capital call 실무 — KYC/AML, side letter MFN, BEC wire fraud 사례까지" : "Next chapter: LP onboarding and capital calls — KYC/CDD, side letter MFN, and BEC wire fraud cases"}</li>
            </ul>
          </div>
        </section>

        {/* Share bottom */}
        <div className="mb-10">
          <ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} />
        </div>

        {/* Like */}
        <div className="flex justify-center mb-10">
          <LikeButton slug={SLUG} lang={lang} />
        </div>

        {/* Series nav */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (
            <Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition">
              <div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div>
              <div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div>
            </Link>
          ) : <div />}
          {nav.next ? (
            <Link href={ko ? `/deal-101/${nav.next.slug}` : `/en/deal-101/${nav.next.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right">
              <div className="text-xs text-gray-500 mb-1">{ko ? "다음 →" : "Next →"}</div>
              <div className="text-sm font-semibold">Ch.{nav.next.ch} · {ko ? nav.next.titleKo : nav.next.titleEn}</div>
            </Link>
          ) : (
            <Link href={ko ? "/learn" : "/en/learn"} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right">
              <div className="text-xs text-gray-500 mb-1">{ko ? "학습 인덱스 →" : "Learn index →"}</div>
              <div className="text-sm font-semibold">{ko ? "전체 시리즈 보기" : "Browse all series"}</div>
            </Link>
          )}
        </div>

      </div>
      </div>
      <Footer />
    </>
  );
}
