"use client";

import { useState } from "react";

interface MarketPulseItem {
  category: "M&A" | "PE" | "VC";
  summary: string;
}

interface Deal {
  title: string;
  summary: string;
  link?: string;
}

const EMPTY_DEAL: Deal = { title: "", summary: "", link: "" };

const DEFAULT_PULSE: MarketPulseItem[] = [
  { category: "M&A", summary: "" },
  { category: "PE",  summary: "" },
  { category: "VC",  summary: "" },
];

export default function NewsletterComposePage() {
  const [adminKey, setAdminKey]     = useState("");
  const [weekLabel, setWeekLabel]   = useState("");
  const [insightLine, setInsightLine] = useState("");

  // 마켓 펄스 (KO·EN 공통 — 나중에 필요하면 분리)
  const [pulse, setPulse] = useState<MarketPulseItem[]>(DEFAULT_PULSE);

  // 딜
  const [dealsKo, setDealsKo] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);
  const [dealsEn, setDealsEn] = useState<Deal[]>([{ ...EMPTY_DEAL }, { ...EMPTY_DEAL }]);

  // 리포트
  const [reportTitleKo, setReportTitleKo] = useState("");
  const [reportTitleEn, setReportTitleEn] = useState("");
  const [reportBodyKo,  setReportBodyKo]  = useState("");
  const [reportBodyEn,  setReportBodyEn]  = useState("");
  const [reportLink,    setReportLink]    = useState("");

  const [sending, setSending] = useState<"ko" | "en" | "all" | null>(null);
  const [result,  setResult]  = useState<string | null>(null);

  function updatePulse(i: number, value: string) {
    setPulse(prev => prev.map((item, idx) => idx === i ? { ...item, summary: value } : item));
  }

  function updateDeal(
    arr: Deal[], setArr: (v: Deal[]) => void,
    i: number, field: keyof Deal, value: string
  ) {
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
          marketPulse: pulse,
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

        {/* 마켓 펄스 */}
        <div className={sectionCls}>
          <h2 className="text-sm font-bold text-gray-700">마켓 펄스 — M&A · PE · VC</h2>
          <p className="text-xs text-gray-400">KO·EN 공통으로 사용. 각 카테고리별 이번 주 동향 2~3줄</p>
          {pulse.map((item, i) => (
            <div key={i}>
              <label className={labelCls}>
                <span style={{ backgroundColor: i === 0 ? "#111" : i === 1 ? "#374151" : "#6b7280" }}
                  className="text-white px-2 py-0.5 rounded text-[10px] mr-2">
                  {item.category}
                </span>
                동향
              </label>
              <textarea
                value={item.summary}
                onChange={e => updatePulse(i, e.target.value)}
                className={inputCls + " resize-none"}
                rows={3}
                placeholder={
                  item.category === "M&A" ? "예) 글로벌 M&A 거래 규모가 3주 연속 증가했다. 특히 테크·헬스케어 섹터에서 대형 거래가 집중됐으며..."
                  : item.category === "PE"  ? "예) 주요 PE 펀드들이 금리 안정화를 기반으로 바이아웃 검토를 재개했다. KKR, Blackstone이..."
                  :                           "예) 국내 VC 신규 투자가 전주 대비 12% 감소했다. AI·바이오 섹터는 여전히 활발하며..."
                }
              />
            </div>
          ))}
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

        {/* 딜 EN */}
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
