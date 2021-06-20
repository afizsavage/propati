import React from "react";
import GoogleMapReact from "google-map-react";
import { BsHouse } from "react-icons/bs";

const defaultMapOptions = {
  streetViewControl: true,
  fullscreenControl: false,
  streetViewControlOptions: {
    position: 3,
  },
  zoomControlOptions: {
    position: 3,
  },
};

const LocationPin = ({ text, lat, lng }) => (
  <div className=" bg-teal-500 h-12 w-12 items-center justify-center inline-flex rounded-full">
    <span className="text-xl inline-block mx-auto my-auto text-white font-bold">
      <BsHouse />{" "}
    </span>
  </div>
);

const Map = ({ location, zoomLevel }) => {
  return (
    <section className="  hidden md:block h-full overflow-y-hidden overflow-hidden col-span-4">
      <div className="w-100" style={{ height: "91vh" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          yesIWantToUseGoogleMapApiInternals={true}
          options={{
            ...defaultMapOptions,
            keyboardShortcuts: false,
          }}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </section>
  );
};

const location = {
  address: "8 Spur Road, Freetown",
  lat: 8.471644482274344,
  lng: -13.270381673488407,
};

const MapViewSection = () => {
  return <Map location={location} zoomLevel={15} />;
};

export default MapViewSection;
