import React, { useState } from "react";
import ListingsWrapper from "../../components/listings/listingsWrapper";
import { Navbar } from "../../components/navbar";

const ListingsBuy = () => {
  return (
    <div className="flex flex-col max-h-screen h-full overflow-y-hidden ">
      <Navbar />
      <main className="flex flex-col h-full overflow-y-hidden flex-grow w-full ">
        <ListingsWrapper />
      </main>
    </div>
  );
};

export default ListingsBuy;
