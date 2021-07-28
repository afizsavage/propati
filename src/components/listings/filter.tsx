import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import { FormatPrice } from "../utils";
import { GiTrumpetFlag } from "react-icons/gi";
import { amenities } from "../../pages/apartments/[id]";

const FilterColumn = ({ heading, children }) => {
  return (
    <div className="mb-4 h-20">
      <h2 className=" font-bold text-base text-white">{heading}</h2>
      <div className="w-auto h-auto">{children}</div>
    </div>
  );
};

interface FilterBtn {
  title: string;
  disable: boolean;
  active: boolean;
  width?: string;
}
const FilterButton = (props: FilterBtn) => {
  return (
    <button
      className={
        props.active
          ? "typeBtn border-orange-600 " + props.width
          : "typeBtn border-white " + props.width
      }
      disabled={props.disable}
    >
      {props.title}
    </button>
  );
};

const Filter = () => {
  const [rangeValue, setrangeValue] = useState([0, 100000]);
  return (
    <div className="w-6/12 bg-teal-900 opacity-80 h-full flex flex-col px-3 py-10">
      <FilterColumn
        heading="Property Type"
        children={
          <span className="w-auto h-auto block pt-2">
            <FilterButton active={true} disable={false} title="Residentials" />
            <FilterButton active={false} disable={true} title="Commercial" />
            <FilterButton active={false} disable={true} title="Lands" />
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
            </span>
            <Range
              min={0}
              max={100000}
              defaultValue={[0, 100000]}
              className="top-3"
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
              title="1"
              active={true}
              disable={false}
              width="w-10"
            />
            <FilterButton
              title="2"
              active={false}
              disable={true}
              width="w-10"
            />
            <FilterButton
              title="3"
              active={false}
              disable={true}
              width="w-10"
            />
            <FilterButton
              title="4+"
              active={false}
              disable={true}
              width="w-10"
            />
          </span>
        }
      />
      <FilterColumn
        heading="Bathrooms"
        children={
          <span className="block pt-2">
            <FilterButton
              title="1"
              active={true}
              disable={false}
              width="w-10"
            />
            <FilterButton
              title="2"
              active={false}
              disable={true}
              width="w-10"
            />
            <FilterButton
              title="3"
              active={false}
              disable={true}
              width="w-10"
            />
            <FilterButton
              title="4+"
              active={false}
              disable={true}
              width="w-10"
            />
            <FilterButton
              title="5+"
              active={false}
              disable={true}
              width="w-10"
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
                  {amenity.title}
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Filter;
