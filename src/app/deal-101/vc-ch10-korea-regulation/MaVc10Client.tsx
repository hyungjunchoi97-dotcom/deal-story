"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ShareButtons from "@/components/deal/ShareButtons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";
import { getVcSeriesNav, getVcChapterBySlug } from "@/data/vc-series";

const ACCENT = "#10b981";
const SLUG = "vc-ch10-korea-regulation";

const KVIC_PROCESS = [
  { step: 1, koLabel: "GP 자격 신청",         koDetail: "운용 인력 · 트랙레코드 · 인프라 평가. 신규 GP는 운용 인력 3명+ 의무.",                  duration: "1-2개월" },
  { step: 2, koLabel: "출자 제안서 제출",     koDetail: "Fund thesis · target sector · 운용 인력 · LP 구성 · 회수 방안 명시.",                    duration: "2-3개월" },
  { step: 3, koLabel: "1차 서면 심사",         koDetail: "한국벤처투자 (KVIC) 내부 심사 — 운용 능력 · 운용 안정성 · 운용 성과 평가.",              duration: "1개월" },
  { step: 4, koLabel: "2차 PT 심사",            koDetail: "GP가 KVIC 출자위원회 (외부 자문위원 포함)에 30분 PT + Q&A.",                              duration: "1개월" },
  { step: 5, koLabel: "최종 출자 약정",         koDetail: "통과 시 약정 금액 + 출자 조건 명시. 모태펀드 비중 통상 30-50%.",                          duration: "1개월" },
  { step: 6, koLabel: "Fund 결성 + 운용 시작", koDetail: "기타 LP (FoF · 보험사 · 연기금) 유치 후 최종 결성. KVIC 분기 보고 의무 시작.",            duration: "3-6개월" },
];

const RECOVERY_SCHEDULE = [
  { year: "Year 1-5", koReq: "Active investment 기간. 회수 의무 없음." },
  { year: "Year 6",    koReq: "회수 시작. 누적 30% 회수 목표 (권장)." },
  { year: "Year 7",    koReq: "누적 60% 회수 의무. 미달 시 GP fee 일부 환수." },
  { year: "Year 8-9",  koReq: "추가 회수 진행. 누적 80% 목표." },
  { year: "Year 10",   koReq: "누적 100% 회수 의무. 미회수 시 fund 청산 또는 KVIC 협의." },
  { year: "Year 11-12", koReq: "예외적 연장 — KVIC 사전 승인 필요 + 회수 plan 제출." },
];

const REGULATIONS = [
  { law: "자본시장법 49인 룰",       koDetail: "사모펀드 LP는 49인 이하 (전문투자자 외 일반투자자 49인 룰). VC는 보통 10-25 LP 유지." },
  { law: "벤처투자촉진법",            koDetail: "VC fund의 법적 정의. 벤처기업 (벤처기업확인서 보유)에 fund 약정금의 40%+ 투자 의무." },
  { law: "신기술사업투자조합",         koDetail: "산업부 / KEIT 산하. 신기술 기업에 60%+ 투자. 세제 혜택 (출자 소득공제) 제공." },
  { law: "벤처투자조합",               koDetail: "중기부 / KVIC 산하. 벤처기업 + 창업초기기업 (7년 이내)에 50%+ 투자. 모태펀드 출자 가능." },
  { law: "PEF (Private Equity Fund)", koDetail: "자본시장법상 사모펀드. Buyout 위주. VC와는 별개 — VC fund는 \"창업투자회사\" 또는 \"신기술사업금융업자\"" },
  { law: "금감원 분기 업무보고서",     koDetail: "모든 등록 VC 의무. 운용 fund · LP 구성 · 투자 진행 · 회수 진행 분기 보고." },
];

