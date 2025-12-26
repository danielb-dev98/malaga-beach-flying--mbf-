
import { Review, TrainingProgram } from './types';

export const COLORS = {
  primary: '#0f172a', // Deep Blue
  accent: '#06b6d4', // Cyan
  accentWarm: '#d4d4d8', // Warm White/Zinc
  gold: '#fbbf24', // Premium Gold Acent
};

export const REVIEWS: Review[] = [
  {
    name: 'Marcos',
    stars: 5,
    type: 'Future Pilot',
    country: 'Spain',
    content: {
      ES: 'Una experiencia emocional que cambió mi forma de ver la libertad. La seguridad que transmiten es total; el "click" mental ocurre cuando ves que ellos tienen el control absoluto.',
      EN: 'An emotional experience that changed how I perceive freedom. The security they transmit is absolute; the mental "click" happens when you realize they have total control.'
    },
    highlight: {
      ES: 'Seguridad y confianza total.',
      EN: 'Total security and trust.'
    }
  },
  {
    name: 'Javier',
    stars: 5,
    type: 'Resident',
    content: {
      ES: 'Una auténtica bendición. El desarrollo personal y la disolución de miedos que viví aquí no tiene precio. El método es pausado, seguro y muy humano.',
      EN: 'A true blessing. The personal growth and dissolution of fears I experienced here is priceless. The method is steady, safe, and very human.'
    }
  },
  {
    name: 'Sandra',
    stars: 5,
    type: 'Traveler',
    country: 'Germany',
    content: {
      ES: 'La mejor experiencia de mi vida. Sentí una calma y seguridad increíbles desde el primer segundo. La meteorología fue perfecta y volamos desde el primer día.',
      EN: 'The best experience of my life. I felt incredible calm and security from the first second. The weather was perfect and we flew from day one.'
    }
  },
  {
    name: 'Martí',
    stars: 5,
    type: 'Pilot Training',
    content: {
      ES: 'Aprendizaje real en tierra y aire. Mi primer tándem con instrucción técnica me hizo entender que esto no es solo adrenalina, es precisión.',
      EN: 'Real learning on ground and in the air. My first tandem with technical instruction made me understand this isn\'t just adrenaline, it\'s precision.'
    }
  },
  {
    name: 'Luis',
    stars: 5,
    type: 'Local Resident',
    content: {
      ES: 'Paciencia infinita. Es la escuela ideal si tienes miedos. Superar mis barreras con su acompañamiento ha sido una transformación personal.',
      EN: 'Infinite patience. It\'s the ideal school if you have fears. Overcoming my barriers with their guidance has been a personal transformation.'
    }
  },
  {
    name: 'Ari',
    stars: 5,
    type: 'Tandem Experience',
    content: {
      ES: 'Detrás del miedo hay sensaciones inolvidables. Gracias por la mentoría y por hacerme sentir tan protegida en todo momento.',
      EN: 'Behind fear lie unforgettable sensations. Thank you for the mentorship and for making me feel so protected at all times.'
    }
  }
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'private',
    title: { ES: 'Días de Entrenamiento Privado', EN: 'Private Training Days' },
    duration: { ES: '3-4 horas / sesión', EN: '3-4 hours / session' },
    description: { 
      ES: 'Enfoque total en tu progreso. Sesiones ultra-personalizadas donde tú eres el único protagonista.',
      EN: 'Total focus on your progress. Ultra-personalized sessions where you are the sole protagonist.'
    },
    features: [
      { ES: 'Ratio 1:1 o 2:1 (Instructores/Alumno)', EN: 'Ratio 1:1 or 2:1 (Instructors/Student)' },
      { ES: 'Vuelo tándem guiado incluido', EN: 'Guided tandem flight included' },
      { ES: 'Material de última generación', EN: 'State-of-the-art equipment' }
    ]
  },
  {
    id: 'initiation',
    title: { ES: 'Iniciación OpenPilot', EN: 'OpenPilot Initiation' },
    duration: { ES: 'Programa Completo', EN: 'Complete Program' },
    description: {
      ES: 'Desde los fundamentos hasta tus primeros vuelos. Incluye teoría, manejo en tierra y protocolos de aviación.',
      EN: 'From fundamentals to your first flights. Includes theory, ground handling, and aviation protocols.'
    },
    features: [
      { ES: 'Teoría de aerodinámica y meteo', EN: 'Aerodynamics & weather theory' },
      { ES: 'Prácticas intensivas de inflado', EN: 'Intensive inflation practice' },
      { ES: 'Tándem con instrucción en vuelo', EN: 'In-flight instruction tandem' }
    ]
  },
  {
    id: 'advanced',
    title: { ES: 'Entrenamiento Avanzado', EN: 'Advanced Training' },
    duration: { ES: 'Mentoría Continua', EN: 'Continuous Mentorship' },
    description: {
      ES: 'Para aquellos que buscan el dominio total. Perfeccionamiento de técnicas, navegación y seguridad activa.',
      EN: 'For those seeking total mastery. Refining techniques, navigation, and active safety.'
    },
    features: [
      { ES: 'Vuelos de distancia (XC)', EN: 'Cross-country (XC) flights' },
      { ES: 'Maniobras de seguridad avanzadas', EN: 'Advanced safety maneuvers' },
      { ES: 'Acompañamiento por radio constante', EN: 'Constant radio guidance' }
    ]
  }
];
