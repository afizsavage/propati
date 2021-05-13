import React from "react";

const ImageSlider = () => {
  return (
    <div className="flex flex-col items-center relative w-full h-full">
      <div
        className="h-96 w-full bg-white rounded-2xl overflow-x-hidden flex snap-x"
        // style={{ height: "50vh" }}
      >
        <div
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

      <div className="flex mt-8 z-50 relative bottom-16">
        <a
          className="w-3 mr-1 h-3 text-gray-700 rounded-full bg-white flex justify-center items-center"
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
        />
      </div>
    </div>
  );
};

export default ImageSlider;
