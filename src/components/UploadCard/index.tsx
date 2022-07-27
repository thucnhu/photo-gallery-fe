import React from 'react'
import {
	Image,
	Title,
	Description,
	Container,
	ImgContainer,
} from './uploadCard'
import Button from '../Button'
import img from '../../images/upload.jpeg'

const Card: React.FC = () => {
	return (
		<Container>
			<ImgContainer>
				<Image src={img} />
			</ImgContainer>
			<Title>Upload</Title>
			<Description>Images are better than words</Description>
			<Button>Choose image</Button>
		</Container>
	)
}

export default Card
