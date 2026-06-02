/**
 * Sections 10-17 for the AI Semiconductor Value Chain 2026 note.
 *
 * EN coverage: §10-§17 영문판도 §1-§9와 같은 완전 평행 수준으로 다듬어졌습니다.
 */

import type { NoteSection } from "../notes";

export const SECTIONS_PART_B: NoteSection[] = [
  // ════════════════════════════════════════════════════════════════
  // 10. 3대 병목 ③ EUV
  // ════════════════════════════════════════════════════════════════
  {
    heading: "10. 3대 병목 ③ EUV, ASML 100% 독점",
    headingEn: "10. Bottleneck #3 — EUV, ASML's 100% Monopoly",
    blocks: [
      {
        type: "text",
        body:
          "EUV는 7nm 이하 첨단 노드를 만드는 유일한 방법이다.\n\nASML이 글로벌 100% 점유.\n\n24년 약 13대 출하, 26년 60대+ 목표.\n\nHigh-NA EUV가 25년부터 첫 양산 도입됐다.",
        bodyEn:
          "EUV is the only way to manufacture leading-edge nodes at 7nm and below.\n\nASML holds 100% global share.\n\nAround 13 units shipped in 2024, with a target of 60+ in 2026.\n\nHigh-NA EUV entered its first production deployment starting in 2025.",
      },
      {
        type: "text",
        body:
          "### ASML 26년 1분기 실적\n\n매출 88억 유로, YoY +13%.\n\n그 중 EUV 매출 41억 유로 (시스템 매출의 65%).\n\nHigh-NA EUV 2대 매출 인식, 첫 분기.\n\nEPS 7.15유로.\n\n26년 가이던스 매출 360-400억 유로로 상향.\n\n### EUV 출하 추이\n\n23년 53대, 24년 약 44대, 25년 약 50대 + High-NA 약 5대 누적 (인텔, 삼성, TSMC), 26년 가이던스 60대+, 27년 가이던스 80대+.\n\n### High-NA EUV, 다음 세대\n\n기존 EUV의 NA (Numerical Aperture) 0.33에서 0.55로 상향.\n\n같은 EUV로 더 미세한 회로를 한 번에 그릴 수 있다.\n\n기존 EUV로는 N2 이하에서 멀티패터닝이 필요해 비용이 폭증했다.\n\nHigh-NA가 그걸 해결한다.\n\n대당 가격 약 3.5억 달러 (기존 EUV의 약 2배).\n\n인텔 18A 양산에 첫 도입 (25년), 삼성 SF2P, TSMC A14에 26-27년 도입.",
        bodyEn:
          "### ASML Q1 2026 results\n\nRevenue of €8.8B, up 13% YoY.\n\nOf that, EUV revenue €4.1B (65% of system revenue).\n\nFirst quarter of High-NA EUV revenue recognition, with 2 units booked.\n\nEPS €7.15.\n\n2026 guidance raised to €36-40B.\n\n### EUV shipment trajectory\n\n53 units in 2023, around 44 in 2024, around 50 in 2025 plus roughly 5 High-NA cumulative across Intel, Samsung, and TSMC, 60+ guided for 2026, and 80+ guided for 2027.\n\n### High-NA EUV, the next generation\n\nNumerical Aperture (NA) lifts from 0.33 on prior EUV to 0.55.\n\nThe same EUV step can now draw finer circuitry in a single exposure.\n\nWith prior EUV, sub-N2 nodes required multi-patterning and costs exploded.\n\nHigh-NA resolves that.\n\nPrice per unit is around $350M, roughly 2× the prior EUV.\n\nFirst deployment was Intel 18A production in 2025, with Samsung SF2P and TSMC A14 following in 2026-2027.",
      },
      {
        type: "text",
        body:
          "### EUV 공급 체인, 한국 노출\n\nEUV scanner는 ASML 100%.\n\nEUV 광원은 Cymer (ASML 자회사).\n\nEUV mask 검사 (actinic)는 Lasertec 100% (일본).\n\nEUV mirror (반사경)는 Carl Zeiss SMT (독일, ASML 자회사).\n\nEUV PR (감광액)은 JSR, TOK, 신에쓰 (일본 약 75%) + 동진쎄미켐 (국산화, SK하이닉스 협력).\n\nEUV pellicle은 미쓰이화학 (일본) 압도 + 일부 한국 진입.\n\n고압 어닐링 (Logic 수율)은 HPSP 95%+ 사실상 독점.\n\n특수가스 (NF3, C4F8, HCDS)는 일본 + 한국 (원익머트리얼즈, 후성, 디엔에프).\n\nEUV 본체는 완전히 한국 밖이다.\n\nASML (네덜란드), Cymer (미국), Carl Zeiss (독일), Lasertec, JSR, TOK, 신에쓰 (일본).\n\n한국 노출은 EUV PR (동진쎄미켐)과 고압 어닐링 (HPSP)에 집중된다.\n\n### HPSP, EUV 다음 단계의 한국 알파\n\nEUV로 회로를 그린 후 결함이 생긴다.\n\n수십 나노미터 회로에서 미세 결함은 수율을 떨어뜨린다.\n\n이 결함을 고압 수소 어닐링으로 메우는 기술을 HPSP가 사실상 글로벌 독점하고 있다.\n\nTSMC, 삼성 파운드리, 인텔 IFS, SK하이닉스 모두 HPSP 장비를 도입.\n\n영업이익률 약 50%대.\n\n글로벌 logic capex가 늘어날수록 HPSP 매출이 늘어난다.\n\n이게 HPSP가 글로벌 logic capex의 단일 지표 역할을 하는 이유다.\n\n### 동진쎄미켐, EUV PR 국산화\n\nEUV PR (감광액)은 일본 JSR, TOK, 신에쓰가 약 75% 점유.\n\n동진쎄미켐이 KrF, ArF에서 국산화에 성공한 후, EUV PR도 SK하이닉스와 공동 개발로 추격 중.\n\n24-25년 SK하이닉스 EUV PR 일부 공급 시작.\n\n장기적으로 JSR, TOK 점유율을 잠식할 가능성.",
        bodyEn:
          "### EUV supply chain, Korea's exposure\n\nThe EUV scanner is 100% ASML.\n\nThe EUV light source is Cymer (an ASML subsidiary).\n\nEUV mask actinic inspection is 100% Lasertec (Japan).\n\nEUV mirrors are Carl Zeiss SMT (Germany, an ASML subsidiary).\n\nEUV PR (photoresist) is JSR, TOK, and Shin-Etsu (Japan, ~75% combined), with Dongjin Semichem chasing localization in partnership with SK Hynix.\n\nEUV pellicles are dominated by Mitsui Chemicals (Japan), with some Korean entry.\n\nHigh-pressure annealing (logic yield) is HPSP at 95%+, effectively a monopoly.\n\nSpecialty gases (NF3, C4F8, HCDS) come from Japan plus Korean players (Wonik Materials, Hooseong, DNF).\n\nThe EUV body itself sits entirely outside Korea.\n\nASML (Netherlands), Cymer (US), Carl Zeiss (Germany), and Lasertec/JSR/TOK/Shin-Etsu (Japan).\n\nKorea's exposure concentrates in EUV PR (Dongjin Semichem) and high-pressure annealing (HPSP).\n\n### HPSP, Korea's alpha in the step after EUV\n\nAfter EUV draws the circuitry, defects appear.\n\nAt tens-of-nanometers circuitry, micro-defects directly degrade yield.\n\nHPSP holds an effective global monopoly on the high-pressure hydrogen anneal that heals those defects.\n\nTSMC, Samsung Foundry, Intel IFS, and SK Hynix have all adopted HPSP equipment.\n\nOperating margin sits around 50%.\n\nThe more global logic capex grows, the more HPSP revenue grows.\n\nThat is why HPSP serves as a single-stock indicator for global logic capex.\n\n### Dongjin Semichem, localizing EUV PR\n\nEUV PR (photoresist) is around 75% Japanese — JSR, TOK, and Shin-Etsu.\n\nDongjin Semichem succeeded at KrF and ArF localization first, and is now chasing EUV PR through co-development with SK Hynix.\n\nPartial supply to SK Hynix's EUV lines began in 2024-2025.\n\nOver the long run, this could erode the JSR/TOK share.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "EUV는 한국이 직접 잡은 것이 없다, 그러나",
          headingEn: "Korea Doesn't Own EUV — But Owns What Comes Next",
          body:
            "EUV는 한국이 직접 잡은 것은 거의 없다.\n\n그러나 EUV 다음 단계(HPSP 고압 어닐링, 동진쎄미켐 EUV PR, 원익머트리얼즈 NF3)에서 한국이 알파를 만들고 있다.\n\nEUV 시장이 커질수록 그 주변 한국 회사가 같이 큰다.",
          bodyEn:
            "Korea owns almost nothing in EUV itself.\n\nBut in the steps that come after EUV — HPSP's high-pressure annealing, Dongjin Semichem's EUV PR, and Wonik Materials' NF3 — Korea is building real alpha.\n\nThe larger the EUV market gets, the larger these adjacent Korean suppliers grow with it.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 11. 일본·미국·유럽 소부장
  // ════════════════════════════════════════════════════════════════
  {
    heading: "11. 일본, 미국, 유럽 소부장, 글로벌 강자들",
    headingEn: "11. Japan, US, Europe Suppliers — The Global Strongholds",
    blocks: [
      {
        type: "text",
        body:
          "반도체 소부장의 진짜 글로벌 강자는 일본과 미국에 있다.\n\n신에쓰가 실리콘 웨이퍼 1위, JSR이 PR (감광액), TEL과 Disco가 장비, AMAT, LAM, KLA가 미국 3강.\n\n한국 소부장은 그 옆에 일부 영역에서 박혀 있다.",
        bodyEn:
          "The real global strongholds in semiconductor materials and equipment sit in Japan and the US.\n\nShin-Etsu leads silicon wafers, JSR leads PR (photoresist), TEL and Disco lead in Japanese equipment, and AMAT, LAM, and KLA form the US big three.\n\nKorean suppliers are embedded alongside them, but only in narrower domains.",
      },
      {
        type: "text",
        body:
          "### 일본 소재, 신에쓰, SUMCO, JSR, TOK, 미쓰비시\n\n신에쓰화학 (Shin-Etsu Chemical), 실리콘 웨이퍼 1위: 글로벌 실리콘 웨이퍼 점유율 약 31%, 글로벌 1위. 26년 1분기 매출 약 6,200억 엔, 반도체 부문 약 2,200억 엔. EUV PR, photomask blank, 실리콘 epoxy 등 다영역 강자. 영업이익률 약 30%대.\n\nSUMCO, 실리콘 웨이퍼 2위: 글로벌 약 22%. 26년 1분기 매출 약 850억 엔. 300mm wafer 캐파 확장 중.\n\nJSR, EUV PR 글로벌 1위: EUV PR 글로벌 약 35% (추정). 24년 일본 산업혁신투자기구가 완전 인수 (약 9,000억 엔). 반도체 소재의 지정학적 자산화 신호.\n\nTOK (Tokyo Ohka Kogyo), EUV PR 2위: 약 25% (추정). JSR, TOK, 신에쓰 셋이 글로벌 EUV PR 약 75%.\n\n미쓰비시화학, 쇼와덴코, 특수 가스 및 소재: NF3, CF4, C4F8 같은 식각 가스의 핵심 공급자. 한국 후성, 원익머트리얼즈와 직접 경쟁.",
        bodyEn:
          "### Japanese materials — Shin-Etsu, SUMCO, JSR, TOK, Mitsubishi\n\nShin-Etsu Chemical — silicon wafer #1: roughly 31% global silicon wafer share, the global leader. Q1 2026 revenue around ¥620B, with the semiconductor segment around ¥220B. Strong across multiple domains including EUV PR, photomask blanks, and silicon epoxy. Operating margin around 30%.\n\nSUMCO — silicon wafer #2: around 22% globally. Q1 2026 revenue roughly ¥85B. Expanding 300mm wafer capacity.\n\nJSR — global EUV PR #1: roughly 35% of global EUV PR (est.). Fully acquired by Japan's JIC (Japan Investment Corp) in 2024 for around ¥900B — a clear signal that semiconductor materials have become geopolitical assets.\n\nTokyo Ohka Kogyo (TOK) — EUV PR #2: around 25% (est.). Together, JSR, TOK, and Shin-Etsu hold approximately 75% of global EUV PR.\n\nMitsubishi Chemical and Showa Denko — specialty gases and materials: the core suppliers of etch gases such as NF3, CF4, and C4F8. Direct competitors to Korea's Hooseong and Wonik Materials.",
      },
      {
        type: "text",
        body:
          "### 일본 장비, TEL, Disco, Screen, Lasertec\n\nTEL (Tokyo Electron): 일본 1위, 글로벌 3위. ALD, 식각, 세정, CVD 등 다영역 강자. 26년 1분기 매출 약 6,500억 엔. AMAT, LAM 다음. 한국 매출 비중 약 25% (SK하이닉스, 삼성).\n\nDisco: 웨이퍼 다이싱과 그라인딩 글로벌 약 80%. HBM 적층 전 TSV 그라인딩이 Disco 압도. 26년 1분기 매출 약 800억 엔, 영업이익률 약 35%.\n\nScreen Holdings: 웨이퍼 세정 (wet) 장비 글로벌 약 50%.\n\nLasertec, EUV mask actinic 검사 100% 독점: EUV mask가 결함이 있는지 극자외선으로 검사하는 장비. ASML EUV가 늘수록 Lasertec 매출 증가. 영업이익률 약 35%.\n\n### 미국, 유럽 장비, AMAT, LAM, KLA, ASML\n\nAMAT (Applied Materials): 글로벌 장비 1위. CVD, PVD, 식각, CMP, implant. 26년 1분기 매출 약 70억 달러, 영업이익률 약 30%.\n\nLAM Research: 식각, 증착 강자. 26년 1분기 매출 약 45억 달러. 중국 AMEC와 직접 경쟁.\n\nKLA Corporation: 검사 및 메트롤로지 약 50%. 영업이익률 약 35%.\n\nASML: §10에서 다룸.",
        bodyEn:
          "### Japanese equipment — TEL, Disco, Screen, Lasertec\n\nTokyo Electron (TEL): Japan's #1 and global #3. Strong across multiple domains including ALD, etch, clean, and CVD. Q1 2026 revenue around ¥650B. Sits behind AMAT and LAM. Korean revenue exposure is around 25% (SK Hynix and Samsung).\n\nDisco: roughly 80% global share in wafer dicing and grinding. Disco dominates the TSV grinding step before HBM stacking. Q1 2026 revenue around ¥80B, operating margin around 35%.\n\nScreen Holdings: roughly 50% global share in wet cleaning equipment.\n\nLasertec — 100% monopoly on EUV mask actinic inspection: the tool that inspects EUV masks for defects using extreme ultraviolet light. Every additional ASML EUV scanner lifts Lasertec revenue. Operating margin around 35%.\n\n### US and European equipment — AMAT, LAM, KLA, ASML\n\nApplied Materials (AMAT): global equipment #1. Covers CVD, PVD, etch, CMP, and implant. Q1 2026 revenue around $7B, operating margin around 30%.\n\nLAM Research: leader in etch and deposition. Q1 2026 revenue around $4.5B. Competes head-on with China's AMEC.\n\nKLA Corporation: roughly 50% in inspection and metrology. Operating margin around 35%.\n\nASML: covered in §10.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "글로벌 소부장의 구조적 특성",
          headingEn: "Structural Traits of Global Suppliers",
          body:
            "일본, 미국, 유럽 강자들의 공통점은 세 가지다.\n\n첫째, 수십 년 학습 곡선을 가진 영역에서 압도한다. 웨이퍼, PR, EUV, 식각 검사 같은 영역은 기술이 한 세대 늦으면 회복이 거의 불가능하다.\n\n둘째, 고객 (파운드리, 메모리 회사)이 옮기지 않는다. 같은 PR을 같은 파운드리에서 쓰는 한 검증된 공급자를 바꾸는 비용이 너무 크다.\n\n셋째, 영업이익률 25-35%에서 안정적이다. 엔비디아 (65%), SK하이닉스 (72%)처럼 사이클 최정점은 없지만, 사이클 바닥에서도 흑자를 유지한다.\n\n이게 한국 소부장이 학습해야 할 구조다.",
          bodyEn:
            "The Japanese, US, and European strongholds share three traits.\n\nFirst, they dominate domains with decades-long learning curves. In wafers, PR, EUV, and etch inspection, falling one generation behind is almost impossible to recover from.\n\nSecond, customers (foundries and memory makers) do not switch. Once a given PR is qualified at a given fab, the cost of changing a proven supplier is too high.\n\nThird, operating margins sit stably in the 25-35% range. There is no NVIDIA-like 65% or SK Hynix-like 72% peak, but they stay profitable even at cycle bottoms.\n\nThis is the structure Korean suppliers need to learn.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 12. 한국 소부장 30+사 매핑
  // ════════════════════════════════════════════════════════════════
  {
    heading: "12. 한국 소부장 30+사 매핑, 4 카테고리",
    headingEn: "12. Mapping Korea's 30+ Suppliers — Four Categories",
    blocks: [
      {
        type: "text",
        body:
          "한국 소부장은 글로벌 톱 강자는 아니지만, 특정 영역에서 글로벌 점유율 1위인 회사들이 있다.\n\n한미반도체 TC Bonder 70%, HPSP 고압 어닐링 95%+.\n\n그 외 30+사가 SK하이닉스, 삼성, TSMC, 엔비디아 공급망 어딘가에 박혀 있다.",
        bodyEn:
          "Korean suppliers are not the top-tier global strongholds, but several are #1 globally in specific domains.\n\nHami Semiconductor holds around 70% in TC Bonder, and HPSP holds 95%+ in high-pressure annealing.\n\nBeyond those, more than 30 companies sit somewhere along the SK Hynix, Samsung, TSMC, and NVIDIA supply chains.",
      },
      {
        type: "chart",
        chart: {
          id: "korea-sobujang-30",
          title: "한국 소부장 매출 (2025-2026 Q1)",
          titleEn: "Korean Suppliers Revenue (2025-2026 Q1)",
          data: [],
          caption: "Tier 1: 한미반도체·HPSP. Tier 2: 솔브레인·동진쎄미켐·원익머트리얼즈·심텍·인텍플러스·테크윙·디엔에프. Tier 3: SK실트론·하나머티리얼즈·티씨케이·원익큐엔씨 등. Tier 4: DI동일·DMS·러셀·LB세미콘.",
          captionEn: "Tier 1: Hami, HPSP. Tier 2: Soulbrain, Dongjin, Wonik Materials, Simmtech, Intekplus, Techwing, DNF. Tier 3: SK Siltron, Hana Materials, TCK, Wonik QnC, etc. Tier 4: DI Dongil, DMS, Russell, LB Semicon.",
        },
      },
      {
        type: "table",
        table: {
          id: "korea-sobujang-materials",
          title: "12.1 소재 (10+사)",
          titleEn: "12.1 Materials (10+ Companies)",
          headers: ["회사", "핵심 제품", "2025/26 Q1 매출", "주요 고객", "AI/HBM 노출"],
          headersEn: ["Company", "Core Product", "2025/26 Q1 Revenue", "Key Customers", "AI/HBM Exposure"],
          rows: [
            ["솔브레인", "인산·식각액·HF", "2026 Q1 2,517억 (+18.9%)", "SK하이닉스, TSMC, 삼성", "직접 강함"],
            ["동진쎄미켐", "KrF·ArF·EUV PR", "2025 약 1.4조", "SK하이닉스, 삼성", "EUV 국산화 추격"],
            ["SK실트론", "실리콘 웨이퍼", "2025 약 2.5조", "SK하이닉스, 삼성 (SK그룹)", "메모리 사이클"],
            ["하나머티리얼즈", "SiC 부품 (식각 챔버)", "2025 약 4,500억", "LAM·AMAT·TEL", "logic capex 베타"],
            ["원익머트리얼즈", "NF3·WF6·HCDS 가스", "2025 약 5,800억", "SK하이닉스, 삼성, TSMC", "직접 강함"],
            ["SK엔펄스", "CMP 패드·슬러리", "2025 약 7,500억", "SK하이닉스, 삼성, TSMC", "간접"],
            ["이엔에프테크놀로지", "식각액·세정액", "2025 약 4,300억", "SK하이닉스, 삼성", "메모리 사이클"],
            ["후성", "불소 가스", "2025 약 3,800억", "SK하이닉스, 삼성", "직접"],
            ["디엔에프", "HCDS, ZrO2 전구체", "2025 약 1,200억", "SK하이닉스, 삼성", "HBM 노출"],
            ["원익큐엔씨", "쿼츠 부품", "2025 9,436억 / 2026 Q1 2,562억", "삼성·SK·TSMC·Intel·Micron", "글로벌 logic 베타"],
            ["LB세미콘", "DDI (디스플레이)", "2026 Q1 1,343억 흑전", "LG디스플레이 등", "AI 노출 낮음"],
          ],
          rowsEn: [
            ["Soulbrain", "Phosphoric/etch acids, HF", "Q1 2026 ₩251.7B (+18.9%)", "SK Hynix, TSMC, Samsung", "Strong direct"],
            ["Dongjin Semichem", "KrF/ArF/EUV PR", "2025 ~₩1.4T", "SK Hynix, Samsung", "EUV localization chase"],
            ["SK Siltron", "Silicon wafers", "2025 ~₩2.5T", "SK Hynix, Samsung (SK group)", "Memory cycle"],
            ["Hana Materials", "SiC parts (etch chambers)", "2025 ~₩450B", "LAM/AMAT/TEL", "Logic capex beta"],
            ["Wonik Materials", "NF3/WF6/HCDS gases", "2025 ~₩580B", "SK Hynix, Samsung, TSMC", "Strong direct"],
            ["SK Enpulse", "CMP pads/slurry", "2025 ~₩750B", "SK Hynix, Samsung, TSMC", "Indirect"],
            ["ENF Technology", "Etch/cleaning chemicals", "2025 ~₩430B", "SK Hynix, Samsung", "Memory cycle"],
            ["Hooseong", "Fluorine gases", "2025 ~₩380B", "SK Hynix, Samsung", "Direct"],
            ["DNF", "HCDS, ZrO2 precursors", "2025 ~₩120B", "SK Hynix, Samsung", "HBM exposure"],
            ["Wonik QnC", "Quartz components", "2025 ₩943.6B / Q1 2026 ₩256.2B", "Samsung/SK/TSMC/Intel/Micron", "Global logic beta"],
            ["LB Semicon", "DDI (display)", "Q1 2026 ₩134.3B (return to profit)", "LG Display, etc.", "Low AI exposure"],
          ],
          caption: "소재 10+사. 솔브레인·원익머트리얼즈·디엔에프가 HBM 직접 노출.",
          captionEn: "10+ materials companies. Soulbrain, Wonik Materials, DNF have direct HBM exposure.",
          highlightRows: [0, 4, 8],
        },
      },
      {
        type: "table",
        table: {
          id: "korea-sobujang-components",
          title: "12.2 부품 (6+사)",
          titleEn: "12.2 Components (6+ Companies)",
          headers: ["회사", "핵심 제품", "2025/26 Q1 매출", "주요 고객", "AI/HBM 노출"],
          headersEn: ["Company", "Core Product", "2025/26 Q1 Revenue", "Key Customers", "AI/HBM Exposure"],
          rows: [
            ["한미반도체", "TC Bonder (HBM 적층)", "2026 Q1 509억 (-65.5%)", "SK하이닉스 메인", "HBM 직접 (세대 전환 공백)"],
            ["HPSP", "고압 어닐링 (Logic)", "2026E 2,341억", "TSMC, 삼성, 인텔, SK하이닉스", "글로벌 logic capex 단일 지표"],
            ["티씨케이", "SiC 부품", "2025 약 2,400억", "LAM·AMAT·TEL", "logic capex 베타"],
            ["이오테크닉스", "레이저 마킹·dicing", "2025 약 3,600억", "SK하이닉스, 삼성", "간접"],
            ["인텍플러스", "HBM 검사", "2025 약 1,200억", "SK하이닉스", "HBM 직접"],
            ["고영테크놀로지", "3D 검사 (SMT)", "2025 약 2,800억", "후공정 다수", "간접"],
          ],
          rowsEn: [
            ["Hami Semiconductor", "TC Bonder (HBM stacking)", "Q1 2026 ₩50.9B (-65.5%)", "SK Hynix primarily", "HBM direct (generation transition gap)"],
            ["HPSP", "High-pressure annealing (logic)", "2026E ₩234.1B", "TSMC, Samsung, Intel, SK Hynix", "Global logic capex single indicator"],
            ["TCK", "SiC parts", "2025 ~₩240B", "LAM/AMAT/TEL", "Logic capex beta"],
            ["EO Technics", "Laser marking/dicing", "2025 ~₩360B", "SK Hynix, Samsung", "Indirect"],
            ["Intekplus", "HBM inspection", "2025 ~₩120B", "SK Hynix", "HBM direct"],
            ["Koh Young", "3D inspection (SMT)", "2025 ~₩280B", "Various back-end", "Indirect"],
          ],
          caption: "부품 6+사. 한미반도체·HPSP가 Tier 1 알파.",
          captionEn: "6+ component companies. Hami and HPSP are Tier 1 alpha.",
          highlightRows: [0, 1],
        },
      },
      {
        type: "table",
        table: {
          id: "korea-sobujang-equipment",
          title: "12.3 장비 (8+사)",
          titleEn: "12.3 Equipment (8+ Companies)",
          headers: ["회사", "핵심 제품", "2025/26 Q1 매출", "주요 고객", "AI/HBM 노출"],
          headersEn: ["Company", "Core Product", "2025/26 Q1 Revenue", "Key Customers", "AI/HBM Exposure"],
          rows: [
            ["원익IPS", "CVD·식각·증착", "2025 약 1조", "삼성 (약 70%)", "logic·메모리"],
            ["세메스", "EFEM·세정·계측", "(삼성 자회사)", "삼성 100%", "메모리"],
            ["주성엔지니어링", "ALD·CVD·식각", "2025 약 4,200억", "SK하이닉스", "메모리·logic"],
            ["테스", "CVD·식각 챔버", "2025 약 2,500억", "삼성, SK", "메모리"],
            ["예스티", "테스트 챔버", "2025 약 1,800억", "한미반도체 등", "HBM 간접"],
            ["피에스케이", "Ashing 장비", "2025 약 2,300억", "삼성, SK", "logic·메모리"],
            ["DMS", "베르노이 박막", "2025 4Q 매출 577억", "디스플레이 + 일부 반도체", "약함"],
            ["러셀", "노광 보조", "2024 4Q 163억", "삼성, SK", "약함"],
          ],
          rowsEn: [
            ["Wonik IPS", "CVD/etch/deposition", "2025 ~₩1T", "Samsung (~70%)", "Logic and memory"],
            ["SEMES", "EFEM/clean/metrology", "(Samsung subsidiary)", "Samsung 100%", "Memory"],
            ["Jusung Engineering", "ALD/CVD/etch", "2025 ~₩420B", "SK Hynix", "Memory and logic"],
            ["TES", "CVD/etch chambers", "2025 ~₩250B", "Samsung, SK", "Memory"],
            ["YEST", "Test chambers", "2025 ~₩180B", "Hami Semi, etc.", "HBM indirect"],
            ["PSK", "Ashing equipment", "2025 ~₩230B", "Samsung, SK", "Logic and memory"],
            ["DMS", "Vernoyi thin-film", "Q4 2025 ₩57.7B", "Display + some semi", "Weak"],
            ["Russell", "Lithography support", "Q4 2024 ₩16.3B", "Samsung, SK", "Weak"],
          ],
          caption: "장비 8+사. 원익IPS·주성엔지니어링이 메인.",
          captionEn: "8+ equipment companies. Wonik IPS and Jusung Engineering are the mainstays.",
          highlightRows: [0, 2],
        },
      },
      {
        type: "table",
        table: {
          id: "korea-sobujang-osat",
          title: "12.4 후공정 OSAT (5+사)",
          titleEn: "12.4 Back-End OSAT (5+ Companies)",
          headers: ["회사", "핵심 제품", "2025/26 Q1 매출", "주요 고객", "AI/HBM 노출"],
          headersEn: ["Company", "Core Product", "2025/26 Q1 Revenue", "Key Customers", "AI/HBM Exposure"],
          rows: [
            ["하나마이크론", "메모리 packaging", "2025 약 1조", "삼성", "메모리"],
            ["테크윙", "메모리 테스트 핸들러", "2025 약 2,800억", "마이크론, SK, 삼성", "HBM 직접"],
            ["SFA반도체", "후공정 OSAT", "2025 약 4,500억", "삼성", "메모리"],
            ["심텍", "HBM substrate (PCB)", "2025 약 1.3조", "SK하이닉스", "HBM 직접"],
            ["DI동일", "후공정 IT (플라즈마텍)", "2025E 6,089억", "삼성 평택 매연저감", "매우 약함"],
          ],
          rowsEn: [
            ["Hana Micron", "Memory packaging", "2025 ~₩1T", "Samsung", "Memory"],
            ["Techwing", "Memory test handlers", "2025 ~₩280B", "Micron, SK, Samsung", "HBM direct"],
            ["SFA Semicon", "Back-end OSAT", "2025 ~₩450B", "Samsung", "Memory"],
            ["Simmtech", "HBM substrate (PCB)", "2025 ~₩1.3T", "SK Hynix", "HBM direct"],
            ["DI Dongil", "Back-end IT (Plasmatec)", "2025E ₩608.9B", "Samsung Pyeongtaek scrubbers", "Very weak"],
          ],
          caption: "OSAT 5+사. 테크윙·심텍이 HBM 직접 노출.",
          captionEn: "5+ OSAT companies. Techwing and Simmtech have direct HBM exposure.",
          highlightRows: [1, 3],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "한국 소부장의 진짜 알파, Tier 1-2 9개",
          headingEn: "Korea's Real Alpha — 9 Companies Across Tier 1-2",
          body:
            "30+사 중에서 AI/HBM 사이클을 직접 받는 회사는 9개로 압축된다.\n\nTier 1 (직접 베타, 글로벌 강자): 한미반도체 (TC Bonder 70%), HPSP (고압 어닐링 95%+).\n\nTier 2 (직접 베타, 한국 강자): 솔브레인 (HBM, CoWoS 식각액), 동진쎄미켐 (EUV PR 추격), 원익머트리얼즈 (NF3, HCDS), 심텍 (HBM substrate), 인텍플러스 (HBM 검사), 테크윙 (HBM 테스트 핸들러), 디엔에프 (HBM 전구체).\n\nTier 3 (간접 베타): SK실트론, SK엔펄스, 하나머티리얼즈, 티씨케이, 원익큐엔씨, 원익IPS, 주성엔지니어링.\n\nTier 4 (AI 노출 약함): DI동일, DMS, 러셀, LB세미콘.\n\n투자자가 진짜 봐야 할 회사는 Tier 1-2 9개다.",
          bodyEn:
            "Out of more than 30 companies, the names that receive direct AI/HBM cycle exposure narrow down to nine.\n\nTier 1 (direct beta, global leaders): Hami Semiconductor (TC Bonder ~70%) and HPSP (high-pressure annealing 95%+).\n\nTier 2 (direct beta, Korean leaders): Soulbrain (HBM and CoWoS etch chemicals), Dongjin Semichem (EUV PR chase), Wonik Materials (NF3, HCDS), Simmtech (HBM substrate), Intekplus (HBM inspection), Techwing (HBM test handlers), and DNF (HBM precursors).\n\nTier 3 (indirect beta): SK Siltron, SK Enpulse, Hana Materials, TCK, Wonik QnC, Wonik IPS, and Jusung Engineering.\n\nTier 4 (weak AI exposure): DI Dongil, DMS, Russell, and LB Semicon.\n\nThe companies investors actually need to watch are the nine in Tier 1-2.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 13. 한국 3대 알파 비교
  // ════════════════════════════════════════════════════════════════
  {
    heading: "13. 한국 3대 알파, 한미반도체·솔브레인·HPSP 비교",
    headingEn: "13. Korea's Three Alpha Plays — Hami, Soulbrain, HPSP",
    blocks: [
      {
        type: "text",
        body:
          "한국 소부장 30+사 중에서 글로벌 점유율 1위 또는 사실상 독점을 가진 회사가 셋 있다.\n\n한미반도체 (TC Bonder), 솔브레인 (인산 식각), HPSP (고압 어닐링).\n\n한국 안에서도 셋은 완전히 다른 사이클에 박혀 있다.",
        bodyEn:
          "Among Korea's 30+ suppliers, three companies hold either global #1 share or an effective monopoly.\n\nHami Semiconductor (TC Bonder), Soulbrain (phosphoric etch), and HPSP (high-pressure annealing).\n\nAll three are Korean, but each is embedded in a completely different cycle.",
      },
      {
        type: "table",
        table: {
          id: "korea-3-alpha-comparison",
          title: "3사 한 페이지 비교",
          titleEn: "Three Korean Alpha Companies at a Glance",
          headers: ["차원", "한미반도체", "솔브레인", "HPSP"],
          headersEn: ["Dimension", "Hami Semiconductor", "Soulbrain", "HPSP"],
          rows: [
            ["핵심 제품", "TC Bonder (HBM 적층 장비)", "인산·식각액·HF", "고압 수소 어닐링 장비"],
            ["글로벌 위치", "약 70% (TC Bonder 단독)", "한국 강자 (글로벌 톱 그룹)", "95%+ 사실상 독점"],
            ["주요 고객", "SK하이닉스 메인", "SK하이닉스, TSMC, 삼성", "TSMC, 삼성, 인텔, SK하이닉스"],
            ["AI 노출 경로", "HBM 셀 수요 → TC Bonder 발주", "HBM·CoWoS·EUV 모두", "글로벌 logic capex 직접"],
            ["2025 매출", "5,478억 (HBM 정점)", "약 1조", "약 1,930억"],
            ["2026 Q1 매출", "509억 (-65.5%)", "2,517억 (+18.9%)", "(분기 미공시, 2026E 2,341억)"],
            ["영업이익률 (정점)", "약 30%+", "약 22%", "약 50%"],
            ["사이클 특성", "HBM 세대 전환 공백에 민감", "HBM·CoWoS·EUV 동시 노출로 평활", "logic capex와 정확 동조"],
            ["시총 (2026.5)", "약 9-10조원", "약 5-6조원", "약 4-5조원"],
            ["주요 약점", "SK하이닉스 단독 의존, 세대 전환 공백", "외국계 경쟁 (CMC·Merck·Cabot)", "시장 규모 자체가 작음"],
            ["주요 강점", "TC Bonder 글로벌 70%", "다영역 노출 (HBM·CoWoS·EUV·로직)", "95%+ 독점 + logic capex 베타"],
          ],
          rowsEn: [
            ["Core product", "TC Bonder (HBM stacking)", "Phosphoric/etch/HF", "High-pressure H2 annealing"],
            ["Global position", "~70% (TC Bonder)", "Korean leader (global top group)", "95%+ near-monopoly"],
            ["Key customers", "SK Hynix primary", "SK Hynix, TSMC, Samsung", "TSMC, Samsung, Intel, SK Hynix"],
            ["AI exposure path", "HBM cell demand → TC Bonder orders", "HBM/CoWoS/EUV all", "Global logic capex direct"],
            ["2025 revenue", "₩547.8B (HBM peak)", "~₩1T", "~₩193B"],
            ["Q1 2026 revenue", "₩50.9B (-65.5%)", "₩251.7B (+18.9%)", "(no quarterly, 2026E ₩234.1B)"],
            ["Peak OPM", "~30%+", "~22%", "~50%"],
            ["Cycle character", "Sensitive to HBM generation gaps", "Smoothed via multi-domain exposure", "Tracks logic capex precisely"],
            ["Market cap (May 2026)", "~₩9-10T", "~₩5-6T", "~₩4-5T"],
            ["Key weakness", "SK Hynix concentration, generation gaps", "Foreign competition (CMC/Merck/Cabot)", "TAM itself is small"],
            ["Key strength", "TC Bonder ~70% global", "Multi-domain (HBM/CoWoS/EUV/logic)", "95%+ monopoly + logic capex beta"],
          ],
          caption: "출처: 각 사 IR 2025 + 2026 Q1 잠정공시 + 증권사 리포트 종합. 영업이익률·시총 행 강조.",
          captionEn: "Source: each company IR 2025 + Q1 2026 preliminaries + sell-side reports. OPM and market cap rows highlighted.",
          highlightRows: [6, 7],
        },
      },
      {
        type: "text",
        body:
          "### 셋의 차이를 한 줄로\n\n한미반도체 = HBM 세대 사이클의 정점-바닥 진동.\n\nHBM 세대 (HBM3 → HBM3E → HBM4)가 바뀌는 공백기에 발주가 일시 멈춘다.\n\n26년 1분기 매출 YoY -65.5%가 그 증거.\n\nHBM4 본양산과 함께 26년 2-3분기 회복 강하게 예상.\n\n솔브레인 = HBM, CoWoS, EUV 모두에 박혀 있는 평활 베타.\n\n한 영역이 흔들려도 다른 영역이 받쳐준다.\n\n26년 1분기 매출 YoY +18.9%가 그 증거.\n\n폭발 모멘텀은 한미반도체, HPSP보다 약하다.\n\nHPSP = 글로벌 logic capex의 단일 지표.\n\nTSMC, 삼성, 인텔, SK하이닉스 logic fab이 늘면 HPSP 매출도 정확 동조.\n\n영업이익률 약 50%로 한국 소부장 최고.\n\n시장 규모 자체가 작다는 게 유일한 약점.\n\n### 세 회사를 같이 봐야 하는 이유\n\n한국 안에서도 셋은 완전히 다른 사이클에 박혀 있다.\n\n한미반도체가 부진할 때 솔브레인이 성장하고, HPSP가 글로벌 logic 사이클을 받는다.\n\n주가 동조도가 낮다는 것이 분산 효과를 만든다.\n\n한국 반도체 소부장 포트폴리오 구성 관점에서 셋을 같이 보는 게 의미 있다.",
        bodyEn:
          "### The three differences in one line each\n\nHami Semiconductor = peak-to-trough oscillation of the HBM generation cycle.\n\nDuring transitions between HBM generations (HBM3 → HBM3E → HBM4), orders briefly stop.\n\nQ1 2026's -65.5% is the evidence.\n\nWith HBM4 full ramp, a strong recovery is expected in Q2-Q3 2026.\n\nSoulbrain = a smoothed beta embedded across HBM, CoWoS, and EUV simultaneously.\n\nWhen one domain wobbles, another holds the line.\n\nQ1 2026's +18.9% is the evidence.\n\nThe explosive momentum is weaker than Hami or HPSP, however.\n\nHPSP = a single-stock indicator for global logic capex.\n\nWhen TSMC, Samsung, Intel, or SK Hynix expand logic fabs, HPSP revenue moves in lockstep.\n\nOperating margin around 50%, the highest among Korean suppliers.\n\nThe only weakness is that the TAM itself is small.\n\n### Why these three need to be watched together\n\nThey are all Korean, but each is embedded in a completely different cycle.\n\nWhen Hami stumbles, Soulbrain grows, and HPSP rides the global logic cycle.\n\nLow share-price correlation creates real diversification.\n\nFrom a Korean semiconductor supplier portfolio perspective, watching all three together is meaningful.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "한국 소부장 분산의 핵심",
          headingEn: "The Core of Korean Supplier Diversification",
          body:
            "Tier 1 두 회사(한미반도체·HPSP) + Tier 2 한 회사(솔브레인) 셋을 같이 봐야 분산이 된다.\n\n한미반도체 = HBM 사이클의 정점-바닥 진동.\n\n솔브레인 = 다영역 평활 베타.\n\nHPSP = logic capex 단일 지표.\n\n셋의 사이클이 다르다는 점이 진짜 가치다.",
          bodyEn:
            "Two Tier-1 names (Hami Semiconductor and HPSP) paired with one Tier-2 name (Soulbrain) are what produces real diversification.\n\nHami Semiconductor = the HBM cycle's peak-to-trough oscillator.\n\nSoulbrain = the multi-domain smoothed beta.\n\nHPSP = the single logic-capex indicator.\n\nThe fact that the three cycles differ is the actual value.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 14. Case Study — TSMC가 NVIDIA의 capacity를 결정한다
  // ════════════════════════════════════════════════════════════════
  {
    heading: "14. Case Study, TSMC가 NVIDIA의 capacity를 결정한다",
    headingEn: "14. Case Study — How TSMC Decides NVIDIA's Capacity",
    blocks: [
      {
        type: "text",
        body:
          "엔비디아 Blackwell 지연은 엔비디아의 설계 문제가 표면적 이유였다.\n\n실제로는 TSMC CoWoS 캐파 부족이 더 큰 변수였다.\n\nTSMC가 엔비디아, AMD, 브로드컴, 마벨, 애플 사이에서 우선순위를 결정하는 위치에 있다.",
        bodyEn:
          "The NVIDIA Blackwell delay was publicly attributed to NVIDIA's design issues.\n\nIn reality, TSMC CoWoS capacity shortage was the larger variable.\n\nTSMC sits in the position of deciding priority among NVIDIA, AMD, Broadcom, Marvell, and Apple.",
      },
      {
        type: "table",
        table: {
          id: "blackwell-delay-timeline",
          title: "24-25년 엔비디아 Blackwell 지연 타임라인",
          titleEn: "NVIDIA Blackwell Delay Timeline (2024-2025)",
          headers: ["시점", "사건"],
          headersEn: ["Date", "Event"],
          rows: [
            ["24.4", "엔비디아 Blackwell 발표 (GTC 2024)"],
            ["24.8", "The Information 보도, Blackwell 지연 첫 신호"],
            ["24.10", "엔비디아 공식 인정, 일부 설계 이슈, 4분기 양산 시점 약간 늦춤"],
            ["24.12", "TSMC CoWoS 캐파 약 35K wafer/month (당초 50K 목표)"],
            ["25.1", "엔비디아 Blackwell B200 본양산 시작"],
            ["25.3", "AMD MI300X 일부 hyperscaler 수주 (엔비디아 부족분 흡수)"],
            ["25.Q2", "엔비디아 Blackwell DC 매출 본격 인식"],
          ],
          rowsEn: [
            ["2024.4", "NVIDIA Blackwell announcement (GTC 2024)"],
            ["2024.8", "The Information reports first signs of delay"],
            ["2024.10", "NVIDIA officially acknowledges design issues, slight push of Q4 ramp"],
            ["2024.12", "TSMC CoWoS capacity ~35K wafer/month (vs original 50K target)"],
            ["2025.1", "NVIDIA Blackwell B200 enters full production"],
            ["2025.3", "AMD MI300X picks up some hyperscaler orders (absorbing NVIDIA shortfall)"],
            ["2025.Q2", "NVIDIA Blackwell DC revenue fully recognized"],
          ],
          caption: "출처: SemiAnalysis (Dylan Patel), The Information, NVIDIA Form 8-K 종합.",
          captionEn: "Source: SemiAnalysis (Dylan Patel), The Information, NVIDIA Form 8-K composite.",
        },
      },
      {
        type: "text",
        body:
          "### 표면적 이유 vs 실제 이유\n\n표면적 이유는 Blackwell GPU 자체의 설계 이슈다.\n\nGH100→B200 chip-to-chip 연결 재설계가 알려진 이유.\n\n실제로는 CoWoS 캐파가 더 큰 변수였다는 것이 SemiAnalysis 분석.\n\n24년 4분기 TSMC CoWoS 캐파 약 35,000 wafer/month.\n\n엔비디아가 그 중 절반 이상을 요구.\n\n남은 절반을 AMD, 브로드컴, 마벨이 나눠야 했다.\n\n엔비디아가 모든 물량을 받지 못한 결과가 Blackwell 양산 지연으로 나타났다.\n\n### TSMC가 가진 결정권\n\n세 가지다.\n\n첫째, 누구에게 얼마나 줄지. 엔비디아가 전부를 받지 못한다. AMD, 브로드컴, 마벨이 동시에 줄을 서면 TSMC가 배분 결정.\n\n둘째, 언제 줄지. Blackwell이 24년 4분기 예고였지만 25년 1분기로 밀린 결정은 TSMC 캐파가 변수.\n\n셋째, 얼마에 팔지. CoWoS wafer당 가격을 TSMC가 결정. 엔비디아, AMD, 브로드컴 모두 선택의 여지가 없다.\n\n이게 24-25년 엔비디아 Blackwell 지연의 진짜 메커니즘.",
        bodyEn:
          "### Surface vs. underlying cause\n\nThe surface cause was a design issue in the Blackwell GPU itself.\n\nThe known reason was a redesign of the GH100→B200 chip-to-chip interconnect.\n\nIn reality, CoWoS capacity was the bigger variable, according to SemiAnalysis.\n\nIn Q4 2024, TSMC CoWoS capacity ran around 35,000 wafer/month.\n\nNVIDIA was demanding more than half of that.\n\nAMD, Broadcom, and Marvell had to split the remaining half.\n\nThe fact that NVIDIA could not get its full request showed up as the Blackwell production delay.\n\n### TSMC's decision rights\n\nThere are three.\n\nFirst, who gets how much. NVIDIA cannot get everything. When AMD, Broadcom, and Marvell all line up at once, TSMC decides the allocation.\n\nSecond, when they get it. Blackwell was telegraphed for Q4 2024 but slipped into Q1 2025 — TSMC capacity was the variable that decided.\n\nThird, at what price. The wafer price for CoWoS is set by TSMC. NVIDIA, AMD, and Broadcom have no real alternative.\n\nThis is the actual mechanism behind the NVIDIA Blackwell delay of 2024-2025.",
      },
      {
        type: "text",
        body:
          "### 26년, TSMC의 결정권이 더 커진다\n\n26년 말 CoWoS 캐파가 120,000-130,000 wafer/month로 늘어난다.\n\n당초보다 훨씬 빨리 늘어나는 속도.\n\n그래도 수요가 더 빠르게 늘어난다.\n\n엔비디아 Rubin (26년 양산), AMD MI400 (26년), 브로드컴 AI semi backlog 730억 달러, 마벨 AWS Trainium 2 모두 CoWoS를 요구.\n\nTSMC의 우선순위 결정권은 26년에 더 강해진다.\n\n### 한국 SK하이닉스가 받는 효과\n\nCoWoS가 늘어날수록 HBM 수요도 늘어난다.\n\nCoWoS 한 wafer당 HBM 평균 8 스택.\n\nCoWoS 캐파가 23년 15K → 26년 130K로 8.6배가 되면, HBM 수요도 약 8.6배.\n\nSK하이닉스 HBM 매출은 TSMC CoWoS 캐파의 직접 함수.\n\n이게 SK하이닉스 영업이익률 72%의 본질이다.",
        bodyEn:
          "### In 2026, TSMC's decision rights grow stronger\n\nBy end-2026, CoWoS capacity scales to 120,000-130,000 wafer/month.\n\nThis is a much faster ramp than originally planned.\n\nEven so, demand grows even faster.\n\nNVIDIA Rubin (production in 2026), AMD MI400 (2026), Broadcom AI semi backlog of $73B, and Marvell AWS Trainium 2 all require CoWoS.\n\nTSMC's priority-setting power becomes stronger in 2026.\n\n### What Korea's SK Hynix gets in return\n\nThe more CoWoS grows, the more HBM demand grows.\n\nEach CoWoS wafer carries on average around 8 HBM stacks.\n\nIf CoWoS capacity scales 2023's 15K → 2026's 130K, that is 8.6×, so HBM demand also rises around 8.6×.\n\nSK Hynix HBM revenue is a direct function of TSMC CoWoS capacity.\n\nThis is the essence of SK Hynix's 72% operating margin.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "TSMC는 분배자, SK하이닉스는 1차 수혜자",
          headingEn: "TSMC the Allocator, SK Hynix the First Beneficiary",
          body:
            "TSMC의 결정권은 엔비디아, AMD, 브로드컴의 운명을 결정한다.\n\n그러나 SK하이닉스, 삼성 HBM은 TSMC가 결정한 CoWoS 캐파를 그대로 받아 매출이 된다.\n\nTSMC는 AI 칩 시장 전체의 캐파 분배자이고, SK하이닉스는 그 분배의 1차 수혜자다.",
          bodyEn:
            "TSMC's decisions determine the fates of NVIDIA, AMD, and Broadcom.\n\nBut SK Hynix and Samsung HBM revenue flows directly from the CoWoS capacity TSMC has decided.\n\nTSMC is the capacity allocator for the entire AI chip market, and SK Hynix is the first-line beneficiary of that allocation.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 15. 위험 신호 5채널
  // ════════════════════════════════════════════════════════════════
  {
    heading: "15. 위험 신호 5채널, 메모리 사이클 강조",
    headingEn: "15. Five Risk Channels — Memory Cycle in Focus",
    blocks: [
      {
        type: "text",
        body:
          "가장 큰 변수는 메모리 사이클이다.\n\nHBM 공급 과잉 시나리오가 SemiAnalysis와 Jim Chanos에서 나오고 있다.\n\n이 사이클이 언제 꺾일 수 있는지 5개 채널로 본다.",
        bodyEn:
          "When this cycle could break is best examined through five channels.\n\nThe biggest variable is the memory cycle.\n\nHBM oversupply scenarios are already being raised by SemiAnalysis and Jim Chanos.",
      },
      {
        type: "chart",
        chart: {
          id: "risk-channels-5",
          title: "5채널 위험 메커니즘",
          titleEn: "Five Risk Channel Mechanism",
          data: [],
          caption: "중심 [AI 반도체 사이클]에서 뻗어나가는 5채널. 위험도별 색상.",
          captionEn: "Five channels radiating from [AI semi cycle], colored by risk level.",
        },
      },
      {
        type: "text",
        body:
          "### 채널 1: 메모리 사이클, HBM 공급 과잉 (가장 큰 변수)\n\n26년 현재는 HBM 공급 부족 국면 (SK하이닉스 영업이익률 72%가 그 증거).\n\n27년~ 공급 과잉 시나리오 (SemiAnalysis, Jim Chanos).\n\nSK하이닉스, 삼성, 마이크론 셋 다 HBM4 캐파 확장 발표.\n\n25년 말 HBM 캐파 합계 약 85K → 26년 말 약 185K (2.2배).\n\n같은 기간 엔비디아 Rubin + AMD MI400 출하량 증가가 약 1.5-1.8배 추정.\n\n공급 2.2배 vs 수요 1.5-1.8배 → 약 20-40%p 갭.\n\nSemiAnalysis Dylan Patel은 27년 HBM ASP가 -30~-40% 가능하다고 말했다.\n\nJim Chanos는 메모리는 영원히 사이클이라고 말했다.\n\nSK하이닉스 영업이익률 72%가 지속 가능한가가 이 채널의 핵심 질문.",
        bodyEn:
          "### Channel 1: memory cycle, HBM oversupply (the biggest variable)\n\nThis is the closest and largest risk.\n\nThe scenario is that HBM supply could exceed demand in 2026-2027.\n\nSK Hynix, Samsung, and Micron have all announced HBM4 capacity expansions.\n\nEnd-2025 total HBM capacity around 85K → end-2026 around 185K (2.2×).\n\nOver the same period, NVIDIA Rubin + AMD MI400 shipment growth is estimated at around 1.5-1.8×.\n\nSupply 2.2× vs. demand 1.5-1.8× → a gap of roughly 20-40 percentage points.\n\nSemiAnalysis's Dylan Patel has said *\"2027 HBM ASP could fall -30 to -40%.\"*\n\nJim Chanos has said *\"memory is cyclical forever.\"*\n\nWhether SK Hynix's 72% operating margin is sustainable is the core question of this channel.",
      },
      {
        type: "text",
        body:
          "### 채널 2-5\n\n채널 2: 중국 추격, §7에서 자세히. CXMT DDR5 (27년 글로벌 10%+ 시나리오), YMTC NAND 232L, AMEC 식각이 LAM 일부 잠식. EUV, HBM은 5-10년 안전, 일반 메모리, NAND, 식각은 5년 안 본격 위협.\n\n채널 3: 관세 및 수출 통제, 26-27년 미국 추가 수출 통제 가능성 (HBM, CoWoS, EUV 임계점 강화), 중국 보복, 트럼프 2기 대만 관세, EU CHIPS Act 보복 관세. 예측 불가능 변수.\n\n채널 4: 첨단 노드 진입 비용, TSMC N2 fab 약 280억 달러, A14 fab 약 400억 달러. 이 비용을 낼 수 있는 회사가 TSMC, 삼성, 인텔 셋. 장기적으로 파운드리 시장이 더 집중. 엔비디아, AMD가 TSMC 의존이 더 깊어진다.\n\n채널 5: CoWoS 단일 의존, CoWoS 캐파가 지진, 태풍, 정치로 중단되면 글로벌 AI 칩 시장 전체 영향. 24년 4월 대만 지진 24시간 복구. 대체 캐파는 삼성, 인텔 IFS뿐인데 첨단 노드 격차 큼. 지정학적 단일 의존 위험.",
        bodyEn:
          "### Channels 2-5\n\nChannel 2: China's rise — covered in detail in §7. CXMT DDR5 (a scenario of 10%+ global share by 2027), YMTC NAND 232L, AMEC etch beginning to erode some of LAM's share. EUV and HBM remain safe for 5-10 years, but general memory, NAND, and etch face material threats within 5 years.\n\nChannel 3: tariffs and export controls — potential additional US export controls in 2026-2027 (tighter HBM, CoWoS, and EUV thresholds), Chinese retaliation, Trump-2.0 Taiwan tariffs, and EU CHIPS Act retaliatory tariffs. An unpredictable variable.\n\nChannel 4: cost of entering leading-edge nodes — a TSMC N2 fab runs around $28B and an A14 fab around $40B. The companies that can pay this are TSMC, Samsung, and Intel. Over the long run, the foundry market concentrates further. NVIDIA and AMD become more deeply dependent on TSMC.\n\nChannel 5: single CoWoS dependence — if CoWoS capacity is interrupted by earthquake, typhoon, or politics, the entire global AI chip market is affected. The April 2024 Taiwan earthquake was restored within 24 hours. The only alternative capacity sits at Samsung and Intel IFS, with a large gap at the leading edge. A geopolitical single-point-of-dependence risk.",
      },
      {
        type: "table",
        table: {
          id: "5-risk-channels-summary",
          title: "5채널 종합, 어느 게 가장 가까운가",
          titleEn: "Five Channels — Which Is Closest",
          headers: ["채널", "단기 (1년 내)", "중기 (2-3년)", "장기 (5년+)"],
          headersEn: ["Channel", "Short (≤1yr)", "Medium (2-3yr)", "Long (5yr+)"],
          rows: [
            ["1. 메모리 사이클", "중간 위험", "가장 큰 위험", "평균화"],
            ["2. 중국 추격", "낮음", "중간 (메모리, NAND)", "높음 (메모리, NAND, 식각)"],
            ["3. 관세 및 수출 통제", "중간 위험 (예측 불가)", "중간", "중간"],
            ["4. 첨단 노드 비용", "낮음", "중간", "높음 (TSMC 더 강해짐)"],
            ["5. CoWoS 단일 의존", "낮음 (대만 안정)", "중간", "중간"],
          ],
          rowsEn: [
            ["1. Memory cycle", "Medium risk", "Largest risk", "Averages out"],
            ["2. China rise", "Low", "Medium (memory/NAND)", "High (memory/NAND/etch)"],
            ["3. Tariffs / export controls", "Medium (unpredictable)", "Medium", "Medium"],
            ["4. Advanced-node cost", "Low", "Medium", "High (TSMC grows stronger)"],
            ["5. CoWoS single dependence", "Low (Taiwan stable)", "Medium", "Medium"],
          ],
          caption: "가장 가깝고 큰 위험은 메모리 사이클. 다음이 관세, 수출 통제. 중국 추격은 천천히.",
          captionEn: "Closest and largest is memory cycle, followed by tariffs/export controls. China rise unfolds slowly.",
          highlightRows: [0],
        },
      },
      {
        type: "callout",
        callout: {
          variant: "warning",
          heading: "5채널이 동시에 작동하면",
          headingEn: "When Multiple Channels Activate Together",
          body:
            "위 5채널 중 2-3개가 동시에 작동하면 사이클 충격이 커진다.\n\n예: HBM 공급 과잉 + 트럼프 관세 + 중국 DDR5 폭주 = 메모리 회사 영업이익률 50%p 하락 가능.\n\n26-27년의 베이스 시나리오는 아니지만, 테일 리스크다.",
          bodyEn:
            "If 2-3 of the five channels activate at the same time, the cycle shock grows.\n\nExample: HBM oversupply + Trump tariffs + a China DDR5 surge = memory company operating margins could drop by 50 percentage points.\n\nThis is not the base case for 2026-2027, but it is a tail risk.",
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 16. 투자자 액션
  // ════════════════════════════════════════════════════════════════
  {
    heading: "16. 투자자 액션, 기관 5 / 일반 5 / Watch 7지표",
    headingEn: "16. Investor Actions — Institutional 5 / Retail 5 / Watch 7",
    blocks: [
      {
        type: "text",
        body:
          "### 16.1 기관투자자가 봐야 할 5가지\n\n1. HBM 분기 점유율 변화: SK 59%가 변하나. SK 50% 하향 시 사이클 정점 통과. 삼성 30%+ 회복 시 SK 단독 베타 약화. 마이크론 25%+ 도달 시 미국 정치 변수.\n\n2. TSMC CoWoS 캐파 변화 + capex 가이던스: 130K wafer/month 달성 시점이 엔비디아, AMD 매출 한계.\n\n3. ASML EUV/High-NA 출하 분기별: 60대+/년 달성 시 logic capex 정점. High-NA 누적 20대 시 2nm 이하 본격화.\n\n4. 브로드컴 AI semi backlog: 730억 달러 → 변화. ASIC가 GPU를 잠식하는 진짜 속도 지표.\n\n5. 중국 자급률 (영역별): 디램 자급률 10%+ 시 일반 메모리 위협 본격화. 낸드 자급률 15%+ 시 낸드 ASP 폭락 위험. Logic 자급률 변화는 느리게 (EUV 없이는 한계).",
        bodyEn:
          "### 16.1 Five things institutional investors need to watch\n\n1. Quarterly HBM share changes: does SK's 59% move. SK falling below 50% means the cycle peak has passed. Samsung recovering above 30% weakens the SK single-beta story. Micron reaching 25%+ introduces a US political variable.\n\n2. TSMC CoWoS capacity changes plus capex guidance: the point at which 130K wafer/month is reached marks the revenue ceiling for NVIDIA and AMD.\n\n3. ASML EUV / High-NA quarterly shipments: 60+/year marks the logic capex peak. Cumulative High-NA of 20 units marks the full ramp of sub-2nm.\n\n4. Broadcom AI semi backlog: the trajectory of the $73B figure. The real-speed indicator for ASIC eating into GPU.\n\n5. China self-sufficiency by domain: DRAM self-sufficiency at 10%+ means general-memory threats become real. NAND self-sufficiency at 15%+ creates risk of a NAND ASP collapse. Logic self-sufficiency moves slowly (a hard ceiling without EUV).",
      },
      {
        type: "text",
        body:
          "### 16.2 일반 투자자가 봐야 할 5가지\n\n1. SK하이닉스 분기 HBM 매출 → 영업이익률 동조: 영업이익률 70%+ 유지 시 정점 지속. 50% 하향 시 사이클 후반.\n\n2. 한미반도체 분기 매출 YoY: 26년 1분기 YoY -65.5% → 2분기 회복 여부가 HBM4 양산 본격화 신호.\n\n3. 엔비디아, AMD, 브로드컴 데이터센터 매출 (분기별): 셋 합산 추세가 AI 칩 시장 전체 흐름. 70억달러/분기 → 100억달러/분기 통과 시 피크 영역.\n\n4. TSMC 분기 매출 + HPC 비중: 61% 유지가 AI 사이클 정점. 70%+ 도달 시 과집중 위험.\n\n5. DDR5 spot 가격 추세 (TrendForce, DRAMeXchange): 폭등 지속 시 서버, PC, 스마트폰 영업이익 압박. 하락 전환 시 사이클 후반.",
        bodyEn:
          "### 16.2 Five things retail investors need to watch\n\n1. SK Hynix quarterly HBM revenue and its correlation with operating margin: 70%+ OPM sustained means the peak continues. Falling below 50% signals the late stage of the cycle.\n\n2. Hami Semiconductor quarterly revenue YoY: Q1 2026 -65.5% turning to a Q2 recovery is the signal that HBM4 production ramp has begun in earnest.\n\n3. NVIDIA, AMD, and Broadcom data center revenue (quarterly): the trend of all three combined is the trend of the entire AI chip market. Moving from $7B/quarter through $10B/quarter marks the peak zone.\n\n4. TSMC quarterly revenue plus HPC mix: 61% sustained is the AI cycle peak. Reaching 70%+ raises the risk of over-concentration.\n\n5. DDR5 spot price trends (TrendForce, DRAMeXchange): a sustained surge pressures server, PC, and smartphone operating margins. A reversal signals the late stage of the cycle.",
      },
      {
        type: "chart",
        chart: {
          id: "semi-watch-dashboard",
          title: "16.3 매주 봐야 할 7개 지표, Watch Dashboard",
          titleEn: "16.3 Weekly Watch Dashboard — 7 Indicators",
          data: [],
          caption: "정상, 주의, 위험 3색 셀 + 종합 판정. 7개 중 3+ 위험이면 정점 통과 시그널, 5+ 정상이면 사이클 후반 안정 시그널.",
          captionEn: "Normal/Caution/Danger color cells + composite verdict. 3+ in danger signals 'peak passed'; 5+ in normal signals 'late-cycle stability'.",
        },
      },
      {
        type: "table",
        table: {
          id: "watch-7-indicators",
          title: "Watch Dashboard 7지표",
          titleEn: "Watch Dashboard — 7 Indicators",
          headers: ["지표", "현재 (26.5)", "정상", "주의", "위험", "출처"],
          headersEn: ["Indicator", "Now (May 2026)", "Normal", "Caution", "Danger", "Source"],
          rows: [
            ["1. HBM TTM 매출 성장률", "+200%+", "+50%+", "+20-50%", "<+20%", "Counterpoint/TrendForce"],
            ["2. TSMC CoWoS 캐파 (월 wafer)", "약 80K", "증가", "정체", "감소", "TSMC IR"],
            ["3. ASML EUV 분기 출하", "약 15대", "15+", "10-15", "<10", "ASML IR"],
            ["4. 한미반도체 분기 매출 YoY", "-65.5%", "+30%+", "-10~+30%", "<-30%", "한미 IR"],
            ["5. SK하이닉스 영업이익률", "72%", "50%+", "30-50%", "<30%", "SK하이닉스 IR"],
            ["6. 엔비디아 DC 매출 QoQ", "+20%+", "+10%+", "0-+10%", "감소", "NVIDIA Form 8-K"],
            ["7. DDR5 8Gb spot 가격", "$3+", "$2-3", "$1.5-2", "<$1.5", "TrendForce"],
          ],
          rowsEn: [
            ["1. HBM TTM revenue growth", "+200%+", "+50%+", "+20-50%", "<+20%", "Counterpoint/TrendForce"],
            ["2. TSMC CoWoS capacity (mo)", "~80K", "Increasing", "Flat", "Declining", "TSMC IR"],
            ["3. ASML EUV quarterly ships", "~15", "15+", "10-15", "<10", "ASML IR"],
            ["4. Hami quarterly revenue YoY", "-65.5%", "+30%+", "-10~+30%", "<-30%", "Hami IR"],
            ["5. SK Hynix OPM", "72%", "50%+", "30-50%", "<30%", "SK Hynix IR"],
            ["6. NVIDIA DC QoQ", "+20%+", "+10%+", "0-+10%", "Declining", "NVIDIA Form 8-K"],
            ["7. DDR5 8Gb spot price", "$3+", "$2-3", "$1.5-2", "<$1.5", "TrendForce"],
          ],
          caption: "26년 5월 기준 5개가 정상, 1개 위험 (한미반도체, 다만 세대 전환 공백은 일시적).",
          captionEn: "As of May 2026, 5 are normal, 1 in danger (Hami — temporary generation gap). Currently in peak cycle zone.",
          highlightRows: [3, 4],
        },
      },
    ],
  },

  // ════════════════════════════════════════════════════════════════
  // 17. 다음 거래 + 글로서리
  // ════════════════════════════════════════════════════════════════
  {
    heading: "17. 다음 다룰 반도체 거래 + 글로서리 30개",
    headingEn: "17. Upcoming Semi Deals + 30-Term Glossary",
    blocks: [
      {
        type: "text",
        body:
          "### 17.1 다음 거래 6개\n\n이 글이 매크로를 다뤘다면, deal-story 다른 글에서는 개별 거래 anatomy를 풀이할 예정.\n\n1. BlackRock × HPS Investment Partners ($12B, 25년 7월 완결): 자산운용업이 사모대출과 함께 반도체 capex 자금조달에 직접 진입.\n\n2. SK하이닉스 HBM4 본양산 시작 (26년 2-3분기): HBM 세대 전환의 결정적 분기. 한미반도체 TC Bonder 회복 신호.\n\n3. 인텔 × TSMC 미국 fab 협력 가능성: 인텔 18A 양산 + TSMC Arizona fab. 미국 정부 보조금 + 지정학.\n\n4. 삼성 SF2 엔비디아 수주 가능성: 26년 하반기 결정. 한국 파운드리의 본질적 분기점.\n\n5. CXMT (중국 창신메모리) IPO: 26-27년 시도. 중국 메모리의 본격적 자본 동원 신호.\n\n6. 한미반도체 HBM4 TC Bonder 수주: 26년 2-3분기 SK하이닉스 발주 회복. 한국 소부장 사이클 분기.",
        bodyEn:
          "### 17.1 Six upcoming deals\n\nIf this piece covered the macro, other deal-story notes will unpack the anatomy of individual transactions.\n\n1. BlackRock × HPS Investment Partners ($12B, closed July 2025) — asset management entering semiconductor capex financing alongside private credit.\n\n2. SK Hynix HBM4 production ramp (Q2-Q3 2026) — the decisive inflection of the HBM generation transition. A signal for the Hami Semiconductor TC Bonder recovery.\n\n3. Intel × TSMC US fab collaboration possibility — Intel 18A production plus the TSMC Arizona fab. US government subsidies plus geopolitics.\n\n4. Samsung SF2 NVIDIA win possibility — to be decided in H2 2026. An essential inflection point for Korean foundry.\n\n5. CXMT (China's ChangXin Memory) IPO — an attempt in 2026-2027. The signal that Chinese memory has begun mobilizing capital at scale.\n\n6. Hami Semiconductor HBM4 TC Bonder wins — SK Hynix order recovery in Q2-Q3 2026. The inflection point of the Korean supplier cycle.",
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "17.2 글로서리, 30개 핵심 용어",
          headingEn: "17.2 Glossary — 30 Core Terms",
          body:
            "메모리 (8): HBM (적층 메모리), DDR5 (5세대 디램), LP5/LPDDR5 (모바일 저전력 디램), 낸드 (플래시), TC Bonder (HBM 적층 장비), HBM substrate (HBM 기판), TSV (관통 전극), MR-MUF (SK하이닉스 패키지).\n\n파운드리, 패키징 (7): Fabless (설계 전문), Foundry (위탁 생산), 노드 N3, N2, A14 (회로 폭), CoWoS (TSMC 첨단 패키징), CoWoS-S/L (변형), ABF substrate (CoWoS 위 기판, Ajinomoto), OSAT (후공정 외주).\n\n노광, 회로 (6): EUV (극자외선 노광), High-NA EUV (NA 0.55 차세대), DUV (일반 노광), PR (감광액), 고압 어닐링 HPSP (회로 치료), ALD (원자층 증착).\n\n설계 (4): GPU (엔비디아, AMD), ASIC (Google TPU, AWS Trainium), HPC (데이터센터), AI accelerator (통칭).\n\n산업, 정책 (5): 소부장 (소재, 부품, 장비), EDA (Cadence, Synopsys), IP (ARM, RISC-V), CHIPS Act (미국 보조금 법), China Big Fund ($47.5B Phase 3).",
          bodyEn:
            "Memory (8): HBM (stacked memory), DDR5 (5th-gen DRAM), LP5/LPDDR5 (mobile low-power DRAM), NAND (flash), TC Bonder (HBM stacking tool), HBM substrate (HBM interposer-side board), TSV (through-silicon via), MR-MUF (SK Hynix's package process).\n\nFoundry and packaging (7): Fabless (design-only), Foundry (contract manufacturing), Node N3/N2/A14 (circuit width), CoWoS (TSMC's leading-edge packaging), CoWoS-S/L (variants), ABF substrate (the board atop CoWoS, by Ajinomoto), OSAT (back-end outsourcing).\n\nLithography and logic (6): EUV (extreme ultraviolet lithography), High-NA EUV (next generation at NA 0.55), DUV (conventional lithography), PR (photoresist), HPSP high-pressure annealing (circuit healing), ALD (atomic layer deposition).\n\nDesign (4): GPU (NVIDIA, AMD), ASIC (Google TPU, AWS Trainium), HPC (data center), AI accelerator (umbrella term).\n\nIndustry and policy (5): Sobujang (Korean term for materials/components/equipment), EDA (Cadence, Synopsys), IP (ARM, RISC-V), CHIPS Act (US subsidy law), China Big Fund ($47.5B Phase 3).",
        },
      },
      {
        type: "callout",
        callout: {
          variant: "insight",
          heading: "마지막 한 문장",
          headingEn: "One Final Sentence",
          body:
            "AI 반도체 사이클은 17년 호황의 끝자락이 아니라, 이제 막 본격 양산 4년차에 들어선 사이클이다.\n\n그 안에서 진짜 알파는 3대 병목 (HBM, CoWoS, EUV)에 박혀 있다.\n\n한국 반도체는 그 병목의 어디에 박혀 있는가에 따라 운명이 갈린다.\n\n한미반도체 매출 YoY -65.5%와 SK하이닉스 영업이익률 72%가 같은 분기에 일어났다는 것이 그 증거다.",
          bodyEn:
            "The AI semiconductor cycle is not the tail end of a 17-year boom; it is a cycle that has just entered its fourth year of full-scale production.\n\nInside it, the real alpha is embedded at three bottlenecks — HBM, CoWoS, and EUV.\n\nKorea's fate splits depending on which bottleneck it occupies.\n\nThe proof: Hami Semiconductor's -65.5% and SK Hynix's 72% operating margin happened in the same quarter.",
        },
      },
    ],
  },
];
