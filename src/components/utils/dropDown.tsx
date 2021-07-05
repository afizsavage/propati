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
    let menuWrapper = document.getElementById(Props.menuId);
    menuWrapper.classList.toggle("hidden");
  };

  // close dropdown menu if a click event register anywhere else on the screen
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setddownOpen(false);
        }
      }

      function autoSelect() {
        if (Props.autoSelectOption === true) {
          setSelectedOption(Props.listItems[0]);
        }
      }

      autoSelect();
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  // close dropdown and set selectedOption state as the list item clicked on
  async function onOptionClicked(value, b) {
    const test = value.props.clicked;
    (await b) === true && test ? test() : null;
    setSelectedOption(value);
    setddownOpen(false);
  }

  return (
    <div ref={wrapperRef} className="w-auto cursor-pointer font-Lato">
      <div className="w-full relative">
        <button
          id="dropDownBtn"
          type="button"
          onClick={toggleOpenNClose}
          className={"focus:outline-none w-full " + Props.styleButton}
        >
          {Props.changeBtnText === true && selectedOption !== null
            ? selectedOption
            : Props.buttonText}
        </button>
        <div
          id={Props.menuId}
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
                  id="dropDownList"
                  className=" userList relative cursor-pointer w-full h-full z-10"
                  onClick={() => onOptionClicked(item, Props.changeBtnText)}
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
