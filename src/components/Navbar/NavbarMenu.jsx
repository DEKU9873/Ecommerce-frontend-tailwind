import React from "react";
import { FaCaretDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const NavbarMenu = () => {
    const { t, i18n } = useTranslation();

    const Menulinks = [
      { id: 1, name: t("navbar.home"), link: "/#" },
      { id: 2, name: t("navbar.shop"), link: "/#shop" },
      { id: 3, name: t("navbar.about"), link: "/#about" },
      { id: 4, name: t("navbar.blog"), link: "/#blog" },
    ];
    
    const DropdownLinks = [
      { id: 1, name: t("navbar.popularProducts"), link: "/#" },
      { id: 2, name: t("navbar.bestSellers"), link: "/#" },
      { id: 3, name: t("navbar.topRated"), link: "/#" },
    ];
  
  return (
    <div className="hidden lg:flex justify-center items-center bg-gray-400 dark:bg-gray-800">
      {/* Desktop Menu */}
      <div className="">
        <ul className="flex items-center gap-[30px] ">
          {Menulinks.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-3 py-2 font-medium font-inter text-md text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white transition-all duration-200 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary-500 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
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
                       text-md text-gray-700 hover:text-primary-500 dark:text-gray-300 dark:hover:text-white py-2"
            >
              {t("navbar.quickLinks")}{" "}
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
                        dark:text-white"
            >
              <ul className="space-y-2">
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      className="text-gray-700 font-inter hover:text-black
                                     dark:hover:text-white duration-200 inline-block 
                                     w-full p-2 hover:bg-primary/20 dark:hover:bg-gray-800 rounded-md"
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