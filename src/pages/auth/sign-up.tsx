import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { CUser } from "../../interfaces/";
import { useMutation } from "@apollo/client";
import Link from "next/link";

import CreateUser from "../../graphql/mutations";

const SignUp = () => {
  const { register, handleSubmit } = useForm<CUser>();
  const [createUser] = useMutation(CreateUser);

  const onSubmit = (data: any, e: any) => {
    e.preventDefault();

    const { firstName, lastname, email, password } = data;
    console.log(data.email);
  };

  return (
    <div className="bg-gray-100 pt-9 flex flex-col min-h-screen h-full w-screen">
      <button className="auth-close-btn">
        <IoMdClose className="text-3xl " />
      </button>
      <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign Up</h1>
      </header>
      <div className="flex flex-grow flex-col">
        <div className="shadow-2xl rounded mx-auto bg-white w-full md:w-1/3 border-solid border-t-4 border-teal-500 p-0 my-2">
          <form id="signupForm" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8">
              <div className="w-full input-container">
                <input
                  name="firstname"
                  type="text"
                  className="auth-input"
                  placeholder="First Name"
                  ref={register}
                />
              </div>
              <div className="w-full input-container ">
                <input
                  name="lastname"
                  type="text"
                  className="auth-input"
                  placeholder="Last Name"
                  ref={register}
                />
              </div>
              <div className="w-full input-container ">
                <input
                  name="email"
                  type="email"
                  className="auth-input"
                  placeholder="Email"
                  ref={register}
                />
              </div>
              <div className="w-full input-container ">
                <input
                  name="password"
                  type="password"
                  className="auth-input"
                  placeholder="Password"
                  ref={register}
                />
              </div>
            </div>

            <button type="submit" className="auth-submit-btn">
              Sign Up
            </button>
          </form>
        </div>
        <div className="self-center sm:inline text-sm text-gray-400 mt-2">
          <span className="transition duration-300 ease-in">
            Already have Prɔpati account? <a className="auth-links">Log in</a>
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

export default SignUp;
