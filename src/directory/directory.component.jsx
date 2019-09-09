import React,{Component} from "react"

import MenuItem from "../components/menu-item.component"
import sections from "./directory.data.js"
import "./directory.styles.scss"

class Directory extends Component{
	constructor(){
		super()

		this.state = {
			sections: sections
		}
	}

	render(){

		return(
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
	}
}

export default Directory
