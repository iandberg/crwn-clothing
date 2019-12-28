import React from "react"

import { connect } from 'react-redux'

// pages/components
import MenuItem from "../menu-item/menu-item.component"

// selectors
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

// styles
import "./directory.styles.scss"

const Directory = ({sections})=>(
	<div className="directory-menu">
			{
				sections.map(({id, ...otherSectionProps})=>{							

					return <MenuItem 
						key={id} 
						{...otherSectionProps}
					/>
				})

			}
	</div>
)

const mapStateToProps = state => ({
	sections : selectDirectorySections(state)
})

export default connect(mapStateToProps)(Directory)
