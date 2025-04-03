import React from "react";
import image from "../../assets/rem.png";
const ProudctsCardSearch = () => {
  return (
    <div className="flex p-2">
      <img src={image} className="w-[150px] h-[150px] object-cover p-2" />
      <div>
        <div className="text-xl font-inter font-semibold">Name of Product</div>
        <div className="text-gray-500 text-sm text-justify">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div className="text-lg font-bold text-orange-300 mt-2">$29.99</div>
      </div>
    </div>
  );
};

export default ProudctsCardSearch;
