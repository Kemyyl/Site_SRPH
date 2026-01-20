import { motion } from 'framer-motion';
import { Home, Hammer, RefreshCw, Building2, TreePine, Paintbrush } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
            >
              <Card className="h-full hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-amber-200">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-amber-700">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-gray-700 flex items-start gap-2">
                        <span className="text-amber-700 mt-1 font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-br from-amber-600 to-amber-800 text-white border-none shadow-2xl max-w-4xl mx-auto">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl md:text-4xl text-white mb-4">
                Un projet en tête ?
              </CardTitle>
              <CardDescription className="text-amber-50 text-lg">
                Contactez-nous pour un devis gratuit et personnalisé. Nous étudions ensemble votre projet
                et vous proposons les meilleures solutions adaptées à vos besoins et votre budget.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-8">
              <Button
                size="lg"
                className="bg-white text-amber-700 hover:bg-amber-50 shadow-lg"
                asChild
              >
                <a href="tel:0667228800">
                  Appelez-nous au 06 67 22 88 00
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
