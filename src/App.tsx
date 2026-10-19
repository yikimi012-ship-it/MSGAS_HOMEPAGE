import React, { useState, useEffect } from 'react';
import { PageType, GasProduct, NoticeItem, NetworkBranch } from './types';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CorePillars } from './components/CorePillars';
import { ProductsShowcase } from './components/ProductsShowcase';
import { QualityAndServices } from './components/QualityAndServices';
import { NationwideNetwork } from './components/NationwideNetwork';
import { CompanyOverviewSection } from './components/CompanyOverviewSection';
import { NewsSection } from './components/NewsSection';
import { QuickActionHub } from './components/QuickActionHub';
import { Footer } from './components/Footer';

// Modals
import { QuoteModal } from './components/modals/QuoteModal';
import { SearchModal } from './components/modals/SearchModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { NoticeDetailModal } from './components/modals/NoticeDetailModal';
import { MsdsModal } from './components/modals/MsdsModal';
import { TelematicsModal } from './components/modals/TelematicsModal';

// Subpages
import { CompanyOverviewPage } from './components/pages/CompanyOverviewPage';
import { ProductsCatalogPage } from './components/pages/ProductsCatalogPage';
import { TechnicalServicesPage } from './components/pages/TechnicalServicesPage';
import { ProductionFacilitiesPage } from './components/pages/ProductionFacilitiesPage';
import { EsgManagementPage } from './components/pages/EsgManagementPage';
import { CustomerSupportPage } from './components/pages/CustomerSupportPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');

  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedGasId, setQuotePreselectedGasId] = useState<string | undefined>(undefined);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);
  const [msdsModalOpen, setMsdsModalOpen] = useState(false);
  const [msdsQuery, setMsdsQuery] = useState('');
  const [telematicsModalOpen, setTelematicsModalOpen] = useState(false);

  // Scroll to top on page change
  const navigateTo = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (gasId?: string) => {
    setQuotePreselectedGasId(gasId);
    setQuoteModalOpen(true);
  };

  const handleOpenMsds = (query?: string) => {
    setMsdsQuery(query || '');
    setMsdsModalOpen(true);
  };

  const handleSelectBranchFromSearch = (branch: NetworkBranch) => {
    navigateTo('company-overview');
    setTimeout(() => {
      const el = document.getElementById('locations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
        onOpenSearch={() => setSearchModalOpen(true)}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Area */}
      <main className="w-full pt-20 flex-1">
        {currentPage === 'home' && (
          <div className="flex flex-col w-full">
            {/* 1. Hero Section */}
            <HeroSection
              onNavigate={navigateTo}
              onOpenQuote={() => handleOpenQuote()}
              onOpenTelematics={() => setTelematicsModalOpen(true)}
              lang={lang}
            />

            {/* 2. 3 Core Pillars Section */}
            <CorePillars
              onNavigate={navigateTo}
              onOpenTelematics={() => setTelematicsModalOpen(true)}
            />

            {/* 3. Products Showcase (5 Categories Mosaic) */}
            <ProductsShowcase
              onSelectProduct={(product) => setSelectedProduct(product)}
              onNavigate={navigateTo}
            />

            {/* 4. R&D Quality & 4 Technical Services */}
            <QualityAndServices
              onNavigate={navigateTo}
              onOpenQuote={() => handleOpenQuote()}
            />

            {/* 5. Nationwide Infrastructure & Interactive Network */}
            <NationwideNetwork
              onNavigate={navigateTo}
              onOpenQuote={() => handleOpenQuote()}
            />

            {/* 6. Company Profile & ESG Bento Overview */}
            <CompanyOverviewSection
              onNavigate={navigateTo}
              onOpenMsds={() => handleOpenMsds()}
              onOpenTelematics={() => setTelematicsModalOpen(true)}
            />

            {/* 7. Notice & Press Release */}
            <NewsSection
              onSelectNotice={(notice) => setSelectedNotice(notice)}
              onNavigate={navigateTo}
            />

            {/* 8. Direct B2B Access Hub */}
            <QuickActionHub
              onNavigate={navigateTo}
              onOpenQuote={() => handleOpenQuote()}
            />
          </div>
        )}

        {/* Subpage: Company Overview */}
        {currentPage === 'company-overview' && (
          <CompanyOverviewPage
            onOpenQuote={() => handleOpenQuote()}
            onSelectBranch={() => handleOpenQuote()}
          />
        )}

        {/* Subpage: Products Catalog */}
        {currentPage === 'products-catalog' && (
          <ProductsCatalogPage
            onSelectProduct={(product) => setSelectedProduct(product)}
            onOpenQuote={(gasId) => handleOpenQuote(gasId)}
            onOpenMsds={(casNo) => handleOpenMsds(casNo)}
          />
        )}

        {/* Subpage: Technical Services */}
        {currentPage === 'technical-services' && (
          <TechnicalServicesPage
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {/* Subpage: Production Facilities */}
        {currentPage === 'production-facilities' && (
          <ProductionFacilitiesPage
            onOpenTelematics={() => setTelematicsModalOpen(true)}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {/* Subpage: ESG Management */}
        {currentPage === 'esg-management' && (
          <EsgManagementPage
            onOpenQuote={() => handleOpenQuote()}
          />
        )}

        {/* Subpage: Customer Support */}
        {currentPage === 'customer-support' && (
          <CustomerSupportPage
            onSelectNotice={(notice) => setSelectedNotice(notice)}
            onOpenMsds={() => handleOpenMsds()}
            onOpenQuote={() => handleOpenQuote()}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuote={() => handleOpenQuote()}
        onOpenMsds={() => handleOpenMsds()}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedGasId={quotePreselectedGasId}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectNotice={(n) => setSelectedNotice(n)}
        onSelectBranch={handleSelectBranchFromSearch}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(gasId) => handleOpenQuote(gasId)}
        onOpenMsds={(casNo) => handleOpenMsds(casNo)}
      />

      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <MsdsModal
        isOpen={msdsModalOpen}
        onClose={() => setMsdsModalOpen(false)}
        initialQuery={msdsQuery}
      />

      <TelematicsModal
        isOpen={telematicsModalOpen}
        onClose={() => setTelematicsModalOpen(false)}
      />
    </div>
  );
}
