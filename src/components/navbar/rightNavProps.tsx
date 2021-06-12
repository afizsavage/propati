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
      <div className="text-white font-semibold rounded-full w-8 h-8 flex justify-center items-center bg-blue-600">
        AS
      </div>
    </div>
  );
};

// user dropdown options
const userOptions: Array<TUserOptions> = [
  {
    // itemValue => 0
    title: "Messages",
    hyperLink: "/messages/",
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

// craete a JSX link component
const UserOptionsList = (option) => {
  return (
    <>
      <Link href={option.hyperLink}>
        <a className="block px-4 py-2 hover:bg-gray-100 ">{option.title}</a>
      </Link>
    </>
  );
};

// return an array of the JSX link component
let options = userOptions.map(UserOptionsList);

// create property button
const AddPropertyBtn = (params) => {
  return (
    <div className="mr-5 inline w-auto my-auto ">
      {" "}
      <Link href="/property">
        <a className="bg-white hover:bg-teal-400 text-sm font-bold rounded-full font-Lato w-auto h-10 px-3 flex justify-center items-center">
          Add Property
        </a>
      </Link>{" "}
    </div>
  );
};

// const Authenticate = (params) => {
//   return (
//     <>
//       {" "}
//       <AuthButtons href={"auth"} children={"Sign In"} />
//       <div className="ml-3 lg:ml-0 hidden lg:block relative text-base">
//         <div>
//           <span>|</span>
//           <AuthButtons href={"auth/sign-up"} children={"Sign Up"} />
//         </div>
//       </div>
//     </>
//   );
// };

// right side of the navigation bar components
const RightNavProps = (props) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <AddPropertyBtn />
      <UserButton
        buttonText={<UserPill />}
        styleContent="rounded-xl right-0 origin-top-left"
        listItems={options}
        changeBtnText={false}
      />
      {/* <Authenticate /> */}
    </div>
  );
};

export default RightNavProps;
