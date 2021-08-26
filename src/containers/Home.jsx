//components
import Products from '../components/Products';
import Banners from '../components/Banners';

//hooks
import initialState from '../initialState';
//styles
import '../assets/Home.scss';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="principal-banner"></div>
        <Products products={initialState.products} />
        <Banners />
      </div>
    </>
  );
};

export default Home;
