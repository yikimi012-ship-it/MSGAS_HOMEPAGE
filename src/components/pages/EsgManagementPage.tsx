import React from 'react';
import { Leaf, ShieldCheck, HeartHandshake, Award, FileText, CheckCircle, ArrowRight } from 'lucide-react';

interface EsgManagementPageProps {
  onOpenQuote: () => void;
}

export const EsgManagementPage: React.FC<EsgManagementPageProps> = ({ onOpenQuote }) => {
  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-deep-ocean text-pure-white py-16 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            SUSTAINABILITY & ESG MANAGEMENT
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            탄소중립 시대를 여는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
              친환경 에너지와 지속가능경영
            </span>
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            (주)MS가스는 환경(E), 사회적 책임(S), 투명 지배구조(G)를 경영의 최우선 핵심 축으로 삼아, 무탄소 수소·암모니아 에너지 인프라 구축과 지속가능한 사회를 선도합니다.
          </p>
        </div>
      </section>

      {/* Featured Marquee: Ulsan Ammonia TTS Bunkering R&D */}
      <section className="py-16 max-w-[1320px] mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary via-deep-ocean to-tertiary text-pure-white border border-secondary/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-accent-electric text-deep-ocean text-xs font-bold uppercase tracking-wider inline-block">
                NATIONAL STRATEGIC R&D
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-pure-white leading-tight">
                울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 실증R&D』 주관
              </h2>
              <p className="text-xs sm:text-sm text-surface-variant leading-relaxed">
                국제해사기구(IMO)의 2050 온실가스 넷제로 규제에 선제 대응하여, 기존 화석연료를 대체할 무탄소 청정 선박 연료인 암모니아를 탱크로리에서 선박으로 직공급하는 Truck-to-Ship(TTS) 벙커링 시스템 및 안전 표준을 주관 개발하고 있습니다.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-surface-glass/10 border border-border-dark/60">
                  <span className="text-accent-electric font-bold block mb-1">친환경 선박 연료 공급</span>
                  <p className="text-surface-variant">암모니아 혼소/전소 추진 선박 전용 초저온 직배송 기술 확립</p>
                </div>
                <div className="p-3 rounded-xl bg-surface-glass/10 border border-border-dark/60">
                  <span className="text-accent-electric font-bold block mb-1">안전 기준(Code) 표준화</span>
                  <p className="text-surface-variant">국내 최초 암모니아 벙커링 KGS 안전 기준 및 제3자 HAZOP 검증</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-lg border border-border-dark">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHc7WXLyyRnS8omy3zW0mieLftkYAxmIRY7mqR1Hp2O0d82hfO3RHfXBafcLFK3dsMs5pOaRnXV1au54rWrmV3ED6hH6M45RtaQ8TXOnrav40FI0jbBoXOBXlt9BuY-wf4A6kI3hQC0aHZgclEp0qRqSDrP5w3j5nwcCm1uDRsWwGEi4BR6qjoKqy58kCHAaP3hVTh_FAq4PWR8qDF6VyuGw2k66CZBlOFi2M604byRKLWacwTzB0Z"
                alt="친환경 암모니아 수소 가스 인프라"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3 ESG Pillars */}
      <section className="py-12 bg-surface-container-low border-t border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              ESG FRAMEWORK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              MS가스 지속가능경영 3대 핵심 체계
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Environment */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-border-subtle shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xl">
                E
              </div>
              <h3 className="text-lg font-bold text-primary">환경경영 (Environmental)</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                공정 배출 온실가스 감축, 에너지 효율 설비 도입, 친환경 청정 가스(Flamex, 수소, 암모니아) 전환 보급을 통해 국가 탄소중립 로드맵에 적극 동참합니다.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface pt-2 border-t border-surface-variant/40">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600" />
                  <span>ISO 14001 환경경영체제 100% 갱신</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-emerald-600" />
                  <span>충남도지사 탄소중립 우수 기여 표창 수상</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-border-subtle shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl">
                S
              </div>
              <h3 className="text-lg font-bold text-primary">사회적 책임 (Social)</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                &lsquo;안전 최우선&rsquo;과 사람 중심 가치를 바탕으로 임직원과 협력업체 모두가 안심할 수 있는 무재해 사업장을 구축하고 지역사회 상생을 실천합니다.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface pt-2 border-t border-surface-variant/40">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-600" />
                  <span>ISO 45001 안전보건경영시스템 인증</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-blue-600" />
                  <span>전국 8대 권역 무재해 4,820일 연속 달성</span>
                </li>
              </ul>
            </div>

            {/* Governance */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-border-subtle shadow-md space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xl">
                G
              </div>
              <h3 className="text-lg font-bold text-primary">투명 윤리경영 (Governance)</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                투명한 회계 및 입찰 공시 제도 운용, 준법지원 컴플라이언스 체계 확립으로 건전한 지배구조와 높은 기업 신뢰도를 유지합니다.
              </p>
              <ul className="space-y-1.5 text-xs text-on-surface pt-2 border-t border-surface-variant/40">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" />
                  <span>GAAP 회계 기준 정기 외부감사 및 공시</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-purple-600" />
                  <span>공정거래 및 윤리준법 서약제 시행</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
