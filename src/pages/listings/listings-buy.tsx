import React, { useEffect, useRef, useState } from "react";
import ListingsWrapper from "../../components/listings/listingsWrapper";
import { Navbar } from "../../components/navbar";
import { ListingsProvider } from "../../contexts/listings-Context";

const ListingsBuy = () => {
  const navRef = useRef(null);
  const [height, setheight] = useState(null);

  useEffect(() => {
    setheight(navRef.current.offsetHeight);

    console.log(`page: ${height}`);
  }, []);
  return (
    <ListingsProvider>
      <div className="flex flex-col max-h-screen h-full overflow-y-hidden ">
        <div className="block h-auto" ref={navRef}>
          <Navbar />
        </div>
        <main className="flex flex-col h-full overflow-y-hidden flex-grow w-full ">
          <ListingsWrapper navHeight={height} />
        </main>
      </div>
    </ListingsProvider>
  );
};

export default ListingsBuy;
