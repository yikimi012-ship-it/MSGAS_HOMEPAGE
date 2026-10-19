import React, { useState } from 'react';
import { X, Radio, Navigation, Gauge, Thermometer, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { TELEMETRY_FLEET } from '../../data/mockData';

interface TelematicsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TelematicsModal: React.FC<TelematicsModalProps> = ({ isOpen, onClose }) => {
  const [selectedTankerId, setSelectedTankerId] = useState(TELEMETRY_FLEET[0].id);
  const [isRefreshing, setIsRefreshing] = useState(false);

  if (!isOpen) return null;

  const activeTanker = TELEMETRY_FLEET.find((t) => t.id === selectedTankerId) || TELEMETRY_FLEET[0];

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-deep-ocean text-pure-white rounded-2xl shadow-2xl border border-secondary/30 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-primary/40 border-b border-border-dark">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-accent-electric text-deep-ocean flex items-center justify-center font-bold">
              <Radio size={20} className="animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-accent-electric uppercase tracking-widest">
                  LIVE DISPATCH RADAR & TELEMETRY
                </span>
                <span className="w-2 h-2 rounded-full bg-accent-electric animate-ping" />
              </div>
              <h3 className="font-bold text-lg text-pure-white">
                전국 초저온 탱크로리 중앙 통합 관제 콘솔
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg bg-surface-glass/10 text-surface-variant hover:text-pure-white hover:bg-surface-glass/20 transition-all"
              title="관제 데이터 갱신"
            >
              <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-surface-glass/10 text-surface-variant hover:text-pure-white hover:bg-surface-glass/20 transition-all"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Console layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
          {/* Left: Tanker Fleet List */}
          <div className="lg:col-span-5 p-4 border-r border-border-dark/60 overflow-y-auto space-y-2 bg-deep-ocean/50">
            <div className="flex items-center justify-between text-xs text-surface-variant pb-1">
              <span>운행 플릿 모니터 ({TELEMETRY_FLEET.length}대)</span>
              <span className="text-accent-electric font-semibold">정시도착률 99.8%</span>
            </div>

            {TELEMETRY_FLEET.map((tanker) => (
              <button
                key={tanker.id}
                onClick={() => setSelectedTankerId(tanker.id)}
                className={`w-full p-3 rounded-xl text-left transition-all border ${
                  selectedTankerId === tanker.id
                    ? 'border-accent-electric bg-primary-container/40 shadow-lg'
                    : 'border-border-dark/40 bg-surface-glass/5 hover:bg-surface-glass/10'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5">
                    <Truck size={14} className="text-accent-electric" />
                    <span className="font-bold text-xs text-pure-white">{tanker.vehicleNo}</span>
                  </div>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      tanker.status === '정상 운행중'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : tanker.status === '충전 대기'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : 'bg-accent-electric/20 text-accent-electric border border-accent-electric/40'
                    }`}
                  >
                    {tanker.status}
                  </span>
                </div>
                <p className="text-xs text-secondary-fixed font-medium truncate">{tanker.gasType}</p>
                <div className="flex items-center justify-between text-[11px] text-surface-variant mt-1.5 pt-1 border-t border-border-dark/40">
                  <span className="truncate max-w-[170px]">목적지: {tanker.destination}</span>
                  <span className="text-accent-electric font-mono">{tanker.speed} km/h</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Detailed Telematics telemetry */}
          <div className="lg:col-span-7 p-6 overflow-y-auto space-y-5 bg-gradient-to-br from-primary/20 to-transparent">
            {/* Top Telematics Card */}
            <div className="p-4 rounded-xl bg-surface-glass/10 border border-secondary/30 relative overflow-hidden">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <span className="text-[11px] text-accent-electric uppercase font-bold tracking-wider">
                    VEHICLE TELEMATICS PROFILE
                  </span>
                  <h4 className="text-xl font-extrabold text-pure-white">{activeTanker.vehicleNo}</h4>
                  <p className="text-xs text-surface-variant">{activeTanker.driver}</p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-surface-variant uppercase">CURRENT SPEED</span>
                  <div className="text-2xl font-mono font-extrabold text-accent-electric">
                    {activeTanker.speed} <span className="text-xs text-surface-variant">km/h</span>
                  </div>
                </div>
              </div>

              {/* Status gauges */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-border-dark/60">
                <div className="p-2.5 rounded-lg bg-deep-ocean/80 text-center">
                  <span className="text-[10px] text-surface-variant block uppercase">적재 용량</span>
                  <span className="text-xs font-mono font-bold text-pure-white">{activeTanker.volume}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-deep-ocean/80 text-center">
                  <span className="text-[10px] text-surface-variant block uppercase">탱크 내압</span>
                  <span className="text-xs font-mono font-bold text-emerald-400">{activeTanker.pressure}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-deep-ocean/80 text-center">
                  <span className="text-[10px] text-surface-variant block uppercase">단열 온도</span>
                  <span className="text-xs font-mono font-bold text-accent-electric">{activeTanker.temperature}</span>
                </div>
              </div>
            </div>

            {/* Route & GPS details */}
            <div className="p-4 rounded-xl bg-surface-glass/5 border border-border-dark/60 space-y-3">
              <span className="text-xs font-bold text-surface-container-low uppercase tracking-wider block">
                실시간 운행 경로 및 도착 예정
              </span>
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary-fixed" />
                  <div className="w-0.5 h-8 bg-surface-variant/30 my-0.5" />
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-electric" />
                </div>
                <div className="flex-1 space-y-2 text-xs">
                  <div>
                    <span className="text-[10px] text-surface-variant block">출발지 (Departure)</span>
                    <span className="font-semibold text-pure-white">{activeTanker.departure}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-accent-electric block">목적지 (Destination)</span>
                    <span className="font-semibold text-pure-white">{activeTanker.destination}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-lg bg-deep-ocean/90 border border-accent-electric/20 text-xs">
                <div className="flex items-center gap-2">
                  <Navigation size={14} className="text-accent-electric" />
                  <span>현재 위치: <strong>{activeTanker.gps.locationName}</strong></span>
                </div>
                <span className="font-bold text-accent-electric">{activeTanker.eta}</span>
              </div>
            </div>

            {/* Safety Interlock Check */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-200">
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-emerald-400" />
                <span>3중 안전 밸브 & 긴급 차단 시스템(ESD) 정상 가동 중</span>
              </div>
              <span className="font-mono text-[11px] text-emerald-400">TELEMETRY OK</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 bg-primary/30 border-t border-border-dark text-xs text-surface-variant">
          <span>KGS 및 소방방재청 실시간 위험물 이동관제 표준(Telematics Prot. 4.2) 준수</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-surface-glass/10 hover:bg-surface-glass/20 text-pure-white font-medium transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
