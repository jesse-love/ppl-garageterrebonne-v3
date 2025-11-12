
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import TestimonialCard from '../components/TestimonialCard';
import BenefitItem from '../components/BenefitItem';
import { CheckCircleIcon, ClipboardDocumentListIcon, ShieldCheckIcon, CurrencyDollarIcon } from '../components/IconComponents';
import type { Testimonial, Benefit } from '../types';

const testimonials: Testimonial[] = [
  { quote: "Fatigué de me faire avoir par le concessionnaire. L'équipe de MGC m'a donné l'heure juste. Honnêtes et professionnels. Je ne vais plus ailleurs.", author: "David R.", location: "Terrebonne" },
  { quote: "Ils m'ont expliqué clairement ce qui devait être fait maintenant et ce qui pouvait attendre 6 mois. J'ai enfin un garage de confiance à Mascouche. Ça n'a pas de prix.", author: "Sophie L.", location: "" },
  { quote: "L'inspection gratuite m'a permis d'économiser sur une réparation que mon autre garage jugeait 'urgente'. Merci pour l'honnêteté. Je recommande MGC.", author: "Michel P.", location: "" },
];

const benefits: Benefit[] = [
    { icon: <CheckCircleIcon />, title: "Détectez les problèmes AVANT", description: "Évitez qu'ils ne deviennent des catastrophes à 2000$." },
    { icon: <ClipboardDocumentListIcon />, title: "Obtenez un plan d'entretien clair", description: "Nous vous disons ce qui est urgent et ce qui peut attendre, sans pression." },
    { icon: <ShieldCheckIcon />, title: "Validez (ou contestez) le devis", description: "Notre bilan est 100% gratuit et sans engagement pour comparer avec votre concessionnaire." },
    { icon: <CurrencyDollarIcon />, title: "Économisez 10% sur les pièces", description: "Si une maintenance préventive est nécessaire, vous obtenez un rabais." },
];

const SophieLandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Above the Fold */}
        <section className="relative bg-gray-100 py-16 md:py-24 text-gray-800 overflow-hidden">
           <div className="absolute inset-0">
            <img src="https://picsum.photos/id/24/1920/1080" alt="Clean and modern garage" className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold !leading-tight tracking-tight text-gray-900">Votre concessionnaire vous charge-t-il trop cher?</h1>
                <p className="mt-4 text-2xl lg:text-3xl font-semibold text-orange-600">Obtenez un bilan de santé 100% GRATUIT pour vos freins.</p>
                <p className="mt-6 text-lg text-gray-700 max-w-xl mx-auto md:mx-0">Les concessionnaires adorent les 'inspections' à 150$ pour vous vendre des réparations inutiles. Oubliez ça. Obtenez un diagnostic honnête de nos experts certifiés. Zéro obligation. Zéro jargon. Juste la vérité sur l'état de votre véhicule.</p>
              </div>
              <div>
                <LeadForm
                  formTitle="Obtenez votre bilan GRATUIT"
                  ctaText="OUI! JE VEUX MON BILAN HONNÊTE!"
                  reassuranceText="Garanti 100% gratuit. Sans obligation. Pas de vente sous pression."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Below the Fold: Desire & Social Proof */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Prenez les devants. Évitez les grosses factures.</h2>
             <p className="text-center text-xl text-gray-600 mt-2 mb-12">Voici comment nous vous redonnons le contrôle :</p>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto mb-16">
              {benefits.map((benefit, index) => <BenefitItem key={index} benefit={benefit} />)}
            </div>
            
            <hr className="my-16 border-gray-200" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Nos clients apprécient notre transparence :</h2>
            <div className="mt-12 grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => <TestimonialCard key={index} testimonial={t} />)}
            </div>
          </div>
        </section>

        {/* Final Action */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-gray-800">La tranquillité d'esprit n'a pas de prix. Surtout quand elle est gratuite.</h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-8 w-full max-w-md mx-auto bg-orange-500 text-white font-bold text-lg py-4 px-6 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              RÉSERVEZ VOTRE BILAN DE SANTÉ GRATUIT!
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SophieLandingPage;
