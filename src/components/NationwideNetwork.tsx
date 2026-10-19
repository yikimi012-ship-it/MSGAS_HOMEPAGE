import React, { useState } from 'react';
import { MapPin, Phone, Building2, Truck, ShieldCheck, ChevronRight } from 'lucide-react';
import { NETWORK_BRANCHES } from '../data/mockData';
import { NetworkBranch, PageType } from '../types';

interface NationwideNetworkProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
}

export const NationwideNetwork: React.FC<NationwideNetworkProps> = ({
  onNavigate,
  onOpenQuote,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [activeBranch, setActiveBranch] = useState<NetworkBranch | null>(NETWORK_BRANCHES[0]);

  const filteredBranches = selectedRegion === 'all'
    ? NETWORK_BRANCHES
    : NETWORK_BRANCHES.filter((b) => b.region === selectedRegion);

  return (
    <section className="relative w-full py-16 sm:py-24 bg-deep-ocean text-pure-white overflow-hidden" id="network-section">
      {/* Fluid Wave / Pipeline Decorative SVG */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg
          className="w-full h-full object-cover"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1440 400"
        >
          <path
            d="M0,192L48,181.3C96,171,192,149,288,165.3C384,181,480,235,576,240C672,245,768,203,864,170.7C960,139,1056,117,1152,122.7C1248,128,1344,160,1392,176L1440,192L1440,400L1392,400C1344,400,1248,400,1152,400C1056,400,960,400,864,400C768,400,672,400,576,400C480,400,384,400,288,400C192,400,96,400,48,400L0,400Z"
            fill="url(#wave-gradient)"
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#006687" />
              <stop offset="50%" stopColor="#0AE2FF" />
              <stop offset="100%" stopColor="#00334d" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-[1320px] mx-auto px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-3 border border-accent-electric/30">
            <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
            <span className="text-[11px] font-bold text-accent-electric tracking-widest uppercase">
              NATIONWIDE INFRASTRUCTURE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-pure-white tracking-tight leading-tight">
            전국적인 네트워크를 통한<br />
            유기적인 업무협력을 실현합니다.
          </h2>
          <p className="text-xs sm:text-sm text-surface-variant mt-3 leading-relaxed">
            부산 본사를 필두로 경기, 충청, 영남, 호남 등 대한민국 산업벨트 전역을 촘촘히 잇는 독보적인 물류망을 가동합니다.
          </p>
        </div>

        {/* 4 High-Impact Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {/* Metric 1 */}
          <div className="p-6 rounded-2xl bg-surface-glass/5 backdrop-blur-xl hover:bg-surface-glass/10 transition-colors text-center border border-border-dark/60">
            <span className="text-[11px] font-bold text-secondary-fixed tracking-wider uppercase block mb-1">
              REGIONAL HUBS
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-pure-white">8</span>
              <span className="text-lg font-bold text-accent-electric">개</span>
            </div>
            <span className="block text-sm font-semibold text-surface-container-low mt-2">
              주요 권역 지역본부
            </span>
            <span className="block text-xs text-surface-variant/80 mt-1">
              수도권·영남·호남·충청권 망
            </span>
          </div>

          {/* Metric 2 */}
          <div className="p-6 rounded-2xl bg-surface-glass/5 backdrop-blur-xl hover:bg-surface-glass/10 transition-colors text-center border border-border-dark/60">
            <span className="text-[11px] font-bold text-secondary-fixed tracking-wider uppercase block mb-1">
              BRANCH OFFICES
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-pure-white">17</span>
              <span className="text-lg font-bold text-accent-electric">개</span>
            </div>
            <span className="block text-sm font-semibold text-surface-container-low mt-2">
              전국 영업소 인프라
            </span>
            <span className="block text-xs text-surface-variant/80 mt-1">
              현장 밀착형 당일 직배송
            </span>
          </div>

          {/* Metric 3 */}
          <div className="p-6 rounded-2xl bg-surface-glass/5 backdrop-blur-xl hover:bg-surface-glass/10 transition-colors text-center border border-border-dark/60">
            <span className="text-[11px] font-bold text-secondary-fixed tracking-wider uppercase block mb-1">
              GLOBAL REACH
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-pure-white">10</span>
              <span className="text-lg font-bold text-accent-electric">개국</span>
            </div>
            <span className="block text-sm font-semibold text-surface-container-low mt-2">
              해외 수출입 무역망
            </span>
            <span className="block text-xs text-surface-variant/80 mt-1">
              글로벌 화학사 제휴 공급
            </span>
          </div>

          {/* Metric 4 */}
          <div className="p-6 rounded-2xl bg-surface-glass/5 backdrop-blur-xl hover:bg-surface-glass/10 transition-colors text-center border border-border-dark/60">
            <span className="text-[11px] font-bold text-secondary-fixed tracking-wider uppercase block mb-1">
              ANNUAL REVENUE
            </span>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl sm:text-5xl font-extrabold text-accent-electric">935</span>
              <span className="text-lg font-bold text-pure-white">억</span>
            </div>
            <span className="block text-sm font-semibold text-surface-container-low mt-2">
              매출액 달성
            </span>
            <span className="block text-xs text-surface-variant/80 mt-1">
              2024 GAAP 회계 기준
            </span>
          </div>
        </div>

        {/* Interactive Network Branch Directory Accordion / Explorer */}
        <div className="rounded-2xl bg-surface-glass/10 backdrop-blur-xl p-6 border border-secondary/30 mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-border-dark">
            <div>
              <h3 className="text-lg font-bold text-pure-white flex items-center gap-2">
                <MapPin className="text-accent-electric" size={18} />
                <span>전국 사업장 & 직영 거점 조회</span>
              </h3>
              <p className="text-xs text-surface-variant mt-0.5">
                원하시는 산업 권역을 선택하시면 해당 지역 전담 지점과 직통 연락처를 확인하실 수 있습니다.
              </p>
            </div>

            {/* Region Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-deep-ocean/80 rounded-xl border border-border-dark">
              {[
                { id: 'all', label: '전체 (17개소)' },
                { id: '영남권', label: '영남권' },
                { id: '수도권', label: '수도권' },
                { id: '충청권', label: '충청권' },
                { id: '호남권', label: '호남권' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedRegion(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedRegion === tab.id
                      ? 'bg-accent-electric text-deep-ocean shadow-md'
                      : 'text-surface-variant hover:text-pure-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
            {filteredBranches.map((branch) => {
              const isSelected = activeBranch?.id === branch.id;
              return (
                <div
                  key={branch.id}
                  onClick={() => setActiveBranch(branch)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'border-accent-electric bg-surface-glass/20 shadow-lg ring-1 ring-accent-electric/50'
                      : 'border-border-dark/60 bg-surface-glass/5 hover:bg-surface-glass/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-bold text-accent-electric px-1.5 py-0.5 rounded bg-accent-electric/20">
                        {branch.region}
                      </span>
                      {branch.isHQ && (
                        <span className="text-[10px] font-bold text-deep-ocean px-1.5 py-0.5 rounded bg-secondary-fixed">
                          본사 / R&D
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-pure-white mb-1">{branch.name}</h4>
                    <p className="text-xs text-surface-variant flex items-start gap-1 mb-2">
                      <MapPin size={13} className="shrink-0 mt-0.5 text-accent-electric" />
                      <span>{branch.address}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-border-dark/50 flex items-center justify-between text-xs">
                    <span className="font-mono text-accent-electric flex items-center gap-1">
                      <Phone size={12} />
                      {branch.tel}
                    </span>
                    <span className="text-[11px] text-surface-variant">
                      탱크: {branch.tankCapacity}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Network Details Trigger Button */}
        <div className="flex justify-center">
          <button
            onClick={() => onNavigate('company-overview')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-pure-white text-deep-ocean hover:bg-secondary-fixed font-bold text-sm transition-all duration-300 shadow-xl cursor-pointer"
          >
            <span>전국 네트워크 & 사업장 위치 자세히보기</span>
            <span className="material-symbols-outlined text-[20px]">map</span>
          </button>
        </div>
      </div>
    </section>
  );
};
