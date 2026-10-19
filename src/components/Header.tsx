import React, { useState } from 'react';
import { Search, FileText, Menu, X, User, ChevronRight } from 'lucide-react';
import { PageType } from '../types';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenQuote: () => void;
  onOpenSearch: () => void;
  lang: 'KOR' | 'ENG';
  setLang: (lang: 'KOR' | 'ENG') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote,
  onOpenSearch,
  lang,
  setLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageType; labelKo: string; labelEn: string }[] = [
    { id: 'company-overview', labelKo: '회사소개', labelEn: 'About Us' },
    { id: 'products-catalog', labelKo: '제품소개', labelEn: 'Products' },
    { id: 'technical-services', labelKo: '서비스', labelEn: 'Services' },
    { id: 'production-facilities', labelKo: '생산설비', labelEn: 'Facilities' },
    { id: 'esg-management', labelKo: 'ESG', labelEn: 'ESG' },
    { id: 'customer-support', labelKo: '고객지원', labelEn: 'Support' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-glass backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-20 max-w-[1320px] mx-auto px-6 flex items-center justify-between gap-6">
          {/* Logo & Brand Wordmark */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 group text-left cursor-pointer"
            >
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1VdSDvg4ymTc9uAaCEsmFpAdDua8QTsN9MFW9cM6F6Y01mbnSo4yadQGSosdPa0z8opgKkcq9CTDv2NGsPHQONnwDk2a9Hgx6yuv44Jx6rBRp8fFcWxwWq95EEH9JocRuxR6yKf9LXYouPGUIRjDLnwh0mH0kD__nA3D4tgj9UpVFC_5LCGPjGvNauMkAJaHYmCngFsdc31dB22PI4-Ru4kgGEHDP6RBUIL-vaN0qQydU0sVljjiUlGSbg"
                alt="MS Gas Logo"
                className="h-8 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-bold text-xl tracking-tight text-primary">
                (주)MS가스
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-2 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                    isActive
                      ? 'bg-surface-container-high text-primary font-semibold shadow-xs'
                      : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  {lang === 'KOR' ? item.labelKo : item.labelEn}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full bg-surface-container-low p-1 border border-border-subtle">
              <button
                type="button"
                onClick={() => setLang('KOR')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'KOR'
                    ? 'bg-surface-container-lowest text-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                KOR
              </button>
              <button
                type="button"
                onClick={() => setLang('ENG')}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                  lang === 'ENG'
                    ? 'bg-surface-container-lowest text-primary shadow-xs'
                    : 'text-on-surface-variant hover:text-on-surface'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Global Search Button */}
            <button
              aria-label="통합검색"
              onClick={onOpenSearch}
              className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
              title="가스 품목 및 공고 검색"
            >
              <Search size={19} />
            </button>

            {/* Online Quote CTA */}
            <button
              onClick={onOpenQuote}
              className="hidden md:inline-flex items-center gap-2 bg-primary text-on-primary hover:bg-secondary px-4 py-2 rounded-lg text-xs font-semibold shadow-sm transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">request_quote</span>
              <span>{lang === 'KOR' ? '견적 및 문의하기' : 'Request Quote'}</span>
            </button>

            {/* Account / Support quick icon */}
            <button
              onClick={() => handleNavClick('customer-support')}
              className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-secondary transition-colors"
              title="고객센터 및 지원"
            >
              <User size={16} />
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden w-9 h-9 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-surface-container-lowest/98 backdrop-blur-2xl p-6 xl:hidden animate-fadeIn overflow-y-auto">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('home')}
              className={`p-3 rounded-xl text-left text-sm font-bold flex items-center justify-between ${
                currentPage === 'home' ? 'bg-surface-container text-primary' : 'text-on-surface'
              }`}
            >
              <span>{lang === 'KOR' ? '메인 홈' : 'Home'}</span>
              <ChevronRight size={16} className="text-on-surface-variant" />
            </button>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-3 rounded-xl text-left text-sm font-semibold flex items-center justify-between ${
                  currentPage === item.id ? 'bg-surface-container text-primary font-bold' : 'text-on-surface'
                }`}
              >
                <span>{lang === 'KOR' ? item.labelKo : item.labelEn}</span>
                <ChevronRight size={16} className="text-on-surface-variant" />
              </button>
            ))}

            <div className="pt-4 mt-2 border-t border-border-subtle space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-primary text-pure-white text-sm font-bold flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">request_quote</span>
                <span>{lang === 'KOR' ? '견적 및 문의하기' : 'Request Quote'}</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSearch();
                }}
                className="w-full py-2.5 rounded-xl bg-surface-container text-primary text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Search size={16} />
                <span>{lang === 'KOR' ? '가스 품목 및 공고 검색' : 'Search Catalog & Notices'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
