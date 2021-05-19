import React from "react";
import { ItemCard } from "../listings";

const SimilarItems = () => {
  return (
    <div className="flex-col py-12 mt-16 bg-gray-100 md:px-8 lg:px-16 px-6">
      <div className="flex justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Similar Properties Nearby
        </h2>
      </div>
      <div className="w-full">
        <ItemCard />
      </div>
    </div>
  );
};

export default SimilarItems;
