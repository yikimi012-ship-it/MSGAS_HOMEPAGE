import React, { useState } from 'react';
import { X, Search, FileText, Download, ShieldAlert, Check, ExternalLink } from 'lucide-react';
import { MSDS_LIBRARY } from '../../data/mockData';

interface MsdsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export const MsdsModal: React.FC<MsdsModalProps> = ({ isOpen, onClose, initialQuery = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredDocs = MSDS_LIBRARY.filter(
    (doc) =>
      doc.nameKo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.casNo.includes(searchTerm) ||
      doc.formula.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.unNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = (id: string, name: string) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-border-subtle overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-deep-ocean text-pure-white border-b border-border-dark">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent-electric text-deep-ocean flex items-center justify-center">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-pure-white">MSDS (물질안전보건자료) 온라인 자료실</h3>
              <p className="text-xs text-surface-variant">산업안전보건법 제110조 및 GHS 분류 기준 전 품목 안전데이터</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-surface-variant hover:text-pure-white hover:bg-surface-glass/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Bar */}
        <div className="p-4 bg-surface-container border-b border-border-subtle">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-on-surface-variant" size={17} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="가스명(질소, 산소, 암모니아 등), 화학식(N2, O2), CAS No(7727-37-9), UN 번호 검색..."
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-xl border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>
          <div className="flex flex-wrap items-center gap-1.5 mt-2 text-[11px] text-on-surface-variant">
            <span>추천 검색어:</span>
            {['질소 N2', '산소 O2', '암모니아 NH3', '모노실란 SiH4', '삼불화질소 NF3'].map((kw) => (
              <button
                key={kw}
                onClick={() => setSearchTerm(kw.split(' ')[0])}
                className="px-2 py-0.5 rounded-full bg-surface-container-high hover:bg-surface-variant text-primary transition-colors"
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Document List */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {filteredDocs.length === 0 ? (
            <div className="py-12 text-center text-on-surface-variant text-xs">
              일치하는 MSDS 문서가 없습니다. 다른 검색어를 입력해 보세요.
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-4 rounded-xl bg-surface-container-low border border-border-subtle hover:border-secondary transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-xs text-secondary px-1.5 py-0.5 rounded bg-surface-container">
                      {doc.formula}
                    </span>
                    <h4 className="font-bold text-sm text-primary">{doc.nameKo}</h4>
                    <span className="text-[11px] text-on-surface-variant font-mono">CAS: {doc.casNo}</span>
                  </div>
                  <p className="text-xs text-on-surface-variant">{doc.nameEn}</p>
                  <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-on-surface-variant">
                    <span className="text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded flex items-center gap-1">
                      <ShieldAlert size={12} />
                      {doc.hazardGrade}
                    </span>
                    <span>·</span>
                    <span>{doc.unNumber}</span>
                    <span>·</span>
                    <span>개정일: {doc.updatedAt}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleDownload(doc.id, doc.nameKo)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary hover:bg-secondary text-pure-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    {downloadedId === doc.id ? (
                      <>
                        <Check size={14} className="text-accent-electric" />
                        <span>다운로드 완료</span>
                      </>
                    ) : (
                      <>
                        <Download size={14} />
                        <span>PDF 다운로드</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-surface-container border-t border-border-subtle text-xs text-on-surface-variant">
          <span>* 본 MSDS는 최신 KOSHA GHS 가이드라인에 따라 제작되었습니다.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-surface-container-lowest hover:bg-surface-variant text-primary border border-border-subtle transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
