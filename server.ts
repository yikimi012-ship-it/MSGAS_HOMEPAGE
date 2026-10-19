import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.use(express.json());

// Initialize Gemini client if valid API key is provided
const apiKey = process.env.GEMINI_API_KEY;
const isValidKey = Boolean(apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.trim().length > 10);
let ai: GoogleGenAI | null = null;

if (isValidKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey!,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// System prompt grounding the chatbot in (주)MS가스 knowledge
const MS_GAS_SYSTEM_INSTRUCTION = `
당신은 대한민국 첨단 산업용·특수 가스 전문 공급 기업인 '(주)MS가스(MS Gas Co., Ltd.)'의 공식 AI 기술상담 컨설턴트입니다.
친절하고 전문적이며 신뢰감 있는 비즈니스 어조(경어체)로 고객의 질문에 답변하세요.

[(주)MS가스 핵심 정보]
- 설립: 1974년 창립 (반세기 역사), 대표이사: 전청민 (은탑산업훈장 수훈)
- 매출: 935억원 달성 (2024 GAAP 기준), 전국 17개 직영 공급망 및 8대 권역 거점, 10개국 해외 수출
- 대표번호: 1588-0000, 부산 본사 및 기술연구원: 051-311-2000 (부산광역시 사상구 낙동대로 1412번길 28)
- 주요 제품군:
  1. 산업용 가스: 질소(N2, 99.999%), 산소(O2), 아르곤(Ar, 99.999%), 이산화탄소(CO2) - 초저온 벌크 탱크로리, LGC, 봄베 공급
  2. 연료용 가스: 프라멕스(Flamex - 아세틸렌 대비 비용 40% 절감 고효율 절단가스), 프로판, 부탄
  3. 특수가스(99.999%~99.9999%): 모노실란(SiH4 6N), 삼불화질소(NF3 5N), 전자급 암모니아(NH3 5.5N)
  4. 의료용 가스: 식약처 의약품 GMP 인증 의료용 산소(USP/KP), 마취용 아산화질소(N2O)
  5. 표준가스: GC 분석 교정 및 TMS 굴뚝측정용 맞춤형 다성분 표준가스 (PPM/PPB 단위, KOLAS 소급성)
- 4대 엔지니어링 서비스: 가스분석 서비스(GC 분석), 가스퍼지(Purge) 치환 엔지니어링, 특수가스 ISO 탱크 수출입 물류, HAZOP 안전진단 및 KGS 법정검사 대행
- 스마트 물류: 전국 100여 대 초저온 진공 탱크로리 24/7 실시간 GPS 및 압력/온도 텔레메트리 관제 (정시도착율 99.8%, KGS 무사고 4,820일)
- ESG 프로젝트: 울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발(실증R&D)』 주관

답변 작성 규칙:
- 가스 사양, 납품 방식, 안전 기준(MSDS), 견적 요청 절차를 알기 쉽게 설명하세요.
- 필요 시 온라인 견적 창구(화면 상단 '견적 및 문의하기')나 대표번호(1588-0000)를 안내하세요.
- 한국어로 명확하고 간결하게 3~5문장 내외로 서술하되, 목록이 필요하면 불릿 기호로 정리하세요.
`;

// Chatbot API Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: '메시지를 입력해 주세요.' });
    }

    if (ai) {
      try {
        // Construct conversation contents
        const contents: any[] = [];

        if (Array.isArray(history) && history.length > 0) {
          for (const item of history.slice(-6)) {
            contents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: item.text }],
            });
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        const geminiPromise = ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents: contents,
          config: {
            systemInstruction: MS_GAS_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        // 3.5s timeout race so responses never hang
        const timeoutPromise = new Promise<null>((resolve) =>
          setTimeout(() => resolve(null), 3500)
        );

        const response = await Promise.race([geminiPromise, timeoutPromise]);

        if (response && response.text) {
          return res.json({ reply: response.text });
        }
      } catch (geminiError: any) {
        console.error('Gemini API call failed or timed out, falling back to knowledge base:', geminiError?.message || geminiError);
      }
    }

    // Fallback: rule-based knowledge engine if Gemini API is unavailable
    const reply = generateKnowledgeFallback(message);
    return res.json({ reply });
  } catch (error: any) {
    console.error('Chat endpoint error:', error);
    return res.status(500).json({
      error: '챗봇 응답 처리 중 오류가 발생했습니다.',
      reply: '현재 상담 서버 연결이 원활하지 않습니다. 전국 대표번호(1588-0000) 또는 화면 상단의 [견적 및 문의하기]를 이용해 주시기 바랍니다.',
    });
  }
});

