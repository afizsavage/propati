import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import fetch from "isomorphic-unfetch";
import localForage from "localforage";

import { isBrowser } from "./isBrowser";

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
  (global as any).fetch = fetch;
}

function create(initialState: any) {
  const httpLink = createHttpLink({
    uri:
      "https://propati-backend-service-wn7qviq5da-uc.a.run.app/propati/v1/api",
    // credentials: 'include'
  });

  // return the authorization token when making any request
  const authLink = setContext((_, { headers }) => {
    // get the token

    function getToken() {
      return localForage
        .getItem("userToken")
        .then((value) => {
          return {
            headers: {
              ...headers,
              authorization: value ? value : "",
            },
          };
        })
        .catch((error) => {}); // handle errors;
    }

    return getToken();
  });

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disable forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export default function initApollo(initialState: any) {
  if (!isBrowser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
