//hooks
import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

//styles
import '../assets/Product.scss';
import AppContext from '../context/AppContext';

const Product = ({ product }) => {
  const history = useHistory();
  const { addToCart } = useContext(AppContext);
  const ToProducts = (e) => {
    e.preventDefault();
    history.push(`/products/details?${product.id}`);
  };

  const handleAddToCart = () => {
    addToCart(product.info, product.id);
  };

  return (
    <>
      <div className="product_card" key={product.id}>
        <div className="product_card-img" onClick={ToProducts}>
          <img src={product.info.photoUrl} alt={product.name} />
        </div>
        <div className="product_card-main">
          <p className="product_card-title">{product.info.name}</p>
          <p className="product_card-price">${product.info.price}</p>
          <button
            className="product_card-add-to-cart"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        </div>

        <p className="stock"> Stock {product.info.stock}</p>
      </div>
    </>
  );
};

export default Product;
