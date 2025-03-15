import Image from "next/image";
import { motion } from "framer-motion";

const ServiceCard = ({ image, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <Image src={image} alt={title} width={400} height={300} className="w-full" />
      <div className="p-6">
        <h3 className="text-xl font-semibold italic">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
