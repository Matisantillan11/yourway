//styles
import '../assets/Product.scss'

const Product = () =>{
    return(
        <>
        <div className="product_card">
            <div className="product_card-img"></div>
            <div className="product_card-main">
                <p className="product_card-title">Buzo Trasher</p>
                <p className="product_card-price">$3200</p>
                <button className="product_card-add-to-cart">Agregar al carrito</button>
            </div>
        </div>
        </>
    )
}

export default Product;