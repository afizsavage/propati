import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import CloseBtn from "../../components/auth/closebtn";
import { AUser } from "../../interfaces/";
import { RegisterUser } from "../../graphql/mutations";
import SocialAuth from "../../components/auth/socialAuth";

const SignIn = (params) => {
  const { register, handleSubmit } = useForm<AUser>();
  const [registerUser, { loading, error }] = useMutation(RegisterUser);
  const router = useRouter();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    const { email, password } = data;

    registerUser({
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
    <div className="bg-gray-100 pt-9 flex flex-col min-h-screen h-full w-screen">
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

            <button type="submit" className="auth-submit-btn ">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                  className="opacity-25"
                />
              </svg>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
              Sign Up
            </button>
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
