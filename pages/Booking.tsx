
import React from 'react';
import { useLanguage } from '../App';

const Booking: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 mb-6">
            {lang === 'EN' ? 'Plan Your First Day' : 'Planifica tu Primer Día'}
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {lang === 'EN' 
              ? 'We want to make sure this is right for you. Safety is our priority, which is why every booking includes a brief discovery call.' 
              : 'Queremos asegurarnos de que esto sea para ti. La seguridad es nuestra prioridad, por eso cada reserva incluye una breve llamada.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { n: '01', t: { EN: 'Select a Date', ES: 'Selecciona Fecha' }, d: { EN: 'Choose your preferred window for flying.', ES: 'Elige tu ventana preferida para volar.' } },
            { n: '02', t: { EN: 'Discovery Call', ES: 'Entrevista Breve' }, d: { EN: 'A 5-min talk to ensure safety and readiness.', ES: 'Una charla de 5 min para asegurar seguridad.' } },
            { n: '03', t: { EN: 'Final Confirmation', ES: 'Confirmación Final' }, d: { EN: 'Meteorological green light and final details.', ES: 'Luz verde meteorológica y detalles finales.' } },
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <span className="text-3xl font-black text-slate-100 block mb-4">{step.n}</span>
              <h4 className="font-bold text-slate-900 mb-2">{step.t[lang]}</h4>
              <p className="text-sm text-slate-500">{step.d[lang]}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{lang === 'EN' ? 'Connect via WhatsApp' : 'Conectar por WhatsApp'}</h3>
              <p className="text-slate-500 text-sm">{lang === 'EN' ? 'Instant scheduling and questions.' : 'Agenda instantánea y preguntas.'}</p>
            </div>
            <a href="https://wa.me/34660567537" className="w-full md:w-auto px-10 py-4 bg-green-500 text-white rounded-full font-bold text-lg hover:bg-green-600 transition-colors shadow-lg shadow-green-200 text-center">
              {lang === 'EN' ? 'Message Us Now' : 'Envíanos un mensaje'}
            </a>
          </div>
          
          <div className="p-12 text-center bg-white">
            <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-8">{lang === 'EN' ? 'Or schedule a call' : 'O agenda una llamada'}</p>
            <div className="aspect-[16/9] bg-slate-50 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-200">
               <p className="text-slate-400 italic text-sm">[ Calendly / Scheduling Widget Integration ]</p>
            </div>
          </div>
        </div>

        <div className="mt-16 p-8 bg-cyan-50 border border-cyan-100 rounded-3xl text-center">
          <h4 className="text-cyan-800 font-bold mb-2">{lang === 'EN' ? 'Weather Policy' : 'Política Meteorológica'}</h4>
          <p className="text-cyan-700 text-sm italic">
            {lang === 'EN' 
              ? 'Safety first. If conditions are not optimal, we will reschedule your session at no inconvenience to you.' 
              : 'Seguridad primero. Si las condiciones no son óptimas, reprogramaremos tu sesión sin inconvenientes.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
