"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqsLeft = [
  {
    question: "Why handwritten letters? Aren't digital methods more efficient?",
    answer: "Handwritten letters evoke emotions and build trust better than digital messages.",
  },
  {
    question: "How does the AI in MovingLetters.ai work?",
    answer: "Our AI automates handwriting in a personalized and scalable way.",
  },
  {
    question: "Can I personalize the letters further?",
    answer: "Yes, you can add custom messages, signatures, and branding.",
  },
  {
    question: "Will the letters really be different every time?",
    answer: "Absolutely! Our AI ensures each letter has unique handwriting variations.",
  },
  {
    question: "Is there a limit to how many letters I can send out?",
    answer: "There are no hard limits. You can scale your outreach as needed.",
  },
];

const faqsRight = [
  {
    question: "Are there any limitations to what can be written?",
    answer: "You can write almost anything, but we ensure ethical use.",
  },
  {
    question: "What makes your service exclusive in the market?",
    answer: "Our AI-driven, human-like handwritten letters set us apart.",
  },
  {
    question: "How can I get started?",
    answer: "Simply sign up, create your letter, and let our AI do the rest.",
  },
  {
    question: "What sets MovingLetters.ai apart from other marketing services?",
    answer: "We focus on personalization, emotional impact, and automation.",
  },
  {
    question: "I'm concerned about data privacy. How do you handle our data?",
    answer: "We follow strict security protocols to protect user data.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center italic text-black mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-10">
        Navigating the world of handwritten robotic letters might feel like venturing into uncharted waters. We totally get it. That’s why we’ve curated this section to answer some of the burning questions you might have about our services. Dive into the nuances, understand the behind-the-scenes magic, and discover the passion and precision we pour into every letter. These FAQs are your gateway to understanding how MovingLetters.ai is revolutionizing communication for movers, one handwritten note at a time        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            {faqsLeft.map((faq, index) => (
              <div
                key={index}
                className="mb-4 border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? <Minus /> : <Plus />}
                </button>
                {openIndex === index && (
                  <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>

          <div>
            {faqsRight.map((faq, index) => (
              <div
                key={index + faqsLeft.length}
                className="mb-4 border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleFaq(index + faqsLeft.length)}
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index + faqsLeft.length ? <Minus /> : <Plus />}
                </button>
                {openIndex === index + faqsLeft.length && (
                  <div className="p-4 text-gray-700 bg-white">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
