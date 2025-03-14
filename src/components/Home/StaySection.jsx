import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const StaySection = () => {
  return (
    <section className="py-12 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold italic text-gray-900">Stay With Us:</h2>
      
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <Facebook className="w-10 h-10 text-indigo-900" />
          <p className="mt-3 text-lg font-semibold italic">FaceBook</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <Twitter className="w-10 h-10 text-indigo-900" />
          <p className="mt-3 text-lg font-semibold italic">Twitter</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <Instagram className="w-10 h-10 text-indigo-900" />
          <p className="mt-3 text-lg font-semibold italic">Instagram</p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105">
          <Youtube className="w-10 h-10 text-indigo-900" />
          <p className="mt-3 text-lg font-semibold italic">Youtube</p>
        </div>
      </div>
    </section>
  );
};

export default StaySection;
