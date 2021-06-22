import React, { useState } from "react";
import Link from "next/link";
import { AiFillCaretDown } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiEqualizerFill } from "react-icons/ri";
import LinesEllipsis from "react-lines-ellipsis";

import { DropDown, ItemCard } from "../utils";
import { Card } from "../utils/itemCard";

const SortOption = ({ title }) => {
  return (
    <span
      id="sortOption"
      className="hover:bg-gray-100 px-5 text-sm py-3 w-40 font-thin inline-block align-text-top "
    >
      {title}
      <AiFillCaretDown
        id="sort"
        className="text-lg ml-2 text-teal-600 font-bold inline"
      />
    </span>
  );
};

const CardSection = ({ mapView, items }) => {
  // let sumOfProperties = items.length;
  // const [mapView, setmapView] = useState(false);

  // const showMap = (params) => {
  //   if (mapView == false) {
  //     setmapView(true);
  //   } else {
  //     setmapView(false);
  //   }
  // };

  return (
    <div className={!mapView ? "cardsWrapper" : "hidden"}>
      {items.map((item) => {
        return (
          <div className="md:px-3 md:mt-6 mx-auto md:mx-0 last:pb-40">
            <Link href="">
              <a>
                <Card
                  baths={item.baths}
                  beds={item.beds}
                  imageSrc={item.imageSrc}
                  itemLocation={item.itemLocation}
                  itemName={item.itemName}
                  itemPrice={item.itemPrice}
                />
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
