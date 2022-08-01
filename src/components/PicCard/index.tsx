import React from 'react'
import {
	Container,
	Image,
	ImgContainer,
	Description,
	Stats,
	Likes,
	Comments,
} from './picCard'
import { PicCardProp } from '../../types/props'
import { useNavigate } from 'react-router-dom'

const PicCard: React.FC<PicCardProp> = prop => {
	const navigate = useNavigate()

	return (
		<Container onClick={() => navigate(`/pictures/${prop.id.toString()}`)}>
			<ImgContainer>
				<Image src={prop.src} alt='image' />
			</ImgContainer>
			<Description>{prop.description}</Description>
			<Stats>
				<Likes>{prop.likes}</Likes>
				<Comments>{prop.comments}</Comments>
			</Stats>
		</Container>
	)
}

export default PicCard
