import React, { useState } from 'react';
import { X, Download, Calendar, Tag, Check, AlertCircle, FileText, Share2 } from 'lucide-react';
import { NoticeItem } from '../../types';

interface NoticeDetailModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({ notice, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!notice) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-deep-ocean/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-2xl border border-border-subtle overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-deep-ocean text-pure-white border-b border-border-dark">
          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${notice.categoryColor}`}>
              {notice.category}
            </span>
            <span className="text-xs text-surface-variant flex items-center gap-1">
              <Calendar size={13} />
              {notice.date}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-surface-variant hover:text-pure-white hover:bg-surface-glass/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <div>
            <h2 className="text-xl font-bold text-primary leading-snug mb-3">
              {notice.title}
            </h2>
            <div className="p-3 rounded-xl bg-surface-container-low border border-surface-variant text-xs text-on-surface-variant leading-relaxed">
              <strong>요약:</strong> {notice.summary}
            </div>
          </div>

          {/* Tender Info block if applicable */}
          {(notice.tenderDeadline || notice.tenderBudget) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container border border-surface-variant/60 text-xs">
              {notice.tenderDeadline && (
                <div>
                  <span className="text-on-surface-variant block mb-0.5">입찰 제출 마감일</span>
                  <span className="font-bold text-red-600">{notice.tenderDeadline}</span>
                </div>
              )}
              {notice.tenderBudget && (
                <div>
                  <span className="text-on-surface-variant block mb-0.5">배정 예산</span>
                  <span className="font-bold text-primary">{notice.tenderBudget}</span>
                </div>
              )}
            </div>
          )}

          {/* Body paragraphs */}
          <div className="space-y-2.5 text-xs sm:text-sm text-on-surface leading-relaxed">
            {notice.content.map((paragraph, idx) => (
              <p key={idx} className={paragraph.startsWith(' -') ? 'pl-4 text-on-surface-variant' : 'font-medium'}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Attachment Box if available */}
          {notice.hasAttachment && (
            <div className="p-4 rounded-xl border border-secondary/30 bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="block text-xs font-bold text-primary">공식 제안요청서(RFP) 및 지침서</span>
                  <span className="text-[11px] text-on-surface-variant">{notice.attachmentName || 'Tender_Document.pdf'} (2.4 MB)</span>
                </div>
              </div>
              <button
                onClick={handleDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-secondary hover:bg-primary text-pure-white text-xs font-semibold shadow-sm transition-colors"
              >
                {downloadSuccess ? (
                  <>
                    <Check size={14} className="text-accent-electric" />
                    <span>다운로드 완료!</span>
                  </>
                ) : (
                  <>
                    <Download size={14} />
                    <span>첨부파일 다운로드</span>
                  </>
                )}
              </button>
            </div>
          )}

          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
            <AlertCircle size={16} className="shrink-0 mt-0.5 text-amber-600" />
            <div>
              <span>입찰 관련 서류 접수처: (주)MS가스 본사 경영기획실 기술계약팀 (부산광역시 사상구 낙동대로 1412번길 28, 051-311-2000)</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end px-6 py-3.5 bg-surface-container border-t border-border-subtle">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg text-xs font-semibold bg-primary hover:bg-secondary text-pure-white transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
