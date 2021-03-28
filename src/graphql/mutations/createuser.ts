import { gql } from "@apollo/client";

const CreateUser = gql`
  mutation createUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      user: {
        firstName: $firstname
        lastName: $lastname
        email: $email
        password: $password
      }
    ) {
      id
    }
  }
`;

export default CreateUser;
