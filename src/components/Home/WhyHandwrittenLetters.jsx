import Image from "next/image";
import { Check } from "lucide-react";

const WhyHandwrittenLetters = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 xl:px-28 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold italic text-black">
            Why Handwritten <br /> Letters?
          </h2>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            In our moving world, trust is everything. Think about the impact of receiving a handwritten note in today's digital age. It’s not just old-school; it’s powerful. By adding handwritten letters to our communication strategy, we’re not just moving boxes; we’re building lasting relationships.
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

          <button className="mt-6 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/whyletter.webp"
            alt="Handwritten Letter"
            width={500}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHandwrittenLetters;
