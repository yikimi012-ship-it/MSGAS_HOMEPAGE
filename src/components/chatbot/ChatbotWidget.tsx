import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, RefreshCw, ChevronDown, FileText, Calculator, ShieldCheck } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  actionType?: 'quote' | 'msds' | 'facilities';
}

interface ChatbotWidgetProps {
  onOpenQuote: () => void;
  onOpenMsds: () => void;
  onOpenTelematics: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-init-1',
    role: 'model',
    text: '안녕하세요! 대한민국 첨단 산업용·특수 가스 전문기업 (주)MS가스 AI 컨설턴트입니다. 초고순도 가스 규격(질소, 산소, 아르곤, 실란, 암모니아 등), 탱크로리 직배송, 공급 견적 산출 및 MSDS 서류 관련하여 무엇이든 물어보세요.',
    timestamp: '방금 전',
  },
];

const SUGGESTED_PROMPTS = [
  '💡 초고순도 질소(N2) 공급 사양',
  '💰 가스 공급 견적 산출 문의',
  '🚚 탱크로리 직배송 거점 및 리드타임',
  '🔥 고효율 절단가스 프라멕스(Flamex)',
  '🚢 울산 암모니아 벙커링 R&D',
  '📄 MSDS 물질안전보건자료 조회',
];

