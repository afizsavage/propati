import React, { useEffect } from "react";
import Link from "next/link";

import { Card } from "../utils/itemCard";
import { uselistings } from "../../contexts/listings-Context";

const CardSection = ({ mapView, filter }) => {
  const { state } = uselistings();
  useEffect(() => {
    const wrapper = document.getElementById("cardsWrapper");
    if (filter) {
      wrapper.classList.add("opacity-5", "overflow-y-hidden");
    } else {
      wrapper.classList.remove("opacity-5", "overflow-y-hidden");
    }
  }, [filter]);

  return (
    <div id="cardsWrapper" className={!mapView ? "cardsWrapper " : "hidden"}>
      {state.listings.map((item) => {
        return (
          <div
            key={item.properties.id}
            className={!filter ? "cardWrapper" : "cardWrapper  transform-none"}
          >
            <Link
              href={{
                pathname: "/apartments/[id]",
                query: { id: item.properties.id },
              }}
            >
              <a className={!filter ? "cursor-pointer" : "cursor-default"}>
                <Card
                  baths={item.properties.baths}
                  beds={item.properties.beds}
                  imageSrc={item.properties.image}
                  itemLocation={item.properties.address}
                  itemName={item.properties.name}
                  itemPrice={item.properties.price}
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
