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
// New deals
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
import jpmorganBearStearns from "./jpmorgan-bear-stearns";
import pershingSquareCpRail from "./pershing-square-cp-rail";
import valueactMicrosoft from "./valueact-microsoft";
import thirdPointSony from "./third-point-sony";
import trianPg from "./trian-pg";
import koreaZincMbk from "./korea-zinc-mbk";
import bhpRioTinto from "./bhp-rio-tinto";
import kraftUnilever from "./kraft-unilever";
import lvmhHermes from "./lvmh-hermes";
import oraclePeoplesoft from "./oracle-peoplesoft";
import porscheVolkswagen from "./porsche-volkswagen";
import disneyFox from "./disney-fox";
import aolTimeWarner from "./aol-time-warner";

/**
 * English deal registry — ordered by closedAt descending
 */
export const ALL_DEALS_EN: DealData[] = [
  koreaZincMbk,          // 2025-03-28 (control contest)
  bhpRioTinto,           // 2008-11-25 (control, withdrawn)
  kraftUnilever,         // 2017-02-19 (control, withdrawn 48h)
  geBreakup,             // 2024-04-02
  illuminaGrail,         // 2024 forced divestiture
  adobeFigmaBlocked,     // 2023-12-18 (terminated)
  broadcomVmware,        // 2023-11-22
  microsoftActivision,   // 2023-10-13
  blackstoneKenedix,     // 2023-10-12
  zendeskPeBuyout,       // 2022-11-22
  elonMuskTwitter,       // 2022-10-27
  warnerDiscoveryMerger, // 2022-04-08
  microsoftNuance,       // 2022-03-04
  nvidiaArm,             // terminated 2022-02-08
  skhynixIntelNand,      // 2021-12-30
  salesforceSlack,       // 2021-07-21
  hanjinKcgi,            // 2021-06-30 (activism)
  lvmhTiffany,           // 2021-01-07
  danaherAcquisitions,   // multiple deals (latest: Cytiva 2020-03)
  disneyFox,             // 2019-03-20
  sapQualtrics,          // 2019-01-23
  microsoftGithub,       // 2018-06-04
  salesforceMulesoft,    // 2018-05-01
  qualcommNxp,           // terminated 2018-07-26
  trianPg,               // 2017-12-15 (activism)
  amazonWholeFoods,      // 2017-08-28
  microsoftLinkedin,     // 2016-12-08
  mbkHomeplus,           // 2015-11-30
  elliottSamsung,        // 2015-09-01 (activism)
  ebayPaypalSpinoff,     // 2015-07-17
  lvmhHermes,            // 2014-12-17 (control)
  metaWhatsapp,          // 2014-10-06
  thirdPointSony,        // 2014-08-07 (activism)
  valueactMicrosoft,     // 2014-02-04 (activism)
  abbottAbbvieSpinoff,   // 2013-01-01
  metaInstagram,         // 2012-09-06
  porscheVolkswagen,     // 2012-08-01 (control)
  pershingSquareCpRail,  // 2012-05-17 (activism)
  jpmorganBearStearns,   // 2008-05-30 (financial crisis)
  googleYoutube,         // 2006-10-31
  disneyPixar,           // 2006-05-05
  hpCompaq,              // 2002-05-03
  aolTimeWarner,         // 2001-01-11
  oraclePeoplesoft,      // 2004-12-28 (control)
  daimlerChrysler,       // 1998-11-12
  kkrRjrNabisco,         // 1989-02-09
];

export function getDealBySlugEn(slug: string): DealData | undefined {
  return ALL_DEALS_EN.find((d) => d.slug === slug);
}

export function getAllSlugsEn(): string[] {
  return ALL_DEALS_EN.map((d) => d.slug);
}
