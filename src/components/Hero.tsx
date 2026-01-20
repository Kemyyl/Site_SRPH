import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const clients = [
    { name: 'Client 1', logo: 'C1' },
    { name: 'Client 2', logo: 'C2' },
    { name: 'Client 3', logo: 'C3' },
    { name: 'Client 4', logo: 'C4' },
    { name: 'Client 5', logo: 'C5' },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
          >
            L'Expert en{' '}
            <span className="text-amber-600">Charpente</span> au service de
            votre projet, des{' '}
            <span className="text-amber-600">solutions performantes</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Après plus de 15 ans d'expertise dans le bâtiment, SRPH intègre
            aujourd'hui le{' '}
            <a href="#apropos" className="text-amber-600 hover:underline">
              savoir-faire artisanal
            </a>{' '}
            pour créer des solutions performantes. Nous développons des{' '}
            <a href="#services" className="text-amber-600 hover:underline">
              projets sur mesure
            </a>{' '}
            et des stratégies durables (
            <a href="#services" className="text-amber-600 hover:underline">
              charpente
            </a>
            ,{' '}
            <a href="#services" className="text-amber-600 hover:underline">
              rénovation
            </a>
            ,{' '}
            <a href="#services" className="text-amber-600 hover:underline">
              extension
            </a>
            , etc.) qui ont un impact fort sur votre habitat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-24"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-lg hover:shadow-xl transition-all"
            >
              <ArrowRight className="mr-2" size={20} />
              Discutons de votre projet
            </Button>
          </motion.div>

          {/* Client Trust Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-gray-200 pt-12"
          >
            <p className="text-sm text-gray-500 uppercase tracking-wide mb-8 font-medium">
              Approuvé par nos clients
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="w-24 h-12 flex items-center justify-center text-gray-400 font-semibold text-lg border border-gray-200 rounded-lg hover:border-amber-300 hover:text-amber-600 transition-all"
                >
                  {client.logo}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
