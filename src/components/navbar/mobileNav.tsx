import React from "react";

const MobileNav = ({ menuOpen }) => {
  return (
    <div className={menuOpen ? "block z-50 absolute w-full" : "hidden"}>
      <div className="px-2 bg-white">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <div className="px-4 pb-2  bg-white flex justify-center items-center ">
          <input
            className="w-full py-2.5 px-2 bg-gray-100 rounded-lg text-gray-700 leading-tight focus:outline-none "
            id="search"
            type="text"
            placeholder="Search"
          />
        </div>

        <a href="#" className="mobileNavs">
          Rent
        </a>
        <a href="#" className="mobileNavs">
          Buy
        </a>
        <a href="#" className="mobileNavs">
          About Us
        </a>
      </div>
      <div />
    </div>
  );
};

export default MobileNav;