export const ChatbotWidget: React.FC<ChatbotWidgetProps> = ({
  onOpenQuote,
  onOpenMsds,
  onOpenTelematics,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsLoading(true);

    try {
      const history = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || '답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';

      let actionType: 'quote' | 'msds' | 'facilities' | undefined = undefined;
      if (text.includes('견적') || replyText.includes('견적 및 문의하기') || replyText.includes('견적서')) {
        actionType = 'quote';
      } else if (text.includes('msds') || replyText.includes('MSDS') || text.includes('안전보건자료')) {
        actionType = 'msds';
      } else if (text.includes('탱크로리') || text.includes('관제') || text.includes('배송')) {
        actionType = 'facilities';
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType,
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.warn('API call failed, using client fallback:', err);
      // Client-side fallback if server is unreachable
      const fallbackReply = getLocalFallback(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: fallbackReply.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionType: fallbackReply.actionType,
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 animate-fadeIn">
          <div className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-deep-ocean/95 text-pure-white text-xs font-semibold shadow-xl border border-secondary/40 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
            <span>가스 견적 & 기술 상담</span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            aria-label="MS가스 AI 상담 챗봇 열기"
            className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary hover:from-secondary hover:to-accent-electric text-pure-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 ring-4 ring-accent-electric/20 cursor-pointer"
          >
            <Bot size={26} className="transition-transform group-hover:rotate-6 text-pure-white" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-electric text-deep-ocean text-[10px] font-extrabold rounded-full flex items-center justify-center">
              AI
            </span>
          </button>
        </div>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[410px] h-[580px] max-h-[85vh] rounded-2xl bg-surface-container-lowest shadow-2xl border border-secondary/30 flex flex-col overflow-hidden animate-fadeIn">
          {/* Header */}
          <div className="px-4 py-3.5 bg-gradient-to-r from-deep-ocean via-primary to-secondary text-pure-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent-electric text-deep-ocean flex items-center justify-center font-bold">
                <Bot size={18} />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm text-pure-white">(주)MS가스 AI 컨설턴트</h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric animate-pulse" />
                </div>
                <p className="text-[11px] text-surface-variant">24/7 산업용·특수가스 실시간 상담</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="대화 초기화"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-surface-variant hover:text-pure-white hover:bg-surface-glass/15 transition-colors"
              >
                <RefreshCw size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="접기"
                className="w-7 h-7 rounded-lg flex items-center justify-center text-surface-variant hover:text-pure-white hover:bg-surface-glass/15 transition-colors"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-surface-container-low/40 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'model' && (
                  <div className="w-7 h-7 rounded-full bg-primary text-pure-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot size={14} className="text-accent-electric" />
                  </div>
                )}

                <div className={`max-w-[82%] space-y-2`}>
                  <div
                    className={`p-3 rounded-2xl leading-relaxed whitespace-pre-wrap break-words ${
                      m.role === 'user'
                        ? 'bg-primary text-pure-white rounded-tr-none shadow-xs'
                        : 'bg-surface-container-lowest text-on-surface border border-border-subtle rounded-tl-none shadow-sm'
                    }`}
                  >
                    {m.text}
                  </div>

                  {/* Direct Action triggers if suggested by message */}
                  {m.actionType === 'quote' && (
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-accent-electric text-deep-ocean font-bold text-[11px] shadow-sm hover:bg-secondary-fixed-dim transition-all"
                    >
                      <Calculator size={13} />
                      <span>온라인 견적 계산기 바로 열기</span>
                    </button>
                  )}

                  {m.actionType === 'msds' && (
                    <button
                      onClick={onOpenMsds}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high text-primary font-bold text-[11px] border border-border-subtle hover:bg-surface-variant transition-all"
                    >
                      <FileText size={13} className="text-secondary" />
                      <span>MSDS 자료실 검색 바로 열기</span>
                    </button>
                  )}

                  {m.actionType === 'facilities' && (
                    <button
                      onClick={onOpenTelematics}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-deep-ocean text-accent-electric font-bold text-[11px] border border-secondary/40 hover:bg-primary transition-all"
                    >
                      <ShieldCheck size={13} />
                      <span>실시간 탱크로리 관제 레이더 확인</span>
                    </button>
                  )}

                  <span
                    className={`block text-[9px] text-on-surface-variant/70 ${
                      m.role === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {m.timestamp}
                  </span>
                </div>

                {m.role === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-secondary text-pure-white flex items-center justify-center shrink-0 mt-0.5">
                    <User size={14} />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-7 h-7 rounded-full bg-primary text-pure-white flex items-center justify-center shrink-0 shadow-xs">
                  <Bot size={14} className="text-accent-electric animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-surface-container-lowest text-on-surface border border-border-subtle rounded-tl-none flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[11px] text-on-surface-variant ml-1">가스 데이터베이스 검색 중...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-surface-container-low border-t border-border-subtle overflow-x-auto flex gap-1.5 shrink-0 scrollbar-none">
            {SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                disabled={isLoading}
                onClick={() => handleSendMessage(prompt.replace(/^[^\s]+\s/, ''))}
                className="px-2.5 py-1 rounded-full bg-surface-container-lowest hover:bg-surface-container-high border border-border-subtle text-[11px] text-primary whitespace-nowrap transition-colors shrink-0 disabled:opacity-50"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-surface-container-lowest border-t border-border-subtle flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="가스 품목, 납품 주기, 견적 등을 문의하세요..."
              disabled={isLoading}
              className="flex-1 px-3 py-2 text-xs rounded-xl border border-border-subtle bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="w-8 h-8 rounded-xl bg-primary hover:bg-secondary text-pure-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

// Client-side knowledge base fallback helper
function getLocalFallback(msg: string): { text: string; actionType?: 'quote' | 'msds' | 'facilities' } {
  const q = msg.toLowerCase();

  if (q.includes('견적') || q.includes('가격') || q.includes('비용') || q.includes('주문') || q.includes('단가')) {
    return {
      text: '(주)MS가스의 공급 견적은 사용 가스 품목(질소, 산소, 아르곤 등), 공급 방식(초저온 벌크로리, LGC, 실린더 봄베), 월간 예상 사용량 및 배송 권역에 따라 맞춤 산출됩니다. 아래 [온라인 견적 계산기]를 통해 요청서를 작성하시면 2시간 이내에 정식 견적서를 회신해 드립니다.',
      actionType: 'quote',
    };
  }

  if (q.includes('질소') || q.includes('n2') || q.includes('nitrogen')) {
    return {
      text: '(주)MS가스는 99.999%(5N)부터 99.9999%(6N) 전자급 초고순도 질소(N2)를 공급하고 있습니다. 불활성 분위기 가스, 석유화학 배관 퍼지, 금속 열처리, 레이저 절단용으로 대용량 초저온 벌크 탱크로리 및 초저온용기(LGC), 고압 봄베로 전국 17개 거점에서 당일 직배송해 드립니다.',
      actionType: 'quote',
    };
  }

  if (q.includes('프라멕스') || q.includes('flamex') || q.includes('절단')) {
    return {
      text: '프라멕스(Flamex)는 (주)MS가스의 고효율 친환경 절단 특수가스입니다. 기존 아세틸렌 대비 가스 비용을 최대 40% 절감할 수 있으며, 산소 소비량 15% 감소와 역화 방지 분자 구조로 대형 후판 절단 및 조선소에서 최고의 안전성과 경제성을 자랑합니다.',
      actionType: 'quote',
    };
  }

  if (q.includes('암모니아') || q.includes('nh3') || q.includes('벙커링') || q.includes('울산')) {
    return {
      text: '(주)MS가스는 전자급 초고순도 암모니아(99.9995%) 공급 역량을 기반으로, 울산 규제자유특구의 『친환경 선박 암모니아 TTS(Truck-to-Ship) 벙커링 인프라 구축 및 기자재·표준 개발 실증 R&D』 사업을 주관하고 있습니다. 안전 표준 수립 및 3자 위험성평가(HAZOP)를 통해 무탄소 청정에너지 전환을 선도하고 있습니다.',
    };
  }

  if (q.includes('msds') || q.includes('안전보건') || q.includes('물질안전')) {
    return {
      text: 'MS가스에서 취급하는 전 가스 품목의 최신 KOSHA GHS 기준 MSDS(물질안전보건자료)는 화면 내 [MSDS 자료실] 모달에서 화학식, CAS No, 품목명으로 즉시 검색하여 PDF 원본을 다운로드하실 수 있습니다.',
      actionType: 'msds',
    };
  }

  if (q.includes('배송') || q.includes('탱크로리') || q.includes('운송') || q.includes('관제')) {
    return {
      text: '(주)MS가스는 부산 본사를 비롯해 안성, 화성, 평택, 천안, 여수, 울산, 창원, 광주 등 전국 17개 공급 영업소와 100여 대의 초저온 진공 탱크로리를 직영 운영하고 있습니다. 24시간 GPS 텔레메트리 중앙 관제를 통해 99.8%의 정시 도착율을 자랑합니다.',
      actionType: 'facilities',
    };
  }

  return {
    text: '안녕하세요! (주)MS가스 AI 컨설턴트입니다. 초고순도 산업용·특수 가스 사양, 초저온 벌크로리 직배송, 공급 견적 산출, MSDS 서류 발급 등 문의사항을 남겨주시면 신속히 안내해 드리겠습니다. (고객센터: 1588-0000)',
    actionType: 'quote',
  };
}
