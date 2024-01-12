// ./apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://wp.flackinjurylaw.com/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
