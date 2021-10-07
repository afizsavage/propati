import React, { useState, useRef, useEffect } from "react";

const CustomSelect = (params) => {
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
    // e.target.setAttribute("aria-selected", "true");
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
      <div
        ref={selectRef}
        tabIndex={1}
        className="select"
        onFocus={(e) => activateSelect(e)}
        onClick={() => toggleOpenNClose()}
        onKeyUp={(e) => keyboardUpdate(e)}
        onBlur={() => deactivateSelect()}
        role="listbox"
      >
        {/* <!-- This container will be used to display the current value of the control --> */}
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
