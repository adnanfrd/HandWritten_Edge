"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";

const faqs = [
  { question: "Why handwritten letters? Aren’t digital methods more efficient?", answer: "Handwritten letters add a personal touch that digital methods lack, making communication more heartfelt and memorable." },
  { question: "How does the AI in HandWritten.com work?", answer: "Our AI personalizes handwritten letters based on customer preferences, ensuring authenticity and engagement." },
  { question: "Can I personalize the letters further?", answer: "Yes! You can customize the message, font, and even include your signature." },
  { question: "Will the letters really be different every time?", answer: "Absolutely! Our system ensures each letter has unique handwriting variations." },
  { question: "Are there limitations on what can be written?", answer: "We support most texts, but certain restrictions apply based on ethical guidelines." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");

  // Prevent hydration mismatch
  useEffect(() => {
    setOpenIndex(-1);
  }, []);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-[115vh] flex flex-col items-center justify-center bg-gray-50 px-6 py-16">
      {/* Header */}
      <motion.h1
        className="text-3xl sm:text-6xl font-extrabold text-gray-800 mb-6 italic text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Frequently Asked{" "}
        <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Questions
        </span>
      </motion.h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-xl mb-8">
        <Search className="absolute left-4 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search for questions..."
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-3xl">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-gray-700 font-semibold"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              {faq.question}
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <motion.div
                className="p-4 text-gray-600 border-t border-gray-200"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
