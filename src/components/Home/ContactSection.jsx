"use client";

import { damion } from "../AboutUs/fonts";

const ContactSection = () => {
  return (
    <section
      className="relative w-full h-[50vh] md:h-[60vh] flex flex-col items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: `url('/questions.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0" style={{background: "#33293D",
    opacity: "0.75"}}></div>

      <div className="relative z-10">
        <h2 className={`${damion.className} text-4xl md:text-7xl font-semibold italic`}>Still Have Some <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Questions?
          </span><br /> Contact Us.</h2>
        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-opacity-80 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
