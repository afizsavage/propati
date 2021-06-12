import React, { useState, useRef, useEffect } from "react";
import { DropdownProps } from "../../interfaces";

// reuseable dropdown component
const Dropdown = (Props: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleOpenNClose = (e) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let listItems = document.getElementById("ddmenu");
    listItems.classList.toggle("hidden");
  };

  // close dropdown menu if a click event register anywhere else on the screen
  function useOutsideAlerter(ref) {
    useEffect(() => {
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

  // close dropdown and set selectedOption state as the list item clicked on
  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setddownOpen(false);
  };

  return (
    <div ref={wrapperRef} className="w-auto cursor-pointer font-Lato">
      <div className="w-full relative">
        <button
          type="button"
          onClick={toggleOpenNClose}
          className={"focus:outline-none w-full " + Props.styleButton}
        >
          {Props.changeBtnText === true && selectedOption !== null
            ? selectedOption
            : Props.buttonText}
        </button>
        <div
          id="ddmenu"
          className={
            ddownOpen
              ? "dropdownMenu overflow-hidden " + Props.styleContent
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
            {Props.listItems.map((item) => {
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
