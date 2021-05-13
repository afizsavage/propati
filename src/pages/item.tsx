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
import ImageSlider from "../components/imageSlider";
import { SubmitBtn } from "../components/auth";

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
    <div className="flex flex-grow flex-col  ">
      <div
        className="auth-card my-0 w-2/3 sticky top-5 
        "
      >
        <form
          id="signupForm"
          className=""
          onSubmit={() => console.log("clicked")}
        >
          <div className="p-8">
            <div className="w-full text-center text-gray-400 py-4 text-sm">
              {" "}
              or with email
            </div>

            <div className="mt-4 inline-flex justify-end w-full">
              <Link href="/auth/sign-up">
                <a className="auth-links">Forgot your password?</a>
              </Link>
            </div>
          </div>

          <SubmitBtn btnText="Apply" loading={null} />
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
    </section>
  );
};

const ListingDescription = (params) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="border-t">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5 mt-10 ">
        Description
      </h2>
      <div className="text-lg text-gray-700 ">
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi Neque porro quisquam est, qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam
          <a
            className={readMore ? "hidden" : "inline cursor-pointer"}
            onClick={(e) => {
              e.preventDefault;
              setReadMore(true);
            }}
          >
            ...<span className="text-teal-500 underline">readmore</span>
          </a>
          <span className={readMore ? "inline" : "hidden"}>
            eius modi tempora incidunt ut labore et dolore magnam Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
            vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
            molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
            nulla pariatur. aliquam quaerat voluptatem
          </span>
        </p>
      </div>
    </div>
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
      </main>
      <Footer />
    </>
  );
};

export default Item;
