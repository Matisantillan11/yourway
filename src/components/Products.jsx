//components
import { useContext } from 'react';
import Product from '../components/Product';
import AppContext from '../context/AppContext';


const Products = () => {
    const { products } = useContext(AppContext);
    
    return(
        <>
        <div className="products_container">
            {products.map((product, i) =>{
               return <Product product = {product} key={i}/> 
            })}
        </div>
        </>
    )
}

export default Products