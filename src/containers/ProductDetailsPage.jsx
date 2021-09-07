import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';
//custom hook
import { useProductDetails } from '../hooks/useProductDetails';
//styles
import '../assets/ProductDetailsPage.scss';

const ProductDetailsPage = () => {
  const history = useHistory();
  const product = history.location.search.substr(1);
  const { productSearched, getProductDetail } = useProductDetails(product);
  const { addToCart } = useContext(AppContext);
  const [quantity, setQuantity] = useState({ quantity: 1 });

  const handleBuy = (e) => {
    e.preventDefault();
    history.push('/products/checkout');
  };

  const handleChange = (e) => {
    e.preventDefault();
    setQuantity({ [e.target.name]: Number(e.target.value) });
  };

  const handleAddToCart = () => {
    addToCart(productSearched, product, quantity.quantity);
  };

  useEffect(() => {
    getProductDetail(product);
  }, []);

  return (
    <>
      {productSearched && (
        <div className="product_description">
          <div className="product__page-image-container">
            <img src={productSearched.photoUrl} alt={productSearched.name} />
          </div>

          <div className="product_page-information-container">
            {productSearched.stock <= 5 && (
              <p className="stock-alert">
                Solo quedan {productSearched.stock} unidades!
              </p>
            )}
            <p className="product_page-title">{productSearched.name}</p>
            <p className="product_page-price">${productSearched.price}</p>
            <div className="product_page-quantity-container">
              <p className="product_page-quantity-label">Cantidad</p>
              <input
                className="product_page-quantity"
                placeholder={quantity}
                name="quantity"
                type="number"
                min="1"
                max={productSearched.stock}
                value={quantity.quantity}
                onChange={handleChange}
              />
            </div>
          </div>

          <button
            className="product_card-add-to-cart"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
          <button className="product_card-add-to-cart" onClick={handleBuy}>
            Comprar
          </button>
        </div>
      )}
    </>
  );
};

export default ProductDetailsPage;
