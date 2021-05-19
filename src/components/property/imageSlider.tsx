import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = () => {
  // onMove means if dragging or swiping in progress.
  return <button className="bg-black text-white">1</button>;
};

const ImageSlider = () => {
  return (
    <div className=" w-ful pt-2 z-30 bg-white rounded h-auto">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
      >
        <div style={{ width: "866px", height: "350px" }}>
          {" "}
          <img
            src="https://a0.muscache.com/im/pictures/2ca6a25b-6bd7-4918-8ae8-0f094202fabf.jpg?im_w=960"
            alt=""
            width="866px"
            height="350px"
          />
        </div>
        <div style={{ width: "866px", height: "350px" }}>
          {" "}
          <img
            style={{ width: "866px", height: "350px" }}
            src="https://a0.muscache.com/im/pictures/3305c723-4529-407c-ac5d-b7926d22d243.jpg?im_w=1200"
            alt=""
          />
        </div>
        <div style={{ width: "866px", height: "350px" }}>
          {" "}
          <img
            style={{ width: "866px", height: "350px" }}
            src="https://a0.muscache.com/im/pictures/miso/Hosting-37506231/original/240d2f06-c865-4025-a24c-0a0ce49c2c08.jpeg?im_w=960"
            alt=""
          />
        </div>
        <div style={{ width: "866px", height: "350px" }}>
          {" "}
          <img
            style={{ width: "866px", height: "350px" }}
            src="https://a0.muscache.com/im/pictures/0ac677e5-a6e8-4ccb-bcad-a1c07c87ba91.jpg?im_w=960"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageSlider;
