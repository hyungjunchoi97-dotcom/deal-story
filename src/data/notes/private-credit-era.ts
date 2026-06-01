/**
 * private-credit-era.ts
 *
 * Note: "사모대출의 시대 — 은행이 떠난 자리에 누가, 어떻게, 얼마나 들어왔는가"
 * The Private Credit Era — Who Filled the Gap Banks Left, How, and to What Scale.
 *
 * Sourced from src/data/research/private-credit-research.md.
 * No fabricated figures: all numbers traceable to the research file.
 */

import type { NoteData } from "../notes";
import { SECTIONS } from "./private-credit-era.sections";
import { REFERENCES } from "./private-credit-era.refs";

export const privateCreditEra: NoteData = {
  slug: "private-credit-era",
  category: "macro",
  status: "published",
  title: "사모대출의 시대, 은행이 떠난 자리에 누가, 어떻게, 얼마나 들어왔는가",
  titleEn: "The Private Credit Era — Who Filled the Gap Banks Left, How, and to What Scale",
  description:
    "MBK 홈플러스 회생, Blue Owl OBDC II 자산 fire sale, Apollo CEO의 'shakeout' 발언이 한 분기에 겹친 17년 호황의 끝자락. PC가 250B 달러에서 1.7T 달러로 성장한 17년사, 빅 7 플레이어, 한국 진입, 5채널 전염 메커니즘, 매주 봐야 할 7지표까지 38분에 정리한다.",
  descriptionEn:
    "Homeplus reorganization, Blue Owl OBDC II fire sale, Apollo CEO declaring 'shakeout' — the end of a 17-year bull run. PC's growth from $250B to $1.7T, the Big 7, Korean market entry, 5 contagion channels, and the 7 weekly indicators — all in 38 minutes.",
  date: "2026-06-01",
  readingMinutes: 38,
  keyPoints: [
    "사모대출(Private Credit, PC) 시장은 2008년 250B 달러에서 2024년 1.7T 달러로 17년간 약 7배 성장했다 (Preqin 협의 정의).",
    "성장의 트리거는 단순하다. Basel III(2013-2019)와 미국 Leveraged Lending Guidance(2013)가 은행을 6x EBITDA 이상 거래에서 밀어냈고, 그 자리를 PC가 채웠다.",
    "Direct Lending은 PC의 약 44%를 차지하는 주력 자산군이다. 미국 LBO 자금조달에서 PC는 2010년 약 10%에서 2024년 약 50%로 점유율을 확장했다.",
    "빅 7(Apollo, Blackstone, KKR, Ares, Blue Owl, Oaktree, HPS)이 운용 자산의 절반 이상을 통제한다. Apollo는 자회사 보험사 Athene 자산을 ABF로 운용하는 '스프레드 차익' 모델의 원조이다.",
    "한국 인수금융 시장은 2024년 20.3조원 규모이다. 1위는 KB증권(2.96조원). MBK 홈플러스는 2025년 3월 회생절차에 진입했고, 부채 8.5조원이 누적됐다. 한국 PEF, 인수금융 역사상 단일 최대 손실 사례가 될 가능성이 유력하다.",
    "PC 디폴트율은 2024년 Q4 기준 2.67%로 BSL의 4.33%보다 낮다. 단, IMF, BIS, BoE는 stale valuation, opacity, leverage layers, interconnection을 시스템 리스크로 명시했다.",
    "전염 경로는 5개이다. 자산운용사 재간접, 보험사 GA, semi-liquid 인터벌 펀드, 은행의 PC 펀드 신용공여, retail BDC. 매주 봐야 할 7개 지표가 watch dashboard로 정리되어 있다.",
    "Marc Rowan(Apollo)은 2024-25년 'shakeout' 발언과 함께 \"부채의 20-30%만 은행, 나머지는 investment marketplace\"라는 새 구조를 선언했다. Howard Marks는 \"credit carelessness는 있으나 systemic은 아니다\"로 한 발 뺐다.",
    "BlackRock의 HPS 인수(2025.7 완결, 약 220B 달러 합산 PC AUM)는 \"public + private fixed income\" 통합 시대의 신호탄이다. PC는 이제 mainstream asset class이다.",
  ],
  keyPointsEn: [
    "Private credit (PC) AUM grew from $250B in 2008 to $1.7T in 2024 — roughly 7x in 17 years (Preqin narrow definition).",
    "The trigger is simple: Basel III (2013-2019) and the US Interagency Leveraged Lending Guidance (2013) pushed banks out of deals levered above 6x EBITDA. PC absorbed what banks dropped.",
    "Direct Lending is the workhorse — about 44% of PC AUM. PC's share of US LBO financing climbed from ~10% in 2010 to ~50% in 2024.",
    "The Big 7 — Apollo, Blackstone, KKR, Ares, Blue Owl, Oaktree, HPS — control more than half of industry AUM. Apollo's Athene-spread model (insurance liability funding ABF) is the template the others now copy.",
    "Korea's acquisition-finance market reached ₩20.3T in 2024. KB Securities led with ₩2.96T. MBK's Homeplus entered court-supervised reorganization in March 2025 with ₩8.5T of accumulated debt — potentially the largest loss in Korean PEF-finance history.",
    "PC default rates ran 2.67% in Q4 2024 vs. BSL at 4.33%. But the IMF, BIS and Bank of England all flagged stale valuations, opacity, layered leverage, and interconnections as systemic risks.",
    "Five contagion channels: asset-manager fund-of-funds, insurance general accounts, semi-liquid interval funds, bank credit lines to PC funds, and retail BDCs. Seven indicators to watch weekly are laid out in the dashboard.",
    "Marc Rowan (Apollo) declared a 'shakeout' in 2024-25, reframing the system as \"only 20-30% of debt on bank balance sheets, the rest in the investment marketplace.\" Howard Marks (Oaktree) hedged: \"there is credit carelessness, but it is not systemic.\"",
    "BlackRock's acquisition of HPS (closed July 2025, ~$220B combined PC AUM) is the bell ringing for the \"public + private fixed income\" era. PC is now a mainstream asset class.",
  ],
  sections: SECTIONS,
  references: REFERENCES,
};
