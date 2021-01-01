import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center content-center container mx-auto h-screen">
        <span className="my-auto text-4xl font-semibold text-purple-700">
          Finder
        </span>
      </main>
    </div>
  );
}
