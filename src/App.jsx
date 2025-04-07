import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import ScrollToTop from "./components/ScrollToTop.JSX";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AdminAllProductsPage from "./Pages/AdminAllProductsPage";

const AppContent = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <ScrollToTop />
      {!hideNavbar && <Navbar />}
      {!hideNavbar && <NavbarMenu />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/adminAllProducts" element={<AdminAllProductsPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
