import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={32} />,
      title: 'Adresse',
      content: '69 Rue Octavie',
      content2: '69100 Villeurbanne',
    },
    {
      icon: <Phone size={32} />,
      title: 'Téléphone',
      content: '06 67 22 88 00',
      link: 'tel:0667228800',
    },
    {
      icon: <Mail size={32} />,
      title: 'Email',
      content: 'contact@srph.fr',
      link: 'mailto:contact@srph.fr',
    },
    {
      icon: <Clock size={32} />,
      title: 'Horaires',
      content: 'Lun - Ven: 8h - 18h',
      content2: 'Sam: 9h - 12h',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactez-nous
          </h2>
          <div className="w-24 h-1 bg-amber-700 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            N'hésitez pas à nous contacter pour toute demande de renseignement ou de devis
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Nos coordonnées
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-amber-700 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-amber-700 transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <>
                        <p className="text-gray-600">{info.content}</p>
                        {info.content2 && <p className="text-gray-600">{info.content2}</p>}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-100 p-6 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Zone d'intervention</h4>
              <p className="text-gray-700">
                Nous intervenons principalement sur Villeurbanne et ses environs :
                Lyon, Bron, Vaulx-en-Velin, et toute la métropole lyonnaise.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Nous trouver
            </h3>

            <div className="bg-gray-200 rounded-lg overflow-hidden h-96 mb-6">
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

            <div className="bg-amber-700 text-white p-6 rounded-lg">
              <h4 className="font-bold text-xl mb-3">Demandez votre devis gratuit</h4>
              <p className="mb-4">
                Contactez-nous par téléphone pour discuter de votre projet et obtenir
                un devis personnalisé sans engagement.
              </p>
              <a
                href="tel:0667228800"
                className="inline-flex items-center gap-2 bg-white text-amber-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                <Phone size={20} />
                06 67 22 88 00
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
