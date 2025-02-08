export const typeDef = `#graphql
type Album{
    id: ID!
    title: String!
    userId: ID!
    user: User!
    photos: [Photo!]!
  }

`