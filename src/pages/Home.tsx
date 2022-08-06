import React, { useEffect, useReducer } from 'react'
import { getHomePic } from '../api/pictures'
import { Container, Grid, Filter } from '../components'
import { AllPicturesProps } from '../types/props'

const initialState = {
	data: {
		all: [],
		trending: [],
		subscribed: [],
		following: [],
	},
	focusAll: true,
	focusTrending: false,
	focusSubscribed: false,
	focusFollowing: false,
}

type HomeState = {
	data: AllPicturesProps
	focusAll: boolean
	focusTrending: boolean
	focusSubscribed: boolean
	focusFollowing: boolean
}

type HomeAction =
	| { type: 'all' | 'trending' | 'subscribed' | 'following' }
	| { type: 'render'; payload: AllPicturesProps }

function homeReducer(state: HomeState, action: HomeAction) {
	switch (action.type) {
		case 'all':
			return {
				...state,
				focusAll: true,
				focusTrending: false,
				focusSubscribed: false,
				focusFollowing: false,
			}
		case 'trending':
			return {
				...state,
				focusAll: false,
				focusTrending: true,
				focusSubscribed: false,
				focusFollowing: false,
			}
		case 'subscribed':
			return {
				...state,
				focusAll: false,
				focusTrending: false,
				focusSubscribed: true,
				focusFollowing: false,
			}
		case 'following':
			return {
				...state,
				focusAll: false,
				focusTrending: false,
				focusSubscribed: false,
				focusFollowing: true,
			}
		case 'render':
			return { ...state, data: action.payload }
		default:
			return state
	}
}

const Home: React.FC = () => {
	const [state, dispatch] = useReducer(homeReducer, initialState)
	const { data, focusAll, focusTrending, focusSubscribed, focusFollowing } =
		state

	useEffect(() => {
		getHomePic()
			.then(res => dispatch({ type: 'render', payload: res.data }))
			.catch(err => alert('Error loading images. Please try again later.'))
	}, [])

	return (
		<>
			<Filter>
				<Filter.Label
					focus={focusAll}
					onClick={() => dispatch({ type: 'all' })}
				>
					All
				</Filter.Label>
				<Filter.Label
					focus={focusTrending}
					onClick={() => dispatch({ type: 'trending' })}
				>
					Trending
				</Filter.Label>
				<Filter.Label
					focus={focusSubscribed}
					onClick={() => dispatch({ type: 'subscribed' })}
				>
					Subscribed Topics
				</Filter.Label>
				<Filter.Label
					focus={focusFollowing}
					onClick={() => dispatch({ type: 'following' })}
				>
					Following
				</Filter.Label>
			</Filter>
			<Container.Primary gray>
				{focusAll && <Grid pictures={data.all} />}
				{focusFollowing && <Grid pictures={data.following} />}
				{focusSubscribed && <Grid pictures={data.subscribed} />}
				{focusTrending && <Grid pictures={data.trending} />}
			</Container.Primary>
		</>
	)
}

export default Home
