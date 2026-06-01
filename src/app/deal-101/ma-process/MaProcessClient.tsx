"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LikeButton from "@/components/LikeButton";

// ── 애니메이션 헬퍼 ──────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ── 6단계 페이즈 데이터 ─────────────────────────────────────────
const PHASES = [
  {
    num: "01",
    title: "전략 수립 & 타겟 탐색",
    subtitle: "왜 사야 하나, 누구를 사야 하나",
    color: "blue",
    duration: "1–3개월",
    description:
      "M&A는 계약서보다 훨씬 앞에서 시작된다. 경영진이 '자체 성장만으로는 목표를 달성하기 어렵다'고 판단하는 순간, 혹은 PE 펀드가 새 투자 집행 기회를 찾는 순간이 출발점이다. 이 단계의 핵심 질문은 단 두 가지 — '왜 사는가'와 '누구를 사는가'.",
    analogy: "맛집을 직접 차릴까, 이미 잘 되는 가게를 살까 — 직접 개업 대비 M&A의 본질적 선택지다. 빠른 시장 진입, 기술·브랜드 확보, 경쟁 제거가 직접 투자보다 빠를 때 M&A를 선택한다.",
    stakeholders: [
      {
        role: "경영진 / 이사회 (Board)",
        responsibility: "인수 전략 승인, 예산 및 가격 한도 설정. 전략적 방향 없이 IB에 '좋은 딜 찾아줘'라고만 하면 프로세스가 산으로 간다.",
      },
      {
        role: "내부 M&A 전략팀",
        responsibility: "롱리스트 → 쇼트리스트 압축. 인수 후 통합(PMI) 가능성까지 사전에 검토. 대형 기업은 전담 팀이 있고 중소 기업은 CFO 직속 TF가 담당.",
      },
      {
        role: "셀사이드 IB (Sell-side Advisor)",
        responsibility: "매각 측 IB는 이 단계에 이미 클라이언트와 계약하고 전체 프로세스를 설계한다. '누구에게 팔까'부터 '어떤 순서로 접촉할까'까지 그림을 그린다.",
      },
      {
        role: "전략 컨설팅사",
        responsibility: "시장 매력도·경쟁 구도 분석, 인수 타겟의 산업 내 포지셔닝 검증. M&A 전 단계 CDD(Commercial Due Diligence)의 사전 버전 역할.",
      },
    ],
    documents: [
      { name: "인수전략 메모 (M&A Rationale)", nameEn: "Acquisition Strategy Memo (M&A Rationale)", desc: "왜 이 타겟인가. 이사회 승인용 내부 문서. 시너지 추정치와 최대 지불 가격(Walk-away Price)이 핵심 내용.", descEn: "Why this target? Internal document for board approval. Key contents: synergy estimates and maximum willingness-to-pay (Walk-away Price)." },
      { name: "롱리스트 / 쇼트리스트", nameEn: "Long List / Short List", desc: "업계 전체 잠재 타겟을 50~100개로 추린 뒤, 전략·재무 기준으로 5~10개로 압축. 이후 접촉 순서를 결정.", descEn: "Narrows the universe of 50–100 potential targets down to 5–10 using strategic and financial criteria. Determines outreach sequencing." },
      { name: "재무 스크리닝 모델", nameEn: "Financial Screening Model", desc: "공개 정보(재무제표, IR) 기반 초기 EV/EBITDA 추정. 정밀도보다 방향성 확인이 목적.", descEn: "Preliminary EV/EBITDA estimates based on public information (financial statements, IR). Purpose is directional, not precise." },
    ],
    insight: "이 단계에서 '가격 한도(Walk-away Price)'가 명확히 설정되지 않으면, 이후 입찰 경쟁이 붙었을 때 감정적 Over-bid가 발생한다. 딜이 '성공'했지만 나중에 실패로 판명되는 원인의 절반은 여기서 출발한다.",
  },
  {
    num: "02",
    title: "접촉 & NDA / IM 수령",
    subtitle: "첫 만남, 무엇을 보여주고 무엇을 숨기나",
    color: "violet",
    duration: "2–4주",
    description:
      "셀사이드 IB가 잠재 인수자들에게 티저(Teaser)를 보내면서 딜이 공식화된다. '관심 있으세요?'라는 첫 노크다. NDA(비밀유지계약)에 서명한 후에야 좀 더 상세한 IM(정보제공각서)을 볼 수 있다.",
    analogy: "집을 팔 때 부동산 중개인이 외부에서 찍은 사진만 먼저 보내고, 내부 투어는 진지한 매수자에게만 허용하는 것과 같다. 티저가 외부 사진, IM이 내부 투어 자료다.",
    stakeholders: [
      {
        role: "셀사이드 IB",
        responsibility: "딜 마케팅 총괄. 티저·IM 작성, 잠재 인수자 선별(Qualified Buyer), Process Letter 발송. 입찰 경쟁 구도를 만들어 매각가를 최대화하는 게 목표.",
      },
      {
        role: "매도자 경영진",
        responsibility: "IM 내용 검수 및 승인. 어떤 정보를 공개할지 IB와 협의. 너무 많이 열면 영업기밀 노출 리스크, 너무 적게 열면 입찰자들이 가격을 낮게 쓴다.",
      },
      {
        role: "잠재 인수자 (바이사이드)",
        responsibility: "티저 검토 후 관심 여부 표명. NDA 협상 및 서명. IM 수령 후 초기 검토 시작. 이 단계에서 탈락하는 후보도 많다.",
      },
      {
        role: "바이사이드 IB",
        responsibility: "IM 내용을 바탕으로 초기 가치평가 작업 시작. 경쟁 입찰 환경에서 어떤 가격대가 선택될지 전략적으로 분석.",
      },
    ],
    documents: [
      { name: "Teaser (티저)", nameEn: "Teaser", desc: "1~2페이지 분량의 익명 요약 자료. 회사명 없이 '국내 1위 xx 기업' 식으로 업종·규모·실적만 공개. 관심 여부를 타진하는 첫 문서.", descEn: "1–2 page anonymous summary. Discloses only sector, size, and financials (e.g., '#1 in its category') without naming the company. The first document used to gauge buyer interest." },
      { name: "NDA (비밀유지계약)", nameEn: "NDA (Non-Disclosure Agreement)", desc: "IM 제공 전 필수. 입찰 과정에서 얻은 정보를 외부에 유출하거나 딜 무산 후 악용하는 것을 방지. 위반 시 손해배상 조항 포함.", descEn: "Required before IM is shared. Prevents leaking information obtained during the process or misusing it if the deal falls through. Includes damages clause for breach." },
      { name: "IM / CIM (정보제공각서)", nameEn: "IM / CIM (Information Memorandum / Confidential Information Memorandum)", desc: "100~200페이지 분량의 상세 자료. 사업 개요, 재무 실적, 시장 분석, 핵심 경영진, 리스크 등 포함. 이 문서를 보고 LOI 가격을 작성.", descEn: "100–200 page detailed document covering business overview, financial results, market analysis, key management, and risks. Buyers use this to formulate their LOI price." },
      { name: "Process Letter", nameEn: "Process Letter", desc: "입찰 일정·규칙을 담은 공문. LOI 제출 마감일, 허용 조건, 우선협상대상자 선정 기준 등이 명시.", descEn: "Formal letter outlining bidding schedule and rules. Specifies the LOI submission deadline, permitted conditions, and criteria for selecting the preferred bidder." },
    ],
    insight: "IM은 매도자가 보여주고 싶은 것만 담긴다. '정상화 EBITDA'로 최대한 좋게 포장된 숫자들이다. 바이사이드의 핵심 역량은 IM을 믿지 않고, DD로 독립 검증하는 것이다.",
  },
  {
    num: "03",
    title: "IOI / LOI — 첫 가격 제안",
    subtitle: "EV/EBITDA 멀티플이 처음 등장하는 순간",
    color: "amber",
    duration: "2–4주",
    description:
      "IM을 검토한 후 입찰자들이 첫 번째 가격 제안서를 낸다. IOI(Interest of Interest, 관심표명서)는 구속력 없는 초기 가격 범위이고, 이후 LOI(Letter of Intent, 의향서)는 DD 진입 직전의 좀 더 구체적인 제안서다. 이 단계에서 EV/EBITDA 멀티플 협상이 본격화된다.",
    analogy: "아파트 청약에서 '이 가격이면 살 의향 있다'고 먼저 써내는 것과 비슷하다. 단, 계약서가 아니라 '진지한 관심'의 신호다. 이 가격이 이후 DD를 거치면서 최종 SPA 가격으로 조정된다.",
    stakeholders: [
      {
        role: "바이사이드 IB",
        responsibility: "EV/EBITDA 멀티플 분석, comparable 거래 사례 수집, 최적 입찰 가격 전략 수립. 경쟁 입찰이면 '얼마를 써야 이기면서도 안 비싸게 사나'가 핵심 문제.",
      },
      {
        role: "회계법인 (초기 재무분석)",
        responsibility: "IM의 EBITDA 숫자 검증, 조정 EBITDA 추정. 본격적인 FDD(재무실사) 전의 사전 점검. 비정상 항목, 일회성 비용을 걸러낸다.",
      },
      {
        role: "PE 투자심의위원회 (IC)",
        responsibility: "PE라면 IC 승인 없이 LOI를 제출할 수 없다. '이 딜에 XX억까지 쓸 수 있다'는 내부 가격 한도 승인이 필요.",
      },
      {
        role: "인수금융 주관 은행",
        responsibility: "PE 딜이라면 LOI 제출 전에 인수금융(Acquisition Finance) 가능성과 규모를 미리 타진한다. 'Debt 얼마까지 가능해?'를 먼저 확인해야 Equity 투자금액이 결정된다.",
      },
    ],
    documents: [
      { name: "IOI (관심표명서)", desc: "구속력 없음. 가격 범위(예: EV 5,000억~6,000억원), 거래 구조 의향, DD 요청 범위를 기재. 셀사이드가 본 입찰 참여자를 3~5개로 추리는 데 사용." },
      { name: "LOI (의향서 / Term Sheet)", desc: "구속력은 제한적이나 핵심 조건 합의가 포함. 제안 가격, 거래 구조(주식 매수 vs. 자산 매수), DD 범위·기간, 독점협상 여부(Exclusivity) 등." },
      { name: "초기 가치평가 모델", desc: "DCF + EV/EBITDA 멀티플 기반. IM의 가정치를 입력해 EV를 역산. 단, IM 숫자를 그대로 쓰면 Over-pay 위험." },
    ],
    insight: "LOI에 명시된 가격은 DD 결과에 따라 조정 가능하다. 그런데 일단 높은 가격으로 LOI를 내고 DD에서 '발견'으로 가격을 깎으려는 전략은 매도자와의 신뢰를 해친다. 반대로 낮게 써서 먼저 들어가고 싶은 유혹도 있지만, 경쟁자에게 밀릴 수 있다.",
  },
  {
    num: "04",
    title: "실사 (Due Diligence)",
    subtitle: "가장 길고, 가장 많은 사람이 움직이는 단계",
    color: "rose",
    duration: "4–12주",
    description:
      "LOI가 수락되고 나면 본격적인 실사가 시작된다. 회계·법무·사업·기술·환경 등 여러 영역의 전문가들이 매도자 자료를 샅샅이 검토한다. VDR(가상 데이터룸)에는 수천 개의 문서가 올라오고, 바이사이드팀은 Q&A 리스트로 질문을 쏟아낸다.",
    analogy: "중고차를 살 때 외관만 보고 사는 게 IM 검토라면, 공임비를 내고 정비사에게 엔진·미션·하부까지 전부 확인하는 것이 DD다. 문제가 발견되면 가격을 깎거나 계약을 포기할 수 있다.",
    stakeholders: [
      {
        role: "FDD 회계법인 (Financial DD)",
        responsibility: "3~5개년 재무제표 검증, EBITDA 정상화(Adjusted EBITDA), 운전자본 분석, 부외부채 확인. 'Quality of Earnings(QoE)' 보고서 작성. 가장 핵심적인 DD로, 가격 조정의 근거가 된다.",
      },
      {
        role: "LDD 법무법인 (Legal DD)",
        responsibility: "계약 리스크, 소송·분쟁, 지식재산권, 규제·인허가, 노동 문제, 환경 부채 검토. 특히 '잠재 부채(Contingent Liability)'가 얼마나 있는지가 핵심.",
      },
      {
        role: "CDD 전략컨설팅 (Commercial DD)",
        responsibility: "시장 규모·성장성, 경쟁 구도, 고객 집중도, 수익 지속 가능성 검토. 'EBITDA가 앞으로도 유지될 수 있나'를 독립적으로 검증. 특히 고객 이탈 리스크와 시장 성장 전망이 핵심.",
      },
      {
        role: "TDD / IT DD (기술실사)",
        responsibility: "소프트웨어·시스템 아키텍처, 기술 부채(Tech Debt), 핵심 인력 의존도, 사이버보안 리스크 검토. 테크 기업 딜에서 비중이 점점 커지는 영역.",
      },
      {
        role: "HR DD",
        responsibility: "핵심 경영진 이탈 가능성, 스톡옵션·퇴직금 부채, 고용 계약·성과 보상 체계 검토. PMI에서 인력 통합이 실패하는 원인을 미리 파악.",
      },
      {
        role: "매도자 Management (경영진 인터뷰)",
        responsibility: "DD 과정에서 바이사이드팀과 수차례 인터뷰. 자료로는 알 수 없는 맥락을 설명. 그러나 이 인터뷰도 '세일즈'의 일부이므로 비판적으로 들어야 한다.",
      },
    ],
    documents: [
      { name: "VDR (가상 데이터룸)", desc: "수천 개의 문서가 올라오는 온라인 데이터 공유 공간. 접근 권한을 세밀하게 통제. Intralinks, Datasite 등의 플랫폼 사용. DD 기간 중 24시간 열린다." },
      { name: "Q&A 리스트", desc: "바이사이드가 VDR 자료에서 확인되지 않는 사항을 질문하는 문서. 수백~수천 개에 달하기도 한다. 응답 속도와 품질이 딜 분위기에 영향을 준다." },
      { name: "FDD 보고서 (Quality of Earnings)", desc: "회계법인이 작성하는 재무실사 결과. Adjusted EBITDA, 정상화 운전자본, 부외부채 목록 등이 핵심. 이 숫자가 최종 SPA 가격 조정의 근거가 된다." },
      { name: "LDD 보고서", desc: "법적 리스크 목록화. '중요(Material)', '중간(Moderate)', '경미(Minor)' 등급으로 분류. 중요 리스크는 SPA의 Reps & Warranties에 반영." },
      { name: "CDD 보고서", desc: "시장·사업 독립 검증. IM의 성장 가정이 현실적인지, 고객 락인(Lock-in) 구조가 있는지, 주요 경쟁자 위협은 없는지 분석." },
    ],
    insight: "DD는 '문제를 찾는 과정'이 아니라 '이미 결정된 가격에 근거를 대는 과정'이 되는 함정이 있다. 바이사이드가 딜에 너무 감정적으로 몰입하면 DD팀이 발견한 문제를 축소하거나 무시한다. DD 결과가 LOI 가격을 정당화하지 못한다면, 협상 테이블로 돌아가거나 딜에서 나와야 한다.",
  },
  {
    num: "05",
    title: "SPA 협상 & 서명",
    subtitle: "딜의 모든 조건이 법적 언어로 바뀌는 단계",
    color: "emerald",
    duration: "4–8주",
    description:
      "DD 결과를 반영해 최종 가격과 조건을 협상하고, 주식매매계약서(SPA)를 체결한다. SPA는 딜의 모든 법적·재무적 조건을 담는 문서로, 협상이 가장 치열하고 변호사 비용이 가장 많이 나가는 단계다.",
    analogy: "부동산 계약서를 쓰는 단계와 같다. 등기, 잔금, 하자보수 책임, 특약 사항을 모두 문서로 남기는 것. 단, M&A SPA는 아파트 계약서 수십 페이지가 아니라 수백~수천 페이지 분량이다.",
    stakeholders: [
      {
        role: "M&A 법무법인 (양측)",
        responsibility: "SPA 초안 작성 및 협상. 각 조항의 표현 하나가 수백억의 법적 책임 차이를 만든다. 대형 딜은 크로스보더 법무팀이 복수 국가 법령을 동시에 검토.",
      },
      {
        role: "바이사이드 IB",
        responsibility: "DD 발견사항을 가격 조정 협상에 활용. '이 문제 때문에 LOI 대비 XX억 낮춰야 한다'는 논거를 구성. 협상 전략의 중심 역할.",
      },
      {
        role: "인수금융 주관 은행 / 대주단",
        responsibility: "PE 딜이라면 SPA 서명 전에 인수금융 약정서(Credit Agreement)도 동시에 체결해야 한다. SPA와 금융 약정서가 맞물려 있어 일정 조율이 중요.",
      },
      {
        role: "경영진 (양측)",
        responsibility: "핵심 경영진 고용 조건(Retention Package), 경쟁 금지(Non-Compete), 매도자의 딜 후 역할 등 협상. 특히 창업자가 매도자인 경우 감정적 갈등이 발생하기 쉽다.",
      },
    ],
    documents: [
      { name: "SPA (주식매매계약서)", desc: "딜의 최종 계약서. 매매 대상, 가격, 가격 조정 메커니즘(Net Working Capital Adjustment), 클로징 조건, Reps & Warranties, 손해배상, Break-up Fee 등이 포함. 수백 페이지." },
      { name: "Reps & Warranties (진술 및 보장)", desc: "매도자가 '이 회사에 대해 X가 사실이다'고 보증하는 조항들. 위반 시 손해배상 책임 발생. 범위와 한도 협상이 핵심 쟁점." },
      { name: "MAC 조항 (중대한 부정적 변경)", desc: "서명 이후 클로징 전 기간에 회사나 시장에 중대한 부정적 변화가 생기면 바이사이드가 딜을 파기할 수 있는 조항. 코로나·전쟁·금리 급등 등이 사례." },
      { name: "Break-up Fee (해약금)", desc: "딜을 파기하는 측이 상대방에게 지불하는 위약금. 바이사이드 break fee는 딜 가치의 2~5%, 셀사이드(역방향) break fee는 더 높은 경우도 있다." },
      { name: "Escrow (에스크로)", desc: "인수 가격 일부를 제3자에게 예탁해 두고 Reps & Warranties 위반 클레임이 해결된 후 지급. 매도자에게는 불리하지만 인수자 보호 장치." },
    ],
    insight: "SPA 협상에서 가장 많이 싸우는 포인트는 ① 가격 조정 메커니즘(운전자본 기준), ② Reps & Warranties의 범위와 생존 기간(Survival Period), ③ Indemnification 한도. 이 세 가지가 협상 타임라인을 2~3배 늘리는 주범이다.",
  },
  {
    num: "06",
    title: "규제 승인 & 클로징",
    subtitle: "딜이 끝났다고 끝난 게 아니다",
    color: "teal",
    duration: "1개월–2년",
    description:
      "SPA에 서명하면 딜이 '발표(Announced)'된다. 하지만 법적으로 완료(Close)되려면 경쟁 당국의 기업결합 심사를 통과해야 한다. 단순한 딜은 수 주 만에 끝나지만, 복잡한 빅딜은 수년이 걸리거나 조건부 승인·금지 명령을 받기도 한다.",
    analogy: "결혼식을 올렸어도 혼인신고를 해야 법적 부부가 되는 것과 같다. SPA 서명은 결혼식, 규제 승인과 클로징은 혼인신고다. 그 사이에 심사관이 '이 결혼, 사회에 해롭지 않나요?' 하고 심사한다.",
    stakeholders: [
      {
        role: "공정거래위원회 (KFTC) / EU 집행위원회 / CFIUS",
        responsibility: "시장 경쟁에 미치는 영향 심사. 기업결합 신고서를 검토하고 승인·조건부 승인·금지 중 하나를 결정. 심사 기간은 국가·규모·시장 점유율에 따라 다르다.",
      },
      {
        role: "규제 전문 법무법인",
        responsibility: "기업결합 신고서 작성, 당국 질문 대응, 경제학자 고용해 시장 획정(Market Definition) 분석 제출. 조건부 승인 협상도 담당.",
      },
      {
        role: "통합팀 (PMI: Post-Merger Integration)",
        responsibility: "규제 승인 기간을 허비하지 않고 클로징 직후 100일 통합 계획을 준비한다. 시스템·조직·문화 통합 로드맵 작성. M&A의 장기 성공을 좌우한다.",
      },
      {
        role: "IB / 법무법인 (클로징 체크리스트 관리)",
        responsibility: "SPA의 선행 조건(Condition Precedent)이 모두 충족됐는지 최종 확인. 규제 승인, 주주총회 승인, 파이낸싱 완결 등이 체크리스트 항목.",
      },
    ],
    documents: [
      { name: "기업결합 신고서", desc: "경쟁 당국에 제출하는 공식 심사 신청서. 시장 점유율, 경쟁 분석, 시너지 계획 등 포함. 미국은 HSR Act, EU는 EC Merger Regulation, 한국은 공정거래법 적용." },
      { name: "Remedies (시정조치) 협상 자료", desc: "규제 당국이 조건을 달 경우, 사업부 매각(Divestiture)이나 행동 조치(Behavioral Remedy)를 협상하는 문서." },
      { name: "클로징 패키지", desc: "잔금 지급, 주주명부 변경, 이사회 구성 변경, 대출 실행 등 클로징 당일 처리해야 하는 모든 법적 행위의 묶음. 분 단위로 진행 순서가 짜인다." },
      { name: "100일 통합 계획 (PMI Plan)", desc: "클로징 직후 실행할 통합 로드맵. 조직 구조, IT 시스템 마이그레이션, 인력 유지 계획, 브랜드 통합 등. 딜의 실질적 성공은 여기서 결정된다." },
    ],
    insight: "딜이 실패하는 가장 큰 이유 두 가지 — 규제 당국의 금지 명령, 그리고 클로징 후 PMI 실패. 전자는 딜을 아예 없애고, 후자는 인수자가 막대한 프리미엄을 내고 가치를 파괴한다. 통계적으로 M&A의 70~80%가 기대 시너지를 달성하지 못한다고 알려져 있다.",
  },
];

