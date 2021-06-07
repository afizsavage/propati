import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  buttonText: any;
  styleContent?: string;
  styleButton?: string;
  handleOptionClick?: any;
  label?: string;
  listItems: Array<any>;
  changeBtnText: boolean;
}

// a reuseable dropdown component
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
  };

  return (
    <div ref={wrapperRef} className="w-auto cursor-pointer font-Lato">
      {dProps.label && (
        <label
          className="text-base block mb-2 text-gray-900 font-bold"
          htmlFor="formGridCode_year"
        >
          {dProps.label}
        </label>
      )}
      <div className="w-full relative">
        <button
          type="button"
          onClick={toggleServiceMenu}
          className={"focus:outline-none w-full " + dProps.styleButton}
        >
          {dProps.changeBtnText === true && selectedOption !== null
            ? selectedOption
            : dProps.buttonText}
        </button>
        <div
          id="ddmenu"
          className={
            ddownOpen
              ? "dropdownMenu overflow-hidden " + dProps.styleContent
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
            {dProps.listItems.map((item) => {
              return (
                <li
                  className="userList"
                  onClick={onOptionClicked(item)}
                  key={Math.random()}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
