import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

// pages/components
import CollectionPreview from "../collection-preview/collection-preview.component"

// selectors
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'

// styles
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections, match})=>{

	return(
		<div className="collections-overview">
				{
					collections.map(({id, ...otherProps})=>{
						return <CollectionPreview key={id} {...otherProps}/>
					})
				}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
