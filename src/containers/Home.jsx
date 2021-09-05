//components
import Products from '../components/Products';
import Banners from '../components/Banners';

//hooks
import initialState from '../initialState';
//styles
import '../assets/Home.scss';
import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { LoaderCustom } from '../components/Loader';

const Home = () => {
  const {
    state: { loading },
  } = useContext(AppContext);
  return (
    <>
      {loading && <LoaderCustom />}
      <div className="home">
        <div className="principal-banner"></div>
        <Products products={initialState.products} />
        <Banners />
      </div>
    </>
  );
};

export default Home;
