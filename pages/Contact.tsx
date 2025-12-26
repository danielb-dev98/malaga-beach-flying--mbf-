
import React from 'react';
import { useLanguage } from '../App';

const Contact: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-slate-50 py-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 mb-8">{lang === 'EN' ? 'Let\'s Start Your Journey' : 'Empecemos tu Viaje'}</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-12">
            {lang === 'EN' 
              ? 'Whether you want a one-time tandem flight or to become a master pilot, we are here to guide you.' 
              : 'Ya sea que quieras un vuelo tándem puntual o convertirte en un piloto maestro, estamos aquí para guiarte.'}
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.767 0 1.267.405 2.436 1.091 3.39l-.713 2.603 2.66-.698a5.733 5.733 0 0 0 2.729.697c3.181 0 5.767-2.586 5.767-5.767 0-3.181-2.586-5.767-5.767-5.767zm3.39 8.215c-.149.42-.764.767-1.045.81-.281.043-.623.076-1.763-.369-1.46-.57-2.396-2.053-2.47-2.15-.073-.097-.606-.806-.606-1.537 0-.731.383-1.092.52-1.238.136-.147.299-.184.398-.184.1 0 .199.001.285.005.089.004.21-.034.33.25.123.291.42 1.025.457 1.1.037.074.062.161.012.261-.05.1-.075.161-.15.25-.074.088-.156.197-.222.264-.074.075-.152.156-.065.305.087.15.385.635.826 1.029.567.508 1.046.666 1.196.74.15.074.238.062.327-.04.089-.102.383-.446.485-.596.102-.15.204-.124.343-.074.139.05 1.045.493 1.226.583.18.09.3.136.344.21.044.074.044.426-.105.846z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">WhatsApp</h4>
                <p className="text-slate-500 text-sm mb-2">{lang === 'EN' ? 'Fastest response for availability.' : 'Respuesta más rápida para disponibilidad.'}</p>
                <a href="https://wa.me/34660567537" className="text-cyan-600 font-bold">+34 660 56 75 37</a>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                <p className="text-slate-500 text-sm mb-2">{lang === 'EN' ? 'For deep inquiries or group bookings.' : 'Para consultas profundas o reservas grupales.'}</p>
                <a href="mailto:malagabeachflying@gmail.com" className="text-cyan-600 font-bold">malagabeachflying@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Location</h4>
                <p className="text-slate-500 text-sm mb-2">Benajarafe Beach, Málaga, Spain.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100">
          <h3 className="text-2xl font-bold mb-8">{lang === 'EN' ? 'Send a Quick Message' : 'Envía un Mensaje'}</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{lang === 'EN' ? 'Full Name' : 'Nombre Completo'}</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{lang === 'EN' ? 'Email Address' : 'Email'}</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{lang === 'EN' ? 'What are you interested in?' : '¿En qué estás interesado?'}</label>
              <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all">
                <option>{lang === 'EN' ? 'Initial Training' : 'Entrenamiento Inicial'}</option>
                <option>{lang === 'EN' ? 'Tandem Experience' : 'Experiencia Tándem'}</option>
                <option>{lang === 'EN' ? 'Advanced Mentorinig' : 'Mentoría Avanzada'}</option>
                <option>{lang === 'EN' ? 'Other' : 'Otro'}</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">{lang === 'EN' ? 'Your Message' : 'Tu Mensaje'}</label>
              <textarea rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"></textarea>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 shadow-xl transition-all">
              {lang === 'EN' ? 'Send Inquiry' : 'Enviar Consulta'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
