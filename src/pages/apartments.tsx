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
import { SubmitBtn } from "../components/auth";
import { Location, ListingDescription } from "../components/property";

const LHButton = ({ title, icon }) => {
  return (
    <button className="py-1 px-2 underline text-sm hover:bg-gray-100 rounded-lg text-gray-700 font-semibold focus:outline-none">
      {icon}
      {title}
    </button>
  );
};

const ApplyForm = (params) => {
  return (
    <div className="flex flex-grow flex-col my-1">
      <div
        className="auth-card my-0 w-2/3 sticky top-28 border-purple-500
        "
      >
        <form
          id="signupForm"
          className=""
          onSubmit={() => console.log("clicked")}
        >
          <div className="px-8 pt-8">
            <div className="w-full text-center font-medium text-gray-400 text-sm">
              {" "}
              <span>Yearly Rate</span>
            </div>

            <div className="mt-2 inline-flex justify-center text-2xl text-gray-700 font-semibold w-full">
              <span>$1,200</span>
            </div>
          </div>
          <div className="w-full text-xs font-semibold py-2 inline-flex justify-center mt-5 bg-gray-100">
            <span className="text-center">Currently Available</span>
          </div>

          <SubmitBtn
            btnText="Apply"
            loading={null}
            style={" bg-purple-500 hover:bg-purple-600"}
          />
        </form>
      </div>
    </div>
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
              <span className="text-xl inline-block mr-4 p-0">
                {amenity.icon}
              </span>
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
    <div className="w-full">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 mt-10">
        Contact Information
      </h2>
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
          <div className="w-2/3">
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
            </div>
          </div>
          <ApplyForm />
        </div>
        <Location location={location} zoomLevel={15} />
        <Contact />
        <div>
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
      </main>
      <Footer />
    </>
  );
};

export default Item;
