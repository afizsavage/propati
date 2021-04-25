import React from "react";
import { BiMenu } from "react-icons/bi";
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
    <div className="ml-3 lg:ml-0 hidden lg:block relative">
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

const RightNavProps = (props) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <Dropdown
        button={<UserPill />}
        customStyle="rounded-xl right-0 origin-top-left"
        optionsList={userOptions}
        handleOptionClick={() => console.log("clicked")}
      />
    </div>
  );
};

export default RightNavProps;
