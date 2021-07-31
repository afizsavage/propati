import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navlinks = ({ link, title }) => {
  const router = useRouter();

  return (
    <li className="mobileNavs">
      <Link href={link}>
        <a className={router.pathname == link ? " text-teal-600" : ""}>
          {title}
        </a>
      </Link>
    </li>
  );
};

const Userlinks = ({ link, title }) => {
  return (
    <li className="mobileUsaLink">
      <Link href={link}>
        <a>{title}</a>
      </Link>
    </li>
  );
};

const MobileNav = ({ menuOpen }) => {
  return (
    <div
      id="m  /* border-color: transparent transparent $color-secondary transparent; */
obileMenu"
      className={menuOpen ? "mobileMenu" : "mobileMenu -translate-y-full"}
    >
      <nav>
        <ul>
          <Navlinks link="/apartments" title="Rent" />
          <Navlinks link="/listings/listings-buy" title="Buy" />
        </ul>
      </nav>
      <hr className="mt-3 mb-3" />
      <ul className="">
        <Userlinks
          link="#"
          title={
            <div className="inline-flex items-center mb-2">
              <div className="text-white  font-semibold rounded-full w-9 h-9 flex justify-center items-center bg-teal-600 mr-4">
                JD
              </div>
              <span className="text-gray-800 font-semibold ">John Doe</span>
            </div>
          }
        />
        <Userlinks link="/messages/" title="Messages" />
        <Userlinks link="#" title="Properties" />
        <Userlinks link="#" title="Pay Rent" />
        <Userlinks link="#" title="Switch to Landlord" />
        <Userlinks link="/account/settings" title="Account Settings" />
        <Userlinks link="#" title="Help" />
        <Userlinks link="#" title="Logout" />
      </ul>
    </div>
  );
};

export default MobileNav;
