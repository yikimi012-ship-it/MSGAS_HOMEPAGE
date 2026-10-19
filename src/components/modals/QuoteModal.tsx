import React, { useState } from 'react';
import { X, CheckCircle, Calculator, Send, AlertCircle, Building2, Phone, Mail } from 'lucide-react';
import { GAS_PRODUCTS, NETWORK_BRANCHES } from '../../data/mockData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedGasId?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedGasId,
}) => {
  const [selectedGas, setSelectedGas] = useState<string>(
    preselectedGasId || GAS_PRODUCTS[0].id
  );
  const [supplyType, setSupplyType] = useState<string>('초저온 벌크 탱크로리');
  const [monthlyVolume, setMonthlyVolume] = useState<string>('5,000');
  const [targetRegion, setTargetRegion] = useState<string>('영남권 (부산/울산/창원)');
  const [companyName, setCompanyName] = useState<string>('');
  const [managerName, setManagerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [memo, setMemo] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [quoteNumber, setQuoteNumber] = useState<string>('');

  if (!isOpen) return null;

  const currentProduct = GAS_PRODUCTS.find((p) => p.id === selectedGas) || GAS_PRODUCTS[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !phone) {
      alert('회사명과 담당자 연락처를 입력해 주세요.');
      return;
    }
    const generatedNo = `MSG-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
    setQuoteNumber(generatedNo);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
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
            <div className="w-8 h-8 rounded-lg bg-accent-electric text-deep-ocean flex items-center justify-center font-bold">
              <Calculator size={18} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-pure-white">온라인 공급 견적 및 납품 문의</h3>
              <p className="text-xs text-surface-variant">전국 17개 공급 영업소 직영 배송 네트워크 실시간 연계</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-surface-variant hover:text-pure-white hover:bg-surface-glass/10 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <CheckCircle size={36} />
              </div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest mb-1">
                SUBMISSION CONFIRMED
              </span>
              <h4 className="text-2xl font-bold text-primary mb-2">
                견적 및 공급 상담 접수가 완료되었습니다
              </h4>
              <p className="text-sm text-on-surface-variant max-w-md mb-6 leading-relaxed">
                신청하신 <strong>{currentProduct.nameKo}</strong>에 대해 관할 영업본부 기술영업팀에서 검토 후 <strong>2시간 이내</strong>에 유선 및 이메일로 공식 상세 견적서를 발송해 드립니다.
              </p>

              <div className="w-full max-w-md bg-surface-container-low rounded-xl p-4 text-left border border-surface-variant mb-6">
                <div className="flex justify-between py-1 border-b border-surface-variant/40 text-xs">
                  <span className="text-on-surface-variant">접수 번호</span>
                  <span className="font-bold text-primary">{quoteNumber}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-variant/40 text-xs">
                  <span className="text-on-surface-variant">요청 기업</span>
                  <span className="font-medium text-on-surface">{companyName} ({managerName || '담당자'})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-variant/40 text-xs">
                  <span className="text-on-surface-variant">선택 품목</span>
                  <span className="font-medium text-primary">{currentProduct.nameKo} ({currentProduct.chemicalFormula})</span>
                </div>
                <div className="flex justify-between py-1 border-b border-surface-variant/40 text-xs">
                  <span className="text-on-surface-variant">공급 방식</span>
                  <span className="font-medium text-on-surface">{supplyType}</span>
                </div>
                <div className="flex justify-between py-1 text-xs">
                  <span className="text-on-surface-variant">배송 희망 권역</span>
                  <span className="font-medium text-accent-electric bg-deep-ocean px-1.5 py-0.5 rounded text-[11px]">{targetRegion}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-primary hover:bg-secondary text-pure-white text-sm font-semibold transition-colors shadow-md"
                >
                  확인 및 닫기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Gas Selection */}
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  1. 공급 희망 가스 품목 선택
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {GAS_PRODUCTS.map((prod) => (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedGas(prod.id)}
                      className={`p-2.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                        selectedGas === prod.id
                          ? 'border-secondary bg-surface-container-high ring-2 ring-secondary/30'
                          : 'border-border-subtle bg-surface-container-lowest hover:bg-surface-container-low'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-secondary uppercase">{prod.categoryLabel}</span>
                          <span className="text-xs font-mono font-bold text-primary">{prod.chemicalFormula}</span>
                        </div>
                        <p className="text-xs font-bold text-on-surface line-clamp-1">{prod.nameKo}</p>
                      </div>
                      <span className="text-[11px] text-on-surface-variant mt-1">{prod.purity}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Supply Format & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    2. 공급 방식 (용기/인프라)
                  </label>
                  <select
                    value={supplyType}
                    onChange={(e) => setSupplyType(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                  >
                    <option value="초저온 벌크 탱크로리">초저온 벌크 탱크로리 (대용량 직배송)</option>
                    <option value="초저온용기 (LGC 160L~240L)">초저온용기 (LGC 160L~240L)</option>
                    <option value="고압 실린더 봄베 (47L 150bar/200bar)">고압 실린더 봄베 (47L 150/200bar)</option>
                    <option value="초고순도 Y실린더 (특수가스용)">초고순도 Y실린더 (특수가스용)</option>
                    <option value="튜브 트레일러 (초대형 프로젝트)">튜브 트레일러 (초대형 프로젝트)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    3. 월 예상 소요량 / 주기
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={monthlyVolume}
                      onChange={(e) => setMonthlyVolume(e.target.value)}
                      placeholder="예: 5,000 kg / 월 2회 납품"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Destination Region */}
              <div>
                <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                  4. 납품 희망 지역 (전국 17개 직영 영업망 대응)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    '영남권 (부산/울산/창원/대구)',
                    '수도권 (안성/화성/평택/인천)',
                    '충청권 (천안/아산/서산/청주)',
                    '호남권 (여수/광주/군산/전주)',
                  ].map((reg) => (
                    <button
                      key={reg}
                      type="button"
                      onClick={() => setTargetRegion(reg)}
                      className={`p-2 rounded-lg border text-center transition-colors font-medium ${
                        targetRegion === reg
                          ? 'border-secondary bg-primary text-pure-white'
                          : 'border-border-subtle bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                    >
                      {reg.split(' ')[0]}
                      <span className="block text-[10px] opacity-75">{reg.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Contact details */}
              <div className="p-4 rounded-xl bg-surface-container-low border border-surface-variant/50 space-y-3">
                <span className="block text-xs font-bold text-primary uppercase tracking-wider">
                  5. 고객사 및 담당자 정보
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">
                      회사명 / 상호 <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-2.5 top-2.5 text-on-surface-variant" size={15} />
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="(주)한국엔지니어링"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">담당자 성함 / 직급</label>
                    <input
                      type="text"
                      value={managerName}
                      onChange={(e) => setManagerName(e.target.value)}
                      placeholder="홍길동 팀장"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">
                      연락처 (휴대전화/직통) <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-2.5 top-2.5 text-on-surface-variant" size={15} />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010-1234-5678"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] text-on-surface-variant mb-1">이메일 (견적서 수신용)</label>
                    <div className="relative">
                      <Mail className="absolute left-2.5 top-2.5 text-on-surface-variant" size={15} />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="buyer@company.com"
                        className="w-full pl-8 pr-3 py-2 text-xs rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-on-surface-variant mb-1">특이사항 및 배관 설비 문의</label>
                  <textarea
                    rows={2}
                    value={memo}
                    onChange={(e) => setMemo(e.target.value)}
                    placeholder="기존 가스 탱크 보유 유무, 신규 배관 시공 의뢰, MSDS 필요 여부 등"
                    className="w-full px-3 py-1.5 text-xs rounded-lg border border-border-subtle bg-surface-container-lowest text-on-surface focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  />
                </div>
              </div>

              {/* Footer CTA */}
              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1.5 text-[11px] text-on-surface-variant">
                  <AlertCircle size={14} className="text-secondary" />
                  <span>365일 24시간 긴급 납품 및 기술상담 대응 (1588-0000)</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-lg text-xs font-medium text-on-surface-variant hover:bg-surface-container transition-colors"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent-electric hover:bg-secondary-fixed-dim text-deep-ocean font-bold text-xs shadow-md transition-all"
                  >
                    <Send size={14} />
                    <span>견적서 신청하기</span>
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
