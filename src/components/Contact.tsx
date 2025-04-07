import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600">
            Nous sommes à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col space-y-6">
                <a
                  href="mailto:contact@villagepadel.fr"
                  className="flex items-center justify-center space-x-3 bg-brand-orange text-white px-6 py-4 rounded-lg hover:bg-brand-orange-dark transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span className="font-medium">Envoyez-nous un email</span>
                </a>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="grid gap-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-brand-orange mt-1 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <a href="mailto:contact@villagepadel.fr" className="text-gray-600 hover:text-brand-orange transition-colors">
                          contact@villagepadel.fr
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-brand-orange mt-1 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Adresse</p>
                        <p className="text-gray-600">
                          Complexe sportif de Grisolles<br />
                          82170 Grisolles
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-brand-orange mt-1 mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Village Padel</p>
                        <p className="text-gray-600">
                          Votre solution complète d'automatisation pour le padel
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
