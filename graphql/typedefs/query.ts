import {typeDef as Address} from './address'
import { typeDef as User } from './user'
import { typeDef as Post } from './post'
import { typeDef as Comment } from './comment'
import { typeDef as Todo } from './todo'
import { typeDef as Album } from './album'
import { typeDef as Photo } from './photo'
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

export const typeDefs = [typeDef,User,Address,Post,Comment,Todo,Album,Photo]
