import type { DealData } from "@/lib/deal-data";
import blackstoneKenedix from "./blackstone-kenedix";
import mbkHomeplus from "./mbk-homeplus";
import skhynixIntelNand from "./skhynix-intel-nand";
import microsoftActivision from "./microsoft-activision";
import elonMuskTwitter from "./elon-musk-twitter";
import adobeFigmaBlocked from "./adobe-figma-blocked";
import broadcomVmware from "./broadcom-vmware";
import warnerDiscoveryMerger from "./warner-discovery-merger";
import lvmhTiffany from "./lvmh-tiffany";
import salesforceSlack from "./salesforce-slack";
import metaInstagram from "./meta-instagram";
import metaWhatsapp from "./meta-whatsapp";
import microsoftLinkedin from "./microsoft-linkedin";
import googleYoutube from "./google-youtube";
import amazonWholeFoods from "./amazon-whole-foods";
import microsoftGithub from "./microsoft-github";
import microsoftNuance from "./microsoft-nuance";
import kkrRjrNabisco from "./kkr-rjr-nabisco";
import disneyPixar from "./disney-pixar";
import daimlerChrysler from "./daimler-chrysler";
import hpCompaq from "./hp-compaq";
import nvidiaArm from "./nvidia-arm";
import qualcommNxp from "./qualcomm-nxp";
import illuminaGrail from "./illumina-grail";
import ebayPaypalSpinoff from "./ebay-paypal-spinoff";
import geBreakup from "./ge-breakup";
import abbottAbbvieSpinoff from "./abbott-abbvie-spinoff";
import salesforceMulesoft from "./salesforce-mulesoft";
import sapQualtrics from "./sap-qualtrics";
import zendeskPeBuyout from "./zendesk-pe-buyout";
import danaherAcquisitions from "./danaher-acquisitions";
import elliottSamsung from "./elliott-samsung";
import hanjinKcgi from "./hanjin-kcgi";
import koreaZincMbk from "./korea-zinc-mbk";
import kkrSamsungSdsCb from "./kkr-samsung-sds-cb";
import mbkMakinoAltemira from "./mbk-makino-altemira";
import lvmhHermes from "./lvmh-hermes";
import jpmorganBearStearns from "./jpmorgan-bear-stearns";
import pershingSquareCpRail from "./pershing-square-cp-rail";
import valueactMicrosoft from "./valueact-microsoft";
import thirdPointSony from "./third-point-sony";
import trianPg from "./trian-pg";
import oraclePeoplesoft from "./oracle-peoplesoft";
import porscheVolkswagen from "./porsche-volkswagen";
import disneyFox from "./disney-fox";
import aolTimeWarner from "./aol-time-warner";
// 신규 추가 딜 — M&A
import abInBevSabmiller from "./ab-inbev-sabmiller";
import vodafoneMannesmann from "./vodafone-mannesmann";
import attTimeWarner from "./att-time-warner";
// 신규 추가 딜 — 행동주의
import engineNo1Exxon from "./engine-no1-exxon";
import icahnApple from "./icahn-apple";
import icahnTimeWarner from "./icahn-time-warner";
import trianDisney from "./trian-disney";
import trianDupont from "./trian-dupont";
import elliottHyundai from "./elliott-hyundai";
import elliottTwitter from "./elliott-twitter";
import thirdPointShell from "./third-point-shell";
import thirdPointNestle from "./third-point-nestle";
import thirdPointYahoo from "./third-point-yahoo";
import janaWholeFoods from "./jana-whole-foods";
import elliottAtt from "./elliott-att";
import pershingSquareHerbalife from "./pershing-square-herbalife";
// 신규 추가 딜 — 구조조정
import dowdupont from "./dowdupont-breakup";
import jjKenvue from "./jj-kenvue";
import ibmKyndryl from "./ibm-kyndryl";
import attWarnemediaDivestiture from "./att-warnemedia-divestiture";
import siemensBreakup from "./siemens-breakup";
// 신규 추가 딜 — 경영권분쟁
import bhpRioTinto from "./bhp-rio-tinto";
import kraftUnilever from "./kraft-unilever";
import hanmiPharmaControl from "./hanmi-pharma-control";
import coucheTard7eleven from "./couche-tard-7eleven";
import airgasAirProducts from "./airgas-air-products";
// LevFin / 신디케이티드론 관점 딜
import bayerMonsanto from "./bayer-monsanto";
import kkrToysRUs from "./kkr-toys-r-us";
import iheartmediaClearChannel from "./iheartmedia-clear-channel";
import apolloCaesars from "./apollo-caesars";
import jcrewIpTransfer from "./jcrew-ip-transfer";
import sertaSimmons from "./serta-simmons-uptier";
import kkrDollarGeneral from "./kkr-dollar-general";
// 신규 추가 딜 — LBO 교육 케이스
import blackstoneHilton2007 from "./blackstone-hilton-2007";
import kkrTxuEnergyFuture from "./kkr-txu-energy-future";
import silverLakeDell from "./silver-lake-dell-takeprivate";
import bcPartnersPetsmart from "./bc-partners-petsmart";
import g3CapitalBurgerKing from "./3g-capital-burger-king";
import starboardDardenOliveGarden from "./starboard-darden-olive-garden";
import pershingSquareAllergan from "./pershing-square-allergan";
// 신규 추가 딜 — 정교한 구조 시리즈
import skSquare11stPutDefault from "./sk-square-11st-put-default";
import aramcoOilPipelines from "./aramco-oil-pipelines";
import bmsCelgeneCvr from "./bms-celgene-cvr";
import nipponSteelUsSteel from "./nippon-steel-us-steel";
import doosanRoboticsBobcatWithdrawn from "./doosan-robotics-bobcat-withdrawn";
import harimHmmFailed from "./harim-hmm-failed";
import toshibaJipTakeprivate from "./toshiba-jip-takeprivate";
import berkshireOxyAnadarko from "./berkshire-oxy-anadarko";
import softbankVisionFundLpStructure from "./softbank-vision-fund-lp-structure";
import sanofiGenzymeCvr from "./sanofi-genzyme-cvr";
// 신규 추가 딜 — 행동주의/구조조정/LBO/M&A 다양화 시리즈
import ackmanValeantLoss from "./ackman-valeant-loss";
import hybeSmKakaoTender from "./hybe-sm-kakao-tender";
import hpHpeSplit from "./hp-hpe-split";
import vivendiUmgSpin from "./vivendi-umg-spin";
import hertzLboBankruptcy from "./hertz-lbo-bankruptcy";
import heinz3gKraftUnilever from "./heinz-3g-kraft-unilever";
import hanwhaDsme from "./hanwha-dsme";
import lenovoIbmThinkpad from "./lenovo-ibm-thinkpad";
import tataJlr from "./tata-jlr";
import attTmobileBlocked from "./att-tmobile-blocked";
// 신규 추가 딜 — 메가/실패/한국 추가 시리즈
import microsoftOpenaiStructured from "./microsoft-openai-structured";
import apolloAtheneMerger from "./apollo-athene-merger";
import ubsCreditSuisseRescue from "./ubs-credit-suisse-rescue";
import capitalOneDiscover from "./capital-one-discover";
import ciscoSplunk from "./cisco-splunk";
import synopsysAnsys from "./synopsys-ansys";
import bhpAngloAmericanHostile from "./bhp-anglo-american-hostile";
import halliburtonBakerHughesBlocked from "./halliburton-baker-hughes-blocked";
import energyTransferWilliamsFailed from "./energy-transfer-williams-failed";
import alignKtGFinancialsActivism from "./align-kt-g-financials-activism";
import emartStarbucksKorea from "./emart-starbucks-korea";
import kakaobankKospiIpo from "./kakaobank-kospi-ipo";
import geelyVolvoCars from "./geely-volvo-cars";
import pifNewcastleUnited from "./pif-newcastle-united";
import weworkBankruptcyNeumannBid from "./wework-bankruptcy-neumann-bid";

