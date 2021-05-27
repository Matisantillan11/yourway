import React from 'react'; 
import {BrowserRouter, Switch, Route} from 'react-router-dom'


//containers 
import Home from '../containers/Home';
const App = () =>{
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}

export default App