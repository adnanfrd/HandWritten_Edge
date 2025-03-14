import Image from "next/image";

const MovingLettersSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-extrabold italic">
            Pioneering The Perfect Blend Of <br /> Tradition And Technology
          </h2>
          <h3 className="mt-6 text-2xl font-semibold italic">
            We Know Moving. We Know Letters.
          </h3>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Having been in the moving industry, we understand the nuances and needs of businesses 
            and clients alike. We took the sentimentality of handwritten letters and supercharged it 
            with technology to ensure your business stands out and leaves a lasting impression.
          </p>
          <button className="mt-6 px-6 py-2 text-purple-600 border-b-2 border-purple-600 hover:text-purple-800 hover:border-purple-800 transition-all">
            Read More
          </button>
        </div>

        <div className="lg:w-1/2">
          <Image 
            src="/beach-up-above.jpg1-1.webp" 
            alt="Handwritten Letter with Pen" 
            width={600} 
            height={400} 
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MovingLettersSection;
