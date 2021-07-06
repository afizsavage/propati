import React, { useRef, useState } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import { FormatPrice } from "../utils";
import { MarkerProps } from "../../interfaces";

const defaultMapOptions = {
  streetViewControl: false,
  fullscreenControl: false,
  zoomControlOptions: {
    position: 6,
  },
  keyboardShortcuts: false,
};

const Marker = (Props: MarkerProps) => {
  return <>{Props.children}</>;
};

const MapViewSection = ({ center, mapView, properties }) => {
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [zoom, setZoom] = useState(13);

  const points = properties.map((location) => ({
    type: "Feature",
    properties: {
      cluster: false,
      locationId: location.id,
      locationPrice: location.price,
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(location.location.longitude),
        parseFloat(location.location.latitude),
      ],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return (
    <section
      ref={mapRef}
      className={!mapView ? " mapSection " : "col-span-9 block"}
    >
      <div
        className="absolute bottom-0 lg:static w-screen overflow-hidden h-screen md:w-full"
        style={{ height: "91vh" }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110" }}
          defaultCenter={center}
          defaultZoom={13}
          yesIWantToUseGoogleMapApiInternals
          options={{
            ...defaultMapOptions,
          }}
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map;
          }}
          onChange={({ zoom, bounds }) => {
            setZoom(zoom);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {clusters.map((cluster) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            if (isCluster) {
              return (
                <Marker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="rounded-full border bg-teal-500 flex items-center justify-center border-blue-500 w-9 h-9 "
                    onClick={() => {
                      const expansionZoom = Math.min(
                        supercluster.getClusterExpansionZoom(cluster.id),
                        20
                      );
                      mapRef.current.setZoom(expansionZoom);
                      mapRef.current.panTo({ lat: latitude, lng: longitude });
                    }}
                  >
                    {pointCount}
                  </div>
                </Marker>
              );
            }

            return (
              <Marker
                key={`location-${cluster.properties.locationId}`}
                lat={latitude}
                lng={longitude}
              >
                <button className="crime-marker">
                  {/* <img src="/custody.svg" alt="location doesn't pay" /> */}
                  <span className="block w-auto h-auto py-2 px-2 flex justify-center rounded-full items-center bg-teal-500 ">
                    {FormatPrice.format(cluster.properties.locationPrice)}
                  </span>
                </button>
              </Marker>
            );
          })}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default MapViewSection;
