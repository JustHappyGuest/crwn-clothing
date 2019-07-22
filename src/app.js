import React from 'react';
import {Route, Switch} from "react-router-dom";

import './app.scss';

import Header from "./components/header";

import HomePage from "./pages/home-page/home-page";
import ShopPage from "./pages/shop-page";
import AuthPage from "./pages/auth-page/auth-page";

const App = () => (
    <div className="app">
        <Header/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/auth" component={AuthPage} />
        </Switch>
    </div>
);

export default App;
