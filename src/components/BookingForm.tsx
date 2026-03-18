import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const services = [
    'Haircut & Styling',
    'Hair Coloring',
    'Hair Spa',
    'Facial & Skin Care',
    'Waxing & Threading',
    'Manicure & Pedicure',
    'Bridal Makeup',
    'Party Makeup',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappNumber = '919136868528';
    const text = `*New Appointment Booking*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${formData.service}%0A*Date:* ${formData.date}%0A*Message:* ${formData.message}`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-salon-pink-light rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-salon-pink">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Book Your Appointment</h2>
            <p className="text-zinc-600">Fill out the form below and we'll confirm your booking via WhatsApp.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-salon-pink bg-white focus:outline-none focus:ring-2 focus:ring-salon-gold/50 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-salon-pink bg-white focus:outline-none focus:ring-2 focus:ring-salon-gold/50 transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Service Interested In</label>
                <select
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-salon-pink bg-white focus:outline-none focus:ring-2 focus:ring-salon-gold/50 transition-all appearance-none"
                >
                  <option value="">Select a Service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-zinc-700 mb-2">Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl border border-salon-pink bg-white focus:outline-none focus:ring-2 focus:ring-salon-gold/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-zinc-700 mb-2">Message (Optional)</label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl border border-salon-pink bg-white focus:outline-none focus:ring-2 focus:ring-salon-gold/50 transition-all"
                placeholder="Any special requests?"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-salon-gold text-white py-5 rounded-2xl font-bold text-lg shadow-lg shadow-salon-gold/20 flex items-center justify-center gap-3 hover:bg-salon-gold-dark transition-all"
            >
              <Send size={20} />
              Book via WhatsApp
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
