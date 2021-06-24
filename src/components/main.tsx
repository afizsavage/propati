import React from "react";

import HeroSection from "./heroSection";
import { ToggleSection } from "./landing";
import CategoriesSection from "./landing/categoriesSection";

const Main = () => {
  return (
    <main className="flex flex-col h-full overflow-y-hidden flex-grow w-full">
      <HeroSection />
      <CategoriesSection />
      <ToggleSection />
    </main>
  );
};

export default Main;
