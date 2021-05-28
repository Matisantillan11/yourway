//components
import Header from "../components/Header";
import Footer from '../components/Footer';
import Products from '../components/Products';
import Banners from "../components/Banners";

//styles
import '../assets/Home.scss';

//images
import Hero from '../assets/images/banner1.jpg'

const Home = () =>{
    return (
    <>
        <div className="home">
            <div className="principal-banner">
                <img src={Hero} alt="" />
            </div>
            <Products />
            <Banners />
            
        </div>
    </>
    )
}

export default Home;