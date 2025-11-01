import { useState, useEffect } from 'react';

import { PrivacyContent, PrivacyTOC } from '../pages/Privacy';
import { ShippingContent, ShippingTOC } from '../pages/Shipping';
import { TermsContent, TermsTOC } from '../pages/Terms';

import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import MainContent from './MainContent';

const tabs = {
  'termos': {
    label: 'Política Geral',
    content: <TermsContent />,
    toc: <TermsTOC />,
  },
  'envios': {
    label: 'Prazos e Envios',
    content: <ShippingContent />,
    toc: <ShippingTOC />,
  },
  'privacidade': {
    label: 'Privacidade e Segurança',
    content: <PrivacyContent />,
    toc: <PrivacyTOC />,
  },
};
const tabIds = Object.keys(tabs);

function App() {
  const [activeTab, setActiveTab] = useState('termos');
  
  const [activeSubheadingId, setActiveSubheadingId] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const headings = document.querySelectorAll('main h2');
      let currentActiveId = '';

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        const rect = heading.getBoundingClientRect();
        if (rect.top <= 150) {
          currentActiveId = heading.id;
        } else {
          break;
        }
      }
      
      setActiveSubheadingId(currentActiveId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa no início
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeTab]); // Reseta o scrollspy quando a aba muda
  // === FIM DA LÓGICA DO SCROLLSPY ===

  return (
    <div className="bg-white min-h-screen text-neutral-800">
      
      <Header />

      {/* === CONSERTO DO PADDING GERAL ===
        - O 'px-4 sm:px-6' AQUI conserta o "colado na borda" do mobile.
        - O grid só tem 'gap' (espaço) em telas de tablet e maiores.
      */}
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
          activeSubheadingId={activeSubheadingId} // Passa o ID ativo
        />
        
        {/* === RIGHTSIDEBAR (ADICIONADO DE VOLTA) === */}
        <RightSidebar 
          activeTab={activeTab} 
          tabs={tabs}
          activeSubheadingId={activeSubheadingId} // Passa o ID ativo
        />

      </div>
    </div>
  )
}

export default App