// ── 케이스 스터디 ────────────────────────────────────────────────
const CASES = [
  {
    slug: "adobe-figma-blocked",
    title: "규제가 막은 $200억 딜",
    company: "어도비 × 피그마",
    type: "실패 케이스",
    typeColor: "rose",
    phaseFailed: "Phase 6 — 규제 승인 단계",
    analogy: "최고급 레스토랑이 경쟁 레스토랑을 사들이려 했는데, 식품 안전청이 '그러면 동네 식당이 다 망하잖아요'라고 막아버린 격이다.",
    paragraphs: [
      "2022년 9월, 어도비는 디자인 협업 툴 피그마를 약 $200억(27조원)에 인수하겠다고 발표했다. ARR의 50배에 달하는 역대 최고 수준의 SaaS M&A 프리미엄이었다. 어도비 입장에서는 크리에이티브 클라우드와 피그마의 결합으로 UI/UX 디자인 시장을 완전히 지배한다는 전략이었다.",
      "문제는 규제 당국이 보기에 이 딜은 '경쟁 제거'였다는 점이다. EU 집행위원회와 영국 CMA는 어도비와 피그마 모두 UI 디자인 소프트웨어 시장의 지배적 사업자라고 판단했다. 두 회사가 합쳐지면 경쟁이 사라지고, 소비자와 기업은 선택지를 잃는다는 논리였다.",
      "어도비는 15개월 동안 시정 조치를 제안하며 버텼다. 하지만 EU가 사실상 금지 방향으로 결론을 내리자, 2023년 12월 양측은 합의 해지를 선언했다. 어도비는 피그마에게 Break-up Fee로 $10억(약 1.3조원)을 지급했다.",
    ],
    lesson: "빅테크 수평 합병(Horizontal Merger)은 갈수록 규제 리스크가 높다. M&A 전략 수립 단계(Phase 1)에서 '이 딜이 규제를 통과할 수 있는가'를 독립적으로 검증해야 한다. 어도비는 $10억 위약금과 15개월의 기회 비용을 잃었고, 피그마는 독립 기업으로 살아남아 IPO 준비에 들어갔다.",
  },
  {
    slug: "elon-musk-twitter",
    title: "LOI 철회, 법적 강제, 그리고 강행 클로징",
    company: "머스크 × 트위터",
    type: "험난한 성공 케이스",
    typeColor: "amber",
    phaseFailed: "Phase 3–5 — LOI 서명 후 파기 시도",
    analogy: "집을 사기로 계약서를 쓴 다음, '생각해보니 이 집 가격이 너무 비싸고 숨겨진 결함이 있어'라며 계약 파기를 선언했다가, 집주인이 '법원에서 판결 받겠다'며 맞선 것과 같다.",
    paragraphs: [
      "2022년 4월, 일론 머스크는 주당 $54.20에 트위터를 인수하겠다는 LOI를 제출했다. 총 $440억 규모의 역대 최대 테크 LBO였다. 하지만 두 달 뒤인 7월, 머스크는 '트위터가 봇 계정 수를 허위로 공개했다'는 이유로 LOI 파기를 선언했다.",
      "트위터 이사회는 즉각 소송으로 맞섰다. 'SPA에 서명했고 정당한 파기 사유가 없다. 계약대로 딜을 완성하라'는 특정이행(Specific Performance) 청구였다. 법원은 10월에 재판을 시작하기로 했다.",
      "재판 직전인 10월, 머스크는 결국 원래 합의된 $54.20에 인수를 완료했다. 법적 위험을 회피한 것이다. 하지만 인수 직후 트위터 주가는 폭락하고, 머스크는 임직원 75%를 해고하는 고강도 구조조정을 단행했다. 인수 후 트위터는 X로 리브랜딩됐다.",
    ],
    lesson: "LOI 또는 SPA에 서명 후 파기는 Break-up Fee 이상의 법적 위험을 수반한다. '특정이행(Specific Performance)' 조항이 있으면 법원이 딜 강제 완성을 명령할 수 있다. 가격이 비싸 보이면 서명 전에 해결해야 한다.",
  },
  {
    slug: "mbk-homeplus",
    title: "딜은 됐다 — 그런데 구조가 문제였다",
    company: "MBK파트너스 × 홈플러스",
    type: "구조 리스크 케이스",
    typeColor: "violet",
    phaseFailed: "Phase 1–4 — 전략·DD·가격 산정",
    analogy: "집을 살 때 대출을 너무 많이 끼고 샀는데, 집값이 오르기는커녕 세입자마저 빠져나가 월세 수입이 줄어들었다. 이자를 감당하지 못하고 결국 경매에 넘어간 것과 같다.",
    paragraphs: [
      "2015년, MBK파트너스는 영국 테스코로부터 홈플러스를 약 7.2조원에 인수했다. 아시아 유통 PE 딜 역대 최대 규모였다. 인수 금융을 과감히 활용한 LBO 구조였고, MBK는 인수 후 홈플러스 점포를 팔고 재임차(Sale & Leaseback)하는 방식으로 4조원이 넘는 현금을 회수했다.",
      "문제는 이커머스 성장으로 오프라인 유통이 급격히 쪼그라들었다는 점이다. 홈플러스의 매출과 EBITDA는 지속 하락했고, 높은 임차료 부담(Sale & Leaseback의 역효과)이 겹쳐 재무 구조가 급속히 악화됐다. DD 단계에서 '이커머스 전환 리스크'가 얼마나 심각하게 다뤄졌는지 의문이 남는다.",
      "2025년 3월, 홈플러스는 기업회생절차(법정관리)를 신청했다. 수조원의 인수금융과 임차 보증금이 묶이고, 협력업체 수백 곳이 미수금을 받지 못하는 상황이 발생했다. 7.2조원짜리 딜은 10년 만에 법정관리로 귀결됐다.",
    ],
    lesson: "유통·오프라인 자산 중심의 딜에서 CDD(사업실사)는 '현재 시장 점유율'이 아니라 '5~7년 후 구조적 변화 가능성'을 봐야 한다. 또한 Sale & Leaseback으로 단기 현금을 회수하면 장기 고정 비용 부담이 늘어난다 — 이 구조적 리스크가 DD 단계에서 충분히 검토됐어야 했다.",
  },
];

