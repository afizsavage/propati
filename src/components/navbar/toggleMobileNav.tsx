import React from "react";

const ToggleMobileNav = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = (params) => {
    menuOpen === false ? setMenuOpen(true) : setMenuOpen(false);
    let bars = document.getElementById("menuBtn").querySelectorAll("svg");
    Array.from(bars).forEach((bar) => {
      bar.classList.toggle("hidden");
    });
  };

  return (
    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
      {/* <!-- Mobile menu button--> */}
      <button
        id="menuBtn"
        onClick={toggleMenu}
        className="inline-flex justify-center p-2  text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        {/* <!-- Icon when menu is closed. --> */}
        {/* <!-- Heroicon name: menuMenu open: "hidden", Menu closed: "block"--> */}
        <svg
          className="block h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        {/* <!-- Icon when menu is open. --> */}
        {/* <!--Heroicon name: xMenu open: "block", Menu closed: "hidden"--> */}
        <svg
          className="hidden h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ToggleMobileNav;
