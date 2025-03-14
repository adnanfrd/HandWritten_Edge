"use client";
import Image from "next/image";

const blogPosts = [
  {
    title: "The Future of Moving: Embracing Social Media Culture in 2025",
    excerpt:
      "The moving industry is undergoing a transformation as social media culture shapes customer engagement and brand loyalty.",
    author: "Matthew Young",
    date: "December 12, 2025",
    image: "/heading1.png",
  },
  {
    title: "Unlock Your Golden Ticket: A Secret Direct Mail Hack",
    excerpt:
      "At MovingLetters.ai, we’re excited to introduce a revolutionary direct mail strategy that enhances customer engagement.",
    author: "Steven Patel",
    date: "June 15, 2024",
    image: "/heading2.webp",
  },
  {
    title: "Our Founder Takes the ‘Hot’ Talk: Sharing Product Features with the AI World",
    excerpt:
      "MovingLetters.ai's latest feature revolutionizes direct mail marketing with AI-driven personalization.",
    author: "Steven Patel",
    date: "April 8, 2025",
    image: "/heading3.webp",
  },
  {
    title: "Santa’s Secrets to Moving Magic & Special Growth in the Moving Industry",
    excerpt:
      "Discover the AI twist behind Santa’s secrets to keeping holiday logistics smooth and efficient.",
    author: "Matthew Young",
    date: "December 20, 2025",
    image: "/heading4.webp",
  },
  {
    title: "My Journey with AI: The Matthew Young Story",
    excerpt:
      "An insider’s experience with AI-powered automation, personalization, and the future of customer engagement.",
    author: "Matthew Young",
    date: "January 3, 2025",
    image: "/heading5.webp",
  },
  {
    title: "Crafting the Perfect Message: Tips for Personalizing Your Moving Letters",
    excerpt:
      "A deep dive into the art of crafting a message that builds trust and connection in the moving industry.",
    author: "Steven Patel",
    date: "September 15, 2025",
    image: "/heading6.webp",
  },
];

const BlogGrid = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-900 mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-lg"
            >
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-indigo-900">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-800">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
                <button className="mt-4 text-indigo-600 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
