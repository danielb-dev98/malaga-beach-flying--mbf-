
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Language } from './types';

// Pages
import Home from './pages/Home';
import Training from './pages/Training';
import Tandem from './pages/Tandem';
import Booking from './pages/Booking';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const translations: Record<string, { ES: string; EN: string }> = {
  'nav.home': { ES: 'Inicio', EN: 'Home' },
  'nav.training': { ES: 'Entrenamiento', EN: 'Training' },
  'nav.tandem': { ES: 'Vuelos Tándem', EN: 'Tandem Flights' },
  'nav.booking': { ES: 'Reserva', EN: 'Booking' },
  'nav.about': { ES: 'Sobre MBF', EN: 'About MBF' },
  'nav.faq': { ES: 'Preguntas', EN: 'FAQ' },
  'nav.contact': { ES: 'Contacto', EN: 'Contact' },
  'cta.whatsapp': { ES: 'Habla con nosotros', EN: 'Talk to us' },
  'cta.booking': { ES: 'Ver disponibilidad', EN: 'Check availability' },
  'footer.rights': { ES: 'Todos los derechos reservados.', EN: 'All rights reserved.' },
};

const AppContent: React.FC = () => {
  const [lang, setLang] = useState<Language>('EN');
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const t = (key: string) => translations[key]?.[lang] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/tandem" element={<Tandem />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        
        {/* Floating WhatsApp for conversion */}
        <a 
          href="https://wa.me/34660567537" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.091 3.39l-.713 2.603 2.66-.698a5.733 5.733 0 0 0 2.729.697c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.215c-.149.42-.764.767-1.045.81-.281.043-.623.076-1.763-.369-1.46-.57-2.396-2.053-2.47-2.15-.073-.097-.606-.806-.606-1.537 0-.731.383-1.092.52-1.238.136-.147.299-.184.398-.184.1 0 .199.001.285.005.089.004.21-.034.33.25.123.291.42 1.025.457 1.1.037.074.062.161.012.261-.05.1-.075.161-.15.25-.074.088-.156.197-.222.264-.074.075-.152.156-.065.305.087.15.385.635.826 1.029.567.508 1.046.666 1.196.74.15.074.238.062.327-.04.089-.102.383-.446.485-.596.102-.15.204-.124.343-.074.139.05 1.045.493 1.226.583.18.09.3.136.344.21.044.074.044.426-.105.846z"/></svg>
        </a>
      </div>
    </LanguageContext.Provider>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;
