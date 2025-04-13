import React from 'react'
import image from "../../assets/rem.png";

const BrandCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-4 flex items-center justify-center">
      <img 
        src={image} 
        className='w-28 h-28 sm:w-32 sm:h-32 object-contain'
      />
    </div>
  )
}

export default BrandCard
