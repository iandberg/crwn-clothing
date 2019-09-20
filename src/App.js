import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom"
// redirect to prevent signed in user from the sign in page

import { connect } from 'react-redux'

import './App.css';

import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component'
import Header from './components/header/header.component'
// handle confirmation of google signin, at the top app level
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
// setCurrentUser is brought in from actions, to be assigned to an object that jams it into our App component's props
import { setCurrentUser } from './redux/user/user.actions'

class App extends React.Component {

	unsubscribeFromAuth = null // initialized class property

	componentDidMount(){

		const {setCurrentUser} = this.props

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

			if(userAuth){
				const userRef = await createUserProfileDocument(userAuth)

				userRef.onSnapshot(snapshot =>{
					setCurrentUser({
						currentUser: {
							id: snapshot.id,
							...snapshot.data() //spreads out each property here
						}
					})
				})

			}else{
				// this.setState({currentUser: userAuth})
				// replaced with action from user.actions
				setCurrentUser(userAuth)
				// setting to null, essentially
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
					<Route path="/" exact component={Homepage} />
					<Route path="/shop" component={ShopPage} />
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

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
	// pass in actions to props
	// dispatch is an action object passed to every reducer
	// it returns the function we are passing to it
	setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
