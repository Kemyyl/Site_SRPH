import { motion } from 'framer-motion';
import { Home, Hammer, RefreshCw, Building2, TreePine, Paintbrush } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TreePine size={40} />,
      title: 'Charpente Traditionnelle',
      description: 'Construction de charpentes en bois massif selon les techniques traditionnelles',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: <Home size={40} />,
      title: 'Couverture',
      description: 'Pose et rénovation de toitures pour assurer étanchéité et esthétique',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: <RefreshCw size={40} />,
      title: 'Rénovation',
      description: 'Rénovation complète de bâtiments anciens avec respect du patrimoine',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Building2 size={40} />,
      title: 'Extension',
      description: 'Agrandissement de votre habitation en harmonie avec l\'existant',
      color: 'from-purple-500 to-violet-600',
    },
    {
      icon: <Hammer size={40} />,
      title: 'Ossature Bois',
      description: 'Construction en ossature bois pour des bâtiments écologiques',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Paintbrush size={40} />,
      title: 'Aménagement',
      description: 'Aménagement de combles et création d\'espaces habitables',
      color: 'from-pink-500 to-fuchsia-600',
    },
  ];

  return (
    <>
      {/* Section Separator */}
      <div className="relative h-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos Expertises
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une gamme complète de prestations pour tous vos projets de charpente et de bâtiment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Un projet en tête ?
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contactez-nous pour un devis gratuit et personnalisé
              </p>
              <a
                href="tel:0667228800"
                className="inline-block bg-white text-amber-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                06 67 22 88 00
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
