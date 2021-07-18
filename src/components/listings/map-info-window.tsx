import React, { useEffect, useRef } from "react";

import { Card } from "../utils/itemCard";

const InfoWindow = ({ property, setshowInfo, targetPosition }) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  console.log("target Position", targetPosition);
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowInfo(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div ref={wrapperRef} className="absolute z-10">
      <Card
        baths={property.properties.baths}
        beds={property.properties.beds}
        imageSrc={property.properties.image}
        itemLocation={property.properties.address}
        itemName={property.properties.name}
        itemPrice={property.properties.price}
        key={property.properties.id}
      />
    </div>
  );
};

export default InfoWindow;
