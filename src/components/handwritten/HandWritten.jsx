'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { damion } from '../AboutUs/fonts';

const data = [
  { title: 'Personal Touch', text: 'Handwritten letters exude personal effort and attention, making the recipient feel special and valued.' },
  { title: 'Increased Engagement', text: 'In a world of digital noise, a handwritten letter stands out, making it more likely to be opened and read than standard print or emails.' },
  { title: 'Trust And Authenticity', text: 'The tactile nature of handwritten letters often evokes trust and suggests a genuine, authentic approach rather than a mass-produced campaign.' },
  { title: 'Memorability', text: 'A handwritten letter is more memorable and has a higher chance of being kept, revisited, or shown to others.' },
  { title: 'Less Competition', text: 'With the rise of digital marketing, there’s less competition in the physical mailbox, giving your handwritten letter a spotlight.' },
  { title: 'Higher Response Rate', text: 'Studies have shown that handwritten mailings often have a higher response rate than typical printed mail.' },
  { title: 'Nostalgia And Emotional Impact', text: 'For many, handwritten letters bring a sense of nostalgia, evoking emotions that digital communications often can’t replicate.' },
  { title: 'Flexibility In Messaging', text: 'Handwritten notes can be customized easily, allowing for tailored messaging to different recipients, further enhancing the personal touch.' },
  { title: 'Branding Advantage', text: 'By going the extra mile with handwritten letters, you demonstrate a brand message that values relationships and personal connection.' }
];

export default function HandWritten() {
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
        Why Handwritten Letters?
      </motion.h2>

      {/* Cards Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-xl p-6 md:p-8 text-center hover:shadow-2xl transition-all"
          >
            <h3 className={`${damion.className} text-3xl font-semibold italic text-gray-900`}>{item.title}</h3>
            <p className="mt-3 text-gray-600 text-start">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
