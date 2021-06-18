import React from "react";
import { ItemCard } from "../utils";
import { Card } from "../utils/itemCard";

const items: Array<any> = [
  {
    itemName: "Nice and Quiet Apartment",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "10 Hill Cot Rd, Freetown, Sierra Leone",
    itemPrice: "1,500",
    beds: 2,
    baths: 2,
  },
  {
    itemName: "Detached building in a Secure Compound",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "20 Spur Loop, Freetown, Sierra Leone",
    itemPrice: "1,300",
    beds: 2,
    baths: 2,
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
    itemPrice: "1,200",
    beds: 2,
    baths: 1,
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
    itemPrice: "1,900",
    beds: 4,
    baths: 3,
  },
];

const CardSection = () => {
  return (
    <section className="h-screen w-1/2">
      <div className="w-full h-full flex flex-wrap">
        {items.map((item) => {
          return (
            <Card
              baths={item.baths}
              beds={item.beds}
              imageSrc={item.imageSrc}
              itemLocation={item.itemLocation}
              itemName={item.itemName}
              itemPrice={item.itemPrice}
            />
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
