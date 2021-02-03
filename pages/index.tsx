import Head from "next/head";
import Layout from "../components/layout";
export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Propati</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-Lato">
        <Layout pageInfo={{ pageName: "index" }}></Layout>
      </body>
    </div>
  );
}
