import { motion } from 'framer-motion';
import { Home, Hammer, RefreshCw, Building2, TreePine, Paintbrush } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TreePine size={48} />,
      title: 'Charpente Traditionnelle',
      description: 'Construction de charpentes en bois massif selon les techniques traditionnelles. Expertise dans les essences nobles et locales.',
      features: ['Charpente fermette', 'Charpente apparente', 'Charpente sur mesure'],
    },
    {
      icon: <Home size={48} />,
      title: 'Couverture',
      description: 'Pose et rénovation de toitures. Nous travaillons tous types de couvertures pour assurer l\'étanchéité et l\'esthétique de votre toit.',
      features: ['Pose de tuiles', 'Ardoise', 'Zinguerie'],
    },
    {
      icon: <RefreshCw size={48} />,
      title: 'Rénovation',
      description: 'Rénovation complète de bâtiments anciens. Respect du patrimoine architectural avec des techniques modernes.',
      features: ['Rénovation de charpente', 'Traitement du bois', 'Isolation'],
    },
    {
      icon: <Building2 size={48} />,
      title: 'Extension',
      description: 'Agrandissement de votre habitation. Création d\'extensions en harmonie avec l\'existant pour plus d\'espace de vie.',
      features: ['Surélévation', 'Extension latérale', 'Véranda'],
    },
    {
      icon: <Hammer size={48} />,
      title: 'Ossature Bois',
      description: 'Construction en ossature bois pour des bâtiments écologiques et performants. Solution moderne et durable.',
      features: ['Maison bois', 'Abri de jardin', 'Garage'],
    },
    {
      icon: <Paintbrush size={48} />,
      title: 'Aménagement',
      description: 'Aménagement de combles et création de nouveaux espaces habitables. Optimisation de votre surface disponible.',
      features: ['Combles aménageables', 'Création de mezzanine', 'Velux'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une gamme complète de prestations pour tous vos projets de charpente et de bâtiment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-700 mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-gray-700 flex items-start gap-2">
                    <span className="text-amber-700 mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-amber-700 text-white p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-lg mb-6">
              Contactez-nous pour un devis gratuit et personnalisé. Nous étudions ensemble votre projet
              et vous proposons les meilleures solutions adaptées à vos besoins et votre budget.
            </p>
            <a
              href="tel:0667228800"
              className="inline-block bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Appelez-nous au 06 67 22 88 00
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
