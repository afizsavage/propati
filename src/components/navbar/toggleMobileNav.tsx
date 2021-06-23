import React from "react";

const ToggleMobileNav = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = (params) => {
    menuOpen === false ? setMenuOpen(true) : setMenuOpen(false);
    let body = document.body;
    body.classList.toggle("overflow-hidden");
    // let bars = document.getElementById("menuBtn").querySelectorAll("svg");
    // Array.from(bars).forEach((bar) => {
    //   bar.classList.toggle("hidden");
    // });
  };

  return (
    <div className="absolute z-50 ml-3 bg-white inset-y-0 left-0 flex items-center lg:hidden">
      <button
        id="menuBtn"
        onClick={toggleMenu}
        className=" z-50 text-gray-400 focus:outline-none w-10 h-10 relative"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={
              !menuOpen
                ? "z-50 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"
                : "z-50 block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out rotate-45"
            }
          ></span>
          <span
            aria-hidden="true"
            className={
              !menuOpen
                ? "z-50 block absolute h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                : "z-50 opacity-0"
            }
          ></span>
          <span
            aria-hidden="true"
            className={
              !menuOpen
                ? "z-50 block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out translate-y-1.5 "
                : "z-50 block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out -rotate-45"
            }
          ></span>
        </div>
      </button>
    </div>
  );
};

export default ToggleMobileNav;
