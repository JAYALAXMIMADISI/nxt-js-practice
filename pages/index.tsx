import Head from 'next/head';
import Layout, { siteTitle } from './components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from './lib/posts';
import axios from 'axios'
import { dupData } from './posts-data/ex';
import Link from 'next/link';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import InputPage from './posts-data/input'
import React from 'react';


export default function Home() {

  
  // const data=JSON.parse(stylesheet)

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  // const stylesheet = await JSON.stringify(res);


  return (
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        {/* <p>[Your Self Introduction]</p>
        {/* <p>{stylesheet.size}</p> */}
        {/* <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p> */} 
      <Link href={`./posts-data`}>Users</Link>
     
<InputPage/>

      </section>
    </Layout>
    </React.Suspense>
    </RecoilRoot>
  );
}


