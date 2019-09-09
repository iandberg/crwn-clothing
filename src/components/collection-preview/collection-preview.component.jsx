import React from "react"

import "./collection-preview.styles.scss"

import CollectionItem from "../collection-item/collection-item.component"

const CollectionPreview = ({title, items})=>{

	//Downside: we have to render all the items everytime CollectionPreview is rendered 
	return(
		<div className="collection-preview">
				<h1 className="title">{title.toUpperCase()}</h1>
				<div className="preview">
						{
							//the filter returns an array of just first 4 items
							items
								.filter((item,indx)=>indx < 4)
								.map(({id, ...otherProps})=>(
									<CollectionItem key={id} {...otherProps} />
							))
						}
				</div>
		</div>
	)
}

export default CollectionPreview
