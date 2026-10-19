import React from 'react';
import { GasProduct, PageType } from '../types';
import { GAS_PRODUCTS } from '../data/mockData';

interface ProductsShowcaseProps {
  onSelectProduct: (product: GasProduct) => void;
  onNavigate: (page: PageType) => void;
}

export const ProductsShowcase: React.FC<ProductsShowcaseProps> = ({
  onSelectProduct,
  onNavigate,
}) => {
  // Select key representative products for the 5 categories
  const industrialGas = GAS_PRODUCTS.find((p) => p.category === 'industrial') || GAS_PRODUCTS[0];
  const fuelGas = GAS_PRODUCTS.find((p) => p.category === 'fuel') || GAS_PRODUCTS[4];
  const specialtyGas = GAS_PRODUCTS.find((p) => p.category === 'specialty') || GAS_PRODUCTS[6];
  const medicalGas = GAS_PRODUCTS.find((p) => p.category === 'medical') || GAS_PRODUCTS[9];
  const standardGas = GAS_PRODUCTS.find((p) => p.category === 'standard') || GAS_PRODUCTS[11];

  const showcaseItems = [
    {
      categoryKey: 'industrial',
      badge: 'BULK / CYLINDER',
      title: '산업용 가스',
      subtitle: '산업용 가스 전 품목 (질소 N₂, 산소 O₂, 아르곤 Ar, 이산화탄소 CO₂ 등)',
      bullets: ['초저온 액화가스 벌크 공급', '용접, 절단 및 제조 현장용'],
      productRef: industrialGas,
      imageUrl: industrialGas.imageUrl,
      isSpecial: false,
    },
    {
      categoryKey: 'fuel',
      badge: 'CLEAN FUEL',
      title: '연료용 가스',
      subtitle: '프로판, 프라멕스(Flamex), 에탄, 부탄, 이소부탄 등 청정 고효율 연료',
      bullets: ['고효율 산업용 연소 시스템', '친환경 대체 발열 에너지'],
      productRef: fuelGas,
      imageUrl: fuelGas.imageUrl,
      isSpecial: false,
    },
    {
      categoryKey: 'specialty',
      badge: '99.999% HIGH PURITY',
      title: '특수 가스',
      subtitle: '반도체, 디스플레이, 첨단 2차전지 전자소재 공정용 초고순도 특수가스',
      bullets: ['초미세 전자소재 클린 충전', '극저온 특수 배합 관리'],
      productRef: specialtyGas,
      imageUrl: specialtyGas.imageUrl,
      isSpecial: true,
    },
    {
      categoryKey: 'medical',
      badge: 'GMP CERTIFIED',
      title: '의료용 가스',
      subtitle: '의료용 산소(O₂), 아산화질소(N₂O), 마취가스 등 엄격한 GMP 기준 충족',
      bullets: ['식약처 의약품 제조품질 기준', '대학병원 및 종합의료기관 납품'],
      productRef: medicalGas,
      imageUrl: medicalGas.imageUrl,
      isSpecial: false,
    },
    {
      categoryKey: 'standard',
      badge: 'PRECISION STD',
      title: '표준 가스',
      subtitle: '정밀 분석, 계측기 교정, 시험 연구소용 맞춤형 표준 혼합가스(Standard Gas)',
      bullets: ['PPM, PPB 단위 초정밀 보정', '공인 성적서 발급 보증'],
      productRef: standardGas,
      imageUrl: standardGas.imageUrl,
      isSpecial: false,
    },
  ];

  return (
    <section className="w-full py-16 sm:py-20 bg-surface">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header with Direct Catalog Action */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-1.5 text-secondary text-[11px] font-bold uppercase tracking-widest mb-1">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span>PRODUCTS & GAS SOLUTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              다양한 산업분야를 아우르는 고부가가치형 가스산업
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('products-catalog')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              <span>제품 전체 카탈로그 자세히보기</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* 5 Major Product Category Cards Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {showcaseItems.map((item, idx) => {
            if (item.isSpecial) {
              // Accentuated / Deep Ocean card
              return (
                <div
                  key={idx}
                  onClick={() => onSelectProduct(item.productRef)}
                  className="group flex flex-col justify-between p-4 rounded-2xl bg-deep-ocean text-pure-white hover:bg-primary transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-1 cursor-pointer border border-secondary/40"
                >
                  <div>
                    <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-surface-variant/20">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-accent-electric text-deep-ocean text-[10px] font-bold tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-pure-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-surface-variant mb-3 leading-relaxed">
                      {item.subtitle}
                    </p>
                    <ul className="space-y-1 text-xs text-surface-container-low">
                      {item.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-electric shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 mt-3 flex items-center justify-between text-accent-electric font-semibold text-xs border-t border-border-dark/60">
                    <span>솔루션 상세보기</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </div>
                </div>
              );
            }

            // Normal Card
            return (
              <div
                key={idx}
                onClick={() => onSelectProduct(item.productRef)}
                className="group flex flex-col justify-between p-4 rounded-2xl bg-surface-container-lowest hover:bg-surface-container transition-all duration-300 shadow-xs hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-border-subtle"
              >
                <div>
                  <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4 bg-surface-variant">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-deep-ocean/80 text-pure-white text-[10px] font-bold">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary group-hover:text-secondary mb-1 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
                    {item.subtitle}
                  </p>
                  <ul className="space-y-1 text-xs text-on-surface-variant/80">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-3 flex items-center justify-between text-secondary font-semibold text-xs border-t border-surface-variant/40">
                  <span>상세 규격 보기</span>
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
