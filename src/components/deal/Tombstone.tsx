"use client";

import { motion } from "framer-motion";

interface TombstoneProps {
  acquirerInitials: string;
  acquirerBg: string;
  targetInitials: string;
  targetBg: string;
  acquirerName: string;
  targetName: string;
  dealTitle: string;
  dealSize: string;
  dealSizeUSD: string;
  evEbitda: string;
  closeDate: string;
}

function LogoBadge({
  initials,
  bg,
  name,
  role,
}: {
  initials: string;
  bg: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white font-black text-xs sm:text-sm tracking-tight shadow-md ${bg}`}
      >
        {initials}
      </div>
      <p className="text-[11px] font-medium text-gray-600 dark:text-gray-400 max-w-[100px] text-center leading-tight">
        {name}
      </p>
      <p className="text-[9px] tracking-[0.12em] uppercase text-gray-400 dark:text-gray-500">
        {role}
      </p>
    </div>
  );
}

export default function Tombstone({
  acquirerInitials,
  acquirerBg,
  targetInitials,
  targetBg,
  acquirerName,
  targetName,
  dealTitle,
  dealSize,
  dealSizeUSD,
  evEbitda,
  closeDate,
}: TombstoneProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative my-10"
    >
      {/* Outer border wrapper — classic tombstone feel */}
      <div className="border-2 border-gray-300 dark:border-gray-600 rounded-sm p-[3px]">
        <div className="border border-gray-200 dark:border-gray-700 rounded-sm bg-[#fafaf8] dark:bg-gray-900 px-4 sm:px-10 py-6 sm:py-9 text-center">

          {/* Record-only disclaimer */}
          <p className="text-[9.5px] tracking-[0.18em] uppercase text-gray-400 dark:text-gray-500 mb-7 font-medium">
            This announcement appears as a matter of record only
          </p>

          {/* Thin rule */}
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-7" />

          {/* Logo badges */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-7">
            <LogoBadge
              initials={acquirerInitials}
              bg={acquirerBg}
              name={acquirerName}
              role="Acquirer"
            />

            {/* × separator */}
            <span className="text-gray-300 dark:text-gray-600 text-2xl font-thin select-none mt-[-20px]">
              ×
            </span>

            <LogoBadge
              initials={targetInitials}
              bg={targetBg}
              name={targetName}
              role="Target"
            />
          </div>

          {/* Deal title */}
          <p className="text-[13px] font-semibold tracking-wide text-gray-700 dark:text-gray-300 mb-7 leading-snug">
            {dealTitle}
          </p>

          {/* Thin rule */}
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto mb-7" />

          {/* Key metrics row */}
          <div className="flex items-start justify-center gap-4 sm:gap-12 mb-7">
            {/* Deal Size */}
            <div>
              <p className="text-[9px] tracking-[0.16em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">
                Transaction Size
              </p>
              <p className="text-[18px] sm:text-[22px] font-bold text-gray-800 dark:text-gray-200 leading-none tracking-tight">
                {dealSize}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">{dealSizeUSD}</p>
            </div>

            {/* Divider */}
            <div className="w-px h-10 sm:h-14 bg-gray-200 dark:bg-gray-700 self-center" />

            {/* EV/EBITDA */}
            <div>
              <p className="text-[9px] tracking-[0.16em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">
                EV / EBITDA
              </p>
              <p className="text-[18px] sm:text-[22px] font-bold text-gray-800 dark:text-gray-200 leading-none tracking-tight">
                {evEbitda}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">Multiple</p>
            </div>

            {/* Divider */}
            <div className="w-px h-10 sm:h-14 bg-gray-200 dark:bg-gray-700 self-center" />

            {/* Close date */}
            <div>
              <p className="text-[9px] tracking-[0.16em] uppercase text-gray-400 dark:text-gray-500 mb-1.5">
                Closed
              </p>
              <p className="text-[18px] sm:text-[22px] font-bold text-gray-800 dark:text-gray-200 leading-none tracking-tight">
                {closeDate}
              </p>
              <p className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">Deal Date</p>
            </div>
          </div>

          {/* Bottom rule */}
          <div className="w-12 h-px bg-gray-300 dark:bg-gray-600 mx-auto" />

        </div>
      </div>
    </motion.div>
  );
}
