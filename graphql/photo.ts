import axios from "axios";

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

export const resolvers = {
  Photo: {
    album: async(parent: any)=>{
        // here parent is Photo Type, consisting of the albumId
        const albumId = parent.albumId
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
        return data;

    }
},
}