import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";

import { useTranslation } from "react-i18next";
import SearchProducts from "../Products/SearchProducts";
import { useNavigate } from 'react-router-dom';

const Menulinks = [
  { id: 1, name: "الرئيسية", link: "/#" },
  { id: 2, name: "المتجر", link: "/#shop" },
  { id: 3, name: "من نحن", link: "/#about" },
  { id: 4, name: "المدونة", link: "/#blog" },
];

const DropdownLinks = [
  { id: 1, name: "المنتجات الرائجة", link: "/#" },
  { id: 2, name: "الأكثر مبيعاً", link: "/#" },
  { id: 3, name: "الأعلى تقييماً", link: "/#" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [local, setLocal] = useState("ar");

  const [searchTerm, setSearchTerm] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const hadleLanguageChange = () => {
    if (local === "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
    }
  };



  useEffect(() => {
    i18n.changeLanguage(local);
  }, []);

  return (
    <div className=" z-50 transition-all duration-300 py-2 dark:bg-gray-800 bg-orange-200 ">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-red-500 font-bold font-inter text-2xl sm:text-3xl"
          >
            {t("hello")}{" "}
          </a>

          {/* Right Section */}
          <div className="flex items-center gap-4 relative">
            {/* Search */}
            <div className="relative group hidden lg:block">
              <input
                dir="rtl"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث هنا..."
                className="w-40 sm:w-[700px] py-2 px-4 pr-10 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-1 transition-all duration-300 dark:bg-gray-400 dark:border-gray-700 dark:text-white"
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary-500 dark:text-white absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer" />

              {/* عرض SearchProducts فقط إذا كان هناك إدخال */}
              <div className="absolute z-9999">
                {searchTerm.length > 0 && <SearchProducts />}
              </div>
            </div>

            {/* login */}
            <button onClick={handleLogin} className="hidden lg:block relative p-3 cursor-pointer ">
              <CgLogIn className="text-2xl text-gray-600 dark:text-gray-400" />
            </button>

            {/* Language */}
            <button onClick={hadleLanguageChange} className="relative p-3 cursor-pointer">
              <IoLanguageSharp className="text-2xl text-gray-600 dark:text-gray-400" />
            </button>

            {/* Cart */}
            <button className="relative p-3">
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div
                className="w-4 h-4 bg-red-500 text-white rounded-full
              absolute top-0 right-0 flex items-center justify-center text-xs"
              >
                4
              </div>
            </button>

            {/* Dark Mode */}
            <DarkMode />

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-200 menu-toggle"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } mobile-menu-container overflow-y-auto`}
      >
        <div className="p-5">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold text-primary-500 ">URProduct</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="ابحث هنا..."
              className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3" />
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <ul className="space-y-1">
              {Menulinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="block py-3 px-2 rounded-md font-inter font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {data.name}
                  </a>
                </li>
              ))}

              {/* Mobile Dropdown */}
              <li>
                <button
                  onClick={() => toggleDropdown("quick-links")}
                  className="flex justify-between items-center w-full py-3 px-2 rounded-md font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <span className="font-inter">روابط سريعة</span>
                  <FaCaretDown
                    className={`transition-transform duration-300 ${
                      activeDropdown === "quick-links" ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "quick-links"
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="bg-gray-50  dark:bg-gray-700 rounded-md mt-1 mb-2">
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="block py-2 px-6 font-inter text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-white transition-all duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button onClick={handleLogin} className="absolute bottom-0 left-0 p-3 bg-orange-200 w-full flex items-center justify-center gap-2 rounded-md shadow hover:bg-orange-400 transition cursor-pointer">
          <span>تسجيل الدخول</span>
          <CgLogIn className="text-2xl text-gray-600 dark:text-gray-400" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
