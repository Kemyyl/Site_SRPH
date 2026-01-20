import { motion } from 'framer-motion';
import { ArrowRight, Phone, Star, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center mb-8"
          >
            <Badge variant="default" className="text-sm px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Artisan Qualifié
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 bg-white">
              <Award className="w-4 h-4 mr-2" />
              15+ ans d'expérience
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2 bg-white">
              <Shield className="w-4 h-4 mr-2" />
              Garantie décennale
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Votre Expert en
            <span className="block mt-2 bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Charpente & Bâtiment
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed max-w-3xl mx-auto"
          >
            Entreprise de charpente traditionnelle et rénovation basée à Villeurbanne.
            <span className="block mt-2 font-semibold text-amber-800">
              Savoir-faire artisanal et qualité garantie depuis des années.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" onClick={scrollToContact}>
              Demander un devis
              <ArrowRight className="ml-2" size={20} />
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="tel:0667228800">
                <Phone size={20} />
                06 67 22 88 00
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">15+</h3>
              <p className="text-gray-700 font-medium">Années d'expérience</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">200+</h3>
              <p className="text-gray-700 font-medium">Projets réalisés</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-amber-100 hover:shadow-2xl transition-all hover:-translate-y-1">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent mb-2">100%</h3>
              <p className="text-gray-700 font-medium">Clients satisfaits</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
