import React, { useEffect } from 'react'
import axios from '../../api/axios'
import PicCard from '../PicCard'
import { Column, Container } from './grid'
import { HOME } from '../../constants/routes'
import car from '../../images/car.jpeg'
import woman from '../../images/woman.jpeg'
import vr from '../../images/vr-glasses.jpeg'
import upload from '../../images/upload.jpeg'
import cat from '../../images/cats.jpeg'

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
			<Column>
				<PicCard
					src={car}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={vr}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={car}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
			</Column>
			<Column>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={vr}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={upload}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={car}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
			</Column>
			<Column>
				<PicCard
					src={cat}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={cat}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={vr}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={upload}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
			</Column>
			<Column>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={car}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={cat}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
			</Column>
			<Column>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={car}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={woman}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
				<PicCard
					src={cat}
					description='This is a description that I intentionally made it way too long to see if it will get hidden. Seems like it is still not long enough'
					likes='200'
					comments='200'
				/>
			</Column>
		</Container>
	)
}

export default Grid
