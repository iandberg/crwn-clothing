// debate on keeping static data in redux
// but is good for testing

const INITIAL_STATE = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    id: 1,
    linkUrl: 'hats'
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    id: 2,
    linkUrl: 'jackets'
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    id: 3,
    linkUrl: 'sneakers'
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    size: 'large',
	}
]

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type){
		default:
			return state
	}
}

export default directoryReducer
