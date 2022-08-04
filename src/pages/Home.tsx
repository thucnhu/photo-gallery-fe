import React, { useContext, useEffect, useState } from 'react'
import { getHomePic } from '../api/pictures'
import { PrimaryContainer, Grid, Filter } from '../components'
import { FilterProps, PictureProps } from '../types/props'
import AuthContext from '../context/AuthContext'

const Home: React.FC = () => {
	const { auth } = useContext(AuthContext)
	const [all, setAll] = useState<PictureProps[]>()
	const [trending, setTrending] = useState<PictureProps[]>()
	const [subscribed, setSubscribed] = useState<PictureProps[]>()
	const [following, setFollowing] = useState<PictureProps[]>()
	const [filter, setFilter] = useState<FilterProps>('all')

	console.log(auth)

	useEffect(() => {
		getHomePic()
			.then(res => {
				console.log(res.data)
				setAll(res.data.all)
				setTrending(res.data.trending)
				setSubscribed(res.data.subscribed)
				setFollowing(res.data.following)
			})
			.catch(err => console.log(err))
	}, [])

	function handleFilter(state: FilterProps) {
		setFilter(state)
	}

	return (
		<PrimaryContainer gray>
			<Filter>
				<Filter.Label onClick={() => handleFilter('all')}>All</Filter.Label>
				<Filter.Label onClick={() => handleFilter('trending')}>
					Trending
				</Filter.Label>
				<Filter.Label onClick={() => handleFilter('subscribed')}>
					Subscribed Topics
				</Filter.Label>
				<Filter.Label onClick={() => handleFilter('following')}>
					Following
				</Filter.Label>
			</Filter>
			{filter === 'all' && all && <Grid pictures={all} />}
			{filter === 'trending' && trending && <Grid pictures={trending} />}
			{filter === 'all' && subscribed && <Grid pictures={subscribed} />}
			{filter === 'all' && following && <Grid pictures={following} />}
		</PrimaryContainer>
	)
}

export default Home
