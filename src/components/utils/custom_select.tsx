import React, { useState, useRef, useEffect } from "react";
import { SelectProps } from "../../interfaces";
import { OptionItem } from "../property";

// This is a generic custom select form-control
const CustomSelect = (props: SelectProps) => {
  const [ddownOpen, setddownOpen] = useState(false);
  const selectRef = useRef(null);
  const listRef = useRef(null);
  const [value, setvalue] = useState(null);
  let index = 0;

  // conditionally open or close custom-select
  // always activate custom-select when this function is called
  const handleClick = () => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    selectRef.current && selectRef.current.classList.contains("active")
      ? null
      : selectRef.current.classList.add("active");
    if (value === null) {
      setvalue(props.options[0]);
    }
  };

  const deactivateSelect = () => {
    if (selectRef.current && !selectRef.current.classList.contains("active")) {
      return;
    }
    setddownOpen(false);
    selectRef.current.classList.remove("active");
  };

  const activateSelect = (e) => {
    if (e.target.classList.contains("active")) return;
    e.target.classList.add("active");
  };

  // called when a click event happens outside the custom-select element
  const handleClickOutside = (e) => {
    if (selectRef.current && !selectRef.current.contains(e.target)) {
      deactivateSelect();
    }
  };

  const updateValue = (e) => {
    setvalue(e.target.innerHTML);
    setddownOpen(false);
  };

  // prevent page from scrolling when the select's options list is being displayed
  const togglePageScroll = () => {
    let root = document.getElementsByTagName("html")[0];
    let dropdownMenu = listRef.current;
    dropdownMenu.classList.contains("hidden")
      ? root.classList.remove("no-scroll")
      : (root.className += "no-scroll");
  };

  // update custom-select value with up and down arrow keys
  const keyboardUpdate = (e) => {
    let length = props.options.length;

    // deactivate custom-select if the `esc` key is pressed
    if (e.keyCode === 27) {
      deactivateSelect();
    } else {
      if (e.keyCode === 40 && index < length - 1) {
        index++;
      }

      if (e.keyCode === 38 && index > 0) {
        index--;
      }

      setvalue(props.options[index]);
    }
  };

  const disallowKeyboardScroll = (e) => {
    if (e.keyCode === 40) {
      e.preventDefault();
    }

    if (e.keyCode === 38) {
      e.preventDefault();
    }
  };

  // deactivate custom select when a click event happens anywhere else in the document
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // index should always keep track of the current select uption
  // index is used to set value with the arrow up or down keys
  useEffect(() => {
    index = props.options.indexOf(value);
  }, [value]);

  useEffect(() => {
    togglePageScroll();
  }, [ddownOpen]);

  return (
    <>
      {/* native select to keep track of custom select 
    value and to submit data with other native form controls */}
      <select className="hidden" name="myFruit">
        <option>Cherry</option>
        <option>Lemon</option>
        <option>Banana</option>
        <option>Strawberry</option>
        <option>Apple</option>
      </select>

      {/* CUSTOM SELECT */}
      <div
        ref={selectRef}
        tabIndex={0}
        className={
          value
            ? `select drop-selected ${props.selectStyle}`
            : `select ${props.selectStyle}`
        }
        onFocus={(e) => activateSelect(e)}
        onClick={() => handleClick()}
        onKeyUp={(e) => keyboardUpdate(e)}
        onBlur={() => deactivateSelect()}
        onKeyDown={(e) => disallowKeyboardScroll(e)}
        role="listbox"
      >
        <span className="value">{value}</span>

        <ul
          ref={listRef}
          className={
            ddownOpen
              ? `optList ${props.optionsStyle}`
              : `optList hidden ${props.optionsStyle}`
          }
          role="presentation"
        >
          {props.options.map((option) => {
            return (
              <OptionItem
                option={option}
                value={value}
                handleClick={updateValue}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default CustomSelect;
