
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CheckCircleIcon } from '../components/IconComponents';

const MerciPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="bg-white p-10 rounded-xl shadow-2xl max-w-2xl mx-auto">
            <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto" />
            <h1 className="text-4xl font-extrabold text-gray-800 mt-6">Merci!</h1>
            <p className="text-xl text-gray-600 mt-4">Votre demande a été soumise avec succès.</p>
            <p className="mt-2 text-gray-600">Un expert de MGC vous appellera d'ici 5 minutes pour confirmer votre rendez-vous.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MerciPage;
