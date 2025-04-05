import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import NavbarMenu from "./components/Navbar/NavbarMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <NavbarMenu/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
