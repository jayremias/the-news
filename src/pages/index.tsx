import Head from "next/head";
import { HomePage } from "../components/HomePage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | the.news </title>
      </Head>
      <HomePage />
    </>
  );
}
