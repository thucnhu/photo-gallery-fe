import React, { useEffect, useState } from 'react'
import { getHomePic } from '../api/pictures'
import { PrimaryContainer, Grid } from '../components'
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
			{/* <Labels>
				<LabelItem>Trending</LabelItem>
				<LabelItem>Recent</LabelItem>
			</Labels> */}
			{pictures && <Grid pictures={pictures} />}
		</PrimaryContainer>
	)
}

export default Home
