import React from 'react'
import PicCard from '../PicCard'
import { Column, Container } from './grid'
import car from '../../images/car.jpeg'
import woman from '../../images/woman.jpeg'
import vr from '../../images/vr-glasses.jpeg'
import cat from '../../images/cats.jpeg'
import upload from '../../images/upload.jpeg'

const Grid = ({ children }: React.PropsWithChildren) => {
	return (
		<Container>
			<Column>
				<PicCard src={car} />
				<PicCard src={woman} />
				<PicCard src={vr} />
				<PicCard src={car} />
			</Column>
			<Column>
				<PicCard src={woman} />
				<PicCard src={vr} />
				<PicCard src={upload} />
				<PicCard src={car} />
			</Column>
			<Column>
				<PicCard src={cat} />
				<PicCard src={cat} />
				<PicCard src={vr} />
				<PicCard src={upload} />
			</Column>
			<Column>
				<PicCard src={woman} />
				<PicCard src={car} />
				<PicCard src={woman} />
				<PicCard src={cat} />
			</Column>
		</Container>
	)
}

export default Grid
