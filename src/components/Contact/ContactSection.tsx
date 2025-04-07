import React from 'react';
import { Phone, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            Contactez-nous
          </h2>
          <p className="text-lg text-gray-600">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {/* Phone Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-full mb-4">
                <Phone className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Appelez-nous</h3>
              <a
                href="tel:0749157401"
                className="text-lg text-gray-700 hover:text-brand-orange font-medium transition-colors"
              >
                07&nbsp;49&nbsp;15&nbsp;74&nbsp;01
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center">
            <div className="flex flex-col items-center">
              <div className="bg-brand-orange bg-opacity-10 p-4 rounded-full mb-4">
                <Mail className="w-6 h-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold text-brand-blue mb-2">Écrivez-nous</h3>
              <a
                href="mailto:contact@villagepadel.fr"
                className="text-lg text-gray-700 hover:text-brand-orange font-medium transition-colors break-words"
              >
                contact@villagepadel.fr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

