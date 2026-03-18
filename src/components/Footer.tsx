import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-3xl font-serif font-bold tracking-wider text-salon-gold mb-6 block">
              ENVY <span className="text-white font-light">SALON</span>
            </a>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Your destination for premium beauty care in Andheri East. We specialize in making every woman feel extraordinary.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-salon-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#home" className="hover:text-salon-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-salon-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-salon-gold transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-salon-gold transition-colors">Gallery</a></li>
              <li><a href="#booking" className="hover:text-salon-gold transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-zinc-400">
              <li className="flex gap-3">
                <MapPin size={20} className="text-salon-gold shrink-0" />
                <span>Shop No. 2, Sana Inn, Marol Maroshi Rd, Andheri East, Mumbai 400059</span>
              </li>
              <li className="flex gap-3">
                <Phone size={20} className="text-salon-gold shrink-0" />
                <a href="tel:+919136868528" className="hover:text-salon-gold transition-colors">+91 91368 68528</a>
              </li>
              <li className="flex gap-3">
                <Mail size={20} className="text-salon-gold shrink-0" />
                <a href="mailto:info@envysalon.com" className="hover:text-salon-gold transition-colors">info@envysalon.com</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-zinc-400 mb-6">Subscribe to get special offers and beauty tips.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-zinc-800 border-none rounded-lg px-4 py-3 w-full focus:ring-1 focus:ring-salon-gold"
              />
              <button className="bg-salon-gold px-4 py-3 rounded-lg hover:bg-salon-gold-dark transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
          <p>© {new Date().getFullYear()} Envy Ladies Salon. All rights reserved. Designed for Elegance.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
