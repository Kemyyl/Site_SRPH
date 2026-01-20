import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle size={40} />,
      title: 'Qualité',
      description: 'Des matériaux de première qualité et un travail soigné pour chaque projet',
    },
    {
      icon: <Award size={40} />,
      title: 'Expertise',
      description: 'Une équipe qualifiée avec des années d\'expérience dans le domaine',
    },
    {
      icon: <Users size={40} />,
      title: 'Écoute',
      description: 'À l\'écoute de vos besoins pour réaliser vos projets sur mesure',
    },
    {
      icon: <Wrench size={40} />,
      title: 'Savoir-faire',
      description: 'Maîtrise des techniques traditionnelles et modernes de charpente',
    },
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À propos de SRPH
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entreprise spécialisée dans la charpente et le bâtiment, nous mettons notre expertise
            au service de vos projets de construction et de rénovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre engagement
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Basée à Villeurbanne, SRPH est une entreprise de charpente et de bâtiment qui combine
              tradition et modernité. Nous intervenons sur tous types de chantiers, de la construction
              neuve à la rénovation complète.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Notre équipe de professionnels qualifiés met un point d'honneur à respecter les délais,
              à assurer un travail de qualité et à maintenir une relation de confiance avec nos clients.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Nous privilégions une approche personnalisée pour chaque projet, en prenant le temps
              d'écouter vos besoins et de vous conseiller sur les meilleures solutions techniques
              et esthétiques.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-amber-50 to-orange-100 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Nos atouts</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Devis gratuit et détaillé</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Respect des normes et réglementations</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Garantie décennale</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Disponibilité et réactivité</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-700">Artisans qualifiés et expérimentés</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="text-amber-700 flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
