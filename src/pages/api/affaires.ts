import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

// Create an HTTP link that connects to the Apollo Server.
const httpLink = new HttpLink({
  uri: "http://localhost:4000",
});

// Instantiate the Apollo Client with the HTTP link and a new instance of an InMemoryCache.
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
