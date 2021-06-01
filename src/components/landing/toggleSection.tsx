import React from "react";

const ToggleSection = () => {
  return (
    <div className="w-full ">
      <div className="md:px-8 lg:px-16 px-6 py-10 w-full">
        <div className="w-full flex flex-col">
          <div className="w-full flex justify-center">
            {" "}
            <div className="lg:w-1/3 w-full  bg-gray-100 px-1 lg:px-2 lg:py-2 py-1 flex inline-flex h-12 lg:h-14 rounded-full">
              <span className="w-1/2">
                {" "}
                <button className="bg-white w-full h-full rounded-full text-bold shadow-md focus:outline-none">
                  {" "}
                  For Tenant
                </button>{" "}
              </span>
              <span className="w-1/2">
                {" "}
                <button className="w-full h-full rounded-full focus:outline-none">
                  For Landlords
                </button>
              </span>
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ToggleSection;
