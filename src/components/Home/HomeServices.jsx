"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { damion } from "../AboutUs/fonts";

const HomeServices = () => {
  const services = [
    {
      image: "/w1.jpg",
      title: "Personalized Handwritten Letters:",
      description:
        "Make every interaction special with handwritten letters tailored to your recipient. Perfect for businesses looking to add a personal touch to customer outreach, thank-you notes, or special announcements.",
    },
    {
      image: "/w2.jpg",
      title: "Direct Mail Campaigns:",
      description:
        "Increase response rates with handwritten mailers that grab attention. From real estate outreach to corporate lead generation, our personalized approach ensures your message gets noticed.",
    },
    {
      image: "/w3.jpg",
      title: "Luxury Brand Packaging Inserts:",
      description:
        "Enhance your brand experience with customized, handwritten notes included in product packaging. Ideal for high-end fashion, jewelry, and premium consumer goods.",
    },
    {
      image: "/w4.jpg",
      title: "Customer Appreciation & Thank-You Notes:",
      description:
        "Show gratitude to your customers, clients, and partners with thoughtful, handwritten thank-you cards. Strengthen relationships and build customer loyalty with a personal touch.",
    },
    {
      image: "/w5.jpg",
      title: "Wedding & Event Invitations:",
      description:
        "Create a lasting first impression with beautifully handwritten wedding invitations, RSVP cards, and event place cards. Our handwriting robots ensure elegance and uniformity while maintaining an authentic human touch.",
    },
    {
      image: "/w6.jpg",
      title: "Holiday & Special Occasion Cards:",
      description:
        "Celebrate special moments with handwritten holiday greetings, birthday cards, and seasonal promotions. Add warmth and authenticity to every message.",
    },
    {
      image: "/w7.jpg",
      title: "Real Estate & Sales Follow-Ups:",
      description:
        "Convert leads into clients with handwritten real estate prospecting letters, thank-you notes after meetings, or personalized follow-ups that stand out from digital communication.",
    },
    {
      image: "/w1.jpg",
      title: "Corporate Gifting & Employee Recognition:",
      description:
        "Enhance corporate gifting with handwritten notes expressing appreciation to employees, partners, and executives. A meaningful way to show recognition and gratitude.",
    },
    {
      image: "/w2.jpg",
      title: "Custom Handwritten Solutions:",
      description:
        "Have a unique project in mind? We offer fully customized handwritten services to suit your specific business needs. Get in touch to create a tailored handwritten experience for your brand.",
    },
  ];

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-white to-gray-100 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={` ${damion.className} text-5xl md:text-7xl font-extrabold italic text-gray-900 relative z-10`}
      >
        Our&nbsp;
        <span className="bg-gradient-to-r from-[#001F3F] to-[#00509E] bg-clip-text text-transparent">
          Services
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="mt-2 text-gray-600 max-w-2xl mx-auto"
      >
        At Handwritten Edge, we bring back the lost art of handwritten communication—at scale. Using advanced robotic handwriting technology,
        we create personalized, authentic handwritten letters that leave a lasting impression. Whether you're looking to engage customers,
        strengthen relationships, or elevate your brand experience, our services are designed to help you stand out.
      </motion.p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
