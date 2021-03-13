import React, { useState, FC, ReactElement, useRef, useEffect } from "react";
import Filter, { sTProps } from "./listingsFilter";

const Listings: FC<sTProps> = (params): ReactElement => {
  const ServiceOptions = ["To Let", "For Sale", "Goods for Sale"];
  const [serviceType, setServiceType] = useState(ServiceOptions[0]);
  const [itemCategory, setItemCategory] = useState(null);

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
