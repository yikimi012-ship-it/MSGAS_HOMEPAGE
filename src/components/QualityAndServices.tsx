import React from 'react';
import { PageType } from '../types';

interface QualityAndServicesProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
}

export const QualityAndServices: React.FC<QualityAndServicesProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Title Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-12">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              R&D & QUALITY ASSURANCE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              지속적인 연구를 통해 품질 개선을 이어갑니다
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2 max-w-2xl leading-relaxed">
              MS가스 R&D 연구소는 정밀 분석 기기와 자동화 검증 시설을 구축하여 초순도 가스의 안정성과 무결성을 실시간 검증합니다.
            </p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={() => onNavigate('technical-services')}
              className="inline-flex items-center gap-2 bg-surface-container-high hover:bg-surface-variant text-primary font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>품질 및 인증현황 자세히보기</span>
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
            </button>
          </div>
        </div>

        {/* Facility & Testing Equipment Carousel Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Facility 1 */}
          <div 
            onClick={() => onNavigate('production-facilities')}
            className="group relative rounded-2xl overflow-hidden bg-surface-container shadow-md cursor-pointer border border-border-subtle"
          >
            <div className="h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNCpaXBFPOeEAoRUaPCF2lTgwWcYOlwuH4akEX2lWYT0VTbSrJynH3h2iqM2qMDmGN_NKafVOe_74g0szrfCBbjhBAyHJX2fS2Hhm_xzn5OkFdvnLxPU-m-a4QJX8krW4vGY4Sx_jXWwiTFjGo2XxuEy8En5glliCfXadFCQpZGCTpBtedJkZ0iQADNe8NAyXZolOJKLT-UlozW_oFaR0_ihCGjS4d3fDZ11I28K3Q_LXA55YlqQG"
                alt="초저온 진공 단열 탱크 및 충전 매니폴드"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-5 bg-surface-container-lowest">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                FACILITY 01
              </span>
              <h4 className="text-sm sm:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                초저온 진공 단열 탱크 및 충전 매니폴드
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                고압 충전 라인의 자동 안전 밸브 차단 및 연속 가스 유량 제어 시스템
              </p>
            </div>
          </div>

          {/* Facility 2 */}
          <div 
            onClick={() => onNavigate('technical-services')}
            className="group relative rounded-2xl overflow-hidden bg-surface-container shadow-md cursor-pointer border border-border-subtle"
          >
            <div className="h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3zcloTxtk5_yy8Rw82KgO4MRLdq6mTtwlgnpxIF4JbT6GfMfhT3tO1CEWxLDKy5gtzYVZHklyiKmQ6aL8n3aK7poj1ma10lnKi6AgIdtJAHmreCpiKUmA6YOlvqBET35r-IrTUQxTF88FBeWMr3BTFVYl8wte2_wZlaNmBq7StTQTJQj9QkaIYWbKNQVbSgieA-PBpmAltWuOQVAbc04a7woTNuGClj2uSk5yeL6Fkq0KXo23sLgq"
                alt="초고순도 가스 크로마토그래피(GC) 분석 시스템"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-5 bg-surface-container-lowest">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                ANALYTICAL R&D
              </span>
              <h4 className="text-sm sm:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                초고순도 가스 크로마토그래피(GC) 분석 시스템
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                미량 불순물(PPB 단위) 정밀 검출 및 다성분 표준 혼합비 실시간 검증
              </p>
            </div>
          </div>

          {/* Facility 3 */}
          <div 
            onClick={() => onNavigate('production-facilities')}
            className="group relative rounded-2xl overflow-hidden bg-surface-container shadow-md cursor-pointer border border-border-subtle"
          >
            <div className="h-64 sm:h-72 w-full overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwG3SPMq-wwNqDqd9SmALx12MUDW9kbRy27qoPi8Z_oFGtrLJMHe47Y9Ey1paHJDQyjPrDY-IY2xNMI0gR00PmSPtS-EMYXJCKIxFdq20p2DlHJjOtIFg_dXxndq7DTRu1oAmQ-Rfc7qQW7jNMygXsdVGPcMUkvPwy_IJ9r80UsF3ZkuaMbgkseyhHbgOHUbdZ1qZy8-F6vaTs5ilr5vO6db_Y_cyBBn5v5TkJFmux-GyX0X9wsF23"
                alt="PLC 기반 중앙 배관 감시 제어반"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-5 bg-surface-container-lowest">
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                CONTROL CAB
              </span>
              <h4 className="text-sm sm:text-base font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                PLC 기반 중앙 배관 감시 제어반
              </h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                압력 변동 및 누출 시 0.1초 내 비상 차단 작동하는 3중 인터록 시스템
              </p>
            </div>
          </div>
        </div>

        {/* 4 Technical Services Grid */}
        <div className="rounded-2xl bg-surface-container-low p-6 sm:p-8 border border-border-subtle">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-primary">
              MS가스 4대 전문 엔지니어링 서비스
            </h3>
            <span className="text-[11px] font-bold text-on-surface-variant tracking-wider uppercase">
              ENGINEERING PROTOCOL
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Service 1 */}
            <div 
              onClick={() => onNavigate('technical-services')}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md transition-shadow cursor-pointer border border-border-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">analytics</span>
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">가스분석 서비스</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  고객사 배관 및 원료 가스의 성분 분석, 미량 수분/산소 분석, 국가공인 성적서 지원
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div 
              onClick={() => onNavigate('technical-services')}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md transition-shadow cursor-pointer border border-border-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">air</span>
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">가스퍼지(Purge) 서비스</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  신규 플랜트 시운전 전 고압 질소(N₂) 퍼지 및 대형 선박·배관 위험물 치환 작업 수행
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div 
              onClick={() => onNavigate('technical-services')}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md transition-shadow cursor-pointer border border-border-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">flight_takeoff</span>
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">수출입 통관 및 물류</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  특수가스 ISO 탱크 컨테이너 국제 위험물 운송(IMDG) 규정 준수 및 안전 통관
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div 
              onClick={() => onNavigate('technical-services')}
              className="p-5 rounded-xl bg-surface-container-lowest shadow-xs hover:shadow-md transition-shadow cursor-pointer border border-border-subtle flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[22px]">shield_with_heart</span>
                </div>
                <h4 className="text-sm font-bold text-primary mb-1">전문 안전관리 컨설팅</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  고압가스안전관리법 법정 정기검사 대행, 위험성평가(HAZOP) 및 방폭 설비 진단
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
