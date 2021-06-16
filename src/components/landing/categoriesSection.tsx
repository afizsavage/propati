import React from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryCards = ({ category }) => {
  return (
    <Link href="#">
      <a className="w-full overflow-hidden  lg:w-1/4">
        <div className="w-full overflow-hidden rounded-xl mb-1 h-64">
          {/* <Image
            layout="fill"
            objectFit="contain"
            // width="48"
            // height="48"
            src="/images/land.jpg"
            alt="Picture of the author"
          /> */}
          <img src="/images/land.jpg" className="h-full" />
        </div>
        <span className="font-semibold  bg-transparent font-Lato text-xl text-gray-800 ">
          {category}
        </span>
      </a>
    </Link>
  );
};

function CategoriesSection() {
  return (
    <section className="w-full  justify-center flex py-10">
      <div className="md:px-8 lg:px-16 px-6 w-full">
        <h2 className="text-teal-700 text-center lg:text-left  text-xl tracking-wider font-semibold mb-2 lg:mb-6">
          Properties
        </h2>
        <h3 className="font-Lato font-black break-words text-center lg:text-left  text-gray-900 leading-tight text-4xl">
          Our Listing Categories
        </h3>
        <div className="flex w-full flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-5 mt-7">
          <CategoryCards category="Residentials" />
          <CategoryCards category="Commercials" />
          <CategoryCards category="Industrials" />
          <CategoryCards category="Lands" />
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
