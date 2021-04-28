// user account settings page

import React, { useState } from "react";
import Footer from "../../../components/footer";
import { Navbar } from "../../../components/navbar";

const AccountSettings = () => {

  const url = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' %3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%2380F'/%3E%3Cstop offset='1' stop-color='%23f40'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpattern id='b' width='24' height='24' patternUnits='userSpaceOnUse'%3E%3Ccircle fill='%23ffffff' cx='12' cy='12' r='12'/%3E%3C/pattern%3E%3Crect width='100%25' height='100%25' fill='url(%23a)'/%3E%3Crect width='100%25' height='100%25' fill='url(%23b)' fill-opacity='0.1'/%3E%3C/svg%3E";

  const hiddenFileInput = React.useRef(null);
  const [profilePic, setProfilePic] = useState(null);
  const [coverPic, setCoverPic] = useState(url);
  const [initiator, setInitiator] = useState<number>();
  const [activeTab, setActiveTab] = useState<number>(0);
	const [isFilePicked, setIsFilePicked] = useState(false);

  const activeTabStyle: string = "border-green-500 text-green-600 hover:text-gray-700  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer";
  const inactiveTabStyle: string = "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer";

  // handle the hidden input field trigger
  const handleInputTrigger = (value: number) => {
    setInitiator(value)
    hiddenFileInput.current.click();
  };

  // handles the 
	const changeHandler = (event: any) => {
    // cover pic is caller 0
    if(initiator === 0) {
      setCoverPic(URL.createObjectURL(event.target.files[0]));
    }

    // profile pic is caller 1
    if (initiator === 1) {
      setProfilePic(URL.createObjectURL(event.target.files[0]));
    }
		
	};

  // handle tabs 
  const changeTabHandler = (value: number) => {
    setActiveTab(value);
  }

  return (
    <div className="flex flex-col min-h-screen h-full">
      <Navbar />
      {/* bg-gradient-to-r from-green-500 via-green-400 to-green-300 */}
      {/* main container */}
      <div className="bg-gray-200 min-h-screen">
        <div className="static h-72 w-full"
        style={{  
          backgroundImage: "url(" + "/images/default_cover_pic_2.jpg" + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          objectFit: 'contain'
        }}
        >
            <button 
              onClick={() => handleInputTrigger(0)}
              className="absolute right-20 mt-6 bg-green-600 hover:bg-green-700 inline-flex rounded w-40 h-10 p-2 text-center text-white cursor-pointer">
              <svg aria-hidden="true" data-prefix="far" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-camera fa-w-16 fa-7x w-6 h-6 mx-auto text-white"><path fill="currentColor" d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"></path>
              </svg>
              Change Cover
              {/* cover pic file input */}
              <input type="file" name="cover_pic" className="hidden" 
              ref={hiddenFileInput} onChange={() => changeHandler} />
            </button>

          <div className="absolute mt-52 min-w-full">
            <div className="flex space-x-10 mx-20">

              {/* left card */}
              <div className="bg-white w-3/12 rounded-md p-4 h-auto">
                <div className="rounded-full relative h-44 w-44 -mt-2 mx-auto">
                  <img
                    className="bg-contain text-center rounded-full h-44 w-44" 
                    src={!profilePic ? "/images/user-male.png" : profilePic}
                    alt="user-profile-pic"/>
                  <div 
                    onClick={() => handleInputTrigger(1)}
                    className="absolute bg-green-500 hover:bg-green-600 -ml-10 bottom-0 right-4 inset-y-25 rounded-full h-10 w-10 content-center cursor-pointer">
                    <svg aria-hidden="true" data-prefix="far" data-icon="camera" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-camera fa-w-16 fa-7x w-6 h-6 mx-auto my-2 text-white"><path fill="currentColor" d="M342.7 144H464v288H48V144h121.3l24-64h125.5l23.9 64zM324.3 32h-131c-20 0-37.9 12.4-44.9 31.1L136 96H48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-88l-14.3-38c-5.8-15.7-20.7-26-37.4-26zM256 408c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-192c-39.7 0-72 32.3-72 72s32.3 72 72 72 72-32.3 72-72-32.3-72-72-72z"></path>
                    </svg>
                    {/* profile pic file input */}
                    <input type="file" name="profile_pic" className="hidden" 
                    ref={hiddenFileInput} onChange={() => changeHandler(1)} />
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
                    <h4 className="text-gray-500 font-semibold">Properties Owned</h4>
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
              <div className="bg-white w-9/12 rounded-md p-4 h-auto">
                <div>
                  {/* for small devices tabs */}
                  <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">Select a tab</label>
                    <select id="tabs" name="tabs" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-green-500 sm:text-sm rounded-md">
                      <option selected>My Account</option>

                      <option>Billing</option>

                      <option>Notifications</option>

                    </select>
                  </div>

                  {/* md and lg devices tabs */}
                  <div className="hidden sm:block">
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        <a 
                          onClick={() => changeTabHandler(0)} 
                          className={activeTab === 0? activeTabStyle : inactiveTabStyle}>
                          My Account
                        </a>

                        <a 
                          onClick={() => changeTabHandler(1)} 
                          className={activeTab === 1? activeTabStyle : inactiveTabStyle}>
                          Billing
                        </a>

                        <a 
                          onClick={() => changeTabHandler(2)} 
                          className={activeTab === 2? activeTabStyle : inactiveTabStyle}>
                          Notifications
                        </a>
                      </nav>
                    </div>
                  </div>

                  {/* tab content */}
                  <div className="mt-5 md:mt-0 md:col-span-2">

                    {activeTab === 1? 
                    // {/* billing settings form */}
                    <>
                      <div>
                        {/* cards */}
                        <div className="flex space-x-20 p-4">
                          {/* card 1 */}
                          <div className="bg-black h-80 w-1/2 rounded-md p-8">
                            <div className="flex justify-between text-center">
                              <span className="h-12 w-20">
                              <svg 
                              className="-mt-1 mx-auto bg-yellow-200 rounded-md h-12 w-20"
                              clip-rule="evenodd" fill-rule="evenodd" viewBox="0 0 560 400" xmlns="http://www.w3.org/2000/svg"><path d="m286.87 176.71c-.228 17.993 16.036 28.034 28.287 34.004 12.588 6.126 16.816 10.054 16.768 15.531-.096 8.384-10.042 12.083-19.35 12.227-16.24.252-25.681-4.384-33.188-7.891l-5.849 27.373c7.531 3.472 21.476 6.499 35.938 6.631 33.944 0 56.152-16.756 56.273-42.736.132-32.971-45.607-34.797-45.295-49.535.108-4.468 4.372-9.237 13.717-10.45 4.624-.612 17.392-1.081 31.866 5.585l5.681-26.484c-7.783-2.835-17.789-5.55-30.244-5.55-31.95 0-54.423 16.984-54.604 41.295m139.44-39.013c-6.198 0-11.423 3.616-13.753 9.165l-48.49 115.777h33.92l6.75-18.654h41.451l3.916 18.654h29.896l-26.089-124.942zm4.744 33.752 9.789 46.916h-26.809zm-185.31-33.752-26.737 124.942h32.322l26.725-124.942zm-47.817 0-33.644 85.04-13.609-72.308c-1.597-8.071-7.903-12.732-14.906-12.732h-54.999l-.769 3.628c11.291 2.45 24.119 6.402 31.89 10.63 4.756 2.582 6.114 4.84 7.675 10.978l25.776 99.706h34.161l52.369-124.942z" fill="#1a1f71"/></svg>
                              </span>
                              <span className="bg-green-500 text-white font-semibold rounded-md p-3 h-12 w-24">Active</span>
                            </div>
                            <div className="pt-8 text-white w-full">
                              <img className="w-14" src="/images/card_chip.png" alt="card_chip"/>
                              <p className="flex-1 pt-2 text-3xl font-semibold tracking-widest">4358 - 7421 - 9256 - 6682</p>
                            </div>
                            <div className="flex pt-8 text-white w-full">
                              <div className="w-1/2">
                                <h5 className="font-light text-md">NAME</h5>
                                <p className="font-semibold tracking-widest">John Doe</p>
                              </div>
                              <div className="w-1/2">
                                <h5 className="font-light text-md">EXPIRY DATE</h5>
                                  <p className="font-semibold tracking-widest">11/23</p>
                                </div>
                            </div>                 
                          </div>

                          {/* card 2 */}
                          <div className="bg-indigo-600 h-80 w-1/2 rounded-md p-8">
                            <div className="flex justify-between text-center">
                              <span className="h-12 w-20">
                                <img src="/images/master_card.png" alt="master-card-pic" />
                              </span>
                              <span className="bg-gray-400 text-white font-semibold rounded-md p-3 h-12 w-24">Inactive</span>
                            </div>
                            <div className="pt-8 text-white w-full">
                              <img className="w-14" src="/images/card_chip.png" alt="card_chip"/>
                              <p className="flex-1 pt-2 text-3xl font-semibold tracking-widest">5399 - 7421 - 9256 - 6682</p>
                            </div>
                            <div className="flex pt-8 text-white w-full">
                              <div className="w-1/2">
                                <h5 className="font-light text-md">NAME</h5>
                                <p className="font-semibold tracking-widest">John Doe</p>
                              </div>
                              <div className="w-1/2">
                                <h5 className="font-light text-md">EXPIRY DATE</h5>
                                  <p className="font-semibold tracking-widest">11/23</p>
                                </div>
                            </div>                 
                          </div>
                        </div>
                      
                        <div className="flex-1 w-full">
                          <h3 className="p-3 text-gray-500 font-bold">Add / Update Card</h3>
                          <form action="#" method="POST">
                            <div className="px-4 py-5 sm:p-6">
                              <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="card_number" className="block text-sm font-medium text-gray-700">Card Number</label>
                                  <input type="text" name="card_number" id="card_number" autoComplete="card_number" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="name_on_card" className="block text-sm font-medium text-gray-700">Name On Card</label>
                                  <input type="text" name="name_on_card" id="name_on_card" autoComplete="name_on_card" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="expiry_date" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                                  <input type="text" name="expiry_date" id="expiry_date" autoComplete="expiry_date" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                  <label htmlFor="ccv_number" className="block text-sm font-medium text-gray-700">CCV Number</label>
                                  <input type="text" name="ccv_number" id="ccv_number" autoComplete="ccv_number" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>

                    </>

                    :activeTab === 2?
                    // {/* notification settings form */}
                    <>
                    <h1>notificaions</h1>
                    </>
                    : 
                    // {/* account settings form */}
                    <>
                    <form action="#" method="POST">
                      <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="given_name" className="block text-sm font-medium text-gray-700">Given Names</label>
                            <input type="text" name="given_name" id="given_name" autoComplete="given-name" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <input type="text" name="username" id="username" autoComplete="username" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" name="phone_number" id="phone_number" autoComplete="phone-number" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" name="email" id="email" autoComplete="given-name" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 focus:outline-none focus:border-green-500 rounded-md" />
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                            <select id="country" name="country" autoComplete="country" className="mt-2 block w-full h-12 p-4 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-green-500 sm:text-sm">
                              <option>United States</option>
                              <option>Canada</option>
                              <option>Mexico</option>
                            </select>
                          </div>

                          <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            <input type="text" name="city" id="city" autoComplete="city" className="mt-2 p-4 border block w-full h-12 shadow-sm sm:text-sm border-gray-300 rounded-md focus:outline-none focus:border-green-500" />
                          </div>
                        </div>
                      </div>

                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
                          Update
                        </button>
                      </div>
                    </form>
                    </>
                    }
                  </div>
                  {/* end of tab content */}

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




                      {/* <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                          <div class="md:col-span-1">
                            <div class="px-4 sm:px-0">
                              <h3 class="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                              <p class="mt-1 text-sm text-gray-600">
                                Decide which communications you'd like to receive and how.
                              </p>
                            </div>
                          </div>
                          <div class="mt-5 md:mt-0 md:col-span-2">
                            <form action="#" method="POST">
                              <div class="shadow overflow-hidden sm:rounded-md">
                                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                                  <fieldset>
                                    <legend class="text-base font-medium text-gray-900">By Email</legend>
                                    <div class="mt-4 space-y-4">
                                      <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                          <input id="comments" name="comments" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                          <label for="comments" class="font-medium text-gray-700">Comments</label>
                                          <p class="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                                        </div>
                                      </div>
                                      <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                          <input id="candidates" name="candidates" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                          <label for="candidates" class="font-medium text-gray-700">Candidates</label>
                                          <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                                        </div>
                                      </div>
                                      <div class="flex items-start">
                                        <div class="flex items-center h-5">
                                          <input id="offers" name="offers" type="checkbox" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded">
                                        </div>
                                        <div class="ml-3 text-sm">
                                          <label for="offers" class="font-medium text-gray-700">Offers</label>
                                          <p class="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                                        </div>
                                      </div>
                                    </div>
                                  </fieldset>
                                  <fieldset>
                                    <div>
                                      <legend class="text-base font-medium text-gray-900">Push Notifications</legend>
                                      <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
                                    </div>
                                    <div class="mt-4 space-y-4">
                                      <div class="flex items-center">
                                        <input id="push_everything" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push_everything" class="ml-3 block text-sm font-medium text-gray-700">
                                          Everything
                                        </label>
                                      </div>
                                      <div class="flex items-center">
                                        <input id="push_email" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push_email" class="ml-3 block text-sm font-medium text-gray-700">
                                          Same as email
                                        </label>
                                      </div>
                                      <div class="flex items-center">
                                        <input id="push_nothing" name="push_notifications" type="radio" class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300">
                                        <label for="push_nothing" class="ml-3 block text-sm font-medium text-gray-700">
                                          No push notifications
                                        </label>
                                      </div>
                                    </div>
                                  </fieldset>
                                </div>
                                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                  <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Save
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div> */}
