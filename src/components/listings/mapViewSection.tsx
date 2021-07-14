import React, { useRef, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import { FormatPrice } from "../utils";
import { MarkerProps } from "../../interfaces";
import { uselistings } from "../../contexts/listings-Context";

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
  const [zoom, setZoom] = useState(14);
  const { dispatch } = uselistings();

  // prepare data for super cluster
  const points = properties.map((location) => ({
    type: "Feature",
    properties: {
      cluster: false,
      id: location.id,
      price: location.price,
      beds: location.beds,
      baths: location.baths,
      listedAt: location.listedAt,
      name: location.itemName,
      address: location.itemLocation,
      image: location.imageSrc,
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

  let allProperty = clusters;

  useEffect(() => {
    let clustered = [];
    let listings = [];

    sortAllProperty();

    populateListings();

    function sortAllProperty() {
      allProperty.forEach((property) => {
        if (property.properties.cluster === true) {
          clustered.push(property);
        } else {
          listings.push(property);
        }
      });
    }

    for (let i = 0; i < clustered.length; i++) {
      let children = supercluster?.getChildren(clustered[i].id);
      children.forEach((child) => {
        if (child.properties.cluster === true) {
          let ren = supercluster?.getChildren(child.id);
          ren.forEach((re) =>
            re.properties.cluster === true
              ? clustered.push(re)
              : listings.push(re)
          );
        } else {
          listings.push(child);
        }
      });
    }

    function populateListings() {
      return dispatch({ type: "add", payload: listings });
    }
  }, [allProperty]);

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
          bootstrapURLKeys={{
            key: "AIzaSyD0NxdGbmSHZWWI1T5zYP6nCq_bxX2t110",
          }}
          defaultCenter={center}
          defaultZoom={14}
          yesIWantToUseGoogleMapApiInternals
          options={{
            ...defaultMapOptions,
            minZoom: 14,
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
          {allProperty.map((cluster) => {
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
                    className="font-semibold rounded-full border bg-teal-600 text-sm text-white flex items-center justify-center border-blue-500 w-9 h-9 "
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
                key={`location-${cluster.properties.id}`}
                lat={latitude}
                lng={longitude}
              >
                <button className="crime-marker">
                  <span className="block w-auto h-auto py-2 focus:outline-none px-2 text-white font-semibold text-sm flex justify-center rounded-full items-center bg-teal-600 ">
                    {FormatPrice.format(cluster.properties.price)}
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
