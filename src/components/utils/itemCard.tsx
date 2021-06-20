import React from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import LinesEllipsis from "react-lines-ellipsis";

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

interface ICards {
  itemName: string;
  imageSrc: string;
  itemLocation: string;
  itemPrice: string;
  beds: number;
  baths: number;
}

export const Card = (props: ICards) => {
  return (
    <article className="w-full md:w-72 h-80 pt-2 pt-4 overflow-hidden rounded-b-md rounded-t-lg bg-white shadow-lg">
      <div className="rounded-md relative w-full px-4">
        <div className="absolute top-5 w-full px-5">
          <span className="rounded-full py-1 px-2 bg-red-400 font-bold text-base text-white ">
            {"$" + props.itemPrice}
          </span>
        </div>
        <div className=" rounded-lg overflow-hidden ">
          <img
            style={{ height: "180px" }}
            alt="Placeholder"
            src={props.imageSrc}
            width={345}
            height={300}
          />
        </div>
      </div>
      <header className="w-full leading-tight p-y p-4">
        <div className="w-full  text-sm text-gray-900 font-bold">
          <LinesEllipsis
            text={props.itemName}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        <div className="w-full text-gray-500 text-sm mt-3 font-medium">
          <LinesEllipsis
            text={props.itemLocation}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
        {/* <h1 className="text-lg">{item.itemName}</h1> */}
      </header>
      <footer className="flex justify-start leading-none py-2 px-4 text-gray-500 font-normal text-sm">
        <span className="inline mr-3">
          {" "}
          <IoBedOutline className="inline text-lg " /> {props.beds} Beds
        </span>
        <span className="inline">
          {" "}
          <BiBath className="inline text-lg leading-none " /> {props.baths}{" "}
          Baths
        </span>
      </footer>
    </article>
  );
};

const ItemCard = () => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {items.map((item) => {
        return (
          <li key={item.index} className="my-4 w-full lg:my-4  ">
            <a href="">
              {/* <!-- Article --> */}
              <article className="w-full overflow-hidden rounded-b-md rounded-t-lg bg-white shadow-lg">
                <div className="rounded-md relative w-full">
                  <div className="absolute top-5 w-full px-5">
                    <span className="rounded-full py-1 px-2 bg-red-400 font-bold text-base text-white ">
                      {"$" + item.itemPrice}
                    </span>
                  </div>
                  <img
                    style={{ height: "180px" }}
                    alt="Placeholder"
                    src={item.imageSrc}
                    width={345}
                    height={300}
                  />
                </div>
                <header className="w-full leading-tight p-2 md:p-4">
                  <div className="w-full  text-sm text-gray-900 font-bold">
                    <LinesEllipsis
                      text={item.itemName}
                      maxLine="1"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </div>
                  <div className="w-full text-gray-500 text-sm mt-3 font-medium">
                    <LinesEllipsis
                      text={item.itemLocation}
                      maxLine="1"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </div>
                  {/* <h1 className="text-lg">{item.itemName}</h1> */}
                </header>
                <footer className="flex justify-start leading-none p-2 md:p-4 text-gray-500 font-normal text-sm">
                  <span className="inline mr-3">
                    {" "}
                    <IoBedOutline className="inline text-lg " /> {item.beds}{" "}
                    Beds
                  </span>
                  <span className="inline">
                    {" "}
                    <BiBath className="inline text-lg leading-none " />{" "}
                    {item.baths} Baths
                  </span>
                </footer>
              </article>
            </a>
            {/* <!-- END Article --> */}
          </li>
        );
      })}
    </ul>
  );
};

export default ItemCard;
