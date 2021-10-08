import React, { useState, useRef, useEffect } from "react";

interface SelectProps {
  selectStyle?: string;
}

const CustomSelect = (props: SelectProps) => {
  const [ddownOpen, setddownOpen] = useState(false);
  const selectRef = useRef(null);
  const [value, setvalue] = useState(null);
  let index = 0;

  const options = ["Cherry", "Lemon", "Banana", "Strawberry", "Apple"];
  const toggleOpenNClose = () => {
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

  useEffect(() => {
    setvalue(options[0]);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    index = options.indexOf(value);
  }, [value]);

  const OptionItem = ({ option }) => {
    const optionRef = useRef(null);

    useEffect(() => {
      if (optionRef.current && optionRef.current.innerHTML === value) {
        optionRef.current.setAttribute("aria-selected", "true");
      }
    }, [value]);
    return (
      <li
        ref={optionRef}
        onClick={(e) => updateValue(e)}
        className={value === option ? "option bg-black text-white" : "option"}
        role="option"
        aria-selected={false}
      >
        {option}
      </li>
    );
  };

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
        tabIndex={5}
        className={`select ${props.selectStyle}`}
        onFocus={(e) => activateSelect(e)}
        onClick={() => toggleOpenNClose()}
        onKeyUp={(e) => keyboardUpdate(e)}
        onBlur={() => deactivateSelect()}
        role="listbox"
      >
        <span className="value">{value !== null ? value : "Cherry"}</span>

        <ul
          id="optionsList"
          className={ddownOpen ? "optList" : "optList hidden"}
          role="presentation"
        >
          {options.map((option) => {
            return <OptionItem option={option} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default CustomSelect;
