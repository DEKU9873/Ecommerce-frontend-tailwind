import React from "react";

const ProductInfo = () => {
  return (
    <div dir="rtl" className="w-full bg-white p-6  shadow-lg font-inter">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">اسم المنتج</h1>

      <div className="text-base sm:text-lg font-bold text-gray-600 mb-2">
        <span className="text-orange-400">الماركة</span> | <span>التصنيف</span>
      </div>

      <hr className="my-4 border-gray-300" />

      <p className="text-lg sm:text-xl font-medium text-gray-800 mb-6 text-justify leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur
        consectetur repudiandae, illum perspiciatis quos harum id neque suscipit
        eum in dolor cupiditate ex odit, voluptatibus asperiores. Amet quisquam
        nulla necessitatibus.
      </p>

      <div className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
        <span className="text-gray-600">السعر</span>:{" "}
        <span className="text-orange-400">$29</span>
      </div>

      <div className="flex items-center gap-2 text-lg sm:text-xl font-bold text-gray-800 mb-6">
        <span className="text-gray-600">الكمية</span>:
        <div className="flex items-center  rounded-lg px-2 py-1 ">
          <button className="bg-orange-400 text-white px-3 py-1 rounded hover:bg-orange-500">-</button>
          <span className="px-4 text-sm font-medium text-gray-800">1</span>
          <button className="bg-orange-400 text-white px-3 py-1 rounded hover:bg-orange-500">+</button>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full bg-amber-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-amber-600 transition duration-200">
          إضافة إلى السلة
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
