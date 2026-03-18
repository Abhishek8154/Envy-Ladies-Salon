import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-salon-pink-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-salon-gold font-medium tracking-widest uppercase mb-4 block">Visit Us</span>
            <h2 className="text-4xl font-serif font-bold mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <MapPin className="text-salon-gold" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Our Location</h3>
                  <p className="text-zinc-600 leading-relaxed">
                    Shop No. 2 Ground Floor, Sana Inn, C Wing, Marol Maroshi Rd, near Seven Hills Hospital, Bori Colony, Shivaji Nagar JJC, Marol, Andheri East, Andheri, Mumbai, Maharashtra 400059, India
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <Phone className="text-salon-gold" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Call Us</h3>
                  <a href="tel:+919136868528" className="text-2xl font-medium text-zinc-800 hover:text-salon-gold transition-colors">
                    +91 91368 68528
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                  <Clock className="text-salon-gold" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold mb-2">Working Hours</h3>
                  <p className="text-zinc-600">Monday - Sunday: 10:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://maps.app.goo.gl/H2HHgq5Gsd1cHaaDA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-12 inline-flex items-center gap-3 bg-white border-2 border-salon-gold text-salon-gold px-8 py-4 rounded-full font-bold hover:bg-salon-gold hover:text-white transition-all"
            >
              <Navigation size={20} />
              Get Directions
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] border-4 border-white"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.005820302523!2d72.8791349!3d19.1116248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c86716a5043f%3A0x5e206f363c43422e!2sEnvy%20Ladies%20Salon!5e0!3m2!1sen!2sin!4v1710690000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Envy Ladies Salon Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