// ── 이해관계자 전체 지도 ─────────────────────────────────────────
const STAKEHOLDER_MAP = [
  {
    category: "어드바이저 / IB",
    color: "blue",
    members: [
      { name: "셀사이드 IB", phases: "전 단계", role: "매도자 대리인. 티저·IM 작성, 입찰 프로세스 관리, 가격 극대화." },
      { name: "바이사이드 IB", phases: "Phase 2–5", role: "인수자 대리인. 가치평가, 입찰 전략, DD 총괄, 협상 지원." },
      { name: "인수금융 주관 은행", phases: "Phase 3–6", role: "PE 딜에서 인수금융(Debt) 구조화 및 실행." },
    ],
  },
  {
    category: "법무",
    color: "violet",
    members: [
      { name: "매도자 법무법인", phases: "Phase 2–6", role: "SPA 초안 작성, Reps & Warranties 협상, 규제 신고." },
      { name: "인수자 법무법인", phases: "Phase 2–6", role: "LDD, SPA 검토, 규제 전략, 클로징 체크리스트." },
      { name: "규제 전문 법무법인", phases: "Phase 6", role: "기업결합 신고서 작성, 경쟁 당국 대응." },
    ],
  },
  {
    category: "실사 전문가",
    color: "rose",
    members: [
      { name: "Big4 회계법인 (FDD)", phases: "Phase 4", role: "재무제표 검증, QoE 보고서, Adjusted EBITDA 산정." },
      { name: "전략컨설팅 (CDD)", phases: "Phase 4", role: "시장·사업 독립 검증, 성장 가정 검토." },
      { name: "IT/기술 실사 (TDD)", phases: "Phase 4", role: "시스템 아키텍처, 기술 부채, 사이버보안 검토." },
    ],
  },
  {
    category: "내부",
    color: "emerald",
    members: [
      { name: "경영진 / 이사회", phases: "전 단계", role: "전략 승인, 가격 한도 결정, SPA 최종 서명." },
      { name: "내부 M&A 팀 / CFO", phases: "전 단계", role: "딜 소싱, 내부 조율, 재무 모델링." },
      { name: "PMI 통합팀", phases: "Phase 6~", role: "클로징 후 100일 통합 계획 실행." },
    ],
  },
];

