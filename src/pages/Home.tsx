import React, { useEffect, useState } from 'react'
import { getHomePic } from '../api/pictures'
import { PrimaryContainer, Grid, Filter } from '../components'
import { PictureProps } from '../types/props'

const Home: React.FC = () => {
	const [pictures, setPictures] = useState<PictureProps[]>()

	useEffect(() => {
		getHomePic()
			.then(res => setPictures(res.data))
			.catch(err => console.log(err))
	}, [])

	return (
		<PrimaryContainer gray>
			<Filter>
				<Filter.Label>All</Filter.Label>
				<Filter.Label>Trending</Filter.Label>
				<Filter.Label>Subscribed Topics</Filter.Label>
				<Filter.Label>Following</Filter.Label>
			</Filter>
			{pictures && <Grid pictures={pictures} />}
		</PrimaryContainer>
	)
}

export default Home
