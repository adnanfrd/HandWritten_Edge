import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Austin Yarborough",
      company: "Central Coast Moving & Storage",
      quote:
        "Receiving a handwritten letter evokes emotion that emails can't replicate. MovingLetters.ai amplifies trust. We, as movers, are in the business of memories, transitions, and new beginnings.",
      image: "/Testimonial-Austin-.webp",
    },
    {
      name: "Nacail Murdock",
      company: "Murdock’s Moving & Storage",
      quote:
        "In the fast-paced world of moving, securing every lead is vital. MovingLetters.ai has been transformative for Murdock’s Moving, revolutionizing our direct mail campaigns and boosting lead generation and sales. It’s a groundbreaking approach.",
      image: "/Testimonial-Neacail-Murdocks.webp",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 xl:px-28 bg-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold italic text-black">
        Hear From Fellow Movers
      </h2>
      <p className="text-gray-600 mt-3 text-lg">
        Discover the difference MovingLetters.ai has made for others in the
        industry. Here’s what fellow movers have to say.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-6 flex flex-col md:flex-row items-center shadow-lg"
          >
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>

            <div className="md:ml-6 mt-4 md:mt-0 text-left">
              <p className="text-purple-600 text-2xl font-serif mb-3">“</p>
              <p className="text-gray-700 text-lg">{testimonial.quote}</p>
              <p className="mt-4 font-semibold italic text-blue-600">
                {testimonial.name}
              </p>
              <p className="text-gray-500 text-sm">{testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
