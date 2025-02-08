import axios from "axios";

export const typeDef = `#graphql
type Album{
    id: ID!
    title: String!
    userId: ID!
    user: User!
    photos: [Photo!]!
  }

`

export const resolvers = {
      Album: {
          user: async(parent: any)=>{
              // here parent is Album Type, consisting of the userId
              const userId = parent.userId
              const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
              return data;
  
          },
          photos: async(parent: any)=>{
              // here parent is Album Type, consisting of the its id (albumID)
              const albumId = parent.id
              const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
              return data;
          },
      },
}