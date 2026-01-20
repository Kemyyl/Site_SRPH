import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-500 mb-4">SRPH</h3>
            <p className="text-gray-400 mb-4">
              Entreprise de charpente et bâtiment à Villeurbanne.
              Votre partenaire de confiance pour tous vos projets.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>69 Rue Octavie</li>
              <li>69100 Villeurbanne</li>
              <li>
                <a href="tel:0667228800" className="hover:text-amber-500 transition-colors">
                  Tel: 06 67 22 88 00
                </a>
              </li>
              <li>
                <a href="mailto:contact@srph.fr" className="hover:text-amber-500 transition-colors">
                  contact@srph.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Lundi - Vendredi</li>
              <li>8h00 - 18h00</li>
              <li className="pt-2">Samedi</li>
              <li>9h00 - 12h00</li>
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
