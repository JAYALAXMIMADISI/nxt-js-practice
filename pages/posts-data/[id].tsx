import Layout from "../components/layout";
import { dupData } from "./ex";

export default function Post({ res }: any) {
  console.log("check paths data", res);
  return (
    <Layout>
      <h1>
        {res.id} {res.title}
      </h1>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await response.json();

  const paths = res.map((post: any) => {
    return { params: { id: `${post.id}` } };
  });

  return {
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const res = await response.json();

  return {
    props: {
      res,
    },
  };
}
