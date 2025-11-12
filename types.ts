// FIX: Import `ReactElement` to resolve the error and provide a more specific type for the icon.
import type { ReactElement } from 'react';

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export interface Benefit {
  icon: ReactElement;
  title: string;
  description: string;
}
