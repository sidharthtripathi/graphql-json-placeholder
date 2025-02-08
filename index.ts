import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import axios from 'axios';
import { typeDefs } from './graphql/typedefs/query';

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

        comment: async(parent:any,args:{id:number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments/${args.id}`)
            return data
        },
        comments: async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
            return data
        },
        albums: async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/albums`)
            return data
        },
        album: async(parent:any,args:{id:number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/albums/${args.id}`)
            return data
        },
        photos: async()=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
            return data
        },
        photo: async(parent: any, args: {id: number})=>{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos/${args.id}`)
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
        albums: async (parent: any) => {
            // Here, 'parent' is the User object that contains a 'userId' property.
            const userId = parent.id;
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
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
    },

    Comment: {
        post: async (parent: any) => {
            // Here, 'parent' is the Comment object that contains a 'postId' property.
            const postId = parent.postId;
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            return data;
          }
    },

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

    Photo: {
        album: async(parent: any)=>{
            // here parent is Photo Type, consisting of the albumId
            const albumId = parent.albumId
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}`);
            return data;

        }
    },

  


}


const server = new ApolloServer({
    typeDefs,
    resolvers
})

const {url} = await startStandaloneServer(server,{listen:{port : 3000}})

console.log("server is up...")