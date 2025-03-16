import Image from "next/image";
import { damion } from "../AboutUs/fonts";

const PersonalTouch = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 xl:px-28 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`${damion.className} text-4xl md:text-7xl font-bold italic text-black`}>
          The Power of Personal <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Touch
          </span>
        </h2>

        <p className="text-gray-700 mt-4 text-lg leading-relaxed">
          Remember that heartwarming feeling when you received a special handwritten birthday card? The genuine touch, the personal effort, the emotional connection? 
          Now, envision being a potential moving customer and receiving a handwritten note from a CEO. It’s not just a letter; it’s a testament to care, dedication, and the value the company places on individual relationships.
        </p>
        <p className="text-gray-700 mt-3 text-lg leading-relaxed">
          In a world of digital detachment, a handwritten letter from a company’s leader becomes a powerful tool to foster trust, stand out, and ultimately convert potential leads into loyal clients.
        </p>

        <div className="mt-8 flex justify-center">
          <Image
            src="/thanks.jpg"
            alt="Personal Touch Image"
            width={400}
            height={300}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PersonalTouch;
