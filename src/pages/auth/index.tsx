import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import {CloseBtn} from "../../components/auth/";
import { AUser } from "../../interfaces/";
import { LoginUser } from "../../graphql/mutations";
import SocialAuth from "../../components/auth/socialAuth";
import { SubmitBtn } from "../../components/auth";

const SignIn = (params) => {
  const { register, handleSubmit } = useForm<AUser>();
  const [loginUser, { loading, error }] = useMutation(LoginUser);
  const router = useRouter();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    const { email, password } = data;

    loginUser({
      variables: {
        email: email,
        password: password,
      },
    })
      .then((params) => {
        router.push("/");
      })
      .catch((params) => alert("some error"));
  };

  if (loading) return <p>loading</p>;
  if (error) return <p>An error occurred</p>;

  return (
    <div className="bg-gray-100 pt-9 flex flex-col min-h-screen h-auto w-screen">
      <CloseBtn />
      <header className="hidden lg:flex w-full text-gray-800 justify-center py-5 my-1">
        <h1 className="font-lato  text-5xl font-bold ">Sign In</h1>
      </header>
      <div className="flex flex-grow flex-col">
        <div className="auth-card">
          <form id="signupForm" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8">
              <SocialAuth btnText={"Log in with Google"} />
              <div className="w-full text-center text-gray-400 py-4 text-sm">
                {" "}
                or with email
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
            <SubmitBtn btnText="Sign In" />
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
