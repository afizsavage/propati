import Link from "next/link";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { DropDown as UserButton } from "../utils/";

import AuthButtons from "./authLinks";

type TUserOptions = {
  title: string;
  hyperLink: string;
};

// user and account settings button
const UserPill = (params) => {
  return (
    <div className="bg-teal-400 py-1 px-2 rounded-full inline-flex hover:shadow-md font-Lato">
      <BiMenu className="my-auto mr-2 text-xl text-gray-700" />
      <div className="text-white font-semibold rounded-full w-8 h-8 flex justify-center items-center justify-center bg-blue-600">
        AS
      </div>
    </div>
  );
};

const Authenticate = (params) => {
  <>
    {" "}
    <AuthButtons href={"auth"} children={"Sign In"} />
    <div className="ml-3 lg:ml-0 hidden lg:block relative text-base">
      <div>
        <span>|</span>
        <AuthButtons href={"auth/sign-up"} children={"Sign Up"} />
      </div>
    </div>
  </>;
};

// user dropdown options
const userOptions: Array<TUserOptions> = [
  {
    // itemValue => 0
    title: "Messages",
    hyperLink: "#",
  },
  {
    // itemValue => 1
    title: "Properties",
    hyperLink: "#",
  },
  {
    // itemValue => 2
    title: "Pay Rent",
    hyperLink: "#",
  },
  {
    // itemValue => 3
    title: "Switch to Landord",
    hyperLink: "#",
  },
  {
    // itemValue => 4
    title: "Account Settings",
    hyperLink: "/account/settings",
  },
  {
    // itemValue => 5
    title: "Help",
    hyperLink: "#",
  },
  {
    // itemValue => 6
    title: "Logout",
    hyperLink: "#",
  },
];

// const UserOptionsList = () => {
//   return (
//     <>
//       {" "}
//       {userOptions.map((option) => (
//         <Link href={option.hyperLink}>
//           <a className="block px-4 py-2 hover:bg-gray-100 ">{option.title}</a>
//         </Link>
//       ))}
//     </>
//   );
// };

const options = [
  <Link href={userOptions[0].hyperLink}>
    <a className="block px-4 py-2 hover:bg-gray-100 ">{userOptions[0].title}</a>
  </Link>,
];

// create property button
const AddPropertyBtn = (params) => {
  return (
    <div>
      {" "}
      <Link href="/property">
        <a className="bg-teal-400 py-2 font-bold leading-6 text-black text-sm px-2 rounded-full inline-flex font-Lato hover:shadow-md">
          Add Property{" "}
        </a>
      </Link>{" "}
    </div>
  );
};

// right side of the navigation bar components
const RightNavProps = (props) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <AddPropertyBtn />
      <UserButton
        button={<UserPill />}
        customStyle="rounded-xl right-0 origin-top-left"
        handleOptionClick={() => console.log("clicked")}
        listItems={options}
      />
    </div>
  );
};

export default RightNavProps;
