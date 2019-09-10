import React from 'react'

import './sign-in.styles.scss'

class SignIn extends React.Component{

	constructor(){
		super()

		this.state = {
			email: '',
			password: '',
		}
	}

	render(){
		return(
			<div className="sign-in">
					<h2>I already have an account</h2>
					<span>Sign in with your email and password</span>
						form here
			</div>
		)
	}
}

export default SignIn
