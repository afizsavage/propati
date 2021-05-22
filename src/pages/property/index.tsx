import React from "react";
import { AddPropertyForm } from "../../components/property";

const Property = () => {
  return (
    <div className="flex flex-col flex-grow ">
      <div className="w-full h-auto pt-20 lg:px-16 px-6 py-10 ">
        <AddPropertyForm />
      </div>
    </div>
  );
};

export default Property;
