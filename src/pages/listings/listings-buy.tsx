import React from "react";
import { CardSection } from "../../components/listings";
import { Navbar } from "../../components/navbar";

const ListingsBuy = () => {
  return (
    <div className="flex flex-col max-h-screen h-full overflow-y-hidden ">
      <Navbar />
      <main className="flex flex-col h-full overflow-y-hidden flex-grow w-full ">
        <div className="w-full h-full overflow-hidden grid grid-cols-9">
          <CardSection />
          <section className="hidden lg:static h-full overflow-y-hidden overflow-hidden col-span-4"></section>
        </div>
      </main>
    </div>
  );
};

export default ListingsBuy;
