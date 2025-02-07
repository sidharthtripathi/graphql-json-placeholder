import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Geo {
    lat:String
    lng:String
  }
  type Company{
    name:String
    catchPhrase:String
    bs:String
  }
  type Address {
    street: String
    city: String
    suite: String
    zipcode: String
    geo: Geo
  }

  type Post{
    user: User
    userId: ID
    id: ID
    title: String
    body: String
  }

  type Todo{
    user: User
    userId: ID
    id: ID
    title: String
    completed: Boolean
  }


  type User {
    id: ID
    name: String
    username: String
    email: String
    address:Address
    phone:String
    website:String
    company:Company
    todos: [Todo]
    posts: [Post]
  }


  type Query {
    users: [User]
    user(id:ID): User
    todos: [Todo]
    todo(id: ID): Todo
    posts: [Post]
    post(id: ID): Post
  }


`;

const resolvers = {
    Query : {
        users: async()=>{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
            return data
        },
        user: async(parent : any,args : {id:number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${args.id}`)
            return data
        },

        todos : async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            return data
        },

        todo: async(parent:any,args:{id:number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/todos/${args.id}`)
            return data
        },

        posts: async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            return data
        },

        post: async(parent:any,args:{id:number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${args.id}`)
            return data
        },

        
    },

    Todo: {
        user: async (parent: any) => {
            // Here, 'parent' is the Todo object that contains a 'userId' property.
            const userId = parent.userId;
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return data;
          }
    },

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
    },


    Post: {
        user: async (parent: any) => {
            // Here, 'parent' is the Post object that contains a 'userId' property.
            const userId = parent.userId;
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return data;
          }
    }


}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{listen:{port : 3000}})

console.log("server is up...")