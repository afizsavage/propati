import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

import { CUser, InProps } from "../../interfaces/";
import SocialAuth from "../../components/auth/socialAuth";
import SubmitBtn from "./submitBtn";

export const InputField = (p: InProps) => {
  return (
    <div className="input-container">
      <input
        name={p.name}
        type={p.type}
        className={
          "auth-input " + p.customStyle + (!p.errors ? "" : "border-red-500")
        }
        placeholder={p.placeholder}
        ref={p.register}
        onChange={p.onChange}
        value={p.value}
      />
      <label
        htmlFor={p.name}
        className={"auth-label " + (!p.errors ? "" : "text-red-500 ")}
      >
        {p.label}
      </label>
    </div>
  );
};

// Chose between Login and Register form
const AuthOption = ({ page, authType }) => {
  {
    page !== "/auth" ? (authType = "Log in") : (authType = "Sign up");
  }

  return (
    <div className="self-center sm:inline text-sm text-gray-400 mt-2">
      <span className="transition duration-300 ease-in">
        {page !== "/auth"
          ? "Already have Prɔpati account?" + " "
          : "Dont't have Prɔpati account?" + " "}
        <Link href={page !== "/auth" ? "/auth" : "/auth/sign-up"}>
          <a className="auth-links">{authType}</a>
        </Link>
      </span>
    </div>
  );
};

// the form use conditional rendering to render login or signup form
const AuthForm = ({ onSubmit, loading }) => {
  const { register, errors, handleSubmit } = useForm<CUser>({
    mode: "all",
  });

  const router = useRouter();
  const page = router.pathname;

  const registerOptions = {
    firstName: {
      required: "Enter First Name",
      minLength: {
        value: 2,
        message: "First Name must have at least 2 characters",
      },
    },
    lastName: {
      required: "Enter Last Name",
      minLength: {
        value: 2,
        message: "Last Name must have at least 2 characters",
      },
    },
    email: {
      required: "Enter Email",
      pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
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
    email: {
      required: "Enter Email",
      pattern: {
        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Invalid Email address",
      },
    },
    password: {
      required: "Enter Password ",
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
            <SubmitBtn style loading={loading} btnText="Sign up" />
          </form>
        </div>
        <AuthOption authType page={page} />
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

            <SubmitBtn style loading={loading} btnText="Sign In" />
          </form>
        </div>
        <AuthOption authType page={page} />
      </div>
    );
  }
};

export default AuthForm;
