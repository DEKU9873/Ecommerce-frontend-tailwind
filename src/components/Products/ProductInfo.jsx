import React from 'react';

const ProductInfo = () => {
  return (
    <div dir='rtl' className="w-full bg-white p-6 shadow-md font-inter ">
      <div className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
        اسم المنتج
      </div>
      <div className="text-base sm:text-lg font-bold text-gray-600">
        <span className="text-orange-400">الماركة</span> | <span >التصنيف</span>
      </div>
      <hr className="my-4 text-gray-300" />
      <div className='text-lg sm:text-xl font-bold text-gray-800 mb-4'>
        تفاصيل المنتج
      </div>
      <div  className='text-lg sm:text-xl font-bold font-inter text-gray-800 mb-4'>
      <span className='text-gray-600'>السعر</span> : <span className='text-orange-400'>$29</span> 
      </div>
    </div>
  );
};

export default ProductInfo;
