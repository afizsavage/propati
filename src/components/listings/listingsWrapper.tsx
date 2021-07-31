import React, { useState, useRef, useEffect } from "react";

import { CardSection, MapViewSection, Filter } from "../../components/listings";
import { items } from "./test-items";
import ListingsHeader from "./listings-header";

const center = {
  lat: 8.46520020876784,
  lng: -13.229434452077367,
};

const ListingsWrapper = ({ navHeight }) => {
  const [mapView, setmapView] = useState(false);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);
  const [filter, setfilter] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
  };

  // get the screen width to set map view as default for mobile devices
  useEffect(() => {
    const screenWidth = window.innerWidth;

    screenWidth <= 834 ? setmapView(true) : setmapView(false);
    console.log(`wrapper: ${navHeight}`);
  }, [navHeight]);
  return (
    <div>
      <div className="w-full h-full md:overflow-hidden grid grid-cols-9">
        <section
          onScroll={onScroll}
          id="listings"
          className={mapView ? " listings overflow-visible" : "listings"}
        >
          <ListingsHeader
            goingUp={goingUp}
            mapView={mapView}
            filter={filter}
            setFilter={setfilter}
            setmapView={setmapView}
          />
          <Filter filter={filter} setFilter={setfilter} navHeight={navHeight} />
          <CardSection filter={filter} mapView={mapView} />
          {/* <span className="block h-screen w-96 overflow-visible md:hidden">
            <MapViewSection
              properties={items}
              center={center}
              mapView={mapView}
            />
          </span> */}
        </section>
        <MapViewSection properties={items} center={center} mapView={mapView} />
      </div>
    </div>
  );
};

export default ListingsWrapper;
