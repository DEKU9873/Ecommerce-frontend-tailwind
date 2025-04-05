import React from 'react';
import ProductInfo from '../components/Products/ProductInfo';
import ProductGallery from '../components/Products/ProductGeallery';
const ProductDetails = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 bg-gray-200  p-5 lg:p-10">
      <div className="lg:col-span-2 xl:col-span-2">
        <ProductGallery />
      </div>
      <div className="lg:col-span-2 xl:col-span-2">
        <ProductInfo />
      </div>
    </div>
  );
};

export default ProductDetails;
