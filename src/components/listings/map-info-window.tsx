import React, { useEffect, useRef } from "react";

import { MapCard } from "../utils/itemCard";

const InfoWindow = ({
  property,
  setshowInfo,
  targetPosition,
  setinfoIndex,
}) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  positionWindow();
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
        setinfoIndex(null);
      };
    }, [ref]);
  }
  console.log("target position:", targetPosition);
  function positionWindow() {}

  useEffect(() => {
    const screenWidth = window.innerWidth;
    let height = wrapperRef.current.offsetHeight;
    let width = wrapperRef.current.offsetWidth;
    if (targetPosition.top <= height - 80 && targetPosition.left <= width / 2) {
      if (wrapperRef.current) {
        wrapperRef.current.style.left = "5rem";
        wrapperRef.current.style.top = "-5rem";
      }
    } else if (
      targetPosition.top <= height - 80 &&
      targetPosition.right <= width / 2
    ) {
      if (wrapperRef.current) {
        wrapperRef.current.style.top = "-3rem";
        wrapperRef.current.style.left = "-19rem";
      }
    } else if (targetPosition.bottom <= height + 55) {
      if (wrapperRef.current) {
        wrapperRef.current.style.top = "-19rem";
      }
    } else if (targetPosition.right <= width / 2) {
      if (wrapperRef.current) {
        wrapperRef.current.style.left = "-19rem";
        wrapperRef.current.style.top = "-8rem";
      }
    } else if (targetPosition.top <= height) {
      if (wrapperRef.current) {
        wrapperRef.current.style.top = "3rem";
      }
    } else if (targetPosition.left <= width / 2) {
      if (wrapperRef.current) {
        wrapperRef.current.style.left = "5.2rem";
        wrapperRef.current.style.top = "-8rem";
      }
    }
  }, []);
  return (
    <div ref={wrapperRef} className="absolute top-12 -left-28  z-10">
      <MapCard
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
