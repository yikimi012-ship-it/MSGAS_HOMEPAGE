import React from 'react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
  onOpenMsds: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenQuote,
  onOpenMsds,
}) => {
  return (
    <footer className="w-full bg-deep-ocean text-surface-container-high py-12 sm:py-16 border-t border-border-dark/60">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-border-dark/60">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VdSDvg4ymTc9uAaCEsmFpAdDua8QTsN9MFW9cM6F6Y01mbnSo4yadQGSosdPa0z8opgKkcq9CTDv2NGsPHQONnwDk2a9Hgx6yuv44Jx6rBRp8fFcWxwWq95EEH9JocRuxR6yKf9LXYouPGUIRjDLnwh0mH0kD__nA3D4tgj9UpVFC_5LCGPjGvNauMkAJaHYmCngFsdc31dB22PI4-Ru4kgGEHDP6RBUIL-vaN0qQydU0sVljjiUlGSbg"
                alt="MS Gas Logo"
                className="h-7 w-auto object-contain brightness-0 invert"
              />
              <span className="text-xl font-bold text-pure-white">(주)MS가스</span>
            </div>
            
            <p className="text-xs sm:text-sm text-surface-variant max-w-md leading-relaxed">
              대한민국 첨단 제조공정과 친환경 에너지 전환을 선도하는 초고순도 산업용·특수 가스 전문 종합 공급 기업입니다.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-surface-variant text-xs">
              <span>대표이사: 전청민</span>
              <span>사업자등록번호: 605-81-30449</span>
              <span>본사: 부산광역시 사상구 낙동대로 1412번길 28</span>
            </div>

            <div className="flex flex-wrap gap-x-4 gap-y-1 text-surface-variant text-xs">
              <span>전국 대표번호: 1588-0000</span>
              <span>고객센터: 051-311-2000</span>
              <span>이메일: msgas@msgas.co.kr</span>
            </div>
          </div>

          {/* Column 2: Network Infrastructure */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-sm font-bold text-pure-white">네트워크 인프라</span>
            <div className="grid grid-cols-2 gap-2 text-xs text-surface-variant">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-electric shrink-0" />
                전국 8대 권역 지역본부
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-electric shrink-0" />
                전국 17개 공급 영업소
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-electric shrink-0" />
                글로벌 수출입 무역망
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-electric shrink-0" />
                실시간 탱크로리 관제
              </span>
            </div>

            <div className="mt-2 p-3 rounded-lg bg-surface-glass/5 backdrop-blur-sm border border-border-dark/60">
              <span className="text-[10px] font-bold text-accent-electric tracking-wide uppercase block mb-1">
                SAFETY & COMPLIANCE
              </span>
              <span className="text-xs text-surface-container-low">
                KGS 표준 및 ISO 9001, ISO 14001, ISO 45001 통합 안전경영인증 획득
              </span>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-sm font-bold text-pure-white">고객 편의 바로가기</span>
            <div className="flex flex-col gap-2 text-xs text-surface-variant">
              <button
                onClick={onOpenMsds}
                className="text-left hover:text-pure-white transition-colors cursor-pointer"
              >
                MSDS (물질안전보건자료) 자료실
              </button>
              <button
                onClick={() => onNavigate('technical-services')}
                className="text-left hover:text-pure-white transition-colors cursor-pointer"
              >
                가스 분석 및 현장 퍼지 서비스
              </button>
              <button
                onClick={() => onNavigate('production-facilities')}
                className="text-left hover:text-pure-white transition-colors cursor-pointer"
              >
                초저온 탱크 및 가스 충전 인프라
              </button>
              <button
                onClick={onOpenQuote}
                className="text-left hover:text-pure-white transition-colors cursor-pointer"
              >
                온라인 대량 납품 및 공급 견적
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal links */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-surface-variant">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('customer-support')}
              className="hover:text-pure-white font-medium transition-colors"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() => onNavigate('customer-support')}
              className="hover:text-pure-white transition-colors"
            >
              이용약관
            </button>
            <button
              onClick={() => onNavigate('company-overview')}
              className="hover:text-pure-white transition-colors"
            >
              오시는 길
            </button>
            <button
              onClick={() => onNavigate('customer-support')}
              className="hover:text-pure-white transition-colors"
            >
              인재채용
            </button>
            <button
              onClick={onOpenQuote}
              className="hover:text-pure-white transition-colors"
            >
              온라인 문의
            </button>
          </div>
          <span className="text-surface-variant/70 text-center md:text-right">
            Copyright © 2025 (주)MS가스. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
