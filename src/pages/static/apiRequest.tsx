import { GetStaticPaths, GetStaticProps } from 'next';

interface Product {
  id: number;
  name: string;
  price: number;
}

const apiRequest = (props: { products: Array<Product> }) => {

  return (
    <div>
      {props.products.map((product) => {
          return (
            <div key={product.id}>
              <h1>{product.name}</h1>
              <p>{product.price}</p>
            </div>
          );
        })}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) =>{
  const products = await fetch('http://localhost:3000/api/static')
    .then((res: Response): Promise<Array<Product>> => res.json())
    .then((data: Array<Product>): Array<Product> => data);

  return {
    props:{
      products
    }
  }
}

export default apiRequest;