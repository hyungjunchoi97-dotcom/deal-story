"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
  /** accent color for Q prefix and active border — defaults to teal */
  accent?: string;
}

export default function FaqAccordion({ items, accent = "#14b8a6" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="rounded-xl border bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-200"
            style={{
              borderColor: isOpen ? accent : undefined,
            }}
          >
            {/* ── Question row (clickable) ── */}
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="flex items-start gap-2.5 min-w-0">
                <span
                  className="flex-shrink-0 text-[11px] font-bold mt-0.5"
                  style={{ color: accent }}
                >
                  Q.
                </span>
                <span className="text-[13px] font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                  {item.q}
                </span>
              </span>

              {/* Chevron — rotates on open */}
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex-shrink-0 text-gray-400 dark:text-gray-500"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </motion.span>
            </button>

            {/* ── Answer (animated) ── */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    className="px-5 pb-5 pt-0 border-t border-gray-100 dark:border-gray-800"
                  >
                    <p className="text-[13px] text-gray-600 dark:text-gray-400 leading-relaxed pt-4">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
