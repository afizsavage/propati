import "rc-slider/assets/index.css";
import RealEstateFilter from "./realEstateFilter";
import GoodsFilter from "./goodsFilter";

interface FilterProps {
  serviceType?: any;
  ServiceOptions?: Array<string>;
  onServiceOptionsClicked?: any;
  selectServiceOptions?: any;
}

const Filter = (fsProps: FilterProps) => {
  if (fsProps.serviceType === fsProps.ServiceOptions[2]) {
    return (
      <GoodsFilter
        serviceType={fsProps.serviceType}
        ServiceOptions={fsProps.ServiceOptions}
        selectServiceOptions={fsProps.selectServiceOptions}
      />
    );
  }
  return (
    <RealEstateFilter
      serviceType={fsProps.serviceType}
      ServiceOptions={fsProps.ServiceOptions}
      selectServiceOptions={fsProps.selectServiceOptions}
    />
  );
};

export default Filter;
