
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';

const Home: React.FC = () => {
  const { lang, t } = useLanguage();

  const trainingPathways = [
    {
      id: 'private',
      title: { EN: 'Private Training Days', ES: 'Días de Entrenamiento Privado' },
      duration: { EN: '3–4 hours per session', ES: '3–4 horas por sesión' },
      description: { 
        EN: 'Total focus on your progress. Ultra-personalized sessions where you are the sole protagonist.',
        ES: 'Enfoque total en tu progreso. Sesiones ultra-personalizadas donde tú eres el único protagonista.'
      },
      includes: {
        EN: [
          'One-to-one mentor ratio',
          'Intensive ground handling',
          'Aviation safety protocols',
          'Guided flight experience'
        ],
        ES: [
          'Ratio de mentoría 1:1',
          'Manejo de tierra intensivo',
          'Protocolos de seguridad',
          'Experiencia de vuelo guiada'
        ]
      },
      benefit: {
        EN: 'Build confidence at your own pace without pressure.',
        ES: 'Construye confianza a tu ritmo y sin presiones.'
      }
    },
    {
      id: 'initiation',
      title: { EN: 'OpenPilot Initiation', ES: 'Iniciación OpenPilot' },
      duration: { EN: 'Complete Foundation', ES: 'Fundación Completa' },
      recommended: true,
      description: {
        EN: 'From fundamentals to your first flights. Includes theory, ground handling, and aviation protocols.',
        ES: 'Desde los fundamentos hasta tus primeros vuelos. Incluye teoría, manejo en tierra y protocolos de aviación.'
      },
      includes: {
        EN: [
          'Aerodynamics & weather theory',
          'Precision inflation techniques',
          'Radio-guided transitions',
          'Supervised flight phases'
        ],
        ES: [
          'Teoría de aerodinámica y meteo',
          'Técnicas de inflado de precisión',
          'Transiciones radio-guiadas',
          'Fases de vuelo supervisadas'
        ]
      },
      benefit: {
        EN: 'A calm and solid foundation for a safe flying future.',
        ES: 'Una base sólida y calmada para un futuro de vuelo seguro.'
      }
    },
    {
      id: 'advanced',
      title: { EN: 'Advanced Training', ES: 'Entrenamiento Avanzado' },
      duration: { EN: 'Mastery & Autonomy', ES: 'Maestría y Autonomía' },
      description: {
        EN: 'For those seeking total mastery. Refining techniques, navigation, and active safety.',
        ES: 'Para aquellos que buscan el dominio total. Perfeccionamiento de técnicas, navegación y seguridad activa.'
      },
      includes: {
        EN: [
          'Advanced XC navigation',
          'Complex safety scenarios',
          'Thermal air mastery',
          'Precision landing protocols'
        ],
        ES: [
          'Navegación XC avanzada',
          'Escenarios de seguridad complejos',
          'Dominio del aire térmico',
          'Protocolos de aterrizaje de precisión'
        ]
      },
      benefit: {
        EN: 'Independence, precision, and the autonomy of a master pilot.',
        ES: 'Independencia, precisión y la autonomía de un piloto maestro.'
      }
    }
  ];

  const featuredReview = {
    name: 'Marcos',
    role: { EN: 'Future Pilot', ES: 'Futuro Piloto' },
    quote: { 
      EN: 'Absolute mastery that dissolves doubt.', 
      ES: 'Maestría absoluta que disuelve cualquier duda.' 
    },
    content: { 
      EN: 'I arrived with a deep fear of losing control. The team’s calm and technical precision created a mental "click" that transformed my anxiety into total trust. It wasn’t just a flight; it was a profound personal transformation.', 
      ES: 'Llegué con un profundo miedo a perder el control. La calma y precisión técnica del equipo creó un "click" mental que transformó mi ansiedad en confianza total. No fue solo un vuelo; fue una transformación personal profunda.' 
    }
  };

  const secondaryReviews = [
    {
      name: 'Sandra',
      role: { EN: 'Traveler', ES: 'Viajera' },
      quote: { 
        EN: 'Safety felt like a warm embrace.', 
        ES: 'La seguridad se sintió como un abrazo cálido.' 
      },
      content: { 
        EN: 'By far the best experience of my life. I felt an incredible sense of peace from the first second. I am already planning my return.', 
        ES: 'De lejos la mejor experiencia de mi vida. Sentí una paz increíble desde el primer segundo. Ya estoy planeando mi regreso.' 
      }
    },
    {
      name: 'Javier',
      role: { EN: 'Resident', ES: 'Residente' },
      quote: { 
        EN: 'A true blessing for growth.', 
        ES: 'Una auténtica bendición para el crecimiento.' 
      },
      content: { 
        EN: 'Seeing my fears dissolve both on the ground and in the air has been a priceless experience of development.', 
        ES: 'Ver mis miedos disolverse tanto en tierra como en el aire ha sido una experiencia de desarrollo impagable.' 
      }
    },
    {
      name: 'Ari',
      role: { EN: 'Tandem Experience', ES: 'Experiencia Tándem' },
      quote: { 
        EN: 'Beauty lies behind the fear.', 
        ES: 'La belleza está tras el miedo.' 
      },
      content: { 
        EN: 'They made me feel protected at all times, showing me that the most beautiful things in life require a little courage.', 
        ES: 'Me hicieron sentir protegida en todo momento, mostrándome que las cosas más bellas de la vida requieren valor.' 
      }
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/flight1/1920/1080" 
            alt="Paramotor over Malaga Beach" 
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/30"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/50 bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8">
            {lang === 'EN' ? 'Private Paramotor Mentoring' : 'Mentoría de Paramotor Privada'}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
            {lang === 'EN' ? 'Master the Sky with Confidence' : 'Domina el Cielo con Confianza'}
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            {lang === 'EN' 
              ? 'Ultra-personalized paramotor training in the heart of Costa del Sol. Where safety meets freedom, and every flight is a lesson in mastery.' 
              : 'Entrenamiento de paramotor ultra-personalizado en el corazón de la Costa del Sol. Donde la seguridad se une a la libertad y cada vuelo es una lección de maestría.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg hover:bg-cyan-50 transition-all shadow-xl shadow-white/5"
            >
              {lang === 'EN' ? 'Check availability' : 'Ver disponibilidad'}
            </Link>
            <Link 
              to="/training" 
              className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 text-white rounded-full font-bold text-lg hover:bg-slate-700 glass transition-all"
            >
              {lang === 'EN' ? 'See how training works' : 'Mira cómo es el entrenamiento'}
            </Link>
          </div>

          {/* Trust Chips Row */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400 text-[10px] sm:text-xs font-semibold uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400 font-bold">5.0 ★</span>
              {lang === 'EN' ? 'Verified reviews (140+)' : 'Reseñas verificadas (140+)'}
            </div>
            <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <div>Benajarafe • Costa del Sol</div>
            <div className="hidden sm:block w-1 h-1 bg-slate-700 rounded-full"></div>
            <div>{lang === 'EN' ? '1–2 students max' : 'Máximo 1–2 alumnos'}</div>
          </div>
        </div>
      </section>

      {/* Refined Training Pathways */}
      <section className="py-32 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                {lang === 'EN' ? 'Training Pathways' : 'Vías de Entrenamiento'}
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                {lang === 'EN'
                  ? 'Designed for different commitment levels, all sharing our ultra-personal philosophy.'
                  : 'Diseñado para diferentes niveles de compromiso, compartiendo nuestra filosofía personalizada.'}
              </p>
            </div>
            <Link 
              to="/training" 
              className="text-cyan-600 font-bold flex items-center group relative py-2"
            >
              {lang === 'EN' ? 'Explore all programs' : 'Explora los programas'}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {trainingPathways.map((path) => (
              <div key={path.id} className="relative bg-white rounded-[2.5rem] p-10 shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-2xl hover:border-cyan-100 hover:-translate-y-1 hover:shadow-cyan-500/5 transition-all duration-500 group">
                {path.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-cyan-600 text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-cyan-500/20 z-10">
                    {lang === 'EN' ? 'Recommended' : 'Recomendado'}
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{path.title[lang]}</h3>
                  <p className="text-cyan-600 text-[10px] font-bold uppercase tracking-widest mb-6">{path.duration[lang]}</p>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 font-light italic">
                    {path.description[lang]}
                  </p>

                  <div className="mb-8">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">{lang === 'EN' ? 'What’s included' : 'Qué incluye'}</p>
                    <ul className="space-y-3">
                      {path.includes[lang].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-light">
                          <svg className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-slate-50 mb-10">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">{lang === 'EN' ? 'Benefits' : 'Beneficios'}</p>
                    <p className="text-slate-900 text-sm font-medium leading-relaxed">
                      {path.benefit[lang]}
                    </p>
                  </div>
                </div>

                <Link 
                  to="/booking" 
                  className="block w-full text-center py-4 bg-slate-900 text-white rounded-full font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200 group-hover:shadow-cyan-500/10"
                >
                  {lang === 'EN' ? 'Check availability' : 'Ver disponibilidad'}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 text-xs font-medium max-w-xl mx-auto italic">
              {lang === 'EN' 
                ? 'All training is ultra-personalized with a maximum ratio of 1–2 students to ensure your safety and mastery are never rushed.' 
                : 'Todo el entrenamiento es ultra-personalizado con un ratio máximo de 1–2 alumnos para asegurar que tu seguridad y maestría nunca se apresuren.'}
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Reviews Section */}
      <section className="py-32 bg-white overflow-hidden border-b border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              {lang === 'EN' ? 'People like you had doubts too' : 'Ellos también tenían dudas'}
            </h2>
            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed max-w-3xl mx-auto">
              {lang === 'EN' 
                ? 'We all start with a racing heart. It’s natural to hesitate before taking to the sky. These stories aren\'t just about flying; they’re about how the right mentorship turns that initial fear into a lifetime of calm mastery and freedom.' 
                : 'Todos empezamos con el corazón acelerado. Es natural dudar antes de lanzarse al cielo. Estas historias no son solo sobre volar; son sobre cómo la mentoría adecuada convierte ese miedo inicial en una vida de maestría y libertad.'}
            </p>

            {/* Centered Authority Badge */}
            <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-6 px-8 py-4 bg-slate-50 rounded-full border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="text-yellow-500 text-lg">★★★★★</span>
                <span className="text-slate-900 font-bold text-sm">5.0</span>
                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                <span className="text-slate-500 text-sm">{lang === 'EN' ? '140+ verified Google reviews' : '140+ reseñas verificadas en Google'}</span>
              </div>
              <a 
                href="https://www.google.com/search?sca_esv=e5cbd14f40937cac&sxsrf=AE3TifOhpcX1KWhXWO4G1hifrKWFeHbzbQ&q=Paramotor+school+Malaga+beach+flying"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-bold text-xs uppercase tracking-widest hover:text-cyan-700 transition-colors flex items-center gap-2"
              >
                {lang === 'EN' ? 'View on Google' : 'Ver en Google'}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
            {/* Featured Story */}
            <div className="lg:col-span-7 p-10 md:p-12 rounded-[3rem] bg-slate-900 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10H14.017V7H15.017C18.883 7 22.017 10.134 22.017 14V21H14.017ZM2.017 21L2.017 18C2.017 16.8954 2.91243 16 4.017 16H7.017V14C7.017 11.7909 5.2261 10 3.017 10H2.017V7H3.017C6.883 7 10.017 10.134 10.017 14V21H2.017Z" /></svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] font-bold uppercase tracking-widest mb-8 border border-cyan-500/20">
                  {lang === 'EN' ? 'Featured Pilot Story' : 'Historia de Piloto Destacada'}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  "{featuredReview.quote[lang]}"
                </h3>
                <p className="text-slate-300 text-lg font-light leading-relaxed mb-8 max-w-xl">
                  {featuredReview.content[lang]}
                </p>
                <button className="text-cyan-400 text-sm font-bold uppercase tracking-widest hover:text-cyan-300 transition-colors">
                  {lang === 'EN' ? 'Read full journey' : 'Leer viaje completo'}
                </button>
              </div>
              <div className="flex items-center space-x-4 mt-12 pt-8 border-t border-slate-800">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center font-bold text-slate-400 text-xl">
                  {featuredReview.name[0]}
                </div>
                <div>
                  <p className="font-bold text-white">{featuredReview.name}</p>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">{featuredReview.role[lang]}</p>
                </div>
              </div>
            </div>

            {/* Secondary Stories Grid */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondaryReviews.map((review, idx) => (
                <div 
                  key={idx} 
                  className="p-8 rounded-[2.5rem] bg-white border border-slate-100 flex flex-col justify-between hover:border-cyan-100 hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex gap-0.5 text-yellow-400 scale-75 origin-left">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                        ))}
                      </div>
                      <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h4.78c-.19 1.06-1.22 3.1-4.78 3.1-3.09 0-5.61-2.56-5.61-5.71s2.52-5.71 5.61-5.71c1.76 0 2.93.75 3.6 1.39l2.58-2.48C17.01 3.22 14.95 2 12.48 2 6.69 2 2 6.69 2 12.48s4.69 10.48 10.48 10.48c5.61 0 10.48-4.32 10.48-10.48 0-.75-.08-1.32-.23-1.88h-10.25z"/></svg>
                        Verified
                      </span>
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 leading-tight">"{review.quote[lang]}"</h4>
                    <p className="text-slate-500 text-sm leading-relaxed font-light line-clamp-2">
                      {review.content[lang]}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center font-bold text-slate-400 text-xs">
                        {review.name[0]}
                      </div>
                      <p className="text-xs font-bold text-slate-700">{review.name}</p>
                    </div>
                    <button className="text-[10px] text-cyan-600 font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      {lang === 'EN' ? 'Read more' : 'Leer más'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Refined Explanatory Block */}
          <div className="max-w-xl mx-auto text-center mt-24 pt-16 border-t border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              {lang === 'EN' ? 'Why these stories matter' : 'Por qué importan estas historias'}
            </h3>
            <div className="space-y-6 text-slate-500 font-light leading-relaxed text-lg">
              <p>
                {lang === 'EN' 
                  ? 'Most people don’t hesitate because of technique. They hesitate because of fear, lack of trust, and the feeling of not being truly supported.' 
                  : 'La mayoría de la gente no duda por la técnica. Dudan por el miedo, la falta de confianza y la sensación de no sentirse verdaderamente apoyados.'}
              </p>
              <p>
                {lang === 'EN' 
                  ? 'Our approach is built to remove those barriers through time, calm decision-making, safety-first progression, and close guidance. We don’t just teach you to fly — we help you build the confidence to master the air.' 
                  : 'Nuestro enfoque está diseñado para eliminar esas barreras mediante el tiempo, la toma de decisiones calmada, una progresión que prioriza la seguridad y una guía cercana. No solo te enseñamos a volar; te ayudamos a construir la confianza para dominar el aire.'}
              </p>
              <p className="text-slate-400 font-light italic text-base">
                {lang === 'EN' 
                  ? 'This is not about rushing to fly. It’s about feeling ready.' 
                  : 'No se trata de apresurarse a volar. Se trata de sentirse listo.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why MBF vs Massive Schools */}
      <section className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
              {lang === 'EN' 
                ? 'Most schools optimize for groups. We optimize for you.' 
                : 'La mayoría de escuelas se optimizan para grupos. Nosotros nos optimizamos para ti.'}
            </h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{lang === 'EN' ? 'Ultra-Personalized Ratio' : 'Ratio Ultra-Personalizado'}</h4>
                  <p className="text-slate-400 font-light">{lang === 'EN' ? 'Maximum 1-2 students per session. Often 2 instructors for 1 student.' : 'Máximo 1-2 alumnos. A menudo 2 instructores para 1 solo alumno.'}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{lang === 'EN' ? 'Fly from Day One' : 'Vuela desde el primer día'}</h4>
                  <p className="text-slate-400 font-light">{lang === 'EN' ? 'No endless theory on the ground. Weather permitting, you experience flight immediately with our guided tandem method.' : 'Sin teoría interminable en tierra. Si la meteo permite, vuelas de inmediato con nuestro método tándem guiado.'}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-800">
            <img src="https://picsum.photos/seed/mbf-personal/800/1000" alt="Personalized Training" className="w-full aspect-[4/5] object-cover" />
          </div>
        </div>
      </section>

      {/* How it Works / Methodology */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight mb-4">{lang === 'EN' ? 'The Master Method' : 'El Método Maestro'}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{lang === 'EN' ? 'Our unique approach combines ground mastery with real in-flight instruction from the very start.' : 'Nuestro enfoque combina el dominio en tierra con instrucción real en vuelo desde el principio.'}</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: { EN: 'Ground Control', ES: 'Control en Tierra' }, desc: { EN: 'Mastering the wing dynamics and motor safety protocols.', ES: 'Dominando la dinámica de la vela y protocolos del motor.' } },
              { title: { EN: 'Guided Tandem', ES: 'Tándem Guiado' }, desc: { EN: 'Instruction in the air where you handle the controls with a mentor.', ES: 'Instrucción en el aire donde tú manejas los mandos con un mentor.' } },
              { title: { EN: 'First Solo', ES: 'Primer Vuelo Solo' }, desc: { EN: 'Radioguided excellence once you achieve total confidence.', ES: 'Excelencia radio-guiada una vez logras confianza total.' } },
              { title: { EN: 'Advanced Mastery', ES: 'Dominio Avanzado' }, desc: { EN: 'Continuous refinement of your skills and navigation.', ES: 'Refinamiento continuo de tus habilidades y navegación.' } },
            ].map((step, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden group">
                <span className="absolute top-4 right-4 text-6xl font-black text-slate-100 group-hover:text-cyan-50 transition-colors">0{idx+1}</span>
                <h3 className="text-xl font-bold mb-4 relative z-10">{step.title[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed relative z-10">{step.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tandem Flights Snippet */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/tandem-vibe/800/600" alt="Tandem Vibe" className="w-full object-cover aspect-video" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6">{lang === 'EN' ? 'Experience Flight' : 'Vive el Vuelo'}</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              {lang === 'EN' 
                ? 'Not ready for training? Start with a tandem experience over Benajarafe Beach. 15 or 30 minutes of pure peace, guided by mentors.' 
                : '¿No estás listo para entrenar? Empieza con una experiencia tándem sobre Benajarafe. 15 o 30 minutos de paz pura.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/tandem" className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold text-center hover:bg-slate-800 transition-colors">
                {lang === 'EN' ? 'Tandem Options' : 'Opciones Tándem'}
              </Link>
              <Link to="/contact" className="px-8 py-3 border border-slate-300 rounded-full font-bold text-center hover:bg-white transition-colors">
                {lang === 'EN' ? 'Ask questions' : 'Hacer preguntas'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Location */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
          <div>
             <h2 className="text-3xl font-bold mb-8">{lang === 'EN' ? 'Uncompromising Safety' : 'Seguridad sin Compromisos'}</h2>
             <ul className="space-y-6">
                {[
                  { t: { EN: 'Weather Awareness', ES: 'Conciencia Meteorológica' }, d: { EN: 'We only fly in optimal conditions. No pressure, no rush.', ES: 'Solo volamos en condiciones óptimas. Sin presión, sin prisa.' } },
                  { t: { EN: 'Agility 125cc Equipment', ES: 'Equipo Agility 125cc' }, d: { EN: 'Custom lightweight paramotors designed for learning with real power.', ES: 'Paramotores ligeros personalizados diseñados para el aprendizaje.' } },
                  { t: { EN: 'Windtech Technology', ES: 'Tecnología Windtech' }, d: { EN: 'High-safety wings that offer stability and forgiveness for beginners.', ES: 'Velas de alta seguridad que ofrecen estabilidad para principiantes.' } },
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-cyan-500 font-bold">0{i+1}</span>
                    <div>
                      <h4 className="font-bold">{item.t[lang]}</h4>
                      <p className="text-sm text-slate-500">{item.d[lang]}</p>
                    </div>
                  </li>
                ))}
             </ul>
          </div>
          <div className="bg-slate-950 p-12 rounded-[3rem] text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">{lang === 'EN' ? 'Benajarafe, Málaga' : 'Benajarafe, Málaga'}</h2>
            <p className="text-slate-400 font-light mb-8 leading-relaxed">
              {lang === 'EN' 
                ? 'Located in one of the best micro-climates in Europe. Wide beaches, calm winds, and a premium atmosphere that makes every session feel like a getaway.' 
                : 'Ubicados en uno de los mejores microclimas de Europa. Playas amplias, vientos suaves y una atmósfera premium.'}
            </p>
            <Link to="/about" className="text-cyan-400 font-bold flex items-center group">
              {lang === 'EN' ? 'Discover our location' : 'Descubre nuestra ubicación'}
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-cyan-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            {lang === 'EN' ? 'Ready for your first flight day?' : '¿Listo para tu primer día de vuelo?'}
          </h2>
          <p className="text-cyan-100 text-lg mb-12 max-w-2xl mx-auto">
            {lang === 'EN' 
              ? 'Book a quick call or check our availability. We ensure this is the right path for you through a brief evaluation interview.' 
              : 'Reserva una llamada o mira disponibilidad. Aseguramos que este sea el camino correcto para ti mediante una entrevista.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/booking" className="px-10 py-5 bg-white text-cyan-600 rounded-full font-bold text-xl hover:bg-cyan-50 transition-all shadow-2xl">
              {t('cta.booking')}
            </Link>
            <a href="https://wa.me/34660567537" className="px-10 py-5 bg-cyan-700 text-white rounded-full font-bold text-xl hover:bg-cyan-800 transition-all flex items-center justify-center">
              {t('cta.whatsapp')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
