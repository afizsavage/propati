import React from "react";
import { AddPropertyForm } from "../../components/property";

const Property = () => {
  return (
    <div className="flex flex-col flex-grow ">
      <div className="flex w-full flex-row">
        <div className="w-4/5 h-auto mx-auto">
          <AddPropertyForm />
        </div>
      </div>
    </div>
  );
};

export default Property;
