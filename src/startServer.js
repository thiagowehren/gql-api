import { ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
// import { PubSub } from 'graphql-subscriptions';
import mongoose from 'mongoose';

async function startServer ({typeDefs, resolvers}) {
  mongoose.connect('mongodb://localhost:27017/graphql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // const pubsub = new PubSub();
  const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
    listen: { port: 3333 },
  });
  console.log(`Server ready at: ${url}`);
};

export default startServer;