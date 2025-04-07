import React, { useEffect } from 'react';

const RedirectPage: React.FC = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.villagePadel&hl=fr';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      window.location.href = 'https://apps.apple.com/fr/app/village-padel/id6504023084';
    } else {
      window.location.href = 'https://villagepadel.fr'; // Fallback vers la page d'accueil
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p>Redirection en cours...</p>
    </div>
  );
};

export default RedirectPage;
