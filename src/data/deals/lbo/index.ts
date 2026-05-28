/**
 * LBO 딜 레지스트리
 * 새 LBO 딜 추가 시 import 후 ALL_LBO_DEALS 배열에 추가
 */
import type { LboDeal } from "@/lib/lbo-deal-data";
import jipToshiba from "./jip-toshiba-2023";
import bainKioxia from "./bain-kioxia-2018";
import blackstoneHilton from "./blackstone-hilton-2007";
import cerberusChrysler from "./cerberus-chrysler-2007";
import kkrAllianceBoots from "./kkr-alliance-boots-2007";
import terraFirmaEmi from "./terra-firma-emi-2007";
import hca2006 from "./hca-2006";
import nordicTdc from "./nordic-tdc-2006";
import softbankVodafone from "./softbank-vodafone-japan-2006";
import glazerManu from "./glazer-manchester-united-2005";
import bainDominos from "./bain-dominos-1998";

/**
 * 입력 순서 = closedAt 내림차순 (최신 → 과거).
 */
export const ALL_LBO_DEALS: LboDeal[] = [
  jipToshiba,            // 2023-12-20 (Japan governance saga)
  bainKioxia,            // 2018-06-01 (tech carveout)
  cerberusChrysler,      // 2007-08-03 (auto LBO disaster)
  blackstoneHilton,      // 2007-10-24 (existing)
  kkrAllianceBoots,      // 2007-06-26 (largest Euro LBO + management partnership)
  terraFirmaEmi,         // 2007-08-01 (music industry disaster + Citi lawsuit)
  hca2006,               // 2006-11-17 (healthcare megadeal + CLO market test)
  nordicTdc,             // 2006-02-01 (5-firm club deal)
  softbankVodafone,      // 2006-04-27 (cross-border telecom + iPhone exclusivity)
  glazerManu,            // 2005-06-22 (sports LBO + stakeholder failure)
  bainDominos,           // 1998-12-21 (operational alpha case)
];

export function getLboDealBySlug(slug: string): LboDeal | undefined {
  return ALL_LBO_DEALS.find((d) => d.slug === slug);
}

export function getAllLboSlugs(): string[] {
  return ALL_LBO_DEALS.map((d) => d.slug);
}
