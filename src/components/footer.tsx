import React from "react";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

const Footer = (params) => {
  return (
    <footer className="w-full bg-gray-100 mt-5 flex flex-col px-8 md:px-10 lg:px-20 border-gray-300 border-t md:border-none">
      <div className="flex flex-col md:flex-row py-8 md:py-14 md:justify-between text-left">
        <div className="footerCols">
          <h3 className="font-semibold text-sm">Company</h3>
          <ul className="font-normal text-sm">
            <li className="mt-3">
              <Link href="#">
                <a>About Us</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerCols">
          <h3 className="font-semibold text-sm">For Tenants</h3>
          <ul className="font-normal text-sm">
            <li className="mt-3">
              <Link href="#">
                <a>Apply Online</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="#">
                <a> Schedule Tour</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerCols ">
          {" "}
          <h3 className="font-semibold text-sm">For Landlords</h3>
          <ul className="font-normal text-sm">
            <li className="mt-3">
              <Link href="#">
                <a>List A Property</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="#">
                <a>Arrange Online Tour</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/4 ">
          {" "}
          <h3 className="font-semibold text-sm">Work With Us</h3>
          <ul className="font-normal text-sm">
            <li className="mt-3">
              <Link href="#">
                <a>For Partners</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link href="#">
                <a>Advertise With Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse lg:flex-row col-span-full py-6 text-gray-900 border-gray-300 border-t text-sm font-light justify-center lg:justify-between">
        <div className="flex flex-col lg:flex-row md:pt-4 lg:pt-0">
          <span className="block sm:inline self-center">
            © {new Date().getFullYear()} Prɔpati, Inc. All Right Reserved.
          </span>{" "}
          <div className="self-center sm:inline">
            <span>
              <a className="px-5 hover:underline" href="#">
                Privacy
              </a>
            </span>
            <span>
              <a className=" hover:underline" href="#">
                Terms
              </a>
            </span>
          </div>
        </div>
        <div className="md:flex hidden justify-center">
          <span>
            <Link href="#">
              <ImFacebook
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            </Link>
          </span>
          <span className="px-6">
            <Link href="#">
              <ImTwitter
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            </Link>
          </span>
          <span>
            <Link href="#">
              <ImInstagram
                className="cursor-pointer hover:text-gray-600"
                size={18}
              />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
