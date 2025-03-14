import ServiceCard from "./ServiceCard";

const HomeServices = () => {
  const services = [
    {
      image: "/bond_0009_Layer-7.webp",
      title: "Old-School Mail with Cutting-Edge Technology:",
      description:
        "While most movers are sending generic postcards, imagine elevating your brand by delivering handwritten letters daily to newly listed high-end homes. Stand apart in a crowded industry and make an impression that counts.",
    },
    {
      image: "/IMG_7070-1.jpeg1-1.webp",
      title: "Unforgettable First Impressions:",
      description:
        "Size matters in making an impression. With our customizable 5×7 cards, let your brand stand out uniquely in a crowd. Tailored for movers, these premium cards amplify your message’s impact, ensuring it doesn’t just get noticed—it leaves a lasting memory.",
    },
    {
      image: "/trash-mail-600x400-1.webp",
      title: "Tired of Returned Mail? We Were Too.",
      description:
        "Ever sent out postcards only to have them come back, marking a missed opportunity? Introducing MoveCleanse – our cloud-based tool that meticulously combs through your daily listings. Say goodbye to wasted time and mail with us.",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-4xl font-extrabold italic">Our Services</h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Experience unmatched efficiency with MovingLetters.ai. Elevate your moving business, embrace innovative solutions, and connect deeply with clients. Our cutting-edge approach guarantees satisfaction, blending tradition with contemporary strategies for optimal results.
      </p>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default HomeServices;
