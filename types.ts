export interface Product {
  id: number;
  title: string;
  image: string;
  price?: string;
  discount?: string;
  tag?: string; // e.g. "Ad"
  rating?: number;
  reviews?: string; // e.g. "1,234"
  description?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}