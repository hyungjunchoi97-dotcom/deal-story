/**
 * LBO 딜 레지스트리
 * 새 LBO 딜 추가 시 import 후 ALL_LBO_DEALS 배열에 추가
 */
import type { LboDeal } from "@/lib/lbo-deal-data";
import blackstoneHilton from "./blackstone-hilton-2007";
import hca2006 from "./hca-2006";

export const ALL_LBO_DEALS: LboDeal[] = [
  blackstoneHilton, // 2007-10-24
  hca2006,          // 2006-11-17
];

export function getLboDealBySlug(slug: string): LboDeal | undefined {
  return ALL_LBO_DEALS.find((d) => d.slug === slug);
}

export function getAllLboSlugs(): string[] {
  return ALL_LBO_DEALS.map((d) => d.slug);
}
