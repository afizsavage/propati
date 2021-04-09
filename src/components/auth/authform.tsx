import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { CUser, InProps } from "../../interfaces/";
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

const InputField = ({ register, placeholder, type, name, label, errors }) => {
  return (
    <div className="input-container">
      <input
        name={name}
        type={type}
        className={"auth-input " + (!errors ? "" : "border-red-500")}
        placeholder={placeholder}
        ref={register}
      />
      <label
        htmlFor={name}
        className={"auth-label " + (!errors ? "" : "text-red-500 ")}
      >
        {label}
      </label>
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
  const { register, errors, handleSubmit } = useForm<CUser>({
    mode: "all",
  });

  const router = useRouter();
  const page = router.pathname;

  const registerOptions = {
    firstName: { required: "Enter First Name" },
    lastName: { required: "Enter Last Name" },
    email: {
      required: "Enter Email",
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: "Invalid Email address",
      },
    },
    password: {
      required: "Enter Password ",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };

  const loginOptions = {
    email: { required: "Enter Email" },
    password: {
      required: "Enter Password ",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };

  if (page === "/auth/sign-up") {
    return (
      <div className="flex flex-grow flex-col">
        <div
          className="auth-card 
        "
        >
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
                placeholder={"First Name "}
                register={register(registerOptions.firstName)}
                label={
                  errors.firstName ? errors.firstName.message : "First Name"
                }
                errors={errors.firstName}
              />

              <InputField
                name={"lastName"}
                type={"text"}
                placeholder={"Last Name "}
                register={register(registerOptions.lastName)}
                label={errors.lastName ? errors.lastName.message : "Last Name"}
                errors={errors.lastName}
              />
              <InputField
                name={"email"}
                type={"email"}
                placeholder={"Email "}
                register={register(registerOptions.email)}
                label={errors.email ? errors.email.message : "Email"}
                errors={errors.email}
              />
              <InputField
                name={"password"}
                type={"password"}
                placeholder={"Password "}
                register={register(registerOptions.password)}
                label={errors.password ? errors.password.message : "Password"}
                errors={errors.password}
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
        <div
          className="auth-card 
        "
        >
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
                placeholder={"Email "}
                register={register(loginOptions.email)}
                label={errors.email ? errors.email.message : "Email"}
                errors={errors.email}
              />
              <InputField
                name={"password"}
                type={"password"}
                placeholder={"Password "}
                register={register(loginOptions.password)}
                label={errors.password ? errors.password.message : "Password"}
                errors={errors.password}
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
