import React from "react";
import { BiMenu } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import Dropdown from "../dropDown";

import AuthButtons from "./authLinks";

const UserPill = (params) => {
  return (
    <div className="bg-red-200 py-1 px-2 rounded-full inline-flex hover:shadow-md">
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

const userOptions = [
  "Messages",
  "Properties",
  "Pay Rent",
  "Switch to Landord",
  "Account Settings",
  "Help",
  "Logout",
];

const ListItems = () => {
  return (
    <>
      {" "}
      {userOptions.map((option, icon: any) => (
        <li
          className="block px-4 py-2 hover:bg-gray-100 userList"
          onClick={() => console.log("clicked")}
          key={userOptions.indexOf(option)}
        >
          {option}
          {/* {option === "Messages" ? (icon = [<BiLogOut />, option]) : option} */}
        </li>
      ))}
    </>
  );
};

const RightNavProps = (props) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Dropdown
        button={<UserPill />}
        customStyle="rounded-xl right-0 origin-top-left"
        handleOptionClick={() => console.log("clicked")}
        listItems={<ListItems />}
      />
    </div>
  );
};

export default RightNavProps;
