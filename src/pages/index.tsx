import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="apple-mobile-web-app-title" content="Propati" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Propati" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Propati</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100..900"
          rel="stylesheet "
        />
      </Head>
      <body className="font-Lato h-full">
        <Layout pageInfo={{ pageName: "index" }} />
      </body>
    </>
  );
}
