import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const SignUp = (params) => {
  return (
    <div className="bg-gray-100 pt-8 flex flex-col min-h-screen h-full">
      <button className="auth-close-btn">
        <IoMdClose className="text-3xl " />
      </button>
      <header className="w-full text-gray-800 flex justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign Up</h1>
      </header>
      <div className="flex flex-grow flex-col">
        <div className="shadow-2xl rounded mx-auto bg-white w-full md:w-1/3 border-solid border-t-4 border-teal-500 p-0 my-2">
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

            <button className="auth-submit-btn">Sign Up</button>
          </form>
        </div>
      </div>
      <footer className="flex justify-center pb-8">
        <div className="self-center sm:inline text-sm text-gray-400">
          <span>
            By signing up you agree to Prɔpati's{" "}
            <a className="text-teal-600 hover:underline" href="#">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="text-teal-600 hover:underline" href="#">
              Terms
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
