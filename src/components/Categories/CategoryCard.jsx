import React from "react";
import image from "../../assets/rem.png";

const CategoryCard = ({ title }) => {
  return (
    <div className=" p-4 flex flex-col items-center text-center">
      <img
        src={image}
        alt={title}
        className="w-[150px] h-[150px] rounded-full object-cover bg-amber-100 p-2 mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
    </div>
  );
};

export default CategoryCard;
