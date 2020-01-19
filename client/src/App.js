import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
// redirect to prevent signed in user from the sign in page

import { connect } from 'react-redux'

// ===================== Reselect =====================
import { createStructuredSelector } from 'reselect'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'

import Header from './components/header/header.component'

import { GlobalStyle } from './global.styles'

import Spinner from './components/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

const Homepage = lazy(() => import('./pages/homepage/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInAndSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'))

const App = ({ checkUserSession, currentUser }) => {

	useEffect(()=>{
		checkUserSession();
	}, [checkUserSession]) //only invoke useEffect if checkUserSession changes, which it won't - this just mimics componentDidMount, a dummy property, just to satisfy the empty array 
	return (
		<div>
			<GlobalStyle />
			<Header />
			<Switch>
				<ErrorBoundary>
					<Suspense fallback={<Spinner />}>
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
					</Suspense>
				</ErrorBoundary>
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
