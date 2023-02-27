import { graphql } from "$lib/gql/gql";
export type { GetUserQuery as GetUser } from "$lib/gql/graphql";

export const GET_USER = graphql(/* GraphQL */ `
  query GetUser {
    User(name: "joulev") {
      name
    }
  }
`);
