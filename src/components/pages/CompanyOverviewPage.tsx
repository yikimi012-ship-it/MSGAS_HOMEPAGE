import React, { useState } from 'react';
import { Award, Shield, CheckCircle, Clock, MapPin, Phone, Building, ArrowRight } from 'lucide-react';
import { COMPANY_MILESTONES, NETWORK_BRANCHES } from '../../data/mockData';
import { NetworkBranch } from '../../types';

interface CompanyOverviewPageProps {
  onOpenQuote: () => void;
  onSelectBranch: (branch: NetworkBranch) => void;
}

export const CompanyOverviewPage: React.FC<CompanyOverviewPageProps> = ({
  onOpenQuote,
  onSelectBranch,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  const filteredBranches = selectedRegion === 'all'
    ? NETWORK_BRANCHES
    : NETWORK_BRANCHES.filter((b) => b.region === selectedRegion);

  return (
    <div className="w-full bg-surface">
      {/* Subpage Hero Header */}
      <section className="bg-deep-ocean text-pure-white py-16 sm:py-20 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            ABOUT MS GAS CO., LTD.
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            대한민국 산업과 함께 숨쉬어 온<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
              반세기 고압·특수가스 전문기업
            </span>
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            1974년 창립 이래 안전 최우선 원칙과 정밀 기술력을 바탕으로, 반도체·조선·철강·석유화학에서 친환경 수소·암모니아 에너지까지 대한민국 미래 산업의 든든한 동반자가 되어왔습니다.
          </p>
        </div>
      </section>

      {/* CEO Message & Philosophy */}
      <section className="py-16 max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
              CEO GREETING
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary leading-snug">
              &ldquo;보이지 않는 가스 속에 담긴 무한한 가능성으로<br className="hidden sm:inline" />
              고객사의 경쟁력과 안전을 지켜나가겠습니다.&rdquo;
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              <p>
                안녕하십니까, (주)MS가스 홈페이지를 찾아주신 고객 여러분 진심으로 환영합니다.
              </p>
              <p>
                당사는 1974년 창업 이후 반세기 동안 오직 고압가스 및 초고순도 특수가스 공급 외길을 걸어왔습니다. 울산, 여수, 대산 등 국가 기간산업 벨트를 비롯해 전국 17개 거점 직영 공급망을 구축하고, 24시간 실시간 GPS 및 안전 텔레메트리 관제를 통해 단 한 번의 중단 없는 안정적인 가스 공급을 실현하고 있습니다.
              </p>
              <p>
                최근에는 은탑산업훈장 수훈과 함께 울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축 R&D를 주관하며, 미래 탄소중립과 청정에너지 전환의 선두에 서 있습니다.
              </p>
              <p className="font-semibold text-primary pt-2">
                (주)MS가스 대표이사 전 청 민
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-surface-container-low border border-border-subtle shadow-lg space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-surface-variant">
                <div className="w-12 h-12 rounded-xl bg-primary text-pure-white flex items-center justify-center">
                  <Award size={24} className="text-accent-electric" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-primary">정부포상 은탑산업훈장 수훈</h4>
                  <p className="text-xs text-on-surface-variant">국가 기간산업 기여 및 무사고 공급망 혁신</p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">KGS 표준 준수 무사고 공급</strong>
                    <p className="text-on-surface-variant">전국 8대 권역 4,800일 이상 연속 무재해 기록 경신 중</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">ISO 통합 안전보건 인증</strong>
                    <p className="text-on-surface-variant">ISO 9001(품질), ISO 14001(환경), ISO 45001(안전보건)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-secondary shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-primary">초고순도 특수가스 합성 인프라</strong>
                    <p className="text-on-surface-variant">반도체 6N(99.9999%) 초미세 전자소재 분석 역량 확보</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 50 Years Milestone Timeline */}
      <section className="py-16 bg-surface-container-lowest border-y border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              OUR HISTORY & LEGACY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              (주)MS가스가 걸어온 50년의 역사
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
              대한민국 산업 성장의 역사와 궤를 같이하며 성장해 온 주요 발자취입니다.
            </p>
          </div>

          <div className="relative border-l-2 border-secondary/30 ml-4 md:ml-32 space-y-8 pl-6 sm:pl-8">
            {COMPANY_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-4 h-4 rounded-full bg-pure-white border-4 border-secondary group-hover:border-accent-electric transition-colors" />
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                  <span className="text-lg sm:text-xl font-extrabold text-primary font-mono">
                    {item.year}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nationwide Network & Map Directory (오시는 길) */}
      <section className="py-16 max-w-[1320px] mx-auto px-6" id="locations">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              LOCATIONS & CONTACTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              전국 사업장 및 오시는 길
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              전국 17개 공급 영업소에서 고객사 현장 밀착형 당일 직배송을 지원합니다.
            </p>
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container rounded-xl border border-border-subtle">
            {['all', '영남권', '수도권', '충청권', '호남권'].map((reg) => (
              <button
                key={reg}
                onClick={() => setSelectedRegion(reg)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedRegion === reg
                    ? 'bg-primary text-pure-white shadow-xs'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {reg === 'all' ? '전체' : reg}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              onClick={() => onSelectBranch(branch)}
              className="p-5 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-secondary hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-bold text-secondary px-2 py-0.5 rounded bg-surface-container">
                    {branch.region}
                  </span>
                  {branch.isHQ && (
                    <span className="text-[10px] font-bold text-pure-white px-2 py-0.5 rounded bg-primary">
                      본사
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-bold text-primary mb-1">{branch.name}</h3>
                <p className="text-xs text-on-surface-variant flex items-start gap-1 mb-2">
                  <MapPin size={13} className="shrink-0 mt-0.5 text-secondary" />
                  <span>{branch.address}</span>
                </p>
                <div className="text-[11px] text-on-surface-variant/80 space-y-0.5 pb-3">
                  <p>책임자: {branch.manager}</p>
                  <p>저장용량: {branch.tankCapacity} / 플릿: {branch.fleetCount}대</p>
                </div>
              </div>

              <div className="pt-2 border-t border-surface-variant flex items-center justify-between text-xs">
                <span className="font-mono font-bold text-primary flex items-center gap-1">
                  <Phone size={12} className="text-secondary" />
                  {branch.tel}
                </span>
                <span className="text-secondary text-[11px] font-semibold flex items-center gap-0.5">
                  상세 <ArrowRight size={12} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
