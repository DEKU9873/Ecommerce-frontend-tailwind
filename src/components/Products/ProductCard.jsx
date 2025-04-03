import React from 'react'
import image from '../../assets/rem.png'
import { FaStar } from "react-icons/fa6";

const ProductCard = () => {
  return (
    <div className='bg-white shadow-md rounded-lg p-5 flex flex-col '>
        {/* image */}
        <img src={image} className='w-full h-[250px] object-cover rounded-lg' />
        
        {/* details */}
        <div className='flex justify-between p-4'>
            <div className='text-lg font-semibold text-orange-300'>
                20$
            </div>
            <div className='text-xl font-semibold font-inter'>
                اسم المنتج
            </div>
        </div>

        {/* description */}
        <div className='text-gray-500 text-sm p-4 text-justify '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aperiam porro non vero sed nam nobis rerum harum vel .
        </div>

        {/* rate and add cart */}
        <di>
            <div className='flex justify-between items-center p-4'>
                <div className='flex items-center'>
                   <FaStar className='text-orange-300 text-xl' />
                    <span className='text-gray-500 text-md ml-1'>4.5</span>
                </div>
                <button className='bg-orange-300 text-white px-4 py-2 rounded-lg'>Add to Cart</button>
            </div>
        </di>
    </div>
  )
}

export default ProductCard
