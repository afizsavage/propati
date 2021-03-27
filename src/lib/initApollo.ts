import { ApolloClient, InMemoryCache, NormalizedCacheObject } from 'apollo-boost'
import { createHttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from "isomorphic-unfetch";
import { isBrowser } from './isBrowser'
// import { NormalizedCacheObject } from '@apollo/react-hooks';

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

// Polyfill fetch() on the server (used by apollo-client)
if (!isBrowser) {
    (global as any).fetch = fetch
}

interface IOptions {
    getToken: () => string
}

function create (initialState : any, { getToken }: IOptions) {
    const httpLink = createHttpLink({
        uri: 'https://seamply-graphql-sx4hvhyeva-uc.a.run.app/api',
        // credentials: 'include'
    })

    // return the authorization token when making any request
    const authLink = setContext((_, { headers }) => {
        // get the token
        const token = getToken()
        return {
            headers: {
                ...headers,
                authorization: token ? token : ''
            }
        };
    });

    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disable forceFetch on the server (so queries are only run once)
        link: authLink.concat(httpLink),
        cache: new InMemoryCache().restore(initialState || {})
    });
}

export default function initApollo(initialState: any, options: IOptions) {

    if (!isBrowser) {
        return create(initialState, options);
    }

    // Reuse client on the client-side
    if (!apolloClient) {
        apolloClient = create(initialState, options);
    }

    return apolloClient
}