import React from 'react';
import { Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-blue text-white px-6 py-16 lg:py-24 overflow-hidden">
      {/* Headline full width */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
          Automatisez votre club <span className="text-brand-orange">de padel</span>
        </h1>
      </div>

      {/* Grid: text left, image right */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT – Text */}
        <div>
          <p className="text-lg sm:text-xl text-gray-300 mb-4">
            Réservation, accès digital, matériel connecté.<br />
            Tout-en-un. Sans effort.
          </p>
          <p className="text-md sm:text-lg text-gray-400 mb-8">
            Village Padel offre la solution ultime pour les clubs : automatisation complète, application mobile de réservation, accès intelligent, et gestion simplifiée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://apps.apple.com/fr/app/village-padel/id6504023084"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded-md text-white bg-brand-orange hover:bg-brand-orange-dark text-lg font-semibold shadow"
            >
              <Download className="w-5 h-5 mr-2" />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 rounded-md text-brand-blue bg-white hover:bg-gray-100 text-lg font-semibold shadow"
            >
              <Download className="w-5 h-5 mr-2" />
              Google Play
            </a>
          </div>
        </div>

        {/* RIGHT – Image */}
        <div className="w-full">
          <img
            src="/images/grisolles-2.jpg"
            alt="Terrain de padel automatisé"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

