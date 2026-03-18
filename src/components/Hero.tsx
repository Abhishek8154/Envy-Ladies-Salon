import React from 'react';
import { motion } from 'motion/react';
import { Phone, Calendar, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-salon-pink-light">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-salon-pink/30 -skew-x-12 translate-x-1/4 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-salon-pink text-salon-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-salon-gold animate-pulse"></span>
              The Pinnacle of Beauty in Mumbai
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-[1.1] text-zinc-900">
              Where <span className="text-salon-gold italic">Elegance</span> <br />
              Meets Artistry.
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-600 mb-12 font-light leading-relaxed max-w-lg">
              Indulge in a world of luxury at Envy Ladies Salon. From bespoke hair styling to rejuvenating skin rituals, we craft beauty that resonates.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(212 175 55 / 0.2)" }}
                whileTap={{ scale: 0.95 }}
                href="#booking"
                className="bg-zinc-900 text-white px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition-all"
              >
                <Calendar size={20} />
                Book Experience
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919136868528"
                className="bg-white border-2 border-salon-gold text-salon-gold px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-salon-gold hover:text-white transition-all"
              >
                <Phone size={20} />
                Consult Now
              </motion.a>
            </div>

            <div className="mt-16 flex items-center gap-8">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-zinc-200">
                    <img src={`https://i.pravatar.cc/150?u=salon${i}`} alt="Client" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-zinc-900 font-bold text-lg">5,000+</p>
                <p className="text-zinc-500 text-sm">Happy Clients in Andheri</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Image with Frame */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1200&auto=format&fit=crop"
                alt="Professional Hair Styling"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Decorative Card */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white p-6 rounded-3xl shadow-2xl border border-salon-pink hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-salon-pink rounded-2xl flex items-center justify-center text-salon-gold">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest">Premium Care</p>
                  <p className="text-zinc-900 font-serif font-bold">L'Oréal Professional</p>
                </div>
              </div>
            </motion.div>

            {/* Background Accent */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-salon-gold rounded-[3rem] -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
