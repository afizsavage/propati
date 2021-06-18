import React from "react";
import { CardSection } from "../../components/listings";
import { Navbar } from "../../components/navbar";

const ListingsBuy = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-grow w-full">
        <div className="w-full flex flex-row">
          <CardSection />
          <section className="h-screen overflow-hidden w-1/2"></section>
        </div>
      </main>
    </>
  );
};

export default ListingsBuy;
