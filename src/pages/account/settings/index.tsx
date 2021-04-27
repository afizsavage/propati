// user account settings page

import React from "react";
import Footer from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

const AccountSettings = () => {

  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />

      {/* main container */}
      <div className="bg-gray-200 min-h-screen">
        <div className="static bg-blue-500 h-72">
          <h1>banner</h1>

          <div className="absolute mt-44 min-w-full">
            <div className="flex space-x-10 h-60 mx-20">

              {/* left card */}
              <div className="bg-white w-3/12 rounded-md p-4">
                <div className="rounded-full relative h-44 w-44 mt-4 mx-auto">
                  <img
                    className="bg-contain text-center rounded-full" 
                    src="/images/user-male.png" 
                    alt="user-profile-pic"/>
                  <div className="absolute bg-red-400 -ml-10 bottom-0 right-4 inset-y-25 rounded-full h-10 w-10 content-center">
                    <svg aria-hidden="true" data-prefix="far" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-camera fa-w-16 fa-7x w-6 h-6 mx-auto my-2 text-white"><path fill="currentColor" d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {/* right card */}
              <div className="bg-gray-400 w-9/12 rounded-md p-4">card 2</div>
            </div>
          </div>
        </div>
      </div>
      {/* end of main container */}

      <Footer />
    </div>
  );
}

export default AccountSettings
