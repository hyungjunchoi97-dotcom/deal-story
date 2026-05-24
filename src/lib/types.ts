// 딜 카테고리
export type DealCategory = "ma" | "activism" | "restructuring";

export const DEAL_CATEGORY_LABEL: Record<DealCategory, string> = {
  ma: "M&A",
  activism: "행동주의",
  restructuring: "구조조정",
};

export const DEAL_CATEGORY_SHORT: Record<DealCategory, string> = {
  ma: "M&A",
  activism: "행동주의",
  restructuring: "구조조정",
};

export const DEAL_CATEGORY_COLOR: Record<DealCategory, string> = {
  ma: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  activism: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300",
  restructuring: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
};

export const DEAL_CATEGORY_ORDER: DealCategory[] = ["ma", "activism", "restructuring"];

// 딜 포스트
export interface DealPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  body_md: string;
  category: DealCategory;
  cover_image_url: string | null;
  // 딜 핵심 정보
  deal_value_usd: number | null;      // 딜 금액 (USD 백만)
  deal_value_display: string | null;  // "약 2.3조원" 같은 표시용 문자열
  announced_at: string | null;        // 딜 발표일
  closed_at: string | null;           // 딜 완료일
  acquirer_name: string | null;       // 인수자/매수자
  target_name: string | null;         // 피인수자/매도자
  seller_name: string | null;         // 매도자 (별도인 경우)
  industry: string | null;            // 산업군
  country: string | null;             // 거래 국가
  tags: string[] | null;
  // 블로그 메타
  author: string | null;
  reading_minutes: number | null;
  view_count: number;
  is_published: boolean;
  is_featured: boolean;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

// 회사
export interface Company {
  id: number;
  slug: string;
  name: string;
  name_ko: string | null;
  industry: string | null;
  country: string | null;
  description: string | null;
  website: string | null;
  logo_url: string | null;
}
