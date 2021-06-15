import React from "react";
import Link from "next/link";

const Navlinks = ({ link, title }) => {
  return (
    <li className="mobileNavs">
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const Userlinks = ({ link, title }) => {
  return (
    <li className="mobileNavs text-base">
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const MobileNav = ({ menuOpen }) => {
  return (
    <div
      className={
        menuOpen
          ? "bg-white block z-50 absolute w-full px-6 pb-28 pt-6 border-t border-opacity-50 border-gray-200  "
          : "hidden"
      }
    >
      <nav>
        <ul>
          <Navlinks link="#" title="Rent" />
          <Navlinks link="#" title="Buy" />
        </ul>
      </nav>
      <hr className="mt-6 mb-6" />
      <ul>
        <Userlinks
          link="#"
          title={
            <div className="inline-flex items-center mb-2">
              <div className="text-white  font-semibold rounded-full w-9 h-9 flex justify-center items-center bg-teal-600 mr-4">
                AS
              </div>
              <span className="text-gray-800 font-semibold ">Afiz Savage</span>
            </div>
          }
        />
        <Userlinks link="#" title="Messages" />
        <Userlinks link="#" title="Properties" />
        <Userlinks link="#" title="Pay Rent" />
        <Userlinks link="#" title="Switch to Landlord" />
        <Userlinks link="#" title="Account Settings" />
        <Userlinks link="#" title="Help" />
        <Userlinks link="#" title="Logout" />
      </ul>
    </div>
  );
};

export default MobileNav;
