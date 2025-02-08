export const typeDef = `#graphql
 type Post{
    user: User!
    userId: ID!
    id: ID!
    title: String!
    body: String!
    comments: [Comment!]!
  }
`