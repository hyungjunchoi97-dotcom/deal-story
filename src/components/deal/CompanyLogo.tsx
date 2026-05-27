/**
 * 회사 로고 박스 — `initials` + 컬러 배경 + 하단 라벨.
 * 실제 이미지 로고가 아직 없으므로 이니셜 기반. 향후 image fallback 도입 시
 * `name` / `imageUrl` props 추가 검토.
 */

export interface CompanyLogoProps {
  /** 박스 안 이니셜 (e.g. "MSFT", "BX") */
  initials: string;
  /** 배경 Tailwind 클래스 (e.g. "bg-gray-900 dark:bg-gray-100") */
  bg: string;
  /** 박스 아래 라벨 (회사 표시명) */
  label: string;
}

export default function CompanyLogo({ initials, bg, label }: CompanyLogoProps) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-base tracking-tight shadow-sm ${bg}`}
      >
        {initials}
      </div>
      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {label}
      </span>
    </div>
  );
}
