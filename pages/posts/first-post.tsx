import React from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

export default function FirstPost() {
  return (
    <>
    <Layout>
      <Head>
        <title>First Post Page</title>
        {/* <Script
          src="/images/first-image.svg"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </Head>

      <h1>This is my first post</h1>
      <h2>
        <Link href="/">Back to home</Link>
        <img src="/images/first-image.svg" alt="img" height={100} width={100} />
      </h2>
      </Layout>
    </>
  );
}
