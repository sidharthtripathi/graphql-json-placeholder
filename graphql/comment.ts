import axios from "axios";

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

export const resolvers = {
  Comment: {
    post: async (parent: any) => {
        // Here, 'parent' is the Comment object that contains a 'postId' property.
        const postId = parent.postId;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        return data;
      }
},
}