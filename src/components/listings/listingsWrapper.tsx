import React, { useState, useRef, useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegListAlt } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

import { DropDown } from "../utils";
import { CardSection, MapViewSection } from "../../components/listings";
import { uselistings } from "../../contexts/listings-Context";
import { items } from "./test-items";

const center = {
  lat: 8.46520020876784,
  lng: -13.229434452077367,
};

const SortOption = ({ title, clicked }) => {
  return (
    <span
      id="sortOption"
      className="z-0 relative hover:bg-gray-100 px-5 text-sm py-3 md:w-40 font-normal md:font-thin inline-block align-text-top "
    >
      {title}
      <AiFillCaretDown
        id="sort"
        className="text-lg ml-2 text-teal-600 font-bold inline"
      />
    </span>
  );
};

const ListingsWrapper = () => {
  const { state, dispatch } = uselistings();
  const [mapView, setmapView] = useState(false);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  let listings = state.listings;
  let sumOfProperties = listings.length;

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
  };

  const toggleMapView = (params) => {
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
    const screenWidth = window.innerWidth;

    screenWidth <= 834 ? setmapView(true) : setmapView(false);
  }, []);
  return (
    <div>
      <div className="w-full h-full md:overflow-hidden grid grid-cols-9">
        <section
          onScroll={onScroll}
          id="listings"
          className={mapView ? " listings overflow-visible" : "listings"}
        >
          <div
            className={
              goingUp === false
                ? "filterNSortWrapper -translate-y-full"
                : "filterNSortWrapper  "
            }
          >
            <div
              id="col2Filter"
              className="h-12 justify-between inline-flex  items-center  md:h-auto border-t md:border-t-0 border-b md:border-b-0 text-teal-700 font-normal cursor-pointer"
            >
              <h1>
                {" "}
                <RiEqualizerFill className="inline text-xl transform rotate-90 mr-2" />
                <span className="hidden md:inline-block">
                  <b className="font-bold">{sumOfProperties}</b> residentials{" "}
                  <b className="font-bold">for sale </b> at selected map area in
                  Freetown
                </span>
                <span className="inline-block md:hidden">Filters</span>
              </h1>
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
              <span className=" w-48  md:w-auto">
                <DropDown
                  buttonText={"button"}
                  changeBtnText={true}
                  listItems={[
                    <SortOption
                      // clicked={() => console.log("clicked")}
                      title="Best Match"
                      clicked={sortByBestMatch}
                    />,
                    <SortOption
                      // clicked={() => console.log("clicked")}
                      title="Most Recent"
                      clicked={sortByrecent}
                    />,
                    <SortOption
                      // clicked={sortPriceMinToMax}
                      title="Price: Low to high"
                      clicked={sortPriceMinToMax}
                    />,
                    <SortOption
                      // clicked={sortPriceMaxToMin}
                      title="Price: High to low"
                      clicked={sortPriceMaxToMin}
                    />,
                  ]}
                  autoSelectOption={true}
                  menuId="sortBtn"
                  styleButton="text-right md:text-center text-gray-500 py-0 "
                  styleContent="w-40 rounded-sm right-0 origin-top-left"
                />
              </span>
            </div>
          </div>
          <CardSection mapView={mapView} />
          <span className="block h-screen w-screen overflow-visible md:hidden">
            <MapViewSection
              properties={items}
              center={center}
              mapView={mapView}
            />
          </span>
        </section>
        <MapViewSection properties={items} center={center} mapView={mapView} />
      </div>
    </div>
  );
};

export default ListingsWrapper;
