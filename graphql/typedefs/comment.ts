export const typeDef = `#graphql
 
 type Comment{
    postId: ID!
    id: ID!
    name: String!
    email: String!
    body: String!
    post: Post!
  }
`