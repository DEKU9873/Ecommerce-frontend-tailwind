import React, { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import { IoLanguageSharp } from "react-icons/io5";

import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();
  const [local, setLocal] = useState("ar");

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
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
    <div className=" z-50 transition-all duration-300 py-2 dark:bg-gray-800 bg-orange-300 ">
      <div className="mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#"
            className="text-red-500 font-bold font-inter text-2xl sm:text-3xl"
          >
            {t("hello")}{" "}
          </a>

          {/* Desktop Menu */}
          {/* <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {Menulinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block px-3 py-2 font-medium font-inter text-lg  text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {data.name}
                  </a>
                </li>
              ))} */}
              {/* Dropdown */}
              {/* <li className="relative cursor-pointer group">
                <a
                  href="#"
                  className="flex items-center gap-[2px] font-inter font-medium
                 text-lg  text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white py-2"
                >
                  روابط سريعة{" "}
                  <span>
                    <FaCaretDown
                      className="group-hover:rotate-180 
                    duration-300"
                    />
                  </span>
                </a> */}
                {/* Dropdown Links */}
                {/* <div
                  className="absolute z-[9999] hidden group-hover:block w-[200px]
                  rounded-md bg-white shadow-md dark:bg-gray-900 p-2 text-black 
                  dark:text-white "
                >
                  <ul className="space-y-2">
                    {DropdownLinks.map((data) => (
                      <li>
                        <a
                          className="text-gray-700 font-inter hover:text-black
                               dark:hover:text-white duration-200 inline-block 
                               w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          href={data.link}
                        >
                          {" "}
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div> */}

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative group hidden lg:block">
              <input
                type="text"
                placeholder="ابحث هنا..."
                className="w-40 sm:w-64 py-2 px-4 pr-10 rounded-full border bg-white border-gray-300 focus:outline-none focus:ring-1   transition-all duration-300 dark:bg-gray-400 dark:border-gray-700 dark:text-white "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary-500 dark:text-white absolute top-1/2 -translate-y-1/2 right-3 duration-200 cursor-pointer" />
              {/* <div className="absolute w-[600px] h-[300px] top-[200px] -translate-y-1/2 right-2 z-999 rounded-2xl  bg-red-500 text-white  flex items-center justify-center text-xs">

              </div> */}
            </div>

            {/* Language */}
            <button onClick={hadleLanguageChange} className="relative p-3">
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
