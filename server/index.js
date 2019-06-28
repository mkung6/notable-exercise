import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './typedefs';
import resolvers from './resolvers';

const GRAPHQL_PORT = 4000;
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() =>
    console.log(
        `Server is running on http://localhost:${GRAPHQL_PORT}`
    )
);
