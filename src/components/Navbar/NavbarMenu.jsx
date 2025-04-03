import React from "react";
import { FaCaretDown } from "react-icons/fa";

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

const NavbarMenu = () => {
  return (
    <div dir="rtl" className="hidden lg:flex justify-center items-center bg-gray-400">
      {/* Desktop Menu */}
      <div className="">
        <ul className="flex items-center gap-[30px] ">
          {Menulinks.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-3 py-2 font-medium font-inter text-md  text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Dropdown */}
          <li className="relative cursor-pointer group">
            <a
              href="#"
              className="flex items-center gap-[2px] font-inter font-medium
                       text-md  text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white py-2"
            >
              روابط سريعة{" "}
              <span>
                <FaCaretDown
                  className="group-hover:rotate-180 
                          duration-300"
                />
              </span>
            </a>
            {/* Dropdown Links */}
            <div
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
                                     w-full p-2 hover:bg-primary/20 rounded-md "
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
      </div>
    </div>
  );
};

export default NavbarMenu;
