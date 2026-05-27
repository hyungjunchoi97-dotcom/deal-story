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
import trianDisney from "./trian-disney";
import elliottHyundai from "./elliott-hyundai";
import thirdPointNestle from "./third-point-nestle";
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

/**
 * 딜 레지스트리 — 새 딜 추가 시 import 후 배열에 추가
 * closedAt 내림차순 정렬 (최신 딜이 앞)
 */
export const ALL_DEALS: DealData[] = [
  coucheTard7eleven,       // 2025-12-31 (control, 진행중)
  koreaZincMbk,            // 2025-03-28 (control)
  hanmiPharmaControl,      // 2024-12-31 (control, 진행중)
  trianDisney,             // 2024-04-03 (activism)
  geBreakup,               // 2024-04-02 (restructuring)
  illuminaGrail,           // 2024 forced divestiture
  adobeFigmaBlocked,       // 2023-12-18 (terminated)
  broadcomVmware,          // 2023-11-22
  microsoftActivision,     // 2023-10-13
  blackstoneKenedix,       // 2023-10-12
  jjKenvue,                // 2023-08-23 (restructuring)
  zendeskPeBuyout,         // 2022-11-22
  elonMuskTwitter,         // 2022-10-27
  attWarnemediaDivestiture, // 2022-04-08 (restructuring)
  warnerDiscoveryMerger,   // 2022-04-08
  microsoftNuance,         // 2022-03-04
  nvidiaArm,               // terminated 2022-02-08
  skhynixIntelNand,        // 2021-12-30
  ibmKyndryl,              // 2021-11-04 (restructuring)
  salesforceSlack,         // 2021-07-21
  hanjinKcgi,              // 2021-06-30 (activism)
  engineNo1Exxon,          // 2021-05-26 (activism)
  lvmhTiffany,             // 2021-01-07
  siemensBreakup,          // 2020-09-28 (restructuring)
  sertaSimmons,            // 2020-06-22 (LevFin 업티어 익스체인지)
  danaherAcquisitions,     // multiple deals (latest: Cytiva 2020-03)
  thirdPointNestle,        // 2019-09-01 (activism)
  dowdupont,               // 2019-06-01 (restructuring)
  disneyFox,               // 2019-03-20
  sapQualtrics,            // 2019-01-23
  elliottHyundai,          // 2019-01-10 (activism)
  qualcommNxp,             // terminated 2018-07-26
  attTimeWarner,           // 2018-06-14
  bayerMonsanto,           // 2018-06-07 (ma + 신디케이티드론)
  microsoftGithub,         // 2018-06-04
  salesforceMulesoft,      // 2018-05-01
  trianPg,                 // 2017-12-15 (activism)
  amazonWholeFoods,        // 2017-08-28
  kraftUnilever,           // 2017-02-19 (control, withdrawn)
  microsoftLinkedin,       // 2016-12-08
  abInBevSabmiller,        // 2016-10-10
  icahnApple,              // 2016-04-01 (activism)
  mbkHomeplus,             // 2015-11-30
  elliottSamsung,          // 2015-09-01 (activism)
  ebayPaypalSpinoff,       // 2015-07-17
  bcPartnersPetsmart,      // 2015-03-11 (LBO 교육 — 아마존 공포 역발상)
  lvmhHermes,              // 2014-12-17 (control)
  metaWhatsapp,            // 2014-10-06
  thirdPointSony,          // 2014-08-07 (activism)
  valueactMicrosoft,       // 2014-02-04 (activism)
  silverLakeDell,          // 2013-10-29 (LBO 교육 — 테크 테이크프라이빗)
  abbottAbbvieSpinoff,     // 2013-01-01
  metaInstagram,           // 2012-09-06
  porscheVolkswagen,       // 2012-08-01 (control)
  pershingSquareCpRail,    // 2012-05-17 (activism)
  jcrewIpTransfer,         // 2011-03-07 (LevFin Trap Door 케이스)
  airgasAirProducts,       // 2011-02-11 (control, withdrawn)
  g3CapitalBurgerKing,     // 2010-10-19 (LBO 교육 — ZBB + 재가맹점화)
  bhpRioTinto,             // 2008-11-25 (control, withdrawn)
  apolloCaesars,           // 2008-01-28 (LevFin 코비넌트)
  iheartmediaClearChannel, // 2008-07-30 (LevFin Hung Deal)
  jpmorganBearStearns,     // 2008-05-30 (금융위기)
  blackstoneHilton2007,    // 2007-10-24 (LBO 교육 — CMBS + 오퍼레이션)
  kkrTxuEnergyFuture,      // 2007-10-10 (LBO 교육 — 역대 최대 PE 파산)
  kkrDollarGeneral,        // 2007-07-07 (LevFin LBO 성공 케이스)
  kkrToysRUs,              // 2005-07-21 (LevFin 케이스)
  googleYoutube,           // 2006-10-31
  disneyPixar,             // 2006-05-05
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
