
import React from 'react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
      <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
      <p className="text-gray-800 font-bold">{testimonial.author}</p>
      <p className="text-gray-500 text-sm">{testimonial.location}</p>
    </div>
  );
};

export default TestimonialCard;
