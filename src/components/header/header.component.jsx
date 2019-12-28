import React from "react"
import { connect } from 'react-redux'

// pages/components
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

// selectors
import { createStructuredSelector } from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart } from '../../redux/user/user.actions'

// styles
import { 
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from './header.styles'

// assets
import { ReactComponent as Logo } from '../../assets/crown.svg'


const Header = ({currentUser, hidden, signOutStart}) => (
	<HeaderContainer>

		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>

		<OptionsContainer>
			<OptionLink to='/contact'>Contact</OptionLink>
			<OptionLink to='/shop'>Shop</OptionLink>
				{
					currentUser ?
						<OptionLink as='button' onClick={signOutStart}>Sign Out</OptionLink>
						:
						<OptionLink to='/signinsignup'>Sign In</OptionLink>
				}

				<CartIcon />
		</OptionsContainer>
			{ hidden ? null : <CartDropdown /> }

	</HeaderContainer>
)

// getting properties from our reducer
// mapStateToProps is a standard naming
const mapStateToProps = createStructuredSelector({
	currentUser : selectCurrentUser,
	hidden : selectCartHidden
})

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})

// state (root) user (has userReducer fn which return the state) currentUser (on the user state)
// we wrap the header component with a higher-order component
// this takes the root reducer's currentUser value and pass it as props to the Header comp.
export default connect(mapStateToProps, mapDispatchToProps)(Header)
