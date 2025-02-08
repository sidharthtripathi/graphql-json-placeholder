import axios from "axios";

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

export const resolvers = {
     User: {
          posts: async (parent: any) => {
              // Here, 'parent' is the User object that contains a 'userId' property.
              const userId = parent.id;
              const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
              return data;
            },
          todos: async (parent: any) => {
              // Here, 'parent' is the User object that contains a 'userId' property.
              const userId = parent.id;
              const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
              return data;
            },
          albums: async (parent: any) => {
              // Here, 'parent' is the User object that contains a 'userId' property.
              const userId = parent.id;
              const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
              return data;
            },
      },
}