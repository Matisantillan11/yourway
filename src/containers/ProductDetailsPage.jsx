//hooks
import {useHistory} from 'react-router-dom'
//styles
import '../assets/ProductPage.scss';
//images
import Product1 from '../assets/images/product1.png';

const ProductDetailsPage = () =>{
    const history = useHistory()

    const handleBuy = (e) =>{
        e.preventDefault();
        history.push("/products/checkout");
    }
    return (
        <>
        <div className="product_description">
            <div className="product__page-image-container">
                <img src={Product1} alt="" />
            </div>

            <div className="product_page-information-container">
                <p className="product_page-title">Buzo Thrasher</p>
                <p className="product_page-price">$3600</p>
                <div className="product_page-quantity-container">
                    <p className="product_page-quantity-label">Cantidad</p>
                    <input className="product_page-quantity" placeholder="1"type="number" min="1" max="10" />
                </div>
            </div>

            <button className="product_card-add-to-cart">Agregar al carrito</button>
            <button className="product_card-add-to-cart" onClick={handleBuy}>Comprar</button>
        </div>
        </>
    )
}

export default ProductDetailsPage