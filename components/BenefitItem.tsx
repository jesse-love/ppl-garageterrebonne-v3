
import React from 'react';
import type { Benefit } from '../types';

const BenefitItem: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 text-orange-500">
        {React.cloneElement(benefit.icon as React.ReactElement, { className: 'h-8 w-8' })}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{benefit.title}</h3>
        <p className="mt-1 text-gray-600">{benefit.description}</p>
      </div>
    </div>
  );
};

export default BenefitItem;
