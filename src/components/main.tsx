import React from "react";

import HeroSection from "./heroSection";
import { ToggleSection } from "./landing";
import CategoriesSection from "./landing/categoriesSection";

const Main = () => {
  return (
    <main className="flex flex-grow flex-col">
      <HeroSection />
      <CategoriesSection />
      <ToggleSection />
    </main>
  );
};

export default Main;
