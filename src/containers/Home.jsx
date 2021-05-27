//components
import Header from "../components/Header";
import Footer from '../components/Footer';
import Products from '../components/Products';
import Banners from "../components/Banners";

//styles

const Home = () =>{
    return (
    <>
        <div className="home">
            <Header />
            <Products />
            <Banners />
            <Footer />
        </div>
    </>
    )
}

export default Home;