/**
 * 딜 레지스트리 — 새 딜 추가 시 import 후 배열에 추가
 * closedAt 내림차순 정렬 (최신 딜이 앞)
 */
export const ALL_DEALS: DealData[] = [
  mbkMakinoAltemira,       // 2026-05-11 (ma — 일본 FEFTA + 19일 피벗)
  kkrSamsungSdsCb,         // 2026-04-30 (ma — 한국 단일 사모 CB 최대급)
  coucheTard7eleven,       // 2025-12-31 (control, 진행중)
  skSquare11stPutDefault,  // 2025-10-29 (ma — 한국 PE-전략적 JV 풋옵션 디폴트 첫 케이스)
  synopsysAnsys,           // 2025-07-17 (ma — EDA + multiphysics 통합)
  nipponSteelUsSteel,      // 2025-06-18 (ma — 미국 정부 golden share 부과 첫 사례)
  capitalOneDiscover,      // 2025-05-18 (ma — 미국 결제 산업 30년 만 최대 통합)
  koreaZincMbk,            // 2025-03-28 (control)
  hanmiPharmaControl,      // 2024-12-31 (control, 진행중)
  doosanRoboticsBobcatWithdrawn, // 2024-10-21 (control — 행동주의+NPS+FSS 트라이앵글 첫 차단)
  weworkBankruptcyNeumannBid, // 2024-06-11 (ma — SoftBank $14B 손실 + Neumann 재인수 시도)
  bhpAngloAmericanHostile, // 2024-05-29 (control terminated — 4주 만의 적대적 무산, 구리 슈퍼사이클)
  trianDisney,             // 2024-04-03 (activism)
  geBreakup,               // 2024-04-02 (restructuring)
  illuminaGrail,           // 2024 forced divestiture
  ciscoSplunk,             // 2024-03-18 (ma — Cisco 사상 최대, observability/security)
  alignKtGFinancialsActivism, // 2024-02-26 (activism — 한국 dividend activism의 출발점)
  harimHmmFailed,          // 2024-02-06 (ma — 한국 국책 매각, 영구채가 막은 케이스)
  toshibaJipTakeprivate,   // 2023-12-20 (ma — 일본 도메스틱 컨소시엄 비상장화)
  adobeFigmaBlocked,       // 2023-12-18 (terminated)
  broadcomVmware,          // 2023-11-22
  microsoftActivision,     // 2023-10-13
  blackstoneKenedix,       // 2023-10-12
  jjKenvue,                // 2023-08-23 (restructuring)
  ubsCreditSuisseRescue,   // 2023-06-12 (ma — Swiss 강제 합병, AT1 $17B wipeout)
  hanwhaDsme,              // 2023-05-23 (ma — 한국 방위/조선 재편, 신주발행 인수 구조)
  hybeSmKakaoTender,       // 2023-03-26 (control — 한국 첫 경쟁적 공개매수)
  microsoftOpenaiStructured, // 2023-01-23 (ma — capped profit interest, 현대 AI 투자 구조)
  zendeskPeBuyout,         // 2022-11-22
  elonMuskTwitter,         // 2022-10-27
  attWarnemediaDivestiture, // 2022-04-08 (restructuring)
  warnerDiscoveryMerger,   // 2022-04-08
  microsoftNuance,         // 2022-03-04
  nvidiaArm,               // terminated 2022-02-08
  thirdPointShell,         // 2022-02-01 (activism — ESG 행동주의의 한계)
  apolloAtheneMerger,      // 2022-01-03 (ma — PE-보험 reverse merger)
  skhynixIntelNand,        // 2021-12-30
  ibmKyndryl,              // 2021-11-04 (restructuring)
  emartStarbucksKorea,     // 2021-10-29 (ma — Starbucks 본사로부터 한국 67.5% 인수)
  pifNewcastleUnited,      // 2021-10-07 (ma — 사우디 PIF의 EPL 진출, sovereign 분리 가이드)
  vivendiUmgSpin,          // 2021-09-21 (restructuring — 음악 산업 사상 최대 IPO)
  kakaobankKospiIpo,       // 2021-08-06 (ma — KOSPI 첫 디지털은행 IPO)
  salesforceSlack,         // 2021-07-21
  hanjinKcgi,              // 2021-06-30 (activism)
  aramcoOilPipelines,      // 2021-06-18 (ma — 파이프라인 25년 throughput 임차백)
  engineNo1Exxon,          // 2021-05-26 (activism)
  elliottAtt,              // 2021-05-17 (activism — AT&T $134B 인수 후처리, DirecTV+WarnerMedia 분리)
  lvmhTiffany,             // 2021-01-07
  siemensBreakup,          // 2020-09-28 (restructuring)
  sertaSimmons,            // 2020-06-22 (LevFin 업티어 익스체인지)
  danaherAcquisitions,     // multiple deals (latest: Cytiva 2020-03)
  elliottTwitter,          // 2020-03-09 (activism — 겸직 CEO 압박, Dorsey 사임 도화선)
  bmsCelgeneCvr,           // 2019-11-20 (ma — CVR 36일 지연으로 $6.4B 전액 무효)
  thirdPointNestle,        // 2019-09-01 (activism)
  berkshireOxyAnadarko,    // 2019-08-08 (ma — $10B 영구 우선주 + 워런트 백기사 financing)
  dowdupont,               // 2019-06-01 (restructuring)
  disneyFox,               // 2019-03-20
  sapQualtrics,            // 2019-01-23
  elliottHyundai,          // 2019-01-10 (activism)
  qualcommNxp,             // terminated 2018-07-26
  attTimeWarner,           // 2018-06-14
  bayerMonsanto,           // 2018-06-07 (ma + 신디케이티드론)
  microsoftGithub,         // 2018-06-04
  salesforceMulesoft,      // 2018-05-01
  pershingSquareHerbalife, // 2018-03-01 (activism — Ackman vs Icahn, 역대 최장 공매도 대결)
  trianPg,                 // 2017-12-15 (activism)
  amazonWholeFoods,        // 2017-08-28
  janaWholeFoods,          // 2017-08-28 (activism — Amazon 매각 촉발)
  softbankVisionFundLpStructure, // 2017-05-20 (ma — $100B 펀드, 우선/보통 분할 구조)
  ackmanValeantLoss,       // 2017-03-13 (activism — Pershing Square의 $4B 손실, 행동주의 실패 교과서)
  heinz3gKraftUnilever,    // 2017-02-19 (ma — 3G+버핏 LBO → Kraft 합병 → Unilever 48시간 무산)
  kraftUnilever,           // 2017-02-19 (control, withdrawn)
  microsoftLinkedin,       // 2016-12-08
  abInBevSabmiller,        // 2016-10-10
  energyTransferWilliamsFailed, // 2016-06-29 (ma terminated — Delaware MAC clause case-law)
  halliburtonBakerHughesBlocked, // 2016-05-01 (ma terminated — $3.5B reverse breakup fee 사상 최대)
  icahnApple,              // 2016-04-01 (activism)
  mbkHomeplus,             // 2015-11-30
  hpHpeSplit,              // 2015-11-01 (restructuring — Meg Whitman 주도 양사 분할)
  elliottSamsung,          // 2015-09-01 (activism)
  ebayPaypalSpinoff,       // 2015-07-17
  trianDupont,             // 2015-05-13 (activism — proxy fight loss → $130B merger)
  bcPartnersPetsmart,      // 2015-03-11 (LBO 교육 — 아마존 공포 역발상)
  lvmhHermes,              // 2014-12-17 (control)
  pershingSquareAllergan,    // 2014-11-17 (activism — 토홀드 전략, 화이트 나이트 Actavis)
  starboardDardenOliveGarden, // 2014-10-10 (activism — 294페이지 덱, 이사회 전원 교체)
  metaWhatsapp,            // 2014-10-06
  thirdPointSony,          // 2014-08-07 (activism)
  valueactMicrosoft,       // 2014-02-04 (activism)
  silverLakeDell,          // 2013-10-29 (LBO 교육 — 테크 테이크프라이빗)
  abbottAbbvieSpinoff,     // 2013-01-01
  metaInstagram,           // 2012-09-06
  porscheVolkswagen,       // 2012-08-01 (control)
  thirdPointYahoo,         // 2012-07-16 (activism)
  pershingSquareCpRail,    // 2012-05-17 (activism)
  attTmobileBlocked,       // 2011-12-19 (ma terminated — 사상 최대 reverse breakup fee 패키지)
  sanofiGenzymeCvr,        // 2011-04-08 (ma — CVR 발명의 원조 사례, 5-tranche milestone)
  jcrewIpTransfer,         // 2011-03-07 (LevFin Trap Door 케이스)
  airgasAirProducts,       // 2011-02-11 (control, withdrawn)
  g3CapitalBurgerKing,     // 2010-10-19 (LBO 교육 — ZBB + 재가맹점화)
  geelyVolvoCars,          // 2010-08-02 (ma — 중국→스웨덴 cross-border, 14년 후 IPO)
  bhpRioTinto,             // 2008-11-25 (control, withdrawn)
  iheartmediaClearChannel, // 2008-07-30 (LevFin Hung Deal)
  tataJlr,                 // 2008-06-02 (ma — 인도 → 영국 럭셔리 cross-border, 회생 성공)
  jpmorganBearStearns,     // 2008-05-30 (금융위기)
  apolloCaesars,           // 2008-01-28 (LevFin 코비넌트)
  blackstoneHilton2007,    // 2007-10-24 (LBO 교육 — CMBS + 오퍼레이션)
  kkrTxuEnergyFuture,      // 2007-10-10 (LBO 교육 — 역대 최대 PE 파산)
  kkrDollarGeneral,        // 2007-07-07 (LevFin LBO 성공 케이스)
  hertzLboBankruptcy,      // 2005-12-21 (LBO → 분식회계 → 2020 파산, 15년 호러 스토리)
  kkrToysRUs,              // 2005-07-21 (LevFin 케이스)
  lenovoIbmThinkpad,       // 2005-05-01 (ma — 중국 첫 글로벌 cross-border, CFIUS 템플릿)
  googleYoutube,           // 2006-10-31
  disneyPixar,             // 2006-05-05
  icahnTimeWarner,         // 2006-03-01 (activism)
  oraclePeoplesoft,        // 2004-12-28 (control)
  hpCompaq,                // 2002-05-03
  aolTimeWarner,           // 2001-01-11
  vodafoneMannesmann,      // 2000-04-12
  daimlerChrysler,         // 1998-11-12
  kkrRjrNabisco,           // 1989-02-09
];

export function getDealBySlug(slug: string): DealData | undefined {
  return ALL_DEALS.find((d) => d.slug === slug);
}

export function getAllSlugs(): string[] {
  return ALL_DEALS.map((d) => d.slug);
}

export function getDealsByCategory(category: DealData["category"]): DealData[] {
  return ALL_DEALS.filter((d) => d.category === category);
}
