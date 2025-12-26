
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Tandem: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-white">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4 block">{lang === 'EN' ? 'Experience the Sky' : 'Vive el Cielo'}</span>
            <h1 className="text-5xl font-bold tracking-tight text-slate-950 mb-8 leading-[1.1]">
              {lang === 'EN' ? 'Benajarafe Tandem Experience' : 'Experiencia Tándem Benajarafe'}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">
              {lang === 'EN' 
                ? 'Sit back, relax, and enjoy the most peaceful flight of your life. Our mentors take care of everything while you enjoy the stunning views of the Malaga coastline.' 
                : 'Siéntate, relájate y disfruta del vuelo más pacífico de tu vida. Nuestros mentores se encargan de todo mientras disfrutas de las vistas.'}
            </p>
            <div className="flex gap-4">
              <Link to="/booking" className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 shadow-xl">{lang === 'EN' ? 'Book a date' : 'Reservar fecha'}</Link>
              <Link to="/contact" className="px-8 py-4 border border-slate-300 rounded-full font-bold hover:bg-white">{lang === 'EN' ? 'Ask questions' : 'Hacer preguntas'}</Link>
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/tandem-main/1000/1000" alt="Tandem over Malaga" className="w-full aspect-square object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">{lang === 'EN' ? 'The Flight Options' : 'Opciones de Vuelo'}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { t: { EN: 'Standard Experience (15 min)', ES: 'Experiencia Estándar (15 min)' }, d: { EN: 'A perfect introduction to flight. Enough time to feel the peace and see the coastline from a new perspective.', ES: 'Una introducción perfecta al vuelo. Tiempo suficiente para sentir la paz y ver la costa desde otra perspectiva.' } },
              { t: { EN: 'Deep Immersion (30 min)', ES: 'Inmersión Profunda (30 min)' }, d: { EN: 'The ultimate panoramic flight. We explore more of the Benajarafe coastline and give you a real taste of air mastery.', ES: 'El vuelo panorámico definitivo. Exploramos más de la costa de Benajarafe.' } },
            ].map((opt, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] border border-slate-100 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{opt.t[lang]}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{opt.d[lang]}</p>
                </div>
                <Link to="/booking" className="text-cyan-600 font-bold flex items-center group">
                  {lang === 'EN' ? 'Plan your first flight' : 'Planifica tu primer vuelo'}
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">{lang === 'EN' ? 'What to expect' : 'Qué esperar'}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { q: { EN: 'What should I wear?', ES: '¿Qué debo llevar?' }, a: { EN: 'Comfortable sport clothes and sneakers. A light jacket is recommended even in summer.', ES: 'Ropa deportiva cómoda y zapatillas. Se recomienda una chaqueta ligera incluso en verano.' } },
              { q: { EN: 'Duration of activity', ES: 'Duración de la actividad' }, a: { EN: 'Expect to spend about 1-1.5 hours with us for preparation, briefing, and the flight.', ES: 'Cuenta con pasar unas 1-1.5 horas con nosotros para la preparación y el vuelo.' } },
              { q: { EN: 'The location', ES: 'La ubicación' }, a: { EN: 'We meet directly at the Benajarafe beach flight point. Easy parking and premium vibes.', ES: 'Quedamos directamente en el punto de vuelo de Benajarafe. Fácil parking y ambiente premium.' } },
              { q: { EN: 'Safety Protocol', ES: 'Protocolo de Seguridad' }, a: { EN: 'A full briefing is provided. We only take off when the air is perfectly calm.', ES: 'Se proporciona un briefing completo. Solo despegamos cuando el aire está perfectamente en calma.' } },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700">
                <h4 className="font-bold mb-3 text-cyan-400">{item.q[lang]}</h4>
                <p className="text-sm text-slate-400 font-light">{item.a[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tandem;
