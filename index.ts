import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, allResolvers } from './graphql/query';
import bodyParser from 'body-parser';

async function startServer() {
  const app = express();
  app.use(bodyParser.json())
  // Create Apollo Server instance
  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
  });
  await server.start();

  // Attach the Apollo middleware under the /graphql path
  app.use('/graphql', expressMiddleware(server));

  // Add your custom status endpoint
  app.get('/status', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  // Start the Express server
  app.listen(3000, () => {
    console.log('Server is up at http://localhost:3000');
  });
}

startServer();
