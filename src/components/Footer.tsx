import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-2xl font-bold text-white">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SRPH</h3>
                <p className="text-xs text-gray-400">Charpente & Bâtiment</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Entreprise de charpente et bâtiment à Villeurbanne.
              Votre partenaire de confiance pour tous vos projets.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>69 Rue Octavie<br />69100 Villeurbanne</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-amber-500 flex-shrink-0" />
                <a href="tel:0667228800" className="hover:text-amber-500 transition-colors">
                  06 67 22 88 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-amber-500 flex-shrink-0" />
                <a href="mailto:contact@srph.fr" className="hover:text-amber-500 transition-colors">
                  contact@srph.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Horaires</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Lundi - Vendredi</p>
                  <p>8h00 - 18h00</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Samedi</p>
                  <p>9h00 - 12h00</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-amber-500">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Charpente traditionnelle</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Couverture</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Rénovation</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Extension</li>
              <li className="hover:text-amber-500 transition-colors cursor-pointer">Ossature bois</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} SRPH. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Fait avec <Heart size={16} className="text-red-500" fill="currentColor" /> à Villeurbanne
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
