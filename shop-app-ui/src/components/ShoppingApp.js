import React,{Component} from 'react'
import ListUsersComponent from './ListUsersComponent'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListCartComponent from "./ListCartComponent";
import Navigation from "./Navigation";

class ShoppingApp extends Component{
    render() {
        return(
            <Router>
            <div>
                <div>
                    <h1>
                        Shopping Cart App
                    </h1>
                    <Navigation></Navigation>
                </div>
                <Switch>
                    <Route path={'/'} exact component={ListUsersComponent}/>
                    <Route path={'/:userId/cart'} component={ListCartComponent}/>
                </Switch>
            </div>
            </Router>

        );
    }
}

export  default ShoppingApp
