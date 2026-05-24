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

/**
 * 딜 레지스트리 — 새 딜 추가 시 import 후 배열에 추가
 * 최신 딜이 앞에 오도록 closedAt 내림차순 정렬
 */
export const ALL_DEALS: DealData[] = [
  adobeFigmaBlocked,      // 2023-12-18 (terminated)
  broadcomVmware,         // 2023-11-22
  microsoftActivision,    // 2023-10-13
  blackstoneKenedix,      // 2023-10-12
  elonMuskTwitter,        // 2022-10-27
  warnerDiscoveryMerger,  // 2022-04-08
  salesforceSlack,        // 2021-07-21
  skhynixIntelNand,       // 2021-12-30
  lvmhTiffany,            // 2021-01-07
  mbkHomeplus,            // 2015-11-30
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
