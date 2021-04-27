import React from "react";
import HeroSection from "./heroSection";
import Listings from "./listings/";

const Main = () => {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <Listings />
      {/* <!-- Container --> */}
    </main>
  );
};

export default Main;