const COLOR_MAP: Record<string, { badge: string; border: string; bg: string; text: string; dot: string }> = {
  blue:   { badge: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300", border: "border-blue-200 dark:border-blue-800", bg: "bg-blue-50 dark:bg-blue-900/20", text: "text-blue-700 dark:text-blue-300", dot: "bg-blue-500" },
  violet: { badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300", border: "border-violet-200 dark:border-violet-800", bg: "bg-violet-50 dark:bg-violet-900/20", text: "text-violet-700 dark:text-violet-300", dot: "bg-violet-500" },
  amber:  { badge: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300", border: "border-amber-200 dark:border-amber-800", bg: "bg-amber-50 dark:bg-amber-900/20", text: "text-amber-700 dark:text-amber-300", dot: "bg-amber-500" },
  rose:   { badge: "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300", border: "border-rose-200 dark:border-rose-800", bg: "bg-rose-50 dark:bg-rose-900/20", text: "text-rose-700 dark:text-rose-300", dot: "bg-rose-500" },
  emerald:{ badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300", border: "border-emerald-200 dark:border-emerald-800", bg: "bg-emerald-50 dark:bg-emerald-900/20", text: "text-emerald-700 dark:text-emerald-300", dot: "bg-emerald-500" },
  teal:   { badge: "bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300", border: "border-teal-200 dark:border-teal-800", bg: "bg-teal-50 dark:bg-teal-900/20", text: "text-teal-700 dark:text-teal-300", dot: "bg-teal-500" },
};

export default function MaProcessClient() {
  return (
    <>
      <Header />
      <main className="flex-1">

        {/* ── 히어로 ── */}
        <section className="border-b border-gray-200/60 dark:border-gray-700/60">
          <div className="max-w-3xl mx-auto px-5 py-10">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/deal-101" className="text-xs text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                ← Deal 101
              </Link>
              <span className="text-xs text-gray-300 dark:text-gray-600">/</span>
              <span className="text-xs text-gray-400">M&A 프로세스</span>
            </div>
            <span className="inline-block text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-3 py-1 mb-4">
              Deal Structure
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
              M&A 프로세스 완전 정리
            </h1>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              전략 수립부터 클로징까지 — 6단계 프로세스, 각 단계의 이해관계자와 핵심 문서, 그리고 딜이 성공하고 실패하는 이유.
            </p>

            {/* 6단계 빠른 탐색 */}
            <div className="mt-6 flex flex-wrap gap-2">
              {PHASES.map((p) => {
                const c = COLOR_MAP[p.color];
                return (
                  <a key={p.num} href={`#phase-${p.num}`} className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge} hover:opacity-80 transition-opacity`}>
                    {p.num}. {p.title}
                  </a>
                );
              })}
              <a href="#cases" className="rounded-full px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                케이스 스터디
              </a>
            </div>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-5 py-10 space-y-16">

          {/* ── 인트로: 왜 오래 걸리나 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">왜 M&A는 이렇게 오래 걸리나?</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                중소기업 M&A는 빠르면 3~6개월, 대형 크로스보더 딜은 1~3년이 걸린다.
                "왜 이렇게 길어?"라고 의아할 수 있지만, 각 단계를 이해하면 오히려 "이게 다 필요하다고?"가 된다.
              </p>
              <p>
                집을 사고 팔 때를 생각해보자. 매물을 찾고 → 집을 보고 → 가격을 협상하고 → 등기를 확인하고 →
                계약서를 쓰고 → 대출을 받고 → 잔금을 치르는 데도 수개월이 걸린다. M&A는 그 집이
                수천억~수조원짜리이고, 집 안에 수천 명의 직원이 살고 있으며, 계약서가 수백 페이지이고,
                심지어 정부가 '이 거래 사회적으로 괜찮아요?'라고 심사까지 한다.
              </p>
              <p>
                아래 6단계는 그 모든 과정의 압축판이다. 각 단계에서 어떤 사람들이, 어떤 문서로, 어떤 목적으로
                움직이는지 파악하면 딜 뉴스가 전혀 다르게 읽힌다.
              </p>
            </div>

            {/* 전체 타임라인 바 */}
            <div className="mt-6 grid grid-cols-6 gap-1 text-center">
              {PHASES.map((p) => {
                const c = COLOR_MAP[p.color];
                return (
                  <div key={p.num} className={`rounded-lg p-2 ${c.bg}`}>
                    <div className={`text-xs font-bold ${c.text}`}>{p.num}</div>
                    <div className="text-[10px] text-gray-500 dark:text-gray-500 mt-0.5 leading-tight">{p.title.split(" ")[0]}</div>
                    <div className={`mt-1 text-[9px] font-medium ${c.text}`}>{p.duration}</div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 6단계 상세 ── */}
          {PHASES.map((phase) => {
            const c = COLOR_MAP[phase.color];
            return (
              <motion.section
                key={phase.num}
                id={`phase-${phase.num}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                {/* 헤더 */}
                <div className={`rounded-xl border ${c.border} ${c.bg} p-5 mb-4`}>
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <span className={`text-xs font-bold ${c.text}`}>Phase {phase.num}</span>
                      <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mt-0.5">{phase.title}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{phase.subtitle}</p>
                    </div>
                    <span className={`shrink-0 text-xs font-medium rounded-full px-3 py-1 ${c.badge}`}>
                      ⏱ {phase.duration}
                    </span>
                  </div>
                </div>

                {/* 설명 */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{phase.description}</p>

                {/* 비유 */}
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-5">
                  <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                  <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{phase.analogy}</p>
                </div>

                {/* 이해관계자 */}
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">이해관계자 & 역할</h3>
                <div className="space-y-2 mb-5">
                  {phase.stakeholders.map((s, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                      <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${c.dot}`} />
                      <div>
                        <span className="font-semibold text-gray-800 dark:text-gray-200">{s.role}</span>
                        <p className="text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{s.responsibility}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 핵심 문서 */}
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-3">핵심 문서 & 자료</h3>
                <div className="space-y-2 mb-5">
                  {phase.documents.map((doc, i) => (
                    <div key={i} className="p-3 rounded-lg border border-gray-100 dark:border-gray-700 text-sm">
                      <span className={`inline-block text-xs font-semibold rounded px-2 py-0.5 mb-1 ${c.badge}`}>{doc.name}</span>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed">{doc.desc}</p>
                    </div>
                  ))}
                </div>

                {/* 핵심 인사이트 */}
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 이 단계의 핵심</p>
                  <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{phase.insight}</p>
                </div>
              </motion.section>
            );
          })}

          {/* ── 이해관계자 전체 지도 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">이해관계자 전체 지도</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">하나의 M&A 딜에는 수십 명에서 수백 명의 전문가가 관여한다. 범주별로 정리하면 이렇다.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {STAKEHOLDER_MAP.map((group) => {
                const c = COLOR_MAP[group.color];
                return (
                  <div key={group.category} className={`rounded-xl border ${c.border} ${c.bg} p-4`}>
                    <h3 className={`text-xs font-bold ${c.text} mb-3`}>{group.category}</h3>
                    <div className="space-y-2">
                      {group.members.map((m, i) => (
                        <div key={i} className="text-sm">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">{m.name}</span>
                            <span className={`text-[10px] font-medium rounded-full px-2 py-0.5 ${c.badge}`}>{m.phases}</span>
                          </div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{m.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.section>

          {/* ── 케이스 스터디 ── */}
          <section id="cases">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">케이스 스터디 — 딜이 성공하고 실패하는 이유</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                M&A는 교과서대로 흘러가지 않는다. 규제가 막고, LOI를 파기하려다 소송이 붙고, 딜은 성공했지만 구조가 독이 되기도 한다. 세 가지 케이스를 통해 각 단계의 리스크를 실제로 확인해보자.
              </p>
            </motion.div>

            <div className="space-y-8">
              {CASES.map((c_item, idx) => {
                const c = COLOR_MAP[c_item.typeColor];
                return (
                  <motion.div
                    key={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    {/* 케이스 헤더 */}
                    <div className="bg-gray-50 dark:bg-gray-800/60 px-5 py-4 flex items-start justify-between gap-3 flex-wrap">
                      <div>
                        <span className={`inline-block text-xs font-medium rounded-full px-2.5 py-0.5 mb-2 ${c.badge}`}>
                          {c_item.type}
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">{c_item.title}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{c_item.company}</p>
                      </div>
                      <div className={`text-xs font-medium rounded-lg px-3 py-2 ${c.bg} ${c.text} border ${c.border}`}>
                        📍 {c_item.phaseFailed}
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      {/* 비유 */}
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">💡 비유하면</p>
                        <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{c_item.analogy}</p>
                      </div>

                      {/* 본문 */}
                      <div className="space-y-3">
                        {c_item.paragraphs.map((p, i) => (
                          <p key={i} className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{p}</p>
                        ))}
                      </div>

                      {/* 교훈 */}
                      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300 mb-1">🔑 핵심 교훈</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">{c_item.lesson}</p>
                      </div>

                      {/* 딜 상세 링크 */}
                      <Link
                        href={`/deals/${c_item.slug}`}
                        className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        이 딜 전체 스토리 보기 →
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* ── M&A가 왜 어려운가 요약 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">M&A는 왜 어려운가 — 단계별 리스크 정리</h2>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>통계에 따르면 M&A의 <strong className="text-gray-800 dark:text-gray-200">70~80%가 기대했던 시너지를 달성하지 못한다</strong>. 왜일까?</p>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                { phase: "Phase 1", risk: "가격 한도 없이 시작 → 경쟁 입찰에서 Over-bid", color: "blue" },
                { phase: "Phase 2", risk: "IM을 그대로 믿음 → 숨겨진 리스크를 DD 전에 파악 못 함", color: "violet" },
                { phase: "Phase 3", risk: "LOI 가격이 감정적으로 높게 설정 → DD 이후 조정 폭이 커 매도자와 갈등", color: "amber" },
                { phase: "Phase 4", risk: "DD팀의 발견을 무시 → 인수 후 예상치 못한 부채 발생", color: "rose" },
                { phase: "Phase 5", risk: "SPA 조건 협상 지연 → 딜 모멘텀 약화, 핵심 인력 이탈", color: "emerald" },
                { phase: "Phase 6", risk: "규제 차단 또는 PMI 실패 → 프리미엄 지불하고 가치 파괴", color: "teal" },
              ].map((item) => {
                const c = COLOR_MAP[item.color];
                return (
                  <div key={item.phase} className="flex gap-3 items-start p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-sm">
                    <span className={`shrink-0 text-xs font-bold rounded px-2 py-0.5 ${c.badge}`}>{item.phase}</span>
                    <p className="text-gray-600 dark:text-gray-400">{item.risk}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                M&A가 어려운 진짜 이유는 각 단계가 독립적으로 작동하지 않기 때문이다.
                Phase 1에서 잘못된 가정이 Phase 4 DD에서 증폭되고, Phase 5 SPA 협상에서 갈등이 되고,
                Phase 6 클로징 이후 PMI 실패로 귀결된다. 프로세스는 선형(Linear)처럼 보이지만,
                리스크는 시스템적(Systemic)으로 연결돼 있다.
              </p>
            </div>
          </motion.section>

          {/* ── 관련 개념 ── */}
          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-4">이 페이지와 연결된 개념들</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { href: "/deal-101/ev-ebitda", title: "EV/EBITDA 멀티플", desc: "Phase 3 LOI에서 처음 등장하는 핵심 가치평가 지표", badge: "Valuation" },
                { href: "/deal-101/adjusted-ebitda", title: "Adjusted EBITDA", desc: "Phase 4 FDD에서 가격 조정의 핵심이 되는 개념", badge: "Valuation" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group block p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                >
                  <span className="text-[10px] font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.desc}</p>
                </Link>
              ))}
            </div>
          </motion.section>

        </div>
        <LikeButton slug={"ma-process"} lang="ko" />
      </main>
      <Footer />
    </>
  );
}
