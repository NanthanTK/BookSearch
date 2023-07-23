import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe($token: String!) {
    me {
      _id
      username
      email
      savedBooks {
        _id
        title
        authors
        description
        image
        link
      }
    }
  }
`;