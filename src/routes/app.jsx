import React from 'react'; 
import { BrowserRouter, Switch,  Route } from 'react-router-dom'

//components
import Layout from '../components/Layout';

//containers 
import Home from '../containers/Home';
import ProductDetailsPage from '../containers/ProductDetailsPage';
import ProductsPage from '../containers/ProductsPage';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
//hooks
import AppContext from '../context/AppContext.js';
import useInitialState from '../hooks/useInitialState.js';
import Payment from '../containers/Payment';

const App = () =>{
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route exact path="/products" component={ProductsPage}/>
                        <Route exact path="/products/details" component={ProductDetailsPage}/>
                        <Route exact path="/products/checkout" component={Checkout}/>
                        <Route exact path="/products/checkout/information" component={Information}/>
                        <Route exact path="/products/checkout/information/payment" component={Payment}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App