import React, { useState, useRef, useEffect } from "react";

interface SelectProps {
  selectStyle?: string;
  optionsStyle?: string;
}

const OptionItem = ({ option, value, handleClick }) => {
  const optionRef = useRef(null);

  useEffect(() => {
    if (optionRef.current && optionRef.current.innerHTML === value) {
      optionRef.current.setAttribute("aria-selected", "true");
    }
  }, [value]);
  return (
    <li
      ref={optionRef}
      onClick={(e) => handleClick(e)}
      className={
        value === option
          ? "px-5 h-sxty flex items-center text-teal-700"
          : "px-5 flex align-middle h-sxty items-center"
      }
      role="option"
      aria-selected={false}
    >
      {option}
    </li>
  );
};

const CustomSelect = (props: SelectProps) => {
  const [ddownOpen, setddownOpen] = useState(false);
  const selectRef = useRef(null);
  const listRef = useRef(null);
  const [value, setvalue] = useState(null);
  let index = 0;

  const options = ["Cherry", "Lemon", "Banana", "Strawberry", "Apple"];
  const handleClick = () => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    selectRef.current && selectRef.current.classList.contains("active")
      ? null
      : selectRef.current.classList.add("active");
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

  function toggleScroll() {
    let root = document.getElementsByTagName("html")[0];
    let dropdownMenu = listRef.current;
    dropdownMenu.classList.contains("hidden")
      ? root.classList.remove("no-scroll")
      : (root.className += "no-scroll");
  }

  useEffect(() => {
    // setvalue(options[0]);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    index = options.indexOf(value);
  }, [value]);

  useEffect(() => {
    // run this function for any time the Dropdown open or close
    toggleScroll();
  }, [ddownOpen]);

  return (
    <>
      <select className="hidden" name="myFruit">
        <option>Cherry</option>
        <option>Lemon</option>
        <option>Banana</option>
        <option>Strawberry</option>
        <option>Apple</option>
      </select>
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
          {options.map((option) => {
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
