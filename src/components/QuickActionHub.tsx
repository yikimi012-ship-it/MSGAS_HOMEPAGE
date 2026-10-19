import React from 'react';
import { PageType } from '../types';

interface QuickActionHubProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
}

export const QuickActionHub: React.FC<QuickActionHubProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  return (
    <section className="w-full py-12 sm:py-16 bg-deep-ocean text-pure-white border-t border-border-dark/60">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold text-accent-electric uppercase tracking-widest block mb-1">
            DIRECT B2B ACCESS HUB
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-pure-white">
            MS가스 핵심 고객지원 서비스 바로가기
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 1. 회사소개 */}
          <div
            onClick={() => onNavigate('company-overview')}
            className="group p-5 rounded-2xl bg-surface-glass/5 backdrop-blur-md hover:bg-surface-glass/15 transition-all duration-300 flex items-center justify-between cursor-pointer border border-border-dark/60"
          >
            <div>
              <span className="text-base font-bold text-pure-white group-hover:text-accent-electric block mb-0.5 transition-colors">
                회사소개
              </span>
              <span className="text-xs text-surface-variant">MS가스 비전과 대표인사말</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-accent-electric group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[26px]">corporate_fare</span>
            </div>
          </div>

          {/* 2. 온라인 문의 */}
          <div
            onClick={onOpenQuote}
            className="group p-5 rounded-2xl bg-surface-glass/5 backdrop-blur-md hover:bg-surface-glass/15 transition-all duration-300 flex items-center justify-between cursor-pointer border border-border-dark/60"
          >
            <div>
              <span className="text-base font-bold text-pure-white group-hover:text-accent-electric block mb-0.5 transition-colors">
                온라인 문의
              </span>
              <span className="text-xs text-surface-variant">신속한 맞춤 상담 및 납품 견적</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-accent-electric group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[26px]">forum</span>
            </div>
          </div>

          {/* 3. 새로운 소식 */}
          <div
            onClick={() => onNavigate('customer-support')}
            className="group p-5 rounded-2xl bg-surface-glass/5 backdrop-blur-md hover:bg-surface-glass/15 transition-all duration-300 flex items-center justify-between cursor-pointer border border-border-dark/60"
          >
            <div>
              <span className="text-base font-bold text-pure-white group-hover:text-accent-electric block mb-0.5 transition-colors">
                새로운 소식
              </span>
              <span className="text-xs text-surface-variant">입찰 공고, 고지 및 보도자료</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-accent-electric group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[26px]">campaign</span>
            </div>
          </div>

          {/* 4. 오시는 길 */}
          <div
            onClick={() => onNavigate('company-overview')}
            className="group p-5 rounded-2xl bg-surface-glass/5 backdrop-blur-md hover:bg-surface-glass/15 transition-all duration-300 flex items-center justify-between cursor-pointer border border-border-dark/60"
          >
            <div>
              <span className="text-base font-bold text-pure-white group-hover:text-accent-electric block mb-0.5 transition-colors">
                오시는 길
              </span>
              <span className="text-xs text-surface-variant">지역별 17개 영업지점 안내</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary-container/40 flex items-center justify-center text-accent-electric group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[26px]">location_on</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
