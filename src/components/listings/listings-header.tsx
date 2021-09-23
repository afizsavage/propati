import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegListAlt } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

import { DropDown } from "../utils";
import { uselistings } from "../../contexts/listings-Context";

interface SOProps {
  title: string;
  clicked: any;
  customStyle?: string;
}

export const SelectOption = ({ title, clicked, customStyle }: SOProps) => {
  return (
    <span id="sortOption" className={`select-option ${customStyle}`}>
      {title}
      <AiFillCaretDown
        id="sort"
        className="text-lg ml-2 text-teal-600 font-bold inline"
      />
    </span>
  );
};

const ListingsHeader = ({
  mapView,
  setmapView,
  goingUp,
  filter,
  setFilter,
}) => {
  const { state, dispatch } = uselistings();

  let listings = state.listings;
  let sumOfProperties = listings.length;

  const toggleMapView = () => {
    if (mapView == false) {
      setmapView(true);
    } else {
      setmapView(false);
    }
  };
  const sortPriceMaxToMin = () => {
    let decending = listings
      .slice()
      .sort((a, b) => b.properties.price - a.properties.price);
    dispatch({ type: "add", payload: [...decending] });
  };
  const sortPriceMinToMax = () => {
    let accending = listings
      .slice()
      .sort((a, b) => a.properties.price - b.properties.price);
    dispatch({ type: "add", payload: [...accending] });
  };
  const sortByBestMatch = () => {
    dispatch({ type: "add", payload: [...state.listings] });
  };
  const sortByrecent = () => {
    let recent = listings
      .slice()
      .sort(
        (a, b) =>
          new Date(b.properties.listedAt).getTime() -
          new Date(a.properties.listedAt).getTime()
      );
    dispatch({ type: "add", payload: [...recent] });
  };
  useEffect(() => {
    const wrapper = document.getElementById("headerWrapper");
    if (filter) {
      wrapper.classList.add("opacity-5");
    } else {
      wrapper.classList.remove("opacity-5");
    }
  }, [filter]);

  return (
    <div
      id="headerWrapper"
      className={
        goingUp === false
          ? "filterNSortWrapper bg-gray-200  -translate-y-full  "
          : "filterNSortWrapper bg-gray-200 border-b border-gray-300 border-transparent  "
      }
    >
      <div className="hidden md:flex items-center h-9 text-teal-700">
        <span className=" font-semibold inline-block text-lg  mr-2 ">
          {sumOfProperties}
        </span>
        {}
        <span className="inline-block ">
          {" "}
          properties for sale at selected map area in Freetown
        </span>
      </div>
      <div className="md:flex md:flex-row  pb-3 pt-1">
        <div
          id="col2Filter"
          className="h-12 justify-between inline-flex  items-center  md:h-auto border-t md:border-t-0 border-b md:border-b-0 text-teal-700 font-normal cursor-pointer"
        >
          <button
            className=" focus:outline-none px-2 py-1 bg-white rounded-full mr-3"
            onClick={() => setFilter(true)}
          >
            {" "}
            <span className="inline-block text-sm font-normal text-gray-500 ">
              Filters
            </span>
            <RiEqualizerFill className="inline text-xl transform rotate-90 ml-2" />
          </button>
          <span
            className={
              !mapView ? "inline-flex items-center md:hidden" : "hidden"
            }
          >
            {" "}
            <FaMapMarkerAlt className="inline text-xl transform mr-2" />
            <span onClick={toggleMapView}>Map View</span>
          </span>
          <span
            className={
              mapView ? "inline-flex items-center md:hidden" : "hidden"
            }
          >
            {" "}
            <FaRegListAlt className=" inline  text-xl mr-2" />
            <span onClick={toggleMapView}>List View</span>
          </span>
        </div>
        <div className="flex justify-between items-center h-12 md:h-auto w-full md:w-auto">
          <h1 className="w-60 truncate text-sm font-normal text-gray-800 md:hidden">
            <b className="font-bold inline mr-1">{sumOfProperties}</b>
            Freetown, Sierra Leone residentials for sale
          </h1>
          <span className=" w-48 md:w-auto">
            <DropDown
              buttonText={"button"}
              changeBtnText={true}
              listItems={[
                <SelectOption title="Best Match" clicked={sortByBestMatch} />,
                <SelectOption title="Most Recent" clicked={sortByrecent} />,
                <SelectOption
                  title="Price: Low to high"
                  clicked={sortPriceMinToMax}
                />,
                <SelectOption
                  title="Price: High to low"
                  clicked={sortPriceMaxToMin}
                />,
              ]}
              autoSelectOption={true}
              menuId="sortBtn"
              styleButton="text-right md:text-center rounded-full py-1 text-gray-500 py-0 bg-white "
              styleContent="w-40 rounded-sm right-0 origin-top-left"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ListingsHeader;
