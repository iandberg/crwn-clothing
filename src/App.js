import React from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import Header from "./components/header/header.component"
// handle confirmation of google signin, at the top app level
import {auth} from "./firebase/firebase.utils"


class App extends React.Component {

	constructor(){
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null

	componentDidMount(){
		//firebase stores logged in user - when user changes, we add to state - persists across session
		//firebase.google keeps track
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			//open subscription, connection is open always checking in with firebase backend
			//but we need to clean up on unmount
			this.setState({currentUser: user})
		});
		// returns a function that can unsubscribe
	}

	componentWillUnmount(){
		this.unsubscribeFromAuth()
	}

	render(){
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signinsignup" component={SignInAndSignUp} />
				</Switch>

			</div>
		);
	}
}

export default App;
