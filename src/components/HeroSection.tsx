import { ArrowRight, Calculator, Radio, Shield, Globe, Award } from 'lucide-react';
import { PageType } from '../types';

interface HeroSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
  onOpenTelematics: () => void;
  lang: 'KOR' | 'ENG';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenTelematics,
  lang,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-deep-ocean text-pure-white -mt-20 pt-28 pb-16">
      {/* Engineered Atmospheric Cleanroom Glow Gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,#006687_0%,transparent_70%)]" />
      <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-accent-electric/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1320px] mx-auto px-6">
        {/* Breadcrumb / Live Status Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <button
            onClick={onOpenTelematics}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-high/15 hover:bg-surface-container-high/25 backdrop-blur-md cursor-pointer transition-all border border-accent-electric/20 text-left"
            title="실시간 관제 시스템 열기"
          >
            <span className="w-2 h-2 rounded-full bg-accent-electric animate-pulse" />
            <span className="text-[11px] font-bold text-accent-electric uppercase tracking-wider">
              LIVE TELEMETRY SYSTEM
            </span>
            <span className="w-1 h-1 rounded-full bg-surface-variant/40" />
            <span className="text-xs text-surface-container-low">
              {lang === 'KOR'
                ? '전국 17개 공급 영업소 & 탱크로리 실시간 직배송 운용 중'
                : '17 Distribution Hubs & Tanker Fleet Operating Live'}
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-4 text-surface-variant text-[11px] tracking-widest uppercase font-semibold">
            <span className="flex items-center gap-1">
              <Shield size={13} className="text-accent-electric" />
              KGS 8대 권역 무사고 4,820일
            </span>
            <span>·</span>
            <span>ISO 9001 / 14001 / 45001</span>
          </div>
        </div>

        {/* Main Asymmetric Headline & Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Badges Cluster */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-container text-on-primary text-[11px] font-bold tracking-wider uppercase">
                1974년 설립 이래 반세기 역사
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high/15 text-secondary-fixed text-[11px] font-bold tracking-wider uppercase">
                전국 안전 운송 인프라 & 실시간 관제
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high/15 text-accent-electric text-[11px] font-bold tracking-wider uppercase">
                고부가가치형 가스 솔루션 선도
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-pure-white tracking-tight leading-[1.18]">
              가스 설계부터 공급, 유지까지<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
                전 공정을 아우르는 토탈 솔루션
              </span>
            </h1>

            <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
              보이지 않는 에너지를 통해 사람들의 삶을 따뜻하게 연결합니다. 언제나 그 자리에, 조용히 그리고 변함없이 (주)MS가스는 오늘도 첨단 대한민국 산업과 당신의 일상을 굳건히 지키고 있습니다.
            </p>

            {/* Interactive Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('products-catalog')}
                className="inline-flex items-center gap-2 bg-accent-electric hover:bg-secondary-fixed-dim text-deep-ocean font-bold text-xs sm:text-sm px-5 py-3 rounded-lg shadow-xl shadow-accent-electric/20 transition-all duration-300"
              >
                <span>{lang === 'KOR' ? '제품 및 솔루션 보기' : 'View Products & Solutions'}</span>
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-surface-container-high/20 hover:bg-surface-container-high/30 text-pure-white font-semibold text-xs sm:text-sm px-4 py-3 rounded-lg transition-all duration-300 border border-surface-variant/20"
              >
                <span className="material-symbols-outlined text-[20px]">calculate</span>
                <span>{lang === 'KOR' ? '온라인 견적 문의' : 'Online Quote'}</span>
              </button>

              <a
                href="#network-section"
                className="inline-flex items-center gap-2 text-primary-fixed hover:text-pure-white text-xs sm:text-sm px-3 py-3 transition-colors font-medium"
              >
                <span className="material-symbols-outlined text-[18px]">hub</span>
                <span>{lang === 'KOR' ? '전국 공급 네트워크 (8대 권역)' : 'Nationwide Network (8 Hubs)'}</span>
              </a>
            </div>

            {/* Micro Quick Facts */}
            <div className="grid grid-cols-3 gap-4 pt-3 mt-2 bg-surface-container-high/10 rounded-xl p-4 backdrop-blur-md border border-surface-glass/10">
              <div>
                <span className="block text-[11px] font-bold text-surface-variant uppercase tracking-wider">
                  ANNUAL REVENUE
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-pure-white">
                  935억+
                </span>
                <span className="block text-[11px] text-surface-variant/80 mt-0.5">
                  2024 GAAP 기준 달성
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-surface-variant uppercase tracking-wider">
                  DISTRIBUTION
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-accent-electric">
                  17개소
                </span>
                <span className="block text-[11px] text-surface-variant/80 mt-0.5">
                  전국 거점 직영 공급망
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-bold text-surface-variant uppercase tracking-wider">
                  GLOBAL EXPORTS
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-secondary-fixed">
                  10개국
                </span>
                <span className="block text-[11px] text-surface-variant/80 mt-0.5">
                  아시아·중동 초저온망
                </span>
              </div>
            </div>
          </div>

          {/* Hero Graphic Showcase (Industrial Tanker Fleet & Control Center Visual) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-glass/10 backdrop-blur-md p-1.5 border border-surface-glass/15">
              <div className="relative w-full h-[400px] sm:h-[440px] rounded-xl overflow-hidden bg-deep-ocean">
                <img
                  className="w-full h-full object-cover"
                  alt="MS Gas Industrial Tanker Fleet"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJZhjKl05B_JeHqTDiU0EzGWYiot3J3kfakxulVrdxoZqTdBjaC_keXQ7G1oOsn4OD5HwoLGPJ_dTj6EoJmH1xH3x3Z7SAmu0nv737wECB2FnggEOR01XnQx1yEXNBwcbOBL8vgpULrBNFwgqomzIFhHEPP4QZh4xWyC9kfnR_6ROEVTnTfdfcQzYVVpdU8SyEorgjMpZySD4h2X6hFYB-qCJKiEeZkt8mpFvmKrXHiWhQiKH4gEvv"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-transparent to-transparent" />

                {/* Floating Live Telemetry Overlay Card */}
                <button
                  onClick={onOpenTelematics}
                  className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-deep-ocean/92 backdrop-blur-md text-pure-white shadow-2xl border border-secondary/40 text-left cursor-pointer hover:border-accent-electric transition-all group"
                  title="클릭하여 실시간 탱크로리 관제 콘솔 열기"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-accent-electric animate-ping" />
                      <span className="text-[11px] font-bold text-accent-electric uppercase tracking-wider group-hover:underline">
                        REALTIME DISPATCH RADAR
                      </span>
                    </div>
                    <span className="text-[11px] text-surface-variant font-medium">정시 도착율 99.8%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-surface-container-low">
                    <span>울산·여수·대산 중화학 거점 항시 대기</span>
                    <span className="text-accent-electric font-bold flex items-center gap-1">
                      <span>GPS TRACKED</span>
                      <Radio size={14} className="animate-pulse" />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
