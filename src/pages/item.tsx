import React from "react";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";

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
      <h2 className="text-2xl text-gray-700 font-semibold mb-2 ">
        {" "}
        3 Beds, 2 Baths w/AC and WIFI{" "}
      </h2>

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

const Item = (props) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-grow w-full md:px-8 lg:px-16 px-6">
        <ListingHeading />
        <div className="flex w-full pt-5">
          <ImageSlider />
          <ApplyForm />
        </div>
        <div className="flex-col">
          <h3 className="text-2xl font-semibold text-gray-700 mb-1">
            Apartment
          </h3>
          <span className="text-gray-700">
            3 Beds. 2 Baths. 50 m<sup>2</sup>
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Item;
