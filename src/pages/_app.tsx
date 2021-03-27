import WithApollo from "../lib/ withApollo";
import "../globals.css";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps, apolloClient }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default WithApollo(MyApp);
