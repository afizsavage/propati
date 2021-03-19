import React, { useState, FC, ReactElement } from "react";

const SignUp = (params) => {
  const [serviceType, setServiceType] = useState(null);
  return (
    <div className="w-screen h-screen">
      <div className="w-full flex">
        <div className="shadow-2xl  rounded mx-auto to w-full md:w-1/3 border-solid border-t-4 border-teal-500 p-0 my-2">
          <form id="signupForm" className="">
            <div className="p-8">
              <div className="w-full input-container">
                <input
                  type="text"
                  className="auth-input"
                  placeholder="First Name"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="text"
                  className="auth-input"
                  placeholder="Last Name"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="email"
                  className="auth-input"
                  placeholder="Email"
                />
              </div>
              <div className="w-full input-container ">
                <input
                  type="password"
                  className="auth-input"
                  placeholder="Password"
                />
              </div>
            </div>

            <button className="auth-submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
