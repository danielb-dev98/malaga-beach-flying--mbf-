
import React from 'react';
import { useLanguage } from '../App';

const About: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-white">
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-950 mb-8">{lang === 'EN' ? 'The Art of Flight' : 'El Arte del Vuelo'}</h1>
          <p className="text-xl text-slate-600 leading-relaxed mb-6 font-light">
            {lang === 'EN' 
              ? 'Malaga Beach Flying was born from a simple observation: the best way to learn is with someone who treats your progress as their own.' 
              : 'Malaga Beach Flying nació de una observación simple: la mejor forma de aprender es con alguien que trate tu progreso como propio.'}
          </p>
          <p className="text-lg text-slate-500 leading-relaxed italic border-l-4 border-cyan-500 pl-6 py-4">
            {lang === 'EN' 
              ? 'We focus on small groups, maximum safety, and the use of cutting-edge technology to make flying accessible, calm, and safe.' 
              : 'Nos enfocamos en grupos pequeños, máxima seguridad y el uso de tecnología de punta para hacer el vuelo accesible y seguro.'}
          </p>
        </div>
        <div className="rounded-[3rem] overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/about-mbf/1000/1200" alt="Philosophy" className="w-full aspect-[4/5] object-cover" />
        </div>
      </section>

      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16 text-center">{lang === 'EN' ? 'The Core Principles' : 'Principios Fundamentales'}</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { t: { EN: 'Control', ES: 'Control' }, d: { EN: 'Understanding the mechanics behind every movement. Knowledge dissolves fear.', ES: 'Entender la mecánica detrás de cada movimiento. El conocimiento disuelve el miedo.' } },
              { t: { EN: 'Calm', ES: 'Calma' }, d: { EN: 'Aviation requires a steady mind. We teach you how to maintain tranquility in the sky.', ES: 'La aviación requiere una mente estable. Te enseñamos a mantener la tranquilidad.' } },
              { t: { EN: 'Excellence', ES: 'Excelencia' }, d: { EN: 'No compromises on equipment or weather decisions. Excellence is our only standard.', ES: 'Sin concesiones en equipo o decisiones de meteo. La excelencia es nuestro estándar.' } },
            ].map((p, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto mb-8 text-cyan-400 font-bold text-2xl">0{i+1}</div>
                <h4 className="text-xl font-bold mb-4">{p.t[lang]}</h4>
                <p className="text-slate-400 font-light text-sm leading-relaxed">{p.d[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">{lang === 'EN' ? 'Benajarafe: Our Playground' : 'Benajarafe: Nuestro Campo'}</h2>
          <p className="text-slate-600 mb-12">
            {lang === 'EN' 
              ? 'We chose this location for its wide, safe beaches and its unique wind patterns. It is one of the safest places in Europe to learn paramotoring.' 
              : 'Elegimos esta ubicación por sus playas amplias y seguras y sus patrones de viento únicos. Es uno de los lugares más seguros de Europa.'}
          </p>
          <div className="rounded-3xl overflow-hidden aspect-video">
            <img src="https://picsum.photos/seed/benajarafe/1200/800" alt="Benajarafe Beach" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
