"use client";

import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { damion } from "../AboutUs/fonts";

gsap.registerPlugin(ScrollTrigger);

const WhyHandwrittenLetters = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 md:px-12 lg:px-20 xl:px-28 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/texture-bg.webp')] bg-cover opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div ref={contentRef}>
          <h2 className={`${damion.className} text-4xl md:text-7xl font-bold italic text-black`}>
            Why Handwritten <br />
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Letters?
            </span>
          </h2>

          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            In our moving world, trust is everything. Think about the impact of receiving a handwritten note in today's digital age. It’s not just old-school; it’s powerful.
            By adding handwritten letters to our communication strategy, we’re not just moving boxes; we’re building lasting relationships.
          </p>
          <p className="text-gray-700 mt-3 text-lg leading-relaxed">
            It’s a simple gesture that tells our clients they’re more than just another move to us. In an industry where trust can set us apart, a personal touch can be our competitive edge.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 text-lg">
            {[
              "Personal Touch",
              "Increased Engagement",
              "Trust And Authenticity",
              "Memorability",
              "Less Competition",
              "Higher Response Rate",
              "Nostalgia and Emotional Impact",
              "Flexibility in Messaging",
              "Branding Advantage",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="text-blue-500 w-5 h-5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* Button with Hover Effect */}
          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition transform hover:scale-105 shadow-md">
            Learn More
          </button>
        </div>

        {/* Image with Hover & Animation */}
        <div className="flex justify-center">
          <div ref={imageRef} className="relative">
            <img
              src="/handwritten.jpg"
              alt="Handwritten Letter"
              className="rounded-xl shadow-lg object-cover border-4 border-white transition-transform duration-300 hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHandwrittenLetters;
