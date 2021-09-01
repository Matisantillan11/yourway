//components
import { useContext } from 'react';
import Product from '../components/Product';
import AppContext from '../context/AppContext';

const Products = () => {
  const {
    state: { products, loading },
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
