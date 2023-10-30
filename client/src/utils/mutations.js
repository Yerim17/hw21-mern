import { gql } from '@apollo/client';

export const SAVE_BOOKS = gql`
  mutation saveBooks($title: String!, $discreption: String!) {
    createMatchup(title: $title, discreption: $discreption) {
      _id
      title
      discreption
    }
  }
`;

