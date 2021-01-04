import Head from "next/head";
import Layout from "../components/layout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Find</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageInfo={{ pageName: "index" }}></Layout>
    </div>
  );
}
