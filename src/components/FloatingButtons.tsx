import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/919136868528"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <MessageCircle size={32} />
      </motion.a>

      {/* Mobile Call Button (Visible only on small screens) */}
      <motion.a
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        href="tel:+919136868528"
        className="fixed bottom-6 left-6 z-50 md:hidden bg-salon-gold text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      >
        <Phone size={28} />
      </motion.a>
    </>
  );
};

export default FloatingButtons;
