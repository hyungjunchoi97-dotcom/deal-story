"use client";

import { motion } from "framer-motion";

export interface AdvisorItem {
  firm: string;
  role: string;
  roleType: "financial" | "legal" | "other";
  note: string;
}

export interface AdvisorSide {
  side: "acquirer" | "target";
  sideLabel: string;
  initials: string;
  bg: string;
  advisors: AdvisorItem[];
}

const ROLE_STYLE: Record<AdvisorItem["roleType"], string> = {
  financial: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  legal:     "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400",
  other:     "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function AdvisorsSection({ sides, lang = "ko" }: { sides: AdvisorSide[]; lang?: "ko" | "en" }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {sides.map((side) => (
        <div key={side.side}>
          {/* Side header */}
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${side.bg}`}>
              <span className="text-white text-[9px] font-black">{side.initials}</span>
            </div>
            <p className="text-[11px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              {side.sideLabel} {lang === "en" ? "Advisors" : "측 자문사"}
            </p>
          </div>

          {/* Staggered advisor cards */}
          <motion.div
            className="space-y-2.5"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {side.advisors.map((advisor) => (
              <motion.div
                key={advisor.firm}
                variants={cardVariants}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  transition: { duration: 0.18 },
                }}
                className="rounded-xl border border-gray-100 dark:border-gray-700/60 bg-white dark:bg-gray-900/60 p-4 cursor-default"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 leading-tight">
                    {advisor.firm}
                  </p>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${ROLE_STYLE[advisor.roleType]}`}>
                    {advisor.role}
                  </span>
                </div>
                <p className="text-[12px] text-gray-500 dark:text-gray-400 leading-relaxed">
                  {advisor.note}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
