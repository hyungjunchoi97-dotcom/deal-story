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
// New deals — M&A
import abInBevSabmiller from "./ab-inbev-sabmiller";
import vodafoneMannesmann from "./vodafone-mannesmann";
import attTimeWarner from "./att-time-warner";
// New deals — Activism
import engineNo1Exxon from "./engine-no1-exxon";
import icahnApple from "./icahn-apple";
import trianDisney from "./trian-disney";
import elliottHyundai from "./elliott-hyundai";
import thirdPointNestle from "./third-point-nestle";
// New deals — Restructuring
import dowdupont from "./dowdupont-breakup";
import jjKenvue from "./jj-kenvue";
import ibmKyndryl from "./ibm-kyndryl";
import attWarnemediaDivestiture from "./att-warnemedia-divestiture";
import siemensBreakup from "./siemens-breakup";
// New deals — Control
import bhpRioTinto from "./bhp-rio-tinto";
import kraftUnilever from "./kraft-unilever";
import hanmiPharmaControl from "./hanmi-pharma-control";
import coucheTard7eleven from "./couche-tard-7eleven";
import airgasAirProducts from "./airgas-air-products";
// New deals — Activism (added batch)
import pershingSquareAllergan from "./pershing-square-allergan";
import pershingSquareHerbalife from "./pershing-square-herbalife";
import janaWholeFoods from "./jana-whole-foods";
import elliottAtt from "./elliott-att";
import elliottTwitter from "./elliott-twitter";
import icahnTimeWarner from "./icahn-time-warner";
import starboardDardenOliveGarden from "./starboard-darden-olive-garden";
import thirdPointShell from "./third-point-shell";
import thirdPointYahoo from "./third-point-yahoo";
import trianDupont from "./trian-dupont";
// New deals — LBO / M&A (added batch)
import kkrDollarGeneral from "./kkr-dollar-general";
import kkrToysRUs from "./kkr-toys-r-us";
import kkrTxuEnergyFuture from "./kkr-txu-energy-future";
import blackstoneHilton2007 from "./blackstone-hilton-2007";
import bcPartnersPetsmart from "./bc-partners-petsmart";
import threeGCapitalBurgerKing from "./3g-capital-burger-king";
import bayerMonsanto from "./bayer-monsanto";
import silverLakeDellTakeprivate from "./silver-lake-dell-takeprivate";
// New deals — LevFin / Distressed (added batch)
import apolloCaesars from "./apollo-caesars";
import iheartmediaClearChannel from "./iheartmedia-clear-channel";
import jcrewIpTransfer from "./jcrew-ip-transfer";
import sertaSimmonsUptier from "./serta-simmons-uptier";
// New deals — Sophisticated structures
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
// New batch — Activism / Restructuring / LBO / M&A diversification (6 of 10 EN translations available; 4 KO-only pending)
import ackmanValeantLoss from "./ackman-valeant-loss";
import hybeSmKakaoTender from "./hybe-sm-kakao-tender";
import hpHpeSplit from "./hp-hpe-split";
import vivendiUmgSpin from "./vivendi-umg-spin";
import hertzLboBankruptcy from "./hertz-lbo-bankruptcy";
import tataJlr from "./tata-jlr";

/**
 * English deal registry — ordered by closedAt descending
 */
