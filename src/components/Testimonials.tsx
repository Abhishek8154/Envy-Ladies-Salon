import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Client',
    image: 'https://i.pravatar.cc/150?u=priya',
    content: 'Envy Salon is my go-to place in Andheri. The staff is professional and the facial treatments are absolutely divine. Highly recommended!',
    rating: 5
  },
  {
    name: 'Anjali Gupta',
    role: 'Bridal Client',
    image: 'https://i.pravatar.cc/150?u=anjali',
    content: 'I got my bridal makeup done here and I couldn\'t be happier. They made me look exactly how I imagined. The attention to detail is amazing.',
    rating: 5
  },
  {
    name: 'Sneha Patil',
    role: 'Hair Styling Client',
    image: 'https://i.pravatar.cc/150?u=sneha',
    content: 'Best hair spa experience ever! My hair feels so much healthier and the styling was perfect for my party. Love the gold-themed interior too.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-salon-pink-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-salon-pink rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-salon-gold/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-salon-gold fill-salon-gold" size={20} />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 text-salon-pink" size={40} />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-100">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-none mb-1">{testimonial.name}</p>
                  <p className="text-salon-gold text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-salon-gold fill-salon-gold" size={12} />
                ))}
              </div>
              <p className="text-zinc-600 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
