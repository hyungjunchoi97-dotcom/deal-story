"use client";

import { useState } from "react";

interface RegionalDeal {
  region: string;
  summary: string;
}

interface Deal {
  title: string;
  summary: string;
  link?: string;
}

const EMPTY_DEAL: Deal = { title: "", summary: "", link: "" };

const KO_REGIONS: RegionalDeal[] = [
  { region: "북미",   summary: "" },
  { region: "아시아", summary: "" },
  { region: "유럽",   summary: "" },
];
const EN_REGIONS: RegionalDeal[] = [
  { region: "North America", summary: "" },
  { region: "Asia",          summary: "" },
  { region: "Europe",        summary: "" },
];

const REGION_BG: Record<string, string> = {
  "북미":           "#111",
  "아시아":         "#1d4ed8",
  "유럽":           "#15803d",
  "North America":  "#111",
  "Asia":           "#1d4ed8",
  "Europe":         "#15803d",
};

export default function NewsletterComposePage() {
  const [adminKey, setAdminKey]       = useState("");
  const [weekLabel, setWeekLabel]     = useState("");
  const [insightLine, setInsightLine] = useState("");

  const [regionsKo, setRegionsKo] = useState<RegionalDeal[]>(KO_REGIONS.map(r => ({ ...r })));
  const [regionsEn, setRegionsEn] = useState<RegionalDeal[]>(EN_REGIONS.map(r => ({ ...r })));

  const [dealsKo, setDealsKo] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);
  const [dealsEn, setDealsEn] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);

  const [reportTitleKo, setReportTitleKo] = useState("");
  const [reportTitleEn, setReportTitleEn] = useState("");
  const [reportBodyKo,  setReportBodyKo]  = useState("");
  const [reportBodyEn,  setReportBodyEn]  = useState("");
  const [reportLink,    setReportLink]    = useState("");

  const [sending, setSending] = useState<"ko" | "en" | "all" | null>(null);
  const [result,  setResult]  = useState<string | null>(null);

  function updateRegion(arr: RegionalDeal[], setArr: (v: RegionalDeal[]) => void, i: number, value: string) {
    setArr(arr.map((item, idx) => idx === i ? { ...item, summary: value } : item));
  }

  function updateDeal(arr: Deal[], setArr: (v: Deal[]) => void, i: number, field: keyof Deal, value: string) {
    setArr(arr.map((item, idx) => idx === i ? { ...item, [field]: value } : item));
  }

  async function send(lang: "ko" | "en" | "all") {
    setSending(lang);
    setResult(null);
    try {
      const res = await fetch("/api/newsletter/send", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-key": adminKey },
        body: JSON.stringify({
          lang,
          weekLabel,
          insightLine,
          regionalDeals_ko: regionsKo,
          regionalDeals_en: regionsEn,
          deals_ko: dealsKo,
          deals_en: dealsEn,
          reportTitle_ko: reportTitleKo,
          reportTitle_en: reportTitleEn,
          reportBody_ko:  reportBodyKo,
          reportBody_en:  reportBodyEn,
          reportLink,
        }),
      });
      const data = await res.json();
      if (!res.ok) setResult(`오류: ${data.error}`);
      else setResult(`발송 완료: ${data.sent}/${data.total}명`);
    } catch {
      setResult("네트워크 오류");
    } finally {
      setSending(null);
    }
  }

  const inputCls   = "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-gray-400";
  const labelCls   = "block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide";
  const sectionCls = "bg-white rounded-xl border border-gray-200 p-6 space-y-4";

  function RegionBlock({ regions, setRegions, placeholder }: {
    regions: RegionalDeal[];
    setRegions: (v: RegionalDeal[]) => void;
    placeholder?: (r: string) => string;
  }) {
    return (
      <div className="space-y-4">
        {regions.map((item, i) => (
          <div key={i}>
            <label className="block mb-1.5">
              <span
                className="text-white text-[10px] font-bold px-2 py-0.5 rounded mr-2"
                style={{ backgroundColor: REGION_BG[item.region] ?? "#111" }}
              >
                {item.region}
              </span>
              <span className="text-xs text-gray-400">이번 주 M&A 동향</span>
            </label>
            <textarea
              value={item.summary}
              onChange={e => updateRegion(regions, setRegions, i, e.target.value)}
              className={inputCls + " resize-none"}
              rows={3}
              placeholder={placeholder?.(item.region) ?? ""}
            />
          </div>
        ))}
      </div>
    );
  }

  const koPlaceholder = (r: string) => {
    if (r === "북미")   return "예) 미국 테크 섹터 M&A가 다시 활발해지고 있다. 특히 AI 인프라 관련 기업 인수가..."
    if (r === "아시아") return "예) 일본 PE 시장에서 대형 카브아웃 딜이 진행 중이다. 한국은 반도체..."
    return "예) 유럽 에너지 전환 관련 M&A가 급증하고 있다. 독일·프랑스 중심으로..."
  };
  const enPlaceholder = (r: string) => {
    if (r === "North America") return "e.g. Tech M&A is picking up again in the US, driven by AI infrastructure acquisitions..."
    if (r === "Asia")          return "e.g. Large carve-out deals are underway in Japan's PE market. Korea's semiconductor..."
    return "e.g. Energy-transition M&A is surging in Europe, led by Germany and France..."
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto space-y-6">

        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Report 발송</h1>
          <p className="text-sm text-gray-500 mt-1">각 섹션을 채우고 KO / EN / 전체 발송</p>
        </div>

        {/* 어드민 키 */}
        <div className={sectionCls}>
          <label className={labelCls}>Admin Key</label>
          <input type="password" value={adminKey} onChange={e => setAdminKey(e.target.value)} className={inputCls} placeholder="ADMIN_SECRET" />
        </div>

        {/* 기본 정보 */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">기본 정보</h2>
          <div>
            <label className={labelCls}>주간 레이블</label>
            <input value={weekLabel} onChange={e => setWeekLabel(e.target.value)} className={inputCls} placeholder="2025년 6월 첫째 주 / Week of June 2, 2025" />
          </div>
          <div>
            <label className={labelCls}>한 줄 인사이트 (KO·EN 공통)</label>
            <input value={insightLine} onChange={e => setInsightLine(e.target.value)} className={inputCls} placeholder="이번 주를 관통하는 한 문장" />
          </div>
        </div>

        {/* 글로벌 M&A 동향 KO */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">글로벌 M&A 동향 — KO</h2>
          <p className="text-xs text-gray-400">북미 · 아시아(중국·홍콩·싱가포르·일본·한국) · 유럽 각 2~3줄</p>
          <RegionBlock regions={regionsKo} setRegions={setRegionsKo} placeholder={koPlaceholder} />
        </div>

        {/* Global M&A Pulse EN */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Global M&A Pulse — EN</h2>
          <p className="text-xs text-gray-400">North America · Asia · Europe, 2–3 sentences each</p>
          <RegionBlock regions={regionsEn} setRegions={setRegionsEn} placeholder={enPlaceholder} />
        </div>

        {/* 딜 KO */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">이번 주 딜 — KO (글로벌 1 + 국내 1)</h2>
          {dealsKo.map((deal, i) => (
            <div key={i} className="space-y-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <input value={deal.title} onChange={e => updateDeal(dealsKo, setDealsKo, i, "title", e.target.value)} className={inputCls} placeholder={i === 0 ? "글로벌 딜 제목" : "국내 딜 제목"} />
              <textarea value={deal.summary} onChange={e => updateDeal(dealsKo, setDealsKo, i, "summary", e.target.value)} className={inputCls + " resize-none"} rows={2} placeholder="한 줄 요약" />
              <input value={deal.link} onChange={e => updateDeal(dealsKo, setDealsKo, i, "link", e.target.value)} className={inputCls} placeholder="링크 (선택)" />
            </div>
          ))}
        </div>

        {/* Deal Watch EN */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Deal Watch — EN (Global × 2)</h2>
          {dealsEn.map((deal, i) => (
            <div key={i} className="space-y-2 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <input value={deal.title} onChange={e => updateDeal(dealsEn, setDealsEn, i, "title", e.target.value)} className={inputCls} placeholder={`Deal ${i + 1} title`} />
              <textarea value={deal.summary} onChange={e => updateDeal(dealsEn, setDealsEn, i, "summary", e.target.value)} className={inputCls + " resize-none"} rows={2} placeholder="One-line summary" />
              <input value={deal.link} onChange={e => updateDeal(dealsEn, setDealsEn, i, "link", e.target.value)} className={inputCls} placeholder="Link (optional)" />
            </div>
          ))}
        </div>

        {/* Weekly Report */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">Weekly Report 본문</h2>
          <div>
            <label className={labelCls}>리포트 링크</label>
            <input value={reportLink} onChange={e => setReportLink(e.target.value)} className={inputCls} placeholder="https://dealstory.kr/reports/2025-06-w1" />
          </div>
          <div>
            <label className={labelCls}>제목 (KO)</label>
            <input value={reportTitleKo} onChange={e => setReportTitleKo(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>본문 (KO) — 단락 구분: 빈 줄</label>
            <textarea value={reportBodyKo} onChange={e => setReportBodyKo(e.target.value)} className={inputCls + " resize-y"} rows={8} />
          </div>
          <div>
            <label className={labelCls}>Title (EN)</label>
            <input value={reportTitleEn} onChange={e => setReportTitleEn(e.target.value)} className={inputCls} />
          </div>
          <div>
            <label className={labelCls}>Body (EN)</label>
            <textarea value={reportBodyEn} onChange={e => setReportBodyEn(e.target.value)} className={inputCls + " resize-y"} rows={8} />
          </div>
        </div>

        {/* 발송 */}
        <div className={sectionCls}>
          {result && (
            <div className={`text-sm font-medium px-4 py-3 rounded-lg ${result.startsWith("오류") ? "bg-red-50 text-red-600" : "bg-green-50 text-green-700"}`}>
              {result}
            </div>
          )}
          <div className="flex gap-3 flex-wrap">
            <button onClick={() => send("ko")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50">
              {sending === "ko" ? "발송 중..." : "🇰🇷 KO 발송"}
            </button>
            <button onClick={() => send("en")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 disabled:opacity-50">
              {sending === "en" ? "Sending..." : "🌍 EN 발송"}
            </button>
            <button onClick={() => send("all")} disabled={!!sending}
              className="px-6 py-2.5 rounded-lg bg-black text-white text-sm font-semibold hover:bg-gray-800 disabled:opacity-50">
              {sending === "all" ? "발송 중..." : "전체 발송 (KO + EN)"}
            </button>
          </div>
          <p className="text-xs text-gray-400">발송 전 테스트 이메일로 먼저 확인하세요.</p>
        </div>

      </div>
    </div>
  );
}
