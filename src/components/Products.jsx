//components
import { useContext } from 'react';
import Product from '../components/Product';
import AppContext from '../context/AppContext';
import { LoaderCustom } from './Loader';

const Products = () => {
  const {
    state: { products },
  } = useContext(AppContext);

  return (
    <>
      <div className="products_container">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </>
  );
};

export default Products;
