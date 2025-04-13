import React from 'react';
import { FaTag, FaTags, FaBoxOpen, FaShoppingBag, FaTrademark, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router';

const AdminSidebar = () => {
  return (
    <div dir='rtl' className='bg-orange-200 min-h-screen w-full p-4 text-gray-800 shadow-lg'> 
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center">لوحة التحكم</h1>
      </div>
      
      <ul className="space-y-6">
        {/* Products Section */}
        <li>
          <div className="p-3 rounded-md bg-orange-300 font-bold flex items-center">
            <FaBoxOpen className="ml-2" />
            <span>المنتجات</span>
          </div>
          
          <ul className="pr-6 mt-2 space-y-1">
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaShoppingBag className="ml-2" />
              <Link to="/adminAllProducts">كل المنتجات</Link>
            </li>
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaShoppingBag className="ml-2" />
              <Link to="/adminAddProduct">اضافة منتج</Link>
            </li>
          </ul>
        </li>
        
        {/* Categories Section */}
        <li>
          <div className="p-3 rounded-md bg-orange-300 font-bold flex items-center">
            <FaTags className="ml-2" />
            <span>التصنيفات</span>
          </div>
          
          <ul className="pr-6 mt-2 space-y-1">
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTags className="ml-2" />
              <span>كل التصنيفات</span>
            </li>
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTag className="ml-2" />
              <span>اضافة تصنيف</span>
            </li>
          </ul>
        </li>
        
        {/* Subcategories Section */}
        <li>
          <div className="p-3 rounded-md bg-orange-300 font-bold flex items-center">
            <FaTag className="ml-2" />
            <span>التصنيفات الفرعية</span>
          </div>
          
          <ul className="pr-6 mt-2 space-y-1">
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTag className="ml-2" />
              <span>كل التصنيفات الفرعية</span>
            </li>
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTag className="ml-2" />
              <span>اضافة تصنيف فرعي</span>
            </li>
          </ul>
        </li>
        
        {/* Brands Section */}
        <li>
          <div className="p-3 rounded-md bg-orange-300 font-bold flex items-center">
            <FaTrademark className="ml-2" />
            <span>الماركات</span>
          </div>
          
          <ul className="pr-6 mt-2 space-y-1">
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTrademark className="ml-2" />
              <span>كل الماركات</span>
            </li>
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaTrademark className="ml-2" />
              <span>اضافة ماركة</span>
            </li>
          </ul>
        </li>
        {/* Users Section */}
        <li>
          <div className="p-3 rounded-md bg-orange-300 font-bold flex items-center">
            <FaUserAlt className="ml-2" />
            <span>المستخدمين</span>
          </div>
          
          <ul className="pr-6 mt-2 space-y-1">
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaUserAlt className="ml-2" />
              <span>كل المستخدمين</span>
            </li>
            <li className="p-2 rounded-md hover:bg-orange-300 transition-all flex items-center">
              <FaUserAlt className="ml-2" />
              <span>اضافة مستخدم</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;