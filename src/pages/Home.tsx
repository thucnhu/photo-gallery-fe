import React, { useEffect, useState } from 'react'
import { getHomePic } from '../api/pictures'
import { PrimaryContainer, Grid, Filter } from '../components'
import { FilterProps, PictureProps } from '../types/props'

const Home: React.FC = () => {
	const [all, setAll] = useState<PictureProps[]>()
	const [trending, setTrending] = useState<PictureProps[]>()
	const [subscribed, setSubscribed] = useState<PictureProps[]>()
	const [following, setFollowing] = useState<PictureProps[]>()
	const [filter, setFilter] = useState<FilterProps>('all')

	useEffect(() => {
		getHomePic()
			.then(res => {
				setAll(res.data.all)
				setTrending(res.data.trending)
				setSubscribed(res.data.subscribed)
				setFollowing(res.data.following)
			})
			.catch(err => alert('Error loading images. Please try again later.'))
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
			{filter === 'subscribed' && subscribed && (
				<Grid pictures={subscribed} />
			)}
			{filter === 'following' && following && <Grid pictures={following} />}
		</PrimaryContainer>
	)
}

export default Home
