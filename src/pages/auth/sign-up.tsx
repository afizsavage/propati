import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";

import { CUser } from "../../interfaces/";
import { CreateUser } from "../../graphql/mutations";
import SocialAuth from "../../components/auth/socialAuth";
import { SubmitBtn } from "../../components/auth";
import AuthLayout from "../../components/auth/layout";

const SignUp = () => {
  const { register, handleSubmit } = useForm<CUser>();
  const [createUser, { loading, error }] = useMutation(CreateUser);
  const router = useRouter();

  const onSubmit = async (data: any, e: any) => {
    e.preventDefault();

    const { firstName, lastName, email, password } = data;

    createUser({
      variables: {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      },
    }).then((params) => {
      router.push("/");
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
                <SocialAuth btnText={"Sign up with Google"} />
                <div className="w-full text-center text-gray-400 py-4 text-sm">
                  {" "}
                  or with email
                </div>
                <div className="w-full input-container">
                  <input
                    name="firstName"
                    type="text"
                    className="auth-input"
                    placeholder="First Name"
                    ref={register}
                  />
                </div>
                <div className="w-full input-container ">
                  <input
                    name="lastName"
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

              <SubmitBtn loading={loading} btnText="Sign up" />
            </form>
          </div>
          <div className="self-center sm:inline text-sm text-gray-400 mt-2">
            <span className="transition duration-300 ease-in">
              Already have Prɔpati account?{" "}
              <Link href="/auth">
                <a className="auth-links">Log in</a>
              </Link>
            </span>
          </div>
        </div>
      }
    />
  );
};

export default SignUp;
