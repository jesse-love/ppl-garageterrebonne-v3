
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LeadFormProps {
  formTitle: string;
  ctaText: string;
  reassuranceText: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ formTitle, ctaText, reassuranceText }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to a server.
    // For this demo, we'll just navigate to the thank you page.
    console.log({ name, phone });
    navigate('/merci');
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl w-full">
      <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">{formTitle}</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">Prénom</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Prénom"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
          />
        </div>
        <div>
          <label htmlFor="phone" className="sr-only">Téléphone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Téléphone (Requis)"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-bold text-lg py-3 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          {ctaText}
        </button>
      </form>
      <p className="text-center text-gray-500 text-sm mt-4">{reassuranceText}</p>
    </div>
  );
};

export default LeadForm;
