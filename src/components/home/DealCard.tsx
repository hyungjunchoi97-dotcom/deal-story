import Link from "next/link";
import { DEAL_CATEGORY_COLOR } from "@/lib/types";
import { getCategoryLabel, type Lang } from "@/lib/i18n";
import type { DealData } from "@/lib/deal-data";

/**
 * 홈 / 목록 / 어디서든 재사용 가능한 딜 카드.
 * 디자인은 deals/(en)/deals-client 의 카드 패턴을 그대로 따름
 * (rounded-2xl 외곽, CSS-only hover, 좌측 금액(amber) + 우측 산업/일자 풋터).
 *
 * 언어 처리는 `lang` prop 하나로 분기:
 *  - href 가 `/deals/${slug}` vs `/en/deals/${slug}`
 *  - 카테고리 칩 라벨이 한/영 (`@/lib/i18n` 의 `getCategoryLabel` SSOT)
 *  - 컨텐츠 자체는 ALL_DEALS / ALL_DEALS_EN 에서 이미 각 언어 데이터로 들어옴
 */

export interface DealCardProps {
  deal: DealData;
  lang?: Lang;
}

export default function DealCard({ deal, lang = "ko" }: DealCardProps) {
  const href = lang === "en" ? `/en/deals/${deal.slug}` : `/deals/${deal.slug}`;
  const categoryLabel = getCategoryLabel(deal.category, lang);
  const categoryColor = DEAL_CATEGORY_COLOR[deal.category];
  // 금액 표시에서 괄호 안 (USD 환산 등)을 제거해 카드에선 정수형 표기만.
  const dealValue = deal.dealSummary.dealValueDisplay.split("(")[0].trim();
  const dateDisplay = deal.closedDisplay ?? deal.announcedDisplay;

  return (
    <Link href={href} className="group block h-full">
      <article className="h-full rounded-2xl border border-gray-200 dark:border-gray-700/60 bg-white dark:bg-gray-900 p-5 transition-all duration-200 group-hover:border-blue-300 dark:group-hover:border-blue-700 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] group-hover:-translate-y-0.5">
        {/* 회사 아이콘 + 카테고리 */}
        <div className="flex items-center gap-2.5 mb-4">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[10px] tracking-tight shadow-sm flex-shrink-0 ${deal.acquirer.bg}`}
          >
            {deal.acquirer.initials}
          </div>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-gray-300 dark:text-gray-600 flex-shrink-0"
            aria-hidden={true}
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-[10px] tracking-tight shadow-sm flex-shrink-0 ${deal.target.bg}`}
          >
            {deal.target.initials}
          </div>
          <div className="ml-auto flex items-center gap-1.5">
            <span
              className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${categoryColor}`}
            >
              {categoryLabel}
            </span>
          </div>
        </div>

        {/* 제목 */}
        <h2 className="text-sm font-bold text-gray-900 dark:text-gray-100 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5">
          {deal.title}
        </h2>

        {/* 한 줄 요약 */}
        <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">
          {deal.excerpt}
        </p>

        {/* 풋터 메타 */}
        <div className="flex items-end justify-between mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
          <div>
            <p className="text-base font-bold text-amber-500 leading-none">
              {dealValue}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
              {deal.acquirer.label} → {deal.target.label}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[11px] text-gray-400 dark:text-gray-500">
              {deal.industry}
            </p>
            <p className="text-[11px] text-gray-400 dark:text-gray-500">
              {dateDisplay}
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
