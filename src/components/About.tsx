import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Wrench } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle size={32} />,
      title: 'Qualité',
      description: 'Matériaux premium et travail soigné',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Award size={32} />,
      title: 'Expertise',
      description: 'Équipe qualifiée et expérimentée',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Users size={32} />,
      title: 'Écoute',
      description: 'Projets sur mesure à votre écoute',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Savoir-faire',
      description: 'Techniques traditionnelles et modernes',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <>
      {/* Section Separator */}
      <div className="relative h-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <section id="apropos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pourquoi choisir SRPH ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expertise reconnue dans la charpente et le bâtiment depuis plus de 15 ans
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
