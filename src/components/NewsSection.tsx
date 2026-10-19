import React from 'react';
import { PageType, NoticeItem } from '../types';
import { NOTICES } from '../data/mockData';

interface NewsSectionProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onNavigate: (page: PageType) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({
  onSelectNotice,
  onNavigate,
}) => {
  const tender1 = NOTICES[0];
  const tender2 = NOTICES[1];
  const otherNotices = NOTICES.slice(2);

  return (
    <section className="w-full py-16 sm:py-20 bg-surface-container-lowest">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              NOTICE & PRESS RELEASE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              MS가스의 새로운 소식을 전달드립니다.
            </h2>
          </div>
          <div>
            <button
              onClick={() => onNavigate('customer-support')}
              className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-on-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>공지사항 전체보기</span>
              <span className="material-symbols-outlined text-[18px]">list_alt</span>
            </button>
          </div>
        </div>

        {/* Real News Cards Mosaic & List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Tender Notice 1 */}
          <div
            onClick={() => onSelectNotice(tender1)}
            className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-border-subtle"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-secondary text-on-secondary text-[11px] font-bold uppercase">
                  {tender1.category}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">{tender1.date}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2 line-clamp-2 hover:text-secondary transition-colors">
                {tender1.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">
                {tender1.summary}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-surface-variant/40 text-secondary font-semibold text-xs">
              <span>제안요청서(RFP) 확인</span>
              <span className="material-symbols-outlined text-[18px]">attachment</span>
            </div>
          </div>

          {/* Featured Tender Notice 2 */}
          <div
            onClick={() => onSelectNotice(tender2)}
            className="lg:col-span-6 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-surface-container-low transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-border-subtle"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded bg-secondary text-on-secondary text-[11px] font-bold uppercase">
                  {tender2.category}
                </span>
                <span className="text-xs text-on-surface-variant font-medium">{tender2.date}</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-primary mb-2 line-clamp-2 hover:text-secondary transition-colors">
                {tender2.title}
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed">
                {tender2.summary}
              </p>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-surface-variant/40 text-secondary font-semibold text-xs">
              <span>입찰 지침서 확인</span>
              <span className="material-symbols-outlined text-[18px]">attachment</span>
            </div>
          </div>
        </div>

        {/* Compact 3 Updates Row below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {otherNotices.map((n) => (
            <div
              key={n.id}
              onClick={() => onSelectNotice(n)}
              className="p-5 rounded-xl bg-surface hover:bg-surface-container transition-colors cursor-pointer border border-border-subtle"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${n.categoryColor}`}>
                  {n.category}
                </span>
                <span className="text-xs text-on-surface-variant">{n.date}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-primary mb-1 line-clamp-1 hover:text-secondary transition-colors">
                {n.title}
              </h4>
              <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                {n.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
