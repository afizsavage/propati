import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { startClock } from "../actions";
import Examples from "../components/examples";
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Find</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageInfo={{ pageName: "index" }}>
        <Examples />
        <Link href="/show-redux-state">
          <a>Click to see current Redux State</a>
        </Link>
      </Layout>
    </div>
  );
}
