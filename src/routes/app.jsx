import React from 'react'; 
import { BrowserRouter, Switch,  Route } from 'react-router-dom'

//components
import Layout from '../components/Layout';

//containers 
import Home from '../containers/Home';
import ProductDetailsPage from '../containers/ProductDetailsPage';
import ProductsPage from '../containers/ProductsPage';
import Checkout from '../containers/Checkout';

const App = () =>{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/products" component={ProductsPage}/>
                    <Route exact path="/products/Details" component={ProductDetailsPage}/>
                    <Route exact path="/products/checkout" component={Checkout}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App