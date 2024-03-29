import { useRouter } from "next/router";

import { AuthForm, AuthLayout } from "../../components/auth/";

const SignUp = () => {
  const router = useRouter();

  // const onSubmit = async (data: any, e: any) => {
  //   e.preventDefault();

  //   const { firstName, lastName, email, password } = data;

  //   createUser({
  //     variables: {
  //       firstname: firstName,
  //       lastname: lastName,
  //       email: email,
  //       password: password,
  //     },
  //   }).then((params) => {
  //     router.push("/");
  //   });
  // };

  // if (error) return <p>An error occurred</p>;

  return (
    <AuthLayout>
      <AuthForm onSubmit loading={false} />
    </AuthLayout>
  );
};

export default SignUp;
