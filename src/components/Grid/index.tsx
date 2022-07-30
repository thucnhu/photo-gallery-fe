import React, { useEffect } from 'react'
import axios from '../../api/axios'
import PicCard from '../PicCard'
import { Column, Container } from './grid'
import { HOME } from '../../constants/routes'

const Grid = ({ children }: React.PropsWithChildren) => {
	useEffect(() => {
		axios
			.get(HOME)
			.then(res => {
				console.log(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	}, [])

	return (
		<Container>
			{/* <Column>
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
			<Column>
				<PicCard src={woman} />
				<PicCard src={car} />
				<PicCard src={woman} />
				<PicCard src={cat} />
			</Column> */}
		</Container>
	)
}

export default Grid
