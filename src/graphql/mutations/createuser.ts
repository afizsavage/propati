import { gql } from "@apollo/client";

const CreateUser = gql`
  mutation createUser(
    $firstname: String
    $lastname: String
    $email: String
    $password: String
  ) {
    createUser(
      user: {
        firstname: $firstname
        lastname: $lastname
        email: $email
        password: $password
      }
    )
  }
`;

export default CreateUser;
