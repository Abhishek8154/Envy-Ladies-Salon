import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Coffee, UserCheck } from 'lucide-react';

const features = [
  {
    icon: <UserCheck className="text-salon-gold" size={32} />,
    title: 'Experienced Beauty Experts',
    description: 'Our team consists of certified professionals with years of experience in luxury beauty care.'
  },
  {
    icon: <Award className="text-salon-gold" size={32} />,
    title: 'Premium Quality Products',
    description: 'We use only world-class, skin-friendly products to ensure the best results for our clients.'
  },
  {
    icon: <ShieldCheck className="text-salon-gold" size={32} />,
    title: 'Hygienic & Comfortable',
    description: 'We maintain the highest standards of cleanliness and provide a relaxing sanctuary for you.'
  },
  {
    icon: <Coffee className="text-salon-gold" size={32} />,
    title: 'Personalized Services',
    description: 'Every treatment is tailored to your specific beauty goals and personal preferences.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-salon-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Why Choose Envy Salon?</h2>
          <div className="w-24 h-1 bg-salon-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-salon-pink-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{feature.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
