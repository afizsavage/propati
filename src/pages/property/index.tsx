import React from "react";
import { AddPropertyForm } from "../../components/property";

const Property = () => {
  return (
    <div className="flex flex-col flex-grow ">
      <div className="flex w-full flex-row">
        <div className="w-3/5 h-auto pt-20 lg:px-16 px-6 py-10 ">
          <AddPropertyForm />
        </div>
        <div className="w-2/5">
          <h2>hello</h2>
        </div>
      </div>
    </div>
  );
};

export default Property;
