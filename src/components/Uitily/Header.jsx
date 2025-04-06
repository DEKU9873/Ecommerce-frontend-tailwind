import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="text-center p-4">
      <h1 className="text-3xl font-bold font-inter text-orange-400">{title}</h1>
      <p className="text-lg text-gray-600 mt-1 font-inter">{subtitle}</p>
    </div>
  );
};


export default Header;
