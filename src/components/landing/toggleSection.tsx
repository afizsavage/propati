import React, { ReactElement, useCallback, useState } from "react";
import { AppTab } from "../utils/";

const ToggleSection = () => {
  return (
    <div className=" w-full ">
      <div className="md:px-8 lg:px-16 px-6 py-10 w-full">
        <AppTab />
      </div>
    </div>
  );
};

export default ToggleSection;
