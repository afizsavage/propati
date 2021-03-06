import React, { useState, FC, ReactElement, useRef, useEffect } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

interface Iprops {
  heading: string;
  options: Array<string>;
}

const FilterDropdowns: FC<Iprops> = ({ heading, options }): ReactElement => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleMenu = (e) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let btn = e.target.nextSibling;
    btn.classList.toggle("hidden");
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
    <fieldset ref={wrapperRef} className="w-full px-3 md:w-1/5 ">
      <label
        className="text-base block mb-2 text-gray-900 font-bold"
        htmlFor="formGridCode_year"
      >
        {heading}
      </label>
      <span className="w-full relative">
        <button
          type="button"
          onClick={toggleMenu}
          className="filterBtn w-full hover:text-gray-900 justify-between text-base font-medium"
        >
          {selectedOption || options[0]}
          <svg
            className="h-5 w-5 text-gray-500 text-base"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          id="ddmenu"
          className={
            ddownOpen
              ? "z-20 absolute w-full mt-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 "
              : "hidden"
          }
        >
          <ul
            className="py-1 "
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
            id="ddmenu"
          >
            {options.map((option) => (
              <li
                className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900"
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

const ServiceType: FC = (params): ReactElement => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [ddownOpen, setddownOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const toggleMenu = (params) => {
    ddownOpen === false ? setddownOpen(true) : setddownOpen(false);
    let btn = document.getElementById("options-menu");
    btn.classList.toggle("hidden");
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

  const options = ["To Let", "For Sale", "Goods for Sale"];

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setddownOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleMenu}
          type="button"
          className="filterBtn"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption || "To Let"}
          {/* Heroicon name: solid/chevron-down */}
          <svg
            className="mr-1 ml-4 h-5 w-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown panel, show/hide based on dropdown state */}
      <div
        id="options-menu"
        className={
          ddownOpen
            ? "z-20 origin-top-left absolute left-0 mt-3 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
            : "hidden"
        }
      >
        <ul
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {options.map((option) => (
            <li
              className="block px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-900 last:border-t-2"
              onClick={onOptionClicked(option)}
              key={Math.random()}
            >
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ListingsFilter: FC = (params): ReactElement => {
  return (
    <div className="inline-block ">
      <button type="button" className="filterBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="h-5 w-5 text-gray-500 mr-2 font-bold"
          viewBox="0 0 16 16"
          aria-hidden="true"
        >
          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
        </svg>
        Filters
      </button>
    </div>
  );
};

const PriceSlider = (params) => {
  const [value, setValue] = useState([100, 5000]);

  const sliderProps = {
    min: 100,
    max: 5000,
    defaultValue: [100, 5000],
  };

  return (
    <fieldset className="w-full px-3 md:w-1/5 ">
      <div className="inline-flex justify-center w-full">
        <label
          htmlFor=""
          className="mx-auto bg-red-400 text-sm font-semibold py-2 px-4 text-gray-800 rounded-full"
        >
          {value[0] === 100 && value[1] === 5000
            ? "Any Price"
            : value[0] === 100 && value[1] != 5000
            ? `Up to $${value[1]}/year`
            : `$${value[0]} to $${value[1]}/year `}
        </label>
      </div>

      {/* <!-- between two numbers --> */}
      <Range value={value} onChange={(val) => setValue(val)} {...sliderProps} />
    </fieldset>
  );
};

const ItemsFilter = (params) => {
  return (
    <div className="pt-7">
      <form className="w-full space-y-4 text-gray-700">
        <div className="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div className="relative w-full px-3 md:w-1/5">
            <label
              className="block mb-2 text-gray-800 font-bold  "
              htmlFor="formGridCode_month"
            >
              Location
            </label>
            <input
              className="w-full h-10 px-3 text-base placeholder-gray-600 rounded-lg focus:outline-none bg-gray-100 hover:bg-white hover:ring-4 ring-teal-400 ring-opacity-20"
              type="text"
              id="formGridCode_month"
            />
            <div className="absolute bottom-3 left-7 flex items-center px-2 pointer-events-none ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <FilterDropdowns
            heading={"Bedrooms"}
            options={["1", "2", "3", "4", "5+"]}
          />
          <FilterDropdowns
            heading={"Bathrooms"}
            options={["1", "2", "3", "4", "5+"]}
          />
          <FilterDropdowns
            heading={"Residential Type"}
            options={["Apartment", "Detached", "Terraced", "Cottage", "Room"]}
          />
          <PriceSlider />
        </div>
      </form>
    </div>
  );
};

const Filter = (params) => {
  return (
    <div className="w-full md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center lg:justify-between">
        <ServiceType />
        <ListingsFilter />
      </div>
      <ItemsFilter />
    </div>
  );
};

export default Filter;
