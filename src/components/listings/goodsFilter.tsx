import FilterDropdowns from "./filterDropdowns";
import FilterSearch from "./filterSearch";
import ServiceTypeBtn from "./serviceBtn";
import PropertyCategory from "./listingsCategory";
import FilterBtn from "./filterBtn";
import PriceSlider from "./priceSlider";

interface GoodsProps {
  serviceType?: any;
  ServiceOptions?: Array<string>;
  selectServiceOptions?: any;
}

const FilterGoods = (params) => {
  return (
    <div className="pt-7">
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
          <PriceSlider />
        </div>
      </form>
    </div>
  );
};

const GoodsFilter = (gfProps: GoodsProps) => {
  return (
    <div className="w-full md:px-8 lg:px-16 px-6 lg:pt-8 lg:relative">
      <div className="flex lg:flex-row lg:items-center lg:justify-between">
        <ServiceTypeBtn
          ServiceOptions={gfProps.ServiceOptions}
          serviceType={gfProps.serviceType}
          onServiceOptionsClicked={gfProps.selectServiceOptions}
        />
        <PropertyCategory
          categoryOptions={[
            "Electronics",
            "Fashion",
            "Accesories",
            "Art & Craft",
            "Toys and Games",
            "Home and Kitchen",
          ]}
        />
        <FilterBtn />
      </div>
      <FilterGoods />
    </div>
  );
};

export default GoodsFilter;
