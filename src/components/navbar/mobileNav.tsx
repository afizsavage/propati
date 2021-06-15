import React from "react";
import Link from "next/link";

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
          <li className="mobileNavs">
            <Link href="#">
              <a>Rent</a>
            </Link>
          </li>
          <li className="mobileNavs">
            <Link href="#">
              <a>Buy</a>
            </Link>{" "}
          </li>
        </ul>
      </nav>
      <ul></ul>
    </div>
  );
};

export default MobileNav;
