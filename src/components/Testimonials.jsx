import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "AGENCY transformed our product vision into a pixel-perfect, high-performance web application. Their eye for premium layout and aesthetic is unmatched.",
    name: "Sarah Jenkins",
    role: "Founder at Veloce Retail",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "The development team delivered clean, production-ready React code that runs at a solid 60fps. The integration with our API workflows was flawless.",
    name: "Marcus Chen",
    role: "CTO at Pulse SaaS",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Collaborating with AGENCY was a masterclass in product strategy. They helped us scope, design, and launch our real estate portal ahead of schedule.",
    name: "Emily Rodriguez",
    role: "Product Lead at Elysian",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    quote: "Their custom design system and attention to micro-animations elevated our brand value significantly. Highly recommend them for premium builds.",
    name: "David Miller",
    role: "CEO at Aura Health",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export default function Testimonials() {
  // We duplicate the list to make the loop infinite
  const items = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background glow elements */}
      <div className="absolute top-[50%] left-[10%] w-[35%] h-[35%] orange-glow opacity-10 pointer-events-none" />
      <div className="absolute top-[20%] right-[5%] w-[40%] h-[40%] orange-glow opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-widest text-brand-orange"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-black leading-tight tracking-tight uppercase"
          >
            What Founders <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-light">Say About Us</span>
          </motion.h2>
        </div>

      </div>

      {/* Infinite scrolling carousel container */}
      <div className="relative w-full flex overflow-x-hidden py-4 z-10">
        {/* Left and Right gradient overlays to blend edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        <div className="flex space-x-6 md:space-x-8 animate-marquee whitespace-nowrap">
          {items.map((testimonial, index) => (
            <div
              key={index}
              className="inline-block w-[300px] sm:w-[380px] md:w-[460px] glass-panel glass-panel-hover p-6 md:p-8 rounded-sm select-none whitespace-normal flex flex-col justify-between"
            >
              {/* Quote */}
              <p className="text-sm md:text-base text-muted-text/90 italic leading-relaxed mb-6 md:mb-8 font-sans">
                "{testimonial.quote}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-4 md:pt-6">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-white/10"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm md:text-base font-bold font-display text-white uppercase tracking-wider">
                    {testimonial.name}
                  </h4>
                  <p className="text-[10px] md:text-xs text-brand-orange font-semibold tracking-widest uppercase">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
