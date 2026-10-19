import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, FileSpreadsheet } from 'lucide-react';

interface TechnicalServicesPageProps {
  onOpenQuote: () => void;
}

export const TechnicalServicesPage: React.FC<TechnicalServicesPageProps> = ({ onOpenQuote }) => {
  const services = [
    {
      id: 'analysis',
      title: '가스분석 서비스 (Analytical Chemistry)',
      badge: '국가공인 성적서 지원',
      desc: '고객사 배관 및 원료 가스의 성분 분석, 미량 수분/산소 ppb 단위 정밀 분석, 불순물 거동 평가를 진행합니다.',
      items: [
        '초고순도 가스 크로마토그래피(GC-TCD, GC-FID, GC-PDHID) 분석',
        '미량 수분계(PPM/PPB 수분 분석기) 및 산소 감응 센서 정밀 검측',
        '반도체·전자재료용 특수가스 파티클(Particle) 및 금속 이온 측정',
        'KOLAS 소급성 공인 품질 검사 성적서 발급 보증',
      ],
      icon: 'analytics',
    },
    {
      id: 'purge',
      title: '가스퍼지(Purge) 및 배관 치환 엔지니어링',
      badge: '대형 플랜트 시운전 전담',
      desc: '신규 석유화학 플랜트, LNG 기지, 초대형 선박 건조 현장의 폭발성 가스 및 산소를 고순도 질소로 완벽히 치환합니다.',
      items: [
        '초저온 액화질소(LIN) 고속 기화 펌핑 트레일러(High-Rate Nitrogen Pumping Unit) 투입',
        '대형 배관 및 저장탱크의 비활성화(Inerting) 및 잔류 유증기 제거',
        '선박 시운전 전 가스 시운전(Gas Trial) 질소 블랭킷팅',
        '배관 기밀시험(Pneumatic Leak Testing) 및 압력 유지 검증',
      ],
      icon: 'air',
    },
    {
      id: 'logistics',
      title: '특수가스 수출입 통관 및 ISO 물류',
      badge: 'IMDG 국제 해사 규정 준수',
      desc: '위험물 안전운송 규정을 철저히 준수한 ISO 탱크 컨테이너 및 튜브 트레일러 글로벌 물류 솔루션을 제공합니다.',
      items: [
        '초저온 특수가스 전용 ISO 탱크 컨테이너 선적 및 내륙 연계 운송',
        '위험물 적재검사(IMDG Code) 승인 및 세관 신속 통관 대행',
        '글로벌 화학사 및 반도체 소재 파트너사 수출입 포워딩 협력',
        '컨테이너 잔류가스 안전 폐기 및 정밀 세척/패시베이션 서비스',
      ],
      icon: 'flight_takeoff',
    },
    {
      id: 'safety',
      title: '전문 안전관리 컨설팅 & HAZOP 평가',
      badge: 'KGS 법정 정기검사 대행',
      desc: '고압가스안전관리법에 따른 설비 인허가, 위험성평가(HAZOP/LOPA), 3중 방폭 시스템 안전성 진단을 전담합니다.',
      items: [
        '고압가스 저장 및 충전 시설 기술검토서 및 완성검사 인허가 컨설팅',
        '공정 위험성평가(HAZOP) 정성적/정량적 안전진단 워크숍 주관',
        '가스 누출 검지기 및 3중 긴급 차단 밸브(ESD) 안전계장 수준(SIL) 검토',
        '사업장 정기 법정검사 대행 및 현장 운전원 맞춤형 안전 교육',
      ],
      icon: 'shield_with_heart',
    },
  ];

  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-deep-ocean text-pure-white py-16 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            ENGINEERING & TECHNICAL SERVICES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            가스 설계부터 안전 시운전까지<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
              원스톱 전문 엔지니어링 서비스
            </span>
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            단순 가스 유통을 넘어, 고객사 현장의 화학 분석, 위험물 배관 치환, 국제 물류 통관 및 공정 안전성 평가(HAZOP)까지 통합 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              className="p-8 rounded-2xl bg-surface-container-lowest border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[28px]">{svc.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-surface-container px-2.5 py-1 rounded-full">
                    {svc.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-primary mb-2">{svc.title}</h3>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-6 leading-relaxed">
                  {svc.desc}
                </p>

                <div className="space-y-2 border-t border-surface-variant/50 pt-4 mb-6">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-2">
                    주요 제공 과업 및 프로토콜
                  </span>
                  {svc.items.map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs text-on-surface">
                      <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-primary hover:text-pure-white text-primary text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>이 서비스 기술상담 및 견적 신청</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
