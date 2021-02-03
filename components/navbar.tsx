import React, { useState, FC, ReactElement } from "react";

const Navbar: FC = (params): ReactElement => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = (params) => {
    menuOpen === false ? setMenuOpen(true) : setMenuOpen(false);
    let bars = document.getElementById("menuBtn").querySelectorAll("svg");
    Array.from(bars).forEach((bar) => {
      bar.classList.toggle("hidden");
    });
  };

  return (
    <nav role="banner" className="sticky top-0 z-50 sm:static bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 md:h-18">
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
          <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden lg:block sm:ml-6">
              <div className="flex space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                <a href="#" className="navLinks">
                  Rent
                </a>
                <a href="#" className="navLinks">
                  Buy
                </a>
                <a href="#" className="navLinks">
                  Sell
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <!-- Profile dropdown --> */}
            <a href="#" className="p-2 sm:py-2 sm:px-3 navLinks font-medium">
              Sign In
            </a>
            <div className="ml-3 hidden lg:block relative">
              <div>
                <a href="#" className="primeBtn">
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!--Mobile menu, toggle classes based on menu state.Menu open: "block", Menu closed: "hidden"--> */}
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
      </div>
    </nav>
  );
};

export default Navbar;
