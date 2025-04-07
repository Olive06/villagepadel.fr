import React from 'react';
import { Helmet } from 'react-helmet'; // Added Helmet import
import WeatherWidget_campsas from '../components/CampsasPadel/WeatherWidget_campsas';
import CourtInfo_campsas from '../components/CampsasPadel/CourtInfo_campsas';
import Features_campsas from '../components/CampsasPadel/Features_campsas';
import BookingCTA_campsas from '../components/CampsasPadel/BookingCTA_campsas';
import ImageCarousel from '../components/ImageCarousel';
import LocationMap_campsas from '../components/CampsasPadel/LocationMap_campsas';

const CampsasImages = [
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg",
    alt: "Terrain de padel campsas"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1741196599/480505487_985367373694261_8641342512726171271_n_fe8f8n.jpg",
    alt: "Installation padel"
  },
  {
    url: "https://res.cloudinary.com/damfvriyn/image/upload/v1736011104/cjeyubfsyydtcdwkkxaw_c04b07.jpghttps://res.cloudinary.com/damfvriyn/image/upload/v1741196415/480328728_985367503694248_4817792986897410785_n_z6g1oy.jpg",
    alt: "Vue du terrain"
  }
];

const CampsasPadel = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Added SEO Meta Tags with Helmet */}
      <Helmet>
        <title>Padel de Campsas - Terrain Outdoor Premium | Village Padel</title>
        <meta
          name="description"
          content="Découvrez notre terrain de padel outdoor à Campsas (82). Réservation en ligne, accès 7j/7 de 8h à 22h, terrain premium. Venez jouer au padel dans un cadre exceptionnel."
        />
        <meta
          name="keywords"
          content="padel Campsas, terrain padel 82, réservation padel Campsas, padel outdoor, Village Padel"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Padel de Campsas - Village Padel" />
        <meta
          property="og:description"
          content="Terrain de padel outdoor premium à Campsas. Réservez en ligne et jouez 7j/7 de 8h à 22h."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        />
        <meta property="og:url" content="https://villagepadel.fr/campsas" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Padel de Campsas - Village Padel" />
        <meta
          name="twitter:description"
          content="Terrain de padel outdoor premium à Campsas. Réservez en ligne et jouez 7j/7 de 8h à 22h."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        />
        {/* Canonical URL */}
        <link rel="canonical" href="https://villagepadel.fr/campsas" />
      </Helmet>

      {/* Hero Section - More impactful header */}
      <div className="bg-gradient-to-r from-brand-blue to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-center">
            Padel de Campsas
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto mb-8">
            Découvrez notre terrain outdoor, conçu pour offrir une expérience unique 
            et conviviale aux amateurs de padel.
          </p>
          
          {/* Primary CTA - With smart app redirect - Responsive sizing */}
          <div className="flex justify-center mb-10">
            <button 
              className="bg-white text-brand-blue font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 max-w-[80%] sm:max-w-none"
              onClick={() => {
                // Smart app redirect based on device
                const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
                if (/android/i.test(userAgent)) {
                  // Android device - Google Play link
                  window.location.href = 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';
                } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
                  // iOS device - App Store link
                  window.location.href = 'https://apps.apple.com/fr/app/village-padel/id6504023084';
                } else {
                  // Desktop or other device - fallback to web booking
                  window.location.href = 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';
                }
              }}
            >
              Réserver un terrain maintenant
            </button>
          </div>
          
          <ImageCarousel images={CampsasImages} />
        </div>
      </div>

      {/* Quick Info Banner - Highlight key information */}
      <div className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around items-center text-center">
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Horaires</span>
              <span className="text-gray-700">7j/7 - 8h à 22h</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Terrain</span>
              <span className="text-gray-700">Outdoor Premium</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Localisation</span>
              <span className="text-gray-700">Campsas, 82</span>
            </div>
            <div className="px-4 py-2">
              <span className="block text-brand-blue font-bold">Prix</span>
              <span className="text-gray-700">À partir de 20€/h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Better organized in clear sections */}
      <div className="container mx-auto px-4 py-12">
        {/* Court Information - Priority content */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Notre Terrain de Padel</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <CourtInfo_campsas />
          </div>
        </section>
        
        {/* Features Section - Removed redundant title */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <Features_campsas />
          </div>
        </section>

        {/* Two Column Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Weather Widget */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Météo Locale</h3>
            <WeatherWidget_campsas />
          </div>
          
          {/* Location Map - Important for visitors */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Localisation</h3>
            <LocationMap_campsas />
          </div>
        </div>
        
        {/* Booking Section - Changed to consistent style with white background */}
        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Prêt à Jouer ?</h2>
          <BookingCTA_campsas />
        </section>

        {/* Added SEO-Rich Description Section */}
        <section className="py-12 mt-12 bg-white rounded-xl shadow-lg">
          <div className="container mx-auto px-4 max-w-4xl">
            <details className="bg-gray-50 rounded-xl shadow-md p-6">
              <summary className="cursor-pointer text-xl font-semibold text-brand-blue mb-4">
                Plus d'informations sur le terrain de padel de Campsas
              </summary>
              <div className="prose prose-lg max-w-none mt-4 text-gray-700">
                <h2>Terrain de Padel Premium à Campsas (82)</h2>
                <p>
                  Le <strong>terrain de padel de Campsas</strong> propose une expérience de jeu exceptionnelle dans un cadre verdoyant au cœur du Tarn-et-Garonne. Notre installation <strong>outdoor premium</strong> est conçue selon les normes professionnelles pour offrir un confort de jeu optimal.
                </p>
                <h3>Un terrain accessible et moderne</h3>
                <p>
                  Situé à Campsas, notre terrain de padel est accessible <strong>7 jours sur 7</strong>, de 8h à 22h, grâce à notre système d'accès automatisé. La réservation s'effectue facilement via l'application <strong>Village Padel</strong>, disponible sur iOS et Android.
                </p>
                <p>
                  Le terrain bénéficie d'un éclairage performant permettant de jouer même en soirée, et son emplacement stratégique à proximité de Montauban et Toulouse en fait un lieu privilégié pour les amateurs de padel de la région.
                </p>
                <h3>Équipements et services</h3>
                <p>
                  Notre <strong>terrain de padel outdoor</strong> à Campsas est équipé d'un gazon synthétique de dernière génération, offrant un excellent rebond et un confort de jeu idéal. Le site dispose également d'un parking gratuit et d'un accès facilité.
                </p>
                <p>
                  Pour les débutants comme pour les joueurs confirmés, notre terrain de padel est l'endroit parfait pour profiter de ce sport en plein essor. Venez découvrir le padel à Campsas et rejoignez notre communauté de passionnés !
                </p>
              </div>
            </details>
          </div>
        </section>
      </div>
      
      {/* Schema.org JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SportsActivityLocation",
          "name": "Terrain de Padel de Campsas - Village Padel",
          "description": "Terrain de padel outdoor premium situé à Campsas (82)",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Campsas",
            "addressRegion": "Tarn-et-Garonne",
            "postalCode": "82370",
            "addressCountry": "FR"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "43.8591",
            "longitude": "1.3734"
          },
          "openingHours": "Mo-Su 08:00-22:00",
          "telephone": "+33749157401",
          "url": "https://villagepadel.fr/campsas",
          "image": "https://res.cloudinary.com/damfvriyn/image/upload/v1741114127/terrain_padel_campsas-1a737f3b706f4d6eb602b625a2032f2c_en03er.jpg"
        })}
      </script>
      
      {/* No custom footer needed - using the site's default footer */}
    </div>
  );
};

export default CampsasPadel;