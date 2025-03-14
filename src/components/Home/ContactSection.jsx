"use client";

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
        <h2 className="text-3xl md:text-5xl font-semibold italic">Still Have Some Questions?</h2>
        <p className="text-3xl md:text-5xl mt-4 font-semibold  italic">Contact Us.</p>

        <button className="mt-6 px-6 py-3 bg-black text-white text-lg font-semibold rounded-md hover:bg-opacity-80 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
