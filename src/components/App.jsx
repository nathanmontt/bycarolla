import { useState, useEffect } from 'react';

import { PrivacyContent, PrivacyTOC } from '../pages/Privacy';
import { ShippingContent, ShippingTOC } from '../pages/Shipping';
import { TermsContent, TermsTOC } from '../pages/Terms';

import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContent from './MainContent';

const tabs = {
  'termos': { label: 'Política Geral', content: <TermsContent />, toc: <TermsTOC /> },
  'envios': { label: 'Prazos e Envios', content: <ShippingContent />, toc: <ShippingTOC /> },
  'privacidade': { label: 'Privacidade e Segurança', content: <PrivacyContent />, toc: <PrivacyTOC /> },
};
const tabIds = Object.keys(tabs);

function App() {
  const [activeTab, setActiveTab] = useState('termos');
  const [activeSubheadingId, setActiveSubheadingId] = useState('');
  const [headerHeight, setHeaderHeight] = useState(0);

  // Mantém --header-height sincronizada com o tamanho real do header (logo dinâmica)
  useEffect(() => {
    const headerEl = document.querySelector('header');
    if (!headerEl) return;

    const updateHeaderVar = () => {
      const h = Math.round(headerEl.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--header-height', `${h}px`);
      setHeaderHeight(h);
    };

    updateHeaderVar();

    const ro = new ResizeObserver(updateHeaderVar);
    ro.observe(headerEl);
    window.addEventListener('load', updateHeaderVar);
    window.addEventListener('resize', updateHeaderVar);

    return () => {
      ro.disconnect();
      window.removeEventListener('load', updateHeaderVar);
      window.removeEventListener('resize', updateHeaderVar);
    };
  }, []);

  // Scrollspy que considera h2 e h3 e compensa o header dinâmico
  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('main h2, main h3');
      let current = '';
      const threshold = (headerHeight || 72) + 24;

      for (let i = 0; i < headings.length; i++) {
        const rect = headings[i].getBoundingClientRect();
        if (rect.top <= threshold) current = headings[i].id;
        else break;
      }
      setActiveSubheadingId(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab, headerHeight]);

  return (
    <div className="bg-white min-h-screen text-neutral-800">
      <Header />
      <div className="container max-w-7xl mx-auto grid grid-cols-12 md:gap-8 px-4 sm:px-6">
        <LeftSidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          tabIds={tabIds}
        />
        <MainContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
          tabIds={tabIds}
          activeSubheadingId={activeSubheadingId}
        />
        <RightSidebar
          activeTab={activeTab}
          tabs={tabs}
          activeSubheadingId={activeSubheadingId}
        />
      </div>
    </div>
  );
}

export default App;