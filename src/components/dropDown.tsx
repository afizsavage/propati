import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  button: any;
  customStyle?: string;
  handleOptionClick: any;
  label?: string;
  optionsList: Array<string>;
}

const Dropdown = (dProps: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleServiceMenu = (e) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let listItems = document.getElementById("ddmenu");
    listItems.classList.toggle("hidden");
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
    <fieldset ref={wrapperRef} className="w-full lg:pl-6 md:w-1/5 ">
      {dProps.label && (
        <label
          className="text-base block mb-2 text-gray-900 font-bold"
          htmlFor="formGridCode_year"
        >
          {dProps.label}
        </label>
      )}
      <span className="w-full relative">
        <button
          type="button"
          onClick={toggleServiceMenu}
          className="focus:outline-none"
        >
          {dProps.button}
        </button>
        <div
          id="ddmenu"
          className={
            ddownOpen ? "dropdownMenu " + dProps.customStyle : "hidden"
          }
        >
          <ul
            className="py-1 text-base"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="ServiceOptions-menu"
            id="ddmenu"
          >
            {dProps.optionsList.map((option) => (
              <li
                className="block px-4 py-2  text-gray-500 hover:bg-gray-100 hover:text-gray-900"
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

export default Dropdown;
