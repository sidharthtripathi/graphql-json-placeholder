import axios from "axios";

export const typeDef = `#graphql
type Todo{
    user: User!
    userId: ID!
    id: ID!
    title: String!
    completed: Boolean!
  }
`

export const resolvers = {
  Todo: {
    user: async (parent: any) => {
        // Here, 'parent' is the Todo object that contains a 'userId' property.
        const userId = parent.userId;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return data;
      }
},
}