import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { CUser } from "../../interfaces/";
import SocialAuth from "../../components/auth/socialAuth";

// Auth forms submit btn
const SubmitBtn = ({ btnText, loading }) => {
  return (
    <button type="submit" className="authSubmitBtn ">
      <svg
        className={
          loading ? "animate-spin my-auto h-6 w-6 text-white" : "hidden"
        }
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      <span className={loading ? "hidden" : "my-auto static"}>{btnText}</span>
    </button>
  );
};

const InputField = ({ register, placeholder, type, name }) => {
  return (
    <div className="w-full input-container">
      <input
        name={name}
        type={type}
        className="auth-input"
        placeholder={placeholder}
        ref={register}
      />
    </div>
  );
};

const AuthOption = ({ page }) => {
  if (page === "/auth/sign-up") {
    return (
      <div className="self-center sm:inline text-sm text-gray-400 mt-2">
        <span className="transition duration-300 ease-in">
          Already have Prɔpati account?{" "}
          <Link href="/auth">
            <a className="auth-links">Log in</a>
          </Link>
        </span>
      </div>
    );
  } else {
    return (
      <div className="self-center sm:inline text-sm text-gray-400 mt-2">
        <span className="transition duration-300 ease-in">
          Don't have Prɔpati account?{" "}
          <Link href="/auth/sign-up">
            <a className="auth-links">Sign up</a>
          </Link>
        </span>
      </div>
    );
  }
};

export const AuthForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit } = useForm<CUser>();
  const router = useRouter();
  const page = router.pathname;
  if (page === "/auth/sign-up") {
    return (
      <div className="flex flex-grow flex-col">
        <div className="auth-card">
          <form id="signupForm" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8">
              <SocialAuth
                btnIcon={<FcGoogle />}
                btnText={"Sign up with Google"}
              />
              <div className="w-full text-center text-gray-400 py-4 text-sm">
                {" "}
                or with email
              </div>
              <InputField
                name={"firstName"}
                type={"text"}
                placeholder={"Enter First Name"}
                register={register}
              />
              <InputField
                name={"lastName"}
                type={"text"}
                placeholder={"Enter Last Name"}
                register={register}
              />
              <InputField
                name={"email"}
                type={"email"}
                placeholder={"Enter Email"}
                register={register}
              />
              <InputField
                name={"password"}
                type={"password"}
                placeholder={"Enter Password"}
                register={register}
              />
            </div>
            <SubmitBtn loading={loading} btnText="Sign up" />
          </form>
        </div>
        <AuthOption page={page} />
      </div>
    );
  } else {
    return (
      <div className="flex flex-grow flex-col">
        <div className="auth-card">
          <form id="signupForm" className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="p-8">
              <SocialAuth
                btnIcon={<FcGoogle />}
                btnText={"Sign up with Google"}
              />
              <div className="w-full text-center text-gray-400 py-4 text-sm">
                {" "}
                or with email
              </div>
              <InputField
                name={"email"}
                type={"email"}
                placeholder={"Enter Email"}
                register={register}
              />
              <InputField
                name={"password"}
                type={"password"}
                placeholder={"Enter Password"}
                register={register}
              />
              <div className="mt-4 inline-flex justify-end w-full">
                <Link href="/auth/sign-up">
                  <a className="auth-links">Forgot your password?</a>
                </Link>
              </div>
            </div>

            <SubmitBtn loading={loading} btnText="Sign In" />
          </form>
        </div>
        <AuthOption page={page} />
      </div>
    );
  }
};
