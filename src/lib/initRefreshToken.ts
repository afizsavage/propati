import { ApolloLink, Observable } from "apollo-link";
import { TokenRefreshLink } from "apollo-link-token-refresh";
import jwtDecode from 'jwt-decode';
import {
ApolloClient,
} from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { getAccessToken, setAccessToken } from "./tokenKeeper";
import { InMemoryCache} from "apollo-cache-inmemory"


const cache: any = new InMemoryCache({});

const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
    let handle: any;
    Promise.resolve(operation)
      .then(operation => {
      // this logic sends the accessToken
      const accessToken = getAccessToken();
      if (accessToken) {
          operation.setContext({
          headers: {
            authorization: `bearer ${accessToken}`
          }
        });
      }
      })
      .then(() => {
      handle = forward(operation).subscribe({
        next: observer.next.bind(observer),
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer)
      });
    })
    .catch(observer.error.bind(observer));

    return () => {
      if (handle) handle.unsubscribe();
    };
  }) 
);

const tokenLink: any = new TokenRefreshLink({
  // specify the field name
  accessTokenField: "accessToken",
  isTokenValidOrUndefined: () => {
    const token = getAccessToken();

    if (!token) {
      return true;
    }

    try {
      // get the expiration from token
      const { expiration }: any = jwtDecode(token);
      if (Date.now() >= expiration * 1000) {
        return false; // if the token hase exprired
      } else {
        return true; // if the token is still valid
      }
    } catch (error) {
      return false;
    }
  },
  fetchAccessToken: () => {
    return fetch(
      "https://propati-backend-service-wn7qviq5da-uc.a.run.app/propati/v1/api/propati/refresh_token", {
      method: 'POST',
      credentials: "include"
      // headers: {
      //   Authorization: `Bearer ${getAccessToken()}`,
      //   'refresh-token': getRefreshToken()
      // }
    });
  },
  handleFetch: accessToken => {
    // set the access token
    setAccessToken(accessToken);
  },
  handleError: err => {
    // full control over handling token fetch Error
    console.warn('Your refresh token is invalid. Try to relogin');
    console.error(err);
  }
});

export const client = new ApolloClient({

  link: ApolloLink.from([
    tokenLink,
    
    onError(({ graphQLErrors, networkError }) => {
      console.log(graphQLErrors)
      console.log(networkError)
    }),
    requestLink,
    new HttpLink({
      uri: "https://propati-backend-service-wn7qviq5da-uc.a.run.app/propati/v1/api",
      // credentials: "include"
    })
  ]),
  cache
})