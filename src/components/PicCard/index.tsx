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
import { FiHeart } from 'react-icons/fi'
import { BiCommentDetail } from 'react-icons/bi'

const PicCard: React.FC<PicCardProps> = prop => {
	const navigate = useNavigate()

	return (
		<Container onClick={() => navigate(`/pictures/${prop.id.toString()}`)}>
			<Image src={prop.src} alt='image' />
			<Description>{prop.description}</Description>
			<Stats>
				<Likes>
					<FiHeart style={{ marginRight: '0.4rem' }} /> {prop.likes_count}
				</Likes>
				<Comments>
					<BiCommentDetail style={{ marginRight: '0.4rem' }} />
					{prop.comments_count}
				</Comments>
			</Stats>
		</Container>
	)
}

export default PicCard
