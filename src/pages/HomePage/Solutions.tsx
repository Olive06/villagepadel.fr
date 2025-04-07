import React from 'react';
import { Key, Sun, Smartphone, Wrench, Handshake, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  return (
    <section id="solutions" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Solutions</h2>
          <p className="text-lg text-gray-600">
            Des solutions innovantes pour développer votre club de padel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* VP Tech Solution Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/damfvriyn/image/upload/v1736008896/IMG_2482_jajepj.jpg" 
                alt="VP Tech solution - accès terrain de padel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-60 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white px-4 text-center">VP Tech : Solution tout-en-un</h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Solution technologique complète pour l'automatisation de votre club.
                  Optimisez gestion et rentabilité avec une interface centralisée.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Smartphone className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Application mobile de réservation</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Key className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Accès autonome au terrain, éclairage et matériel</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Calendar className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Marketing pour booster la fréquentation</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <img 
                  src="https://res.cloudinary.com/damfvriyn/image/upload/v1736008883/IMG_2457_nrymsw.jpg" 
                  alt="Location de matériel de padel" 
                  className="rounded-lg mb-4 h-40 w-full object-cover"
                />
              </div>
            </div>
            
            <div className="px-6 pb-6">
              <Link 
                to="/vp-tech"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-medium text-center block hover:bg-brand-orange-dark transition"
              >
                Découvrir VP Tech
              </Link>
            </div>
          </div>
          
          {/* Free Courts Solution Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <div className="relative h-56 overflow-hidden">
              <img 
                src="https://res.cloudinary.com/damfvriyn/image/upload/v1736011951/DJI_0192_vhukji.jpg" 
                alt="Installation de terrain de padel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-blue bg-opacity-60 flex items-center justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white px-4 text-center">Terrains de padel gratuits</h3>
              </div>
            </div>
            
            <div className="p-6 flex-grow">
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  Installation clé en main et exploitation de terrains de padel sans investissement.
                  Une solution idéale pour les collectivités et clubs sportifs.
                </p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Wrench className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Installation sans frais pour la mairie</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Sun className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Maintenance et exploitation gérées par nos soins</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-brand-orange rounded-full p-2 mr-3">
                    <Handshake className="text-white h-5 w-5" />
                  </div>
                  <span className="text-gray-800">Tarifs préférentiels pour les licenciés du club</span>
                </div>
              </div>
              
              <div className="mt-auto">
                <img 
                  src="https://res.cloudinary.com/damfvriyn/image/upload/v1736010933/IMG_E2454_o1hvo7.jpg" 
                  alt="Terrain de padel installé" 
                  className="rounded-lg mb-4 h-40 w-full object-cover"
                />
              </div>
            </div>
            
            <div className="px-6 pb-6">
              <Link
                to="/grisolles"
                className="w-full bg-brand-orange text-white py-3 rounded-lg font-medium text-center block hover:bg-brand-orange-dark transition"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
