import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { MapCard } from "../utils/itemCard";

const InfoWindow = ({
  property,
  setshowInfo,
  targetPosition,
  setinfoIndex,
}) => {
  const router = useRouter();
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  // hide info window if a click event fired outside the info window
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setshowInfo(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        setinfoIndex(null);
      };
    }, [ref]);
  }

  //render the info window relative to the marker position on the map
  useEffect(() => {
    const screenWidth = window.innerWidth;
    let height = wrapperRef.current.offsetHeight;
    let width = wrapperRef.current.offsetWidth;
    if (screenWidth <= 834) {
      if (targetPosition.top <= width / 2) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "25rem";
          wrapperRef.current.style.left = "25rem";
        }
      }
    } else {
      if (
        targetPosition.top <= height / 4 &&
        targetPosition.left <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "3.5rem";
          wrapperRef.current.style.left = " 0rem";
        }
      } else if (
        targetPosition.bottom <= height / 2 &&
        targetPosition.left <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "-19.5rem";
          wrapperRef.current.style.left = " 5rem";
        }
      } else if (
        targetPosition.top <= height / 4 &&
        targetPosition.right <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "0rem";
          wrapperRef.current.style.left = " -19rem";
        }
      } else if (
        targetPosition.bottom <= height / 2 &&
        targetPosition.right <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.left = "-19rem";
          wrapperRef.current.style.top = "-19.5rem";
        }
      } else if (
        targetPosition.bottom <= height &&
        targetPosition.left <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "-13rem";
          wrapperRef.current.style.left = "5rem";
        }
      } else if (
        targetPosition.bottom <= height &&
        targetPosition.right <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "-13rem";
          wrapperRef.current.style.left = "-19rem";
        }
      } else if (
        targetPosition.top <= height / 2 &&
        targetPosition.left <= width / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.left = "5rem";
          wrapperRef.current.style.top = "-5rem";
        }
      } else if (
        targetPosition.right <= width / 2 &&
        targetPosition.top <= height / 2
      ) {
        if (wrapperRef.current) {
          wrapperRef.current.style.left = "-19rem";
          wrapperRef.current.style.top = "-5rem";
        }
      } else if (targetPosition.left <= width / 2) {
        if (wrapperRef.current) {
          wrapperRef.current.style.left = "5.2rem";
          wrapperRef.current.style.top = "-8.5rem";
        }
      } else if (targetPosition.right <= width / 2) {
        if (wrapperRef.current) {
          wrapperRef.current.style.left = "-19rem";
          wrapperRef.current.style.top = "-8.5rem";
        }
      } else if (targetPosition.top <= height) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "3rem";
        }
      } else if (targetPosition.bottom <= height + height / 3) {
        if (wrapperRef.current) {
          wrapperRef.current.style.top = "-20.5rem";
        }
      }
    }
  }, []);
  return (
    <Link href={`/apartments/${property.properties.id}`} passHref>
      <a target="_blank">
        <div
          ref={wrapperRef}
          className="cursor-pointer absolute top-12 -left-28  z-10"
        >
          {" "}
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
      </a>
    </Link>
  );
};

export default InfoWindow;
