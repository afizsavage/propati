import { useRouter } from "next/router";

import { AuthForm, AuthLayout } from "../../components/auth/";
const SignIn = (params) => {
  const router = useRouter();

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
