
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../App';

const Header: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'nav.home' },
    { path: '/training', label: 'nav.training' },
    { path: '/tandem', label: 'nav.tandem' },
    { path: '/booking', label: 'nav.booking' },
    { path: '/about', label: 'nav.about' },
    { path: '/faq', label: 'nav.faq' },
    { path: '/contact', label: 'nav.contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tighter text-slate-900">
              MBF<span className="text-cyan-600">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-cyan-600 ${
                  location.pathname === item.path ? 'text-cyan-600' : 'text-slate-600'
                }`}
              >
                {t(item.label)}
              </Link>
            ))}
          </nav>

          {/* Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex bg-slate-100 rounded-full p-1 text-xs font-bold">
              <button
                onClick={() => setLang('EN')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'EN' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('ES')}
                className={`px-3 py-1 rounded-full transition-all ${
                  lang === 'ES' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500'
                }`}
              >
                ES
              </button>
            </div>
            <Link
              to="/contact"
              className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              {t('cta.whatsapp')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <div className="flex bg-slate-100 rounded-full p-1 text-[10px] font-bold">
              <button onClick={() => setLang('EN')} className={`px-2 py-1 rounded-full ${lang === 'EN' ? 'bg-white' : ''}`}>EN</button>
              <button onClick={() => setLang('ES')} className={`px-2 py-1 rounded-full ${lang === 'ES' ? 'bg-white' : ''}`}>ES</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-t border-slate-200 px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg"
            >
              {t(item.label)}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl font-bold mt-4"
          >
            {t('cta.whatsapp')}
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
