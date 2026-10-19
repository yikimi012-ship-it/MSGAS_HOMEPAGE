import React from 'react';
import { PageType } from '../types';

interface CorePillarsProps {
  onNavigate: (page: PageType) => void;
  onOpenTelematics: () => void;
}

export const CorePillars: React.FC<CorePillarsProps> = ({ onNavigate, onOpenTelematics }) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              CORE FOUNDATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight leading-tight">
              신뢰와 기술력으로 구축한<br />
              MS가스 3대 핵심 경쟁력
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
            반세기 동안 축적된 고압·초저온 특수가스 엔지니어링 노하우를 바탕으로 전방위적 고품질 산업 인프라를 완성합니다.
          </p>
        </div>

        {/* 3 Asymmetric Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div 
            onClick={() => onNavigate('esg-management')}
            className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-border-subtle"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-[28px]">handshake</span>
              </div>
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                PILLAR 01
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                고객과 함께하는 신뢰받는 기업
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                사람 중심과 안전 최우선 가치를 실현하며, 반도체·조선·철강·석유화학 등 고객사의 특수 공정마다 무중단 무결점 공급 파트너십을 다져왔습니다.
              </p>
            </div>
            <div className="pt-6 mt-6 flex items-center gap-1.5 text-secondary font-semibold text-xs border-t border-surface-variant/40">
              <span>안전 보건 경영체계 확립</span>
              <span className="material-symbols-outlined text-[18px]">verified</span>
            </div>
          </div>

          {/* Pillar 2 (Featured / Dark Elevation) */}
          <div 
            onClick={onOpenTelematics}
            className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-deep-ocean text-pure-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden cursor-pointer border border-secondary/30"
          >
            <div className="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-secondary/30 blur-2xl pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent-electric text-deep-ocean flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-[28px]">local_shipping</span>
              </div>
              <span className="text-[11px] font-bold text-accent-electric uppercase tracking-wider block mb-1">
                PILLAR 02 · CORE LOGISTICS
              </span>
              <h3 className="text-xl font-bold text-pure-white mb-2 group-hover:text-accent-electric transition-colors">
                전국적인 가스 운송능력을 지닌 기업
              </h3>
              <p className="text-xs sm:text-sm text-surface-variant leading-relaxed">
                (주)MS가스는 전국을 아우르는 고도화된 운송 인프라와 실시간 모니터링 시스템을 통해, 언제 어디서나 안정적이고 효율적인 가스 공급을 실현합니다.
              </p>
            </div>
            <div className="relative z-10 pt-6 mt-6 flex items-center justify-between text-accent-electric font-semibold text-xs border-t border-border-dark">
              <span>24/7 중앙 통합 관제 지원</span>
              <span className="material-symbols-outlined text-[20px]">sensors</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div 
            onClick={() => onNavigate('products-catalog')}
            className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-border-subtle"
          >
            <div>
              <div className="w-14 h-14 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center mb-6 shadow-md">
                <span className="material-symbols-outlined text-[28px]">biotech</span>
              </div>
              <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block mb-1">
                PILLAR 03
              </span>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                고부가가치형 가스산업을 주도하는 선도적 기업
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                1974년에 설립된 가스 전문제조유통기업으로 산업용, 연료용 가스 등 다성분 정밀 혼합가스 전 품목의 전국적인 유통망과 첨단 합성 인프라를 구축하고 있습니다.
              </p>
            </div>
            <div className="pt-6 mt-6 flex items-center gap-1.5 text-secondary font-semibold text-xs border-t border-surface-variant/40">
              <span>특수·초고순도 다성분 배합</span>
              <span className="material-symbols-outlined text-[18px]">science</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
