import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";

import { CreateUser } from "../../graphql/mutations";
import { AuthForm, AuthLayout } from "../../components/auth/";

const SignUp = () => {
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
    <AuthLayout Children={<AuthForm onSubmit={onSubmit} loading={loading} />} />
  );
};

export default SignUp;