export const ALL_DEALS_EN: DealData[] = [
  mbkMakinoAltemira,       // 2026-05-11 (ma — Japan FEFTA + 19-day pivot)
  kkrSamsungSdsCb,         // 2026-04-30 (ma — Korea's largest single private CB)
  coucheTard7eleven,       // 2025-12-31 (control, ongoing)
  skSquare11stPutDefault,  // 2025-10-29 (ma — First Korean PE-strategic JV put default)
  nipponSteelUsSteel,      // 2025-06-18 (ma — First US-government golden share on foreign acquisition)
  koreaZincMbk,            // 2025-03-28 (control)
  hanmiPharmaControl,      // 2024-12-31 (control, ongoing)
  doosanRoboticsBobcatWithdrawn, // 2024-10-21 (control — Activist+NPS+FSS triangle blocks chaebol restructuring)
  trianDisney,             // 2024-04-03 (activism)
  geBreakup,               // 2024-04-02 (restructuring)
  illuminaGrail,           // 2024 forced divestiture
  harimHmmFailed,          // 2024-02-06 (ma — Korean SOE sale blocked by perpetual CB)
  toshibaJipTakeprivate,   // 2023-12-20 (ma — Japan domestic-consortium take-private)
  adobeFigmaBlocked,       // 2023-12-18 (terminated)
  broadcomVmware,          // 2023-11-22
  microsoftActivision,     // 2023-10-13
  blackstoneKenedix,       // 2023-10-12
  jjKenvue,                // 2023-08-23 (restructuring)
  hybeSmKakaoTender,       // 2023-03-26 (control — Korea's first competitive tender offer)
  zendeskPeBuyout,         // 2022-11-22
  elonMuskTwitter,         // 2022-10-27
  attWarnemediaDivestiture, // 2022-04-08 (restructuring)
  warnerDiscoveryMerger,   // 2022-04-08
  microsoftNuance,         // 2022-03-04
  nvidiaArm,               // terminated 2022-02-08
  thirdPointShell,         // 2022-02-01 (activism)
  skhynixIntelNand,        // 2021-12-30
  ibmKyndryl,              // 2021-11-04 (restructuring)
  vivendiUmgSpin,          // 2021-09-21 (restructuring — largest music industry IPO in history)
  salesforceSlack,         // 2021-07-21
  hanjinKcgi,              // 2021-06-30 (activism)
  aramcoOilPipelines,      // 2021-06-18 (ma — 25-year throughput-based lease-back)
  engineNo1Exxon,          // 2021-05-26 (activism)
  elliottAtt,              // 2021-05-17 (activism)
  lvmhTiffany,             // 2021-01-07
  siemensBreakup,          // 2020-09-28 (restructuring)
  sertaSimmonsUptier,      // 2020-06-22 (uptier exchange)
  danaherAcquisitions,     // multiple deals (latest: Cytiva 2020-03)
  elliottTwitter,          // 2020-03-09 (activism)
  bmsCelgeneCvr,           // 2019-11-20 (ma — CVR 36-day delay wiped out $6.4B)
  thirdPointNestle,        // 2019-09-01 (activism)
  berkshireOxyAnadarko,    // 2019-08-08 (ma — $10B perpetual preferred + warrants white-knight financing)
  dowdupont,               // 2019-06-01 (restructuring)
  disneyFox,               // 2019-03-20
  sapQualtrics,            // 2019-01-23
  elliottHyundai,          // 2019-01-10 (activism)
  qualcommNxp,             // terminated 2018-07-26
  attTimeWarner,           // 2018-06-14
  bayerMonsanto,           // 2018-06-07
  microsoftGithub,         // 2018-06-04
  salesforceMulesoft,      // 2018-05-01
  pershingSquareHerbalife, // 2018-03-01 (activism, short)
  trianPg,                 // 2017-12-15 (activism)
  amazonWholeFoods,        // 2017-08-28
  janaWholeFoods,          // 2017-08-28 (activism)
  softbankVisionFundLpStructure, // 2017-05-20 (ma — $100B fund, preferred/common tranche)
  ackmanValeantLoss,       // 2017-03-13 (activism — Pershing Square's $4B loss, conviction-trade textbook)
  kraftUnilever,           // 2017-02-19 (control, withdrawn)
  microsoftLinkedin,       // 2016-12-08
  abInBevSabmiller,        // 2016-10-10
  icahnApple,              // 2016-04-01 (activism)
  mbkHomeplus,             // 2015-11-30
  hpHpeSplit,              // 2015-11-01 (restructuring — Meg Whitman split into HP Inc + HPE)
  elliottSamsung,          // 2015-09-01 (activism)
  ebayPaypalSpinoff,       // 2015-07-17
  trianDupont,             // 2015-05-13 (activism)
  bcPartnersPetsmart,      // 2015-03-11
  lvmhHermes,              // 2014-12-17 (control)
  pershingSquareAllergan,  // 2014-11-17 (activism)
  starboardDardenOliveGarden, // 2014-10-10 (activism)
  metaWhatsapp,            // 2014-10-06
  thirdPointSony,          // 2014-08-07 (activism)
  valueactMicrosoft,       // 2014-02-04 (activism)
  silverLakeDellTakeprivate, // 2013-10-29
  abbottAbbvieSpinoff,     // 2013-01-01
  metaInstagram,           // 2012-09-06
  porscheVolkswagen,       // 2012-08-01 (control)
  thirdPointYahoo,         // 2012-07-16 (activism)
  pershingSquareCpRail,    // 2012-05-17 (activism)
  sanofiGenzymeCvr,        // 2011-04-08 (ma — CVR invention, 5-tranche milestone)
  jcrewIpTransfer,         // 2011-03-07 (LBO, trap door)
  airgasAirProducts,       // 2011-02-11 (control, withdrawn)
  threeGCapitalBurgerKing, // 2010-10-19
  bhpRioTinto,             // 2008-11-25 (control, withdrawn)
  iheartmediaClearChannel, // 2008-07-30 (LBO)
  tataJlr,                 // 2008-06-02 (ma — India → UK luxury cross-border, post-2008 turnaround)
  jpmorganBearStearns,     // 2008-05-30 (financial crisis)
  apolloCaesars,           // 2008-01-28 (LBO)
  blackstoneHilton2007,    // 2007-10-24 (LBO)
  kkrTxuEnergyFuture,      // 2007-10-10 (LBO)
  kkrDollarGeneral,        // 2007-07-07 (LBO)
  hertzLboBankruptcy,      // 2005-12-21 (LBO → accounting fraud → 2020 Chapter 11)
  googleYoutube,           // 2006-10-31
  disneyPixar,             // 2006-05-05
  icahnTimeWarner,         // 2006-03-01 (activism)
  kkrToysRUs,              // 2005-07-21 (LBO)
  oraclePeoplesoft,        // 2004-12-28 (control)
  hpCompaq,                // 2002-05-03
  aolTimeWarner,           // 2001-01-11
  vodafoneMannesmann,      // 2000-04-12
  daimlerChrysler,         // 1998-11-12
  kkrRjrNabisco,           // 1989-02-09
];

export function getDealBySlugEn(slug: string): DealData | undefined {
  return ALL_DEALS_EN.find((d) => d.slug === slug);
}

export function getAllSlugsEn(): string[] {
  return ALL_DEALS_EN.map((d) => d.slug);
}

export function getDealsByCategory(category: DealData["category"]): DealData[] {
  return ALL_DEALS_EN.filter((d) => d.category === category);
}
