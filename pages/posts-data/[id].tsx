import Layout from "../components/layout";
import { dupData } from "./ex";

export default function Post({ res }: any) {
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

  const paths = await res.map((post: any) => {
    return { params: { id: `${post.id}` } };
  });

  return {
    paths: paths,
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
