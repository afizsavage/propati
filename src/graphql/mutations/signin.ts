import { gql } from "@apollo/client";

const LoginUser = gql`
  mutation signIn($email: String, $password: String!) {
    signIn(credentials: { email: $email, password: $password }) {
      accessToken
    }
  }
`;

export default LoginUser;
