
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';
import { WrenchScrewdriverIcon, CurrencyDollarIcon, ShieldCheckIcon, NoSymbolIcon } from '../components/IconComponents';
import type { Testimonial, Benefit } from '../types';

const testimonials: Testimonial[] = [
  { quote: "Service rapide et honnête. Ils ont trouvé le problème que mon ancien garage ne voyait pas. Je leur fais confiance les yeux fermés.", author: "Julie P.", location: "Terrebonne" },
  { quote: "J'ai sauvé 200$ par rapport à la soumission du concessionnaire. Mon seul garage maintenant. Merci MGC!", author: "Marc L.", location: "Mascouche" },
  { quote: "Mes freins grinçaient et j'avais peur. Ils m'ont pris le jour-même. Service incroyable. Je recommande à 100%.", author: "Sophie B.", location: "Terrebonne" },
];

const benefits: Benefit[] = [
    { icon: <WrenchScrewdriverIcon />, title: "Sachez le vrai problème", description: "Recevez un diagnostic précis et honnête, sans jargon." },
    { icon: <CurrencyDollarIcon />, title: "Économisez instantanément", description: "Obtenez 10% de rabais sur toutes les pièces nécessaires si une réparation est requise." },
    { icon: <ShieldCheckIcon />, title: "Conduisez en sécurité", description: "Reprenez la route en sachant que vos freins sont 100% sécuritaires." },
    { icon: <NoSymbolIcon />, title: "Pas de surprises", description: "Nous ne faisons jamais de réparations sans votre approbation claire." },
];

const AlexLandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Above the Fold */}
        <section className="relative bg-gray-800 py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src="https://picsum.photos/id/106/1920/1080" alt="Car brake maintenance" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold !leading-tight tracking-tight">Bruit de freins suspect?</h1>
                <p className="mt-4 text-2xl lg:text-3xl font-semibold text-orange-400">Obtenez votre inspection 100% GRATUITE à Terrebonne.</p>
                <p className="mt-6 text-lg text-gray-300 max-w-xl mx-auto md:mx-0">Les concessionnaires vous facturent 150$ juste pour regarder votre auto. Oubliez ça. Obtenez un diagnostic honnête et gratuit de nos experts certifiés à Terrebonne, et sachez exactement ce qui ne va pas avant de payer un sou.</p>
              </div>
              <div>
                <LeadForm
                  formTitle="OUI! Je veux mon inspection GRATUITE!"
                  ctaText="OUI! JE VEUX MON INSPECTION GRATUITE!"
                  reassuranceText="Garanti 100% gratuit. Sans obligation. Réponse rapide assurée."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire & Social Proof */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Reprenez la route l'esprit tranquille.</h2>
            <p className="text-center text-xl text-gray-600 mt-2 mb-12">Votre inspection gratuite inclut :</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => <BenefitItem key={index} benefit={benefit} />)}
            </div>

            <hr className="my-16 border-gray-200" />

            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Ce que nos clients de Terrebonne disent :</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => <TestimonialCard key={index} testimonial={t} />)}
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="py-16 bg-gray-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold">Ne risquez pas votre sécurité un jour de plus.</h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 w-full max-w-md mx-auto bg-orange-500 text-white font-bold text-lg py-4 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              RÉSERVEZ VOTRE INSPECTION 100% GRATUITE MAINTENANT!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AlexLandingPage;
