import React, { useState, useRef, useEffect } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { FormatPrice } from "../utils";
import { IoMdClose } from "react-icons/io";

import { AmenityFilter, FilterBtn } from "../../interfaces";
import { amenities } from "../../pages/apartments/[id]";
import { spawn } from "child_process";

const FilterColumn = ({ heading, children }) => {
  return (
    <div className="mb-4 h-auto">
      <h2 className=" font-bold text-base text-white">{heading}</h2>
      <div className="w-auto h-auto">{children}</div>
    </div>
  );
};

const IconText = ({ icon, text, active }) => {
  return (
    <span className="inline-flex h-full">
      <span
        className={
          active ? "iconBtn border-orange-600  " : "iconBtn opacity-20 "
        }
      >
        <span className="">{icon}</span>
      </span>
      <span className="inline-flex  items-center px-2">
        <span className="text-white text-opacity-50 font-medium text-sm">
          {text}
        </span>
      </span>
    </span>
  );
};

const FilterButton = (props: FilterBtn) => {
  const [active, setactive] = useState(false);

  const handleClick = () => {
    let newFilters = [...props.state, props.value];
    const filter = newFilters.indexOf(props.value);

    if (active === true) {
      if (filter > -1) {
        const ewFilters = [...props.state];
        ewFilters.splice(filter, 1);
        props.setState(ewFilters);
      }
    } else {
      props.setState(newFilters);
    }

    !active ? setactive(true) : setactive(false);
    console.log(props.icon);
  };

  useEffect(() => {
    props.icon !== undefined
      ? console.log("not icon")
      : console.log(props.icon);
  }, [props.icon]);

  return (
    <>
      {props.icon ? (
        <button
          className="filterBtns border-none inline-block w-auto h-10 bg-opacity-0 border-orange-600 "
          onClick={() => handleClick()}
        >
          {" "}
          <IconText active={active} icon={props.icon} text={props.value} />
        </button>
      ) : (
        <button
          className={
            active
              ? "filterBtns border-orange-600 " + props.style
              : "filterBtns border-none  opacity-40 " + props.style
          }
          onClick={() => handleClick()}
        >
          <span className="">
            <span>{props.value}</span>
          </span>
        </button>
      )}
    </>
  );
};

