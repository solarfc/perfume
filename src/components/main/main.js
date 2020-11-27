import React from "react";
import {Route, Switch} from "react-router-dom";
import {Card, Cart, Home} from "../pages";

const Main = (props) => {
    return (
       <main role="main">
           <Switch>
               <Route exact path="/" component={Home}></Route>
               <Route path="/cart" component={Cart}></Route>
               <Route path="/card/:id?" component={Card}></Route>
           </Switch>
       </main>
    )
};

export default Main;