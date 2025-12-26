
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { TRAINING_PROGRAMS } from '../constants';

const Training: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-cyan-600 font-bold uppercase tracking-widest text-xs mb-4 block">{lang === 'EN' ? 'Our Methodology' : 'Nuestra Metodología'}</span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-950 mb-8 max-w-3xl leading-[1.1]">
            {lang === 'EN' ? 'Ultra-Personalized Mentoring' : 'Mentoría Ultra-Personalizada'}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            {lang === 'EN' 
              ? 'We don\'t teach courses. We build confidence and mastery through a unique ratio and guided in-flight experiences.' 
              : 'No enseñamos cursos. Construimos confianza y dominio a través de un ratio único y experiencias guiadas.'}
          </p>
        </div>
      </section>

      {/* Philosophy Points */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { 
              t: { EN: 'Ratio 1:1 or 2:1', ES: 'Ratio 1:1 o 2:1' }, 
              d: { EN: 'Direct attention where every mistake is corrected instantly in a calm environment.', ES: 'Atención directa donde cada error se corrige al instante en un ambiente calmado.' } 
            },
            { 
              t: { EN: 'In-Flight Training', ES: 'Entrenamiento en Vuelo' }, 
              d: { EN: 'Tandem flights as the core of your learning. Feel the controls with a mentor by your side.', ES: 'Vuelos tándem como núcleo. Siente los mandos con un mentor a tu lado.' } 
            },
            { 
              t: { EN: 'Aviation Gear', ES: 'Equipo de Aviación' }, 
              d: { EN: 'Agility 125cc motors and Windtech wings. High-performance met with maximum safety.', ES: 'Motores Agility 125cc y velas Windtech. Alto rendimiento con máxima seguridad.' } 
            }
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-bold mb-4">{item.t[lang]}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.d[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Detail */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {TRAINING_PROGRAMS.map((prog, idx) => (
            <div key={prog.id} className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
              <div className="flex-1">
                <span className="text-cyan-600 font-bold text-xs uppercase tracking-widest block mb-4">Program 0{idx+1}</span>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">{prog.title[lang]}</h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed italic">{prog.description[lang]}</p>
                <div className="space-y-4 mb-10">
                  {prog.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-3 text-slate-800">
                      <svg className="w-5 h-5 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" /></svg>
                      <span className="font-medium">{f[lang]}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to="/booking" 
                  className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                >
                  {lang === 'EN' ? 'Ask if you\'re a good fit' : 'Pregunta si es para ti'}
                </Link>
              </div>
              <div className="flex-1 w-full rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={`https://picsum.photos/seed/prog-${prog.id}/1000/800`} 
                  alt={prog.title[lang]} 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">{lang === 'EN' ? 'Physical Requirements & Readiness' : 'Requisitos Físicos'}</h2>
          <p className="text-slate-400 mb-12 leading-relaxed">
            {lang === 'EN' 
              ? 'Flying is for almost everyone, but it requires a basic level of mobility and health. We evaluate every case individually during our interview.' 
              : 'Volar es para casi todos, pero requiere un nivel básico de movilidad y salud. Evaluamos cada caso individualmente.'}
          </p>
          <div className="grid grid-cols-2 gap-4 text-left">
             <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <h4 className="font-bold mb-2">{lang === 'EN' ? 'Weight Range' : 'Rango de Peso'}</h4>
               <p className="text-xs text-slate-500">45kg - 100kg approx.</p>
             </div>
             <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800">
               <h4 className="font-bold mb-2">{lang === 'EN' ? 'Mobility' : 'Movilidad'}</h4>
               <p className="text-xs text-slate-500">{lang === 'EN' ? 'Able to run 10-20 meters.' : 'Capaz de correr 10-20 metros.'}</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
