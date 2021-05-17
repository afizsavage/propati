import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { IoLogoOctocat } from "react-icons/io";
import { FaSmoking } from "react-icons/fa";
import { GiWaterTank, GiTap, GiSecurityGate } from "react-icons/gi";
import { RiTempColdLine, RiParkingBoxLine } from "react-icons/ri";
import { GrFormView } from "react-icons/gr";

import Footer from "../components/footer";
import { Navbar } from "../components/navbar";
import ImageSlider from "../components/property/propertyImages";
import {
  Location,
  ListingDescription,
  ApplyCard,
} from "../components/property";

const LHButton = ({ title, icon }) => {
  return (
    <button className="py-1 px-2 underline text-sm hover:bg-gray-100 rounded-lg text-gray-700 font-semibold focus:outline-none">
      {icon}
      {title}
    </button>
  );
};

const ListingHeading = (params) => {
  return (
    <section className="flex-col font-Lato pt-6">
      <h1 className="text-3xl text-gray-700 font-semibold mb-2 ">
        {" "}
        Residential Rental at Spur Road{" "}
      </h1>

      <div className="flex justify-between">
        <span>
          <Link href="#">
            <a className="font-semibold text-gray-500 underline ">
              {" "}
              18 Spur Road, Freetown, SL
            </a>
          </Link>
        </span>
      </div>
    </section>
  );
};

const amenities: Array<any> = [
  { title: "Cat Allowed", icon: <IoLogoOctocat /> },
  { title: "Smoking Allowed", icon: <FaSmoking /> },
  { title: "Tap Water", icon: <GiTap /> },
  { title: "Water Tank", icon: <GiWaterTank /> },
  { title: "Street View", icon: <GrFormView /> },
  { title: "Parking Spot", icon: <RiParkingBoxLine /> },
  { title: "Air Conditioning", icon: <RiTempColdLine /> },
  { title: "Security Personel", icon: <GiSecurityGate /> },
];

const Amenities = (params) => {
  return (
    <div className="w-full py-10 border-t border-b my-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 ">Amenities</h2>
      <div>
        {" "}
        <ul className=" text-gray-800 font-light grid grid-cols-2 ">
          {amenities.map((amenity) => (
            <li className="my-2 inline-flex align-middle items-center">
              <span className="text-xl inline-mr-4 p-0">{amenity.icon}</span>
              {amenity.title}
            </li>
          ))}
        </ul>{" "}
      </div>
    </div>
  );
};

const location = {
  address: "8 Spur Road, Freetown",
  lat: 8.471644482274344,
  lng: -13.270381673488407,
};

const Contact = (params) => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-4/5 border-gray-300 border-l-4 border h-28 rounded-l-md rounded-r-md flex flex-row justify-between px-7 ">
        <div className="flex flex-col justify-center">
          <h3 className="text-xl font-semibold text-gray-800 ">
            Contact Information
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <span className="block text-base font-light text-gray-900 ">
            Velma Davies
          </span>
          <span className="block mt-3 text-gray-600 ">+23276078637</span>
        </div>
        <div className="flex flex-col justify-center">
          <button className=" py-1 hover:bg-gray-100 px-7 text-teal-500 border-teal-500 border rounded ">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

const Item = (props) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-grow w-full md:px-8 lg:px-16 px-6">
        <ListingHeading />
        <div className="flex w-full pt-5">
          <div className="w-3/4">
            <div className="flex-col ">
              <ImageSlider />
              <div className="flex-col mb-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-1">
                  Apartment
                </h2>
                <span className="text-gray-700">
                  3 Beds. 2 Baths. 50 m<sup>2</sup>
                </span>
              </div>
              <ListingDescription />
              <Amenities />
              <Location location={location} zoomLevel={15} />
              <Contact />
              <div className="pt-7">
                <span>
                  <LHButton
                    icon={<AiOutlineHeart className="inline mr-1 " />}
                    title={"Save"}
                  />
                  <LHButton
                    icon={<IoShareOutline className="inline mr-1 " />}
                    title="Share"
                  />
                </span>
              </div>
            </div>
          </div>
          <ApplyCard />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Item;
