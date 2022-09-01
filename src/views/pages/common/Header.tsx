import logo from "../../../assets/images/logo.png";

import React from "react";

const Header = () => {
  return (
    <div className="container mx-auto bg-slate-400">
      <div className="flex items-center justify-center">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <input
            type="text"
            name=""
            className="p-3 bg-white border-none w-full border-gray-100"
            id=""
          />
          <button>search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
