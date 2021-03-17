import React, { useState } from "react";

import FilterDropdowns from "./filterDropdowns";
import FilterSearch from "./filterSearch";
import ServiceTypeBtn from "./serviceBtn";
import PropertyCategory from "./listingsCategory";
import FilterBtn from "./filterBtn";

interface RealEstateProps {
  serviceType: string;
  ServiceOptions: Array<string>;
  selectServiceOptions(x: String): () => void;
}

interface FreProps {
  estateCategory: string;
  categoryOptions: Array<string>;
}

const FilterRealEstate = (resprops: FreProps) => {
  if (resprops.estateCategory === resprops.categoryOptions[0]) {
    return (
      <div className="pt-8">
        <form className="w-full space-y-4 text-gray-700">
          <div className="flex flex-wrap space-y-4 md:space-y-0">
            <FilterSearch searchLabel={"Location"} />
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
              heading={" Price"}
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
  } else if (resprops.estateCategory === resprops.categoryOptions[1]) {
    return (
      <div className="pt-8">
        <form className="w-full space-y-4 text-gray-700">
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0">
            <FilterSearch searchLabel={"Location"} />

            <FilterDropdowns
              heading={"Commercial Type"}
              ServiceOptions={["Offices", "Stores", "Shops", "Warehouses"]}
            />
            <FilterDropdowns
              heading={" Price"}
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
  } else {
    return (
      <div className="pt-8">
        <form className="w-full space-y-4 text-gray-700">
          <div className="flex flex-wrap justify-center space-y-4 md:space-y-0">
            <FilterSearch searchLabel={"Location"} />

            <FilterDropdowns
              heading={"Plot size"}
              ServiceOptions={["Offices", "Stores", "Shops", "Warehouses"]}
            />
            <FilterDropdowns
              heading={"Price"}
              ServiceOptions={["Offices", "Stores", "Shops", "Warehouses"]}
            />
          </div>
        </form>
      </div>
    );
  }
};

const RealEstateFilter = (rsProps: RealEstateProps) => {
  const categoryOptions = ["Residential", "Commercial", "Land/Plots"];
  const [itemCategory, setItemCategory] = useState(categoryOptions[0]);

  const selectItemCategory = (value) => () => {
    setItemCategory(value);
  };

  return (
    <div className="w-full md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center lg:justify-between">
        <ServiceTypeBtn
          ServiceOptions={rsProps.ServiceOptions}
          serviceType={rsProps.serviceType}
          onServiceOptionsClicked={rsProps.selectServiceOptions}
        />
        <PropertyCategory
          categoryOptions={categoryOptions}
          itemCategory={itemCategory}
          selectCategory={selectItemCategory}
        />
        <FilterBtn />
      </div>
      <FilterRealEstate
        categoryOptions={categoryOptions}
        estateCategory={itemCategory}
      />
    </div>
  );
};

export default RealEstateFilter;
