//components
import Products from '../components/Products';
import Banners from "../components/Banners";

//styles
import '../assets/Home.scss';

//images
import Hero from '../assets/images/banner1.jpg'
//hooks
import initialState from "../initialState";

const Home = () =>{
    return (
    <>
        <div className="home">
            <div className="principal-banner">
                
            </div>
            <Products products = {initialState.products}/>
            <Banners />
            
        </div>
    </>
    )
}

export default Home;