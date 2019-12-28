import React from "react"

import './form-input.styles.scss'

const FormInput = ({label, ...otherProps})=>(
	<div className="group">

			{
				label ? <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>{label}</label> : null
			}

			<input className="form-input" {...otherProps} />
	</div>
)
export default FormInput
