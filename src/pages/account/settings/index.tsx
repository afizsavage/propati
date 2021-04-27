// user account settings page

import React, { useState } from "react";
import Footer from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

const AccountSettings = () => {

  const hiddenFileInput = React.useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
	const [isFilePicked, setIsFilePicked] = useState(false);

  // handle the hidden input field trigger
  const handleInputTrigger = event => {
    hiddenFileInput.current.click();
  };

  // handles the 
	const changeHandler = (event: any) => {
		setSelectedFile(URL.createObjectURL(event.target.files[0]));
	};

  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />

      {/* main container */}
      <div className="bg-gray-200 min-h-screen">
        <div className="static bg-blue-500 h-72">
          <h1>banner</h1>

          <div className="absolute mt-44 min-w-full">
            <div className="flex space-x-10 mx-20">

              {/* left card */}
              <div className="bg-white w-3/12 rounded-md p-4 h-auto">
                <div className="rounded-full relative h-44 w-44 -mt-2 mx-auto">
                  <img
                    className="bg-contain text-center rounded-full h-44 w-44" 
                    src={!selectedFile ? "/images/user-male.png" : selectedFile}
                    alt="user-profile-pic"/>
                  <div 
                    onClick={handleInputTrigger}
                    className="absolute bg-red-400 -ml-10 bottom-0 right-4 inset-y-25 rounded-full h-10 w-10 content-center cursor-pointer">
                    <svg aria-hidden="true" data-prefix="far" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-camera fa-w-16 fa-7x w-6 h-6 mx-auto my-2 text-white"><path fill="currentColor" d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"></path>
                    </svg>
                    {/* profile pic file input */}
                    <input type="file" name="profile_pic" className="hidden" 
                    ref={hiddenFileInput} onChange={changeHandler} />
                  </div>
                </div>

                {/* name and status section */}
                <div className="text-center my-8">
                  <h2 className="text-2xl text-gray-700">John Emric Doe</h2>
                  <p className="text-lg text-gray-500">Landlord</p>
                </div>
                
                {/* divider section */}
                <div className="px-2">
                  <div className="border-t-2 border-gray-100"></div>
                  <div className="flex justify-between py-4">
                    <h4 className="text-gray-500 font-semibold">Properties Owner</h4>
                    <p className="text-yellow-500 font-bold">32</p>
                  </div>
                  <div className="border-t-2 border-gray-100"></div>
                  <div className="flex justify-between py-4">
                    <h4 className="text-gray-500 font-semibold">Properties Sold</h4>
                    <p className="text-green-500 font-bold">26</p>
                  </div>
                  <div className="border-t-2 border-gray-100"></div>
                  <div className="flex justify-between py-4">
                    <h4 className="text-gray-500 font-semibold">Currently Available</h4>
                    <p className="text-gray-500 font-bold">6</p>
                  </div>
                  <div className="border-t-2 border-gray-100"></div>
                </div>
                {/* end of the divider section */}


              </div>

              {/* right card */}
              <div className="bg-gray-400 w-9/12 rounded-md p-4 h-96">
                <div>
                  <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select a tab</label>
                    <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                      <option>My Account</option>

                      <option>Company</option>

                      <option selected>Team Members</option>

                      <option>Billing</option>
                    </select>
                  </div>
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                          My Account
                        </a>

                        <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                          Company
                        </a>

                        <a href="#" className="border-indigo-500 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" aria-current="page">
                          Team Members
                        </a>

                        <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
                          Billing
                        </a>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>

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
