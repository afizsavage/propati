import React, { useState, FC, ReactElement } from "react";

const DropBtn: FC = (params): ReactElement => {
  const [ddownOpen, setddownOpen] = useState(false);

  const toggleMenu = (params) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let btn = document.getElementById("options-menu");

    btn.classList.toggle("hidden");
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          aria-haspopup="true"
          aria-expanded="true"
        >
          For Sale
          {/* Heroicon name: solid/chevron-down */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel, show/hide based on dropdown state */}
      <div
        id="options-menu"
        className={
          ddownOpen
            ? " origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            : "hidden"
        }
      >
        <div
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            For Sale
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            To Let
          </a>
        </div>
      </div>
    </div>
  );
};

const Filter = (params) => {
  return (
    <div className="w-full md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center lg:justify-between">
        <DropBtn />
      </div>
    </div>
  );
};

export default Filter;
