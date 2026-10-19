import React, { useState } from 'react';
import { Search, Filter, ShieldCheck, ArrowRight, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { GAS_PRODUCTS } from '../../data/mockData';
import { GasProduct } from '../../types';

interface ProductsCatalogPageProps {
  onSelectProduct: (product: GasProduct) => void;
  onOpenQuote: (gasId?: string) => void;
  onOpenMsds: (casNo?: string) => void;
}

export const ProductsCatalogPage: React.FC<ProductsCatalogPageProps> = ({
  onSelectProduct,
  onOpenQuote,
  onOpenMsds,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: '전체 품목' },
    { id: 'industrial', label: '산업용 가스' },
    { id: 'fuel', label: '연료용 가스' },
    { id: 'specialty', label: '특수 가스 (99.999%)' },
    { id: 'medical', label: '의료용 가스 (GMP)' },
    { id: 'standard', label: '표준 가스 (Standard)' },
  ];

  const filteredProducts = GAS_PRODUCTS.filter((prod) => {
    const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
    const matchesQuery =
      prod.nameKo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.chemicalFormula.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-surface">
      {/* Subpage Header */}
      <section className="bg-deep-ocean text-pure-white py-16 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            HIGH-PURITY GAS CATALOG
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            전 산업군을 아우르는<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pure-white via-primary-fixed to-accent-electric">
              초고순도 가스 종합 솔루션
            </span>
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            반도체 정밀 공정용 6N 초순도 가스부터 대용량 조선·제철 현장용 벌크 액화가스, 식약처 GMP 의료용 산소까지 엄격한 품질 규격으로 공급합니다.
          </p>
        </div>
      </section>

      {/* Catalog Filter & Controls */}
      <section className="py-8 bg-surface-container-low border-b border-border-subtle sticky top-20 z-20 backdrop-blur-md">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container-lowest rounded-xl border border-border-subtle w-full md:w-auto overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-pure-white shadow-xs'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 text-on-surface-variant" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="가스명, 화학식(N2, O2 등) 검색..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 max-w-[1320px] mx-auto px-6">
        <div className="flex items-center justify-between mb-6 text-xs text-on-surface-variant">
          <span>총 <strong>{filteredProducts.length}</strong>개의 가스 품목이 검색되었습니다.</span>
          <button
            onClick={() => onOpenQuote()}
            className="text-secondary font-bold hover:underline flex items-center gap-1"
          >
            <span>대량 납품 및 커스텀 배합 문의</span>
            <ArrowRight size={13} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div
              key={prod.id}
              className="group flex flex-col justify-between p-5 rounded-2xl bg-surface-container-lowest border border-border-subtle hover:border-secondary hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Image & Badge */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-4 bg-surface-variant">
                  <img
                    src={prod.imageUrl}
                    alt={prod.nameKo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded-md bg-deep-ocean/90 text-pure-white text-[10px] font-bold">
                      {prod.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-surface-glass/90 backdrop-blur-md text-primary text-xs font-mono font-bold">
                    {prod.chemicalFormula}
                  </div>
                </div>

                {/* Title & Purity */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="text-[10px] font-bold text-secondary uppercase block">
                      {prod.categoryLabel}
                    </span>
                    <h3 className="text-base font-bold text-primary group-hover:text-secondary transition-colors">
                      {prod.nameKo}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-secondary bg-surface-container px-2 py-0.5 rounded shrink-0">
                    {prod.purity}
                  </span>
                </div>
                <p className="text-[11px] text-on-surface-variant/80 font-mono mb-2">
                  CAS: {prod.casNo}
                </p>

                <p className="text-xs text-on-surface-variant line-clamp-2 mb-4 leading-relaxed">
                  {prod.description}
                </p>

                {/* Supply Types */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {prod.specs.supplyTypes.map((type, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded bg-surface-container text-on-surface font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-surface-variant/50 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(prod)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-primary bg-surface-container-low hover:bg-surface-container transition-colors flex items-center gap-1"
                >
                  <Layers size={13} className="text-secondary" />
                  <span>상세 사양</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => onOpenMsds(prod.casNo)}
                    className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                    title="MSDS 다운로드"
                  >
                    <FileText size={16} />
                  </button>
                  <button
                    onClick={() => onOpenQuote(prod.id)}
                    className="px-3.5 py-2 rounded-lg text-xs font-bold text-pure-white bg-primary hover:bg-secondary transition-colors shadow-xs"
                  >
                    견적 요청
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
