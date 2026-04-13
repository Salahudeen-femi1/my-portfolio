import React from "react";
import type { IconType } from "react-icons";

interface OfferCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const OfferCard: React.FC<OfferCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div
      className="w-full p-10 rounded-xl bg-white hover:bg-white hover:shadow-2xl hover:-translate-y-1 items-center flex flex-col text-center
      transition-transform duration-300 ease-in-out"
    >
      <div className=" bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl p-5 text-white flex items-center justify-center mb-4">
        <Icon className="text-white text-2xl" size={30} />
      </div>

      <h3 className="font-bold mb-2 text-2xl">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

export default OfferCard;