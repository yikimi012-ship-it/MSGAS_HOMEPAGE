import React from 'react';
import { PageType } from '../types';

interface CompanyOverviewSectionProps {
  onNavigate: (page: PageType) => void;
  onOpenMsds: () => void;
  onOpenTelematics: () => void;
}

export const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({
  onNavigate,
  onOpenMsds,
  onOpenTelematics,
}) => {
  return (
    <section className="w-full py-16 sm:py-20 bg-surface-container-low">
      <div className="max-w-[1320px] mx-auto px-6">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
              COMPANY PROFILE
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-primary tracking-tight">
              MS가스 Overview & 지속가능경영
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-md leading-relaxed">
            탄소중립 시대를 여는 친환경 암모니아·수소 에너지 사업부터 투명한 윤리경영까지 미래 가치를 구축합니다.
          </p>
        </div>

        {/* 4 Curated Overview Cards Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. ESG 경영 */}
          <div
            onClick={() => onNavigate('esg-management')}
            className="group relative rounded-2xl overflow-hidden bg-primary text-pure-white p-6 flex flex-col justify-between h-96 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border-subtle"
          >
            <div className="absolute inset-0 opacity-40">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHc7WXLyyRnS8omy3zW0mieLftkYAxmIRY7mqR1Hp2O0d82hfO3RHfXBafcLFK3dsMs5pOaRnXV1au54rWrmV3ED6hH6M45RtaQ8TXOnrav40FI0jbBoXOBXlt9BuY-wf4A6kI3hQC0aHZgclEp0qRqSDrP5w3j5nwcCm1uDRsWwGEi4BR6qjoKqy58kCHAaP3hVTh_FAq4PWR8qDF6VyuGw2k66CZBlOFi2M604byRKLWacwTzB0Z"
                alt="ESG 경영"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
            
            <div className="relative z-10">
              <span className="px-2 py-1 rounded bg-accent-electric text-deep-ocean text-[10px] font-bold uppercase">
                ESG MANAGEMENT
              </span>
              <h3 className="text-2xl font-bold text-pure-white mt-3">ESG 경영</h3>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-surface-variant mb-3 leading-relaxed">
                환경(E), 사회적 책임(S), 투명 지배구조(G)를 결합한 지속가능 에너지 체계
              </p>
              <div className="flex items-center gap-1 text-accent-electric font-bold text-xs">
                <span>자세히보기</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* 2. 1974년 설립 히스토리 */}
          <div
            onClick={() => onNavigate('company-overview')}
            className="group relative rounded-2xl overflow-hidden bg-deep-ocean text-pure-white p-6 flex flex-col justify-between h-96 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-secondary/30"
          >
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDufsQJyZkrMfvngy-6VHnRoJ7u8a0XQlMZVjJw8rmbgSTozR1BuoqfKEmlCUKPxqJ50c-0uwZQrLrHgXlY_5_0l6-xnNR5pPFnOUZC9zd-A51JXrfGeLxbYiBlEZYtTjUXb36A1NV7dFb6LT7C7nFGMQu_n2OsweJLzhRT4jF-hoeQTXZ0a63wB3O3GRH50J0T5lCy0ZxT0Rqv_QOVS11w9d-F6_T7PjZAD11GxjKmnEzOeRyDrKas"
                alt="50년 역사 1974년 설립"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-deep-ocean via-deep-ocean/85 to-transparent" />
            
            <div className="relative z-10">
              <span className="px-2 py-1 rounded bg-surface-container-high/30 text-surface-container-low text-[10px] font-bold uppercase">
                ESTABLISHED 1974
              </span>
              <h3 className="text-2xl font-bold text-pure-white mt-3 leading-snug">
                50년 역사<br />1974년 설립
              </h3>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-surface-variant mb-3 leading-relaxed">
                대한민국 산업화의 시작과 함께 성장해 온 반세기 특수가스 정밀 외길
              </p>
              <div className="flex items-center gap-1 text-secondary-fixed font-bold text-xs">
                <span>연혁 살펴보기</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>

          {/* 3. MSDS 물질안전보건자료실 */}
          <div
            onClick={onOpenMsds}
            className="group relative rounded-2xl overflow-hidden bg-surface-container-lowest text-on-surface p-6 flex flex-col justify-between h-96 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border-subtle"
          >
            <div className="absolute inset-0 opacity-15">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPiCfkrQx_JmiW9qIMjhemI0n6rCw6MnyokNKA0pM0De0BA0GnJv1hJxxcnlGW9mhJz6fAdggv6m5YdeOICa0fCX4q0sAIS5mLlJBD7Icz3Z9ioSyuI2ek811tDcImWZ4Jdw4HbMYhLHxS8OpZbGtVRooOJEbtKfzNrO_xXLdTy6HcsEe8wJvqiDP8vBvv03Vu7WOUcMBIiicVNyZdM4Vvfv97Rzmlgtu7bqtj705iR50MJONlQTL8"
                alt="MSDS 자료실"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="relative z-10">
              <span className="px-2 py-1 rounded bg-surface-container-high text-primary text-[10px] font-bold uppercase">
                SAFETY COMPLIANCE
              </span>
              <h3 className="text-2xl font-bold text-primary mt-3">MSDS 자료실</h3>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-on-surface-variant mb-3 leading-relaxed">
                전 품목 물질안전보건자료 및 성분 분석 인증서 실시간 검색 및 PDF 다운로드
              </p>
              <div className="flex items-center gap-1 text-secondary font-bold text-xs">
                <span>자료 검색 및 받기</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  download
                </span>
              </div>
            </div>
          </div>

          {/* 4. 전국적 운송능력 */}
          <div
            onClick={onOpenTelematics}
            className="group relative rounded-2xl overflow-hidden bg-secondary text-pure-white p-6 flex flex-col justify-between h-96 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-border-subtle"
          >
            <div className="absolute inset-0 opacity-35">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYUigWACsYdHdKjWFCqRahw66IckDZtmmv-ySXih_6kOBTRmPGJv0-pmjgcq6X61KO53DghqNHNwAYP_72Sfme-JLsHiGfIgmHfbXnnsxkMRMUrM7cTrEKc6FQDpBrXHeB9MnYnvL5hCCsFtFdvJDATwm4E5k8dliWupYyTK21uPR-8P4deSNukMoPQe71WOGpvC-ZUEaarboWxv9E9J_JHJRUID3MKFiQrzEGLylWenuDvftz9v3"
                alt="전국적 운송능력"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
            
            <div className="relative z-10">
              <span className="px-2 py-1 rounded bg-surface-container-lowest text-secondary text-[10px] font-bold uppercase">
                SMART FLEET
              </span>
              <h3 className="text-2xl font-bold text-pure-white mt-3 leading-snug">
                전국적<br />운송능력
              </h3>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-surface-container-low mb-3 leading-relaxed">
                실시간 GPS 텔레매틱스와 초저온 진공 탱크로리 대규모 직영 운송 플릿
              </p>
              <div className="flex items-center gap-1 text-surface-container-lowest font-bold text-xs">
                <span>인프라 안내</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
