import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import NavbarMenu from "../components/Navbar/NavbarMenu";
import HomeProducts from "../components/Products/HomeProducts";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <NavbarMenu/>
      <Hero />
      <HomeProducts />

    </div>
  );
};

export default HomePage;
