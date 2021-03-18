import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  heading: string;
  ServiceOptions: Array<string>;
}

const FilterDropdowns = (fddProps: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleServiceMenu = (e) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let btn = e.target.nextSibling;
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

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setddownOpen(false);
    console.log(value);
  };

  return (
    <fieldset ref={wrapperRef} className="w-full pl-6 md:w-1/5 ">
      <label
        className="text-base block mb-2 text-gray-900 font-bold"
        htmlFor="formGridCode_year"
      >
        {fddProps.heading}
      </label>
      <span className="w-full relative">
        <button
          type="button"
          onClick={toggleServiceMenu}
          className="filterBtn w-full hover:text-gray-900 justify-between text-base font-medium"
        >
          {selectedOption}
          <svg
            className="h-5 w-5 text-gray-500 text-base"
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
        <div
          id="ddmenu"
          className={
            ddownOpen
              ? "z-20 absolute w-full mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
              : "hidden"
          }
        >
          <ul
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="ServiceOptions-menu"
            id="ddmenu"
          >
            {fddProps.ServiceOptions.map((option) => (
              <li
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                onClick={onOptionClicked(option)}
                key={Math.random()}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      </span>
    </fieldset>
  );
};

export default FilterDropdowns;
