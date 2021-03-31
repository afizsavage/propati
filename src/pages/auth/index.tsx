import Link from "next/link";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import localForage from "localforage";

import { AUser } from "../../interfaces/";
import { LoginUser } from "../../graphql/mutations";
import SocialAuth from "../../components/auth/socialAuth";
import { SubmitBtn } from "../../components/auth";
import AuthLayout from "../../components/auth/layout";

const SignIn = (params) => {
  const { register, handleSubmit } = useForm<AUser>();
  const router = useRouter();

  const [loginUser, { loading, error }] = useMutation(LoginUser, {
    onCompleted({ signIn }) {
      localForage.setItem("userToken", signIn.token);
      router.push("/");
    },
  });

  const onSubmit = async (payload: any, e: any) => {
    e.preventDefault();

    const { email, password } = payload;

    loginUser({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  if (error) return <p>An error occurred</p>;

  return (
    <AuthLayout
      Children={
        <div className="flex flex-grow flex-col">
          <div className="auth-card">
            <form
              id="signupForm"
              className=""
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="p-8">
                <SocialAuth
                  btnIcon={<FcGoogle />}
                  btnText={"Log in with Google"}
                />
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
              <SubmitBtn btnText="Sign In" loading={loading} />
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
      }
    />
  );
};

export default SignIn;
