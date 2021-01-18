import React from "react";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import Link from "next/link";

const Footer = (params) => {
  return (
    <footer className="bg-gray-200 flex px-8 sm:px-20">
      <div className="flex w-full py-6 text-gray-900 border-gray-500 text-sm font-light justify-center sm:justify-between">
        <div>
          <span className="block sm:inline">
            © {new Date().getFullYear()} Propati, Inc. All Right Reserved.
          </span>{" "}
          <div className="flex justify-center sm:inline">
            <span>
              <a className="px-5" href="#">
                Privacy.
              </a>
            </span>
            <span>
              <a className="" href="#">
                Terms.
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
