import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
// redirect to prevent signed in user from the sign in page

import { connect } from 'react-redux'

// ===================== Reselect =====================
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'


class App extends React.Component {

	unsubscribeFromAuth = null // initialized class property

	componentWillUnmount(){
		// clean up memory
		this.unsubscribeFromAuth()
	}

	render(){
		return (
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route path="/signinsignup" exact render={()=>{
							if(this.props.currentUser){
								return <Redirect to="/"/>
							}else{
								return <SignInAndSignUp/>
							}
						}
					} />
				</Switch>

			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})


export default connect(mapStateToProps)(App);
