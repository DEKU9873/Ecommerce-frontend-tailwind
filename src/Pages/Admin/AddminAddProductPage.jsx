import React from "react";
import AdminSidebar from "../../components/Admin/AdminSidebar";
import AdminAddProduct from "../../components/Admin/AdminAddProduct";

const AddminAddProduct = () => {
  return (
    <div dir="rtl" className="grid grid-cols-5">
      <AdminSidebar className="col-span-1" />
      <div className="col-span-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          <AdminAddProduct />
        </div>
      </div>
    </div>
  );
};

export default AddminAddProduct;
