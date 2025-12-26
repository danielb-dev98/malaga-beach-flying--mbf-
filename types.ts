
export type Language = 'ES' | 'EN';

export interface Translation {
  [key: string]: {
    ES: string;
    EN: string;
  };
}

export interface Review {
  name: string;
  stars: number;
  type: string;
  country?: string;
  content: {
    ES: string;
    EN: string;
  };
  highlight?: {
    ES: string;
    EN: string;
  };
}

export interface TrainingProgram {
  id: string;
  title: { ES: string; EN: string };
  duration: { ES: string; EN: string };
  description: { ES: string; EN: string };
  features: Array<{ ES: string; EN: string }>;
}
