import { GetStaticPaths,GetStaticProps } from 'next';

const path = (props: {data: string}) => {
  return (
    <div>
      <p>{props.data}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  const ids = await fetch('http://localhost:3000/api/static/ids')
    .then((res: Response): Promise<Array<string>> => res.json())
    .then((data: Array<string>): Array<string> => data);

  const paths = ids.map((id) => ({ params: { id: String(id) } }));

  return {
    // paths: [
    //   { params: { id: '1' } },
    //   { params: { id: '2' } },
    //   { params: { id: '3' } },
    // ],
    paths,
    fallback:false
  }
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx || !ctx.params) {
    return {
      redirect: {
        destination: '/static',
        permanent: false,
      },
    }
  }

  const data = await fetch(`http://localhost:3000/api/static/path${ctx.params.id}`)
    .then((res: Response): Promise<string> => res.json())
    .then((data: string): string => data);

  return {
    props:{
      data
    }
  }
}

export default path;