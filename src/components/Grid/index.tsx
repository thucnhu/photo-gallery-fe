import React, { useEffect, useState } from 'react'
import PicCard from '../PicCard'
import { Column, Container } from './grid'
import { SERVER_BASE_URL } from '../../constants/routes'
import { getHomePic } from '../../api/pictures'
import { PictureProps } from '../../types/props'

const Grid: React.FC = () => {
	const [pictures, setPictures] = useState<PictureProps[]>()
	const NUM_COL = 5
	let numPicPerCol = 0

	useEffect(() => {
		getHomePic()
			.then(res => setPictures(res.data))
			.catch(err => console.log(err))
	}, [])

	if (pictures?.length !== undefined)
		numPicPerCol = Math.round(pictures?.length / NUM_COL)

	const picCards = pictures?.map(pic => (
		<PicCard
			key={pic.id}
			id={pic.id}
			src={SERVER_BASE_URL + pic.img_path}
			description={pic.description}
			likes='200'
			comments='200'
		/>
	))

	return (
		<Container>
			<Column>{picCards?.slice(numPicPerCol * 0, numPicPerCol * 1)}</Column>
			<Column>{picCards?.slice(numPicPerCol * 1, numPicPerCol * 2)}</Column>
			<Column>{picCards?.slice(numPicPerCol * 2, numPicPerCol * 3)}</Column>
			<Column>{picCards?.slice(numPicPerCol * 3, picCards.length)}</Column>
		</Container>
	)
}

export default Grid
