import React, { useState, useRef, useEffect } from "react";

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

export default OptionItem;
