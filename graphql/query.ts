import {merge} from 'lodash'
import {typeDef as Address} from './address'
import { typeDef as User } from './user'
import { typeDef as Post } from './post'
import { typeDef as Comment } from './comment'
import { typeDef as Todo } from './todo'
import { typeDef as Album } from './album'
import { typeDef as Photo } from './photo'
import {resolvers as userResolvers} from './user'
import {resolvers as albumResolvers} from './album'
import {resolvers as commentResolvers} from './comment'
import {resolvers as photoResolvers} from './photo'
import {resolvers as postResolvers} from './post'
import {resolvers as todoResolvers} from './todo'
import axios from 'axios'
const typeDef = `#graphql
type Query {
    users: [User!]!
    user(id:ID!): User!
    todos: [Todo!]!
    todo(id: ID!): Todo!
    posts: [Post!]!
    post(id: ID!): Post!
    comment(id: ID!): Comment!
    comments: [Comment!]
    albums: [Album!]!
    album(id: ID!): Album!
    photos: [Photo!]!
    photo(id: ID!) : Photo!
  }
`

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
}

}

export const allResolvers = merge(resolvers,userResolvers,albumResolvers,commentResolvers,photoResolvers,postResolvers,todoResolvers)

export const typeDefs = [typeDef,User,Address,Post,Comment,Todo,Album,Photo]
