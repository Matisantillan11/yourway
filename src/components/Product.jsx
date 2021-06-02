//hooks
import { useHistory } from 'react-router-dom'

//styles
import '../assets/Product.scss'
//images
import Product1 from '../assets/images/product1.png'
const Product = ({ product }) =>{
    const history = useHistory()

    const ToProducts = (e) =>{
        e.preventDefault();
        history.push("/products/details")
    }

    

    return(
        <>
        <div className="product_card" onClick = {ToProducts} >
            <div className="product_card-img"><img src={Product1} alt={product.name}/></div>
            <div className="product_card-main">
                <p className="product_card-title">{product.info.name}</p>
                <p className="product_card-price">${product.info.price}</p>
                <button className="product_card-add-to-cart">Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default Product;