import React, { useState } from "react";

import FilterDropdowns from "./filterDropdowns";
import FilterSearch from "./filterSearch";
import ServiceTypeBtn from "./serviceBtn";
import PropertyCategory from "./listingsCategory";
import FilterBtn from "./filterBtn";

interface GoodsProps {
  serviceType?: any;
  ServiceOptions?: Array<string>;
  selectServiceOptions?: any;
}

const FilterGoods = (params) => {
  return (
    <div className="pt-8">
      <form className="w-full space-y-4 text-gray-700">
        <div className="flex flex-wrap space-y-4 md:space-y-0">
          <FilterSearch searchLabel={"Products"} />
          <FilterDropdowns
            heading={"Bedrooms"}
            ServiceOptions={["1", "2", "3", "4", "5+"]}
          />
          <FilterDropdowns
            heading={"Bathrooms"}
            ServiceOptions={["1", "2", "3", "4", "5+"]}
          />
          <FilterDropdowns
            heading={"Residential Type"}
            ServiceOptions={[
              "Apartment",
              "Detached",
              "Terraced",
              "Cottage",
              "Room",
            ]}
          />
          <FilterDropdowns
            heading={"Price"}
            ServiceOptions={[
              "Apartment",
              "Detached",
              "Terraced",
              "Cottage",
              "Room",
            ]}
          />
        </div>
      </form>
    </div>
  );
};

const GoodsFilter = (gfProps: GoodsProps) => {
  const categoryOptions = [
    "Electronics",
    "Fashion",
    "Accesories",
    "Art & Craft",
    "Toys and Games",
    "Home and Kitchen",
  ];
  const [itemCategory, setItemCategory] = useState(categoryOptions[0]);

  const selectItemCategory = (value) => () => {
    setItemCategory(value);
  };

  return (
    <div className="w-full pt-4 pb-3 md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center justify-between flex-wrap">
        <ServiceTypeBtn
          ServiceOptions={gfProps.ServiceOptions}
          serviceType={gfProps.serviceType}
          onServiceOptionsClicked={gfProps.selectServiceOptions}
        />
        <FilterBtn />
        <PropertyCategory
          categoryOptions={categoryOptions}
          itemCategory={itemCategory}
          selectCategory={selectItemCategory}
        />
      </div>
      <FilterGoods />
    </div>
  );
};

export default GoodsFilter;
