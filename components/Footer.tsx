
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
              MBF<span className="text-cyan-500">.</span>
            </Link>
            <p className="mt-6 text-sm leading-relaxed">
              {lang === 'EN' 
                ? 'Ultra-personalized paramotor mentoring in Malaga. Safety, freedom, and excellence from the first day.' 
                : 'Mentoría de paramotor ultra-personalizada en Málaga. Seguridad, libertad y excelencia desde el primer día.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">{lang === 'EN' ? 'Navigation' : 'Navegación'}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/training" className="hover:text-cyan-500 transition-colors">{t('nav.training')}</Link></li>
              <li><Link to="/tandem" className="hover:text-cyan-500 transition-colors">{t('nav.tandem')}</Link></li>
              <li><Link to="/about" className="hover:text-cyan-500 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-500 transition-colors">{t('nav.faq')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">{lang === 'EN' ? 'Get in Touch' : 'Contacto'}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <span className="text-cyan-500">WA:</span>
                <a href="tel:+34660567537" className="hover:text-white">+34 660 56 75 37</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-cyan-500">Email:</span>
                <a href="mailto:malagabeachflying@gmail.com" className="hover:text-white">malagabeachflying@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-cyan-500">Loc:</span>
                <span>Benajarafe, Málaga, Spain</span>
              </li>
            </ul>
          </div>

          {/* Philosophy */}
          <div>
             <h4 className="text-white font-semibold mb-6">{lang === 'EN' ? 'Aviation Standards' : 'Estándares de Aviación'}</h4>
             <p className="text-xs leading-relaxed italic">
               {lang === 'EN'
                 ? 'Aviation is not just about flying; it is about decision-making, weather awareness, and uncompromising safety protocols.'
                 : 'La aviación no se trata solo de volar; se trata de toma de decisiones, conciencia meteorológica y protocolos de seguridad sin concesiones.'}
             </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Malaga Beach Flying. {t('footer.rights')}</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Experience</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
