import React, {useState} from 'react'
import { connect } from 'react-redux'

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

	const [userCredentials, setCredentials] = useState({email: '', password: ''})

	const onChangeHandle = (e)=>{
		const {name, value} = e.target

		setCredentials({...userCredentials, [name] : value }) //spread in all but change specific value called
	}

	const {email, password} = userCredentials

	const handleSubmit = async (e)=>{
		e.preventDefault()
		emailSignInStart(email, password)
	}


	return(
		<div className="sign-in">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>

				<FormInput
					label="Email"
					name="email"
					type="email"
					value={email}
					onChange={onChangeHandle}
					required
				/>

				<FormInput
					label="Password"
					name="password"
					type="password"
					value={password}
					onChange={onChangeHandle}
					required
				/>
					<div className="buttons">
						<CustomButton type="submit"> Submit </CustomButton>
						<CustomButton 
							type="button"
							onClick={googleSignInStart}
							isGoogleSignIn 
						>Sign in with Google</CustomButton>
					</div>
				</form>
			</div>
	)
	
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password})),
})

export default connect(null, mapDispatchToProps)(SignIn)
