export const typeDef = `#graphql
type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    address:Address!
    phone:String!
    website:String!
    company:Company!
    todos: [Todo!]!
    posts: [Post!]!
    albums: [Album!]!
  }

`