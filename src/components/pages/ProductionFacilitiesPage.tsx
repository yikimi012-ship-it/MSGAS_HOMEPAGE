import React from 'react';
import { Radio, Truck, Layers, Cpu, ShieldAlert, CheckCircle, ArrowRight } from 'lucide-react';

interface ProductionFacilitiesPageProps {
  onOpenTelematics: () => void;
  onOpenQuote: () => void;
}

export const ProductionFacilitiesPage: React.FC<ProductionFacilitiesPageProps> = ({
  onOpenTelematics,
  onOpenQuote,
}) => {
  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-deep-ocean text-pure-white py-16 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            STATE-OF-THE-ART INFRASTRUCTURE
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            초저온 진공 저장부터 스마트 관제까지<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
              첨단 생산설비 및 스마트 물류 인프라
            </span>
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            무재해 무중단 생산 공급을 위해 최첨단 자동화 충전 라인, 3중 안전 인터록 시스템, 그리고 전국을 실시간으로 추적하는 GPS 텔레메트리 관제 센터를 운영하고 있습니다.
          </p>
        </div>
      </section>

      {/* Facilities Deep Dive Grid */}
      <section className="py-16 max-w-[1320px] mx-auto px-6 space-y-16">
        {/* Facility 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-xl border border-border-subtle bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNCpaXBFPOeEAoRUaPCF2lTgwWcYOlwuH4akEX2lWYT0VTbSrJynH3h2iqM2qMDmGN_NKafVOe_74g0szrfCBbjhBAyHJX2fS2Hhm_xzn5OkFdvnLxPU-m-a4QJX8krW4vGY4Sx_jXWwiTFjGo2XxuEy8En5glliCfXadFCQpZGCTpBtedJkZ0iQADNe8NAyXZolOJKLT-UlozW_oFaR0_ihCGjS4d3fDZ11I28K3Q_LXA55YlqQG"
              alt="초저온 진공 단열 탱크"
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
              FACILITY INFRASTRUCTURE 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              초저온 진공 단열 탱크 & 자동 충전 매니폴드
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              영하 196°C의 초저온 액화질소 및 산소, 아르곤을 보관하기 위해 고진공 다층 단열(Super Insulation) 공법이 적용된 초대형 구형/수직형 저장탱크를 보유하고 있습니다.
            </p>
            <div className="space-y-2 text-xs text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>총 1,800톤 규모의 전국 초저온 액화가스 전략 비축 탱크 운용</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>실린더 봄베 12레인 자동 충전 매니폴드로 일일 3,500병 이상 무인 안전 충전</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>잔류 가스 배기 및 진공 배기(Evacuation) 전처리 설비 완비</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facility 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 space-y-4">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
              FACILITY INFRASTRUCTURE 02
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
              초고순도 가스 크로마토그래피(GC) 분석 시스템
            </h2>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              반도체 및 나노 전자재료 공정에서는 PPB 단위의 미량 불순물도 수율에 결정적 영향을 미칩니다. MS가스 기술연구원은 최첨단 검출기가 탑재된 가스 크로마토그래피를 통해 전 롯트 전수 검사를 실행합니다.
            </p>
            <div className="space-y-2 text-xs text-on-surface">
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>Agilent / Shimadzu 최신 정밀 가스 크로마토그래피(GC) 6기 가동</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>미량 탄화수소, 일산화탄소, 산소, 수분 0.1 PPB 한계 검출 역량</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={15} className="text-secondary shrink-0" />
                <span>KOLAS 시험성적서 및 전자동 COA(시험성적서) 발행 연동</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl border border-border-subtle bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3zcloTxtk5_yy8Rw82KgO4MRLdq6mTtwlgnpxIF4JbT6GfMfhT3tO1CEWxLDKy5gtzYVZHklyiKmQ6aL8n3aK7poj1ma10lnKi6AgIdtJAHmreCpiKUmA6YOlvqBET35r-IrTUQxTF88FBeWMr3BTFVYl8wte2_wZlaNmBq7StTQTJQj9QkaIYWbKNQVbSgieA-PBpmAltWuOQVAbc04a7woTNuGClj2uSk5yeL6Fkq0KXo23sLgq"
              alt="초고순도 가스 크로마토그래피 분석기"
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        {/* Facility 3 & Telematics Live Hub */}
        <div className="p-8 sm:p-10 rounded-3xl bg-deep-ocean text-pure-white border border-secondary/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-electric/20 text-accent-electric text-xs font-bold uppercase tracking-wider">
                <Radio size={14} className="animate-pulse" />
                <span>24/7 CENTRAL LOGISTICS CONTROL</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-pure-white">
                스마트 플릿 텔레메트리 관제 콘솔
              </h2>
              <p className="text-xs sm:text-sm text-surface-variant max-w-2xl leading-relaxed">
                전국 17개 거점과 연결된 100여 대의 초저온 진공 탱크로리는 GPS, 이동 중 탱크 압력, 액면 레벨, 단열 온도 데이터를 실시간으로 본사 관제 센터로 전송하여 안전한 정시 직배송을 완수합니다.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={onOpenTelematics}
                  className="px-6 py-3 rounded-xl bg-accent-electric hover:bg-secondary-fixed-dim text-deep-ocean font-bold text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
                >
                  <Radio size={16} />
                  <span>실시간 관제 레이더 콘솔 열기</span>
                </button>
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-3 rounded-xl bg-surface-glass/10 hover:bg-surface-glass/20 text-pure-white font-semibold text-sm transition-all border border-border-dark"
                >
                  직영 탱크로리 배송 견적 문의
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden border border-border-dark/60 bg-surface-glass/5 p-4 space-y-3">
              <span className="text-xs font-bold text-accent-electric uppercase tracking-wider block">
                관제 현황 지표
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between py-1 border-b border-border-dark/40">
                  <span className="text-surface-variant">정시 도착율</span>
                  <span className="font-bold text-accent-electric font-mono">99.8%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-dark/40">
                  <span className="text-surface-variant">KGS 무사고 일수</span>
                  <span className="font-bold text-emerald-400 font-mono">4,820일</span>
                </div>
                <div className="flex justify-between py-1 border-b border-border-dark/40">
                  <span className="text-surface-variant">긴급 차단 비상 대응</span>
                  <span className="font-bold text-pure-white font-mono">0.1초</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
