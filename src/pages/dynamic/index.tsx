import { GetServerSideProps } from 'next';

const index = (props: {number: number}) => {
  return (
    <div>
      <p>{props.number}</p>
    </div>
  );
}


export const getServerSideProps:GetServerSideProps = async (ctx) => {


  return {
    props:{
      number: Math.random()
    }
  }
}

export default index;