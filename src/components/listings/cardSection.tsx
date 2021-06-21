import React from "react";
import Link from "next/link";
import { AiOutlineDown, AiFillCaretDown } from "react-icons/ai";
import { RiEqualizerFill } from "react-icons/ri";
import LinesEllipsis from "react-lines-ellipsis";

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
  let sumOfProperties = items.length;
  return (
    <section className="overflow-y-scroll flex flex-col md:overflow-y-hidden h-screen col-span-9 lg:col-span-5">
      <div className="w-full px-6 md:px-9 py-0 md:py-4 flex flex-col-reverse md:flex-row bg-white align-middle justify-between ">
        <div className="h-12 inline-flex items-center  md:h-auto border-t md:border-t-0 border-b md:border-b-0 text-teal-700 font-normal cursor-pointer">
          <h1>
            {" "}
            <RiEqualizerFill className="inline text-xl transform rotate-90 mr-2" />{" "}
            <span className="hidden md:inline-block">
              <b className="font-bold">{sumOfProperties}</b> residentials{" "}
              <b className="font-bold">for sale </b> at Freetown, Sierra Leone
            </span>
          </h1>
        </div>
        <div className="inline-flex items-center h-12 md:h-auto w-full md:w-auto">
          <span className="inline-flex w-3/5  md:hidden">
            <span className="font-bold inline mr-1">{sumOfProperties}</span>
            <LinesEllipsis
              text={" Freetown, Sierra Leone residentials for sale"}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />

            {/* <b className="font-bold">for sale </b> at Freetown, Sierra Leone */}
          </span>
          <span className=" w-2/5 md:w-auto">
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
      <div className="w-full md:overflow-y-scroll px-2 md:pr-0 h-full md:pl-4 flex flex-row flex-wrap ">
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
