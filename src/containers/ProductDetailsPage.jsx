//hooks
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
//styles
import '../assets/ProductDetailsPage.scss';

import { useProductDetails } from '../hooks/useProductDetails';

const ProductDetailsPage = () => {
  const history = useHistory();
  const product = history.location.search.substr(1);
  const { search, getProductDetail } = useProductDetails(product);

  const handleBuy = (e) => {
    e.preventDefault();
    history.push('/products/checkout');
  };

  useEffect(() => {
    getProductDetail(product);
  }, []);

  return (
    <>
      {search && (
        <div className="product_description">
          <div className="product__page-image-container">
            <img src={search.photoUrl} alt={search.name} />
          </div>

          <div className="product_page-information-container">
            <p className="product_page-title">{search.name}</p>
            <p className="product_page-price">${search.price}</p>
            <div className="product_page-quantity-container">
              <p className="product_page-quantity-label">Cantidad</p>
              <input
                className="product_page-quantity"
                placeholder="1"
                type="number"
                min="1"
                max="10"
              />
            </div>
          </div>

          <button className="product_card-add-to-cart">
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
