import React, { useState, FC, ReactElement, useRef, useEffect } from "react";

const DropdownContainer: FC = (params): ReactElement => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleMenu = (params) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let btn = document.getElementById("options-menu");
    btn.classList.toggle("hidden");
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setddownOpen(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const options = ["To Let", "For Sale", "Goods for Sale"];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setddownOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="dropBtn "
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption || "To Let"}
          {/* Heroicon name: solid/chevron-down */}
          <svg
            className="-mr-1 ml-2 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel, show/hide based on dropdown state */}
      <div
        id="options-menu"
        className={
          ddownOpen
            ? " origin-top-left absolute left-0 mt-3 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            : "hidden"
        }
      >
        <ul
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option) => (
            <li
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 last:border-t-2"
              onClick={onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Filter = (params) => {
  return (
    <div className="w-full md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center lg:justify-between">
        <DropdownContainer />
      </div>
    </div>
  );
};

export default Filter;
