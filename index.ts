import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs,allResolvers } from './graphql/query';

const server = new ApolloServer({
    typeDefs,
    resolvers:allResolvers,
})

const {url} = await startStandaloneServer(server,{listen:{port : 3000}})

console.log(`server is up at: ${url}`)