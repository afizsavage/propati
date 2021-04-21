import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import localForage from "localforage";

import { LoginUser } from "../../graphql/mutations";
import AuthLayout from "../../components/auth";
import { AuthForm } from "../../components/auth/authform";
import { setAccessToken } from "../../lib/tokenKeeper";

const SignIn = (params) => {
  const router = useRouter();

  const [loginUser, { loading, error }] = useMutation(LoginUser, {
    onCompleted({ response }) {
      if (response && response.accessToken) {
        setAccessToken(response);
      }
      // localForage.setItem("userToken", signIn.accessToken);
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
    <AuthLayout Children={<AuthForm onSubmit={onSubmit} loading={loading} />} />
  );
};

export default SignIn;
