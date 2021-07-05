import React from "react";
import GoogleMapReact from "google-map-react";
import { BsHouse } from "react-icons/bs";

const defaultMapOptions = {
  streetViewControl: false,
  fullscreenControl: false,
  zoomControlOptions: {
    position: 6,
  },
  keyboardShortcuts: false,
};

const LocationPin = ({ text, lat, lng }) => (
  <div className=" bg-teal-500 h-12 w-12 items-center justify-center inline-flex rounded-full">
    <span className="text-xl inline-block mx-auto my-auto text-white font-bold">
      <BsHouse />{" "}
    </span>
  </div>
);

const MapViewSection = ({ center, mapView }) => {
  return (
    <section className={!mapView ? " mapSection " : "col-span-9 block"}>
      <div
        className="absolute bottom-0 lg:static w-screen overflow-hidden h-screen md:w-full"
        style={{ height: "91vh" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110" }}
          defaultCenter={center}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals={true}
          options={{
            ...defaultMapOptions,
          }}
        >
          {/* <LocationPin
            lat={center.lat}
            lng={center.lng}
            text={center.address}
          /> */}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default MapViewSection;
