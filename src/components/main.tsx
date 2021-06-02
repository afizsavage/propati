import React from "react";
import HeroSection from "./heroSection";
import { ToggleSection } from "./landing";
import Listings from "./listings/";
import TabComp from "./utils/tabComp";

const Main = () => {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <ToggleSection />
    </main>
  );
};

export default Main;
