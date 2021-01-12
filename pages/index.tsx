import Head from "next/head";
import Layout from "../components/layout";
export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Find</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageInfo={{ pageName: "index" }}>
        <span className="my-auto text-4xl font-semibold text-purple-700">
          Finder
        </span>
      </Layout>
    </div>
  );
}
