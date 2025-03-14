import Image from "next/image";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image src={image} alt={title} width={400} height={300} className="w-full" />
      <div className="p-6">
        <h3 className="text-xl font-semibold italic">{title}</h3>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
