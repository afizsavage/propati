import React, { useRef, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import useSupercluster from "use-supercluster";

import { FormatPrice } from "../utils";
import { MarkerProps } from "../../interfaces";
import { uselistings } from "../../contexts/listings-Context";
import InfoWindow from "./map-info-window";

const defaultMapOptions = {
  streetViewControl: false,
  fullscreenControl: false,
  zoomControlOptions: {
    position: 6,
  },
  keyboardShortcuts: false,
};

const SingleMarker = (Props: MarkerProps) => {
  return (
    <button className="focus:outline-none" onClick={Props.handleClick}>
      {Props.children}
    </button>
  );
};

const ClusterMarker = (Props: MarkerProps) => {
  return <>{Props.children}</>;
};

const MapViewSection = ({ center, mapView, properties }) => {
  const mapRef = useRef(null);
  const [bounds, setBounds] = useState(null);
  const [infoIndex, setinfoIndex] = useState(null);
  const [showInfo, setshowInfo] = useState(false);
  const [zoom, setZoom] = useState(14);
  const { dispatch } = uselistings();
  const [mapBounding, setmapBounding] = useState(null);
  const [markerPosition, setmarkerPosition] = useState(null);

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

  useEffect(() => {
    let mBoumd = mapRef.current.getBoundingClientRect();
    setmapBounding(mBoumd);
  }, []);

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
            setinfoIndex(null);
            setBounds([
              bounds.nw.lng,
              bounds.se.lat,
              bounds.se.lng,
              bounds.nw.lat,
            ]);
          }}
        >
          {allProperty.map((cluster, i) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const {
              cluster: isCluster,
              point_count: pointCount,
            } = cluster.properties;

            if (isCluster) {
              return (
                <ClusterMarker
                  key={`cluster-${cluster.id}`}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className=" font-semibold rounded-full border bg-teal-600 text-sm text-white flex items-center justify-center border-blue-500 w-9 h-9 "
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
                </ClusterMarker>
              );
            }
            return (
              <SingleMarker
                key={`location-${cluster.properties.id}`}
                lat={latitude}
                lng={longitude}
                handleClick={(e) => {
                  const targetMarker = e.target.getBoundingClientRect();
                  let mLeft = targetMarker.left - mapBounding.left;
                  let mRight = mapBounding.right - targetMarker.right;
                  let mBottom = mapBounding.bottom - targetMarker.bottom;
                  let mTop = targetMarker.top - mapBounding.top;
                  let position = {
                    top: mTop,
                    right: mRight,
                    bottom: mBottom,
                    left: mLeft,
                  };
                  setmarkerPosition(position);
                  setshowInfo(true);
                  setinfoIndex(cluster.properties.id);
                }}
              >
                <span
                  className={
                    infoIndex == cluster.properties.id
                      ? "marker bg-gray-800 "
                      : "marker bg-teal-600"
                  }
                >
                  {FormatPrice.format(cluster.properties.price)}
                </span>
                {showInfo == true && infoIndex == cluster.properties.id && (
                  <InfoWindow
                    targetPosition={markerPosition}
                    property={cluster}
                    setshowInfo={setshowInfo}
                    setinfoIndex={setinfoIndex}
                  />
                )}
              </SingleMarker>
            );
          })}
        </GoogleMapReact>
      </div>
    </section>
  );
};

export default MapViewSection;
