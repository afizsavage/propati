import React, { useState } from "react";
import Slider, { Range } from "rc-slider";

const PriceSlider = (params) => {
  const [value, setValue] = useState([100, 5000]);

  const sliderProps = {
    min: 100,
    max: 5000,
    defaultValue: [100, 5000],
  };

  return (
    <fieldset className="w-full pl-4 md:w-1/5 ">
      <div className="inline-flex justify-center w-full">
        <label
          htmlFor=""
          className="mx-auto bg-indigo-500 text-base font-bold py-2 px-4 text-gray-100 rounded-full"
        >
          {value[0] === 100 && value[1] === 5000
            ? "Any Price"
            : value[0] === 100 && value[1] != 5000
            ? `Up to $${value[1]}/year`
            : `$${value[0]} to $${value[1]}/year `}
        </label>
      </div>

      {/* <!-- between two numbers --> */}
      <Range value={value} onChange={(val) => setValue(val)} {...sliderProps} />
    </fieldset>
  );
};

export default PriceSlider;
