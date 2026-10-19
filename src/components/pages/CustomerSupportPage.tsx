import React, { useState } from 'react';
import { FileText, Phone, Mail, MapPin, Calendar, Search, ArrowRight, Download, AlertCircle } from 'lucide-react';
import { NOTICES } from '../../data/mockData';
import { NoticeItem } from '../../types';

interface CustomerSupportPageProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenMsds: () => void;
  onOpenQuote: () => void;
}

export const CustomerSupportPage: React.FC<CustomerSupportPageProps> = ({
  onSelectNotice,
  onOpenMsds,
  onOpenQuote,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredNotices = NOTICES.filter((n) => {
    const matchesCategory = selectedCategory === 'all' || n.category === selectedCategory;
    const matchesQuery =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="w-full bg-surface">
      {/* Header */}
      <section className="bg-deep-ocean text-pure-white py-16 -mt-20 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,#006687_0%,transparent_70%)]" />
        <div className="max-w-[1320px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/20 backdrop-blur-md mb-4 text-accent-electric text-xs font-bold uppercase tracking-widest">
            CUSTOMER SUPPORT & NOTICES
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-pure-white tracking-tight mb-4">
            고객 지원 및 새로운 소식
          </h1>
          <p className="text-sm sm:text-base text-surface-variant max-w-2xl leading-relaxed">
            (주)MS가스의 공식 입찰 공고, 규제특례 고지, 보도자료 및 물질안전보건자료(MSDS) 등 고객 지원 서비스를 한눈에 확인하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Quick Access Support Cards */}
      <section className="py-8 bg-surface-container-low border-b border-border-subtle">
        <div className="max-w-[1320px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div
            onClick={onOpenMsds}
            className="p-5 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-secondary shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-bold text-secondary uppercase block mb-0.5">MSDS LIBRARY</span>
              <h3 className="text-sm font-bold text-primary">MSDS 물질안전보건자료실</h3>
              <p className="text-xs text-on-surface-variant">전 품목 안전데이터 PDF 다운로드</p>
            </div>
            <FileText size={22} className="text-secondary" />
          </div>

          <div
            onClick={onOpenQuote}
            className="p-5 rounded-xl bg-surface-container-lowest border border-border-subtle hover:border-secondary shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between"
          >
            <div>
              <span className="text-xs font-bold text-secondary uppercase block mb-0.5">ONLINE INQUIRY</span>
              <h3 className="text-sm font-bold text-primary">온라인 견적 및 기술상담</h3>
              <p className="text-xs text-on-surface-variant">2시간 이내 빠른 공식 견적 회신</p>
            </div>
            <Phone size={22} className="text-secondary" />
          </div>

          <div className="p-5 rounded-xl bg-surface-container-lowest border border-border-subtle shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-secondary uppercase block mb-0.5">DIRECT HOTLINE</span>
              <h3 className="text-sm font-bold text-primary">전국 대표번호 1588-0000</h3>
              <p className="text-xs text-on-surface-variant">고객센터: 051-311-2000 (평일 08:30~18:00)</p>
            </div>
            <span className="material-symbols-outlined text-[24px] text-secondary">support_agent</span>
          </div>
        </div>
      </section>

      {/* Notices & Announcements Section */}
      <section className="py-12 max-w-[1320px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-surface-container rounded-xl border border-border-subtle w-full md:w-auto">
            {['all', '입찰공고', '고지안내', '보도자료', '수상소식'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-pure-white shadow-xs'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {cat === 'all' ? '전체 공고' : cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-2.5 text-on-surface-variant" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="공고명, 입찰 건명 검색..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
        </div>

        {/* Notice List */}
        <div className="space-y-4">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => onSelectNotice(notice)}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-border-subtle hover:border-secondary hover:shadow-lg transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${notice.categoryColor}`}>
                    {notice.category}
                  </span>
                  <span className="text-xs text-on-surface-variant flex items-center gap-1">
                    <Calendar size={13} />
                    {notice.date}
                  </span>
                  {notice.hasAttachment && (
                    <span className="text-[10px] text-secondary bg-surface-container px-2 py-0.5 rounded font-medium">
                      첨부파일(RFP) 포함
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-primary hover:text-secondary transition-colors">
                  {notice.title}
                </h3>
                <p className="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                  {notice.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-secondary flex items-center gap-1">
                  <span>자세히보기</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
