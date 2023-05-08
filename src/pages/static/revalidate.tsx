import { GetStaticPaths,GetStaticProps } from 'next';

const Revalidate = (props: {number: number}) => {
  return (
    <div>
      <h1>Static Page</h1>

      <p>{props.number}</p>
    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = () => {


//   return {
//     paths:[],
//     fallback:false
//   }
// }

export const getStaticProps: GetStaticProps = async (ctx) =>{


  return {
    revalidate: 10,
    props:{
      number: Math.random()
    }
  }
}

export default Revalidate;