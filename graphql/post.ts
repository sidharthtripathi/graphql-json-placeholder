import axios from "axios";

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

export const resolvers = {
  Post: {
    user: async (parent: any) => {
        // Here, 'parent' is the Post object that contains a 'userId' property.
        const userId = parent.userId;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        return data;
      }
},
}