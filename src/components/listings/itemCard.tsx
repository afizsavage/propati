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
  },
  {
    itemName: "Detached building in a Secure Compound",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "20 Spur Loop, Freetown, Sierra Leone",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6B Pipeline, Juba, Freetown, Sierra Leone",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
    itemLocation: "6,7 Signal Hill Rd, Freetown, Sierra Leone",
  },
];

const ItemCard = () => {
  return (
    <ul className="grid grid-cols-4 gap-5">
      {items.map((item) => {
        return (
          <li key={item.index} className="my-4 w-full lg:my-4  ">
            <a href="">
              {/* <!-- Article --> */}
              <article className="w-full overflow-hidden rounded-b-md rounded-t-lg bg-white shadow-lg">
                <div className="rounded-md">
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
                    <IoBedOutline className="inline text-lg " /> 3 Beds
                  </span>
                  <span className="inline">
                    {" "}
                    <BiBath className="inline text-lg leading-none " /> 2 Baths
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
