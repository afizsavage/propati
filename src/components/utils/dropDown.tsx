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

  useEffect(() => {
    // run this function for any time the Dropdown open or close
    ddownOpenState(Props.trackOptionsDisplay);
  }, [ddownOpen]);

  // close dropdown and set selectedOption state as the list item clicked on
  async function onOptionClicked(value, b) {
    const test = value.props.clicked;
    (await b) === true && test ? test() : null;
    setSelectedOption(value);
    setddownOpen(false);
  }

  function ddownOpenState(args) {
    args ? args() : null;
  }

  return (
    <div
      ref={wrapperRef}
      className={
        selectedOption !== null
          ? `w-auto cursor-pointer font-Lato drop-selected ${Props.styleParent}`
          : `w-auto cursor-pointer font-Lato ${Props.styleParent}`
      }
    >
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
              ? `dropdownMenu overflow-hidden ${Props.styleContent}`
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

export const CustomSelect = (params) => {
  const [ddownOpen, setddownOpen] = useState(false);
  const selectRef = useRef(null);
  const [value, setvalue] = useState(null);
  let index = 0;

  const options = ["Cherry", "Lemon", "Banana", "Strawberry", "Apple"];
  const toggleOpenNClose = () => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
  };

  function deactivateSelect() {
    if (selectRef.current && !selectRef.current.classList.contains("active")) {
      return;
    }

    setddownOpen(false);
    selectRef.current.classList.remove("active");
  }

  function activateSelect(e) {
    if (e.target.classList.contains("active")) return;
    e.target.classList.add("active");
  }

  function handleClickOutside(e) {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      deactivateSelect();
    }
  }

  function updateValue(e) {
    setvalue(e.target.innerHTML);
    setddownOpen(false);
  }

  function keyboardUpdate(e) {
    let length = options.length;
    if (e.keyCode === 27) {
      deactivateSelect();
    } else {
      if (e.keyCode === 40 && index < length - 1) {
        index++;
      }

      if (e.keyCode === 38 && index > 0) {
        index--;
      }

      setvalue(options[index]);
    }
  }

  useEffect(() => {
    setvalue(options[0]);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // setindex(options.indexOf(value));
    index = options.indexOf(value);
  }, [value]);

  const OptionItem = ({ option }) => {
    return (
      <li
        onClick={(e) => updateValue(e)}
        className={value === option ? "option bg-black text-white" : "option"}
      >
        {option}
      </li>
    );
  };

  return (
    <>
      <div
        ref={selectRef}
        tabIndex={1}
        className="select"
        onFocus={(e) => activateSelect(e)}
        onClick={() => toggleOpenNClose()}
        onKeyUp={(e) => keyboardUpdate(e)}
      >
        {/* <!-- This container will be used to display the current value of the control --> */}
        <span className="value">{value !== null ? value : "Cherry"}</span>

        <ul
          id="optionsList"
          className={ddownOpen ? "optList" : "optList hidden"}
        >
          {options.map((option) => {
            return <OptionItem option={option} />;
          })}
        </ul>
      </div>
    </>
  );
};
