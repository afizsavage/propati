import React, { useState, FC, ReactElement } from "react";
import Filter from "./listingsFilter";

const Listings: FC = (params): ReactElement => {
  const ServiceOptions = ["To Let", "For Sale", "Goods for Sale"];
  const [serviceType, setServiceType] = useState(ServiceOptions[0]);

  const selectServiceOptions = (value) => () => {
    setServiceType(value);
  };

  return (
    <>
      <Filter
        serviceType={serviceType}
        ServiceOptions={ServiceOptions}
        selectServiceOptions={selectServiceOptions}
      />
      <div className="flex"></div>
    </>
  );
};

export default Listings;
