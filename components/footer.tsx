import React from "react";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

const Footer = (params) => {
  return (
    <footer className="bg-gray-100 flex flex-col px-8 sm:px-20">
      <div className="flex flex-row py-7 justify-between">
        <div>
          <h3>Company</h3>
        </div>
        <div>
          <h3>For Tenants</h3>
        </div>
        <div>
          {" "}
          <h3>For Landlords</h3>
        </div>
        <div>
          {" "}
          <h3>Work With Us</h3>
        </div>
      </div>
      <div className="flex w-full col-span-full py-6 text-gray-900 border-gray-300 border-t text-sm font-light justify-center sm:justify-between">
        <div>
          <span className="block sm:inline">
            © {new Date().getFullYear()} Prɔpati, Inc. All Right Reserved.
          </span>{" "}
          <div className="flex justify-center sm:inline">
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
        <div className="sm:flex d- hidden">
          <span>
            <Link href="#" passHref={true}>
              <ImFacebook size={18} />
            </Link>
          </span>
          <span className="px-6">
            <Link href="#" passHref={true}>
              <ImTwitter size={18} />
            </Link>
          </span>
          <span>
            <Link href="#" passHref={true}>
              <ImInstagram size={18} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
