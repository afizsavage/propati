import React from "react";
import Link from "next/link";
import { FaSortAmountDown } from "react-icons/fa";
import { AiOutlineDown, AiFillCaretDown } from "react-icons/ai";

import { DropDown, ItemCard } from "../utils";
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

const CardSection = () => {
  return (
    <section className="overflow-y-hidden h-screen col-span-9 lg:col-span-5">
      <div className="w-full px-9 py-4 flex bg-white align-middle justify-between ">
        <div>
          <span>1</span>
        </div>
        <div className="inline-flex">
          <span className="text-gray-600">
            {" "}
            <FaSortAmountDown className="inline text-gray-500 cursor-text" />{" "}
            Sort by:
          </span>
          <span>
            <DropDown
              buttonText={"button"}
              changeBtnText={true}
              listItems={[
                <SortOption title="Best Match" />,
                <SortOption title="Most Recent" />,
                <SortOption title="Price: Low to high" />,
                <SortOption title="Price: High to low" />,
              ]}
              autoSelectOption={true}
              menuId="sortBtn"
              styleButton="text-gray-500 py-0 "
              styleContent="w-40 rounded-sm right-0 origin-top-left"
            />
          </span>
        </div>
      </div>
      <div className="w-full overflow-y-scroll px-2 md:pr-0 h-full md:pl-4 flex flex-row flex-wrap ">
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
    </section>
  );
};

export default CardSection;
