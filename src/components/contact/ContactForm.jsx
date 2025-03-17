"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { damion } from "../AboutUs/fonts";

const ContactForm = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-50 px-4 py-12">
      <div className="max-w-6xl w-full grid sm:grid-cols-1 md:grid-cols-2 gap-12 bg-white p-6 sm:p-10 rounded-2xl shadow-2xl">
        {/* Left Section - Contact Info */}
        <motion.div
          className="space-y-6 text-center sm:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h3 className="text-blue-600 font-medium text-lg">We'd Love To Hear From You</h3>
          <h2 className={`${damion.className} text-4xl md:text-7xl font-extrabold italic text-gray-800`}>
            Get In Touch
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Whether you're eager to explore our offerings or simply want to share your feedback, we're here to listen. Dive into the world of moving letters with us and let’s craft meaningful connections together.
          </p>
          <div className="flex sm:justify-start justify-center items-center space-x-3 text-gray-700">
            <MapPin className="text-purple-500 w-6 h-6" />
            <div>
              <p className="font-semibold">3110 Boychuck Ave unit 470G</p>
              <p>Colorado Springs, CO, 80910</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full font-semibold">
                1
              </div>
              <div className="w-24 sm:w-32 h-1 bg-gray-300"></div>
              <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-600 rounded-full font-semibold">
                2
              </div>
            </div>
            <p className="text-blue-500 text-sm sm:text-base">Step</p>
          </div>

          {/* Form Fields */}
          <form className="space-y-4">
            <div>
              <label className="text-gray-700 font-medium">Full Name:</label>
              <input
                type="text"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Email Address:</label>
              <input
                type="email"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Phone Number:</label>
              <input
                type="tel"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>
            <div>
              <label className="text-gray-700 font-medium">Company Name (If Applicable):</label>
              <input
                type="text"
                className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
              />
            </div>

            {/* Radio Options */}
            <fieldset className="space-y-2">
              <legend className="text-gray-700 font-medium">Are You A:</legend>
              {["Moving Company Owner", "Marketing Professional", "Individual Seeking Services", "Other"].map(
                (option, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input type="radio" name="userType" className="text-purple-600" />
                    <label className="text-gray-600">{option}</label>
                  </div>
                )
              )}
            </fieldset>

            {/* Submit Button */}
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-purple-600 transition-all duration-300">
              Next
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
