import { gql } from "@apollo/client";

const RegisterUser = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(credentials: { email: $email, password: $password }) {
      token
    }
  }
`;

export default RegisterUser;
