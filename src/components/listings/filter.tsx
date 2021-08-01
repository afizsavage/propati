import React, { useState, useRef, useEffect } from "react";
import { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { FormatPrice } from "../utils";
import { IoMdClose } from "react-icons/io";

import { amenities } from "../../pages/apartments/[id]";
import { FilterBtn } from "../../interfaces";

const FilterColumn = ({ heading, children }) => {
  return (
    <div className="mb-4 h-auto">
      <h2 className=" font-bold text-base text-white">{heading}</h2>
      <div className="w-auto h-auto">{children}</div>
    </div>
  );
};

const FilterButton = (props: FilterBtn) => {
  return (
    <button
      className={
        props.active
          ? "typeBtn border-orange-600  " + props.style
          : "typeBtn border-white " + props.style
      }
      disabled={props.disable}
    >
      {props.value}
    </button>
  );
};

const Filter = ({ navHeight, filter, setFilter }) => {
  const filterRef = useRef(null);
  const [rangeValue, setrangeValue] = useState([0, 100000]);
  const [propertyType, setpropertyType] = useState([]);

  useEffect(() => {
    let windowHeight = window.innerHeight;
    let filterHeight = windowHeight - navHeight;
    if (filterRef.current) {
      filterRef.current.style.height = `${filterHeight}px`;
    }
  }, [navHeight]);
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
        className="absolute top-4 h-8 w-8  -right-4 bg-white  rounded-full"
      >
        <IoMdClose className=" inline-block text-white font-semibold align-middle" />
      </button>
      <FilterColumn
        heading="Property Type"
        children={
          <span className="w-auto h-auto block pt-2">
            <FilterButton active={true} disable={false} value="Residentials" />
            <FilterButton active={false} disable={true} value="Commercial" />
            <FilterButton active={false} disable={true} value="Lands" />
          </span>
        }
      />
      <FilterColumn
        heading="Price Range"
        children={
          <>
            <span className=" text-white font-medium text-sm opacity-50">
              {FormatPrice.format(rangeValue[0]) +
                " - " +
                FormatPrice.format(rangeValue[1]) +
                "+"}
            </span>{" "}
            <Range
              min={0}
              max={100000}
              defaultValue={[0, 100000]}
              className="top-3 "
              onChange={(value) => setrangeValue(value)}
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
              value="1"
              active={true}
              disable={false}
              style="w-10"
            />
            <FilterButton
              value="2"
              active={false}
              disable={true}
              style="w-10"
            />
            <FilterButton
              value="3"
              active={false}
              disable={true}
              style="w-10"
            />
            <FilterButton
              value="4+"
              active={false}
              disable={true}
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
              value="1"
              active={true}
              disable={false}
              style="w-10"
            />
            <FilterButton
              value="2"
              active={false}
              disable={true}
              style="w-10"
            />
            <FilterButton
              value="3"
              active={false}
              disable={true}
              style="w-10"
            />
            <FilterButton
              value="4"
              active={false}
              disable={true}
              style="w-10"
            />
            <FilterButton
              value="5+"
              active={false}
              disable={true}
              style="w-10"
            />
          </span>
        }
      />
      <FilterColumn
        heading="Amenities"
        children={
          <div>
            <ul className=" text-white font-medium text-sm opacity-50 grid grid-cols-2 ">
              {amenities.map((amenity) => (
                <li className="my-2 inline-flex align-middle items-center">
                  <span className="text-xl inline mr-4 p-0">
                    {amenity.icon}
                  </span>
                  {amenity.value}
                </li>
              ))}
            </ul>
          </div>
        }
      />
      <FilterColumn
        heading="Pet Policy"
        children={
          <div className="pt-2 block">
            <FilterButton
              value="Dogs Allowed"
              active={false}
              disable={true}
              style="w-auto px-2"
            />
            <FilterButton
              value="Cats Allowed"
              active={false}
              disable={true}
              style="w-auto px-2"
            />
          </div>
        }
      />
      <FilterColumn
        heading
        children={
          <div>
            {" "}
            <button style={{ backgroundColor: " #dd6b20" }}>Apply</button>{" "}
          </div>
        }
      />
    </div>
  );
};

export default Filter;
