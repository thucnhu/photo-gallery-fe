import React from 'react'
import {
	Container,
	Image,
	Description,
	Stats,
	Likes,
	Comments,
} from './picCard'
import { PicCardProps } from '../../types/props'
import { useNavigate } from 'react-router-dom'

const PicCard: React.FC<PicCardProps> = prop => {
	const navigate = useNavigate()

	return (
		<Container onClick={() => navigate(`/pictures/${prop.id.toString()}`)}>
			<Image src={prop.src} alt='image' />
			<Description>{prop.description}</Description>
			<Stats>
				<Likes>{prop.likes}</Likes>
				<Comments>{prop.comments}</Comments>
			</Stats>
		</Container>
	)
}

export default PicCard
