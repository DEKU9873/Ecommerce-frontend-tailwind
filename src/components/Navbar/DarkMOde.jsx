import React, { useEffect, useState } from "react";
import Light from "../../assets/Mode/light-mode-button.png";
import Dark from "../../assets/Mode/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.remove("light");
    } else {
      element.classList.add("light");
      element.classList.remove("dark");
    }
  }, [theme]); // ← تم إصلاح المشكلة هنا

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Light}
        alt="Light Mode"
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={Dark}
        alt="Dark Mode"
        className={`w-12 cursor-pointer transition-all duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default DarkMode;
