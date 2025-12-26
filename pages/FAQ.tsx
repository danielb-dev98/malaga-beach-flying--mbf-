
import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Language } from '../types';

interface FAQItemProps {
  q: any;
  a: any;
  lang: Language;
}

// Use React.FC to properly handle standard props like 'key' and ensure 'lang' uses the correct Language type
const FAQItem: React.FC<FAQItemProps> = ({ q, a, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-cyan-600 transition-colors"
      >
        <span className="font-bold text-lg">{q[lang]}</span>
        <svg className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </button>
      {isOpen && (
        <div className="pb-8 animate-in slide-in-from-top-2 duration-300">
          <p className="text-slate-500 leading-relaxed italic">{a[lang]}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const { lang } = useLanguage();

  const questions = [
    { q: { EN: 'Is it safe?', ES: '¿Es seguro?' }, a: { EN: 'Paramotoring is one of the safest forms of aviation. We use high-stability wings and maintain strict protocols. Our personalized ratio ensures constant supervision.', ES: 'El paramotor es una de las formas más seguras de aviación. Usamos velas de alta estabilidad y protocolos estrictos.' } },
    { q: { EN: 'Do I need experience?', ES: '¿Necesito experiencia?' }, a: { EN: 'Absolutely not. Our initiation programs are designed to take you from zero to total confidence at your own pace.', ES: 'Rotundamente no. Nuestros programas de iniciación están diseñados para llevarte de cero a la confianza total.' } },
    { q: { EN: 'What happens if the engine stops?', ES: '¿Qué pasa si el motor se para?' }, a: { EN: 'A paramotor is a glider first. If the engine stops, the wing continues to fly and you glide down to a safe, controlled landing. We train you specifically for this.', ES: 'Un paramotor es ante todo un planeador. Si el motor se para, la vela sigue volando y planeas hasta un aterrizaje seguro.' } },
    { q: { EN: 'Can I fly if I am afraid of heights?', ES: '¿Puedo volar si tengo miedo a las alturas?' }, a: { EN: 'Many of our students start with vertigo. Paradoxically, flying in a paramotor often feels like looking at a map; the lack of connection to the ground dissolves the traditional sensation of vertigo.', ES: 'Muchos alumnos empiezan con vértigo. Paradójicamente, volar en paramotor a menudo disuelve esa sensación.' } },
    { q: { EN: 'What is the best time to fly?', ES: '¿Cuál es la mejor hora para volar?' }, a: { EN: 'In Malaga, we usually fly in the mornings when the air is calm and the "sea breeze" has not yet kicked in. It is the smoothest experience.', ES: 'En Málaga solemos volar por las mañanas cuando el aire está en calma.' } },
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-16">{lang === 'EN' ? 'Safety & Common Doubts' : 'Seguridad y Dudas'}</h1>
        <div className="space-y-2">
          {questions.map((item, i) => (
            <FAQItem key={i} q={item.q} a={item.a} lang={lang} />
          ))}
        </div>
        <div className="mt-20 p-10 bg-slate-50 rounded-[2rem] border border-slate-100 text-center">
          <h4 className="font-bold mb-4">{lang === 'EN' ? 'Still have questions?' : '¿Aún tienes preguntas?'}</h4>
          <p className="text-slate-500 text-sm mb-8">{lang === 'EN' ? 'We prefer direct conversation. Every pilot is different.' : 'Preferimos la conversación directa. Cada piloto es diferente.'}</p>
          <a href="https://wa.me/34660567537" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-colors">
            {lang === 'EN' ? 'Talk to us on WhatsApp' : 'Habla con nosotros por WhatsApp'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