const POLICY_FUNDS = [
  { fund: "모태펀드 (KVIC)",             aum: "₩9조+",   koFocus: "벤처기업 · 창업초기 · 청년창업 · 지역기업 등 sector별 출자",  koGp: "200+ GP 출자받음 · 한국 VC 시장의 backbone" },
  { fund: "성장사다리펀드",                aum: "₩6조+",   koFocus: "Growth-stage SaaS · 글로벌 진출 기업",                              koGp: "산업은행 · 신한 · KB 등 자펀드 운용" },
  { fund: "KOSME 정책펀드",                 aum: "₩3조+",   koFocus: "초기·중소기업 · 지방 기업",                                          koGp: "중소벤처기업진흥공단 산하" },
  { fund: "K-Bio 펀드 (정책)",              aum: "₩2조+",   koFocus: "바이오·헬스케어 · 의료기기 · 디지털 헬스",                            koGp: "보건복지부 + 산업부 출자" },
  { fund: "K-Hydrogen 펀드",                aum: "₩1조+",   koFocus: "수소경제 · 그린수소 · 연료전지",                                    koGp: "산업부 출자 (2024+)" },
  { fund: "K-Reshore 펀드 (2025+)",          aum: "₩1조+",   koFocus: "반도체 · 디스플레이 · 배터리 reshore",                              koGp: "산업부 + 한국벤처투자 출자" },
];

const KR_VS_US_REG = [
  { dim: "Fund 등록 요건",          us: "SEC Form ADV (보통 ERA exempt)",            kr: "벤처투자촉진법상 창업투자회사 등록 + 운용 인력 3명+" },
  { dim: "LP 제한",                  us: "Accredited investor / Qualified Purchaser", kr: "49인 룰 · 전문투자자 외 49인 이하" },
  { dim: "Sector 투자 의무",         us: "없음",                                       kr: "벤처기업 / 창업초기기업 40-60% 투자 의무" },
  { dim: "회수 의무",                us: "없음 (fund term 12년 그냥)",                 kr: "모태펀드 출자받았으면 7년 60% / 10년 100%" },
  { dim: "보고 주기",                us: "SEC: Form ADV 연 1회 · Form PF 분기",        kr: "금감원 분기 + KVIC 분기 + 부처별 분기" },
  { dim: "정책펀드 활용",            us: "없음",                                       kr: "모태펀드 + 성장사다리 + KOSME + K-Bio 등 다층" },
];

const TOC_ITEMS = [
  { id: "kvic",         ko: "§1. 모태펀드 (KVIC) 출자 Process 6단계",       en: "§1 KVIC fund-of-funds commitment process — six steps" },
  { id: "recovery",     ko: "§2. 회수 의무 — Year 7-10 schedule",            en: "§2 Recovery obligations — year 7-10 schedule" },
  { id: "regulations",  ko: "§3. 한국 VC 6대 법규",                          en: "§3 Six Korean VC regulations" },
  { id: "policy-funds", ko: "§4. 정책펀드 + KR vs US 차이",                  en: "§4 Policy funds + KR vs US differences" },
];

