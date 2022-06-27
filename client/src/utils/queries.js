import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      SavedBooks {
        bookId
        authors
        image
        link
        title
        description
      }
    }
  }
`;
