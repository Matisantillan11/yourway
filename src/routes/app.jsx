import React from 'react'; 
import { BrowserRouter, Switch,  Route } from 'react-router-dom'

//components
import Layout from '../components/Layout';

//containers 
import Home from '../containers/Home';
import ProductPage from '../containers/ProductPage';

const App = () =>{
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/products" component={ProductPage}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App