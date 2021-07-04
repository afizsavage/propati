import React, { useState } from "react";
import Link from "next/link";

import { Card } from "../utils/itemCard";

const CardSection = ({ mapView, items }) => {
  return (
    <div className={!mapView ? "cardsWrapper" : "hidden"}>
      {items.map((item) => {
        return (
          <div className="md:px-3 md:mt-6 mx-auto md:mx-0 first:mt-24 md:first:mt-6 last:pb-40">
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
