import React from "react";
import HeroSection from "./heroSection";
import { ToggleSection } from "./landing";
import Listings from "./listings/";

const Main = () => {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <ToggleSection />
      {/* <!-- Container --> */}
    </main>
  );
};

export default Main;
