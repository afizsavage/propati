import React, { useEffect, useRef, useState } from "react";
import ListingsWrapper from "../../components/listings/listingsWrapper";
import { Navbar } from "../../components/navbar";
import { DropDown } from "../../components/utils";
import { CustomSelect } from "../../components/utils/dropDown";
import { ListingsProvider } from "../../contexts/listings-Context";

const ListingsBuy = () => {
  return (
    <div className="w-screen h-screen flex justify-around items-center">
      <DropDown
        buttonText="Cherry"
        changeBtnText={true}
        listItems={["Cherry", "Lemon", "Banana", "Strawberry", "Apple"]}
        menuId="optList"
      />
      <CustomSelect />
    </div>
  );
};

export default ListingsBuy;
