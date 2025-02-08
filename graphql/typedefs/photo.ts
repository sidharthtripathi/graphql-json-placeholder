export const typeDef = `#graphql
type Photo{
    id: ID!
    albumId: ID!
    album: Album!
    title: String!
    url: String!
    thumbnailUrl: String!
  }
`