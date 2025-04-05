import React, { useState } from "react";
import image from "../../assets/rem.png";
import image2 from "../../assets/mario.png";

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(image);
  const images = [image, image2];

  return (
    <div className="w-full bg-white p-6 shadow-md  grid grid-cols-1 lg:grid-cols-7 gap-4">
      {/* images */}
      <div className="flex lg:block justify-center gap-2 lg:gap-0 col-span-1">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setSelectedImage(img)}
            className={`w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] p-1 mt-2 cursor-pointer rounded 
              ${selectedImage === img ? "border-2 border-orange-500" : "border"}`}
            alt={`Product thumbnail ${index + 1}`}
          />
        ))}
      </div>

      {/* image */}
      <div className="col-span-6 w-full flex items-center justify-center">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-full max-w-[600px] max-h-[400px] md:max-h-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
