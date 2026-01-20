import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={28} />,
      title: 'Adresse',
      content: '69 Rue Octavie',
      content2: '69100 Villeurbanne',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Phone size={28} />,
      title: 'Téléphone',
      content: '06 67 22 88 00',
      link: 'tel:0667228800',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Mail size={28} />,
      title: 'Email',
      content: 'contact@srph.fr',
      link: 'mailto:contact@srph.fr',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Clock size={28} />,
      title: 'Horaires',
      content: 'Lun - Ven: 8h - 18h',
      content2: 'Sam: 9h - 12h',
      color: 'from-amber-500 to-amber-600',
    },
  ];

  return (
    <>
      {/* Section Separator */}
      <div className="relative h-24 bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              N'hésitez pas à nous contacter pour toute demande de renseignement ou de devis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-amber-600 transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-gray-600 text-sm">{info.content}</p>
                      {info.content2 && <p className="text-gray-600 text-sm">{info.content2}</p>}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <div className="h-96 bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.7889!2d4.8899!3d45.7667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516f0c5e8d%3A0x1!2s69%20Rue%20Octavie%2C%2069100%20Villeurbanne!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation SRPH"
                ></iframe>
              </div>
              <div className="p-8 text-center">
                <p className="text-gray-600 mb-2">
                  Nous intervenons sur Villeurbanne, Lyon et toute la métropole lyonnaise
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
