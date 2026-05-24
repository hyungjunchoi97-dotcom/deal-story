"use client";

import { motion } from "framer-motion";

/**
 * 메트릭 카드 — uppercase 라벨 + 굵은 값 + (선택) 보조 텍스트.
 * 다크 그레이 toned 카드, hover 시 살짝 떠오름 (전 사이트 공통 카드 hover 패턴).
 *
 * 색은 모두 회색 토큰만 사용. 금액 강조용 amber/blue 액센트가 필요한 경우는
 * 별도 컴포넌트나 호출부 인라인으로 처리하고 이 컴포넌트는 중립 톤 유지.
 */

export interface MetricCardProps {
  label: string;
  value: string;
  sub?: string;
}

export default function MetricCard({ label, value, sub }: MetricCardProps) {
  return (
    <motion.div
      className="rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/60 p-4 cursor-default"
      whileHover={{ y: -3, scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.07)" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-base font-bold text-gray-900 dark:text-gray-100">
        {value}
      </p>
      {sub && (
        <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5">
          {sub}
        </p>
      )}
    </motion.div>
  );
}
