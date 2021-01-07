import Head from "next/head";
import Layout from "../components/layout";
export default function Home() {
  return (
    <div>
      <Head>
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
