import React from "react";
import ProudctsCardSearch from "./ProudctsCardSearch";

const SearchProducts = () => {
  return (
    <div className="mt-2">
      <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-transparent border-b-white ml-6">
      </div>
      <div className=" w-[800px] min-h-[400px] z-999 bg-white items-center text-xs p-6 shadow-md">
        <div className="grid grid-cols-2 ">
        <ProudctsCardSearch />
        <ProudctsCardSearch />
        <ProudctsCardSearch />
        <ProudctsCardSearch />
     

        </div>
        <button className="w-full bg-amber-500 text-white font-semibold py-3 px-6  shadow-md hover:bg-amber-600 transition-all duration-200">
  عرض الكل
</button>
      </div>
    </div>
  );
};

export default SearchProducts;
