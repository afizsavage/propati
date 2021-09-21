import "../globals.css";
import "../../public/css/tailwind.css";

function MyApp({ Component, pageProps, apolloClient }) {
  return <Component {...pageProps} />;
}

// export default WithApollo(MyApp);
export default MyApp;
