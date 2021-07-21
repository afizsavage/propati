import React from "react";
import GoogleMapReact from "google-map-react";
import { BsHouse } from "react-icons/bs";

const LocationPin = ({ lat, lng }) => (
  <div className=" bg-teal-500 h-12 w-12 items-center justify-center inline-flex rounded-full">
    <span className="text-xl inline-block mx-auto my-auto text-white font-bold">
      <BsHouse />{" "}
    </span>
  </div>
);

const defaultMapOptions = {
  streetViewControl: true,
  fullscreenControl: false,
  gestureHandling: "greedy",
  streetViewControlOptions: {
    position: 3,
  },
  zoomControlOptions: {
    position: 3,
  },
};

const PropertyLocation = ({ location, zoomLevel }) => {
  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };
  return (
    <div className="map mb-12 ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 mt-10 ">
        Location
      </h2>

      <div className="w-100 " style={{ height: "65vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110" }}
          defaultCenter={center}
          defaultZoom={zoomLevel}
          options={{
            ...defaultMapOptions,
          }}
        >
          <LocationPin lat={location.latitude} lng={location.longitude} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default PropertyLocation;
