import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

import SocialAuth from "../../components/auth/socialAuth";

const SignIn = (params) => {
  return (
    <div className="bg-gray-100 pt-9 flex flex-col min-h-screen h-full w-screen">
      <button className="auth-close-btn">
        <IoMdClose className="text-3xl " />
      </button>
      <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign In</h1>
      </header>
      <div className="flex flex-grow flex-col">
        <div className="auth-card">
          <form id="signupForm" className="">
            <div className="p-8">
              <SocialAuth btnText={"Log in with Google"} />
              <div className="w-full text-center text-gray-400 py-4 text-sm">
                {" "}
                or with email
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
        <div className="self-center sm:inline text-sm text-gray-400 mt-2">
          <span className="transition duration-300 ease-in">
            Don't have Prɔpati account?{" "}
            <Link href="/auth/sign-up">
              <a className="auth-links">Sign Up</a>
            </Link>
          </span>
        </div>
      </div>
      <footer className="flex justify-center pb-8">
        <div className="self-center sm:inline text-sm text-gray-400">
          <span className="transition duration-300 ease-in">
            By signing up you agree to Prɔpati's{" "}
            <a className="auth-links" href="#">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a className="auth-links" href="#">
              Terms
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
