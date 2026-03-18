import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-salon-pink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Salon Experience"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <p className="text-salon-gold font-serif text-4xl font-bold mb-2">10+</p>
              <p className="text-zinc-600 font-medium">Years of Excellence in Beauty Care</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-salon-gold font-medium tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
              Elegance & Excellence at Envy Ladies Salon
            </h2>
            <p className="text-zinc-600 text-lg mb-8 leading-relaxed">
              Located in the heart of Andheri East, Envy Ladies Salon is your premier destination for luxury beauty care. Our mission is to provide a sanctuary where every woman can feel pampered, beautiful, and confident.
            </p>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed">
              Our team of highly experienced beauticians uses only premium, high-quality beauty products to ensure you receive the best possible care. We believe in personalized beauty treatments that cater to your unique needs and style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Experienced Beauticians',
                'Premium Beauty Products',
                'Personalized Care',
                'Hygienic Environment'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="text-salon-gold" size={20} />
                  <span className="font-medium text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
