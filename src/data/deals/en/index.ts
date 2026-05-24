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
 * English deal registry — ordered by closedAt descending
 */
export const ALL_DEALS_EN: DealData[] = [
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

export function getDealBySlugEn(slug: string): DealData | undefined {
  return ALL_DEALS_EN.find((d) => d.slug === slug);
}

export function getAllSlugsEn(): string[] {
  return ALL_DEALS_EN.map((d) => d.slug);
}
