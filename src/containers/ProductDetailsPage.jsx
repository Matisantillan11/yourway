//hooks
import {useHistory} from 'react-router-dom'
//styles
import '../assets/ProductDetailsPage.scss';
//images
import Product1 from '../assets/images/product1.png';
import { useEffect, useState } from 'react';

//firebase
import firebase from 'firebase/app';
import 'firebase/firestore'

const ProductDetailsPage = () =>{
    const history = useHistory()
    const [search, setSearch] = useState([]);

    const handleBuy = (e) =>{
        e.preventDefault();
        history.push("/products/checkout");
    }

    useEffect(() => {
        const db = firebase.firestore();
        const product = history.location.search.substr(1);
        const productRef = db.collection("products").doc(`${product}`)

        productRef.get().then(doc =>{
            if(doc.exists){
                setSearch(doc.data())
            } else {
                console.error("[Product details error] no se pudo obtener el producto");
            }
        }).catch(error => console.error(error.message));
        
    }, []);

    return (

        <>
        <div className="product_description">
            <div className="product__page-image-container">
                <img src={search.photoUrl} alt={search.name} />
            </div>

            <div className="product_page-information-container">
                <p className="product_page-title">{search.name}</p>
                <p className="product_page-price">${search.price}</p>
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