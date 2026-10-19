import React, { useState } from 'react';
import { X, Search, FileText, Package, MapPin, ArrowRight } from 'lucide-react';
import { GAS_PRODUCTS, NOTICES, NETWORK_BRANCHES } from '../../data/mockData';
import { GasProduct, NoticeItem, NetworkBranch } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: GasProduct) => void;
  onSelectNotice: (notice: NoticeItem) => void;
  onSelectBranch: (branch: NetworkBranch) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectNotice,
  onSelectBranch,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();

  const matchingProducts = trimmed
    ? GAS_PRODUCTS.filter(
        (p) =>
          p.nameKo.toLowerCase().includes(trimmed) ||
          p.nameEn.toLowerCase().includes(trimmed) ||
          p.chemicalFormula.toLowerCase().includes(trimmed) ||
          p.categoryLabel.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingNotices = trimmed
    ? NOTICES.filter(
        (n) =>
          n.title.toLowerCase().includes(trimmed) ||
          n.summary.toLowerCase().includes(trimmed) ||
          n.category.toLowerCase().includes(trimmed)
      )
    : [];

  const matchingBranches = trimmed
    ? NETWORK_BRANCHES.filter(
        (b) =>
          b.name.toLowerCase().includes(trimmed) ||
          b.region.toLowerCase().includes(trimmed) ||
          b.address.toLowerCase().includes(trimmed)
      )
    : [];

  const totalResults = matchingProducts.length + matchingNotices.length + matchingBranches.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-deep-ocean/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-border-subtle overflow-hidden max-h-[80vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-border-subtle flex items-center gap-3 bg-surface-container-low">
          <Search size={20} className="text-secondary shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="가스 품목(질소, 산소, 실란 등), 입찰공고, 지역영업소 검색..."
            className="w-full bg-transparent text-sm sm:text-base text-primary placeholder:text-on-surface-variant/60 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-on-surface-variant hover:text-primary px-2 py-1"
            >
              지우기
            </button>
          )}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {!trimmed ? (
            <div className="py-8 text-center space-y-3">
              <p className="text-xs text-on-surface-variant">인기 검색 태그를 눌러 바로 찾아보세요.</p>
              <div className="flex flex-wrap justify-center gap-2">
                {['초고순도 질소', '암모니아 벙커링', '의료용 산소', '모노실란 SiH4', '부산 본사', 'HAZOP 입찰'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 rounded-full bg-surface-container text-xs text-primary hover:bg-secondary hover:text-pure-white transition-colors"
                  >
                    #{tag}
                  </button>
                ))}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-xs text-on-surface-variant">
              &quot;{query}&quot;에 대한 검색 결과가 없습니다.
            </div>
          ) : (
            <div className="space-y-6">
              {/* Gas Products Section */}
              {matchingProducts.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Package size={14} />
                    <span>가스 품목 ({matchingProducts.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingProducts.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onSelectProduct(p);
                        }}
                        className="w-full p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-colors flex items-center justify-between border border-border-subtle"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-primary">{p.nameKo}</span>
                            <span className="text-xs font-mono text-secondary">({p.chemicalFormula})</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
                              {p.categoryLabel}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant line-clamp-1 mt-0.5">{p.description}</p>
                        </div>
                        <ArrowRight size={15} className="text-secondary shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Notices Section */}
              {matchingNotices.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <FileText size={14} />
                    <span>공지 및 입찰 ({matchingNotices.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingNotices.map((n) => (
                      <button
                        key={n.id}
                        onClick={() => {
                          onClose();
                          onSelectNotice(n);
                        }}
                        className="w-full p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-colors flex items-center justify-between border border-border-subtle"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-secondary text-pure-white font-bold">
                              {n.category}
                            </span>
                            <span className="text-xs text-on-surface-variant">{n.date}</span>
                          </div>
                          <p className="text-xs font-bold text-primary line-clamp-1 mt-1">{n.title}</p>
                        </div>
                        <ArrowRight size={15} className="text-secondary shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Branches Section */}
              {matchingBranches.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-secondary uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <MapPin size={14} />
                    <span>영업소 및 네트워크 ({matchingBranches.length})</span>
                  </h4>
                  <div className="space-y-2">
                    {matchingBranches.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          onClose();
                          onSelectBranch(b);
                        }}
                        className="w-full p-3 rounded-xl bg-surface-container-low hover:bg-surface-container text-left transition-colors flex items-center justify-between border border-border-subtle"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-primary">{b.name}</span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-surface-container text-secondary font-medium">
                              {b.region}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant line-clamp-1 mt-0.5">{b.address}</p>
                        </div>
                        <span className="text-xs font-mono text-secondary">{b.tel}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
