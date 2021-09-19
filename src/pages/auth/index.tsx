import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { LoginUser } from "../../graphql/mutations";
import { AuthForm, AuthLayout } from "../../components/auth/";
import { setAccessToken } from "../../lib/tokenKeeper";

const SignIn = (params) => {
  const router = useRouter();

  // const [loginUser, { loading, error }] = useMutation(LoginUser, {
  //   onCompleted({ response }) {
  //     if (response && response.accessToken) {
  //       setAccessToken(response);
  //       // redirect to the main page
  //     }
  //     router.push("/");
  //   },
  // });

  // const onSubmit = async (payload: any, e: any) => {
  //   e.preventDefault();

  //   const { email, password } = payload;

  //   loginUser({
  //     variables: {
  //       email: email,
  //       password: password,
  //     },
  //   });
  // };

  // if (error) return <p>An error occurred</p>;

  return (
    <AuthLayout>
      <AuthForm onSubmit loading={false} />
    </AuthLayout>
  );
};

export default SignIn;
