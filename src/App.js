import React from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"

import Header from "./components/header/header.component"

function App() {
  return (
		<div>
			<Header/>
			<Switch>
				<Route exact path="/" component={Homepage}/>
				<Route path="/shop" component={ShopPage}/>
				<Route path="/signinsignup" component={SignInAndSignUp}/>
			</Switch>

		</div>
  );
}

export default App;
