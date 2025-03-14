const ElevateSection = () => {
    return (
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/pexels-ketut-subiyanto-4247768-1.webp')" }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "#33293D", opacity: 0.75 }}></div>
        </div>
  
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-3xl md:text-5xl font-bold italic">
            Elevate Your Client Communication
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Join the revolution and make every letter count.
          </p>
          <button className="mt-6 bg-black px-6 py-3 text-white font-semibold rounded-lg hover:bg-gray-800 transition">
            Get Started Today
          </button>
        </div>
      </section>
    );
  };
  
  export default ElevateSection;
  