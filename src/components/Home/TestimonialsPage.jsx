'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { damion } from '../AboutUs/fonts';

const testimonials = [
  {
    name: 'Carlos Holmewright',
    company: 'Central Coast Moving & Storage',
    image: '/testimonial1.jpeg',
    text: "When Matt first shared the concept of Movingmaterials with me, I'll admit I was intrigued but skeptical. Moving is a big deal, after all. But after seeing it in action, I was blown away. The seamless blending of handwritten letter services, a distraction-free theme, and personal materials just made sense. In a world where so much of the customer’s decision is based on trust, having a genuine handwritten message truly makes an impact."
  },
  {
    name: 'Harold Marshall',
    company: 'Maverick’s Moving & Storage',
    image: '/testimonial2.jpeg',
    text: "In the fast-paced world of moving, securing every lead matters. That’s where Movingmaterials has been transformational for Maverick’s Moving. The clear distinction made us a household name for direct mail marketing. Clients love the extra effort and personalization of these handwritten letters. It’s a difference-maker in an industry filled with generic ads."
  },
  {
    name: 'David Espinoza',
    company: 'Elite Transitions Moving',
    image: '/testimonial3.webp',
    text: "Speaking with Matt from Movingmaterials was a game-changer for our business. Thanks to this service, we’ve seen a 35% boost in lead conversion and a strong surge in referrals. The handwritten messaging is compelling, customized, and has enhanced my brand image significantly. I would wholeheartedly recommend it to anyone who truly values their customers."
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-gray-100 py-32 px-6 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className={`${damion.className} text-center text-4xl md:text-7xl font-bold italic text-gray-900`}
      >
        Hear From Fellow Movers
      </motion.h2>

      <p className="text-center text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
        Hear it directly from those who have experienced the magic of Movingmaterials. Dive into their insights, 
        understand their journey, and see how our unique blend of traditional charm and modern solutions makes a difference.
      </p>

      {/* Testimonials Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-center hover:shadow-2xl transition-all"
          >
            <img src={item.image} alt={item.name} className="w-16 h-16 mx-auto rounded-full mb-4" />
            <p className="text-gray-600 italic">"{item.text}"</p>
            <h3 className={` ${damion.className} mt-4 text-2xl font-semibold italic  text-indigo-700`}>{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
