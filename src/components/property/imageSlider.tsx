import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ImageSlider = () => {
  return (
    <div className=" w-full bg-white rounded-2xl h-auto">
      <Carousel className="w-full h-auto" responsive={responsive}>
        <div className="h-96 w-96">
          {" "}
          {/* <img
            className="h-96 w-96 "
            src="https://picsum.photos/200/300"
            alt=""
          /> */}
          <Image
            src="https://picsum.photos/"
            alt="Pic"
            width={200}
            height={300}
          />
        </div>
      </Carousel>
      {/* <div
          className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-blue-600"
          id="slide-1"
        >
          Slide 1
        </div>
        <div
          className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-green-600"
          id="slide-2"
        >
          Slide 2
        </div>
        <div
          className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-red-600"
          id="slide-3"
        >
          Slide 3
        </div>
        <div
          className="snap-start w-full h-full flex items-center justify-center text-white text-4xl font-bold flex-shrink-0 bg-yellow-600"
          id="slide-4"
        >
          Slide 4
        </div>
      </div>

      <div className="flex mt-8">
        <a
          className=" w-10 mr-1 h-10 text-gray-700 rounded-full bg-black flex justify-center items-center"
          href="#slide-1"
        />

        <a
          className="w-8 mr-1 h-3 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-2"
        />

        <a
          className="w-3 mr-1 h-3 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-3"
        />

        <a
          className="w-3 mr-1 h-3 text-gray-700 rounded-full bg-white flex justify-center items-center"
          href="#slide-4"
        /> */}
    </div>
  );
};

export default ImageSlider;
