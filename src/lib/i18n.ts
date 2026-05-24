/**
 * i18n SSOT — KO/EN 라벨, 헤더 nav, 카테고리 라벨을 한 곳에서 관리.
 *
 *  - 카테고리 KO 라벨은 `lib/types.ts` 의 DEAL_CATEGORY_LABEL 을 그대로 재활용
 *    (기존 import 처를 깨지 않기 위해 lib/types 에 그대로 둠).
 *  - 새로 추가되는 다국어 라벨은 모두 이 파일을 SSOT 로 한다.
 */
import type { DealCategory } from "@/lib/deal-data";
import { DEAL_CATEGORY_LABEL } from "@/lib/types";

export type Lang = "ko" | "en";

/**
 * 경로 prefix 로 언어 판정.
 *  - `/en` 또는 `/en/...` 이면 "en", 그 외 "ko".
 *  - 미들웨어가 주입한 `x-pathname` 헤더, 또는 클라이언트의 `usePathname()`
 *    값을 그대로 넘기면 된다.
 */
export function detectLang(pathname: string | null | undefined): Lang {
  if (!pathname) return "ko";
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "ko";
}

// ── 헤더 네비게이션 ─────────────────────────────────────────────
export interface NavItem {
  href: string;
  label: string;
}

export const HEADER_NAV: Record<Lang, NavItem[]> = {
  ko: [
    { href: "/deals", label: "딜" },
    { href: "/deal-101", label: "딜 101" },
    { href: "/about", label: "소개" },
  ],
  en: [
    { href: "/en/deals", label: "Deals" },
    { href: "/en/deal-101", label: "Deal 101" },
    { href: "/en/about", label: "About" },
  ],
};

export const HEADER_LABELS: Record<Lang, { menu: string }> = {
  ko: { menu: "메뉴" },
  en: { menu: "Menu" },
};

// ── 카테고리 라벨 ───────────────────────────────────────────────
/**
 * 영문 카테고리 라벨. KO 라벨과 동일한 키 구조(6종) 유지.
 * 표기 컨벤션은 기존 deals-client-en 에 있던 매핑을 그대로 보존.
 */
export const DEAL_CATEGORY_LABEL_EN: Record<DealCategory, string> = {
  ma: "M&A",
  activism: "Activism",
  restructuring: "Restructuring",
};

/**
 * `getCategoryLabel(category, lang)` — 호출부에서 lang 분기를 직접 하지 않도록
 * 작은 헬퍼. 색상은 lang 무관이므로 DEAL_CATEGORY_COLOR 를 그대로 사용한다.
 */
export function getCategoryLabel(category: DealCategory, lang: Lang): string {
  if (lang === "en") return DEAL_CATEGORY_LABEL_EN[category];
  return DEAL_CATEGORY_LABEL[category];
}

// ── 공유 버튼 라벨 ─────────────────────────────────────────────
/**
 * ShareButtons 컴포넌트에서 사용하는 모든 텍스트.
 * 새 키 추가 시 KO/EN 둘 다 빠짐없이 채울 것.
 *
 * SNS 공유 페이로드에 들어가는 텍스트(Twitter intent 의 `text` 등)는
 * 호출부에서 `deal.title` 을 그대로 넘기므로 이미 각 언어 데이터에 맞춰져 있다.
 */
export const SHARE_LABELS: Record<
  Lang,
  {
    share: string;
    shareThisDeal: string;
    helpfulHeading: string;
    helpfulSub: string;
    copyLink: string;
    copied: string;
    copiedExcited: string;
    shareX: string;
    shareLinkedIn: string;
    more: string;
  }
> = {
  ko: {
    share: "공유",
    shareThisDeal: "이 딜 공유하기",
    helpfulHeading: "이 딜이 도움이 됐나요?",
    helpfulSub: "주변에 공유해주세요",
    copyLink: "링크 복사",
    copied: "복사됨",
    copiedExcited: "복사됨!",
    shareX: "X에 공유",
    shareLinkedIn: "LinkedIn에 공유",
    more: "더 보기",
  },
  en: {
    share: "Share",
    shareThisDeal: "Share this deal",
    helpfulHeading: "Was this helpful?",
    helpfulSub: "Share it with someone",
    copyLink: "Copy link",
    copied: "Copied",
    copiedExcited: "Copied!",
    shareX: "Share on X",
    shareLinkedIn: "Share on LinkedIn",
    more: "More",
  },
};
