import React from "react";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductDetails from "./Pages/ProductDetails";
import Navbar from "./components/Navbar/Navbar";
import NavbarMenu from "./components/Navbar/NavbarMenu";
import ScrollToTop from "./components/ScrollToTop.JSX";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AdminAllProductsPage from "./Pages/Admin/AdminAllProductsPage";
import AddminAddProduct from "./Pages/Admin/AddminAddProductPage";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

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
        <Route path="/formeOne" element={<FormOne />} />
        <Route path="/formeTwo" element={<FormTwo />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/adminAllProducts" element={<AdminAllProductsPage />} />
        <Route path="/adminAddProduct" element={<AddminAddProduct />} />
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
