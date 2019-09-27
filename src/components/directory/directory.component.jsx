import React,{Component} from "react"

import { connect } from 'react-redux'

import MenuItem from "../menu-item/menu-item.component"
import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import "./directory.styles.scss"


const Directory = ({sections})=>(
	<div className="directory-menu">
			{
				this.state.sections.map(({id, ...otherSectionProps})=>{							

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
