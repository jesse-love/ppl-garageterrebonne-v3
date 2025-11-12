
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';
import { ClockIcon, LightBulbIcon, ShieldCheckIcon, CurrencyDollarIcon } from '../components/IconComponents';
import type { Testimonial, Benefit } from '../types';

const testimonials: Testimonial[] = [
  { quote: "Je vais chez MGC pour mes pneus chaque saison. Le service est rapide, et l'inspection gratuite des freins m'a donné la paix d'esprit pour l'hiver.", author: "Martin V.", location: "Terrebonne" },
  { quote: "Super service! J'ai pu faire mon changement de pneus et une vérification en même temps. Équipe efficace et honnête.", author: "Isabelle D.", location: "Mascouche" },
  { quote: "Ils ont remarqué que mes plaquettes de frein étaient presque finies pendant mon changement de pneus. Ça m'a sauvé un autre voyage! Je recommande.", author: "Patrick G.", location: "" },
];

const benefits: Benefit[] = [
    { icon: <ClockIcon />, title: "Économisez du temps", description: "Faites tout en un seul rendez-vous. C'est la solution la plus efficace à Terrebonne." },
    { icon: <LightBulbIcon />, title: "C'est logique", description: "Les roues sont déjà enlevées pour les pneus. C'est le moment idéal pour une inspection visuelle complète de vos freins." },
    { icon: <ShieldCheckIcon />, title: "Repartez en sécurité", description: "Après vos pneus, les freins sont l'élément de sécurité #1 à vérifier avant l'hiver (ou l'été)." },
    { icon: <CurrencyDollarIcon />, title: "Économisez 10% sur les pièces", description: "Si vos plaquettes ou disques sont usés, obtenez 10% de rabais sur les pièces de remplacement." },
];


const MartinLandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Above the Fold */}
        <section className="relative bg-blue-800 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://picsum.photos/id/111/1920/1080" alt="Tires stacked in a garage" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/70 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold !leading-tight tracking-tight">Temps de changer vos pneus?</h1>
                <p className="mt-4 text-2xl lg:text-3xl font-semibold text-orange-400">Ajoutez une Inspection de Freins GRATUITE (Valeur 99$).</p>
                <p className="mt-6 text-lg text-gray-200 max-w-xl mx-auto md:mx-0">Pourquoi faire deux voyages au garage? Pendant que vos pneus sont changés à Terrebonne, nos experts inspecteront vos freins gratuitement. Repartez en toute sécurité pour la nouvelle saison.</p>
              </div>
              <div>
                <LeadForm
                  formTitle="Réservez votre ""Combo"" Pneus + Freins!"
                  ctaText="OUI! JE VEUX MON ""COMBO"" SAISONNIER!"
                  reassuranceText="Inspection gratuite avec votre changement de pneus. Service rapide garanti."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire & Social Proof */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Soyez prêt pour la route. C'est simple, rapide et intelligent.</h2>
            <p className="text-center text-xl text-gray-600 mt-2 mb-12">L'offre combinée la plus efficace à Terrebonne :</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => <BenefitItem key={index} benefit={benefit} />)}
            </div>

            <hr className="my-16 border-gray-200" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Nos clients adorent l'efficacité de notre service saisonnier :</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => <TestimonialCard key={index} testimonial={t} />)}
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-gray-800">Soyez prêt pour la nouvelle saison. Ne laissez rien au hasard.</h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 w-full max-w-md mx-auto bg-orange-500 text-white font-bold text-lg py-4 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              RÉSERVEZ VOTRE CHANGEMENT DE PNEUS + INSPECTION GRATUITE!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MartinLandingPage;
