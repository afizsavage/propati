import React, { useState, useRef } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { FaMapMarkerAlt, FaRegListAlt } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";

import { DropDown } from "../utils";
import { CardSection, MapViewSection } from "../../components/listings";

let items: Array<any> = [
  {
    itemName: "Nice and Quiet Apartment",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "10 Hill Cot Rd, Freetown, Sierra Leone",
    price: 1500,
    id: 1,
    location: { latitude: 8.482538005549308, longitude: -13.219440315648558 },
    beds: 2,
    baths: 2,
    listedAt: "July 4, 2021 21:20:13",
  },
  {
    itemName: "Detached building in a Secure Compound",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "20 Spur Loop, Freetown, Sierra Leone",
    price: 1300,
    beds: 2,
    baths: 2,
    id: 2,
    location: { latitude: 8.481521955793466, longitude: -13.230236206484532 },
    listedAt: "June 16, 2021 09:22:13",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    price: 1200,
    beds: 2,
    baths: 1,
    id: 3,
    location: { latitude: 8.472586969312948, longitude: -13.270485433635288 },
    listedAt: "July 1, 2021 22:22:13",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    price: 1900,
    beds: 4,
    baths: 3,
    id: 4,
    location: { latitude: 8.492955453507072, longitude: -13.26482706328113 },
    listedAt: "April 28, 2021 17:22:13",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    price: 1200,
    beds: 2,
    baths: 1,
    id: 5,
    location: { latitude: 8.488098376385116, longitude: -13.216323588978259 },
    listedAt: "April 1, 2021 07:00:13",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    price: 1900,
    beds: 4,
    baths: 3,
    id: 6,

    location: { latitude: 8.460810415467288, longitude: -13.25252802926803 },
    listedAt: "March 9, 2021 15:22:13",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    price: 1200,
    beds: 2,
    baths: 1,
    id: 7,
    location: { latitude: 8.458236979641176, longitude: -13.274350480905667 },
    listedAt: "March 15, 2021 09:22:13",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    price: 1900,
    beds: 4,
    baths: 3,
    id: 8,
    location: { latitude: 8.43219922270178, longitude: -13.155566177710412 },
    listedAt: "June 10, 2021 07:22:13",
  },
];

const location = {
  address: "8 Spur Road, Freetown",
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
    let decending = dynamicItems.slice().sort((a, b) => b.price - a.price);
    setdynamicItems([...decending]);
  };

  const sortPriceMinToMax = () => {
    let accending = dynamicItems.slice().sort((a, b) => a.price - b.price);
    setdynamicItems([...accending]);
  };
  const sortByBestMatch = () => {
    setdynamicItems([...items]);
  };
  const sortByrecent = () => {
    let recent = dynamicItems
      .slice()
      .sort(
        (a, b) =>
          new Date(b.listedAt).getTime() - new Date(a.listedAt).getTime()
      );
    setdynamicItems([...recent]);
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
              properties={items}
              center={location}
              mapView={mapView}
            />
          </span>
        </section>
        <MapViewSection
          properties={items}
          center={location}
          mapView={mapView}
        />
      </div>
    </div>
  );
};

export default ListingsWrapper;
