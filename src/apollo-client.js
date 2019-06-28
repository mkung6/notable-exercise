import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const GRAPHQL_URI = 'localhost:4000';
const httpLink = new HttpLink({
    uri: `http://${GRAPHQL_URI}`
});

export default new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});