export default function MaVc10Client({ lang }: { lang: "ko" | "en" }) {
  const ko = lang === "ko";
  const nav = getVcSeriesNav(SLUG);
  const meta = getVcChapterBySlug(SLUG);
  if (!meta) return null;
  const title = ko ? meta.titleKo : meta.titleEn;
  const tagline = ko ? meta.taglineKo : meta.taglineEn;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-6">
          <Link href={ko ? "/learn" : "/en/learn"} className="hover:underline">{ko ? "학습" : "Learn"}</Link>
          <span className="mx-2">›</span><span>{ko ? "VC 시리즈" : "VC Series"}</span>
          <span className="mx-2">›</span><span className="text-gray-700 dark:text-gray-300">Ch.10</span>
        </div>

        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="px-2.5 py-1 text-xs font-semibold rounded text-white" style={{ backgroundColor: ACCENT }}>{ko ? "VC 시리즈 · Ch.10" : "VC Series · Ch.10"}</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">{ko ? `읽는 시간 약 ${meta.readingMinutes}분 · Q2 2026 기준` : `~${meta.readingMinutes} min · data as of Q2 2026`}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">{tagline}</p>
        </motion.div>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="top" /></div>

        <div className="mb-12 rounded-lg border border-gray-200 dark:border-gray-700 p-5 bg-gray-50 dark:bg-gray-900">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-3">{ko ? "목차" : "Contents"}</div>
          <ul className="space-y-2">{TOC_ITEMS.map((item) => (<li key={item.id}><a href={`#${item.id}`} className="text-sm hover:underline" style={{ color: ACCENT }}>{ko ? item.ko : item.en}</a></li>))}</ul>
        </div>

        <section id="kvic" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 1. 모태펀드 (KVIC) 출자 Process — 6단계 · 약 12개월" : "§ 1 KVIC fund-of-funds commitment process — six steps over ~12 months"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "모태펀드는 한국벤처투자 (KVIC) 가 운용하는 fund-of-funds. 한국 VC 시장의 backbone — Q2 2026 기준 누적 출자 ₩9조+. 신규 VC는 모태펀드 출자 받기가 사실상 fund raising 첫 단계." : "The fund-of-funds run by Korea Venture Investment (KVIC) is the backbone of Korea's VC market — cumulative commitments topped ₩9 trillion by Q2 2026. For new VCs, securing KVIC is effectively step one of fundraising."}
          </p>
          <div className="space-y-2 mb-6">
            {KVIC_PROCESS.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs" style={{ backgroundColor: ACCENT }}>{s.step}</div>
                  <div className="flex-1">
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <div className="font-semibold text-sm">{s.koLabel}</div>
                      <div className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-800">{s.duration}</div>
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{s.koDetail}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="recovery" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 2. 회수 의무 — Year 7-10 Schedule" : "§ 2 Recovery obligations — year 7-10 schedule"}</h2>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            {ko ? "모태펀드 출자받은 VC fund는 **회수재원 의무**가 있다 — 7년차 60%, 10년차 100% 환원. 못 하면 GP fee 일부 환수 + 다음 fund 출자 제약. 이게 한국 VC가 미국 VC보다 exit 조급한 근본 이유." : "VC funds taking KVIC commitments owe **recovery obligations** — 60% by year 7, 100% by year 10. Missing them claws back GP fees and constrains the next fund. This is why Korean VCs feel more exit-pressure than US VCs."}
          </p>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-24">Year</th>
                  <th className="text-left p-3">{ko ? "요구사항" : "Requirement"}</th>
                </tr>
              </thead>
              <tbody>
                {RECOVERY_SCHEDULE.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs" style={{ color: ACCENT }}>{r.year}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{r.koReq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="my-16"><ShareButtons lang={lang} title={title} variant="mid" /></div>

        <section id="regulations" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 3. 한국 VC 6대 법규" : "§ 3 Six Korean VC regulations"}</h2>
          <div className="space-y-2 mb-6">
            {REGULATIONS.map((r, i) => (
              <div key={i} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-900">
                <div className="font-bold text-sm mb-1" style={{ color: ACCENT }}>{r.law}</div>
                <div className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{r.koDetail}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="policy-funds" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">{ko ? "§ 4. 정책펀드 6종 + KR vs US 차이" : "§ 4 Six policy funds + KR vs US differences"}</h2>

          <h3 className="text-lg font-bold mb-3">{ko ? "한국 정책펀드 6종 (Q2 2026)" : "Six Korean policy funds (Q2 2026)"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-40">{ko ? "펀드명" : "Fund"}</th>
                  <th className="text-left p-3 w-20">AUM</th>
                  <th className="text-left p-3">{ko ? "초점" : "Focus"}</th>
                  <th className="text-left p-3">{ko ? "GP 구조" : "GP structure"}</th>
                </tr>
              </thead>
              <tbody>
                {POLICY_FUNDS.map((f, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs" style={{ color: ACCENT }}>{f.fund}</td>
                    <td className="p-3 text-xs font-mono">{f.aum}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300 leading-relaxed">{f.koFocus}</td>
                    <td className="p-3 text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{f.koGp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-bold mb-3">{ko ? "KR vs US Regulation 6가지 차이" : "Six KR vs US regulatory differences"}</h3>
          <div className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                <tr className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  <th className="text-left p-3 w-44">{ko ? "차원" : "Dimension"}</th>
                  <th className="text-left p-3">🇺🇸 US</th>
                  <th className="text-left p-3">🇰🇷 Korea</th>
                </tr>
              </thead>
              <tbody>
                {KR_VS_US_REG.map((r, i) => (
                  <tr key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-b-0">
                    <td className="p-3 font-semibold text-xs">{r.dim}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300">{r.us}</td>
                    <td className="p-3 text-xs text-gray-700 dark:text-gray-300">{r.kr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-xl border-2 p-6 mb-4" style={{ borderColor: ACCENT, backgroundColor: `${ACCENT}10` }}>
            <h3 className="text-lg font-bold mb-3">{ko ? "VC 시리즈 마무리 — 10챕터 종합" : "VC Series wrap — across the ten chapters"}</h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• {ko ? "VC는 양면 게임 — VC의 선택과 founder의 선택이 같은 deal에서 다른 의미 (Ch.1-3)" : "VC is a two-sided game — VC choice and founder choice carry different meanings in the same deal (Ch.1-3)"}</li>
              <li>• {ko ? "DD부터 IC memo까지는 심사역의 가장 강도 높은 작업 (Ch.4-5)" : "From DD to IC memo, the associate carries the heaviest load (Ch.4-5)"}</li>
              <li>• {ko ? "Term sheet 7대 조항 + 한국 RCPS 구조는 협상의 모든 것 (Ch.6-7)" : "Seven term-sheet provisions + Korean RCPS structure are the whole negotiation (Ch.6-7)"}</li>
              <li>• {ko ? "Post-investment에서 진짜 좋은 VC가 차별화 (Ch.8)" : "Post-investment is where the good VCs separate (Ch.8)"}</li>
              <li>• {ko ? "Exit 모든 deal의 50%는 \$0 — power law가 본질 (Ch.9)" : "50% of deals exit at zero — the power law is the essence (Ch.9)"}</li>
              <li>• {ko ? "한국 VC는 모태펀드·KVIC·회수의무 등 미국과 구조 자체가 다름 (Ch.10)" : "Korea's VC structure — KVIC, recovery obligations, etc. — diverges fundamentally from the US (Ch.10)"}</li>
            </ul>
          </div>
        </section>

        <div className="mb-10"><ShareButtons lang={lang} title={title} variant="bottom" likeSlug={SLUG} /></div>
        <div className="flex justify-center mb-10"><LikeButton slug={SLUG} lang={lang} /></div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {nav.prev ? (<Link href={ko ? `/deal-101/${nav.prev.slug}` : `/en/deal-101/${nav.prev.slug}`} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition"><div className="text-xs text-gray-500 mb-1">{ko ? "← 이전" : "← Previous"}</div><div className="text-sm font-semibold">Ch.{nav.prev.ch} · {ko ? nav.prev.titleKo : nav.prev.titleEn}</div></Link>) : <div />}
          <Link href={ko ? "/learn" : "/en/learn"} className="block rounded-lg border border-gray-200 dark:border-gray-700 p-4 hover:border-gray-400 dark:hover:border-gray-500 transition text-right"><div className="text-xs text-gray-500 mb-1">{ko ? "학습 인덱스 →" : "Learn index →"}</div><div className="text-sm font-semibold">{ko ? "전체 시리즈 보기" : "Browse all series"}</div></Link>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}
