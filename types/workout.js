export interface workout {
  id: string | number;
  name: string;
  description?: string;
  category?: string | string[];
  equipment?: string | string[];
  difficulty?: string;
  sets?: number;
  reps?: string;
  duration?: number | string;
  calories?: number;
  rating?: number;
  image?: string;
  instructions?: string[];
}