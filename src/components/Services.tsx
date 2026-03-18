import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    category: 'Hair Services',
    icon: <Scissors className="text-salon-gold" size={32} />,
    items: [
      { name: 'Haircut & Styling', price: 'Starting from ₹500' },
      { name: 'Hair Coloring', price: 'Starting from ₹1500' },
      { name: 'Hair Spa & Treatment', price: 'Starting from ₹1200' },
    ],
    image: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Beauty Services',
    icon: <Sparkles className="text-salon-gold" size={32} />,
    items: [
      { name: 'Facial & Skin Care', price: 'Starting from ₹800' },
      { name: 'Waxing & Threading', price: 'Starting from ₹100' },
      { name: 'Manicure & Pedicure', price: 'Starting from ₹600' },
    ],
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800&auto=format&fit=crop'
  },
  {
    category: 'Makeup Services',
    icon: <Heart className="text-salon-gold" size={32} />,
    items: [
      { name: 'Bridal Makeup', price: 'Custom Packages' },
      { name: 'Party Makeup', price: 'Starting from ₹2500' },
      { name: 'Engagement Makeup', price: 'Starting from ₹5000' },
    ],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-salon-gold font-medium tracking-widest uppercase mb-4 block"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Exquisite Treatments for the Modern Woman
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-600 text-lg"
          >
            We offer a wide range of premium services designed to make you look and feel your absolute best.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group bg-salon-pink-light rounded-3xl overflow-hidden border border-salon-pink hover:shadow-xl transition-all duration-500"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{service.category}</h3>
                </div>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-center border-b border-salon-pink pb-2">
                      <span className="text-zinc-700 font-medium">{item.name}</span>
                      <span className="text-salon-gold text-sm font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 text-salon-gold font-semibold flex items-center gap-2 group-hover:underline"
                >
                  View Full Menu
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