const AmenityFilters = (props: AmenityFilter) => {
  return (
    <div>
      <ul className=" font-medium text-sm  grid grid-cols-2 ">
        {amenities.map((amenity) => (
          <li
            key={amenities.indexOf(amenity)}
            className="my-2 inline-flex align-middle items-center"
          >
            <span className="cursor-pointer">
              <FilterButton
                icon={amenity.icon}
                value={amenity.title}
                state={props.state}
                setState={props.setState}
                key={amenities.indexOf(amenity)}
                style=" "
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Filter = ({ navHeight, filter, setFilter }) => {
  const filterRef = useRef(null);
  const [priceRange, setpriceRange] = useState([0, 100000]);
  const [propertyType, setpropertyType] = useState([]);
  const [bedrooms, setbedrooms] = useState([]);
  const [bathrooms, setbathrooms] = useState([]);
  const [petPolicy, setpetPolicy] = useState([]);
  const [menities, setmenities] = useState([]);

  useEffect(() => {
    let windowHeight = window.innerHeight;
    let filterHeight = windowHeight - navHeight;
    if (filterRef.current) {
      filterRef.current.style.height = `${filterHeight}px`;
    }
  }, [navHeight]);

  console.log("property type:", propertyType);
  console.log("bedrooms:", bedrooms);
  console.log("bathrooms:", bathrooms);
  console.log("petPolicy:", petPolicy);
  console.log("ammenities:", menities);

  return (
    <div
      ref={filterRef}
      className={
        filter ? "filter overflow-visible" : "filter -translate-x-full"
      }
    >
      <button
        onClick={() => setFilter(false)}
        style={{ backgroundColor: "#dd6b20" }}
        className={
          filter
            ? "absolute top-4 h-8 w-8 -right-4 bg-white focus:outline-none rounded-full"
            : "hidden"
        }
      >
        <IoMdClose className=" inline-block text-white font-semibold align-middle" />
      </button>
      <FilterColumn
        heading="Property Type"
        children={
          <span className="w-auto h-auto block pt-2">
            <FilterButton
              state={propertyType}
              setState={setpropertyType}
              value="Residentials"
              style=" w-24"
            />
            <FilterButton
              state={propertyType}
              setState={setpropertyType}
              value="Commercial"
              style=" w-24"
            />
            <FilterButton
              state={propertyType}
              setState={setpropertyType}
              value="Lands"
              style=" w-24 "
            />
          </span>
        }
      />
      <FilterColumn
        heading="Price Range"
        children={
          <>
            <span className=" text-white font-medium text-sm opacity-50">
              {FormatPrice.format(priceRange[0]) +
                " - " +
                FormatPrice.format(priceRange[1]) +
                "+"}
            </span>{" "}
            <Range
              min={0}
              max={100000}
              defaultValue={[0, 100000]}
              className="top-3 "
              onChange={(value) => setpriceRange(value)}
              railStyle={{ backgroundColor: "white", opacity: "50%" }}
              trackStyle={[{ backgroundColor: " #dd6b20" }]}
              handleStyle={[
                {
                  backgroundColor: "white",
                  borderColor: " #dd6b20",
                  boxShadow: "0 0 5px #dd6b20",
                },
                {
                  backgroundColor: "white",
                  borderColor: " #dd6b20",
                  boxShadow: "0 0 5px #dd6b20",
                },
              ]}
            />
          </>
        }
      />
      <FilterColumn
        heading="Bedrooms"
        children={
          <span className="block pt-2">
            <FilterButton
              state={bedrooms}
              setState={setbedrooms}
              value="1"
              style="w-10"
            />
            <FilterButton
              state={bedrooms}
              setState={setbedrooms}
              value="2"
              style="w-10"
            />
            <FilterButton
              state={bedrooms}
              setState={setbedrooms}
              value="3"
              style="w-10"
            />
            <FilterButton
              state={bedrooms}
              setState={setbedrooms}
              value="4+"
              style="w-10"
            />
          </span>
        }
      />
      <FilterColumn
        heading="Bathrooms"
        children={
          <span className="block pt-2">
            <FilterButton
              state={bathrooms}
              setState={setbathrooms}
              value="1"
              style="w-10"
            />
            <FilterButton
              state={bathrooms}
              setState={setbathrooms}
              value="2"
              style="w-10"
            />
            <FilterButton
              state={bathrooms}
              setState={setbathrooms}
              value="3"
              style="w-10"
            />
            <FilterButton
              state={bathrooms}
              setState={setbathrooms}
              value="4"
              style="w-10"
            />
            <FilterButton
              state={bathrooms}
              setState={setbathrooms}
              value="5+"
              style="w-10"
            />
          </span>
        }
      />
      <FilterColumn
        heading="Amenities"
        children={<AmenityFilters state={menities} setState={setmenities} />}
      />
      <FilterColumn
        heading="Pet Policy"
        children={
          <div
            className="pt-2 block
        "
          >
            <FilterButton
              state={petPolicy}
              setState={setpetPolicy}
              value="Dogs Allowed"
              style="w-auto px-2 "
            />
            <FilterButton
              state={petPolicy}
              setState={setpetPolicy}
              value="Cats Allowed"
              style="w-auto px-2"
            />
          </div>
        }
      />
      <FilterColumn
        heading
        children={
          <div className=" w-5/6 fixed bottom-8  font-medium ">
            <div className=" flex justify-between ">
              <span>
                <button className="py-1 px-2  rounded-lg ">Reset</button>{" "}
              </span>
              <span>
                <button
                  className="py-1 px-2 rounded-lg  text-white "
                  style={{ backgroundColor: " #dd6b20" }}
                >
                  Apply Filter
                </button>{" "}
              </span>
            </div>{" "}
          </div>
        }
      />
    </div>
  );
};

export default Filter;
