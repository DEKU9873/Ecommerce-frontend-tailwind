import React from "react";
import Hero from "../components/Hero/Hero";
import HomeProducts from "../components/Products/HomeProducts";
import HomeCategories from "../components/Categories/HomeCategories";
import HomeBrand from "../components/Brand/HomeBrand";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HomeCategories/>
      <HomeProducts />
      <HomeBrand/>
    </div>
  );
};

export default HomePage;
