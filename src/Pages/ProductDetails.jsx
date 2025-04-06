import React from "react";
import ProductInfo from "../components/Products/ProductInfo";
import ProductGallery from "../components/Products/ProductGeallery";
import ProductCard from "../components/Products/ProductCard";
import Header from "../components/Uitily/Header";
import AllDetailsButton from "../components/Uitily/AllDetailsButton";
const ProductDetails = () => {
  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6   p-5 lg:p-10">
        <div className="lg:col-span-2 xl:col-span-2">
          <ProductGallery />
        </div>
        <div className="lg:col-span-2 xl:col-span-2">
          <ProductInfo />
        </div>
      </div>
      <div className="p-6 ">
        <Header title="المنتجات" subtitle="منتجات قد تعجبك" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <AllDetailsButton title="عرض كل المنتجات" />
      </div>
    </div>
  );
};

export default ProductDetails;
