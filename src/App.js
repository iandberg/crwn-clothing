import React from 'react';
import { Route, Switch } from "react-router-dom"

import './App.css';

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component"
import Header from "./components/header/header.component"
// handle confirmation of google signin, at the top app level
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"


class App extends React.Component {

	constructor(){
		super()

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null // initialized class property

	componentDidMount(){
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapshot =>{
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data() //spreads out each property here
						}
					})
				})

			}else{
				this.setState({currentUser: userAuth}) // setting to null, essentially
			}

		});
		// returns a function that can unsubscribe

	}


	componentWillUnmount(){
		// clean up memory
		this.unsubscribeFromAuth()
	}

	render(){
		return (
			<div>
				<Header />
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
