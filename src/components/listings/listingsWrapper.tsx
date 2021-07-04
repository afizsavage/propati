import React, { useState, useRef } from "react";
import { AiFillCaretDown, AiOutlineUnorderedList } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegListAlt } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

import { DropDown } from "../utils";
import { CardSection, MapViewSection } from "../../components/listings";

let items: Array<any> = [
  {
    itemName: "Nice and Quiet Apartment",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "10 Hill Cot Rd, Freetown, Sierra Leone",
    itemPrice: 1500,
    beds: 2,
    baths: 2,
    listedAt: "2014-02-10T10:50:42.389Z",
  },
  {
    itemName: "Detached building in a Secure Compound",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "20 Spur Loop, Freetown, Sierra Leone",
    itemPrice: 1300,
    beds: 2,
    baths: 2,
    listedAt: "2015-02-10T10:50:42.389Z",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    itemPrice: 1200,
    beds: 2,
    baths: 1,
    listedAt: "2016-02-10T10:50:42.389Z",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    itemPrice: 1900,
    beds: 4,
    baths: 3,
    listedAt: "2017-02-10T10:50:42.389Z",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    itemPrice: 1200,
    beds: 2,
    baths: 1,
    listedAt: "2018-02-10T10:50:42.389Z",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    itemPrice: 1900,
    beds: 4,
    baths: 3,
    listedAt: "2019-02-10T10:50:42.389Z",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    itemPrice: 1200,
    beds: 2,
    baths: 1,
    listedAt: "2020-02-10T10:50:42.389Z",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    itemPrice: 1900,
    beds: 4,
    baths: 3,
    listedAt: "2021-02-10T10:50:42.389Z",
  },
];

const location = {
  address: "8 Spur Road, Freetown",
  lat: 8.471644482274344,
  lng: -13.270381673488407,
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
  const filtered = items;
  const [dynamicItems, setdynamicItems] = useState(filtered);
  let sumOfProperties = dynamicItems.length;
  const [mapView, setmapView] = useState(false);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);

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
    let decending = dynamicItems.sort((a, b) => b.itemPrice - a.itemPrice);
    setdynamicItems([...decending]);
  };

  const sortPriceMinToMax = () => {
    let accending = dynamicItems.sort((a, b) => a.itemPrice - b.itemPrice);
    setdynamicItems([...accending]);
  };
  const sortByBestMatch = () => {
    setdynamicItems([...items]);
  };
  const sortByrecent = (params) => {
    let recent = dynamicItems.sort((a, b) => a.listedAt - b.listedAt);
    setdynamicItems(recent);
  };

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
                  <b className="font-bold">for sale </b> at Freetown, Sierra
                  Leone
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
          <CardSection items={dynamicItems} mapView={mapView} />
          <span className="block h-screen w-screen overflow-visible md:hidden">
            <MapViewSection
              location={location}
              mapView={mapView}
              zoomLevel={15}
            />
          </span>
        </section>
        <MapViewSection location={location} mapView={mapView} zoomLevel={15} />
      </div>
    </div>
  );
};

export default ListingsWrapper;
