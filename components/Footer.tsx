
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-6">
      <div className="container mx-auto px-6 text-center text-sm">
        <p>© 2024 garageterrebonne.ca | Tous droits réservés | <a href="#" className="hover:text-white underline">Politique de confidentialité</a></p>
        <p className="mt-2">Propulsé par MGC</p>
      </div>
    </footer>
  );
};

export default Footer;
