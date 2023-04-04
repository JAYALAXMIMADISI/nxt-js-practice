import Link from "next/link";
import React from "react";
import { dupData } from "./ex";

export default function PostList({ res }: any) {
  return (
    <>
      {res.map((item: any) => {
        return (
          <>
           <Link href={`posts-data/${item.id}`} passHref> <h1>{item.id} {item.title}</h1></Link>
           
          </>
        );
      })}
    </>
  );
}

export async function getStaticProps() {

  const response=await fetch('https://jsonplaceholder.typicode.com/posts')
  const res=await response.json()


  return {
    props: {
      res, 
    },
  };
}
