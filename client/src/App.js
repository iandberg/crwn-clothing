import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
// redirect to prevent signed in user from the sign in page

import { connect } from 'react-redux'

// ===================== Reselect =====================
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component'

const App = ({ checkUserSession, currentUser }) => {

	useEffect(()=>{
		checkUserSession();
	}, [checkUserSession]) //only invoke useEffect if checkUserSession changes, which it won't - this just mimics componentDidMount, a dummy property, just to satisfy the empty array 
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/shop" component={ShopPage} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route path="/signinsignup" exact render={()=>{
					if(currentUser){
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

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
	checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
