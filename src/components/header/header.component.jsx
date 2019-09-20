import React from "react"
import { Link } from "react-router-dom"

import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import { ReactComponent as Logo } from '../../assets/crown.svg'

import "./header.styles.scss"


const Header = ({currentUser}) => (
	<div className="header">

		<Link className="logo-container" to="/">
			<Logo className="logo" />
		</Link>

		<div className="options">
			<Link className='option up' to='/contact'>Contact</Link>
			<Link className='option up' to='/shop'>Shop</Link>
				{
					currentUser ?
						<button className='option up' onClick={()=>auth.signOut()}>Sign Out</button>
						:
						<Link className='option up' to='/signinsignup'>Sign In</Link>
				}

				<CartIcon />
		</div>

		<CartDropdown />

	</div>
)

// getting properties from our reducer
// mapStateToProps is a standard naming
const mapStateToProps = state => ({
	currentUser : state.user.currentUser
})

// state (root) user (has userReducer fn which return the state) currentUser (on the user state)
// we wrap the header component with a higher-order component
// this takes the root reducer's currentUser value and pass it as props to the Header comp.
export default connect(mapStateToProps)(Header)
