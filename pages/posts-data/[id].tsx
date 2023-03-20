import Layout from '../components/layout';
import { dupData } from './ex';

export default function Post({res}:any) {
    console.log("check paths data",res)
  return <Layout>
     <h1>{res.id} {res.title}</h1>
   
  </Layout>;
}

// export async function getStaticPaths() {
//   // Return a list of possible value for id
//   const res = dupData;
//   const stylesheet = await JSON.stringify(res); // Converts response data to text

//   const paths =res.map((post) => ({
//     params: { id: post.id },
//   }))

//   return { paths, fallback: false }

// }

// function getPostData(id:string){
// return{

// }
// }

export async function getStaticPaths() {


    const response=await fetch('https://jsonplaceholder.typicode.com/posts')
  const res=await response.json()

  const paths=res.map((post:any)=>{
      return {params:{id:`${post.id}`}}
  }) 

  return{
    //   paths:[
    //      { params:{id:"1"}},
    //      { params:{id:"2"}},
    //      { params:{id:"3"}},
    //   ],
    paths,
      fallback:false
  }
  } 

export async function getStaticProps(context:any) {
    const {params}=context
    // console.log("check paths data",paths)
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const res=await response.json()
  


    // const postData = getPostData(params.id);
    return {
      props: {
        res,
      },
    };
  }