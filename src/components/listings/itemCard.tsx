import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import LinesEllipsis from "react-lines-ellipsis";

const items: Array<any> = [
  {
    itemName: "Nice and Quiet Apartment",
    imageSrc: "https://picsum.photos/345/180/?random",
  },
  {
    itemName: "Detached building in a Secure Compound",
    imageSrc: "https://picsum.photos/345/180/?random",
  },
  {
    itemName: "Comfy Apartment, Accessible Area ",
    imageSrc: "https://picsum.photos/345/180/?random",
  },
  {
    itemName: "Spacious Apartment at Juba",
    imageSrc: "https://picsum.photos/345/180/?random",
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
              <article className="w-full overflow-hidden rounded-t-lg bg-white shadow-lg">
                <div className="rounded-md">
                  <img
                    style={{ height: "180px" }}
                    alt="Placeholder"
                    src={item.imageSrc}
                    width={345}
                    height={300}
                  />
                </div>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <span className="w-full text-sm text-gray-900 font-bold">
                    <LinesEllipsis
                      text={item.itemName}
                      maxLine="1"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                  </span>
                  {/* <h1 className="text-lg">{item.itemName}</h1> */}
                </header>
                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <p className="ml-2 text-sm">Author Name</p>
                  <span className="hidden">Like</span>
                  <AiOutlineHeart />
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