// Domain-knowledge rule fallback
function generateKnowledgeFallback(msg: string): string {
  const query = msg.toLowerCase();

  if (query.includes('견적') || query.includes('가격') || query.includes('비용') || query.includes('주문') || query.includes('단가')) {
    return '(주)MS가스의 공급 견적은 사용 가스 품목(질소, 산소, 아르곤 등), 공급 방식(초저온 벌크로리, LGC, 실린더 봄베), 월간 예상 사용량 및 배송 권역에 따라 맞춤 산출됩니다. 화면 상단의 [견적 및 문의하기] 버튼을 클릭하시면 실시간으로 견적 요청서를 작성하실 수 있으며, 담당 부서에서 2시간 이내에 정식 견적서를 회신해 드립니다.';
  }

  if (query.includes('질소') || query.includes('n2') || query.includes('nitrogen')) {
    return '(주)MS가스는 99.999%(5N)부터 99.9999%(6N) 전자급 초고순도 질소(N2)를 공급하고 있습니다. 불활성 분위기 가스, 석유화학 배관 퍼지, 금속 열처리, 레이저 절단용으로 대용량 초저온 벌크 탱크로리 및 초저온용기(LGC), 고압 봄베로 전국 17개 거점에서 당일 직배송해 드립니다.';
  }

  if (query.includes('산소') || query.includes('o2') || query.includes('oxygen')) {
    return '(주)MS가스의 산소(O2)는 조선·제철 고효율 연소 및 플라즈마 절단용 산업용 산소(99.6% 이상)와 식품의약품안전처 의약품 GMP 인증을 획득한 의료용 산소(99.5% 이상)로 엄격히 구분 충전되어 전국 종합병원 및 산업현장에 24시간 안전 공급됩니다.';
  }

  if (query.includes('프라멕스') || query.includes('flamex') || query.includes('절단')) {
    return '프라멕스(Flamex)는 (주)MS가스의 고효율 친환경 절단 특수가스입니다. 기존 아세틸렌 대비 가스 비용을 최대 40% 절감할 수 있으며, 산소 소비량 15% 감소와 역화 방지 분자 구조로 대형 후판 절단 및 조선소에서 최고의 안전성과 경제성을 자랑합니다.';
  }

  if (query.includes('암모니아') || query.includes('nh3') || query.includes('벙커링') || query.includes('울산')) {
    return '(주)MS가스는 전자급 초고순도 암모니아(99.9995%) 공급 역량을 기반으로, 울산 규제자유특구의 『친환경 선박 암모니아 TTS(Truck-to-Ship) 벙커링 인프라 구축 및 기자재·표준 개발 실증 R&D』 사업을 주관하고 있습니다. 안전 표준 수립 및 3자 위험성평가(HAZOP)를 통해 무탄소 청정에너지 전환을 선도하고 있습니다.';
  }

  if (query.includes('msds') || query.includes('안전보건') || query.includes('물질안전')) {
    return 'MS가스에서 취급하는 전 가스 품목의 최신 KOSHA GHS 기준 MSDS(물질안전보건자료)는 화면 내 [MSDS 자료실] 모달 또는 고객지원 메뉴에서 화학식, CAS No, 품목명으로 즉시 검색하여 PDF 원본을 다운로드하실 수 있습니다.';
  }

  if (query.includes('배송') || query.includes('탱크로리') || query.includes('운송') || query.includes('위치') || query.includes('지점') || query.includes('영업소')) {
    return '(주)MS가스는 부산 본사를 비롯해 안성, 화성, 평택, 천안, 여수, 울산, 창원, 광주 등 전국 17개 공급 영업소와 100여 대의 초저온 진공 탱크로리를 직영 운영하고 있습니다. 24시간 GPS 텔레메트리 중앙 관제를 통해 99.8%의 정시 도착율과 4,820일 무사고 운송을 기록 중입니다.';
  }

  if (query.includes('연락처') || query.includes('전화') || query.includes('상담') || query.includes('문의')) {
    return '(주)MS가스 고객센터 안내입니다.\n• 전국 대표번호: 1588-0000\n• 본사 및 기술연구원: 051-311-2000\n• 이메일: msgas@msgas.co.kr\n• 운영 시간: 평일 08:30 ~ 18:00 (긴급 가스 배송 관제는 365일 24시간 대응)';
  }

  return '안녕하세요! (주)MS가스 AI 컨설턴트입니다. 초고순도 산업용·특수 가스(질소, 산소, 아르곤, 프라멕스, 암모니아 등) 사양, 초저온 벌크로리 직배송, 공급 견적 산출, MSDS 서류 발급 등 궁금한 점을 문의하시면 신속히 안내해 드리겠습니다.';
}

// Dev & Production serving
const isProduction = process.env.NODE_ENV === 'production';

async function startServer() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`(주)MS가스 포털 서버 실행 중: http://localhost:${port}`);
  });
}

startServer();
