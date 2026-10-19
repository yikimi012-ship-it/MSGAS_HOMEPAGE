import React from 'react';
import { X, FileText, CheckCircle2, ShieldCheck, Flame, Layers, ArrowRight } from 'lucide-react';
import { GasProduct } from '../../types';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  onOpenQuote: (gasId: string) => void;
  onOpenMsds: (casNo: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onOpenQuote,
  onOpenMsds,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-border-subtle overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image banner */}
        <div className="relative h-48 bg-deep-ocean text-pure-white overflow-hidden shrink-0">
          <img
            src={product.imageUrl}
            alt={product.nameKo}
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-deep-ocean/60 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-deep-ocean/60 text-pure-white hover:bg-deep-ocean transition-colors"
          >
            <X size={18} />
          </button>

          <div className="absolute bottom-4 left-6 right-6 z-10 flex flex-wrap items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 rounded bg-accent-electric text-deep-ocean text-[11px] font-bold uppercase tracking-wider">
                  {product.badge}
                </span>
                <span className="text-xs font-semibold text-surface-variant">
                  {product.categoryLabel}
                </span>
                <span className="text-xs text-surface-variant/60">·</span>
                <span className="text-xs font-mono text-accent-electric">CAS: {product.casNo}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-pure-white flex items-center gap-2">
                {product.nameKo}
                <span className="text-lg font-mono text-secondary-fixed">({product.chemicalFormula})</span>
              </h2>
              <p className="text-xs text-surface-variant">{product.nameEn}</p>
            </div>
            <div className="text-right">
              <span className="text-[11px] text-surface-variant block uppercase tracking-wider">PURITY SPEC</span>
              <span className="text-xl font-extrabold text-accent-electric">{product.purity}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Overview text */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-1.5">
              PRODUCT OVERVIEW
            </h4>
            <p className="text-sm text-on-surface leading-relaxed">{product.description}</p>
          </div>

          {/* Technical Specifications Grid */}
          <div className="rounded-xl border border-border-subtle bg-surface-container-low p-4">
            <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers size={14} className="text-secondary" />
              <span>기술 및 물리화학적 상세 사양</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs">
              <div className="flex justify-between py-1 border-b border-surface-variant/50">
                <span className="text-on-surface-variant">가스 상태 (State)</span>
                <span className="font-semibold text-on-surface">{product.specs.state}</span>
              </div>
              {product.specs.boilingPoint && (
                <div className="flex justify-between py-1 border-b border-surface-variant/50">
                  <span className="text-on-surface-variant">비점 (Boiling Point)</span>
                  <span className="font-semibold text-primary">{product.specs.boilingPoint}</span>
                </div>
              )}
              {product.specs.fillingPressure && (
                <div className="flex justify-between py-1 border-b border-surface-variant/50">
                  <span className="text-on-surface-variant">충전 압력 (Pressure)</span>
                  <span className="font-semibold text-on-surface">{product.specs.fillingPressure}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-b border-surface-variant/50">
                <span className="text-on-surface-variant">순도 등급 (Purity Grade)</span>
                <span className="font-semibold text-primary">{product.specs.purityGrade}</span>
              </div>
              {product.specs.impurityLevels && (
                <div className="col-span-full flex flex-col py-1 border-b border-surface-variant/50">
                  <span className="text-on-surface-variant mb-0.5">불순물 허용 기준 (Impurity Tolerance)</span>
                  <span className="font-mono text-[11px] text-primary">{product.specs.impurityLevels}</span>
                </div>
              )}
              <div className="col-span-full flex flex-col py-1">
                <span className="text-on-surface-variant mb-0.5">위험물 분류 및 UN 번호</span>
                <span className="font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded inline-block text-[11px]">
                  {product.hazardClass}
                </span>
              </div>
            </div>
          </div>

          {/* Supply formats available */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              공급 형태 및 인프라 (SUPPLY AVAILABILITY)
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.specs.supplyTypes.map((type, idx) => (
                <span
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container text-primary font-medium text-xs border border-surface-variant"
                >
                  <ShieldCheck size={14} className="text-secondary" />
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Applications list */}
          <div>
            <h4 className="text-xs font-bold text-secondary uppercase tracking-widest mb-2">
              주요 산업 적용 분야 (APPLICATION FIELDS)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-lg bg-surface-container-low border border-border-subtle"
                >
                  <CheckCircle2 size={15} className="text-secondary shrink-0 mt-0.5" />
                  <span className="text-on-surface font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quality features */}
          <div className="p-3.5 rounded-xl bg-deep-ocean/5 border border-deep-ocean/10">
            <span className="block text-xs font-bold text-primary mb-1">MS가스 품질 보증 원칙</span>
            <ul className="text-xs text-on-surface-variant space-y-1">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-electric"></span>
                  {feat}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 bg-surface-container border-t border-border-subtle">
          <button
            onClick={() => onOpenMsds(product.casNo)}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-variant text-primary font-semibold text-xs border border-border-subtle transition-colors"
          >
            <FileText size={15} className="text-secondary" />
            <span>MSDS(물질안전보건자료) 열람</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container-high transition-colors"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product.id);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary hover:bg-secondary text-pure-white font-bold text-xs shadow-md transition-all"
            >
              <span>이 품목 온라인 견적 요청</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
